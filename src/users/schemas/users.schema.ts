import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  nama: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  no_telepon: string;

  @Prop()
  alamat: string;

  @Prop({ required: true })
  tipe_pengguna: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
