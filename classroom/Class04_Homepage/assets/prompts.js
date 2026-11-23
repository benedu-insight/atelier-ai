/* 2회차 홈페이지 강의 — 단계별 프롬프트 (슬라이드와 프롬프트 시트가 함께 쓴다)
   [대괄호]는 수강생이 자기 회사 내용으로 바꿔 넣는 자리다. */
window.HP_STEPS = [
  {
    id: "s1", no: "01", title: "목적과 방문자 정하기",
    goal: "누가 와서, 무엇을 찾고, 무엇을 하고 떠나야 하는지 한 장으로 정한다.",
    prompts: [
      { id: "p1", label: "목적·방문자 표", text:
`우리 회사 홈페이지를 새로 만들려고 해. 회사소개서를 첨부했어.
1) 홈페이지에 올 방문자 유형 3가지
2) 유형별로 찾는 정보와, 우리가 바라는 행동(문의, 자료 다운로드 등)
3) 첫 화면에서 3초 안에 전달할 한 문장
을 표로 정리해 줘. 아직 디자인과 코드는 만들지 마.` }
    ],
    result: "방문자 3유형 × 찾는 정보 × 바라는 행동 표, 첫 화면 한 문장 후보",
    mistakes: ["목적 없이 \"멋있게 만들어 줘\"부터 시작한다", "방문자를 \"모든 사람\"으로 잡는다"]
  },
  {
    id: "s2", no: "02", title: "사이트맵과 카피",
    goal: "섹션 순서와 문구를 디자인보다 먼저 확정한다.",
    prompts: [
      { id: "p2", label: "사이트맵·헤드라인", text:
`위 표를 바탕으로 원페이지 홈페이지 사이트맵을 만들어 줘.
섹션은 7개 이하, 섹션마다 목적 1줄과 들어갈 내용을 적어 줘.
메인 헤드라인 3안을 제안하고, 각 안이 어떤 방문자에게 맞는지 적어 줘.
카피는 첨부한 기존 홈페이지 원고와 회사소개서에 있는 사실만 써.
없는 숫자, 고객사, 후기는 만들지 말고 [확인 필요]로 표시해.` }
    ],
    result: "sitemap.md — 섹션 6~7개, 섹션별 목적과 문구 초안",
    mistakes: ["페이지를 10개 넘게 잡는다", "\"혁신적인\", \"최고의\" 같은 빈 표현을 그대로 둔다"]
  },
  {
    id: "s3", no: "03", title: "디자인 레퍼런스 찾기",
    goal: "말로 설명하기 어려운 \"느낌\"을 실제 사이트 화면으로 보여 준다.",
    prompts: [
      { id: "p3", label: "레퍼런스 분석", text:
`첨부한 스크린샷 3장은 내가 마음에 드는 홈페이지 레퍼런스야.
각각에서 ① 레이아웃 ② 색 쓰는 방식 ③ 글자 크기와 굵기 ④ 여백에서
배울 점을 정리하고, [우리 업종] 회사인 우리에게 맞는 것과 맞지 않는 것을 나눠 줘.
로고, 문구, 이미지는 베끼지 않는다.` }
    ],
    result: "레퍼런스 2~3장과 \"가져올 것 / 버릴 것\" 목록",
    mistakes: ["레퍼런스의 로고·문구·사진까지 그대로 가져온다", "업종과 맞지 않는 화려한 사이트를 고른다"]
  },
  {
    id: "s4", no: "04", title: "DESIGN.md와 로고",
    goal: "색·서체·모양 규칙을 문서로 고정해서, 몇 번을 다시 만들어도 같은 회사처럼 보이게 한다.",
    prompts: [
      { id: "p4", label: "DESIGN.md 작성", text:
`레퍼런스 분석과 첨부한 우리 로고(SVG), 브랜드 색([#색상코드 2~3개])을
바탕으로 홈페이지용 DESIGN.md를 써 줘.
포함할 것: 색 토큰(역할 포함), 서체(한글/영문/숫자), 모서리·간격,
버튼·카드·폼 컴포넌트, Do / Don't.
로고는 다시 그리지 않고 SVG 파일을 그대로 쓴다는 규칙도 넣어 줘.` }
    ],
    result: "DESIGN.md 한 파일 + 로고 SVG (이후 모든 요청에 같이 첨부)",
    mistakes: ["DESIGN.md 없이 요청해서 남색→보라 그라디언트 같은 AI 기본값이 나온다", "로고를 PNG 캡처나 글자로 대신한다"]
  },
  {
    id: "s5", no: "05", title: "프롬프트로 만들기",
    goal: "재료(목적·사이트맵·DESIGN.md·로고·레퍼런스)를 한 번에 넣고, 그다음은 섹션 단위로 고친다.",
    prompts: [
      { id: "p5a", label: "v1 — 한 줄 요청 (비교용)", text:
`반도체 플라즈마 교육 회사 '베네듀 인사이트' 홈페이지 만들어 줘.` },
      { id: "p5b", label: "v2 — 재료를 모두 넣은 요청", text:
`첨부한 자료로 [회사명] 홈페이지를 HTML 한 파일로 만들어 줘.
- 목적·방문자: purpose.md
- 사이트맵·카피: sitemap.md (이 순서와 문구 그대로)
- 디자인: DESIGN.md (여기 없는 색·서체는 쓰지 않는다)
- 로고: [로고파일].svg (그대로 삽입)
- 레퍼런스: hero.png 처럼 왼쪽 메시지 + 오른쪽 제품 카드 배치
지켜 줄 것: 원고에 없는 숫자·후기·고객사·연락처는 만들지 않는다.
버튼은 모두 실제 섹션으로 연결한다.` },
      { id: "p5c", label: "섹션 단위로 고치기", text:
`[커리큘럼] 섹션만 고쳐 줘. 다른 섹션은 건드리지 마.
같은 크기 카드 3장 대신 한 줄씩 쌓는 목록으로 바꾸고,
각 줄에 코드 · 제목 · 대상 · 시간을 넣어 줘.
시간은 오른쪽 정렬, 숫자는 고정폭 숫자로.` }
    ],
    result: "v1(한 줄) → v2(재료 포함) 비교, 이후 섹션별 수정 이력",
    mistakes: ["마음에 안 들면 \"다시 만들어\"로 처음부터 새로 만든다", "한 번에 다섯 군데를 고치라고 해서 어디가 바뀌었는지 모른다"]
  },
  {
    id: "s6", no: "06", title: "콘텐츠: 제품, 회사소개, 문의",
    goal: "방문자가 실제로 판단하고 연락하는 데 필요한 정보를 정확하게 채운다.",
    prompts: [
      { id: "p6a", label: "제품·과정 소개", text:
`첨부한 [제품 카탈로그 / 커리큘럼] 파일로 제품 섹션을 만들어 줘.
제품마다 모델명, 핵심 사양 3~4개(단위 포함, 예: 2 kW @ 13.56 MHz),
대상 고객, 자세히 보기(접었다 펼치기)를 넣어 줘. 수치는 파일 값 그대로.` },
      { id: "p6b", label: "문의 폼", text:
`문의 폼을 만들어 줘: 회사명, 이름·직책, 연락처, 관심 제품, 문의 내용.
formsubmit.co로 [회사 이메일]에 전송하고,
개인정보 수집·이용 동의 체크박스(필수), 스팸 방지 honeypot,
전송 완료 안내창을 넣어 줘.` }
    ],
    result: "제품(과정) 목록, 회사·강사 소개, 실제로 전송되는 문의 폼",
    mistakes: ["사양 수치에 단위가 없다", "AI가 만든 전화번호·주소가 그대로 남아 있다", "개인정보 동의 없이 연락처를 받는다"]
  },
  {
    id: "s7", no: "07", title: "반응형, 다국어, SEO",
    goal: "휴대폰에서도, 영어로도, 검색과 링크 공유에서도 제대로 보이게 한다.",
    prompts: [
      { id: "p7a", label: "모바일 점검", text:
`화면 폭 375px(휴대폰)과 768px(태블릿)에서 깨지는 곳을 찾아 고쳐 줘.
휴대폰에서는 메뉴를 버튼 하나로 접고, 버튼은 손가락으로 누르기 쉬운 크기로.` },
      { id: "p7b", label: "KO / EN 전환", text:
`KO/EN 전환 버튼을 넣어 줘. 영어는 직역하지 말고
해외 고객사 엔지니어가 읽는 자연스러운 문장으로.
기술 용어(RF Generator, Chamber 등)는 두 언어 모두 영어로 둔다.` },
      { id: "p7c", label: "검색·공유 설정", text:
`검색과 링크 공유를 위해 title, meta description, Open Graph(1200×630 이미지),
canonical, robots.txt, sitemap.xml, 회사 정보 JSON-LD를 넣어 줘.
주소는 [https://우리주소/] 기준으로.` }
    ],
    result: "모바일 메뉴, KO/EN 토글, 카카오톡·검색에 뜨는 미리보기",
    mistakes: ["PC에서만 확인하고 끝낸다", "번역기 투의 영어", "링크를 보냈더니 미리보기 이미지가 안 뜬다"]
  },
  {
    id: "s8", no: "08", title: "배포, 도메인, 유지보수",
    goal: "인터넷 주소를 붙여 공개하고, 다음 달에도 고칠 수 있는 상태로 남긴다.",
    prompts: [
      { id: "p8a", label: "배포 순서", text:
`이 폴더를 GitHub Pages로 배포하는 순서를 처음 하는 사람 기준으로 알려 줘.
계정 이름은 [회사계정]이고, 화면에서 무엇을 누르는지까지 단계별로.` },
      { id: "p8b", label: "도메인 연결", text:
`회사 도메인 [www.회사.co.kr]을 이 사이트에 연결하려면
도메인 업체 DNS 설정에 무엇을 넣어야 하는지 알려 줘. HTTPS 켜는 방법도.` },
      { id: "p8c", label: "유지보수 README", text:
`유지보수용 README.md를 만들어 줘.
폴더 구조, 문구·사진을 바꾸는 위치, 배포 방법, 고친 뒤 확인할 것(모바일, 영어, 폼 전송)을 적어 줘.` }
    ],
    result: "공개 주소, 연결된 도메인, 다음 담당자가 읽을 README",
    mistakes: ["원본 파일 없이 사이트만 남아서 다음에 못 고친다", "담당자 개인 계정으로 배포해 퇴사 후 접근이 끊긴다"]
  }
];

