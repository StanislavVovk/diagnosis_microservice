import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { DiagnosisService } from '../Services/diagnosis.service';
import { JwtAuthGuard } from '../Guards/JWT.guard';
import { DiagnosisQueryDTO } from '../DTO/Diagnosis.DTO';
import { DiagnosisResponse } from '../common/Models/DiagnosisResponse';

@Controller('diagnosis')
export class DiagnosisController {
  constructor(private diagnosisService: DiagnosisService) {}

  @UseGuards(JwtAuthGuard)
  @Get('get-diagnosis')
  getDiagnosis(
    @Query() { diagnosis_query, limit }: DiagnosisQueryDTO,
  ): Promise<DiagnosisResponse> {
    const newLimit = Number(limit) || 20;
    return this.diagnosisService.getDiagnosis(diagnosis_query, newLimit);
  }
}
