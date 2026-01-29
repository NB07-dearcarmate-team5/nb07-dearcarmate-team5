/**
 * 이메일 발송 유틸리티
 * @author 김민기
 *
 * 계약서 등록 시 고객에게 자동으로 이메일 발송
 *
 * 환경변수 (.env):
 * - SMTP_HOST=smtp.gmail.com
 * - SMTP_PORT=587
 * - SMTP_USER=your-email@gmail.com
 * - SMTP_PASS=your-app-password
 * - SMTP_FROM=noreply@dearcarmate.com
 */

// TODO: nodemailer import
// import nodemailer from 'nodemailer';

// ============================================
// 이메일 전송 설정
// ============================================
// TODO: createTransporter - SMTP 트랜스포터 생성
// - host, port, secure, auth 설정
export const createTransporter = () => {
  // TODO: nodemailer.createTransport 사용
  throw new Error('Not implemented');
};

// ============================================
// 계약서 첨부 이메일 발송
// ============================================
// TODO: sendContractEmail - 계약서 등록 시 고객에게 이메일 발송
// @param to: string - 수신자 이메일
// @param customerName: string - 고객명
// @param contractName: string - 계약서명
// @param attachments: { filename, path }[] - 첨부 파일 (Presigned URL 또는 버퍼)
export const sendContractEmail = async (
  to: string,
  customerName: string,
  contractName: string,
  attachments: { filename: string; path: string }[]
): Promise<void> => {
  // TODO: 구현
  // 1. 이메일 템플릿 작성
  // 2. 첨부 파일 추가
  // 3. transporter.sendMail 호출
  throw new Error('Not implemented');
};

// ============================================
// 이메일 템플릿
// ============================================
// TODO: getContractEmailTemplate - 이메일 HTML 템플릿
// @param customerName: string
// @param contractName: string
// @returns string - HTML 문자열
export const getContractEmailTemplate = (
  customerName: string,
  contractName: string
): string => {
  // TODO: HTML 템플릿 반환
  return '';
};
