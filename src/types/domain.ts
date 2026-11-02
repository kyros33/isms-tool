export type DocumentStatus = "DRAFT" | "IN_REVIEW" | "CHANGES_REQUIRED" | "IN_APPROVAL" | "APPROVED" | "PUBLISHED" | "ARCHIVED";
export interface DocumentSummary { id:string; documentNumber:string; title:string; version:string; status:DocumentStatus; ownerName:string; nextReviewAt:string|null; }
export interface RiskSummary { id:string; riskNumber:string; title:string; inherentScore:number; residualScore:number|null; ownerName:string; }
export interface KpiSummary { id:string; kpiNumber:string; name:string; currentValue:number|null; targetValue:number|null; unit:string|null; }
