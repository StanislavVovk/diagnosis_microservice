import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiagnosisSchema } from 'Schemas/Diagnosis.schema';
import { DiagnosisController } from '../Controllers/diagnosis.controller';
import { DiagnosisService } from '../Services/diagnosis.service';
import { JwtAuthGuard } from '../Guards/JWT.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Diagnosis', schema: DiagnosisSchema, collection: 'diagnosis' },
    ]),
  ],
  controllers: [DiagnosisController],
  providers: [DiagnosisService, JwtAuthGuard, JwtService],
  exports: [],
})
export class DiagnosisModule {}
