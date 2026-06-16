const REPORT_ORDER = ["close", "morning", "noon", "review"];
const REPORT_LABELS = {
  close: "收盘报",
  morning: "早报",
  noon: "午报",
  review: "复盘报",
};

const PANEL_JUMP_IDS = [
  "topStatusBar",
  "traderReviewWorkbenchBand",
  "strategyDashboardBand",
  "reportProgressBand",
  "historyCalendarBand",
  "workflowBand",
  "ruleApprovalBand",
  "warningBand",
];

let panelJumpObserver = null;

const FALLBACK_STATE = {
  schema_version: "web-panel-state/v1",
  generated_at: new Date().toISOString(),
  project: { name: "tdx-ag-three-period-split", base_dir: "" },
  run: {
    date: "sample",
    run_id: "embedded-sample",
    period: "close",
    status: "sample",
  },
  beginner: {
    today_title: "观察为主，不追高",
    today_judgement: "三闸门没有同时转强，只说明环境偏谨慎；是否出 Top3 仍看公告、技术、评分和交接边界。",
  },
  reports: [
    { key: "close", label: "收盘报", json_status: "ok", markdown_status: "ok", recommendation_mode: "observe", candidate_count: 1, candidate_universe_count: 3, scan_pool_count: 2, handoff_count: 1, buy_top3_count: 0, markdown: { headings: ["【今日总判断】", "【尾盘结论】"], excerpt: "## 【今日总判断】\n结论：候选级公告和技术面还没同时确认，观察为主，不追高。" } },
    { key: "morning", label: "早报", json_status: "missing", markdown_status: "missing", recommendation_mode: "", candidate_count: 0, handoff_count: 0, markdown: { headings: [] } },
    { key: "noon", label: "午报", json_status: "missing", markdown_status: "missing", recommendation_mode: "", candidate_count: 0, handoff_count: 0, markdown: { headings: [] } },
    { key: "review", label: "复盘报", json_status: "missing", markdown_status: "missing", recommendation_mode: "", candidate_count: 0, handoff_count: 0, markdown: { headings: [] } },
  ],
  gates: [
    { key: "outer", label: "外围闸门", status: "headwind", score: -2, evidence_count: 6, missing_count: 0, top_evidence: ["外围偏谨慎"], reason: "外围偏谨慎，不适合放大进攻。" },
    { key: "domestic", label: "国内闸门", status: "missing", score: "", evidence_count: 0, missing_count: 1, top_evidence: [], reason: "公告风险排除还不完整。" },
    { key: "emotion_trend", label: "情绪/趋势闸门", status: "headwind", score: -1, evidence_count: 4, missing_count: 0, top_evidence: ["情绪偏弱"], reason: "情绪偏弱，先观察承接。" },
  ],
  candidates: [
    {
      rank: 1,
      symbol: "000014",
      name: "沙河股份",
      tag: "A",
      channel: "题材观察",
      score: 0.71,
      decision: "observe",
      entry_style: "pullback_confirm",
      handoff_allowed: true,
      top3_allowed: false,
      theme: "地产链",
      technical_reasons: ["只能观察", "等待回踩承接"],
    },
  ],
  candidate_source_context: {
    mainline_display: "地产链",
    secondary_display: "新型电力",
    avoid_display: "高位脉冲题材",
    execution_display: "地产链",
    execution_relation_label: "主线与执行同向",
    execution_relation_detail: "样例里主线方向和执行票落点一致；真实日期请以结构化导出结果为准。",
    catalyst_timing_label: "时效不明",
    catalyst_timing_detail: "样例状态没有真实催化时间证据，只用于展示版式。",
    selection_rule_display: "先看市场主线，再看正式票是否通过公告、技术和执行准入。",
  },
  data_sources: [],
  artifacts: [],
  summary: { reports_present: 1, json_invalid: 0, candidates_visible: 1, data_sources_ok: 0, warnings: 0, lineage_nodes: 0 },
  warnings: [],
  web_panel_status_summary: {
    schema_version: "web-panel-status-summary/v1",
    currentDate: "sample",
    current_date: "sample",
    status: "partial",
    headline_cn: "顶部状态条：样例日期 1/4 四报已生成，缺失 3 项，环境偏谨慎 2 项",
    report_ready_count: 1,
    report_total_count: 4,
    status_detail_counts: {
      missing_count: 6,
      invalid_count: 0,
      incomplete_count: 1,
      headwind_count: 2,
      stale_count: 0,
      empty_count: 0,
    },
    schedule_counts: {
      missed_schedule: 1,
      precondition_failed: 0,
    },
    user_visible_note_cn: "四报状态条区分缺失、异常、扫描不完整、环境偏谨慎、读旧和已查为空；样例不代表正式运行。",
  },
  top_status_summary: null,
  four_layer_tracking: {
    status: "ok",
    period: "close",
    display_source: "embedded_sample",
    records: [
      {
        rank: 1,
        strategy_group: "formal_top3",
        symbol: "000014",
        name: "沙河股份",
        entry_reason: "样例正式票：展示正式收益和待回填状态，不代表真实推荐。",
        display_reason: "样例正式票：用于说明 Top3 才进入正式收益统计。",
        tracking_status: "tracked",
        formal_return_eligible: true,
        side_channel_return_eligible: false,
        return_metrics: { same_day_return: null, t1_return: null, day3_return: null, missing_reasons: ["待次日行情回填"] },
        return_status: "待次日回填",
        return_scope: "pending",
        missing_reason: "待次日行情回填",
        freshness: "样例状态",
        source_mtime: "",
        historical_backfill: false,
        latest_snapshot: { change_pct: 0.32, theme: "地产链" },
        theme: "地产链",
      },
      {
        rank: 2,
        strategy_group: "a_theme_watch",
        symbol: "603139",
        name: "康惠股份",
        entry_reason: "样例旁路票：题材观察只做复盘对比。",
        display_reason: "题材观察：只验证题材扩散，不进入正式买入。",
        tracking_status: "tracked",
        formal_return_eligible: false,
        side_channel_return_eligible: true,
        side_channel_return_scope: "panel_front_sample",
        return_metrics: { same_day_return: 0.012, t1_return: null, day3_return: null, missing_reasons: [] },
        return_status: "旁路收益",
        return_scope: "side_channel",
        missing_reason: "",
        freshness: "样例状态",
        source_mtime: "",
        historical_backfill: false,
        latest_snapshot: { change_pct: 1.2, theme: "中成药" },
        theme: "中成药",
      },
      {
        rank: 3,
        strategy_group: "score_front_rejected",
        symbol: "601619",
        name: "嘉泽新能",
        entry_reason: "样例历史回填：旧报告只补次日涨跌，不冒充完整运行态。",
        display_reason: "历史回填样本：用于回看旧报告四层票池。",
        tracking_status: "tracked",
        formal_return_eligible: false,
        side_channel_return_eligible: false,
        return_metrics: { same_day_return: null, t1_return: null, day3_return: null, missing_reasons: [] },
        legacy_next_day_change_pct: 0.018,
        legacy_next_day_change_text: "+1.80%",
        return_status: "历史回填",
        return_scope: "legacy_next_day_change",
        missing_reason: "",
        freshness: "历史回填",
        source_mtime: "",
        historical_backfill: true,
        latest_snapshot: { change_pct: null, theme: "新型电力" },
        theme: "新型电力",
      },
    ],
    summary: { legacy_four_layer_backfill: false },
    tracking_coverage: {},
  },
  trader_review: {
    schema_version: "trader_review_workbench.v1",
    status: "sample",
    title: "交易员复盘工作台",
    one_liner: "样例：正式复盘和第二复盘收敛成一个合议结论；只解释亏损、漏选和待审规则，不生成第二套买入名单。",
    market_tone_label: "样例复盘",
    emotion_score: 52,
    formal_return_text: "正式票收益等待真实复盘产物。",
    side_return_text: "旁路样本只做对比。",
    core_cause: "样例状态用于展示版式，不代表正式交易结论。",
    consensus: {
      official_view: "正式复盘负责回放当时结论。",
      second_view: "第二复盘负责旁路和归因审计。",
      final_resolution: "合议层只输出一个复盘口径，不改 Top3。",
      validation_summary: "多日验证不足时只观察。",
    },
    decision_path: [
      { rank: 1, symbol: "000014", name: "沙河股份", verdict: "样例正式样本", reason: "展示正式 Top3 只读决策路径。", attribution: "readonly" },
    ],
    loss_matrix: [
      { label: "正式收益", value: "待回填", status: "watch", detail: "正式收益只统计 Top3。" },
      { label: "旁路对比", value: "只观察", status: "watch", detail: "旁路不计入正式收益。" },
    ],
    miss_attribution_matrix: [
      { label: "无完全漏选强票", count: 0, detail: "样例状态未扫描真实漏选。" },
    ],
    side_channel_cards: [
      { group: "旁路观察", verdict: "继续观察", reason: "只做复盘对比，不进入 execution。" },
    ],
    timeline: [
      { time: "14:50", label: "正式锁票", detail: "不被晚间解释覆盖。" },
      { time: "20:00", label: "合议复盘", detail: "只读审计。" },
    ],
    rule_queue_summary: { pending_count: 0, approval_required: false, highest_priority_cn: "", items: [] },
    boundaries: {
      readonly: true,
      display_audit_only: true,
      affects_formal_top3: false,
      affects_candidate_ranking: false,
      affects_three_gates: false,
      affects_handoff: false,
      affects_execution: false,
      affects_trade_plan: false,
      affects_formal_return: false,
    },
  },
  workflow_chain: {
    close: {
      label: "收盘报",
      nodes: [
        {
          id: "outer_gate",
          order: 1,
          title_cn: "外围闸门",
          plain_goal_cn: "判断隔夜外围环境是否支持 A 股进攻。",
          data_used_cn: ["A50", "美股三大指数", "VIX", "离岸人民币", "黄金", "白银", "布伦特原油", "搜索归因"],
          source_method_cn: "通过 gpt-external-market-data / build_outer_gate.py 获取，归因走 mx-search。",
          read_files: ["outer-skill-output.txt"],
          write_files: ["outer-gate.json"],
          status: "headwind",
          result_cn: "外围偏谨慎，不支持主动进攻。",
          missing_or_risk_cn: ["样例数据，仅用于展示链路展开样式"],
        },
      ],
    },
    morning: { label: "早报", nodes: [] },
    noon: { label: "午报", nodes: [] },
    review: { label: "复盘报", nodes: [] },
  },
  history_index: [
    { date: "2026-04-30", report_type: "close", label: "收盘报" },
  ],
  history_detail: {
    "2026-04-30": {
      close: "# 2026-04-30 收盘报\n\n## 【今日总判断】\n结论：候选级公告和技术面还没同时确认，观察为主，不追高。\n\n## 【三闸门】\n- 外围：谨慎，只作环境参考\n- 国内：缺少完整公告排雷，候选级排雷另算\n- 情绪/趋势：谨慎，只影响仓位语气\n\n## 【候选结论】\n沙河股份只进入观察名单，等待回踩承接确认。",
    },
  },
};

let state = FALLBACK_STATE;
let selectedPanelState = null;
let activeWorkflowReport = "";
let activeWorkflowNodeId = "";
let selectedPanelDate = "";
let historyCalendarFilter = "all";
let activePanelJumpId = "";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const SEARCH_PARAMS = new URLSearchParams(window.location.search || "");
let strategyCurveObserver = null;

function shouldForceMotion() {
  if (SEARCH_PARAMS.get("forceMotion") === "1") return true;
  if (SEARCH_PARAMS.has("desktop_preview")) return true;
  if (window.location.protocol === "file:") return true;
  return false;
}

function applyMotionPreference() {
  document.documentElement.classList.toggle("force-motion", shouldForceMotion());
}

function prefersReducedMotion() {
  return Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches);
}

function motionAllowed() {
  return shouldForceMotion() || !prefersReducedMotion();
}

function gsapEngine() {
  if (!motionAllowed()) return null;
  return window.gsap || null;
}

function syncModalBodyLock() {
  const hasOpenModal = $$(".workflow-modal").some((modal) => !modal.hidden);
  document.body.classList.toggle("modal-open", hasOpenModal);
}

function animateModalOpen(modal) {
  const gsap = gsapEngine();
  if (!gsap || !modal) return;
  const card = modal.querySelector(".workflow-modal-card");
  const backdrop = modal.querySelector(".workflow-modal-backdrop");
  if (!card || !backdrop) return;
  gsap.killTweensOf([card, backdrop]);
  gsap.fromTo(backdrop, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.18, ease: "power1.out", clearProps: "opacity,visibility" });
  gsap.fromTo(card, { autoAlpha: 0, y: 18, scale: 0.985 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.24, ease: "power2.out", clearProps: "transform,opacity,visibility" });
}

function animateModalClose(modal, onDone) {
  const finish = () => {
    modal.hidden = true;
    delete modal.dataset.closing;
    syncModalBodyLock();
    onDone?.();
  };
  if (!modal || modal.hidden || modal.dataset.closing === "1") return;
  const gsap = gsapEngine();
  const card = modal.querySelector(".workflow-modal-card");
  const backdrop = modal.querySelector(".workflow-modal-backdrop");
  modal.dataset.closing = "1";
  if (!gsap || !card || !backdrop) {
    finish();
    return;
  }
  gsap.killTweensOf([card, backdrop]);
  gsap.timeline({ onComplete: finish })
    .to(card, { autoAlpha: 0, y: 12, scale: 0.985, duration: 0.16, ease: "power1.in" }, 0)
    .to(backdrop, { autoAlpha: 0, duration: 0.16, ease: "power1.in" }, 0);
}

function focusModalControl(selector) {
  requestAnimationFrame(() => {
    const control = $(selector);
    if (!control) return;
    try {
      control.focus({ preventScroll: true });
    } catch {
      control.focus();
    }
  });
}

function syncCompleteReportViewport() {
  const modal = $("#completeReportModal");
  const card = modal?.querySelector(".complete-report-card");
  const header = modal?.querySelector(".workflow-modal-header");
  const body = $("#completeReportBody");
  if (!modal || modal.hidden || !card || !header || !body) return;
  const mobile = window.matchMedia?.("(max-width: 720px)")?.matches;
  const safeGap = mobile ? 16 : 48;
  const viewportHeight = window.visualViewport?.height || window.innerHeight || document.documentElement.clientHeight || 720;
  const maxCardHeight = mobile ? Math.max(320, viewportHeight - safeGap) : Math.min(Math.max(420, viewportHeight - safeGap), 780);
  card.style.height = `${Math.round(maxCardHeight)}px`;
  card.style.maxHeight = `${Math.round(maxCardHeight)}px`;
  const available = Math.max(180, Math.floor(maxCardHeight - header.offsetHeight));
  body.style.height = `${available}px`;
  body.style.maxHeight = `${available}px`;
  body.style.overflowY = "auto";
}

