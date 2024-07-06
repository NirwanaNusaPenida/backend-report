// petugas.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Petugas, PetugasSchema } from './schema/petugas.schema';
import { PetugasService } from './petugas.service';
import { PetugasController } from './petugas.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Petugas.name, schema: PetugasSchema }]),
  ],
  controllers: [PetugasController],
  providers: [PetugasService],
})
export class PetugasModule {}
