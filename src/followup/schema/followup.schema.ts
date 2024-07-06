import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class FollowUp extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Report', required: true })
  report_id: Types.ObjectId;

  @Prop({ required: true })
  tanggal_tindak_lanjut: Date;

  @Prop({ type: Types.ObjectId, ref: 'Petugas', required: true })
  petugas_id: Types.ObjectId;

  @Prop({ required: true })
  catatan: string;

  @Prop({ required: true })
  status_tindak_lanjut: string;
}

export const FollowUpSchema = SchemaFactory.createForClass(FollowUp);