function bindCompleteReportScroll() {
  const modal = $("#completeReportModal");
  const body = $("#completeReportBody");
  if (!modal || !body || modal.dataset.scrollBound === "1") return;
  modal.dataset.scrollBound = "1";
  const scrollBody = (delta) => {
    if (modal.hidden || body.scrollHeight <= body.clientHeight) return false;
    const before = body.scrollTop;
    body.scrollTop += delta;
    return body.scrollTop !== before;
  };
  modal.addEventListener("wheel", (event) => {
    if (scrollBody(event.deltaY)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, { passive: false });
  body.addEventListener("keydown", (event) => {
    const keyDelta = {
      ArrowDown: 48,
      ArrowUp: -48,
      PageDown: body.clientHeight * 0.82,
      PageUp: -body.clientHeight * 0.82,
      End: body.scrollHeight,
      Home: -body.scrollHeight,
    }[event.key];
    if (keyDelta !== undefined && scrollBody(keyDelta)) {
      event.preventDefault();
      event.stopPropagation();
    }
  });
  window.addEventListener("resize", syncCompleteReportViewport);
  window.visualViewport?.addEventListener("resize", syncCompleteReportViewport);
}

const PRIMARY_DERIVED_DATA_SCRIPT = "./data/current-state.js";
const FULL_DERIVED_DATA_SCRIPT = "./data/current-state-full.js";
const SECONDARY_DERIVED_DATA_SCRIPTS = [
  "./data/history-index.js",
  "./data/strategy-history.js",
];
const CRITICAL_DERIVED_DATA_SCRIPTS = [PRIMARY_DERIVED_DATA_SCRIPT];
const HISTORY_DETAIL_SCRIPT = "./data/history-detail.js";
const DERIVED_DATA_VERSION = "20260616-public-panel-lite-v1";
const PANEL_STATE_SCRIPT_TIMEOUT_MS = 4500;
const PANEL_FULL_STATE_SCRIPT_TIMEOUT_MS = 12000;
const PANEL_LIVE_REFRESH_INTERVAL_MS = 10000;
const PANEL_SECONDARY_REFRESH_INTERVAL_MS = 60000;
const READY_REPORT_STATUSES = new Set(["ok", "success", "complete", "complete_empty", "pass", "ready", "done"]);
const STRATEGY_ANALYTICS_START_DATE = "2026-05-15";
const STRATEGY_DASHBOARD_DISPLAY_LIMIT = 9;
const TRADER_REVIEW_SIDE_DISPLAY_LIMIT = 8;
let historyDetailLoadPromise = null;
let secondaryDerivedDataLoadPromise = null;
let fullPanelStateLoadPromise = null;
let autoBootPanelStateEnabled = true;
let livePanelRefreshTimer = null;
let livePanelRefreshInFlight = false;
let livePanelSecondaryRefreshAt = 0;

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function panelPayloadGeneratedAt(payload) {
  return String(
    payload?.generated_at
    || payload?.generatedAt
    || payload?.run?.generated_at
    || payload?.run?.generatedAt
    || "",
  );
}

function panelPayloadMode(payload) {
  return String(payload?.panel_payload_mode || payload?.panelPayloadMode || "");
}

function panelPayloadSignature(payload) {
  return [
    panelPayloadGeneratedAt(payload),
    panelPayloadMode(payload),
    String(payload?.current_date || payload?.currentDate || payload?.run?.date || ""),
    String(payload?.run?.period || ""),
    String(payload?.run?.status || ""),
  ].join("|");
}

function panelViewLockedToHistory() {
  return Boolean(
    selectedPanelState
    && selectedPanelDate
    && state?.run?.date
    && selectedPanelDate !== state.run.date,
  );
}

function shouldAutoRefreshLiveState() {
  if (!autoBootPanelStateEnabled) return false;
  if (panelViewLockedToHistory()) return false;
  if (window.location.protocol === "file:") return false;
  return true;
}

function isReadyStatus(value) {
  return READY_REPORT_STATUSES.has(String(value || "").toLowerCase());
}

function loadOptionalScript(src, options = {}) {
  const timeoutMs = Number(options.timeoutMs || 0);
  const onLoad = typeof options.onLoad === "function" ? options.onLoad : null;
  const removeOnTimeout = options.removeOnTimeout === true;
  const removeAfterLoad = options.removeAfterLoad === true;
  const cacheKey = String(options.cacheKey || DERIVED_DATA_VERSION);
  return new Promise((resolve) => {
    const script = document.createElement("script");
    const separator = src.includes("?") ? "&" : "?";
    let settled = false;
    let timeoutId = null;
    const finish = (value) => {
      if (settled) return;
      settled = true;
      if (timeoutId) clearTimeout(timeoutId);
      resolve(value);
    };
    script.src = `${src}${separator}v=${encodeURIComponent(cacheKey)}`;
    script.async = false;
    script.onload = () => {
      onLoad?.();
      if (removeAfterLoad) script.remove();
      finish(true);
    };
    script.onerror = () => {
      script.remove();
      finish(false);
    };
    if (timeoutMs > 0) {
      timeoutId = window.setTimeout(() => {
        if (removeOnTimeout) script.remove();
        finish(false);
      }, timeoutMs);
    }
    document.head.appendChild(script);
  });
}

async function bootstrapDerivedData() {
  await Promise.all(
    CRITICAL_DERIVED_DATA_SCRIPTS.map((src) => loadOptionalScript(src, {
      timeoutMs: PANEL_STATE_SCRIPT_TIMEOUT_MS,
      onLoad: () => syncPanelStateFromGlobals(),
    })),
  );
}

function loadSecondaryDerivedData() {
  if (!secondaryDerivedDataLoadPromise) {
    secondaryDerivedDataLoadPromise = Promise.all(
      SECONDARY_DERIVED_DATA_SCRIPTS.map((src) => loadOptionalScript(src, { timeoutMs: PANEL_STATE_SCRIPT_TIMEOUT_MS })),
    ).then(() => true);
  }
  return secondaryDerivedDataLoadPromise;
}

function loadFullPanelState() {
  if (!fullPanelStateLoadPromise) {
    fullPanelStateLoadPromise = loadOptionalScript(FULL_DERIVED_DATA_SCRIPT, {
      timeoutMs: PANEL_FULL_STATE_SCRIPT_TIMEOUT_MS,
      onLoad: () => syncPanelStateFromGlobals({ preferFull: true }),
    }).then(() => Boolean(window.THREE_PERIOD_PANEL_STATE_FULL));
  }
  return fullPanelStateLoadPromise;
}

function isHistoryDetailLoaded() {
  return Boolean(window.THREE_PERIOD_HISTORY_DETAIL || window.THREE_PERIOD_PANEL_HISTORY_DETAIL);
}

function ensureHistoryDetailLoaded() {
  if (isHistoryDetailLoaded()) return Promise.resolve(true);
  if (!historyDetailLoadPromise) {
    historyDetailLoadPromise = loadOptionalScript(HISTORY_DETAIL_SCRIPT, { timeoutMs: PANEL_STATE_SCRIPT_TIMEOUT_MS });
  }
  return historyDetailLoadPromise;
}

function resetPanelViewState() {
  selectedPanelState = null;
  activeWorkflowReport = "";
  activeWorkflowNodeId = "";
  selectedPanelDate = state.run?.date || "";
}

function buildBootState(status, warningText) {
  const currentDate = new Date().toLocaleDateString("sv-SE") || "loading";
  const summary = {
    reports_present: 0,
    json_invalid: 0,
    candidates_visible: 0,
    four_layer_visible: 0,
    rule_upgrade_pending: 0,
    trader_review_status: status,
    data_sources_ok: 0,
    warnings: warningText ? 1 : 0,
    automation_missed: 0,
    automation_failed: 0,
    automation_incomplete: 0,
    lineage_nodes: 0,
    automation_status_counts: {},
  };
  summary[status] = 1;
  const detailCounts = {
    missing_count: status === "state_missing" ? REPORT_ORDER.length : 0,
    invalid_count: 0,
    incomplete_count: status === "state_loading" ? 1 : 0,
    headwind_count: 0,
    stale_count: 0,
    empty_count: 0,
  };
  const topStatusSummary = {
    schema_version: "web-panel-status-summary/v1",
    currentDate,
    current_date: currentDate,
    status: status === "state_missing" ? "partial" : "empty",
    headline_cn: status === "state_loading"
      ? `当前日期 ${currentDate}：正在加载正式 Web 面板状态`
      : `当前日期 ${currentDate}：暂未加载到正式 Web 面板状态`,
    report_ready_count: 0,
    report_total_count: REPORT_ORDER.length,
    status_detail_counts: detailCounts,
    schedule_counts: {},
    schedule_items: [],
    missing_reports: [...REPORT_ORDER],
    user_visible_note_cn: warningText || "页面会先显示加载占位；正式状态到达后会自动刷新。",
  };
  return {
    ...clone(FALLBACK_STATE),
    currentDate,
    current_date: currentDate,
    run: { ...FALLBACK_STATE.run, date: currentDate, status },
    reports: REPORT_ORDER.map((key) => ({
      key,
      label: REPORT_LABELS[key],
      json_status: status === "state_missing" ? "missing" : "pending",
      markdown_status: status === "state_missing" ? "missing" : "pending",
      recommendation_mode: "",
      candidate_count: 0,
      handoff_count: 0,
      markdown: { headings: [], excerpt: "" },
    })),
    candidates: [],
    candidate_source_context: {},
    overnight_report_brief: { status, final_ranking: { items: [], summary: "" } },
    four_layer_tracking: {
      status,
      period: "",
      display_source: "bootstrap",
      records: [],
      summary: {},
      tracking_coverage: {},
    },
    trader_review: {
      ...FALLBACK_STATE.trader_review,
      status,
      one_liner: warningText || "正式复盘状态加载后会自动替换这里的占位内容。",
      formal_return_text: "等待正式状态载入。",
      side_return_text: "",
      decision_path: [],
      loss_matrix: [],
      miss_attribution_matrix: [],
      side_channel_cards: [],
      timeline: [],
    },
    workflow_chain: {
      close: { label: "收盘报", nodes: [] },
      morning: { label: "早报", nodes: [] },
      noon: { label: "午报", nodes: [] },
      review: { label: "复盘报", nodes: [] },
    },
    history_index: [],
    history_detail: {},
    data_sources: [],
    artifacts: [],
    warnings: warningText ? [warningText] : [],
    summary,
    web_panel_status_summary: topStatusSummary,
    top_status_summary: topStatusSummary,
    panel_payload_mode: "bootstrap",
  };
}

function applyPanelStatePayload(payload, options = {}) {
  if (!payload || typeof payload !== "object") return false;
  if (options.force !== true) {
    const incomingSignature = panelPayloadSignature(payload);
    const currentSignature = panelPayloadSignature(state);
    if (incomingSignature && incomingSignature === currentSignature) {
      if (options.promoteToPrimary === true) {
        window.THREE_PERIOD_PANEL_STATE = payload;
      }
      return false;
    }
  }
  state = payload;
  if (options.promoteToPrimary === true) {
    window.THREE_PERIOD_PANEL_STATE = payload;
  }
  resetPanelViewState();
  renderAll();
  return true;
}

function syncPanelStateFromGlobals(options = {}) {
  if (!autoBootPanelStateEnabled) return false;
  const preferFull = options.preferFull !== false;
  const fullPayload = window.THREE_PERIOD_PANEL_STATE_FULL;
  const primaryPayload = window.THREE_PERIOD_PANEL_STATE;
  const payload = preferFull && fullPayload
    ? fullPayload
    : (primaryPayload || fullPayload);
  if (!payload || typeof payload !== "object") return false;
  return applyPanelStatePayload(payload, {
    promoteToPrimary: payload === fullPayload,
  });
}

function parsePanelStateScriptText(text, globalName) {
  const prefix = `window.${globalName}`;
  const index = String(text || "").indexOf(prefix);
  if (index < 0) {
    throw new Error(`未找到 ${globalName} 全局变量`);
  }
  const jsonText = String(text || "")
    .slice(index + prefix.length)
    .replace(/^\s*=\s*/, "")
    .replace(/;\s*$/, "")
    .trim();
  return JSON.parse(jsonText);
}

async function fetchPanelStatePayload(src, globalName) {
  const separator = src.includes("?") ? "&" : "?";
  const url = `${src}${separator}v=${Date.now()}`;
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const text = await response.text();
  return parsePanelStateScriptText(text, globalName);
}

function scheduleSecondaryDerivedDataReload() {
  if (!shouldAutoRefreshLiveState()) return;
  const now = Date.now();
  if (livePanelSecondaryRefreshAt && now < livePanelSecondaryRefreshAt) return;
  livePanelSecondaryRefreshAt = now + PANEL_SECONDARY_REFRESH_INTERVAL_MS;
  secondaryDerivedDataLoadPromise = Promise.all(
    SECONDARY_DERIVED_DATA_SCRIPTS.map((src) => loadOptionalScript(src, {
      timeoutMs: PANEL_STATE_SCRIPT_TIMEOUT_MS,
      cacheKey: String(now),
      removeAfterLoad: true,
    })),
  ).then(() => {
    renderAll();
    return true;
  });
}

async function refreshLivePanelState(options = {}) {
  if (!shouldAutoRefreshLiveState() || livePanelRefreshInFlight) return false;
  livePanelRefreshInFlight = true;
  const previousSignature = panelPayloadSignature(state);
  const previousGeneratedAt = panelPayloadGeneratedAt(state);
  const previousMode = panelPayloadMode(state);
  try {
    const primaryPayload = await fetchPanelStatePayload(PRIMARY_DERIVED_DATA_SCRIPT, "THREE_PERIOD_PANEL_STATE");
    window.THREE_PERIOD_PANEL_STATE = primaryPayload;
    const primarySignature = panelPayloadSignature(primaryPayload);
    const primaryChanged = Boolean(primarySignature && primarySignature !== previousSignature);
    if (options.force === true || primaryChanged || previousMode === "bootstrap" || previousMode === "sample") {
      applyPanelStatePayload(primaryPayload, { force: true });
    }

    const primaryGeneratedAt = panelPayloadGeneratedAt(primaryPayload);
    const needFullRefresh = options.forceFull === true
      || previousMode !== "full"
      || primaryGeneratedAt !== previousGeneratedAt;
    if (needFullRefresh) {
      const fullPayload = await fetchPanelStatePayload(FULL_DERIVED_DATA_SCRIPT, "THREE_PERIOD_PANEL_STATE_FULL");
      window.THREE_PERIOD_PANEL_STATE_FULL = fullPayload;
      const fullSignature = panelPayloadSignature(fullPayload);
      if (options.force === true || fullSignature !== panelPayloadSignature(state) || panelPayloadMode(state) !== "full") {
        applyPanelStatePayload(fullPayload, {
          force: true,
          promoteToPrimary: true,
        });
      }
    }

    if (primaryChanged || options.force === true) {
      scheduleSecondaryDerivedDataReload();
    }
    return true;
  } catch (error) {
    console.warn("live panel refresh skipped:", error);
    return false;
  } finally {
    livePanelRefreshInFlight = false;
  }
}

function startLivePanelRefreshLoop() {
  if (livePanelRefreshTimer || window.location.protocol === "file:") return;
  livePanelRefreshTimer = window.setInterval(() => {
    refreshLivePanelState();
  }, PANEL_LIVE_REFRESH_INTERVAL_MS);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      refreshLivePanelState({ forceFull: true });
    }
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function stripMarkdown(value) {
  return String(value ?? "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/^#{1,6}\s*/gm, "")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/\*\*/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function sanitizeBeginnerText(value) {
  return String(value ?? "")
    .replace(/[A-Za-z]:\\[^\s，。；]+/g, "[路径已隐藏]")
    .replace(/\bruns\/[^\s，。；]+/g, "[路径已隐藏]")
    .replace(/\b[a-f0-9]{32,64}\b/gi, "[校验值已隐藏]")
    .replace(/workflow-manifest\.json|data-lineage\.json|manifest/gi, "运行记录")
    .replace(/sha256?/gi, "校验值")
    .replace(/真实成交/g, "券商成交")
    .replace(/真实持仓/g, "账户持仓")
    .replace(/实盘收益/g, "账户收益")
    .replace(/实盘成交/g, "账户成交")
    .replace(/账户真实盈利/g, "账户盈利")
    .replace(/query_completed\s*=\s*false/gi, "这一步还没确认查完")
    .replace(/query_completed/gi, "查询是否完成")
    .replace(/fetch_failed/gi, "查询失败")
    .replace(/filtered_pool_reuse|reuse_filtered_pool/gi, "复用旧自选股池")
    .replace(/filtered[-_]pool(?:\.json)?/gi, "自选股池文件");
}

function truncateText(value, limit = 140) {
  const text = sanitizeBeginnerText(stripMarkdown(value));
  return text.length > limit ? `${text.slice(0, limit)}...` : text;
}

function normalizeReportKey(value) {
  const text = String(value || "").toLowerCase().replace(/_/g, "-");
  if (text.includes("morning") || text.includes("早")) return "morning";
  if (text.includes("noon") || text.includes("午")) return "noon";
  if (text.includes("review") || text.includes("复盘")) return "review";
  if (text.includes("close") || text.includes("收盘")) return "close";
  return text.replace(/-report$/, "");
}

function reportLabel(report) {
  const key = normalizeReportKey(report?.key || report?.report_type || report?.type || report?.period);
  return report?.label || REPORT_LABELS[key] || report?.report_type || report?.key || "报告";
}

function reportScheduleStatus(report) {
  return String(report?.schedule?.automation_status || "").toLowerCase();
}

function pendingReportStatus(report) {
  return reportScheduleStatus(report) || report?.markdown_status || report?.json_status || "missing";
}

function pendingReportDetail(report) {
  const schedule = report?.schedule || {};
  const diagnosis = schedule.diagnosis_cn || "";
  const boundary = schedule.recovery_boundary_cn || "";
  if (diagnosis && boundary) return `${diagnosis} ${boundary}`;
  if (diagnosis) return diagnosis;
  return "还没有生成，等对应时段完成后再看。";
}

const STATUS_DETAIL_COUNT_FIELDS = [
  ["missing_count", "缺失"],
  ["invalid_count", "文件损坏"],
  ["incomplete_count", "扫描不完整"],
  ["headwind_count", "环境偏谨慎"],
  ["stale_count", "读旧"],
  ["empty_count", "已查为空"],
];

function statusSummaryPayload() {
  const sourceState = panelStateForView();
  const summary = sourceState?.web_panel_status_summary
    || sourceState?.top_status_summary
    || sourceState?.status_summary;
  return summary && typeof summary === "object" ? summary : null;
}

function incrementStatusDetail(counts, status) {
  const text = String(status || "").toLowerCase();
  if (!text) return;
  if (["missing", "missed", "missed_schedule", "state_missing", "device_offline_or_codex_not_running"].includes(text)) counts.missing_count += 1;
  if (["invalid", "error", "failed", "fail", "blocked", "precondition_failed"].includes(text)) counts.invalid_count += 1;
  if (["incomplete", "partial", "warning", "warn", "ask_for_more"].includes(text)) counts.incomplete_count += 1;
  if (["headwind", "downgrade", "observe"].includes(text)) counts.headwind_count += 1;
  if (["stale", "outdated", "read_old", "old_data", "stale_cache"].includes(text)) counts.stale_count += 1;
  if (["empty", "complete_empty", "queried_empty", "no_records"].includes(text)) counts.empty_count += 1;
}

function reportDueMap(reports) {
  return (Array.isArray(reports) ? reports : []).reduce((acc, report) => {
    const key = String(report?.key || report?.report_type || "").toLowerCase();
    if (!key) return acc;
    const schedule = report?.schedule || {};
    if (typeof schedule?.due === "boolean") {
      acc[key] = schedule.due;
      return acc;
    }
    acc[key] = String(schedule?.automation_status || "").toLowerCase() !== "not_due";
    return acc;
  }, {});
}

function dataSourceDuePeriod(name) {
  const match = String(name || "").match(/\.(close|morning|noon|review)\./i);
  return match ? match[1].toLowerCase() : "";
}

function shouldCountDataSourceStatus(item, dueByPeriod) {
  const period = dataSourceDuePeriod(item?.name);
  if (!period) return true;
  return dueByPeriod[period] !== false;
}

function deriveStatusSummary() {
  const sourceState = panelStateForView();
  const reports = orderedReports();
  const dueByPeriod = reportDueMap(reports);
  const readyReports = reports.filter(isReportReady).length;
  const counts = STATUS_DETAIL_COUNT_FIELDS.reduce((acc, [key]) => ({ ...acc, [key]: 0 }), {});
  reports.forEach((report) => {
    const key = String(report?.key || report?.report_type || "").toLowerCase();
    if (dueByPeriod[key] !== false) {
      incrementStatusDetail(counts, report?.json_status);
      incrementStatusDetail(counts, report?.markdown_status);
    }
    incrementStatusDetail(counts, report?.schedule?.automation_status);
  });
  (Array.isArray(sourceState?.gates) ? sourceState.gates : []).forEach((gate) => incrementStatusDetail(counts, gate?.status));
  (Array.isArray(sourceState?.data_sources) ? sourceState.data_sources : []).forEach((item) => {
    if (shouldCountDataSourceStatus(item, dueByPeriod)) {
      incrementStatusDetail(counts, item?.status);
    }
  });
  const schedules = sourceState?.automation_schedule || {};
  return {
    schema_version: "web-panel-status-summary/v1",
    currentDate: selectedPanelDate || sourceState?.run?.date || state.run?.date || "--",
    current_date: selectedPanelDate || sourceState?.run?.date || state.run?.date || "--",
    status: readyReports === REPORT_ORDER.length ? "complete" : (readyReports ? "partial" : "empty"),
    headline_cn: `当前日期 ${selectedPanelDate || sourceState?.run?.date || "--"}：${readyReports}/${REPORT_ORDER.length} 四报已生成`,
    report_ready_count: readyReports,
    report_total_count: REPORT_ORDER.length,
    status_detail_counts: counts,
    schedule_counts: schedules.by_status || {},
    schedule_items: schedules.items || [],
    user_visible_note_cn: "顶部状态条只统计当前应当已经落盘的异常项；复盘未到时间、链路说明性节点和环境偏谨慎不再算作缺失或扫描不完整。",
  };
}

function activeStatusSummary() {
  return statusSummaryPayload() || deriveStatusSummary();
}

function statusSummaryCounts(summary) {
  const counts = summary?.status_detail_counts || summary?.detail_counts || {};
  return STATUS_DETAIL_COUNT_FIELDS.reduce((acc, [key]) => {
    acc[key] = Number(counts[key] || 0);
    return acc;
  }, {});
}

function scheduleCount(summary, key) {
  const scheduleCounts = summary?.schedule_counts || summary?.schedule_detail_counts || {};
  const items = Array.isArray(summary?.schedule_items) ? summary.schedule_items : [];
  const explicit = Number(scheduleCounts[key] || summary?.[key] || 0);
  if (explicit) return explicit;
  return items.filter((item) => String(item?.automation_status || item?.status || "").toLowerCase() === key).length;
}

function activeOvernightBrief() {
  const panelState = panelStateForView?.() || state;
  return panelState?.overnight_report_brief || state?.overnight_report_brief || {};
}

function overnightRankingConclusion(symbol) {
  const ranking = activeOvernightBrief()?.final_ranking;
  const items = Array.isArray(ranking?.items) ? ranking.items : [];
  const normalized = normalizeSymbolText(symbol);
  if (!normalized) return "";
  const found = items.find((item) => normalizeSymbolText(item?.symbol) === normalized);
  return sanitizeBeginnerText(found?.text || "");
}

function renderTopOvernightRanking(brief) {
  const ranking = brief?.final_ranking && typeof brief.final_ranking === "object" ? brief.final_ranking : {};
  const items = Array.isArray(ranking.items) ? ranking.items.filter(Boolean) : [];
  if (!items.length) return "";
  const sourceDate = brief?.source_run_date ? `${brief.source_run_date} 收盘` : "龙虾隔夜报告";
  const summaryText = sanitizeBeginnerText(ranking.summary || "");
  return `
    <article class="top-overnight-ranking-card">
      <div class="top-overnight-ranking-head">
        <div>
          <span class="section-label">龙虾最终排序</span>
          <h3>${escapeHtml(sourceDate)}</h3>
        </div>
        ${pill(brief?.status || "ok", "只读增强")}
      </div>
      <div class="top-overnight-ranking-list">
        ${items.map((item) => {
          const title = sanitizeBeginnerText(item.name || item.symbol || `第${item.rank || "--"}名`);
          const symbol = sanitizeBeginnerText(item.symbol || "");
          return `
            <div class="top-overnight-ranking-item">
              <b class="top-overnight-ranking-index">${escapeHtml(String(item.rank || "--"))}</b>
              <div class="top-overnight-ranking-copy">
                <strong>${escapeHtml(title)}</strong>
                <small>${escapeHtml(symbol)}</small>
              </div>
            </div>
          `;
        }).join("")}
      </div>
      ${summaryText ? `<p class="top-overnight-ranking-summary">${escapeHtml(summaryText)}</p>` : ""}
    </article>
  `;
}

function renderTopStatusBar() {
  const container = $("#topStatusBar");
  if (!container) return;
  const summary = activeStatusSummary();
  const overnightBrief = activeOvernightBrief();
  const counts = statusSummaryCounts(summary);
  const missedCount = scheduleCount(summary, "missed_schedule");
  const failedCount = scheduleCount(summary, "precondition_failed");
  const status = summary.status || "neutral";
  const ready = Number(summary.report_ready_count || 0);
  const total = Number(summary.report_total_count || REPORT_ORDER.length);
  const headline = summary.headline_cn || `当前日期 ${summary.currentDate || summary.current_date || "--"}：${ready}/${total} 四报已生成`;
  const chips = [
    ...STATUS_DETAIL_COUNT_FIELDS.map(([key, label]) => ({ key, label, value: counts[key] })),
    { key: "missed_schedule", label: "错过自动化", value: missedCount },
    { key: "precondition_failed", label: "前置失败", value: failedCount },
  ];
  container.innerHTML = `
    <article class="top-status-card tone-${escapeHtml(statusClass(status))}">
      <div class="top-status-main">
        <span class="section-label">顶部状态条</span>
        <h2>${escapeHtml(headline)}</h2>
        <p>${escapeHtml(summary.user_visible_note_cn || "缺失、损坏、扫描不完整、环境偏谨慎、读旧和已查为空会分开显示；这里只展示状态，不重新取数。")}</p>
      </div>
      <div class="top-status-score">
        <span>四报完成度</span>
        <strong>${escapeHtml(`${ready}/${total}`)}</strong>
        ${pill(status, friendlyStatus(status))}
      </div>
      <div class="top-status-chips">
        ${chips.map((item) => `
          <span class="top-status-chip ${item.value ? "active" : ""}" data-status-count="${escapeHtml(item.key)}">
            <b>${escapeHtml(String(item.value || 0))}</b>${escapeHtml(item.label)}
          </span>
        `).join("")}
      </div>
    </article>
    ${renderTopOvernightRanking(overnightBrief)}
  `;
}

function statusClass(status) {
  const text = String(status || "").toLowerCase();
  if (["ok", "success", "complete", "complete_empty", "queried_empty", "no_records", "pass", "tailwind", "ready", "done"].includes(text)) return "ok";
  if (["fail", "failed", "error", "invalid", "cancel", "blocked", "precondition_failed", "device_offline_or_codex_not_running"].includes(text)) return "bad";
  if (["headwind", "missing", "missed", "missed_schedule", "not_due", "warning", "warn", "incomplete", "partial", "empty", "stale", "read_old", "old_data", "ask_for_more", "neutral", "downgrade", "state_missing"].includes(text)) return "warn";
  if (["sample", "observe", "review_only", "skip"].includes(text)) return "violet";
  return "neutral";
}

function friendlyStatus(status) {
  const text = String(status || "").toLowerCase();
  const labels = {
    ok: "已生成",
    success: "完成",
    complete: "完成",
    complete_empty: "完成",
    pass: "通过",
    tailwind: "顺风",
    ready: "已就绪",
    done: "完成",
    flat: "中性",
    neutral: "中性",
    partial: "部分生成",
    top3: "可输出买入前三名",
    cash: "空仓/不买入",
    missing: "未生成",
    state_missing: "状态缺失",
    missed: "自动化错过",
    warning: "需留意",
    warn: "需留意",
    incomplete: "不完整",
    empty: "暂无",
    queried_empty: "已查为空",
    stale: "读旧",
    read_old: "读旧",
    old_data: "读旧",
    ask_for_more: "需补充",
    headwind: "谨慎",
    fail: "失败",
    failed: "失败",
    error: "异常",
    invalid: "异常",
    cancel: "取消",
    blocked: "阻断",
    missed_schedule: "自动化错过",
    device_offline_or_codex_not_running: "设备/Codex 未运行",
    precondition_failed: "前置失败",
    not_due: "未到时间",
    observe: "观察",
    review_only: "仅复盘",
    sample: "样例",
    downgrade: "降级观察",
    skip: "跳过",
  };
  return labels[text] || status || "--";
}

function pill(status, label = friendlyStatus(status)) {
  return `<span class="status-pill ${statusClass(status)}">${escapeHtml(label)}</span>`;
}

function periodLabel(period) {
  const key = normalizeReportKey(period);
  return REPORT_LABELS[key] || period || "--";
}

function historyIndexPayload() {
  return window.THREE_PERIOD_HISTORY_INDEX
    ?? window.THREE_PERIOD_PANEL_HISTORY_INDEX
    ?? state.history_index
    ?? state.history?.index;
}

function historyDetailPayload() {
  return window.THREE_PERIOD_HISTORY_DETAIL
    ?? window.THREE_PERIOD_PANEL_HISTORY_DETAIL
    ?? state.history_detail
    ?? state.history?.detail;
}

function strategyHistoryPayload() {
  return window.THREE_PERIOD_STRATEGY_HISTORY
    ?? window.THREE_PERIOD_PANEL_STRATEGY_HISTORY
    ?? state.strategy_history
    ?? state.history?.strategy_history;
}

function historyPanelStatePayload(date = selectedPanelDate) {
  if (!date || date === state.run?.date) return null;
  if (selectedPanelState?.run?.date === date) return selectedPanelState;
  const detail = historyDetailPayload();
  const dateDetail = detail?.dates?.[date] || detail?.[date];
  return dateDetail?.panel_state || dateDetail?.web_panel_state || dateDetail?.state || null;
}

function panelStateForView() {
  return historyPanelStatePayload() || state;
}

function isReportReady(report) {
  const markdownStatus = String(report?.markdown_status || "").toLowerCase();
  const jsonStatus = String(report?.json_status || "").toLowerCase();
  const markdownReady = isReadyStatus(markdownStatus) && Boolean(reportMarkdown(report));
  const jsonReady = isReadyStatus(jsonStatus);
  return markdownReady && jsonReady;
}

function isHistoryEntryReady(entry, markdownText) {
  const exists = Boolean(entry?.exists);
  const statusText = String(entry?.status || "").toLowerCase();
  return exists && isReadyStatus(statusText) && Boolean(markdownText);
}

function reportFromHistoryEntry(entry) {
  const key = normalizeReportKey(entry?.report_type || entry?.key || entry?.type || entry?.period);
  const exists = entry?.exists !== false && entry?.status !== "missing";
  const markdownText = historyMarkdown(entry, historyDetailPayload());
  const status = String(entry?.status || "").toLowerCase();
  const ready = exists && isReadyStatus(status) && Boolean(markdownText);
  return {
    ...entry,
    key,
    report_type: key,
    label: entry?.label || REPORT_LABELS[key] || key,
    json_status: ready ? "ok" : "missing",
    markdown_status: ready ? "ok" : "missing",
    candidate_count: Number(entry?.candidate_count || 0),
    candidate_universe_count: Number(entry?.candidate_universe_count || entry?.scan_pool_count || 0),
    scan_pool_count: Number(entry?.scan_pool_count || 0),
    handoff_count: Number(entry?.handoff_count || 0),
    buy_top3_count: Number(entry?.buy_top3_count || 0),
    recommendation_mode: entry?.recommendation_mode || "",
    markdown: {
      exists: ready,
      full_text: markdownText,
      excerpt: markdownText ? truncateText(markdownText, 220) : "",
    },
  };
}

function selectedHistoryReports() {
  const date = selectedPanelDate || "";
  if (!date || date === state.run?.date) return [];
  const entries = normalizeHistoryIndex(historyIndexPayload()).filter((entry) => entry.date === date);
  const byKey = new Map(entries.map((entry) => [normalizeReportKey(entry.report_type), entry]));
  const historyState = historyPanelStatePayload(date);
  if (!entries.length && !Array.isArray(historyState?.reports)) return [];
  if (Array.isArray(historyState?.reports) && historyState.reports.length) {
    const reportsByKey = new Map(historyState.reports.map((report) => [normalizeReportKey(report.key || report.report_type || report.type || report.period), report]));
    return REPORT_ORDER.map((key) => {
      const report = reportsByKey.get(key);
      const entry = byKey.get(key);
      if (!report && !entry) {
        return {
          key,
          report_type: key,
          label: REPORT_LABELS[key],
          json_status: "missing",
          markdown_status: "missing",
          candidate_count: 0,
          handoff_count: 0,
          markdown: { headings: [] },
        };
      }
      const markdownText = entry ? historyMarkdown(entry, historyDetailPayload()) : reportMarkdown(report);
      const reportStatus = {
        ...(report || {}),
        json_status: report?.json_status || "missing",
        markdown_status: report?.markdown_status || "missing",
      };
      const entryReady = entry ? isHistoryEntryReady(entry, markdownText) : false;
      const ready = entryReady || isReportReady(reportStatus);
      const jsonStatus = entry && isHistoryEntryReady(entry, markdownText) ? "ok" : report?.json_status || "missing";
      return {
        ...(report || {}),
        key,
        report_type: key,
        label: report?.label || entry?.label || REPORT_LABELS[key] || key,
        json_status: ready ? (jsonStatus || "ok") : "missing",
        markdown_status: ready ? (report?.markdown_status || "ok") : "missing",
        markdown: {
          ...(report?.markdown || {}),
          exists: ready,
          full_text: markdownText || reportMarkdown(report),
          excerpt: markdownText ? truncateText(markdownText, 220) : (report?.markdown?.excerpt || ""),
        },
      };
    });
  }
  return REPORT_ORDER.map((key) => {
    const entry = byKey.get(key);
    return entry ? reportFromHistoryEntry(entry) : {
      key,
      report_type: key,
      label: REPORT_LABELS[key],
      json_status: "missing",
      markdown_status: "missing",
      candidate_count: 0,
      handoff_count: 0,
      markdown: { headings: [] },
    };
  });
}

function isHistoryDateFallbackActive() {
  return Boolean(
    selectedPanelDate
    && selectedPanelDate !== state.run?.date
    && hasHistoryEntriesForDate(selectedPanelDate)
    && !historyPanelStatePayload(selectedPanelDate)
  );
}

function shouldShowCandidateWarningsForNode(node) {
  const id = String(node?.id || "");
  const title = String(node?.title_cn || "");
  return /candidate|technical|score|handoff|verify|execution|intraday|previous|morning_verify|afternoon|filter/i.test(`${id} ${title}`);
}

function orderedReports() {
  const historyReports = selectedHistoryReports();
  if (historyReports.length) return historyReports;
  const reports = Array.isArray(state.reports) ? state.reports : [];
  const byKey = new Map(reports.map((report) => [normalizeReportKey(report.key || report.report_type), report]));
  const normalized = REPORT_ORDER.map((key) => byKey.get(key) || {
    key,
    label: REPORT_LABELS[key],
    json_status: "missing",
    markdown_status: "missing",
    candidate_count: 0,
    handoff_count: 0,
    markdown: { headings: [] },
  });
  reports.forEach((report) => {
    const key = normalizeReportKey(report.key || report.report_type);
    if (!REPORT_ORDER.includes(key)) normalized.push(report);
  });
  return normalized;
}

  function reportMarkdown(report) {
    if (!report) return "";
    if (typeof report.markdown === "string") return report.markdown;
    return report.markdown?.full_text
      || report.markdown?.text
    || report.markdown?.content
    || report.markdown?.body
    || report.markdown_text
      || "";
  }

  function reportFocusMarkdown(report) {
    if (!report || typeof report.markdown === "string") return reportMarkdown(report);
    return report.markdown?.focus_text || reportMarkdown(report);
  }

function extractSectionText(markdown, patterns) {
  const lines = String(markdown || "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const start = lines.findIndex((line) => patterns.some((pattern) => pattern.test(line)));
  const slice = start >= 0 ? lines.slice(start + 1) : lines;
  const useful = slice.find((line) => !/^#{1,6}\s*/.test(line) && !/^【.+】$/.test(line));
  return useful || lines.find((line) => !/^#{1,6}\s*/.test(line)) || "";
}

function cleanReportLine(line) {
  return String(line || "")
    .replace(/^[-*•]\s*/, "")
    .replace(/^#{1,6}\s*/, "")
    .trim();
}

function extractSectionLines(markdown, patterns, limit = 40) {
  const lines = String(markdown || "").split(/\r?\n/).map((line) => line.trim());
  const start = lines.findIndex((line) => patterns.some((pattern) => pattern.test(cleanReportLine(line))));
  if (start < 0) return [];
  const result = [];
  for (const raw of lines.slice(start + 1)) {
    const line = cleanReportLine(raw);
    if (!line) continue;
    if (/^【.+】$/.test(line) || /^#{1,6}/.test(raw.trim())) break;
    result.push(line);
    if (result.length >= limit) break;
  }
  return result;
}

function valueAfterColon(line) {
  const text = cleanReportLine(line);
  const index = text.search(/[：:]/);
  return index >= 0 ? text.slice(index + 1).trim() : text;
}

function findLineValue(lines, pattern, fallback = "未记录") {
  const line = lines.find((item) => pattern.test(item));
  return line ? valueAfterColon(line) : fallback;
}

function findLineValues(lines, pattern, fallback = "无") {
  const matched = lines.filter((item) => pattern.test(item)).map(valueAfterColon).filter(Boolean);
  return matched.length ? matched : [fallback];
}

function deriveTodayJudgement() {
  const sourceState = panelStateForView();
  if (sourceState.beginner?.today_judgement || sourceState.beginner?.today_title) {
    return {
      title: sourceState.beginner?.today_title || "以报告结论为准",
      text: sourceState.beginner?.today_judgement || "",
    };
  }

  const reports = orderedReports();
  const closeReport = reports.find((report) => normalizeReportKey(report.key || report.report_type) === "close" && isReportReady(report));
  const currentReport = reports.find((report) => normalizeReportKey(report.key || report.report_type) === normalizeReportKey(panelStateForView().run?.period) && isReportReady(report));
  const source = closeReport || currentReport || reports.find(isReportReady) || reports[0];
  const markdown = reportMarkdown(source);
  const text = truncateText(extractSectionText(markdown, [/今日总判断/, /结论/, /上午验证结论/, /复盘对象/]), 180);

  let title = "以报告结论为准";
  if (/不输出|不买|不给|不能|不可|不得|禁止|只观察|观察|观望|不追高/.test(text)) title = "观察为主，不追高";
  if (/复盘|归因|不做当下推荐/.test(text)) title = "复盘归因，不给新票";
  if (/买入\s*Top3|输出买入|可参与/.test(text) && !/不输出|不买|不给|不能|不可|不得|禁止/.test(text)) title = "允许关注候选";

  return {
    title,
    text: text || "暂无明确总判断，请先生成或加载今天的报告状态。",
  };
}

function compactStockName(candidate) {
  const name = String(candidate?.name || "").trim();
  const symbol = String(candidate?.symbol || "").trim();
  if (name && symbol) return `${name} / ${symbol}`;
  return name || symbol || "未命名";
}

function candidateTier(candidate) {
  const tier = String(candidate?.observation_tier || candidate?.strategy_group || "").toLowerCase();
  const tag = String(candidate?.tag || "").toLowerCase();
  const decision = String(candidate?.decision || "").toLowerCase();
  if (tier.includes("buy_top3") || tier.includes("formal_top3") || tag.includes("top3") || decision === "buy") return "buy";
  if (tier.includes("a_watch") || tier.includes("theme_watch") || tag === "a") return "watch";
  if (tier.includes("b_watch") || tier.includes("technical_watch") || tag === "b") return "technical";
  if (tier.includes("score_front") || tier.includes("rejected")) return "score";
  return "other";
}

function heroPickLine(label, candidates, emptyText) {
  const text = candidates.length ? candidates.map(compactStockName).join("、") : emptyText;
  return `
    <div class="hero-pick-row">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(text)}</strong>
    </div>
  `;
}

function visibilityAuditText() {
  const audit = panelStateForView()?.visibility_audit || {};
  if (!audit.selection_locked_at && !audit.web_visible_at && !audit.web_current_state_visible_at) return "";
  const preheat = shortTimeText(audit.preheat_reference_time);
  const locked = shortTimeText(audit.selection_locked_at);
  const visible = shortTimeText(audit.web_visible_at || audit.web_current_state_visible_at || audit.web_current_state_exported_at || audit.web_panel_state_exported_at);
  return `预热 ${preheat}；锁定基准 ${locked}；面板可见 ${visible}`;
}

  function heroTextRow(label, values) {
    const valueList = (Array.isArray(values) ? values : [values]).filter(Boolean);
    const valueHtml = valueList.map((item) => `<b>${escapeHtml(item)}</b>`).join("");
    return `
      <div class="hero-pick-row">
        <span>${escapeHtml(label)}</span>
        <strong>${valueHtml}</strong>
      </div>
    `;
  }

function heroReportSource() {
  const reports = orderedReports();
  const activeKey = activeWorkflowReportKey();
  const active = reports.find((report) => normalizeReportKey(report.key || report.report_type) === activeKey && isReportReady(report));
  const current = reports.find((report) => normalizeReportKey(report.key || report.report_type) === normalizeReportKey(panelStateForView().run?.period) && isReportReady(report));
  const close = reports.find((report) => normalizeReportKey(report.key || report.report_type) === "close" && isReportReady(report));
  return active || current || close || reports.find(isReportReady) || null;
}

function heroRowsFromReport() {
    const markdown = reportFocusMarkdown(heroReportSource());
  const sourceLines = extractSectionLines(markdown, [/候选来源/], 20);
  const layerLines = extractSectionLines(markdown, [/自选股池强弱分层/], 40);
  const rows = [];
  if (sourceLines.length) {
    rows.push(`<div class="hero-picks-title">候选来源方向</div>`);
    rows.push(heroTextRow("今天先看", findLineValue(sourceLines, /^今天先看大方向/, "未记录")));
    rows.push(heroTextRow("轮动方向", findLineValue(sourceLines, /^轮动方向/, "未记录")));
    rows.push(heroTextRow("暂不主线", findLineValue(sourceLines, /^暂不当主线看的方向/, "未记录")));
  }
  if (layerLines.length) {
    rows.push(`<div class="hero-picks-title hero-picks-title-gap">自选股强弱分层</div>`);
    rows.push(heroTextRow("正式买入", findLineValues(layerLines, /^正式买入\s*Top3(?:-\d+)?[：:]/, "无")));
    rows.push(heroTextRow("题材观察", findLineValues(layerLines, /^题材观察-\d+[：:]/, "无")));
    rows.push(heroTextRow("技术观察", findLineValues(layerLines, /^技术观察(?:-\d+)?[：:]/, "无")));
  }
  return rows;
}

function candidateSourceData() {
  const sourceState = panelStateForView();
  const context = sourceState?.candidate_source_context;
  const structuredCards = [];
  if (context && typeof context === "object") {
    if (context.mainline_display) structuredCards.push({ label: "今天先看", value: context.mainline_display, tone: "primary" });
    if (context.secondary_display) structuredCards.push({ label: "轮动方向", value: context.secondary_display, tone: "rotate" });
    if (context.avoid_display) structuredCards.push({ label: "暂不主线", value: context.avoid_display, tone: "avoid" });
    if (context.execution_display) structuredCards.push({ label: "执行票落点", value: context.execution_display, tone: "primary" });
    if (context.catalyst_timing_label) structuredCards.push({ label: "催化时效", value: context.catalyst_timing_label, tone: "rotate" });
  }
  if (structuredCards.length) {
    return {
      cards: structuredCards,
      relationLabel: context.execution_relation_label || "主线 vs 执行票",
      relationDetail: context.execution_relation_detail || "",
      timingDetail: context.catalyst_timing_detail || "",
      selectionRule: context.selection_rule_display || "",
    };
  }
  const markdown = reportFocusMarkdown(heroReportSource());
  const sourceLines = extractSectionLines(markdown, [/候选来源/], 20);
  if (!sourceLines.length) {
    return {
      cards: [],
      relationLabel: "主线 vs 执行票",
      relationDetail: "",
      timingDetail: "",
      selectionRule: "",
    };
  }
  return {
    cards: [
      {
        label: "今天先看",
        value: findLineValue(sourceLines, /^今天先看大方向/, "未记录"),
        tone: "primary",
      },
      {
        label: "轮动方向",
        value: findLineValue(sourceLines, /^轮动方向/, "未记录"),
        tone: "rotate",
      },
      {
        label: "暂不主线",
        value: findLineValue(sourceLines, /^暂不当主线看的方向/, "未记录"),
        tone: "avoid",
      },
      {
        label: "执行票落点",
        value: findLineValue(sourceLines, /^实际执行票落在/, "未记录"),
        tone: "primary",
      },
    ],
    relationLabel: "主线 vs 执行票",
    relationDetail: findLineValue(sourceLines, /^实际执行票落在/, ""),
    timingDetail: "",
    selectionRule: "",
  };
}

function renderCandidateSourceStrip() {
  const sourceData = candidateSourceData();
  const sourceItems = Array.isArray(sourceData?.cards) ? sourceData.cards.filter((item) => item?.value) : [];
  if (!sourceItems.length && !sourceData?.relationDetail && !sourceData?.selectionRule) return "";
  return `
    <section class="hero-source-board">
      <div class="hero-board-title">
        <span>候选来源方向</span>
        <em>先看方向，再看四层票池</em>
      </div>
      <div class="hero-source-grid">
        ${sourceItems.map((item) => `
          <article class="hero-source-card ${escapeHtml(item.tone)}">
            <span>${escapeHtml(item.label)}</span>
            <strong>${escapeHtml(item.value)}</strong>
          </article>
        `).join("")}
      </div>
      ${sourceData?.relationDetail || sourceData?.timingDetail || sourceData?.selectionRule ? `
        <div class="hero-source-notes">
          ${sourceData?.relationDetail ? heroTextRow(sourceData.relationLabel || "主线 vs 执行票", sourceData.relationDetail) : ""}
          ${sourceData?.timingDetail ? heroTextRow("催化时效说明", sourceData.timingDetail) : ""}
          ${sourceData?.selectionRule ? heroTextRow("选票规则", sourceData.selectionRule) : ""}
        </div>
      ` : ""}
    </section>
  `;
}

function layerItemsFromLines(lines, pattern, fallback = "无") {
  const values = findLineValues(lines, pattern, fallback)
    .map((item) => cleanReportLine(item).replace(/[。；;]\s*$/, "").trim())
    .filter(Boolean);
  if (!values.length || values.every((item) => item === "无")) return [];
  return values;
}

function fourLayerSourceLines() {
  const markdown = reportFocusMarkdown(heroReportSource());
  return extractSectionLines(markdown, [/自选股池强弱分层/], 80);
}

const FOUR_LAYER_CARD_DEFS = [
  {
    key: "formal",
    strategyGroup: "formal_top3",
    title: "正式买入 Top3",
    label: "正式收益",
    tone: "formal",
    index: 1,
    empty: "无正式买入对象",
    subtitle: "已执行买入，进入正式收益统计",
    usageTitle: "用途：正式收益",
    usage: "纳入正式组合，只统计收益曲线",
    displayLimit: 3,
    linePattern: /^正式买入\s*Top3(?:-\d+)?[：:]/,
  },
  {
    key: "openDrive",
    strategyGroup: "open_drive_watch",
    title: "早盘驱动观察",
    label: "早盘旁路",
    tone: "open-drive",
    index: 2,
    empty: "无早盘驱动观察样本",
    subtitle: "早盘驱动未完全兑现，只观察",
    usageTitle: "用途：早盘驱动验证",
    usage: "验证竞价/早盘资金动作未完全兑现样本，不作为买入依据",
    displayLimit: 3,
    linePattern: /^早盘驱动观察-\d+[：:]/,
  },
  {
    key: "limitWatch",
    strategyGroup: "overnight_limit_watch",
    title: "隔夜涨停观察",
    label: "涨停旁路",
    tone: "limit-watch",
    index: 3,
    empty: "无隔夜涨停观察样本",
    subtitle: "攻击预演 + 承接未坏，只观察",
    usageTitle: "用途：涨停预演验证",
    usage: "验证次日涨停/大阳概率，不作为买入依据",
    displayLimit: 3,
    linePattern: /^隔夜涨停观察-\d+[：:]/,
  },
  {
    key: "rotation",
    strategyGroup: "theme_rotation_watch",
    title: "题材轮动观察",
    label: "轮动旁路",
    tone: "rotation",
    index: 4,
    empty: "无题材轮动观察样本",
    subtitle: "资金切到新分支，只观察",
    usageTitle: "用途：轮动验证",
    usage: "验证板块/题材内部资金切换和次日兑现，不作为买入依据",
    displayLimit: 3,
    linePattern: /^题材轮动观察-\d+[：:]/,
  },
  {
    key: "reflow",
    strategyGroup: "low_reflow_watch",
    title: "低位回流观察",
    label: "回流旁路",
    tone: "reflow",
    index: 6,
    empty: "无低位回流观察样本",
    subtitle: "低位回流二次确认，只观察",
    usageTitle: "用途：回流验证",
    usage: "验证调整后资金回流样本，不作为买入依据",
    displayLimit: 3,
    linePattern: /^低位回流观察-\d+[：:]/,
  },
  {
    key: "theme",
    strategyGroup: "a_theme_watch",
    title: "题材观察",
    label: "旁路观察",
    tone: "theme",
    index: 7,
    empty: "无题材观察样本",
    subtitle: "只观察，不作为买入依据",
    usageTitle: "用途：旁路观察",
    usage: "跟踪题材扩散和兑现，不计入收益",
    displayLimit: 3,
    linePattern: /^题材观察-\d+[：:]/,
  },
  {
    key: "score",
    strategyGroup: "score_front_rejected",
    title: "候选评分前排",
    label: "遗漏复盘",
    tone: "score",
    index: 8,
    empty: "无评分前排样本",
    subtitle: "评分靠前但未进入 Top3",
    usageTitle: "用途：遗漏复盘",
    usage: "分析高分票是否可转正式样本",
    displayLimit: 3,
    linePattern: /^候选评分前排-\d+[：:]/,
  },
  {
    key: "technical",
    strategyGroup: "b_technical_watch",
    title: "技术观察",
    label: "技术验证",
    tone: "technical",
    index: 9,
    empty: "无技术观察样本",
    subtitle: "技术或资金线索，不作为买入依据",
    usageTitle: "用途：技术验证",
    usage: "验证技术/资金信号有效性",
    displayLimit: 2,
    linePattern: /^技术观察(?:-\d+)?[：:]/,
  },
];
const WEB_PANEL_HIDDEN_STRATEGY_GROUPS = new Set(["score_front_rejected"]);
const WEB_PANEL_HIDDEN_STRATEGY_DASHBOARD_GROUPS = new Set([
  ...WEB_PANEL_HIDDEN_STRATEGY_GROUPS,
  "a_theme_watch",
  "daily_one_pick",
]);

function visibleFourLayerCardDefs() {
  return FOUR_LAYER_CARD_DEFS
    .filter((def) => !WEB_PANEL_HIDDEN_STRATEGY_GROUPS.has(def.strategyGroup))
    .map((def, index) => ({ ...def, index: index + 1 }));
}

function fourLayerTrackingPayload() {
  const sourceState = panelStateForView();
  const byPeriod = sourceState?.four_layer_tracking_by_period;
  const activeKey = activeWorkflowReportKey();
  const panelHash = String(window.location.hash || "").replace(/^#/, "");
  const payloadMode = String(sourceState?.panel_payload_mode || "");
  const forceReviewPayload = activePanelJumpId === "traderReviewWorkbenchBand" || panelHash === "traderReviewWorkbenchBand";
  const selectedPayload = byPeriod && typeof byPeriod === "object"
    ? (forceReviewPayload && Array.isArray(byPeriod.review?.records) ? byPeriod.review : byPeriod[activeKey])
    : null;
  const fallbackPayload = sourceState?.four_layer_tracking;
  if (!selectedPayload && fallbackPayload && !byPeriod) {
    const fallbackPeriod = normalizeReportKey(fallbackPayload.period || sourceState?.run?.period || "");
    const allowLiteReviewFallback = payloadMode === "lite" && activeKey === "review" && fallbackPeriod === "close";
    if (fallbackPeriod && activeKey && fallbackPeriod !== activeKey && !allowLiteReviewFallback) return null;
  }
  const payload = selectedPayload || fallbackPayload;
  if (!payload || !Array.isArray(payload.records)) return null;
  return payload;
}

function currentPanelPeriod() {
  const source = panelStateForView();
  const selectedPayload = fourLayerTrackingPayload();
  return normalizeReportKey(selectedPayload?.period || source?.run?.period || state.run?.period || "");
}

function decorateFourLayerCardForPeriod(def) {
  const period = currentPanelPeriod();
  if (def.key !== "formal") return def;
  if (period === "morning") {
    return {
      ...def,
      title: "昨日尾盘模拟持仓",
      empty: "无昨日模拟持仓",
      subtitle: "昨天已买，早报只复核继续持有、减仓或退出",
      usageTitle: "用途：正式持仓复核",
      usage: "保留正式收益统计，不代表早报重新买入",
    };
  }
  if (period === "noon") {
    return {
      ...def,
      title: "模拟持仓上午跟踪",
      empty: "无模拟持仓",
      subtitle: "跟踪昨日尾盘已买对象上午兑现情况",
      usageTitle: "用途：午间持仓处理",
      usage: "只做持仓复核，不在午报重新选股",
    };
  }
  if (period === "review") {
    return {
      ...def,
      title: "昨日模拟持仓复盘",
      empty: "无模拟持仓",
      subtitle: "复盘昨日尾盘已买对象今天赚亏和错因",
      usageTitle: "用途：收益归因",
      usage: "只复盘已买对象，不反向改当天选股",
    };
  }
  return def;
}

function visibleFourLayerItems(records, def) {
  const allItems = records.filter((item) => String(item?.strategy_group || "") === def.strategyGroup);
  const preferredItems = allItems.filter((item) => (
    item?.display_tracking_eligible === true ||
    item?.formal_return_eligible === true ||
    item?.side_channel_return_eligible === true ||
    item?.side_channel_return_scope === "panel_front_sample"
  ));
  const sourceItems = preferredItems.length ? preferredItems : allItems;
  return {
    allItems,
    items: sourceItems.slice(0, def.displayLimit || 3),
  };
}

function fourLayerRecordStatusText(status, item = {}) {
  const normalized = String(status || "").toLowerCase();
  if (normalized === "cancelled" && (item.formal_return_eligible === false || item.side_channel_return_eligible === true)) {
    return "旁路观察";
  }
  return {
    verified: "已验证",
    tracked: "跟踪中",
    cancelled: "已取消",
    price_missing: "缺价格",
    missed_strong_move: "疑似漏强",
    false_positive: "疑似假强",
    no_pick: "无票",
  }[normalized] || "";
}

function numericValue(value) {
  if (value === null || value === undefined || value === "") return null;
  const number = Number(String(value).replace("%", "").replace(",", "").trim());
  return Number.isFinite(number) ? number : null;
}

function shortTimeText(value) {
  const text = String(value || "").trim();
  const match = text.match(/T(\d{2}:\d{2})(?::\d{2})?/);
  return match ? match[1] : (text || "--");
}

function normalizedScoreValue(item) {
  const explicit = numericValue(item?.unified_score ?? item?.normalized_score);
  if (explicit !== null) return explicit;
  const raw = numericValue(item?.score);
  if (raw === null) return null;
  return raw >= 0 && raw <= 1 ? raw * 100 : raw;
}

function scoreDisplayText(item) {
  const display = normalizedScoreValue(item);
  if (display === null) return "";
  const raw = numericValue(item?.source_score ?? item?.score);
  const displayText = `统一分 ${display.toFixed(1)}`;
  if (raw !== null && raw >= 0 && raw <= 1) return `${displayText}（排序原分 ${raw.toFixed(3)}）`;
  return displayText;
}

function normalizeSymbolText(value) {
  const digits = String(value || "").replace(/[^0-9]/g, "");
  return digits.length >= 6 ? digits.slice(-6) : String(value || "").trim();
}

function formatReturnPercent(value) {
  const number = numericValue(value);
  if (number === null) return "待次日验证";
  const percent = number * 100;
  const prefix = percent > 0 ? "+" : "";
  return `${prefix}${percent.toFixed(2)}%`;
}

function returnToneClass(value) {
  const number = numericValue(value);
  if (number === null) return "pending";
  if (number > 0) return "positive";
  if (number < 0) return "negative";
  return "flat";
}

function paperTradePayloadFromState(sourceState) {
  const payload = sourceState?.paper_trade;
  if (!payload || typeof payload !== "object") return null;
  return payload;
}

function paperTradePayloadsFromState(sourceState) {
  const payloads = [];
  const primary = paperTradePayloadFromState(sourceState);
  if (primary) payloads.push(primary);
  const related = Array.isArray(primary?.related_payloads) ? primary.related_payloads : [];
  related.forEach((payload) => {
    if (payload && typeof payload === "object") payloads.push(payload);
  });
  return payloads;
}

function allHistoryPanelStates() {
  const detail = historyDetailPayload();
  const container = detail?.dates && typeof detail.dates === "object" ? detail.dates : detail;
  const states = selectedPanelState ? [selectedPanelState] : [];
  if (!container || typeof container !== "object") return states;
  return states.concat(Object.values(container)
    .map((item) => item?.panel_state || item?.web_panel_state || item?.state)
    .filter((item) => item && typeof item === "object"));
}

function paperTradeOwnPayloadForDate(date) {
  const sourceState = date === state.run?.date ? state : historyPanelStatePayload(date);
  return paperTradePayloadFromState(sourceState);
}

function paperTradeReturnPayloadForDate(date) {
  if (!date) return null;
  const states = [state, ...allHistoryPanelStates()];
  const sourced = states
    .flatMap(paperTradePayloadsFromState)
    .filter((payload) => payload && payload.source_close_date === date);
  const payloadPriority = (payload) => {
    const scope = String(payload?.artifact_scope || "");
    if (scope === "review") return 0;
    if (scope === "canonical") return 1;
    if (scope === "close") return 2;
    return 3;
  };
  const withT1 = sourced.find((payload) => {
    const records = Array.isArray(payload.records) ? payload.records : [];
    return records.some((record) => numericValue(record?.t1_return) !== null);
  });
  const sortedWithT1 = sourced
    .filter((payload) => {
      const records = Array.isArray(payload.records) ? payload.records : [];
      return records.some((record) => numericValue(record?.t1_return) !== null);
    })
    .sort((a, b) => payloadPriority(a) - payloadPriority(b));
  if (sortedWithT1.length) return sortedWithT1[0];
  if (withT1) return withT1;
  const withSameDay = sourced.find((payload) => {
    const records = Array.isArray(payload.records) ? payload.records : [];
    return records.some((record) => numericValue(record?.same_day_return) !== null);
  });
  if (withSameDay) return withSameDay;
  const own = paperTradeOwnPayloadForDate(date);
  if (own && own.ledger_matches_selected_close !== false) return own;
  return null;
}

function paperTradeRecordFor(symbol, strategyGroup, payload) {
  const normalizedSymbol = normalizeSymbolText(symbol);
  if (!normalizedSymbol || !payload) return null;
  const records = Array.isArray(payload.records)
    ? payload.records
    : (Array.isArray(payload.formal_records) ? payload.formal_records : []);
  return records.find((record) => {
    const recordSymbol = normalizeSymbolText(record?.symbol);
    const recordGroup = String(record?.strategy_group || "");
    return recordSymbol === normalizedSymbol && (!strategyGroup || recordGroup === strategyGroup);
  }) || null;
}

function closeFormalTargetsFromMarkdown(reports) {
  const close = reports.find((report) => normalizeReportKey(report.key || report.report_type) === "close") || {};
  const lines = extractSectionLines(reportFocusMarkdown(close), [/自选股池强弱分层/], 80);
  return lines
    .filter((line) => /^正式买入\s*Top3(?:-\d+)?[：:]/.test(line))
    .map((line) => {
      const value = valueAfterColon(line);
      const [head] = value.split(/[，,]/);
      const [nameRaw, symbolRaw] = String(head || "").split(/\s*\/\s*/);
      return {
        name: (nameRaw || "").trim(),
        symbol: normalizeSymbolText(symbolRaw),
        strategy_group: "formal_top3",
      };
    })
    .filter((item) => item.name || item.symbol);
}

function paperTradeTargetsForDate(date, reports) {
  const own = paperTradeOwnPayloadForDate(date);
  const targets = Array.isArray(own?.formal_targets) ? own.formal_targets : [];
  if (targets.length) return targets;
  const ownRecords = Array.isArray(own?.formal_records) ? own.formal_records : [];
  if (ownRecords.length && own?.ledger_matches_selected_close !== false) return ownRecords;
  return closeFormalTargetsFromMarkdown(reports);
}

function paperTradeRowsForDate(date, reports) {
  const targets = paperTradeTargetsForDate(date, reports);
  const returnPayload = paperTradeReturnPayloadForDate(date) || paperTradeOwnPayloadForDate(date);
  return targets.map((target) => {
    const symbol = normalizeSymbolText(target.symbol || target.code);
    const record = paperTradeRecordFor(symbol, "formal_top3", returnPayload);
    const t1Value = numericValue(record?.t1_return);
    const sameDayValue = numericValue(record?.same_day_return);
    const returnValue = t1Value !== null ? t1Value : sameDayValue;
    const countedInAverage = !record || record.counted_in_formal_return !== false;
    const excludedReason = record && countedInAverage === false
      ? (record.verification_status === "morning_cancelled" ? "早报取消，不计入均值" : "未计入正式均值")
      : "";
    return {
      name: target.name || record?.name || symbol || "未命名",
      symbol,
      returnValue,
      returnLabel: t1Value !== null ? "隔天盈亏" : (sameDayValue !== null ? "当日盈亏" : "收益状态"),
      returnText: formatReturnPercent(returnValue),
      tone: returnToneClass(returnValue),
      countedInAverage,
      excludedReason,
    };
  });
}

function historyPaperTradeRowsHtml(rows) {
  if (!rows.length) {
    return `<p class="history-return-empty">没有正式买入样本。</p>`;
  }
  return rows.map((row) => `
    <div class="history-return-row">
      <span>${escapeHtml(row.name)}${row.symbol ? ` / ${escapeHtml(row.symbol)}` : ""}</span>
      <em>${escapeHtml(row.returnLabel || "收益")}</em>
      <strong class="history-return-pnl ${escapeHtml(row.tone)}">${escapeHtml(row.returnText)}</strong>
      ${row.excludedReason ? `<small>${escapeHtml(row.excludedReason)}</small>` : ""}
    </div>
  `).join("");
}

function averageReturnText(rows) {
  const values = rows
    .filter((row) => row.countedInAverage !== false)
    .map((row) => row.returnValue)
    .filter((value) => numericValue(value) !== null);
  if (values.length) {
    const avg = values.reduce((sum, value) => sum + Number(value), 0) / values.length;
    return formatReturnPercent(avg);
  }
  if (rows.some((row) => numericValue(row.returnValue) !== null)) return "无计入样本";
  return rows.length ? "待次日验证" : "无买入样本";
}

function shortDateTimeText(value) {
  const text = String(value || "").trim();
  const match = text.match(/^(\d{4}-\d{2}-\d{2})[T\s](\d{2}:\d{2})/);
  return match ? `${match[1]} ${match[2]}` : text;
}

function fourLayerReturnScopeText(scope) {
  const labels = {
    formal: "正式收益范围",
    side_channel: "旁路收益范围",
    legacy_next_day_change: "旧历史次日涨跌",
    not_return_eligible: "不计收益",
    pending: "待回填",
  };
  return labels[String(scope || "")] || scope || "未标注收益范围";
}

function fourLayerReviewReturnInfo(item, card) {
  const period = String(item?._tracking_period || item?.source_period || item?.period || "").toLowerCase();
  const panelHash = String(window.location.hash || "").replace(/^#/, "");
  const sourceState = panelStateForView();
  const viewDate = selectedPanelDate || sourceState?.run?.date || state.run?.date || "";
  const viewingHistoricalDate = Boolean(selectedPanelDate && selectedPanelDate !== state.run?.date);
  const forceReviewReturn = activePanelJumpId === "traderReviewWorkbenchBand" || panelHash === "traderReviewWorkbenchBand" || viewingHistoricalDate;
  const ownMetrics = item?.return_metrics && typeof item.return_metrics === "object" ? item.return_metrics : {};
  const ownT1Value = numericValue(ownMetrics.t1_return ?? item?.t1_return);
  if (period === "review" && ownT1Value !== null) {
    return {
      label: "隔天盈亏",
      text: formatReturnPercent(ownT1Value),
      tone: returnToneClass(ownT1Value),
    };
  }
  if (period !== "review" && !forceReviewReturn) return null;
  const symbol = normalizeSymbolText(item?.symbol);
  const group = String(card?.strategyGroup || item?.strategy_group || "");
  if (!symbol || !group) return null;
  const reviewRecords = Array.isArray(sourceState?.four_layer_tracking_by_period?.review?.records)
    ? sourceState.four_layer_tracking_by_period.review.records
    : [];
  const crossDateReturnPayload = paperTradeReturnPayloadForDate(viewDate);
  const candidates = [
    reviewRecords.find((record) => normalizeSymbolText(record?.symbol) === symbol && String(record?.strategy_group || "") === group),
    paperTradeRecordFor(symbol, group, crossDateReturnPayload),
    ...paperTradePayloadsFromState(sourceState)
      .filter((payload) => String(payload?.artifact_scope || "") === "review")
      .map((payload) => paperTradeRecordFor(symbol, group, payload))
      .filter(Boolean),
  ].filter(Boolean);
  for (const record of candidates) {
    const metrics = record?.return_metrics && typeof record.return_metrics === "object" ? record.return_metrics : {};
    const value = numericValue(metrics.t1_return ?? record?.t1_return);
    if (value !== null) {
      return {
        label: "隔天盈亏",
        text: formatReturnPercent(value),
        tone: returnToneClass(value),
      };
    }
  }
  return null;
}

function fourLayerMetricReturnInfo(item, card = null) {
  const reviewInfo = fourLayerReviewReturnInfo(item, card);
  if (reviewInfo) return reviewInfo;
  const metrics = item?.return_metrics && typeof item.return_metrics === "object" ? item.return_metrics : null;
  if (!metrics) return null;
  const intradayValue = numericValue(metrics.intraday_return);
  const t1Value = numericValue(metrics.t1_return);
  const sameDayValue = numericValue(metrics.same_day_return);
  const value = intradayValue !== null ? intradayValue : (t1Value !== null ? t1Value : sameDayValue);
  if (value === null) return null;
  const basis = String(metrics.return_basis || "");
  const intradayLabel = basis === "morning_snapshot" ? "早盘盈亏" : (basis === "noon_snapshot" ? "午盘盈亏" : "盘中盈亏");
  return {
    label: intradayValue !== null ? intradayLabel : (t1Value !== null ? "隔天盈亏" : "当日盈亏"),
    text: formatReturnPercent(value),
    tone: returnToneClass(value),
  };
}

function fourLayerFallbackReturnInfo(item, card) {
  const parsed = layerItemParts(item);
  const symbol = normalizeSymbolText(item?.symbol || parsed.symbol);
  const viewDate = selectedPanelDate || panelStateForView().run?.date || state.run?.date || "";
  const sourceState = panelStateForView();
  const payloadCandidates = [
    paperTradeReturnPayloadForDate(viewDate),
    ...paperTradePayloadsFromState(sourceState),
  ].filter(Boolean);
  const payload = payloadCandidates.find((candidate) => paperTradeRecordFor(symbol, card.strategyGroup, candidate)) || payloadCandidates[0];
  const snapshotChange = numericValue(item?.latest_snapshot?.change_pct);
  const legacyText = String(item?.legacy_next_day_change_text || "");
  if (!payload || payload.status === "missing") {
    if (snapshotChange !== null) {
      const prefix = snapshotChange > 0 ? "+" : "";
      return { label: "当日涨跌", text: `${prefix}${snapshotChange.toFixed(2)}%`, tone: returnToneClass(snapshotChange / 100) };
    }
    if (legacyText) return { label: "次日涨跌", text: legacyText, tone: returnToneClass(item.legacy_next_day_change_pct) };
    return { label: "收益记录", text: "旧历史未记录", tone: "pending" };
  }
  const record = paperTradeRecordFor(symbol, card.strategyGroup, payload);
  if (!record) {
    if (snapshotChange !== null) {
      const prefix = snapshotChange > 0 ? "+" : "";
      return { label: "当日涨跌", text: `${prefix}${snapshotChange.toFixed(2)}%`, tone: returnToneClass(snapshotChange / 100) };
    }
    if (legacyText) return { label: "次日涨跌", text: legacyText, tone: returnToneClass(item.legacy_next_day_change_pct) };
    return { label: "收益记录", text: "未纳入账本", tone: "pending" };
  }
  const t1Value = numericValue(record?.t1_return);
  const sameDayValue = numericValue(record?.same_day_return);
  const value = t1Value !== null ? t1Value : sameDayValue;
  return {
    label: t1Value !== null ? "隔天盈亏" : (sameDayValue !== null ? "当日盈亏" : "隔天盈亏"),
    text: formatReturnPercent(value),
    tone: returnToneClass(value),
  };
}

function fourLayerReturnText(item, card) {
  const metricInfo = fourLayerMetricReturnInfo(item, card);
  const fallbackInfo = metricInfo || fourLayerFallbackReturnInfo(item, card);
  const return_status = sanitizeBeginnerText(item?.return_status || "");
  const return_scope = String(item?.return_scope || "");
  const missing_reason = sanitizeBeginnerText(item?.missing_reason || asList(item?.return_metrics?.missing_reasons).join("；"));
  const freshness = sanitizeBeginnerText(item?.freshness || "");
  const source_mtime = shortDateTimeText(item?.source_mtime || "");
  const historical = Boolean(item?.historical_backfill || return_scope === "legacy_next_day_change" || return_status.includes("历史回填"));
  const showSnapshotChange = !metricInfo && fallbackInfo?.label === "当日涨跌" && fallbackInfo?.text;
  const text = metricInfo?.text
    || item?.legacy_next_day_change_text
    || (showSnapshotChange ? fallbackInfo.text : "")
    || missing_reason
    || fallbackInfo.text
    || return_status
    || "待回填";
  return {
    ...fallbackInfo,
    label: showSnapshotChange ? "当前涨跌" : (metricInfo?.label || return_status || fallbackInfo.label),
    text,
    tone: metricInfo?.tone || (showSnapshotChange ? fallbackInfo.tone : (return_scope === "pending" ? "pending" : fallbackInfo.tone)),
    status: metricInfo?.label || return_status || fallbackInfo.label,
    scope: fourLayerReturnScopeText(return_scope),
    missing: missing_reason,
    freshness: [historical ? "历史回填" : freshness, source_mtime ? `来源 ${source_mtime}` : ""].filter(Boolean).join(" · "),
  };
}

function fourLayerCardsFromTracking(payload) {
  const records = Array.isArray(payload?.records) ? payload.records : [];
  const trackingPeriod = String(payload?.period || "").toLowerCase();
  const closeRecords = Array.isArray(panelStateForView()?.four_layer_tracking_by_period?.close?.records)
    ? panelStateForView().four_layer_tracking_by_period.close.records
    : [];
  const allowReviewCloseReplay = String(payload?.period || "").toLowerCase() === "review" && closeRecords.length > 0;
  return visibleFourLayerCardDefs().map((def) => {
    const decorated = decorateFourLayerCardForPeriod(def);
    let { allItems, items } = visibleFourLayerItems(records, def);
    if (allowReviewCloseReplay && def.strategyGroup !== "formal_top3" && allItems.length === 0) {
      const replay = visibleFourLayerItems(closeRecords, def);
      allItems = replay.allItems;
      items = replay.items;
    }
    items = items.map((item) => ({ ...item, _tracking_period: trackingPeriod || String(item?.source_period || "").toLowerCase() }));
    return {
      ...decorated,
      items,
      rawCount: allItems.length,
    };
  });
}

function fourLayerReportData() {
  const tracking = fourLayerTrackingPayload();
  if (tracking) {
    const coverage = tracking.tracking_coverage || {};
    const note = tracking.summary?.comparison?.note || "正式收益只统计 Top3；其他层只做旁路复盘。";
    return {
      source: "tracking",
      lines: ["structured-four-layer-tracking"],
      cards: fourLayerCardsFromTracking(tracking),
      returnScope: note,
      returnPreview: coverage.latest_snapshot_match_count != null
        ? `四层样本 ${coverage.record_count || tracking.records.length} 条，命中今日快照 ${coverage.latest_snapshot_match_count} 条。`
        : "四层样本已进入跟踪账本。",
      nextVerify: "正式执行只认 Top3；旁路层只做跟踪和复盘。",
      skillDive: "四层卡片来自 four-layer-tracking 结构化账本。",
    };
  }
  const lines = fourLayerSourceLines();
  if (lines.length) {
    const cards = visibleFourLayerCardDefs().map((def) => {
      const decorated = decorateFourLayerCardForPeriod(def);
      const items = layerItemsFromLines(lines, def.linePattern);
      return {
        ...decorated,
        items: items.slice(0, def.displayLimit || 3),
        rawCount: items.length,
      };
    });
    const parsedItemCount = cards.reduce((sum, card) => sum + card.items.length, 0);
    if (parsedItemCount > 0) {
      return {
        source: "markdown",
        lines,
        cards,
        returnScope: findLineValue(lines, /^收益统计口径/, "正式收益只统计 Top3；其他层只做旁路复盘。"),
        returnPreview: findLineValue(lines, /^初始收益参考/, "暂无收益参考。"),
        nextVerify: findLineValue(lines, /^次日早报验证/, "无"),
        skillDive: findLineValue(lines, /^金融 skill 深挖/, "暂无深挖记录。"),
      };
    }
  }
  return {
    source: "empty",
    lines: [],
    cards: visibleFourLayerCardDefs().map((def) => ({ ...decorateFourLayerCardForPeriod(def), items: [], rawCount: 0 })),
    returnScope: "正式收益只统计 Top3；其他层只做旁路复盘。",
    returnPreview: "暂无收益参考。",
    nextVerify: "无",
    skillDive: "暂无深挖记录。",
  };
}

function strategyGroupLabel(group) {
  const def = FOUR_LAYER_CARD_DEFS.find((item) => item.strategyGroup === group);
  return def?.title || {
    formal_top3: "正式买入 Top3",
    a_theme_watch: "题材观察",
    b_technical_watch: "技术观察",
    score_front_rejected: "候选评分前排",
    low_reflow_watch: "低位回流观察",
    open_drive_watch: "早盘驱动观察",
    overnight_limit_watch: "隔夜涨停观察",
    theme_rotation_watch: "题材轮动观察",
  }[String(group || "")] || String(group || "未分组");
}

function rawStrategyRecordReturnValue(record) {
  const metrics = record?.return_metrics && typeof record.return_metrics === "object" ? record.return_metrics : {};
  for (const key of ["t1_return", "same_day_return", "day3_return"]) {
    const value = numericValue(metrics[key] ?? record?.[key]);
    if (value !== null) return Math.abs(value) > 1 ? value / 100 : value;
  }
  const legacy = numericValue(record?.legacy_next_day_change_pct);
  if (legacy !== null) return legacy / 100;
  return null;
}

function rawStrategyRecordT1Value(record) {
  const metrics = record?.return_metrics && typeof record.return_metrics === "object" ? record.return_metrics : {};
  const value = numericValue(metrics.t1_return ?? record?.t1_return);
  if (value !== null) return Math.abs(value) > 1 ? value / 100 : value;
  const legacy = numericValue(record?.legacy_next_day_change_pct);
  if (legacy !== null) return legacy / 100;
  return null;
}

function averageNumericValues(values) {
  const numericValues = values
    .map((value) => numericValue(value))
    .filter((value) => value !== null);
  if (!numericValues.length) return null;
  return numericValues.reduce((sum, value) => sum + value, 0) / numericValues.length;
}

function strategyRecordReturnValue(record, sourcePayload = null) {
  const directValue = rawStrategyRecordReturnValue(record);
  if (directValue !== null) return directValue;
  const symbol = normalizeSymbolText(record?.symbol);
  const group = String(record?.strategy_group || "");
  if (!symbol || !group || !sourcePayload) return null;
  for (const payload of paperTradePayloadsFromState(sourcePayload)) {
    const paperRecord = paperTradeRecordFor(symbol, group, payload);
    const paperValue = rawStrategyRecordReturnValue(paperRecord);
    if (paperValue !== null) return paperValue;
  }
  return null;
}

function strategyPanelStates() {
  const byDate = new Map();
  // Prefer full history-detail panel states over the lighter strategy-history cache.
  [state, ...allHistoryPanelStates(), ...strategyHistoryPanelStates()].forEach((payload) => {
    if (!payload || typeof payload !== "object") return;
    const date = payload.run?.date || payload.currentDate || payload.current_date;
    if (!date || byDate.has(date)) return;
    byDate.set(date, payload);
  });
  return Array.from(byDate.entries())
    .map(([date, payload]) => ({ date, payload }))
    .sort((a, b) => String(a.date).localeCompare(String(b.date)));
}

function strategyHistoryPanelStates() {
  const payload = strategyHistoryPayload();
  const rawItems = Array.isArray(payload?.states)
    ? payload.states
    : (Array.isArray(payload?.items) ? payload.items : Object.values(payload?.dates || {}));
  return rawItems
    .map((item) => item?.panel_state || item?.web_panel_state || item?.state || item)
    .filter((item) => item && typeof item === "object");
}

function normalizedStrategyDate(date) {
  return String(date || "").slice(0, 10).replaceAll("/", "-");
}

function strategyDateInAnalyticsWindow(date) {
  const normalized = normalizedStrategyDate(date);
  return Boolean(normalized) && normalized >= STRATEGY_ANALYTICS_START_DATE;
}

function strategyPayloadT1Count(payload) {
  const records = Array.isArray(payload?.records) ? payload.records : [];
  return records.filter((record) => rawStrategyRecordT1Value(record) !== null).length;
}

function strategyPayloadReturnCount(payload) {
  const records = Array.isArray(payload?.records) ? payload.records : [];
  return records.filter((record) => rawStrategyRecordReturnValue(record) !== null).length;
}

function strategyPayloadPriority(payload) {
  const scope = String(payload?.artifact_scope || "");
  const scopeRank = scope === "review" ? 0 : (scope === "canonical" ? 1 : (scope === "close" ? 2 : 3));
  return {
    t1Count: strategyPayloadT1Count(payload),
    returnCount: strategyPayloadReturnCount(payload),
    scopeRank,
    crossBackfill: payload?.cross_date_backfill ? 1 : 0,
    generatedAt: String(payload?.generated_at || ""),
  };
}

function compareStrategyPayloadPriority(candidate, current) {
  const left = strategyPayloadPriority(candidate);
  const right = strategyPayloadPriority(current);
  if (left.t1Count !== right.t1Count) return left.t1Count - right.t1Count;
  if (left.returnCount !== right.returnCount) return left.returnCount - right.returnCount;
  if (left.scopeRank !== right.scopeRank) return right.scopeRank - left.scopeRank;
  if (left.crossBackfill !== right.crossBackfill) return left.crossBackfill - right.crossBackfill;
  return left.generatedAt.localeCompare(right.generatedAt);
}

function strategyReturnPayloadsBySourceDate() {
  const byDate = new Map();
  strategyPanelStates().forEach(({ payload }) => {
    paperTradePayloadsFromState(payload).forEach((tradePayload) => {
      const sourceDate = normalizedStrategyDate(tradePayload?.source_close_date || tradePayload?.date);
      if (!strategyDateInAnalyticsWindow(sourceDate)) return;
      const records = Array.isArray(tradePayload?.records) ? tradePayload.records : [];
      if (!records.length) return;
      const current = byDate.get(sourceDate);
      if (!current || compareStrategyPayloadPriority(tradePayload, current.payload) > 0) {
        byDate.set(sourceDate, { date: sourceDate, payload: tradePayload });
      }
    });
  });
  return Array.from(byDate.values()).sort((a, b) => a.date.localeCompare(b.date));
}

function collectLatestT1ByGroup() {
  const latestByGroup = {};
  strategyReturnPayloadsBySourceDate().forEach(({ date: sourceDate, payload }) => {
    const groups = {};
    const records = Array.isArray(payload?.records) ? payload.records : [];
    records.forEach((record) => {
      const group = String(record?.strategy_group || "");
      if (!group) return;
      const t1Value = rawStrategyRecordT1Value(record);
      if (t1Value === null) return;
      if (!groups[group]) groups[group] = [];
      groups[group].push(t1Value);
    });
    const generatedAt = String(payload?.generated_at || "");
    Object.entries(groups).forEach(([group, values]) => {
      const average = averageNumericValues(values);
      if (average === null) return;
      const candidate = {
        sourceDate,
        value: average,
        count: values.length,
        generatedAt,
      };
      const current = latestByGroup[group];
      if (!current || candidate.sourceDate > current.sourceDate) {
        latestByGroup[group] = candidate;
        return;
      }
      if (candidate.sourceDate === current.sourceDate) {
        if (candidate.count > current.count) {
          latestByGroup[group] = candidate;
          return;
        }
        if (candidate.count === current.count && candidate.generatedAt > current.generatedAt) {
          latestByGroup[group] = candidate;
        }
      }
    });
  });
  return latestByGroup;
}

function recordsFromPanelState(payload) {
  // Review records belong to their source close date, not the visible panel date.
  // Strategy analytics uses strategyReturnPayloadsBySourceDate() for priced data.
  const tracking = payload?.four_layer_tracking;
  const records = Array.isArray(tracking?.records) ? tracking.records : [];
  return records.filter((record) => record && typeof record === "object" && record.strategy_group);
}

function strategyAnalytics() {
  const groups = {};
  const seriesByDate = [];
  const seriesByGroup = {};
  const latestT1ByGroup = collectLatestT1ByGroup();
  strategyReturnPayloadsBySourceDate().forEach(({ date, payload }) => {
    if (!strategyDateInAnalyticsWindow(date)) return;
    const dateGroupAverages = [];
    const dateGroupReturns = {};
    const dateGroupSeen = {};
    const records = Array.isArray(payload?.records) ? payload.records : [];
    records.forEach((record) => {
      const group = String(record.strategy_group || "");
      if (!group) return;
      const value = rawStrategyRecordT1Value(record);
      if (!groups[group]) {
        groups[group] = {
          key: group,
          label: strategyGroupLabel(group),
          count: 0,
          priced: 0,
          wins: 0,
          ticketCount: 0,
          ticketPriced: 0,
          ticketWins: 0,
          dayCount: 0,
          dayPriced: 0,
          dayWins: 0,
          dayReturns: [],
          returns: [],
          samples: [],
          winRateMode: group === "formal_top3" ? "daily_aggregate" : "per_ticket",
          sampleUnit: group === "formal_top3" ? "日" : "票",
        };
      }
      const bucket = groups[group];
      dateGroupSeen[group] = (dateGroupSeen[group] || 0) + 1;
      bucket.ticketCount += 1;
      bucket.samples.push(record);
      if (value !== null) {
        bucket.ticketPriced += 1;
        bucket.returns.push(value);
        if (value > 0) bucket.ticketWins += 1;
        if (!dateGroupReturns[group]) dateGroupReturns[group] = [];
        dateGroupReturns[group].push(value);
      }
    });
    Object.keys(dateGroupSeen).forEach((group) => {
      const bucket = groups[group];
      if (bucket?.winRateMode === "daily_aggregate") {
        bucket.dayCount += 1;
      }
    });
    Object.entries(dateGroupReturns).forEach(([group, values]) => {
      if (!seriesByGroup[group]) seriesByGroup[group] = [];
      const dayAverage = averageNumericValues(values);
      if (dayAverage === null) return;
      dateGroupAverages.push(dayAverage);
      seriesByGroup[group].push({
        date,
        value: dayAverage,
      });
      const bucket = groups[group];
      if (bucket) {
        bucket.latestReturn = dayAverage;
        bucket.latestReturnDate = date;
        bucket.dayReturns.push(dayAverage);
      }
      if (bucket?.winRateMode === "daily_aggregate") {
        bucket.dayPriced += 1;
        if (dayAverage > 0) bucket.dayWins += 1;
      }
    });
    const dateAverage = averageNumericValues(dateGroupAverages);
    if (dateAverage !== null) {
      seriesByDate.push({ date, value: dateAverage });
    }
  });
  const rows = Object.values(groups).filter((group) => !WEB_PANEL_HIDDEN_STRATEGY_DASHBOARD_GROUPS.has(group.key)).map((group) => {
    const useDailyAggregate = group.winRateMode === "daily_aggregate";
    const count = useDailyAggregate ? group.dayCount : group.ticketCount;
    const priced = useDailyAggregate ? group.dayPriced : group.ticketPriced;
    const wins = useDailyAggregate ? group.dayWins : group.ticketWins;
    const totalBase = group.dayReturns.length ? group.dayReturns : group.returns;
    const totalReturn = totalBase.length
      ? totalBase.reduce((sum, value) => sum + value, 0)
      : null;
    const avgBase = useDailyAggregate ? group.dayReturns : group.returns;
    const avg = avgBase.length
      ? avgBase.reduce((sum, value) => sum + value, 0) / avgBase.length
      : null;
    const winRate = priced ? wins / priced : null;
    const status = !priced
      ? "待回填"
      : (totalReturn > 0 && winRate >= 0.5 ? "保留观察" : (totalReturn < 0 && priced >= 3 ? "降权观察" : "继续观察"));
    return {
      ...group,
      count,
      priced,
      wins,
      avg,
      totalReturn,
      winRate,
      status,
      latestReturn: group.latestReturn ?? null,
      latestReturnDate: group.latestReturnDate || "",
      latestT1Return: latestT1ByGroup[group.key]?.value ?? null,
      latestT1ReturnDate: latestT1ByGroup[group.key]?.sourceDate || "",
    };
  }).sort((a, b) => {
    const av = a.totalReturn === null ? -999 : a.totalReturn;
    const bv = b.totalReturn === null ? -999 : b.totalReturn;
    return bv - av;
  });
  return {
    groups: rows,
    seriesByDate: seriesByDate.slice(-12),
    seriesByGroup: Object.fromEntries(Object.entries(seriesByGroup).map(([group, series]) => [group, series.slice(-12)])),
    totalPriced: rows.reduce((sum, row) => sum + row.priced, 0),
    totalWins: rows.reduce((sum, row) => sum + row.wins, 0),
  };
}

function dashboardReturnText(value) {
  if (value === null || value === undefined) return "待回填";
  return formatReturnPercent(value);
}

function dashboardWinRateText(value) {
  if (value === null || value === undefined) return "待回填";
  return `${(value * 100).toFixed(0)}%`;
}

function strategySampleText(row) {
  const unit = row?.sampleUnit || "票";
  return `${row?.priced || 0}/${row?.count || 0}${unit}`;
}

function strategyWinRateModeText(row) {
  return row?.winRateMode === "daily_aggregate" ? "按日组合胜率" : "按单票样本";
}

function strategyLatestReturnLabel(row) {
  const date = normalizedStrategyDate(row?.latestT1ReturnDate || row?.latestReturnDate || "");
  return date ? `最新T+1收益 (${date.slice(5)})` : "最新T+1收益";
}

function strategyDecisionText(avg, winRate, priced) {
  if (!priced) return "样本还不够，先等收益回填";
  if ((avg || 0) > 0.01 && (winRate || 0) >= 0.55) return "表现较好，继续重点观察";
  if ((avg || 0) < -0.01 && priced >= 3) return "表现偏弱，复盘里要降权";
  return "暂时不下结论，继续观察";
}

function strategySparklinePoints(series) {
  if (!series.length) return "";
  const values = series.map((item) => item.value);
  const min = Math.min(...values, -0.02);
  const max = Math.max(...values, 0.02);
  const range = max - min || 1;
  return values.map((value, index) => {
    const x = series.length === 1 ? 8 : 8 + (index * 164) / (series.length - 1);
    const y = 54 - ((value - min) / range) * 42;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}

function strategyChartPointObjects(values, width = 380, height = 180, pad = 18, bounds = null) {
  if (!values.length) return [];
  const min = bounds ? bounds.min : Math.min(...values, -0.03);
  const max = bounds ? bounds.max : Math.max(...values, 0.03);
  const range = max - min || 1;
  return values.map((value, index) => {
    const x = values.length === 1 ? pad : pad + (index * (width - pad * 2)) / (values.length - 1);
    const y = height - pad - ((value - min) / range) * (height - pad * 2);
    return { x, y, value };
  });
}

function strategyChartPoints(values, width = 380, height = 180, pad = 18, bounds = null) {
  const points = strategyChartPointObjects(values, width, height, pad, bounds);
  if (!points.length) return "";
  return points.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
}

function svgPathFromPointText(pointText) {
  const points = String(pointText || "").trim().split(/\s+/).filter(Boolean);
  if (!points.length) return "";
  return points.map((point, index) => `${index ? "L" : "M"}${point}`).join(" ");
}

function smoothStrategySeries(series) {
  if (series.length <= 2) return series;
  return series.map((item, index) => {
    if (index === 0 || index === series.length - 1) return item;
    const prev = series[index - 1].value;
    const next = series[index + 1].value;
    return { ...item, value: (prev + item.value * 1.35 + next) / 3.35 };
  });
}

function cumulativeStrategySeries(series) {
  let total = 0;
  return series.map((item) => {
    total += item.value;
    return { date: item.date, value: total };
  });
}

function strategyRenderablePointObjects(values, width, height, pad, bounds, singleSpan = 42) {
  const points = strategyChartPointObjects(values, width, height, pad, bounds);
  if (points.length !== 1) return points;
  const baseline = strategyChartPointObjects([0], width, height, pad, bounds)[0] || points[0];
  const endX = Math.min(width - pad - 4, pad + singleSpan);
  return [
    { x: pad + 4, y: baseline.y, value: 0 },
    { x: Math.max(pad + 12, endX), y: points[0].y, value: points[0].value },
  ];
}

function strategyLineClass(index) {
  return ["main", "blue", "amber", "violet", "red", "gold", "mint", "cyan", "rose"][index] || "main";
}

function strategyLegendLabel(label) {
  const text = String(label || "");
  const shortLabels = {
    "正式买入 Top3": "正式Top3",
    "技术观察": "技术",
    "低位回流观察": "回流",
    "早盘驱动观察": "早盘",
    "隔夜涨停观察": "涨停",
    "题材观察": "题材",
    "候选评分前排": "评分前排",
  };
  return shortLabels[text] || text;
}

function dashboardAllReturns(analytics) {
  return analytics.groups.flatMap((row) => row.dayReturns || row.returns || []);
}

function dashboardProfitFactor(returns) {
  const gains = returns.filter((value) => value > 0).reduce((sum, value) => sum + value, 0);
  const losses = Math.abs(returns.filter((value) => value < 0).reduce((sum, value) => sum + value, 0));
  if (!losses) return gains ? "∞" : "待回填";
  return (gains / losses).toFixed(2);
}

function distributeEndLabelRows(rows, minGap = 20, top = 16, bottom = 216) {
  const sorted = rows.filter((row) => row.last).sort((a, b) => a.labelY - b.labelY);
  let cursor = top - minGap;
  sorted.forEach((row) => {
    row.labelY = Math.max(row.labelY, cursor + minGap);
    cursor = row.labelY;
  });
  let overflow = sorted.length ? sorted.at(-1).labelY - bottom : 0;
  if (overflow > 0) {
    for (let index = sorted.length - 1; index >= 0; index -= 1) {
      sorted[index].labelY = Math.max(top, sorted[index].labelY - overflow);
      if (index > 0) overflow = Math.max(0, sorted[index - 1].labelY + minGap - sorted[index].labelY);
    }
  }
  return rows;
}

function strategyCurveChartSpec() {
  const width = typeof window !== "undefined" ? Number(window.innerWidth || 0) : 0;
  const isCompact = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(max-width: 1080px), (hover: none) and (pointer: coarse)").matches
    : false;
  if (isCompact) {
    return {
      viewWidth: 540,
      viewHeight: 250,
      plotWidth: 528,
      plotHeight: 242,
      mobilePlotWidth: 520,
      pad: 8,
      gridTop: [22, 72, 122, 172],
      labelBoxX: 476,
      labelBoxWidth: 58,
      labelTextX: 505,
      mobileLabelBoxX: 466,
      mobileLabelBoxWidth: 68,
      mobileLabelTextX: 500,
      labelTop: 16,
      labelBottom: 232,
    };
  }
  if (width >= 1600) {
    return {
      viewWidth: 940,
      viewHeight: 250,
      plotWidth: 928,
      plotHeight: 242,
      mobilePlotWidth: 820,
      pad: 8,
      gridTop: [22, 72, 122, 172],
      labelBoxX: 876,
      labelBoxWidth: 58,
      labelTextX: 905,
      mobileLabelBoxX: 838,
      mobileLabelBoxWidth: 70,
      mobileLabelTextX: 873,
      labelTop: 16,
      labelBottom: 232,
    };
  }
  return {
    viewWidth: 700,
    viewHeight: 250,
    plotWidth: 688,
    plotHeight: 242,
    mobilePlotWidth: 600,
    pad: 8,
    gridTop: [22, 72, 122, 172],
    labelBoxX: 636,
    labelBoxWidth: 58,
    labelTextX: 665,
    mobileLabelBoxX: 616,
    mobileLabelBoxWidth: 70,
    mobileLabelTextX: 651,
    labelTop: 16,
    labelBottom: 232,
  };
}

function renderStrategyCurveCard(analytics) {
  const chartSpec = strategyCurveChartSpec();
  const returns = dashboardAllReturns(analytics);
  const totalReturn = returns.length ? returns.reduce((sum, value) => sum + value, 0) : null;
  const winRate = analytics.totalPriced ? analytics.totalWins / analytics.totalPriced : null;
  const formalRow = analytics.groups.find((row) => row.key === "formal_top3") || null;
  const formalLatestLabel = formalRow ? strategyLatestReturnLabel(formalRow) : "正式Top3最新T+1收益";
  const groupLines = analytics.groups.slice(0, STRATEGY_DASHBOARD_DISPLAY_LIMIT).map((row) => {
    const series = smoothStrategySeries(cumulativeStrategySeries(analytics.seriesByGroup?.[row.key] || []));
    return { ...row, series };
  }).filter((row) => row.series.length);
  const allLineValues = groupLines.flatMap((row) => row.series.map((item) => item.value));
  const bounds = allLineValues.length
    ? { min: Math.min(...allLineValues, -0.03), max: Math.max(...allLineValues, 0.03) }
    : { min: -0.03, max: 0.03 };
  const chartLineRows = distributeEndLabelRows(groupLines.map((row, index) => {
    const values = row.series.map((item) => item.value);
    const points = strategyRenderablePointObjects(
      values,
      chartSpec.plotWidth,
      chartSpec.plotHeight,
      chartSpec.pad,
      bounds,
    );
    const pointText = points.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
    const mobilePoints = strategyRenderablePointObjects(
      values,
      chartSpec.mobilePlotWidth,
      chartSpec.plotHeight,
      chartSpec.pad,
      bounds,
      28,
    );
    const mobilePointText = mobilePoints.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
    const last = points.at(-1);
    const mobileLast = mobilePoints.at(-1);
    return {
      ...row,
      className: strategyLineClass(index),
      pointText,
      mobilePointText,
      last,
      mobileLast,
      labelY: last ? Math.max(chartSpec.labelTop, Math.min(chartSpec.labelBottom, last.y)) : 0,
      mobileLabelY: mobileLast ? Math.max(chartSpec.labelTop, Math.min(chartSpec.labelBottom, mobileLast.y)) : 0,
    };
  }), 22, chartSpec.labelTop, chartSpec.labelBottom);
  const mobileLabelRows = distributeEndLabelRows(chartLineRows.map((row) => ({
    ...row,
    labelY: row.mobileLabelY,
    last: row.mobileLast,
  })), 16, chartSpec.labelTop, chartSpec.labelBottom);
  const mobileLabelYByKey = new Map(mobileLabelRows.map((row) => [row.key, row.labelY]));
  chartLineRows.forEach((row) => {
    row.mobileLabelY = mobileLabelYByKey.get(row.key) ?? row.mobileLabelY;
  });
  const lossCount = Math.max(0, analytics.totalPriced - analytics.totalWins);
  const rankedRows = analytics.groups.slice(0, STRATEGY_DASHBOARD_DISPLAY_LIMIT).sort((left, right) => {
    const leftScore = (left.winRate ?? -1) * 100 + (left.totalReturn || 0) * 100;
    const rightScore = (right.winRate ?? -1) * 100 + (right.totalReturn || 0) * 100;
    return rightScore - leftScore;
  });
  return `
    <article class="strategy-panel-card curve option-b" data-strategy-card style="--panel-delay: 1;">
      <div class="strategy-panel-head">
        <span>01</span>
        <h3>策略对比折线</h3>
        <small>收益曲线和胜率</small>
      </div>
      <div class="strategy-option-b-grid">
          <div class="strategy-b-chart-panel">
            <div class="strategy-b-chart-top">
            <h4>累计收益走势</h4>
            <span>自 ${STRATEGY_ANALYTICS_START_DATE} 起</span>
          </div>
          <div class="strategy-chart-legend">
            ${groupLines.length ? groupLines.map((row, index) => `
              <span title="${escapeHtml(row.label)}"><i class="strategy-legend-${strategyLineClass(index)}"></i>${escapeHtml(strategyLegendLabel(row.label))}</span>
            `).join("") : `<span>等待策略收益样本回填</span>`}
          </div>
          <div class="strategy-chart-shell">
            <svg class="strategy-main-chart" viewBox="0 0 ${chartSpec.viewWidth} ${chartSpec.viewHeight}" role="img" aria-label="累计收益曲线">
              <g class="strategy-grid-lines">
                ${chartSpec.gridTop.map((y) => `<line x1="${chartSpec.pad}" y1="${y}" x2="${chartSpec.plotWidth - chartSpec.pad}" y2="${y}"></line>`).join("")}
              </g>
              <line class="strategy-zero-line" x1="${chartSpec.pad}" y1="${strategyChartPointObjects([0], chartSpec.plotWidth, chartSpec.plotHeight, chartSpec.pad, bounds)[0]?.y.toFixed(1) || "134"}" x2="${chartSpec.plotWidth - chartSpec.pad}" y2="${strategyChartPointObjects([0], chartSpec.plotWidth, chartSpec.plotHeight, chartSpec.pad, bounds)[0]?.y.toFixed(1) || "134"}"></line>
              ${chartLineRows.map((row) => {
                const mobileLabelY = row.mobileLabelY;
                return row.pointText ? `
                  <polyline class="strategy-line-${row.className}" pathLength="100" points="${escapeHtml(row.pointText)}"></polyline>
                  <path class="strategy-mobile-fallback-line strategy-line-${row.className}" pathLength="100" d="${escapeHtml(svgPathFromPointText(row.mobilePointText || row.pointText))}"></path>
                  <circle class="strategy-last-dot strategy-dot-${row.className}" cx="${row.last.x.toFixed(1)}" cy="${row.last.y.toFixed(1)}" r="3.5"></circle>
                  <circle class="strategy-mobile-last-dot strategy-dot-${row.className}" cx="${row.mobileLast.x.toFixed(1)}" cy="${row.mobileLast.y.toFixed(1)}" r="3.2"></circle>
                  <rect class="strategy-end-label-bg ${returnToneClass(row.last.value)}" x="${chartSpec.labelBoxX}" y="${(row.labelY - 10).toFixed(1)}" width="${chartSpec.labelBoxWidth}" height="18" rx="9"></rect>
                  <text class="strategy-end-label ${returnToneClass(row.last.value)}" x="${chartSpec.labelTextX}" y="${(row.labelY + 4).toFixed(1)}" text-anchor="middle">${escapeHtml(dashboardReturnText(row.last.value))}</text>
                  <line class="strategy-mobile-label-leader strategy-line-${row.className}" pathLength="100" x1="${(row.mobileLast.x + 4).toFixed(1)}" y1="${row.mobileLast.y.toFixed(1)}" x2="${(chartSpec.mobileLabelBoxX - 3).toFixed(1)}" y2="${mobileLabelY.toFixed(1)}"></line>
                  <rect class="strategy-mobile-end-label-bg ${returnToneClass(row.last.value)}" x="${chartSpec.mobileLabelBoxX}" y="${(mobileLabelY - 7).toFixed(1)}" width="${chartSpec.mobileLabelBoxWidth}" height="14" rx="7"></rect>
                  <text class="strategy-mobile-end-label ${returnToneClass(row.last.value)}" x="${chartSpec.mobileLabelTextX}" y="${(mobileLabelY + 3.2).toFixed(1)}" text-anchor="middle">${escapeHtml(dashboardReturnText(row.last.value))}</text>
                ` : "";
              }).join("")}
            </svg>
          </div>
          <div class="strategy-axis-labels">
            <span>前样本</span>
            <span>近期</span>
            <span>当前</span>
          </div>
          <div class="strategy-current-return-strip" aria-label="当前累计收益">
            ${chartLineRows.filter((row) => row.pointText && row.last).map((row) => `
              <span class="${returnToneClass(row.last.value)}" title="${escapeHtml(row.label)}当前累计收益">
                <i class="strategy-legend-${row.className}"></i>
                <b>${escapeHtml(strategyLegendLabel(row.label))}</b>
                <strong>${escapeHtml(dashboardReturnText(row.last.value))}</strong>
              </span>
            `).join("")}
          </div>
        </div>
        <aside class="strategy-b-side-panel">
          <h4>胜率排名</h4>
          <div class="strategy-b-rank-list">
            ${rankedRows.length ? rankedRows.map((row, index) => `
              <div class="strategy-b-rank-row" style="--row-delay:${index};">
                <span>${index + 1}</span>
                <b>${escapeHtml(row.label)}</b>
                <strong class="${returnToneClass(row.totalReturn)}">${escapeHtml(dashboardReturnText(row.totalReturn))}</strong>
                <small>胜率 ${escapeHtml(dashboardWinRateText(row.winRate))} · 收益样本 ${escapeHtml(strategySampleText(row))} · ${escapeHtml(strategyWinRateModeText(row))}</small>
              </div>
            `).join("") : `<p class="empty">等待收益账本回填。</p>`}
          </div>
        </aside>
      </div>
      <div class="strategy-b-summary-row">
        <div style="--metric-delay:0;"><span>全策略样本胜率</span><strong>${escapeHtml(dashboardWinRateText(winRate))}</strong></div>
        <div style="--metric-delay:1;"><span>全策略累计等权收益</span><strong class="${returnToneClass(totalReturn)}">${escapeHtml(dashboardReturnText(totalReturn))}</strong></div>
        <div style="--metric-delay:2;"><span>${escapeHtml(formalLatestLabel)}</span><strong class="${returnToneClass(formalRow?.latestT1Return)}">${escapeHtml(dashboardReturnText(formalRow?.latestT1Return))}</strong></div>
        <div style="--metric-delay:3;"><span>正式Top3累计收益</span><strong class="${returnToneClass(formalRow?.totalReturn)}">${escapeHtml(dashboardReturnText(formalRow?.totalReturn))}</strong></div>
        <div style="--metric-delay:4;"><span>样本结构</span><strong>${analytics.totalWins}赢 / ${lossCount}亏</strong></div>
      </div>
      <p>统计口径：收益按收盘来源日去重，优先采用次日复盘回填账本；同一策略当天多只样本按等权平均计入曲线和累计收益。旁路胜率仍按单票样本统计，不引用外部指数，未扣手续费和滑点。</p>
    </article>
  `;
}

function renderStrategyCompareCard(analytics) {
  const rows = analytics.groups.slice(0, STRATEGY_DASHBOARD_DISPLAY_LIMIT);
  const maxWin = Math.max(...rows.map((row) => row.winRate || 0), 0.01);
  const maxReturn = Math.max(...rows.map((row) => Math.abs(row.totalReturn || 0)), 0.01);
  return `
    <article class="strategy-panel-card compare" data-strategy-card style="--panel-delay: 0;">
      <div class="strategy-panel-head">
        <span>02</span>
        <h3>四层策略长期对比</h3>
        <small>统计周期：${STRATEGY_ANALYTICS_START_DATE} 起</small>
      </div>
      <div class="strategy-compare-chart">
        ${rows.length ? rows.map((row, index) => {
          const winHeight = Math.max(10, Math.min(100, ((row.winRate || 0) / maxWin) * 100));
          const returnHeight = Math.max(8, Math.min(100, (Math.abs(row.totalReturn || 0) / maxReturn) * 82));
          const profitHeight = row.priced ? Math.max(12, Math.min(100, 44 + (row.totalReturn || 0) * 420)) : 10;
          return `
            <div class="strategy-column-group" style="--group-delay:${index};">
              <div class="strategy-column-bars">
                <i class="win" style="height:${winHeight}%; --bar-stagger:0;"></i>
                <i class="avg ${returnToneClass(row.totalReturn)}" style="height:${returnHeight}%; --bar-stagger:1;"></i>
                <i class="profit" style="height:${profitHeight}%; --bar-stagger:2;"></i>
              </div>
              <b>${escapeHtml(row.label)}</b>
            </div>
          `;
        }).join("") : `<p class="empty">等待收益账本回填后形成长期对比。</p>`}
      </div>
      <div class="strategy-compare-legend">
        <span><i class="win"></i>胜率</span>
        <span><i class="avg"></i>累计等权收益</span>
        <span><i class="profit"></i>盈亏比</span>
      </div>
      <table class="strategy-compare-table">
        <colgroup>
          <col class="strategy-compare-label-col" />
          ${rows.map(() => `<col />`).join("")}
        </colgroup>
        <tbody>
          <tr><th>胜率</th>${rows.map((row) => `<td>${escapeHtml(dashboardWinRateText(row.winRate))}</td>`).join("")}</tr>
          <tr><th>最新T+1收益</th>${rows.map((row) => `<td class="${returnToneClass(row.latestT1Return)}">${escapeHtml(dashboardReturnText(row.latestT1Return))}</td>`).join("")}</tr>
          <tr><th>累计等权收益</th>${rows.map((row) => `<td class="${returnToneClass(row.totalReturn)}">${escapeHtml(dashboardReturnText(row.totalReturn))}</td>`).join("")}</tr>
          <tr><th>收益样本</th>${rows.map((row) => `<td>${escapeHtml(strategySampleText(row))}</td>`).join("")}</tr>
        </tbody>
      </table>
      <p>正式 Top3 和旁路策略的收益列都按来源日等权统计；旁路胜率仍按单票样本统计。</p>
    </article>
  `;
}

function dashboardNodeById(id) {
  const source = panelStateForView();
  const closeNodes = source?.workflow_chain?.close?.nodes || [];
  return closeNodes.find((node) => String(node.id || "") === id) || null;
}

function healthIconSvg(type) {
  const common = `viewBox="0 0 48 48" aria-hidden="true" focusable="false"`;
  const icons = {
    document: `<svg ${common}><path d="M14 8h15l7 7v25H14z"></path><path d="M29 8v8h7"></path><path d="M19 22h14M19 28h14M19 34h9"></path></svg>`,
    notice: `<svg ${common}><path d="M13 27h6l16 7V14l-16 7h-6z"></path><path d="M19 27l3 9h5"></path><path d="M37 20c2 2 2 8 0 10"></path></svg>`,
    market: `<svg ${common}><path d="M12 36V12M12 36h25"></path><path d="M17 30l7-7 6 4 8-11"></path><path d="M34 16h4v4"></path></svg>`,
    kline: `<svg ${common}><path d="M16 13v22M24 10v28M32 14v20"></path><path d="M13 20h6v10h-6zM21 16h6v15h-6zM29 22h6v8h-6z"></path></svg>`,
    clock: `<svg ${common}><circle cx="24" cy="24" r="15"></circle><path d="M24 15v10l7 4"></path></svg>`,
  };
  return icons[type] || icons.document;
}

function renderDataHealthCard() {
  const items = [
    ["通达信导出", "document", dashboardNodeById("watchlist_export")],
    ["公告", "notice", dashboardNodeById("news_notice_sentiment") || dashboardNodeById("research_brief")],
    ["行情", "market", dashboardNodeById("market_data")],
    ["K线", "kline", dashboardNodeById("technical_check") || dashboardNodeById("market_data")],
    ["15:01回填", "clock", dashboardNodeById("close_confirmation_1501")],
  ];
  const goodCount = items.filter(([, , node]) => ["success", "ok", "done", "completed"].includes(String(node?.status || "").toLowerCase())).length;
  return `
    <article class="strategy-panel-card health" data-strategy-card style="--panel-delay: 2;">
      <div class="strategy-panel-head">
        <span>03</span>
        <h3>数据获取健康监控</h3>
      </div>
      <p>数据管道状态（实时）</p>
      <div class="strategy-health-flow">
        ${items.map(([label, icon, node], index) => {
          const status = String(node?.status || "missing").toLowerCase();
          return `
            <div class="strategy-health-node ${escapeHtml(statusClass(status))}" style="--node-delay:${index};">
              <span class="strategy-health-icon">${healthIconSvg(icon)}</span>
              <strong>${escapeHtml(label)}</strong>
              <span>${escapeHtml(friendlyStatus(status))}</span>
              <small>${escapeHtml(node?.mtime || node?.updated_at || "")}</small>
            </div>
          `;
        }).join("")}
      </div>
      <div class="strategy-health-summary">
        <b>整体状态：${goodCount >= 4 ? "良好" : "需留意"}</b>
        <span>成功率：${Math.round((goodCount / items.length) * 100)}%</span>
        <span>未完成：${items.length - goodCount}</span>
      </div>
    </article>
  `;
}

function renderStrategyLeaderboardCard() {
  const retiredPanelLabel = "旁路策略淘汰/保留机制";
  void retiredPanelLabel;
  return "";
}

function traderReviewPayload() {
  const sourceState = panelStateForView();
  const payload = sourceState?.trader_review;
  if (payload && typeof payload === "object") return payload;
  return FALLBACK_STATE.trader_review;
}

function traderReviewToneClass(value) {
  const text = String(value || "").toLowerCase();
  if (["weak", "bad", "negative", "failed", "risk"].includes(text)) return "weak";
  if (["ok", "good", "positive"].includes(text)) return "ok";
  return "watch";
}

function renderTraderReviewConsensus(payload) {
  const consensus = payload?.consensus || {};
  const rows = [
    ["正式复盘", consensus.official_view || "回放当时正式结论、收益和错因归类。"],
    ["第二复盘", consensus.second_view || "审计旁路样本、漏选和规则待审。"],
    ["合议结果", consensus.final_resolution || "只形成一个复盘口径，不生成第二套买入名单。"],
  ];
  return `
    <article class="trader-review-panel consensus" data-trader-review-card style="--panel-delay:0;">
      <div class="trader-review-panel-head">
        <span>双复盘合议</span>
        <strong>${escapeHtml(payload?.market_tone_label || "复盘")}</strong>
      </div>
      <p>${escapeHtml(payload?.one_liner || "复盘合议暂无正文。")}</p>
      <div class="trader-review-consensus-list">
        ${rows.map(([label, detail]) => `
          <div>
            <span>${escapeHtml(label)}</span>
            <b>${escapeHtml(detail)}</b>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function renderTraderReviewThermometer(payload) {
  const score = Math.max(0, Math.min(100, Number(payload?.emotion_score ?? 0) || 0));
  const statusText = payload?.core_cause || "复盘核心原因待补。";
  return `
    <article class="trader-review-panel thermometer" data-trader-review-card style="--panel-delay:1;">
      <div class="trader-review-panel-head">
        <span>情绪温度</span>
        <strong>${score}</strong>
      </div>
      <div class="trader-review-gauge" style="--score:${score}%;">
        <i></i>
      </div>
      <div class="trader-review-return-grid">
        <div><span>正式收益</span><b>${escapeHtml(payload?.formal_return_text || "--")}</b></div>
        <div><span>旁路对比</span><b>${escapeHtml(payload?.side_return_text || "--")}</b></div>
      </div>
      <p>${escapeHtml(statusText)}</p>
    </article>
  `;
}

function renderTraderReviewDecisionPath(payload) {
  const items = Array.isArray(payload?.decision_path) ? payload.decision_path : [];
  return `
    <article class="trader-review-panel decision" data-trader-review-card style="--panel-delay:2;">
      <div class="trader-review-panel-head">
        <span>正式 Top3 只读路径</span>
        <strong>${items.length || 0} 只</strong>
      </div>
      <div class="trader-review-decision-path">
        ${items.length ? items.map((item, index) => `
          <div class="trader-review-decision-node">
            <i>${index + 1}</i>
            <div>
              <b>${escapeHtml(item.name || item.symbol || "未命名")}</b>
              <span>${escapeHtml([item.symbol, item.verdict].filter(Boolean).join(" / "))}</span>
              <small>${escapeHtml(item.reason || "只读回放，无新推荐。")}</small>
            </div>
          </div>
        `).join("") : `<p class="empty">当前复盘没有可展示的正式 Top3 路径。</p>`}
      </div>
    </article>
  `;
}

function renderTraderReviewLossMatrix(payload) {
  const rows = Array.isArray(payload?.loss_matrix) ? payload.loss_matrix : [];
  return `
    <article class="trader-review-panel loss" data-trader-review-card style="--panel-delay:3;">
      <div class="trader-review-panel-head">
        <span>亏损归因矩阵</span>
        <strong>纪律拆分</strong>
      </div>
      <div class="trader-review-matrix">
        ${rows.map((row) => `
          <div class="trader-review-matrix-row ${escapeHtml(traderReviewToneClass(row.status))}">
            <span>${escapeHtml(row.label || "归因")}</span>
            <b>${escapeHtml(row.value ?? "--")}</b>
            <small>${escapeHtml(row.detail || "")}</small>
          </div>
        `).join("") || `<p class="empty">暂无亏损归因数据。</p>`}
      </div>
    </article>
  `;
}

function renderTraderReviewMissMatrix(payload) {
  const rows = Array.isArray(payload?.miss_attribution_matrix) ? payload.miss_attribution_matrix : [];
  const total = Number(payload?.missed_count || 0);
  const underestimated = Number(payload?.underestimated_count || 0);
  return `
    <article class="trader-review-panel miss" data-trader-review-card style="--panel-delay:4;">
      <div class="trader-review-panel-head">
        <span>漏选归因矩阵</span>
        <strong>${total} / ${underestimated}</strong>
      </div>
      <div class="trader-review-miss-funnel">
        <span>事后强势</span>
        <span>当时可见</span>
        <span>正式未选</span>
        <span>规则待审</span>
      </div>
      <div class="trader-review-matrix compact">
        ${rows.map((row) => `
          <div class="trader-review-matrix-row watch">
            <span>${escapeHtml(row.label || "漏选类型")}</span>
            <b>${escapeHtml(row.count ?? 0)}</b>
            <small>${escapeHtml(row.detail || "只做复盘审计。")}</small>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function renderTraderReviewSideAndRules(payload) {
  const sideCards = Array.isArray(payload?.side_channel_cards) ? payload.side_channel_cards : [];
  const ruleSummary = payload?.rule_queue_summary || {};
  const ruleItems = Array.isArray(ruleSummary.items) ? ruleSummary.items : [];
  return `
    <article class="trader-review-panel side" data-trader-review-card style="--panel-delay:5;">
      <div class="trader-review-panel-head">
        <span>旁路观察与规则待审</span>
        <strong>${sideCards.length ? `${sideCards.length} 策略` : `${Number(ruleSummary.pending_count || 0)} 待确认`}</strong>
      </div>
      <div class="trader-review-side-list">
        ${sideCards.slice(0, TRADER_REVIEW_SIDE_DISPLAY_LIMIT).map((item) => `
          <div>
            <b>${escapeHtml(item.group || "旁路观察")}</b>
            <span>${escapeHtml(item.verdict || "继续观察")}</span>
            <small>${escapeHtml(item.reason || "不进入正式收益。")}</small>
          </div>
        `).join("") || `<p class="empty">暂无旁路观察卡。</p>`}
      </div>
      <div class="trader-review-rule-list">
        ${ruleItems.slice(0, 2).map((item) => `
          <div>
            <span>${escapeHtml(item.priority || "待审")}</span>
            <b>${escapeHtml([item.module, item.parameter].filter(Boolean).join(" / ") || item.proposal_id || "规则提案")}</b>
            <small>${escapeHtml(item.summary || "确认前不改规则。")}</small>
          </div>
        `).join("") || `<div><span>无待审</span><b>当前没有待确认规则</b><small>复盘仍保留审计边界。</small></div>`}
      </div>
    </article>
  `;
}

function renderTraderReviewTimeline(payload) {
  const timeline = Array.isArray(payload?.timeline) ? payload.timeline : [];
  const boundaries = payload?.boundaries || {};
  const boundaryText = boundaries.affects_formal_top3 === false
    ? "展示/审计层：不改变正式 Top3、候选排名、三闸门、handoff、execution、trade-plan。"
    : "边界未确认，请复核 trader_review.boundaries。";
  return `
    <article class="trader-review-panel timeline" data-trader-review-card style="--panel-delay:6;">
      <div class="trader-review-panel-head">
        <span>盘中时间线</span>
        <strong>只读</strong>
      </div>
      <div class="trader-review-timeline">
        ${timeline.map((item) => `
          <div>
            <time>${escapeHtml(item.time || "--")}</time>
            <b>${escapeHtml(item.label || "节点")}</b>
            <span>${escapeHtml(item.detail || "")}</span>
          </div>
        `).join("")}
      </div>
      <p class="trader-review-boundary">${escapeHtml(boundaryText)}</p>
    </article>
  `;
}

function traderReviewLossValue(payload, label) {
  const rows = Array.isArray(payload?.loss_matrix) ? payload.loss_matrix : [];
  const row = rows.find((item) => String(item?.label || "").includes(label));
  return row?.value ?? "--";
}

function traderReviewShortReason(payload) {
  const text = cleanReportLine(payload?.core_cause || payload?.one_liner || "");
  if (/上午|承接|退出|执行/.test(text)) return "更像是次日上午承接变弱后，退出和减仓节奏要复核。";
  if (/数据/.test(text)) return "有些票的数据不够完整，不能把单日结果直接归为选股失败。";
  if (/漏选|旁路/.test(text)) return "旁路里有跑强样本，但还需要连续观察，不能一天就改规则。";
  return text || "复盘证据不足，先继续观察。";
}

function traderReviewSystemVerdict(payload) {
  const consensus = payload?.consensus || {};
  const text = `${payload?.one_liner || ""} ${consensus.second_view || ""}`;
  if (/未发现污染|不在选股|不能.*选股|不能.*失效|不.*完全.*错误/.test(text)) {
    return "暂时不能说选股系统错了。现在更像是弱承接和执行纪律问题，旁路跑强只先记录。";
  }
  return "还不能直接下结论，需要继续看多日样本。确认前不会改正式策略。";
}

function traderReviewPlainVerdictTitle(payload) {
  const verdict = traderReviewSystemVerdict(payload);
  if (/不能说选股系统错/.test(verdict)) return "暂时不能说选股系统错了";
  if (/还不能直接下结论/.test(verdict)) return "还不能急着下结论";
  return cleanReportLine(payload?.one_liner || verdict).replace(/[。；;].*$/, "") || "先看证据再判断";
}

function traderReviewPlainStockReason(item) {
  const text = cleanReportLine(item?.reason || "");
  if (/资料不足|数据|字段缺失/.test(text)) return "这只票当天数据不完整，不能直接判断为选错，先归为资料不足。";
  if (/分时弱|减仓|承接|上午|执行/.test(text)) return "这只票次日上午承接变弱，复盘重点是减仓和退出节奏。";
  if (/技术|未确认|降级/.test(text)) return "这只票后续技术面没继续确认，应该降级观察。";
  return text || "只做原正式票回放，不是新推荐。";
}

function traderReviewMetricBadge(label, value) {
  const raw = String(value ?? "");
  if (label === "正式票") return raw.startsWith("-") ? "偏弱" : raw.startsWith("+") ? "正常" : "待补";
  if (label === "旁路票") return "偏强";
  if (label === "漏选/低估") return "需注意";
  return "待验证";
}

function renderTraderReviewPlainSummary(payload) {
  const formalValue = traderReviewLossValue(payload, "正式收益");
  const sideValue = traderReviewLossValue(payload, "旁路");
  const missed = Number(payload?.missed_count || 0);
  const underestimated = Number(payload?.underestimated_count || 0);
  const pendingRules = Number(payload?.rule_queue_summary?.pending_count || 0);
  const boundary = payload?.boundaries || {};
  const metrics = [
    ["正式票", formalValue, "T+1 平均", `样本 ${payload?.formal_sample_count ?? 2} 只`, returnToneClass(String(formalValue).replace("%", ""))],
    ["旁路票", sideValue, "T+1 平均", `样本 ${payload?.side_channel_sample_count ?? 15} 只`, "positive"],
    ["漏选/低估", `${missed}/${underestimated}`, "强票覆盖率", `漏票 > ${underestimated || 10} 只`, "warn"],
    ["待确认", pendingRules, "规则待审", "可能影响结果", "pending"],
  ];
  return `
    <article class="trader-review-plain-hero" data-trader-review-card style="--panel-delay:0;">
      <div class="trader-review-verdict-block">
        <span>一句话结论</span>
        <h3>${escapeHtml(traderReviewPlainVerdictTitle(payload))}</h3>
        <p>${escapeHtml(traderReviewShortReason(payload))}</p>
        <small>${escapeHtml(boundary.affects_formal_top3 === false ? "这块只是复盘解释，不会改正式 Top3、候选排序、三闸门、交接对象或执行动作。" : "边界待核对。")}</small>
      </div>
      <div class="trader-review-score-strip">
        ${metrics.map(([label, value, line1, line2, tone]) => `
          <div class="${escapeHtml(tone)}">
            <span>${escapeHtml(label)} <i aria-hidden="true">i</i></span>
            <strong>${escapeHtml(value)}</strong>
            <small><b>${escapeHtml(traderReviewMetricBadge(label, value))}</b></small>
            <em>${escapeHtml(line1)}</em>
            <em>${escapeHtml(line2)}</em>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function traderReviewQuestionConclusion(index) {
  return [
    "整体偏弱，未跑赢；需要复核目标线与减仓节奏。",
    "承接走弱导致次日回撤，节奏需要优化。",
    "系统方向合理，问题在执行与节奏。",
    "存在漏选与低估，需要盘后信号与覆盖边界。",
    "先验证执行假设，再决定是否优化规则。",
  ][index] || "继续观察。";
}

function renderTraderReviewPlainQuestions(payload) {
  const missed = Number(payload?.missed_count || 0);
  const underestimated = Number(payload?.underestimated_count || 0);
  const pendingRules = Number(payload?.rule_queue_summary?.pending_count || 0);
  const questions = [
    ["1", "今天结果怎么样？", payload?.formal_return_text || "正式票收益还没回填。", "chart"],
    ["2", "为什么表现不好？", traderReviewShortReason(payload), "warn"],
    ["3", "是不是系统选错了？", traderReviewSystemVerdict(payload), "target"],
    ["4", "有没有漏掉强票？", `完全漏选 ${missed} 只，旁路低估 ${underestimated} 只。它们只进连续观察，不会直接补成正式票。`, "search"],
    ["5", "下一步要做什么？", pendingRules ? `有 ${pendingRules} 条规则建议等你确认；确认前系统不会自动改选股逻辑。` : "当前没有必须立刻改的规则，继续累计样本。", "list"],
  ];
  return `
    <article class="trader-review-plain-card questions" data-trader-review-card style="--panel-delay:1;">
      <div class="trader-review-plain-head">
        <span>复盘五问</span>
        <strong>先看人话结论</strong>
      </div>
      <div class="trader-review-question-list">
        ${questions.map(([num, title, answer, icon], index) => `
          <div class="trader-review-question-item">
            <i>${escapeHtml(num)}</i>
            <span class="trader-review-question-icon ${escapeHtml(icon)}" aria-hidden="true"></span>
            <section>
              <b>${escapeHtml(title)}</b>
              <p>${escapeHtml(answer)}</p>
            </section>
            <strong>结论：${escapeHtml(traderReviewQuestionConclusion(index))}</strong>
            <em aria-hidden="true">›</em>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function renderTraderReviewPlainStocks(payload) {
  const items = Array.isArray(payload?.decision_path) ? payload.decision_path : [];
  return `
    <article class="trader-review-plain-card stocks" data-trader-review-card style="--panel-delay:2;">
      <div class="trader-review-plain-head">
        <span>逐票复盘</span>
        <strong>${items.length || 0} 只正式票</strong>
      </div>
      <div class="trader-review-stock-list">
        ${items.length ? items.map((item) => `
          <div class="trader-review-stock-card">
            <b>${escapeHtml(item.name || item.symbol || "未命名")}</b>
            <span>${escapeHtml([item.symbol, item.verdict].filter(Boolean).join(" / "))}</span>
            <p>${escapeHtml(traderReviewPlainStockReason(item))}</p>
          </div>
        `).join("") : `<p class="empty">当前没有逐票复盘内容。</p>`}
      </div>
    </article>
  `;
}

function renderTraderReviewPlainWatch(payload) {
  const sideCards = Array.isArray(payload?.side_channel_cards) ? payload.side_channel_cards : [];
  const ruleSummary = payload?.rule_queue_summary || {};
  const ruleItems = Array.isArray(ruleSummary.items) ? ruleSummary.items : [];
  return `
    <article class="trader-review-plain-card watch" data-trader-review-card style="--panel-delay:3;">
      <div class="trader-review-plain-head">
        <span>只观察，不买入</span>
        <strong>${Number(ruleSummary.pending_count || 0)} 条待审</strong>
      </div>
      <div class="trader-review-watch-grid">
        <div>
          <b>哪些东西先观察？</b>
          ${sideCards.slice(0, TRADER_REVIEW_SIDE_DISPLAY_LIMIT).map((item) => `
            <p><strong>${escapeHtml(item.group || "旁路观察")}</strong>：${escapeHtml(item.verdict || "继续观察")}。${escapeHtml(item.reason || "")}</p>
          `).join("") || `<p>暂无旁路观察卡。</p>`}
        </div>
        <div>
          <b>哪些规则等你拍板？</b>
          ${ruleItems.slice(0, 2).map((item) => `
            <p><strong>${escapeHtml(item.priority || "待审")}</strong>：${escapeHtml(item.summary || "确认前不改规则。")}</p>
          `).join("") || `<p>没有待确认规则。</p>`}
        </div>
      </div>
    </article>
  `;
}

function renderTraderReviewWorkbench() {
  const band = $("#traderReviewWorkbenchBand");
  const container = $("#traderReviewWorkbench");
  const hint = $("#traderReviewWorkbenchHint");
  if (!container) return;
  const payload = traderReviewPayload();
  const boundaries = payload?.boundaries || {};
  if (hint) {
    hint.textContent = boundaries.affects_formal_top3 === false
      ? "展示/审计层，不改变正式 Top3"
      : "边界待核对";
  }
  container.innerHTML = `
    ${renderTraderReviewPlainSummary(payload)}
    ${renderTraderReviewPlainQuestions(payload)}
    ${renderTraderReviewPlainStocks(payload)}
    ${renderTraderReviewPlainWatch(payload)}
  `;
  band?.classList.remove("motion-live");
  container.classList.remove("motion-live");
  void container.offsetWidth;
  requestAnimationFrame(() => {
    if (!animateTraderReviewWithGsap(container, band)) {
      band?.classList.add("motion-live");
      container.classList.add("motion-live");
    }
  });
}

function animateTraderReviewWithGsap(container, band) {
  const gsap = gsapEngine();
  if (!gsap || !container) return false;
  const cards = container.querySelectorAll("[data-trader-review-card]");
  const metrics = container.querySelectorAll(".trader-review-score-strip > div");
  const questions = container.querySelectorAll(".trader-review-question-item");
  gsap.killTweensOf([band, ...cards, ...metrics, ...questions].filter(Boolean));
  if (band) {
    gsap.fromTo(band, { y: 6 }, { y: 0, duration: 0.24, ease: "power1.out", clearProps: "transform" });
  }
  gsap.fromTo(
    cards,
    { autoAlpha: 0, y: 18, scale: 0.985 },
    { autoAlpha: 1, y: 0, scale: 1, duration: 0.46, stagger: 0.055, ease: "power2.out", clearProps: "transform,opacity,visibility" },
  );
  if (metrics.length) {
    gsap.fromTo(
      metrics,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.3, delay: 0.12, stagger: 0.04, ease: "power1.out", clearProps: "transform,opacity,visibility" },
    );
  }
  if (questions.length) {
    gsap.fromTo(
      questions,
      { autoAlpha: 0, x: -10 },
      { autoAlpha: 1, x: 0, duration: 0.32, delay: 0.18, stagger: 0.035, ease: "power1.out", clearProps: "transform,opacity,visibility" },
    );
  }
  return true;
}

function renderStrategyUpgradeDashboard() {
  const container = $("#strategyUpgradeDashboard");
  const hint = $("#strategyDashboardHint");
  if (!container) return;
  const analytics = strategyAnalytics();
  if (hint) hint.textContent = `统计 ${analytics.groups.length} 套逻辑，${STRATEGY_ANALYTICS_START_DATE} 起已定价样本 ${analytics.totalPriced} 个`;
  container.innerHTML = `
    ${renderStrategyCompareCard(analytics)}
    ${renderDataHealthCard()}
    ${renderStrategyCurveCard(analytics)}
  `;
  armStrategyDashboardMotion();
}

function armStrategyDashboardMotion() {
  const band = $("#strategyDashboardBand");
  const container = $("#strategyUpgradeDashboard");
  if (!container) return;
  band?.classList.remove("motion-live");
  container.classList.remove("motion-live");
  void container.offsetWidth;
  requestAnimationFrame(() => {
    band?.classList.add("motion-live");
    container.classList.add("motion-live");
    armStrategyCurveViewportMotion(container);
  });
}

function restartStrategyCurveAnimations(curveCard) {
  if (!curveCard || !motionAllowed()) return;
  const animated = curveCard.querySelectorAll([
    ".strategy-main-chart polyline",
    ".strategy-mobile-fallback-line",
    ".strategy-last-dot",
    ".strategy-mobile-last-dot",
    ".strategy-end-label-bg",
    ".strategy-end-label",
    ".strategy-mobile-label-leader",
    ".strategy-mobile-end-label-bg",
    ".strategy-mobile-end-label",
  ].join(", "));
  animated.forEach((element) => {
    element.style.animation = "none";
  });
  void curveCard.offsetWidth;
  animated.forEach((element) => {
    element.style.animation = "";
  });
}

function armStrategyCurveViewportMotion(container) {
  const curveCard = container?.querySelector(".strategy-panel-card.curve");
  if (!curveCard || !motionAllowed()) return;
  strategyCurveObserver?.disconnect?.();
  if (!("IntersectionObserver" in window)) {
    restartStrategyCurveAnimations(curveCard);
    return;
  }
  strategyCurveObserver = new IntersectionObserver((entries, observer) => {
    if (!entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.22)) return;
    restartStrategyCurveAnimations(curveCard);
    observer.disconnect();
  }, {
    root: null,
    rootMargin: "0px 0px -12% 0px",
    threshold: [0.22, 0.5],
  });
  strategyCurveObserver.observe(curveCard);
}

function animateStrategyDashboardWithGsap(container, band) {
  const gsap = gsapEngine();
  if (!gsap || !container) return false;
  const cards = container.querySelectorAll("[data-strategy-card]");
  if (!cards.length) return false;
  const bars = container.querySelectorAll(".strategy-column-bars i");
  const lines = container.querySelectorAll(".strategy-main-chart polyline, .strategy-mobile-fallback-line");
  const dots = container.querySelectorAll(".strategy-last-dot, .strategy-mobile-last-dot");
  const labels = container.querySelectorAll(".strategy-end-label-bg, .strategy-end-label, .strategy-mobile-end-label-bg, .strategy-mobile-end-label, .strategy-mobile-label-leader");
  gsap.killTweensOf([band, ...cards, ...bars, ...lines, ...dots, ...labels].filter(Boolean));
  if (band) {
    gsap.fromTo(band, { y: 4 }, { y: 0, duration: 0.24, ease: "power1.out", clearProps: "transform" });
  }
  gsap.fromTo(
    cards,
    { autoAlpha: 0, y: 14, scale: 0.985 },
    { autoAlpha: 1, y: 0, scale: 1, duration: 0.46, stagger: 0.055, ease: "power2.out", clearProps: "transform,opacity,visibility" },
  );
  if (bars.length) {
    gsap.fromTo(
      bars,
      { autoAlpha: 0.7, scaleY: 0.2, transformOrigin: "bottom" },
      { autoAlpha: 1, scaleY: 1, duration: 0.58, delay: 0.08, stagger: 0.025, ease: "power2.out", clearProps: "transform,opacity,visibility" },
    );
  }
  if (lines.length) {
    gsap.fromTo(
      lines,
      { strokeDashoffset: 100 },
      { strokeDashoffset: 0, duration: 0.95, delay: 0.1, stagger: 0.045, ease: "power2.out" },
    );
  }
  if (dots.length) {
    gsap.fromTo(
      dots,
      { autoAlpha: 0, scale: 0.6, transformOrigin: "center" },
      { autoAlpha: 1, scale: 1, duration: 0.28, delay: 0.72, stagger: 0.035, ease: "power2.out", clearProps: "transform,opacity,visibility" },
    );
  }
  if (labels.length) {
    gsap.fromTo(
      labels,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.24, delay: 0.82, stagger: 0.015, ease: "power1.out", clearProps: "opacity,visibility" },
    );
  }
  return true;
}

function fourLayerCount(card) {
  return card.items.length;
}

function layerItemParts(value) {
  if (value && typeof value === "object") {
    const snapshot = value.latest_snapshot || {};
    const name = String(value.name || "").trim();
    const symbol = String(value.symbol || "").trim();
    const theme = String(value.theme_display || value.theme || snapshot.theme_display || snapshot.theme || value.industry || snapshot.industry || "").trim();
    const status = String(value.current_status_cn || "").trim() || fourLayerRecordStatusText(value.tracking_status, value);
    const scoreText = scoreDisplayText(value);
    const change = snapshot.change_pct;
    const changeNumber = Number(change);
    const meta = [];
    if (theme) meta.push(theme);
    if (scoreText) meta.push(scoreText);
    if (Number.isFinite(changeNumber)) meta.push(`涨跌 ${changeNumber.toFixed(2)}%`);
    if (status) meta.push(status);
    return {
      name: name || symbol || "未命名",
      symbol,
      metaLabel: theme ? "方向" : "状态",
      directionValue: theme,
      metaValue: meta.join("；") || cleanReportLine(value.entry_reason || value.blocked_reason || "待复盘"),
    };
  }
  const text = cleanReportLine(value).replace(/[。；;]\s*$/, "").trim();
  const [head, ...rest] = text.split(/[，,]/).map((item) => item.trim()).filter(Boolean);
  const [nameRaw, symbolRaw] = String(head || text).split(/\s*\/\s*/);
  const name = (nameRaw || "").trim();
  const symbol = (symbolRaw || "").trim();
  const metaText = rest.join("；");
  const direction = metaText.match(/方向[：:]\s*([^；，,]+)/)?.[1] || "";
  const board = metaText.match(/板块[：:]\s*([^；，,]+)/)?.[1] || "";
  return {
    name: name || text,
    symbol,
    metaLabel: direction ? "方向" : (board ? "板块" : "线索"),
    directionValue: direction || board,
    metaValue: direction || board || metaText || "待复盘",
  };
}

function shouldRenderOvernightBrief(card) {
  return [
    "formal_top3",
    "open_drive_watch",
    "overnight_limit_watch",
    "theme_rotation_watch",
  ].includes(String(card?.strategyGroup || ""));
}

function shouldHideOvernightAuxRows(card) {
  // 只有尾盘实际发给龙虾的策略组展示结构化隔夜摘要，避免未查询策略误显待补。
  return shouldRenderOvernightBrief(card);
}

function trimRepeatedFourLayerReason(reason, card) {
  const text = sanitizeBeginnerText(reason || "");
  return text
    .replace(/^正式(?:买入)?\s*Top3[：:]\s*/i, "")
    .replace(/^低位回流观察[：:]\s*/i, "")
    .replace(/^早盘驱动观察[：:]\s*/i, "")
    .replace(/^隔夜涨停观察[：:]\s*/i, "")
    .replace(/^题材轮动观察[：:]\s*/i, "")
    .replace(/^题材观察[：:]\s*/i, "")
    .replace(/^技术观察[：:]\s*/i, "")
    .trim();
}

function fourLayerRecordReason(item, card) {
  return trimRepeatedFourLayerReason(
    item?.display_reason
    || item?.entry_reason
    || item?.current_status_cn
    || item?.blocked_reason
    || item?.current_blocked_reason
    || "记录了这一票为什么出现在当前层级。",
    card,
  );
}

function overnightReportSummaryText(item) {
  // 龙虾隔夜摘要兜底：当原表或原计划没法结构化时，才回退到状态行与催化/风险说明。
  const report = item?.overnight_report && typeof item.overnight_report === "object" ? item.overnight_report : {};
  const status = String(report?.status || "").toLowerCase();
  const summary = sanitizeBeginnerText(report?.summary_short || "");
  if (status === "ok") return summary || "暂无龙虾结论";
  if (!status || status === "pending") return "隔夜报告待补";
  if (status === "missing") return "暂无龙虾结论";
  if (status === "timeout") return "隔夜报告超时";
  if (status === "bridge_failed") return "隔夜报告桥接失败";
  if (status === "parse_failed") return "隔夜报告解析失败";
  if (status === "invalid") return "隔夜报告产物异常";
  return "隔夜报告待补";
}

function overnightReportDetailText(item) {
  const report = item?.overnight_report && typeof item.overnight_report === "object" ? item.overnight_report : {};
  const status = String(report?.status || "").toLowerCase();
  if (status !== "ok") return "";
  const parts = [
    report?.catalyst ? `催化：${sanitizeBeginnerText(report.catalyst)}` : "",
    report?.risk ? `风险：${sanitizeBeginnerText(report.risk)}` : "",
    report?.action_hint ? `动作：${sanitizeBeginnerText(report.action_hint)}` : "",
  ].filter(Boolean);
  return parts.join(" · ");
}

function overnightReportOriginalText(item) {
  const report = item?.overnight_report && typeof item.overnight_report === "object" ? item.overnight_report : {};
  const status = String(report?.status || "").toLowerCase();
  if (status !== "ok") return "";
  return String(report?.original_text || "");
}

function parseOvernightOriginalContent(rawText) {
  const text = String(rawText || "").replace(/\r/g, "").trim();
  if (!text) return null;
  const rows = [];
  const conclusionParagraphs = [];
  const planItems = [];
  let conclusionTitle = "";
  let mode = "";
  text.split("\n").forEach((rawLine) => {
    const line = String(rawLine || "").trimEnd();
    const trimmed = line.trim();
    if (!trimmed) {
      if (mode === "conclusion") conclusionParagraphs.push("");
      return;
    }
    if (/^###\s*六维检查/.test(trimmed)) {
      mode = "table";
      return;
    }
    if (/^\|[^|]+\|[^|]+\|[^|]+\|$/.test(trimmed)) {
      const cells = trimmed
        .slice(1, -1)
        .split("|")
        .map((cell) => sanitizeBeginnerText(stripMarkdown(cell)).trim());
      if (
        cells.length >= 3
        && cells[0]
        && !["维度", "项"].includes(cells[0])
        && !cells[0].startsWith("---")
      ) {
        mode = "table";
        rows.push({
          label: cells[0],
          judgement: cells[1],
          basis: cells[2],
        });
        return;
      }
    }
    const conclusionMatch = trimmed.match(/^###\s*结论[:：]?\s*(.*)$/);
    if (conclusionMatch) {
      mode = "conclusion";
      conclusionTitle = sanitizeBeginnerText(stripMarkdown(conclusionMatch[1] || ""));
      return;
    }
    const boldConclusionMatch = trimmed.match(/^\*{0,2}结论[:：]\*{0,2}\s*(.*)$/);
    if (boldConclusionMatch) {
      mode = "conclusion";
      conclusionTitle = sanitizeBeginnerText(stripMarkdown(boldConclusionMatch[1] || ""));
      return;
    }
    if (/^###\s*隔夜交易计划/.test(trimmed)) {
      mode = "plan";
      return;
    }
    if (/^\*{0,2}交易计划[:：]\*{0,2}\s*$/.test(trimmed)) {
      mode = "plan";
      return;
    }
    if (/^###\s*/.test(trimmed)) {
      mode = "";
      return;
    }
    if (mode === "table" && trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const cells = trimmed
        .slice(1, -1)
        .split("|")
        .map((cell) => sanitizeBeginnerText(stripMarkdown(cell)).trim());
      if (
        cells.length >= 3
        && cells[0]
        && !["维度", "项"].includes(cells[0])
        && !cells[0].startsWith("---")
      ) {
        rows.push({
          label: cells[0],
          judgement: cells[1],
          basis: cells[2],
        });
      }
      return;
    }
    if (mode === "conclusion") {
      conclusionParagraphs.push(sanitizeBeginnerText(stripMarkdown(trimmed)));
      return;
    }
    if (mode === "plan" && /^-\s+/.test(trimmed)) {
      const bullet = trimmed.replace(/^-\s+/, "");
      const richMatch = bullet.match(/^\*\*(.+?)\*\*[:：]?\s*(.*)$/);
      if (richMatch) {
        planItems.push({
          label: sanitizeBeginnerText(stripMarkdown(richMatch[1] || "")),
          value: sanitizeBeginnerText(stripMarkdown(richMatch[2] || "")),
        });
        return;
      }
      const plainMatch = bullet.match(/^([^：:]{1,12})[:：]\s*(.*)$/);
      if (plainMatch) {
        planItems.push({
          label: sanitizeBeginnerText(stripMarkdown(plainMatch[1] || "")),
          value: sanitizeBeginnerText(stripMarkdown(plainMatch[2] || "")),
        });
        return;
      }
      planItems.push({
        label: "",
        value: sanitizeBeginnerText(stripMarkdown(bullet)),
      });
    }
  });
  const hasStructured = rows.length || conclusionTitle || conclusionParagraphs.some(Boolean) || planItems.length;
  return hasStructured ? { rows, conclusionTitle, conclusionParagraphs, planItems } : null;
}

function renderOvernightStructuredHtml(item) {
  const structured = parseOvernightOriginalContent(overnightReportOriginalText(item));
  if (!structured) return "";
  const conclusionBasis = structured.conclusionParagraphs.filter(Boolean).join(" ");
  const displayRows = structured.rows.slice();
  if (structured.conclusionTitle || conclusionBasis) {
    displayRows.push({
      label: "结论",
      judgement: structured.conclusionTitle || "--",
      basis: conclusionBasis || "--",
      isConclusion: true,
    });
  }
  const tableHtml = displayRows.length ? `
    <div class="four-layer-overnight-table">
      ${displayRows.map((row) => `
        <div class="four-layer-overnight-table-row${row.isConclusion ? " is-conclusion" : ""}">
          <div class="four-layer-overnight-table-cell label">${escapeHtml(row.label)}</div>
          <div class="four-layer-overnight-table-cell judgement">${escapeHtml(row.judgement || "--")}</div>
          <div class="four-layer-overnight-table-cell basis">${escapeHtml(row.basis || "--")}</div>
        </div>
      `).join("")}
    </div>
  ` : "";
  const planHtml = structured.planItems.length ? `
    <div class="four-layer-overnight-section">
      <div class="four-layer-overnight-section-title">隔夜交易计划</div>
      <div class="four-layer-overnight-plan">
        ${structured.planItems.map((itemRow) => `
          <div class="four-layer-overnight-plan-row">
            <div class="four-layer-overnight-plan-label">${escapeHtml(itemRow.label || "要点")}</div>
            <div class="four-layer-overnight-plan-value">${escapeHtml(itemRow.value || "--")}</div>
          </div>
        `).join("")}
      </div>
    </div>
  ` : "";
  return `
    <div class="four-layer-overnight-structured">
      ${tableHtml}
      ${planHtml}
    </div>
  `;
}

function renderLayerItem(item, card) {
  const parsed = layerItemParts(item);
  const returnInfo = fourLayerReturnText(item, card);
  const icon = card.key === "formal" ? "买" : (card.key === "score" ? "★" : (card.key === "daily" ? "1" : "◎"));
  const reason = fourLayerRecordReason(item, card);
  const showOvernight = shouldRenderOvernightBrief(card);
  const hideAuxRowsForOvernight = shouldHideOvernightAuxRows(card);
  const overnightStructured = showOvernight ? renderOvernightStructuredHtml(item) : "";
  const overnightOriginal = showOvernight ? sanitizeBeginnerText(overnightReportOriginalText(item)) : "";
  const hasStructuredOvernight = Boolean(overnightStructured);
  const overnightStatus = showOvernight && !hasStructuredOvernight ? overnightReportSummaryText(item) : "";
  const overnightDetail = showOvernight && !hasStructuredOvernight ? overnightReportDetailText(item) : "";
  const mainlineText = [item?.mainline_relation_label, item?.mainline_relation_detail].filter(Boolean).join(" · ");
  const catalystText = [
    item?.catalyst_status_label,
    item?.catalyst_timeliness_label,
    item?.catalyst_status_detail || item?.catalyst_timeliness_detail,
  ].filter(Boolean).join(" · ");
  const noticeText = item?.announcement_check?.status
    || item?.candidate_notice_status
    || item?.notice_status
    || (card.key === "formal" ? "checked_clear" : "旁路只读");
  const technicalText = item?.technical_decision
    || item?.candidate_validation?.validation?.technical_check?.decision
    || item?.technical?.decision
    || (card.key === "score" ? "评分旁路" : "观察");
  const layerStatusLabel = (value) => {
    const key = String(value || "").toLowerCase();
    const labels = {
      checked_clear: "公告已查",
      complete_empty: "公告已查",
      queried_empty: "已查为空",
      not_checked: "未补查",
      pass: "技术通过",
      observe: "观察",
      review_only: "只读",
      sample: "旁路样本",
    };
    return labels[key] || friendlyStatus(key || value);
  };
  const rankingConclusion = showOvernight ? overnightRankingConclusion(item?.symbol || parsed.symbol) : "";
  const overnightSummary = showOvernight
    ? (rankingConclusion || overnightStatus || overnightDetail || "隔夜摘要已落盘")
    : (catalystText || mainlineText || "只读跟踪，不改 Top3");
  const rawStrength = Number(item?.score ?? item?.strength_score ?? item?.technical_fund_score ?? 0);
  const strengthPct = rawStrength
    ? Math.max(0, Math.min(100, Math.round(rawStrength <= 1 ? rawStrength * 100 : rawStrength)))
    : 62;
  const trendTone = returnInfo.tone === "negative"
    ? "回撤观察"
    : ((returnInfo.tone === "pending" || returnInfo.tone === "flat")
      ? "等待确认"
      : (strengthPct >= 60 ? "上升趋势" : (strengthPct >= 45 ? "震荡增强" : "震荡偏弱")));
  const trendArrow = returnInfo.tone === "negative"
    ? "↓"
    : ((returnInfo.tone === "pending" || returnInfo.tone === "flat")
      ? "→"
      : (strengthPct >= 60 ? "↑" : (strengthPct >= 45 ? "→" : "↘")));
  const sparkPath = returnInfo.tone === "negative"
    ? "2,16 14,13 26,15 38,20 50,18 62,23 74,21 86,25"
    : (returnInfo.tone === "pending" ? "2,18 14,17 26,19 38,18 50,17 62,19 74,18 86,17" : "2,22 14,19 26,20 38,14 50,16 62,9 74,12 86,7");
  const boardMeta = parsed.directionValue
    ? `板块：${parsed.directionValue}`
    : (parsed.metaValue ? `${parsed.metaLabel}：${parsed.metaValue}` : "");
  return `
    <div class="four-layer-watch-item four-layer-matrix-row ${escapeHtml(returnInfo.tone)}">
      <div class="four-layer-stock-cell">
        <span class="four-layer-watch-icon">${escapeHtml(icon)}</span>
        <div>
          <strong>${escapeHtml(parsed.name)}</strong>
          <em>${escapeHtml(parsed.symbol)}</em>
        </div>
      </div>
      <div class="four-layer-matrix-module four-layer-direction-cell ${escapeHtml(returnInfo.tone)}">
        <span>方向/强度</span>
        <b>${escapeHtml(trendTone)} <i>${escapeHtml(trendArrow)}</i><small>强度 ${escapeHtml(String(strengthPct))}%</small></b>
        <div class="four-layer-strength-bar" style="--strength:${escapeHtml(String(strengthPct))}%"></div>
        ${boardMeta ? `<em class="four-layer-direction-meta">${escapeHtml(boardMeta)}</em>` : ""}
      </div>
      <div class="four-layer-matrix-module four-layer-risk-cell">
        <span>风险核验</span>
        <div class="four-layer-status-pills">
          <i>${escapeHtml(layerStatusLabel(noticeText))}</i>
          <i>${escapeHtml(layerStatusLabel(technicalText))}</i>
        </div>
      </div>
      <div class="four-layer-matrix-module four-layer-overnight-cell">
        <span>隔夜/层级摘要</span>
        <b>${escapeHtml(overnightSummary)}</b>
      </div>
      <div class="four-layer-return four-layer-return-block">
        <span>${escapeHtml(returnInfo.label)}</span>
        <b class="${escapeHtml(returnInfo.tone)}">${escapeHtml(returnInfo.text)}</b>
        <svg class="four-layer-sparkline ${escapeHtml(returnInfo.tone)}" viewBox="0 0 88 30" aria-hidden="true">
          <polyline points="${escapeHtml(sparkPath)}"></polyline>
        </svg>
      </div>
      <details class="four-layer-record-detail">
        <summary>展开依据</summary>
        ${showOvernight && hasStructuredOvernight ? overnightStructured : ""}
        ${showOvernight && !hasStructuredOvernight ? `<p><span>状态</span>${escapeHtml(overnightStatus)}</p>` : ""}
        ${showOvernight && !hasStructuredOvernight && overnightDetail ? `<p><span>说明</span>${escapeHtml(overnightDetail)}</p>` : ""}
        ${showOvernight && !hasStructuredOvernight && overnightOriginal ? `<div class="four-layer-overnight-raw"><span>龙虾原文</span><div class="four-layer-overnight-raw-text">${escapeHtml(overnightOriginal)}</div></div>` : ""}
        <p><span>为什么在这一层</span>${escapeHtml(reason)}</p>
        ${!hideAuxRowsForOvernight && mainlineText ? `<p><span>主线关系</span>${escapeHtml(mainlineText)}</p>` : ""}
        ${!hideAuxRowsForOvernight && catalystText ? `<p><span>催化口径</span>${escapeHtml(catalystText)}</p>` : ""}
        ${!hideAuxRowsForOvernight ? `<p><span>收益状态</span>${escapeHtml(returnInfo.status || returnInfo.label)} · ${escapeHtml(returnInfo.scope)}${returnInfo.missing ? ` · 缺口：${escapeHtml(returnInfo.missing)}` : ""}</p>` : ""}
        ${returnInfo.freshness ? `<p class="four-layer-freshness"><span>来源新鲜度</span>${escapeHtml(returnInfo.freshness)}</p>` : ""}
      </details>
    </div>
  `;
}

function renderFourLayerCard(card) {
  const count = fourLayerCount(card);
  const items = count ? card.items : [];
  return `
    <article class="four-layer-card ${escapeHtml(card.tone)}">
      <div class="four-layer-summary-panel">
        <div class="four-layer-title-row">
          <span class="four-layer-index">${escapeHtml(String(card.index))}</span>
          <h3>${escapeHtml(card.title)}</h3>
        </div>
        <div class="four-layer-count"><strong>${escapeHtml(String(count))}</strong><span>只</span></div>
        <p class="four-layer-subtitle">${escapeHtml(card.subtitle)}</p>
        <footer>
          <strong>${escapeHtml(card.usageTitle)}</strong>
          <span>${escapeHtml(card.usage)}</span>
        </footer>
      </div>
      <div class="four-layer-table-panel">
        <div class="four-layer-table-head" aria-hidden="true">
          <span>标的</span>
          <span>方向强度</span>
          <span>风险核验</span>
          <span>隔夜摘要</span>
          <span>收益</span>
        </div>
        <div class="four-layer-item-box ${count ? "" : "empty"}">
          ${count ? items.map((item) => renderLayerItem(item, card)).join("") : `
            <div class="four-layer-empty-icon">▥</div>
            <strong>暂无标的</strong>
            <span>${escapeHtml(card.empty)}</span>
          `}
        </div>
      </div>
    </article>
  `;
}

function renderFourLayerCompare() {
  const container = $("#fourLayerCompare");
  const hint = $("#fourLayerHint");
  if (!container) return;
  const data = fourLayerReportData();
  if (!data.lines.length) {
    container.innerHTML = `<p class="empty">当前报告还没有四层逻辑对比内容。生成或重新导出收盘报后这里会显示。</p>`;
    if (hint) hint.textContent = "暂无四层数据";
    return;
  }
  const period = currentPanelPeriod();
  if (hint) hint.textContent = period === "close" ? "旁路层只复盘，不等于买入推荐" : "正式持仓和旁路观察分开看";
  container.innerHTML = `
    <div class="four-layer-grid">
      ${data.cards.map((card) => renderFourLayerCard(card)).join("")}
    </div>
  `;
}

function renderHeroPicks() {
  const container = $("#heroPicks");
  if (!container) return;
  const fourLayerData = fourLayerReportData();
  const auditText = visibilityAuditText();
  const sourceData = candidateSourceData();
  const sourceStripHtml = renderCandidateSourceStrip();
  if (fourLayerData.lines.length || sourceData.cards.length || sourceData.relationDetail || sourceData.selectionRule) {
    container.innerHTML = `
      <div class="hero-trading-board">
        <section class="hero-four-layer-board">
          <div class="hero-board-title">
            <span>自选股强弱分层</span>
            <em>${escapeHtml(currentPanelPeriod() === "close" ? "正式买入和旁路观察分开看" : "正式持仓和旁路观察分开看")}</em>
          </div>
          ${fourLayerData.lines.length ? `
            <div class="four-layer-grid compact">
              ${fourLayerData.cards.map((card) => renderFourLayerCard(card)).join("")}
            </div>
          ` : `<p class="empty">当前报告还没有四层逻辑对比内容。</p>`}
          ${auditText ? heroTextRow("可见性审计", auditText) : ""}
        </section>
        ${sourceStripHtml}
      </div>
    `;
    return;
  }
  const sourceState = panelStateForView();
  const candidates = Array.isArray(sourceState.candidates) ? sourceState.candidates : [];
  const buy = candidates.filter((item) => candidateTier(item) === "buy").slice(0, 3);
  const watch = candidates.filter((item) => candidateTier(item) === "watch").slice(0, 4);
  const technical = candidates.filter((item) => candidateTier(item) === "technical").slice(0, 3);
  const score = candidates.filter((item) => candidateTier(item) === "score").slice(0, 3);
  const other = candidates.filter((item) => candidateTier(item) === "other").slice(0, 3);
  const rows = [
    heroPickLine("正式买入", buy, "无"),
    heroPickLine("重点观察", watch.length ? watch : technical, "无"),
  ];
  const compareLayer = score.length ? score : other;
  if (compareLayer.length) rows.push(heroPickLine("复盘对比", compareLayer, "无"));
  if (auditText) rows.push(heroTextRow("可见性审计", auditText));
  container.innerHTML = `
    <div class="hero-picks-title">今日核心票</div>
    ${rows.join("")}
  `;
}

function renderHeader() {
  const sourceState = panelStateForView();
  const displayDate = selectedPanelDate || state.run?.date || "--";
  const historyReports = selectedHistoryReports();
  const isHistoryFallback = Boolean(historyReports.length);
  const reports = orderedReports();
  const readyReports = reports.filter(isReportReady).length;
  const displayStatus = readyReports === REPORT_ORDER.length ? "complete" : (readyReports > 0 ? "partial" : "empty");
  const runDate = $("#runDate");
  const runStatus = $("#runStatus");
  const runPeriod = $("#runPeriod");
  if (runDate) runDate.textContent = displayDate;
  if (runStatus) {
    runStatus.className = `status-pill ${statusClass(displayStatus)}`;
    runStatus.textContent = isHistoryFallback
      ? (readyReports === REPORT_ORDER.length ? "历史完整" : "历史部分")
      : (readyReports === REPORT_ORDER.length ? "四报已生成" : (readyReports > 0 ? "部分生成" : "未开始"));
  }
  if (runPeriod) runPeriod.textContent = isHistoryFallback ? `历史日期：${readyReports}/4 已生成` : `当前进度：${readyReports}/4 已生成`;
  const subtitle = $("#headerSubtitle");
  if (subtitle) subtitle.textContent = `${sourceState.project?.name || "tdx-ag-three-period-split"} · 默认隐藏工程字段`;
}

function renderTodayJudgement() {
  const judgement = deriveTodayJudgement();
  const title = $("#todayJudgementTitle");
  const text = $("#todayJudgementText");
  if (title) title.textContent = "今日核心票";
  if (text) text.textContent = judgement.text || judgement.title || "具体买入和观察对象以正式报告为准。";
  renderHeroPicks();

  const reports = orderedReports();
  const readyReports = reports.filter(isReportReady).length;
  const historyReports = selectedHistoryReports();
  const isHistoryFallback = Boolean(historyReports.length);
  const sourceState = panelStateForView();
  const gates = Array.isArray(sourceState.gates) ? sourceState.gates : [];
  const cautiousGates = gates.filter((gate) => ["headwind", "missing", "blocked", "fail", "failed", "error"].includes(String(gate.status || "").toLowerCase())).length;
  const candidates = Array.isArray(sourceState.candidates) ? sourceState.candidates : [];
  const candidateCount = sourceState.summary?.candidates_visible ?? candidates.length;
  const quickStats = $("#quickStats");
  if (quickStats) {
    quickStats.hidden = true;
    quickStats.innerHTML = [
      quickStat("报告进度", `${readyReports}/${reports.length || 4}`, "已生成"),
      quickStat("当前节奏", isHistoryFallback ? "历史报告" : (cautiousGates ? `${cautiousGates} 个风险点` : "暂无硬阻断"), isHistoryFallback ? "以当日完整报告为准" : (cautiousGates ? "先观察，别追高" : "按报告继续看")),
      quickStat("面板列表", isHistoryFallback ? "见完整报告" : `${candidateCount || 0} 个`, isHistoryFallback ? "历史详情已索引" : (candidateCount ? "展示对象，不等于买入" : "暂无要跟的票")),
    ].join("");
  }
}

function quickStat(label, value, hint) {
  return `
    <article class="quick-stat">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <em>${escapeHtml(hint)}</em>
    </article>
  `;
}

function renderReportProgress() {
  const reports = orderedReports();
  const chain = workflowChain();
  ensureWorkflowSelection(chain);
  const readyReports = reports.filter(isReportReady).length;
  $("#reportProgressHint").textContent = `${readyReports}/${reports.length || 4} 已生成`;
  $("#reportProgress").innerHTML = reports
    .map((report, index) => {
      const ready = isReportReady(report);
      const key = normalizeReportKey(report.key || report.report_type);
      const active = key === activeWorkflowReport;
      const status = ready ? "ok" : pendingReportStatus(report);
      const candidateCount = Number(report.candidate_count || 0);
      const universeCount = Number(report.candidate_universe_count || report.scan_pool_count || 0);
      const buyTop3Count = Number(report.buy_top3_count || 0);
      const handoffCount = Number(report.handoff_count || 0);
      const detail = ready
        ? reportProgressDetail(key, candidateCount, handoffCount, report.recommendation_mode, universeCount, buyTop3Count)
        : pendingReportDetail(report);
      const historyFallback = isHistoryDateFallbackActive();
      const chainCount = historyFallback ? 0 : (chain[key]?.nodes?.length || 0);
      return `
        <button class="progress-card ${ready ? "ready" : "pending"} ${active ? "active" : ""}" type="button" data-workflow-report="${key}">
          <div class="progress-step">${index + 1}</div>
          <div>
            <h3>${escapeHtml(reportLabel(report))}</h3>
            ${pill(status, ready ? "已生成" : friendlyStatus(status))}
            <p>${escapeHtml(detail)}</p>
            <span class="progress-action">${historyFallback ? "查看完整报告" : (chainCount ? `查看 ${chainCount} 步链路` : "暂无链路")}</span>
          </div>
        </button>
      `;
    })
    .join("");
  $$("#reportProgress .progress-card").forEach((button) => {
    button.addEventListener("click", () => {
      activeWorkflowReport = button.dataset.workflowReport || "close";
      activeWorkflowNodeId = "";
      renderReportProgress();
      renderTodayJudgement();
      renderFourLayerCompare();
      renderWorkflowChain();
    });
  });
}

function reportProgressDetail(key, candidateCount, handoffCount, mode, universeCount = 0, buyTop3Count = 0) {
  if (key === "review") return "只做复盘归因，不给新票。";
  if (key === "close") {
    const scanText = universeCount ? `全池扫描 ${universeCount} 只` : "已完成全池扫描";
    return `${scanText}，次日验证 ${handoffCount} 只，买入 Top3 ${buyTop3Count} 只。`;
  }
  if (candidateCount || handoffCount) return `验证对象 ${candidateCount || handoffCount} 个，交接观察 ${handoffCount} 个。`;
  if (mode) return `处理方式：${friendlyStatus(mode)}。`;
  return "已生成，可到完整报告查看原文。";
}

function workflowChain() {
  if (isHistoryDateFallbackActive()) {
    return REPORT_ORDER.reduce((acc, key) => {
      acc[key] = { label: REPORT_LABELS[key], nodes: [] };
      return acc;
    }, {});
  }
  const sourceState = panelStateForView();
  const chain = sourceState.workflow_chain || {};
  return REPORT_ORDER.reduce((acc, key) => {
    const item = chain[key] || {};
    acc[key] = {
      label: item.label || REPORT_LABELS[key],
      nodes: Array.isArray(item.nodes) ? item.nodes.slice().sort((a, b) => Number(a.order || 0) - Number(b.order || 0)) : [],
    };
    return acc;
  }, {});
}

function ensureWorkflowSelection(chain) {
  const current = normalizeReportKey(panelStateForView().run?.period);
  const preferred = REPORT_ORDER.includes(current) ? current : "close";
  const hasAnyNodes = REPORT_ORDER.some((key) => chain[key]?.nodes?.length);
  if (!hasAnyNodes) {
    if (!REPORT_ORDER.includes(activeWorkflowReport)) activeWorkflowReport = preferred;
    activeWorkflowNodeId = "";
    return;
  }
  if (!REPORT_ORDER.includes(activeWorkflowReport)) activeWorkflowReport = preferred;
  const nodes = chain[activeWorkflowReport]?.nodes || [];
  if (!nodes.some((node) => node.id === activeWorkflowNodeId)) {
    activeWorkflowNodeId = nodes[0]?.id || "";
  }
}

function asList(value) {
  if (Array.isArray(value)) return value.filter((item) => item !== null && item !== undefined && item !== "");
  if (value === null || value === undefined || value === "") return [];
  return [value];
}

function renderTextList(items, emptyText = "无") {
  const values = asList(items);
  if (!values.length) return `<p class="empty">${escapeHtml(emptyText)}</p>`;
  return `<ul>${values.map((item) => `<li>${escapeHtml(sanitizeBeginnerText(item))}</li>`).join("")}</ul>`;
}

function plainListText(items, emptyText = "没有记录") {
  const values = asList(items).map((item) => sanitizeBeginnerText(item)).filter(Boolean);
  if (!values.length) return emptyText;
  if (values.length <= 3) return values.join("、");
  return `${values.slice(0, 3).join("、")}等 ${values.length} 项`;
}

function renderWorkflowField(label, contentHtml) {
  return `
    <section class="workflow-field">
      <h4>${escapeHtml(label)}</h4>
      ${contentHtml}
    </section>
  `;
}

function reportForKey(reportKey) {
  const key = normalizeReportKey(reportKey);
  return orderedReports().find((report) => normalizeReportKey(report.key || report.report_type || report.type || report.period) === key) || null;
}

function gateForKey(gateKey) {
  const sourceState = panelStateForView();
  const gates = Array.isArray(sourceState.gates) ? sourceState.gates : [];
  return gates.find((gate) => String(gate.key || "").toLowerCase() === gateKey) || null;
}

function workflowGateKeys(node) {
  const id = String(node?.id || "");
  if (id.includes("domestic_intelligence")) return [];
  if (id.includes("outer")) return ["outer"];
  if (id.includes("domestic")) return ["domestic"];
  if (id.includes("emotion") || id.includes("trend")) return ["emotion_trend"];
  if (id.includes("gates_recheck")) return ["outer", "domestic", "emotion_trend"];
  return [];
}

function reportDataStatsLines(reportKey) {
  const report = reportForKey(reportKey);
  if (!report) return [];
  const key = normalizeReportKey(reportKey);
  if (key === "review") return ["复盘报只回放和归因，不生成新候选，也不输出买入 Top3。"];
  const lines = [];
  const scanPool = Number(report.scan_pool_count || report.candidate_universe_count || 0);
  const candidateCount = Number(report.candidate_count || 0);
  const handoffCount = Number(report.handoff_count || 0);
  const buyTop3Count = Number(report.buy_top3_count || 0);
  if (key === "close" && scanPool) lines.push(`全自选股扫描 ${scanPool} 只；买入/交接以正式报告为准，不等于推荐 ${scanPool} 只。`);
  if (candidateCount) lines.push(`面板当前展示/验证对象 ${candidateCount} 个。`);
  lines.push(`买入 Top3 ${buyTop3Count} 只。`);
  lines.push(`交接到下一步的对象 ${handoffCount} 个。`);
  if (report.recommendation_mode) lines.push(`正式报告处理方式：${friendlyStatus(report.recommendation_mode)}。`);
  return lines;
}

function friendlyEntryStyle(value) {
  const text = String(value || "").toLowerCase();
  const labels = {
    observe_only: "只观察",
    pullback_confirm: "等回踩确认",
    breakout_confirm: "突破确认",
    no_chase: "不追高",
    invalid: "无效",
  };
  return labels[text] || value || "";
}

function formatSignedNumber(value, digits = 2) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "";
  const fixed = number.toFixed(digits).replace(/\.?0+$/, "");
  return number > 0 ? `+${fixed}` : fixed;
}

function candidateLayerLabel(candidate) {
  const tier = String(candidate?.observation_tier || "").toLowerCase();
  const labels = {
    buy_top3: "买入 Top3",
    a_watch: "A 类观察",
    b_watch: "B 类观察",
    c_backup: "C 类备查",
    rejected: "剔除层",
  };
  return labels[tier] || "";
}

function formalStatusWord(value) {
  const text = String(value || "").toLowerCase();
  const labels = {
    tailwind: "偏顺风",
    headwind: "偏谨慎",
    flat: "中性",
    neutral: "中性",
    top3: "可输出买入前三名",
    cash: "空仓/不买入",
    missing: "数据不够",
    incomplete: "扫描不完整",
    suspect: "需谨慎",
    ok: "正常",
    pass: "通过",
    complete: "完成",
    true: "是",
    false: "否",
  };
  return labels[text] || value || "";
}

function kvValue(text, key) {
  const match = String(text || "").match(new RegExp(`${key}=([^\\s;，。]+)`));
  return match ? match[1] : "";
}

function formatFormalSignalSegment(segment) {
  const text = sanitizeBeginnerText(String(segment || "").trim());
  if (!text.includes("=")) return text;

  if (text.includes("index_trend=")) {
    const status = formalStatusWord(kvValue(text, "index_trend"));
    const change = formatSignedNumber(kvValue(text, "change_pct"));
    return `指数趋势${status}${change ? `，涨跌约 ${change}%` : ""}`;
  }
  if (text.includes("intraday_15m_trend=")) {
    const status = formalStatusWord(kvValue(text, "intraday_15m_trend"));
    const change = formatSignedNumber(kvValue(text, "change_pct"));
    return `15 分钟走势${status}${change ? `，涨跌约 ${change}%` : ""}`;
  }
  if (text.includes("turnover_signal=")) {
    const status = formalStatusWord(kvValue(text, "turnover_signal"));
    const ratio = formatSignedNumber(kvValue(text, "ratio"));
    const quality = formalStatusWord(kvValue(text, "quality"));
    return `成交额信号${status}${ratio ? `，量能约为参考基准 ${ratio} 倍` : ""}${quality ? `，数据质量${quality}` : ""}`;
  }
  if (text.includes("limit_up_count=") || text.includes("limit_down_count=")) {
    const up = kvValue(text, "limit_up_count");
    const down = kvValue(text, "limit_down_count");
    return `涨停 ${up || "--"} 家，跌停 ${down || "--"} 家`;
  }
  if (text.includes("streak_structure=")) {
    const status = formalStatusWord(kvValue(text, "streak_structure"));
    const maxStreak = kvValue(text, "max_streak");
    const interpretation = text.match(/interpretation=(.+)$/)?.[1] || "";
    return `连板结构${status}${maxStreak ? `，最高约 ${maxStreak} 连板` : ""}${interpretation ? `，口径：${interpretation.replace(/_/g, " ")}` : ""}`;
  }
  if (text.includes("high_level_feedback=")) {
    const status = formalStatusWord(kvValue(text, "high_level_feedback"));
    const avgChange = formatSignedNumber(kvValue(text, "avg_change_pct"));
    return `高位股反馈${status}${avgChange ? `，平均涨跌约 ${avgChange}%` : ""}`;
  }

  return text
    .replace(/_/g, " ")
    .replace(/\btailwind\b/g, "偏顺风")
    .replace(/\bheadwind\b/g, "偏谨慎")
    .replace(/\bsuspect\b/g, "需谨慎")
    .replace(/\bchange pct\b/g, "涨跌幅")
    .replace(/\bratio\b/g, "比例")
    .replace(/\bquality\b/g, "数据质量");
}

function formatFormalReportText(value) {
  const text = sanitizeBeginnerText(value);
  if (!text.includes("=")) return text;
  return text
    .split(/[；;]/)
    .map(formatFormalSignalSegment)
    .filter(Boolean)
    .join("；");
}

function candidateLine(candidate) {
  const name = candidate?.name || "";
  const symbol = candidate?.symbol || "";
  const parts = [`${name || symbol}${name && symbol ? `（${symbol}）` : ""}`];
  const layer = candidateLayerLabel(candidate);
  if (layer) parts.push(layer);
  const scoreText = scoreDisplayText(candidate);
  if (scoreText) parts.push(scoreText);
  if (candidate?.change_pct !== "" && candidate?.change_pct !== undefined && candidate?.change_pct !== null) parts.push(`涨跌 ${candidate.change_pct}%`);
  if (candidate?.turnover_rate !== "" && candidate?.turnover_rate !== undefined && candidate?.turnover_rate !== null) parts.push(`换手 ${candidate.turnover_rate}%`);
  if (candidate?.volume_ratio !== "" && candidate?.volume_ratio !== undefined && candidate?.volume_ratio !== null) parts.push(`量比 ${candidate.volume_ratio}`);
  const theme = candidate?.theme_display || candidate?.theme;
  if (theme) parts.push(`方向 ${theme}`);
  if (candidate?.entry_style) parts.push(`打法 ${friendlyEntryStyle(candidate.entry_style)}`);
  if (candidate?.mainline_relation_label) parts.push(`主线关系 ${sanitizeBeginnerText(candidate.mainline_relation_label)}`);
  if (candidate?.execution_position_label && candidate.execution_position_label !== candidate?.mainline_relation_label) {
    parts.push(`执行归类 ${sanitizeBeginnerText(candidate.execution_position_label)}`);
  }
  if (candidate?.catalyst_status_label) parts.push(`催化 ${sanitizeBeginnerText(candidate.catalyst_status_label)}`);
  if (candidate?.catalyst_timeliness_label) parts.push(`时效 ${sanitizeBeginnerText(candidate.catalyst_timeliness_label)}`);
  const warnings = asList(candidate?.validation?.data_quality_warnings || candidate?.data_quality_warnings).slice(0, 1);
  if (warnings.length) parts.push(`注意：${sanitizeBeginnerText(warnings[0])}`);
  return parts.filter(Boolean).join("；");
}

function candidateDataLines(reportKey, limit = 5) {
  const sourceState = panelStateForView();
  const report = reportForKey(reportKey);
  const key = normalizeReportKey(reportKey);
  const buyTop3Count = Number(report?.buy_top3_count || 0);
  const handoffCount = Number(report?.handoff_count || 0);
  const formalCandidateCount = Number(report?.candidate_count || 0);
  if (key === "close" && !buyTop3Count && !handoffCount && !formalCandidateCount) {
    return ["正式买入 Top3 0 只，交接对象 0 只；全池前排只作扫描参考，不是正式名单。"];
  }
  const candidates = Array.isArray(sourceState?.candidates) ? sourceState.candidates : [];
  if (!candidates.length) return ["当前面板没有可展示候选；以完整报告正文为准。"];
  return candidates.slice(0, limit).map(candidateLine);
}

function reportExcerptLines(reportKey, limit = 6) {
  const report = reportForKey(reportKey);
  const markdown = reportMarkdown(report);
  const lines = String(markdown || "")
    .split(/\r?\n/)
    .map((line) => stripMarkdown(line.replace(/^【(.+)】$/, "【$1】")).trim())
    .filter((line) => line && !/^Full external market data/i.test(line))
    .map(formatFormalReportText);
  return lines.slice(0, limit);
}

function nodeDeclaredDataLines(node) {
  return asList(node?.data_used_cn)
    .map(formatFormalReportText)
    .filter(Boolean);
}

function uniqueWorkflowLines(lines, limit = 8) {
  return Array.from(new Set(lines.filter(Boolean))).slice(0, limit);
}

function formalWorkflowDataLines(node, reportKey) {
  const id = String(node?.id || "");
  const declared = nodeDeclaredDataLines(node);
  const gateKeys = workflowGateKeys(node);
  if (gateKeys.length) {
    const lines = [...declared];
    gateKeys.forEach((gateKey) => {
      const gate = gateForKey(gateKey);
      if (!gate) return;
      lines.push(`${gate.label || gateKey}：${workflowNodeStatusText(gate.status)}，分数 ${gate.score ?? "--"}，证据 ${gate.evidence_count ?? 0} 条。`);
      asList(gate.top_evidence).slice(0, 5).forEach((item) => lines.push(formatFormalReportText(item)));
      if (gate.reason) lines.push(`正式报结论：${formatFormalReportText(gate.reason)}`);
    });
    return lines.length ? uniqueWorkflowLines(lines, 10) : [workflowResultText(node)];
  }
  if (/candidate|technical|handoff|verify|execution|intraday|previous|morning_verify|afternoon/.test(id)) {
    return uniqueWorkflowLines([...declared, ...candidateDataLines(reportKey, 4)], 9);
  }
  if (/report|generate|markdown|snapshot|protocol|rule|replay|review|attribution|quality/.test(id)) {
    const excerpt = reportExcerptLines(reportKey, 7);
    return uniqueWorkflowLines([...declared, ...(excerpt.length ? excerpt : [workflowResultText(node)])], 10);
  }
  return uniqueWorkflowLines([...(declared.length ? declared : reportDataStatsLines(reportKey)), workflowResultText(node)], 8);
}

function formalWorkflowImpactLines(node, reportKey) {
  const report = reportForKey(reportKey);
  const key = normalizeReportKey(reportKey);
  const lines = [];
  const gateKeys = workflowGateKeys(node);
  gateKeys.forEach((gateKey) => {
    const gate = gateForKey(gateKey);
    if (!gate) return;
    const status = String(gate.status || "").toLowerCase();
    if (["headwind", "missing", "incomplete", "blocked", "failed"].includes(status)) {
      lines.push(`${gate.label || gateKey}偏谨慎，只影响仓位和节奏，不直接决定买入 Top3。`);
    } else {
      lines.push(`${gate.label || gateKey}没有形成硬阻断，只作为环境背景参考。`);
    }
  });
  if (key === "close") lines.push("收盘报可以全池重扫，但最终只把合格对象交给次日早报验证。");
  if (key === "morning") lines.push("早报只验证上一收盘报交下来的对象，不从全池重新选票。");
  if (key === "noon") lines.push("午报只看早报对象上午兑现情况，决定午后继续看、放弃或观察。");
  if (key === "review") lines.push("复盘报只做回放和归因，不给新票。");
  if (report?.recommendation_mode) lines.push(`当前正式处理方式：${friendlyStatus(report.recommendation_mode)}。`);
  return Array.from(new Set(lines.filter(Boolean)));
}

function formalWorkflowRiskLines(node) {
  const sourceState = panelStateForView();
  const risks = asList(node?.missing_or_risk_cn)
    .map(sanitizeBeginnerText)
    .filter((item) => item && item !== "无关键缺失" && !item.includes("未落盘文件"));
  const includeCandidateWarnings = shouldShowCandidateWarningsForNode(node) && !isHistoryDateFallbackActive();
  const candidateWarnings = includeCandidateWarnings ? (Array.isArray(sourceState.candidates) ? sourceState.candidates : [])
    .flatMap((candidate) => asList(candidate?.validation?.data_quality_warnings || candidate?.data_quality_warnings))
    .map(sanitizeBeginnerText)
    .filter(Boolean)
    .slice(0, 3) : [];
  return Array.from(new Set([...risks, ...candidateWarnings])).slice(0, 5);
}

function workflowDebugFilesHtml(node) {
  const reads = renderTextList(node?.read_files, "没有记录读取文件");
  const writes = renderTextList(node?.write_files, "没有记录生成文件");
  return `
    <details class="workflow-debug-details">
      <summary>排查用工程文件</summary>
      <div class="workflow-detail-grid workflow-detail-grid-modal">
        ${renderWorkflowField("读取文件", reads)}
        ${renderWorkflowField("生成文件", writes)}
      </div>
    </details>
  `;
}

function workflowProvenanceLines(node) {
  const conclusions = asList(node?.key_conclusion_provenance);
  if (conclusions.length) {
    return conclusions.flatMap((item) => {
      const label = sanitizeBeginnerText(item?.conclusion_cn || "关键结论");
      const freshness = sanitizeBeginnerText(item?.freshness_cn || "");
      const files = asList(item?.source_files)
        .map((file) => {
          const role = file?.role === "write" ? "生成" : "读取";
          const name = sanitizeBeginnerText(file?.file || file?.relative_path || file?.path || "");
          const time = sanitizeBeginnerText(file?.modified_at || "");
          const status = workflowNodeStatusText(file?.status || (file?.exists ? "ok" : "missing"));
          return name ? `${role} ${name}：${status}${time ? `，${time}` : ""}` : "";
        })
        .filter(Boolean)
        .slice(0, 4);
      return [`${label}：${freshness || "可追溯"}`, ...files];
    }).filter(Boolean).slice(0, 8);
  }
  return asList(node?.data_provenance)
    .map((file) => {
      const role = file?.role === "write" ? "生成" : "读取";
      const name = sanitizeBeginnerText(file?.file || file?.relative_path || file?.path || "");
      const time = sanitizeBeginnerText(file?.modified_at || "");
      const status = workflowNodeStatusText(file?.status || (file?.exists ? "ok" : "missing"));
      return name ? `${role} ${name}：${status}${time ? `，${time}` : ""}` : "";
    })
    .filter(Boolean)
    .slice(0, 8);
}

function workflowNodeStatusText(status) {
  const text = String(status || "").toLowerCase();
  const labels = {
    ok: "完成",
    success: "完成",
    complete: "完成",
    done: "完成",
    pass: "完成",
    complete_empty: "已跑完，无命中",
    headwind: "环境偏谨慎",
    flat: "中性",
    neutral: "中性",
    top3: "可输出买入前三名",
    cash: "空仓/不买入",
    missing: "数据不够",
    incomplete: "扫描不完整",
    warning: "需留意",
    warn: "需留意",
    caution: "需留意",
    invalid: "异常",
    error: "异常",
    failed: "失败",
    fail: "失败",
    blocked: "被规则拦住",
    ask_for_more: "需要补数据",
    observe: "观察",
    downgrade: "降级观察",
    cancel: "取消/放弃",
    skip: "跳过",
    review_only: "仅复盘",
  };
  return labels[text] || friendlyStatus(status);
}

function workflowStageName(index, total) {
  const ratio = total > 0 ? index / total : 0;
  if (ratio < 0.28) return "取数与证据";
  if (ratio < 0.58) return "筛选与判断";
  if (ratio < 0.8) return "收益与验证";
  return "复盘与输出";
}

function workflowNodeGroups(nodes) {
  return nodes.reduce((groups, node, index) => {
    const name = workflowStageName(index, nodes.length);
    const current = groups[groups.length - 1];
    if (!current || current.name !== name) {
      groups.push({ name, nodes: [] });
    }
    groups[groups.length - 1].nodes.push(node);
    return groups;
  }, []);
}

function workflowMetricCount(nodes, matcher) {
  return nodes.filter((node) => matcher(String(node.status || "").toLowerCase())).length;
}

function beginnerSourceText(value) {
  const replacements = [
    [/gpt-external-market-data/g, "外围数据 skill"],
    [/mx-search/g, "金融搜索归因"],
    [/tdx-auto-export-zxg/g, "通达信自选股自动导出"],
    [/通达信 UI 导出/g, "通达信界面导出"],
    [/parse_watchlist\.py/g, "自选股解析脚本"],
    [/build_outer_gate\.py/g, "外围闸门脚本"],
    [/build_domestic_gate\.py/g, "国内闸门脚本"],
    [/build_domestic_intelligence\.py/g, "国内信息增强整理"],
    [/build_news_notice_sentiment\.py/g, "新闻公告情绪摘要"],
    [/build_emotion_trend_gate\.py/g, "情绪趋势闸门脚本"],
    [/filter_candidates\.py/g, "候选过滤脚本"],
    [/build_sector_split\.py/g, "板块裂变脚本"],
    [/technical_check\.py --tdxclaw-data/g, "技术面检查脚本"],
    [/technical_check\.py/g, "技术面检查脚本"],
    [/score_candidates\.py/g, "综合评分脚本"],
    [/build_report_snapshot\.py/g, "报告快照脚本"],
    [/render_report_template\.py/g, "固定模板渲染脚本"],
    [/report_protocol_validate\.py/g, "报告协议校验脚本"],
    [/validate_handoff_chain\.py/g, "交接链路校验脚本"],
    [/previous_report_verify\.py/g, "上一阶段验证脚本"],
    [/execution_engine\.py/g, "执行动作脚本"],
    [/review_stats\.py/g, "复盘统计脚本"],
    [/performance_attribution\.py/g, "收益/错因归因脚本"],
    [/replay_backtest\.py/g, "历史回放脚本"],
    [/reverse_miss_scan\.py/g, "漏选扫描脚本"],
    [/build_external_skill_enrichment\.py/g, "金融证据增强整理"],
    [/build_paper_trade_ledger\.py/g, "模拟跟单盈亏计算"],
    [/validate_data_quality\.py/g, "数据质量检查脚本"],
    [/tdx_quotes/g, "行情快照"],
    [/tdx_kline/g, "K线/分钟线"],
    [/tdx_screener/g, "市场筛选查询"],
    [/wenda_news_query/g, "授权新闻查询"],
    [/wenda_notice_query/g, "授权公告查询"],
    [/domestic-intelligence/g, "国内信息增强"],
  ];
  return replacements.reduce((text, [pattern, replacement]) => text.replace(pattern, replacement), sanitizeBeginnerText(value || ""));
}

function formalSourceText(value) {
  const text = beginnerSourceText(value)
    .replace(/外围数据 skill\s*\/\s*外围闸门脚本/g, "外围行情和外围归因")
    .replace(/金融搜索归因/g, "新闻归因")
    .replace(/通达信自选股自动导出\s*\/\s*通达信界面导出/g, "通达信当前自选股")
    .replace(/自选股解析脚本/g, "自选股字段整理")
    .replace(/外围闸门脚本/g, "外围行情整理")
    .replace(/国内闸门脚本/g, "国内消息和公告整理")
    .replace(/国内信息增强整理/g, "国内信息增强整理")
    .replace(/情绪趋势闸门脚本/g, "市场情绪和趋势整理")
    .replace(/候选过滤脚本/g, "候选过滤规则")
    .replace(/板块裂变脚本/g, "板块和题材整理")
    .replace(/技术面检查脚本/g, "技术面检查")
    .replace(/综合评分脚本/g, "候选综合评分")
    .replace(/报告快照脚本/g, "报告结构整理")
    .replace(/固定模板渲染脚本/g, "正式报告模板")
    .replace(/报告协议校验脚本/g, "报告规则校验")
    .replace(/交接链路校验脚本/g, "交接链路校验")
    .replace(/上一阶段验证脚本/g, "上一阶段对象验证")
    .replace(/执行动作脚本/g, "午后动作判断")
    .replace(/复盘统计脚本/g, "复盘统计")
    .replace(/收益\/错因归因脚本/g, "收益和错因归因")
    .replace(/历史回放脚本/g, "历史回放")
    .replace(/漏选扫描脚本/g, "漏选扫描")
    .replace(/金融证据增强整理/g, "金融证据增强整理")
    .replace(/模拟跟单盈亏计算/g, "模拟跟单盈亏计算")
    .replace(/数据质量检查脚本/g, "数据质量检查");
  return text.replace(/脚本/g, "处理");
}

function workflowResultText(node) {
  const status = workflowNodeStatusText(node?.status);
  const raw = sanitizeBeginnerText(node?.result_cn || "");
  if (!raw) return status;
  if (raw.includes(status) || ["完成", "已生成"].includes(status)) return raw;
  return `${status}：${raw}`;
}

function workflowDataPlainSummary(node) {
  const reportKey = activeWorkflowReportKey();
  const facts = formalWorkflowDataLines(node, reportKey).slice(0, 2).join("；");
  const impact = formalWorkflowImpactLines(node, reportKey).slice(0, 1).join("；");
  return `正式报口径：${facts || workflowResultText(node)}。${impact || "这一步只解释已落盘事实，不临时生成新结论。"}`;
}

function workflowDataExplainHtml(node, reportKey) {
  const riskItems = formalWorkflowRiskLines(node);
  return `
    <section class="workflow-data-summary">
      <h4>正式报口径</h4>
      <p>${escapeHtml(workflowDataPlainSummary(node))}</p>
    </section>
    <div class="workflow-detail-grid workflow-detail-grid-modal">
      ${renderWorkflowField("正式报看到的数据", renderTextList(formalWorkflowDataLines(node, reportKey), "没有记录正式报数据"))}
      ${renderWorkflowField("对报告有什么影响", renderTextList(formalWorkflowImpactLines(node, reportKey), "没有形成额外影响"))}
      ${renderWorkflowField("数据来源白话", `<p>${escapeHtml(formalSourceText(node?.source_method_cn || "没有记录获取方式"))}</p>`)}
      ${renderWorkflowField("关键结论溯源", renderTextList(workflowProvenanceLines(node), "没有记录关键结论来源"))}
      ${renderWorkflowField("还缺什么/哪里要谨慎", renderTextList(riskItems, "没有记录关键缺口"))}
    </div>
    ${workflowDebugFilesHtml(node)}
  `;
}

function workflowLogicLines(node) {
  const id = String(node.id || "");
  const title = String(node.title_cn || "");
  const goal = sanitizeBeginnerText(node.plain_goal_cn || "暂无说明");
  const result = sanitizeBeginnerText(node.result_cn || workflowNodeStatusText(node.status));
  const risk = asList(node.missing_or_risk_cn).map(sanitizeBeginnerText).join("；") || "无关键缺失";
  const commonTail = [
    `通过条件：该步骤所需证据完整、字段能对应到规则、结果没有触发硬性拦截，才允许进入下一步。`,
    `失败规则（不是本次实际缺口）：如果证据缺失、字段不完整、前后报告交接不一致，或结果触发风控，就只能观察、降级、取消或空仓，不能硬凑结论。`,
    `当前落盘判断：${result}`,
    `当前需要注意：${risk}`,
  ];
  const rules = [
    {
      match: () => id.includes("read_close") || id.includes("read_morning") || id.includes("read_reports"),
      lines: [
        `目标：读取上一阶段已经正式落盘的报告，确认本阶段要继承或回放的对象。`,
        `读取条件：前置报告必须有 JSON、Markdown 和 workflow-manifest；manifest 状态必须是 success；报告 hash 必须和 manifest 记录一致。`,
        `继承条件：早报只能继承上一收盘报的 handoff.validation_targets；午报只能继承早报对象；午报到收盘是结果回收，不是候选续传；复盘报只能读取收盘/早报/午报做回放，不允许生成新票。`,
        `失败处理：前置报告缺失、失败、hash 不一致或交接对象为空时，本阶段不能偷用旧缓存，也不能从 candidates 里临时补票。`,
      ],
    },
    {
      match: () => id.includes("trigger") || title.includes("触发"),
      lines: [
        `目标：确认现在跑的是哪一类报告，并确认前置报告是否能被本时段继承。`,
        `判断顺序：先识别 period，再查对应日期运行目录，再检查上一时段报告和运行记录是否存在，最后确认不是拿旧缓存冒充本次结果。`,
        `关键约束：早报只能接上一收盘报，午报只能接早报，收盘报要重新扫全自选股，复盘报只回放归因。`,
        `失败处理：如果前置报告失败、缺文件或 hash 不一致，本阶段不能继续沿用旧对象。`,
      ],
    },
    {
      match: () => id.includes("domestic_intelligence"),
      lines: [
        `目标：把已落盘的政策、产业链、板块、公告和业绩事件映射回自选股，帮助解释为什么这些方向值得关注或需要谨慎。`,
        `读取范围：只读已经生成的新闻、公告、国内闸门、主线、板块、候选和技术检查文件；不调用网页搜索，不裸连问财，不新增陌生股票。`,
        `使用边界：增强层只补证据和小白话解释，不改买入 Top3，不改 A/B 观察，不改 handoff。`,
        `失败处理：如果新闻、公告或结构化数据缺失，只显示资料不足和影响，不脑补事件。`,
      ],
    },
    {
      match: () => id.includes("result_verify"),
      lines: [
        `目标：复盘报把“当时原始结论”和“后面真实走势”逐项对照，判断系统到底是命中、失败、没给机会，还是证据不足。`,
        `判断顺序：先读取当时收盘报、早报、午报的正式 Markdown 和 JSON，再提取当时的候选/观察/空仓结论，然后对照后续涨跌、最大回撤、是否触发买点、是否触发风控。`,
        `命中条件：当时给出的观察或空仓结论，与后续表现一致；或者当时明确放弃的票后来继续走弱，也算风控命中。`,
        `失败条件：当时证据完整却错过了自选股内明显主线，或当时给出的候选后续没有承接、触发风控但报告没有提前提示。`,
        `错因分类：先分环境错、主线错、个股技术错、公告/数据缺失、执行纪律错、仓位错；不能只因为涨跌结果倒推说系统错。`,
        `规则升级条件：同类错误反复出现、数据质量确认没问题、且能说明改规则会降低误伤或提升命中率，才允许提出规则升级建议。`,
        `失败处理：如果缺原始报告、缺真实表现或只有聊天摘要，复盘只能写“资料不足”，不能生成新的买入候选。`,
      ],
    },
    {
      match: () => id.includes("previous_verify") || id.includes("morning_verify"),
      lines: [
        `目标：验证上一阶段留下来的对象有没有兑现，而不是重新选一批股票。`,
        `早报验证条件：只检查上一收盘报 handoff.validation_targets；如果对象没有隔夜资格、公告未排除、技术字段缺失或三闸门不支持，就只能观察/降级/取消。`,
        `午报验证条件：只验证早报对象上午是否兑现；强于板块、量能改善、分时不弱、没有冲高回落、尾盘前仍有承接，才允许继续跟踪。`,
        `复盘验证条件：只比较当时报出的结论和后续真实表现，不能用事后消息改写当时判断。`,
        `失败处理：上一阶段没有合格对象时，必须写“无验证对象”；不能因为当前盘面有新热点就绕过交接协议新增股票。`,
      ],
    },
    {
      match: () => id.includes("gates_recheck"),
      lines: [
        `目标：午报重新确认外围、国内、情绪/趋势三闸门对下午节奏的环境影响。`,
        `判断顺序：先复核外围是否出现新逆风，再复核国内政策/公告/产业消息，再复核指数、涨跌停、连板和高位反馈。`,
        `通过条件：三闸门只说明环境顺逆；午后动作怎么处理，要看早报对象自身的行情、公告、技术和执行边界。`,
        `降级条件：环境证据不足或逆风时降低仓位语气；对象自身公告、技术或执行条件不合格时才降级或放弃。`,
      ],
    },
    {
      match: () => id.includes("intraday_layer"),
      lines: [
        `目标：把早报对象按上午盘面表现分成强层、中层、弱层，决定下午看谁、放弃谁。`,
        `强层条件：价格强于指数和所属板块，分时承接不弱，量能不是萎缩，冲高回落没有达到 3%，且没有新增公告风险。`,
        `中层条件：没有明显走坏，但只满足部分条件，例如量能一般、均线位置一般、题材映射未完全确认，只能继续观察。`,
        `弱层条件：弱于板块/大盘、冲高回落达到 3%、尾盘或盘中承接不足、K 线破位、公告风险未排除，必须降级或取消。`,
      ],
    },
    {
      match: () => id.includes("execution_engine"),
      lines: [
        `目标：把午报对象翻译成下午可执行动作，而不是重新给买入名单。`,
        `动作含义：继续持有是模拟持仓还能观察；只观察是不买不加；减仓是降低风险暴露；退出是模拟持仓离场；放弃参与是不进入动作。`,
        `触发条件：高开 3% 进入观察兑现窗口，高开 5% 直接偏放弃追买；低开 -2% 进入缓冲观察，低开 -3% 需要重点风控；日内回撤 -3% 或最大回撤 -5% 触发止损纪律。`,
        `失败处理：缺持仓、缺行情或缺前置对象时只能观察或放弃；三闸门只作环境参考，不直接决定是否输出新的买入 Top3。`,
      ],
    },
    {
      match: () => id.includes("afternoon_action"),
      lines: [
        `目标：把午报结论落成下午动作：继续跟踪、仅观察、不参与或尾盘重点盯盘。`,
        `继续跟踪条件：早报对象上午兑现，三闸门没有明显逆风，分时强于板块，量能和承接都没有破坏。`,
        `仅观察条件：对象没有证伪但信号不够强，或三闸门有证据不足，或情绪环境偏谨慎。`,
        `不参与条件：上午未兑现、跌停或高位反馈差、技术面取消、公告风险未排除，或者执行引擎给出放弃参与/退出。`,
      ],
    },
    {
      match: () => id.includes("morning_prefetch"),
      lines: [
        `目标：08:50 先把隔夜外围、新闻公告、国内事件和昨日 Top3 风险准备好，让 09:35 正式早报更快。`,
        `判断顺序：先读上一收盘报模拟持仓，再读已落盘新闻公告和外围/国内证据，最后输出预取清单。`,
        `边界条件：这一步只提前准备资料，不选股、不新增票、不改交接对象，也不替代正式早报。`,
        `失败处理：缺新闻、缺公告或缺外围时，只写资料缺口；不能脑补风险或催化。`,
      ],
    },
    {
      match: () => id.includes("morning_risk_precheck"),
      lines: [
        `目标：09:25 竞价结束后快速复核昨日尾盘模拟持仓，判断有没有需要继续持有、减仓、退出或只观察的风险。`,
        `判断顺序：先读 08:50 预取结果，再补竞价/开盘字段和技术检查，最后输出风险快检。`,
        `边界条件：风险快检不是正式早报，不重新选股，也不能把观察票升级成正式持仓。`,
        `失败处理：竞价或开盘字段不足时，只能提示资料不足，不能当成确认买点。`,
      ],
    },
    {
      match: () => id.includes("close_confirmation"),
      lines: [
        `目标：15:01 收盘后可以再导出完整自选股快照，补收盘价、尾盘承接、价格来源和初始模拟收益。`,
        `判断顺序：先锁定 14:50 收盘报 Top3，再读取 15:01 完整快照和模拟账本，最后写入收盘确认文件。`,
        `边界条件：15:01 快照只能用于复盘、收益、四层对比和漏选检查；不能重新选股，不能改变 Top3，也不能改变交接对象。`,
        `失败处理：没有 14:50 附近价格时可以用收盘价做代理，但必须说明不是精确 14:50 成交价。`,
      ],
    },
    {
      match: () => id.includes("watchlist") || title.includes("自选股"),
      lines: [
        `目标：把通达信当前自选股完整导进系统，作为后续过滤、板块裂变和候选评分的母池。`,
        `判断顺序：先确认单次运行只使用一个原始来源，再读取通达信导出表，再保留 54 个正式字段，最后生成标准化股票池。`,
        `关键约束：收盘报必须全自选股重扫，不能只沿用早报或午报剩下的两只旧对象。`,
        `失败处理：字段缺失、导出失败、读取到旧文件或股票池异常时，不能继续生成高置信候选。`,
      ],
    },
    {
      match: () => id.includes("outer") || title.includes("外围"),
      lines: [
        `目标：判断隔夜外围环境是不是支持 A 股主动进攻。`,
        `判断顺序：先拿 A50、美股、VIX、汇率、金银油，再做搜索归因，最后把每项归成顺风、逆风或证据不足。`,
        `关键约束：不能只看涨跌幅，要看上涨或下跌背后的原因；原油和金银尤其不能机械理解成利好或利空。`,
        `失败处理：关键品种缺失或归因缺失时，外围闸门只提示环境置信度不足，不能单独决定 Top3。`,
      ],
    },
    {
      match: () => id.includes("domestic") || title.includes("国内"),
      lines: [
        `目标：确认国内政策、产业、监管、公告和事件日历是否支持候选方向。`,
        `判断顺序：先收集政策和产业新闻，再查监管与重要事件，再对自选股逐只做公告风险扫描，最后判断是否存在催化或利空。`,
        `关键约束：公告扫描不完整不能等同于“没有风险”；只有完整扫描且无命中，才能写成风险已排除。`,
        `失败处理：公告、监管或重大事件证据不足时，国内闸门必须显示证据不足；真正卡票的是候选级公告排雷和技术面。`,
      ],
    },
    {
      match: () => id.includes("emotion") || title.includes("情绪") || title.includes("趋势"),
      lines: [
        `目标：记录当天市场情绪和指数趋势的顺逆，作为仓位和节奏参考。`,
        `判断顺序：先看上证、深成、创业板方向，再看 15 分钟趋势和成交额，再看涨跌停、连板、高位股反馈，最后判断亏钱效应。`,
        `关键约束：指数红不等于能进攻；如果跌停多、高位股反馈差或连板结构断裂，就要谨慎。`,
        `失败处理：连板、高位反馈、涨跌停等关键字段缺失时，不能脑补为顺风，只能降级为证据不足或观察。`,
      ],
    },
    {
      match: () => id.includes("filter") || title.includes("过滤"),
      lines: [
        `目标：从完整自选股池里先清掉硬性不合格对象，保留可进一步评分的候选。`,
        `判断顺序：先看硬风险和数据完整性，再看市值、涨幅、换手、量比和题材字段，最后保留候选池。`,
        `市值纪律：流通市值 30 亿到 200 亿是偏好区间；低于 20 亿才作为小市值硬淘汰；高于 300 亿只降权 0.08，不淘汰。`,
        `涨幅纪律：涨幅超过 3% 不再直接删除，但必须打上不追高标记，只能作为回踩观察；涨幅接近 7% 以上不能进买入 Top3。`,
        `容量纪律：真实题材每组最多 2 只，最终 Top3 总数最多 3 只；但“未分类”不能被当成一个正常题材只留前两只。`,
        `关键约束：过滤层只负责去掉硬性不合格对象，不能提前替评分层做最终选择。`,
        `失败处理：字段不足时不能假装通过，只能保留为低置信观察或从买入候选中剔除。`,
      ],
    },
    {
      match: () => id.includes("sector") || title.includes("板块"),
      lines: [
        `目标：先看全市场主线，再把自选股映射到主线里，判断哪些方向有真实承接。`,
        `判断顺序：先做全市场板块强弱统计，再做自选股题材分组，再识别主线 Top1/Top2 和领头羊，最后回到自选股找映射对象。`,
        `关键约束：板块统计必须基于完整候选池，不是只看最后 Top3；板块强也不代表里面每只自选股都能买。`,
        `失败处理：题材映射不完整时，不能让一堆“未分类”误伤全池，也不能把弱映射股票当作主线核心。`,
      ],
    },
    {
      match: () => id.includes("channel") || title.includes("A/B"),
      lines: [
        `目标：把候选拆成两条来源，避免只靠消息或只靠技术单线判断。`,
        `判断顺序：A 通道先看消息、题材、催化；B 通道看技术、资金、盘口行为；两条通道都必须再结合环境参考、公告和技术确认。`,
        `关键约束：A 通道强不代表技术能买，B 通道强也不代表没有公告和题材风险。`,
        `失败处理：任一通道缺证据时，只能降低置信度，不能单靠一个亮点硬进 Top3。`,
      ],
    },
    {
      match: () => id.includes("technical") || title.includes("技术"),
      lines: [
        `目标：对每只候选做最后的盘面确认，判断它是可跟踪、降级还是取消。`,
        `涨幅纪律：今日涨幅低于 3% 才算未追高；涨幅达到 3% 以上只能观察或降级；涨幅达到 7% 以上视为接近涨停风险区，不能进入买入 Top3，只能作为次日回踩观察。`,
        `换手率纪律：换手率必须在 0.5% 到 20% 之间。低于 0.5% 说明交易不活跃，高于 20% 说明分歧过大或短线过热，二者都要降级。`,
        `量比纪律：量比低于 0.8 说明活跃度不足，只能观察；量比达到 1.0 以上且尾盘有承接，才算量能确认更充分。`,
        `分时强弱纪律：分时不能弱于板块或大盘；如果 intraday_relative_strength=weak，说明资金承接弱，必须降级。`,
        `冲高回落纪律：从日内高点回落幅度不能达到 3%；冲高回落达到或超过 3%，说明追高资金被套、承接不足，必须降级。`,
        `尾盘承接纪律：尾盘必须有承接才允许保留隔夜验证；如果 tail_volume_support=false，直接 cancel，不保留隔夜。`,
        `K 线结构纪律：K 线不能是 broken 或 overheated；收盘跌破近 5 日低点算结构破坏，今日涨幅 7% 以上或近 5 日涨幅 18% 以上算短期过热。`,
        `3-5 日量能纪律：今日量能相对前 5 日均量在 1.1 到 2.0 倍之间属于温和放量；超过 2.5 倍但价格涨幅不足 1%，属于放量滞涨，要降级；低于 0.7 倍是缩量，确认度不足。`,
        `均线位置纪律：收盘价不能低于 MA5 或 MA10；收盘价高于 MA20 超过 18% 视为远离均线，也要降级；MA5 >= MA10 >= MA20 才算均线多头更明确。`,
        `主营匹配纪律：主营/题材要能和当前主线形成有效交集；如果 unconfirmed 只是证据不足，不能当成淘汰理由，但不能作为买入确认；如果明确 low，则只能观察或降级。`,
        `关键约束：技术面只是最后确认，不负责凭空造候选；缺字段不能脑补通过。`,
        `失败处理：冲高回落、尾盘无承接、均线破坏、主营不匹配或关键字段缺失时，只能只观察、降级或取消。`,
      ],
    },
    {
      match: () => id.includes("score") || title.includes("评分") || title.includes("排序"),
      lines: [
        `目标：把板块、技术面和候选质量合在一起排序；三闸门只作为环境参考，不把排序结果直接等同于买入。`,
        `判断顺序：先记录三闸门环境顺逆，再合并板块裂变、技术检查、公告风险和候选来源，最后输出完整 selection_universe 和排序。`,
        `权重纪律：新闻面权重 40%，板块/情绪 25%，技术面 25%，主营匹配 10%；这只是排序权重，不是绕过闸门的通行证。`,
        `数量纪律：最终买入候选最多 Top3；同题材最多 2 只；但完整 selection_universe 必须保留，不能因为容量限制只剩前两只。`,
        `降权纪律：涨幅超过不追高阈值、竞价/开盘过热、技术字段缺失、公告风险未排除，都要降权或阻断 Top3。`,
        `关键约束：评分靠前只是“更值得看”，不是“可以买”；公告和技术面没有放行时，评分不能覆盖风控，三闸门只作环境参考。`,
        `失败处理：公告未排除或技术面未确认时，即使排序靠前，也不能作为高置信买入 Top3；三闸门逆风只降低环境置信度。`,
      ],
    },
    {
      match: () => id.includes("snapshot") || title.includes("快照"),
      lines: [
        `目标：把本次报告需要展示和交接的结构化结果固化下来。`,
        `判断顺序：收集闸门、候选、技术面、板块、执行和数据质量，再写入固定 JSON 结构。`,
        `关键约束：快照是报告事实层，不能在这里临时改规则或补交易结论。`,
        `失败处理：上游关键产物缺失时，快照必须记录缺口，不能伪造成完整报告。`,
      ],
    },
    {
      match: () => id.includes("render") || title.includes("模板"),
      lines: [
        `目标：把结构化 JSON 翻译成用户能看的固定 Markdown 报告。`,
        `判断顺序：先读取对应报告 JSON，再按固定栏目顺序渲染，再把缺失、降级和空仓原因写清楚。`,
        `关键约束：栏目名和顺序不能随意改；聊天回复和 Web 面板不能替代正式 Markdown。`,
        `失败处理：如果 JSON 缺关键字段，模板不能硬填，必须显示证据不足或无合格对象。`,
      ],
    },
    {
      match: () => id.includes("protocol") || title.includes("协议"),
      lines: [
        `目标：确认报告没有违反四报交接协议。`,
        `判断顺序：校验 JSON、Markdown、handoff、manifest 和前后阶段对象关系，再确认用户可见结论和机器字段一致。`,
        `关键约束：早报午报不能新增股票；收盘报才允许生成次日验证对象；复盘报不能再产出新候选。`,
        `失败处理：协议不一致时，宁可拦截报告，也不能让旧对象、坏缓存或错误交接继续传下去。`,
      ],
    },
    {
      match: () => id.includes("handoff") || title.includes("次日"),
      lines: [
        `目标：决定明天早报要验证哪些对象，或者明确没有验证对象。`,
        `判断顺序：先看最终观察名单和 Top3 是否合格，再看公告、技术面、评分、数据质量和交接边界是否满足；三闸门只补充环境语气。`,
        `关键约束：只有收盘报能重新生成次日对象；没有合格对象时必须明确写“无次日早报验证对象”。`,
        `失败处理：如果只是弱观察、公告未排除或技术未确认，不能强行塞进明天重点验证名单。`,
      ],
    },
    {
      match: () => id.includes("replay_original"),
      lines: [
        `目标：复盘时先还原当时报告怎么说，防止用事后结果倒推修改记忆。`,
        `判断顺序：读取当时的 close/morning/noon/review Markdown 和 JSON，再回放当时的三闸门、候选、技术面和交接对象。`,
        `通过条件：能明确找到当时的原始结论、候选对象、降级理由和空仓理由。`,
        `失败处理：如果原始报告缺失或只剩聊天摘要，复盘只能标记资料不足，不能当成正式历史结论。`,
      ],
    },
    {
      match: () => id.includes("attribution"),
      lines: [
        `目标：把结果好坏归因到具体环节，而不是简单说涨了或跌了。`,
        `归因分类：环境归因看三闸门；主线归因看板块裂变；个股归因看技术面和公告；执行归因看是否追高、是否按止损/止盈；仓位归因看是否过度暴露。`,
        `调整条件：只有样本数足够、同类错误重复出现，才建议调整规则；单次个股波动不能直接改系统。`,
        `失败处理：如果缺真实表现、缺原始结论或样本不足，只能写观察性归因，不能给确定性规则修改。`,
      ],
    },
    {
      match: () => id.includes("replay_backtest"),
      lines: [
        `目标：用历史回放验证这套规则过去是否有效，但不把回放当作当天交易信号。`,
        `判断顺序：先取历史候选和当时规则，再模拟当时可见数据，再看次日溢价、1-3 日收益、回撤和命中率。`,
        `通过条件：回放必须只使用当时可获得的数据，不能用未来数据修正当时判断。`,
        `失败处理：样本太少、数据不全或口径不一致时，只能作为参考，不允许直接调高仓位或放宽闸门。`,
      ],
    },
    {
      match: () => id.includes("observation_upgrade"),
      lines: [
        `目标：复盘观察名单，判断哪些观察对象该升级复核、继续观察、移出或补数据。`,
        `判断顺序：先读取收盘报观察对象，再看是否属于收盘公告准入扫描范围；范围内对象才用公告排雷、技术面、强度分和候选通道判断升级。`,
        `升级条件：公告排雷已盖章、技术面通过、强度靠前且不是已入选对象，才允许标记为“可升级复核”。未进入公告准入扫描范围的观察票只作复盘背景，不算数据不够。`,
        `失败处理：观察升级只做复盘审计，不能把观察对象直接改成 Top3，不能改变 handoff。`,
      ],
    },
    {
      match: () => id.includes("style_drift"),
      lines: [
        `目标：检查当天市场风格和历史样本是否不同，避免旧规则跟不上行情。`,
        `判断顺序：对比大小盘、题材/基本面、趋势/情绪、风险偏好四类风格，再判断是否需要复核规则。`,
        `升级条件：多个维度连续变化，且不是数据缺口造成的假变化，才允许提出规则复核。`,
        `失败处理：历史样本不足或只有单日变化时，只能提示“继续观察”，不能机械改规则。`,
      ],
    },
    {
      match: () => id.includes("reverse_miss"),
      lines: [
        `目标：找出候选池里没进 Top3/A/B/handoff 但强度分明显靠前的对象，判断是真漏选、数据缺口、纪律不追高，还是规则正确放弃。`,
        `判断顺序：先读取 candidate-score、technical-check、close-report 和 pool-governance，再排除已经入选的 Top3/A/B/handoff，最后按 strength_score、evidence 和 missed_type 输出 reverse-miss.json。`,
        `升级条件：只有多次出现同类漏选，并且当时公告、技术、资金或主线证据完整，才建议调整规则。`,
        `失败处理：漏选扫描只做复盘审计，不能把扫描对象补成新票，不能改变 Top3，也不能改变 handoff。`,
      ],
    },
    {
      match: () => id.includes("external_skill_enrichment"),
      lines: [
        `目标：把本地通达信金融 skill 能增强的证据按层级整理出来，告诉系统该补哪些主线、题材、资金、公告股本、仓位和交易计划证据。`,
        `扫描上限：全池只用通达信导出字段轻扫；题材/资金最多前 30 只；公告/股本风险最多前 15 只；交易计划最多最终 Top3/handoff 3 只；复盘重点控制在 10-20 只。`,
        `边界条件：这一步只补证据，不选股，不新增陌生票，不改变 Top3、A/B 观察、交接对象或正式数据链路。`,
        `失败处理：如果增强清单没生成，四报仍按原有落盘证据运行；正式报告不能拿未落盘的增强信息当结论。`,
      ],
    },
    {
      match: () => id.includes("paper_trade"),
      lines: [
        `目标：回答“如果按收盘报正式买入对象跟单，纸面上到底赚了还是亏了”。`,
        `计算口径：只统计收盘报 handoff 里 buy_allowed=true 或买入 Top3，且早报没有取消的对象；A/B 观察只做旁路收益，不算正式收益。`,
        `价格口径：优先用 14:50 分钟价，其次用 14:50 后最近可用价，再用收盘价做代理；缺价格时必须标记缺口，不能脑补收益。`,
        `边界条件：这是模拟跟单，不下单，不代表账户盈利，也不反向改当天 Top3。`,
      ],
    },
    {
      match: () => id.includes("four_layer_tracking"),
      lines: [
        `目标：把正式 Top3、A类观察、B类观察分开展示，长期比较哪套更有效。`,
        `正式边界：只有正式 Top3 能进入买入计划、handoff、午报执行和正式收益；其他展示层只做旁路观察。`,
        `对比口径：多套逻辑可以分别统计表现和纸面收益，但旁路观察不能被显示成买入推荐。`,
        `失败处理：如果缺价格、缺早报验证或缺技术/公告证据，只能标记资料不足，不能脑补收益或改当天 Top3。`,
      ],
    },
    {
      match: () => id.includes("data_quality"),
      lines: [
        `目标：检查本次报告用到的数据是不是完整、同日、同池、同阶段，防止旧缓存污染。`,
        `检查条件：run_id、manifest、data-lineage、报告 JSON、Markdown、原始通达信导出、raw-watchlist、filtered-pool 都要能对上。`,
        `质量分层：完整数据可以参与结论；部分数据只能弱证据；关键缺失必须降级；来源异常或日期不一致必须拦截。`,
        `失败处理：如果数据源不可用、返回空、格式异常或日期混杂，报告必须写清缺口，不能解释成市场没有风险。`,
      ],
    },
    {
      match: () => id.includes("rule_upgrade"),
      lines: [
        `目标：根据复盘结果提出规则升级建议，但不能因为一次筛选结果就立刻改系统。`,
        `升级条件：同类错误至少重复出现，数据质量确认没问题，且能说明改规则会提高长期胜率或降低回撤。`,
        `建议类型：保留规则、补齐数据、小幅调整规则、降低规则权限。`,
        `失败处理：证据不足、样本太少、归因不清时，只能写观察建议，不能直接修改交易规则。`,
      ],
    },
    {
      match: () => id.includes("generate_"),
      lines: [
        `目标：把本阶段已经确认的结构化结果生成正式报告。`,
        `生成条件：前置数据、闸门、候选、技术面、协议交接和用户可见模板都必须能对上。`,
        `固定口径：早报和午报只验证前一阶段对象；收盘报才重新生成次日验证对象；复盘报只回放和归因，不给新票。`,
        `失败处理：关键字段缺失时，报告要明确写证据不足、空仓或无验证对象，不能为了好看硬填 Top3。`,
      ],
    },
  ];
  const matched = rules.find((rule) => rule.match());
  return [
    ...(matched?.lines || [
      `目标：${goal}`,
      `判断顺序：先确认输入证据，再按固定流程处理，再根据结果决定继续、观察、降级或取消。`,
      `关键约束：这一步只能解释已经落盘的结果，不能临时补数据，也不能产生新的交易结论。`,
      `失败处理：证据不足或结果不一致时，必须降级，不能硬凑通过。`,
    ]),
    ...commonTail,
  ];
}

function openWorkflowLogicModal(node, reportLabelText) {
  const modal = $("#workflowLogicModal");
  if (!modal || !node) return;
  $("#workflowLogicReport").textContent = reportLabelText || "报告链路";
  $("#workflowLogicTitle").textContent = `${node.order || ""}. ${node.title_cn || "步骤逻辑"}`;
  $("#workflowLogicBody").innerHTML = `
    <section class="workflow-logic-summary">
      <h4>这一步的详细逻辑</h4>
      <p class="workflow-logic-note">下面是规则说明，不代表本次实际缺口；本次实际缺口只看“当前落盘判断”和“当前需要注意”。</p>
      <ol>
        ${workflowLogicLines(node).map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
      </ol>
    </section>
  `;
  delete modal.dataset.closing;
  modal.hidden = false;
  syncModalBodyLock();
  animateModalOpen(modal);
  focusModalControl("#workflowLogicClose");
}

function openWorkflowDataModal(node, reportLabelText) {
  const modal = $("#workflowLogicModal");
  if (!modal || !node) return;
  $("#workflowLogicReport").textContent = reportLabelText || "报告链路";
  $("#workflowLogicTitle").textContent = `${node.order || ""}. ${node.title_cn || "步骤"}：取数小白话`;
  $("#workflowLogicBody").innerHTML = workflowDataExplainHtml(node, activeWorkflowReportKey());
  delete modal.dataset.closing;
  modal.hidden = false;
  syncModalBodyLock();
  animateModalOpen(modal);
  focusModalControl("#workflowLogicClose");
}

function closeWorkflowLogicModal() {
  const modal = $("#workflowLogicModal");
  if (!modal) return;
  animateModalClose(modal);
}

function activeWorkflowReportKey() {
  return REPORT_ORDER.includes(activeWorkflowReport) ? activeWorkflowReport : normalizeReportKey(panelStateForView().run?.period || state.run?.period) || "close";
}

function findCompleteReportEntry(date, reportType) {
  const { entries, detail } = historySources();
  const normalizedType = normalizeReportKey(reportType);
  const entry = entries.find((item) => item.date === date && normalizeReportKey(item.report_type) === normalizedType);
  const report = orderedReports().find((item) => normalizeReportKey(item.key || item.report_type || item.type || item.period) === normalizedType);
  if (entry) {
    const indexedMarkdown = historyMarkdown(entry, detail);
    const fallbackMarkdown = reportMarkdown(report);
    return {
      entry,
      detail,
      markdown: indexedMarkdown || fallbackMarkdown,
      source: indexedMarkdown ? "完整报告索引" : "当前面板状态",
    };
  }

  if (report) {
    const fallbackEntry = {
      date: report.date || date || state.run?.date || "",
      report_type: normalizedType,
      label: reportLabel(report),
      markdown: reportMarkdown(report),
      from_current_state: true,
    };
    return {
      entry: fallbackEntry,
      detail: null,
      markdown: reportMarkdown(report),
      source: "当前面板状态",
    };
  }

  return {
    entry: {
      date,
      report_type: normalizedType,
      label: REPORT_LABELS[normalizedType] || normalizedType || "报告",
    },
    detail,
    markdown: "",
    source: "未找到",
  };
}

async function openCompleteReportModal() {
  const modal = $("#completeReportModal");
  if (!modal) return;
  const reportBody = $("#completeReportBody");
  const selectedDate = $("#workflowDateSelect")?.value || state.run?.date || "";
  const reportType = activeWorkflowReportKey();
  let { entry, markdown, source } = findCompleteReportEntry(selectedDate, reportType);
  const label = entry.label || REPORT_LABELS[reportType] || "报告";
  const dateLabel = entry.date || selectedDate || "未选择日期";

  $("#completeReportMeta").textContent = `${dateLabel} · ${label} · ${source}`;
  $("#completeReportTitle").textContent = `${label}完整报告`;
  if (!markdown && selectedDate !== state.run?.date && hasHistoryEntriesForDate(selectedDate)) {
    reportBody.textContent = "正在加载历史完整报告...";
    reportBody.scrollTop = 0;
    modal.querySelector(".workflow-modal-card")?.scrollTo(0, 0);
    delete modal.dataset.closing;
    modal.hidden = false;
    syncModalBodyLock();
    bindCompleteReportScroll();
    requestAnimationFrame(syncCompleteReportViewport);
    animateModalOpen(modal);
    focusModalControl("#completeReportBody");
    await ensureHistoryDetailLoaded();
    ({ entry, markdown, source } = findCompleteReportEntry(selectedDate, reportType));
    $("#completeReportMeta").textContent = `${dateLabel} · ${label} · ${source}`;
  }
  reportBody.textContent = markdown
    ? sanitizeBeginnerText(markdown)
    : `没有找到 ${dateLabel} ${label} 的完整报告正文。\n\n这通常表示：\n1. 这一天还没有生成这类报告；\n2. 面板状态还没有重新导出；\n3. 正式 Markdown 报告还没有落盘。`;
  reportBody.scrollTop = 0;
  modal.querySelector(".workflow-modal-card")?.scrollTo(0, 0);

  if (modal.hidden) {
    delete modal.dataset.closing;
    modal.hidden = false;
    syncModalBodyLock();
    bindCompleteReportScroll();
    requestAnimationFrame(syncCompleteReportViewport);
    animateModalOpen(modal);
  }
  requestAnimationFrame(syncCompleteReportViewport);
  focusModalControl("#completeReportBody");
}

function closeCompleteReportModal() {
  const modal = $("#completeReportModal");
  if (!modal) return;
  animateModalClose(modal);
}

function closePanelModals() {
  closeWorkflowLogicModal();
  closeCompleteReportModal();
}

function renderWorkflowChain() {
  const chain = workflowChain();
  ensureWorkflowSelection(chain);
  const activeHint = $("#workflowActiveHint");
  const nodeList = $("#workflowNodeList");
  const detail = $("#workflowDetail");

  const nodes = chain[activeWorkflowReport]?.nodes || [];
  const historyFallback = isHistoryDateFallbackActive();
  if (activeHint) {
    const label = chain[activeWorkflowReport]?.label || REPORT_LABELS[activeWorkflowReport] || "报告";
    const selectedDate = selectedPanelDate || state.run?.date || "";
    const stateDate = state.run?.date || "";
    activeHint.textContent = historyFallback
      ? `当前选择：${selectedDate} 历史报告。完整报告可直接查看；该日期链路运行态未加载，面板不再用 ${stateDate} 的链路状态冒充。`
      : `当前显示：${label}链路（${nodes.length} 步）。点上方四报卡片切换。`;
  }
  if (!nodes.length) {
    const selectedDate = selectedPanelDate || state.run?.date || "";
    const reportLabelText = REPORT_LABELS[activeWorkflowReport] || "报告";
    const selectedReport = reportForKey(activeWorkflowReport);
    const reportReady = isReportReady(selectedReport);
    const statusText = reportReady
      ? `${selectedDate} 的${reportLabelText}已生成，但当前面板状态没有导出逐步链路。`
      : `${selectedDate} 的${reportLabelText}还没有生成，所以没有逐步链路。`;
    nodeList.innerHTML = historyFallback
      ? '<p class="empty">历史完整报告已加载；该日期的逐步链路运行态没有随当前面板加载，因此这里不显示“数据不够”。</p>'
      : `<p class="empty">${escapeHtml(reportReady ? "这个报告已生成，但面板缺少链路详情。请重新导出面板状态。" : "这个时段还没有生成报告，因此暂无链路。")}</p>`;
    detail.innerHTML = `
      <header class="workflow-detail-header">
        <div>
          <span class="section-label">${escapeHtml(reportLabelText)}</span>
          <h3>${escapeHtml(historyFallback ? "历史链路状态未加载" : (reportReady ? "链路状态未加载" : "报告未生成"))}</h3>
        </div>
        <div class="workflow-detail-actions">
          <label class="workflow-date-picker">
            <span>日期</span>
            <select id="workflowDateSelect">${panelDateOptions()}</select>
          </label>
          <button class="workflow-report-button" type="button" data-complete-report>完整报告</button>
        </div>
      </header>
      <div class="workflow-detail-grid">
        ${renderWorkflowField("当前状态", `<p>${escapeHtml(historyFallback ? `${selectedDate} 的四报完整报告可查看，但没有加载该日期的逐步链路状态。` : statusText)}</p>`)}
        ${renderWorkflowField("是否代表数据不够", `<p>${escapeHtml(historyFallback ? "不代表。这是面板历史链路状态未加载，不是正式报告缺数据或扫描不完整。" : (reportReady ? "不代表。这是面板链路状态缺失，需要重新导出面板状态。" : "不代表。这是该时段报告未生成，不是扫描不完整。"))}</p>`)}
      </div>
    `;
    detail.querySelector("[data-complete-report]")?.addEventListener("click", () => {
      openCompleteReportModal();
    });
    detail.querySelector("#workflowDateSelect")?.addEventListener("change", (event) => {
      loadPanelDateState(event.target.value);
    });
    return;
  }

  const completeCount = workflowMetricCount(nodes, (status) => READY_REPORT_STATUSES.has(status) || ["ok", "success", "complete", "done", "pass"].includes(status));
  const cautiousCount = workflowMetricCount(nodes, (status) => ["headwind", "missing", "incomplete", "ask_for_more", "observe", "downgrade"].includes(status));
  const riskCount = workflowMetricCount(nodes, (status) => ["invalid", "error", "failed", "fail", "blocked", "cancel"].includes(status));
  nodeList.innerHTML = `
    <div class="workflow-map-overview">
      <span>${escapeHtml(chain[activeWorkflowReport]?.label || "报告")}链路</span>
      <strong>${escapeHtml(String(nodes.length))} 步</strong>
      <em>${escapeHtml(String(completeCount))} 完成</em>
      <em>${escapeHtml(String(cautiousCount))} 谨慎</em>
      <em>${escapeHtml(String(riskCount))} 风险</em>
    </div>
    ${workflowNodeGroups(nodes).map((group) => `
      <section class="workflow-stage">
        <div class="workflow-stage-title">
          <span>${escapeHtml(group.name)}</span>
          <em>${escapeHtml(String(group.nodes.length))} 步</em>
        </div>
        <div class="workflow-stage-grid">
          ${group.nodes.map((node) => {
            const active = node.id === activeWorkflowNodeId;
            return `
              <button class="workflow-node ${active ? "active" : ""}" type="button" data-node-id="${escapeHtml(node.id)}">
                <span class="workflow-order">${escapeHtml(node.order || "")}</span>
                <span class="workflow-node-title">${escapeHtml(node.title_cn || "未命名步骤")}</span>
                <span class="workflow-node-status ${statusClass(node.status)}">${escapeHtml(workflowNodeStatusText(node.status))}</span>
              </button>
            `;
          }).join("")}
        </div>
      </section>
    `).join("")}
  `;

  $$(".workflow-node").forEach((button) => {
    button.addEventListener("click", () => {
      activeWorkflowNodeId = button.dataset.nodeId || "";
      renderWorkflowChain();
    });
  });

  const node = nodes.find((item) => item.id === activeWorkflowNodeId) || nodes[0];
  const nodeDataLines = formalWorkflowDataLines(node, activeWorkflowReport);
  const nodeImpactLines = formalWorkflowImpactLines(node, activeWorkflowReport);
  const nodeRiskLines = formalWorkflowRiskLines(node);
  const sourceTagText = formalSourceText(node.source_method_cn || "暂无获取方式");
  const sourceTags = sourceTagText.split(/[、/,，;；\s]+/).map((item) => item.trim()).filter(Boolean).slice(0, 5);
  detail.innerHTML = `
    <header class="workflow-detail-header">
      <div>
        <span class="section-label">${escapeHtml(chain[activeWorkflowReport]?.label || "")}</span>
        <h3>${escapeHtml(node.title_cn || "未命名步骤")}</h3>
        <p class="workflow-detail-subtitle">${escapeHtml(sanitizeBeginnerText(node.plain_goal_cn || "暂无说明"))}</p>
      </div>
      <div class="workflow-detail-actions">
        <label class="workflow-date-picker">
          <span>日期</span>
          <select id="workflowDateSelect">${panelDateOptions()}</select>
        </label>
        ${pill(node.status, workflowNodeStatusText(node.status))}
        <button class="workflow-report-button" type="button" data-complete-report>完整报告</button>
        <button class="workflow-data-button" type="button" data-workflow-data>看这步取了什么数据</button>
        <button class="workflow-logic-button" type="button" data-workflow-logic>查看这一步逻辑</button>
      </div>
    </header>
    <section class="workflow-console-preview">
      <span>STEP ${escapeHtml(node.order || "")}</span>
      <strong>${escapeHtml(workflowNodeStatusText(node.status))}</strong>
      <p>${escapeHtml(nodeImpactLines[0] || "点击节点查看这一环节对正式报告的影响。")}</p>
    </section>
    <section class="workflow-console-metrics">
      <div>
        <span>取数</span>
        <strong>${escapeHtml(String(nodeDataLines.length))}</strong>
      </div>
      <div>
        <span>影响</span>
        <strong>${escapeHtml(String(nodeImpactLines.length))}</strong>
      </div>
      <div>
        <span>风险</span>
        <strong>${escapeHtml(String(nodeRiskLines.length))}</strong>
      </div>
    </section>
    <section class="workflow-source-tags">
      ${(sourceTags.length ? sourceTags : ["暂无获取方式"]).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
    </section>
    <div class="workflow-detail-grid">
      ${renderWorkflowField("正式报看到的数据", renderTextList(nodeDataLines, "没有记录正式报数据"))}
      ${renderWorkflowField("对报告有什么影响", renderTextList(nodeImpactLines, "没有形成额外影响"))}
      ${renderWorkflowField("数据来源白话", `<p>${escapeHtml(formalSourceText(node.source_method_cn || "暂无获取方式"))}</p>`)}
      ${renderWorkflowField("还缺什么/哪里要谨慎", renderTextList(nodeRiskLines, "没有记录关键缺口"))}
    </div>
  `;
  detail.querySelector("[data-workflow-data]")?.addEventListener("click", () => {
    openWorkflowDataModal(node, chain[activeWorkflowReport]?.label || "");
  });
  detail.querySelector("[data-workflow-logic]")?.addEventListener("click", () => {
    openWorkflowLogicModal(node, chain[activeWorkflowReport]?.label || "");
  });
  detail.querySelector("[data-complete-report]")?.addEventListener("click", () => {
    openCompleteReportModal();
  });
  detail.querySelector("#workflowDateSelect")?.addEventListener("change", (event) => {
    loadPanelDateState(event.target.value);
  });
}

let ruleApprovalMessage = "";

function ruleProposalPayload() {
  const source = panelStateForView();
  return source.rule_upgrade_proposals || {};
}

function localApprovalKey(date) {
  return `tdx-rule-upgrade-approvals:${date || "unknown"}`;
}

function saveLocalApprovals(date, payload) {
  localStorage.setItem(localApprovalKey(date), JSON.stringify(payload));
}

function localApprovalsForDate(date) {
  try {
    return JSON.parse(localStorage.getItem(localApprovalKey(date)) || "{}");
  } catch (_) {
    return {};
  }
}

function effectiveProposalStatus(proposal, date) {
  const local = localApprovalsForDate(date);
  const localItem = local?.items?.find?.((item) => item.proposal_id === proposal.proposal_id);
  if (localItem?.approval_status === "approved" || localItem?.approval_status === "rejected") {
    return localItem.approval_status;
  }
  if (proposal?.display_status) return proposal.display_status;
  if (proposal?.status) return proposal.status;
  if (proposal?.requires_user_confirmation || proposal?.requires_user_approval) {
    return "pending_user_approval";
  }
  return "observed_only";
}

function approvalStatusText(status) {
  return {
    pending_user_approval: "待确认",
    not_requested: "未发起审批",
    observed_only: "仅观察",
    approved: "已确认",
    rejected: "已拒绝",
  }[status] || friendlyStatus(status);
}

function implementationStatusText(status) {
  return {
    not_started: "未实施",
    approved_waiting_apply: "待自动写回",
    approved_waiting_manual: "已确认，待人工实施",
    skipped_not_eligible: "未达到实施门槛",
    failed_missing_target: "缺少写回目标",
    failed_missing_config_path: "配置路径不存在",
    failed_patch: "写回失败",
    failed_validation: "写回后校验失败",
    applied: "已自动写回",
    already_applied: "已是目标值",
  }[status] || friendlyStatus(status || "not_started");
}

function implementationModeText(mode) {
  return {
    auto_apply_after_approval: "确认后自动写回白名单参数",
    manual_after_approval: "确认后只记录已批准，仍需人工实施",
    observe_only: "仅观察，不进入实施",
  }[mode] || friendlyStatus(mode || "observe_only");
}

function updateRuleProposalPayload(date, payload) {
  if (!payload || typeof payload !== "object") return;
  if (state.run?.date === date) {
    state.rule_upgrade_proposals = payload;
    if (window.THREE_PERIOD_PANEL_STATE && window.THREE_PERIOD_PANEL_STATE.run?.date === date) {
      window.THREE_PERIOD_PANEL_STATE.rule_upgrade_proposals = payload;
    }
  }
  if (selectedPanelState?.run?.date === date) {
    selectedPanelState.rule_upgrade_proposals = payload;
  }
  const detail = window.THREE_PERIOD_HISTORY_DETAIL || window.THREE_PERIOD_PANEL_HISTORY_DETAIL;
  if (detail?.dates?.[date]?.panel_state) {
    detail.dates[date].panel_state.rule_upgrade_proposals = payload;
  }
}

function approvalMessageFromResult(approvalStatus, result) {
  if (approvalStatus === "rejected") return "已写入审批文件：拒绝。";
  const apply = result?.apply_result || {};
  const applied = Number(apply.applied_count || 0);
  const manualOnly = Number(apply.manual_only_count || 0);
  const failed = Number(apply.failed_count || 0);
  if (applied > 0) {
    return `已确认，并自动写回 ${applied} 条白名单参数；回滚记录已生成。`;
  }
  if (manualOnly > 0) {
    return "已确认，但这条不在自动写回范围内；当前只记录已批准状态。";
  }
  if (failed > 0) {
    return "已确认，但自动写回失败；系统已保留已批准记录，请检查实施结果。";
  }
  return "已写入审批文件：确认。";
}

function proposalSeverityText(severity) {
  return {
    P1: "P1 关键",
    P2: "P2 重要",
    P3: "P3 观察",
  }[severity] || severity || "P3 观察";
}

function renderRuleApprovals() {
  const band = $("#ruleApprovalBand");
  const list = $("#ruleApprovalList");
  const hint = $("#ruleApprovalHint");
  const title = $("#ruleApprovalTitle");
  if (!band || !list) return;
  const payload = ruleProposalPayload();
  const proposals = Array.isArray(payload.proposals) ? payload.proposals : [];
  if (!proposals.length) {
    band.hidden = true;
    list.innerHTML = "";
    return;
  }
  const date = payload.date || panelStateForView().run?.date || state.run?.date || "";
  const statuses = proposals.map((proposal) => effectiveProposalStatus(proposal, date));
  const pending = statuses.filter((status) => status === "pending_user_approval").length;
  const approved = statuses.filter((status) => status === "approved").length;
  const rejected = statuses.filter((status) => status === "rejected").length;
  band.hidden = false;
  if (title) {
    title.textContent = pending ? "待确认改动" : ((approved || rejected) ? "审批已处理" : "规则建议观察");
  }
  if (hint) {
    if (pending) {
      hint.textContent = `${pending} 条待确认`;
    } else if (approved || rejected) {
      hint.textContent = [approved ? `${approved} 条已确认` : "", rejected ? `${rejected} 条已拒绝` : ""].filter(Boolean).join(" / ");
    } else {
      hint.textContent = "本次仅观察，不进入确认";
    }
  }
  list.innerHTML = `
    ${ruleApprovalMessage ? `<p class="rule-approval-message">${escapeHtml(ruleApprovalMessage)}</p>` : ""}
    ${proposals.map((proposal) => {
      const status = effectiveProposalStatus(proposal, date);
      const needsAction = status === "pending_user_approval";
      const files = asList(proposal.target_files).slice(0, 4).join("、") || "未指定文件";
      const implementationStatus = proposal.implementation_status || "not_started";
      const validationSummary = proposal.validation_summary || "未生成多日验证结论";
      const implementationReason = proposal.implementation_reason || "";
      const boundaryText = proposal.auto_apply_after_approval
        ? "确认后只会对白名单参数自动写回，并生成回滚记录；不会改当天 Top3、handoff、execution。"
        : "确认后只记录已批准状态，不会网页自动改正式规则或当天 Top3。";
      return `
        <article class="rule-approval-card ${needsAction ? "pending" : ""}">
          <div class="rule-approval-card-head">
            <div>
              <span class="section-label">${escapeHtml(proposalSeverityText(proposal.severity))}</span>
              <h3>${escapeHtml(proposal.module || "规则建议")}</h3>
            </div>
            <span class="status-pill ${needsAction ? "ask_for_more" : statusClass(status)}">${escapeHtml(approvalStatusText(status))}</span>
          </div>
          <p><strong>建议：</strong>${escapeHtml(proposal.suggested_change || "暂不调整")}</p>
          <p><strong>证据：</strong>${escapeHtml(proposal.evidence_summary || "未提供证据")}</p>
          <p><strong>多日验证：</strong>${escapeHtml(validationSummary)}</p>
          <p><strong>实施方式：</strong>${escapeHtml(implementationModeText(proposal.implementation_mode))}</p>
          <p><strong>实施状态：</strong>${escapeHtml(implementationStatusText(implementationStatus))}${implementationReason ? `；${escapeHtml(implementationReason)}` : ""}</p>
          <p><strong>会动哪里：</strong>${escapeHtml(files)}</p>
          <p><strong>边界：</strong>${escapeHtml(boundaryText)}</p>
          ${needsAction ? `
            <div class="rule-approval-actions">
              <button type="button" data-rule-approval="approved" data-proposal-id="${escapeHtml(proposal.proposal_id)}">确认</button>
              <button type="button" data-rule-approval="rejected" data-proposal-id="${escapeHtml(proposal.proposal_id)}">拒绝</button>
            </div>
          ` : ""}
        </article>
      `;
    }).join("")}
  `;
  $$("#ruleApprovalList [data-rule-approval]").forEach((button) => {
    button.addEventListener("click", () => {
      submitRuleApproval(button.dataset.proposalId || "", button.dataset.ruleApproval || "rejected", date);
    });
  });
}

async function submitRuleApproval(proposalId, approvalStatus, date) {
  const payload = {
    schema_version: "rule_upgrade_approval_request.v1",
    date,
    proposal_id: proposalId,
    approval_status: approvalStatus,
    approval_source: "web-panel",
    decided_at: new Date().toISOString(),
  };
  try {
    const response = await fetch("/api/rule-upgrade-approvals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (!response.ok || !result?.ok) throw new Error(result?.error || `HTTP ${response.status}`);
    const approvals = result.rule_upgrade_approvals || {
      schema_version: "rule_upgrade_approvals.server.v1",
      date,
      updated_at: new Date().toISOString(),
      items: [result?.approval_result?.item || payload],
    };
    saveLocalApprovals(date, approvals);
    updateRuleProposalPayload(date, result.rule_upgrade_proposals || {});
    ruleApprovalMessage = approvalMessageFromResult(approvalStatus, result);
  } catch (_) {
    const existing = localApprovalsForDate(date);
    const items = Array.isArray(existing.items) ? existing.items.filter((item) => item.proposal_id !== proposalId) : [];
    items.push(payload);
    saveLocalApprovals(date, {
      schema_version: "rule_upgrade_approvals.local_fallback.v1",
      date,
      updated_at: new Date().toISOString(),
      items,
    });
    ruleApprovalMessage = "本地面板已记录选择；如果要写入项目文件，请用 scripts/rule_upgrade_approval_server.py 启动审批服务后再点一次。";
  }
  renderAll();
}

function renderWarnings() {
  const sourceState = panelStateForView();
  const warnings = Array.isArray(sourceState.warnings) ? sourceState.warnings : [];
  $("#warningBand").hidden = warnings.length === 0;
  $("#warningCount").textContent = `${warnings.length} 条`;
  $("#warningList").innerHTML = warnings.length
    ? warnings.slice(0, 8).map((item) => `<p>${escapeHtml(truncateText(item, 180))}</p>`).join("")
    : "";
}

function typeAliases(type) {
  const key = normalizeReportKey(type);
  return Array.from(new Set([type, key, `${key}-report`, REPORT_LABELS[key]].filter(Boolean)));
}

function addHistoryEntry(entries, entry, dateHint, typeHint) {
  if (!entry && !dateHint) return;
  if (typeof entry === "string") {
    if (!dateHint) return;
    entries.push({ date: dateHint || "", report_type: normalizeReportKey(typeHint || entry), label: REPORT_LABELS[normalizeReportKey(typeHint || entry)] || entry });
    return;
  }
  const date = entry.date || entry.run_date || entry.report_date || dateHint || "";
  const reportType = normalizeReportKey(entry.report_type || entry.type || entry.key || entry.period || typeHint);
  if (!date || !reportType) return;
  entries.push({
    ...entry,
    date,
    report_type: reportType,
    label: entry.label || REPORT_LABELS[reportType] || entry.report_type || entry.type || reportType,
  });
}

function normalizeHistoryIndex(raw) {
  const entries = [];
  if (Array.isArray(raw?.dates)) {
    raw.dates.forEach((dateItem) => {
      const reports = dateItem.reports || {};
      if (Array.isArray(reports)) {
        reports.forEach((report) => addHistoryEntry(entries, report, dateItem.date || dateItem.run_date));
      } else {
        Object.entries(reports).forEach(([type, detail]) => addHistoryEntry(entries, detail, dateItem.date || dateItem.run_date, type));
      }
    });
  }

  const source = raw?.entries || raw?.items || raw?.reports || raw?.index || raw;

  if (Array.isArray(source)) {
    source.forEach((item) => {
      if (item?.reports || item?.types) {
        const reports = item.reports || item.types || [];
        if (Array.isArray(reports)) reports.forEach((report) => addHistoryEntry(entries, report, item.date || item.run_date));
        else Object.entries(reports).forEach(([type, detail]) => addHistoryEntry(entries, detail, item.date || item.run_date, type));
      } else {
        addHistoryEntry(entries, item);
      }
    });
  } else if (source && typeof source === "object") {
    Object.entries(source).forEach(([dateOrKey, value]) => {
      if (["schema_version", "generated_at", "project", "source", "summary", "warnings", "excluded_dir_counts", "reports_order"].includes(dateOrKey)) return;
      if (dateOrKey === "dates" && Array.isArray(raw?.dates)) return;
      if (Array.isArray(value)) {
        value.forEach((item) => addHistoryEntry(entries, item, dateOrKey));
      } else if (value?.reports || value?.types) {
        const reports = value.reports || value.types;
        if (Array.isArray(reports)) reports.forEach((item) => addHistoryEntry(entries, item, value.date || dateOrKey));
        else Object.entries(reports).forEach(([type, detail]) => addHistoryEntry(entries, detail, value.date || dateOrKey, type));
      } else if (value && typeof value === "object" && !value.report_type && !value.type && !value.key) {
        Object.entries(value).forEach(([type, detail]) => addHistoryEntry(entries, detail, dateOrKey, type));
      } else {
        addHistoryEntry(entries, value, value?.date || "", dateOrKey);
      }
    });
  }

  const unique = new Map();
  entries.forEach((entry) => {
    unique.set(`${entry.date}|${entry.report_type}`, entry);
  });
  return Array.from(unique.values()).sort((a, b) => {
    const dateCompare = String(b.date).localeCompare(String(a.date));
    if (dateCompare) return dateCompare;
    return REPORT_ORDER.indexOf(a.report_type) - REPORT_ORDER.indexOf(b.report_type);
  });
}

function historyFromReports() {
  return orderedReports()
    .filter((report) => isReportReady(report) && (reportMarkdown(report) || report.markdown?.headings?.length))
    .map((report) => ({
      date: report.date || state.run?.date || "",
      report_type: normalizeReportKey(report.key || report.report_type),
      label: reportLabel(report),
      markdown: reportMarkdown(report),
      from_current_state: true,
    }))
    .filter((entry) => entry.date && entry.report_type);
}

function historySources() {
  const index = historyIndexPayload();
  const detail = historyDetailPayload();
  const entries = normalizeHistoryIndex(index);
  return {
    entries: entries.length ? entries : historyFromReports(),
    detail,
  };
}

function availablePanelDates() {
  const { entries } = historySources();
  const dates = new Set(entries.map((entry) => entry.date).filter(Boolean));
  if (state.run?.date) dates.add(state.run.date);
  return Array.from(dates).sort((a, b) => String(b).localeCompare(String(a)));
}

function panelDateOptions() {
  const currentDate = state.run?.date || "";
  const selectedDate = selectedPanelDate || currentDate;
  const dates = availablePanelDates();
  if (!dates.length) return '<option value="">暂无日期</option>';
  return dates
    .map((date) => `<option value="${escapeHtml(date)}" ${date === selectedDate ? "selected" : ""}>${escapeHtml(date)}</option>`)
    .join("");
}

function parsePanelDate(date) {
  const [year, month, day] = String(date || "").split("-").map((part) => Number(part));
  if (!year || !month || !day) return null;
  return { year, month, day };
}

function formatPanelDate(year, month, day) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function historyEntriesForDate(date) {
  return normalizeHistoryIndex(historyIndexPayload()).filter((entry) => entry.date === date);
}

function entryReportReady(entry) {
  return Boolean(entry?.exists) && isReadyStatus(entry?.status || "ok");
}

function currentStateReportsByKey(date) {
  if (!date || date !== state.run?.date) return new Map();
  return new Map((Array.isArray(state.reports) ? state.reports : []).map((report) => [
    normalizeReportKey(report.key || report.report_type || report.type || report.period),
    report,
  ]));
}

function historyDateMeta(date) {
  const entries = historyEntriesForDate(date);
  const entryByKey = new Map(entries.map((entry) => [normalizeReportKey(entry.report_type || entry.key), entry]));
  const currentReports = currentStateReportsByKey(date);
  const panelReports = Array.isArray(historyPanelStatePayload(date)?.reports) ? historyPanelStatePayload(date).reports : [];
  const panelReportsByKey = new Map(panelReports.map((report) => [normalizeReportKey(report.key || report.report_type || report.type || report.period), report]));
  const readyKeys = REPORT_ORDER.filter((key) => {
    const entry = entryByKey.get(key);
    const report = currentReports.get(key) || panelReportsByKey.get(key);
    return entryReportReady(entry) || isReportReady(report);
  });
  const missingKeys = REPORT_ORDER.filter((key) => !readyKeys.includes(key));
  const gapStatuses = missingKeys
    .map((key) => (currentReports.get(key) || panelReportsByKey.get(key) || entryByKey.get(key))?.schedule?.automation_status)
    .filter(Boolean);
  const hasAnyEntry = entries.length || currentReports.size;
  const onlyClose = readyKeys.length === 1 && readyKeys[0] === "close";
  const status = readyKeys.length === REPORT_ORDER.length
    ? "complete"
    : onlyClose
      ? "close-only"
      : readyKeys.length > 0
        ? "partial"
        : "empty";
  const label = gapStatuses.includes("device_offline_or_codex_not_running")
    ? "设备/Codex 未运行"
    : gapStatuses.includes("precondition_failed")
      ? "前置失败"
      : gapStatuses.includes("missed_schedule")
        ? "自动化错过"
        : {
    complete: "四报完整",
    "close-only": "仅收盘",
    partial: "数据缺口",
    empty: hasAnyEntry ? "未完成" : "未运行",
  }[status];
  return { date, status, label, readyKeys, missingKeys, reportsPresent: readyKeys.length, hasAnyEntry, gapStatuses };
}

function historyDateMatchesFilter(meta) {
  if (historyCalendarFilter === "all") return true;
  if (historyCalendarFilter === "complete") return meta.status === "complete";
  if (historyCalendarFilter === "gap") return meta.status === "partial";
  if (historyCalendarFilter === "close-only") return meta.status === "close-only";
  return true;
}

function selectedHistoryDateMeta() {
  return historyDateMeta(selectedPanelDate || state.run?.date || availablePanelDates()[0] || "");
}

function historyMonthDays() {
  const selected = parsePanelDate(selectedPanelDate || state.run?.date || availablePanelDates()[0]);
  if (!selected) return [];
  const first = new Date(selected.year, selected.month - 1, 1);
  const startOffset = (first.getDay() + 6) % 7;
  const start = new Date(selected.year, selected.month - 1, 1 - startOffset);
  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(start.getFullYear(), start.getMonth(), start.getDate() + index);
    return {
      date: formatPanelDate(day.getFullYear(), day.getMonth() + 1, day.getDate()),
      inMonth: day.getMonth() === selected.month - 1,
      day: day.getDate(),
    };
  });
}

function reportChipHtml(key, ready) {
  const label = { close: "收", morning: "早", noon: "午", review: "复" }[key] || key;
  return `<span class="history-report-chip ${ready ? "ready" : "missing"}">${escapeHtml(label)}</span>`;
}

function historyMetaSummary(meta) {
  if (meta.status === "complete") return "四报完整";
  if (meta.status === "close-only") return "只有收盘报";
  if (meta.gapStatuses?.includes("device_offline_or_codex_not_running")) return "计划时间已过但没有运行产物，疑似设备离线或 Codex 未运行。";
  if (meta.gapStatuses?.includes("precondition_failed")) return "前置报告或运行记录失败，不能用旧缓存补造正式报告。";
  if (meta.gapStatuses?.includes("missed_schedule")) return "计划时间已过但正式报告未落盘，属于自动化错过。";
  if (meta.status === "partial") return `缺 ${meta.missingKeys.map((key) => REPORT_LABELS[key]).join("、")}`;
  return meta.hasAnyEntry ? "未完成" : "未运行";
}

function selectedHistoryPanelStats(meta) {
  const reports = selectedPanelDate === state.run?.date ? (Array.isArray(state.reports) ? state.reports : []) : selectedHistoryReports();
  const close = reports.find((report) => normalizeReportKey(report.key || report.report_type) === "close") || {};
  const panelState = panelStateForView();
  const paperRows = paperTradeRowsForDate(selectedMetaDate(meta), reports);
  return {
    reports: `${meta.reportsPresent}/4`,
    top3: Number(close.buy_top3_count ?? close.handoff_count ?? panelState.summary?.buy_top3_count ?? 0),
    returnText: averageReturnText(paperRows),
    paperRows,
    gaps: meta.missingKeys.length,
  };
}

function selectedMetaDate(meta) {
  return meta?.date || selectedPanelDate || state.run?.date || "";
}

function renderHistoryCalendar() {
  const grid = $("#historyCalendarGrid");
  const header = $("#historyCalendarHeader");
  const detail = $("#historyCalendarDetail");
  const timeline = $("#historyTimeline");
  const filters = $("#historyCalendarFilters");
  if (!grid || !header || !detail || !timeline || !filters) return;

  const selected = parsePanelDate(selectedPanelDate || state.run?.date || availablePanelDates()[0]);
  if (!selected) {
    grid.innerHTML = '<p class="empty">暂无历史日期。</p>';
    detail.innerHTML = "";
    timeline.innerHTML = "";
    return;
  }

  header.innerHTML = `
    <strong>${escapeHtml(`${selected.year} 年 ${selected.month} 月`)}</strong>
    <span>绿色完整，黄色缺口，青色仅收盘，灰色未运行</span>
  `;
  filters.innerHTML = [
    ["all", "全部"],
    ["complete", "完整"],
    ["gap", "缺口"],
    ["close-only", "仅收盘"],
  ].map(([key, label]) => `<button class="history-filter ${historyCalendarFilter === key ? "active" : ""}" type="button" data-history-filter="${key}">${label}</button>`).join("");

  const weekdays = ["一", "二", "三", "四", "五", "六", "日"];
  grid.innerHTML = [
    ...weekdays.map((day) => `<div class="history-weekday">${day}</div>`),
    ...historyMonthDays().map((day) => {
      const meta = historyDateMeta(day.date);
      const selectedClass = day.date === (selectedPanelDate || state.run?.date) ? "selected" : "";
      const dimClass = historyDateMatchesFilter(meta) ? "" : "dimmed";
      const disabled = !meta.hasAnyEntry ? "disabled" : "";
      return `
        <button class="history-date-card ${meta.status} ${selectedClass} ${dimClass}" type="button" data-date="${escapeHtml(day.date)}" ${disabled}>
          <span class="history-date-number">${escapeHtml(String(day.day))}</span>
          <span class="history-date-status">${escapeHtml(meta.label)}</span>
          <span class="history-report-chips">
            ${REPORT_ORDER.map((key) => reportChipHtml(key, meta.readyKeys.includes(key))).join("")}
          </span>
        </button>
      `;
    }),
  ].join("");

  const selectedMeta = selectedHistoryDateMeta();
  const stats = selectedHistoryPanelStats(selectedMeta);
  detail.innerHTML = `
    <span class="section-label">选中日期</span>
    <h3>${escapeHtml(selectedMeta.date || "--")}</h3>
    <p class="history-detail-status ${selectedMeta.status}">${escapeHtml(selectedMeta.label)}</p>
    <div class="history-detail-grid">
      <div><span>报告进度</span><strong>${escapeHtml(stats.reports)}</strong></div>
      <div><span>正式 Top3</span><strong>${escapeHtml(String(stats.top3))}</strong></div>
      <div><span>模拟收益</span><strong>${escapeHtml(stats.returnText)}</strong></div>
      <div><span>数据缺口</span><strong>${escapeHtml(String(stats.gaps))}</strong></div>
    </div>
    <p class="history-detail-note">${escapeHtml(historyMetaSummary(selectedMeta))}</p>
    <div class="history-return-list">
      <div class="history-return-title">单票收益明细</div>
      ${historyPaperTradeRowsHtml(stats.paperRows)}
    </div>
  `;

  const recent = availablePanelDates().slice(0, 7).reverse();
  timeline.innerHTML = recent.map((date) => {
    const meta = historyDateMeta(date);
    return `
      <button class="history-timeline-item ${meta.status} ${date === selectedMeta.date ? "selected" : ""}" type="button" data-date="${escapeHtml(date)}">
        <span></span>
        <strong>${escapeHtml(date.slice(5))}</strong>
        <em>${escapeHtml(meta.label)}</em>
      </button>
    `;
  }).join("");

  $$(".history-date-card[data-date], .history-timeline-item[data-date]").forEach((button) => {
    button.addEventListener("click", () => loadPanelDateState(button.dataset.date || ""));
  });
  $$(".history-filter[data-history-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      historyCalendarFilter = button.dataset.historyFilter || "all";
      renderHistoryCalendar();
    });
  });
}

function hasHistoryEntriesForDate(date) {
  const { entries } = historySources();
  return entries.some((entry) => entry.date === date);
}

async function loadPanelDateState(date) {
  if (!date) return;
  selectedPanelDate = date;
  activeWorkflowNodeId = "";
  if (date === state.run?.date) {
    selectedPanelState = null;
    renderAll();
    return;
  }
  selectedPanelState = null;
  await ensureHistoryDetailLoaded();
  if (historyPanelStatePayload(date)) {
    renderAll();
    return;
  }
  try {
    const response = await fetch(`../runs/${encodeURIComponent(date)}/web-panel-state.json`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    selectedPanelState = await response.json();
    selectedPanelDate = selectedPanelState.run?.date || date;
    renderAll();
  } catch (err) {
    if (hasHistoryEntriesForDate(date)) {
      await ensureHistoryDetailLoaded();
      renderAll();
      return;
    }
    alert(`未找到 ${date} 的面板状态文件或历史报告。请先导出 runs/${date}/web-panel-state.json，或重新同步 web-panel/data/history-detail.js。`);
  }
}

function markdownFromPayload(payload) {
  if (!payload) return "";
  if (typeof payload === "string") return payload;
  if (typeof payload.markdown === "string") return payload.markdown;
  if (payload.markdown && typeof payload.markdown === "object") {
    return payload.markdown.full_text
      || payload.markdown.text
      || payload.markdown.content
      || payload.markdown.body
      || "";
  }
  return payload.full_text
    || payload.markdown_text
    || payload.raw_markdown
    || payload.text
    || payload.content
    || payload.body
    || "";
}

function findInArrayDetail(items, entry) {
  return items.find((item) => {
    const itemDate = item?.date || item?.run_date || item?.report_date;
    const itemType = normalizeReportKey(item?.report_type || item?.type || item?.key || item?.period);
    return itemDate === entry.date && itemType === entry.report_type;
  });
}

function historyMarkdown(entry, detail) {
  if (!entry) return "";
  if (detail) {
    if (Array.isArray(detail)) {
      const found = findInArrayDetail(detail, entry);
      const text = markdownFromPayload(found);
      if (text) return text;
    } else if (typeof detail === "object") {
      const aliases = typeAliases(entry.report_type);
      const dateNode = detail[entry.date]
        || detail[String(entry.date).replaceAll("-", "")]
        || detail.dates?.[entry.date]
        || detail.dates?.[String(entry.date).replaceAll("-", "")];
      if (dateNode) {
        const reportNode = dateNode.reports || dateNode;
        for (const alias of aliases) {
          const text = markdownFromPayload(reportNode[alias]);
          if (text) return text;
        }
        if (Array.isArray(reportNode)) {
          const text = markdownFromPayload(findInArrayDetail(reportNode, entry));
          if (text) return text;
        }
      }
      for (const alias of aliases) {
        const keys = [
          `${entry.date}:${alias}`,
          `${entry.date}|${alias}`,
          `${entry.date}/${alias}`,
          `${entry.date}_${alias}`,
          `${entry.date}-${alias}`,
        ];
        for (const key of keys) {
          const text = markdownFromPayload(detail[key]);
          if (text) return text;
        }
      }
    }
  }
  return markdownFromPayload(entry);
}

function renderAll() {
  renderHeader();
  renderTopStatusBar();
  renderTodayJudgement();
  renderTraderReviewWorkbench();
  renderStrategyUpgradeDashboard();
  renderReportProgress();
  renderHistoryCalendar();
  renderWorkflowChain();
  renderRuleApprovals();
  renderWarnings();
  armPanelJumpNav();
}

function syncPanelJumpActive(activeId) {
  if (!activeId) return;
  activePanelJumpId = activeId;
  $$("[data-panel-jump]").forEach((link) => {
    link.classList.toggle("active", link.dataset.panelJump === activeId);
  });
}

function armPanelJumpNav() {
  const targets = PANEL_JUMP_IDS
    .map((id) => document.getElementById(id))
    .filter((element) => element && !element.hidden);
  if (!targets.length) return;
  panelJumpObserver?.disconnect?.();
  syncPanelJumpActive(targets[0].id);
  if (!("IntersectionObserver" in window)) return;
  panelJumpObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
    if (visible[0]?.target?.id) syncPanelJumpActive(visible[0].target.id);
  }, {
    root: null,
    rootMargin: "-22% 0px -64% 0px",
    threshold: [0.02, 0.18, 0.36],
  });
  targets.forEach((target) => panelJumpObserver.observe(target));
}

async function loadSample() {
  autoBootPanelStateEnabled = false;
  try {
    const response = await fetch("./data/sample-report-state.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state = await response.json();
  } catch (_) {
    state = clone(FALLBACK_STATE);
  }
  resetPanelViewState();
  renderAll();
}

function loadFile(file) {
  autoBootPanelStateEnabled = false;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      state = JSON.parse(String(reader.result || "{}"));
    } catch (err) {
      state = {
        ...clone(FALLBACK_STATE),
        run: { ...FALLBACK_STATE.run, status: "invalid" },
        warnings: [`加载的状态文件无法解析: ${err.message}`],
        summary: { ...FALLBACK_STATE.summary, warnings: 1, json_invalid: 1 },
      };
    }
    resetPanelViewState();
    renderAll();
  };
  reader.readAsText(file, "utf-8");
}

document.addEventListener("DOMContentLoaded", async () => {
  applyMotionPreference();
  $("#sampleButton").addEventListener("click", loadSample);
  $("#workflowLogicClose")?.addEventListener("click", closeWorkflowLogicModal);
  $$("[data-workflow-modal-close]").forEach((item) => item.addEventListener("click", closeWorkflowLogicModal));
  $("#completeReportClose")?.addEventListener("click", closeCompleteReportModal);
  $$("[data-complete-report-close]").forEach((item) => item.addEventListener("click", closeCompleteReportModal));
  document.addEventListener("click", (event) => {
    const trigger = event.target?.closest?.("[data-complete-report]");
    if (!trigger) return;
    event.preventDefault();
    openCompleteReportModal();
  });
  document.addEventListener("click", (event) => {
    const trigger = event.target?.closest?.("[data-panel-jump]");
    if (!trigger) return;
    activePanelJumpId = trigger.dataset.panelJump || "";
    syncPanelJumpActive(activePanelJumpId);
    renderHeroPicks();
    renderFourLayerCompare();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePanelModals();
  });
  $("#stateFile").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (file) loadFile(file);
  });

  state = buildBootState(
    "state_loading",
    "正在加载正式 Web 面板状态；公网较慢时会先显示占位内容，正式数据到达后会自动刷新。",
  );
  resetPanelViewState();
  renderAll();

  await bootstrapDerivedData();
  const refreshAfterSecondaryData = () => {
    loadSecondaryDerivedData().then(() => {
      renderAll();
    });
  };
  if (!syncPanelStateFromGlobals({ preferFull: false })) {
    state = buildBootState(
      "state_missing",
      "启动窗口内没有加载到正式状态；如果本机已导出，页面会在数据到达后自动补齐，否则请运行 export_web_panel_data.py 或手动加载状态文件。",
    );
    resetPanelViewState();
    renderAll();
  }
  refreshAfterSecondaryData();
  loadFullPanelState().then(() => {
    syncPanelStateFromGlobals({ preferFull: true });
  });
  startLivePanelRefreshLoop();
});
