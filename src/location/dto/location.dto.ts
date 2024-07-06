// location.dto.ts
import {
  IsString,
  IsNotEmpty,
  IsArray,
  ArrayMinSize,
  IsNumber,
} from 'class-validator';

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  nama_lokasi: string;

  @IsString()
  @IsNotEmpty()
  alamat_lokasi: string;

  @IsArray()
  @ArrayMinSize(2)
  @IsNumber({}, { each: true })
  koordinat: [number, number];
}

export class UpdateLocationDto {
  @IsString()
  @IsNotEmpty()
  nama_lokasi?: string;

  @IsString()
  @IsNotEmpty()
  alamat_lokasi?: string;

  @IsArray()
  @ArrayMinSize(2)
  @IsNumber({}, { each: true })
  koordinat?: [number, number];
}
