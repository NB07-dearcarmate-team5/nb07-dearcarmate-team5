/**
 * 계약서 문서 리포지토리 - DB 접근 계층
 * @author 김민기
 */

import { DraftContractResponseDto } from '../types/contractDocument.type';

// ============================================
// Mock 데이터 (DB 연결 전까지 사용)
// ============================================
const MOCK_DRAFT_CONTRACTS: DraftContractResponseDto[] = [
  { id: 1, data: '그랜저 - 김고객 고객님' },
  { id: 2, data: 'K3 - 홍길동 고객님' },
  { id: 3, data: '소나타 - 이영희 고객님' },
  { id: 4, data: '아반떼 - 박철수 고객님' },
  { id: 5, data: '카니발 - 최민수 고객님' },
];

// ============================================
// ContractDocumentRepository
// ============================================
export class ContractDocumentRepository {
  // TODO: DB 클라이언트 주입 (constructor)

  // ==========================================
  // 계약 목록 조회 (GET /contractDocuments)
  // ==========================================
  // TODO: findContracts - 계약서 업로드 시 계약 목록 조회
  // @returns Promise<Contract[]>
  // - 계약 목록 반환 (계약서 업로드할 대상 선택용)
  async findContracts(): Promise<any[]> {
    // TODO: 구현
    throw new Error('Not implemented');
  }

  // ==========================================
  // 계약 목록 조회 - draft (GET /contractDocuments/draft)
  // ==========================================
  async findDraftContracts(): Promise<DraftContractResponseDto[]> {
    // TODO: DB 연결 후 실제 쿼리로 교체
    // 현재는 Mock 데이터 반환
    return MOCK_DRAFT_CONTRACTS;
  }

  // ==========================================
  // 문서 생성
  // ==========================================
  // TODO: create - 계약서 문서 메타데이터 저장
  // @param data: { contractId, fileName, fileKey, fileSize, mimeType }
  // @returns Promise<ContractDocument>
  async create(data: any): Promise<any> {
    // TODO: 구현
    throw new Error('Not implemented');
  }

  // ==========================================
  // 문서 조회
  // ==========================================
  // TODO: findById - ID로 문서 조회
  // @param id: string
  // @returns Promise<ContractDocument | null>
  async findById(id: string): Promise<any | null> {
    // TODO: 구현
    throw new Error('Not implemented');
  }

  // TODO: findByContractId - 계약별 문서 목록 조회
  // @param contractId: string
  // @returns Promise<ContractDocument[]>
  async findByContractId(contractId: string): Promise<any[]> {
    // TODO: 구현
    throw new Error('Not implemented');
  }

  // ==========================================
  // 문서 삭제
  // ==========================================
  // TODO: delete - 문서 삭제
  // @param id: string
  async delete(id: string): Promise<void> {
    // TODO: 구현
    throw new Error('Not implemented');
  }

  // TODO: deleteByContractId - 계약의 모든 문서 삭제
  // @param contractId: string
  async deleteByContractId(contractId: string): Promise<void> {
    // TODO: 구현
    throw new Error('Not implemented');
  }
}
