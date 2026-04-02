const theme = {
  accent: "#D97A8C",
  accentDeep: "#B85B72",
  accentSoft: "#F9DEE6",
  accentPale: "#FFF3F7",
  border: "#F1D8E1",
  shell: "#C7A7B2",
  page: "#FFF9FC",
  warm: "#FDEEF3",
};

const recipients = [
  { id: 1, name: "김영자 할머니", address: "서울사랑요양원 302호", relation: "외할머니" },
  { id: 2, name: "박순자 어머니", address: "전북 전주시 완산구", relation: "어머니" },
];

const sentHistory = [
  { date: "2026.03.15", title: "봄 안부 엽서", status: "배송완료" },
  { date: "2026.02.14", title: "손주 사진 편지", status: "배송완료" },
  { date: "2026.01.01", title: "새해 인사 편지", status: "배송완료" },
];

const suggestions = [
  "할머니, 날씨가 많이 풀렸어요. 사진 보시고 오늘도 웃으셨으면 좋겠어요.",
  "엄마, 요즘 많이 바빴죠? 그래도 늘 생각하고 있어요. 건강 잘 챙기세요.",
  "할머니, 다음에 만나면 같이 맛있는 거 먹어요. 보고 싶은 마음을 사진에 담아 보냅니다.",
];

const quizCatalog = {
  word: [
    {
      key: "season-word",
      mode: "text",
      title: "계절 낱말 퍼즐",
      desc: "짧은 힌트를 보고 익숙한 낱말을 떠올리는 쉬운 문제",
      level: "쉬움",
      promptLines: ["꽃이 피고 날이 따뜻해지는 계절은?", "초성 힌트: ㅂ"],
      answer: "봄",
    },
    {
      key: "fruit-word",
      mode: "text",
      title: "과일 낱말 퍼즐",
      desc: "일상적인 먹거리 이름으로 부담 없이 푸는 문제",
      level: "쉬움",
      promptLines: ["노랗고 길쭉한 과일은?", "초성 힌트: ㅂㄴㄴ"],
      answer: "바나나",
    },
    {
      key: "kitchen-word",
      mode: "text",
      title: "생활 낱말 퍼즐",
      desc: "집에서 자주 보는 물건을 떠올리는 문제",
      level: "보통",
      promptLines: ["밥 먹을 때 사용하는 긴 도구는?", "초성 힌트: ㅈㄱㄹ"],
      answer: "젓가락",
    },
  ],
  proverb: [
    {
      key: "proverb-ricecake",
      mode: "text",
      title: "속담 빈칸 맞추기",
      desc: "익숙한 속담의 마지막 말을 떠올리는 회상형 퀴즈",
      level: "쉬움",
      promptLines: ["보기 좋은 떡이 ________", "힌트: 먹는 것과 관련 있어요."],
      answer: "먹기도 좋다",
    },
    {
      key: "proverb-frog",
      mode: "text",
      title: "속담 이어 말하기",
      desc: "앞부분을 보고 뒷부분을 떠올리는 짧은 문제",
      level: "보통",
      promptLines: ["개구리 올챙이 적 ________", "힌트: 지난 시절을 말해요."],
      answer: "생각 못 한다",
    },
    {
      key: "proverb-eye",
      mode: "text",
      title: "생활 속 속담 퀴즈",
      desc: "자주 듣던 표현으로 정답을 유도하는 문제",
      level: "쉬움",
      promptLines: ["백 번 듣는 것이 한 번 ________", "힌트: 보다와 비슷한 말이에요."],
      answer: "보는 것만 못하다",
    },
  ],
  memory: [
    {
      key: "memory-season",
      mode: "text",
      title: "추억 회상 퀴즈",
      desc: "계절과 음식, 일상을 떠올리게 하는 회상형 질문",
      level: "쉬움",
      promptLines: ["가을에 많이 먹는 대표 간식은?", "힌트: 군고구마, 군밤처럼 떠올려 보세요."],
      answer: "감",
    },
    {
      key: "memory-market",
      mode: "text",
      title: "일상 회상 카드",
      desc: "예전 시장과 집안 풍경을 떠올리는 부드러운 질문",
      level: "쉬움",
      promptLines: ["어릴 때 장 보러 자주 가던 곳은?", "힌트: 동네에 있던 큰 장터를 떠올려 보세요."],
      answer: "시장",
    },
    {
      key: "memory-family",
      mode: "text",
      title: "가족 이야기 퀴즈",
      desc: "가족과 계절 추억을 연결해 답하는 따뜻한 문제",
      level: "보통",
      promptLines: ["명절 아침에 가장 먼저 떠오르는 음식은?", "힌트: 온 가족이 함께 먹던 메뉴예요."],
      answer: "떡국",
    },
  ],
  crossword: [
    {
      key: "cross-spring",
      mode: "crossword",
      title: "봄날 십자낱말",
      desc: "짧은 단어를 격자에 채우는 십자낱말형 퀴즈",
      level: "쉬움",
      note: "그림처럼 빈칸을 보고 단어를 떠올려 보세요.",
      grid: [
        [{ label: "1" }, {}, { blocked: true }, { label: "2" }],
        [{}, { blocked: true }, {}, {}],
        [{ blocked: true }, { label: "3" }, {}, { blocked: true }],
        [{}, {}, {}, {}],
      ],
      clues: [
        "1 가로: 꽃이 피는 계절",
        "2 세로: 하늘에서 내리는 물방울",
        "3 가로: 향기가 나는 식물",
      ],
      answer: "1 봄 · 2 비 · 3 꽃",
    },
    {
      key: "cross-kitchen",
      mode: "crossword",
      title: "생활 십자낱말",
      desc: "집에서 자주 보는 물건 이름으로 푸는 격자형 퀴즈",
      level: "보통",
      note: "짧은 단어 위주라 부담 없이 함께 풀기 좋아요.",
      grid: [
        [{ label: "1" }, {}, {}, { blocked: true }],
        [{ blocked: true }, {}, { blocked: true }, { label: "2" }],
        [{ label: "3" }, {}, {}, {}],
        [{ blocked: true }, {}, { blocked: true }, {}],
      ],
      clues: [
        "1 가로: 밥을 먹을 때 쓰는 도구",
        "2 세로: 손을 씻을 때 쓰는 것",
        "3 가로: 시간을 보는 물건",
      ],
      answer: "1 젓가락 · 2 비누 · 3 시계",
    },
  ],
};

