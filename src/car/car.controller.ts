import { Controller, Get, Param } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('car')
export class CarController {

    constructor(private carService: CarService){}

    @Get("/:vin")
    getCarByVin(@Param("vin") vin: string){
       return this.carService.getCarByVin(vin);
    }
}
