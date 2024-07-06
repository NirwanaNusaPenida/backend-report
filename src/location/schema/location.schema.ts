import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Location extends Document {
  @Prop({ required: true })
  nama_lokasi: string;

  @Prop({ required: true })
  alamat_lokasi: string;

  @Prop({ type: { type: String }, coordinates: [Number] })
  koordinat: {
    type: string;
    coordinates: [number, number];
  };
}

export const LocationSchema = SchemaFactory.createForClass(Location);
