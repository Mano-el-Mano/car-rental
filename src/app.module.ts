import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongodb/carRental'), CarsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
