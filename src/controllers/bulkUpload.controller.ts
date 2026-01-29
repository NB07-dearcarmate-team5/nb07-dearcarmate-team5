/**
 * 대용량 업로드 컨트롤러 - HTTP 요청 처리
 * @author 김민기
 */

import { Request, Response, NextFunction } from 'express';
// TODO: import
// import { BulkUploadService } from '../services/bulkUpload.service';

// ============================================
// BulkUploadController
// ============================================
export class BulkUploadController {
  // TODO: 의존성 주입
  // constructor(private service: BulkUploadService) {}

  // ==========================================
  // POST /bulk-upload/customer
  // 고객 데이터 대용량 업로드
  // ==========================================
  // TODO: uploadCustomers
  // @file file: CSV 파일 (multer)
  // 응답: 200 OK + BulkUploadResponseDto
  uploadCustomers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // TODO: 구현
      // 1. req.file 추출
      // 2. service.processUpload('customer', file) 호출
      // 3. 200 응답 반환 (성공/실패 건수)
      throw new Error('Not implemented');
    } catch (error) {
      next(error);
    }
  };

  // ==========================================
  // POST /bulk-upload/vehicle
  // 차량 데이터 대용량 업로드
  // ==========================================
  // TODO: uploadVehicles
  // @file file: CSV 파일 (multer)
  // 응답: 200 OK + BulkUploadResponseDto
  uploadVehicles = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // TODO: 구현
      // 1. req.file 추출
      // 2. service.processUpload('vehicle', file) 호출
      // 3. 200 응답 반환 (성공/실패 건수)
      throw new Error('Not implemented');
    } catch (error) {
      next(error);
    }
  };
}
