import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Report extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user_id: Types.ObjectId;

  @Prop({ required: true })
  tanggal_laporan: Date;

  @Prop({ type: Types.ObjectId, ref: 'Location', required: true })
  lokasi: Types.ObjectId;

  @Prop({ required: true })
  deskripsi: string;

  @Prop({ required: true })
  status_laporan: string;

  @Prop()
  foto: string;

  @Prop({ required: true })
  prioritas: string;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
