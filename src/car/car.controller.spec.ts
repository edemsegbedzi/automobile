import { Test, TestingModule } from '@nestjs/testing';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarDto } from './dto/car.dto';


describe("car controller tests", () => {

  let carController: CarController;
  let carService: CarService;

  beforeAll( async () => {
    const testModule = await Test.createTestingModule( ({
      controllers: [CarController],
      providers: [CarService]
    })).compile();

    carController = testModule.get<CarController>(CarController);
    carService = testModule.get<CarService>(CarService);
  })

  test("should get car by vin",() => {
    //given
    const car = new CarDto("", "Honda Civic", 2018);

    //when 
    carService.getCarByVin =  jest.fn( (vin: string) => car);

    //then
    expect(carController.getCarByVin("")).toBe(car);
  })

})