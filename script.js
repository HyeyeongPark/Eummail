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
  "엄마, 요즘 많이 바쁘셨죠? 그래도 늘 생각하고 있어요. 건강 잘 챙기세요.",
  "할머니, 다음에 만나면 같이 맛있는 거 먹어요. 보고 싶은 마음을 사진에 담아 보냅니다.",
  "엄마, 오늘도 식사 잘 챙겨 드시고 따뜻한 봄바람처럼 편안한 하루 보내세요.",
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
      promptLines: ["가을에 많이 떠오르는 대표 과일은?", "힌트: 홍시로도 먹는 과일이에요."],
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
      promptLines: ["명절 아침에 가장 먼저 떠오르는 음식은?", "힌트: 뜨끈한 국물이 있는 메뉴예요."],
      answer: "떡국",
    },
  ],
  crossword: [
    {
      key: "cross-spring",
      mode: "crossword",
      title: "봄날 십자낱말",
      desc: "칸 수와 정답 글자 수가 정확히 맞는 쉬운 십자낱말",
      level: "쉬움",
      rows: 4,
      cols: 5,
      note: "빈칸 수만큼 글자를 떠올려 보세요.",
      words: [
        { number: 1, dir: "across", row: 0, col: 0, answer: "봄비", clue: "봄에 자주 떠오르는 비" },
        { number: 2, dir: "down", row: 0, col: 1, answer: "비누", clue: "손 씻을 때 쓰는 것" },
        { number: 3, dir: "down", row: 0, col: 4, answer: "바람", clue: "살랑살랑 부는 공기" },
        { number: 4, dir: "across", row: 2, col: 2, answer: "꽃길", clue: "꽃이 핀 예쁜 길" },
      ],
    },
    {
      key: "cross-memory",
      mode: "crossword",
      title: "추억 십자낱말",
      desc: "칸 수와 단어 길이가 자연스럽게 맞는 회상형 십자낱말",
      level: "보통",
      rows: 4,
      cols: 5,
      note: "가로와 세로 칸 수를 보고 천천히 맞혀 보세요.",
      words: [
        { number: 1, dir: "across", row: 0, col: 0, answer: "웃음", clue: "즐거울 때 짓는 표정" },
        { number: 2, dir: "across", row: 0, col: 3, answer: "시장", clue: "장 보러 가는 곳" },
        { number: 3, dir: "down", row: 0, col: 1, answer: "음악", clue: "노래와 연주를 함께 부르는 말" },
        { number: 4, dir: "down", row: 0, col: 4, answer: "장화", clue: "비 오는 날 신는 신발" },
        { number: 5, dir: "across", row: 2, col: 2, answer: "추억", clue: "지난날을 떠올리는 기억" },
      ],
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
    { name: "crosswordLayout", pass: (quizCatalog.crossword || []).every(validateCrosswordLayout) },
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

function getAnswerLength(answer) {
  return Array.from(String(answer || "").trim()).length;
}

function splitQuizContent(quiz) {
  if (!quiz) {
    return { promptLines: [], answerLine: "" };
  }

  if (quiz.mode === "crossword") {
    const clueLines = quiz.words.map((word) => {
      const dirLabel = word.dir === "across" ? "가로" : "세로";
      return `${word.number} ${dirLabel}: ${word.clue} (${getAnswerLength(word.answer)}칸)`;
    });

    return {
      promptLines: [quiz.note, ...clueLines],
      answerLine: `정답: ${quiz.words.map((word) => `${word.number}. ${word.answer}`).join(" / ")}`,
    };
  }

  return {
    promptLines: quiz.promptLines,
    answerLine: `정답: ${quiz.answer}`,
  };
}

function buildCrosswordGrid(quiz) {
  const rows = quiz.rows;
  const cols = quiz.cols;
  const grid = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({ blocked: true, number: "", letter: "" }))
  );

  quiz.words.forEach((word) => {
    const letters = Array.from(word.answer);
    letters.forEach((letter, index) => {
      const row = word.row + (word.dir === "down" ? index : 0);
      const col = word.col + (word.dir === "across" ? index : 0);
      if (row >= rows || col >= cols) {
        console.warn("[E음우편] crossword bounds error:", quiz.key, word.number, word.answer);
        return;
      }
      const cell = grid[row][col];
      if (!cell.blocked && cell.letter && cell.letter !== letter) {
        console.warn("[E음우편] crossword conflict:", quiz.key, word.number, word.answer, letter);
      }
      grid[row][col] = {
        blocked: false,
        number: index === 0 ? String(word.number) : cell.number,
        letter,
      };
    });
  });

  return grid;
}

