import { IsString, IsInt } from 'class-validator';

export class InsertCarDto {
  @IsString()
  name: string;
  @IsInt()
  year: number;
}
