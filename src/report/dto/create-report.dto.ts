// create-report.dto.ts
import { IsString, IsNotEmpty, IsDateString, IsMongoId } from 'class-validator';

export class CreateReportDto {
  @IsMongoId()
  @IsNotEmpty()
  user_id: string;

  @IsDateString()
  @IsNotEmpty()
  tanggal_laporan: Date;

  @IsMongoId()
  @IsNotEmpty()
  lokasi: string;

  @IsString()
  @IsNotEmpty()
  deskripsi: string;

  @IsString()
  @IsNotEmpty()
  status_laporan: string;

  @IsString()
  foto?: string;

  @IsString()
  @IsNotEmpty()
  prioritas: string;
}
