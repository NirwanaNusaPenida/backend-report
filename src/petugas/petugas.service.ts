// petugas.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Petugas } from './schema/petugas.schema';
import { CreatePetugasDto, UpdatePetugasDto } from './dto/petugas.dto';

@Injectable()
export class PetugasService {
  constructor(
    @InjectModel(Petugas.name) private readonly petugasModel: Model<Petugas>,
  ) {}

  async createPetugas(createPetugasDto: CreatePetugasDto): Promise<Petugas> {
    const newPetugas = new this.petugasModel(createPetugasDto);
    return await newPetugas.save();
  }

  async getPetugas(): Promise<Petugas[]> {
    return await this.petugasModel.find().exec();
  }

  async getPetugasById(petugasId: string): Promise<Petugas> {
    const petugas = await this.petugasModel.findById(petugasId).exec();
    if (!petugas) {
      throw new NotFoundException(
        `Petugas dengan ID ${petugasId} tidak ditemukan`,
      );
    }
    return petugas;
  }

  async updatePetugas(
    petugasId: string,
    updatePetugasDto: UpdatePetugasDto,
  ): Promise<Petugas> {
    const updatedPetugas = await this.petugasModel
      .findByIdAndUpdate(petugasId, updatePetugasDto, { new: true })
      .exec();
    if (!updatedPetugas) {
      throw new NotFoundException(
        `Petugas dengan ID ${petugasId} tidak ditemukan`,
      );
    }
    return updatedPetugas;
  }

  async deletePetugas(petugasId: string): Promise<Petugas> {
    const deletedPetugas = await this.petugasModel
      .findByIdAndDelete(petugasId)
      .exec();
    if (!deletedPetugas) {
      throw new NotFoundException(
        `Petugas dengan ID ${petugasId} tidak ditemukan`,
      );
    }
    return deletedPetugas;
  }
}
