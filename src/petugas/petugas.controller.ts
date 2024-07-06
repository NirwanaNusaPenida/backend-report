// petugas.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { PetugasService } from './petugas.service';
import { CreatePetugasDto, UpdatePetugasDto } from './dto/petugas.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('petugas')
export class PetugasController {
  constructor(private readonly petugasService: PetugasService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createPetugas(@Body() createPetugasDto: CreatePetugasDto) {
    return this.petugasService.createPetugas(createPetugasDto);
  }

  @Get()
  async getPetugas() {
    return this.petugasService.getPetugas();
  }

  @Get(':id')
  async getPetugasById(@Param('id') id: string) {
    return this.petugasService.getPetugasById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseGuards(AuthGuard())
  async updatePetugas(
    @Param('id') id: string,
    @Body() updatePetugasDto: UpdatePetugasDto,
  ) {
    return this.petugasService.updatePetugas(id, updatePetugasDto);
  }

  @Delete(':id')
  async deletePetugas(@Param('id') id: string) {
    return this.petugasService.deletePetugas(id);
  }
}