/* ---- English (영문 모드) — 같은 id에 영문 필드를 덧붙인다 ---- */
(function () {
  var STEP = {
    s1: { title: "Decide the purpose and visitors", goal: "Decide on one page who comes, what they look for, and what they should do before leaving.",
          result: "A table of 3 visitor types × what they look for × desired action, plus candidates for the first-screen sentence",
          mistakes: ["Starting with \"make it look great\" without a purpose", "Defining the visitor as \"everyone\""] },
    s2: { title: "Sitemap and copy", goal: "Lock the section order and wording before the design.",
          result: "sitemap.md — 6–7 sections, each with its purpose and draft copy",
          mistakes: ["Planning more than 10 pages", "Leaving empty words like \"innovative\" and \"best-in-class\""] },
    s3: { title: "Find design references", goal: "Show the \"feel\" that's hard to put into words with real site screens.",
          result: "2–3 references and a list of \"what to take / what to drop\"",
          mistakes: ["Taking the reference's logo, copy and photos as is", "Picking a flashy site that doesn't fit your industry"] },
    s4: { title: "DESIGN.md and logo", goal: "Fix color, type and shape rules in a document, so every rebuild still looks like the same company.",
          result: "One DESIGN.md file + the logo SVG (attach both to every later prompt)",
          mistakes: ["Asking without DESIGN.md and getting AI defaults like a navy → purple gradient", "Replacing the logo with a PNG screenshot or plain text"] },
    s5: { title: "Build with prompts", goal: "Put in every material at once (purpose, sitemap, DESIGN.md, logo, references), then fix section by section.",
          result: "v1 (one line) vs v2 (with materials), then a history of section-by-section fixes",
          mistakes: ["Rebuilding from scratch with \"make it again\" whenever something is off", "Asking for five fixes at once, so you can't tell what changed"] },
    s6: { title: "Content: products, company profile, contact", goal: "Fill in exactly what visitors need to judge you and get in touch.",
          result: "Product (course) list, company / instructor profile, a contact form that actually sends",
          mistakes: ["Specs without units", "AI-invented phone numbers and addresses left in place", "Collecting contact details without privacy consent"] },
    s7: { title: "Responsive, multilingual, SEO", goal: "Make it work on phones, in English, and in search results and link previews.",
          result: "Mobile menu, KO/EN toggle, previews that show up in messengers and search",
          mistakes: ["Checking only on a PC", "Machine-translated English", "You send the link and no preview image appears"] },
    s8: { title: "Deploy, domain, maintenance", goal: "Publish it at an internet address, and leave it in a state you can still edit next month.",
          result: "A public address, a connected domain, and a README for the next person in charge",
          mistakes: ["Only the live site is left, with no source files, so no one can edit it", "Deployed from a personal account, so access is lost when that person leaves"] }
  };
  var PROMPT = {
    p1: ["Purpose & visitors table",
`We're building a new company homepage. Our company profile is attached.
1) The 3 types of visitors who will come to the homepage
2) For each type, the information they look for and the action we want (inquiry, download, etc.)
3) One sentence the first screen must get across in 3 seconds
Put this in a table. Don't make any design or code yet.`],
    p2: ["Sitemap & headlines",
`Based on the table above, make a sitemap for a one-page homepage.
Keep it to 7 sections or fewer; for each, write a one-line purpose and what goes in it.
Suggest 3 main headlines and say which visitor each one suits.
Use only facts found in the attached current homepage copy and company profile.
Don't invent numbers, customers or reviews — mark gaps as [needs checking].`],
    p3: ["Reference analysis",
`The 3 attached screenshots are homepage references I like.
For each, list what to learn from ① layout ② use of color ③ type size and weight ④ spacing,
and split them into what fits us, a [our industry] company, and what doesn't.
Don't copy their logos, copy or images.`],
    p4: ["Write DESIGN.md",
`Based on the reference analysis, our attached logo (SVG) and brand colors ([2–3 hex codes]),
write a DESIGN.md for the homepage.
Include: color tokens (with roles), typefaces (Korean / Latin / numerals),
corner radius and spacing, button · card · form components, and Do / Don't.
Add the rule that the logo is never redrawn — always use the SVG file as is.`],
    p5a: ["v1 — one-line prompt (for comparison)",
`Make a homepage for 'Benedu Insight', a semiconductor plasma training company.`],
    p5b: ["v2 — prompt with every material",
`Using the attached files, build the [company name] homepage as a single HTML file.
- Purpose & visitors: purpose.md
- Sitemap & copy: sitemap.md (use this order and wording as is)
- Design: DESIGN.md (no colors or fonts that aren't in it)
- Logo: [logo file].svg (insert as is)
- Reference: lay it out like hero.png — message on the left, product card on the right
Rules: don't invent numbers, reviews, customers or contact details that aren't in the copy.
Every button must link to a real section.`],
    p5c: ["Fix one section at a time",
`Change only the [curriculum] section. Don't touch the other sections.
Replace the three equal-size cards with a stacked list, one row each,
and put code · title · audience · duration on each row.
Right-align the duration and use tabular numerals.`],
    p6a: ["Products / courses",
`Make the product section from the attached [product catalog / curriculum] file.
For each product: model name, 3–4 key specs (with units, e.g. 2 kW @ 13.56 MHz),
target customer, and a "details" toggle. Use the file's values exactly.`],
    p6b: ["Contact form",
`Make a contact form: company, name & title, phone / email, product of interest, message.
Send it to [company email] via formsubmit.co, and add a required privacy-consent checkbox,
a honeypot for spam, and a confirmation message after sending.`],
    p7a: ["Mobile check",
`Find and fix what breaks at 375px (phone) and 768px (tablet) widths.
On phones, collapse the menu into one button, and make buttons easy to tap.`],
    p7b: ["KO / EN toggle",
`Add a KO/EN toggle. Don't translate literally — write natural sentences
that an engineer at an overseas customer would read.
Keep technical terms (RF Generator, Chamber, etc.) in English in both languages.`],
    p7c: ["Search & sharing setup",
`For search and link sharing, add title, meta description, Open Graph (1200×630 image),
canonical, robots.txt, sitemap.xml and company JSON-LD.
Use [https://our-address/] as the base URL.`],
    p8a: ["Deployment steps",
`Walk me through deploying this folder to GitHub Pages as a first-timer.
The account name is [company account]. Tell me what to click on each screen, step by step.`],
    p8b: ["Connect a domain",
`To connect our company domain [www.company.co.kr] to this site,
what do I enter in the domain registrar's DNS settings? Also tell me how to turn on HTTPS.`],
    p8c: ["Maintenance README",
`Write a README.md for maintenance:
folder structure, where to change copy and photos, how to deploy,
and what to check after each change (mobile, English, form sending).`]
  };
  (window.HP_STEPS || []).forEach(function (s) {
    var e = STEP[s.id];
    if (e) { s.title_en = e.title; s.goal_en = e.goal; s.result_en = e.result; s.mistakes_en = e.mistakes; }
    s.prompts.forEach(function (p) { var q = PROMPT[p.id]; if (q) { p.label_en = q[0]; p.text_en = q[1]; } });
  });
})();
