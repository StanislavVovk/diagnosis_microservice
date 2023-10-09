import { Types } from 'mongoose';

export type DiagnosisDataModel = {
  ids: string;
  text: string;
  not_allowed_primary_diagnose: boolean;
};

export type DiagnosisModel = {
  _id: Types.ObjectId;
  diagnosis_code: string;
  diagnosis_data: Map<keyof DiagnosisDataModel, string>[];
};
