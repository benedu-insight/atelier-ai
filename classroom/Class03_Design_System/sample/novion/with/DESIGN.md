---
version: 2.1
name: novion-design-system
description: 가상 회사 Novion(노비온)의 디자인 시스템. 반도체 장비용 RF Generator·Matcher 제조사다. getdesign.md의 Stripe 분석을 출발점으로, 흰 캔버스와 깊은 네이비 글자, 일렉트릭 인디고 한 가지를 행동 색으로 쓴다. 인디고→바이올렛→앰버 그라디언트는 로고와 히어로 한 곳에만 둔다. 서체는 사내 발표 자료(제로의 시대)와 같다. 큰 제목은 리페리 포인트 Black, 부제는 리페리 베이스, 나머지는 원티드 산스(Wanted Sans), 숫자는 tabular figures. 로고 워드마크만 Sora 윤곽선이다. 홈페이지, 고객 포털(SaaS), 부서 문서, 사내 관리 시스템이 모두 이 토큰 하나를 쓴다.
base: https://getdesign.md/stripe/design-md

colors:
  primary: "#533AFD"
  primary-deep: "#4434D4"
  primary-press: "#2E2B8C"
  primary-soft: "#EEEDFF"
  brand-violet: "#9B3FE0"
  brand-amber: "#FF7A3D"
  gradient-start: "#3D2BF0"
  ink: "#0D253D"
  ink-secondary: "#273951"
  ink-mute: "#5F6E86"
  canvas: "#FFFFFF"
  canvas-soft: "#F6F9FC"
  canvas-night: "#0A1730"
  hairline: "#E3E8EE"
  hairline-input: "#A8C3DE"
  on-primary: "#FFFFFF"
  success: "#0E9F6E"
  success-soft: "#E3F6EF"
  success-text: "#0B7A55"
  warning: "#C77700"
  warning-soft: "#FDF1DE"
  warning-text: "#985700"
  danger: "#EA2261"
  danger-soft: "#FDE7EE"
  danger-text: "#C2185B"

gradients:
  brand: "linear-gradient(135deg, #3D2BF0 0%, #9B3FE0 55%, #FF7A3D 100%)"
  mesh-hero: "radial-gradient(60% 80% at 15% 10%, #533AFD55, transparent), radial-gradient(50% 70% at 85% 0%, #FF7A3D44, transparent), radial-gradient(60% 60% at 60% 40%, #9B3FE033, transparent)"

typography:
  display-xl:
    fontFamily: "'Leferi Point Type Black', 'Wanted Sans', sans-serif"
    fontSize: 52px
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: -1.2px
  display-lg:
    fontFamily: "'Leferi Point Type Black', 'Wanted Sans', sans-serif"
    fontSize: 36px
    fontWeight: 800
    lineHeight: 1.18
    letterSpacing: -0.8px
  lead:
    fontFamily: "'Leferi Base Type Regular', 'Wanted Sans', sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    note: "히어로 부제, 인용 한 줄"
  heading:
    fontFamily: "'Wanted Sans', sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
  title:
    fontFamily: "'Wanted Sans', sans-serif"
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "'Wanted Sans', sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "'Wanted Sans', sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.55
  eyebrow:
    fontFamily: "'Wanted Sans', sans-serif"
    fontSize: 12px
    fontWeight: 800
    letterSpacing: 1.2px
    textTransform: uppercase
  table:
    fontFamily: "'Wanted Sans', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    fontFeature: "tnum"
  stat-number:
    fontFamily: "'Wanted Sans', sans-serif"
    fontSize: 44px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: -1px
    fontFeature: "tnum"
  doc-title:
    fontFamily: "'Leferi Point Type Black', 'Wanted Sans', sans-serif"
    fontSize: 22pt
    fontWeight: 800
    note: "A4 문서 제목"
  doc-body:
    fontFamily: "'Wanted Sans', sans-serif"
    fontSize: 10.5pt
    fontWeight: 400
    lineHeight: 1.6
  logo-wordmark:
    fontFamily: "Sora SemiBold"
    note: "로고 파일 안에 윤곽선으로만 있다. 다시 타이핑하지 않는다"

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 64px
  page-max: 1120px

