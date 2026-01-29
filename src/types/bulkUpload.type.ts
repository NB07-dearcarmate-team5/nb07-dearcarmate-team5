/**
 * 대용량 업로드 (CSV) 관련 타입 정의
 * @author 김민기
 */

// ============================================
// 업로드 대상 타입
// ============================================
export type BulkUploadTarget = 'customer' | 'vehicle';

// ============================================
// CSV 행 데이터
// ============================================
// TODO: CustomerCsvRow - 고객 데이터 CSV 행 -> 문서내요에 따른 수정 필요
// - name: 고객명
// - email: 이메일
// - phone: 연락처
// - address?: 주소
export interface CustomerCsvRow {}

// TODO: VehicleCsvRow - 차량 데이터 CSV 행
// - vehicleNumber: 차량번호
// - model: 차량 모델
// - year: 연식
export interface VehicleCsvRow {}

// ============================================
// 요청/응답 DTO
// ============================================
// TODO: BulkUploadRequestDto
// - target: 'customer' | 'vehicle'
// - file: CSV 파일
export interface BulkUploadRequestDto {}

// TODO: BulkUploadResponseDto - 업로드 결과
// - totalRows: 전체 행 수
// - successCount: 성공 건수
// - failCount: 실패 건수
// - errors: 실패 상세 내역
export interface BulkUploadResponseDto {}

// TODO: BulkUploadErrorDetail - 실패 상세
// - row: 행 번호
// - message: 에러 메시지
export interface BulkUploadErrorDetail {}

// ============================================
// CSV 설정
// ============================================
export const CSV_LIMITS = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  MAX_ROWS: 10000,
};
