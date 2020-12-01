import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarsDocument = Cars & Document;

@Schema()
export class Cars {
  @Prop()
  name: string;

  @Prop()
  year: number;

  @Prop()
  ratings: number[];
}

export const CarsSchema = SchemaFactory.createForClass(Cars);
