---
version: 2.0
name: hkt-design-system
description: 가상 회사 HKT (주)한결테크의 디자인 시스템. 반도체 RF 장비 위탁생산(CM)·수리와 케이블하네스·판금 협력사 관리를 하는 작은 제조 협력사다. 흰 캔버스 위에 HKT 블루(`#1F4E9C`) 단색 계열을 쓰고, 짙은 남색(`#153B78`)은 표지·구분·클로징과 푸터에만, 앰버(`#C98A2B`) 하나를 포인트로 한 화면 1~2곳에만 쓴다. 영문·숫자는 Google Sans, 한글은 Gowun Batang. 구획은 hairline과 여백으로만 하고, 콜아웃형 카드는 쓰지 않는다. 로고는 블루 정사각형 안의 흰 H를 앰버 "한결 라인"이 관통하는 형태다.
base: HKT house design system

colors:
  primary: "#1F4E9C"
  primary-deep: "#153B78"
  primary-deeper: "#0F2C5C"
  primary-pale: "#EAF1FC"
  primary-pale-2: "#F4F8FE"
  on-primary: "#FFFFFF"
  canvas: "#FFFFFF"
  surface: "#F6F9FD"
  ink: "#0B1220"
  steel: "#5B6472"
  steel-soft: "#8A93A3"
  hairline: "#E2E8F3"
  hairline-strong: "#CBD8ED"
  amber: "#C98A2B"
  amber-pale: "#FBE8D3"
  good: "#1F8A5F"
  good-pale: "#E4F3EA"
  risk: "#C1443C"
  risk-pale: "#FBE7E5"
  logo-blue: "#1F4E9C"
  logo-blue-light: "#2B63BF"

typography:
  cover-title:
    fontFamily: "'Google Sans', 'Gowun Batang', serif"
    fontSize: 44px
    pptSize: 40pt
    fontWeight: 700
    lineHeight: 1.15
  section-number:
    fontFamily: "'Google Sans', sans-serif"
    fontSize: 200px
    pptSize: 150pt
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: -2px
  slide-title:
    fontFamily: "'Google Sans', 'Gowun Batang', serif"
    fontSize: 32px
    pptSize: 26pt
    fontWeight: 700
    lineHeight: 1.25
  page-title:
    fontFamily: "'Google Sans', 'Gowun Batang', serif"
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.3
    note: "웹 앱·문서 페이지 제목"
  eyebrow:
    fontFamily: "'Google Sans', sans-serif"
    fontSize: 13px
    pptSize: 11pt
    fontWeight: 700
    letterSpacing: 0.12em
    textTransform: uppercase
  card-title:
    fontFamily: "'Google Sans', 'Gowun Batang', serif"
    fontSize: 18px
    pptSize: 15pt
    fontWeight: 700
    lineHeight: 1.35
  body:
    fontFamily: "'Google Sans', 'Gowun Batang', serif"
    fontSize: 16px
    pptSize: 13.5pt
    fontWeight: 400
    lineHeight: 1.6
  table-header:
    fontFamily: "'Google Sans', 'Gowun Batang', serif"
    fontSize: 14px
    pptSize: 12.5pt
    fontWeight: 600
  table:
    fontFamily: "'Google Sans', 'Gowun Batang', serif"
    fontSize: 14px
    pptSize: 12.5pt
    fontWeight: 400
    lineHeight: 1.45
  stat-number:
    fontFamily: "'Google Sans', sans-serif"
    fontSize: 60px
    pptSize: 52pt
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -1px
  footer:
    fontFamily: "'Google Sans', 'Gowun Batang', serif"
    fontSize: 12px
    pptSize: 9pt
    fontWeight: 500
    letterSpacing: 0.06em
  logo-wordmark:
    fontFamily: "Google Sans Bold (HKT) · Pretendard Bold ((주)한결테크)"
    note: "로고 파일 안에 윤곽선으로만 있다. 다시 타이핑하지 않는다"

rounded:
  none: 0px
  sm: 9px
  md: 14px
  lg: 18px
  pill: 999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  margin-x: 67px

components:
  hairline-card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.md}"
    padding: 20px
  value-tile:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    number: "{colors.amber}"
    rounded: "{rounded.md}"
    padding: 22px
  stat-card:
    backgroundColor: "{colors.canvas}"
    border: "1px solid {colors.hairline-strong}"
    textColor: "{colors.primary-deep}"
    typography: "{typography.stat-number}"
    rounded: "{rounded.lg}"
    padding: 24px
  tag:
    backgroundColor: "{colors.primary-pale}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  data-table-header:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.table-header}"
  data-table-row-even:
    backgroundColor: "{colors.surface}"
  status-text:
    good: "{colors.good}"
    risk: "{colors.risk}"
    style: "색 글자 + 짧은 라벨. 배지·상자 없음"
  process-step:
    backgroundColor: "{colors.canvas}"
    border: "1px solid {colors.hairline-strong}"
    rounded: "{rounded.sm}"
  process-step-start:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    height: 40px
  input:
    border: "1px solid {colors.hairline-strong}"
    rounded: "{rounded.sm}"
    height: 40px
  footer-bar:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    height: 33px
  hangyeol-line:
    color: "{colors.amber}"
    thickness: "화면 높이의 1.2%"
    use: "표지·구분·클로징에서 화면을 가로지르는 앰버 가로줄"
