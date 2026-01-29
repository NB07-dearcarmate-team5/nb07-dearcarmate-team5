/**
 * S3/MinIO 유틸리티
 * @author 김민기
 *
 * MinIO 설정 (로컬 개발용):
 * - docker-compose up -d
 * - 콘솔: http://localhost:9001 (minioadmin/minioadmin)
 *
 * 환경변수 (.env):
 * - S3_ENDPOINT=http://localhost:9000
 * - S3_ACCESS_KEY=minioadmin
 * - S3_SECRET_KEY=minioadmin
 * - S3_BUCKET_NAME=contracts
 * - S3_REGION=ap-northeast-2
 */

// TODO: AWS SDK import
// import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// ============================================
// S3 클라이언트 초기화
// ============================================
// TODO: getS3Client - S3 클라이언트 싱글톤
// - endpoint: MinIO는 로컬 주소, S3는 AWS 주소
// - forcePathStyle: MinIO 사용 시 true
// - credentials: accessKeyId, secretAccessKey
export const getS3Client = () => {
  // TODO: 구현
};

// ============================================
// 파일 업로드
// ============================================
// TODO: uploadFile - S3에 파일 업로드
// @param file: Buffer - 파일 데이터
// @param key: string - S3 저장 경로
// @param mimeType: string - MIME 타입
// @returns Promise<string> - 업로드된 파일 URL
export const uploadFile = async (
  file: Buffer,
  key: string,
  mimeType: string
): Promise<string> => {
  // TODO: PutObjectCommand 사용
  throw new Error('Not implemented');
};

// ============================================
// 파일 다운로드 URL 생성
// ============================================
// TODO: getDownloadUrl - Presigned URL 생성
// @param key: string - S3 파일 키
// @param expiresIn: number - 만료 시간 (초, 기본 3600)
// @returns Promise<string> - Presigned URL
export const getDownloadUrl = async (
  key: string,
  expiresIn = 3600
): Promise<string> => {
  // TODO: getSignedUrl + GetObjectCommand 사용
  throw new Error('Not implemented');
};

// ============================================
// 파일 삭제
// ============================================
// TODO: deleteFile - S3 파일 삭제
// @param key: string - S3 파일 키
export const deleteFile = async (key: string): Promise<void> => {
  // TODO: DeleteObjectCommand 사용
  throw new Error('Not implemented');
};

// ============================================
// 파일 키 생성
// ============================================
// TODO: generateFileKey - S3 저장 경로 생성
// @param contractId: string - 계약 ID
// @param fileName: string - 원본 파일명
// @returns string - contracts/{contractId}/{timestamp}_{uuid}_{fileName}
export const generateFileKey = (
  contractId: string,
  fileName: string
): string => {
  // TODO: 구현
  throw new Error('Not implemented');
};
