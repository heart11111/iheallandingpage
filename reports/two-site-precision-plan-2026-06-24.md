# BIOLAB Japan / Korea 정밀 검수 종합 및 수정 계획

작성일: 2026-06-24  
백업 대상 저장소:
- Japan: `heart11111/iheallandingpage`
- Korea: `heart11111/biolabKR`

라이브 주소:
- Japan: https://biolabjp.com/
- Korea: https://biolabkr.com/

기준 자료:
- `C:/Users/우지윤/Downloads/BIOLAB Japan - Introducing - 20260515.pptx`
- `C:/Users/우지윤/Downloads/비오랩 재팬 홈페이지-Site Map.pptx`
- 실제 라이브 사이트, 로컬 미리보기, 브라우저 캡처, 도메인/인증서/사이트맵 점검, 의존성 보안 점검

관련 산출물:
- 루트 통합 검수: `C:/Users/우지윤/OneDrive/문서/비오랩 사이트/reports/two-site-introducing-audit-2026-06-24.md`
- Korea 사이트맵 검수: `biolabKR/reports/sitemap-audit-2026-06-24.md`
- 브라우저 캡처: `C:/Users/우지윤/OneDrive/문서/비오랩 사이트/_screenshots/two-site-audit-20260624/`

## 1. 현재 상태 요약

### Japan 사이트

현재 반영 상태:
- `https://biolabjp.com/` 라이브 접속 가능.
- 상단/푸터 CI는 사용자가 제공한 `BIOLAB Japan` 이미지로 교체 완료.
- 이번 백업 시점에 Pretendard JP 로컬 폰트를 적용했다.
- Google font 의존을 제거하고 `next/font/local` 기반으로 `PretendardJPVariable.woff2`를 사용한다.
- 데스크톱/모바일에서 폰트 적용과 가로 깨짐 없음 확인.
- `npm run build` 통과.

남은 핵심 리스크:
- `https://www.biolabjp.com/` 인증서 이름 불일치로 일부 브라우저/기업망에서 차단될 수 있다.
- `http://biolabjp.com/` 접속이 HTTPS로 강제 전환되지 않는다.
- `https://biolabjp.com/sitemap.xml`이 404다.
- ODM/OEM, Brand Royalty, Contact 페이지의 정보량이 PPT 기준 대비 부족하다.
- 상단 언어 아이콘과 검색처럼 보이는 아이콘은 실제 기능과 의미가 불명확하다.

### Korea 사이트

현재 반영 상태:
- `https://biolabkr.com/` 라이브 접속 가능.
- GitHub Pages custom domain root 구조로 배포 설정이 정리되어 있다.
- 최근 사이트맵 기준으로 메뉴는 회사소개/사업영역/공급제품/고객지원 형태다.
- `sitemap-index.xml`, `sitemap-0.xml`은 정상 응답한다.

남은 핵심 리스크:
- 실제 생성 페이지가 기대 사이트맵보다 많다. 메뉴는 정리됐지만 레거시 URL이 남아 검색/직접 접근 혼란 가능성이 있다.
- 회사 정보에 `02-0000-0000`, `000-00-00000`, `대표자명` 같은 플레이스홀더가 남아 있다.
- 자연 유래 소재가 PPT 기준 10종 중 7종만 반영되어 있다.
- iHEAL 소비자 제품 섹션이 B2B 소재/ODM 사이트 흐름과 섞여 목적이 흐려진다.
- 일부 제품 이미지가 매우 크다. 특히 `card-venus-stick-box.png`는 약 23MB로 모바일 성능 리스크가 크다.
- 문의 방식이 `mailto` 중심이라 이메일 앱 미설정 환경에서 전환이 끊길 수 있다.

## 2. PPT 기준 정합성 판단

PPT의 핵심 방향은 다음이다.
- BIOLAB Japan은 일본 시장을 위한 One-stop Total Healthcare Solution.
- 한국의 개발, 소싱, 생산, 브랜드 관리 역량을 일본의 유통사, 제조사, 도매상, 세일즈 네트워크로 연결하는 B2B 브릿지.
- 핵심 사업은 Functional Food Ingredients, ODM/OEM, Brand Royalty.
- 기능성 프로바이오틱스 7종과 자연 유래 기능성 소재 10종이 주요 제품군.

Japan 사이트 정합성:
- 프로바이오틱스 7종과 자연 소재 10종은 대부분 반영되어 있다.
- 사업 카테고리도 PPT의 큰 축과 맞다.
- 다만 `NVP-1702` / `NVP-17902` 표기 혼재 문제는 내부 기준명을 확정해야 한다.
- PPT의 사업 흐름, 제조사 연계, 수입/통관, 일본 유통 대응이 페이지 본문에서는 충분히 설명되지 않는다.

