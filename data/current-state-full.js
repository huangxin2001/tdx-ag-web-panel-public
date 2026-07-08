window.THREE_PERIOD_PANEL_STATE_FULL = {
  "schema_version": "web-panel-state/v1",
  "generated_at": "2026-07-08T09:37:11+08:00",
  "currentDate": "2026-07-08",
  "current_date": "2026-07-08",
  "panel_payload_mode": "full",
  "project": {
    "name": "tdx-ag-three-period-split",
    "base_dir": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split"
  },
  "run": {
    "date": "2026-07-08",
    "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08",
    "run_id": "20260708-morning-093500872481",
    "period": "morning",
    "status": "success",
    "manifest_status": "ok",
    "lineage_status": "ok"
  },
  "reports": [
    {
      "key": "close",
      "label": "收盘报",
      "json_status": "missing",
      "markdown_status": "missing",
      "report_type": "close-report",
      "date": "2026-07-08",
      "generated_at": "",
      "recommendation_mode": "",
      "candidate_count": 0,
      "candidate_universe_count": 0,
      "scan_pool_count": 0,
      "handoff_count": 0,
      "buy_top3_count": 0,
      "json_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\close-report.json",
        "relative_path": "close-report.json",
        "exists": false
      },
      "markdown_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\close-report.md",
        "relative_path": "close-report.md",
        "exists": false
      },
      "markdown": {
        "exists": false,
        "status": "missing",
        "headings": [],
        "full_text": "",
        "excerpt": "",
        "focus_text": "",
        "char_count": 0
      },
      "schedule": {
        "scheduled_time": "14:50",
        "scheduled_at": "2026-07-08T14:50+08:00",
        "due": false,
        "automation_status": "not_due",
        "automation_status_label": "未到计划时间",
        "diagnosis_cn": "未到计划时间",
        "manifest_status": "missing",
        "manifest_json_status": "missing",
        "manifest_path": "workflow-manifest.close.json",
        "precondition_gaps_cn": [],
        "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
      }
    },
    {
      "key": "morning",
      "label": "早报",
      "json_status": "ok",
      "markdown_status": "ok",
      "report_type": "morning-report",
      "date": "2026-07-08",
      "generated_at": "2026-07-08T09:36:33.959040+08:00",
      "recommendation_mode": "observe",
      "candidate_count": 1,
      "candidate_universe_count": 1,
      "scan_pool_count": 0,
      "handoff_count": 0,
      "buy_top3_count": 0,
      "json_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-report.json",
        "relative_path": "runs/2026-07-08/morning-report.json",
        "exists": true,
        "size": 526831,
        "modified_at": "2026-07-08T09:37:10+08:00",
        "sha256": "34d309af65eee57e4bac64ce24cebb0424b3c612558bbf2055b53323e29af25c"
      },
      "markdown_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-report.md",
        "relative_path": "runs/2026-07-08/morning-report.md",
        "exists": true,
        "size": 4508,
        "modified_at": "2026-07-08T09:37:10+08:00",
        "sha256": "c552b8311965b21c0200ea37704b5bdf567b21b0f9af3ceff0a8f5702395bea7"
      },
      "markdown": {
        "exists": true,
        "status": "ok",
        "headings": [
          "结论",
          "三闸门",
          "板块裂变",
          "候选结论",
          "执行与风控",
          "铁律提醒"
        ],
        "full_text": "【结论】\n- 当前判断：观察，不买入。\n- 仓位建议：轻仓。\n- 原因：没有候选满足买入前三名 准入条件，只观察。\n- 盘前预取：已提前读取昨日对象、隔夜新闻公告和外围/国内背景；目标 1 只。\n- 风险快检：继续持有 1 只，观察 0 只，减仓 0 只，退出 0 只。\n- 早报口径：这些结论只复核昨日尾盘模拟持仓，不重新选股。\n- 昨日验证对象：\n  - 金徽股份（昨日尾盘模拟买入对象） → 继续持有观察，盘前未见硬风险，竞价未触发退出条件\n\n【三闸门】\n- 外围结论：逆风，不适合进攻。\n- 关键数据：富时中国A50: +0.13%, 2026-07-08 09:36:17；道琼斯: -0.25%, 2026-07-08 04:53:24；纳斯达克综合: -1.16%, 2026-07-08 05:30:00；标普500: -0.45%, 2026-07-08 04:53:24；VIX恐慌指数期货: -0.05%, 2026-07-08 09:35:37；离岸人民币（香港）: +0.02%, 2026-07-08 09:36:04。\n- 正面证据：黄金归因偏顺风: 美元走弱/宽松预期主导黄金定价；白银归因偏顺风: 工业需求/风险偏好主导白银定价。\n- 负面证据：美股三大指数平均 -0.62%；纳斯达克偏弱 -1.16%；美股三大指数归因偏逆风: 美股风险偏好承压。\n- 对 A 股影响：外围不是强顺风，只能给结构性方向参考，不能单独支持尾盘主攻。\n- 国内结论：风险优先；国内侧风险偏高，环境偏谨慎；只降低环境置信度和仓位语气，候选是否进入买入名单仍看公告、技术、评分和数据质量。\n- 影响：国内侧偏谨慎，只影响环境置信度和仓位语气，不直接卡买入名单。\n- 板块响应：部分共振；主线强度：弱；证据：液冷服务器.AI服务器 强度 1.0；新型城镇.BIPV概念.近期复牌.装修装饰 强度 1.0；AI 强度 1.0。\n- 正向催化：\n  2. 直击安达智能股东会：AI服务器切入国际头部客户直供 消费电子基本盘逐步企稳；类型：政策催化；可交易性：中；证据：2026年第一季度，安达智能实现营收1.44亿元，同比微增1.36%；归母净利润-3126.49万元，亏损同比有所扩大，主要系研发投入持续加码，同期的研发费用3390万元，占营收23.57%，及新业务营收占比仍较小所致...\n  3. 新型城镇.BIPV概念.近期复牌.装修装饰；类型：结构线索；可交易性：中；证据：主线结构线索补充证据\n- 风险提示：\n  2. 直击安达智能股东会：AI服务器切入国际头部客户直供 消费电子基本盘逐步企稳；类型：负面风险；严重度：强；证据：2026年第一季度，安达智能实现营收1.44亿元，同比微增1.36%；归母净利润-3126.49万元，亏损同比有所扩大，主要系研发投入持续加码，同期的研发费用3390万元，占营收23.57%，及新业务营收占比仍较小所致...\n- 国内信息增强：国内关注方向：液冷服务器、AI服务器、新型城镇。\n- 国内信息增强：当天新增国内证据 1 条，其中 A股政策/产业 1 条，A股公告 0 条。\n- 国内信息增强：公告/业绩风险提醒：直击安达智能股东会：AI服务器切入国际头部客户直供 消费电子基本盘逐步企稳。\n- 关键事件：直击安达智能股东会：AI服务器切入国际头部客户直供 消费电子基本盘逐步企稳；时间：2026-07-08；影响：中；方向：AI、消费；关联：未直接命中自选股。\n- 情绪/趋势：中性，先观察。依据：指数整体中性，平均涨跌幅约 0.11%\n\n【板块裂变】\n- 数据缺口：未生成可展示板块主线。\n- 事件整理后的关注方向：AI、消费。\n- 事件整理后的风险提醒：直击安达智能股东会：AI服务器切入国际头部客户直供 消费电子基本盘逐步企稳：需确认是否影响相关个股公告和板块情绪。\n\n【候选结论】\n- 今日不输出买入前三名。以下只是观察或空仓结论，不构成买入建议。\n- 今日建议空仓等待，或仅保留观察。\n\n【执行与风控】\n- 仓位建议：轻仓\n- 止盈原则：达到计划收益或冲高回落时先兑现。\n- 止损原则：跌破失效条件或技术面不合格时退出 / 放弃。\n- 失效条件：候选公告、技术面、数据质量、主线映射或尾盘承接恶化。\n\n【铁律提醒】\n- T+1纪律\n- 不打板\n- 涨幅<3%\n- 总仓位受控\n- 绝不补仓死扛\n- 看不清就不买\n",
        "excerpt": "【结论】\n- 当前判断：观察，不买入。\n- 仓位建议：轻仓。\n- 原因：没有候选满足买入前三名 准入条件，只观察。\n- 盘前预取：已提前读取昨日对象、隔夜新闻公告和外围/国内背景；目标 1 只。\n- 风险快检：继续持有 1 只，观察 0 只，减仓 0 只，退出 0 只。\n- 早报口径：这些结论只复核昨日尾盘模拟持仓，不重新选股。\n- 昨日验证对象：\n- 金徽股份（昨日尾盘模拟买入对象） → 继续持有观察，盘前未见硬风险，竞价未触发退出条件\n【三闸门】\n- 外围结论：逆风，不适合进攻。\n- 关键数据：富时中国A50: +0.13%, 2026-07-08 09:36:17；道琼斯: -0.25%, 2026-07-08 04:53:24；纳斯达克综合: -1.16%, 2026-07-08 05:30:00；标普500: -0.45%, 2026-07-08 04:53:24；VIX恐慌指数期货: -0.05%, 2026-07-08 09:35:37；离岸人民币（香港）: +0.02%, 2026-07-08 09:36:04。\n- 正面证据：黄金归因偏顺风: 美元走弱/宽松预期主导黄",
        "focus_text": "",
        "char_count": 1842
      },
      "schedule": {
        "scheduled_time": "09:35",
        "scheduled_at": "2026-07-08T09:35+08:00",
        "due": true,
        "automation_status": "complete",
        "automation_status_label": "已按计划生成",
        "diagnosis_cn": "已按计划生成",
        "manifest_status": "success",
        "manifest_json_status": "ok",
        "manifest_path": "workflow-manifest.morning.json",
        "precondition_gaps_cn": [],
        "recovery_boundary_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
      }
    },
    {
      "key": "noon",
      "label": "午报",
      "json_status": "missing",
      "markdown_status": "missing",
      "report_type": "noon-report",
      "date": "2026-07-08",
      "generated_at": "",
      "recommendation_mode": "",
      "candidate_count": 0,
      "candidate_universe_count": 0,
      "scan_pool_count": 0,
      "handoff_count": 0,
      "buy_top3_count": 0,
      "json_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\noon-report.json",
        "relative_path": "noon-report.json",
        "exists": false
      },
      "markdown_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\noon-report.md",
        "relative_path": "noon-report.md",
        "exists": false
      },
      "markdown": {
        "exists": false,
        "status": "missing",
        "headings": [],
        "full_text": "",
        "excerpt": "",
        "focus_text": "",
        "char_count": 0
      },
      "schedule": {
        "scheduled_time": "11:35",
        "scheduled_at": "2026-07-08T11:35+08:00",
        "due": false,
        "automation_status": "not_due",
        "automation_status_label": "未到计划时间",
        "diagnosis_cn": "未到计划时间",
        "manifest_status": "missing",
        "manifest_json_status": "missing",
        "manifest_path": "workflow-manifest.noon.json",
        "precondition_gaps_cn": [],
        "recovery_boundary_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
      }
    },
    {
      "key": "review",
      "label": "复盘报",
      "json_status": "missing",
      "markdown_status": "missing",
      "report_type": "review-report",
      "date": "2026-07-08",
      "generated_at": "",
      "recommendation_mode": "",
      "candidate_count": 0,
      "candidate_universe_count": 0,
      "scan_pool_count": 0,
      "handoff_count": 0,
      "buy_top3_count": 0,
      "json_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\review-report.json",
        "relative_path": "review-report.json",
        "exists": false
      },
      "markdown_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\review-report.md",
        "relative_path": "review-report.md",
        "exists": false
      },
      "markdown": {
        "exists": false,
        "status": "missing",
        "headings": [],
        "full_text": "",
        "excerpt": "",
        "focus_text": "",
        "char_count": 0
      },
      "schedule": {
        "scheduled_time": "20:00",
        "scheduled_at": "2026-07-08T20:00+08:00",
        "due": false,
        "automation_status": "not_due",
        "automation_status_label": "未到计划时间",
        "diagnosis_cn": "未到计划时间",
        "manifest_status": "missing",
        "manifest_json_status": "missing",
        "manifest_path": "workflow-manifest.review.json",
        "precondition_gaps_cn": [
          "复盘缺少成功前三报：收盘报、午报"
        ],
        "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
      }
    }
  ],
  "gates": [
    {
      "key": "outer",
      "label": "外围闸门",
      "status": "headwind",
      "score": -4,
      "evidence_count": 16,
      "missing_count": 0,
      "limitations_count": 0,
      "top_evidence": [
        "富时中国A50: +0.13%, 2026-07-08 09:36:17, sina_hq, a50_cfd",
        "道琼斯: -0.25%, 2026-07-08 04:53:24, sina_hq, index_realtime",
        "纳斯达克综合: -1.16%, 2026-07-08 05:30:00, sina_hq, index_realtime",
        "标普500: -0.45%, 2026-07-08 04:53:24, sina_hq, index_realtime"
      ],
      "reason": "美股三大指数平均 -0.62%；纳斯达克偏弱 -1.16%；美股三大指数归因偏逆风: 美股风险偏好承压；VIX归因偏逆风: 波动率上行，避险升温；美元兑离岸人民币归因偏逆风: 人民币贬值压力上升；黄金归因偏顺风: 美元走弱/宽松预期主导黄金定价；白银归因偏顺风: 工业需求/风险偏好主导白银定价；布伦特原油归因偏逆风: 地缘冲突/供应中断或通胀压力推升风险"
    },
    {
      "key": "domestic",
      "label": "国内闸门",
      "status": "flat",
      "score": 0,
      "evidence_count": 2,
      "missing_count": 0,
      "limitations_count": 0,
      "top_evidence": [
        "industry_news_signal: 矿区无人驾驶龙头企业易控智驾登陆港股，获206亿机构抢筹",
        "regulatory_signal: 7月8日 国内外隔夜重要交易数据"
      ],
      "reason": "国内侧证据不足以强判顺风，按平局处理"
    },
    {
      "key": "emotion_trend",
      "label": "情绪/趋势闸门",
      "status": "flat",
      "score": 4,
      "evidence_count": 10,
      "missing_count": 0,
      "limitations_count": 0,
      "top_evidence": [
        "指数趋势flat（涨跌幅 0.11%）。",
        "盘中趋势偏横盘（15分钟涨跌幅 -1.38%）。",
        "成交额信号偏逆风。",
        "涨停约 5 只，跌停约 4 只。"
      ],
      "reason": "指数趋势flat（涨跌幅 0.11%）；盘中趋势偏横盘（15分钟涨跌幅 -1.38%）；成交额信号偏逆风；涨停约 5 只，跌停约 4 只；连板结构flat，最高约 5 连板。"
    }
  ],
  "candidates": [],
  "candidate_source_context": {},
  "four_layer_tracking": {
    "status": "ok",
    "period": "morning",
    "records": [
      {
        "rank": 1,
        "strategy_group": "formal_top3",
        "strategy_group_cn": "正式 Top3 逻辑",
        "symbol": "603132",
        "name": "金徽股份",
        "source_period": "morning",
        "tracking_scope": "all_layer_records",
        "return_tracking_scope": "formal_return",
        "entry_reason": "公告、技术、评分和执行边界通过，进入正式 Top3 样本",
        "blocked_reason": "",
        "tracking_status": "cancelled",
        "formal_return_eligible": true,
        "side_channel_return_eligible": false,
        "side_channel_return_scope": "formal_return_only",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "buy_top3",
        "candidate_channel": "technical_fund_flow",
        "current_observation_tier": "rejected",
        "current_candidate_channel": "technical_fund_flow",
        "current_buy_allowed": true,
        "current_action": "cancel",
        "current_status_cn": "已取消",
        "current_blocked_reason": "已进入正式 Top3；这里仍作为候选评分前排逻辑样本参与横向比较",
        "last_seen_source": "report",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": true,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "pass",
        "admission_reason": "",
        "candidate_notice_status": "checked_clear",
        "candidate_notice_reason": "硬窗口公告排雷通过，旧公告或固定风险说明仅作背景",
        "candidate_notice_source": "tdxclaw_bridge.授权公告查询",
        "notice_supplement_status": "checked_clear",
        "notice_supplement_required": true,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "pass",
          "candidate_notice_status": "checked_clear",
          "eligible_for_top3": true,
          "eligible_for_handoff": true
        },
        "score": 0.62,
        "source_score": 0.62,
        "normalized_score": 62.0,
        "unified_score": 62.0,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {},
        "overnight_limit_watch_result": {},
        "theme_rotation_watch": {},
        "theme_rotation_watch_result": {},
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 16.13,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "铅锌",
        "theme_display": "铅锌",
        "industry": "有色-工业金属",
        "latest_snapshot": {
          "change_pct": -2.71,
          "open_change_pct": -0.18,
          "turnover_rate": 0.1,
          "volume_ratio": 5.37,
          "amount": 1640.08,
          "last_price": 16.13,
          "theme": "铅锌",
          "industry": "有色-工业金属"
        },
        "display_reason": "公告、技术、评分和执行边界通过，进入正式 Top3 样本",
        "return_status": "待次日回填",
        "return_scope": "pending",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "none",
        "catalyst_status_label": "暂无明确催化",
        "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "execution_off_mainline",
        "mainline_relation_label": "主线外执行票",
        "mainline_relation_detail": "这票不是按主线扩散去上，而是按技术/资金确认去执行；不是链路漂移。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "铅锌",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "603132",
          "name": "金徽股份",
          "groups": [
            "formal_top3"
          ],
          "group_labels": [
            "正式 Top3"
          ],
          "original_text": "",
          "summary_short": "",
          "stance": "",
          "catalyst": "",
          "risk": "",
          "action_hint": "隔夜报告解析失败",
          "status": "parse_failed"
        }
      },
      {
        "rank": 2,
        "strategy_group": "a_theme_watch",
        "strategy_group_cn": "A类主线/题材逻辑",
        "symbol": "002570",
        "name": "贝因美",
        "source_period": "morning",
        "tracking_scope": "all_layer_records",
        "return_tracking_scope": "side_channel_or_status_only",
        "entry_reason": "消息/题材驱动候选，需技术面继续确认",
        "blocked_reason": "仍需观察确认；未达到正式 Top3 准入；技术面观察",
        "tracking_status": "tracked",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "a_watch",
        "candidate_channel": "news_theme",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "observe",
        "admission_reason": "",
        "candidate_notice_status": "checked_clear",
        "candidate_notice_reason": "硬窗口公告排雷通过，旧公告或固定风险说明仅作背景",
        "candidate_notice_source": "tdxclaw_bridge.授权公告查询",
        "notice_supplement_status": "checked_clear",
        "notice_supplement_required": true,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "observe",
          "candidate_notice_status": "checked_clear",
          "eligible_for_top3": false,
          "eligible_for_handoff": true
        },
        "score": 0.62,
        "source_score": 0.62,
        "normalized_score": 62.0,
        "unified_score": 62.0,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {},
        "overnight_limit_watch_result": {},
        "theme_rotation_watch": {},
        "theme_rotation_watch_result": {},
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 4.07,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "乳制品",
        "theme_display": "乳制品",
        "industry": "食品饮料-饮料乳品",
        "latest_snapshot": {
          "change_pct": -1.21,
          "open_change_pct": -0.73,
          "turnover_rate": 0.14,
          "volume_ratio": 2.42,
          "amount": 611.77,
          "last_price": 4.07,
          "theme": "乳制品",
          "industry": "食品饮料-饮料乳品"
        },
        "display_reason": "消息/题材驱动候选，需技术面继续确认",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "unconfirmed",
        "catalyst_status_label": "催化未确认",
        "catalyst_status_detail": "有题材/消息线索，但还没拿到可直接盖章的明确触发。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "theme_watch",
        "mainline_relation_label": "题材观察票",
        "mainline_relation_detail": "这票先按题材/消息观察处理，是否升级还要看技术确认和主线承接。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "乳制品",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 3,
        "strategy_group": "a_theme_watch",
        "strategy_group_cn": "A类主线/题材逻辑",
        "symbol": "603937",
        "name": "丽岛新材",
        "source_period": "morning",
        "tracking_scope": "all_layer_records",
        "return_tracking_scope": "side_channel_or_status_only",
        "entry_reason": "消息/题材驱动候选，需技术面继续确认；不打板短线模型禁止追买，只允许回踩/承接确认后观察",
        "blocked_reason": "技术面降级；未达到正式 Top3 准入",
        "tracking_status": "tracked",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "a_watch",
        "candidate_channel": "news_theme",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "downgrade",
        "admission_reason": "",
        "candidate_notice_status": "checked_clear",
        "candidate_notice_reason": "硬窗口公告排雷通过，旧公告或固定风险说明仅作背景",
        "candidate_notice_source": "tdxclaw_bridge.授权公告查询",
        "notice_supplement_status": "checked_clear",
        "notice_supplement_required": true,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "downgrade",
          "candidate_notice_status": "checked_clear",
          "eligible_for_top3": false,
          "eligible_for_handoff": true
        },
        "score": 0.637,
        "source_score": 0.637,
        "normalized_score": 63.7,
        "unified_score": 63.7,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {},
        "overnight_limit_watch_result": {},
        "theme_rotation_watch": {},
        "theme_rotation_watch_result": {},
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 13.94,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "铝",
        "theme_display": "铝",
        "industry": "有色-工业金属",
        "latest_snapshot": {
          "change_pct": -8.47,
          "open_change_pct": -9.32,
          "turnover_rate": 1.89,
          "volume_ratio": 11.63,
          "amount": 5535.63,
          "last_price": 13.94,
          "theme": "铝",
          "industry": "有色-工业金属"
        },
        "display_reason": "消息/题材驱动候选，需技术面继续确认；不打板短线模型禁止追买，只允许回踩/承接确认后观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "unconfirmed",
        "catalyst_status_label": "催化未确认",
        "catalyst_status_detail": "有题材/消息线索，但还没拿到可直接盖章的明确触发。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "theme_watch",
        "mainline_relation_label": "题材观察票",
        "mainline_relation_detail": "这票先按题材/消息观察处理，是否升级还要看技术确认和主线承接。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "铝",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 4,
        "strategy_group": "a_theme_watch",
        "strategy_group_cn": "A类主线/题材逻辑",
        "symbol": "603477",
        "name": "巨星农牧",
        "source_period": "morning",
        "tracking_scope": "all_layer_records",
        "return_tracking_scope": "side_channel_or_status_only",
        "entry_reason": "消息/题材驱动候选，需技术面继续确认；不打板短线模型禁止追买，只允许回踩/承接确认后观察",
        "blocked_reason": "公告存在硬风险；技术面降级；未达到正式 Top3 准入",
        "tracking_status": "tracked",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "a_watch",
        "candidate_channel": "news_theme",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "downgrade",
        "admission_reason": "",
        "candidate_notice_status": "high_risk",
        "candidate_notice_reason": "硬窗口内公告风险关键词命中",
        "candidate_notice_source": "tdxclaw_bridge.授权公告查询",
        "notice_supplement_status": "high_risk",
        "notice_supplement_required": true,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "downgrade",
          "candidate_notice_status": "high_risk",
          "eligible_for_top3": false,
          "eligible_for_handoff": true
        },
        "score": 0.62,
        "source_score": 0.62,
        "normalized_score": 62.0,
        "unified_score": 62.0,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {},
        "overnight_limit_watch_result": {},
        "theme_rotation_watch": {},
        "theme_rotation_watch_result": {},
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 16.03,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "生猪养殖",
        "theme_display": "生猪养殖",
        "industry": "农林牧渔-养殖业",
        "latest_snapshot": {
          "change_pct": -3.72,
          "open_change_pct": 0.18,
          "turnover_rate": 1.11,
          "volume_ratio": 7.61,
          "amount": 9246.88,
          "last_price": 16.03,
          "theme": "生猪养殖",
          "industry": "农林牧渔-养殖业"
        },
        "display_reason": "消息/题材驱动候选，需技术面继续确认；不打板短线模型禁止追买，只允许回踩/承接确认后观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "unconfirmed",
        "catalyst_status_label": "催化未确认",
        "catalyst_status_detail": "有题材/消息线索，但还没拿到可直接盖章的明确触发。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "theme_watch",
        "mainline_relation_label": "题材观察票",
        "mainline_relation_detail": "这票先按题材/消息观察处理，是否升级还要看技术确认和主线承接。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "生猪养殖",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 5,
        "strategy_group": "score_front_rejected",
        "strategy_group_cn": "候选评分前排逻辑",
        "symbol": "601579",
        "name": "会稽山",
        "source_period": "morning",
        "tracking_scope": "all_layer_records",
        "return_tracking_scope": "side_channel_or_status_only",
        "entry_reason": "候选综合评分靠前，但后续准入条件未全部通过",
        "blocked_reason": "已进入观察层；这里仍作为候选评分前排逻辑样本参与横向比较",
        "tracking_status": "tracked",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "a_watch",
        "candidate_channel": "news_theme",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "downgrade",
        "admission_reason": "",
        "candidate_notice_status": "checked_clear",
        "candidate_notice_reason": "硬窗口公告排雷通过，旧公告或固定风险说明仅作背景",
        "candidate_notice_source": "tdxclaw_bridge.授权公告查询",
        "notice_supplement_status": "checked_clear",
        "notice_supplement_required": true,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "downgrade",
          "candidate_notice_status": "checked_clear",
          "eligible_for_top3": false,
          "eligible_for_handoff": true
        },
        "score": 0.637,
        "source_score": 0.637,
        "normalized_score": 63.7,
        "unified_score": 63.7,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {},
        "overnight_limit_watch_result": {},
        "theme_rotation_watch": {},
        "theme_rotation_watch_result": {},
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 14.65,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "黄酒",
        "theme_display": "黄酒",
        "industry": "食品饮料-酿酒",
        "latest_snapshot": {
          "change_pct": -1.74,
          "open_change_pct": -0.34,
          "turnover_rate": 0.12,
          "volume_ratio": 3.36,
          "amount": 811.76,
          "last_price": 14.65,
          "theme": "黄酒",
          "industry": "食品饮料-酿酒"
        },
        "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "unconfirmed",
        "catalyst_status_label": "催化未确认",
        "catalyst_status_detail": "有题材/消息线索，但还没拿到可直接盖章的明确触发。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "theme_watch",
        "mainline_relation_label": "题材观察票",
        "mainline_relation_detail": "这票先按题材/消息观察处理，是否升级还要看技术确认和主线承接。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "黄酒",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 6,
        "strategy_group": "score_front_rejected",
        "strategy_group_cn": "候选评分前排逻辑",
        "symbol": "603937",
        "name": "丽岛新材",
        "source_period": "morning",
        "tracking_scope": "all_layer_records",
        "return_tracking_scope": "side_channel_or_status_only",
        "entry_reason": "候选综合评分靠前，但后续准入条件未全部通过",
        "blocked_reason": "已进入观察层；这里仍作为候选评分前排逻辑样本参与横向比较",
        "tracking_status": "tracked",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "a_watch",
        "candidate_channel": "news_theme",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "downgrade",
        "admission_reason": "",
        "candidate_notice_status": "checked_clear",
        "candidate_notice_reason": "硬窗口公告排雷通过，旧公告或固定风险说明仅作背景",
        "candidate_notice_source": "tdxclaw_bridge.授权公告查询",
        "notice_supplement_status": "checked_clear",
        "notice_supplement_required": true,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "downgrade",
          "candidate_notice_status": "checked_clear",
          "eligible_for_top3": false,
          "eligible_for_handoff": true
        },
        "score": 0.637,
        "source_score": 0.637,
        "normalized_score": 63.7,
        "unified_score": 63.7,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {},
        "overnight_limit_watch_result": {},
        "theme_rotation_watch": {},
        "theme_rotation_watch_result": {},
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 13.94,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "铝",
        "theme_display": "铝",
        "industry": "有色-工业金属",
        "latest_snapshot": {
          "change_pct": -8.47,
          "open_change_pct": -9.32,
          "turnover_rate": 1.89,
          "volume_ratio": 11.63,
          "amount": 5535.63,
          "last_price": 13.94,
          "theme": "铝",
          "industry": "有色-工业金属"
        },
        "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "unconfirmed",
        "catalyst_status_label": "催化未确认",
        "catalyst_status_detail": "有题材/消息线索，但还没拿到可直接盖章的明确触发。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "theme_watch",
        "mainline_relation_label": "题材观察票",
        "mainline_relation_detail": "这票先按题材/消息观察处理，是否升级还要看技术确认和主线承接。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "铝",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 7,
        "strategy_group": "score_front_rejected",
        "strategy_group_cn": "候选评分前排逻辑",
        "symbol": "000672",
        "name": "上峰材料",
        "source_period": "morning",
        "tracking_scope": "all_layer_records",
        "return_tracking_scope": "side_channel_or_status_only",
        "entry_reason": "候选综合评分靠前，但后续准入条件未全部通过",
        "blocked_reason": "公告存在硬风险；已进入观察层；这里仍作为候选评分前排逻辑样本参与横向比较",
        "tracking_status": "tracked",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "a_watch",
        "candidate_channel": "news_theme",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "downgrade",
        "admission_reason": "",
        "candidate_notice_status": "high_risk",
        "candidate_notice_reason": "硬窗口内公告风险关键词命中",
        "candidate_notice_source": "tdxclaw_bridge.授权公告查询",
        "notice_supplement_status": "high_risk",
        "notice_supplement_required": true,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "downgrade",
          "candidate_notice_status": "high_risk",
          "eligible_for_top3": false,
          "eligible_for_handoff": true
        },
        "score": 0.63,
        "source_score": 0.63,
        "normalized_score": 63.0,
        "unified_score": 63.0,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {},
        "overnight_limit_watch_result": {},
        "theme_rotation_watch": {},
        "theme_rotation_watch_result": {},
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 20.5,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "水泥制造",
        "theme_display": "水泥制造",
        "industry": "建材-水泥",
        "latest_snapshot": {
          "change_pct": -0.53,
          "open_change_pct": 1.21,
          "turnover_rate": 0.22,
          "volume_ratio": 2.47,
          "amount": 4372.74,
          "last_price": 20.5,
          "theme": "水泥制造",
          "industry": "建材-水泥"
        },
        "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "unconfirmed",
        "catalyst_status_label": "催化未确认",
        "catalyst_status_detail": "有题材/消息线索，但还没拿到可直接盖章的明确触发。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "theme_watch",
        "mainline_relation_label": "题材观察票",
        "mainline_relation_detail": "这票先按题材/消息观察处理，是否升级还要看技术确认和主线承接。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "水泥制造",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 8,
        "strategy_group": "low_reflow_watch",
        "strategy_group_cn": "低位回流观察",
        "symbol": "603669",
        "name": "灵康药业",
        "source_period": "morning",
        "tracking_scope": "side_channel_only",
        "return_tracking_scope": "side_channel_only",
        "entry_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
        "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
        "tracking_status": "false_positive",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "low_reflow_watch",
        "candidate_channel": "low_reflow_watch",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "downgrade",
        "admission_reason": "",
        "candidate_notice_status": "fetch_failed",
        "candidate_notice_reason": "",
        "candidate_notice_source": "",
        "notice_supplement_status": "not_checked",
        "notice_supplement_required": false,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "downgrade",
          "candidate_notice_status": "fetch_failed",
          "eligible_for_top3": false,
          "eligible_for_handoff": false
        },
        "score": 19.457117,
        "source_score": 19.457117,
        "normalized_score": 19.457,
        "unified_score": 19.457,
        "score_display_scale": "0_100",
        "low_reflow_watch": {
          "model": "low_reflow_watch_v1",
          "rank": 1,
          "selection_status": "picked",
          "hard_filters": {
            "change_pct_range": [
              -2,
              3
            ],
            "volume_ratio_range": [
              0.8,
              2.8
            ],
            "turnover_rate_range": [
              2,
              18
            ],
            "amount_min": 10000,
            "exclude_st": true,
            "exclude_notice_high_risk": true,
            "exclude_technical_cancel": true,
            "exclude_formal_top3": true
          },
          "score_formula": "low_reflow_v1: reflow strength + low-position safety + theme relation + risk status penalties",
          "buy_day_fields": {
            "change_pct": 1.68,
            "volume_ratio": 0.87,
            "turnover_rate": 5.57,
            "amount": 23406.76,
            "open_grab_pct": 0.0,
            "attack_wave_pct": 8.01
          },
          "risk_penalties": [
            "公告状态未完全确认",
            "量能偏弱"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "low_reflow_watch_result": {
          "next_day_change_pct": 0.17,
          "success": false,
          "success_standard": "next_day_change_pct >= 3",
          "source": "next_trading_day_tdx_export_change_pct"
        },
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {},
        "overnight_limit_watch_result": {},
        "theme_rotation_watch": {},
        "theme_rotation_watch_result": {},
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 6.07,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "化学制剂",
        "theme_display": "化学制剂",
        "industry": "医药医疗-化学制药",
        "latest_snapshot": {
          "change_pct": 0.17,
          "open_change_pct": 0.66,
          "turnover_rate": 0.4,
          "volume_ratio": 2.31,
          "amount": 1732.69,
          "last_price": 6.07,
          "theme": "化学制剂",
          "industry": "医药医疗-化学制药"
        },
        "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "none",
        "catalyst_status_label": "暂无明确催化",
        "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "execution_watch",
        "mainline_relation_label": "执行层观察票",
        "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "化学制剂",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 9,
        "strategy_group": "low_reflow_watch",
        "strategy_group_cn": "低位回流观察",
        "symbol": "002057",
        "name": "中钢天源",
        "source_period": "morning",
        "tracking_scope": "side_channel_only",
        "return_tracking_scope": "side_channel_only",
        "entry_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
        "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
        "tracking_status": "false_positive",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "low_reflow_watch",
        "candidate_channel": "low_reflow_watch",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "downgrade",
        "admission_reason": "",
        "candidate_notice_status": "checked_clear",
        "candidate_notice_reason": "硬窗口公告排雷通过，旧公告或固定风险说明仅作背景",
        "candidate_notice_source": "candidate_notice_scan",
        "notice_supplement_status": "checked_clear",
        "notice_supplement_required": false,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "downgrade",
          "candidate_notice_status": "checked_clear",
          "eligible_for_top3": false,
          "eligible_for_handoff": false
        },
        "score": 18.77842,
        "source_score": 18.77842,
        "normalized_score": 18.778,
        "unified_score": 18.778,
        "score_display_scale": "0_100",
        "low_reflow_watch": {
          "model": "low_reflow_watch_v1",
          "rank": 2,
          "selection_status": "picked",
          "hard_filters": {
            "change_pct_range": [
              -2,
              3
            ],
            "volume_ratio_range": [
              0.8,
              2.8
            ],
            "turnover_rate_range": [
              2,
              18
            ],
            "amount_min": 10000,
            "exclude_st": true,
            "exclude_notice_high_risk": true,
            "exclude_technical_cancel": true,
            "exclude_formal_top3": true
          },
          "score_formula": "low_reflow_v1: reflow strength + low-position safety + theme relation + risk status penalties",
          "buy_day_fields": {
            "change_pct": 1.35,
            "volume_ratio": 1.0,
            "turnover_rate": 5.41,
            "amount": 49448.04,
            "open_grab_pct": 2.21,
            "attack_wave_pct": 4.43
          },
          "risk_penalties": [],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "low_reflow_watch_result": {
          "next_day_change_pct": -2.5,
          "success": false,
          "success_standard": "next_day_change_pct >= 3",
          "source": "next_trading_day_tdx_export_change_pct"
        },
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {},
        "overnight_limit_watch_result": {},
        "theme_rotation_watch": {},
        "theme_rotation_watch_result": {},
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 11.68,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "磁性材料",
        "theme_display": "磁性材料",
        "industry": "有色-金属新材料",
        "latest_snapshot": {
          "change_pct": -2.5,
          "open_change_pct": 0.42,
          "turnover_rate": 0.54,
          "volume_ratio": 3.31,
          "amount": 4829.7,
          "last_price": 11.68,
          "theme": "磁性材料",
          "industry": "有色-金属新材料"
        },
        "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "none",
        "catalyst_status_label": "暂无明确催化",
        "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "execution_watch",
        "mainline_relation_label": "执行层观察票",
        "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "磁性材料",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 10,
        "strategy_group": "low_reflow_watch",
        "strategy_group_cn": "低位回流观察",
        "symbol": "003023",
        "name": "彩虹集团",
        "source_period": "morning",
        "tracking_scope": "side_channel_only",
        "return_tracking_scope": "side_channel_only",
        "entry_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
        "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
        "tracking_status": "false_positive",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "low_reflow_watch",
        "candidate_channel": "low_reflow_watch",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "observe",
        "admission_reason": "",
        "candidate_notice_status": "fetch_failed",
        "candidate_notice_reason": "",
        "candidate_notice_source": "",
        "notice_supplement_status": "not_checked",
        "notice_supplement_required": false,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "observe",
          "candidate_notice_status": "fetch_failed",
          "eligible_for_top3": false,
          "eligible_for_handoff": false
        },
        "score": 17.626226,
        "source_score": 17.626226,
        "normalized_score": 17.626,
        "unified_score": 17.626,
        "score_display_scale": "0_100",
        "low_reflow_watch": {
          "model": "low_reflow_watch_v1",
          "rank": 3,
          "selection_status": "picked",
          "hard_filters": {
            "change_pct_range": [
              -2,
              3
            ],
            "volume_ratio_range": [
              0.8,
              2.8
            ],
            "turnover_rate_range": [
              2,
              18
            ],
            "amount_min": 10000,
            "exclude_st": true,
            "exclude_notice_high_risk": true,
            "exclude_technical_cancel": true,
            "exclude_formal_top3": true
          },
          "score_formula": "low_reflow_v1: reflow strength + low-position safety + theme relation + risk status penalties",
          "buy_day_fields": {
            "change_pct": 0.58,
            "volume_ratio": 1.61,
            "turnover_rate": 4.76,
            "amount": 10170.26,
            "open_grab_pct": -0.92,
            "attack_wave_pct": 5.66
          },
          "risk_penalties": [
            "公告状态未完全确认"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "low_reflow_watch_result": {
          "next_day_change_pct": -2.02,
          "success": false,
          "success_standard": "next_day_change_pct >= 3",
          "source": "next_trading_day_tdx_export_change_pct"
        },
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {},
        "overnight_limit_watch_result": {},
        "theme_rotation_watch": {},
        "theme_rotation_watch_result": {},
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 20.38,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "个护小家电",
        "theme_display": "个护小家电",
        "industry": "家电-小家电",
        "latest_snapshot": {
          "change_pct": -2.02,
          "open_change_pct": 0.0,
          "turnover_rate": 0.69,
          "volume_ratio": 6.49,
          "amount": 1500.54,
          "last_price": 20.38,
          "theme": "个护小家电",
          "industry": "家电-小家电"
        },
        "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "none",
        "catalyst_status_label": "暂无明确催化",
        "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "execution_watch",
        "mainline_relation_label": "执行层观察票",
        "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "个护小家电",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 11,
        "strategy_group": "open_drive_watch",
        "strategy_group_cn": "早盘驱动观察",
        "symbol": "002636",
        "name": "金安国纪",
        "source_period": "morning",
        "tracking_scope": "side_channel_only",
        "return_tracking_scope": "side_channel_only",
        "entry_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
        "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
        "tracking_status": "false_positive",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "open_drive_watch",
        "candidate_channel": "open_drive_watch",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "",
        "admission_reason": "",
        "candidate_notice_status": "not_checked",
        "candidate_notice_reason": "",
        "candidate_notice_source": "",
        "notice_supplement_status": "not_checked",
        "notice_supplement_required": false,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "",
          "candidate_notice_status": "not_checked",
          "eligible_for_top3": false,
          "eligible_for_handoff": false
        },
        "score": 16.1828,
        "source_score": 16.1828,
        "normalized_score": 16.183,
        "unified_score": 16.183,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {
          "model": "open_drive_watch_v1",
          "rank": 1,
          "selection_status": "picked",
          "research_evidence": {
            "sample_count": 310,
            "next_day_avg_change_pct": 0.543,
            "next_day_big_move_rate_ge_3pct": 0.239,
            "baseline_next_day_avg_change_pct": -0.094,
            "baseline_big_move_rate_ge_3pct": 0.149,
            "source": "local_runs_filtered_pool_close_to_next_close_light_replay"
          },
          "hard_filters": {
            "open_drive_range": [
              0.5,
              5
            ],
            "change_pct_range": [
              -1,
              4
            ],
            "volume_ratio_range": [
              0.8,
              3.2
            ],
            "turnover_rate_range": [
              2,
              20
            ],
            "amount_min": 10000,
            "exclude_st": true,
            "exclude_notice_high_risk": true,
            "exclude_technical_cancel": true,
            "exclude_formal_top3": true
          },
          "score_formula": "open_drive_v1: early drive + muted close + volume/turnover confirmation + attack wave + theme relation - pullback/risk penalties",
          "buy_day_fields": {
            "change_pct": 3.63,
            "open_drive_pct": 0.73,
            "volume_ratio": 1.09,
            "turnover_rate": 6.86,
            "amount": 496481.63,
            "attack_wave_pct": 5.43,
            "pullback_from_high_pct": 3.82
          },
          "risk_penalties": [
            "20日涨幅偏高"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "open_drive_watch_result": {
          "next_day_change_pct": -3.23,
          "success": false,
          "success_standard": "next_day_change_pct >= 3",
          "source": "next_trading_day_tdx_export_change_pct"
        },
        "overnight_limit_watch": {},
        "overnight_limit_watch_result": {},
        "theme_rotation_watch": {},
        "theme_rotation_watch_result": {},
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 96.8,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "PCB",
        "theme_display": "PCB",
        "industry": "电子-元器件",
        "latest_snapshot": {
          "change_pct": -3.23,
          "open_change_pct": 0.04,
          "turnover_rate": 0.66,
          "volume_ratio": 3.14,
          "amount": 46902.54,
          "last_price": 96.8,
          "theme": "PCB",
          "industry": "电子-元器件"
        },
        "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "none",
        "catalyst_status_label": "暂无明确催化",
        "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "execution_watch",
        "mainline_relation_label": "执行层观察票",
        "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "PCB",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "002636",
          "name": "金安国纪",
          "groups": [
            "open_drive_watch"
          ],
          "group_labels": [
            "早盘驱动观察"
          ],
          "original_text": "",
          "summary_short": "",
          "stance": "",
          "catalyst": "",
          "risk": "",
          "action_hint": "隔夜报告解析失败",
          "status": "parse_failed"
        }
      },
      {
        "rank": 12,
        "strategy_group": "open_drive_watch",
        "strategy_group_cn": "早盘驱动观察",
        "symbol": "001268",
        "name": "联合精密",
        "source_period": "morning",
        "tracking_scope": "side_channel_only",
        "return_tracking_scope": "side_channel_only",
        "entry_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
        "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
        "tracking_status": "false_positive",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "open_drive_watch",
        "candidate_channel": "open_drive_watch",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "downgrade",
        "admission_reason": "",
        "candidate_notice_status": "checked_clear",
        "candidate_notice_reason": "硬窗口公告排雷通过，旧公告或固定风险说明仅作背景",
        "candidate_notice_source": "candidate_notice_scan",
        "notice_supplement_status": "checked_clear",
        "notice_supplement_required": false,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "downgrade",
          "candidate_notice_status": "checked_clear",
          "eligible_for_top3": false,
          "eligible_for_handoff": false
        },
        "score": 12.551405,
        "source_score": 12.551405,
        "normalized_score": 12.551,
        "unified_score": 12.551,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {
          "model": "open_drive_watch_v1",
          "rank": 2,
          "selection_status": "picked",
          "research_evidence": {
            "sample_count": 310,
            "next_day_avg_change_pct": 0.543,
            "next_day_big_move_rate_ge_3pct": 0.239,
            "baseline_next_day_avg_change_pct": -0.094,
            "baseline_big_move_rate_ge_3pct": 0.149,
            "source": "local_runs_filtered_pool_close_to_next_close_light_replay"
          },
          "hard_filters": {
            "open_drive_range": [
              0.5,
              5
            ],
            "change_pct_range": [
              -1,
              4
            ],
            "volume_ratio_range": [
              0.8,
              3.2
            ],
            "turnover_rate_range": [
              2,
              20
            ],
            "amount_min": 10000,
            "exclude_st": true,
            "exclude_notice_high_risk": true,
            "exclude_technical_cancel": true,
            "exclude_formal_top3": true
          },
          "score_formula": "open_drive_v1: early drive + muted close + volume/turnover confirmation + attack wave + theme relation - pullback/risk penalties",
          "buy_day_fields": {
            "change_pct": -0.31,
            "open_drive_pct": 0.9,
            "volume_ratio": 1.62,
            "turnover_rate": 5.45,
            "amount": 14902.59,
            "attack_wave_pct": 1.28,
            "pullback_from_high_pct": 4.32
          },
          "risk_penalties": [],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "open_drive_watch_result": {
          "next_day_change_pct": -2.99,
          "success": false,
          "success_standard": "next_day_change_pct >= 3",
          "source": "next_trading_day_tdx_export_change_pct"
        },
        "overnight_limit_watch": {},
        "overnight_limit_watch_result": {},
        "theme_rotation_watch": {},
        "theme_rotation_watch_result": {},
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 27.62,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "机械基础件",
        "theme_display": "机械基础件",
        "industry": "机械设备-通用设备",
        "latest_snapshot": {
          "change_pct": -2.99,
          "open_change_pct": -1.02,
          "turnover_rate": 0.83,
          "volume_ratio": 7.18,
          "amount": 2211.66,
          "last_price": 27.62,
          "theme": "机械基础件",
          "industry": "机械设备-通用设备"
        },
        "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "none",
        "catalyst_status_label": "暂无明确催化",
        "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "execution_watch",
        "mainline_relation_label": "执行层观察票",
        "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "机械基础件",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "001268",
          "name": "联合精密",
          "groups": [
            "open_drive_watch"
          ],
          "group_labels": [
            "早盘驱动观察"
          ],
          "original_text": "",
          "summary_short": "",
          "stance": "",
          "catalyst": "",
          "risk": "",
          "action_hint": "隔夜报告解析失败",
          "status": "parse_failed"
        }
      },
      {
        "rank": 13,
        "strategy_group": "open_drive_watch",
        "strategy_group_cn": "早盘驱动观察",
        "symbol": "002192",
        "name": "融捷股份",
        "source_period": "morning",
        "tracking_scope": "side_channel_only",
        "return_tracking_scope": "side_channel_only",
        "entry_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
        "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
        "tracking_status": "false_positive",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "open_drive_watch",
        "candidate_channel": "open_drive_watch",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "downgrade",
        "admission_reason": "",
        "candidate_notice_status": "fetch_failed",
        "candidate_notice_reason": "",
        "candidate_notice_source": "",
        "notice_supplement_status": "not_checked",
        "notice_supplement_required": false,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "downgrade",
          "candidate_notice_status": "fetch_failed",
          "eligible_for_top3": false,
          "eligible_for_handoff": false
        },
        "score": 12.2871,
        "source_score": 12.2871,
        "normalized_score": 12.287,
        "unified_score": 12.287,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {
          "model": "open_drive_watch_v1",
          "rank": 3,
          "selection_status": "picked",
          "research_evidence": {
            "sample_count": 310,
            "next_day_avg_change_pct": 0.543,
            "next_day_big_move_rate_ge_3pct": 0.239,
            "baseline_next_day_avg_change_pct": -0.094,
            "baseline_big_move_rate_ge_3pct": 0.149,
            "source": "local_runs_filtered_pool_close_to_next_close_light_replay"
          },
          "hard_filters": {
            "open_drive_range": [
              0.5,
              5
            ],
            "change_pct_range": [
              -1,
              4
            ],
            "volume_ratio_range": [
              0.8,
              3.2
            ],
            "turnover_rate_range": [
              2,
              20
            ],
            "amount_min": 10000,
            "exclude_st": true,
            "exclude_notice_high_risk": true,
            "exclude_technical_cancel": true,
            "exclude_formal_top3": true
          },
          "score_formula": "open_drive_v1: early drive + muted close + volume/turnover confirmation + attack wave + theme relation - pullback/risk penalties",
          "buy_day_fields": {
            "change_pct": 3.25,
            "open_drive_pct": 1.84,
            "volume_ratio": 1.16,
            "turnover_rate": 12.58,
            "amount": 321764.88,
            "attack_wave_pct": 1.43,
            "pullback_from_high_pct": 3.74
          },
          "risk_penalties": [
            "公告状态未完全确认"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "open_drive_watch_result": {
          "next_day_change_pct": -2.83,
          "success": false,
          "success_standard": "next_day_change_pct >= 3",
          "source": "next_trading_day_tdx_export_change_pct"
        },
        "overnight_limit_watch": {},
        "overnight_limit_watch_result": {},
        "theme_rotation_watch": {},
        "theme_rotation_watch_result": {},
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 94.84,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "锂",
        "theme_display": "锂",
        "industry": "有色-能源金属",
        "latest_snapshot": {
          "change_pct": -2.83,
          "open_change_pct": -1.89,
          "turnover_rate": 1.56,
          "volume_ratio": 4.55,
          "amount": 38538.68,
          "last_price": 94.84,
          "theme": "锂",
          "industry": "有色-能源金属"
        },
        "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "none",
        "catalyst_status_label": "暂无明确催化",
        "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "execution_watch",
        "mainline_relation_label": "执行层观察票",
        "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "锂",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "002192",
          "name": "融捷股份",
          "groups": [
            "open_drive_watch"
          ],
          "group_labels": [
            "早盘驱动观察"
          ],
          "original_text": "",
          "summary_short": "",
          "stance": "",
          "catalyst": "",
          "risk": "",
          "action_hint": "隔夜报告解析失败",
          "status": "parse_failed"
        }
      },
      {
        "rank": 14,
        "strategy_group": "overnight_limit_watch",
        "strategy_group_cn": "隔夜涨停观察",
        "symbol": "002384",
        "name": "东山精密",
        "source_period": "morning",
        "tracking_scope": "side_channel_only",
        "return_tracking_scope": "side_channel_only",
        "entry_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
        "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
        "tracking_status": "false_positive",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "overnight_limit_watch",
        "candidate_channel": "overnight_limit_watch",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "",
        "admission_reason": "",
        "candidate_notice_status": "not_checked",
        "candidate_notice_reason": "",
        "candidate_notice_source": "",
        "notice_supplement_status": "not_checked",
        "notice_supplement_required": false,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "",
          "candidate_notice_status": "not_checked",
          "eligible_for_top3": false,
          "eligible_for_handoff": false
        },
        "score": 57.834112,
        "source_score": 57.834112,
        "normalized_score": 57.834,
        "unified_score": 57.834,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {
          "model": "overnight_limit_watch_v1",
          "rank": 1,
          "selection_status": "picked",
          "bucket": "core_limit_rehearsal",
          "research_evidence": {
            "desktop_history_folder": "C:/Users/1/Desktop/新建文件夹 (7)",
            "file_count": 27,
            "paired_sample_count": 6342,
            "next_day_ge_9pct_count": 193,
            "baseline_next_day_ge_9pct_rate": 0.0304,
            "longxia_second_opinion_used_as": "side_channel_design_reference_only"
          },
          "hard_filters": {
            "change_pct_range": [
              -2,
              8.8
            ],
            "limit_rehearsal_min": "high_pct>=3 and attack/high evidence present",
            "pullback_from_high_max": 5.0,
            "volume_ratio_range": [
              0.6,
              3.5
            ],
            "turnover_rate_range": [
              1.5,
              18
            ],
            "amount_min": 10000,
            "year_limit_up_days_min": 1,
            "exclude_st": true,
            "exclude_notice_high_risk": true,
            "exclude_technical_cancel": true,
            "exclude_formal_top3": true,
            "exclude_already_climax": "change_pct>8.8"
          },
          "score_formula": "overnight_limit_v1: attack strength + controlled pullback + volume/turnover + limit-up memory + tail support - overheating/fake-drive penalties",
          "buy_day_fields": {
            "change_pct": 5.52,
            "high_pct": 7.63,
            "pullback_from_high_pct": 2.11,
            "volume_ratio": 1.12,
            "turnover_rate": 6.42,
            "amount": 2059714.13,
            "attack_wave_pct": 8.1,
            "open_grab_pct": 2.5,
            "year_limit_up_days": 13.0,
            "tail_volume_support": true
          },
          "risk_penalties": [],
          "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
          "next_day_success_threshold": 9.0
        },
        "overnight_limit_watch_result": {
          "next_day_change_pct": -3.12,
          "success": false,
          "big_move_success": false,
          "success_standard": "next_day_change_pct >= 9；big_move_success >= 5",
          "source": "next_trading_day_tdx_export_change_pct"
        },
        "theme_rotation_watch": {},
        "theme_rotation_watch_result": {},
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 229.49,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "PCB",
        "theme_display": "PCB",
        "industry": "电子-元器件",
        "latest_snapshot": {
          "change_pct": -3.12,
          "open_change_pct": -1.63,
          "turnover_rate": 0.7,
          "volume_ratio": 3.75,
          "amount": 225926.81,
          "last_price": 229.49,
          "theme": "PCB",
          "industry": "电子-元器件"
        },
        "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "none",
        "catalyst_status_label": "暂无明确催化",
        "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "execution_watch",
        "mainline_relation_label": "执行层观察票",
        "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "PCB",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "002384",
          "name": "东山精密",
          "groups": [
            "overnight_limit_watch"
          ],
          "group_labels": [
            "隔夜涨停观察"
          ],
          "original_text": "",
          "summary_short": "",
          "stance": "",
          "catalyst": "",
          "risk": "",
          "action_hint": "隔夜报告解析失败",
          "status": "parse_failed"
        }
      },
      {
        "rank": 15,
        "strategy_group": "overnight_limit_watch",
        "strategy_group_cn": "隔夜涨停观察",
        "symbol": "002429",
        "name": "兆驰股份",
        "source_period": "morning",
        "tracking_scope": "side_channel_only",
        "return_tracking_scope": "side_channel_only",
        "entry_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
        "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
        "tracking_status": "false_positive",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "overnight_limit_watch",
        "candidate_channel": "overnight_limit_watch",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "downgrade",
        "admission_reason": "",
        "candidate_notice_status": "fetch_failed",
        "candidate_notice_reason": "",
        "candidate_notice_source": "",
        "notice_supplement_status": "not_checked",
        "notice_supplement_required": false,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "downgrade",
          "candidate_notice_status": "fetch_failed",
          "eligible_for_top3": false,
          "eligible_for_handoff": false
        },
        "score": 50.457149,
        "source_score": 50.457149,
        "normalized_score": 50.457,
        "unified_score": 50.457,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {
          "model": "overnight_limit_watch_v1",
          "rank": 2,
          "selection_status": "picked",
          "bucket": "core_limit_rehearsal",
          "research_evidence": {
            "desktop_history_folder": "C:/Users/1/Desktop/新建文件夹 (7)",
            "file_count": 27,
            "paired_sample_count": 6342,
            "next_day_ge_9pct_count": 193,
            "baseline_next_day_ge_9pct_rate": 0.0304,
            "longxia_second_opinion_used_as": "side_channel_design_reference_only"
          },
          "hard_filters": {
            "change_pct_range": [
              -2,
              8.8
            ],
            "limit_rehearsal_min": "high_pct>=3 and attack/high evidence present",
            "pullback_from_high_max": 5.0,
            "volume_ratio_range": [
              0.6,
              3.5
            ],
            "turnover_rate_range": [
              1.5,
              18
            ],
            "amount_min": 10000,
            "year_limit_up_days_min": 1,
            "exclude_st": true,
            "exclude_notice_high_risk": true,
            "exclude_technical_cancel": true,
            "exclude_formal_top3": true,
            "exclude_already_climax": "change_pct>8.8"
          },
          "score_formula": "overnight_limit_v1: attack strength + controlled pullback + volume/turnover + limit-up memory + tail support - overheating/fake-drive penalties",
          "buy_day_fields": {
            "change_pct": 5.31,
            "high_pct": 7.4,
            "pullback_from_high_pct": 2.09,
            "volume_ratio": 1.6,
            "turnover_rate": 4.22,
            "amount": 210495.38,
            "attack_wave_pct": 7.35,
            "open_grab_pct": -0.93,
            "year_limit_up_days": 9.0,
            "tail_volume_support": true
          },
          "risk_penalties": [
            "公告状态未完全确认"
          ],
          "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
          "next_day_success_threshold": 9.0
        },
        "overnight_limit_watch_result": {
          "next_day_change_pct": -0.63,
          "success": false,
          "big_move_success": false,
          "success_standard": "next_day_change_pct >= 9；big_move_success >= 5",
          "source": "next_trading_day_tdx_export_change_pct"
        },
        "theme_rotation_watch": {},
        "theme_rotation_watch_result": {},
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 11.02,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "电视",
        "theme_display": "电视",
        "industry": "家电-黑色家电",
        "latest_snapshot": {
          "change_pct": -0.63,
          "open_change_pct": 1.71,
          "turnover_rate": 0.54,
          "volume_ratio": 5.75,
          "amount": 27873.14,
          "last_price": 11.02,
          "theme": "电视",
          "industry": "家电-黑色家电"
        },
        "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "none",
        "catalyst_status_label": "暂无明确催化",
        "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "execution_watch",
        "mainline_relation_label": "执行层观察票",
        "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "电视",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "002429",
          "name": "兆驰股份",
          "groups": [
            "overnight_limit_watch"
          ],
          "group_labels": [
            "隔夜涨停观察"
          ],
          "original_text": "",
          "summary_short": "",
          "stance": "",
          "catalyst": "",
          "risk": "",
          "action_hint": "隔夜报告解析失败",
          "status": "parse_failed"
        }
      },
      {
        "rank": 16,
        "strategy_group": "overnight_limit_watch",
        "strategy_group_cn": "隔夜涨停观察",
        "symbol": "002031",
        "name": "巨轮智能",
        "source_period": "morning",
        "tracking_scope": "side_channel_only",
        "return_tracking_scope": "side_channel_only",
        "entry_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
        "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
        "tracking_status": "false_positive",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "overnight_limit_watch",
        "candidate_channel": "overnight_limit_watch",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "downgrade",
        "admission_reason": "",
        "candidate_notice_status": "fetch_failed",
        "candidate_notice_reason": "",
        "candidate_notice_source": "",
        "notice_supplement_status": "not_checked",
        "notice_supplement_required": false,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "downgrade",
          "candidate_notice_status": "fetch_failed",
          "eligible_for_top3": false,
          "eligible_for_handoff": false
        },
        "score": 49.097821,
        "source_score": 49.097821,
        "normalized_score": 49.098,
        "unified_score": 49.098,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {
          "model": "overnight_limit_watch_v1",
          "rank": 3,
          "selection_status": "picked",
          "bucket": "core_limit_rehearsal",
          "research_evidence": {
            "desktop_history_folder": "C:/Users/1/Desktop/新建文件夹 (7)",
            "file_count": 27,
            "paired_sample_count": 6342,
            "next_day_ge_9pct_count": 193,
            "baseline_next_day_ge_9pct_rate": 0.0304,
            "longxia_second_opinion_used_as": "side_channel_design_reference_only"
          },
          "hard_filters": {
            "change_pct_range": [
              -2,
              8.8
            ],
            "limit_rehearsal_min": "high_pct>=3 and attack/high evidence present",
            "pullback_from_high_max": 5.0,
            "volume_ratio_range": [
              0.6,
              3.5
            ],
            "turnover_rate_range": [
              1.5,
              18
            ],
            "amount_min": 10000,
            "year_limit_up_days_min": 1,
            "exclude_st": true,
            "exclude_notice_high_risk": true,
            "exclude_technical_cancel": true,
            "exclude_formal_top3": true,
            "exclude_already_climax": "change_pct>8.8"
          },
          "score_formula": "overnight_limit_v1: attack strength + controlled pullback + volume/turnover + limit-up memory + tail support - overheating/fake-drive penalties",
          "buy_day_fields": {
            "change_pct": 8.36,
            "high_pct": 9.96,
            "pullback_from_high_pct": 1.6,
            "volume_ratio": 1.38,
            "turnover_rate": 11.82,
            "amount": 136567.03,
            "attack_wave_pct": 8.36,
            "open_grab_pct": 3.82,
            "year_limit_up_days": 6.0,
            "tail_volume_support": true
          },
          "risk_penalties": [
            "公告状态未完全确认"
          ],
          "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
          "next_day_success_threshold": 9.0
        },
        "overnight_limit_watch_result": {
          "next_day_change_pct": -7.78,
          "success": false,
          "big_move_success": false,
          "success_standard": "next_day_change_pct >= 9；big_move_success >= 5",
          "source": "next_trading_day_tdx_export_change_pct"
        },
        "theme_rotation_watch": {},
        "theme_rotation_watch_result": {},
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 5.57,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "其他专用设备",
        "theme_display": "其他专用设备",
        "industry": "机械设备-专用设备",
        "latest_snapshot": {
          "change_pct": -7.78,
          "open_change_pct": -4.8,
          "turnover_rate": 2.28,
          "volume_ratio": 7.63,
          "amount": 24740.68,
          "last_price": 5.57,
          "theme": "其他专用设备",
          "industry": "机械设备-专用设备"
        },
        "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "none",
        "catalyst_status_label": "暂无明确催化",
        "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "execution_watch",
        "mainline_relation_label": "执行层观察票",
        "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "其他专用设备",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "002031",
          "name": "巨轮智能",
          "groups": [
            "overnight_limit_watch"
          ],
          "group_labels": [
            "隔夜涨停观察"
          ],
          "original_text": "",
          "summary_short": "",
          "stance": "",
          "catalyst": "",
          "risk": "",
          "action_hint": "隔夜报告解析失败",
          "status": "parse_failed"
        }
      },
      {
        "rank": 17,
        "strategy_group": "theme_rotation_watch",
        "strategy_group_cn": "题材轮动观察",
        "symbol": "603203",
        "name": "快克智能",
        "source_period": "morning",
        "tracking_scope": "side_channel_only",
        "return_tracking_scope": "side_channel_only",
        "entry_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
        "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
        "tracking_status": "false_positive",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "theme_rotation_watch",
        "candidate_channel": "theme_rotation_watch",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "downgrade",
        "admission_reason": "",
        "candidate_notice_status": "fetch_failed",
        "candidate_notice_reason": "",
        "candidate_notice_source": "",
        "notice_supplement_status": "not_checked",
        "notice_supplement_required": false,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "downgrade",
          "candidate_notice_status": "fetch_failed",
          "eligible_for_top3": false,
          "eligible_for_handoff": false
        },
        "score": 22.016588,
        "source_score": 22.016588,
        "normalized_score": 22.017,
        "unified_score": 22.017,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {},
        "overnight_limit_watch_result": {},
        "theme_rotation_watch": {
          "model": "theme_rotation_watch_v1",
          "rank": 1,
          "selection_status": "picked",
          "theme": "其他专用设备",
          "theme_stats": {
            "theme": "其他专用设备",
            "count": 4,
            "active_count": 4,
            "strong_count": 2,
            "positive_count": 2,
            "avg_change_pct": 0.31,
            "avg_volume_ratio": 1.15,
            "total_amount": 352135.8
          },
          "hard_filters": {
            "theme_breadth_min": 2,
            "theme_active_count_min": 2,
            "change_pct_range": [
              -1,
              6
            ],
            "volume_ratio_range": [
              0.8,
              3.5
            ],
            "turnover_rate_range": [
              1.5,
              20
            ],
            "amount_min": 10000,
            "exclude_st": true,
            "exclude_notice_high_risk": true,
            "exclude_technical_cancel": true,
            "exclude_formal_top3": true,
            "tracking_scope": "side_channel_only"
          },
          "score_formula": "theme_rotation_v1: theme breadth + active/strong count + theme avg strength + individual volume/attack confirmation - overheat/risk penalties",
          "buy_day_fields": {
            "theme": "其他专用设备",
            "change_pct": 4.65,
            "volume_ratio": 1.1,
            "turnover_rate": 7.42,
            "amount": 152595.23,
            "attack_wave_pct": 7.39,
            "open_grab_pct": 0.0,
            "pullback_from_high_pct": 2.91
          },
          "risk_penalties": [
            "公告状态未完全确认"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
          "next_day_success_threshold": 3.0
        },
        "theme_rotation_watch_result": {
          "next_day_change_pct": -1.69,
          "success": false,
          "success_standard": "next_day_change_pct >= 3",
          "source": "next_trading_day_tdx_export_change_pct"
        },
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 63.0,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "其他专用设备",
        "theme_display": "其他专用设备",
        "industry": "机械设备-专用设备",
        "latest_snapshot": {
          "change_pct": -1.69,
          "open_change_pct": -0.73,
          "turnover_rate": 0.71,
          "volume_ratio": 3.4,
          "amount": 14613.88,
          "last_price": 63.0,
          "theme": "其他专用设备",
          "industry": "机械设备-专用设备"
        },
        "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "none",
        "catalyst_status_label": "暂无明确催化",
        "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "execution_watch",
        "mainline_relation_label": "执行层观察票",
        "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "其他专用设备",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "603203",
          "name": "快克智能",
          "groups": [
            "theme_rotation_watch"
          ],
          "group_labels": [
            "题材轮动观察"
          ],
          "original_text": "",
          "summary_short": "",
          "stance": "",
          "catalyst": "",
          "risk": "",
          "action_hint": "隔夜报告解析失败",
          "status": "parse_failed"
        }
      },
      {
        "rank": 18,
        "strategy_group": "theme_rotation_watch",
        "strategy_group_cn": "题材轮动观察",
        "symbol": "002079",
        "name": "苏州固锝",
        "source_period": "morning",
        "tracking_scope": "side_channel_only",
        "return_tracking_scope": "side_channel_only",
        "entry_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
        "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
        "tracking_status": "false_positive",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "theme_rotation_watch",
        "candidate_channel": "theme_rotation_watch",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "downgrade",
        "admission_reason": "",
        "candidate_notice_status": "fetch_failed",
        "candidate_notice_reason": "",
        "candidate_notice_source": "",
        "notice_supplement_status": "not_checked",
        "notice_supplement_required": false,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "downgrade",
          "candidate_notice_status": "fetch_failed",
          "eligible_for_top3": false,
          "eligible_for_handoff": false
        },
        "score": 20.593646,
        "source_score": 20.593646,
        "normalized_score": 20.594,
        "unified_score": 20.594,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {},
        "overnight_limit_watch_result": {},
        "theme_rotation_watch": {
          "model": "theme_rotation_watch_v1",
          "rank": 2,
          "selection_status": "picked",
          "theme": "光伏辅材",
          "theme_stats": {
            "theme": "光伏辅材",
            "count": 2,
            "active_count": 2,
            "strong_count": 2,
            "positive_count": 2,
            "avg_change_pct": 4.2,
            "avg_volume_ratio": 1.425,
            "total_amount": 172893.74
          },
          "hard_filters": {
            "theme_breadth_min": 2,
            "theme_active_count_min": 2,
            "change_pct_range": [
              -1,
              6
            ],
            "volume_ratio_range": [
              0.8,
              3.5
            ],
            "turnover_rate_range": [
              1.5,
              20
            ],
            "amount_min": 10000,
            "exclude_st": true,
            "exclude_notice_high_risk": true,
            "exclude_technical_cancel": true,
            "exclude_formal_top3": true,
            "tracking_scope": "side_channel_only"
          },
          "score_formula": "theme_rotation_v1: theme breadth + active/strong count + theme avg strength + individual volume/attack confirmation - overheat/risk penalties",
          "buy_day_fields": {
            "theme": "光伏辅材",
            "change_pct": 4.12,
            "volume_ratio": 1.11,
            "turnover_rate": 7.77,
            "amount": 89618.58,
            "attack_wave_pct": 6.34,
            "open_grab_pct": -0.28,
            "pullback_from_high_pct": 1.3
          },
          "risk_penalties": [
            "公告状态未完全确认"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
          "next_day_success_threshold": 3.0
        },
        "theme_rotation_watch_result": {
          "next_day_change_pct": -4.25,
          "success": false,
          "success_standard": "next_day_change_pct >= 3",
          "source": "next_trading_day_tdx_export_change_pct"
        },
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 13.75,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "光伏辅材",
        "theme_display": "光伏辅材",
        "industry": "电力设备-光伏设备",
        "latest_snapshot": {
          "change_pct": -4.25,
          "open_change_pct": -0.49,
          "turnover_rate": 0.93,
          "volume_ratio": 4.29,
          "amount": 10530.69,
          "last_price": 13.75,
          "theme": "光伏辅材",
          "industry": "电力设备-光伏设备"
        },
        "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "none",
        "catalyst_status_label": "暂无明确催化",
        "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "execution_watch",
        "mainline_relation_label": "执行层观察票",
        "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "光伏辅材",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "002079",
          "name": "苏州固锝",
          "groups": [
            "theme_rotation_watch"
          ],
          "group_labels": [
            "题材轮动观察"
          ],
          "original_text": "",
          "summary_short": "",
          "stance": "",
          "catalyst": "",
          "risk": "",
          "action_hint": "隔夜报告解析失败",
          "status": "parse_failed"
        }
      },
      {
        "rank": 19,
        "strategy_group": "theme_rotation_watch",
        "strategy_group_cn": "题材轮动观察",
        "symbol": "603444",
        "name": "吉比特",
        "source_period": "morning",
        "tracking_scope": "side_channel_only",
        "return_tracking_scope": "side_channel_only",
        "entry_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
        "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
        "tracking_status": "false_positive",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "theme_rotation_watch",
        "candidate_channel": "theme_rotation_watch",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "",
        "admission_reason": "",
        "candidate_notice_status": "not_checked",
        "candidate_notice_reason": "",
        "candidate_notice_source": "",
        "notice_supplement_status": "not_checked",
        "notice_supplement_required": false,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "",
          "candidate_notice_status": "not_checked",
          "eligible_for_top3": false,
          "eligible_for_handoff": false
        },
        "score": 19.572872,
        "source_score": 19.572872,
        "normalized_score": 19.573,
        "unified_score": 19.573,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {},
        "overnight_limit_watch_result": {},
        "theme_rotation_watch": {
          "model": "theme_rotation_watch_v1",
          "rank": 3,
          "selection_status": "picked",
          "theme": "游戏",
          "theme_stats": {
            "theme": "游戏",
            "count": 3,
            "active_count": 2,
            "strong_count": 2,
            "positive_count": 2,
            "avg_change_pct": 0.94,
            "avg_volume_ratio": 1.66,
            "total_amount": 249476.33
          },
          "hard_filters": {
            "theme_breadth_min": 2,
            "theme_active_count_min": 2,
            "change_pct_range": [
              -1,
              6
            ],
            "volume_ratio_range": [
              0.8,
              3.5
            ],
            "turnover_rate_range": [
              1.5,
              20
            ],
            "amount_min": 10000,
            "exclude_st": true,
            "exclude_notice_high_risk": true,
            "exclude_technical_cancel": true,
            "exclude_formal_top3": true,
            "tracking_scope": "side_channel_only"
          },
          "score_formula": "theme_rotation_v1: theme breadth + active/strong count + theme avg strength + individual volume/attack confirmation - overheat/risk penalties",
          "buy_day_fields": {
            "theme": "游戏",
            "change_pct": 3.55,
            "volume_ratio": 1.72,
            "turnover_rate": 5.17,
            "amount": 140988.78,
            "attack_wave_pct": 4.6,
            "open_grab_pct": 0.0,
            "pullback_from_high_pct": 4.33
          },
          "risk_penalties": [],
          "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
          "next_day_success_threshold": 3.0
        },
        "theme_rotation_watch_result": {
          "next_day_change_pct": -1.77,
          "success": false,
          "success_standard": "next_day_change_pct >= 3",
          "source": "next_trading_day_tdx_export_change_pct"
        },
        "close_strength_hold_watch": {},
        "close_strength_hold_watch_result": {},
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 367.88,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "游戏",
        "theme_display": "游戏",
        "industry": "传媒-游戏",
        "latest_snapshot": {
          "change_pct": -1.77,
          "open_change_pct": -0.27,
          "turnover_rate": 0.55,
          "volume_ratio": 5.21,
          "amount": 14468.22,
          "last_price": 367.88,
          "theme": "游戏",
          "industry": "传媒-游戏"
        },
        "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "none",
        "catalyst_status_label": "暂无明确催化",
        "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "execution_watch",
        "mainline_relation_label": "执行层观察票",
        "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "游戏",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "603444",
          "name": "吉比特",
          "groups": [
            "theme_rotation_watch"
          ],
          "group_labels": [
            "题材轮动观察"
          ],
          "original_text": "",
          "summary_short": "",
          "stance": "",
          "catalyst": "",
          "risk": "",
          "action_hint": "隔夜报告解析失败",
          "status": "parse_failed"
        }
      },
      {
        "rank": 20,
        "strategy_group": "close_strength_hold_watch",
        "strategy_group_cn": "收盘中强承接观察",
        "symbol": "002997",
        "name": "瑞鹄模具",
        "source_period": "morning",
        "tracking_scope": "side_channel_only",
        "return_tracking_scope": "side_channel_only",
        "entry_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
        "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
        "tracking_status": "false_positive",
        "formal_return_eligible": false,
        "side_channel_return_eligible": true,
        "side_channel_return_scope": "panel_front_sample",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "close_strength_hold_watch",
        "candidate_channel": "close_strength_hold_watch",
        "current_observation_tier": "",
        "current_candidate_channel": "",
        "current_buy_allowed": false,
        "current_action": "",
        "current_status_cn": "行情已跟踪",
        "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
        "last_seen_source": "watchlist",
        "last_seen_in_period": true,
        "latest_snapshot_matched": true,
        "snapshot_missing_reason": "",
        "buy_allowed": false,
        "eligible_for_top3": null,
        "eligible_for_handoff": null,
        "technical_decision": "downgrade",
        "admission_reason": "",
        "candidate_notice_status": "fetch_failed",
        "candidate_notice_reason": "",
        "candidate_notice_source": "",
        "notice_supplement_status": "not_checked",
        "notice_supplement_required": false,
        "no_chase_reasons": [],
        "cancel_conditions": [],
        "data_quality_warnings": [],
        "raw_status": {
          "technical_decision": "downgrade",
          "candidate_notice_status": "fetch_failed",
          "eligible_for_top3": false,
          "eligible_for_handoff": false
        },
        "score": 12.929742,
        "source_score": 12.929742,
        "normalized_score": 12.93,
        "unified_score": 12.93,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {},
        "overnight_limit_watch_result": {},
        "theme_rotation_watch": {},
        "theme_rotation_watch_result": {},
        "close_strength_hold_watch": {
          "model": "close_strength_hold_watch_v1",
          "rank": 1,
          "selection_status": "picked",
          "research_evidence": {
            "source": "local_runs_close_only_light_replay",
            "date_range": "all_available_close_runs",
            "priced_sample_count": 125,
            "eligible_rows_after_excluding_existing_side_groups": 665,
            "next_day_avg_change_pct": 0.503,
            "next_day_ge_3pct_rate": 0.28,
            "existing_strategy_profit_used_as": "benchmark_context_only",
            "longxia_second_opinion_used_as": "side_channel_design_reference_only"
          },
          "hard_filters": {
            "change_pct_range": [
              2,
              6
            ],
            "high_pct_max": 6.5,
            "fade_from_high_max": 2.2,
            "volume_ratio_range": [
              0.8,
              2.8
            ],
            "turnover_rate_range": [
              1.5,
              16
            ],
            "amount_min": 10000,
            "change_20d_max": 55,
            "change_60d_max": 140,
            "year_limit_up_days_max": 8,
            "exclude_st": true,
            "exclude_notice_high_risk": true,
            "exclude_technical_cancel": true,
            "exclude_formal_top3": true,
            "exclude_existing_side_strategy": true,
            "tracking_scope": "side_channel_only"
          },
          "score_formula": "close_strength_hold_v1: moderate close strength + controlled fade + healthy volume/turnover + attack support - overheat/risk penalties",
          "buy_day_fields": {
            "change_pct": 2.07,
            "high_pct": 4.76,
            "fade_from_high_pct": -2.56,
            "volume_ratio": 1.07,
            "turnover_rate": 2.61,
            "amount": 16413.9,
            "attack_wave_pct": 2.04,
            "open_grab_pct": -0.93,
            "change_20d_pct": 7.57,
            "year_limit_up_days": 2.0
          },
          "risk_penalties": [
            "公告状态未完全确认"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3；辅助观察次日是否延续中强承接",
          "next_day_success_threshold": 3.0
        },
        "close_strength_hold_watch_result": {
          "next_day_change_pct": -0.63,
          "success": false,
          "success_standard": "next_day_change_pct >= 3",
          "source": "next_trading_day_tdx_export_change_pct"
        },
        "legacy_next_day_change_pct": null,
        "legacy_next_day_change_text": "",
        "legacy_next_day_date": "",
        "legacy_next_day_source": "",
        "legacy_next_day_last_price": null,
        "return_metrics": {
          "intraday_return": null,
          "intraday_price": 29.76,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "morning_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "其他汽车零部件",
        "theme_display": "其他汽车零部件",
        "industry": "汽车-汽车零部件",
        "latest_snapshot": {
          "change_pct": -0.63,
          "open_change_pct": 0.57,
          "turnover_rate": 0.19,
          "volume_ratio": 2.43,
          "amount": 1186.19,
          "last_price": 29.76,
          "theme": "其他汽车零部件",
          "industry": "汽车-汽车零部件"
        },
        "display_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-08T09:37:09+08:00",
        "historical_backfill": false,
        "catalyst_status": "none",
        "catalyst_status_label": "暂无明确催化",
        "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
        "catalyst_timeliness": "unknown",
        "catalyst_timeliness_label": "时效不明",
        "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
        "mainline_relation": "execution_watch",
        "mainline_relation_label": "执行层观察票",
        "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
        "execution_position_label": "",
        "execution_position_detail": "",
        "mainline_theme_display": "其他汽车零部件",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      }
    ],
    "display_source": "four_layer_tracking",
    "raw_record_count": 20,
    "raw_strategy_counts": {
      "formal_top3": 1,
      "a_theme_watch": 3,
      "score_front_rejected": 3,
      "low_reflow_watch": 3,
      "open_drive_watch": 3,
      "overnight_limit_watch": 3,
      "theme_rotation_watch": 3,
      "close_strength_hold_watch": 1
    },
    "summary": {
      "groups": {
        "formal_top3": {
          "label": "正式 Top3 逻辑",
          "count": 1,
          "formal_return_eligible_count": 1,
          "side_channel_return_eligible_count": 0,
          "avg_intraday_return": null,
          "avg_t1_return": null,
          "status_counts": {
            "cancelled": 1,
            "price_missing": 0,
            "tracked": 0,
            "verified": 0
          }
        },
        "a_theme_watch": {
          "label": "A类主线/题材逻辑",
          "count": 3,
          "formal_return_eligible_count": 0,
          "side_channel_return_eligible_count": 3,
          "avg_intraday_return": null,
          "avg_t1_return": null,
          "status_counts": {
            "cancelled": 0,
            "price_missing": 0,
            "tracked": 3,
            "verified": 0
          }
        },
        "b_technical_watch": {
          "label": "B类技术/资金逻辑",
          "count": 0,
          "formal_return_eligible_count": 0,
          "side_channel_return_eligible_count": 0,
          "avg_intraday_return": null,
          "avg_t1_return": null,
          "status_counts": {
            "cancelled": 0,
            "price_missing": 0,
            "tracked": 0,
            "verified": 0
          }
        },
        "score_front_rejected": {
          "label": "候选评分前排逻辑",
          "count": 3,
          "formal_return_eligible_count": 0,
          "side_channel_return_eligible_count": 3,
          "avg_intraday_return": null,
          "avg_t1_return": null,
          "status_counts": {
            "cancelled": 0,
            "price_missing": 0,
            "tracked": 3,
            "verified": 0
          }
        },
        "low_reflow_watch": {
          "label": "低位回流观察",
          "count": 3,
          "formal_return_eligible_count": 0,
          "side_channel_return_eligible_count": 3,
          "avg_intraday_return": null,
          "avg_t1_return": null,
          "status_counts": {
            "cancelled": 0,
            "false_positive": 3,
            "price_missing": 0,
            "tracked": 0,
            "verified": 0
          }
        },
        "open_drive_watch": {
          "label": "早盘驱动观察",
          "count": 3,
          "formal_return_eligible_count": 0,
          "side_channel_return_eligible_count": 3,
          "avg_intraday_return": null,
          "avg_t1_return": null,
          "status_counts": {
            "cancelled": 0,
            "false_positive": 3,
            "price_missing": 0,
            "tracked": 0,
            "verified": 0
          }
        },
        "overnight_limit_watch": {
          "label": "隔夜涨停观察",
          "count": 3,
          "formal_return_eligible_count": 0,
          "side_channel_return_eligible_count": 3,
          "avg_intraday_return": null,
          "avg_t1_return": null,
          "status_counts": {
            "cancelled": 0,
            "false_positive": 3,
            "price_missing": 0,
            "tracked": 0,
            "verified": 0
          }
        },
        "theme_rotation_watch": {
          "label": "题材轮动观察",
          "count": 3,
          "formal_return_eligible_count": 0,
          "side_channel_return_eligible_count": 3,
          "avg_intraday_return": null,
          "avg_t1_return": null,
          "status_counts": {
            "cancelled": 0,
            "false_positive": 3,
            "price_missing": 0,
            "tracked": 0,
            "verified": 0
          }
        },
        "close_strength_hold_watch": {
          "label": "收盘中强承接观察",
          "count": 1,
          "formal_return_eligible_count": 0,
          "side_channel_return_eligible_count": 1,
          "avg_intraday_return": null,
          "avg_t1_return": null,
          "status_counts": {
            "cancelled": 0,
            "false_positive": 1,
            "price_missing": 0,
            "tracked": 0,
            "verified": 0
          }
        }
      },
      "comparison": {
        "best_avg_t1_group": "",
        "best_avg_t1_group_cn": "",
        "note": "正式收益和旁路收益分开；A/B/评分前排/低位回流观察/早盘驱动观察/隔夜涨停观察/题材轮动观察/收盘中强承接观察只能用于复盘建议，不能反向改当天 Top3。"
      }
    },
    "tracking_coverage": {
      "panel_layer_records_tracked": true,
      "candidate_pool_audit_limit": 30,
      "notice_supplement_source": "persisted_four_layer_json_not_web_dom",
      "notice_supplement_limit_per_group": 3,
      "notice_supplement_policy": "四层票池每层最多取前 3 只，低位回流观察最多 3 只，早盘驱动观察最多 3 只，隔夜涨停观察最多 3 只，题材轮动观察最多 3 只，收盘中强承接观察最多 3 只，去重后补查公告/风险证据；只补证据，不改 Top3、handoff 或交易计划。",
      "record_count": 20,
      "latest_snapshot_match_count": 20,
      "report_match_count": 1,
      "not_found_count": 0,
      "return_policy": "正式收益只统计 Top3；题材观察、技术观察、候选评分前排、低位回流观察、早盘驱动观察、隔夜涨停观察、题材轮动观察和收盘中强承接观察只跟踪面板展示样本，旁路收益也只按这些样本统计。",
      "notice_supplement_completed": true,
      "notice_supplement_required_count": 6,
      "notice_supplement_incomplete_count": 0
    },
    "file": {
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\four-layer-tracking.morning.json",
      "relative_path": "runs/2026-07-08/four-layer-tracking.morning.json",
      "exists": true,
      "size": 116901,
      "modified_at": "2026-07-08T09:37:09+08:00",
      "sha256": "45b804dcd5c76a94618a62a7ae699e4a1407a9bac29ca861a9a56c7afd283d98"
    }
  },
  "four_layer_tracking_by_period": {
    "close": {
      "status": "missing",
      "period": "close",
      "records": [],
      "summary": {},
      "tracking_coverage": {}
    },
    "morning": {
      "status": "ok",
      "period": "morning",
      "records": [
        {
          "rank": 1,
          "strategy_group": "formal_top3",
          "strategy_group_cn": "正式 Top3 逻辑",
          "symbol": "603132",
          "name": "金徽股份",
          "source_period": "morning",
          "tracking_scope": "all_layer_records",
          "return_tracking_scope": "formal_return",
          "entry_reason": "公告、技术、评分和执行边界通过，进入正式 Top3 样本",
          "blocked_reason": "",
          "tracking_status": "cancelled",
          "formal_return_eligible": true,
          "side_channel_return_eligible": false,
          "side_channel_return_scope": "formal_return_only",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "buy_top3",
          "candidate_channel": "technical_fund_flow",
          "current_observation_tier": "rejected",
          "current_candidate_channel": "technical_fund_flow",
          "current_buy_allowed": true,
          "current_action": "cancel",
          "current_status_cn": "已取消",
          "current_blocked_reason": "已进入正式 Top3；这里仍作为候选评分前排逻辑样本参与横向比较",
          "last_seen_source": "report",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": true,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "pass",
          "admission_reason": "",
          "candidate_notice_status": "checked_clear",
          "candidate_notice_reason": "硬窗口公告排雷通过，旧公告或固定风险说明仅作背景",
          "candidate_notice_source": "tdxclaw_bridge.授权公告查询",
          "notice_supplement_status": "checked_clear",
          "notice_supplement_required": true,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "pass",
            "candidate_notice_status": "checked_clear",
            "eligible_for_top3": true,
            "eligible_for_handoff": true
          },
          "score": 0.62,
          "source_score": 0.62,
          "normalized_score": 62.0,
          "unified_score": 62.0,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {},
          "overnight_limit_watch_result": {},
          "theme_rotation_watch": {},
          "theme_rotation_watch_result": {},
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 16.13,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "铅锌",
          "theme_display": "铅锌",
          "industry": "有色-工业金属",
          "latest_snapshot": {
            "change_pct": -2.71,
            "open_change_pct": -0.18,
            "turnover_rate": 0.1,
            "volume_ratio": 5.37,
            "amount": 1640.08,
            "last_price": 16.13,
            "theme": "铅锌",
            "industry": "有色-工业金属"
          },
          "display_reason": "公告、技术、评分和执行边界通过，进入正式 Top3 样本",
          "return_status": "待次日回填",
          "return_scope": "pending",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "none",
          "catalyst_status_label": "暂无明确催化",
          "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "execution_off_mainline",
          "mainline_relation_label": "主线外执行票",
          "mainline_relation_detail": "这票不是按主线扩散去上，而是按技术/资金确认去执行；不是链路漂移。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "铅锌",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "603132",
            "name": "金徽股份",
            "groups": [
              "formal_top3"
            ],
            "group_labels": [
              "正式 Top3"
            ],
            "original_text": "",
            "summary_short": "",
            "stance": "",
            "catalyst": "",
            "risk": "",
            "action_hint": "隔夜报告解析失败",
            "status": "parse_failed"
          }
        },
        {
          "rank": 2,
          "strategy_group": "a_theme_watch",
          "strategy_group_cn": "A类主线/题材逻辑",
          "symbol": "002570",
          "name": "贝因美",
          "source_period": "morning",
          "tracking_scope": "all_layer_records",
          "return_tracking_scope": "side_channel_or_status_only",
          "entry_reason": "消息/题材驱动候选，需技术面继续确认",
          "blocked_reason": "仍需观察确认；未达到正式 Top3 准入；技术面观察",
          "tracking_status": "tracked",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "a_watch",
          "candidate_channel": "news_theme",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "observe",
          "admission_reason": "",
          "candidate_notice_status": "checked_clear",
          "candidate_notice_reason": "硬窗口公告排雷通过，旧公告或固定风险说明仅作背景",
          "candidate_notice_source": "tdxclaw_bridge.授权公告查询",
          "notice_supplement_status": "checked_clear",
          "notice_supplement_required": true,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "observe",
            "candidate_notice_status": "checked_clear",
            "eligible_for_top3": false,
            "eligible_for_handoff": true
          },
          "score": 0.62,
          "source_score": 0.62,
          "normalized_score": 62.0,
          "unified_score": 62.0,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {},
          "overnight_limit_watch_result": {},
          "theme_rotation_watch": {},
          "theme_rotation_watch_result": {},
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 4.07,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "乳制品",
          "theme_display": "乳制品",
          "industry": "食品饮料-饮料乳品",
          "latest_snapshot": {
            "change_pct": -1.21,
            "open_change_pct": -0.73,
            "turnover_rate": 0.14,
            "volume_ratio": 2.42,
            "amount": 611.77,
            "last_price": 4.07,
            "theme": "乳制品",
            "industry": "食品饮料-饮料乳品"
          },
          "display_reason": "消息/题材驱动候选，需技术面继续确认",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "unconfirmed",
          "catalyst_status_label": "催化未确认",
          "catalyst_status_detail": "有题材/消息线索，但还没拿到可直接盖章的明确触发。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "theme_watch",
          "mainline_relation_label": "题材观察票",
          "mainline_relation_detail": "这票先按题材/消息观察处理，是否升级还要看技术确认和主线承接。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "乳制品",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 3,
          "strategy_group": "a_theme_watch",
          "strategy_group_cn": "A类主线/题材逻辑",
          "symbol": "603937",
          "name": "丽岛新材",
          "source_period": "morning",
          "tracking_scope": "all_layer_records",
          "return_tracking_scope": "side_channel_or_status_only",
          "entry_reason": "消息/题材驱动候选，需技术面继续确认；不打板短线模型禁止追买，只允许回踩/承接确认后观察",
          "blocked_reason": "技术面降级；未达到正式 Top3 准入",
          "tracking_status": "tracked",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "a_watch",
          "candidate_channel": "news_theme",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "downgrade",
          "admission_reason": "",
          "candidate_notice_status": "checked_clear",
          "candidate_notice_reason": "硬窗口公告排雷通过，旧公告或固定风险说明仅作背景",
          "candidate_notice_source": "tdxclaw_bridge.授权公告查询",
          "notice_supplement_status": "checked_clear",
          "notice_supplement_required": true,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "downgrade",
            "candidate_notice_status": "checked_clear",
            "eligible_for_top3": false,
            "eligible_for_handoff": true
          },
          "score": 0.637,
          "source_score": 0.637,
          "normalized_score": 63.7,
          "unified_score": 63.7,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {},
          "overnight_limit_watch_result": {},
          "theme_rotation_watch": {},
          "theme_rotation_watch_result": {},
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 13.94,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "铝",
          "theme_display": "铝",
          "industry": "有色-工业金属",
          "latest_snapshot": {
            "change_pct": -8.47,
            "open_change_pct": -9.32,
            "turnover_rate": 1.89,
            "volume_ratio": 11.63,
            "amount": 5535.63,
            "last_price": 13.94,
            "theme": "铝",
            "industry": "有色-工业金属"
          },
          "display_reason": "消息/题材驱动候选，需技术面继续确认；不打板短线模型禁止追买，只允许回踩/承接确认后观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "unconfirmed",
          "catalyst_status_label": "催化未确认",
          "catalyst_status_detail": "有题材/消息线索，但还没拿到可直接盖章的明确触发。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "theme_watch",
          "mainline_relation_label": "题材观察票",
          "mainline_relation_detail": "这票先按题材/消息观察处理，是否升级还要看技术确认和主线承接。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "铝",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 4,
          "strategy_group": "a_theme_watch",
          "strategy_group_cn": "A类主线/题材逻辑",
          "symbol": "603477",
          "name": "巨星农牧",
          "source_period": "morning",
          "tracking_scope": "all_layer_records",
          "return_tracking_scope": "side_channel_or_status_only",
          "entry_reason": "消息/题材驱动候选，需技术面继续确认；不打板短线模型禁止追买，只允许回踩/承接确认后观察",
          "blocked_reason": "公告存在硬风险；技术面降级；未达到正式 Top3 准入",
          "tracking_status": "tracked",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "a_watch",
          "candidate_channel": "news_theme",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "downgrade",
          "admission_reason": "",
          "candidate_notice_status": "high_risk",
          "candidate_notice_reason": "硬窗口内公告风险关键词命中",
          "candidate_notice_source": "tdxclaw_bridge.授权公告查询",
          "notice_supplement_status": "high_risk",
          "notice_supplement_required": true,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "downgrade",
            "candidate_notice_status": "high_risk",
            "eligible_for_top3": false,
            "eligible_for_handoff": true
          },
          "score": 0.62,
          "source_score": 0.62,
          "normalized_score": 62.0,
          "unified_score": 62.0,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {},
          "overnight_limit_watch_result": {},
          "theme_rotation_watch": {},
          "theme_rotation_watch_result": {},
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 16.03,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "生猪养殖",
          "theme_display": "生猪养殖",
          "industry": "农林牧渔-养殖业",
          "latest_snapshot": {
            "change_pct": -3.72,
            "open_change_pct": 0.18,
            "turnover_rate": 1.11,
            "volume_ratio": 7.61,
            "amount": 9246.88,
            "last_price": 16.03,
            "theme": "生猪养殖",
            "industry": "农林牧渔-养殖业"
          },
          "display_reason": "消息/题材驱动候选，需技术面继续确认；不打板短线模型禁止追买，只允许回踩/承接确认后观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "unconfirmed",
          "catalyst_status_label": "催化未确认",
          "catalyst_status_detail": "有题材/消息线索，但还没拿到可直接盖章的明确触发。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "theme_watch",
          "mainline_relation_label": "题材观察票",
          "mainline_relation_detail": "这票先按题材/消息观察处理，是否升级还要看技术确认和主线承接。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "生猪养殖",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 5,
          "strategy_group": "score_front_rejected",
          "strategy_group_cn": "候选评分前排逻辑",
          "symbol": "601579",
          "name": "会稽山",
          "source_period": "morning",
          "tracking_scope": "all_layer_records",
          "return_tracking_scope": "side_channel_or_status_only",
          "entry_reason": "候选综合评分靠前，但后续准入条件未全部通过",
          "blocked_reason": "已进入观察层；这里仍作为候选评分前排逻辑样本参与横向比较",
          "tracking_status": "tracked",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "a_watch",
          "candidate_channel": "news_theme",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "downgrade",
          "admission_reason": "",
          "candidate_notice_status": "checked_clear",
          "candidate_notice_reason": "硬窗口公告排雷通过，旧公告或固定风险说明仅作背景",
          "candidate_notice_source": "tdxclaw_bridge.授权公告查询",
          "notice_supplement_status": "checked_clear",
          "notice_supplement_required": true,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "downgrade",
            "candidate_notice_status": "checked_clear",
            "eligible_for_top3": false,
            "eligible_for_handoff": true
          },
          "score": 0.637,
          "source_score": 0.637,
          "normalized_score": 63.7,
          "unified_score": 63.7,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {},
          "overnight_limit_watch_result": {},
          "theme_rotation_watch": {},
          "theme_rotation_watch_result": {},
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 14.65,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "黄酒",
          "theme_display": "黄酒",
          "industry": "食品饮料-酿酒",
          "latest_snapshot": {
            "change_pct": -1.74,
            "open_change_pct": -0.34,
            "turnover_rate": 0.12,
            "volume_ratio": 3.36,
            "amount": 811.76,
            "last_price": 14.65,
            "theme": "黄酒",
            "industry": "食品饮料-酿酒"
          },
          "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "unconfirmed",
          "catalyst_status_label": "催化未确认",
          "catalyst_status_detail": "有题材/消息线索，但还没拿到可直接盖章的明确触发。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "theme_watch",
          "mainline_relation_label": "题材观察票",
          "mainline_relation_detail": "这票先按题材/消息观察处理，是否升级还要看技术确认和主线承接。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "黄酒",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 6,
          "strategy_group": "score_front_rejected",
          "strategy_group_cn": "候选评分前排逻辑",
          "symbol": "603937",
          "name": "丽岛新材",
          "source_period": "morning",
          "tracking_scope": "all_layer_records",
          "return_tracking_scope": "side_channel_or_status_only",
          "entry_reason": "候选综合评分靠前，但后续准入条件未全部通过",
          "blocked_reason": "已进入观察层；这里仍作为候选评分前排逻辑样本参与横向比较",
          "tracking_status": "tracked",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "a_watch",
          "candidate_channel": "news_theme",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "downgrade",
          "admission_reason": "",
          "candidate_notice_status": "checked_clear",
          "candidate_notice_reason": "硬窗口公告排雷通过，旧公告或固定风险说明仅作背景",
          "candidate_notice_source": "tdxclaw_bridge.授权公告查询",
          "notice_supplement_status": "checked_clear",
          "notice_supplement_required": true,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "downgrade",
            "candidate_notice_status": "checked_clear",
            "eligible_for_top3": false,
            "eligible_for_handoff": true
          },
          "score": 0.637,
          "source_score": 0.637,
          "normalized_score": 63.7,
          "unified_score": 63.7,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {},
          "overnight_limit_watch_result": {},
          "theme_rotation_watch": {},
          "theme_rotation_watch_result": {},
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 13.94,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "铝",
          "theme_display": "铝",
          "industry": "有色-工业金属",
          "latest_snapshot": {
            "change_pct": -8.47,
            "open_change_pct": -9.32,
            "turnover_rate": 1.89,
            "volume_ratio": 11.63,
            "amount": 5535.63,
            "last_price": 13.94,
            "theme": "铝",
            "industry": "有色-工业金属"
          },
          "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "unconfirmed",
          "catalyst_status_label": "催化未确认",
          "catalyst_status_detail": "有题材/消息线索，但还没拿到可直接盖章的明确触发。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "theme_watch",
          "mainline_relation_label": "题材观察票",
          "mainline_relation_detail": "这票先按题材/消息观察处理，是否升级还要看技术确认和主线承接。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "铝",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 7,
          "strategy_group": "score_front_rejected",
          "strategy_group_cn": "候选评分前排逻辑",
          "symbol": "000672",
          "name": "上峰材料",
          "source_period": "morning",
          "tracking_scope": "all_layer_records",
          "return_tracking_scope": "side_channel_or_status_only",
          "entry_reason": "候选综合评分靠前，但后续准入条件未全部通过",
          "blocked_reason": "公告存在硬风险；已进入观察层；这里仍作为候选评分前排逻辑样本参与横向比较",
          "tracking_status": "tracked",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "a_watch",
          "candidate_channel": "news_theme",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "downgrade",
          "admission_reason": "",
          "candidate_notice_status": "high_risk",
          "candidate_notice_reason": "硬窗口内公告风险关键词命中",
          "candidate_notice_source": "tdxclaw_bridge.授权公告查询",
          "notice_supplement_status": "high_risk",
          "notice_supplement_required": true,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "downgrade",
            "candidate_notice_status": "high_risk",
            "eligible_for_top3": false,
            "eligible_for_handoff": true
          },
          "score": 0.63,
          "source_score": 0.63,
          "normalized_score": 63.0,
          "unified_score": 63.0,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {},
          "overnight_limit_watch_result": {},
          "theme_rotation_watch": {},
          "theme_rotation_watch_result": {},
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 20.5,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "水泥制造",
          "theme_display": "水泥制造",
          "industry": "建材-水泥",
          "latest_snapshot": {
            "change_pct": -0.53,
            "open_change_pct": 1.21,
            "turnover_rate": 0.22,
            "volume_ratio": 2.47,
            "amount": 4372.74,
            "last_price": 20.5,
            "theme": "水泥制造",
            "industry": "建材-水泥"
          },
          "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "unconfirmed",
          "catalyst_status_label": "催化未确认",
          "catalyst_status_detail": "有题材/消息线索，但还没拿到可直接盖章的明确触发。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "theme_watch",
          "mainline_relation_label": "题材观察票",
          "mainline_relation_detail": "这票先按题材/消息观察处理，是否升级还要看技术确认和主线承接。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "水泥制造",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 8,
          "strategy_group": "low_reflow_watch",
          "strategy_group_cn": "低位回流观察",
          "symbol": "603669",
          "name": "灵康药业",
          "source_period": "morning",
          "tracking_scope": "side_channel_only",
          "return_tracking_scope": "side_channel_only",
          "entry_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
          "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
          "tracking_status": "false_positive",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "low_reflow_watch",
          "candidate_channel": "low_reflow_watch",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "downgrade",
          "admission_reason": "",
          "candidate_notice_status": "fetch_failed",
          "candidate_notice_reason": "",
          "candidate_notice_source": "",
          "notice_supplement_status": "not_checked",
          "notice_supplement_required": false,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "downgrade",
            "candidate_notice_status": "fetch_failed",
            "eligible_for_top3": false,
            "eligible_for_handoff": false
          },
          "score": 19.457117,
          "source_score": 19.457117,
          "normalized_score": 19.457,
          "unified_score": 19.457,
          "score_display_scale": "0_100",
          "low_reflow_watch": {
            "model": "low_reflow_watch_v1",
            "rank": 1,
            "selection_status": "picked",
            "hard_filters": {
              "change_pct_range": [
                -2,
                3
              ],
              "volume_ratio_range": [
                0.8,
                2.8
              ],
              "turnover_rate_range": [
                2,
                18
              ],
              "amount_min": 10000,
              "exclude_st": true,
              "exclude_notice_high_risk": true,
              "exclude_technical_cancel": true,
              "exclude_formal_top3": true
            },
            "score_formula": "low_reflow_v1: reflow strength + low-position safety + theme relation + risk status penalties",
            "buy_day_fields": {
              "change_pct": 1.68,
              "volume_ratio": 0.87,
              "turnover_rate": 5.57,
              "amount": 23406.76,
              "open_grab_pct": 0.0,
              "attack_wave_pct": 8.01
            },
            "risk_penalties": [
              "公告状态未完全确认",
              "量能偏弱"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "low_reflow_watch_result": {
            "next_day_change_pct": 0.17,
            "success": false,
            "success_standard": "next_day_change_pct >= 3",
            "source": "next_trading_day_tdx_export_change_pct"
          },
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {},
          "overnight_limit_watch_result": {},
          "theme_rotation_watch": {},
          "theme_rotation_watch_result": {},
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 6.07,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "化学制剂",
          "theme_display": "化学制剂",
          "industry": "医药医疗-化学制药",
          "latest_snapshot": {
            "change_pct": 0.17,
            "open_change_pct": 0.66,
            "turnover_rate": 0.4,
            "volume_ratio": 2.31,
            "amount": 1732.69,
            "last_price": 6.07,
            "theme": "化学制剂",
            "industry": "医药医疗-化学制药"
          },
          "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "none",
          "catalyst_status_label": "暂无明确催化",
          "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "execution_watch",
          "mainline_relation_label": "执行层观察票",
          "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "化学制剂",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 9,
          "strategy_group": "low_reflow_watch",
          "strategy_group_cn": "低位回流观察",
          "symbol": "002057",
          "name": "中钢天源",
          "source_period": "morning",
          "tracking_scope": "side_channel_only",
          "return_tracking_scope": "side_channel_only",
          "entry_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
          "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
          "tracking_status": "false_positive",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "low_reflow_watch",
          "candidate_channel": "low_reflow_watch",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "downgrade",
          "admission_reason": "",
          "candidate_notice_status": "checked_clear",
          "candidate_notice_reason": "硬窗口公告排雷通过，旧公告或固定风险说明仅作背景",
          "candidate_notice_source": "candidate_notice_scan",
          "notice_supplement_status": "checked_clear",
          "notice_supplement_required": false,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "downgrade",
            "candidate_notice_status": "checked_clear",
            "eligible_for_top3": false,
            "eligible_for_handoff": false
          },
          "score": 18.77842,
          "source_score": 18.77842,
          "normalized_score": 18.778,
          "unified_score": 18.778,
          "score_display_scale": "0_100",
          "low_reflow_watch": {
            "model": "low_reflow_watch_v1",
            "rank": 2,
            "selection_status": "picked",
            "hard_filters": {
              "change_pct_range": [
                -2,
                3
              ],
              "volume_ratio_range": [
                0.8,
                2.8
              ],
              "turnover_rate_range": [
                2,
                18
              ],
              "amount_min": 10000,
              "exclude_st": true,
              "exclude_notice_high_risk": true,
              "exclude_technical_cancel": true,
              "exclude_formal_top3": true
            },
            "score_formula": "low_reflow_v1: reflow strength + low-position safety + theme relation + risk status penalties",
            "buy_day_fields": {
              "change_pct": 1.35,
              "volume_ratio": 1.0,
              "turnover_rate": 5.41,
              "amount": 49448.04,
              "open_grab_pct": 2.21,
              "attack_wave_pct": 4.43
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "low_reflow_watch_result": {
            "next_day_change_pct": -2.5,
            "success": false,
            "success_standard": "next_day_change_pct >= 3",
            "source": "next_trading_day_tdx_export_change_pct"
          },
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {},
          "overnight_limit_watch_result": {},
          "theme_rotation_watch": {},
          "theme_rotation_watch_result": {},
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 11.68,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "磁性材料",
          "theme_display": "磁性材料",
          "industry": "有色-金属新材料",
          "latest_snapshot": {
            "change_pct": -2.5,
            "open_change_pct": 0.42,
            "turnover_rate": 0.54,
            "volume_ratio": 3.31,
            "amount": 4829.7,
            "last_price": 11.68,
            "theme": "磁性材料",
            "industry": "有色-金属新材料"
          },
          "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "none",
          "catalyst_status_label": "暂无明确催化",
          "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "execution_watch",
          "mainline_relation_label": "执行层观察票",
          "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "磁性材料",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 10,
          "strategy_group": "low_reflow_watch",
          "strategy_group_cn": "低位回流观察",
          "symbol": "003023",
          "name": "彩虹集团",
          "source_period": "morning",
          "tracking_scope": "side_channel_only",
          "return_tracking_scope": "side_channel_only",
          "entry_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
          "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
          "tracking_status": "false_positive",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "low_reflow_watch",
          "candidate_channel": "low_reflow_watch",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "observe",
          "admission_reason": "",
          "candidate_notice_status": "fetch_failed",
          "candidate_notice_reason": "",
          "candidate_notice_source": "",
          "notice_supplement_status": "not_checked",
          "notice_supplement_required": false,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "observe",
            "candidate_notice_status": "fetch_failed",
            "eligible_for_top3": false,
            "eligible_for_handoff": false
          },
          "score": 17.626226,
          "source_score": 17.626226,
          "normalized_score": 17.626,
          "unified_score": 17.626,
          "score_display_scale": "0_100",
          "low_reflow_watch": {
            "model": "low_reflow_watch_v1",
            "rank": 3,
            "selection_status": "picked",
            "hard_filters": {
              "change_pct_range": [
                -2,
                3
              ],
              "volume_ratio_range": [
                0.8,
                2.8
              ],
              "turnover_rate_range": [
                2,
                18
              ],
              "amount_min": 10000,
              "exclude_st": true,
              "exclude_notice_high_risk": true,
              "exclude_technical_cancel": true,
              "exclude_formal_top3": true
            },
            "score_formula": "low_reflow_v1: reflow strength + low-position safety + theme relation + risk status penalties",
            "buy_day_fields": {
              "change_pct": 0.58,
              "volume_ratio": 1.61,
              "turnover_rate": 4.76,
              "amount": 10170.26,
              "open_grab_pct": -0.92,
              "attack_wave_pct": 5.66
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "low_reflow_watch_result": {
            "next_day_change_pct": -2.02,
            "success": false,
            "success_standard": "next_day_change_pct >= 3",
            "source": "next_trading_day_tdx_export_change_pct"
          },
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {},
          "overnight_limit_watch_result": {},
          "theme_rotation_watch": {},
          "theme_rotation_watch_result": {},
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 20.38,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "个护小家电",
          "theme_display": "个护小家电",
          "industry": "家电-小家电",
          "latest_snapshot": {
            "change_pct": -2.02,
            "open_change_pct": 0.0,
            "turnover_rate": 0.69,
            "volume_ratio": 6.49,
            "amount": 1500.54,
            "last_price": 20.38,
            "theme": "个护小家电",
            "industry": "家电-小家电"
          },
          "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "none",
          "catalyst_status_label": "暂无明确催化",
          "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "execution_watch",
          "mainline_relation_label": "执行层观察票",
          "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "个护小家电",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 11,
          "strategy_group": "open_drive_watch",
          "strategy_group_cn": "早盘驱动观察",
          "symbol": "002636",
          "name": "金安国纪",
          "source_period": "morning",
          "tracking_scope": "side_channel_only",
          "return_tracking_scope": "side_channel_only",
          "entry_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
          "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
          "tracking_status": "false_positive",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "open_drive_watch",
          "candidate_channel": "open_drive_watch",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "",
          "admission_reason": "",
          "candidate_notice_status": "not_checked",
          "candidate_notice_reason": "",
          "candidate_notice_source": "",
          "notice_supplement_status": "not_checked",
          "notice_supplement_required": false,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "",
            "candidate_notice_status": "not_checked",
            "eligible_for_top3": false,
            "eligible_for_handoff": false
          },
          "score": 16.1828,
          "source_score": 16.1828,
          "normalized_score": 16.183,
          "unified_score": 16.183,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {
            "model": "open_drive_watch_v1",
            "rank": 1,
            "selection_status": "picked",
            "research_evidence": {
              "sample_count": 310,
              "next_day_avg_change_pct": 0.543,
              "next_day_big_move_rate_ge_3pct": 0.239,
              "baseline_next_day_avg_change_pct": -0.094,
              "baseline_big_move_rate_ge_3pct": 0.149,
              "source": "local_runs_filtered_pool_close_to_next_close_light_replay"
            },
            "hard_filters": {
              "open_drive_range": [
                0.5,
                5
              ],
              "change_pct_range": [
                -1,
                4
              ],
              "volume_ratio_range": [
                0.8,
                3.2
              ],
              "turnover_rate_range": [
                2,
                20
              ],
              "amount_min": 10000,
              "exclude_st": true,
              "exclude_notice_high_risk": true,
              "exclude_technical_cancel": true,
              "exclude_formal_top3": true
            },
            "score_formula": "open_drive_v1: early drive + muted close + volume/turnover confirmation + attack wave + theme relation - pullback/risk penalties",
            "buy_day_fields": {
              "change_pct": 3.63,
              "open_drive_pct": 0.73,
              "volume_ratio": 1.09,
              "turnover_rate": 6.86,
              "amount": 496481.63,
              "attack_wave_pct": 5.43,
              "pullback_from_high_pct": 3.82
            },
            "risk_penalties": [
              "20日涨幅偏高"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "open_drive_watch_result": {
            "next_day_change_pct": -3.23,
            "success": false,
            "success_standard": "next_day_change_pct >= 3",
            "source": "next_trading_day_tdx_export_change_pct"
          },
          "overnight_limit_watch": {},
          "overnight_limit_watch_result": {},
          "theme_rotation_watch": {},
          "theme_rotation_watch_result": {},
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 96.8,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "PCB",
          "theme_display": "PCB",
          "industry": "电子-元器件",
          "latest_snapshot": {
            "change_pct": -3.23,
            "open_change_pct": 0.04,
            "turnover_rate": 0.66,
            "volume_ratio": 3.14,
            "amount": 46902.54,
            "last_price": 96.8,
            "theme": "PCB",
            "industry": "电子-元器件"
          },
          "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "none",
          "catalyst_status_label": "暂无明确催化",
          "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "execution_watch",
          "mainline_relation_label": "执行层观察票",
          "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "PCB",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "002636",
            "name": "金安国纪",
            "groups": [
              "open_drive_watch"
            ],
            "group_labels": [
              "早盘驱动观察"
            ],
            "original_text": "",
            "summary_short": "",
            "stance": "",
            "catalyst": "",
            "risk": "",
            "action_hint": "隔夜报告解析失败",
            "status": "parse_failed"
          }
        },
        {
          "rank": 12,
          "strategy_group": "open_drive_watch",
          "strategy_group_cn": "早盘驱动观察",
          "symbol": "001268",
          "name": "联合精密",
          "source_period": "morning",
          "tracking_scope": "side_channel_only",
          "return_tracking_scope": "side_channel_only",
          "entry_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
          "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
          "tracking_status": "false_positive",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "open_drive_watch",
          "candidate_channel": "open_drive_watch",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "downgrade",
          "admission_reason": "",
          "candidate_notice_status": "checked_clear",
          "candidate_notice_reason": "硬窗口公告排雷通过，旧公告或固定风险说明仅作背景",
          "candidate_notice_source": "candidate_notice_scan",
          "notice_supplement_status": "checked_clear",
          "notice_supplement_required": false,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "downgrade",
            "candidate_notice_status": "checked_clear",
            "eligible_for_top3": false,
            "eligible_for_handoff": false
          },
          "score": 12.551405,
          "source_score": 12.551405,
          "normalized_score": 12.551,
          "unified_score": 12.551,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {
            "model": "open_drive_watch_v1",
            "rank": 2,
            "selection_status": "picked",
            "research_evidence": {
              "sample_count": 310,
              "next_day_avg_change_pct": 0.543,
              "next_day_big_move_rate_ge_3pct": 0.239,
              "baseline_next_day_avg_change_pct": -0.094,
              "baseline_big_move_rate_ge_3pct": 0.149,
              "source": "local_runs_filtered_pool_close_to_next_close_light_replay"
            },
            "hard_filters": {
              "open_drive_range": [
                0.5,
                5
              ],
              "change_pct_range": [
                -1,
                4
              ],
              "volume_ratio_range": [
                0.8,
                3.2
              ],
              "turnover_rate_range": [
                2,
                20
              ],
              "amount_min": 10000,
              "exclude_st": true,
              "exclude_notice_high_risk": true,
              "exclude_technical_cancel": true,
              "exclude_formal_top3": true
            },
            "score_formula": "open_drive_v1: early drive + muted close + volume/turnover confirmation + attack wave + theme relation - pullback/risk penalties",
            "buy_day_fields": {
              "change_pct": -0.31,
              "open_drive_pct": 0.9,
              "volume_ratio": 1.62,
              "turnover_rate": 5.45,
              "amount": 14902.59,
              "attack_wave_pct": 1.28,
              "pullback_from_high_pct": 4.32
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "open_drive_watch_result": {
            "next_day_change_pct": -2.99,
            "success": false,
            "success_standard": "next_day_change_pct >= 3",
            "source": "next_trading_day_tdx_export_change_pct"
          },
          "overnight_limit_watch": {},
          "overnight_limit_watch_result": {},
          "theme_rotation_watch": {},
          "theme_rotation_watch_result": {},
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 27.62,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "机械基础件",
          "theme_display": "机械基础件",
          "industry": "机械设备-通用设备",
          "latest_snapshot": {
            "change_pct": -2.99,
            "open_change_pct": -1.02,
            "turnover_rate": 0.83,
            "volume_ratio": 7.18,
            "amount": 2211.66,
            "last_price": 27.62,
            "theme": "机械基础件",
            "industry": "机械设备-通用设备"
          },
          "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "none",
          "catalyst_status_label": "暂无明确催化",
          "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "execution_watch",
          "mainline_relation_label": "执行层观察票",
          "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "机械基础件",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "001268",
            "name": "联合精密",
            "groups": [
              "open_drive_watch"
            ],
            "group_labels": [
              "早盘驱动观察"
            ],
            "original_text": "",
            "summary_short": "",
            "stance": "",
            "catalyst": "",
            "risk": "",
            "action_hint": "隔夜报告解析失败",
            "status": "parse_failed"
          }
        },
        {
          "rank": 13,
          "strategy_group": "open_drive_watch",
          "strategy_group_cn": "早盘驱动观察",
          "symbol": "002192",
          "name": "融捷股份",
          "source_period": "morning",
          "tracking_scope": "side_channel_only",
          "return_tracking_scope": "side_channel_only",
          "entry_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
          "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
          "tracking_status": "false_positive",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "open_drive_watch",
          "candidate_channel": "open_drive_watch",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "downgrade",
          "admission_reason": "",
          "candidate_notice_status": "fetch_failed",
          "candidate_notice_reason": "",
          "candidate_notice_source": "",
          "notice_supplement_status": "not_checked",
          "notice_supplement_required": false,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "downgrade",
            "candidate_notice_status": "fetch_failed",
            "eligible_for_top3": false,
            "eligible_for_handoff": false
          },
          "score": 12.2871,
          "source_score": 12.2871,
          "normalized_score": 12.287,
          "unified_score": 12.287,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {
            "model": "open_drive_watch_v1",
            "rank": 3,
            "selection_status": "picked",
            "research_evidence": {
              "sample_count": 310,
              "next_day_avg_change_pct": 0.543,
              "next_day_big_move_rate_ge_3pct": 0.239,
              "baseline_next_day_avg_change_pct": -0.094,
              "baseline_big_move_rate_ge_3pct": 0.149,
              "source": "local_runs_filtered_pool_close_to_next_close_light_replay"
            },
            "hard_filters": {
              "open_drive_range": [
                0.5,
                5
              ],
              "change_pct_range": [
                -1,
                4
              ],
              "volume_ratio_range": [
                0.8,
                3.2
              ],
              "turnover_rate_range": [
                2,
                20
              ],
              "amount_min": 10000,
              "exclude_st": true,
              "exclude_notice_high_risk": true,
              "exclude_technical_cancel": true,
              "exclude_formal_top3": true
            },
            "score_formula": "open_drive_v1: early drive + muted close + volume/turnover confirmation + attack wave + theme relation - pullback/risk penalties",
            "buy_day_fields": {
              "change_pct": 3.25,
              "open_drive_pct": 1.84,
              "volume_ratio": 1.16,
              "turnover_rate": 12.58,
              "amount": 321764.88,
              "attack_wave_pct": 1.43,
              "pullback_from_high_pct": 3.74
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "open_drive_watch_result": {
            "next_day_change_pct": -2.83,
            "success": false,
            "success_standard": "next_day_change_pct >= 3",
            "source": "next_trading_day_tdx_export_change_pct"
          },
          "overnight_limit_watch": {},
          "overnight_limit_watch_result": {},
          "theme_rotation_watch": {},
          "theme_rotation_watch_result": {},
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 94.84,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "锂",
          "theme_display": "锂",
          "industry": "有色-能源金属",
          "latest_snapshot": {
            "change_pct": -2.83,
            "open_change_pct": -1.89,
            "turnover_rate": 1.56,
            "volume_ratio": 4.55,
            "amount": 38538.68,
            "last_price": 94.84,
            "theme": "锂",
            "industry": "有色-能源金属"
          },
          "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "none",
          "catalyst_status_label": "暂无明确催化",
          "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "execution_watch",
          "mainline_relation_label": "执行层观察票",
          "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "锂",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "002192",
            "name": "融捷股份",
            "groups": [
              "open_drive_watch"
            ],
            "group_labels": [
              "早盘驱动观察"
            ],
            "original_text": "",
            "summary_short": "",
            "stance": "",
            "catalyst": "",
            "risk": "",
            "action_hint": "隔夜报告解析失败",
            "status": "parse_failed"
          }
        },
        {
          "rank": 14,
          "strategy_group": "overnight_limit_watch",
          "strategy_group_cn": "隔夜涨停观察",
          "symbol": "002384",
          "name": "东山精密",
          "source_period": "morning",
          "tracking_scope": "side_channel_only",
          "return_tracking_scope": "side_channel_only",
          "entry_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
          "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
          "tracking_status": "false_positive",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "overnight_limit_watch",
          "candidate_channel": "overnight_limit_watch",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "",
          "admission_reason": "",
          "candidate_notice_status": "not_checked",
          "candidate_notice_reason": "",
          "candidate_notice_source": "",
          "notice_supplement_status": "not_checked",
          "notice_supplement_required": false,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "",
            "candidate_notice_status": "not_checked",
            "eligible_for_top3": false,
            "eligible_for_handoff": false
          },
          "score": 57.834112,
          "source_score": 57.834112,
          "normalized_score": 57.834,
          "unified_score": 57.834,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {
            "model": "overnight_limit_watch_v1",
            "rank": 1,
            "selection_status": "picked",
            "bucket": "core_limit_rehearsal",
            "research_evidence": {
              "desktop_history_folder": "C:/Users/1/Desktop/新建文件夹 (7)",
              "file_count": 27,
              "paired_sample_count": 6342,
              "next_day_ge_9pct_count": 193,
              "baseline_next_day_ge_9pct_rate": 0.0304,
              "longxia_second_opinion_used_as": "side_channel_design_reference_only"
            },
            "hard_filters": {
              "change_pct_range": [
                -2,
                8.8
              ],
              "limit_rehearsal_min": "high_pct>=3 and attack/high evidence present",
              "pullback_from_high_max": 5.0,
              "volume_ratio_range": [
                0.6,
                3.5
              ],
              "turnover_rate_range": [
                1.5,
                18
              ],
              "amount_min": 10000,
              "year_limit_up_days_min": 1,
              "exclude_st": true,
              "exclude_notice_high_risk": true,
              "exclude_technical_cancel": true,
              "exclude_formal_top3": true,
              "exclude_already_climax": "change_pct>8.8"
            },
            "score_formula": "overnight_limit_v1: attack strength + controlled pullback + volume/turnover + limit-up memory + tail support - overheating/fake-drive penalties",
            "buy_day_fields": {
              "change_pct": 5.52,
              "high_pct": 7.63,
              "pullback_from_high_pct": 2.11,
              "volume_ratio": 1.12,
              "turnover_rate": 6.42,
              "amount": 2059714.13,
              "attack_wave_pct": 8.1,
              "open_grab_pct": 2.5,
              "year_limit_up_days": 13.0,
              "tail_volume_support": true
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
            "next_day_success_threshold": 9.0
          },
          "overnight_limit_watch_result": {
            "next_day_change_pct": -3.12,
            "success": false,
            "big_move_success": false,
            "success_standard": "next_day_change_pct >= 9；big_move_success >= 5",
            "source": "next_trading_day_tdx_export_change_pct"
          },
          "theme_rotation_watch": {},
          "theme_rotation_watch_result": {},
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 229.49,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "PCB",
          "theme_display": "PCB",
          "industry": "电子-元器件",
          "latest_snapshot": {
            "change_pct": -3.12,
            "open_change_pct": -1.63,
            "turnover_rate": 0.7,
            "volume_ratio": 3.75,
            "amount": 225926.81,
            "last_price": 229.49,
            "theme": "PCB",
            "industry": "电子-元器件"
          },
          "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "none",
          "catalyst_status_label": "暂无明确催化",
          "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "execution_watch",
          "mainline_relation_label": "执行层观察票",
          "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "PCB",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "002384",
            "name": "东山精密",
            "groups": [
              "overnight_limit_watch"
            ],
            "group_labels": [
              "隔夜涨停观察"
            ],
            "original_text": "",
            "summary_short": "",
            "stance": "",
            "catalyst": "",
            "risk": "",
            "action_hint": "隔夜报告解析失败",
            "status": "parse_failed"
          }
        },
        {
          "rank": 15,
          "strategy_group": "overnight_limit_watch",
          "strategy_group_cn": "隔夜涨停观察",
          "symbol": "002429",
          "name": "兆驰股份",
          "source_period": "morning",
          "tracking_scope": "side_channel_only",
          "return_tracking_scope": "side_channel_only",
          "entry_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
          "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
          "tracking_status": "false_positive",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "overnight_limit_watch",
          "candidate_channel": "overnight_limit_watch",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "downgrade",
          "admission_reason": "",
          "candidate_notice_status": "fetch_failed",
          "candidate_notice_reason": "",
          "candidate_notice_source": "",
          "notice_supplement_status": "not_checked",
          "notice_supplement_required": false,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "downgrade",
            "candidate_notice_status": "fetch_failed",
            "eligible_for_top3": false,
            "eligible_for_handoff": false
          },
          "score": 50.457149,
          "source_score": 50.457149,
          "normalized_score": 50.457,
          "unified_score": 50.457,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {
            "model": "overnight_limit_watch_v1",
            "rank": 2,
            "selection_status": "picked",
            "bucket": "core_limit_rehearsal",
            "research_evidence": {
              "desktop_history_folder": "C:/Users/1/Desktop/新建文件夹 (7)",
              "file_count": 27,
              "paired_sample_count": 6342,
              "next_day_ge_9pct_count": 193,
              "baseline_next_day_ge_9pct_rate": 0.0304,
              "longxia_second_opinion_used_as": "side_channel_design_reference_only"
            },
            "hard_filters": {
              "change_pct_range": [
                -2,
                8.8
              ],
              "limit_rehearsal_min": "high_pct>=3 and attack/high evidence present",
              "pullback_from_high_max": 5.0,
              "volume_ratio_range": [
                0.6,
                3.5
              ],
              "turnover_rate_range": [
                1.5,
                18
              ],
              "amount_min": 10000,
              "year_limit_up_days_min": 1,
              "exclude_st": true,
              "exclude_notice_high_risk": true,
              "exclude_technical_cancel": true,
              "exclude_formal_top3": true,
              "exclude_already_climax": "change_pct>8.8"
            },
            "score_formula": "overnight_limit_v1: attack strength + controlled pullback + volume/turnover + limit-up memory + tail support - overheating/fake-drive penalties",
            "buy_day_fields": {
              "change_pct": 5.31,
              "high_pct": 7.4,
              "pullback_from_high_pct": 2.09,
              "volume_ratio": 1.6,
              "turnover_rate": 4.22,
              "amount": 210495.38,
              "attack_wave_pct": 7.35,
              "open_grab_pct": -0.93,
              "year_limit_up_days": 9.0,
              "tail_volume_support": true
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
            "next_day_success_threshold": 9.0
          },
          "overnight_limit_watch_result": {
            "next_day_change_pct": -0.63,
            "success": false,
            "big_move_success": false,
            "success_standard": "next_day_change_pct >= 9；big_move_success >= 5",
            "source": "next_trading_day_tdx_export_change_pct"
          },
          "theme_rotation_watch": {},
          "theme_rotation_watch_result": {},
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 11.02,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "电视",
          "theme_display": "电视",
          "industry": "家电-黑色家电",
          "latest_snapshot": {
            "change_pct": -0.63,
            "open_change_pct": 1.71,
            "turnover_rate": 0.54,
            "volume_ratio": 5.75,
            "amount": 27873.14,
            "last_price": 11.02,
            "theme": "电视",
            "industry": "家电-黑色家电"
          },
          "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "none",
          "catalyst_status_label": "暂无明确催化",
          "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "execution_watch",
          "mainline_relation_label": "执行层观察票",
          "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "电视",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "002429",
            "name": "兆驰股份",
            "groups": [
              "overnight_limit_watch"
            ],
            "group_labels": [
              "隔夜涨停观察"
            ],
            "original_text": "",
            "summary_short": "",
            "stance": "",
            "catalyst": "",
            "risk": "",
            "action_hint": "隔夜报告解析失败",
            "status": "parse_failed"
          }
        },
        {
          "rank": 16,
          "strategy_group": "overnight_limit_watch",
          "strategy_group_cn": "隔夜涨停观察",
          "symbol": "002031",
          "name": "巨轮智能",
          "source_period": "morning",
          "tracking_scope": "side_channel_only",
          "return_tracking_scope": "side_channel_only",
          "entry_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
          "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
          "tracking_status": "false_positive",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "overnight_limit_watch",
          "candidate_channel": "overnight_limit_watch",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "downgrade",
          "admission_reason": "",
          "candidate_notice_status": "fetch_failed",
          "candidate_notice_reason": "",
          "candidate_notice_source": "",
          "notice_supplement_status": "not_checked",
          "notice_supplement_required": false,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "downgrade",
            "candidate_notice_status": "fetch_failed",
            "eligible_for_top3": false,
            "eligible_for_handoff": false
          },
          "score": 49.097821,
          "source_score": 49.097821,
          "normalized_score": 49.098,
          "unified_score": 49.098,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {
            "model": "overnight_limit_watch_v1",
            "rank": 3,
            "selection_status": "picked",
            "bucket": "core_limit_rehearsal",
            "research_evidence": {
              "desktop_history_folder": "C:/Users/1/Desktop/新建文件夹 (7)",
              "file_count": 27,
              "paired_sample_count": 6342,
              "next_day_ge_9pct_count": 193,
              "baseline_next_day_ge_9pct_rate": 0.0304,
              "longxia_second_opinion_used_as": "side_channel_design_reference_only"
            },
            "hard_filters": {
              "change_pct_range": [
                -2,
                8.8
              ],
              "limit_rehearsal_min": "high_pct>=3 and attack/high evidence present",
              "pullback_from_high_max": 5.0,
              "volume_ratio_range": [
                0.6,
                3.5
              ],
              "turnover_rate_range": [
                1.5,
                18
              ],
              "amount_min": 10000,
              "year_limit_up_days_min": 1,
              "exclude_st": true,
              "exclude_notice_high_risk": true,
              "exclude_technical_cancel": true,
              "exclude_formal_top3": true,
              "exclude_already_climax": "change_pct>8.8"
            },
            "score_formula": "overnight_limit_v1: attack strength + controlled pullback + volume/turnover + limit-up memory + tail support - overheating/fake-drive penalties",
            "buy_day_fields": {
              "change_pct": 8.36,
              "high_pct": 9.96,
              "pullback_from_high_pct": 1.6,
              "volume_ratio": 1.38,
              "turnover_rate": 11.82,
              "amount": 136567.03,
              "attack_wave_pct": 8.36,
              "open_grab_pct": 3.82,
              "year_limit_up_days": 6.0,
              "tail_volume_support": true
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
            "next_day_success_threshold": 9.0
          },
          "overnight_limit_watch_result": {
            "next_day_change_pct": -7.78,
            "success": false,
            "big_move_success": false,
            "success_standard": "next_day_change_pct >= 9；big_move_success >= 5",
            "source": "next_trading_day_tdx_export_change_pct"
          },
          "theme_rotation_watch": {},
          "theme_rotation_watch_result": {},
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 5.57,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "其他专用设备",
          "theme_display": "其他专用设备",
          "industry": "机械设备-专用设备",
          "latest_snapshot": {
            "change_pct": -7.78,
            "open_change_pct": -4.8,
            "turnover_rate": 2.28,
            "volume_ratio": 7.63,
            "amount": 24740.68,
            "last_price": 5.57,
            "theme": "其他专用设备",
            "industry": "机械设备-专用设备"
          },
          "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "none",
          "catalyst_status_label": "暂无明确催化",
          "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "execution_watch",
          "mainline_relation_label": "执行层观察票",
          "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "其他专用设备",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "002031",
            "name": "巨轮智能",
            "groups": [
              "overnight_limit_watch"
            ],
            "group_labels": [
              "隔夜涨停观察"
            ],
            "original_text": "",
            "summary_short": "",
            "stance": "",
            "catalyst": "",
            "risk": "",
            "action_hint": "隔夜报告解析失败",
            "status": "parse_failed"
          }
        },
        {
          "rank": 17,
          "strategy_group": "theme_rotation_watch",
          "strategy_group_cn": "题材轮动观察",
          "symbol": "603203",
          "name": "快克智能",
          "source_period": "morning",
          "tracking_scope": "side_channel_only",
          "return_tracking_scope": "side_channel_only",
          "entry_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
          "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
          "tracking_status": "false_positive",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "theme_rotation_watch",
          "candidate_channel": "theme_rotation_watch",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "downgrade",
          "admission_reason": "",
          "candidate_notice_status": "fetch_failed",
          "candidate_notice_reason": "",
          "candidate_notice_source": "",
          "notice_supplement_status": "not_checked",
          "notice_supplement_required": false,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "downgrade",
            "candidate_notice_status": "fetch_failed",
            "eligible_for_top3": false,
            "eligible_for_handoff": false
          },
          "score": 22.016588,
          "source_score": 22.016588,
          "normalized_score": 22.017,
          "unified_score": 22.017,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {},
          "overnight_limit_watch_result": {},
          "theme_rotation_watch": {
            "model": "theme_rotation_watch_v1",
            "rank": 1,
            "selection_status": "picked",
            "theme": "其他专用设备",
            "theme_stats": {
              "theme": "其他专用设备",
              "count": 4,
              "active_count": 4,
              "strong_count": 2,
              "positive_count": 2,
              "avg_change_pct": 0.31,
              "avg_volume_ratio": 1.15,
              "total_amount": 352135.8
            },
            "hard_filters": {
              "theme_breadth_min": 2,
              "theme_active_count_min": 2,
              "change_pct_range": [
                -1,
                6
              ],
              "volume_ratio_range": [
                0.8,
                3.5
              ],
              "turnover_rate_range": [
                1.5,
                20
              ],
              "amount_min": 10000,
              "exclude_st": true,
              "exclude_notice_high_risk": true,
              "exclude_technical_cancel": true,
              "exclude_formal_top3": true,
              "tracking_scope": "side_channel_only"
            },
            "score_formula": "theme_rotation_v1: theme breadth + active/strong count + theme avg strength + individual volume/attack confirmation - overheat/risk penalties",
            "buy_day_fields": {
              "theme": "其他专用设备",
              "change_pct": 4.65,
              "volume_ratio": 1.1,
              "turnover_rate": 7.42,
              "amount": 152595.23,
              "attack_wave_pct": 7.39,
              "open_grab_pct": 0.0,
              "pullback_from_high_pct": 2.91
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
            "next_day_success_threshold": 3.0
          },
          "theme_rotation_watch_result": {
            "next_day_change_pct": -1.69,
            "success": false,
            "success_standard": "next_day_change_pct >= 3",
            "source": "next_trading_day_tdx_export_change_pct"
          },
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 63.0,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "其他专用设备",
          "theme_display": "其他专用设备",
          "industry": "机械设备-专用设备",
          "latest_snapshot": {
            "change_pct": -1.69,
            "open_change_pct": -0.73,
            "turnover_rate": 0.71,
            "volume_ratio": 3.4,
            "amount": 14613.88,
            "last_price": 63.0,
            "theme": "其他专用设备",
            "industry": "机械设备-专用设备"
          },
          "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "none",
          "catalyst_status_label": "暂无明确催化",
          "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "execution_watch",
          "mainline_relation_label": "执行层观察票",
          "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "其他专用设备",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "603203",
            "name": "快克智能",
            "groups": [
              "theme_rotation_watch"
            ],
            "group_labels": [
              "题材轮动观察"
            ],
            "original_text": "",
            "summary_short": "",
            "stance": "",
            "catalyst": "",
            "risk": "",
            "action_hint": "隔夜报告解析失败",
            "status": "parse_failed"
          }
        },
        {
          "rank": 18,
          "strategy_group": "theme_rotation_watch",
          "strategy_group_cn": "题材轮动观察",
          "symbol": "002079",
          "name": "苏州固锝",
          "source_period": "morning",
          "tracking_scope": "side_channel_only",
          "return_tracking_scope": "side_channel_only",
          "entry_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
          "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
          "tracking_status": "false_positive",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "theme_rotation_watch",
          "candidate_channel": "theme_rotation_watch",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "downgrade",
          "admission_reason": "",
          "candidate_notice_status": "fetch_failed",
          "candidate_notice_reason": "",
          "candidate_notice_source": "",
          "notice_supplement_status": "not_checked",
          "notice_supplement_required": false,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "downgrade",
            "candidate_notice_status": "fetch_failed",
            "eligible_for_top3": false,
            "eligible_for_handoff": false
          },
          "score": 20.593646,
          "source_score": 20.593646,
          "normalized_score": 20.594,
          "unified_score": 20.594,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {},
          "overnight_limit_watch_result": {},
          "theme_rotation_watch": {
            "model": "theme_rotation_watch_v1",
            "rank": 2,
            "selection_status": "picked",
            "theme": "光伏辅材",
            "theme_stats": {
              "theme": "光伏辅材",
              "count": 2,
              "active_count": 2,
              "strong_count": 2,
              "positive_count": 2,
              "avg_change_pct": 4.2,
              "avg_volume_ratio": 1.425,
              "total_amount": 172893.74
            },
            "hard_filters": {
              "theme_breadth_min": 2,
              "theme_active_count_min": 2,
              "change_pct_range": [
                -1,
                6
              ],
              "volume_ratio_range": [
                0.8,
                3.5
              ],
              "turnover_rate_range": [
                1.5,
                20
              ],
              "amount_min": 10000,
              "exclude_st": true,
              "exclude_notice_high_risk": true,
              "exclude_technical_cancel": true,
              "exclude_formal_top3": true,
              "tracking_scope": "side_channel_only"
            },
            "score_formula": "theme_rotation_v1: theme breadth + active/strong count + theme avg strength + individual volume/attack confirmation - overheat/risk penalties",
            "buy_day_fields": {
              "theme": "光伏辅材",
              "change_pct": 4.12,
              "volume_ratio": 1.11,
              "turnover_rate": 7.77,
              "amount": 89618.58,
              "attack_wave_pct": 6.34,
              "open_grab_pct": -0.28,
              "pullback_from_high_pct": 1.3
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
            "next_day_success_threshold": 3.0
          },
          "theme_rotation_watch_result": {
            "next_day_change_pct": -4.25,
            "success": false,
            "success_standard": "next_day_change_pct >= 3",
            "source": "next_trading_day_tdx_export_change_pct"
          },
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 13.75,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "光伏辅材",
          "theme_display": "光伏辅材",
          "industry": "电力设备-光伏设备",
          "latest_snapshot": {
            "change_pct": -4.25,
            "open_change_pct": -0.49,
            "turnover_rate": 0.93,
            "volume_ratio": 4.29,
            "amount": 10530.69,
            "last_price": 13.75,
            "theme": "光伏辅材",
            "industry": "电力设备-光伏设备"
          },
          "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "none",
          "catalyst_status_label": "暂无明确催化",
          "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "execution_watch",
          "mainline_relation_label": "执行层观察票",
          "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "光伏辅材",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "002079",
            "name": "苏州固锝",
            "groups": [
              "theme_rotation_watch"
            ],
            "group_labels": [
              "题材轮动观察"
            ],
            "original_text": "",
            "summary_short": "",
            "stance": "",
            "catalyst": "",
            "risk": "",
            "action_hint": "隔夜报告解析失败",
            "status": "parse_failed"
          }
        },
        {
          "rank": 19,
          "strategy_group": "theme_rotation_watch",
          "strategy_group_cn": "题材轮动观察",
          "symbol": "603444",
          "name": "吉比特",
          "source_period": "morning",
          "tracking_scope": "side_channel_only",
          "return_tracking_scope": "side_channel_only",
          "entry_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
          "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
          "tracking_status": "false_positive",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "theme_rotation_watch",
          "candidate_channel": "theme_rotation_watch",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "",
          "admission_reason": "",
          "candidate_notice_status": "not_checked",
          "candidate_notice_reason": "",
          "candidate_notice_source": "",
          "notice_supplement_status": "not_checked",
          "notice_supplement_required": false,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "",
            "candidate_notice_status": "not_checked",
            "eligible_for_top3": false,
            "eligible_for_handoff": false
          },
          "score": 19.572872,
          "source_score": 19.572872,
          "normalized_score": 19.573,
          "unified_score": 19.573,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {},
          "overnight_limit_watch_result": {},
          "theme_rotation_watch": {
            "model": "theme_rotation_watch_v1",
            "rank": 3,
            "selection_status": "picked",
            "theme": "游戏",
            "theme_stats": {
              "theme": "游戏",
              "count": 3,
              "active_count": 2,
              "strong_count": 2,
              "positive_count": 2,
              "avg_change_pct": 0.94,
              "avg_volume_ratio": 1.66,
              "total_amount": 249476.33
            },
            "hard_filters": {
              "theme_breadth_min": 2,
              "theme_active_count_min": 2,
              "change_pct_range": [
                -1,
                6
              ],
              "volume_ratio_range": [
                0.8,
                3.5
              ],
              "turnover_rate_range": [
                1.5,
                20
              ],
              "amount_min": 10000,
              "exclude_st": true,
              "exclude_notice_high_risk": true,
              "exclude_technical_cancel": true,
              "exclude_formal_top3": true,
              "tracking_scope": "side_channel_only"
            },
            "score_formula": "theme_rotation_v1: theme breadth + active/strong count + theme avg strength + individual volume/attack confirmation - overheat/risk penalties",
            "buy_day_fields": {
              "theme": "游戏",
              "change_pct": 3.55,
              "volume_ratio": 1.72,
              "turnover_rate": 5.17,
              "amount": 140988.78,
              "attack_wave_pct": 4.6,
              "open_grab_pct": 0.0,
              "pullback_from_high_pct": 4.33
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
            "next_day_success_threshold": 3.0
          },
          "theme_rotation_watch_result": {
            "next_day_change_pct": -1.77,
            "success": false,
            "success_standard": "next_day_change_pct >= 3",
            "source": "next_trading_day_tdx_export_change_pct"
          },
          "close_strength_hold_watch": {},
          "close_strength_hold_watch_result": {},
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 367.88,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "游戏",
          "theme_display": "游戏",
          "industry": "传媒-游戏",
          "latest_snapshot": {
            "change_pct": -1.77,
            "open_change_pct": -0.27,
            "turnover_rate": 0.55,
            "volume_ratio": 5.21,
            "amount": 14468.22,
            "last_price": 367.88,
            "theme": "游戏",
            "industry": "传媒-游戏"
          },
          "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "none",
          "catalyst_status_label": "暂无明确催化",
          "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "execution_watch",
          "mainline_relation_label": "执行层观察票",
          "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "游戏",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "603444",
            "name": "吉比特",
            "groups": [
              "theme_rotation_watch"
            ],
            "group_labels": [
              "题材轮动观察"
            ],
            "original_text": "",
            "summary_short": "",
            "stance": "",
            "catalyst": "",
            "risk": "",
            "action_hint": "隔夜报告解析失败",
            "status": "parse_failed"
          }
        },
        {
          "rank": 20,
          "strategy_group": "close_strength_hold_watch",
          "strategy_group_cn": "收盘中强承接观察",
          "symbol": "002997",
          "name": "瑞鹄模具",
          "source_period": "morning",
          "tracking_scope": "side_channel_only",
          "return_tracking_scope": "side_channel_only",
          "entry_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
          "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
          "tracking_status": "false_positive",
          "formal_return_eligible": false,
          "side_channel_return_eligible": true,
          "side_channel_return_scope": "panel_front_sample",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "close_strength_hold_watch",
          "candidate_channel": "close_strength_hold_watch",
          "current_observation_tier": "",
          "current_candidate_channel": "",
          "current_buy_allowed": false,
          "current_action": "",
          "current_status_cn": "行情已跟踪",
          "current_blocked_reason": "评分靠前但未进入正式 Top3/A/B 样本",
          "last_seen_source": "watchlist",
          "last_seen_in_period": true,
          "latest_snapshot_matched": true,
          "snapshot_missing_reason": "",
          "buy_allowed": false,
          "eligible_for_top3": null,
          "eligible_for_handoff": null,
          "technical_decision": "downgrade",
          "admission_reason": "",
          "candidate_notice_status": "fetch_failed",
          "candidate_notice_reason": "",
          "candidate_notice_source": "",
          "notice_supplement_status": "not_checked",
          "notice_supplement_required": false,
          "no_chase_reasons": [],
          "cancel_conditions": [],
          "data_quality_warnings": [],
          "raw_status": {
            "technical_decision": "downgrade",
            "candidate_notice_status": "fetch_failed",
            "eligible_for_top3": false,
            "eligible_for_handoff": false
          },
          "score": 12.929742,
          "source_score": 12.929742,
          "normalized_score": 12.93,
          "unified_score": 12.93,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {},
          "overnight_limit_watch_result": {},
          "theme_rotation_watch": {},
          "theme_rotation_watch_result": {},
          "close_strength_hold_watch": {
            "model": "close_strength_hold_watch_v1",
            "rank": 1,
            "selection_status": "picked",
            "research_evidence": {
              "source": "local_runs_close_only_light_replay",
              "date_range": "all_available_close_runs",
              "priced_sample_count": 125,
              "eligible_rows_after_excluding_existing_side_groups": 665,
              "next_day_avg_change_pct": 0.503,
              "next_day_ge_3pct_rate": 0.28,
              "existing_strategy_profit_used_as": "benchmark_context_only",
              "longxia_second_opinion_used_as": "side_channel_design_reference_only"
            },
            "hard_filters": {
              "change_pct_range": [
                2,
                6
              ],
              "high_pct_max": 6.5,
              "fade_from_high_max": 2.2,
              "volume_ratio_range": [
                0.8,
                2.8
              ],
              "turnover_rate_range": [
                1.5,
                16
              ],
              "amount_min": 10000,
              "change_20d_max": 55,
              "change_60d_max": 140,
              "year_limit_up_days_max": 8,
              "exclude_st": true,
              "exclude_notice_high_risk": true,
              "exclude_technical_cancel": true,
              "exclude_formal_top3": true,
              "exclude_existing_side_strategy": true,
              "tracking_scope": "side_channel_only"
            },
            "score_formula": "close_strength_hold_v1: moderate close strength + controlled fade + healthy volume/turnover + attack support - overheat/risk penalties",
            "buy_day_fields": {
              "change_pct": 2.07,
              "high_pct": 4.76,
              "fade_from_high_pct": -2.56,
              "volume_ratio": 1.07,
              "turnover_rate": 2.61,
              "amount": 16413.9,
              "attack_wave_pct": 2.04,
              "open_grab_pct": -0.93,
              "change_20d_pct": 7.57,
              "year_limit_up_days": 2.0
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察次日是否延续中强承接",
            "next_day_success_threshold": 3.0
          },
          "close_strength_hold_watch_result": {
            "next_day_change_pct": -0.63,
            "success": false,
            "success_standard": "next_day_change_pct >= 3",
            "source": "next_trading_day_tdx_export_change_pct"
          },
          "legacy_next_day_change_pct": null,
          "legacy_next_day_change_text": "",
          "legacy_next_day_date": "",
          "legacy_next_day_source": "",
          "legacy_next_day_last_price": null,
          "return_metrics": {
            "intraday_return": null,
            "intraday_price": 29.76,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "morning_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "其他汽车零部件",
          "theme_display": "其他汽车零部件",
          "industry": "汽车-汽车零部件",
          "latest_snapshot": {
            "change_pct": -0.63,
            "open_change_pct": 0.57,
            "turnover_rate": 0.19,
            "volume_ratio": 2.43,
            "amount": 1186.19,
            "last_price": 29.76,
            "theme": "其他汽车零部件",
            "industry": "汽车-汽车零部件"
          },
          "display_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-08T09:37:09+08:00",
          "historical_backfill": false,
          "catalyst_status": "none",
          "catalyst_status_label": "暂无明确催化",
          "catalyst_status_detail": "当前更像技术/资金确认路线，不依赖明确新闻催化。",
          "catalyst_timeliness": "unknown",
          "catalyst_timeliness_label": "时效不明",
          "catalyst_timeliness_detail": "没有拿到可追溯事件时间，只能标成时效不明。",
          "mainline_relation": "execution_watch",
          "mainline_relation_label": "执行层观察票",
          "mainline_relation_detail": "这票当前只保留执行层观察口径，不把它直接等同于市场主线。",
          "execution_position_label": "",
          "execution_position_detail": "",
          "mainline_theme_display": "其他汽车零部件",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        }
      ],
      "display_source": "four_layer_tracking",
      "raw_record_count": 20,
      "raw_strategy_counts": {
        "formal_top3": 1,
        "a_theme_watch": 3,
        "score_front_rejected": 3,
        "low_reflow_watch": 3,
        "open_drive_watch": 3,
        "overnight_limit_watch": 3,
        "theme_rotation_watch": 3,
        "close_strength_hold_watch": 1
      },
      "summary": {
        "groups": {
          "formal_top3": {
            "label": "正式 Top3 逻辑",
            "count": 1,
            "formal_return_eligible_count": 1,
            "side_channel_return_eligible_count": 0,
            "avg_intraday_return": null,
            "avg_t1_return": null,
            "status_counts": {
              "cancelled": 1,
              "price_missing": 0,
              "tracked": 0,
              "verified": 0
            }
          },
          "a_theme_watch": {
            "label": "A类主线/题材逻辑",
            "count": 3,
            "formal_return_eligible_count": 0,
            "side_channel_return_eligible_count": 3,
            "avg_intraday_return": null,
            "avg_t1_return": null,
            "status_counts": {
              "cancelled": 0,
              "price_missing": 0,
              "tracked": 3,
              "verified": 0
            }
          },
          "b_technical_watch": {
            "label": "B类技术/资金逻辑",
            "count": 0,
            "formal_return_eligible_count": 0,
            "side_channel_return_eligible_count": 0,
            "avg_intraday_return": null,
            "avg_t1_return": null,
            "status_counts": {
              "cancelled": 0,
              "price_missing": 0,
              "tracked": 0,
              "verified": 0
            }
          },
          "score_front_rejected": {
            "label": "候选评分前排逻辑",
            "count": 3,
            "formal_return_eligible_count": 0,
            "side_channel_return_eligible_count": 3,
            "avg_intraday_return": null,
            "avg_t1_return": null,
            "status_counts": {
              "cancelled": 0,
              "price_missing": 0,
              "tracked": 3,
              "verified": 0
            }
          },
          "low_reflow_watch": {
            "label": "低位回流观察",
            "count": 3,
            "formal_return_eligible_count": 0,
            "side_channel_return_eligible_count": 3,
            "avg_intraday_return": null,
            "avg_t1_return": null,
            "status_counts": {
              "cancelled": 0,
              "false_positive": 3,
              "price_missing": 0,
              "tracked": 0,
              "verified": 0
            }
          },
          "open_drive_watch": {
            "label": "早盘驱动观察",
            "count": 3,
            "formal_return_eligible_count": 0,
            "side_channel_return_eligible_count": 3,
            "avg_intraday_return": null,
            "avg_t1_return": null,
            "status_counts": {
              "cancelled": 0,
              "false_positive": 3,
              "price_missing": 0,
              "tracked": 0,
              "verified": 0
            }
          },
          "overnight_limit_watch": {
            "label": "隔夜涨停观察",
            "count": 3,
            "formal_return_eligible_count": 0,
            "side_channel_return_eligible_count": 3,
            "avg_intraday_return": null,
            "avg_t1_return": null,
            "status_counts": {
              "cancelled": 0,
              "false_positive": 3,
              "price_missing": 0,
              "tracked": 0,
              "verified": 0
            }
          },
          "theme_rotation_watch": {
            "label": "题材轮动观察",
            "count": 3,
            "formal_return_eligible_count": 0,
            "side_channel_return_eligible_count": 3,
            "avg_intraday_return": null,
            "avg_t1_return": null,
            "status_counts": {
              "cancelled": 0,
              "false_positive": 3,
              "price_missing": 0,
              "tracked": 0,
              "verified": 0
            }
          },
          "close_strength_hold_watch": {
            "label": "收盘中强承接观察",
            "count": 1,
            "formal_return_eligible_count": 0,
            "side_channel_return_eligible_count": 1,
            "avg_intraday_return": null,
            "avg_t1_return": null,
            "status_counts": {
              "cancelled": 0,
              "false_positive": 1,
              "price_missing": 0,
              "tracked": 0,
              "verified": 0
            }
          }
        },
        "comparison": {
          "best_avg_t1_group": "",
          "best_avg_t1_group_cn": "",
          "note": "正式收益和旁路收益分开；A/B/评分前排/低位回流观察/早盘驱动观察/隔夜涨停观察/题材轮动观察/收盘中强承接观察只能用于复盘建议，不能反向改当天 Top3。"
        }
      },
      "tracking_coverage": {
        "panel_layer_records_tracked": true,
        "candidate_pool_audit_limit": 30,
        "notice_supplement_source": "persisted_four_layer_json_not_web_dom",
        "notice_supplement_limit_per_group": 3,
        "notice_supplement_policy": "四层票池每层最多取前 3 只，低位回流观察最多 3 只，早盘驱动观察最多 3 只，隔夜涨停观察最多 3 只，题材轮动观察最多 3 只，收盘中强承接观察最多 3 只，去重后补查公告/风险证据；只补证据，不改 Top3、handoff 或交易计划。",
        "record_count": 20,
        "latest_snapshot_match_count": 20,
        "report_match_count": 1,
        "not_found_count": 0,
        "return_policy": "正式收益只统计 Top3；题材观察、技术观察、候选评分前排、低位回流观察、早盘驱动观察、隔夜涨停观察、题材轮动观察和收盘中强承接观察只跟踪面板展示样本，旁路收益也只按这些样本统计。",
        "notice_supplement_completed": true,
        "notice_supplement_required_count": 6,
        "notice_supplement_incomplete_count": 0
      },
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\four-layer-tracking.morning.json",
        "relative_path": "runs/2026-07-08/four-layer-tracking.morning.json",
        "exists": true,
        "size": 116901,
        "modified_at": "2026-07-08T09:37:09+08:00",
        "sha256": "45b804dcd5c76a94618a62a7ae699e4a1407a9bac29ca861a9a56c7afd283d98"
      }
    },
    "noon": {
      "status": "missing",
      "period": "noon",
      "records": [],
      "summary": {},
      "tracking_coverage": {}
    },
    "review": {
      "status": "missing",
      "period": "review",
      "records": [],
      "summary": {},
      "tracking_coverage": {}
    }
  },
  "overnight_report_brief": {
    "status": "parse_failed",
    "covered_count": 0,
    "failed_count": 10,
    "query_symbol_count": 10,
    "source_groups": [
      "formal_top3",
      "open_drive_watch",
      "overnight_limit_watch",
      "theme_rotation_watch"
    ],
    "source_run_date": "2026-07-07",
    "records": [
      {
        "symbol": "603132",
        "name": "金徽股份",
        "groups": [
          "formal_top3"
        ],
        "group_labels": [
          "正式 Top3"
        ],
        "original_text": "",
        "summary_short": "",
        "stance": "",
        "catalyst": "",
        "risk": "",
        "action_hint": "隔夜报告解析失败",
        "status": "parse_failed"
      },
      {
        "symbol": "001268",
        "name": "联合精密",
        "groups": [
          "open_drive_watch"
        ],
        "group_labels": [
          "早盘驱动观察"
        ],
        "original_text": "",
        "summary_short": "",
        "stance": "",
        "catalyst": "",
        "risk": "",
        "action_hint": "隔夜报告解析失败",
        "status": "parse_failed"
      },
      {
        "symbol": "002192",
        "name": "融捷股份",
        "groups": [
          "open_drive_watch"
        ],
        "group_labels": [
          "早盘驱动观察"
        ],
        "original_text": "",
        "summary_short": "",
        "stance": "",
        "catalyst": "",
        "risk": "",
        "action_hint": "隔夜报告解析失败",
        "status": "parse_failed"
      },
      {
        "symbol": "002636",
        "name": "金安国纪",
        "groups": [
          "open_drive_watch"
        ],
        "group_labels": [
          "早盘驱动观察"
        ],
        "original_text": "",
        "summary_short": "",
        "stance": "",
        "catalyst": "",
        "risk": "",
        "action_hint": "隔夜报告解析失败",
        "status": "parse_failed"
      },
      {
        "symbol": "002031",
        "name": "巨轮智能",
        "groups": [
          "overnight_limit_watch"
        ],
        "group_labels": [
          "隔夜涨停观察"
        ],
        "original_text": "",
        "summary_short": "",
        "stance": "",
        "catalyst": "",
        "risk": "",
        "action_hint": "隔夜报告解析失败",
        "status": "parse_failed"
      },
      {
        "symbol": "002384",
        "name": "东山精密",
        "groups": [
          "overnight_limit_watch"
        ],
        "group_labels": [
          "隔夜涨停观察"
        ],
        "original_text": "",
        "summary_short": "",
        "stance": "",
        "catalyst": "",
        "risk": "",
        "action_hint": "隔夜报告解析失败",
        "status": "parse_failed"
      },
      {
        "symbol": "002429",
        "name": "兆驰股份",
        "groups": [
          "overnight_limit_watch"
        ],
        "group_labels": [
          "隔夜涨停观察"
        ],
        "original_text": "",
        "summary_short": "",
        "stance": "",
        "catalyst": "",
        "risk": "",
        "action_hint": "隔夜报告解析失败",
        "status": "parse_failed"
      },
      {
        "symbol": "002079",
        "name": "苏州固锝",
        "groups": [
          "theme_rotation_watch"
        ],
        "group_labels": [
          "题材轮动观察"
        ],
        "original_text": "",
        "summary_short": "",
        "stance": "",
        "catalyst": "",
        "risk": "",
        "action_hint": "隔夜报告解析失败",
        "status": "parse_failed"
      },
      {
        "symbol": "603203",
        "name": "快克智能",
        "groups": [
          "theme_rotation_watch"
        ],
        "group_labels": [
          "题材轮动观察"
        ],
        "original_text": "",
        "summary_short": "",
        "stance": "",
        "catalyst": "",
        "risk": "",
        "action_hint": "隔夜报告解析失败",
        "status": "parse_failed"
      },
      {
        "symbol": "603444",
        "name": "吉比特",
        "groups": [
          "theme_rotation_watch"
        ],
        "group_labels": [
          "题材轮动观察"
        ],
        "original_text": "",
        "summary_short": "",
        "stance": "",
        "catalyst": "",
        "risk": "",
        "action_hint": "隔夜报告解析失败",
        "status": "parse_failed"
      }
    ],
    "final_ranking": {
      "items": [
        {
          "rank": 1,
          "symbol": "603132",
          "name": "金徽股份",
          "verdict": "",
          "text": "隔夜报告解析失败"
        },
        {
          "rank": 2,
          "symbol": "001268",
          "name": "联合精密",
          "verdict": "",
          "text": "隔夜报告解析失败"
        },
        {
          "rank": 3,
          "symbol": "002192",
          "name": "融捷股份",
          "verdict": "",
          "text": "隔夜报告解析失败"
        },
        {
          "rank": 4,
          "symbol": "002636",
          "name": "金安国纪",
          "verdict": "",
          "text": "隔夜报告解析失败"
        },
        {
          "rank": 5,
          "symbol": "002031",
          "name": "巨轮智能",
          "verdict": "",
          "text": "隔夜报告解析失败"
        },
        {
          "rank": 6,
          "symbol": "002384",
          "name": "东山精密",
          "verdict": "",
          "text": "隔夜报告解析失败"
        },
        {
          "rank": 7,
          "symbol": "002429",
          "name": "兆驰股份",
          "verdict": "",
          "text": "隔夜报告解析失败"
        },
        {
          "rank": 8,
          "symbol": "002079",
          "name": "苏州固锝",
          "verdict": "",
          "text": "隔夜报告解析失败"
        },
        {
          "rank": 9,
          "symbol": "603203",
          "name": "快克智能",
          "verdict": "",
          "text": "隔夜报告解析失败"
        },
        {
          "rank": 10,
          "symbol": "603444",
          "name": "吉比特",
          "verdict": "",
          "text": "隔夜报告解析失败"
        }
      ],
      "summary": ""
    },
    "file": {
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\overnight-report-brief.close.json",
      "relative_path": "runs/2026-07-07/overnight-report-brief.close.json",
      "exists": true,
      "size": 25147,
      "modified_at": "2026-07-07T15:02:49+08:00",
      "sha256": "1d9641a77f35ee32328b9976811462f375a76c9a81efad138fdd3a13662fda7f"
    }
  },
  "paper_trade": {
    "status": "missing",
    "ledger_status": "missing",
    "summary_status": "missing",
    "artifact_scope": "canonical",
    "date": "2026-07-08",
    "source_close_date": "",
    "ledger_matches_selected_close": true,
    "summary": {},
    "formal_targets": [],
    "records": [],
    "formal_records": [],
    "records_count": 0,
    "files": {
      "ledger": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\paper-trade-ledger.json",
        "relative_path": "paper-trade-ledger.json",
        "exists": false
      },
      "summary": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\paper-trade-summary.json",
        "relative_path": "paper-trade-summary.json",
        "exists": false
      }
    }
  },
  "rule_upgrade_proposals": {
    "status": "missing",
    "summary": {
      "proposal_count": 0,
      "pending_count": 0,
      "approval_required": false
    },
    "proposals": [],
    "files": {
      "proposals": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\rule-upgrade-proposals.json",
        "relative_path": "rule-upgrade-proposals.json",
        "exists": false
      },
      "approvals": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\rule-upgrade-approvals.json",
        "relative_path": "rule-upgrade-approvals.json",
        "exists": false
      },
      "learning_validation": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\learning-validation.json",
        "relative_path": "learning-validation.json",
        "exists": false
      },
      "implementation": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\rule-upgrade-implementation.json",
        "relative_path": "rule-upgrade-implementation.json",
        "exists": false
      }
    }
  },
  "trader_review": {
    "schema_version": "trader_review_workbench.v1",
    "status": "missing",
    "date": "2026-07-08",
    "title": "交易员复盘工作台",
    "one_liner": "正式票收益样本不足，复盘只做资料不足标记。 正式票收益偏弱但证据不足以证明选股逻辑失效，先按纪律内亏损和数据/执行缺口拆分。",
    "market_tone_label": "偏弱复盘",
    "emotion_score": 48,
    "formal_sample_count": 0,
    "side_channel_sample_count": 0,
    "formal_return_text": "正式票收益样本不足，复盘只做资料不足标记。",
    "side_return_text": "旁路样本收益未完整定价，只能继续观察。",
    "return_source_close_date": "2026-07-08",
    "return_backfill_date": "2026-07-08",
    "return_context_text": "2026-07-08 当前样本",
    "cross_date_review_return": false,
    "core_cause": "正式票收益偏弱但证据不足以证明选股逻辑失效，先按纪律内亏损和数据/执行缺口拆分。",
    "consensus": {
      "official_view": "正式复盘负责回放当时结论、收益和错因归类。",
      "second_view": "龙虾第二复盘暂无有效正文，按本地复盘产物继续审计。",
      "final_resolution": "合议层只给复盘结论和待审动作，不生成第二套买入名单。",
      "validation_summary": "第二复盘意见只进入多日观察，不单日自动调规则。"
    },
    "decision_path": [],
    "loss_matrix": [
      {
        "label": "正式收益",
        "value": "--",
        "status": "ok",
        "detail": "正式票收益样本不足，复盘只做资料不足标记。"
      },
      {
        "label": "上午承接",
        "value": "0",
        "status": "ok",
        "detail": "上午走弱样本要先看执行纪律，不能直接等同选股失败。"
      },
      {
        "label": "旁路对比",
        "value": "--",
        "status": "watch",
        "detail": "旁路样本收益未完整定价，只能继续观察。"
      }
    ],
    "miss_attribution_matrix": [
      {
        "label": "无完全漏选强票",
        "count": 0,
        "detail": "当前未发现完全漏选强票，继续按多日样本观察。"
      }
    ],
    "missed_count": 0,
    "underestimated_count": 0,
    "side_channel_cards": [],
    "timeline": [
      {
        "time": "14:50",
        "label": "正式锁票",
        "detail": "只回放已锁定正式 Top3，不用晚间新数据覆盖当时解释层。"
      },
      {
        "time": "15:01",
        "label": "事实回填",
        "detail": "只补收益、快照和漏选事实，不重选股票。"
      },
      {
        "time": "20:00",
        "label": "复盘合议",
        "detail": "正式复盘和龙虾第二意见收敛成一个合议结论。"
      },
      {
        "time": "待确认",
        "label": "规则待审",
        "detail": "0 条提案等待用户确认，确认前不改规则。"
      }
    ],
    "rule_queue_summary": {
      "pending_count": 0,
      "approval_required": false,
      "highest_priority_cn": "",
      "items": []
    },
    "source_status": {
      "paper_trade_summary": "missing",
      "paper_trade_summary_scope": "canonical",
      "reverse_miss": "missing",
      "ultra_short_review": "missing",
      "longxia_second_review": "missing",
      "longxia_second_review_validation": "missing",
      "rule_upgrade_proposals": "missing",
      "four_layer_tracking": "missing",
      "review_markdown": "missing"
    },
    "source_files": {
      "paper_trade_summary": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\paper-trade-summary.json",
        "relative_path": "paper-trade-summary.json",
        "exists": false
      },
      "reverse_miss": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\reverse-miss.json",
        "relative_path": "reverse-miss.json",
        "exists": false
      },
      "ultra_short_review": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\ultra-short-review.json",
        "relative_path": "ultra-short-review.json",
        "exists": false
      },
      "longxia_second_review": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\second-review.longxia.review.json",
        "relative_path": "second-review.longxia.review.json",
        "exists": false
      },
      "longxia_second_review_validation": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\longxia-second-review-validation.json",
        "relative_path": "longxia-second-review-validation.json",
        "exists": false
      },
      "rule_upgrade_proposals": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\rule-upgrade-proposals.json",
        "relative_path": "rule-upgrade-proposals.json",
        "exists": false
      },
      "review_markdown": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\review-report.md",
        "relative_path": "review-report.md",
        "exists": false
      }
    },
    "boundaries": {
      "readonly": true,
      "display_audit_only": true,
      "affects_formal_top3": false,
      "affects_candidate_ranking": false,
      "affects_three_gates": false,
      "affects_handoff": false,
      "affects_execution": false,
      "affects_trade_plan": false,
      "affects_formal_return": false,
      "does_not_create_buy_recommendation": true,
      "uses_locked_formal_context_only": true
    }
  },
  "workflow_chain": {
    "close": {
      "label": "收盘报",
      "nodes": [
        {
          "id": "close_schedule_status",
          "order": 1,
          "title_cn": "收盘报自动化状态",
          "plain_goal_cn": "区分自动化错过、流程失败和数据源失败，避免把没运行误判成行情没取到。",
          "data_used_cn": [
            "workflow-manifest",
            "正式报告 JSON",
            "正式报告 Markdown",
            "当前时间"
          ],
          "source_method_cn": "由 Web 导出层读取运行记录和正式报告文件状态；只做展示和审计，不补跑、不选股。",
          "read_files": [
            "workflow-manifest.close.json",
            "close-report.json",
            "close-report.md"
          ],
          "write_files": [],
          "status": "incomplete",
          "result_cn": "未到计划时间",
          "missing_or_risk_cn": [
            "计划时间：2026-07-08T14:50+08:00",
            "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          ]
        }
      ]
    },
    "morning": {
      "label": "早报",
      "nodes": [
        {
          "id": "morning_prefetch",
          "order": 1,
          "title_cn": "盘前预取",
          "plain_goal_cn": "提前整理隔夜外围、新闻公告、国内事件和昨日 Top3 风险，加快正式早报。",
          "data_used_cn": [
            "隔夜外围",
            "授权新闻",
            "授权公告",
            "国内政策/行业事件",
            "昨日 Top3 风险"
          ],
          "source_method_cn": "通过 build_morning_precheck_prefetch.py 生成 09:00 预取产物；只补背景，不选股。",
          "read_files": [
            "close-report.json",
            "authorized-news.json",
            "authorized-notices.json",
            "outer-gate.morning.json"
          ],
          "write_files": [
            "morning-precheck.prefetch.json"
          ],
          "status": "ok",
          "result_cn": "盘前预取产物已生成：昨日尾盘模拟对象 1 只，授权新闻 27 条，授权公告 5 条。",
          "missing_or_risk_cn": [
            "无关键缺失"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "close-report.json",
              "status": "missing",
              "exists": false
            },
            {
              "role": "read",
              "file": "authorized-news.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\authorized-news.json",
              "modified_at": "2026-07-08T09:00:08+08:00",
              "size": 56957,
              "sha256": "c5fa8437de614d21184c2867c6b08effbad7df759bbb892f6549e6bad3040e56"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\authorized-notices.json",
              "modified_at": "2026-07-08T09:00:14+08:00",
              "size": 21271,
              "sha256": "4c4de17fb92689244dcb8340436e3b29ba5e22363a0b44481919351abdf741b5"
            },
            {
              "role": "read",
              "file": "outer-gate.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\outer-gate.morning.json",
              "modified_at": "2026-07-08T09:36:14+08:00",
              "size": 21994,
              "sha256": "b77f67c4636a6eda9e792c648e2262ae165ea46327ac8404391cdb6f96cfe85a"
            },
            {
              "role": "write",
              "file": "morning-precheck.prefetch.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-precheck.prefetch.json",
              "modified_at": "2026-07-08T09:36:33+08:00",
              "size": 3462,
              "sha256": "67fa2b5a3d454f5c23297f823215a9eb3fa9600ca7380020aaaee4ba0b53ae92"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "盘前预取产物已生成：昨日尾盘模拟对象 1 只，授权新闻 27 条，授权公告 5 条。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "morning-precheck.prefetch.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-precheck.prefetch.json",
                  "modified_at": "2026-07-08T09:36:33+08:00",
                  "size": 3462,
                  "sha256": "67fa2b5a3d454f5c23297f823215a9eb3fa9600ca7380020aaaee4ba0b53ae92"
                }
              ]
            }
          ]
        },
        {
          "id": "morning_risk_precheck",
          "order": 2,
          "title_cn": "风险快检",
          "plain_goal_cn": "竞价结束后复核昨日尾盘模拟持仓风险，只给继续、减仓、退出或观察提示。",
          "data_used_cn": [
            "盘前预取结果",
            "竞价/开盘字段",
            "昨日尾盘模拟持仓",
            "技术检查"
          ],
          "source_method_cn": "通过 build_morning_risk_precheck.py 生成 09:25 风险快检；不替代正式早报。",
          "read_files": [
            "morning-precheck.prefetch.json",
            "technical-check.morning.json",
            "market-data.morning.json"
          ],
          "write_files": [
            "morning-risk-precheck.json"
          ],
          "status": "incomplete",
          "result_cn": "风险快检产物已生成：继续持有 1 只，观察 0 只，减仓 0 只，退出 0 只。",
          "missing_or_risk_cn": [
            "补充行情快照缺失：market-data.json 未生成，系统已避免偷读其他时段文件"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "morning-precheck.prefetch.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-precheck.prefetch.json",
              "modified_at": "2026-07-08T09:36:33+08:00",
              "size": 3462,
              "sha256": "67fa2b5a3d454f5c23297f823215a9eb3fa9600ca7380020aaaee4ba0b53ae92"
            },
            {
              "role": "read",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\technical-check.morning.json",
              "modified_at": "2026-07-08T09:36:32+08:00",
              "size": 13369,
              "sha256": "8214ca7e4a56e060a68219d7a7fafb82282bfbaee11cda64499c5a2a0939ae8f"
            },
            {
              "role": "read",
              "file": "market-data.morning.json",
              "status": "period_snapshot_missing",
              "exists": false,
              "requested_file": "market-data.json",
              "freshness_note": "本节点要求本时段专属快照；缺失时不引用可能被后续时段覆盖的通用文件。"
            },
            {
              "role": "write",
              "file": "morning-risk-precheck.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-risk-precheck.json",
              "modified_at": "2026-07-08T09:36:33+08:00",
              "size": 4598,
              "sha256": "ccbdac84851d831b07999c471c1eea10e8b3cb313bab8fd73f80a680c033dd71"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "风险快检产物已生成：继续持有 1 只，观察 0 只，减仓 0 只，退出 0 只。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "morning-risk-precheck.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-risk-precheck.json",
                  "modified_at": "2026-07-08T09:36:33+08:00",
                  "size": 4598,
                  "sha256": "ccbdac84851d831b07999c471c1eea10e8b3cb313bab8fd73f80a680c033dd71"
                }
              ]
            }
          ]
        },
        {
          "id": "read_close",
          "order": 3,
          "title_cn": "读取上一收盘报",
          "plain_goal_cn": "读取上一收盘报交接对象。早报只验证这些对象，不重新选股。",
          "data_used_cn": [
            "上一收盘报 Markdown/JSON",
            "handoff.validation_targets"
          ],
          "source_method_cn": "通过 morning-report 流程读取真实前置收盘报：runs/2026-07-07/close-report.json。",
          "read_files": [
            "runs/2026-07-07/close-report.json",
            "workflow-manifest.morning.json"
          ],
          "write_files": [
            "inherited-pool.json"
          ],
          "status": "ok",
          "result_cn": "已按上一收盘报交接对象进入早报验证；如果没有对象，早报只能空仓/观察。",
          "missing_or_risk_cn": [
            "无关键缺失"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "runs/2026-07-07/close-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\close-report.json",
              "modified_at": "2026-07-07T14:55:10+08:00",
              "size": 13140414,
              "sha256": "65512782ae4a139b90bfca9137cc4cd45598f19b8970f50254cb2cdfc82566d8"
            },
            {
              "role": "read",
              "file": "workflow-manifest.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\workflow-manifest.morning.json",
              "modified_at": "2026-07-08T09:37:11+08:00",
              "size": 93683,
              "sha256": "eaa6a2a7aac3f85b72b45a8e08800dfc545f219a215f5566c9fafda35062c0e0"
            },
            {
              "role": "write",
              "file": "inherited-pool.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\inherited-pool.json",
              "modified_at": "2026-07-08T09:35:52+08:00",
              "size": 22638,
              "sha256": "20d6b939683d8666068717a9abca02cfdfae5fe5494963176b392db254fc9319"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "已按上一收盘报交接对象进入早报验证；如果没有对象，早报只能空仓/观察。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "inherited-pool.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\inherited-pool.json",
                  "modified_at": "2026-07-08T09:35:52+08:00",
                  "size": 22638,
                  "sha256": "20d6b939683d8666068717a9abca02cfdfae5fe5494963176b392db254fc9319"
                }
              ]
            }
          ]
        },
        {
          "id": "outer_refresh",
          "order": 4,
          "title_cn": "外围刷新",
          "plain_goal_cn": "重新确认隔夜外围环境是否支持今天早盘观察。",
          "data_used_cn": [
            "A50",
            "美股",
            "VIX",
            "汇率",
            "金银油",
            "搜索归因"
          ],
          "source_method_cn": "通过 A50、美股、VIX、汇率、金银油等外围行情组件和 build_outer_gate.py 刷新。",
          "read_files": [
            "outer-skill-output.morning.txt"
          ],
          "write_files": [
            "outer-gate.morning.json"
          ],
          "status": "ok",
          "result_cn": "只看外围是否改善或恶化，不直接生成股票。",
          "missing_or_risk_cn": [
            "无关键缺失"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "outer-skill-output.morning.txt",
              "status": "ok",
              "exists": true,
              "requested_file": "outer-skill-output.txt",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\outer-skill-output.morning.txt",
              "modified_at": "2026-07-08T09:36:14+08:00",
              "size": 2187,
              "sha256": "f23ae43d0b5947cde630945aa72c92cddf89b2798f3d737c92c5317ad9a6aafb"
            },
            {
              "role": "write",
              "file": "outer-gate.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "outer-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\outer-gate.morning.json",
              "modified_at": "2026-07-08T09:36:14+08:00",
              "size": 21994,
              "sha256": "b77f67c4636a6eda9e792c648e2262ae165ea46327ac8404391cdb6f96cfe85a"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "只看外围是否改善或恶化，不直接生成股票。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "outer-gate.morning.json",
                  "status": "ok",
                  "exists": true,
                  "requested_file": "outer-gate.json",
                  "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\outer-gate.morning.json",
                  "modified_at": "2026-07-08T09:36:14+08:00",
                  "size": 21994,
                  "sha256": "b77f67c4636a6eda9e792c648e2262ae165ea46327ac8404391cdb6f96cfe85a"
                }
              ]
            }
          ]
        },
        {
          "id": "domestic_refresh",
          "order": 5,
          "title_cn": "国内闸门刷新",
          "plain_goal_cn": "重新确认政策、产业、监管和公告有没有新增风险或催化。",
          "data_used_cn": [
            "政策",
            "产业新闻",
            "监管",
            "公告",
            "事件日历"
          ],
          "source_method_cn": "通过龙虾/TdxClaw 授权工具和 build_domestic_gate.py 刷新。",
          "read_files": [
            "domestic-gate.morning.json"
          ],
          "write_files": [
            "domestic-gate.morning.json"
          ],
          "status": "ok",
          "result_cn": "国内证据不完整时会写证据不足，不能解释成没有风险。",
          "missing_or_risk_cn": [
            "无关键缺失"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "domestic-gate.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "domestic-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\domestic-gate.morning.json",
              "modified_at": "2026-07-08T09:36:29+08:00",
              "size": 181012,
              "sha256": "e39b52bca1d287d5197ac4ad87b004ab75d8d26b9b1b43c6160026d6fdd948c8"
            },
            {
              "role": "write",
              "file": "domestic-gate.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "domestic-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\domestic-gate.morning.json",
              "modified_at": "2026-07-08T09:36:29+08:00",
              "size": 181012,
              "sha256": "e39b52bca1d287d5197ac4ad87b004ab75d8d26b9b1b43c6160026d6fdd948c8"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "国内证据不完整时会写证据不足，不能解释成没有风险。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "domestic-gate.morning.json",
                  "status": "ok",
                  "exists": true,
                  "requested_file": "domestic-gate.json",
                  "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\domestic-gate.morning.json",
                  "modified_at": "2026-07-08T09:36:29+08:00",
                  "size": 181012,
                  "sha256": "e39b52bca1d287d5197ac4ad87b004ab75d8d26b9b1b43c6160026d6fdd948c8"
                }
              ]
            }
          ]
        },
        {
          "id": "emotion_gate",
          "order": 6,
          "title_cn": "情绪/趋势闸门",
          "plain_goal_cn": "确认盘前/早盘市场情绪顺逆，作为仓位和节奏参考。",
          "data_used_cn": [
            "指数",
            "15 分钟趋势",
            "成交额",
            "涨跌停",
            "连板",
            "高位反馈"
          ],
          "source_method_cn": "通过 通达信行情、通达信K线、通达信条件筛选 获取。",
          "read_files": [
            "emotion-trend-gate.morning.json"
          ],
          "write_files": [
            "emotion-trend-gate.morning.json"
          ],
          "status": "ok",
          "result_cn": "情绪趋势偏弱或关键字段缺失时，只降低环境置信度和仓位语气；候选能否晋级仍看公告、技术、评分和数据质量。",
          "missing_or_risk_cn": [
            "无关键缺失"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "emotion-trend-gate.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "emotion-trend-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\emotion-trend-gate.morning.json",
              "modified_at": "2026-07-08T09:36:31+08:00",
              "size": 17362,
              "sha256": "cd2bb0231d9f06fdd2fa3d17bf95d45c1ae1f42b5ef97a66674e9495c12b1518"
            },
            {
              "role": "write",
              "file": "emotion-trend-gate.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "emotion-trend-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\emotion-trend-gate.morning.json",
              "modified_at": "2026-07-08T09:36:31+08:00",
              "size": 17362,
              "sha256": "cd2bb0231d9f06fdd2fa3d17bf95d45c1ae1f42b5ef97a66674e9495c12b1518"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "情绪趋势偏弱或关键字段缺失时，只降低环境置信度和仓位语气；候选能否晋级仍看公告、技术、评分和数据质量。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "emotion-trend-gate.morning.json",
                  "status": "ok",
                  "exists": true,
                  "requested_file": "emotion-trend-gate.json",
                  "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\emotion-trend-gate.morning.json",
                  "modified_at": "2026-07-08T09:36:31+08:00",
                  "size": 17362,
                  "sha256": "cd2bb0231d9f06fdd2fa3d17bf95d45c1ae1f42b5ef97a66674e9495c12b1518"
                }
              ]
            }
          ]
        },
        {
          "id": "previous_verify",
          "order": 7,
          "title_cn": "验证上一收盘对象",
          "plain_goal_cn": "逐只验证上一收盘报留下的对象是否还能继续看。",
          "data_used_cn": [
            "上一收盘验证对象",
            "隔夜变化",
            "开盘前风险"
          ],
          "source_method_cn": "通过 previous_report_verify.py 验证继承对象。",
          "read_files": [
            "close-report.json"
          ],
          "write_files": [
            "morning-report.json"
          ],
          "status": "ok",
          "result_cn": "只验证上一收盘对象，不能从全池临时补票。",
          "missing_or_risk_cn": [
            "未落盘文件：close-report.json"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "close-report.json",
              "status": "missing",
              "exists": false
            },
            {
              "role": "write",
              "file": "morning-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-report.json",
              "modified_at": "2026-07-08T09:37:10+08:00",
              "size": 526831,
              "sha256": "34d309af65eee57e4bac64ce24cebb0424b3c612558bbf2055b53323e29af25c"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "只验证上一收盘对象，不能从全池临时补票。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "morning-report.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-report.json",
                  "modified_at": "2026-07-08T09:37:10+08:00",
                  "size": 526831,
                  "sha256": "34d309af65eee57e4bac64ce24cebb0424b3c612558bbf2055b53323e29af25c"
                }
              ]
            }
          ]
        },
        {
          "id": "sector_confirm",
          "order": 8,
          "title_cn": "板块裂变确认",
          "plain_goal_cn": "确认候选所在板块是否仍是当天主线，而不是孤立个股异动。",
          "data_used_cn": [
            "板块强弱",
            "主线映射",
            "自选股角色"
          ],
          "source_method_cn": "通过 build_sector_split.py 做早盘确认。",
          "read_files": [
            "candidate-score.morning.json"
          ],
          "write_files": [
            "sector-split.morning.json"
          ],
          "status": "ok",
          "result_cn": "板块强只是确认条件，不代表个股自动可以买。",
          "missing_or_risk_cn": [
            "无关键缺失"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "candidate-score.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "candidate-score.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\candidate-score.morning.json",
              "modified_at": "2026-07-08T09:36:32+08:00",
              "size": 69332,
              "sha256": "50a960ea3b751c2b32b90efb8de1ac3ade195ddb07ff8d00d3a384c825848d92"
            },
            {
              "role": "write",
              "file": "sector-split.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "sector-split.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\sector-split.morning.json",
              "modified_at": "2026-07-08T09:36:33+08:00",
              "size": 131778,
              "sha256": "b5db2f668eaf547ae5700eaf610382037111e956d14eaa3847a2b2fcbd8f2e3f"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "板块强只是确认条件，不代表个股自动可以买。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "sector-split.morning.json",
                  "status": "ok",
                  "exists": true,
                  "requested_file": "sector-split.json",
                  "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\sector-split.morning.json",
                  "modified_at": "2026-07-08T09:36:33+08:00",
                  "size": 131778,
                  "sha256": "b5db2f668eaf547ae5700eaf610382037111e956d14eaa3847a2b2fcbd8f2e3f"
                }
              ]
            }
          ]
        },
        {
          "id": "technical_confirm",
          "order": 9,
          "title_cn": "技术面确认",
          "plain_goal_cn": "用开盘和盘面数据确认候选是否具备承接。",
          "data_used_cn": [
            "竞价/开盘强弱",
            "量能",
            "承接",
            "均线",
            "主营匹配"
          ],
          "source_method_cn": "通过 technical_check.py --tdxclaw-data 确认。",
          "read_files": [
            "candidate-score.morning.json"
          ],
          "write_files": [
            "technical-check.morning.json"
          ],
          "status": "ok",
          "result_cn": "技术面缺字段或不达标时只能观察、降级或取消。",
          "missing_or_risk_cn": [
            "无关键缺失"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "candidate-score.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "candidate-score.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\candidate-score.morning.json",
              "modified_at": "2026-07-08T09:36:32+08:00",
              "size": 69332,
              "sha256": "50a960ea3b751c2b32b90efb8de1ac3ade195ddb07ff8d00d3a384c825848d92"
            },
            {
              "role": "write",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\technical-check.morning.json",
              "modified_at": "2026-07-08T09:36:32+08:00",
              "size": 13369,
              "sha256": "8214ca7e4a56e060a68219d7a7fafb82282bfbaee11cda64499c5a2a0939ae8f"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "技术面缺字段或不达标时只能观察、降级或取消。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "technical-check.morning.json",
                  "status": "ok",
                  "exists": true,
                  "requested_file": "technical-check.json",
                  "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\technical-check.morning.json",
                  "modified_at": "2026-07-08T09:36:32+08:00",
                  "size": 13369,
                  "sha256": "8214ca7e4a56e060a68219d7a7fafb82282bfbaee11cda64499c5a2a0939ae8f"
                }
              ]
            }
          ]
        },
        {
          "id": "research_brief",
          "order": 10,
          "title_cn": "关键事件整理",
          "plain_goal_cn": "把已落盘新闻、公告和板块信息整理成早报能引用的事件背景，不新增股票。",
          "data_used_cn": [
            "授权新闻",
            "授权公告",
            "板块方向",
            "候选池",
            "技术检查"
          ],
          "source_method_cn": "通过 build_research_brief.py 只读已落盘文件整理；不取数、不选股、不改名单。",
          "read_files": [
            "authorized-news.json",
            "authorized-notices.json",
            "domestic-gate.morning.json",
            "sector-split.morning.json",
            "candidate-score.morning.json",
            "technical-check.morning.json"
          ],
          "write_files": [
            "research-brief.json",
            "research-brief.md"
          ],
          "status": "ok",
          "result_cn": "只读已落盘材料整理事件，不取数、不选股、不改交接对象。",
          "missing_or_risk_cn": [
            "无关键缺失"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "authorized-news.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\authorized-news.json",
              "modified_at": "2026-07-08T09:00:08+08:00",
              "size": 56957,
              "sha256": "c5fa8437de614d21184c2867c6b08effbad7df759bbb892f6549e6bad3040e56"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\authorized-notices.json",
              "modified_at": "2026-07-08T09:00:14+08:00",
              "size": 21271,
              "sha256": "4c4de17fb92689244dcb8340436e3b29ba5e22363a0b44481919351abdf741b5"
            },
            {
              "role": "read",
              "file": "domestic-gate.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "domestic-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\domestic-gate.morning.json",
              "modified_at": "2026-07-08T09:36:29+08:00",
              "size": 181012,
              "sha256": "e39b52bca1d287d5197ac4ad87b004ab75d8d26b9b1b43c6160026d6fdd948c8"
            },
            {
              "role": "read",
              "file": "sector-split.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "sector-split.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\sector-split.morning.json",
              "modified_at": "2026-07-08T09:36:33+08:00",
              "size": 131778,
              "sha256": "b5db2f668eaf547ae5700eaf610382037111e956d14eaa3847a2b2fcbd8f2e3f"
            },
            {
              "role": "read",
              "file": "candidate-score.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "candidate-score.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\candidate-score.morning.json",
              "modified_at": "2026-07-08T09:36:32+08:00",
              "size": 69332,
              "sha256": "50a960ea3b751c2b32b90efb8de1ac3ade195ddb07ff8d00d3a384c825848d92"
            },
            {
              "role": "read",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\technical-check.morning.json",
              "modified_at": "2026-07-08T09:36:32+08:00",
              "size": 13369,
              "sha256": "8214ca7e4a56e060a68219d7a7fafb82282bfbaee11cda64499c5a2a0939ae8f"
            },
            {
              "role": "write",
              "file": "research-brief.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\research-brief.json",
              "modified_at": "2026-07-08T09:36:33+08:00",
              "size": 2818,
              "sha256": "ad731d535b12f8eeccd6366e14b999349137da4355c4e9a68c6ee75688f38cff"
            },
            {
              "role": "write",
              "file": "research-brief.md",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\research-brief.md",
              "modified_at": "2026-07-08T09:36:33+08:00",
              "size": 759,
              "sha256": "f77970b9e219d4af4a1863564815f1c26dcc8d12f9839d4b9ef803f0a3f0db33"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "只读已落盘材料整理事件，不取数、不选股、不改交接对象。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "research-brief.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\research-brief.json",
                  "modified_at": "2026-07-08T09:36:33+08:00",
                  "size": 2818,
                  "sha256": "ad731d535b12f8eeccd6366e14b999349137da4355c4e9a68c6ee75688f38cff"
                },
                {
                  "role": "write",
                  "file": "research-brief.md",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\research-brief.md",
                  "modified_at": "2026-07-08T09:36:33+08:00",
                  "size": 759,
                  "sha256": "f77970b9e219d4af4a1863564815f1c26dcc8d12f9839d4b9ef803f0a3f0db33"
                }
              ]
            }
          ]
        },
        {
          "id": "news_notice_sentiment",
          "order": 11,
          "title_cn": "新闻/公告情绪摘要",
          "plain_goal_cn": "只读已落盘新闻和公告，归纳正面、风险和中性倾向；不新增股票、不改交接对象。",
          "data_used_cn": [
            "授权新闻",
            "授权公告",
            "候选公告排雷",
            "关键事件整理"
          ],
          "source_method_cn": "通过 build_news_notice_sentiment.py 只读已落盘新闻和公告，归纳正面/风险/中性；不取数、不选股、不改交接对象。",
          "read_files": [
            "authorized-news.json",
            "authorized-notices.json",
            "candidate-notice-scan.morning.json",
            "research-brief.json",
            "domestic-intelligence.morning.json"
          ],
          "write_files": [
            "news-notice-sentiment.morning.json"
          ],
          "status": "ok",
          "result_cn": "新闻/公告摘要完成：正面 7 条，风险 16 条，谨慎/中性 15 条。",
          "missing_or_risk_cn": [
            "新闻/公告摘要：正面 7 条，风险 16 条，谨慎/中性 15 条。",
            "有负面/风险关键词，正式报告只作风险提示，是否卡票仍看公告排雷硬规则。",
            "有负面/风险关键词，正式报告只作风险提示，是否卡票仍看公告排雷硬规则。"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "authorized-news.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\authorized-news.json",
              "modified_at": "2026-07-08T09:00:08+08:00",
              "size": 56957,
              "sha256": "c5fa8437de614d21184c2867c6b08effbad7df759bbb892f6549e6bad3040e56"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\authorized-notices.json",
              "modified_at": "2026-07-08T09:00:14+08:00",
              "size": 21271,
              "sha256": "4c4de17fb92689244dcb8340436e3b29ba5e22363a0b44481919351abdf741b5"
            },
            {
              "role": "read",
              "file": "candidate-notice-scan.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\candidate-notice-scan.morning.json",
              "modified_at": "2026-07-08T09:37:09+08:00",
              "size": 15637,
              "sha256": "e52215103dbdec2e33ca7e9ae471b52856572c4c666c43cf79ebb93014713c80"
            },
            {
              "role": "read",
              "file": "research-brief.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\research-brief.json",
              "modified_at": "2026-07-08T09:36:33+08:00",
              "size": 2818,
              "sha256": "ad731d535b12f8eeccd6366e14b999349137da4355c4e9a68c6ee75688f38cff"
            },
            {
              "role": "read",
              "file": "domestic-intelligence.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\domestic-intelligence.morning.json",
              "modified_at": "2026-07-08T09:36:33+08:00",
              "size": 5611,
              "sha256": "eaef969ecacef65d4962a54163ef43ca39dee27eb5ed2e13933aa69de2c7f65f"
            },
            {
              "role": "write",
              "file": "news-notice-sentiment.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\news-notice-sentiment.morning.json",
              "modified_at": "2026-07-08T09:37:09+08:00",
              "size": 25842,
              "sha256": "7348522aea7bd66d75064b54ab95fadc2c1ee0d3fb7c893ca0ffe6fef20b352e"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "新闻/公告摘要完成：正面 7 条，风险 16 条，谨慎/中性 15 条。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "news-notice-sentiment.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\news-notice-sentiment.morning.json",
                  "modified_at": "2026-07-08T09:37:09+08:00",
                  "size": 25842,
                  "sha256": "7348522aea7bd66d75064b54ab95fadc2c1ee0d3fb7c893ca0ffe6fef20b352e"
                }
              ]
            }
          ]
        },
        {
          "id": "domestic_intelligence",
          "order": 12,
          "title_cn": "国内信息增强",
          "plain_goal_cn": "把隔夜国内事件映射到上一收盘报验证对象，只补解释，不新增股票。",
          "data_used_cn": [
            "隔夜国内新闻",
            "公告/业绩事件",
            "主线/板块证据",
            "上一收盘验证对象"
          ],
          "source_method_cn": "通过 build_domestic_intelligence.py 只读已落盘产物映射到继承对象；不取数、不选股、不改 handoff。",
          "read_files": [
            "authorized-news.json",
            "authorized-notices.json",
            "domestic-gate.morning.json",
            "market-mainline.morning.json",
            "sector-split.morning.json",
            "candidate-score.morning.json",
            "technical-check.morning.json"
          ],
          "write_files": [
            "domestic-intelligence.morning.json"
          ],
          "status": "ok",
          "result_cn": "国内信息增强已整理：当天新增证据 1 条，A股政策/产业 1 条，A股公告 0 条，直接关联自选股 0 条；催化状态 已确认催化，时效 当日新催化。",
          "missing_or_risk_cn": [
            "增强层只解释国内事件、板块和自选股关联，不新增股票，不改 Top3/A/B，不改 handoff",
            "当前展示方向：液冷服务器、AI服务器、新型城镇",
            "已单独隔离：港股/海外中资 2 条、全球市场摘要 2 条，不写入正式国内催化"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "authorized-news.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\authorized-news.json",
              "modified_at": "2026-07-08T09:00:08+08:00",
              "size": 56957,
              "sha256": "c5fa8437de614d21184c2867c6b08effbad7df759bbb892f6549e6bad3040e56"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\authorized-notices.json",
              "modified_at": "2026-07-08T09:00:14+08:00",
              "size": 21271,
              "sha256": "4c4de17fb92689244dcb8340436e3b29ba5e22363a0b44481919351abdf741b5"
            },
            {
              "role": "read",
              "file": "domestic-gate.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "domestic-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\domestic-gate.morning.json",
              "modified_at": "2026-07-08T09:36:29+08:00",
              "size": 181012,
              "sha256": "e39b52bca1d287d5197ac4ad87b004ab75d8d26b9b1b43c6160026d6fdd948c8"
            },
            {
              "role": "read",
              "file": "market-mainline.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "market-mainline.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\market-mainline.morning.json",
              "modified_at": "2026-07-08T09:36:19+08:00",
              "size": 110360,
              "sha256": "ac0b32c2bc2ef65dd170079143bd6674ac688c499ac0a94620d1d2fc990679bc"
            },
            {
              "role": "read",
              "file": "sector-split.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "sector-split.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\sector-split.morning.json",
              "modified_at": "2026-07-08T09:36:33+08:00",
              "size": 131778,
              "sha256": "b5db2f668eaf547ae5700eaf610382037111e956d14eaa3847a2b2fcbd8f2e3f"
            },
            {
              "role": "read",
              "file": "candidate-score.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "candidate-score.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\candidate-score.morning.json",
              "modified_at": "2026-07-08T09:36:32+08:00",
              "size": 69332,
              "sha256": "50a960ea3b751c2b32b90efb8de1ac3ade195ddb07ff8d00d3a384c825848d92"
            },
            {
              "role": "read",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\technical-check.morning.json",
              "modified_at": "2026-07-08T09:36:32+08:00",
              "size": 13369,
              "sha256": "8214ca7e4a56e060a68219d7a7fafb82282bfbaee11cda64499c5a2a0939ae8f"
            },
            {
              "role": "write",
              "file": "domestic-intelligence.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\domestic-intelligence.morning.json",
              "modified_at": "2026-07-08T09:36:33+08:00",
              "size": 5611,
              "sha256": "eaef969ecacef65d4962a54163ef43ca39dee27eb5ed2e13933aa69de2c7f65f"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "国内信息增强已整理：当天新增证据 1 条，A股政策/产业 1 条，A股公告 0 条，直接关联自选股 0 条；催化状态 已确认催化，时效 当日新催化。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "domestic-intelligence.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\domestic-intelligence.morning.json",
                  "modified_at": "2026-07-08T09:36:33+08:00",
                  "size": 5611,
                  "sha256": "eaef969ecacef65d4962a54163ef43ca39dee27eb5ed2e13933aa69de2c7f65f"
                }
              ]
            }
          ]
        },
        {
          "id": "external_skill_enrichment",
          "order": 13,
          "title_cn": "金融 skill 证据增强",
          "plain_goal_cn": "早报步骤：金融 skill 证据增强。",
          "data_used_cn": [
            "上一收盘重点对象",
            "候选评分",
            "技术检查",
            "金融 skill 适配清单"
          ],
          "source_method_cn": "通过 build_external_skill_enrichment.py 只整理证据增强对象和上限；不重新选股。",
          "read_files": [
            "close-report.json",
            "candidate-score.morning.json",
            "technical-check.morning.json"
          ],
          "write_files": [
            "external-skill-enrichment.morning.json"
          ],
          "status": "ok",
          "result_cn": "金融 skill 增强清单已生成：题材/资金 0 只，公告/股本风险 0 只，交易计划 1 只，复盘重点 10 只。",
          "missing_or_risk_cn": [
            "这些增强只补证据和解释，不改 Top3、不改 A/B 观察、不改 handoff",
            "当前是适配清单/扫描上限，尚未逐个金融 skill 实时深拉：tdx-agzxsb、tdx-hot-topic、tdx-trading-info、tdx-event-driven-short-term-catalyst"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "close-report.json",
              "status": "missing",
              "exists": false
            },
            {
              "role": "read",
              "file": "candidate-score.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "candidate-score.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\candidate-score.morning.json",
              "modified_at": "2026-07-08T09:36:32+08:00",
              "size": 69332,
              "sha256": "50a960ea3b751c2b32b90efb8de1ac3ade195ddb07ff8d00d3a384c825848d92"
            },
            {
              "role": "read",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\technical-check.morning.json",
              "modified_at": "2026-07-08T09:36:32+08:00",
              "size": 13369,
              "sha256": "8214ca7e4a56e060a68219d7a7fafb82282bfbaee11cda64499c5a2a0939ae8f"
            },
            {
              "role": "write",
              "file": "external-skill-enrichment.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\external-skill-enrichment.morning.json",
              "modified_at": "2026-07-08T09:37:09+08:00",
              "size": 7784,
              "sha256": "69ddc4e7daac4c1ba55042265e9836bfd7335a885ec0c7d0b76ce1582d744fa1"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "金融 skill 增强清单已生成：题材/资金 0 只，公告/股本风险 0 只，交易计划 1 只，复盘重点 10 只。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "external-skill-enrichment.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\external-skill-enrichment.morning.json",
                  "modified_at": "2026-07-08T09:37:09+08:00",
                  "size": 7784,
                  "sha256": "69ddc4e7daac4c1ba55042265e9836bfd7335a885ec0c7d0b76ce1582d744fa1"
                }
              ]
            }
          ]
        },
        {
          "id": "external_skill_deep_dive",
          "order": 14,
          "title_cn": "金融 skill 深挖",
          "plain_goal_cn": "早报步骤：金融 skill 深挖。",
          "data_used_cn": [
            "Top3",
            "A类观察",
            "B类观察",
            "候选评分前三",
            "风险快检状态"
          ],
          "source_method_cn": "通过 build_external_skill_deep_dive.py 复用收盘重点票深挖结果；早报只做持仓复核、空仓风险快检和观察，不新增股票。",
          "read_files": [
            "external-skill-enrichment.morning.json",
            "four-layer-tracking.close.json",
            "close-report.json"
          ],
          "write_files": [
            "external-skill-deep-dive.morning.json"
          ],
          "status": "ok",
          "result_cn": "金融 skill 深挖已生成：重点票 6 只，Top3 1 只，A类 3 只，B类 0 只，候选评分前三 3 只。",
          "missing_or_risk_cn": [
            "深挖只补主线、题材、资金、事件、股本风险、板块操盘、产业链、主营匹配、仓位节奏和复盘证据，不改 Top3、不改 handoff"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "external-skill-enrichment.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\external-skill-enrichment.morning.json",
              "modified_at": "2026-07-08T09:37:09+08:00",
              "size": 7784,
              "sha256": "69ddc4e7daac4c1ba55042265e9836bfd7335a885ec0c7d0b76ce1582d744fa1"
            },
            {
              "role": "read",
              "file": "four-layer-tracking.close.json",
              "status": "missing",
              "exists": false
            },
            {
              "role": "read",
              "file": "close-report.json",
              "status": "missing",
              "exists": false
            },
            {
              "role": "write",
              "file": "external-skill-deep-dive.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\external-skill-deep-dive.morning.json",
              "modified_at": "2026-07-08T09:37:10+08:00",
              "size": 31970,
              "sha256": "4a881b80eb05966d900ef5554a6b4335f89711d38a41c27a524b0e67513c937a"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "金融 skill 深挖已生成：重点票 6 只，Top3 1 只，A类 3 只，B类 0 只，候选评分前三 3 只。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "external-skill-deep-dive.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\external-skill-deep-dive.morning.json",
                  "modified_at": "2026-07-08T09:37:10+08:00",
                  "size": 31970,
                  "sha256": "4a881b80eb05966d900ef5554a6b4335f89711d38a41c27a524b0e67513c937a"
                }
              ]
            }
          ]
        },
        {
          "id": "four_layer_tracking",
          "order": 15,
          "title_cn": "四套逻辑跟踪",
          "plain_goal_cn": "跟踪上一收盘报四套策略样本，正式对象验证，旁路对象只统计不执行。",
          "data_used_cn": [
            "上一收盘四套逻辑样本",
            "早报验证状态",
            "技术/公告变化",
            "空仓是否合理"
          ],
          "source_method_cn": "通过 build_four_layer_tracking.py 更新四套策略样本状态；无正式 Top3 时只判断空仓是否合理，不把旁路对象放进正式执行。",
          "read_files": [
            "four-layer-tracking.close.json",
            "morning-report.json"
          ],
          "write_files": [
            "four-layer-tracking.morning.json"
          ],
          "status": "ok",
          "result_cn": "四层/旁路策略对比账本已生成：正式 Top3 1 只，A类主线/题材 3 只，B类技术/资金 0 只，候选评分前排 3 只，低位回流观察 3 只，早盘驱动观察 3 只，隔夜涨停观察 3 只，题材轮动观察 3 只，收盘中强承接观察 1 只。 面板样本跟踪 20 条，本时段快照命中 20 条。",
          "missing_or_risk_cn": [
            "跟踪的是面板四层样本和旁路样本；正式买入只认 Top3，题材观察、技术观察、评分前排、低位回流、早盘驱动、隔夜涨停观察、题材轮动观察和收盘中强承接观察不进入 handoff、午报执行或正式收益"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "four-layer-tracking.close.json",
              "status": "missing",
              "exists": false
            },
            {
              "role": "read",
              "file": "morning-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-report.json",
              "modified_at": "2026-07-08T09:37:10+08:00",
              "size": 526831,
              "sha256": "34d309af65eee57e4bac64ce24cebb0424b3c612558bbf2055b53323e29af25c"
            },
            {
              "role": "write",
              "file": "four-layer-tracking.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\four-layer-tracking.morning.json",
              "modified_at": "2026-07-08T09:37:09+08:00",
              "size": 116901,
              "sha256": "45b804dcd5c76a94618a62a7ae699e4a1407a9bac29ca861a9a56c7afd283d98"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "四层/旁路策略对比账本已生成：正式 Top3 1 只，A类主线/题材 3 只，B类技术/资金 0 只，候选评分前排 3 只，低位回流观察 3 只，早盘驱动观察 3 只，隔夜涨停观察 3 只，题材轮动观察 3 只，收盘中强承接观察 1 只。 面板样本跟踪 20 条，本时段快照命中 20 条。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "four-layer-tracking.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\four-layer-tracking.morning.json",
                  "modified_at": "2026-07-08T09:37:09+08:00",
                  "size": 116901,
                  "sha256": "45b804dcd5c76a94618a62a7ae699e4a1407a9bac29ca861a9a56c7afd283d98"
                }
              ]
            }
          ]
        },
        {
          "id": "data_acquisition_health",
          "order": 16,
          "title_cn": "数据获取健康审计",
          "plain_goal_cn": "早报步骤：数据获取健康审计。",
          "data_used_cn": [
            "当天自选股快照",
            "授权新闻公告",
            "候选公告排雷",
            "三闸门",
            "风险快检"
          ],
          "source_method_cn": "通过 build_data_acquisition_health.py 只读已落盘产物做审计；不取数、不选股、不改 handoff。",
          "read_files": [
            "raw-watchlist.morning.json",
            "filtered-pool.morning.json",
            "authorized-news.json",
            "authorized-notices.json",
            "candidate-notice-scan.morning.json"
          ],
          "write_files": [
            "data-acquisition-health.morning.json"
          ],
          "status": "ok",
          "result_cn": "数据获取健康审计完成：通过 13 项，需留意 0 项，阻断 0 项。",
          "missing_or_risk_cn": [
            "关键数据获取审计通过：未发现读旧、查询失败或关键产物缺失。"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "raw-watchlist.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\raw-watchlist.morning.json",
              "modified_at": "2026-07-08T09:35:52+08:00",
              "size": 1875500,
              "sha256": "8e361069aa81cfba1a739dac4a9906115927ca46f27253d2d0a734dcce54c57e"
            },
            {
              "role": "read",
              "file": "filtered-pool.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\filtered-pool.morning.json",
              "modified_at": "2026-07-08T09:35:52+08:00",
              "size": 2373732,
              "sha256": "3b7dcd0755bd0ace4fb8dabf18b2ec12680ead5823620b10cc1dd723a20757a8"
            },
            {
              "role": "read",
              "file": "authorized-news.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\authorized-news.json",
              "modified_at": "2026-07-08T09:00:08+08:00",
              "size": 56957,
              "sha256": "c5fa8437de614d21184c2867c6b08effbad7df759bbb892f6549e6bad3040e56"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\authorized-notices.json",
              "modified_at": "2026-07-08T09:00:14+08:00",
              "size": 21271,
              "sha256": "4c4de17fb92689244dcb8340436e3b29ba5e22363a0b44481919351abdf741b5"
            },
            {
              "role": "read",
              "file": "candidate-notice-scan.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\candidate-notice-scan.morning.json",
              "modified_at": "2026-07-08T09:37:09+08:00",
              "size": 15637,
              "sha256": "e52215103dbdec2e33ca7e9ae471b52856572c4c666c43cf79ebb93014713c80"
            },
            {
              "role": "write",
              "file": "data-acquisition-health.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\data-acquisition-health.morning.json",
              "modified_at": "2026-07-08T09:37:10+08:00",
              "size": 9362,
              "sha256": "b58f3d75f2e53b2c717884b7364803619ebc46dd49159541be592d744ae9c9d2"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "数据获取健康审计完成：通过 13 项，需留意 0 项，阻断 0 项。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "data-acquisition-health.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\data-acquisition-health.morning.json",
                  "modified_at": "2026-07-08T09:37:10+08:00",
                  "size": 9362,
                  "sha256": "b58f3d75f2e53b2c717884b7364803619ebc46dd49159541be592d744ae9c9d2"
                }
              ]
            }
          ]
        },
        {
          "id": "strategy_benchmark",
          "order": 17,
          "title_cn": "四套策略收益对比",
          "plain_goal_cn": "早报只比较正式和旁路样本的跟踪状态，不新增买入对象。",
          "data_used_cn": [
            "四套逻辑样本",
            "模拟收益账本",
            "收益缺口"
          ],
          "source_method_cn": "通过 build_strategy_benchmark.py 比较正式和旁路表现；只做审计，不改早报对象。",
          "read_files": [
            "four-layer-tracking.morning.json",
            "paper-trade-ledger.morning.json"
          ],
          "write_files": [
            "strategy-benchmark.morning.json"
          ],
          "status": "ok",
          "result_cn": "四套策略对比审计完成：正式 Top3 1 只，旁路样本 19 只，早盘表现缺口 20 只。",
          "missing_or_risk_cn": [
            "这是旁路对比，只用于复盘判断哪套逻辑更有效；不改 Top3、不改 handoff、不改正式收益。",
            "已对比 8 套策略样本；暂无可比收益，等待价格回填。",
            "收益还在等待价格回填，这不是扫描失败，也不会影响早报/午报结论。"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "four-layer-tracking.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\four-layer-tracking.morning.json",
              "modified_at": "2026-07-08T09:37:09+08:00",
              "size": 116901,
              "sha256": "45b804dcd5c76a94618a62a7ae699e4a1407a9bac29ca861a9a56c7afd283d98"
            },
            {
              "role": "read",
              "file": "paper-trade-ledger.morning.json",
              "status": "period_snapshot_missing",
              "exists": false,
              "requested_file": "paper-trade-ledger.json",
              "freshness_note": "本节点要求本时段专属快照；缺失时不引用可能被后续时段覆盖的通用文件。"
            },
            {
              "role": "write",
              "file": "strategy-benchmark.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\strategy-benchmark.morning.json",
              "modified_at": "2026-07-08T09:37:10+08:00",
              "size": 9555,
              "sha256": "cbf17e7b418108cef96570660307827bd62da93d4671af337cf9f88b11b2ef10"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "四套策略对比审计完成：正式 Top3 1 只，旁路样本 19 只，早盘表现缺口 20 只。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "strategy-benchmark.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\strategy-benchmark.morning.json",
                  "modified_at": "2026-07-08T09:37:10+08:00",
                  "size": 9555,
                  "sha256": "cbf17e7b418108cef96570660307827bd62da93d4671af337cf9f88b11b2ef10"
                }
              ]
            }
          ]
        },
        {
          "id": "multi_role_review",
          "order": 18,
          "title_cn": "多视角审计",
          "plain_goal_cn": "从技术、题材、风险和数据质量看早报是否有弱点；只提示，不改算法。",
          "data_used_cn": [
            "早报",
            "候选评分",
            "技术检查",
            "数据健康",
            "四套策略对比"
          ],
          "source_method_cn": "通过 build_multi_role_review.py 做技术、题材、风险、数据质量复核；只给提示，不改算法。",
          "read_files": [
            "morning-report.json",
            "candidate-score.morning.json",
            "technical-check.morning.json",
            "data-acquisition-health.morning.json"
          ],
          "write_files": [
            "multi-role-review.morning.json"
          ],
          "status": "warning",
          "result_cn": "多视角审计完成：技术、题材、风险、数据质量共 4 个视角；需留意 1 项，阻断 0 项。（需留意：技术：通过 0 只，取消 1 只）",
          "missing_or_risk_cn": [
            "审计层只找问题和给建议，不自动改算法、不改 Top3、不改交易计划。",
            "技术审查：技术检查通过 0 只，取消/不合格 1 只；技术层只给证据，不直接改名单。",
            "技术审查建议：若强票多被技术取消，复盘阶段检查取消原因；确认前不调技术阈值。"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "morning-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-report.json",
              "modified_at": "2026-07-08T09:37:10+08:00",
              "size": 526831,
              "sha256": "34d309af65eee57e4bac64ce24cebb0424b3c612558bbf2055b53323e29af25c"
            },
            {
              "role": "read",
              "file": "candidate-score.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "candidate-score.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\candidate-score.morning.json",
              "modified_at": "2026-07-08T09:36:32+08:00",
              "size": 69332,
              "sha256": "50a960ea3b751c2b32b90efb8de1ac3ade195ddb07ff8d00d3a384c825848d92"
            },
            {
              "role": "read",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\technical-check.morning.json",
              "modified_at": "2026-07-08T09:36:32+08:00",
              "size": 13369,
              "sha256": "8214ca7e4a56e060a68219d7a7fafb82282bfbaee11cda64499c5a2a0939ae8f"
            },
            {
              "role": "read",
              "file": "data-acquisition-health.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\data-acquisition-health.morning.json",
              "modified_at": "2026-07-08T09:37:10+08:00",
              "size": 9362,
              "sha256": "b58f3d75f2e53b2c717884b7364803619ebc46dd49159541be592d744ae9c9d2"
            },
            {
              "role": "write",
              "file": "multi-role-review.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\multi-role-review.morning.json",
              "modified_at": "2026-07-08T09:37:11+08:00",
              "size": 4189,
              "sha256": "13c7420a3ce28b1ea6d4a059e0c9765c894bba39e02da6e57ee5d244ed4bb8d0"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "多视角审计完成：技术、题材、风险、数据质量共 4 个视角；需留意 1 项，阻断 0 项。（需留意：技术：通过 0 只，取消 1 只）",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "multi-role-review.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\multi-role-review.morning.json",
                  "modified_at": "2026-07-08T09:37:11+08:00",
                  "size": 4189,
                  "sha256": "13c7420a3ce28b1ea6d4a059e0c9765c894bba39e02da6e57ee5d244ed4bb8d0"
                }
              ]
            }
          ]
        },
        {
          "id": "report_quality_audit",
          "order": 19,
          "title_cn": "正式文本质量审计",
          "plain_goal_cn": "检查早报正文有没有乱码、工程词或展示误导；不重写报告。",
          "data_used_cn": [
            "早报 Markdown",
            "多视角审计",
            "四套策略对比"
          ],
          "source_method_cn": "通过 build_report_quality_audit.py 检查乱码和工程词；不重写报告。",
          "read_files": [
            "morning-report.md",
            "multi-role-review.morning.json",
            "strategy-benchmark.morning.json"
          ],
          "write_files": [
            "report-quality-audit.morning.json"
          ],
          "status": "ok",
          "result_cn": "正式文本质量审计完成：状态 ok，发现 0 项可读性/展示风险。",
          "missing_or_risk_cn": [
            "质量审计只提示正式文本问题，不重写报告、不改结论。"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "morning-report.md",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-report.md",
              "modified_at": "2026-07-08T09:37:10+08:00",
              "size": 4508,
              "sha256": "c552b8311965b21c0200ea37704b5bdf567b21b0f9af3ceff0a8f5702395bea7"
            },
            {
              "role": "read",
              "file": "multi-role-review.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\multi-role-review.morning.json",
              "modified_at": "2026-07-08T09:37:11+08:00",
              "size": 4189,
              "sha256": "13c7420a3ce28b1ea6d4a059e0c9765c894bba39e02da6e57ee5d244ed4bb8d0"
            },
            {
              "role": "read",
              "file": "strategy-benchmark.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\strategy-benchmark.morning.json",
              "modified_at": "2026-07-08T09:37:10+08:00",
              "size": 9555,
              "sha256": "cbf17e7b418108cef96570660307827bd62da93d4671af337cf9f88b11b2ef10"
            },
            {
              "role": "write",
              "file": "report-quality-audit.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\report-quality-audit.morning.json",
              "modified_at": "2026-07-08T09:37:11+08:00",
              "size": 1398,
              "sha256": "d3c189719633dc98adbd8a41669504baf56649b309c8ec153174fa80c46b9225"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "正式文本质量审计完成：状态 ok，发现 0 项可读性/展示风险。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "report-quality-audit.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\report-quality-audit.morning.json",
                  "modified_at": "2026-07-08T09:37:11+08:00",
                  "size": 1398,
                  "sha256": "d3c189719633dc98adbd8a41669504baf56649b309c8ec153174fa80c46b9225"
                }
              ]
            }
          ]
        },
        {
          "id": "generate_morning",
          "order": 20,
          "title_cn": "生成早报",
          "plain_goal_cn": "把早盘验证结论写成正式早报。",
          "data_used_cn": [
            "三闸门",
            "候选结论",
            "昨日尾盘模拟持仓复核",
            "风控动作"
          ],
          "source_method_cn": "通过 build_report_snapshot.py 和 render_report_template.py 生成。",
          "read_files": [
            "morning-report.json",
            "morning-precheck.prefetch.json",
            "morning-risk-precheck.json"
          ],
          "write_files": [
            "morning-report.md"
          ],
          "status": "ok",
          "result_cn": "这一步已经跑完，关键产物已保存。",
          "missing_or_risk_cn": [
            "无关键缺失"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "morning-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-report.json",
              "modified_at": "2026-07-08T09:37:10+08:00",
              "size": 526831,
              "sha256": "34d309af65eee57e4bac64ce24cebb0424b3c612558bbf2055b53323e29af25c"
            },
            {
              "role": "read",
              "file": "morning-precheck.prefetch.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-precheck.prefetch.json",
              "modified_at": "2026-07-08T09:36:33+08:00",
              "size": 3462,
              "sha256": "67fa2b5a3d454f5c23297f823215a9eb3fa9600ca7380020aaaee4ba0b53ae92"
            },
            {
              "role": "read",
              "file": "morning-risk-precheck.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-risk-precheck.json",
              "modified_at": "2026-07-08T09:36:33+08:00",
              "size": 4598,
              "sha256": "ccbdac84851d831b07999c471c1eea10e8b3cb313bab8fd73f80a680c033dd71"
            },
            {
              "role": "write",
              "file": "morning-report.md",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-report.md",
              "modified_at": "2026-07-08T09:37:10+08:00",
              "size": 4508,
              "sha256": "c552b8311965b21c0200ea37704b5bdf567b21b0f9af3ceff0a8f5702395bea7"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "生成早报",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "morning-report.md",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-report.md",
                  "modified_at": "2026-07-08T09:37:10+08:00",
                  "size": 4508,
                  "sha256": "c552b8311965b21c0200ea37704b5bdf567b21b0f9af3ceff0a8f5702395bea7"
                }
              ]
            }
          ]
        },
        {
          "id": "validate_morning",
          "order": 21,
          "title_cn": "协议校验",
          "plain_goal_cn": "确认早报没有新增非交接股票，结论和固定模板一致。",
          "data_used_cn": [
            "早报 JSON",
            "早报 Markdown",
            "交接对象"
          ],
          "source_method_cn": "通过 report_protocol_validate.py 校验。",
          "read_files": [
            "morning-report.json",
            "morning-report.md"
          ],
          "write_files": [
            "workflow-manifest.morning.json",
            "data-lineage.morning.json"
          ],
          "status": "ok",
          "result_cn": "早报已生成固定 Markdown。",
          "missing_or_risk_cn": [
            "无关键缺失"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "morning-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-report.json",
              "modified_at": "2026-07-08T09:37:10+08:00",
              "size": 526831,
              "sha256": "34d309af65eee57e4bac64ce24cebb0424b3c612558bbf2055b53323e29af25c"
            },
            {
              "role": "read",
              "file": "morning-report.md",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-report.md",
              "modified_at": "2026-07-08T09:37:10+08:00",
              "size": 4508,
              "sha256": "c552b8311965b21c0200ea37704b5bdf567b21b0f9af3ceff0a8f5702395bea7"
            },
            {
              "role": "write",
              "file": "workflow-manifest.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\workflow-manifest.morning.json",
              "modified_at": "2026-07-08T09:37:11+08:00",
              "size": 93683,
              "sha256": "eaa6a2a7aac3f85b72b45a8e08800dfc545f219a215f5566c9fafda35062c0e0"
            },
            {
              "role": "write",
              "file": "data-lineage.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\data-lineage.morning.json",
              "modified_at": "2026-07-08T09:37:11+08:00",
              "size": 55301,
              "sha256": "2713631724a780baa718657eefd216f99e2980edfcb9418ef6fe701d6e2ca733"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "早报已生成固定 Markdown。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "workflow-manifest.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\workflow-manifest.morning.json",
                  "modified_at": "2026-07-08T09:37:11+08:00",
                  "size": 93683,
                  "sha256": "eaa6a2a7aac3f85b72b45a8e08800dfc545f219a215f5566c9fafda35062c0e0"
                },
                {
                  "role": "write",
                  "file": "data-lineage.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\data-lineage.morning.json",
                  "modified_at": "2026-07-08T09:37:11+08:00",
                  "size": 55301,
                  "sha256": "2713631724a780baa718657eefd216f99e2980edfcb9418ef6fe701d6e2ca733"
                }
              ]
            }
          ]
        }
      ]
    },
    "noon": {
      "label": "午报",
      "nodes": [
        {
          "id": "noon_schedule_status",
          "order": 1,
          "title_cn": "午报自动化状态",
          "plain_goal_cn": "区分自动化错过、流程失败和数据源失败，避免把没运行误判成行情没取到。",
          "data_used_cn": [
            "workflow-manifest",
            "正式报告 JSON",
            "正式报告 Markdown",
            "当前时间"
          ],
          "source_method_cn": "由 Web 导出层读取运行记录和正式报告文件状态；只做展示和审计，不补跑、不选股。",
          "read_files": [
            "workflow-manifest.noon.json",
            "noon-report.json",
            "noon-report.md"
          ],
          "write_files": [],
          "status": "incomplete",
          "result_cn": "未到计划时间",
          "missing_or_risk_cn": [
            "计划时间：2026-07-08T11:35+08:00",
            "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
          ]
        }
      ]
    },
    "review": {
      "label": "复盘报",
      "nodes": [
        {
          "id": "review_schedule_status",
          "order": 1,
          "title_cn": "复盘报自动化状态",
          "plain_goal_cn": "区分自动化错过、流程失败和数据源失败，避免把没运行误判成行情没取到。",
          "data_used_cn": [
            "workflow-manifest",
            "正式报告 JSON",
            "正式报告 Markdown",
            "当前时间"
          ],
          "source_method_cn": "由 Web 导出层读取运行记录和正式报告文件状态；只做展示和审计，不补跑、不选股。",
          "read_files": [
            "workflow-manifest.review.json",
            "review-report.json",
            "review-report.md"
          ],
          "write_files": [],
          "status": "incomplete",
          "result_cn": "未到计划时间",
          "missing_or_risk_cn": [
            "计划时间：2026-07-08T20:00+08:00",
            "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          ]
        }
      ]
    }
  },
  "data_sources": [
    {
      "name": "outer-gate.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\outer-gate.json",
        "relative_path": "runs/2026-07-08/outer-gate.json",
        "exists": true,
        "size": 21994,
        "modified_at": "2026-07-08T09:36:14+08:00",
        "sha256": "b77f67c4636a6eda9e792c648e2262ae165ea46327ac8404391cdb6f96cfe85a"
      }
    },
    {
      "name": "domestic-gate.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\domestic-gate.json",
        "relative_path": "runs/2026-07-08/domestic-gate.json",
        "exists": true,
        "size": 181012,
        "modified_at": "2026-07-08T09:36:29+08:00",
        "sha256": "e39b52bca1d287d5197ac4ad87b004ab75d8d26b9b1b43c6160026d6fdd948c8"
      }
    },
    {
      "name": "emotion-trend-gate.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\emotion-trend-gate.json",
        "relative_path": "runs/2026-07-08/emotion-trend-gate.json",
        "exists": true,
        "size": 17362,
        "modified_at": "2026-07-08T09:36:31+08:00",
        "sha256": "cd2bb0231d9f06fdd2fa3d17bf95d45c1ae1f42b5ef97a66674e9495c12b1518"
      }
    },
    {
      "name": "gates-protocol.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\gates-protocol.json",
        "relative_path": "runs/2026-07-08/gates-protocol.json",
        "exists": true,
        "size": 17753,
        "modified_at": "2026-07-08T09:36:31+08:00",
        "sha256": "add1d728e3100589e97b5775e1b8736d576f0a04266217b8b3b7d9f94313c074"
      }
    },
    {
      "name": "raw-watchlist.json",
      "status": "ok",
      "records": 283,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\raw-watchlist.json",
        "relative_path": "runs/2026-07-08/raw-watchlist.json",
        "exists": true,
        "size": 1875500,
        "modified_at": "2026-07-08T09:35:52+08:00",
        "sha256": "8e361069aa81cfba1a739dac4a9906115927ca46f27253d2d0a734dcce54c57e"
      }
    },
    {
      "name": "filtered-pool.json",
      "status": "ok",
      "records": 283,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\filtered-pool.json",
        "relative_path": "runs/2026-07-08/filtered-pool.json",
        "exists": true,
        "size": 2373732,
        "modified_at": "2026-07-08T09:35:52+08:00",
        "sha256": "3b7dcd0755bd0ace4fb8dabf18b2ec12680ead5823620b10cc1dd723a20757a8"
      }
    },
    {
      "name": "candidate-score.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\candidate-score.json",
        "relative_path": "runs/2026-07-08/candidate-score.json",
        "exists": true,
        "size": 69332,
        "modified_at": "2026-07-08T09:36:32+08:00",
        "sha256": "50a960ea3b751c2b32b90efb8de1ac3ade195ddb07ff8d00d3a384c825848d92"
      }
    },
    {
      "name": "technical-check.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\technical-check.json",
        "relative_path": "runs/2026-07-08/technical-check.json",
        "exists": true,
        "size": 13369,
        "modified_at": "2026-07-08T09:36:32+08:00",
        "sha256": "8214ca7e4a56e060a68219d7a7fafb82282bfbaee11cda64499c5a2a0939ae8f"
      }
    },
    {
      "name": "four-layer-tracking.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\four-layer-tracking.close.json",
        "relative_path": "four-layer-tracking.close.json",
        "exists": false
      }
    },
    {
      "name": "four-layer-tracking.morning.json",
      "status": "ok",
      "records": 20,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\four-layer-tracking.morning.json",
        "relative_path": "runs/2026-07-08/four-layer-tracking.morning.json",
        "exists": true,
        "size": 116901,
        "modified_at": "2026-07-08T09:37:09+08:00",
        "sha256": "45b804dcd5c76a94618a62a7ae699e4a1407a9bac29ca861a9a56c7afd283d98"
      }
    },
    {
      "name": "four-layer-tracking.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\four-layer-tracking.noon.json",
        "relative_path": "four-layer-tracking.noon.json",
        "exists": false
      }
    },
    {
      "name": "four-layer-tracking.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\four-layer-tracking.review.json",
        "relative_path": "four-layer-tracking.review.json",
        "exists": false
      }
    },
    {
      "name": "strategy-benchmark.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\strategy-benchmark.close.json",
        "relative_path": "strategy-benchmark.close.json",
        "exists": false
      }
    },
    {
      "name": "strategy-benchmark.morning.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\strategy-benchmark.morning.json",
        "relative_path": "runs/2026-07-08/strategy-benchmark.morning.json",
        "exists": true,
        "size": 9555,
        "modified_at": "2026-07-08T09:37:10+08:00",
        "sha256": "cbf17e7b418108cef96570660307827bd62da93d4671af337cf9f88b11b2ef10"
      }
    },
    {
      "name": "strategy-benchmark.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\strategy-benchmark.noon.json",
        "relative_path": "strategy-benchmark.noon.json",
        "exists": false
      }
    },
    {
      "name": "strategy-benchmark.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\strategy-benchmark.review.json",
        "relative_path": "strategy-benchmark.review.json",
        "exists": false
      }
    },
    {
      "name": "news-notice-sentiment.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\news-notice-sentiment.close.json",
        "relative_path": "news-notice-sentiment.close.json",
        "exists": false
      }
    },
    {
      "name": "news-notice-sentiment.morning.json",
      "status": "ok",
      "records": 38,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\news-notice-sentiment.morning.json",
        "relative_path": "runs/2026-07-08/news-notice-sentiment.morning.json",
        "exists": true,
        "size": 25842,
        "modified_at": "2026-07-08T09:37:09+08:00",
        "sha256": "7348522aea7bd66d75064b54ab95fadc2c1ee0d3fb7c893ca0ffe6fef20b352e"
      }
    },
    {
      "name": "news-notice-sentiment.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\news-notice-sentiment.noon.json",
        "relative_path": "news-notice-sentiment.noon.json",
        "exists": false
      }
    },
    {
      "name": "news-notice-sentiment.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\news-notice-sentiment.review.json",
        "relative_path": "news-notice-sentiment.review.json",
        "exists": false
      }
    },
    {
      "name": "overnight-report-brief.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\overnight-report-brief.close.json",
        "relative_path": "overnight-report-brief.close.json",
        "exists": false
      }
    },
    {
      "name": "multi-role-review.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\multi-role-review.close.json",
        "relative_path": "multi-role-review.close.json",
        "exists": false
      }
    },
    {
      "name": "multi-role-review.morning.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\multi-role-review.morning.json",
        "relative_path": "runs/2026-07-08/multi-role-review.morning.json",
        "exists": true,
        "size": 4189,
        "modified_at": "2026-07-08T09:37:11+08:00",
        "sha256": "13c7420a3ce28b1ea6d4a059e0c9765c894bba39e02da6e57ee5d244ed4bb8d0"
      }
    },
    {
      "name": "multi-role-review.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\multi-role-review.noon.json",
        "relative_path": "multi-role-review.noon.json",
        "exists": false
      }
    },
    {
      "name": "multi-role-review.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\multi-role-review.review.json",
        "relative_path": "multi-role-review.review.json",
        "exists": false
      }
    },
    {
      "name": "report-quality-audit.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\report-quality-audit.close.json",
        "relative_path": "report-quality-audit.close.json",
        "exists": false
      }
    },
    {
      "name": "report-quality-audit.morning.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\report-quality-audit.morning.json",
        "relative_path": "runs/2026-07-08/report-quality-audit.morning.json",
        "exists": true,
        "size": 1398,
        "modified_at": "2026-07-08T09:37:11+08:00",
        "sha256": "d3c189719633dc98adbd8a41669504baf56649b309c8ec153174fa80c46b9225"
      }
    },
    {
      "name": "report-quality-audit.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\report-quality-audit.noon.json",
        "relative_path": "report-quality-audit.noon.json",
        "exists": false
      }
    },
    {
      "name": "report-quality-audit.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\report-quality-audit.review.json",
        "relative_path": "report-quality-audit.review.json",
        "exists": false
      }
    },
    {
      "name": "second-review.longxia.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\second-review.longxia.review.json",
        "relative_path": "second-review.longxia.review.json",
        "exists": false
      }
    },
    {
      "name": "second-review.longxia.review.md",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\second-review.longxia.review.md",
        "relative_path": "second-review.longxia.review.md",
        "exists": false
      }
    },
    {
      "name": "longxia-second-review-validation.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\longxia-second-review-validation.json",
        "relative_path": "longxia-second-review-validation.json",
        "exists": false
      }
    },
    {
      "name": "longxia-second-review-validation.md",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\longxia-second-review-validation.md",
        "relative_path": "longxia-second-review-validation.md",
        "exists": false
      }
    },
    {
      "name": "sector-split.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\sector-split.json",
        "relative_path": "runs/2026-07-08/sector-split.json",
        "exists": true,
        "size": 131778,
        "modified_at": "2026-07-08T09:36:33+08:00",
        "sha256": "b5db2f668eaf547ae5700eaf610382037111e956d14eaa3847a2b2fcbd8f2e3f"
      }
    },
    {
      "name": "execution-inputs.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\execution-inputs.json",
        "relative_path": "execution-inputs.json",
        "exists": false
      }
    },
    {
      "name": "execution-decision.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\execution-decision.json",
        "relative_path": "execution-decision.json",
        "exists": false
      }
    },
    {
      "name": "morning-precheck.prefetch.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-precheck.prefetch.json",
        "relative_path": "runs/2026-07-08/morning-precheck.prefetch.json",
        "exists": true,
        "size": 3462,
        "modified_at": "2026-07-08T09:36:33+08:00",
        "sha256": "67fa2b5a3d454f5c23297f823215a9eb3fa9600ca7380020aaaee4ba0b53ae92"
      }
    },
    {
      "name": "morning-risk-precheck.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-risk-precheck.json",
        "relative_path": "runs/2026-07-08/morning-risk-precheck.json",
        "exists": true,
        "size": 4598,
        "modified_at": "2026-07-08T09:36:33+08:00",
        "sha256": "ccbdac84851d831b07999c471c1eea10e8b3cb313bab8fd73f80a680c033dd71"
      }
    },
    {
      "name": "data-acquisition-health.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\data-acquisition-health.close.json",
        "relative_path": "data-acquisition-health.close.json",
        "exists": false
      }
    },
    {
      "name": "data-acquisition-health.morning.json",
      "status": "ok",
      "records": 13,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\data-acquisition-health.morning.json",
        "relative_path": "runs/2026-07-08/data-acquisition-health.morning.json",
        "exists": true,
        "size": 9362,
        "modified_at": "2026-07-08T09:37:10+08:00",
        "sha256": "b58f3d75f2e53b2c717884b7364803619ebc46dd49159541be592d744ae9c9d2"
      }
    },
    {
      "name": "data-acquisition-health.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\data-acquisition-health.noon.json",
        "relative_path": "data-acquisition-health.noon.json",
        "exists": false
      }
    },
    {
      "name": "data-acquisition-health.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\data-acquisition-health.review.json",
        "relative_path": "data-acquisition-health.review.json",
        "exists": false
      }
    },
    {
      "name": "market-data.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\market-data.json",
        "relative_path": "market-data.json",
        "exists": false
      }
    },
    {
      "name": "paper-trade-ledger.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\paper-trade-ledger.json",
        "relative_path": "paper-trade-ledger.json",
        "exists": false
      }
    },
    {
      "name": "paper-trade-summary.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\paper-trade-summary.json",
        "relative_path": "paper-trade-summary.json",
        "exists": false
      }
    },
    {
      "name": "close-confirmation.1501.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\close-confirmation.1501.json",
        "relative_path": "close-confirmation.1501.json",
        "exists": false
      }
    },
    {
      "name": "close-watchlist.1501.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\close-watchlist.1501.json",
        "relative_path": "close-watchlist.1501.json",
        "exists": false
      }
    },
    {
      "name": "close-snapshot.1501.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\close-snapshot.1501.json",
        "relative_path": "close-snapshot.1501.json",
        "exists": false
      }
    },
    {
      "name": "close-confirmation.1501-run.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\close-confirmation.1501-run.json",
        "relative_path": "close-confirmation.1501-run.json",
        "exists": false
      }
    },
    {
      "name": "pool-governance.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\pool-governance.json",
        "relative_path": "pool-governance.json",
        "exists": false
      }
    },
    {
      "name": "workflow-manifest.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\workflow-manifest.json",
        "relative_path": "runs/2026-07-08/workflow-manifest.json",
        "exists": true,
        "size": 93683,
        "modified_at": "2026-07-08T09:37:11+08:00",
        "sha256": "eaa6a2a7aac3f85b72b45a8e08800dfc545f219a215f5566c9fafda35062c0e0"
      }
    },
    {
      "name": "data-lineage.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\data-lineage.json",
        "relative_path": "runs/2026-07-08/data-lineage.json",
        "exists": true,
        "size": 55301,
        "modified_at": "2026-07-08T09:37:11+08:00",
        "sha256": "2713631724a780baa718657eefd216f99e2980edfcb9418ef6fe701d6e2ca733"
      }
    },
    {
      "name": "raw-watchlist/",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\raw-watchlist",
        "relative_path": "runs/2026-07-08/raw-watchlist",
        "exists": true
      }
    }
  ],
  "automation_schedule": {
    "by_status": {
      "not_due": 3,
      "complete": 1
    },
    "items": [
      {
        "period": "close",
        "label": "收盘报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-08T14:50+08:00",
        "recovery_policy_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
      },
      {
        "period": "morning",
        "label": "早报",
        "status": "complete",
        "reason_cn": "已按计划生成",
        "scheduled_at": "2026-07-08T09:35+08:00",
        "recovery_policy_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
      },
      {
        "period": "noon",
        "label": "午报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-08T11:35+08:00",
        "recovery_policy_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
      },
      {
        "period": "review",
        "label": "复盘报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-08T20:00+08:00",
        "recovery_policy_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
      }
    ],
    "missed_count": 0,
    "failed_count": 0,
    "incomplete_count": 0
  },
  "web_panel_status_summary": {
    "schema_version": "web-panel-status-summary/v1",
    "currentDate": "2026-07-08",
    "current_date": "2026-07-08",
    "status": "partial",
    "headline_cn": "当前日期 2026-07-08：1/4 四报已生成",
    "report_ready_count": 1,
    "report_total_count": 4,
    "status_detail_counts": {
      "missing_count": 0,
      "invalid_count": 0,
      "incomplete_count": 0,
      "headwind_count": 1,
      "stale_count": 0,
      "empty_count": 0
    },
    "schedule_counts": {
      "not_due": 3,
      "complete": 1
    },
    "schedule_items": [
      {
        "period": "close",
        "label": "收盘报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-08T14:50+08:00",
        "recovery_policy_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
      },
      {
        "period": "morning",
        "label": "早报",
        "status": "complete",
        "reason_cn": "已按计划生成",
        "scheduled_at": "2026-07-08T09:35+08:00",
        "recovery_policy_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
      },
      {
        "period": "noon",
        "label": "午报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-08T11:35+08:00",
        "recovery_policy_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
      },
      {
        "period": "review",
        "label": "复盘报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-08T20:00+08:00",
        "recovery_policy_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
      }
    ],
    "missing_reports": [],
    "user_visible_note_cn": "顶部状态条只统计当前应当已经落盘的异常项；复盘未到时间、链路说明性节点和环境偏谨慎不再算作缺失或扫描不完整。"
  },
  "top_status_summary": {
    "schema_version": "web-panel-status-summary/v1",
    "currentDate": "2026-07-08",
    "current_date": "2026-07-08",
    "status": "partial",
    "headline_cn": "当前日期 2026-07-08：1/4 四报已生成",
    "report_ready_count": 1,
    "report_total_count": 4,
    "status_detail_counts": {
      "missing_count": 0,
      "invalid_count": 0,
      "incomplete_count": 0,
      "headwind_count": 1,
      "stale_count": 0,
      "empty_count": 0
    },
    "schedule_counts": {
      "not_due": 3,
      "complete": 1
    },
    "schedule_items": [
      {
        "period": "close",
        "label": "收盘报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-08T14:50+08:00",
        "recovery_policy_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
      },
      {
        "period": "morning",
        "label": "早报",
        "status": "complete",
        "reason_cn": "已按计划生成",
        "scheduled_at": "2026-07-08T09:35+08:00",
        "recovery_policy_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
      },
      {
        "period": "noon",
        "label": "午报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-08T11:35+08:00",
        "recovery_policy_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
      },
      {
        "period": "review",
        "label": "复盘报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-08T20:00+08:00",
        "recovery_policy_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
      }
    ],
    "missing_reports": [],
    "user_visible_note_cn": "顶部状态条只统计当前应当已经落盘的异常项；复盘未到时间、链路说明性节点和环境偏谨慎不再算作缺失或扫描不完整。"
  },
  "visibility_audit": {},
  "artifacts": [
    {
      "name": "close-report.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\close-report.json",
      "relative_path": "close-report.json",
      "exists": false
    },
    {
      "name": "morning-report.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-report.json",
      "relative_path": "runs/2026-07-08/morning-report.json",
      "exists": true,
      "size": 526831,
      "modified_at": "2026-07-08T09:37:10+08:00",
      "sha256": "34d309af65eee57e4bac64ce24cebb0424b3c612558bbf2055b53323e29af25c"
    },
    {
      "name": "noon-report.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\noon-report.json",
      "relative_path": "noon-report.json",
      "exists": false
    },
    {
      "name": "review-report.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\review-report.json",
      "relative_path": "review-report.json",
      "exists": false
    },
    {
      "name": "close-report.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\close-report.md",
      "relative_path": "close-report.md",
      "exists": false
    },
    {
      "name": "morning-report.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-report.md",
      "relative_path": "runs/2026-07-08/morning-report.md",
      "exists": true,
      "size": 4508,
      "modified_at": "2026-07-08T09:37:10+08:00",
      "sha256": "c552b8311965b21c0200ea37704b5bdf567b21b0f9af3ceff0a8f5702395bea7"
    },
    {
      "name": "noon-report.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\noon-report.md",
      "relative_path": "noon-report.md",
      "exists": false
    },
    {
      "name": "review-report.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\review-report.md",
      "relative_path": "review-report.md",
      "exists": false
    },
    {
      "name": "outer-gate.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\outer-gate.json",
      "relative_path": "runs/2026-07-08/outer-gate.json",
      "exists": true,
      "size": 21994,
      "modified_at": "2026-07-08T09:36:14+08:00",
      "sha256": "b77f67c4636a6eda9e792c648e2262ae165ea46327ac8404391cdb6f96cfe85a"
    },
    {
      "name": "domestic-gate.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\domestic-gate.json",
      "relative_path": "runs/2026-07-08/domestic-gate.json",
      "exists": true,
      "size": 181012,
      "modified_at": "2026-07-08T09:36:29+08:00",
      "sha256": "e39b52bca1d287d5197ac4ad87b004ab75d8d26b9b1b43c6160026d6fdd948c8"
    },
    {
      "name": "emotion-trend-gate.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\emotion-trend-gate.json",
      "relative_path": "runs/2026-07-08/emotion-trend-gate.json",
      "exists": true,
      "size": 17362,
      "modified_at": "2026-07-08T09:36:31+08:00",
      "sha256": "cd2bb0231d9f06fdd2fa3d17bf95d45c1ae1f42b5ef97a66674e9495c12b1518"
    },
    {
      "name": "gates-protocol.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\gates-protocol.json",
      "relative_path": "runs/2026-07-08/gates-protocol.json",
      "exists": true,
      "size": 17753,
      "modified_at": "2026-07-08T09:36:31+08:00",
      "sha256": "add1d728e3100589e97b5775e1b8736d576f0a04266217b8b3b7d9f94313c074"
    },
    {
      "name": "raw-watchlist.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\raw-watchlist.json",
      "relative_path": "runs/2026-07-08/raw-watchlist.json",
      "exists": true,
      "size": 1875500,
      "modified_at": "2026-07-08T09:35:52+08:00",
      "sha256": "8e361069aa81cfba1a739dac4a9906115927ca46f27253d2d0a734dcce54c57e"
    },
    {
      "name": "filtered-pool.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\filtered-pool.json",
      "relative_path": "runs/2026-07-08/filtered-pool.json",
      "exists": true,
      "size": 2373732,
      "modified_at": "2026-07-08T09:35:52+08:00",
      "sha256": "3b7dcd0755bd0ace4fb8dabf18b2ec12680ead5823620b10cc1dd723a20757a8"
    },
    {
      "name": "candidate-score.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\candidate-score.json",
      "relative_path": "runs/2026-07-08/candidate-score.json",
      "exists": true,
      "size": 69332,
      "modified_at": "2026-07-08T09:36:32+08:00",
      "sha256": "50a960ea3b751c2b32b90efb8de1ac3ade195ddb07ff8d00d3a384c825848d92"
    },
    {
      "name": "technical-check.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\technical-check.json",
      "relative_path": "runs/2026-07-08/technical-check.json",
      "exists": true,
      "size": 13369,
      "modified_at": "2026-07-08T09:36:32+08:00",
      "sha256": "8214ca7e4a56e060a68219d7a7fafb82282bfbaee11cda64499c5a2a0939ae8f"
    },
    {
      "name": "four-layer-tracking.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\four-layer-tracking.close.json",
      "relative_path": "four-layer-tracking.close.json",
      "exists": false
    },
    {
      "name": "four-layer-tracking.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\four-layer-tracking.morning.json",
      "relative_path": "runs/2026-07-08/four-layer-tracking.morning.json",
      "exists": true,
      "size": 116901,
      "modified_at": "2026-07-08T09:37:09+08:00",
      "sha256": "45b804dcd5c76a94618a62a7ae699e4a1407a9bac29ca861a9a56c7afd283d98"
    },
    {
      "name": "four-layer-tracking.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\four-layer-tracking.noon.json",
      "relative_path": "four-layer-tracking.noon.json",
      "exists": false
    },
    {
      "name": "four-layer-tracking.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\four-layer-tracking.review.json",
      "relative_path": "four-layer-tracking.review.json",
      "exists": false
    },
    {
      "name": "strategy-benchmark.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\strategy-benchmark.close.json",
      "relative_path": "strategy-benchmark.close.json",
      "exists": false
    },
    {
      "name": "strategy-benchmark.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\strategy-benchmark.morning.json",
      "relative_path": "runs/2026-07-08/strategy-benchmark.morning.json",
      "exists": true,
      "size": 9555,
      "modified_at": "2026-07-08T09:37:10+08:00",
      "sha256": "cbf17e7b418108cef96570660307827bd62da93d4671af337cf9f88b11b2ef10"
    },
    {
      "name": "strategy-benchmark.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\strategy-benchmark.noon.json",
      "relative_path": "strategy-benchmark.noon.json",
      "exists": false
    },
    {
      "name": "strategy-benchmark.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\strategy-benchmark.review.json",
      "relative_path": "strategy-benchmark.review.json",
      "exists": false
    },
    {
      "name": "news-notice-sentiment.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\news-notice-sentiment.close.json",
      "relative_path": "news-notice-sentiment.close.json",
      "exists": false
    },
    {
      "name": "news-notice-sentiment.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\news-notice-sentiment.morning.json",
      "relative_path": "runs/2026-07-08/news-notice-sentiment.morning.json",
      "exists": true,
      "size": 25842,
      "modified_at": "2026-07-08T09:37:09+08:00",
      "sha256": "7348522aea7bd66d75064b54ab95fadc2c1ee0d3fb7c893ca0ffe6fef20b352e"
    },
    {
      "name": "news-notice-sentiment.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\news-notice-sentiment.noon.json",
      "relative_path": "news-notice-sentiment.noon.json",
      "exists": false
    },
    {
      "name": "news-notice-sentiment.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\news-notice-sentiment.review.json",
      "relative_path": "news-notice-sentiment.review.json",
      "exists": false
    },
    {
      "name": "overnight-report-brief.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\overnight-report-brief.close.json",
      "relative_path": "overnight-report-brief.close.json",
      "exists": false
    },
    {
      "name": "multi-role-review.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\multi-role-review.close.json",
      "relative_path": "multi-role-review.close.json",
      "exists": false
    },
    {
      "name": "multi-role-review.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\multi-role-review.morning.json",
      "relative_path": "runs/2026-07-08/multi-role-review.morning.json",
      "exists": true,
      "size": 4189,
      "modified_at": "2026-07-08T09:37:11+08:00",
      "sha256": "13c7420a3ce28b1ea6d4a059e0c9765c894bba39e02da6e57ee5d244ed4bb8d0"
    },
    {
      "name": "multi-role-review.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\multi-role-review.noon.json",
      "relative_path": "multi-role-review.noon.json",
      "exists": false
    },
    {
      "name": "multi-role-review.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\multi-role-review.review.json",
      "relative_path": "multi-role-review.review.json",
      "exists": false
    },
    {
      "name": "report-quality-audit.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\report-quality-audit.close.json",
      "relative_path": "report-quality-audit.close.json",
      "exists": false
    },
    {
      "name": "report-quality-audit.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\report-quality-audit.morning.json",
      "relative_path": "runs/2026-07-08/report-quality-audit.morning.json",
      "exists": true,
      "size": 1398,
      "modified_at": "2026-07-08T09:37:11+08:00",
      "sha256": "d3c189719633dc98adbd8a41669504baf56649b309c8ec153174fa80c46b9225"
    },
    {
      "name": "report-quality-audit.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\report-quality-audit.noon.json",
      "relative_path": "report-quality-audit.noon.json",
      "exists": false
    },
    {
      "name": "report-quality-audit.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\report-quality-audit.review.json",
      "relative_path": "report-quality-audit.review.json",
      "exists": false
    },
    {
      "name": "second-review.longxia.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\second-review.longxia.review.json",
      "relative_path": "second-review.longxia.review.json",
      "exists": false
    },
    {
      "name": "second-review.longxia.review.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\second-review.longxia.review.md",
      "relative_path": "second-review.longxia.review.md",
      "exists": false
    },
    {
      "name": "longxia-second-review-validation.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\longxia-second-review-validation.json",
      "relative_path": "longxia-second-review-validation.json",
      "exists": false
    },
    {
      "name": "longxia-second-review-validation.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\longxia-second-review-validation.md",
      "relative_path": "longxia-second-review-validation.md",
      "exists": false
    },
    {
      "name": "sector-split.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\sector-split.json",
      "relative_path": "runs/2026-07-08/sector-split.json",
      "exists": true,
      "size": 131778,
      "modified_at": "2026-07-08T09:36:33+08:00",
      "sha256": "b5db2f668eaf547ae5700eaf610382037111e956d14eaa3847a2b2fcbd8f2e3f"
    },
    {
      "name": "execution-inputs.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\execution-inputs.json",
      "relative_path": "execution-inputs.json",
      "exists": false
    },
    {
      "name": "execution-decision.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\execution-decision.json",
      "relative_path": "execution-decision.json",
      "exists": false
    },
    {
      "name": "morning-precheck.prefetch.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-precheck.prefetch.json",
      "relative_path": "runs/2026-07-08/morning-precheck.prefetch.json",
      "exists": true,
      "size": 3462,
      "modified_at": "2026-07-08T09:36:33+08:00",
      "sha256": "67fa2b5a3d454f5c23297f823215a9eb3fa9600ca7380020aaaee4ba0b53ae92"
    },
    {
      "name": "morning-risk-precheck.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\morning-risk-precheck.json",
      "relative_path": "runs/2026-07-08/morning-risk-precheck.json",
      "exists": true,
      "size": 4598,
      "modified_at": "2026-07-08T09:36:33+08:00",
      "sha256": "ccbdac84851d831b07999c471c1eea10e8b3cb313bab8fd73f80a680c033dd71"
    },
    {
      "name": "data-acquisition-health.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\data-acquisition-health.close.json",
      "relative_path": "data-acquisition-health.close.json",
      "exists": false
    },
    {
      "name": "data-acquisition-health.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\data-acquisition-health.morning.json",
      "relative_path": "runs/2026-07-08/data-acquisition-health.morning.json",
      "exists": true,
      "size": 9362,
      "modified_at": "2026-07-08T09:37:10+08:00",
      "sha256": "b58f3d75f2e53b2c717884b7364803619ebc46dd49159541be592d744ae9c9d2"
    },
    {
      "name": "data-acquisition-health.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\data-acquisition-health.noon.json",
      "relative_path": "data-acquisition-health.noon.json",
      "exists": false
    },
    {
      "name": "data-acquisition-health.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\data-acquisition-health.review.json",
      "relative_path": "data-acquisition-health.review.json",
      "exists": false
    },
    {
      "name": "market-data.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\market-data.json",
      "relative_path": "market-data.json",
      "exists": false
    },
    {
      "name": "paper-trade-ledger.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\paper-trade-ledger.json",
      "relative_path": "paper-trade-ledger.json",
      "exists": false
    },
    {
      "name": "paper-trade-summary.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\paper-trade-summary.json",
      "relative_path": "paper-trade-summary.json",
      "exists": false
    },
    {
      "name": "close-confirmation.1501.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\close-confirmation.1501.json",
      "relative_path": "close-confirmation.1501.json",
      "exists": false
    },
    {
      "name": "close-watchlist.1501.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\close-watchlist.1501.json",
      "relative_path": "close-watchlist.1501.json",
      "exists": false
    },
    {
      "name": "close-snapshot.1501.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\close-snapshot.1501.json",
      "relative_path": "close-snapshot.1501.json",
      "exists": false
    },
    {
      "name": "close-confirmation.1501-run.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\close-confirmation.1501-run.json",
      "relative_path": "close-confirmation.1501-run.json",
      "exists": false
    },
    {
      "name": "pool-governance.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\pool-governance.json",
      "relative_path": "pool-governance.json",
      "exists": false
    },
    {
      "name": "workflow-manifest.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\workflow-manifest.json",
      "relative_path": "runs/2026-07-08/workflow-manifest.json",
      "exists": true,
      "size": 93683,
      "modified_at": "2026-07-08T09:37:11+08:00",
      "sha256": "eaa6a2a7aac3f85b72b45a8e08800dfc545f219a215f5566c9fafda35062c0e0"
    },
    {
      "name": "data-lineage.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-08\\data-lineage.json",
      "relative_path": "runs/2026-07-08/data-lineage.json",
      "exists": true,
      "size": 55301,
      "modified_at": "2026-07-08T09:37:11+08:00",
      "sha256": "2713631724a780baa718657eefd216f99e2980edfcb9418ef6fe701d6e2ca733"
    }
  ],
  "summary": {
    "reports_present": 1,
    "json_invalid": 0,
    "candidates_visible": 0,
    "four_layer_visible": 20,
    "rule_upgrade_pending": 0,
    "trader_review_status": "missing",
    "data_sources_ok": 20,
    "warnings": 0,
    "automation_missed": 0,
    "automation_failed": 0,
    "automation_incomplete": 0,
    "lineage_nodes": 38,
    "automation_status_counts": {
      "complete": 1,
      "not_due": 3
    },
    "panel_payload_mode": "full"
  },
  "warnings": [],
  "deferred_full_state_keys": []
};