shadows:
  card: "0 1px 2px #0D253D0F, 0 8px 24px -12px #0D253D26"
  pop: "0 12px 32px -12px #0D253D40"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    padding: 8px 18px
  button-secondary:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-deep}"
    rounded: "{rounded.pill}"
    padding: 8px 18px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "{colors.canvas}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.lg}"
    shadow: "{shadows.card}"
    padding: 20px
  input:
    backgroundColor: "{colors.canvas}"
    border: "1px solid {colors.hairline-input}"
    rounded: "{rounded.sm}"
    height: 36px
  badge:
    rounded: "{rounded.pill}"
    typography: "{typography.body-sm}"
    padding: 2px 10px
    variants: "success / warning / danger = *-text 글자색 + *-soft 배경"
  table-header:
    textColor: "{colors.ink-mute}"
    typography: "{typography.eyebrow}"
    borderBottom: "1px solid {colors.hairline}"
  table-row:
    height: 48px
    compactHeight: 36px
    borderBottom: "1px solid {colors.hairline}"
  hero:
    background: "{gradients.mesh-hero}"
    note: "한 화면에 한 곳"
  spec-block:
    title: "모델명 {typography.heading}"
    values: "출력 kW · 주파수 MHz · 효율 % 3~4개, tnum"
  app-shell:
    sidebar: "{colors.canvas-soft}, 폭 232px"
    topbar: "{colors.canvas}, 높이 56px, 아래 hairline"
  doc-header:
    left: "가로형 로고"
    right: "문서번호 NV-QA-2026-014 + Rev"
---

# Novion (노비온) Design System

## Overview

Novion은 교육용 가상 회사다. 반도체 식각·증착 장비에 들어가는 RF Generator와 RF Matcher를 설계하고 만든다. 고객은 장비 회사이고, 고객이 Novion을 처음 만나는 곳은 홈페이지와 제품 자료, 그다음은 고객 포털과 견적·보고서다. 사내에서는 생산·출하 관리 화면을 매일 쓴다.

이 문서는 그 네 곳을 한 회사로 보이게 만드는 기준이다. 시스템은 **흰 캔버스**(`{colors.canvas}`)와 **네이비 글자**(`{colors.ink}` — `#0D253D`) 위에, 행동 색으로 **일렉트릭 인디고**(`{colors.primary}` — `#533AFD`) 하나를 쓴다. 인디고→바이올렛→앰버 **그라디언트**는 RF 파형 로고에서 왔고, 로고와 히어로 한 곳에만 둔다.

**Key Characteristics:**
- 흰 캔버스 + 네이비 글자. 순수 검정은 쓰지 않는다
- 인디고는 버튼·링크·선택 상태에만. 본문 글자색으로 쓰지 않는다
- 그라디언트는 한 화면에 한 곳(로고 또는 히어로). 표·카드·버튼에는 쓰지 않는다
- 큰 제목은 리페리 포인트 Black, 본문·표·라벨은 원티드 산스. 한글과 영문을 한 서체로 쓴다
- 숫자는 항상 tabular figures. 사양 수치는 단위와 함께 (`2 kW @ 13.56 MHz`)
- 카드는 hairline 테두리 + 아주 옅은 그림자 한 겹. 버튼은 pill
- 홈페이지 · 고객 포털 · 부서 문서 · 관리 시스템이 같은 토큰을 쓴다

## Colors

### Brand & Accent
- **Indigo** (`{colors.primary}` — `#533AFD`): 주 버튼, 링크, 선택된 탭·메뉴, 포커스 링, 차트 기준 계열.
- **Indigo Deep** (`{colors.primary-deep}` — `#4434D4`): 버튼 hover, 보조 버튼 글자.
- **Indigo Press** (`{colors.primary-press}` — `#2E2B8C`): 버튼 눌림 상태.
- **Indigo Soft** (`{colors.primary-soft}` — `#EEEDFF`): 보조 버튼 배경, 선택된 행 배경.
- **Violet / Amber** (`{colors.brand-violet}` `#9B3FE0` / `{colors.brand-amber}` `#FF7A3D`): 그라디언트 안에서만 쓴다. 앰버 단독 사용은 큰 숫자 한 곳까지.

