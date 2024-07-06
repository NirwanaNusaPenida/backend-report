// location.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Location } from './schema/location.schema';
import { CreateLocationDto, UpdateLocationDto } from './dto/location.dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location.name) private readonly locationModel: Model<Location>,
  ) {}

  async createLocation(
    createLocationDto: CreateLocationDto,
  ): Promise<Location> {
    const newLocation = new this.locationModel(createLocationDto);
    return await newLocation.save();
  }

  async getLocations(): Promise<Location[]> {
    return await this.locationModel.find().exec();
  }

  async getLocationById(locationId: string): Promise<Location> {
    const location = await this.locationModel.findById(locationId).exec();
    if (!location) {
      throw new NotFoundException(`Location with ID ${locationId} not found`);
    }
    return location;
  }

  async updateLocation(
    locationId: string,
    updateLocationDto: UpdateLocationDto,
  ): Promise<Location> {
    const updatedLocation = await this.locationModel
      .findByIdAndUpdate(locationId, updateLocationDto, { new: true })
      .exec();
    if (!updatedLocation) {
      throw new NotFoundException(`Location with ID ${locationId} not found`);
    }
    return updatedLocation;
  }

  async deleteLocation(locationId: string): Promise<Location> {
    const deletedLocation = await this.locationModel
      .findByIdAndDelete(locationId)
      .exec();
    if (!deletedLocation) {
      throw new NotFoundException(`Location with ID ${locationId} not found`);
    }
    return deletedLocation;
  }
}
