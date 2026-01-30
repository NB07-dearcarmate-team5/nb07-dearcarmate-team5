/**
 * 계약서 문서 리포지토리 - DB 접근 계층
 * @author 김민기
 */

import {
  DraftContractResponseDto,
  ContractListItem,
  ContractListQuery,
} from '../types/contractDocument.type';

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

const MOCK_CONTRACTS: ContractListItem[] = [
  {
    id: 1,
    contractName: '그랜저 신차 계약',
    resolutionDate: '2026-02-22T09:00:00.000Z',
    documentCount: 2,
    userName: '김고객',
    carNumber: '12가 3456',
    documents: [
      { id: 1, fileName: '계약서.pdf' },
      { id: 2, fileName: '신분증사본.jpg' },
    ],
  },
  {
    id: 2,
    contractName: 'K3 리스 계약',
    resolutionDate: '2026-02-21T14:30:00.000Z',
    documentCount: 1,
    userName: '홍길동',
    carNumber: '34나 5678',
    documents: [{ id: 3, fileName: '리스계약서.pdf' }],
  },
  {
    id: 3,
    contractName: '소나타 할부 계약',
    resolutionDate: '2026-02-20T11:00:00.000Z',
    documentCount: 3,
    userName: '이영희',
    carNumber: '56다 7890',
    documents: [
      { id: 4, fileName: '할부계약서.pdf' },
      { id: 5, fileName: '소득증빙.pdf' },
      { id: 6, fileName: '인감증명.pdf' },
    ],
  },
  {
    id: 4,
    contractName: '아반떼 현금 계약',
    resolutionDate: '2026-02-19T16:00:00.000Z',
    documentCount: 1,
    userName: '박철수',
    carNumber: '78라 1234',
    documents: [{ id: 7, fileName: '매매계약서.pdf' }],
  },
  {
    id: 5,
    contractName: '카니발 법인 계약',
    resolutionDate: '2026-02-18T10:00:00.000Z',
    documentCount: 2,
    userName: '최민수',
    carNumber: '90마 5678',
    documents: [
      { id: 8, fileName: '법인계약서.pdf' },
      { id: 9, fileName: '사업자등록증.pdf' },
    ],
  },
  {
    id: 6,
    contractName: '투싼 신차 계약',
    resolutionDate: '2026-02-17T13:00:00.000Z',
    documentCount: 0,
    userName: '정민호',
    carNumber: '11바 2222',
    documents: [],
  },
];

// ============================================
// ContractDocumentRepository
// ============================================
export class ContractDocumentRepository {
  // TODO: DB 클라이언트 주입 (constructor)

  // ==========================================
  // 계약 목록 조회 (GET /contractDocuments)
  // ==========================================
  async findContracts(
    query: ContractListQuery
  ): Promise<{ data: ContractListItem[]; total: number }> {
    const { page = 1, pageSize = 10, searchBy, keyword } = query;

    // 검색 필터링
    let filtered = MOCK_CONTRACTS;
    if (keyword && searchBy) {
      filtered = MOCK_CONTRACTS.filter((contract) => {
        if (searchBy === 'contractName') {
          return contract.contractName.includes(keyword);
        }
        if (searchBy === 'userName') {
          return contract.userName.includes(keyword);
        }
        return true;
      });
    }

    // 페이지네이션
    const total = filtered.length;
    const start = (page - 1) * pageSize;
    const data = filtered.slice(start, start + pageSize);

    return { data, total };
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