### Surface
- **Canvas** (`{colors.canvas}` — `#FFFFFF`): 페이지, 카드, 문서 배경.
- **Canvas Soft** (`{colors.canvas-soft}` — `#F6F9FC`): 섹션 구분 배경, 앱 사이드바, 표 머리 영역.
- **Canvas Night** (`{colors.canvas-night}` — `#0A1730`): 푸터, 다크 슬라이드(표지·구분·클로징).
- **Hairline** (`{colors.hairline}` — `#E3E8EE`): 구분선, 카드 테두리. **Hairline Input** (`#A8C3DE`): 입력창 테두리.

### Text
- **Ink** (`{colors.ink}` — `#0D253D`): 제목·본문.
- **Ink Secondary** (`{colors.ink-secondary}` — `#273951`): 긴 본문, 표 본문.
- **Ink Mute** (`{colors.ink-mute}` — `#5F6E86`): 라벨, 표 머리글, 캡션.

### Semantic
- **Success** `#0E9F6E` / soft `#E3F6EF`: 정상, 합격, 출하 완료.
- **Warning** `#C77700` / soft `#FDF1DE`: 주의, 납기 임박.
- **Danger** `#EA2261` / soft `#FDE7EE`: 불합격, 지연, 알람.
- badge 글자는 진한 `*-text` 색(`#0B7A55` · `#985700` · `#C2185B`)을 쓴다. soft 배경 위에서 4.5:1을 넘기기 위해서다.
- 상태는 색만으로 말하지 않는다. 항상 짧은 라벨(“정상”, “지연 3일”)을 같이 쓴다.

### Accessibility Notes

| 조합 | 명도비 | 쓰는 법 |
|---|---|---|
| `{colors.ink}` / `{colors.canvas}` | 15.6:1 | 본문 기본 |
| `{colors.ink-mute}` / `{colors.canvas}` | 5.2:1 | 라벨·캡션까지 (canvas-soft 위 4.9:1) |
| `{colors.primary}` / `{colors.canvas}` | 6.2:1 | 링크·버튼 글자 |
| `{colors.on-primary}` / `{colors.primary}` | 6.2:1 | 주 버튼 |
| `{colors.warning-text}` / `{colors.warning-soft}` | 5.1:1 | badge 글자 (success-text 4.8:1, danger-text 5.0:1) |
| `{colors.brand-amber}` / `{colors.canvas}` | 2.6:1 | 글자로 쓰지 않는다. 그라디언트·큰 숫자 장식만 |

## Typography

### Font Family
서체는 사내 발표 자료 「제로의 시대」(Class03_Design_System/제로의 시대.pptx)의 조합을 그대로 가져왔다. 문서와 화면과 발표가 같은 목소리를 낸다.

- **리페리 포인트 Black (Leferi Point Type Black):** 큰 제목 전용. 히어로, 섹션 제목, 문서 제목, 슬라이드 제목. 한 화면에 한두 곳.
- **리페리 베이스 (Leferi Base Type Regular):** 히어로 부제와 인용 한 줄.
- **원티드 산스 (Wanted Sans) 400 · 600 · 800:** 그 밖의 모든 글자. 본문, 표, 라벨, 버튼, 큰 숫자. 한글·영문·숫자를 한 서체로 쓴다.
- 웹 스택: 제목 `"Leferi Point Type Black", "Wanted Sans", sans-serif`, 본문 `"Wanted Sans", sans-serif`.
- 웹 폰트: 원티드 산스는 `cdn.jsdelivr.net/gh/wanteddev/wanted-sans`(SIL OFL). 리페리는 윤디자인 무료 서체로 웹폰트 파일을 함께 올린다. 못 쓰는 환경은 Pretendard.
- **로고 워드마크만 Sora.** 로고 파일 안에 윤곽선으로 들어 있다. 본문·제목에 Sora를 쓰지 않는다.
- 숫자 칸(단가, 수량, 측정값, 날짜)은 반드시 `font-feature-settings: "tnum"`.

