import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { FollowUpService } from './followup.service';
import { CreateFollowUpDto } from './dto/followup.dto';
import { Types } from 'mongoose';
import { AuthGuard } from '@nestjs/passport';

@Controller('followups')
export class FollowUpController {
  constructor(private readonly followUpService: FollowUpService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseGuards(AuthGuard())
  async createFollowUp(@Body() createFollowUpDto: CreateFollowUpDto) {
    return this.followUpService.createFollowUp(createFollowUpDto);
  }

  @Get(':report_id')
  @UseGuards(AuthGuard())
  async getFollowUps(@Param('report_id') report_id: Types.ObjectId) {
    return this.followUpService.getFollowUps(report_id);
  }
}
