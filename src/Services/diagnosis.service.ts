import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Diagnosis } from '../Schemas/Diagnosis.schema';
import { Model } from 'mongoose';
import { DiagnosisResponse } from '../common/Models/DiagnosisResponse';

@Injectable()
export class DiagnosisService {
  async getDiagnosis(name: string, limit: number): Promise<DiagnosisResponse> {
    try {
      const diagnosis = await this.diagnosisModel.aggregate([
        {
          $unwind: '$diagnosis_data',
        },
        {
          $match: {
            $or: [
              { 'diagnosis_data.ids': { $regex: name, $options: 'ix' } },
              { 'diagnosis_data.text': { $regex: name, $options: 'imx' } },
            ],
          },
        },
        {
          $replaceRoot: {
            newRoot: '$diagnosis_data',
          },
        },
        { $limit: limit },
      ]);
      return {
        status: HttpStatus.OK,
        data: diagnosis,
      };
    } catch (e) {
      console.log(e);
      throw new NotFoundException({ message: e });
    }
  }

  constructor(
    @InjectModel(Diagnosis.name)
    private readonly diagnosisModel: Model<Diagnosis>,
  ) {}
}
