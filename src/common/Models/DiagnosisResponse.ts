import { Diagnosis } from '../../Schemas/Diagnosis.schema';

export type DiagnosisResponse = {
  status: number;
  data: Diagnosis[];
};
