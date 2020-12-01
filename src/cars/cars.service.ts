import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cars, CarsDocument } from '../mongo/cars';
import { InsertCarDto } from './dtos/insert-car.dto';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Cars.name)
    private carsModel: Model<CarsDocument>,
  ) {}

  async getCars() {
    return this.carsModel.find({});
  }

  async insertCar(car: InsertCarDto) {
    return this.carsModel.create({
      name: car.model,
      year: car.year,
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
    return this.carsModel.find({});
  }
}
