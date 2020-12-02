import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop()
  vehicle: string;

  @Prop()
  year: number;

  @Prop()
  ratings: number[];
}

export const CarsSchema = SchemaFactory.createForClass(Car);
