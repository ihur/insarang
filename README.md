# 인사랑돌봄 웹사이트

어르신들의 건강한 삶을 위한 최고의 파트너, 인사랑돌봄의 공식 웹사이트입니다.

## 🚀 프로젝트 개요

이 프로젝트는 React 기반으로 개발된 시니어 케어 서비스 웹사이트입니다. eroum.co.kr 사이트를 참고하여 시니어 케어 관련 정보를 제공하는 현대적이고 사용자 친화적인 웹사이트를 구현했습니다.

## ✨ 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 사용자 경험
- **서비스 소개**: 다양한 케어 서비스 정보 제공
- **고객 후기**: 실제 이용 고객들의 생생한 후기
- **케어 정보 블로그**: 시니어 케어에 대한 전문적인 정보와 팁
- **문의 시스템**: 온라인 상담 신청 및 문의 기능
- **브랜드 스토리**: 회사 소개 및 핵심 가치 소개

## 🛠 기술 스택

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Package Manager**: npm

## 📁 프로젝트 구조

```
senior-care-website/
├── public/
├── src/
│   ├── components/          # 공통 컴포넌트
│   │   ├── Header.jsx      # 네비게이션 헤더
│   │   └── Footer.jsx      # 푸터
│   ├── pages/              # 페이지 컴포넌트
│   │   ├── Home.jsx        # 메인 페이지
│   │   ├── Brand.jsx       # 브랜드 스토리
│   │   ├── Services.jsx    # 서비스 목록
│   │   ├── ServiceDetail.jsx # 서비스 상세
│   │   ├── Blog.jsx        # 케어 정보 블로그
│   │   └── Contact.jsx     # 문의하기
│   ├── data/               # 데이터 파일
│   │   └── mockData.js     # 목업 데이터
│   ├── assets/             # 정적 자산
│   ├── hooks/              # 커스텀 훅
│   ├── utils/              # 유틸리티 함수
│   ├── App.jsx             # 메인 앱 컴포넌트
│   ├── main.jsx            # 앱 진입점
│   └── index.css           # 글로벌 스타일
├── package.json
├── tailwind.config.js      # Tailwind 설정
├── postcss.config.js       # PostCSS 설정
└── README.md
```

## 🚀 설치 및 실행

### 1. 프로젝트 클론
```bash
git clone [repository-url]
cd senior-care-website
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 `http://localhost:5173`으로 접속하여 웹사이트를 확인할 수 있습니다.

### 4. 빌드
```bash
npm run build
```

## 📱 페이지 구성

### 메인 페이지 (/)
- 히어로 섹션
- 브랜드 소개
- 서비스 미리보기
- 고객 후기 슬라이더
- CTA 섹션

### 브랜드 스토리 (/brand)
- 회사 소개
- 핵심 가치
- 회사 정보
- 인증 및 수상 실적

### 서비스 (/services)
- 서비스 목록
- 카테고리별 필터링
- 서비스 상세 정보

### 케어 정보 (/blog)
- 케어 관련 블로그 글
- 카테고리별 필터링
- 전문적인 케어 팁

### 고객센터 (/contact)
- 문의 폼
- 연락처 정보
- 지도 (API 키 필요)

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: 파란색 계열 (#0ea5e9 ~ #0c4a6e)
- **Secondary**: 회색 계열 (#f8fafc ~ #0f172a)
- **Accent**: 노란색 (#fbbf24)

### 타이포그래피
- **Font Family**: Inter
- **Weights**: 300, 400, 500, 600, 700

### 컴포넌트
- 버튼, 카드, 폼 요소 등 일관된 디자인 시스템 적용
- Tailwind CSS 유틸리티 클래스 활용

## 📊 데이터 구조

### 서비스 데이터
```javascript
{
  id: number,
  title: string,
  description: string,
  features: string[],
  price: string,
  duration: string,
  category: string
}
```

### 블로그 데이터
```javascript
{
  id: number,
  title: string,
  excerpt: string,
  content: string,
  author: string,
  date: string,
  category: string,
  tags: string[],
  readTime: string
}
```

## 🔧 개발 가이드

### 새로운 페이지 추가
1. `src/pages/` 디렉토리에 새 페이지 컴포넌트 생성
2. `src/App.jsx`에 라우트 추가
3. `src/components/Header.jsx`에 네비게이션 메뉴 추가

### 스타일 수정
- Tailwind CSS 클래스 사용
- `src/index.css`에서 커스텀 스타일 정의
- `tailwind.config.js`에서 테마 확장

### 데이터 수정
- `src/data/mockData.js` 파일에서 데이터 수정
- 실제 API 연동 시 axios를 사용하여 데이터 패칭

## 🌐 배포

### Vercel 배포
```bash
npm run build
vercel --prod
```

### Netlify 배포
```bash
npm run build
netlify deploy --prod --dir=dist
```

## 📞 연락처

- **전화**: 02-1234-5678
- **이메일**: info@insarang.co.kr
- **주소**: 서울특별시 강남구 테헤란로 123

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

© 2024 인사랑돌봄. All rights reserved.
