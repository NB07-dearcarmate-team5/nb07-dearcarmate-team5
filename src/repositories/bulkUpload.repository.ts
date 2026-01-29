/**
 * 대용량 업로드 리포지토리 - DB 접근 계층
 * @author 김민기
 */

// TODO: import
// import { CustomerCsvRow, VehicleCsvRow } from '../types/bulkUpload.type';

// ============================================
// BulkUploadRepository
// ============================================
export class BulkUploadRepository {
  // TODO: DB 클라이언트 주입 (constructor)

  // ==========================================
  // 고객 데이터 일괄 등록
  // ==========================================
  // TODO: bulkCreateCustomers - 고객 데이터 대량 삽입
  // @param customers: CustomerCsvRow[]
  // @returns Promise<{ successCount, failCount, errors }>
  // 로직:
  // 1. 트랜잭션 시작
  // 2. 각 행 검증 및 삽입
  // 3. 실패 시 해당 행 기록, 계속 진행
  // 4. 결과 반환
  async bulkCreateCustomers(customers: any[]): Promise<any> {
    // TODO: 구현
    throw new Error('Not implemented');
  }

  // ==========================================
  // 차량 데이터 일괄 등록
  // ==========================================
  // TODO: bulkCreateVehicles - 차량 데이터 대량 삽입
  // @param vehicles: VehicleCsvRow[]
  // @returns Promise<{ successCount, failCount, errors }>
  async bulkCreateVehicles(vehicles: any[]): Promise<any> {
    // TODO: 구현
    throw new Error('Not implemented');
  }
}
