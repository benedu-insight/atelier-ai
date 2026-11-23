---
version: 2.1
name: kristal-materials-design-system
description: 가상 회사 Kristal Materials(크리스탈 머티리얼즈)의 디자인 시스템. 식각·증착 공정용 실리콘·SiC·석영 소모성 부품과 고순도 소재를 만드는 반도체 소재 기업이다. getdesign.md의 IBM(Carbon) 분석을 출발점으로, 흰 바탕과 차콜 글자, 한 가지 강조색(크리스탈 틸 `#007D79`), 0px 모서리의 평평한 타일을 쓴다. 서체는 에이투지체(A2Z) 하나로 한글·영문·숫자를 쓰고, Lot No.·측정값·화학식은 IBM Plex Mono. 실험실 성적서처럼 정확하고 건조하며, 표와 수치가 주인공이다.
base: https://getdesign.md/ibm/design-md

colors:
  primary: "#007D79"
  primary-hover: "#006B68"
  primary-deep: "#005D5D"
  teal-50: "#009D9A"
  teal-40: "#08BDBA"
  teal-30: "#3DDBD9"
  teal-10: "#D9FBFB"
  ink: "#161616"
  ink-muted: "#525252"
  ink-subtle: "#8C8C8C"
  canvas: "#FFFFFF"
  layer-01: "#F4F4F4"
  layer-02: "#E8E8E8"
  inverse: "#161616"
  on-inverse: "#F4F4F4"
  border-subtle: "#E0E0E0"
  border-strong: "#8D8D8D"
  focus: "#007D79"
  support-success: "#24A148"
  support-success-text: "#198038"
  support-warning: "#F1C21B"
  support-error: "#DA1E28"
  support-info: "#0043CE"

typography:
  display:
    fontFamily: "'A2Z', Pretendard, sans-serif"
    fontSize: 48px
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: 0
  heading:
    fontFamily: "'A2Z', Pretendard, sans-serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.25
  title:
    fontFamily: "'A2Z', Pretendard, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: "'A2Z', Pretendard, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'A2Z', Pretendard, sans-serif"
    fontSize: 12px
    fontWeight: 400
    letterSpacing: 0.32px
  data:
    fontFamily: "'IBM Plex Mono', monospace"
    fontSize: 13px
    fontWeight: 400
    use: "Lot No., 측정값, 규격, 화학식, 문서번호"
  stat-number:
    fontFamily: "'A2Z', sans-serif"
    fontSize: 42px
    fontWeight: 400
    lineHeight: 1.0
  doc-title:
    fontFamily: "'A2Z', Pretendard, sans-serif"
    fontSize: 20pt
    fontWeight: 400
  doc-body:
    fontFamily: "'A2Z', Pretendard, sans-serif"
    fontSize: 10pt
    lineHeight: 1.55
  logo-wordmark:
    fontFamily: "IBM Plex Sans SemiBold (KRISTAL) · Medium (MATERIALS)"
    note: "로고 파일 안에 윤곽선으로만 있다"

rounded:
  none: 0px
  xs: 2px
  pill: 9999px

spacing:
  "01": 2px
  "02": 4px
  "03": 8px
  "04": 12px
  "05": 16px
  "06": 24px
  "07": 32px
  "08": 40px
  "09": 48px
  "10": 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: 0px
    height: 48px
    padding: "0 64px 0 16px"
    note: "글자 왼쪽 정렬, 오른쪽 끝에 화살표"
  button-secondary:
    backgroundColor: "{colors.inverse}"
    textColor: "#FFFFFF"
    rounded: 0px
    height: 48px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    rounded: 0px
  tile:
    backgroundColor: "{colors.layer-01}"
    rounded: 0px
    border: none
    shadow: none
    padding: 16px
  data-table:
    header: "{colors.layer-02} 배경, 500 weight"
    rowHeight: 48px
    compactRowHeight: 32px
    zebra: false
    divider: "{colors.border-subtle}"
    numeric: "{typography.data} 오른쪽 정렬"
  input:
    backgroundColor: "{colors.layer-01}"
    borderBottom: "1px solid {colors.border-strong}"
    rounded: 0px
    height: 40px
  tag:
    backgroundColor: "{colors.teal-10}"
    textColor: "{colors.primary-deep}"
    rounded: "{rounded.pill}"
    note: "유일하게 둥근 요소"
  notification:
    borderLeft: "3px solid 상태색"
    backgroundColor: "{colors.layer-01}"
    note: "시스템 알림(폼 오류, 저장 실패)에만. 문서 본문에는 쓰지 않는다"
  ui-shell:
    header: "{colors.inverse} 48px, 흰 글자"
    sidenav: "{colors.layer-01} 256px"