function validateCrosswordLayout(quiz) {
  const grid = buildCrosswordGrid(quiz);

  return quiz.words.every((word) => {
    const length = getAnswerLength(word.answer);
    const beforeRow = word.row - (word.dir === "down" ? 1 : 0);
    const beforeCol = word.col - (word.dir === "across" ? 1 : 0);
    const afterRow = word.row + (word.dir === "down" ? length : 0);
    const afterCol = word.col + (word.dir === "across" ? length : 0);

    const hasBeforeCell = beforeRow >= 0 && beforeCol >= 0 && beforeRow < quiz.rows && beforeCol < quiz.cols && !grid[beforeRow][beforeCol].blocked;
    const hasAfterCell = afterRow >= 0 && afterCol >= 0 && afterRow < quiz.rows && afterCol < quiz.cols && !grid[afterRow][afterCol].blocked;

    if (hasBeforeCell || hasAfterCell) {
      console.warn("[E음우편] crossword length mismatch:", quiz.key, word.number, word.answer);
      return false;
    }

    return true;
  });
}

function renderCrosswordGrid(quiz, variant = "card") {
  const grid = buildCrosswordGrid(quiz);
  const sizeClass = variant === "letter" ? " is-letter" : "";

  return `
    <div class="crossword-grid${sizeClass}" style="grid-template-columns: repeat(${quiz.cols}, 1fr);">
      ${grid
        .flat()
        .map((cell) => {
          if (cell.blocked) {
            return `<div class="crossword-cell is-blocked"></div>`;
          }
          return `
            <div class="crossword-cell">
              ${cell.number ? `<span class="crossword-number">${escapeHtml(cell.number)}</span>` : ""}
              <span class="crossword-blank"></span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderCrosswordClues(quiz, variant = "card") {
  const className = variant === "letter" ? "letter-clue-list" : "crossword-clue-list";
  return `
    <div class="${className}">
      ${quiz.words
        .map((word) => {
          const dirLabel = word.dir === "across" ? "가로" : "세로";
          return `<div class="crossword-clue-item">${escapeHtml(`${word.number} ${dirLabel}: ${word.clue} (${getAnswerLength(word.answer)}칸)`)}</div>`;
        })
        .join("")}
    </div>
  `;
}

function renderQuizPreview(quiz, variant = "card") {
  if (quiz.mode === "crossword") {
    return `
      <div class="crossword-preview ${variant === "letter" ? "is-letter" : ""}">
        <div class="crossword-note">${escapeHtml(quiz.note)}</div>
        ${renderCrosswordGrid(quiz, variant)}
        ${renderCrosswordClues(quiz, variant)}
      </div>
    `;
  }

  return `
    <div class="quiz-preview">
      ${quiz.promptLines.map((line) => `<div class="quiz-line">${escapeHtml(line)}</div>`).join("")}
    </div>
  `;
}

function getQuizSummary() {
  const selectedQuiz = getSelectedQuiz();
  if (!state.includeQuiz) {
    return "안부문구만 먼저 작성하고, 퀴즈는 필요할 때만 아래에 추가할 수 있어요.";
  }
  if (state.includeQuizAnswer) {
    return `${selectedQuiz.title} 문제를 편지 하단에 넣고, 정답은 맨 아래 별도 칸에 함께 보냅니다.`;
  }
  return `${selectedQuiz.title} 문제만 편지 하단에 넣고, 정답은 보내지 않아요.`;
}

function getScreenMeta() {
  switch (state.page) {
    case "write":
      return {
        title: "편지 작성",
        subtitle: "메시지를 먼저 쓰고, 필요하면 아래에서 AI 안부문구 추천과 두뇌퀴즈를 추가하세요.",
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
        subtitle: "E음편지로 안부문구와 두뇌퀴즈를 같은 1장 안에 함께 담아보세요.",
      };
  }
}

function badge(text) {
  return `<span class="status-badge">${escapeHtml(text)}</span>`;
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
            <div class="option-desc">사진, 메시지, 퀴즈를 1장으로 구성</div>
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
              <p class="subtext">낱말퍼즐, 속담퀴즈, 회상형 질문, 십자낱말까지 자동 추천합니다.</p>
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
      const { answerLine } = splitQuizContent(quiz);
      return `
        <button type="button" class="quiz-card quiz-option${selectedClass}" data-id="${quiz.id}">
          <div class="quiz-header-row">
            <div>
              <div class="history-title">${escapeHtml(quiz.title)}</div>
              <div class="option-desc">${escapeHtml(quiz.desc)}</div>
            </div>
            <span class="hero-badge">${escapeHtml(quiz.level)}</span>
          </div>
          ${renderQuizPreview(quiz)}
          <div class="quiz-answer-note">정답은 바로 아래에 붙지 않아요 · ${escapeHtml(answerLine)}</div>
        </button>
      `;
    })
    .join("");
}

