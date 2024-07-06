import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FollowUp, FollowUpSchema } from './schema/followup.schema';
import { FollowUpService } from './followup.service';
import { FollowUpController } from './followup.controller';
import { PetugasModule } from 'src/petugas/petugas.module';

@Module({
  imports: [
    PetugasModule,
    MongooseModule.forFeature([
      { name: FollowUp.name, schema: FollowUpSchema },
    ]),
  ],
  controllers: [FollowUpController],
  providers: [FollowUpService],
})
export class FollowUpModule {}
