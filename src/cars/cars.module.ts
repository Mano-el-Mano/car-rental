import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsService } from './cars.service';
import { Car, CarsSchema } from '../mongo/cars';
import { CarsController } from './cars.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Car.name, schema: CarsSchema }]),
  ],
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService],
})
export class CarsModule {}