---

# Kristal Materials (크리스탈 머티리얼즈) Design System

## Overview

Kristal Materials는 교육용 가상 반도체 소재 기업이다. 플라즈마 식각·증착 장비 안에 들어가는 실리콘 전극(Si Electrode), SiC 포커스링, 석영 부품 같은 소모성 부품과 고순도 소재를 만든다. 고객이 가장 자주 보는 Kristal 자료는 성적서(COA)와 사양서이고, 그다음이 Lot 조회 포털이다.

그래서 이 시스템은 **실험실 성적서처럼** 만든다. 흰 바탕, 차콜 글자(`{colors.ink}` — `#161616`), 강조색은 **크리스탈 틸**(`{colors.primary}` — `#007D79`) 하나, 모든 모서리는 0px. 장식 대신 표와 수치, 단위가 화면을 채운다.

**Key Characteristics:**
- 흰 바탕 + 차콜 글자 + 강조색 틸 하나
- 0px 모서리. 태그(pill)만 예외
- 서체는 에이투지체 하나(큰 제목 3 Light, 본문 4 Regular, 제목 6 SemiBold), 정확히 읽어야 하는 값은 IBM Plex Mono
- 그림자·그라디언트 없음. 깊이는 `layer-01`·`layer-02` 배경 단으로
- 모든 수치에 단위와 측정 조건: `Resistivity 0.015 Ω·cm @ 23 °C`
- 큰 제목은 에이투지체 3 Light로 가볍게. 굵기 대신 크기와 여백으로 위계

## Colors

### Brand & Accent
- **Crystal Teal** (`{colors.primary}` — `#007D79`): 주 버튼, 링크, 선택 상태, 포커스, 차트 기준 계열.
- **Teal Hover / Deep** (`#006B68` / `#005D5D`): hover, 태그 글자.
- **Teal 50·40·30** (`#009D9A` · `#08BDBA` · `#3DDBD9`): 로고 결정면과 차트 계열 구분 전용. 본문 글자로 쓰지 않는다.
- **Teal 10** (`#D9FBFB`): 태그 배경.

### Surface
- **Canvas** `#FFFFFF`: 기본 배경. **Layer 01** `#F4F4F4`: 타일, 입력창, 사이드 내비. **Layer 02** `#E8E8E8`: 표 머리글.
- **Inverse** `#161616`: 앱 헤더, 다크 표지, 보조 버튼.
- **Border Subtle** `#E0E0E0`: 표 구분선. **Border Strong** `#8D8D8D`: 입력창 아래선.

### Text
- **Ink** `#161616`: 제목·본문. **Ink Muted** `#525252`: 보조 설명, Lot No. 라벨. **Ink Subtle** `#8C8C8C`: 비활성.

### Semantic (Carbon 규칙)
- **Success** `#24A148` (글자는 `#198038`): 합격.
- **Warning** `#F1C21B`: 주의. 글자로 쓰지 않고 표시 막대·아이콘에만.
- **Error** `#DA1E28`: 불합격, 규격 이탈.
- **Info** `#0043CE`: 안내.

### Accessibility Notes

| 조합 | 명도비 | 쓰는 법 |
|---|---|---|
| `{colors.ink}` / `{colors.canvas}` | 18.1:1 | 본문 |
| `{colors.ink-muted}` / `{colors.canvas}` | 7.8:1 | 보조 설명 |
| `{colors.primary}` / `{colors.canvas}` | 5.0:1 | 링크, 버튼 |
| `#FFFFFF` / `{colors.primary}` | 5.0:1 | 주 버튼 글자 |
| `{colors.support-warning}` / `{colors.canvas}` | 1.7:1 | 글자 금지. 막대·아이콘만 |

