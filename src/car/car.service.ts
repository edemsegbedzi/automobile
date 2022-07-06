import { Injectable } from '@nestjs/common';
import { CarDto } from './dto/car.dto';

@Injectable()
export class CarService {

    getCarByVin(vin: String): CarDto{
        return new CarDto("124","Honda Civic",2018);
    }
}