### Hierarchy — Web

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 52px | Leferi Point Black | 홈페이지 히어로 제목 |
| `{typography.display-lg}` | 36px | Leferi Point Black | 섹션 제목, 포털 페이지 제목 |
| `{typography.lead}` | 18px | Leferi Base Regular | 히어로 부제, 인용 |
| `{typography.heading}` | 22px | Wanted Sans 600 | 카드 묶음 제목, 모델명 |
| `{typography.title}` | 17px | Wanted Sans 600 | 카드 제목, 버튼 |
| `{typography.body}` | 15px | 400 | 본문 |
| `{typography.body-sm}` | 13px | 400 | 보조 설명, 배지 |
| `{typography.eyebrow}` | 12px | 800 | 섹션 라벨, 표 머리글 (대문자, 자간 1.2px) |
| `{typography.table}` | 14px | 400 | 표 본문 (tnum) |
| `{typography.stat-number}` | 44px | Wanted Sans 800 | 대시보드 큰 숫자 |

### Hierarchy — Document (A4) · Slide (1280×720)

| 쓰임 | A4 | Slide |
|---|---|---|
| 제목 | 22pt Leferi Point Black | 40px Leferi Point Black |
| 소제목 | 13pt Wanted Sans 600 | 22px Wanted Sans 600 |
| 본문 | 10.5pt | 17px |
| 표 | 9.5pt (tnum) | 15px |
| 캡션 | 8pt | 13px |

굵은 리페리 제목은 한 화면에 한두 곳만 쓴다. 제목이 굵은 대신 본문과 표는 원티드 산스 400으로 가볍게 둔다.

## Layout

### Web
- 최대 폭 `{spacing.page-max}`(1120px), 12열, 좌우 여백 24px 이상(휴대폰 16px).
- 섹션 사이 `{spacing.section}`(64px). 카드 사이 16~24px.
- 홈페이지: 히어로(메시 그라디언트) → 흰 섹션 → `canvas-soft` 섹션을 번갈아 둔다.

### App (고객 포털 · 관리 시스템)
- 왼쪽 사이드바 232px(`{colors.canvas-soft}`), 위쪽 바 56px(흰색 + 아래 hairline), 본문 여백 24~32px.
- 사이드바 맨 위에 심볼 + 서비스 이름. 선택 메뉴는 `primary-soft` 배경 + 인디고 글자.
- 표 행 높이 48px. 사내 관리 시스템처럼 한 화면에 많이 보여야 하면 compact 36px.

### Document (A4)
- 여백 18mm. 위쪽 문서 헤더: 왼쪽 가로형 로고(높이 9mm), 오른쪽 문서번호 `NV-QA-2026-014` + Rev.
- 표지에만 위쪽 4mm 그라디언트 띠를 둔다. 본문 페이지는 흰 바탕 + hairline.

### Spacing System
- 기본 단위 4px. 토큰: 2 · 4 · 8 · 12 · 16 · 24 · 32 · 64.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | 테두리·그림자 없음 | 페이지 배경, 섹션 |
| 1 — Card | 1px `{colors.hairline}` + `{shadows.card}` | 카드, 표 상자 |
| 2 — Pop | `{shadows.pop}` | 드롭다운, 모달 |

그림자는 한 겹만. 겹쳐 쌓지 않는다.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | 체크박스, 작은 칩 |
| `{rounded.sm}` | 6px | 입력창, 태그 |
| `{rounded.md}` | 8px | 표 상자, 드롭다운 |
| `{rounded.lg}` | 12px | 카드 |
| `{rounded.xl}` | 16px | 히어로 안 이미지, 큰 패널 |
| `{rounded.pill}` | 9999px | 버튼, 배지 |

## Components

### Buttons
- **Primary:** 인디고 pill, 흰 글자 `{typography.title}`, 패딩 8×18. hover `primary-deep`, 눌림 `primary-press`.
- **Secondary:** `primary-soft` 배경 + `primary-deep` 글자.
- **Ghost:** 투명 배경 + hairline 테두리. 표 안의 행 동작.
- 한 화면에 Primary는 하나만.

### Cards & Data
- **Card:** 흰 배경, hairline, 12px, 그림자 한 겹. 왼쪽 색 띠 금지.
- **Data table:** 머리글은 eyebrow 스타일(대문자, ink-mute, 배경 없음). 행 구분은 hairline. 숫자 열은 오른쪽 정렬 + tnum.
- **Badge:** pill, soft 배경 + `*-text` 글자. 정상(success), 주의(warning), 지연·불합격(danger).
- **Stat:** 큰 숫자 `{typography.stat-number}` + 아래 라벨. 증감은 작은 badge.

