/**
 * 계약서 문서 서비스 - 비즈니스 로직
 * @author 김민기
 */

import { ContractDocumentRepository } from '../repositories/contractDocument.repository';
import {
  DraftContractResponseDto,
  ContractListQuery,
  ContractListResponseDto,
} from '../types/contractDocument.type';
// TODO: 추후 구현 시 import
// import { uploadFile, getDownloadUrl, deleteFile, generateFileKey } from '../utils/s3.util';
// import { sendContractEmail } from '../utils/email.util';
// import { NotFoundError } from '../errors/errorHandler';

// ============================================
// ContractDocumentService
// ============================================
export class ContractDocumentService {
  constructor(private repository: ContractDocumentRepository) {}

  // ==========================================
  // GET /contractDocuments
  // 계약서 업로드 시 계약 목록 조회
  // ==========================================
  async getContracts(query: ContractListQuery): Promise<ContractListResponseDto> {
    const page = query.page || 1;
    const pageSize = query.pageSize || 10;

    const { data, total } = await this.repository.findContracts(query);

    return {
      currentPage: page,
      totalPages: Math.ceil(total / pageSize),
      totalItemCount: total,
      data,
    };
  }

  // ==========================================
  // GET /contractDocuments/draft
  // 계약서 추가 시 계약 목록 조회
  // ==========================================
  async getDraftContracts(): Promise<DraftContractResponseDto[]> {
    return this.repository.findDraftContracts();
  }

  // ==========================================
  // POST /contractDocuments/upload
  // 계약서 업로드
  // ==========================================
  // TODO: uploadDocuments - 계약서 파일 업로드
  // @param contractId: string - 계약 ID
  // @param files: Express.Multer.File[] - 업로드 파일 배열
  // @param customerEmail: string - 고객 이메일 (이메일 발송용)
  // @returns Promise<ContractDocumentResponseDto[]>
  // 로직:
  // 1. 각 파일에 대해:
  //    a. generateFileKey로 S3 키 생성
  //    b. uploadFile로 S3에 업로드
  //    c. repository.create로 DB에 메타데이터 저장
  // 2. 모든 파일 업로드 완료 후 고객에게 이메일 발송 (sendContractEmail)
  // 3. 업로드 결과 반환
  async uploadDocuments(
    contractId: string,
    files: any[],
    customerEmail?: string
  ): Promise<any[]> {
    // TODO: 구현
    // 1. 파일 업로드 (S3)
    // 2. DB 저장
    // 3. 이메일 발송 (계약서 첨부)
    throw new Error('Not implemented');
  }

  // ==========================================
  // GET /contractDocuments/{contractDocumentId}/download
  // 계약서 다운로드
  // ==========================================
  // TODO: downloadDocument - 계약서 다운로드 URL 생성
  // @param contractDocumentId: string - 문서 ID
  // @returns Promise<DownloadResponseDto>
  // 로직:
  // 1. repository.findById로 문서 조회
  // 2. 문서가 없으면 NotFoundError
  // 3. getDownloadUrl로 Presigned URL 생성
  // 4. 다운로드 정보 반환 (url, fileName, mimeType)
  async downloadDocument(contractDocumentId: string): Promise<any> {
    // TODO: 구현
    throw new Error('Not implemented');
  }

  // ==========================================
  // 계약서 삭제 (계약 수정 API 활용)
  // ==========================================
  // TODO: deleteDocument - 단일 문서 삭제
  // @param contractDocumentId: string
  // 로직:
  // 1. repository.findById로 문서 조회
  // 2. deleteFile로 S3에서 삭제
  // 3. repository.delete로 DB에서 삭제
  async deleteDocument(contractDocumentId: string): Promise<void> {
    // TODO: 구현
    throw new Error('Not implemented');
  }

  // TODO: deleteDocumentsByIds - 여러 문서 삭제
  // @param documentIds: string[]
  async deleteDocumentsByIds(documentIds: string[]): Promise<void> {
    // TODO: 구현
    throw new Error('Not implemented');
  }
}
