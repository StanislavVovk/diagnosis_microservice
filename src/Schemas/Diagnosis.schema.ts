import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DiagnosisDataModel } from 'common/Models/DiagnosisDataModel';
import { Document } from 'mongoose';
import { ValueOf } from '../common/valueOf';

@Schema()
export class Diagnosis extends Document {
  @Prop({
    required: true,
    type: String,
  })
  diagnosis_code: string;

  @Prop({
    required: true,
    type: Map,
    of: Object,
  })
  diagnosis_data: Map<keyof DiagnosisDataModel, ValueOf<DiagnosisDataModel>>;
}

export const DiagnosisSchema = SchemaFactory.createForClass(Diagnosis);