---

## Overview

HKT (주)한결테크는 교육용 가상 회사다. Novion의 RF 장비를 위탁생산(CM)·수리하고, 케이블하네스·판금 협력사를 관리한다. 이름의 “한결”은 *처음부터 끝까지 한결같은 품질*이라는 뜻이다.

HKT가 만드는 것은 대부분 고객과 협력사에 내는 자료다. 제안서, 작업절차서(SOP), 검사성적서, 부적합(NCM) 보고서, 사급부품 현황. 사내에서는 협력사 수입검사와 결품 관리 화면을 쓴다. 모두 같은 블루 단색 언어를 쓰고, 표가 주인공이다.

시스템은 **흰 캔버스**(`{colors.canvas}`) 위에 **HKT 블루**(`{colors.primary}` — `#1F4E9C`) 계열을 쓴다. **짙은 남색**(`{colors.primary-deep}` — `#153B78`)은 표지·구분·클로징 배경과 푸터 바에, **앰버**(`{colors.amber}` — `#C98A2B`)는 큰 숫자와 핵심 라벨 1~2곳, 그리고 로고의 한결 라인에만 쓴다.

**Key Characteristics:**
- 흰 캔버스 + HKT 블루 단색 계열. 남색은 표지·구분·클로징·푸터 전용
- 앰버가 유일한 포인트 색. 한 화면 1~2곳
- 영문 알파벳과 숫자는 항상 Google Sans, 한글은 Gowun Batang
- 표가 주인공. 한 줄에 한 항목, 머리글만 블루
- 구획은 hairline과 여백으로만. 그림자·좌측 색 띠·제목 밑줄·콜아웃 카드 없음
- 상태는 색 글자(good/risk)와 짧은 라벨로. 배지 상자를 쓰지 않는다
- 표지·구분·클로징에는 화면을 가로지르는 앰버 한결 라인

## Colors

### Brand & Accent
- **HKT Blue** (`{colors.primary}` — `#1F4E9C`): 본문 강조, 아이콘, 표 머리글, eyebrow 번호, 링크, 주 버튼. 로고 정사각형과 같은 색.
- **Blue Deep** (`{colors.primary-deep}` — `#153B78`): 표지·구분·클로징 배경, 밸류 타일, 푸터 바, 앱 사이드바.
- **Blue Deeper** (`{colors.primary-deeper}` — `#0F2C5C`): 표지 배경의 원형 블롭 두 번째 겹.
- **Amber** (`{colors.amber}` — `#C98A2B`): **유일한 포인트 색.** 큰 숫자, 핵심 라벨, 한결 라인.

### Surface
- **Canvas** `#FFFFFF`: 기본 배경. **Surface** `#F6F9FD`: 카드, 표 짝수 행.
- **Blue Pale** `#EAF1FC`: 태그 배경, 선택된 행. **Blue Pale 2** `#F4F8FE`: 가장 옅은 틴트(입력 영역 배경).
- **Hairline** `#E2E8F3`: 구분선. **Hairline Strong** `#CBD8ED`: 표 테두리, 통계 카드, 입력창.

### Text
- **Ink** `#0B1220`: 제목·본문. **Steel** `#5B6472`: 보조 설명. **Steel Soft** `#8A93A3`: 캡션·페이지 태그(장식성 글자만).

### Semantic
- **Good** `#1F8A5F` / Good Pale `#E4F3EA`: 합격, 일정 확정.
- **Risk** `#C1443C` / Risk Pale `#FBE7E5`: 불합격, 회신 대기, 납기 위험. 남용 금지.
- Pale 색은 표 행 강조에만. 상자·배지로 쓰지 않는다.

### Accessibility Notes

| 조합 | 명도비 | 쓰는 법 |
|---|---|---|
| `{colors.primary}` / `{colors.canvas}` | 8.0:1 | 링크·강조 |
| `{colors.on-primary}` / `{colors.primary-deep}` | 10.9:1 | 다크 화면 본문 |
| `{colors.amber}` / `{colors.canvas}` | 2.9:1 | 본문 글자로 쓰지 않는다. 24px 이상 Bold 숫자만 |
| `{colors.steel-soft}` / `{colors.canvas}` | 3.1:1 | 장식성 캡션만. 읽을 정보는 `{colors.steel}` (6.0:1) |