const quizTypeMeta = [
  { id: "word", label: "낱말퍼즐" },
  { id: "proverb", label: "속담퀴즈" },
  { id: "memory", label: "회상퀴즈" },
  { id: "crossword", label: "십자낱말" },
];

const state = {
  page: "home",
  message: "할머니, 날이 따뜻해졌어요. 사진 보시고 오늘도 기분 좋은 하루 보내셨으면 좋겠어요.",
  recipientId: 1,
  quizType: "word",
  quizId: "word-season-word",
  includeQuiz: false,
  includeQuizAnswer: false,
  suggestionPanelOpen: false,
  quizSeed: 0,
};

function runDevChecks() {
  const checks = [
    { name: "recipients", pass: recipients.length > 0 },
    { name: "sentHistory", pass: sentHistory.length > 0 },
    { name: "suggestions", pass: suggestions.length > 0 },
    { name: "quizCatalog", pass: Object.keys(quizCatalog).length > 0 },
    { name: "theme.accent", pass: Boolean(theme.accent) },
  ];

  const failed = checks.filter((item) => !item.pass);
  if (failed.length) {
    console.warn("[E음우편] 데이터 점검 실패:", failed.map((item) => item.name).join(", "));
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getCurrentRecipient() {
  return recipients.find((item) => item.id === state.recipientId) || recipients[0];
}

function getQuizItemsByType(type) {
  const source = quizCatalog[type] || quizCatalog.word;
  const rotated = source.map((_, index) => source[(index + state.quizSeed) % source.length]);
  return rotated.map((item) => ({ ...item, id: `${type}-${item.key}` }));
}

function ensureSelectedQuizExists() {
  const items = getQuizItemsByType(state.quizType);
  const hasSelected = items.some((item) => item.id === state.quizId);
  if (!hasSelected && items[0]) {
    state.quizId = items[0].id;
  }
}

function getSelectedQuiz() {
  ensureSelectedQuizExists();
  return getQuizItemsByType(state.quizType).find((item) => item.id === state.quizId) || getQuizItemsByType(state.quizType)[0];
}

function getScreenMeta() {
  switch (state.page) {
    case "write":
      return {
        title: "편지 작성",
        subtitle: "가족에게 마음을 담아 편하게 적어보세요.",
      };
    case "preview":
      return {
        title: "최종 편지 시안",
        subtitle: "실제 우편으로 제작될 편지 구성을 한눈에 확인하세요.",
      };
    case "subscribe":
      return {
        title: "정기 구독 관리",
        subtitle: "매달 잊지 않고 안부를 전할 수 있어요.",
      };
    case "history":
      return {
        title: "발송 내역",
        subtitle: "보낸 편지와 배송 상태를 확인하세요.",
      };
    case "mypage":
      return {
        title: "내 정보",
        subtitle: "알림, 수신인, 결제 설정을 관리하세요.",
      };
    case "home":
    default:
      return {
        title: "마음을 잇다",
        subtitle: "E음편지로 안부문구 하단에 두뇌퀴즈를 함께 담아보세요.",
      };
  }
}

function badge(text) {
  return `<span class="status-badge">${escapeHtml(text)}</span>`;
}

function renderCrosswordGrid(grid, extraClass = "") {
  return `
    <div class="crossword-grid ${extraClass}">
      ${grid
        .map(
          (row) => `
            <div class="crossword-row">
              ${row
                .map((cell) => {
                  if (cell.blocked) {
                    return `<div class="crossword-cell is-blocked"></div>`;
                  }
                  return `
                    <div class="crossword-cell ${cell.label ? "has-label" : ""}">
                      ${cell.label ? `<span class="cell-label">${escapeHtml(cell.label)}</span>` : ""}
                    </div>
                  `;
                })
                .join("")}
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderQuizTypeChips() {
  return quizTypeMeta
    .map((type) => {
      const selectedClass = state.quizType === type.id ? " is-selected" : "";
      return `
        <button type="button" class="filter-chip quiz-type-chip${selectedClass}" data-type="${type.id}">
          ${escapeHtml(type.label)}
        </button>
      `;
    })
    .join("");
}

function renderQuizCards() {
  return getQuizItemsByType(state.quizType)
    .map((quiz) => {
      const selectedClass = quiz.id === state.quizId ? " is-selected" : "";
      const previewHtml =
        quiz.mode === "crossword"
          ? `
            <div class="quiz-preview crossword-preview-box">
              ${renderCrosswordGrid(quiz.grid)}
              <div class="quiz-clue-list">
                ${quiz.clues.map((clue) => `<div class="quiz-line">${escapeHtml(clue)}</div>`).join("")}
              </div>
            </div>
          `
          : `
            <div class="quiz-preview">
              ${quiz.promptLines.map((line) => `<div class="quiz-line">${escapeHtml(line)}</div>`).join("")}
            </div>
          `;

      return `
        <button type="button" class="quiz-card quiz-option${selectedClass}" data-id="${quiz.id}">
          <div class="quiz-header-row">
            <div>
              <div class="history-title">${escapeHtml(quiz.title)}</div>
              <div class="option-desc">${escapeHtml(quiz.desc)}</div>
            </div>
            <span class="hero-badge">${escapeHtml(quiz.level)}</span>
          </div>
          ${previewHtml}
          <div class="quiz-answer-note">${
            quiz.mode === "crossword"
              ? `정답 예시: ${escapeHtml(quiz.answer)}`
              : `정답 예시: ${escapeHtml(quiz.answer)}`
          }</div>
        </button>
      `;
    })
    .join("");
}

function renderLetterQuizBlock(quiz) {
  if (!quiz) return "";
  if (quiz.mode === "crossword") {
    return `
      <div class="letter-quiz-box">
        <div class="letter-quiz-title">함께 풀어보는 AI 두뇌퀴즈 · ${escapeHtml(quiz.title)}</div>
        <div class="letter-quiz-note">${escapeHtml(quiz.note)}</div>
        ${renderCrosswordGrid(quiz.grid, "letter-crossword-grid")}
        <div class="letter-clue-list">
          ${quiz.clues.map((clue) => `<div class="letter-clue-line">${escapeHtml(clue)}</div>`).join("")}
        </div>
      </div>
    `;
  }

  return `
    <div class="letter-quiz-box">
      <div class="letter-quiz-title">함께 풀어보는 AI 두뇌퀴즈 · ${escapeHtml(quiz.title)}</div>
      <div class="letter-clue-list">
        ${quiz.promptLines.map((line) => `<div class="letter-clue-line">${escapeHtml(line)}</div>`).join("")}
      </div>
    </div>
  `;
}

function getFinalLetterData() {
  const recipient = getCurrentRecipient();
  const selectedQuiz = getSelectedQuiz();
  return {
    recipient,
    selectedQuiz,
    quizSummary: state.includeQuiz ? selectedQuiz.title : "선택 안 함",
  };
}

function homePage() {
  const selectedQuiz = getSelectedQuiz();
  return `
    <div class="page-stack">
      <article class="card hero-card">
        <div class="card-body">
          <div class="hero-top">
            <div>
              ${badge("정기구독 중")}
              <h3 class="hero-title">마음을 잇는<br />실물 편지 구독</h3>
              <p class="hero-description">사진과 짧은 메시지 아래에 원하는 경우 AI 두뇌퀴즈를 같은 1장 안에 함께 넣어 전달합니다.</p>
            </div>
            <div class="icon-box">✉</div>
          </div>
          <div class="soft-box">다음 발송 예정일 <strong>매월 15일</strong></div>
        </div>
      </article>

      <div class="grid-2">
        <button type="button" class="card action-card page-link" data-page="write">
          <div class="card-body">
            <div class="icon">✎</div>
            <div class="history-title" style="margin-top: 14px;">새 편지 작성</div>
            <div class="option-desc">사진, 안부, 퀴즈를 1장으로 구성</div>
          </div>
        </button>

        <button type="button" class="card action-card page-link" data-page="subscribe">
          <div class="card-body">
            <div class="icon">🗓</div>
            <div class="history-title" style="margin-top: 14px;">정기 구독 관리</div>
            <div class="option-desc">월 1회, 2회 발송 일정 설정</div>
          </div>
        </button>
      </div>

      <article class="card">
        <div class="card-body">
          <div class="section-title-row">
            <div>
              <h3 class="card-title">이번 달 발송 상태</h3>
              <p class="subtext">3월 편지가 정상적으로 접수되었습니다.</p>
            </div>
            <div class="inline-icon">✔</div>
          </div>
          <div class="info-chip">수신인: 김영자 할머니 · 서울사랑요양원 302호</div>
        </div>
      </article>

      <article class="card">
        <div class="card-body">
          <div class="section-title-row">
            <div>
              <h3 class="card-title">함께 보낼 수 있는 AI 두뇌퀴즈</h3>
              <p class="subtext">낱말퍼즐, 속담퀴즈, 회상형 질문, 십자낱말형 퀴즈까지 자동 추천합니다.</p>
            </div>
            <button type="button" class="link-button page-link" data-page="write">바로 선택</button>
          </div>
          <div class="info-chip">추천 예시: <strong>${escapeHtml(selectedQuiz.title)}</strong> · ${escapeHtml(selectedQuiz.desc)}</div>
        </div>
      </article>

      <article class="card">
        <div class="card-body">
          <div class="section-title-row">
            <h3 class="card-title">발송 내역</h3>
            <button type="button" class="link-button page-link" data-page="history">전체보기</button>
          </div>
          <div class="history-list">
            ${sentHistory
              .slice(0, 2)
              .map(
                (item) => `
                  <div class="history-item">
                    <div>
                      <div class="history-meta">${escapeHtml(item.date)}</div>
                      <div class="history-title">${escapeHtml(item.title)}</div>
                    </div>
                    ${badge(item.status)}
                  </div>`
              )
              .join("")}
          </div>
        </div>
      </article>
    </div>
  `;
}

function writePage() {
  const currentRecipient = getCurrentRecipient();
  const selectedQuiz = getSelectedQuiz();
  const quizSummary = state.includeQuiz
    ? `${selectedQuiz.title}이(가) 편지 문구 하단에 추가됩니다.${state.includeQuizAnswer ? " 정답도 함께 보냅니다." : " 정답은 제외됩니다."}`
    : "안부문구만 먼저 작성하고, 퀴즈는 필요할 때만 아래에 추가할 수 있어요.";

  return `
    <div class="page-stack">
      <article class="card">
        <div class="card-body">
          <h3 class="card-title">받는 분</h3>
          <div class="option-list">
            ${recipients
              .map((recipient) => {
                const selectedClass = recipient.id === state.recipientId ? " is-selected" : "";
                return `
                  <button type="button" class="option-item recipient-option${selectedClass}" data-id="${recipient.id}">
                    <div>
                      <div class="option-title">${escapeHtml(recipient.name)}</div>
                      <div class="option-desc">${escapeHtml(recipient.relation)} · ${escapeHtml(recipient.address)}</div>
                    </div>
                  </button>
                `;
              })
              .join("")}
          </div>
        </div>
      </article>

      <article class="card">
        <div class="card-body">
          <div class="section-title-row">
            <h3 class="card-title">사진 업로드</h3>
            <div class="inline-icon">🖼</div>
          </div>
          <div class="upload-box">
            <div>
              <span class="icon">📷</span>
              손주 사진 또는 가족 사진 올리기
            </div>
          </div>
        </div>
      </article>

      <article class="card">
        <div class="card-body">
          <h3 class="card-title">메시지 작성</h3>
          <textarea id="messageInput" class="message-textarea" placeholder="${escapeHtml(currentRecipient.name)}께 보낼 안부를 적어보세요.">${escapeHtml(state.message)}</textarea>
        </div>
      </article>

      <article class="card">
        <div class="card-body">
          <button type="button" class="collapse-trigger suggestion-toggle-button ${state.suggestionPanelOpen ? "is-open" : ""}">
            <span>
              <span class="card-title">AI 안부 문구 추천</span>
              <span class="toggle-subtext">눌러서 추천 문구 열기</span>
            </span>
            <span class="collapse-arrow">${state.suggestionPanelOpen ? "－" : "＋"}</span>
          </button>
          ${
            state.suggestionPanelOpen
              ? `
                <div class="collapsible-body">
                  <div class="suggestion-list">
                    ${suggestions
                      .map(
                        (suggestion) => `
                          <button type="button" class="suggestion-item suggestion-option" data-message="${escapeHtml(suggestion)}">
                            ${escapeHtml(suggestion)}
                          </button>
                        `
                      )
                      .join("")}
                  </div>
                </div>
              `
              : ""
          }
        </div>
      </article>

      <article class="card">
        <div class="card-body">
          <div class="section-title-row">
            <div>
              <h3 class="card-title">AI 두뇌퀴즈 추천</h3>
              <p class="subtext">텍스트형 문제와 십자낱말형 예시를 모두 보여드려요.</p>
            </div>
            <button type="button" class="link-button regenerate-quiz-button">다시 추천</button>
          </div>

          <div class="filter-chip-row">
            ${renderQuizTypeChips()}
          </div>

          <div class="quiz-list">
            ${renderQuizCards()}
          </div>

          <div class="send-summary-box">
            <button type="button" class="toggle-row toggle-quiz-button ${state.includeQuiz ? "is-on" : ""}">
              <span>
                <strong>편지 문구 하단에 퀴즈 추가하기</strong>
                <span class="toggle-subtext">추가비용 없이 같은 1장 안에 함께 구성해요.</span>
              </span>
              <span class="toggle-switch"><span class="toggle-knob"></span></span>
            </button>

            ${
              state.includeQuiz
                ? `
                  <button type="button" class="toggle-row toggle-answer-button ${state.includeQuizAnswer ? "is-on" : ""}">
                    <span>
                      <strong>퀴즈 정답도 함께 보내기</strong>
                      <span class="toggle-subtext">끄면 문제만 보내고, 켜면 편지 맨 아래에 정답 확인칸을 넣어요.</span>
                    </span>
                    <span class="toggle-switch"><span class="toggle-knob"></span></span>
                  </button>
                `
                : ""
            }

            <div class="info-chip summary-chip">${escapeHtml(quizSummary)}</div>
          </div>
        </div>
      </article>

      <button type="button" class="primary-button preview-button">최종 편지 시안 보기</button>
    </div>
  `;
}

function previewPage() {
  const { recipient, selectedQuiz, quizSummary } = getFinalLetterData();
  return `
    <div class="page-stack">
      <article class="card preview-hero-card">
        <div class="card-body">
          <div class="section-title-row preview-hero-row">
            <div>
              <h3 class="card-title">실제 편지 최종시안</h3>
              <p class="subtext">사용자가 직접 쓴 내용만 본문에 들어가고, 퀴즈는 선택했을 때만 아래에 붙습니다.</p>
            </div>
            ${badge("1장 구성")}
          </div>
          <div class="preview-meta-grid">
            <div class="preview-meta-chip"><strong>수신인</strong><span>${escapeHtml(recipient.name)}</span></div>
            <div class="preview-meta-chip"><strong>퀴즈</strong><span>${escapeHtml(quizSummary)}</span></div>
          </div>
        </div>
      </article>

      <article class="card final-letter-card">
        <div class="card-body final-letter-body">
          <div class="final-letter-sheet">
            <div class="letter-sheet-top">
              <div>
                <div class="letter-brand">E음편지</div>
                <div class="letter-season">2026년 4월 봄편지</div>
              </div>
              <div class="letter-badge">실물 편지 1장</div>
            </div>

            <div class="letter-photo-block">
              <div class="letter-photo-icon">📷</div>
              <div class="letter-photo-title">가족 사진 영역</div>
              <div class="letter-photo-desc">업로드한 사진이 이 위치에 들어가 실물 편지 1장으로 제작됩니다.</div>
            </div>

            <div class="letter-recipient-row">
              <span class="letter-recipient-label">받는 분</span>
              <span class="letter-recipient-value">${escapeHtml(recipient.name)} · ${escapeHtml(recipient.address)}</span>
            </div>

            <div class="letter-body-copy">
              <div class="letter-body-line">${escapeHtml(state.message)}</div>
            </div>

            ${state.includeQuiz ? renderLetterQuizBlock(selectedQuiz) : ""}

            ${
              state.includeQuiz && state.includeQuizAnswer
                ? `
                  <div class="letter-answer-box">
                    <div class="letter-answer-label">정답 확인</div>
                    <div class="letter-answer-desc">문제를 먼저 생각해본 뒤 아래에서 확인할 수 있게 분리했습니다.</div>
                    <div class="letter-answer-text">${escapeHtml(selectedQuiz.answer)}</div>
                  </div>
                `
                : ""
            }

            <div class="letter-footer-note">
              ${
                state.includeQuiz
                  ? state.includeQuizAnswer
                    ? "퀴즈와 정답이 함께 포함된 최종 시안입니다."
                    : "퀴즈는 포함되고, 정답은 제외된 최종 시안입니다."
                  : "안부문구 중심으로 구성된 최종 시안입니다."
              }
            </div>
          </div>
        </div>
      </article>

      <div class="preview-action-row">
        <button type="button" class="secondary-button page-link" data-page="write">편집으로 돌아가기</button>
        <button type="button" class="primary-button complete-preview-button">이 시안으로 보기</button>
      </div>
    </div>
  `;
}

function subscribePage() {
  const plans = [
    ["월 1회", "가볍게 안부 전하기", "1,900원"],
    ["월 2회", "더 자주 마음 전하기", "3,900원"],
    ["기념일 플랜", "생신·명절 자동 발송", "2,900원"],
  ];

  return `
    <div class="page-stack">
      <article class="card" style="background: linear-gradient(135deg, #ffffff 0%, #fbe8ee 100%);">
        <div class="card-body">
          <h3 class="card-title">현재 구독 플랜</h3>
          <div class="hero-title" style="font-size: 28px; margin-top: 14px; color: var(--accent-deep);">월 1회 정기 편지</div>
          <p class="hero-description">매월 15일 발송 · 월 1,900원</p>
        </div>
      </article>

      ${plans
        .map(
          ([title, desc, price]) => `
            <article class="card">
              <div class="card-body">
                <div class="section-title-row">
                  <div>
                    <div class="option-title">${title}</div>
                    <div class="option-desc">${desc}</div>
                  </div>
                  <div class="price">${price}</div>
                </div>
              </div>
            </article>
          `
        )
        .join("")}

      <article class="card">
        <div class="card-body">
          <div class="section-title-row">
            <h3 class="card-title">결제 수단</h3>
            <div class="inline-icon">💳</div>
          </div>
          <div class="info-chip">신용카드 · 정기결제 등록 완료</div>
        </div>
      </article>

      <button type="button" class="primary-button subscribe-button">구독 플랜 변경하기</button>
    </div>
  `;
}

function historyPage() {
  return `
    <div class="page-stack">
      ${sentHistory
        .map(
          (item) => `
            <article class="card">
              <div class="card-body">
                <div class="section-title-row">
                  <div>
                    <div class="history-meta">${escapeHtml(item.date)}</div>
                    <div class="history-title">${escapeHtml(item.title)}</div>
                    <div class="option-desc">우체국 제작 및 발송 완료</div>
                  </div>
                  ${badge(item.status)}
                </div>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function myPage() {
  const items = ["수신인 주소 관리", "기념일 알림 설정", "푸시 알림 설정", "결제수단 관리"];
  return `
    <div class="page-stack">
      <article class="card">
        <div class="card-body">
          <div class="profile-name">박혜영 님</div>
          <div class="profile-desc">가족의 마음을 우편으로 전하는 중</div>
        </div>
      </article>

      <article class="card">
        <div class="card-body setting-list">
          ${items
            .map(
              (item) => `
                <button type="button" class="setting-item">
                  <span>${item}</span>
                  <span class="arrow">›</span>
                </button>
              `
            )
            .join("")}
        </div>
      </article>
    </div>
  `;
}

function renderPage() {
  ensureSelectedQuizExists();
  const meta = getScreenMeta();
  const isHome = state.page === "home";
  $("#screenTitle").text(meta.title);
  $("#screenSubtitle").text(meta.subtitle);
  $(".title-panel").toggle(!isHome);
  $(".nav-item").removeClass("is-active");
  const activeNavPage = state.page === "preview" ? "write" : state.page;
  $(`.nav-item[data-page="${activeNavPage}"]`).addClass("is-active");

  let html = "";
  switch (state.page) {
    case "write":
      html = writePage();
      break;
    case "preview":
      html = previewPage();
      break;
    case "subscribe":
      html = subscribePage();
      break;
    case "history":
      html = historyPage();
      break;
    case "mypage":
      html = myPage();
      break;
    case "home":
    default:
      html = homePage();
      break;
  }

  $("#pageRoot").html(html);
}

function showToast(message) {
  let $toast = $(".menu-toast");
  if (!$toast.length) {
    $toast = $('<div class="menu-toast"></div>');
    $("body").append($toast);
  }
  $toast.stop(true, true).text(message).fadeIn(180).delay(1400).fadeOut(260);
}

$(function () {
  runDevChecks();
  renderPage();

  $(document).on("click", ".nav-item, .page-link", function () {
    const nextPage = $(this).data("page");
    if (!nextPage) return;
    state.page = String(nextPage);
    renderPage();
  });

  $(document).on("click", ".recipient-option", function () {
    state.recipientId = Number($(this).data("id"));
    renderPage();
  });

  $(document).on("click", ".suggestion-toggle-button", function () {
    state.suggestionPanelOpen = !state.suggestionPanelOpen;
    renderPage();
  });

  $(document).on("click", ".suggestion-option", function () {
    state.message = String($(this).data("message"));
    renderPage();
  });

  $(document).on("input", "#messageInput", function () {
    state.message = $(this).val();
  });

  $(document).on("click", ".quiz-type-chip", function () {
    state.quizType = String($(this).data("type"));
    state.quizId = getQuizItemsByType(state.quizType)[0].id;
    renderPage();
  });

  $(document).on("click", ".quiz-option", function () {
    state.quizId = String($(this).data("id"));
    renderPage();
  });

  $(document).on("click", ".toggle-quiz-button", function () {
    state.includeQuiz = !state.includeQuiz;
    if (!state.includeQuiz) {
      state.includeQuizAnswer = false;
    }
    renderPage();
  });

  $(document).on("click", ".toggle-answer-button", function () {
    state.includeQuizAnswer = !state.includeQuizAnswer;
    renderPage();
  });

  $(document).on("click", ".regenerate-quiz-button", function () {
    state.quizSeed += 1;
    state.quizId = getQuizItemsByType(state.quizType)[0].id;
    renderPage();
    showToast("새로운 AI 두뇌퀴즈 추천으로 바꿨어요.");
  });

  $(document).on("click", ".preview-button", function () {
    state.page = "preview";
    renderPage();
  });

  $(document).on("click", ".complete-preview-button", function () {
    if (state.includeQuiz) {
      showToast(state.includeQuizAnswer ? "퀴즈와 정답이 포함된 최종 시안입니다." : "퀴즈만 포함된 최종 시안입니다.");
      return;
    }
    showToast("안부문구 중심 최종 편지 시안을 확인 중이에요.");
  });

  $(document).on("click", ".subscribe-button", function () {
    showToast("구독 플랜 변경 화면은 다음 단계에서 연결할 수 있어요.");
  });

  $(".menu-button").on("click", function () {
    showToast("메뉴 기능은 아직 연결 전이에요.");
  });
});
