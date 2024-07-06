import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { Report, ReportSchema } from './schema/report.schema';
import { AuthModule } from 'src/auth/auth.module';
import { LocationModule } from 'src/location/location.module';

@Module({
  imports: [
    AuthModule,
    LocationModule,
    MongooseModule.forFeature([
      {
        name: Report.name,
        schema: ReportSchema,
      },
    ]),
  ],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