### Signature
- **Hero:** 메시 그라디언트 위 흰 글자 대신 **네이비 글자**. 한 화면 한 곳.
- **Spec block:** 모델명(`NPG-2060HG`, heading) + 사양 3~4개(출력 kW, 주파수 MHz, 효율 %)를 한 줄에.
- **Doc header:** 왼쪽 로고, 오른쪽 문서번호와 Rev.

## Applications — 한 시스템, 네 곳

| 어디 | 무엇 | 이 시스템에서 가져가는 것 |
|---|---|---|
| 홈페이지 | novion.example — 제품 소개, 견적 문의 | 히어로 그라디언트 1곳, spec block, Primary pill “견적 요청” |
| 고객 포털 (SaaS) | Novion Connect — 납품 장비 상태, RMA 접수, 납기 조회 | app-shell, 카드, 표, badge. 그라디언트는 로고에만 |
| 부서 문서 | 견적서, FA 보고서, 출하 성적서 (A4·PDF) | doc-header, 표, 문서 타이포. 표지에만 4mm 그라디언트 띠 |
| 관리 시스템 | Novion Ops — 생산 진척, 출하, 부적합 집계 (사내) | app-shell + compact 표(36px), stat, badge |

같은 인디고 버튼, 같은 표 머리글, 같은 배지, 같은 숫자 서체가 네 곳에 나온다. 고객이 홈페이지에서 본 버튼을 포털에서 다시 보고, 견적서의 표를 관리 화면에서 다시 본다.

## Logo

| 파일 | 쓰는 곳 |
|---|---|
| `logo/novion_logo_horizontal.svg` | 흰색·밝은 배경 (기본) |
| `logo/novion_logo_horizontal_white.svg` | 다크 배경, 사진 위 |
| `logo/novion_symbol.svg` | 파비콘, 앱 사이드바, 작은 공간 |

- **구성:** 인디고·바이올렛·앰버 그라디언트 스쿼클 안에 흰 사인파가 ‘N’을 그린다. 워드마크 `novion`은 Sora SemiBold 소문자(윤곽선).
- **여백:** 심볼 높이의 1/4 이상. **최소 크기:** 가로형 높이 24px, 심볼 16px.
- **금지:** 그라디언트 색·방향 바꾸기, 사인파 굵기 바꾸기, 워드마크를 서체로 다시 쓰기, 그라디언트 배경 위에 로고 얹기.

## Do's and Don'ts

### Do
- 그라디언트는 한 화면에 한 곳만
- 사양 수치는 단위와 함께: `2 kW @ 13.56 MHz`, `VSWR ≤ 1.2`
- 숫자 열은 오른쪽 정렬 + tnum
- 상태는 badge 색 + 짧은 라벨
- 영문 병기 문서는 영문을 먼저, 국문을 아래에

### Don't
- 인디고를 큰 면적 배경으로 쓰지 않는다
- 리페리 포인트를 본문·표·버튼에 쓰지 않는다
- 카드 왼쪽 색 띠, 그림자 여러 겹을 쓰지 않는다
- 표·버튼에 그라디언트를 쓰지 않는다
- Sora를 본문이나 제목에 쓰지 않는다

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | 1열, 여백 16px, 앱 사이드바는 위쪽 메뉴 버튼으로 접힘, 표는 가로 스크롤 |
| Tablet | 768–1023px | 카드 2열, 사이드바 아이콘만 |
| Desktop | ≥ 1024px | 최대 폭 1120px, 사이드바 232px |

버튼·메뉴 터치 영역은 최소 40px.

## Iteration Guide

1. 새 화면은 Applications 표의 네 곳 중 가장 가까운 것에서 출발한다
2. 요청할 때 hex 대신 토큰 이름으로 말한다(`{colors.primary}`, `card`, `badge`)
3. 새 강조가 필요해도 색을 더하지 않는다. 인디고 하나와 badge 색으로 해결한다
4. 로고는 `logo/` 파일만 쓰고, 고칠 때는 `07_Brand_Kit/_source/logos.py`로 다시 만든다
5. 이 파일을 고치면 `design_system_novion.html`도 다시 만든다(`07_Brand_Kit/_source/build_design_pages.py`)

> 이 디자인 시스템은 getdesign.md의 Stripe 분석을 출발점으로 삼은 교육용 가상 회사의 독자 해석이며, 어떤 실제 기업과도 관련이 없다.