function writePage() {
  const currentRecipient = getCurrentRecipient();
  const panelOpenClass = state.suggestionPanelOpen ? " is-open" : "";

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
          <button type="button" class="accordion-trigger suggestion-panel-toggle${panelOpenClass}">
            <div>
              <div class="card-title">AI 안부 문구 추천</div>
              <div class="subtext">필요할 때만 열어서 문구를 골라 메시지에 반영할 수 있어요.</div>
            </div>
            <span class="accordion-chevron"></span>
          </button>
          ${state.suggestionPanelOpen ? `
            <div class="suggestion-list accordion-panel">
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
          ` : ""}
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
          <div class="section-title-row">
            <div>
              <h3 class="card-title">AI 두뇌퀴즈 추천</h3>
              <p class="subtext">텍스트형 문제와 십자낱말을 골라 편지 문구 하단에 넣을 수 있어요.</p>
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
            <button type="button" class="toggle-row toggle-quiz-button${state.includeQuiz ? " is-on" : ""}">
              <div>
                <strong>편지 하단에 퀴즈 추가하기</strong>
                <span class="toggle-subtext">추가 비용 없이 같은 1장 안에 함께 구성됩니다.</span>
              </div>
              <span class="toggle-switch"><span class="toggle-knob"></span></span>
            </button>

            ${state.includeQuiz ? `
              <button type="button" class="toggle-row toggle-answer-button${state.includeQuizAnswer ? " is-on" : ""}" style="margin-top: 10px;">
                <div>
                  <strong>퀴즈 정답도 함께 보내기</strong>
                  <span class="toggle-subtext">정답은 문제 바로 아래가 아니라 편지 맨 아래 별도 칸에 넣어요.</span>
                </div>
                <span class="toggle-switch"><span class="toggle-knob"></span></span>
              </button>
            ` : ""}

            <div class="info-chip summary-chip">${escapeHtml(getQuizSummary())}</div>
          </div>
        </div>
      </article>

      <button type="button" class="primary-button preview-button">최종 편지 시안 보기</button>
    </div>
  `;
}

function previewPage() {
  const recipient = getCurrentRecipient();
  const selectedQuiz = getSelectedQuiz();
  const todayLabel = "2026년 4월 봄편지";
  const quizLabel = state.includeQuiz
    ? `${selectedQuiz.title} · ${state.includeQuizAnswer ? "정답 포함" : "정답 미포함"}`
    : "퀴즈 없이 안부문구만 구성";
  const { answerLine } = splitQuizContent(selectedQuiz);

  return `
    <div class="page-stack">
      <article class="card preview-hero-card">
        <div class="card-body">
          <div class="section-title-row preview-hero-row">
            <div>
              <h3 class="card-title">실제 편지 최종시안</h3>
              <p class="subtext">직접 작성한 메시지만 본문에 넣고, 퀴즈는 선택했을 때만 하단에 추가됩니다.</p>
            </div>
            ${badge("1장 구성")}
          </div>
          <div class="preview-meta-grid">
            <div class="preview-meta-chip"><strong>수신인</strong><span>${escapeHtml(recipient.name)}</span></div>
            <div class="preview-meta-chip"><strong>구성</strong><span>${escapeHtml(quizLabel)}</span></div>
            <div class="preview-meta-chip"><strong>발송 시점</strong><span>${escapeHtml(todayLabel)}</span></div>
          </div>
        </div>
      </article>

      <article class="card final-letter-card">
        <div class="card-body final-letter-body">
          <div class="final-letter-sheet">
            <div class="letter-sheet-top">
              <div>
                <div class="letter-brand">E음편지</div>
                <div class="letter-season">${escapeHtml(todayLabel)}</div>
              </div>
              <div class="letter-season">사진 + 메시지 1장</div>
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

            ${state.includeQuiz ? `
              <div class="letter-quiz-section">
                <div class="letter-quiz-title">함께 풀어보는 AI 두뇌퀴즈</div>
                ${selectedQuiz.mode === "crossword"
                  ? `
                    <div class="letter-crossword-box">
                      ${renderQuizPreview(selectedQuiz, "letter")}
                    </div>
                  `
                  : `
                    <div class="letter-quiz-lines">
                      ${selectedQuiz.promptLines.map((line) => `<div class="letter-quiz-line">${escapeHtml(line)}</div>`).join("")}
                    </div>
                  `}
              </div>
            ` : ""}

            ${state.includeQuiz && state.includeQuizAnswer ? `
              <div class="letter-answer-box">
                <div class="letter-answer-label">정답 확인</div>
                <!-- <div class="letter-answer-desc">문제 바로 아래에 두지 않고, 편지 맨 아래에서 천천히 확인할 수 있게 분리했어요.</div> --!>
                <div class="letter-answer-text">${escapeHtml(answerLine)}</div>
              </div>
            ` : ""}

            <!-- <div class="letter-footer-note">
              ${state.includeQuiz
                ? state.includeQuizAnswer
                  ? "정답은 생각할 시간을 가질 수 있도록 편지 맨 아래 별도 칸에 분리했습니다."
                  : "이번 편지에는 문제와 힌트만 넣고, 정답은 보내지 않도록 구성했습니다."
                : "안부문구 중심으로 구성된 최종 시안입니다."}
            </div> --!>
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
  $("#screenTitle").text(meta.title);
  $("#screenSubtitle").text(meta.subtitle);
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

  $(document).on("click", ".suggestion-panel-toggle", function () {
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
    const selectedQuiz = getSelectedQuiz();
    if (state.includeQuiz) {
      showToast(`${selectedQuiz.title}${state.includeQuizAnswer ? "와 정답" : ""}이 반영된 최종 편지 시안을 확인 중이에요.`);
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
