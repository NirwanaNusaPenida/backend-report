import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Petugas extends Document {
  @Prop({ required: true })
  nama: string;

  @Prop({ required: true })
  no_telepon: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  alamat: string;

  @Prop({ required: true })
  tipe_petugas: string;
}

export const PetugasSchema = SchemaFactory.createForClass(Petugas);
