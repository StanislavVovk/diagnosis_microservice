import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class DiagnosisQueryDTO {
  @IsString()
  @IsNotEmpty()
  readonly diagnosis_query: string;
  @IsString()
  @IsOptional()
  readonly limit: string;
}
