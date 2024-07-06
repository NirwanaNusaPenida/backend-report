import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  nama: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsString()
  no_telepon: string;

  @IsString()
  alamat: string;

  @IsNotEmpty()
  @IsString()
  tipe_pengguna: string;
}