## Typography

### Font Family
- **영문 알파벳과 숫자는 항상 Google Sans.** 제목, 본문, 표, 라벨, 페이지 번호 모두.
- **한글은 Gowun Batang.** 웹에서는 `font-family: "Google Sans", "Gowun Batang", serif;`로 쓰면 Google Sans에 한글이 없어 글자 단위로 자동 전환된다.
- **PPT**에서는 텍스트를 글자 종류별 run으로 나눠 run마다 서체를 지정한다.
- 로고 안의 `(주)한결테크`만 예외로 Pretendard Bold(윤곽선)다.

### Hierarchy — Slides (PPT 13.333×7.5in / Web 1280×720)

| Token | PPT | Web | Weight | Use |
|---|---|---|---|---|
| `{typography.cover-title}` | 40pt | 44px | 700 | 표지 제목 |
| `{typography.section-number}` | 150pt | 200px | 700 | 구분 슬라이드 큰 번호 |
| `{typography.slide-title}` | 26pt | 32px | 700 | 슬라이드 제목 |
| `{typography.eyebrow}` | 11pt | 13px | 700 | `02 / SECTION TAG` |
| `{typography.card-title}` | 15pt | 18px | 700 | 카드·타일 제목 |
| `{typography.body}` | 13.5pt | 16px | 400 | 본문 |
| `{typography.table-header}` / `{typography.table}` | 12.5pt | 14px | 600 / 400 | 표 |
| `{typography.stat-number}` | 52pt | 60px | 700 | 큰 숫자 |
| `{typography.footer}` | 9pt | 12px | 500 | 푸터 |

**하한선:** 본문 13pt, 제목 26pt 아래로 내리지 않는다. 웹 앱 화면은 본문 15px, 표 14px까지.

## Layout

### Slide Grid
- 16:9, 좌우 여백 `{spacing.margin-x}`(67px = 0.7in) 고정.
- 본문 슬라이드: 왼쪽 위 eyebrow + 제목, **오른쪽 위 가로형 로고**, 아래 남색 푸터 바(심볼 · 문서명 · 페이지).
- 표지·구분·클로징: 남색 배경, 흰 로고, 원형 블롭 두 겹, 화면을 가로지르는 앰버 한결 라인.

### Slide Patterns
1. 표지 · 2. 목차 · 3. 구분(큰 번호) · 4. 2단 + 밸류 타일 · 5. 번호 목록 · 6. 이중 표 · 7. 프로세스 플로우 · 8. 이미지 + 불릿 · 9. 빅 스탯 비교 · 10. 비교표 · 11. 클로징

### Web App (협력사 포털 · 사내 관리)
- 왼쪽 사이드바 220px, 남색(`{colors.primary-deep}`) 배경에 흰 심볼 + 메뉴. 선택 메뉴는 흰 글자 + `rgba(255,255,255,.12)` 배경. 색 띠나 밑줄은 쓰지 않는다.
- 본문은 흰 캔버스, 위쪽 eyebrow + 페이지 제목, 바로 아래 표. 카드보다 표를 먼저 쓴다.

### Document (A4 · 성적서 · 보고서)
- 여백 15mm. 위쪽: 왼쪽 가로형 로고, 오른쪽 문서번호 `HKT-QA-2611-014`. 그 아래 2px 블루 선 한 줄.
- 표 머리글 블루, 판정 칸은 good/risk 색 글자. 서명란은 hairline 상자.

### Spacing System
- 기본 8px, 구조 여백 16px 단위. 카드 사이 14px 이상.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | 테두리·그림자 없음 | 배경, 밸류 타일, 다크 패널 |
| 1 — Hairline | 1px `{colors.hairline}` | 카드, 표, 프로세스 박스 |
| 2 — Hairline Strong | 1px `{colors.hairline-strong}` | 통계 카드, 입력창 |

그림자와 그라디언트는 쓰지 않는다. 깊이는 표지의 원형 블롭 두 겹으로만 낸다.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | 슬라이드, 표, 한결 라인 |
| `{rounded.sm}` | 9px | 버튼, 입력창, 프로세스 박스 |
| `{rounded.md}` | 14px | 카드, 밸류 타일 |
| `{rounded.lg}` | 18px | 통계 카드 |
| `{rounded.pill}` | 999px | 태그 |

## Components

### Labels
- **Eyebrow:** 두 자리 번호(블루 Bold, 다크 화면은 앰버) + `/` + 영문 대문자 태그(회색).
- **Tag:** `primary-pale` 배경 + 블루 글자, pill. 카테고리 표시만.

