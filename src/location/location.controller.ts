// location.controller.ts
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
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto, UpdateLocationDto } from './dto/location.dto';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createLocation(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.createLocation(createLocationDto);
  }

  @Get()
  async getLocations() {
    return this.locationService.getLocations();
  }

  @Get(':id')
  async getLocationById(@Param('id') id: string) {
    return this.locationService.getLocationById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateLocation(
    @Param('id') id: string,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    return this.locationService.updateLocation(id, updateLocationDto);
  }

  @Delete(':id')
  async deleteLocation(@Param('id') id: string) {
    return this.locationService.deleteLocation(id);
  }
}
