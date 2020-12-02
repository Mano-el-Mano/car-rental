import { IsString, IsInt } from 'class-validator';

export class InsertCarDto {
  @IsString()
  vehicle: string;
  @IsInt()
  year: number;
}