## Typography

### Font Family
- **에이투지체(A2Z):** 한글·영문·숫자 모두. 큰 제목 3 Light(300), 본문 4 Regular(400), 소제목·버튼 5 Medium(500), 강조 6 SemiBold(600). 웹에서는 `font-family: "A2Z", Pretendard, sans-serif;`.
- 에이투지체에 없는 `Ω` `µ` 같은 기호는 Pretendard로 자동 대체된다. 측정값은 어차피 Plex Mono로 쓴다.
- **IBM Plex Mono:** Lot No.(`KM-SiC-2611-0042`), 측정값(`Ra 0.12 µm`), 순도(`9N`), 화학식(`SiC`, `SiO₂`), 문서번호.
- 로고 워드마크만 IBM Plex Sans(윤곽선). 본문에는 쓰지 않는다.
- 웹 폰트: 에이투지체(SIL OFL)는 쓰인 글자만 woff2로 페이지에 넣는다. IBM Plex Mono는 Google Fonts.
- 원래 후보였던 DS EndEndEnd(윤디자인)는 Adobe Fonts 구독 글꼴이라 페이지에 넣어 배포할 수 없어 에이투지체로 정했다.

### Hierarchy — Web

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display}` | 48px | 300 | 홈페이지 히어로 |
| `{typography.heading}` | 28px | 400 | 페이지 제목 |
| `{typography.title}` | 20px | 500 | 카드·섹션 제목 |
| `{typography.body}` | 15px | 400 | 본문 |
| `{typography.label}` | 12px | 400 | 입력 라벨, 표 머리글 |
| `{typography.data}` | 13px | 400 | Lot No., 측정값 |
| `{typography.stat-number}` | 42px | 400 | 대시보드 숫자 |

### Hierarchy — Document (A4) · Slide

| 쓰임 | A4 | Slide (1280×720) |
|---|---|---|
| 제목 | 20pt / 300 | 40px / 300 |
| 소제목 | 12pt / 500 | 22px / 500 |
| 본문 | 10pt | 17px |
| 표·데이터 | 9pt Plex Mono | 14px |

## Layout

### Grid
- 16열(Carbon 2x Grid), 8px 배수 간격, 최대 폭 1312px.
- 섹션 구분은 그림자 대신 배경 단(`layer-01`)과 1px 구분선.

### App (Lot 조회 포털 · 품질 관리)
- 위쪽 헤더 48px, `inverse`(#161616) 배경에 흰 심볼 + 서비스 이름.
- 왼쪽 사이드 내비 256px, `layer-01`. 선택 메뉴는 흰 배경 + 왼쪽 3px 틸 막대(Carbon 규칙, 내비게이션에만 허용).
- 본문 위쪽 breadcrumb → 페이지 제목(heading) → 표.

### Document (A4 · COA · 사양서)
- 여백 16mm. 오른쪽 위에 문서번호와 개정(`KM-QA-SPEC-031 Rev.C`), 왼쪽 위 로고.
- 성적서 표: 항목 | 규격 | 측정값 | 판정. 측정값은 Plex Mono 오른쪽 정렬.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | `canvas` | 페이지 |
| 1 | `layer-01` | 타일, 사이드 내비, 입력 |
| 2 | `layer-02` | 표 머리글, 선택된 타일 |
| Inverse | `inverse` | 앱 헤더, 다크 표지 |

그림자는 드롭다운·모달에만 한 겹. 그라디언트는 쓰지 않는다.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | 버튼, 타일, 입력, 표, 모달 — 기본값 |
| `{rounded.xs}` | 2px | 체크박스 |
| `{rounded.pill}` | 9999px | 태그만 |

## Components

### Buttons
- **Primary:** 틸 사각 버튼, 높이 48px, 글자 왼쪽 정렬, 오른쪽 끝에 화살표 `→`. 패딩 `0 64px 0 16px`.
- **Secondary:** inverse 배경 흰 글자. **Ghost:** 투명 + 틸 글자.

### Tiles & Data
- **Tile:** layer-01 배경, 테두리·그림자 없음. 클릭 가능한 타일은 hover 시 layer-02.
- **Data table:** 머리글 layer-02, 행 높이 48px(compact 32px), 얼룩무늬 없이 구분선만. 수치 열 Plex Mono 오른쪽 정렬.
- **Spec sheet (COA):** 판정은 색 글자(합격 `#198038`, 불합격 `#DA1E28`).
- **Tag:** teal-10 배경 + teal-deep 글자, pill. 재질 표시(`SiC`, `Quartz`).

