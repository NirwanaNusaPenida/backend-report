// followup.dto.ts
import { IsString, IsNotEmpty, IsDate, IsMongoId } from 'class-validator';
import { Types } from 'mongoose';

export class CreateFollowUpDto {
  @IsMongoId()
  @IsNotEmpty()
  report_id: Types.ObjectId;

  @IsDate()
  @IsNotEmpty()
  tanggal_tindak_lanjut: Date;

  @IsMongoId()
  @IsNotEmpty()
  petugas_id: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  catatan: string;

  @IsString()
  @IsNotEmpty()
  status_tindak_lanjut: string;
}
