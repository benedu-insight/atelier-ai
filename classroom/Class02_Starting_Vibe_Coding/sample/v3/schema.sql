-- HKT 설비 일상점검 — Supabase 표 만들기
-- Supabase 대시보드 왼쪽 메뉴 SQL Editor에 붙여 넣고 Run.

create table if not exists public.daily_checks (
  id        bigint generated always as identity primary key,
  date      date        not null,                 -- 점검일
  shift     text        not null default '주간',   -- 근무조
  who       text        not null,                 -- 점검자
  items     jsonb       not null,                 -- 항목별 결과 [{eq, q, res, val, memo}]
  saved_at  timestamptz not null default now()
);

-- RLS(행 수준 보안): 켜 두면 아래 규칙에 적힌 일만 허용된다.
alter table public.daily_checks enable row level security;

-- 교육용 최소 규칙: 누구나 읽기·추가만 가능, 수정·삭제는 불가.
-- 실제 사내 운영에서는 로그인(Supabase Auth)을 붙이고 'authenticated'로 바꾼다.
drop policy if exists "read checks" on public.daily_checks;
create policy "read checks" on public.daily_checks
  for select to anon using (true);

drop policy if exists "add checks" on public.daily_checks;
create policy "add checks" on public.daily_checks
  for insert to anon with check (char_length(who) between 1 and 20);
