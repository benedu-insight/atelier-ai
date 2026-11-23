---
version: 1.0
name: seoyeon-personal-design-system
description: HKT (주)한결테크 품질팀 이서연 주임(가상 인물)이 자기 업무용 도구를 만들기 전에 정한 개인 디자인 시스템. 한 장짜리. 점검표, 주간 리포트, 계산기 같은 작은 도구가 모두 이 규칙을 따른다.
owner: 이서연 · HKT 품질팀 (교육용 가상 인물)

colors:
  ink: "#1F2328"
  sub: "#5F6670"
  canvas: "#FFFFFF"
  paper: "#F7F6F3"
  line: "#E4E2DC"
  accent: "#2F6F63"
  accent-soft: "#E3EFEC"
  ok: "#2F6F63"
  ng: "#B42318"
  ng-soft: "#FDECEA"

typography:
  font: "Pretendard, 'Malgun Gothic', sans-serif"
  number: "tabular-nums, 오른쪽 정렬"
  title: { size: 22px, weight: 700 }
  label: { size: 13px, weight: 500, color: "{colors.sub}" }
  body: { size: 15px, weight: 400 }
  big-number: { size: 32px, weight: 700 }

shape:
  radius: 8px
  button-height: 40px
  input-height: 40px

layout:
  width: "최대 960px, 가운데"
  header: "왼쪽 도구 이름, 오른쪽 날짜와 '품질팀 · 이서연'"
  section-gap: 24px
---

# 이서연의 업무 도구 디자인 시스템 (한 장)

내가 만드는 도구는 나와 품질팀 동료 몇 명이 쓴다. 회사 홈페이지처럼 화려할 필요는 없지만, 도구마다 모양이 다르면 매번 어디를 봐야 할지 헤맨다. 그래서 처음 한 번 정해 두고, AI에게 요청할 때마다 이 파일을 같이 준다.

## 규칙 12줄

1. 배경은 종이색 `#F7F6F3`, 입력하는 칸과 표는 흰색.
2. 글자는 Pretendard 하나. 숫자는 tabular-nums, 오른쪽 정렬.
3. 강조색은 청록 `#2F6F63` 하나. 버튼과 합격(OK)에만 쓴다.
4. 불합격(NG)은 빨강 `#B42318` 글자 + 옅은 빨강 배경. 색만 쓰지 말고 "NG" 글자를 같이 쓴다.
5. 모서리는 전부 8px. 그림자는 쓰지 않는다. 구분은 1px 선 `#E4E2DC`.
6. 맨 위 머리줄: 왼쪽 도구 이름, 오른쪽 날짜와 "품질팀 · 이서연".
7. 화면 맨 위에는 오늘 꼭 봐야 할 숫자 2~3개(큰 숫자 32px).
8. 그 아래에 입력 칸, 그 아래에 결과 표. 순서는 바꾸지 않는다.
9. 버튼은 높이 40px. 저장은 청록 채움, 나머지는 흰 바탕 + 선.
10. 규격 값은 항상 "기준 ± 공차 단위"로 쓴다. 예: `1,200 ± 10 mm`.
11. 휴대폰에서도 열린다. 폭이 좁으면 한 줄에 하나씩.
12. 이모지, 그라디언트, 아이콘 장식은 쓰지 않는다.

## 이 규칙으로 만든 것

- 설비 일상점검표 (아침 점검 5대)
- 주간 품질 리포트 요약 (수입검사 합격률, NG 건수)
- 공차 판정 계산기 (측정값을 넣으면 OK/NG)

> 교육용 가상 인물의 예시다. 회사 DESIGN.md가 있으면 그 위에 개인 규칙을 덧붙이고, 없으면 이 한 장으로 시작한다.
