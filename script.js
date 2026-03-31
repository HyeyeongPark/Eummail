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

const templates = [
  { id: 1, name: "따뜻한 봄날", desc: "밝고 부드러운 사진 엽서" },
  { id: 2, name: "손주 사진", desc: "가족사진 중심의 감성 카드" },
  { id: 3, name: "명절 안부", desc: "단정한 인사말 전용 편지" },
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

const state = {
  page: "home",
  message: "할머니, 날이 따뜻해졌어요. 사진 보시고 오늘도 기분 좋은 하루 보내셨으면 좋겠어요.",
  recipientId: 1,
  templateId: 1,
};

function runDevChecks() {
  const checks = [
    { name: "recipients", pass: recipients.length > 0 },
    { name: "templates", pass: templates.length > 0 },
    { name: "sentHistory", pass: sentHistory.length > 0 },
    { name: "suggestions", pass: suggestions.length > 0 },
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

function getScreenMeta() {
  switch (state.page) {
    case "write":
      return {
        title: "편지 작성",
        subtitle: "사진과 마음을 담아 실물 편지로 보내세요.",
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
        subtitle: "E음우편으로 안부를 실물 편지로 전해보세요.",
      };
  }
}

function badge(text) {
  return `<span class="status-badge">${escapeHtml(text)}</span>`;
}

function homePage() {
  return `
    <div class="page-stack">
      <article class="card hero-card">
        <div class="card-body">
          <div class="hero-top">
            <div>
              ${badge("정기구독 중")}
              <h3 class="hero-title">마음을 잇는<br />실물 편지 구독</h3>
              <p class="hero-description">사진과 짧은 메시지를 올리면 우체국이 편지로 제작해 전달합니다.</p>
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
            <div class="option-desc">사진과 안부를 1분 안에 작성</div>
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
          <div class="section-title-row">
            <h3 class="card-title">AI 안부 문구 추천</h3>
            <div class="inline-icon">✦</div>
          </div>
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
      </article>

      <article class="card">
        <div class="card-body">
          <h3 class="card-title">메시지 작성</h3>
          <textarea id="messageInput" class="message-textarea" placeholder="${escapeHtml(currentRecipient.name)}께 보낼 안부를 적어보세요.">${escapeHtml(state.message)}</textarea>
        </div>
      </article>

      <article class="card">
        <div class="card-body">
          <h3 class="card-title">템플릿 선택</h3>
          <div class="option-list">
            ${templates
              .map((template) => {
                const selectedClass = template.id === state.templateId ? " is-selected" : "";
                return `
                  <button type="button" class="option-item template-option${selectedClass}" data-id="${template.id}">
                    <div>
                      <div class="option-title">${escapeHtml(template.name)}</div>
                      <div class="option-desc">${escapeHtml(template.desc)}</div>
                    </div>
                    <span class="arrow">›</span>
                  </button>
                `;
              })
              .join("")}
          </div>
        </div>
      </article>

      <button type="button" class="primary-button preview-button">편지 미리보기</button>
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
  const meta = getScreenMeta();
  $("#screenTitle").text(meta.title);
  $("#screenSubtitle").text(meta.subtitle);
  $(".nav-item").removeClass("is-active");
  $(`.nav-item[data-page="${state.page}"]`).addClass("is-active");

  let html = "";
  switch (state.page) {
    case "write":
      html = writePage();
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
  $toast.stop(true, true).text(message).fadeIn(180).delay(1200).fadeOut(240);
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

  $(document).on("click", ".template-option", function () {
    state.templateId = Number($(this).data("id"));
    renderPage();
  });

  $(document).on("click", ".suggestion-option", function () {
    state.message = String($(this).data("message"));
    renderPage();
  });

  $(document).on("input", "#messageInput", function () {
    state.message = $(this).val();
  });

  $(document).on("click", ".preview-button", function () {
    showToast("미리보기 화면은 데모용으로 생략했어요.");
  });

  $(document).on("click", ".subscribe-button", function () {
    showToast("구독 플랜 변경 화면은 다음 단계에서 연결할 수 있어요.");
  });

  $(".menu-button").on("click", function () {
    showToast("메뉴 기능은 아직 연결 전이에요.");
  });
});
