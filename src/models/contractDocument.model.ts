/**
 * 계약서 문서 모델 정의
 * @author 김민기
 */

// TODO: DB 클라이언트 import (Prisma 등)

// ============================================
// ContractDocument 모델 (계약서 문서/파일)
// ============================================
// TODO: ContractDocument 테이블/스키마 정의
// 필드:
// - id: Primary Key (UUID)
// - contractId: Foreign Key → Contract 테이블
// - fileName: 원본 파일명 (VARCHAR)
// - fileKey: MinIO/S3 저장 경로 (VARCHAR, unique)
// - fileSize: 파일 크기 (BIGINT)
// - mimeType: MIME 타입 (VARCHAR)
// - createdAt: 생성일시 (TIMESTAMP)
// - updatedAt: 수정일시 (TIMESTAMP)
//
// 관계:
// - Contract: N:1 (하나의 계약에 여러 문서)
//
// 인덱스:
// - contractId (계약별 문서 조회)
// - fileKey (S3 키로 조회, unique)

export {};
