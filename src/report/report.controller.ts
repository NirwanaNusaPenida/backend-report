// report.controller.ts
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
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseGuards(AuthGuard())
  async createReport(@Body() createReportDto: CreateReportDto) {
    return this.reportService.createReport(createReportDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  async getReports() {
    return this.reportService.getReports();
  }

  @Get(':id')
  async getReportById(@Param('id') id: string) {
    return this.reportService.getReportById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateReport(
    @Param('id') id: string,
    @Body() updateReportDto: CreateReportDto,
  ) {
    return this.reportService.updateReport(id, updateReportDto);
  }

  @Delete(':id')
  async deleteReport(@Param('id') id: string) {
    return this.reportService.deleteReport(id);
  }
}
