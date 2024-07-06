import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportModule } from './report/report.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { LocationModule } from './location/location.module';
import { FollowUpModule } from './followup/followup.module';
import { PetugasModule } from './petugas/petugas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL'),
      }),
      inject: [ConfigService],
    }),

    ReportModule,
    AuthModule,
    UsersModule,
    CloudinaryModule,
    LocationModule,
    FollowUpModule,
    PetugasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
