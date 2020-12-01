import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsService } from './cars.service';
import { Cars, CarsSchema } from '../mongo/cars';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cars.name, schema: CarsSchema }]),
  ],
  providers: [CarsService],
  exports: [CarsService],
})
export class CarsModule {}
