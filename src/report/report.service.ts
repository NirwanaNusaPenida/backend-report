import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Report } from './schema/report.schema';
import { CreateReportDto } from './dto/create-report.dto';

@Injectable()
export class ReportService {
  constructor(
    @InjectModel(Report.name) private readonly reportModel: Model<Report>,
  ) {}

  async createReport(createReportDto: CreateReportDto): Promise<Report> {
    const newReport = new this.reportModel(createReportDto);
    return await newReport.save();
  }

  async getReports(): Promise<Report[]> {
    return await this.reportModel.find().populate('lokasi').exec();
  }

  async getReportById(reportId: string): Promise<Report> {
    const report = await this.reportModel
      .findById(reportId)
      .populate('lokasi')
      .exec();
    if (!report) {
      throw new NotFoundException(
        `Report dengan ID ${reportId} tidak ditemukan`,
      );
    }
    return report;
  }

  async updateReport(
    reportId: string,
    updateReportDto: CreateReportDto,
  ): Promise<Report> {
    const updatedReport = await this.reportModel
      .findByIdAndUpdate(reportId, updateReportDto, { new: true })
      .populate('lokasi')
      .exec();
    if (!updatedReport) {
      throw new NotFoundException(
        `Report dengan ID ${reportId} tidak ditemukan`,
      );
    }
    return updatedReport;
  }

  async deleteReport(reportId: string): Promise<Report> {
    const deletedReport = await this.reportModel
      .findByIdAndDelete(reportId)
      .populate('lokasi')
      .exec();
    if (!deletedReport) {
      throw new NotFoundException(
        `Report dengan ID ${reportId} tidak ditemukan`,
      );
    }
    return deletedReport;
  }
}
