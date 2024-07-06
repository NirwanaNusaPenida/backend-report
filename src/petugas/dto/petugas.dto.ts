// petugas.dto.ts
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreatePetugasDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  @IsNotEmpty()
  no_telepon: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  alamat?: string;

  @IsString()
  @IsNotEmpty()
  tipe_petugas: string;
}

export class UpdatePetugasDto {
  @IsString()
  @IsNotEmpty()
  nama?: string;

  @IsString()
  @IsNotEmpty()
  no_telepon?: string;

  @IsEmail()
  @IsNotEmpty()
  email?: string;

  @IsString()
  alamat?: string;

  @IsString()
  @IsNotEmpty()
  tipe_petugas?: string;
}