Korea 사이트 정합성:
- 프로바이오틱스 7종은 반영되어 있다.
- 자연 소재는 `DermaNia`, `Agrimony extract`, `Aceto Beta`가 빠져 있다.
- 국내 사이트는 B2B 소재/ODM 사이트로 방향을 잡았지만, 소비자 제품과 기존 레거시 페이지가 남아 메시지가 섞인다.
- PPT 문구를 그대로 쓰면 효능 과장이 될 수 있으므로 공개 사이트에서는 보수적으로 재작성해야 한다.

## 3. 사용자 입장 문제

Japan:
- 첫 화면 브랜드 인지는 좋지만, 실제 사업 문의자가 원하는 "무엇을 어디까지 해주는 회사인가"가 부족하다.
- 제품은 많아 보이지만, 협업 프로세스와 문의 유형이 명확하지 않다.
- 언어 아이콘이 언어 변경처럼 보이는데 실제 기능이 다르면 사용자가 오해한다.
- 사이트맵 부재는 검색 유입과 외부 공유 품질을 떨어뜨린다.

Korea:
- 첫 화면이 일반 기업 소개처럼 보이고, 소재 공급/ODM/OEM/브랜드 관리 파트너라는 정체성이 약하다.
- 플레이스홀더 정보는 회사 신뢰도를 직접 깎는다.
- 고객지원/문의 페이지가 짧고 실제 전환 장치가 약하다.
- 레거시 페이지가 살아 있으면 검색으로 들어온 사용자가 다른 구조를 보게 된다.

## 4. 디자인 및 UI 문제

Japan:
- Pretendard JP 적용으로 타이포그래피 기반은 정리됐다.
- 기존 명조/디스플레이 폰트 혼합이 줄어 페이지가 더 일관된 인상을 준다.
- 모바일 첫 화면은 여전히 히어로가 길어 CTA와 사업 설명이 늦게 보일 수 있다.
- ODM/OEM, Brand Royalty 페이지는 정보량과 시각적 밀도가 낮아 빈 페이지처럼 보일 수 있다.

Korea:
- 데스크톱은 안정적이지만 전체 톤이 다소 일반적인 기업 사이트에 가깝다.
- 모바일 공급제품 탭의 긴 영문 라벨이 잘린 탭처럼 보인다.
- B2B 소재와 소비자 제품이 같은 흐름에 있어 시각적 위계를 재정리해야 한다.
- 대용량 이미지는 모바일 체감 품질에 직접 악영향을 준다.

## 5. 애니메이션, 버그, 성능

공통:
- 주요 페이지 200 응답 확인.
- 브라우저 콘솔의 치명적 오류 없음.
- 데스크톱/모바일에서 명확한 가로 오버플로우 없음.
- 폰트 로딩 실패는 확인되지 않았다.

Japan:
- Next 프리패치 과정의 `ERR_ABORTED`성 요청 취소는 관찰됐지만 직접 페이지 접속은 정상이다.
- 검색/언어처럼 보이는 아이콘의 기능 불일치는 UX 버그로 봐야 한다.
- Web3Forms 문의는 실제 전송 테스트가 아직 필요하다.

Korea:
- 모바일 메뉴는 실제 버그라기보다 자동화 선택자 이슈가 있었다.
- 제품 탭은 기능상 가로 스크롤이지만 시각적으로 불안정하다.
- 이미지 용량 최적화가 필요하다.

## 6. 보안 및 외부 환경 리스크

P0:
- Japan `www` 인증서 문제 수정.
- 양쪽 HTTP 접속을 HTTPS로 강제 전환.

P1:
- Japan 사이트맵 생성.
- Korea 레거시 페이지/사이트맵 정리.
- npm audit 기준 취약점 대응.
- Web3Forms와 mailto 의존 문제 보완.

참고:
- GitHub Pages 기본 응답은 정적 사이트로는 충분히 단순하지만, HSTS/CSP 같은 강화 헤더는 제한적이다.
- 기업 고객 대상 사이트로 운영할 경우 Cloudflare 같은 프록시 레이어를 검토할 수 있다.

## 7. 수정 우선순위

### P0. 외부 접속 안정화

1. Japan `www.biolabjp.com` 인증서 오류 해결.
2. Japan/Korea GitHub Pages의 Enforce HTTPS 확인.
3. HTTP 공유 주소가 HTTPS로 넘어가는지 재검증.

### P1. 신뢰도 저하 요소 제거

1. Korea 플레이스홀더 회사 정보 제거 또는 실제 값 반영.
2. Korea 레거시 페이지 삭제/리디렉션/비노출 결정.
3. Japan 사이트맵 생성.
4. Japan/Korea 의존성 보안 업데이트 계획 수립 및 테스트.

