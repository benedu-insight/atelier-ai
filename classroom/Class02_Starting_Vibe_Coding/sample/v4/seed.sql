-- HKT 설비 일상점검 — SPC 관리도용 예시 데이터 30일 (가상)
-- schema.sql을 먼저 실행한 뒤, SQL Editor에 붙여 넣고 Run.
-- 일부러 넣은 이상 신호: 23일째 팁 온도 규격 초과, 24일째부터 토크 평균 이동(관리한계 밖 · 한쪽 7점 연속).
-- 체임버 온도는 정상 공정의 예시.
-- 지우려면 맨 끝 주석의 delete 문을 쓴다.

-- noise(n, s) = 같은 n이면 늘 같은 -1~1 값. index.html의 데모 데이터와 같은 식.
with r as (
  select n,
         (sin(n * 12.9898 + 1) * 43758.5453) as a,
         (sin(n * 12.9898 + 2) * 43758.5453) as b,
         (sin(n * 12.9898 + 3) * 43758.5453) as c
  from generate_series(1, 30) as n
), d as (
  select n,
         (current_date - 31 + n)                                         as day,
         (array['김도현','이서연','박준호'])[n % 3 + 1]                   as who,
         (350 + round(4 * (a - floor(a) - 0.5) * 2)
              + case when n = 23 then 13 else 0 end)::numeric            as ss,   -- 23일째 규격 초과
         round((0.600 + 0.010 * (b - floor(b) - 0.5) * 2
              + case when n >= 24 then 0.02 else 0 end)::numeric, 3)     as td,   -- 24일째부터 평균 이동
         round((25 + 0.5 * (c - floor(c) - 0.5) * 2 + 0.3 * sin(n * 0.4))::numeric, 1) as ch
  from r
)
insert into public.daily_checks (date, shift, who, items, saved_at)
select day, '주간', who,
  jsonb_build_array(
    jsonb_build_object('k','ss1','eq','SS-02','q','팁 온도','val', ss::text,
      'res', case when ss between 340 and 360 then 'OK' else 'NG' end,
      'memo', case when ss between 340 and 360 then '' else '팁 교체 후 재측정 351' end),
    jsonb_build_object('k','td1','eq','TD-03','q','토크 체커 측정값','val', td::text,
      'res', case when td between 0.54 and 0.66 then 'OK' else 'NG' end, 'memo', ''),
    jsonb_build_object('k','ch1','eq','CH-01','q','표시 온도','val', ch::text,
      'res', case when ch between 23 and 27 then 'OK' else 'NG' end, 'memo', '')
  ),
  (day + time '08:10')::timestamptz
from d;

-- 예시 데이터만 지우기 (예시는 저장 시각이 모두 08:10:00):
-- delete from public.daily_checks where saved_at::time = '08:10:00' and shift = '주간';
