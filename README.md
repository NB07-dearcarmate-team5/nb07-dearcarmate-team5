# 🚗 Dear Carmate

> 차량 계약 · 고객 · 유저 관리를 한 곳에서 처리하는 팀 프로젝트 백엔드 서비스

---

## 📖 프로젝트 소개

**Dear Carmate**는 차량 계약, 고객 정보, 유저 인증 등을 효율적으로 관리하기 위한  
백엔드 중심의 팀 프로젝트입니다.  
명확한 역할 분담과 협업 규칙을 기반으로 안정적인 API 서버 구축을 목표로 합니다.

---

## 🧑‍🤝‍🧑 팀 구성 및 역할 (R&R)

| 이름 | 담당 역할 |
|----|----|
| 김민기 | 계약서 업로드, 대용량 업로드 |
| 서석규 | 차량 관리, 계약 관리 |
| 이경민 | 어드민 기능, 미들웨어 |
| 이보라 | 고객 관리, 대시보드 |
| 장인혁 | 인증, 유저 기능 |

---

## 🗂️ 프로젝트 폴더 구조

```bash
src
 ┣ errors        # 공통 에러 처리
 ┣ routes        # 라우팅 설정
 ┣ controllers   # 요청 / 응답 처리
 ┣ services      # 비즈니스 로직
 ┣ repositories  # DB 접근 로직
 ┣ utils         # 공용 유틸 함수
 ┣ types         # interface, type 정의
 ┣ models        # DB 모델, DTO
 ┗ middlewares   # 인증, 로깅 등 미들웨어
 ```
---

## ⚙️ 기술 스택

### Backend
- Node.js
- Express

### Database
- MongoDB

### API Documentation
- Swagger

### Collaboration Tools
- GitHub
- Discord
- Notion

### Project Management
- GitHub Issues
- Notion Timeline
---

## 📝 Git 협업 규칙

### 🌱 Branch 전략
- `main` : 배포 가능한 안정 버전
- `develop` : 기능 통합 브랜치
- `feature/{name}` : 개인 작업 브랜치

### 🧾 Commit Message Rule
- 제목 50자 이내, 마침표 ❌
- 형식: `type: 작업 내용`

#### Commit Type
- `feat` : 새로운 기능 추가
- `fix` : 버그 수정
- `docs` : 문서 수정
- `style` : 코드 포맷팅
- `refactor` : 리팩토링
- `test` : 테스트 코드
- `chore` : 설정, 패키지 관리

### 🔀 PR Rule
- PR 템플릿 사용 필수
- 체크리스트 사전 점검
- Approve 2개 이상 시 Merge 요청
- Conflict 발생 시 즉시 헬프 요청