### Cards & Tiles
- **Hairline card:** surface 배경, hairline, 14px. 좌측 색 띠·그림자·굵은 테두리 없음.
- **Value tile:** 남색 배경, 흰 글자, 번호는 앰버. 2×2 또는 1×3.
- **Stat card:** hairline-strong, 18px. 큰 숫자(남색) + 아래 key-value 행.

### Data
- **Data table:** 머리글 행만 블루 배경 + 흰 글자. 본문은 hairline 구분 + 짝수 행 surface. 판정은 good/risk 색 글자.
- **Process flow:** hairline 박스를 블루 화살표로 잇는다. 시작 박스만 남색.

### Forms
- **Button:** 블루 배경 흰 글자, 9px, 높이 40px. 보조 버튼은 흰 배경 + hairline-strong.
- **Input:** hairline-strong 테두리, 9px, 높이 40px, 포커스 시 블루 테두리.

### 쓰지 않는 것
- 콜아웃형 카드: 굵은 색 테두리 상자, 모서리 상태 배지, 카드 안의 색 상자, 아이콘+색 박스 경고문
- 주의 사항은 표의 한 행이나 본문 한 문장으로 쓴다

## Applications — 한 시스템, 네 곳

| 어디 | 무엇 | 이 시스템에서 가져가는 것 |
|---|---|---|
| 홈페이지 | hkt.example — CM·수리 역량 소개, 문의 | 남색 히어로 + 한결 라인, 밸류 타일 1×3, 역량 표 |
| 협력사 포털 (SaaS) | 협력사 출하검사 등록, 도면 변경 공유 | 남색 사이드바, 표 중심 화면, 버튼·입력 |
| 부서 문서 | 검사성적서, 부적합 보고서, 작업절차서 | 문서 헤더 + 블루 선, 데이터 표, good/risk 판정 |
| 관리 시스템 | 사급부품 결품 현황, 수리 이력 (사내) | 표 + stat card, 색 글자 상태 |

## Logo

| 파일 | 쓰는 곳 |
|---|---|
| `logo/hkt_logo_horizontal.svg` | 흰색·밝은 배경 (기본) |
| `logo/hkt_logo_horizontal_white.svg` | 남색·어두운 배경. 심볼 정사각형이 밝은 블루(`#2B63BF`)로 바뀐다 |
| `logo/hkt_symbol.svg` | 파비콘, 푸터 바, 앱 사이드바 |

- **구성:** 블루 정사각형 안의 흰 H를 앰버 가로줄(한결 라인)이 끝에서 끝까지 관통한다. 오른쪽에 `HKT`(Google Sans Bold), 아래 `(주)한결테크`(Pretendard Bold).
- **여백:** 심볼 한 변의 1/4 이상. **최소 크기:** 가로형 높이 28px(한글 상호가 읽히는 크기), 심볼 16px.
- **금지:** 한결 라인을 짧게 자르거나 색을 바꾸기, 비율 변형, 블루 배경 위에 기본(color) 로고, 회사명을 서체로 다시 쓰기.

## Do's and Don'ts

### Do
- 목록 데이터는 평평한 표, 한 줄에 한 항목
- 영문·숫자 Google Sans, 한글 Gowun Batang
- 앰버는 한 화면에 1~2곳
- 본문 13pt(웹 15px) 이상
- 여백으로 구조를 표현한다 (16px 단위)

### Don't
- 콜아웃형 카드(굵은 색 테두리, 모서리 상태 배지, 카드 안 색 상자, 카드 타일 격자)
- 제목 아래 색 띠·밑줄, 카드 왼쪽 색 띠
- 영문·숫자에 Gowun Batang
- 그림자·그라디언트
- 그린 계열을 강조색으로 쓰기 (good은 값 표시 전용)

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | 1열, 여백 16px, 사이드바는 위쪽 메뉴로 접힘, 표는 가로 스크롤 |
| Tablet | 768–1023px | 카드 2열. 작업절차서는 태블릿 가로 화면 기준 |
| Desktop | ≥ 1024px | 슬라이드 1280×720, 앱 본문 최대 1200px |

웹 슬라이드는 비율을 지키며 통째로 축소한다.

## Iteration Guide

1. 새 화면은 Applications 표의 네 곳 중 가장 가까운 것에서 출발한다
2. 요청할 때 hex 대신 토큰 이름으로 말한다(`{colors.primary}`, `hairline-card`, `data-table`)
3. 새 강조가 필요해도 색을 더하지 않는다. 블루 농도와 앰버 한 곳으로 해결한다
4. 로고는 `logo/` 파일만 쓰고, 고칠 때는 `07_Brand_Kit/_source/logos.py`로 다시 만든다
5. 이 파일을 고치면 `design_system_hkt.html`도 다시 만든다(`07_Brand_Kit/_source/build_design_pages.py`)

> 교육용 가상 회사의 디자인 시스템이며, 같은 이름의 실제 기업과는 관련이 없다.
