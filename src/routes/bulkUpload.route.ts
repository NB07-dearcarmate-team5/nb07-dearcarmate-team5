/**
 * 대용량 업로드 라우트
 * @author 김민기
 */

import { Router } from 'express';
// TODO: import
// import { BulkUploadController } from '../controllers/bulkUpload.controller';
// import { csvUpload } from '../middleware/upload.middleware';
// import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

// TODO: Controller 인스턴스 생성 (의존성 주입)
// const controller = new BulkUploadController(service);

// TODO: 인증 미들웨어 적용 (필요시)
// router.use(authMiddleware);

/**
 * POST /bulk-upload/customer
 * 고객 데이터 대용량 업로드 (CSV)
 * Content-Type: multipart/form-data
 * Body: file (CSV 파일)
 */
// router.post('/customer', csvUpload, controller.uploadCustomers);

/**
 * POST /bulk-upload/vehicle
 * 차량 데이터 대용량 업로드 (CSV)
 * Content-Type: multipart/form-data
 * Body: file (CSV 파일)
 */
// router.post('/vehicle', csvUpload, controller.uploadVehicles);

export default router;
