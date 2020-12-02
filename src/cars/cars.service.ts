import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car, CarDocument } from '../mongo/cars';
import { InsertCarDto } from './dtos/insert-car.dto';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Car.name)
    private carsModel: Model<CarDocument>,
  ) {}

  async getCars() {
    const cars = await this.carsModel.find({});
    console.log(cars);
    return cars;
  }

  async insertCar(car: InsertCarDto) {
    return this.carsModel.create({
      year: car.year,
      vehicle: car.vehicle,
      ratings: [],
    });
  }

  async insertCarRating(carId: number, rating: number) {
    return this.carsModel.update(
      { _id: carId },
      { $push: { ratings: rating } },
    );
  }

  async getRatings(carId: number) {
    return this.carsModel.find({ _id: carId }, { _id: 0, ratings: 1 });
  }

  async getAggregatedRating(carId: number) {
    const result = await this.carsModel.find(
      { _id: carId },
      { _id: 0, ratings: 1 },
    );
    console.log(result);
    return result;
  }
}
