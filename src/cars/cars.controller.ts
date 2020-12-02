import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
import { InsertCarDto } from './dtos/insert-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  createCar(@Body() car: InsertCarDto) {
    return this.carsService.insertCar(car);
  }

  @Get()
  getCars() {
    return this.carsService.getCars();
  }

  @Get('ratings/:id')
  getRatings(@Param() params) {
    return this.carsService.getRatings(params.id);
  }

  @Post('ratings/:id/:rating')
  insertRating(@Param() params) {
    return this.carsService.insertCarRating(params.id, params.rating);
  }

  @Get('average-rating/:id')
  getAverageRating(@Param() params) {
    return this.carsService.getAggregatedRating(params.id);
  }
}
