(function () {
  "use strict";

  /* ========================================================================
     CONFIGURAÇÃO OFICIAL DO EDITAL ALEPA 001/2026 (ITEM 11.5) E CARGOS
     ======================================================================== */
  const CARGOS = {
    adm: {
      key: "adm",
      codigo: "Cargo 04 (PL.AL.060)",
      nomeCurto: "Assistência Administrativa",
      titulo: "Simulado Oficial — Auxiliar Técnico Legislativo: Assistência Administrativa",
      subtitulo:
        "Cargo 04 (PL.AL.060) • Nível Médio • 14 vagas • 50 Questões (A–E) • 0,2 pt/questão (Nota 0 a 10 • Mínimo 6,0) • Edital 001/2026 + Retificações 002 e 003/2026",
      especificoKey: "especificos_adm"
    },
    manutencao: {
      key: "manutencao",
      codigo: "Cargo 03 (PL.AL.062)",
      nomeCurto: "Manutenção de Patrimônio",
      titulo: "Simulado Oficial — Auxiliar Técnico Legislativo: Manutenção de Patrimônio",
      subtitulo:
        "Cargo 03 (PL.AL.062) • Nível Médio • 01 vaga + CR • 50 Questões (A–E) • 0,2 pt/questão (Nota 0 a 10 • Mínimo 6,0) • Edital 001/2026 + Retificações 002 e 003/2026",
      especificoKey: "especificos_manutencao"
    }
  };

  const DISCIPLINAS = [
    { key: "portugues",   nome: "Língua Portuguesa",                     qtd: 10, pontosPorQuestao: 0.2, desempate: "3º (disciplina)" },
    { key: "legislacao",  nome: "Legislação e Ética no Serviço Público", qtd: 10, pontosPorQuestao: 0.2, desempate: "2º (disciplina)" },
    { key: "informatica", nome: "Noções de Informática",                 qtd: 5,  pontosPorQuestao: 0.2, desempate: "5º (disciplina)" },
    { key: "raciocinio",  nome: "Raciocínio Lógico",                     qtd: 5,  pontosPorQuestao: 0.2, desempate: "4º (disciplina)" },
    { key: "especificos", nome: "Conhecimentos Específicos",             qtd: 20, pontosPorQuestao: 0.2, desempate: "1º (disciplina)" }
  ];

  const LETRAS = ["A", "B", "C", "D", "E"];
  const NOTA_MINIMA = 6.0;
  const TIMER_INITIAL_SECONDS = 3 * 60 * 60; // 3 horas (item 11.2.4)
  const STORAGE_SEEN_KEY = "simulado_cetap_seen_v1";
  const STORAGE_KEEP_KEY = "simulado_cetap_keep_v1";
  const BANK_KEYS = [
    "portugues",
    "legislacao",
    "informatica",
    "raciocinio",
    "especificos_adm",
    "especificos_manutencao"
  ];

  /* ========================================================================
     ESTADO DA APLICAÇÃO
     ======================================================================== */
  const state = {
    activeCargo: "adm",        // "adm" | "manutencao"
    pendingCargo: null,        // Cargo aguardando confirmação no modal
    examMode: "completo",      // "completo" (50q) | "rapido" (1-2 por disciplina)
    quickPerDisc: 2,           // 1 (5 questões) ou 2 (10 questões)
    quickCurrentIndex: 0,      // Questão ativa no Modo Questões Rápidas
    highlightedMatSec: null,   // Seção destacada na apostila (sincronizada no modo rápido)

    examQuestions: [],         // Questões ativas do simulado/treino atual
    answers: {},               // { [index]: optionIndex0a4 }
    immediateMode: false,      // Correção imediata ON/OFF
    keepQuestions: false,      // Toggle Manter questões ON/OFF (mantém questões e marcações sem randomizar)
    keepSnapshots: {},         // Snapshots por cargo::modo::qty quando keepQuestions está ON
    finished: false,           // Prova/treino finalizado?
    activeFilter: "all",       // Filtro visual de disciplina (modo completo)
    onlyMissedFilter: false,   // Filtro de revisão apenas de erros/em branco
    seenIdsByBankKey: {        // Histórico persistido no localStorage (nunca repete até esgotar o banco)
      portugues: new Set(),
      legislacao: new Set(),
      informatica: new Set(),
      raciocinio: new Set(),
      especificos_adm: new Set(),
      especificos_manutencao: new Set()
    },
    lastIdsByBankKey: {        // Último lote sorteado por banco (evita repetir na virada de ciclo/F5)
      portugues: new Set(),
      legislacao: new Set(),
      informatica: new Set(),
      raciocinio: new Set(),
      especificos_adm: new Set(),
      especificos_manutencao: new Set()
    },
    simuladoNumero: 1,

    // Timer
    timerEnabled: false,
    timerRunning: false,
    timerSeconds: TIMER_INITIAL_SECONDS,
    timerInterval: null,

    // Material lateral
    drawerOpen: false,
    drawerWide: false,
    activeMatDisc: "portugues",
    matSearchTerm: "",

    // Consultar Banco de Questões
    bankExplorerOpen: false,
    bankFilterDisc: "all",
    bankFilterSec: "all",
    bankSearch: "",
    bankShowAllAnswers: false,
    bankLimit: 20,
    bankPracticeAnswers: {},
    bankRevealedIds: new Set()
  };

  /* ========================================================================
     REFERÊNCIAS DE DOM
     ======================================================================== */
  const el = {
    examTitle: document.getElementById("exam-title"),
    examSubtitle: document.getElementById("exam-subtitle"),
    cargoBtns: document.querySelectorAll(".cargo-btn"),
    modeBtns: document.querySelectorAll(".mode-btn"),
    quickQtySelector: document.getElementById("quick-qty-selector"),
    qtyBtns: document.querySelectorAll(".qty-btn"),

    editalNoticeText: document.getElementById("edital-notice-text"),
    bankInfo: document.getElementById("bank-info"),
    disciplineFilter: document.getElementById("discipline-filter"),
    quickNavBar: document.getElementById("quick-nav-bar"),
    quickStepBadge: document.getElementById("quick-step-badge"),
    quickTopicSync: document.getElementById("quick-topic-sync"),
    btnQuickPrev: document.getElementById("btn-quick-prev"),
    btnQuickNext: document.getElementById("btn-quick-next"),
    btnQuickOpenMat: document.getElementById("btn-quick-open-mat"),

    toggleImmediate: document.getElementById("toggle-immediate"),
    immediateStatus: document.getElementById("immediate-status"),
    toggleKeepQuestions: document.getElementById("toggle-keep-questions"),
    keepStatus: document.getElementById("keep-status"),
    answeredCounter: document.getElementById("answered-counter"),
    progressFill: document.getElementById("progress-fill"),

    toggleTimerEnable: document.getElementById("toggle-timer-enable"),
    timerControls: document.getElementById("timer-controls"),
    timerDisplay: document.getElementById("timer-display"),
    btnTimerStart: document.getElementById("btn-timer-start"),
    btnTimerReset: document.getElementById("btn-timer-reset"),

    btnFinish: document.getElementById("btn-finish"),
    btnFinishBottom: document.getElementById("btn-finish-bottom"),
    btnRedo: document.getElementById("btn-redo"),
    btnTop: document.getElementById("btn-top"),

    answerCardBody: document.getElementById("answer-card-body"),
    btnCollapseCard: document.getElementById("btn-collapse-card"),
    resultPanel: document.getElementById("result-panel"),
    questionsContainer: document.getElementById("questions-container"),
    filterPills: document.querySelectorAll(".filter-pill"),

    // Vista do Simulado x Consultar Banco de Questões
    examView: document.getElementById("exam-view"),
    bankExplorer: document.getElementById("bank-explorer"),
    bankExplorerTitle: document.getElementById("bank-explorer-title"),
    bankExplorerSubtitle: document.getElementById("bank-explorer-subtitle"),
    btnBankBack: document.getElementById("btn-bank-back"),
    bankFilterDisc: document.getElementById("bank-filter-disc"),
    bankFilterSec: document.getElementById("bank-filter-sec"),
    bankSearchInput: document.getElementById("bank-search-input"),
    bankShowAnswers: document.getElementById("bank-show-answers"),
    bankResultsCount: document.getElementById("bank-results-count"),
    btnBankClearFilters: document.getElementById("btn-bank-clear-filters"),
    bankQuestionsList: document.getElementById("bank-questions-list"),
    bankPagination: document.getElementById("bank-pagination"),
    btnBankLoadMore: document.getElementById("btn-bank-load-more"),
    btnBankLoadAll: document.getElementById("btn-bank-load-all"),

    // Drawer Material e Tema
    btnToggleTheme: document.getElementById("btn-toggle-theme"),
    btnToggleMaterial: document.getElementById("btn-toggle-material"),
    fabMaterial: document.getElementById("fab-material"),
    btnCloseMaterial: document.getElementById("btn-close-material"),
    btnExpandMaterial: document.getElementById("btn-expand-material"),
    materialDrawer: document.getElementById("material-drawer"),
    matTabs: document.querySelectorAll(".mat-tab"),
    materialSearch: document.getElementById("material-search"),
    btnClearSearch: document.getElementById("btn-clear-search"),
    materialTocSelect: document.getElementById("material-toc-select"),
    materialContent: document.getElementById("material-content"),

    // Modais
    modalRedo: document.getElementById("modal-redo"),
    modalBankSummary: document.getElementById("modal-bank-summary"),
    btnRedoSwap: document.getElementById("btn-redo-swap"),
    btnRedoSame: document.getElementById("btn-redo-same"),
    btnRedoCancel: document.getElementById("btn-redo-cancel"),

    modalFinish: document.getElementById("modal-finish"),
    modalFinishText: document.getElementById("modal-finish-text"),
    btnFinishConfirm: document.getElementById("btn-finish-confirm"),
    btnFinishCancel: document.getElementById("btn-finish-cancel"),

    modalCargo: document.getElementById("modal-cargo"),
    modalCargoText: document.getElementById("modal-cargo-text"),
    btnCargoConfirm: document.getElementById("btn-cargo-confirm"),
    btnCargoCancel: document.getElementById("btn-cargo-cancel")
  };

  /* ========================================================================
     UTILITÁRIOS E RESOLUÇÃO ISOLADA DE CARGO / MODO
     ======================================================================== */
  function getCurrentCargo() {
    return CARGOS[state.activeCargo];
  }

  function isQuickMode() {
    return state.examMode === "rapido";
  }

  function getDisciplineQuestionCount(disc) {
    return isQuickMode() ? state.quickPerDisc : disc.qtd;
  }

  function getTotalQuestions() {
    return state.examQuestions.length || (isQuickMode() ? DISCIPLINAS.length * state.quickPerDisc : 50);
  }

  function resolveBankKey(discKey) {
    return discKey === "especificos" ? getCurrentCargo().especificoKey : discKey;
  }

  function resolveMaterialKey(discKey) {
    return discKey === "especificos" ? getCurrentCargo().especificoKey : discKey;
  }

  function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatInlineCode(str) {
    return escapeHtml(str)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`(.+?)`/g, "<code>$1</code>");
  }

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function formatTimer(totalSec) {
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `${pad2(h)}:${pad2(m)}:${pad2(s)}`;
  }

  function getTotalBankSizeAllCargos() {
    const banco = window.BANCO_QUESTOES || {};
    return Object.keys(banco).reduce((acc, k) => acc + (Array.isArray(banco[k]) ? banco[k].length : 0), 0);
  }

  function getActiveCargoBankStats() {
    const banco = window.BANCO_QUESTOES || {};
    let cargoTotal = 0;
    DISCIPLINAS.forEach((d) => {
      const bk = resolveBankKey(d.key);
      cargoTotal += (banco[bk] || []).length;
    });
    const espCount = (banco[getCurrentCargo().especificoKey] || []).length;
    return {
      allCargosTotal: getTotalBankSizeAllCargos(),
      cargoTotal,
      espCount
    };
  }

  function getMaterialSectionTitle(discKey, sectionId) {
    const matKey = resolveMaterialKey(discKey);
    const mat = window.MATERIAL_APOIO && window.MATERIAL_APOIO[matKey];
    if (mat && Array.isArray(mat.secoes)) {
      const found = mat.secoes.find((s) => s.id === sectionId);
      if (found) return found.titulo;
    }
    return sectionId || "Conteúdo Geral";
  }

  function updateCargoAndModeHeaderUI() {
    const cargo = getCurrentCargo();
    const quick = isQuickMode();

    el.examTitle.textContent = quick
      ? `⚡ Questões Rápidas — ${cargo.nomeCurto}`
      : cargo.titulo;
    el.examSubtitle.textContent = cargo.subtitulo;
    document.title = quick
      ? `Questões Rápidas — ALEPA 2026 | ${cargo.nomeCurto}`
      : `Simulado CETAP — ALEPA 2026 | ${cargo.nomeCurto}`;

    el.cargoBtns.forEach((btn) => {
      const active = btn.dataset.cargo === cargo.key;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", String(active));
    });

    el.modeBtns.forEach((btn) => {
      const active = state.bankExplorerOpen
        ? btn.dataset.mode === "banco"
        : btn.dataset.mode === state.examMode;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", String(active));
    });

    el.quickQtySelector.classList.toggle("hidden", !quick || state.bankExplorerOpen);
    el.qtyBtns.forEach((btn) => {
      btn.classList.toggle("active", Number(btn.dataset.qty) === state.quickPerDisc);
    });

    el.disciplineFilter.classList.toggle("hidden", quick);
    el.quickNavBar.classList.toggle("hidden", !quick);

    el.btnFinish.textContent = quick ? "Finalizar Treino" : "Finalizar Prova";
    el.btnFinishBottom.textContent = quick ? "Finalizar Treino Rápido e Ver Resumo" : "Finalizar Prova e Ver Nota";

    if (quick) {
      const totalQ = DISCIPLINAS.length * state.quickPerDisc;
      el.editalNoticeText.innerHTML = `<strong>Modo Questões Rápidas (${totalQ} questões):</strong> ${state.quickPerDisc} questão(ões) de cada uma das 5 disciplinas do edital, com o <strong>Material de Apoio sincronizado automaticamente</strong> no tópico específico da questão atual.`;
    } else {
      el.editalNoticeText.innerHTML = `<strong>Distribuição oficial da Prova Objetiva (Item 11.5 do Edital 001/2026):</strong> 10 de Língua Portuguesa • 10 de Legislação e Ética no Serviço Público • 05 de Noções de Informática • 05 de Raciocínio Lógico • 20 de Conhecimentos Específicos (Total: 50 questões, 0,2 pt cada).`;
    }

    const stats = getActiveCargoBankStats();
    el.bankInfo.textContent = `Banco total: ${stats.allCargosTotal} questões | Disponíveis para ${cargo.nomeCurto}: ${stats.cargoTotal} (${stats.espCount} específicas exclusivas).`;
  }

  /* ========================================================================
     PERSISTÊNCIA DE HISTÓRICO (SEMPRE DIFERENTES) E MANTER QUESTÕES
     ======================================================================== */
  function loadSeenHistory() {
    try {
      const raw = localStorage.getItem(STORAGE_SEEN_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      BANK_KEYS.forEach((k) => {
        const poolIds = new Set(((window.BANCO_QUESTOES && window.BANCO_QUESTOES[k]) || []).map((q) => q.id));
        if (parsed && parsed.seen && Array.isArray(parsed.seen[k])) {
          state.seenIdsByBankKey[k] = new Set(parsed.seen[k].filter((id) => poolIds.has(id)));
        }
        if (parsed && parsed.last && Array.isArray(parsed.last[k])) {
          state.lastIdsByBankKey[k] = new Set(parsed.last[k].filter((id) => poolIds.has(id)));
        }
      });
    } catch (e) {}
  }

  function saveSeenHistory() {
    try {
      const payload = { seen: {}, last: {} };
      BANK_KEYS.forEach((k) => {
        payload.seen[k] = Array.from(state.seenIdsByBankKey[k]);
        payload.last[k] = Array.from(state.lastIdsByBankKey[k]);
      });
      localStorage.setItem(STORAGE_SEEN_KEY, JSON.stringify(payload));
    } catch (e) {}
  }

  function getRemainingUnseenForActiveCargo() {
    const banco = window.BANCO_QUESTOES || {};
    let unseenCount = 0;
    DISCIPLINAS.forEach((d) => {
      const bk = resolveBankKey(d.key);
      const pool = banco[bk] || [];
      const seen = state.seenIdsByBankKey[bk];
      unseenCount += pool.filter((q) => !seen.has(q.id)).length;
    });
    return unseenCount;
  }

  function getSnapshotKey(cargoKey, modeKey, qty) {
    const c = cargoKey || state.activeCargo;
    const m = modeKey || state.examMode;
    const q = qty !== undefined ? qty : state.quickPerDisc;
    return `${c}::${m}::${m === "rapido" ? q : "full"}`;
  }

  function loadKeepStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEEP_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return;

      state.keepQuestions = Boolean(parsed.keepQuestions);
      if (parsed.snapshots && typeof parsed.snapshots === "object") {
        state.keepSnapshots = parsed.snapshots;
      }

      if (state.keepQuestions) {
        if (CARGOS[parsed.activeCargo]) state.activeCargo = parsed.activeCargo;
        if (parsed.examMode === "completo" || parsed.examMode === "rapido") state.examMode = parsed.examMode;
        if (parsed.quickPerDisc === 1 || parsed.quickPerDisc === 2) state.quickPerDisc = parsed.quickPerDisc;
        if (typeof parsed.immediateMode === "boolean") state.immediateMode = parsed.immediateMode;
      }
    } catch (e) {}
  }

  function saveKeepStorage() {
    try {
      if (state.keepQuestions && state.examQuestions.length > 0) {
        const key = getSnapshotKey();
        state.keepSnapshots[key] = {
          questionIds: state.examQuestions.map((q) => q.id),
          answers: { ...state.answers },
          finished: state.finished,
          quickCurrentIndex: state.quickCurrentIndex,
          simuladoNumero: state.simuladoNumero
        };
      }

      const payload = {
        keepQuestions: state.keepQuestions,
        activeCargo: state.activeCargo,
        examMode: state.examMode,
        quickPerDisc: state.quickPerDisc,
        immediateMode: state.immediateMode,
        snapshots: state.keepQuestions ? state.keepSnapshots : {}
      };
      localStorage.setItem(STORAGE_KEEP_KEY, JSON.stringify(payload));
    } catch (e) {}
  }

  function restoreSnapshotForCurrentSettings() {
    const snap = state.keepSnapshots[getSnapshotKey()];
    if (!snap || !Array.isArray(snap.questionIds) || snap.questionIds.length === 0) {
      return false;
    }

    const expectedTotal = DISCIPLINAS.reduce((acc, d) => acc + getDisciplineQuestionCount(d), 0);
    if (snap.questionIds.length !== expectedTotal) {
      return false;
    }

    const banco = window.BANCO_QUESTOES || {};
    const cargo = getCurrentCargo();
    const idLookup = new Map();

    DISCIPLINAS.forEach((disc) => {
      const bankKey = resolveBankKey(disc.key);
      const nomeExibicao =
        disc.key === "especificos" ? `${disc.nome} (${cargo.nomeCurto})` : disc.nome;
      (banco[bankKey] || []).forEach((q) => {
        idLookup.set(q.id, { q, disciplinaKey: disc.key, disciplinaNome: nomeExibicao });
      });
    });

    const restored = [];
    for (let i = 0; i < snap.questionIds.length; i++) {
      const found = idLookup.get(snap.questionIds[i]);
      if (!found) return false;
      restored.push({
        ...found.q,
        numero: i + 1,
        disciplinaKey: found.disciplinaKey,
        disciplinaNome: found.disciplinaNome
      });
    }

    state.examQuestions = restored;
    state.answers = {};
    if (snap.answers && typeof snap.answers === "object") {
      Object.keys(snap.answers).forEach((k) => {
        const idx = Number(k);
        const val = Number(snap.answers[k]);
        if (idx >= 0 && idx < restored.length && val >= 0 && val <= 4) {
          state.answers[idx] = val;
        }
      });
    }
    state.finished = Boolean(snap.finished);
    state.onlyMissedFilter = false;
    state.quickCurrentIndex = Math.max(
      0,
      Math.min(restored.length - 1, Number(snap.quickCurrentIndex) || 0)
    );
    state.simuladoNumero = Number(snap.simuladoNumero) || 1;
    return true;
  }

  /* ========================================================================
     TROCA DE CARGO E TROCA DE MODO
     ======================================================================== */
  function requestSwitchCargo(newCargoKey) {
    if (!CARGOS[newCargoKey] || newCargoKey === state.activeCargo) return;

    // Se "Manter questões" estiver ON, o progresso do cargo atual fica salvo sem perda!
    if (state.keepQuestions) {
      saveKeepStorage();
      applySwitchCargo(newCargoKey);
      return;
    }

    const answered = Object.keys(state.answers).length;
    if (answered > 0 && !state.finished) {
      state.pendingCargo = newCargoKey;
      const targetCargo = CARGOS[newCargoKey];
      el.modalCargoText.innerHTML = `Você respondeu <strong>${answered} questão(ões)</strong> no treino atual de <strong>${escapeHtml(getCurrentCargo().nomeCurto)}</strong>. Ao trocar para <strong>${escapeHtml(targetCargo.codigo)} — ${escapeHtml(targetCargo.nomeCurto)}</strong>, um novo conjunto de questões e a apostila específica desse cargo serão carregados. Deseja continuar?`;
      el.modalCargo.classList.remove("hidden");
    } else {
      applySwitchCargo(newCargoKey);
    }
  }

  function applySwitchCargo(newCargoKey) {
    el.modalCargo.classList.add("hidden");
    state.pendingCargo = null;
    if (state.keepQuestions) saveKeepStorage();
    state.activeCargo = newCargoKey;
    state.simuladoNumero = 1;
    rebuildExamForCurrentSettings(false, false);
  }

  function switchExamMode(newMode) {
    if (newMode === "banco") {
      openBankExplorer();
      return;
    }
    if (newMode !== "completo" && newMode !== "rapido") return;

    const wasBankOpen = state.bankExplorerOpen;
    if (wasBankOpen) {
      closeBankExplorer(false);
    }

    if (newMode === state.examMode) {
      if (wasBankOpen) {
        updateCargoAndModeHeaderUI();
      }
      return;
    }
    if (state.keepQuestions) saveKeepStorage();
    state.examMode = newMode;
    state.simuladoNumero = 1;
    rebuildExamForCurrentSettings(newMode === "rapido", false);
  }

  function setQuickPerDisc(qty) {
    if (qty !== 1 && qty !== 2) return;
    if (qty === state.quickPerDisc && isQuickMode()) return;
    if (state.keepQuestions) saveKeepStorage();
    state.quickPerDisc = qty;
    if (isQuickMode()) {
      rebuildExamForCurrentSettings(false, false);
    }
  }

  function rebuildExamForCurrentSettings(autoOpenMaterialOnDesktop, forceNewQuestions) {
    el.resultPanel.classList.add("hidden");
    el.resultPanel.innerHTML = "";

    if (state.timerEnabled) {
      resetTimer();
    }

    updateCargoAndModeHeaderUI();

    const restored = !forceNewQuestions && state.keepQuestions && restoreSnapshotForCurrentSettings();
    if (!restored) {
      generateNewExam();
    }

    setDisciplineFilter("all");
    renderAnswerCard();
    renderQuestions();

    if (state.finished) {
      finalizeExam(true);
    }

    if (isQuickMode() && !state.bankExplorerOpen) {
      if (autoOpenMaterialOnDesktop && window.innerWidth > 1080) {
        setDrawerOpen(true);
      }
      goToQuickQuestion(state.quickCurrentIndex, false);
    } else {
      state.highlightedMatSec = null;
      renderMaterialContent();
    }

    if (state.bankExplorerOpen) {
      state.bankFilterSec = "all";
      state.bankLimit = 20;
      populateBankSectionFilter();
      renderBankExplorer();
    }

    if (state.keepQuestions) {
      saveKeepStorage();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ========================================================================
     SORTEIO DE QUESTÕES (SEMPRE DIFERENTES ATÉ ESGOTAR O BANCO)
     ======================================================================== */
  function pickQuestionsForDiscipline(discKey, count, previousIds) {
    const bankKey = resolveBankKey(discKey);
    const pool = (window.BANCO_QUESTOES && window.BANCO_QUESTOES[bankKey]) || [];
    const seen = state.seenIdsByBankKey[bankKey];
    const recent = new Set([
      ...(previousIds || []),
      ...Array.from(state.lastIdsByBankKey[bankKey] || [])
    ]);

    const unseen = shuffle(pool.filter((q) => !seen.has(q.id)));
    let chosen;

    if (unseen.length >= count) {
      chosen = unseen.slice(0, count);
      chosen.forEach((q) => seen.add(q.id));
    } else {
      // Esgotou o ciclo de inéditas: aproveita todas as inéditas restantes primeiro e inicia novo ciclo evitando as imediatamente anteriores
      const unseenIds = new Set(unseen.map((q) => q.id));
      const notInRecent = shuffle(pool.filter((q) => !unseenIds.has(q.id) && !recent.has(q.id)));
      const inRecent = shuffle(pool.filter((q) => !unseenIds.has(q.id) && recent.has(q.id)));

      seen.clear();
      chosen = [...unseen, ...notInRecent, ...inRecent].slice(0, count);
      chosen.forEach((q) => seen.add(q.id));
    }

    state.lastIdsByBankKey[bankKey] = new Set(chosen.map((q) => q.id));
    return chosen;
  }

  function generateNewExam() {
    const previousIds = new Set(state.examQuestions.map((q) => q.id));
    const list = [];
    let numero = 1;
    const cargo = getCurrentCargo();

    DISCIPLINAS.forEach((disc) => {
      const count = getDisciplineQuestionCount(disc);
      const picked = pickQuestionsForDiscipline(disc.key, count, previousIds);
      const nomeExibicao =
        disc.key === "especificos"
          ? `${disc.nome} (${cargo.nomeCurto})`
          : disc.nome;

      picked.forEach((q) => {
        list.push({
          ...q,
          numero,
          disciplinaKey: disc.key,
          disciplinaNome: nomeExibicao
        });
        numero++;
      });
    });

    saveSeenHistory();

    state.examQuestions = list;
    state.answers = {};
    state.finished = false;
    state.onlyMissedFilter = false;
    state.quickCurrentIndex = 0;
  }

  function resetSameExam() {
    state.answers = {};
    state.finished = false;
    state.onlyMissedFilter = false;
    state.quickCurrentIndex = 0;
  }

  /* ========================================================================
     MODO QUESTÕES RÁPIDAS — NAVEGAÇÃO E SINCRONIA AUTOMÁTICA DO MATERIAL
     ======================================================================== */
  function syncMaterialToQuestion(q, forceOpenDrawer) {
    if (!q) return;
    if (forceOpenDrawer) {
      setDrawerOpen(true);
    }

    state.matSearchTerm = "";
    el.materialSearch.value = "";
    el.btnClearSearch.classList.add("hidden");
    state.highlightedMatSec = q.materialSecao || null;

    selectMaterialDiscipline(q.disciplinaKey);

    if (q.materialSecao) {
      setTimeout(() => {
        const target = document.getElementById(`mat-sec-${q.materialSecao}`);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          el.materialTocSelect.value = q.materialSecao;
        }
      }, 50);
    }
  }

  function goToQuickQuestion(idx, scrollMain) {
    const total = getTotalQuestions();
    if (total === 0) return;
    const safeIdx = Math.max(0, Math.min(total - 1, idx));
    state.quickCurrentIndex = safeIdx;

    const q = state.examQuestions[safeIdx];
    const secTitle = getMaterialSectionTitle(q.disciplinaKey, q.materialSecao);

    el.quickStepBadge.textContent = `Questão ${safeIdx + 1} de ${total} • ${q.disciplinaNome}`;
    el.quickTopicSync.textContent = `📌 Material selecionado: ${secTitle}`;

    el.btnQuickPrev.disabled = safeIdx === 0;
    const isLast = safeIdx === total - 1;
    el.btnQuickNext.textContent = isLast && !state.finished ? "Finalizar Treino ✔" : "Próxima →";
    el.btnQuickNext.disabled = isLast && state.finished;

    applyDisciplineFilter();
    updateAnswerCardStates();
    syncMaterialToQuestion(q, false);

    if (state.keepQuestions) {
      saveKeepStorage();
    }

    if (scrollMain) {
      const card = document.getElementById(`question-${safeIdx}`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  /* ========================================================================
     RENDERIZAÇÃO: CARTÃO-RESPOSTA INTERATIVO
     ======================================================================== */
  function renderAnswerCard() {
    const fragment = document.createDocumentFragment();
    const cargo = getCurrentCargo();

    DISCIPLINAS.forEach((disc) => {
      const block = document.createElement("div");
      block.className = "card-block";

      const label = document.createElement("div");
      label.className = "card-block-label";
      label.textContent =
        disc.key === "especificos" ? `Específicos (${cargo.nomeCurto})` : disc.nome;
      block.appendChild(label);

      const grid = document.createElement("div");
      grid.className = "card-grid";

      state.examQuestions
        .map((q, idx) => ({ q, idx }))
        .filter(({ q }) => q.disciplinaKey === disc.key)
        .forEach(({ q, idx }) => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "card-cell";
          btn.dataset.qidx = String(idx);
          btn.title = `Ir para a Questão ${pad2(q.numero)} (${q.disciplinaNome})`;
          btn.innerHTML = `<span>${pad2(q.numero)}</span><span class="cell-letter"></span>`;
          btn.addEventListener("click", () => jumpToQuestion(idx));
          grid.appendChild(btn);
        });

      block.appendChild(grid);
      fragment.appendChild(block);
    });

    el.answerCardBody.innerHTML = "";
    el.answerCardBody.appendChild(fragment);
    updateAnswerCardStates();
  }

  function updateAnswerCardStates() {
    const cells = el.answerCardBody.querySelectorAll(".card-cell");
    cells.forEach((cell) => {
      const idx = Number(cell.dataset.qidx);
      const q = state.examQuestions[idx];
      const chosen = state.answers[idx];
      const hasAnswer = chosen !== undefined;
      const shouldReveal = state.finished || (state.immediateMode && hasAnswer);

      cell.classList.remove("is-answered", "is-correct", "is-wrong", "is-current");
      if (isQuickMode() && idx === state.quickCurrentIndex) {
        cell.classList.add("is-current");
      }

      const letterSpan = cell.querySelector(".cell-letter");
      letterSpan.textContent = hasAnswer ? LETRAS[chosen] : "";

      if (shouldReveal) {
        if (hasAnswer && chosen === q.correta) {
          cell.classList.add("is-correct");
        } else {
          cell.classList.add("is-wrong");
        }
      } else if (hasAnswer) {
        cell.classList.add("is-answered");
      }
    });
  }

  function jumpToQuestion(idx) {
    const q = state.examQuestions[idx];
    if (!q) return;

    if (isQuickMode()) {
      goToQuickQuestion(idx, true);
      return;
    }

    if (state.onlyMissedFilter) {
      const isMissed = state.answers[idx] !== q.correta;
      if (!isMissed) {
        state.onlyMissedFilter = false;
        const btnToggle = document.getElementById("btn-toggle-only-missed");
        if (btnToggle) btnToggle.textContent = "Filtrar apenas erros/em branco";
      }
    }

    if (state.activeFilter !== "all" && state.activeFilter !== q.disciplinaKey) {
      setDisciplineFilter("all");
    } else {
      applyDisciplineFilter();
    }

    const card = document.getElementById(`question-${idx}`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "start" });
      card.classList.remove("highlight-jump");
      void card.offsetWidth;
      card.classList.add("highlight-jump");
    }
  }

  /* ========================================================================
     RENDERIZAÇÃO: QUESTÕES DO SIMULADO
     ======================================================================== */
  function renderQuestions() {
    const fragment = document.createDocumentFragment();
    let currentDisc = null;
    const cargo = getCurrentCargo();

    state.examQuestions.forEach((q, idx) => {
      if (q.disciplinaKey !== currentDisc) {
        currentDisc = q.disciplinaKey;
        const discObj = DISCIPLINAS.find((d) => d.key === currentDisc);
        const count = getDisciplineQuestionCount(discObj);
        const tituloDiv =
          currentDisc === "especificos"
            ? `${discObj.nome} — ${cargo.nomeCurto}`
            : discObj.nome;

        const divider = document.createElement("div");
        divider.className = "discipline-divider";
        divider.dataset.disc = currentDisc;
        divider.innerHTML = isQuickMode()
          ? `<h3>${escapeHtml(tituloDiv)}</h3><span>${count} questão(ões) rápida(s)</span>`
          : `<h3>${escapeHtml(tituloDiv)}</h3><span>${count} questões • ${(count * discObj.pontosPorQuestao).toFixed(1).replace(".", ",")} pontos</span>`;
        fragment.appendChild(divider);
      }

      const card = document.createElement("article");
      card.className = "question-card";
      card.id = `question-${idx}`;
      card.dataset.disc = q.disciplinaKey;
      card.dataset.qidx = String(idx);

      let contextHtml = "";
      if (q.contexto) {
        contextHtml = `<div class="question-context">${formatInlineCode(q.contexto)}</div>`;
      }

      const optionsHtml = q.alternativas
        .map((alt, optIdx) => {
          const inputId = `q-${idx}-opt-${optIdx}`;
          return `
            <li>
              <label class="option-label" for="${inputId}" data-opt="${optIdx}">
                <input type="radio" name="q-${idx}" id="${inputId}" value="${optIdx}" />
                <span class="option-letter">${LETRAS[optIdx]})</span>
                <span class="option-text">${formatInlineCode(alt)}</span>
              </label>
            </li>
          `;
        })
        .join("");

      card.innerHTML = `
        <div class="question-meta">
          <span class="question-number">Questão ${pad2(q.numero)}</span>
          <span class="question-topic-tag">${escapeHtml(q.topico)}</span>
        </div>
        ${contextHtml}
        <p class="question-stem">${formatInlineCode(q.enunciado)}</p>
        <ul class="options-list">${optionsHtml}</ul>
        <div class="question-feedback hidden" id="feedback-${idx}"></div>
      `;

      card.querySelectorAll(`input[name="q-${idx}"]`).forEach((radio) => {
        radio.addEventListener("change", (ev) => {
          handleSelectOption(idx, Number(ev.target.value));
        });
      });

      fragment.appendChild(card);
    });

    el.questionsContainer.innerHTML = "";
    el.questionsContainer.appendChild(fragment);
    applyDisciplineFilter();
    refreshAllQuestionVisuals();
    updateProgressUI();
  }

  function handleSelectOption(qIdx, optIdx) {
    if (state.finished) return;
    if (state.immediateMode && state.answers[qIdx] !== undefined) {
      refreshQuestionVisual(qIdx);
      return;
    }

    state.answers[qIdx] = optIdx;
    refreshQuestionVisual(qIdx);
    updateAnswerCardStates();
    updateProgressUI();
    if (state.keepQuestions) {
      saveKeepStorage();
    }
  }

  function refreshAllQuestionVisuals() {
    state.examQuestions.forEach((_, idx) => refreshQuestionVisual(idx));
  }

  function refreshQuestionVisual(qIdx) {
    const q = state.examQuestions[qIdx];
    const card = document.getElementById(`question-${qIdx}`);
    if (!card || !q) return;

    const chosen = state.answers[qIdx];
    const hasAnswer = chosen !== undefined;
    const shouldReveal = state.finished || (state.immediateMode && hasAnswer);
    const isLocked = state.finished || (state.immediateMode && hasAnswer);

    const labels = card.querySelectorAll(".option-label");
    labels.forEach((lbl) => {
      const optIdx = Number(lbl.dataset.opt);
      const radio = lbl.querySelector("input");
      radio.checked = chosen === optIdx;
      radio.disabled = isLocked;

      lbl.classList.remove("is-selected", "is-correct", "is-wrong", "is-locked");
      if (isLocked) lbl.classList.add("is-locked");

      if (shouldReveal) {
        if (optIdx === q.correta) {
          lbl.classList.add("is-correct");
        } else if (chosen === optIdx && optIdx !== q.correta) {
          lbl.classList.add("is-wrong");
        }
      } else if (chosen === optIdx) {
        lbl.classList.add("is-selected");
      }
    });

    const fb = document.getElementById(`feedback-${qIdx}`);
    if (!shouldReveal) {
      fb.classList.add("hidden");
      fb.innerHTML = "";
      return;
    }

    fb.classList.remove("hidden", "fb-correct", "fb-wrong", "fb-blank");
    let statusTitle = "";
    if (!hasAnswer) {
      fb.classList.add("fb-blank");
      statusTitle = `Questão em branco — Gabarito Oficial: Letra ${LETRAS[q.correta]}`;
    } else if (chosen === q.correta) {
      fb.classList.add("fb-correct");
      statusTitle = `✔ Resposta Correta! (Gabarito: Letra ${LETRAS[q.correta]})`;
    } else {
      fb.classList.add("fb-wrong");
      statusTitle = `✘ Resposta Incorreta — Você marcou ${LETRAS[chosen]} | Gabarito: Letra ${LETRAS[q.correta]}`;
    }

    fb.innerHTML = `
      <div class="feedback-head">
        <strong>${statusTitle}</strong>
        <button type="button" class="btn-link-material" data-disc="${q.disciplinaKey}" data-sec="${q.materialSecao || ""}">
          📖 Ver no Material
        </button>
      </div>
      <div>${formatInlineCode(q.explicacao)}</div>
    `;

    const matBtn = fb.querySelector(".btn-link-material");
    matBtn.addEventListener("click", () => {
      openMaterialAt(q.disciplinaKey, q.materialSecao);
    });
  }

  function updateProgressUI() {
    const count = Object.keys(state.answers).length;
    const total = getTotalQuestions();
    el.answeredCounter.textContent = `${count}/${total}`;
    el.progressFill.style.width = `${total > 0 ? (count / total) * 100 : 0}%`;
  }

  /* ========================================================================
     FILTRO DE DISCIPLINAS / VISIBILIDADE (COMPLETO vs RÁPIDO)
     ======================================================================== */
  function setDisciplineFilter(filterKey) {
    state.activeFilter = filterKey;
    el.filterPills.forEach((pill) => {
      pill.classList.toggle("active", pill.dataset.filter === filterKey);
    });
    applyDisciplineFilter();
  }

  function applyDisciplineFilter() {
    const cards = el.questionsContainer.querySelectorAll(".question-card");
    const dividers = el.questionsContainer.querySelectorAll(".discipline-divider");

    if (isQuickMode()) {
      const currentQ = state.examQuestions[state.quickCurrentIndex];
      const currentDisc = currentQ ? currentQ.disciplinaKey : null;
      cards.forEach((card) => {
        const idx = Number(card.dataset.qidx);
        card.classList.toggle("hidden", idx !== state.quickCurrentIndex);
      });
      dividers.forEach((div) => {
        div.classList.toggle("hidden", div.dataset.disc !== currentDisc);
      });
      return;
    }

    const visibleDiscs = new Set();
    cards.forEach((card) => {
      const idx = Number(card.dataset.qidx);
      const q = state.examQuestions[idx];
      const matchDisc = state.activeFilter === "all" || card.dataset.disc === state.activeFilter;
      const matchMissed = !state.onlyMissedFilter || !state.finished || state.answers[idx] !== q.correta;
      const show = matchDisc && matchMissed;
      card.classList.toggle("hidden", !show);
      if (show) visibleDiscs.add(card.dataset.disc);
    });

    dividers.forEach((div) => {
      const show = state.onlyMissedFilter
        ? visibleDiscs.has(div.dataset.disc)
        : state.activeFilter === "all" || div.dataset.disc === state.activeFilter;
      div.classList.toggle("hidden", !show);
    });
  }

  /* ========================================================================
     RELATÓRIO DE CONTEÚDOS PARA REFORÇAR (MODO COMPLETO)
     ======================================================================== */
  function buildStudyReportHtml(stats) {
    const cargo = getCurrentCargo();
    const discPriorityOrder = {
      especificos: 1,
      legislacao: 2,
      portugues: 3,
      raciocinio: 4,
      informatica: 5
    };

    const sectionMap = new Map();
    state.examQuestions.forEach((q, idx) => {
      const secId = q.materialSecao || "geral";
      const mapKey = `${q.disciplinaKey}::${secId}`;
      if (!sectionMap.has(mapKey)) {
        sectionMap.set(mapKey, {
          discKey: q.disciplinaKey,
          discNome:
            q.disciplinaKey === "especificos"
              ? `Conhecimentos Específicos (${cargo.nomeCurto})`
              : q.disciplinaNome,
          secId,
          secTitulo: getMaterialSectionTitle(q.disciplinaKey, secId),
          total: 0,
          hits: 0,
          wrongs: 0,
          blanks: 0,
          missedItems: []
        });
      }

      const entry = sectionMap.get(mapKey);
      entry.total++;
      const chosen = state.answers[idx];
      if (chosen === undefined) {
        entry.blanks++;
        entry.missedItems.push({ idx, numero: q.numero, topico: q.topico, status: "em branco" });
      } else if (chosen === q.correta) {
        entry.hits++;
      } else {
        entry.wrongs++;
        entry.missedItems.push({ idx, numero: q.numero, topico: q.topico, status: "erro" });
      }
    });

    const allSections = Array.from(sectionMap.values()).map((s) => ({
      ...s,
      missedCount: s.wrongs + s.blanks,
      pct: s.total > 0 ? Math.round((s.hits / s.total) * 100) : 100
    }));

    const toReinforce = allSections
      .filter((s) => s.missedCount > 0)
      .map((s) => ({
        ...s,
        prioridade: s.pct < 50 || s.missedCount >= 2 ? "alta" : "media"
      }))
      .sort((a, b) => {
        if (a.prioridade !== b.prioridade) return a.prioridade === "alta" ? -1 : 1;
        if (b.missedCount !== a.missedCount) return b.missedCount - a.missedCount;
        if (a.pct !== b.pct) return a.pct - b.pct;
        return (discPriorityOrder[a.discKey] || 9) - (discPriorityOrder[b.discKey] || 9);
      });

    const strongSections = allSections
      .filter((s) => s.missedCount === 0)
      .sort((a, b) => b.total - a.total);

    const totalMissed = toReinforce.reduce((acc, s) => acc + s.missedCount, 0);

    const weakHighWeight = stats
      .filter((s) => (s.disc.key === "especificos" || s.disc.key === "legislacao") && s.hits / s.qtd < 0.6)
      .map((s) => `${s.nomeExib} (${Math.round((s.hits / s.qtd) * 100)}%)`);

    const strategicAlert = weakHighWeight.length
      ? `<div class="study-alert"><strong>Foco Estratégico (Edital 001/2026):</strong> Atenção especial a <strong>${escapeHtml(weakHighWeight.join(" e "))}</strong>. Conhecimentos Específicos (4,0 pts) e Legislação e Ética (2,0 pts) respondem por <strong>60% da nota total</strong> e são o 1º e o 2º critérios de desempate por disciplina (Item 12.8).</div>`
      : "";

    if (toReinforce.length === 0) {
      return `
        <div class="study-report">
          <div class="study-report-header">
            <div>
              <h3>Relatório de Conteúdos para Reforçar</h3>
              <p>Diagnóstico baseado nas seções do conteúdo programático avaliadas neste simulado.</p>
            </div>
          </div>
          <div class="study-perfect">
            <strong>Desempenho Excelente (100% de aproveitamento — 50/50)!</strong> Você dominou todos os conteúdos cobrados neste simulado. Clique em <strong>Refazer → Trocar as questões</strong> para testar outros tópicos do banco de questões!
          </div>
        </div>
      `;
    }

    const cardsHtml = toReinforce
      .map((s) => {
        const badgeLabel = s.prioridade === "alta" ? "Reforço Urgente" : "Revisar";
        const chipsHtml = s.missedItems
          .map(
            (m) => `
            <button type="button" class="missed-chip" data-jump="${m.idx}" title="Ir para a Questão ${pad2(m.numero)} (${m.status})">
              <strong>Q.${pad2(m.numero)}</strong> ${escapeHtml(m.topico)}${m.status === "em branco" ? " (em branco)" : ""}
            </button>
          `
          )
          .join("");

        return `
          <div class="reinforce-card prio-${s.prioridade}">
            <div class="reinforce-top">
              <div>
                <span class="reinforce-disc">${escapeHtml(s.discNome)}</span>
                <span class="reinforce-title">${escapeHtml(s.secTitulo)}</span>
              </div>
              <div class="reinforce-right">
                <span class="prio-badge ${s.prioridade}">${badgeLabel}</span>
                <button type="button" class="btn btn-sm btn-secondary btn-study-section" data-disc="${s.discKey}" data-sec="${s.secId}">
                  📖 Estudar na Apostila
                </button>
              </div>
            </div>
            <div class="reinforce-stats">
              Aproveitamento na seção: <strong>${s.pct}%</strong> (${s.hits}/${s.total} acertos • ${s.wrongs} erro(s) • ${s.blanks} em branco)
            </div>
            <div class="reinforce-topics">
              ${chipsHtml}
            </div>
          </div>
        `;
      })
      .join("");

    const strongHtml = strongSections.length
      ? `
        <div class="strong-points">
          <strong>✔ Pontos Fortes neste simulado (100% de acerto em ${strongSections.length} seção/seções):</strong>
          <ul>
            ${strongSections
              .map(
                (s) =>
                  `<li><strong>${escapeHtml(s.discNome)}:</strong> ${escapeHtml(s.secTitulo)} (${s.hits}/${s.total})</li>`
              )
              .join("")}
          </ul>
        </div>
      `
      : "";

    return `
      <div class="study-report">
        <div class="study-report-header">
          <div>
            <h3>Relatório de Conteúdos para Reforçar (${toReinforce.length} conteúdo${toReinforce.length > 1 ? "s" : ""})</h3>
            <p>Ordenado por prioridade de revisão (${totalMissed} questão/questões erradas ou em branco). Clique na questão para revisá-la ou abra direto o resumo na apostila.</p>
          </div>
          <button id="btn-toggle-only-missed" type="button" class="btn btn-sm btn-outline">
            Filtrar apenas erros/em branco (${totalMissed})
          </button>
        </div>
        ${strategicAlert}
        <div class="reinforce-list">
          ${cardsHtml}
        </div>
        ${strongHtml}
      </div>
    `;
  }

  /* ========================================================================
     RELATÓRIO SIMPLES DE ACERTOS E ONDE MELHORAR (MODO QUESTÕES RÁPIDAS)
     ======================================================================== */
  function buildQuickReportHtml(stats, totalHits, totalQ) {
    const cargo = getCurrentCargo();
    const pct = totalQ > 0 ? Math.round((totalHits / totalQ) * 100) : 0;
    const badgeClass = pct >= 60 ? "approved" : "failed";
    const badgeText =
      pct >= 80
        ? "✔ ÓTIMO DESEMPENHO!"
        : pct >= 60
        ? "✔ BOM PROGRESSO — REVISE OS PONTOS ABAIXO"
        : "✘ REFORCE OS TÓPICOS ABAIXO";

    const rowsHtml = stats
      .map((s) => {
        const dpct = s.qtd > 0 ? Math.round((s.hits / s.qtd) * 100) : 0;
        const statusTxt = s.hits === s.qtd ? "✔ Tudo certo" : `${s.wrongs + s.blanks} para revisar`;
        return `
          <tr>
            <td><strong>${escapeHtml(s.nomeExib)}</strong></td>
            <td>${s.hits} / ${s.qtd} (${dpct}%)</td>
            <td>${statusTxt}</td>
          </tr>
        `;
      })
      .join("");

    const missed = [];
    state.examQuestions.forEach((q, idx) => {
      const chosen = state.answers[idx];
      if (chosen !== q.correta) {
        missed.push({
          idx,
          q,
          secTitulo: getMaterialSectionTitle(q.disciplinaKey, q.materialSecao),
          status: chosen === undefined ? "em branco" : `marcou ${LETRAS[chosen]}, gabarito ${LETRAS[q.correta]}`
        });
      }
    });

    const improveBlock =
      missed.length === 0
        ? `<div class="study-perfect" style="margin-top:14px;"><strong>Parabéns! Você gabaritou este treino rápido (${totalHits}/${totalQ})!</strong> Todos os tópicos sorteados foram dominados.</div>`
        : `
          <div class="study-report">
            <div class="study-report-header">
              <div>
                <h3>Onde Melhorar (${missed.length} tópico${missed.length > 1 ? "s" : ""})</h3>
                <p>Revise os pontos em que houve erro ou questão em branco:</p>
              </div>
            </div>
            <ul class="quick-improve-list">
              ${missed
                .map(
                  (m) => `
                  <li class="quick-improve-item">
                    <div class="quick-improve-meta">
                      <span class="quick-improve-disc">${escapeHtml(m.q.disciplinaNome)} • Questão ${pad2(m.q.numero)} (${m.status})</span>
                      <strong>${escapeHtml(m.q.topico)}</strong>
                      <span class="text-muted-inline" style="font-size:12.5px;">Seção no material: ${escapeHtml(m.secTitulo)}</span>
                    </div>
                    <div class="quick-improve-btns">
                      <button type="button" class="btn btn-sm btn-outline missed-chip" data-jump="${m.idx}">Ver Questão</button>
                      <button type="button" class="btn btn-sm btn-secondary btn-study-section" data-disc="${m.q.disciplinaKey}" data-sec="${m.q.materialSecao}">📖 Revisar Tópico</button>
                    </div>
                  </li>
                `
                )
                .join("")}
            </ul>
          </div>
        `;

    return `
      <div class="result-top">
        <div>
          <div class="result-score-box">
            <span class="result-score-num">${totalHits}/${totalQ}</span>
            <span>acertos (${pct}%)</span>
          </div>
          <p class="text-muted-inline" style="margin:6px 0 0; font-size:13.5px;">
            ⚡ Treino Rápido #${state.simuladoNumero} • ${escapeHtml(cargo.codigo)} — ${escapeHtml(cargo.nomeCurto)}
          </p>
        </div>
        <div>
          <span class="result-badge ${badgeClass}">${badgeText}</span>
        </div>
      </div>

      <table class="result-table">
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Acertos</th>
            <th>Resumo</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>

      ${improveBlock}

      <div class="quick-report-actions">
        <button id="btn-quick-new-round" type="button" class="btn btn-primary">⚡ Novo Treino Rápido (Trocar Questões)</button>
        <button id="btn-quick-go-full" type="button" class="btn btn-outline">Ir para Simulado Completo (50 questões)</button>
      </div>
    `;
  }

  /* ========================================================================
     FINALIZAR PROVA / TREINO RÁPIDO
     ======================================================================== */
  function requestFinishExam() {
    if (state.finished) {
      el.resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const totalQ = getTotalQuestions();
    const answered = Object.keys(state.answers).length;
    const blank = totalQ - answered;

    if (blank > 0) {
      el.modalFinishText.innerHTML = `Você respondeu <strong>${answered} de ${totalQ}</strong> questões. Ainda restam <strong>${blank} questão(ões) em branco</strong>. Deseja finalizar e ver o relatório agora?`;
      el.modalFinish.classList.remove("hidden");
    } else {
      finalizeExam();
    }
  }

  function finalizeExam(skipScroll = false) {
    el.modalFinish.classList.add("hidden");
    state.finished = true;
    pauseTimer();

    const cargo = getCurrentCargo();
    const totalQ = getTotalQuestions();
    let totalHits = 0;

    const stats = DISCIPLINAS.map((disc) => {
      const discQuestions = state.examQuestions
        .map((q, idx) => ({ q, idx }))
        .filter(({ q }) => q.disciplinaKey === disc.key);

      let hits = 0;
      let blanks = 0;
      discQuestions.forEach(({ q, idx }) => {
        if (state.answers[idx] === undefined) {
          blanks++;
        } else if (state.answers[idx] === q.correta) {
          hits++;
        }
      });

      totalHits += hits;
      const qtd = discQuestions.length;
      const pontos = hits * disc.pontosPorQuestao;
      const maxPontos = qtd * disc.pontosPorQuestao;
      const nomeExib = disc.key === "especificos" ? `${disc.nome} (${cargo.nomeCurto})` : disc.nome;
      return { disc, qtd, nomeExib, hits, blanks, wrongs: qtd - hits - blanks, pontos, maxPontos };
    });

    if (isQuickMode()) {
      el.resultPanel.innerHTML = buildQuickReportHtml(stats, totalHits, totalQ);

      const btnNewRound = document.getElementById("btn-quick-new-round");
      if (btnNewRound) btnNewRound.addEventListener("click", () => handleRedo(true));

      const btnGoFull = document.getElementById("btn-quick-go-full");
      if (btnGoFull) btnGoFull.addEventListener("click", () => switchExamMode("completo"));
    } else {
      const notaFinal = totalHits * 0.2;
      const aprovado = notaFinal >= NOTA_MINIMA;

      const rowsHtml = stats
        .map(
          (s) => `
          <tr>
            <td><strong>${escapeHtml(s.nomeExib)}</strong></td>
            <td>${s.hits} / ${s.qtd}</td>
            <td>${s.wrongs}</td>
            <td>${s.blanks}</td>
            <td><strong>${s.pontos.toFixed(1).replace(".", ",")}</strong> / ${s.maxPontos.toFixed(1).replace(".", ",")}</td>
            <td>${s.disc.desempate}</td>
          </tr>
        `
        )
        .join("");

      el.resultPanel.innerHTML = `
        <div class="result-top">
          <div>
            <div class="result-score-box">
              <span class="result-score-num">${notaFinal.toFixed(1).replace(".", ",")}</span>
              <span>/ 10,0 pontos (${totalHits} de ${totalQ} acertos)</span>
            </div>
            <p class="text-muted-inline" style="margin:6px 0 0; font-size:13.5px;">
              ${escapeHtml(cargo.codigo)} — ${escapeHtml(cargo.nomeCurto)} • Simulado #${state.simuladoNumero} • Mínimo do Edital (Item 11.42): 6,0 pontos (30 acertos).
            </p>
          </div>
          <div>
            <span class="result-badge ${aprovado ? "approved" : "failed"}">
              ${aprovado ? "✔ NOTA MÍNIMA ATINGIDA (≥ 6,0)" : "✘ ABAIXO DA NOTA MÍNIMA (< 6,0)"}
            </span>
          </div>
        </div>

        <table class="result-table">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Acertos</th>
              <th>Erros</th>
              <th>Branco</th>
              <th>Pontuação</th>
              <th>Desempate (Item 12.8)</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>

        <p class="result-footnote">
          Todos os gabaritos comentados foram liberados abaixo. Em cada questão, você pode clicar em <strong>📖 Ver no Material</strong> para revisar o conteúdo correspondente na apostila lateral.
        </p>

        ${buildStudyReportHtml(stats)}
      `;

      const btnOnlyMissed = document.getElementById("btn-toggle-only-missed");
      if (btnOnlyMissed) {
        btnOnlyMissed.addEventListener("click", () => {
          state.onlyMissedFilter = !state.onlyMissedFilter;
          btnOnlyMissed.textContent = state.onlyMissedFilter
            ? `Mostrar todas as ${totalQ} questões`
            : `Filtrar apenas erros/em branco (${totalQ - totalHits})`;
          btnOnlyMissed.classList.toggle("btn-primary", state.onlyMissedFilter);
          btnOnlyMissed.classList.toggle("btn-outline", !state.onlyMissedFilter);
          applyDisciplineFilter();
        });
      }
    }

    // Eventos comuns do relatório (tanto Completo quanto Rápido)
    el.resultPanel.querySelectorAll(".btn-study-section").forEach((btn) => {
      btn.addEventListener("click", () => {
        openMaterialAt(btn.dataset.disc, btn.dataset.sec);
      });
    });

    el.resultPanel.querySelectorAll(".missed-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        jumpToQuestion(Number(chip.dataset.jump));
      });
    });

    el.resultPanel.classList.remove("hidden");
    refreshAllQuestionVisuals();
    updateAnswerCardStates();
    if (isQuickMode()) {
      el.btnQuickNext.disabled = state.quickCurrentIndex === totalQ - 1;
      el.btnQuickNext.textContent = "Próxima →";
    }
    if (state.keepQuestions) {
      saveKeepStorage();
    }
    if (!skipScroll) {
      el.resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  /* ========================================================================
     REFAZER SIMULADO / TREINO RÁPIDO
     ======================================================================== */
  function openRedoModal() {
    const cargo = getCurrentCargo();
    const stats = getActiveCargoBankStats();
    const unseenLeft = getRemainingUnseenForActiveCargo();
    const totalQ = getTotalQuestions();
    const modoLabel = isQuickMode()
      ? `Modo Questões Rápidas (${totalQ} questões)`
      : "Simulado Completo (50 questões)";
    el.modalBankSummary.textContent = `${modoLabel} • ${cargo.codigo} — ${cargo.nomeCurto}. Banco disponível: ${stats.cargoTotal} questões (${unseenLeft} inéditas restantes neste ciclo; ${stats.allCargosTotal} no banco total). Ao trocar, o sistema só repete questões após esgotar todas as inéditas.`;
    el.modalRedo.classList.remove("hidden");
  }

  function closeRedoModal() {
    el.modalRedo.classList.add("hidden");
  }

  function handleRedo(swapQuestions) {
    closeRedoModal();
    el.resultPanel.classList.add("hidden");
    el.resultPanel.innerHTML = "";

    if (swapQuestions) {
      state.simuladoNumero++;
      generateNewExam();
    } else {
      resetSameExam();
    }

    if (state.timerEnabled) {
      resetTimer();
    }

    setDisciplineFilter("all");
    renderAnswerCard();
    renderQuestions();
    if (isQuickMode()) {
      goToQuickQuestion(0, false);
    }
    if (state.keepQuestions) {
      saveKeepStorage();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ========================================================================
     TIMER OPCIONAL DE 3 HORAS
     ======================================================================== */
  function updateTimerUI() {
    el.timerDisplay.textContent = formatTimer(state.timerSeconds);
    el.timerDisplay.classList.toggle("timer-warn", state.timerEnabled && state.timerSeconds <= 15 * 60);
    el.btnTimerStart.textContent = state.timerRunning ? "Pausar" : "Iniciar";
    el.timerControls.classList.toggle("is-disabled", !state.timerEnabled);
    el.btnTimerStart.disabled = !state.timerEnabled;
    el.btnTimerReset.disabled = !state.timerEnabled;
  }

  function startTimer() {
    if (!state.timerEnabled || state.timerRunning) return;
    if (state.timerSeconds <= 0) state.timerSeconds = TIMER_INITIAL_SECONDS;
    state.timerRunning = true;
    state.timerInterval = setInterval(() => {
      if (state.timerSeconds > 0) {
        state.timerSeconds--;
        updateTimerUI();
      } else {
        pauseTimer();
        alert("Tempo esgotado! As 3 horas regulamentares da Prova Objetiva chegaram ao fim. Você pode clicar em 'Finalizar Prova' para conferir sua nota.");
      }
    }, 1000);
    updateTimerUI();
  }

  function pauseTimer() {
    state.timerRunning = false;
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
    updateTimerUI();
  }

  function resetTimer() {
    pauseTimer();
    state.timerSeconds = TIMER_INITIAL_SECONDS;
    updateTimerUI();
  }

  /* ========================================================================
     PAINEL LATERAL DIREITO (COLAPSÁVEL) — MATERIAL DE CONSULTA
     ======================================================================== */
  function setDrawerOpen(open) {
    state.drawerOpen = open;
    document.body.classList.toggle("drawer-open", open);
    el.btnToggleMaterial.setAttribute("aria-expanded", String(open));
    el.materialDrawer.setAttribute("aria-hidden", String(!open));
    el.btnToggleMaterial.querySelector(".btn-label").textContent = open
      ? "Ocultar Material"
      : "Material de Consulta";
  }

  function toggleDrawerWide() {
    state.drawerWide = !state.drawerWide;
    document.body.classList.toggle("drawer-wide", state.drawerWide);
    el.btnExpandMaterial.textContent = state.drawerWide ? "Normal" : "Expandir";
  }

  function openMaterialAt(discKey, sectionId) {
    setDrawerOpen(true);
    state.matSearchTerm = "";
    el.materialSearch.value = "";
    el.btnClearSearch.classList.add("hidden");
    state.highlightedMatSec = sectionId || null;
    selectMaterialDiscipline(discKey);

    if (sectionId) {
      setTimeout(() => {
        const target = document.getElementById(`mat-sec-${sectionId}`);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          el.materialTocSelect.value = sectionId;
        }
      }, 60);
    }
  }

  function selectMaterialDiscipline(discKey) {
    state.activeMatDisc = discKey;
    el.matTabs.forEach((tab) => {
      const isActive = tab.dataset.mat === discKey;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });
    renderMaterialContent();
  }

  function highlightMatchesInHtml(html, term) {
    if (!term) return html;
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escaped})`, "gi");
    const temp = document.createElement("div");
    temp.innerHTML = html;

    const walker = document.createTreeWalker(temp, NodeFilter.SHOW_TEXT, null);
    const textNodes = [];
    let current;
    while ((current = walker.nextNode())) {
      if (regex.test(current.nodeValue)) {
        textNodes.push(current);
      }
      regex.lastIndex = 0;
    }

    textNodes.forEach((node) => {
      const span = document.createElement("span");
      span.innerHTML = escapeHtml(node.nodeValue).replace(regex, '<mark class="search-hit">$1</mark>');
      node.parentNode.replaceChild(span, node);
    });

    return temp.innerHTML;
  }

  function renderMaterialContent() {
    const matKey = resolveMaterialKey(state.activeMatDisc);
    const mat = window.MATERIAL_APOIO && window.MATERIAL_APOIO[matKey];
    if (!mat) {
      el.materialContent.innerHTML = "<p>Material não encontrado.</p>";
      return;
    }

    const query = state.matSearchTerm.trim().toLowerCase();

    el.materialTocSelect.innerHTML = mat.secoes
      .map((sec) => `<option value="${sec.id}">${escapeHtml(sec.titulo)}</option>`)
      .join("");

    const filteredSecoes = query
      ? mat.secoes.filter((sec) => {
          const plain = (sec.titulo + " " + sec.html.replace(/<[^>]+>/g, " ")).toLowerCase();
          return plain.includes(query);
        })
      : mat.secoes;

    let searchBanner = "";
    if (query) {
      const cargo = getCurrentCargo();
      const otherHits = DISCIPLINAS.filter((d) => d.key !== state.activeMatDisc)
        .map((d) => {
          const otherMat = window.MATERIAL_APOIO[resolveMaterialKey(d.key)];
          if (!otherMat) return null;
          const count = otherMat.secoes.filter((s) =>
            (s.titulo + " " + s.html.replace(/<[^>]+>/g, " ")).toLowerCase().includes(query)
          ).length;
          const label = d.key === "especificos" ? `Específicos (${cargo.nomeCurto})` : d.nome;
          return count > 0 ? { key: d.key, nome: label, count } : null;
        })
        .filter(Boolean);

      const otherLinks = otherHits.length
        ? `<br>Também encontrado em: ${otherHits
            .map(
              (o) =>
                `<a href="#" class="other-mat-hit" data-mat="${o.key}">${escapeHtml(o.nome)} (${o.count})</a>`
            )
            .join(" • ")}`
        : "";

      searchBanner = `
        <div class="search-results-banner">
          Busca por <strong>"${escapeHtml(state.matSearchTerm)}"</strong>: ${filteredSecoes.length} seção(ões) nesta disciplina.${otherLinks}
        </div>
      `;
    }

    const tocHtml = !query
      ? `
        <nav class="apostila-toc" aria-label="Sumário da Disciplina">
          <p class="apostila-toc-title">Sumário — Acesso Rápido</p>
          <ol>
            ${mat.secoes
              .map((sec) => `<li><a href="#mat-sec-${sec.id}" data-sec="${sec.id}">${escapeHtml(sec.titulo)}</a></li>`)
              .join("")}
          </ol>
        </nav>
      `
      : "";

    const sectionsHtml =
      filteredSecoes.length > 0
        ? filteredSecoes
            .map((sec) => {
              const isHighlighted = !query && state.highlightedMatSec === sec.id;
              const pill = isHighlighted
                ? `<span class="current-topic-pill">📌 Tópico da questão selecionada</span>`
                : "";
              return `
                <section class="mat-section${isHighlighted ? " is-current-topic" : ""}" id="mat-sec-${sec.id}">
                  ${pill}
                  <h4>${query ? highlightMatchesInHtml(escapeHtml(sec.titulo), state.matSearchTerm.trim()) : escapeHtml(sec.titulo)}</h4>
                  ${query ? highlightMatchesInHtml(sec.html, state.matSearchTerm.trim()) : sec.html}
                </section>
              `;
            })
            .join("")
        : `<div class="search-empty">Nenhum trecho encontrado para "<strong>${escapeHtml(state.matSearchTerm)}</strong>" nesta disciplina. Tente trocar de aba acima ou limpar a busca.</div>`;

    el.materialContent.innerHTML = `
      <div class="apostila-header">
        <h3>${escapeHtml(mat.titulo)}</h3>
        <p>${escapeHtml(mat.subtitulo)}</p>
      </div>
      ${searchBanner}
      ${tocHtml}
      ${sectionsHtml}
    `;

    el.materialContent.scrollTop = 0;

    el.materialContent.querySelectorAll(".apostila-toc a").forEach((a) => {
      a.addEventListener("click", (ev) => {
        ev.preventDefault();
        const secId = a.dataset.sec;
        const target = document.getElementById(`mat-sec-${secId}`);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          el.materialTocSelect.value = secId;
        }
      });
    });

    el.materialContent.querySelectorAll(".other-mat-hit").forEach((a) => {
      a.addEventListener("click", (ev) => {
        ev.preventDefault();
        selectMaterialDiscipline(a.dataset.mat);
      });
    });
  }

  /* ========================================================================
     CONSULTAR BANCO DE QUESTÕES (EXPLORADOR FILTRÁVEL POR CARGO)
     ======================================================================== */
  function getCargoBankQuestions() {
    const banco = window.BANCO_QUESTOES || {};
    const cargo = getCurrentCargo();
    const list = [];

    DISCIPLINAS.forEach((disc) => {
      const bankKey = resolveBankKey(disc.key);
      const pool = banco[bankKey] || [];
      const discLabel =
        disc.key === "especificos"
          ? `${disc.nome} (${cargo.nomeCurto})`
          : disc.nome;

      pool.forEach((q) => {
        list.push({
          ...q,
          disciplinaKey: disc.key,
          disciplinaNome: discLabel,
          secaoTitulo: getMaterialSectionTitle(disc.key, q.materialSecao)
        });
      });
    });

    return list;
  }

  function populateBankSectionFilter() {
    const discKey = state.bankFilterDisc;
    const options = ['<option value="all">Todas as seções</option>'];

    const discsToList =
      discKey === "all" ? DISCIPLINAS : DISCIPLINAS.filter((d) => d.key === discKey);

    discsToList.forEach((d) => {
      const mat = window.MATERIAL_APOIO && window.MATERIAL_APOIO[resolveMaterialKey(d.key)];
      if (!mat || !Array.isArray(mat.secoes)) return;
      mat.secoes.forEach((sec) => {
        const prefix = discKey === "all" ? `[${d.nome.split(" ")[0]}] ` : "";
        options.push(`<option value="${sec.id}">${escapeHtml(prefix + sec.titulo)}</option>`);
      });
    });

    el.bankFilterSec.innerHTML = options.join("");
    // Restaura seleção se ainda existir
    const exists = Array.from(el.bankFilterSec.options).some((o) => o.value === state.bankFilterSec);
    if (!exists) state.bankFilterSec = "all";
    el.bankFilterSec.value = state.bankFilterSec;
  }

  function openBankExplorer() {
    state.bankExplorerOpen = true;
    el.examView.classList.add("hidden");
    el.bankExplorer.classList.remove("hidden");
    updateCargoAndModeHeaderUI();
    populateBankSectionFilter();
    renderBankExplorer();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeBankExplorer(scrollTop = true) {
    state.bankExplorerOpen = false;
    el.bankExplorer.classList.add("hidden");
    el.examView.classList.remove("hidden");
    updateCargoAndModeHeaderUI();
    if (scrollTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function renderBankExplorer() {
    const cargo = getCurrentCargo();
    const allItems = getCargoBankQuestions();

    el.bankExplorerTitle.textContent = `Banco de Questões — ${cargo.codigo}: ${cargo.nomeCurto}`;
    el.bankExplorerSubtitle.textContent = `Consulte todas as ${allItems.length} questões disponíveis para ${cargo.nomeCurto} (sem mistura com outros cargos). Clique nas alternativas para praticar ou ative os gabaritos comentados.`;

    const query = state.bankSearch.trim().toLowerCase();
    const filtered = allItems.filter((q) => {
      if (state.bankFilterDisc !== "all" && q.disciplinaKey !== state.bankFilterDisc) return false;
      if (state.bankFilterSec !== "all" && q.materialSecao !== state.bankFilterSec) return false;
      if (query) {
        const haystack = [
          q.id,
          q.disciplinaNome,
          q.topico,
          q.secaoTitulo,
          q.contexto || "",
          q.enunciado,
          q.alternativas.join(" "),
          q.explicacao
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });

    const visibleItems = filtered.slice(0, state.bankLimit);
    el.bankResultsCount.textContent =
      filtered.length === allItems.length
        ? `Exibindo ${visibleItems.length} de ${filtered.length} questões`
        : `${filtered.length} questão(ões) encontrada(s) (exibindo ${visibleItems.length})`;

    if (filtered.length === 0) {
      el.bankQuestionsList.innerHTML = `<div class="bank-empty">Nenhuma questão encontrada para os filtros informados. Tente limpar os filtros ou pesquisar por outro termo.</div>`;
      el.bankPagination.classList.add("hidden");
      return;
    }

    const fragment = document.createDocumentFragment();
    visibleItems.forEach((q) => {
      const chosen = state.bankPracticeAnswers[q.id];
      const hasPractice = chosen !== undefined;
      const revealed = state.bankShowAllAnswers || hasPractice || state.bankRevealedIds.has(q.id);

      const card = document.createElement("article");
      card.className = "question-card";

      const contextHtml = q.contexto
        ? `<div class="question-context">${formatInlineCode(q.contexto)}</div>`
        : "";

      const optionsHtml = q.alternativas
        .map((alt, optIdx) => {
          const inputId = `bank-${q.id}-opt-${optIdx}`;
          let cls = "option-label";
          if (revealed) {
            if (optIdx === q.correta) cls += " is-correct";
            else if (hasPractice && chosen === optIdx && optIdx !== q.correta) cls += " is-wrong";
          } else if (hasPractice && chosen === optIdx) {
            cls += " is-selected";
          }
          return `
            <li>
              <label class="${cls}" for="${inputId}" data-opt="${optIdx}">
                <input type="radio" name="bank-${q.id}" id="${inputId}" value="${optIdx}" ${chosen === optIdx ? "checked" : ""} />
                <span class="option-letter">${LETRAS[optIdx]})</span>
                <span class="option-text">${formatInlineCode(alt)}</span>
              </label>
            </li>
          `;
        })
        .join("");

      let feedbackHtml = "";
      if (revealed) {
        let fbCls = "question-feedback";
        let fbTitle = `Gabarito Oficial: Letra ${LETRAS[q.correta]}`;
        if (hasPractice) {
          if (chosen === q.correta) {
            fbCls += " fb-correct";
            fbTitle = `✔ Você acertou! (Gabarito: Letra ${LETRAS[q.correta]})`;
          } else {
            fbCls += " fb-wrong";
            fbTitle = `✘ Você marcou ${LETRAS[chosen]} — Gabarito: Letra ${LETRAS[q.correta]}`;
          }
        }
        feedbackHtml = `
          <div class="${fbCls}">
            <div class="feedback-head">
              <strong>${fbTitle}</strong>
              <button type="button" class="btn-link-material btn-bank-mat" data-disc="${q.disciplinaKey}" data-sec="${q.materialSecao || ""}">
                📖 Ver no Material
              </button>
            </div>
            <div>${formatInlineCode(q.explicacao)}</div>
          </div>
        `;
      }

      const toggleBtnLabel = revealed && !state.bankShowAllAnswers ? "Ocultar gabarito" : "Ver gabarito";

      card.innerHTML = `
        <div class="question-meta">
          <div class="bank-q-badges">
            <span class="bank-id-badge">${escapeHtml(q.id.toUpperCase())}</span>
            <span class="bank-disc-badge">${escapeHtml(q.disciplinaNome)}</span>
          </div>
          <span class="question-topic-tag">${escapeHtml(q.topico)}</span>
        </div>
        ${contextHtml}
        <p class="question-stem">${formatInlineCode(q.enunciado)}</p>
        <ul class="options-list">${optionsHtml}</ul>
        ${feedbackHtml}
        <div class="bank-q-actions">
          <span class="text-muted-inline" style="font-size:12px;">Seção na apostila: ${escapeHtml(q.secaoTitulo)}</span>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            ${
              !state.bankShowAllAnswers
                ? `<button type="button" class="btn btn-sm btn-outline btn-bank-reveal">${toggleBtnLabel}</button>`
                : ""
            }
            <button type="button" class="btn btn-sm btn-secondary btn-bank-mat" data-disc="${q.disciplinaKey}" data-sec="${q.materialSecao || ""}">
              📖 Ver no Material
            </button>
          </div>
        </div>
      `;

      // Marcar alternativa para praticar no banco
      card.querySelectorAll(`input[name="bank-${q.id}"]`).forEach((radio) => {
        radio.addEventListener("change", (ev) => {
          state.bankPracticeAnswers[q.id] = Number(ev.target.value);
          state.bankRevealedIds.add(q.id);
          renderBankExplorer();
        });
      });

      const revealBtn = card.querySelector(".btn-bank-reveal");
      if (revealBtn) {
        revealBtn.addEventListener("click", () => {
          if (state.bankRevealedIds.has(q.id) || state.bankPracticeAnswers[q.id] !== undefined) {
            state.bankRevealedIds.delete(q.id);
            delete state.bankPracticeAnswers[q.id];
          } else {
            state.bankRevealedIds.add(q.id);
          }
          renderBankExplorer();
        });
      }

      card.querySelectorAll(".btn-bank-mat").forEach((btn) => {
        btn.addEventListener("click", () => {
          openMaterialAt(btn.dataset.disc, btn.dataset.sec);
        });
      });

      fragment.appendChild(card);
    });

    el.bankQuestionsList.innerHTML = "";
    el.bankQuestionsList.appendChild(fragment);

    const hasMore = filtered.length > visibleItems.length;
    el.bankPagination.classList.toggle("hidden", !hasMore);
    if (hasMore) {
      const remaining = filtered.length - visibleItems.length;
      el.btnBankLoadMore.textContent = `Carregar mais ${Math.min(20, remaining)} questões`;
      el.btnBankLoadAll.textContent = `Mostrar todas (${filtered.length})`;
    }
  }

  /* ========================================================================
     TEMA CLARO / ESCURO (DELEGA PARA window.applySiteTheme EM index.html)
     ======================================================================== */
  function initTheme() {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    if (typeof window.applySiteTheme === "function") {
      window.applySiteTheme(current);
    }
  }

  /* ========================================================================
     EVENTOS GERAIS E INICIALIZAÇÃO
     ======================================================================== */
  function bindEvents() {
    // Alternância de Tema Claro / Escuro (fallback caso onclick não esteja definido)
    if (el.btnToggleTheme && !el.btnToggleTheme.getAttribute("onclick")) {
      el.btnToggleTheme.addEventListener("click", () => {
        if (typeof window.toggleSiteTheme === "function") {
          window.toggleSiteTheme();
        }
      });
    }

    // Seletor de Cargo
    el.cargoBtns.forEach((btn) => {
      btn.addEventListener("click", () => requestSwitchCargo(btn.dataset.cargo));
    });

    el.btnCargoConfirm.addEventListener("click", () => {
      if (state.pendingCargo) applySwitchCargo(state.pendingCargo);
    });
    el.btnCargoCancel.addEventListener("click", () => {
      state.pendingCargo = null;
      el.modalCargo.classList.add("hidden");
    });

    // Seletor de Modo (Completo x Questões Rápidas) e Quantidade (1 ou 2 por disciplina)
    el.modeBtns.forEach((btn) => {
      btn.addEventListener("click", () => switchExamMode(btn.dataset.mode));
    });

    el.qtyBtns.forEach((btn) => {
      btn.addEventListener("click", () => setQuickPerDisc(Number(btn.dataset.qty)));
    });

    // Controles do Modo Questões Rápidas
    el.btnQuickPrev.addEventListener("click", () => {
      if (state.quickCurrentIndex > 0) {
        goToQuickQuestion(state.quickCurrentIndex - 1, false);
      }
    });

    el.btnQuickNext.addEventListener("click", () => {
      const total = getTotalQuestions();
      if (state.quickCurrentIndex < total - 1) {
        goToQuickQuestion(state.quickCurrentIndex + 1, false);
      } else if (!state.finished) {
        requestFinishExam();
      }
    });

    el.btnQuickOpenMat.addEventListener("click", () => {
      const q = state.examQuestions[state.quickCurrentIndex];
      if (q) syncMaterialToQuestion(q, true);
    });

    // Correção imediata ON/OFF
    el.toggleImmediate.addEventListener("change", () => {
      state.immediateMode = el.toggleImmediate.checked;
      el.immediateStatus.textContent = state.immediateMode ? "ON" : "OFF";
      refreshAllQuestionVisuals();
      updateAnswerCardStates();
      if (state.keepQuestions) {
        saveKeepStorage();
      }
    });

    // Manter questões ON/OFF (mantém as mesmas questões e marcações sem randomizar)
    if (el.toggleKeepQuestions) {
      el.toggleKeepQuestions.addEventListener("change", () => {
        state.keepQuestions = el.toggleKeepQuestions.checked;
        if (el.keepStatus) el.keepStatus.textContent = state.keepQuestions ? "ON" : "OFF";
        if (!state.keepQuestions) {
          state.keepSnapshots = {};
        }
        saveKeepStorage();
      });
    }

    // Timer opcional
    el.toggleTimerEnable.addEventListener("change", () => {
      state.timerEnabled = el.toggleTimerEnable.checked;
      if (!state.timerEnabled) {
        pauseTimer();
      }
      updateTimerUI();
    });

    el.btnTimerStart.addEventListener("click", () => {
      if (state.timerRunning) pauseTimer();
      else startTimer();
    });

    el.btnTimerReset.addEventListener("click", resetTimer);

    // Finalizar e Refazer
    el.btnFinish.addEventListener("click", requestFinishExam);
    el.btnFinishBottom.addEventListener("click", requestFinishExam);
    el.btnFinishConfirm.addEventListener("click", () => finalizeExam(false));
    el.btnFinishCancel.addEventListener("click", () => el.modalFinish.classList.add("hidden"));

    el.btnRedo.addEventListener("click", openRedoModal);
    el.btnRedoSwap.addEventListener("click", () => handleRedo(true));
    el.btnRedoSame.addEventListener("click", () => handleRedo(false));
    el.btnRedoCancel.addEventListener("click", closeRedoModal);

    [el.modalRedo, el.modalFinish, el.modalCargo].forEach((overlay) => {
      overlay.addEventListener("click", (ev) => {
        if (ev.target === overlay) {
          overlay.classList.add("hidden");
          if (overlay === el.modalCargo) state.pendingCargo = null;
        }
      });
    });

    // Voltar ao topo
    el.btnTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Recolher/expandir cartão-resposta
    el.btnCollapseCard.addEventListener("click", () => {
      const collapsed = el.answerCardBody.classList.toggle("collapsed");
      el.btnCollapseCard.textContent = collapsed ? "Expandir" : "Recolher";
      el.btnCollapseCard.setAttribute("aria-expanded", String(!collapsed));
    });

    // Filtros de disciplina
    el.filterPills.forEach((pill) => {
      pill.addEventListener("click", () => setDisciplineFilter(pill.dataset.filter));
    });

    // Painel Lateral de Material
    el.btnToggleMaterial.addEventListener("click", () => setDrawerOpen(!state.drawerOpen));
    el.fabMaterial.addEventListener("click", () => setDrawerOpen(true));
    el.btnCloseMaterial.addEventListener("click", () => setDrawerOpen(false));
    el.btnExpandMaterial.addEventListener("click", toggleDrawerWide);

    el.matTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        state.highlightedMatSec = null;
        selectMaterialDiscipline(tab.dataset.mat);
      });
    });

    el.materialTocSelect.addEventListener("change", () => {
      const secId = el.materialTocSelect.value;
      if (state.matSearchTerm) {
        state.matSearchTerm = "";
        el.materialSearch.value = "";
        el.btnClearSearch.classList.add("hidden");
        renderMaterialContent();
      }
      const target = document.getElementById(`mat-sec-${secId}`);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    el.materialSearch.addEventListener("input", () => {
      state.matSearchTerm = el.materialSearch.value;
      el.btnClearSearch.classList.toggle("hidden", !state.matSearchTerm);
      renderMaterialContent();
    });

    el.btnClearSearch.addEventListener("click", () => {
      state.matSearchTerm = "";
      el.materialSearch.value = "";
      el.btnClearSearch.classList.add("hidden");
      renderMaterialContent();
    });

    // Consultar Banco de Questões
    el.btnBankBack.addEventListener("click", () => closeBankExplorer(true));

    el.bankFilterDisc.addEventListener("change", () => {
      state.bankFilterDisc = el.bankFilterDisc.value;
      state.bankFilterSec = "all";
      state.bankLimit = 20;
      populateBankSectionFilter();
      renderBankExplorer();
    });

    el.bankFilterSec.addEventListener("change", () => {
      state.bankFilterSec = el.bankFilterSec.value;
      state.bankLimit = 20;
      renderBankExplorer();
    });

    el.bankSearchInput.addEventListener("input", () => {
      state.bankSearch = el.bankSearchInput.value;
      state.bankLimit = 20;
      renderBankExplorer();
    });

    el.bankShowAnswers.addEventListener("change", () => {
      state.bankShowAllAnswers = el.bankShowAnswers.checked;
      renderBankExplorer();
    });

    el.btnBankClearFilters.addEventListener("click", () => {
      state.bankFilterDisc = "all";
      state.bankFilterSec = "all";
      state.bankSearch = "";
      state.bankLimit = 20;
      el.bankFilterDisc.value = "all";
      el.bankSearchInput.value = "";
      populateBankSectionFilter();
      renderBankExplorer();
    });

    el.btnBankLoadMore.addEventListener("click", () => {
      state.bankLimit += 20;
      renderBankExplorer();
    });

    el.btnBankLoadAll.addEventListener("click", () => {
      state.bankLimit = 9999;
      renderBankExplorer();
    });

    // Tecla ESC fecha modais ou drawer
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape") {
        if (!el.modalCargo.classList.contains("hidden")) {
          state.pendingCargo = null;
          el.modalCargo.classList.add("hidden");
        } else if (!el.modalRedo.classList.contains("hidden")) {
          closeRedoModal();
        } else if (!el.modalFinish.classList.contains("hidden")) {
          el.modalFinish.classList.add("hidden");
        } else if (state.drawerOpen) {
          setDrawerOpen(false);
        }
      }
    });
  }

  function init() {
    initTheme();
    loadSeenHistory();
    loadKeepStorage();

    // Sincroniza estado visual dos toggles restaurados
    if (el.toggleKeepQuestions) {
      el.toggleKeepQuestions.checked = state.keepQuestions;
    }
    if (el.keepStatus) {
      el.keepStatus.textContent = state.keepQuestions ? "ON" : "OFF";
    }
    el.toggleImmediate.checked = state.immediateMode;
    el.immediateStatus.textContent = state.immediateMode ? "ON" : "OFF";

    updateCargoAndModeHeaderUI();
    bindEvents();

    const restored = state.keepQuestions && restoreSnapshotForCurrentSettings();
    if (!restored) {
      generateNewExam();
    }

    renderAnswerCard();
    renderQuestions();

    if (state.finished) {
      finalizeExam(true);
    }

    if (isQuickMode()) {
      goToQuickQuestion(state.quickCurrentIndex, false);
    } else {
      renderMaterialContent();
    }

    if (state.keepQuestions) {
      saveKeepStorage();
    }

    updateTimerUI();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