### Forms
- **Input:** layer-01 배경, 아래쪽만 1px border-strong, 0px. 포커스 시 2px 틸 테두리.
- **Notification:** 왼쪽 3px 상태색 + layer-01. 시스템 메시지(저장 실패 등)에만 쓰고, 문서 본문 강조에는 쓰지 않는다.

## Applications — 한 시스템, 네 곳

| 어디 | 무엇 | 이 시스템에서 가져가는 것 |
|---|---|---|
| 홈페이지 | kristal.example — 재질별 제품, 순도 사양 | 흰 히어로 + 큰 400 제목, 재질 tile 격자, 사양 표 |
| 고객 포털 (SaaS) | Lot 조회 — Lot No.로 COA 내려받기, 재고 확인 | ui-shell(검정 헤더 + layer-01 내비), 표, Primary 사각 버튼 |
| 부서 문서 | COA, 사양서, 국산화 제안서 | 문서번호·Rev, Plex Mono 측정값, 판정 색 글자 |
| 관리 시스템 | 수입검사·공정 SPC (사내) | compact 표 32px, stat, 상태 막대 |

## Logo

| 파일 | 쓰는 곳 |
|---|---|
| `logo/kristal_logo_horizontal.svg` | 흰색·밝은 배경 (기본) |
| `logo/kristal_logo_horizontal_white.svg` | inverse·어두운 배경. `MATERIALS`가 teal-30으로 바뀐다 |
| `logo/kristal_symbol.svg` | 파비콘, 앱 헤더, 작은 공간 |

- **구성:** 여섯 개의 삼각 면으로 깎은 육각 크리스탈. 위가 밝고 아래가 어두운 틸 다섯 단계와 흰 분할선. 워드마크 `KRISTAL`(IBM Plex Sans SemiBold), 아래 `MATERIALS`는 같은 폭으로 자간을 맞춤.
- **최소 크기:** 가로형 높이 28px(MATERIALS가 읽히는 크기). 그보다 작으면 심볼만.
- **금지:** 면의 색 순서 바꾸기(위가 밝다), 둥근 배경 위에 얹기, 회전.

## Do's and Don'ts

### Do
- 모든 수치에 단위와 측정 조건: `Resistivity 0.01–0.02 Ω·cm @ 23 °C`
- 문서 오른쪽 위에 문서번호와 개정(`KM-QA-SPEC-031 Rev.C`)
- Lot No.·측정값은 Plex Mono

### Don't
- 둥근 카드, 그라디언트, 그림자
- 틸 외의 두 번째 강조색
- 경고 노랑을 글자색으로
- 로고 면의 색 순서를 바꾸기

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Small | < 672px | 4열, 사이드 내비는 헤더 메뉴로 접힘, 표 가로 스크롤 |
| Medium | 672–1055px | 8열, tile 2열 |
| Large | ≥ 1056px | 16열, 사이드 내비 고정 |

## Iteration Guide

1. 새 화면은 Applications 표의 네 곳 중 가장 가까운 것에서 출발한다
2. 요청할 때 hex 대신 토큰 이름으로 말한다(`{colors.primary}`, `tile`, `data-table`)
3. 강조가 더 필요하면 색을 늘리지 말고 layer 단계와 크기로 해결한다
4. 로고는 `logo/` 파일만 쓰고, 고칠 때는 `07_Brand_Kit/_source/logos.py`로 다시 만든다
5. 이 파일을 고치면 `design_system_kristal.html`도 다시 만든다(`07_Brand_Kit/_source/build_design_pages.py`)

> 이 디자인 시스템은 getdesign.md의 IBM(Carbon) 분석을 출발점으로 삼은 교육용 가상 회사의 독자 해석이며, 어떤 실제 기업과도 관련이 없다.
