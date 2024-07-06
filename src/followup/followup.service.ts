import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { FollowUp } from './schema/followup.schema';
import { CreateFollowUpDto } from './dto/followup.dto';

@Injectable()
export class FollowUpService {
  constructor(
    @InjectModel(FollowUp.name) private readonly followUpModel: Model<FollowUp>,
  ) {}

  async createFollowUp(
    createFollowUpDto: CreateFollowUpDto,
  ): Promise<FollowUp> {
    const followUp = new this.followUpModel(createFollowUpDto);
    return await followUp.save();
  }

  async getFollowUps(report_id: Types.ObjectId): Promise<FollowUp[]> {
    return await this.followUpModel.find({ report_id }).exec();
  }
}