### P1. PPT 기준 콘텐츠 보강

Japan:
1. Home에 Korea -> BIOLAB Japan -> Japan 사업 흐름을 더 명확히 배치.
2. Products 개요에 프로바이오틱스 7종, 자연 소재 10종, ODM/OEM, Brand Royalty를 한눈에 정리.
3. ODM/OEM 페이지에 개발, 제조사 매칭, 생산, 수입/통관, 일본 유통 대응 프로세스 추가.
4. Brand Royalty 페이지에 iHEAL 브랜드 활용 범위와 일본 파트너 모델 추가.
5. Contact 페이지에 문의 유형과 대응 범위 추가.
6. `NVP-1702` / `NVP-17902` 표기 통일.

Korea:
1. 자연 소재 누락 3종 반영 여부 결정 후 데이터 추가.
2. 공급제품을 B2B 소재 중심으로 재정렬.
3. iHEAL 소비자 제품은 별도 `브랜드 제품` 또는 참고 섹션으로 분리.
4. 사업영역 페이지에 소재 공급, ODM/OEM, 브랜드 관리의 실제 업무 범위 추가.
5. 고객지원에 실제 문의 흐름 보강.

### P2. 디자인/UX 정리

Japan:
1. Pretendard JP 기준으로 남은 페이지별 제목, 카드, 버튼의 자간/굵기 점검.
2. 모바일 히어로 높이를 줄이고 CTA가 첫 화면에 더 빨리 보이게 조정.
3. 언어 아이콘은 실제 언어 전환, Korea 사이트 이동, Contact 중 하나로 명확히 변경.
4. 검색 아이콘은 실제 검색 기능을 붙이거나 제거.

Korea:
1. 메인 히어로를 국내 B2B 사업 정체성에 맞게 수정.
2. 모바일 제품 탭 라벨을 짧게 바꾸거나 2줄/세그먼트 구조로 변경.
3. 대용량 이미지 압축 및 적정 크기 교체.
4. B2B 소재와 소비자 브랜드의 시각적 위계 분리.

### P2. 폼과 전환

Japan:
1. Web3Forms 키가 라이브에 반영됐는지 확인.
2. 테스트 문의 1건으로 실제 수신 확인.
3. 실패 시 이메일 대체 경로를 명확히 표시.

Korea:
1. `mailto` 유지 여부 결정.
2. 정적 폼 서비스 도입 검토.
3. 이메일/전화/문의 유형별 CTA 정리.

### P3. 최종 QA

1. Chrome, Edge, 모바일 Safari 계열 확인.
2. 1440px, 390px 기준 캡처 비교.
3. 주요 페이지 200 응답 확인.
4. 콘솔 오류 확인.
5. 폰트 로딩 확인.
6. 이미지 깨짐/용량 확인.
7. 사이트맵/robots 확인.
8. `npm run build`, `npm audit` 재확인.
9. GitHub Pages 배포 후 라이브 주소 재검수.

## 8. 수정 실행 방식

권장 순서:
1. 현재 상태 백업 커밋.
2. Japan 도메인/HTTPS/사이트맵 처리.
3. Korea 플레이스홀더/레거시 페이지 처리.
4. PPT 기준 콘텐츠 보강.
5. Japan Pretendard JP 기준 세부 타이포그래피 마감.
6. Korea 모바일 탭/이미지/문의 개선.
7. 의존성 업데이트와 회귀 테스트.
8. 최종 빌드, 라이브 배포, 브라우저 검수.

브랜치 전략:
- 현재는 `main`에 직접 작업 중이다.
- 리스크가 큰 의존성 업데이트는 별도 커밋으로 분리한다.
- 도메인/DNS 설정은 코드 커밋과 별도로 체크리스트로 관리한다.

커밋 분리 제안:
1. `Add audit and precision implementation plan`
2. `Apply Pretendard JP typography to Japan site`
3. `Fix Japan domain sitemap and HTTPS readiness`
4. `Clean Korea sitemap and placeholder company data`
5. `Align BIOLAB content with introducing deck`
6. `Polish mobile UX and performance`

## 9. 이번 백업에 포함되는 내용

Japan 저장소:
- Pretendard JP variable font 파일
- Pretendard JP 라이선스
- 로컬 폰트 연결 코드
- 전역 타이포그래피 정리
- 이 통합 계획서

Korea 저장소:
- 국내 사이트맵 정밀 검수 보고서
- 이 통합 계획서

이번 백업에 포함되지 않는 내용:
- 실제 DNS/인증서 설정 변경
- 실제 문의 폼 전송 테스트
- 제품/사업 페이지 본문 보강
- 의존성 보안 업데이트
- 이미지 압축
