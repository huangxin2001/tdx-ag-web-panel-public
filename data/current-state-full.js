window.THREE_PERIOD_PANEL_STATE_FULL = {
  "schema_version": "web-panel-state/v1",
  "generated_at": "2026-07-10T09:37:13+08:00",
  "currentDate": "2026-07-10",
  "current_date": "2026-07-10",
  "panel_payload_mode": "full",
  "project": {
    "name": "tdx-ag-three-period-split",
    "base_dir": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split"
  },
  "run": {
    "date": "2026-07-10",
    "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10",
    "run_id": "20260710-morning-093500751244",
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
      "date": "2026-07-10",
      "generated_at": "",
      "recommendation_mode": "",
      "candidate_count": 0,
      "candidate_universe_count": 0,
      "scan_pool_count": 0,
      "handoff_count": 0,
      "buy_top3_count": 0,
      "json_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\close-report.json",
        "relative_path": "close-report.json",
        "exists": false
      },
      "markdown_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\close-report.md",
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
        "scheduled_at": "2026-07-10T14:50+08:00",
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
      "date": "2026-07-10",
      "generated_at": "2026-07-10T09:36:37.746760+08:00",
      "recommendation_mode": "cash",
      "candidate_count": 0,
      "candidate_universe_count": 0,
      "scan_pool_count": 0,
      "handoff_count": 0,
      "buy_top3_count": 0,
      "json_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-report.json",
        "relative_path": "runs/2026-07-10/morning-report.json",
        "exists": true,
        "size": 531902,
        "modified_at": "2026-07-10T09:37:11+08:00",
        "sha256": "facebe4dd2825439a42e610aa6a089fa560060b6d844d8d0ebd32f8a5bf8f39d"
      },
      "markdown_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-report.md",
        "relative_path": "runs/2026-07-10/morning-report.md",
        "exists": true,
        "size": 6285,
        "modified_at": "2026-07-10T09:37:12+08:00",
        "sha256": "2f60d6903e11a89a37d882ff931b648c424ca686079cffedd885e41c5550cabd"
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
        "full_text": "【结论】\n- 当前判断：空仓等待。\n- 仓位建议：轻仓。\n- 原因：候选不足，不强行凑 买入前三名。\n- 盘前预取：已提前读取昨日对象、隔夜新闻公告和外围/国内背景；目标 0 只。\n- 风险快检：继续持有 0 只，观察 0 只，减仓 0 只，退出 0 只。\n- 早报口径：这些结论只复核昨日尾盘模拟持仓，不重新选股。\n- 昨日尾盘模拟持仓复核（空仓风险快检）：上一收盘报没有正式 Top3 或交接对象，早报只验证空仓判断是否仍成立。\n- 当前边界：不重新选股，不生成买入名单，不向午报新增交接对象。\n- 旁路跟踪：题材观察 3 只、技术观察 0 只、候选评分前排 3 只、低位回流 3 只、早盘驱动 3 只、隔夜涨停观察 3 只、题材轮动观察 3 只、收盘中强承接观察 3 只；只用于复盘比较，不写成买入名单。\n- 对复盘的价值：记录隔夜新闻、公告、竞价和旁路样本状态，供复盘判断是否因为规则过严漏掉强票。\n- 数据缺口：上一收盘报没有留下可验证对象，早报只能观察。\n\n【三闸门】\n- 外围结论：顺风，适合继续观察机会。\n- 关键数据：富时中国A50: +0.06%, 2026-07-10 09:36:23；道琼斯: +0.27%, 2026-07-10 04:57:04；纳斯达克综合: +1.30%, 2026-07-10 05:30:00；标普500: +0.81%, 2026-07-10 04:56:03；VIX恐慌指数期货: +0.75%, 2026-07-10 09:36:22；离岸人民币（香港）: -0.11%, 2026-07-10 09:36:16。\n- 正面证据：美股三大指数平均 +0.79%；纳斯达克偏强 +1.30%；黄金归因偏顺风: 美元走弱/宽松预期主导黄金定价。\n- 负面证据：A50归因偏逆风: 离岸中国资产风险偏好承压；VIX归因偏逆风: 波动率上行，避险升温。\n- 对 A 股影响：外围不是强顺风，只能给结构性方向参考，不能单独支持尾盘主攻。\n- 国内结论：风险优先；国内侧风险偏高，环境偏谨慎；只降低环境置信度和仓位语气，候选是否进入买入名单仍看公告、技术、评分和数据质量。\n- 影响：国内侧偏谨慎，只影响环境置信度和仓位语气，不直接卡买入名单。\n- 板块响应：部分共振；主线强度：弱；证据：芯片.存储芯片 强度 1.0；机器人概念.非周期股 强度 1.0；AI 强度 1.0。\n- 正向催化：\n  2. 摩根大通打造的AI代理在回测中跑赢60/40投资组合；类型：产业催化；可交易性：中；证据：格隆汇7月10日｜投资者如今正日益借助人工智能来执行从选股到风险管理的各种任务，摩根大通研究人员构建了一批AI投资代理，它们会根据不断变化的市况在股票和债券之间切换。在针对过去二十年开展的回溯性测试中，表现最佳的系统每年...\n  3. 机器人概念.非周期股；类型：结构线索；可交易性：中；证据：主线结构线索补充证据\n- 风险提示：\n  2. Z FIN(01168)7月10日起短暂停牌；类型：监管风险；严重度：中；证据：智通财经APP讯，Z FIN(01168)发布公告，该公司股份将于今天(10/7/2026)上午九时正起短暂停止买卖。\n  3. 派格生物(02565)牵手Rani：口服化打开下一代代谢资产的全球重估空间；类型：负面风险；严重度：弱；证据：但正因为其目标并非简单将周制剂变成口服制剂，而是探索低频口服生物药，其潜在产品价值及全球合作空间才更值得关注。 APGP6：如果“减重增肌”再实现口服化 在下一代肥胖症治疗领域，派格生物还布局了具有减重保肌乃至潜在增肌价...\n- 公告背景提示：国内信息里的公告抽样只作环境和风险解释；正式买入准入以候选级公告排雷为准。\n- 风险提示：国内信息只能辅助判断，不能单独作为买点；是否进入买入名单仍要看板块证据、公告排雷、技术面、评分和数据质量；授权样本和离线样本只作背景和风险参考，不等同于全市场完整实时扫描。\n- 公告提示：国内公告抽样没有覆盖全部自选股，只能作背景风险解释；正式买入名单以候选级公告排雷结果为准。\n- 国内信息增强：国内关注方向：芯片、存储芯片、机器人概念。\n- 国内信息增强：当天新增国内证据 6 条，其中 A股政策/产业 6 条，A股公告 0 条。\n- 国内信息增强：国内信息暂未直接命中自选股，作为环境和方向参考。\n- 关键事件：Z FIN(01168)7月10日起短暂停牌；时间：2026-07-10；影响：中；方向：方向待确认；关联：未直接命中自选股。\n- 关键事件：派格生物(02565)牵手Rani：口服化打开下一代代谢资产的全球重估空间；时间：2026-07-10；影响：中；方向：方向待确认；关联：未直接命中自选股。\n- 关键事件：MiniMax完成160亿港币股权类融资 多家国际主权基金、长线基金等参与；时间：2026-07-10；影响：弱；方向：方向待确认；关联：未直接命中自选股。\n- 情绪/趋势：顺风，适合继续观察机会。依据：周五短线接力通常更容易分化，午前和尾盘都要降预期、降仓位\n\n【板块裂变】\n- 数据缺口：未生成可展示板块主线。\n- 事件整理后的关注方向：AI。\n- 事件整理后的风险提醒：Z FIN(01168)7月10日起短暂停牌：需确认是否影响相关个股公告和板块情绪。\n\n【候选结论】\n- 今日不输出买入前三名。\n- 本时段不向下一时段传递验证对象。\n- 原因：候选不足，不强行凑 买入前三名。\n- 无 Top3 时段处理：早报只做昨日尾盘模拟持仓复核和旁路样本跟踪。\n- 旁路样本只进入复盘比较，不进入买入计划或午报交接。\n\n【执行与风控】\n- 仓位建议：轻仓\n- 止盈原则：达到计划收益或冲高回落时先兑现。\n- 止损原则：跌破失效条件或技术面不合格时退出 / 放弃。\n- 失效条件：候选公告、技术面、数据质量、主线映射或尾盘承接恶化。\n\n【铁律提醒】\n- T+1纪律\n- 不打板\n- 涨幅<3%\n- 总仓位受控\n- 绝不补仓死扛\n- 看不清就不买\n",
        "excerpt": "【结论】\n- 当前判断：空仓等待。\n- 仓位建议：轻仓。\n- 原因：候选不足，不强行凑 买入前三名。\n- 盘前预取：已提前读取昨日对象、隔夜新闻公告和外围/国内背景；目标 0 只。\n- 风险快检：继续持有 0 只，观察 0 只，减仓 0 只，退出 0 只。\n- 早报口径：这些结论只复核昨日尾盘模拟持仓，不重新选股。\n- 昨日尾盘模拟持仓复核（空仓风险快检）：上一收盘报没有正式 Top3 或交接对象，早报只验证空仓判断是否仍成立。\n- 当前边界：不重新选股，不生成买入名单，不向午报新增交接对象。\n- 旁路跟踪：题材观察 3 只、技术观察 0 只、候选评分前排 3 只、低位回流 3 只、早盘驱动 3 只、隔夜涨停观察 3 只、题材轮动观察 3 只、收盘中强承接观察 3 只；只用于复盘比较，不写成买入名单。\n- 对复盘的价值：记录隔夜新闻、公告、竞价和旁路样本状态，供复盘判断是否因为规则过严漏掉强票。\n- 数据缺口：上一收盘报没有留下可验证对象，早报只能观察。\n【三闸门】\n- 外围结论：顺风，适合继续观察机会。\n- 关键数据：富时中国A50: +0.06%, 2026-07-10 09:36",
        "focus_text": "",
        "char_count": 2509
      },
      "schedule": {
        "scheduled_time": "09:35",
        "scheduled_at": "2026-07-10T09:35+08:00",
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
      "date": "2026-07-10",
      "generated_at": "",
      "recommendation_mode": "",
      "candidate_count": 0,
      "candidate_universe_count": 0,
      "scan_pool_count": 0,
      "handoff_count": 0,
      "buy_top3_count": 0,
      "json_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\noon-report.json",
        "relative_path": "noon-report.json",
        "exists": false
      },
      "markdown_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\noon-report.md",
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
        "scheduled_at": "2026-07-10T11:35+08:00",
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
      "date": "2026-07-10",
      "generated_at": "",
      "recommendation_mode": "",
      "candidate_count": 0,
      "candidate_universe_count": 0,
      "scan_pool_count": 0,
      "handoff_count": 0,
      "buy_top3_count": 0,
      "json_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\review-report.json",
        "relative_path": "review-report.json",
        "exists": false
      },
      "markdown_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\review-report.md",
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
        "scheduled_at": "2026-07-10T20:00+08:00",
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
      "status": "tailwind",
      "score": 3,
      "evidence_count": 16,
      "missing_count": 0,
      "limitations_count": 0,
      "top_evidence": [
        "富时中国A50: +0.06%, 2026-07-10 09:36:23, sina_hq, a50_cfd",
        "道琼斯: +0.27%, 2026-07-10 04:57:04, sina_hq, index_realtime",
        "纳斯达克综合: +1.30%, 2026-07-10 05:30:00, sina_hq, index_realtime",
        "标普500: +0.81%, 2026-07-10 04:56:03, sina_hq, index_realtime"
      ],
      "reason": "美股三大指数平均 +0.79%；纳斯达克偏强 +1.30%；A50归因偏逆风: 离岸中国资产风险偏好承压；VIX归因偏逆风: 波动率上行，避险升温；黄金归因偏顺风: 美元走弱/宽松预期主导黄金定价；白银归因偏顺风: 工业需求/风险偏好主导白银定价；布伦特原油归因偏顺风: 供应恢复/风险缓和压低油价"
    },
    {
      "key": "domestic",
      "label": "国内闸门",
      "status": "headwind",
      "score": -4,
      "evidence_count": 6,
      "missing_count": 0,
      "limitations_count": 0,
      "top_evidence": [
        "policy_signal: Z FIN(01168)7月10日起短暂停牌",
        "policy_signal: 派格生物(02565)牵手Rani：口服化打开下一代代谢资产的全球重估空间",
        "industry_news_signal: 摩根大通打造的AI代理在回测中跑赢60/40投资组合",
        "industry_news_signal: 银河证券：PPI年内高点或将临近 价格传导仍待修复"
      ],
      "reason": "国内侧负面/监管/公告风险占优"
    },
    {
      "key": "emotion_trend",
      "label": "情绪/趋势闸门",
      "status": "tailwind",
      "score": 7,
      "evidence_count": 11,
      "missing_count": 0,
      "limitations_count": 0,
      "top_evidence": [
        "今天是周五，短线接力强度按偏谨慎处理",
        "指数趋势flat（涨跌幅 0.36%）。",
        "盘中趋势偏横盘（15分钟涨跌幅 1.37%）。",
        "成交额信号偏逆风。"
      ],
      "reason": "指数趋势flat（涨跌幅 0.36%）；盘中趋势偏横盘（15分钟涨跌幅 1.37%）；成交额信号偏逆风；涨停约 5 只，跌停约 2 只；连板结构flat，最高约 3 连板。"
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
        "strategy_group": "a_theme_watch",
        "strategy_group_cn": "A类主线/题材逻辑",
        "symbol": "600536",
        "name": "中国软件",
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
          "intraday_price": 28.06,
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
        "theme": "行业应用软件",
        "theme_display": "行业应用软件",
        "industry": "计算机-软件服务",
        "latest_snapshot": {
          "change_pct": -1.89,
          "open_change_pct": -0.98,
          "turnover_rate": 0.23,
          "volume_ratio": 4.54,
          "amount": 5422.68,
          "last_price": 28.06,
          "theme": "行业应用软件",
          "industry": "计算机-软件服务"
        },
        "display_reason": "消息/题材驱动候选，需技术面继续确认",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
        "mainline_theme_display": "行业应用软件",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 2,
        "strategy_group": "a_theme_watch",
        "strategy_group_cn": "A类主线/题材逻辑",
        "symbol": "600835",
        "name": "上海机电",
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
        "score": 0.605,
        "source_score": 0.605,
        "normalized_score": 60.5,
        "unified_score": 60.5,
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
          "intraday_price": 21.65,
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
        "theme": "楼宇设备",
        "theme_display": "楼宇设备",
        "industry": "机械设备-专用设备",
        "latest_snapshot": {
          "change_pct": 0.19,
          "open_change_pct": 0.28,
          "turnover_rate": 0.07,
          "volume_ratio": 2.52,
          "amount": 1282.76,
          "last_price": 21.65,
          "theme": "楼宇设备",
          "industry": "机械设备-专用设备"
        },
        "display_reason": "消息/题材驱动候选，需技术面继续确认",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
        "mainline_theme_display": "楼宇设备",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 3,
        "strategy_group": "a_theme_watch",
        "strategy_group_cn": "A类主线/题材逻辑",
        "symbol": "601999",
        "name": "出版传媒",
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
          "intraday_price": 5.69,
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
        "theme": "大众出版",
        "theme_display": "大众出版",
        "industry": "传媒-出版业",
        "latest_snapshot": {
          "change_pct": -0.87,
          "open_change_pct": 0.17,
          "turnover_rate": 0.05,
          "volume_ratio": 2.46,
          "amount": 142.7,
          "last_price": 5.69,
          "theme": "大众出版",
          "industry": "传媒-出版业"
        },
        "display_reason": "消息/题材驱动候选，需技术面继续确认",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
        "mainline_theme_display": "大众出版",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 4,
        "strategy_group": "score_front_rejected",
        "strategy_group_cn": "候选评分前排逻辑",
        "symbol": "002039",
        "name": "黔源电力",
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
          "intraday_price": 19.26,
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
        "theme": "水力发电",
        "theme_display": "水力发电",
        "industry": "公用事业-电力",
        "latest_snapshot": {
          "change_pct": -3.46,
          "open_change_pct": -0.95,
          "turnover_rate": 0.85,
          "volume_ratio": 14.44,
          "amount": 6976.53,
          "last_price": 19.26,
          "theme": "水力发电",
          "industry": "公用事业-电力"
        },
        "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
        "mainline_theme_display": "水力发电",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 5,
        "strategy_group": "score_front_rejected",
        "strategy_group_cn": "候选评分前排逻辑",
        "symbol": "601999",
        "name": "出版传媒",
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
          "intraday_price": 5.69,
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
        "theme": "大众出版",
        "theme_display": "大众出版",
        "industry": "传媒-出版业",
        "latest_snapshot": {
          "change_pct": -0.87,
          "open_change_pct": 0.17,
          "turnover_rate": 0.05,
          "volume_ratio": 2.46,
          "amount": 142.7,
          "last_price": 5.69,
          "theme": "大众出版",
          "industry": "传媒-出版业"
        },
        "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
        "mainline_theme_display": "大众出版",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 6,
        "strategy_group": "score_front_rejected",
        "strategy_group_cn": "候选评分前排逻辑",
        "symbol": "603139",
        "name": "康惠股份",
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
          "intraday_price": 40.56,
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
        "theme": "中药",
        "theme_display": "中药",
        "industry": "医药医疗-中药",
        "latest_snapshot": {
          "change_pct": 0.75,
          "open_change_pct": -0.35,
          "turnover_rate": 0.22,
          "volume_ratio": 2.22,
          "amount": 875.32,
          "last_price": 40.56,
          "theme": "中药",
          "industry": "医药医疗-中药"
        },
        "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
        "mainline_theme_display": "中药",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 7,
        "strategy_group": "low_reflow_watch",
        "strategy_group_cn": "低位回流观察",
        "symbol": "001230",
        "name": "劲旅环境",
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
        "score": 23.496742,
        "source_score": 23.496742,
        "normalized_score": 23.497,
        "unified_score": 23.497,
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
            "change_pct": -0.33,
            "volume_ratio": 1.79,
            "turnover_rate": 9.04,
            "amount": 17177.0,
            "open_grab_pct": 1.61,
            "attack_wave_pct": 8.57
          },
          "risk_penalties": [],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "low_reflow_watch_result": {
          "next_day_change_pct": 0.84,
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
          "intraday_price": 18.06,
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
        "theme": "固废治理",
        "theme_display": "固废治理",
        "industry": "环保-环境治理",
        "latest_snapshot": {
          "change_pct": 0.84,
          "open_change_pct": -0.06,
          "turnover_rate": 1.5,
          "volume_ratio": 7.81,
          "amount": 3017.24,
          "last_price": 18.06,
          "theme": "固废治理",
          "industry": "环保-环境治理"
        },
        "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
        "mainline_theme_display": "固废治理",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 8,
        "strategy_group": "low_reflow_watch",
        "strategy_group_cn": "低位回流观察",
        "symbol": "002885",
        "name": "京泉华",
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
        "score": 22.902316,
        "source_score": 22.902316,
        "normalized_score": 22.902,
        "unified_score": 22.902,
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
            "change_pct": 2.34,
            "volume_ratio": 0.96,
            "turnover_rate": 9.84,
            "amount": 79006.57,
            "open_grab_pct": 3.0,
            "attack_wave_pct": 9.11
          },
          "risk_penalties": [
            "公告状态未完全确认",
            "量能偏弱"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "low_reflow_watch_result": {
          "next_day_change_pct": 1.04,
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
          "intraday_price": 35.8,
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
        "theme": "其他电子",
        "theme_display": "其他电子",
        "industry": "电子-其他电子",
        "latest_snapshot": {
          "change_pct": 1.04,
          "open_change_pct": -0.68,
          "turnover_rate": 0.75,
          "volume_ratio": 2.57,
          "amount": 6281.87,
          "last_price": 35.8,
          "theme": "其他电子",
          "industry": "电子-其他电子"
        },
        "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
        "mainline_theme_display": "其他电子",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 9,
        "strategy_group": "low_reflow_watch",
        "strategy_group_cn": "低位回流观察",
        "symbol": "603610",
        "name": "麒盛科技",
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
        "score": 21.958719,
        "source_score": 21.958719,
        "normalized_score": 21.959,
        "unified_score": 21.959,
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
            "change_pct": 1.04,
            "volume_ratio": 1.2,
            "turnover_rate": 4.55,
            "amount": 22287.42,
            "open_grab_pct": -0.49,
            "attack_wave_pct": 8.68
          },
          "risk_penalties": [
            "公告状态未完全确认"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "low_reflow_watch_result": {
          "next_day_change_pct": 1.52,
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
          "intraday_price": 14.7,
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
        "theme": "家具",
        "theme_display": "家具",
        "industry": "轻工制造-家居用品",
        "latest_snapshot": {
          "change_pct": 1.52,
          "open_change_pct": 2.0,
          "turnover_rate": 0.66,
          "volume_ratio": 5.9,
          "amount": 3439.78,
          "last_price": 14.7,
          "theme": "家具",
          "industry": "轻工制造-家居用品"
        },
        "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
        "mainline_theme_display": "家具",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 10,
        "strategy_group": "open_drive_watch",
        "strategy_group_cn": "早盘驱动观察",
        "symbol": "000960",
        "name": "锡业股份",
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
        "score": 21.17878,
        "source_score": 21.17878,
        "normalized_score": 21.179,
        "unified_score": 21.179,
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
            "change_pct": 2.86,
            "open_drive_pct": 0.78,
            "volume_ratio": 1.01,
            "turnover_rate": 4.65,
            "amount": 271840.09,
            "attack_wave_pct": 8.43,
            "pullback_from_high_pct": 0.22
          },
          "risk_penalties": [],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "open_drive_watch_result": {
          "next_day_change_pct": -1.1,
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
          "intraday_price": 36.86,
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
        "theme": "其他金属",
        "theme_display": "其他金属",
        "industry": "有色-稀有金属",
        "latest_snapshot": {
          "change_pct": -1.1,
          "open_change_pct": -0.38,
          "turnover_rate": 0.41,
          "volume_ratio": 3.0,
          "amount": 25061.98,
          "last_price": 36.86,
          "theme": "其他金属",
          "industry": "有色-稀有金属"
        },
        "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
        "mainline_theme_display": "其他金属",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "000960",
          "name": "锡业股份",
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
          "action_hint": "暂无龙虾结论",
          "status": "missing"
        }
      },
      {
        "rank": 11,
        "strategy_group": "open_drive_watch",
        "strategy_group_cn": "早盘驱动观察",
        "symbol": "002518",
        "name": "科士达",
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
        "score": 20.046194,
        "source_score": 20.046194,
        "normalized_score": 20.046,
        "unified_score": 20.046,
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
            "change_pct": 2.94,
            "open_drive_pct": 1.14,
            "volume_ratio": 1.0,
            "turnover_rate": 2.77,
            "amount": 64246.85,
            "attack_wave_pct": 6.83,
            "pullback_from_high_pct": 0.31
          },
          "risk_penalties": [],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "open_drive_watch_result": {
          "next_day_change_pct": 1.11,
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
          "intraday_price": 42.76,
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
        "theme": "其他发电设备",
        "theme_display": "其他发电设备",
        "industry": "电力设备-其他发电设备",
        "latest_snapshot": {
          "change_pct": 1.11,
          "open_change_pct": 0.0,
          "turnover_rate": 0.21,
          "volume_ratio": 2.52,
          "amount": 5108.35,
          "last_price": 42.76,
          "theme": "其他发电设备",
          "industry": "电力设备-其他发电设备"
        },
        "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
        "mainline_theme_display": "其他发电设备",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "002518",
          "name": "科士达",
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
          "action_hint": "暂无龙虾结论",
          "status": "missing"
        }
      },
      {
        "rank": 12,
        "strategy_group": "open_drive_watch",
        "strategy_group_cn": "早盘驱动观察",
        "symbol": "002876",
        "name": "三利谱",
        "source_period": "morning",
        "tracking_scope": "side_channel_only",
        "return_tracking_scope": "side_channel_only",
        "entry_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
        "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
        "tracking_status": "verified",
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
        "score": 18.783281,
        "source_score": 18.783281,
        "normalized_score": 18.783,
        "unified_score": 18.783,
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
            "change_pct": 0.84,
            "open_drive_pct": 1.63,
            "volume_ratio": 0.94,
            "turnover_rate": 5.41,
            "amount": 24290.54,
            "attack_wave_pct": 6.52,
            "pullback_from_high_pct": 0.3
          },
          "risk_penalties": [
            "公告状态未完全确认",
            "量能偏弱"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "open_drive_watch_result": {
          "next_day_change_pct": 7.13,
          "success": true,
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
          "intraday_price": 33.21,
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
        "theme": "光学元件",
        "theme_display": "光学元件",
        "industry": "电子-光学光电",
        "latest_snapshot": {
          "change_pct": 7.13,
          "open_change_pct": 1.45,
          "turnover_rate": 1.54,
          "volume_ratio": 9.63,
          "amount": 7400.74,
          "last_price": 33.21,
          "theme": "光学元件",
          "industry": "电子-光学光电"
        },
        "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
        "mainline_theme_display": "光学元件",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "002876",
          "name": "三利谱",
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
          "action_hint": "暂无龙虾结论",
          "status": "missing"
        }
      },
      {
        "rank": 13,
        "strategy_group": "overnight_limit_watch",
        "strategy_group_cn": "隔夜涨停观察",
        "symbol": "002222",
        "name": "福晶科技",
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
        "score": 56.238081,
        "source_score": 56.238081,
        "normalized_score": 56.238,
        "unified_score": 56.238,
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
            "change_pct": 6.65,
            "high_pct": 7.03,
            "pullback_from_high_pct": 0.38,
            "volume_ratio": 1.27,
            "turnover_rate": 6.1,
            "amount": 222092.34,
            "attack_wave_pct": 10.08,
            "open_grab_pct": 1.21,
            "year_limit_up_days": 8.0,
            "tail_volume_support": true
          },
          "risk_penalties": [],
          "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
          "next_day_success_threshold": 9.0
        },
        "overnight_limit_watch_result": {
          "next_day_change_pct": 1.59,
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
          "intraday_price": 82.66,
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
        "theme": "光学元件",
        "theme_display": "光学元件",
        "industry": "电子-光学光电",
        "latest_snapshot": {
          "change_pct": 1.59,
          "open_change_pct": 0.25,
          "turnover_rate": 0.62,
          "volume_ratio": 4.02,
          "amount": 23902.53,
          "last_price": 82.66,
          "theme": "光学元件",
          "industry": "电子-光学光电"
        },
        "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
        "mainline_theme_display": "光学元件",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "002222",
          "name": "福晶科技",
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
          "action_hint": "暂无龙虾结论",
          "status": "missing"
        }
      },
      {
        "rank": 14,
        "strategy_group": "overnight_limit_watch",
        "strategy_group_cn": "隔夜涨停观察",
        "symbol": "002046",
        "name": "国机精工",
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
        "score": 55.847688,
        "source_score": 55.847688,
        "normalized_score": 55.848,
        "unified_score": 55.848,
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
            "change_pct": 7.31,
            "high_pct": 7.52,
            "pullback_from_high_pct": 0.21,
            "volume_ratio": 0.89,
            "turnover_rate": 2.89,
            "amount": 96963.73,
            "attack_wave_pct": 9.45,
            "open_grab_pct": 2.03,
            "year_limit_up_days": 21.0,
            "tail_volume_support": true
          },
          "risk_penalties": [],
          "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
          "next_day_success_threshold": 9.0
        },
        "overnight_limit_watch_result": {
          "next_day_change_pct": 2.38,
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
          "intraday_price": 67.66,
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
          "change_pct": 2.38,
          "open_change_pct": 0.32,
          "turnover_rate": 0.31,
          "volume_ratio": 3.57,
          "amount": 11175.39,
          "last_price": 67.66,
          "theme": "机械基础件",
          "industry": "机械设备-通用设备"
        },
        "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "symbol": "002046",
          "name": "国机精工",
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
          "action_hint": "暂无龙虾结论",
          "status": "missing"
        }
      },
      {
        "rank": 15,
        "strategy_group": "overnight_limit_watch",
        "strategy_group_cn": "隔夜涨停观察",
        "symbol": "003031",
        "name": "中瓷电子",
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
        "score": 55.419773,
        "source_score": 55.419773,
        "normalized_score": 55.42,
        "unified_score": 55.42,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {
          "model": "overnight_limit_watch_v1",
          "rank": 3,
          "selection_status": "picked",
          "bucket": "wide_limit_rehearsal",
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
            "change_pct": 5.95,
            "high_pct": 6.11,
            "pullback_from_high_pct": 0.16,
            "volume_ratio": 1.28,
            "turnover_rate": 2.94,
            "amount": 144986.5,
            "attack_wave_pct": 8.54,
            "open_grab_pct": 0.54,
            "year_limit_up_days": 12.0,
            "tail_volume_support": true
          },
          "risk_penalties": [],
          "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
          "next_day_success_threshold": 9.0
        },
        "overnight_limit_watch_result": {
          "next_day_change_pct": 2.27,
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
          "intraday_price": 153.91,
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
        "theme": "其他电子",
        "theme_display": "其他电子",
        "industry": "电子-其他电子",
        "latest_snapshot": {
          "change_pct": 2.27,
          "open_change_pct": 1.0,
          "turnover_rate": 0.45,
          "volume_ratio": 6.47,
          "amount": 23562.07,
          "last_price": 153.91,
          "theme": "其他电子",
          "industry": "电子-其他电子"
        },
        "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
        "mainline_theme_display": "其他电子",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "003031",
          "name": "中瓷电子",
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
          "action_hint": "暂无龙虾结论",
          "status": "missing"
        }
      },
      {
        "rank": 16,
        "strategy_group": "theme_rotation_watch",
        "strategy_group_cn": "题材轮动观察",
        "symbol": "603175",
        "name": "超颖电子",
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
        "score": 31.751532,
        "source_score": 31.751532,
        "normalized_score": 31.752,
        "unified_score": 31.752,
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
          "theme": "PCB",
          "theme_stats": {
            "theme": "PCB",
            "count": 9,
            "active_count": 9,
            "strong_count": 9,
            "positive_count": 9,
            "avg_change_pct": 6.137778,
            "avg_volume_ratio": 1.117778,
            "total_amount": 4041815.96
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
            "theme": "PCB",
            "change_pct": 3.95,
            "volume_ratio": 0.95,
            "turnover_rate": 7.3,
            "amount": 26701.63,
            "attack_wave_pct": 7.32,
            "open_grab_pct": 0.0,
            "pullback_from_high_pct": 0.23
          },
          "risk_penalties": [],
          "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
          "next_day_success_threshold": 3.0
        },
        "theme_rotation_watch_result": {
          "next_day_change_pct": 0.51,
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
          "intraday_price": 82.97,
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
          "change_pct": 0.51,
          "open_change_pct": 0.4,
          "turnover_rate": 0.52,
          "volume_ratio": 2.47,
          "amount": 1972.92,
          "last_price": 82.97,
          "theme": "PCB",
          "industry": "电子-元器件"
        },
        "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "symbol": "603175",
          "name": "超颖电子",
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
          "action_hint": "暂无龙虾结论",
          "status": "missing"
        }
      },
      {
        "rank": 17,
        "strategy_group": "theme_rotation_watch",
        "strategy_group_cn": "题材轮动观察",
        "symbol": "603328",
        "name": "依顿电子",
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
        "score": 31.252482,
        "source_score": 31.252482,
        "normalized_score": 31.252,
        "unified_score": 31.252,
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
          "theme": "PCB",
          "theme_stats": {
            "theme": "PCB",
            "count": 9,
            "active_count": 9,
            "strong_count": 9,
            "positive_count": 9,
            "avg_change_pct": 6.137778,
            "avg_volume_ratio": 1.117778,
            "total_amount": 4041815.96
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
            "theme": "PCB",
            "change_pct": 2.01,
            "volume_ratio": 1.23,
            "turnover_rate": 2.64,
            "amount": 28561.47,
            "attack_wave_pct": 6.79,
            "open_grab_pct": 0.0,
            "pullback_from_high_pct": 0.18
          },
          "risk_penalties": [
            "公告状态未完全确认"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
          "next_day_success_threshold": 3.0
        },
        "theme_rotation_watch_result": {
          "next_day_change_pct": 0.63,
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
          "intraday_price": 11.23,
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
          "change_pct": 0.63,
          "open_change_pct": 0.0,
          "turnover_rate": 0.23,
          "volume_ratio": 3.41,
          "amount": 2543.94,
          "last_price": 11.23,
          "theme": "PCB",
          "industry": "电子-元器件"
        },
        "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "symbol": "603328",
          "name": "依顿电子",
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
          "action_hint": "暂无龙虾结论",
          "status": "missing"
        }
      },
      {
        "rank": 18,
        "strategy_group": "theme_rotation_watch",
        "strategy_group_cn": "题材轮动观察",
        "symbol": "002134",
        "name": "天津普林",
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
        "score": 31.025012,
        "source_score": 31.025012,
        "normalized_score": 31.025,
        "unified_score": 31.025,
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
          "theme": "PCB",
          "theme_stats": {
            "theme": "PCB",
            "count": 9,
            "active_count": 9,
            "strong_count": 9,
            "positive_count": 9,
            "avg_change_pct": 6.137778,
            "avg_volume_ratio": 1.117778,
            "total_amount": 4041815.96
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
            "theme": "PCB",
            "change_pct": 2.17,
            "volume_ratio": 1.14,
            "turnover_rate": 6.92,
            "amount": 48133.59,
            "attack_wave_pct": 4.48,
            "open_grab_pct": 0.7,
            "pullback_from_high_pct": 2.36
          },
          "risk_penalties": [],
          "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
          "next_day_success_threshold": 3.0
        },
        "theme_rotation_watch_result": {
          "next_day_change_pct": 0.82,
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
          "intraday_price": 28.41,
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
          "change_pct": 0.82,
          "open_change_pct": 0.28,
          "turnover_rate": 0.53,
          "volume_ratio": 2.86,
          "amount": 3725.23,
          "last_price": 28.41,
          "theme": "PCB",
          "industry": "电子-元器件"
        },
        "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "symbol": "002134",
          "name": "天津普林",
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
          "action_hint": "暂无龙虾结论",
          "status": "missing"
        }
      },
      {
        "rank": 19,
        "strategy_group": "close_strength_hold_watch",
        "strategy_group_cn": "收盘中强承接观察",
        "symbol": "600536",
        "name": "中国软件",
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
          "eligible_for_handoff": false
        },
        "score": 17.066632,
        "source_score": 17.066632,
        "normalized_score": 17.067,
        "unified_score": 17.067,
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
            "change_pct": 2.98,
            "high_pct": 3.74,
            "fade_from_high_pct": -0.73,
            "volume_ratio": 1.35,
            "turnover_rate": 2.19,
            "amount": 52377.5,
            "attack_wave_pct": 5.02,
            "open_grab_pct": -0.28,
            "change_20d_pct": -16.97,
            "year_limit_up_days": 2.0
          },
          "risk_penalties": [],
          "next_day_success_standard": "next_day_change_pct >= 3；辅助观察次日是否延续中强承接",
          "next_day_success_threshold": 3.0
        },
        "close_strength_hold_watch_result": {
          "next_day_change_pct": -1.89,
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
          "intraday_price": 28.06,
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
        "theme": "行业应用软件",
        "theme_display": "行业应用软件",
        "industry": "计算机-软件服务",
        "latest_snapshot": {
          "change_pct": -1.89,
          "open_change_pct": -0.98,
          "turnover_rate": 0.23,
          "volume_ratio": 4.54,
          "amount": 5422.68,
          "last_price": 28.06,
          "theme": "行业应用软件",
          "industry": "计算机-软件服务"
        },
        "display_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
        "mainline_theme_display": "行业应用软件",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 20,
        "strategy_group": "close_strength_hold_watch",
        "strategy_group_cn": "收盘中强承接观察",
        "symbol": "605090",
        "name": "九丰能源",
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
        "score": 16.582139,
        "source_score": 16.582139,
        "normalized_score": 16.582,
        "unified_score": 16.582,
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
          "rank": 2,
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
            "change_pct": 3.34,
            "high_pct": 4.59,
            "fade_from_high_pct": -1.2,
            "volume_ratio": 1.18,
            "turnover_rate": 2.05,
            "amount": 48546.28,
            "attack_wave_pct": 5.9,
            "open_grab_pct": 1.58,
            "change_20d_pct": -2.56,
            "year_limit_up_days": 3.0
          },
          "risk_penalties": [],
          "next_day_success_standard": "next_day_change_pct >= 3；辅助观察次日是否延续中强承接",
          "next_day_success_threshold": 3.0
        },
        "close_strength_hold_watch_result": {
          "next_day_change_pct": -2.37,
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
          "intraday_price": 33.71,
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
        "theme": "燃气",
        "theme_display": "燃气",
        "industry": "公用事业-燃气",
        "latest_snapshot": {
          "change_pct": -2.37,
          "open_change_pct": -1.1,
          "turnover_rate": 0.19,
          "volume_ratio": 3.56,
          "amount": 4434.78,
          "last_price": 33.71,
          "theme": "燃气",
          "industry": "公用事业-燃气"
        },
        "display_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
        "mainline_theme_display": "燃气",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 21,
        "strategy_group": "close_strength_hold_watch",
        "strategy_group_cn": "收盘中强承接观察",
        "symbol": "002129",
        "name": "TCL中环",
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
        "score": 16.264,
        "source_score": 16.264,
        "normalized_score": 16.264,
        "unified_score": 16.264,
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
          "rank": 3,
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
            "change_pct": 3.46,
            "high_pct": 3.84,
            "fade_from_high_pct": -0.36,
            "volume_ratio": 1.0,
            "turnover_rate": 7.73,
            "amount": 339943.84,
            "attack_wave_pct": 4.34,
            "open_grab_pct": 1.41,
            "change_20d_pct": 9.18,
            "year_limit_up_days": 8.0
          },
          "risk_penalties": [
            "公告状态未完全确认"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3；辅助观察次日是否延续中强承接",
          "next_day_success_threshold": 3.0
        },
        "close_strength_hold_watch_result": {
          "next_day_change_pct": 1.72,
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
          "intraday_price": 11.22,
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
        "theme": "光伏硅片",
        "theme_display": "光伏硅片",
        "industry": "电力设备-光伏设备",
        "latest_snapshot": {
          "change_pct": 1.72,
          "open_change_pct": 0.0,
          "turnover_rate": 1.25,
          "volume_ratio": 5.42,
          "amount": 56312.83,
          "last_price": 11.22,
          "theme": "光伏硅片",
          "industry": "电力设备-光伏设备"
        },
        "display_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-10T09:37:11+08:00",
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
        "mainline_theme_display": "光伏硅片",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      }
    ],
    "display_source": "four_layer_tracking",
    "raw_record_count": 21,
    "raw_strategy_counts": {
      "a_theme_watch": 3,
      "score_front_rejected": 3,
      "low_reflow_watch": 3,
      "open_drive_watch": 3,
      "overnight_limit_watch": 3,
      "theme_rotation_watch": 3,
      "close_strength_hold_watch": 3
    },
    "summary": {
      "groups": {
        "formal_top3": {
          "label": "正式 Top3 逻辑",
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
            "false_positive": 2,
            "price_missing": 0,
            "tracked": 0,
            "verified": 1
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
      "record_count": 21,
      "latest_snapshot_match_count": 21,
      "report_match_count": 0,
      "not_found_count": 0,
      "return_policy": "正式收益只统计 Top3；题材观察、技术观察、候选评分前排、低位回流观察、早盘驱动观察、隔夜涨停观察、题材轮动观察和收盘中强承接观察只跟踪面板展示样本，旁路收益也只按这些样本统计。",
      "notice_supplement_completed": true,
      "notice_supplement_required_count": 5,
      "notice_supplement_incomplete_count": 0
    },
    "file": {
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\four-layer-tracking.morning.json",
      "relative_path": "runs/2026-07-10/four-layer-tracking.morning.json",
      "exists": true,
      "size": 124988,
      "modified_at": "2026-07-10T09:37:11+08:00",
      "sha256": "2b33f0bdca5b785e82a9e60dc8a1c346e48a27b45c915b82df03fb190dd59bac"
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
          "strategy_group": "a_theme_watch",
          "strategy_group_cn": "A类主线/题材逻辑",
          "symbol": "600536",
          "name": "中国软件",
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
            "intraday_price": 28.06,
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
          "theme": "行业应用软件",
          "theme_display": "行业应用软件",
          "industry": "计算机-软件服务",
          "latest_snapshot": {
            "change_pct": -1.89,
            "open_change_pct": -0.98,
            "turnover_rate": 0.23,
            "volume_ratio": 4.54,
            "amount": 5422.68,
            "last_price": 28.06,
            "theme": "行业应用软件",
            "industry": "计算机-软件服务"
          },
          "display_reason": "消息/题材驱动候选，需技术面继续确认",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "mainline_theme_display": "行业应用软件",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 2,
          "strategy_group": "a_theme_watch",
          "strategy_group_cn": "A类主线/题材逻辑",
          "symbol": "600835",
          "name": "上海机电",
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
          "score": 0.605,
          "source_score": 0.605,
          "normalized_score": 60.5,
          "unified_score": 60.5,
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
            "intraday_price": 21.65,
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
          "theme": "楼宇设备",
          "theme_display": "楼宇设备",
          "industry": "机械设备-专用设备",
          "latest_snapshot": {
            "change_pct": 0.19,
            "open_change_pct": 0.28,
            "turnover_rate": 0.07,
            "volume_ratio": 2.52,
            "amount": 1282.76,
            "last_price": 21.65,
            "theme": "楼宇设备",
            "industry": "机械设备-专用设备"
          },
          "display_reason": "消息/题材驱动候选，需技术面继续确认",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "mainline_theme_display": "楼宇设备",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 3,
          "strategy_group": "a_theme_watch",
          "strategy_group_cn": "A类主线/题材逻辑",
          "symbol": "601999",
          "name": "出版传媒",
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
            "intraday_price": 5.69,
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
          "theme": "大众出版",
          "theme_display": "大众出版",
          "industry": "传媒-出版业",
          "latest_snapshot": {
            "change_pct": -0.87,
            "open_change_pct": 0.17,
            "turnover_rate": 0.05,
            "volume_ratio": 2.46,
            "amount": 142.7,
            "last_price": 5.69,
            "theme": "大众出版",
            "industry": "传媒-出版业"
          },
          "display_reason": "消息/题材驱动候选，需技术面继续确认",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "mainline_theme_display": "大众出版",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 4,
          "strategy_group": "score_front_rejected",
          "strategy_group_cn": "候选评分前排逻辑",
          "symbol": "002039",
          "name": "黔源电力",
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
            "intraday_price": 19.26,
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
          "theme": "水力发电",
          "theme_display": "水力发电",
          "industry": "公用事业-电力",
          "latest_snapshot": {
            "change_pct": -3.46,
            "open_change_pct": -0.95,
            "turnover_rate": 0.85,
            "volume_ratio": 14.44,
            "amount": 6976.53,
            "last_price": 19.26,
            "theme": "水力发电",
            "industry": "公用事业-电力"
          },
          "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "mainline_theme_display": "水力发电",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 5,
          "strategy_group": "score_front_rejected",
          "strategy_group_cn": "候选评分前排逻辑",
          "symbol": "601999",
          "name": "出版传媒",
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
            "intraday_price": 5.69,
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
          "theme": "大众出版",
          "theme_display": "大众出版",
          "industry": "传媒-出版业",
          "latest_snapshot": {
            "change_pct": -0.87,
            "open_change_pct": 0.17,
            "turnover_rate": 0.05,
            "volume_ratio": 2.46,
            "amount": 142.7,
            "last_price": 5.69,
            "theme": "大众出版",
            "industry": "传媒-出版业"
          },
          "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "mainline_theme_display": "大众出版",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 6,
          "strategy_group": "score_front_rejected",
          "strategy_group_cn": "候选评分前排逻辑",
          "symbol": "603139",
          "name": "康惠股份",
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
            "intraday_price": 40.56,
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
          "theme": "中药",
          "theme_display": "中药",
          "industry": "医药医疗-中药",
          "latest_snapshot": {
            "change_pct": 0.75,
            "open_change_pct": -0.35,
            "turnover_rate": 0.22,
            "volume_ratio": 2.22,
            "amount": 875.32,
            "last_price": 40.56,
            "theme": "中药",
            "industry": "医药医疗-中药"
          },
          "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "mainline_theme_display": "中药",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 7,
          "strategy_group": "low_reflow_watch",
          "strategy_group_cn": "低位回流观察",
          "symbol": "001230",
          "name": "劲旅环境",
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
          "score": 23.496742,
          "source_score": 23.496742,
          "normalized_score": 23.497,
          "unified_score": 23.497,
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
              "change_pct": -0.33,
              "volume_ratio": 1.79,
              "turnover_rate": 9.04,
              "amount": 17177.0,
              "open_grab_pct": 1.61,
              "attack_wave_pct": 8.57
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "low_reflow_watch_result": {
            "next_day_change_pct": 0.84,
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
            "intraday_price": 18.06,
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
          "theme": "固废治理",
          "theme_display": "固废治理",
          "industry": "环保-环境治理",
          "latest_snapshot": {
            "change_pct": 0.84,
            "open_change_pct": -0.06,
            "turnover_rate": 1.5,
            "volume_ratio": 7.81,
            "amount": 3017.24,
            "last_price": 18.06,
            "theme": "固废治理",
            "industry": "环保-环境治理"
          },
          "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "mainline_theme_display": "固废治理",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 8,
          "strategy_group": "low_reflow_watch",
          "strategy_group_cn": "低位回流观察",
          "symbol": "002885",
          "name": "京泉华",
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
          "score": 22.902316,
          "source_score": 22.902316,
          "normalized_score": 22.902,
          "unified_score": 22.902,
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
              "change_pct": 2.34,
              "volume_ratio": 0.96,
              "turnover_rate": 9.84,
              "amount": 79006.57,
              "open_grab_pct": 3.0,
              "attack_wave_pct": 9.11
            },
            "risk_penalties": [
              "公告状态未完全确认",
              "量能偏弱"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "low_reflow_watch_result": {
            "next_day_change_pct": 1.04,
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
            "intraday_price": 35.8,
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
          "theme": "其他电子",
          "theme_display": "其他电子",
          "industry": "电子-其他电子",
          "latest_snapshot": {
            "change_pct": 1.04,
            "open_change_pct": -0.68,
            "turnover_rate": 0.75,
            "volume_ratio": 2.57,
            "amount": 6281.87,
            "last_price": 35.8,
            "theme": "其他电子",
            "industry": "电子-其他电子"
          },
          "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "mainline_theme_display": "其他电子",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 9,
          "strategy_group": "low_reflow_watch",
          "strategy_group_cn": "低位回流观察",
          "symbol": "603610",
          "name": "麒盛科技",
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
          "score": 21.958719,
          "source_score": 21.958719,
          "normalized_score": 21.959,
          "unified_score": 21.959,
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
              "change_pct": 1.04,
              "volume_ratio": 1.2,
              "turnover_rate": 4.55,
              "amount": 22287.42,
              "open_grab_pct": -0.49,
              "attack_wave_pct": 8.68
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "low_reflow_watch_result": {
            "next_day_change_pct": 1.52,
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
            "intraday_price": 14.7,
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
          "theme": "家具",
          "theme_display": "家具",
          "industry": "轻工制造-家居用品",
          "latest_snapshot": {
            "change_pct": 1.52,
            "open_change_pct": 2.0,
            "turnover_rate": 0.66,
            "volume_ratio": 5.9,
            "amount": 3439.78,
            "last_price": 14.7,
            "theme": "家具",
            "industry": "轻工制造-家居用品"
          },
          "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "mainline_theme_display": "家具",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 10,
          "strategy_group": "open_drive_watch",
          "strategy_group_cn": "早盘驱动观察",
          "symbol": "000960",
          "name": "锡业股份",
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
          "score": 21.17878,
          "source_score": 21.17878,
          "normalized_score": 21.179,
          "unified_score": 21.179,
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
              "change_pct": 2.86,
              "open_drive_pct": 0.78,
              "volume_ratio": 1.01,
              "turnover_rate": 4.65,
              "amount": 271840.09,
              "attack_wave_pct": 8.43,
              "pullback_from_high_pct": 0.22
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "open_drive_watch_result": {
            "next_day_change_pct": -1.1,
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
            "intraday_price": 36.86,
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
          "theme": "其他金属",
          "theme_display": "其他金属",
          "industry": "有色-稀有金属",
          "latest_snapshot": {
            "change_pct": -1.1,
            "open_change_pct": -0.38,
            "turnover_rate": 0.41,
            "volume_ratio": 3.0,
            "amount": 25061.98,
            "last_price": 36.86,
            "theme": "其他金属",
            "industry": "有色-稀有金属"
          },
          "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "mainline_theme_display": "其他金属",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "000960",
            "name": "锡业股份",
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
            "action_hint": "暂无龙虾结论",
            "status": "missing"
          }
        },
        {
          "rank": 11,
          "strategy_group": "open_drive_watch",
          "strategy_group_cn": "早盘驱动观察",
          "symbol": "002518",
          "name": "科士达",
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
          "score": 20.046194,
          "source_score": 20.046194,
          "normalized_score": 20.046,
          "unified_score": 20.046,
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
              "change_pct": 2.94,
              "open_drive_pct": 1.14,
              "volume_ratio": 1.0,
              "turnover_rate": 2.77,
              "amount": 64246.85,
              "attack_wave_pct": 6.83,
              "pullback_from_high_pct": 0.31
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "open_drive_watch_result": {
            "next_day_change_pct": 1.11,
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
            "intraday_price": 42.76,
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
          "theme": "其他发电设备",
          "theme_display": "其他发电设备",
          "industry": "电力设备-其他发电设备",
          "latest_snapshot": {
            "change_pct": 1.11,
            "open_change_pct": 0.0,
            "turnover_rate": 0.21,
            "volume_ratio": 2.52,
            "amount": 5108.35,
            "last_price": 42.76,
            "theme": "其他发电设备",
            "industry": "电力设备-其他发电设备"
          },
          "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "mainline_theme_display": "其他发电设备",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "002518",
            "name": "科士达",
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
            "action_hint": "暂无龙虾结论",
            "status": "missing"
          }
        },
        {
          "rank": 12,
          "strategy_group": "open_drive_watch",
          "strategy_group_cn": "早盘驱动观察",
          "symbol": "002876",
          "name": "三利谱",
          "source_period": "morning",
          "tracking_scope": "side_channel_only",
          "return_tracking_scope": "side_channel_only",
          "entry_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
          "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
          "tracking_status": "verified",
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
          "score": 18.783281,
          "source_score": 18.783281,
          "normalized_score": 18.783,
          "unified_score": 18.783,
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
              "change_pct": 0.84,
              "open_drive_pct": 1.63,
              "volume_ratio": 0.94,
              "turnover_rate": 5.41,
              "amount": 24290.54,
              "attack_wave_pct": 6.52,
              "pullback_from_high_pct": 0.3
            },
            "risk_penalties": [
              "公告状态未完全确认",
              "量能偏弱"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "open_drive_watch_result": {
            "next_day_change_pct": 7.13,
            "success": true,
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
            "intraday_price": 33.21,
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
          "theme": "光学元件",
          "theme_display": "光学元件",
          "industry": "电子-光学光电",
          "latest_snapshot": {
            "change_pct": 7.13,
            "open_change_pct": 1.45,
            "turnover_rate": 1.54,
            "volume_ratio": 9.63,
            "amount": 7400.74,
            "last_price": 33.21,
            "theme": "光学元件",
            "industry": "电子-光学光电"
          },
          "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "mainline_theme_display": "光学元件",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "002876",
            "name": "三利谱",
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
            "action_hint": "暂无龙虾结论",
            "status": "missing"
          }
        },
        {
          "rank": 13,
          "strategy_group": "overnight_limit_watch",
          "strategy_group_cn": "隔夜涨停观察",
          "symbol": "002222",
          "name": "福晶科技",
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
          "score": 56.238081,
          "source_score": 56.238081,
          "normalized_score": 56.238,
          "unified_score": 56.238,
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
              "change_pct": 6.65,
              "high_pct": 7.03,
              "pullback_from_high_pct": 0.38,
              "volume_ratio": 1.27,
              "turnover_rate": 6.1,
              "amount": 222092.34,
              "attack_wave_pct": 10.08,
              "open_grab_pct": 1.21,
              "year_limit_up_days": 8.0,
              "tail_volume_support": true
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
            "next_day_success_threshold": 9.0
          },
          "overnight_limit_watch_result": {
            "next_day_change_pct": 1.59,
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
            "intraday_price": 82.66,
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
          "theme": "光学元件",
          "theme_display": "光学元件",
          "industry": "电子-光学光电",
          "latest_snapshot": {
            "change_pct": 1.59,
            "open_change_pct": 0.25,
            "turnover_rate": 0.62,
            "volume_ratio": 4.02,
            "amount": 23902.53,
            "last_price": 82.66,
            "theme": "光学元件",
            "industry": "电子-光学光电"
          },
          "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "mainline_theme_display": "光学元件",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "002222",
            "name": "福晶科技",
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
            "action_hint": "暂无龙虾结论",
            "status": "missing"
          }
        },
        {
          "rank": 14,
          "strategy_group": "overnight_limit_watch",
          "strategy_group_cn": "隔夜涨停观察",
          "symbol": "002046",
          "name": "国机精工",
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
          "score": 55.847688,
          "source_score": 55.847688,
          "normalized_score": 55.848,
          "unified_score": 55.848,
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
              "change_pct": 7.31,
              "high_pct": 7.52,
              "pullback_from_high_pct": 0.21,
              "volume_ratio": 0.89,
              "turnover_rate": 2.89,
              "amount": 96963.73,
              "attack_wave_pct": 9.45,
              "open_grab_pct": 2.03,
              "year_limit_up_days": 21.0,
              "tail_volume_support": true
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
            "next_day_success_threshold": 9.0
          },
          "overnight_limit_watch_result": {
            "next_day_change_pct": 2.38,
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
            "intraday_price": 67.66,
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
            "change_pct": 2.38,
            "open_change_pct": 0.32,
            "turnover_rate": 0.31,
            "volume_ratio": 3.57,
            "amount": 11175.39,
            "last_price": 67.66,
            "theme": "机械基础件",
            "industry": "机械设备-通用设备"
          },
          "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
            "symbol": "002046",
            "name": "国机精工",
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
            "action_hint": "暂无龙虾结论",
            "status": "missing"
          }
        },
        {
          "rank": 15,
          "strategy_group": "overnight_limit_watch",
          "strategy_group_cn": "隔夜涨停观察",
          "symbol": "003031",
          "name": "中瓷电子",
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
          "score": 55.419773,
          "source_score": 55.419773,
          "normalized_score": 55.42,
          "unified_score": 55.42,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {
            "model": "overnight_limit_watch_v1",
            "rank": 3,
            "selection_status": "picked",
            "bucket": "wide_limit_rehearsal",
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
              "change_pct": 5.95,
              "high_pct": 6.11,
              "pullback_from_high_pct": 0.16,
              "volume_ratio": 1.28,
              "turnover_rate": 2.94,
              "amount": 144986.5,
              "attack_wave_pct": 8.54,
              "open_grab_pct": 0.54,
              "year_limit_up_days": 12.0,
              "tail_volume_support": true
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
            "next_day_success_threshold": 9.0
          },
          "overnight_limit_watch_result": {
            "next_day_change_pct": 2.27,
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
            "intraday_price": 153.91,
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
          "theme": "其他电子",
          "theme_display": "其他电子",
          "industry": "电子-其他电子",
          "latest_snapshot": {
            "change_pct": 2.27,
            "open_change_pct": 1.0,
            "turnover_rate": 0.45,
            "volume_ratio": 6.47,
            "amount": 23562.07,
            "last_price": 153.91,
            "theme": "其他电子",
            "industry": "电子-其他电子"
          },
          "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "mainline_theme_display": "其他电子",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "003031",
            "name": "中瓷电子",
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
            "action_hint": "暂无龙虾结论",
            "status": "missing"
          }
        },
        {
          "rank": 16,
          "strategy_group": "theme_rotation_watch",
          "strategy_group_cn": "题材轮动观察",
          "symbol": "603175",
          "name": "超颖电子",
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
          "score": 31.751532,
          "source_score": 31.751532,
          "normalized_score": 31.752,
          "unified_score": 31.752,
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
            "theme": "PCB",
            "theme_stats": {
              "theme": "PCB",
              "count": 9,
              "active_count": 9,
              "strong_count": 9,
              "positive_count": 9,
              "avg_change_pct": 6.137778,
              "avg_volume_ratio": 1.117778,
              "total_amount": 4041815.96
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
              "theme": "PCB",
              "change_pct": 3.95,
              "volume_ratio": 0.95,
              "turnover_rate": 7.3,
              "amount": 26701.63,
              "attack_wave_pct": 7.32,
              "open_grab_pct": 0.0,
              "pullback_from_high_pct": 0.23
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
            "next_day_success_threshold": 3.0
          },
          "theme_rotation_watch_result": {
            "next_day_change_pct": 0.51,
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
            "intraday_price": 82.97,
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
            "change_pct": 0.51,
            "open_change_pct": 0.4,
            "turnover_rate": 0.52,
            "volume_ratio": 2.47,
            "amount": 1972.92,
            "last_price": 82.97,
            "theme": "PCB",
            "industry": "电子-元器件"
          },
          "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
            "symbol": "603175",
            "name": "超颖电子",
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
            "action_hint": "暂无龙虾结论",
            "status": "missing"
          }
        },
        {
          "rank": 17,
          "strategy_group": "theme_rotation_watch",
          "strategy_group_cn": "题材轮动观察",
          "symbol": "603328",
          "name": "依顿电子",
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
          "score": 31.252482,
          "source_score": 31.252482,
          "normalized_score": 31.252,
          "unified_score": 31.252,
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
            "theme": "PCB",
            "theme_stats": {
              "theme": "PCB",
              "count": 9,
              "active_count": 9,
              "strong_count": 9,
              "positive_count": 9,
              "avg_change_pct": 6.137778,
              "avg_volume_ratio": 1.117778,
              "total_amount": 4041815.96
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
              "theme": "PCB",
              "change_pct": 2.01,
              "volume_ratio": 1.23,
              "turnover_rate": 2.64,
              "amount": 28561.47,
              "attack_wave_pct": 6.79,
              "open_grab_pct": 0.0,
              "pullback_from_high_pct": 0.18
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
            "next_day_success_threshold": 3.0
          },
          "theme_rotation_watch_result": {
            "next_day_change_pct": 0.63,
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
            "intraday_price": 11.23,
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
            "change_pct": 0.63,
            "open_change_pct": 0.0,
            "turnover_rate": 0.23,
            "volume_ratio": 3.41,
            "amount": 2543.94,
            "last_price": 11.23,
            "theme": "PCB",
            "industry": "电子-元器件"
          },
          "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
            "symbol": "603328",
            "name": "依顿电子",
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
            "action_hint": "暂无龙虾结论",
            "status": "missing"
          }
        },
        {
          "rank": 18,
          "strategy_group": "theme_rotation_watch",
          "strategy_group_cn": "题材轮动观察",
          "symbol": "002134",
          "name": "天津普林",
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
          "score": 31.025012,
          "source_score": 31.025012,
          "normalized_score": 31.025,
          "unified_score": 31.025,
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
            "theme": "PCB",
            "theme_stats": {
              "theme": "PCB",
              "count": 9,
              "active_count": 9,
              "strong_count": 9,
              "positive_count": 9,
              "avg_change_pct": 6.137778,
              "avg_volume_ratio": 1.117778,
              "total_amount": 4041815.96
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
              "theme": "PCB",
              "change_pct": 2.17,
              "volume_ratio": 1.14,
              "turnover_rate": 6.92,
              "amount": 48133.59,
              "attack_wave_pct": 4.48,
              "open_grab_pct": 0.7,
              "pullback_from_high_pct": 2.36
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
            "next_day_success_threshold": 3.0
          },
          "theme_rotation_watch_result": {
            "next_day_change_pct": 0.82,
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
            "intraday_price": 28.41,
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
            "change_pct": 0.82,
            "open_change_pct": 0.28,
            "turnover_rate": 0.53,
            "volume_ratio": 2.86,
            "amount": 3725.23,
            "last_price": 28.41,
            "theme": "PCB",
            "industry": "电子-元器件"
          },
          "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
            "symbol": "002134",
            "name": "天津普林",
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
            "action_hint": "暂无龙虾结论",
            "status": "missing"
          }
        },
        {
          "rank": 19,
          "strategy_group": "close_strength_hold_watch",
          "strategy_group_cn": "收盘中强承接观察",
          "symbol": "600536",
          "name": "中国软件",
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
            "eligible_for_handoff": false
          },
          "score": 17.066632,
          "source_score": 17.066632,
          "normalized_score": 17.067,
          "unified_score": 17.067,
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
              "change_pct": 2.98,
              "high_pct": 3.74,
              "fade_from_high_pct": -0.73,
              "volume_ratio": 1.35,
              "turnover_rate": 2.19,
              "amount": 52377.5,
              "attack_wave_pct": 5.02,
              "open_grab_pct": -0.28,
              "change_20d_pct": -16.97,
              "year_limit_up_days": 2.0
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察次日是否延续中强承接",
            "next_day_success_threshold": 3.0
          },
          "close_strength_hold_watch_result": {
            "next_day_change_pct": -1.89,
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
            "intraday_price": 28.06,
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
          "theme": "行业应用软件",
          "theme_display": "行业应用软件",
          "industry": "计算机-软件服务",
          "latest_snapshot": {
            "change_pct": -1.89,
            "open_change_pct": -0.98,
            "turnover_rate": 0.23,
            "volume_ratio": 4.54,
            "amount": 5422.68,
            "last_price": 28.06,
            "theme": "行业应用软件",
            "industry": "计算机-软件服务"
          },
          "display_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "mainline_theme_display": "行业应用软件",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 20,
          "strategy_group": "close_strength_hold_watch",
          "strategy_group_cn": "收盘中强承接观察",
          "symbol": "605090",
          "name": "九丰能源",
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
          "score": 16.582139,
          "source_score": 16.582139,
          "normalized_score": 16.582,
          "unified_score": 16.582,
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
            "rank": 2,
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
              "change_pct": 3.34,
              "high_pct": 4.59,
              "fade_from_high_pct": -1.2,
              "volume_ratio": 1.18,
              "turnover_rate": 2.05,
              "amount": 48546.28,
              "attack_wave_pct": 5.9,
              "open_grab_pct": 1.58,
              "change_20d_pct": -2.56,
              "year_limit_up_days": 3.0
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察次日是否延续中强承接",
            "next_day_success_threshold": 3.0
          },
          "close_strength_hold_watch_result": {
            "next_day_change_pct": -2.37,
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
            "intraday_price": 33.71,
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
          "theme": "燃气",
          "theme_display": "燃气",
          "industry": "公用事业-燃气",
          "latest_snapshot": {
            "change_pct": -2.37,
            "open_change_pct": -1.1,
            "turnover_rate": 0.19,
            "volume_ratio": 3.56,
            "amount": 4434.78,
            "last_price": 33.71,
            "theme": "燃气",
            "industry": "公用事业-燃气"
          },
          "display_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "mainline_theme_display": "燃气",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 21,
          "strategy_group": "close_strength_hold_watch",
          "strategy_group_cn": "收盘中强承接观察",
          "symbol": "002129",
          "name": "TCL中环",
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
          "score": 16.264,
          "source_score": 16.264,
          "normalized_score": 16.264,
          "unified_score": 16.264,
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
            "rank": 3,
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
              "change_pct": 3.46,
              "high_pct": 3.84,
              "fade_from_high_pct": -0.36,
              "volume_ratio": 1.0,
              "turnover_rate": 7.73,
              "amount": 339943.84,
              "attack_wave_pct": 4.34,
              "open_grab_pct": 1.41,
              "change_20d_pct": 9.18,
              "year_limit_up_days": 8.0
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察次日是否延续中强承接",
            "next_day_success_threshold": 3.0
          },
          "close_strength_hold_watch_result": {
            "next_day_change_pct": 1.72,
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
            "intraday_price": 11.22,
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
          "theme": "光伏硅片",
          "theme_display": "光伏硅片",
          "industry": "电力设备-光伏设备",
          "latest_snapshot": {
            "change_pct": 1.72,
            "open_change_pct": 0.0,
            "turnover_rate": 1.25,
            "volume_ratio": 5.42,
            "amount": 56312.83,
            "last_price": 11.22,
            "theme": "光伏硅片",
            "industry": "电力设备-光伏设备"
          },
          "display_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-10T09:37:11+08:00",
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
          "mainline_theme_display": "光伏硅片",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        }
      ],
      "display_source": "four_layer_tracking",
      "raw_record_count": 21,
      "raw_strategy_counts": {
        "a_theme_watch": 3,
        "score_front_rejected": 3,
        "low_reflow_watch": 3,
        "open_drive_watch": 3,
        "overnight_limit_watch": 3,
        "theme_rotation_watch": 3,
        "close_strength_hold_watch": 3
      },
      "summary": {
        "groups": {
          "formal_top3": {
            "label": "正式 Top3 逻辑",
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
              "false_positive": 2,
              "price_missing": 0,
              "tracked": 0,
              "verified": 1
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
        "record_count": 21,
        "latest_snapshot_match_count": 21,
        "report_match_count": 0,
        "not_found_count": 0,
        "return_policy": "正式收益只统计 Top3；题材观察、技术观察、候选评分前排、低位回流观察、早盘驱动观察、隔夜涨停观察、题材轮动观察和收盘中强承接观察只跟踪面板展示样本，旁路收益也只按这些样本统计。",
        "notice_supplement_completed": true,
        "notice_supplement_required_count": 5,
        "notice_supplement_incomplete_count": 0
      },
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\four-layer-tracking.morning.json",
        "relative_path": "runs/2026-07-10/four-layer-tracking.morning.json",
        "exists": true,
        "size": 124988,
        "modified_at": "2026-07-10T09:37:11+08:00",
        "sha256": "2b33f0bdca5b785e82a9e60dc8a1c346e48a27b45c915b82df03fb190dd59bac"
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
    "status": "partial",
    "covered_count": 0,
    "failed_count": 9,
    "query_symbol_count": 9,
    "source_groups": [
      "open_drive_watch",
      "overnight_limit_watch",
      "theme_rotation_watch"
    ],
    "source_run_date": "2026-07-09",
    "records": [
      {
        "symbol": "000960",
        "name": "锡业股份",
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
        "action_hint": "暂无龙虾结论",
        "status": "missing"
      },
      {
        "symbol": "002518",
        "name": "科士达",
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
        "action_hint": "暂无龙虾结论",
        "status": "missing"
      },
      {
        "symbol": "002876",
        "name": "三利谱",
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
        "action_hint": "暂无龙虾结论",
        "status": "missing"
      },
      {
        "symbol": "002046",
        "name": "国机精工",
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
        "action_hint": "暂无龙虾结论",
        "status": "missing"
      },
      {
        "symbol": "002222",
        "name": "福晶科技",
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
        "action_hint": "暂无龙虾结论",
        "status": "missing"
      },
      {
        "symbol": "003031",
        "name": "中瓷电子",
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
        "action_hint": "暂无龙虾结论",
        "status": "missing"
      },
      {
        "symbol": "002134",
        "name": "天津普林",
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
        "action_hint": "暂无龙虾结论",
        "status": "missing"
      },
      {
        "symbol": "603175",
        "name": "超颖电子",
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
        "action_hint": "暂无龙虾结论",
        "status": "missing"
      },
      {
        "symbol": "603328",
        "name": "依顿电子",
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
        "action_hint": "暂无龙虾结论",
        "status": "missing"
      }
    ],
    "final_ranking": {
      "items": [
        {
          "rank": 1,
          "symbol": "000960",
          "name": "锡业股份",
          "verdict": "",
          "text": "暂无龙虾结论"
        },
        {
          "rank": 2,
          "symbol": "002518",
          "name": "科士达",
          "verdict": "",
          "text": "暂无龙虾结论"
        },
        {
          "rank": 3,
          "symbol": "002876",
          "name": "三利谱",
          "verdict": "",
          "text": "暂无龙虾结论"
        },
        {
          "rank": 4,
          "symbol": "002046",
          "name": "国机精工",
          "verdict": "",
          "text": "暂无龙虾结论"
        },
        {
          "rank": 5,
          "symbol": "002222",
          "name": "福晶科技",
          "verdict": "",
          "text": "暂无龙虾结论"
        },
        {
          "rank": 6,
          "symbol": "003031",
          "name": "中瓷电子",
          "verdict": "",
          "text": "暂无龙虾结论"
        },
        {
          "rank": 7,
          "symbol": "002134",
          "name": "天津普林",
          "verdict": "",
          "text": "暂无龙虾结论"
        },
        {
          "rank": 8,
          "symbol": "603175",
          "name": "超颖电子",
          "verdict": "",
          "text": "暂无龙虾结论"
        },
        {
          "rank": 9,
          "symbol": "603328",
          "name": "依顿电子",
          "verdict": "",
          "text": "暂无龙虾结论"
        }
      ],
      "summary": ""
    },
    "file": {
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-09\\overnight-report-brief.close.json",
      "relative_path": "runs/2026-07-09/overnight-report-brief.close.json",
      "exists": true,
      "size": 11073,
      "modified_at": "2026-07-09T14:59:09+08:00",
      "sha256": "8aaedab374d9e925d933398ab4f38702789cb499e8a0b3606db3b3716b215ddd"
    }
  },
  "paper_trade": {
    "status": "missing",
    "ledger_status": "missing",
    "summary_status": "missing",
    "artifact_scope": "canonical",
    "date": "2026-07-10",
    "source_close_date": "",
    "ledger_matches_selected_close": true,
    "summary": {},
    "formal_targets": [],
    "records": [],
    "formal_records": [],
    "records_count": 0,
    "files": {
      "ledger": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\paper-trade-ledger.json",
        "relative_path": "paper-trade-ledger.json",
        "exists": false
      },
      "summary": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\paper-trade-summary.json",
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
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\rule-upgrade-proposals.json",
        "relative_path": "rule-upgrade-proposals.json",
        "exists": false
      },
      "approvals": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\rule-upgrade-approvals.json",
        "relative_path": "rule-upgrade-approvals.json",
        "exists": false
      },
      "learning_validation": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\learning-validation.json",
        "relative_path": "learning-validation.json",
        "exists": false
      },
      "implementation": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\rule-upgrade-implementation.json",
        "relative_path": "rule-upgrade-implementation.json",
        "exists": false
      }
    }
  },
  "trader_review": {
    "schema_version": "trader_review_workbench.v1",
    "status": "missing",
    "date": "2026-07-10",
    "title": "交易员复盘工作台",
    "one_liner": "正式票收益样本不足，复盘只做资料不足标记。 正式票收益偏弱但证据不足以证明选股逻辑失效，先按纪律内亏损和数据/执行缺口拆分。",
    "market_tone_label": "偏弱复盘",
    "emotion_score": 48,
    "formal_sample_count": 0,
    "side_channel_sample_count": 0,
    "formal_return_text": "正式票收益样本不足，复盘只做资料不足标记。",
    "side_return_text": "旁路样本收益未完整定价，只能继续观察。",
    "return_source_close_date": "2026-07-10",
    "return_backfill_date": "2026-07-10",
    "return_context_text": "2026-07-10 当前样本",
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
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\paper-trade-summary.json",
        "relative_path": "paper-trade-summary.json",
        "exists": false
      },
      "reverse_miss": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\reverse-miss.json",
        "relative_path": "reverse-miss.json",
        "exists": false
      },
      "ultra_short_review": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\ultra-short-review.json",
        "relative_path": "ultra-short-review.json",
        "exists": false
      },
      "longxia_second_review": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\second-review.longxia.review.json",
        "relative_path": "second-review.longxia.review.json",
        "exists": false
      },
      "longxia_second_review_validation": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\longxia-second-review-validation.json",
        "relative_path": "longxia-second-review-validation.json",
        "exists": false
      },
      "rule_upgrade_proposals": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\rule-upgrade-proposals.json",
        "relative_path": "rule-upgrade-proposals.json",
        "exists": false
      },
      "review_markdown": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\review-report.md",
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
            "计划时间：2026-07-10T14:50+08:00",
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
          "result_cn": "盘前预取产物已生成：昨日尾盘模拟对象 0 只，授权新闻 30 条，授权公告已查，无新增/相关公告。",
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\authorized-news.json",
              "modified_at": "2026-07-10T09:00:11+08:00",
              "size": 63191,
              "sha256": "29cccd1b28731501f71788fa2483efebba59f12fc627343d72b3e667d12aeb56"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\authorized-notices.json",
              "modified_at": "2026-07-10T09:00:11+08:00",
              "size": 740,
              "sha256": "b11188a1ed2eb23ae474c6a82c9854ab818602d5ed8d7a4348d209cc17697399"
            },
            {
              "role": "read",
              "file": "outer-gate.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\outer-gate.morning.json",
              "modified_at": "2026-07-10T09:36:18+08:00",
              "size": 22542,
              "sha256": "b0314d85be661b240165c3236ed5fd6e0452232c8edf49a5459ac7d1b1b6f819"
            },
            {
              "role": "write",
              "file": "morning-precheck.prefetch.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-precheck.prefetch.json",
              "modified_at": "2026-07-10T09:36:37+08:00",
              "size": 2967,
              "sha256": "fcebaf44f8e9af10ca6d5207bad31d5b9e789e5c07ee8f8fd9b4fc473b1ad4e4"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "盘前预取产物已生成：昨日尾盘模拟对象 0 只，授权新闻 30 条，授权公告已查，无新增/相关公告。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "morning-precheck.prefetch.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-precheck.prefetch.json",
                  "modified_at": "2026-07-10T09:36:37+08:00",
                  "size": 2967,
                  "sha256": "fcebaf44f8e9af10ca6d5207bad31d5b9e789e5c07ee8f8fd9b4fc473b1ad4e4"
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
          "result_cn": "风险快检产物已生成：继续持有 0 只，观察 0 只，减仓 0 只，退出 0 只。",
          "missing_or_risk_cn": [
            "补充行情快照缺失：market-data.json 未生成，系统已避免偷读其他时段文件"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "morning-precheck.prefetch.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-precheck.prefetch.json",
              "modified_at": "2026-07-10T09:36:37+08:00",
              "size": 2967,
              "sha256": "fcebaf44f8e9af10ca6d5207bad31d5b9e789e5c07ee8f8fd9b4fc473b1ad4e4"
            },
            {
              "role": "read",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\technical-check.morning.json",
              "modified_at": "2026-07-10T09:36:36+08:00",
              "size": 1515,
              "sha256": "9bbdfec123b60a45cc7ddcf2ae78b5f3561f898453895d1c7810a4c3602528c5"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-risk-precheck.json",
              "modified_at": "2026-07-10T09:36:37+08:00",
              "size": 4029,
              "sha256": "fc2e3455e0213bc31c7ac7d45b965cad10c0f0e8cfea3d85c237f55885b793b5"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "风险快检产物已生成：继续持有 0 只，观察 0 只，减仓 0 只，退出 0 只。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "morning-risk-precheck.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-risk-precheck.json",
                  "modified_at": "2026-07-10T09:36:37+08:00",
                  "size": 4029,
                  "sha256": "fc2e3455e0213bc31c7ac7d45b965cad10c0f0e8cfea3d85c237f55885b793b5"
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
          "source_method_cn": "通过 morning-report 流程读取真实前置收盘报：runs/2026-07-09/close-report.json。",
          "read_files": [
            "runs/2026-07-09/close-report.json",
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
              "file": "runs/2026-07-09/close-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-09\\close-report.json",
              "modified_at": "2026-07-09T14:56:11+08:00",
              "size": 12888691,
              "sha256": "541dc497d8a91168204712b9bfff744fe42ba5f8a51fd5e35ce20dc078eb456f"
            },
            {
              "role": "read",
              "file": "workflow-manifest.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\workflow-manifest.morning.json",
              "modified_at": "2026-07-10T09:37:13+08:00",
              "size": 90719,
              "sha256": "d6ba8dd15c693154c0ca4a848798cfdad7be62d0b2577394f0cbcd968bd6100f"
            },
            {
              "role": "write",
              "file": "inherited-pool.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\inherited-pool.json",
              "modified_at": "2026-07-10T09:36:00+08:00",
              "size": 2023,
              "sha256": "dffc373b5b83d40dddbf7d5fddc4be02e96ae00e9dd9cebbc2c007e774edf3a3"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\inherited-pool.json",
                  "modified_at": "2026-07-10T09:36:00+08:00",
                  "size": 2023,
                  "sha256": "dffc373b5b83d40dddbf7d5fddc4be02e96ae00e9dd9cebbc2c007e774edf3a3"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\outer-skill-output.morning.txt",
              "modified_at": "2026-07-10T09:36:18+08:00",
              "size": 2333,
              "sha256": "83d3515380dba95662576d86e32fed83b516617a04b9336a042338ce12a4a14d"
            },
            {
              "role": "write",
              "file": "outer-gate.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "outer-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\outer-gate.morning.json",
              "modified_at": "2026-07-10T09:36:18+08:00",
              "size": 22542,
              "sha256": "b0314d85be661b240165c3236ed5fd6e0452232c8edf49a5459ac7d1b1b6f819"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\outer-gate.morning.json",
                  "modified_at": "2026-07-10T09:36:18+08:00",
                  "size": 22542,
                  "sha256": "b0314d85be661b240165c3236ed5fd6e0452232c8edf49a5459ac7d1b1b6f819"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\domestic-gate.morning.json",
              "modified_at": "2026-07-10T09:36:33+08:00",
              "size": 227241,
              "sha256": "b2f628dab8e82416929da31661ee46c97d0c363caf3b4096c41a6aa6a3efa715"
            },
            {
              "role": "write",
              "file": "domestic-gate.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "domestic-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\domestic-gate.morning.json",
              "modified_at": "2026-07-10T09:36:33+08:00",
              "size": 227241,
              "sha256": "b2f628dab8e82416929da31661ee46c97d0c363caf3b4096c41a6aa6a3efa715"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\domestic-gate.morning.json",
                  "modified_at": "2026-07-10T09:36:33+08:00",
                  "size": 227241,
                  "sha256": "b2f628dab8e82416929da31661ee46c97d0c363caf3b4096c41a6aa6a3efa715"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\emotion-trend-gate.morning.json",
              "modified_at": "2026-07-10T09:36:35+08:00",
              "size": 17430,
              "sha256": "9fcb03aab6687ca694f0ed21a831c3f7917d6b273be78a8c46ec866764d70ac7"
            },
            {
              "role": "write",
              "file": "emotion-trend-gate.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "emotion-trend-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\emotion-trend-gate.morning.json",
              "modified_at": "2026-07-10T09:36:35+08:00",
              "size": 17430,
              "sha256": "9fcb03aab6687ca694f0ed21a831c3f7917d6b273be78a8c46ec866764d70ac7"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\emotion-trend-gate.morning.json",
                  "modified_at": "2026-07-10T09:36:35+08:00",
                  "size": 17430,
                  "sha256": "9fcb03aab6687ca694f0ed21a831c3f7917d6b273be78a8c46ec866764d70ac7"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-report.json",
              "modified_at": "2026-07-10T09:37:11+08:00",
              "size": 531902,
              "sha256": "facebe4dd2825439a42e610aa6a089fa560060b6d844d8d0ebd32f8a5bf8f39d"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-report.json",
                  "modified_at": "2026-07-10T09:37:11+08:00",
                  "size": 531902,
                  "sha256": "facebe4dd2825439a42e610aa6a089fa560060b6d844d8d0ebd32f8a5bf8f39d"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\candidate-score.morning.json",
              "modified_at": "2026-07-10T09:36:36+08:00",
              "size": 841,
              "sha256": "6436075f3ec3c893d5e881f9a2216a10c5dbc6acbdaf8e50e78561142de84bf8"
            },
            {
              "role": "write",
              "file": "sector-split.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "sector-split.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\sector-split.morning.json",
              "modified_at": "2026-07-10T09:36:36+08:00",
              "size": 145256,
              "sha256": "9075ac6ab2dcaa005bd706f0375b930f5373c628b69fdb8bd88c09f2b616ebab"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\sector-split.morning.json",
                  "modified_at": "2026-07-10T09:36:36+08:00",
                  "size": 145256,
                  "sha256": "9075ac6ab2dcaa005bd706f0375b930f5373c628b69fdb8bd88c09f2b616ebab"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\candidate-score.morning.json",
              "modified_at": "2026-07-10T09:36:36+08:00",
              "size": 841,
              "sha256": "6436075f3ec3c893d5e881f9a2216a10c5dbc6acbdaf8e50e78561142de84bf8"
            },
            {
              "role": "write",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\technical-check.morning.json",
              "modified_at": "2026-07-10T09:36:36+08:00",
              "size": 1515,
              "sha256": "9bbdfec123b60a45cc7ddcf2ae78b5f3561f898453895d1c7810a4c3602528c5"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\technical-check.morning.json",
                  "modified_at": "2026-07-10T09:36:36+08:00",
                  "size": 1515,
                  "sha256": "9bbdfec123b60a45cc7ddcf2ae78b5f3561f898453895d1c7810a4c3602528c5"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\authorized-news.json",
              "modified_at": "2026-07-10T09:00:11+08:00",
              "size": 63191,
              "sha256": "29cccd1b28731501f71788fa2483efebba59f12fc627343d72b3e667d12aeb56"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\authorized-notices.json",
              "modified_at": "2026-07-10T09:00:11+08:00",
              "size": 740,
              "sha256": "b11188a1ed2eb23ae474c6a82c9854ab818602d5ed8d7a4348d209cc17697399"
            },
            {
              "role": "read",
              "file": "domestic-gate.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "domestic-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\domestic-gate.morning.json",
              "modified_at": "2026-07-10T09:36:33+08:00",
              "size": 227241,
              "sha256": "b2f628dab8e82416929da31661ee46c97d0c363caf3b4096c41a6aa6a3efa715"
            },
            {
              "role": "read",
              "file": "sector-split.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "sector-split.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\sector-split.morning.json",
              "modified_at": "2026-07-10T09:36:36+08:00",
              "size": 145256,
              "sha256": "9075ac6ab2dcaa005bd706f0375b930f5373c628b69fdb8bd88c09f2b616ebab"
            },
            {
              "role": "read",
              "file": "candidate-score.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "candidate-score.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\candidate-score.morning.json",
              "modified_at": "2026-07-10T09:36:36+08:00",
              "size": 841,
              "sha256": "6436075f3ec3c893d5e881f9a2216a10c5dbc6acbdaf8e50e78561142de84bf8"
            },
            {
              "role": "read",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\technical-check.morning.json",
              "modified_at": "2026-07-10T09:36:36+08:00",
              "size": 1515,
              "sha256": "9bbdfec123b60a45cc7ddcf2ae78b5f3561f898453895d1c7810a4c3602528c5"
            },
            {
              "role": "write",
              "file": "research-brief.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\research-brief.json",
              "modified_at": "2026-07-10T09:36:37+08:00",
              "size": 4987,
              "sha256": "e2ba8b93c37d23c819caf858798de640747b24121e680bef1b1af7d18004019f"
            },
            {
              "role": "write",
              "file": "research-brief.md",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\research-brief.md",
              "modified_at": "2026-07-10T09:36:37+08:00",
              "size": 1363,
              "sha256": "f0044ab8da7fb58d9a585f69b483cdb8eb4fda6a1e3bbc90c876e7cd2cdc9761"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\research-brief.json",
                  "modified_at": "2026-07-10T09:36:37+08:00",
                  "size": 4987,
                  "sha256": "e2ba8b93c37d23c819caf858798de640747b24121e680bef1b1af7d18004019f"
                },
                {
                  "role": "write",
                  "file": "research-brief.md",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\research-brief.md",
                  "modified_at": "2026-07-10T09:36:37+08:00",
                  "size": 1363,
                  "sha256": "f0044ab8da7fb58d9a585f69b483cdb8eb4fda6a1e3bbc90c876e7cd2cdc9761"
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
          "result_cn": "新闻/公告摘要完成：正面 8 条，风险 11 条，谨慎/中性 16 条。",
          "missing_or_risk_cn": [
            "新闻/公告摘要：正面 8 条，风险 11 条，谨慎/中性 16 条。",
            "有负面/风险关键词，正式报告只作风险提示，是否卡票仍看公告排雷硬规则。",
            "有负面/风险关键词，正式报告只作风险提示，是否卡票仍看公告排雷硬规则。"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "authorized-news.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\authorized-news.json",
              "modified_at": "2026-07-10T09:00:11+08:00",
              "size": 63191,
              "sha256": "29cccd1b28731501f71788fa2483efebba59f12fc627343d72b3e667d12aeb56"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\authorized-notices.json",
              "modified_at": "2026-07-10T09:00:11+08:00",
              "size": 740,
              "sha256": "b11188a1ed2eb23ae474c6a82c9854ab818602d5ed8d7a4348d209cc17697399"
            },
            {
              "role": "read",
              "file": "candidate-notice-scan.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\candidate-notice-scan.morning.json",
              "modified_at": "2026-07-10T09:37:11+08:00",
              "size": 8137,
              "sha256": "c00f2cda76ec9866662abc95ba3c672a729fa3deb7d489b362d435e012ec720b"
            },
            {
              "role": "read",
              "file": "research-brief.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\research-brief.json",
              "modified_at": "2026-07-10T09:36:37+08:00",
              "size": 4987,
              "sha256": "e2ba8b93c37d23c819caf858798de640747b24121e680bef1b1af7d18004019f"
            },
            {
              "role": "read",
              "file": "domestic-intelligence.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\domestic-intelligence.morning.json",
              "modified_at": "2026-07-10T09:36:36+08:00",
              "size": 5094,
              "sha256": "9874457e51b0cf15701832f3b1035350f6554b8c90c0d26afc0b0e16734a5dea"
            },
            {
              "role": "write",
              "file": "news-notice-sentiment.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\news-notice-sentiment.morning.json",
              "modified_at": "2026-07-10T09:37:11+08:00",
              "size": 23108,
              "sha256": "41b7c01d85e4fb386ed3ba7a4da2893a738b36bf615af3b9e05e874ff6dd2741"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "新闻/公告摘要完成：正面 8 条，风险 11 条，谨慎/中性 16 条。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "news-notice-sentiment.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\news-notice-sentiment.morning.json",
                  "modified_at": "2026-07-10T09:37:11+08:00",
                  "size": 23108,
                  "sha256": "41b7c01d85e4fb386ed3ba7a4da2893a738b36bf615af3b9e05e874ff6dd2741"
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
          "result_cn": "国内信息增强已整理：当天新增证据 6 条，A股政策/产业 6 条，A股公告 0 条，直接关联自选股 0 条；催化状态 已确认催化，时效 当日新催化。",
          "missing_or_risk_cn": [
            "增强层只解释国内事件、板块和自选股关联，不新增股票，不改 Top3/A/B，不改 handoff",
            "当前展示方向：芯片、存储芯片、机器人概念",
            "已单独隔离：港股/海外中资 2 条、全球市场摘要 7 条，不写入正式国内催化"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "authorized-news.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\authorized-news.json",
              "modified_at": "2026-07-10T09:00:11+08:00",
              "size": 63191,
              "sha256": "29cccd1b28731501f71788fa2483efebba59f12fc627343d72b3e667d12aeb56"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\authorized-notices.json",
              "modified_at": "2026-07-10T09:00:11+08:00",
              "size": 740,
              "sha256": "b11188a1ed2eb23ae474c6a82c9854ab818602d5ed8d7a4348d209cc17697399"
            },
            {
              "role": "read",
              "file": "domestic-gate.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "domestic-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\domestic-gate.morning.json",
              "modified_at": "2026-07-10T09:36:33+08:00",
              "size": 227241,
              "sha256": "b2f628dab8e82416929da31661ee46c97d0c363caf3b4096c41a6aa6a3efa715"
            },
            {
              "role": "read",
              "file": "market-mainline.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "market-mainline.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\market-mainline.morning.json",
              "modified_at": "2026-07-10T09:36:23+08:00",
              "size": 127094,
              "sha256": "1c6107f1858dd5df992dbd627d2d07e5d9f4b1674c49dcb7175ac930f9ac4606"
            },
            {
              "role": "read",
              "file": "sector-split.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "sector-split.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\sector-split.morning.json",
              "modified_at": "2026-07-10T09:36:36+08:00",
              "size": 145256,
              "sha256": "9075ac6ab2dcaa005bd706f0375b930f5373c628b69fdb8bd88c09f2b616ebab"
            },
            {
              "role": "read",
              "file": "candidate-score.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "candidate-score.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\candidate-score.morning.json",
              "modified_at": "2026-07-10T09:36:36+08:00",
              "size": 841,
              "sha256": "6436075f3ec3c893d5e881f9a2216a10c5dbc6acbdaf8e50e78561142de84bf8"
            },
            {
              "role": "read",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\technical-check.morning.json",
              "modified_at": "2026-07-10T09:36:36+08:00",
              "size": 1515,
              "sha256": "9bbdfec123b60a45cc7ddcf2ae78b5f3561f898453895d1c7810a4c3602528c5"
            },
            {
              "role": "write",
              "file": "domestic-intelligence.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\domestic-intelligence.morning.json",
              "modified_at": "2026-07-10T09:36:36+08:00",
              "size": 5094,
              "sha256": "9874457e51b0cf15701832f3b1035350f6554b8c90c0d26afc0b0e16734a5dea"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "国内信息增强已整理：当天新增证据 6 条，A股政策/产业 6 条，A股公告 0 条，直接关联自选股 0 条；催化状态 已确认催化，时效 当日新催化。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "domestic-intelligence.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\domestic-intelligence.morning.json",
                  "modified_at": "2026-07-10T09:36:36+08:00",
                  "size": 5094,
                  "sha256": "9874457e51b0cf15701832f3b1035350f6554b8c90c0d26afc0b0e16734a5dea"
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
          "result_cn": "金融 skill 增强清单已生成：题材/资金 0 只，公告/股本风险 0 只，交易计划 0 只，复盘重点 10 只。",
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\candidate-score.morning.json",
              "modified_at": "2026-07-10T09:36:36+08:00",
              "size": 841,
              "sha256": "6436075f3ec3c893d5e881f9a2216a10c5dbc6acbdaf8e50e78561142de84bf8"
            },
            {
              "role": "read",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\technical-check.morning.json",
              "modified_at": "2026-07-10T09:36:36+08:00",
              "size": 1515,
              "sha256": "9bbdfec123b60a45cc7ddcf2ae78b5f3561f898453895d1c7810a4c3602528c5"
            },
            {
              "role": "write",
              "file": "external-skill-enrichment.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\external-skill-enrichment.morning.json",
              "modified_at": "2026-07-10T09:37:11+08:00",
              "size": 7584,
              "sha256": "d3f00faeb5c763b21ad605f505b1277a8d8e351a0061b13e088e103a8eff4875"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "金融 skill 增强清单已生成：题材/资金 0 只，公告/股本风险 0 只，交易计划 0 只，复盘重点 10 只。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "external-skill-enrichment.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\external-skill-enrichment.morning.json",
                  "modified_at": "2026-07-10T09:37:11+08:00",
                  "size": 7584,
                  "sha256": "d3f00faeb5c763b21ad605f505b1277a8d8e351a0061b13e088e103a8eff4875"
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
          "result_cn": "金融 skill 深挖已生成：重点票 5 只，Top3 0 只，A类 3 只，B类 0 只，候选评分前三 3 只。",
          "missing_or_risk_cn": [
            "深挖只补主线、题材、资金、事件、股本风险、板块操盘、产业链、主营匹配、仓位节奏和复盘证据，不改 Top3、不改 handoff"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "external-skill-enrichment.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\external-skill-enrichment.morning.json",
              "modified_at": "2026-07-10T09:37:11+08:00",
              "size": 7584,
              "sha256": "d3f00faeb5c763b21ad605f505b1277a8d8e351a0061b13e088e103a8eff4875"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\external-skill-deep-dive.morning.json",
              "modified_at": "2026-07-10T09:37:11+08:00",
              "size": 26924,
              "sha256": "0275ca4971eb82bd618c0090237c9e52612a2b3c32ba0480eac078dc8f4119c5"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "金融 skill 深挖已生成：重点票 5 只，Top3 0 只，A类 3 只，B类 0 只，候选评分前三 3 只。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "external-skill-deep-dive.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\external-skill-deep-dive.morning.json",
                  "modified_at": "2026-07-10T09:37:11+08:00",
                  "size": 26924,
                  "sha256": "0275ca4971eb82bd618c0090237c9e52612a2b3c32ba0480eac078dc8f4119c5"
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
          "result_cn": "四层/旁路策略对比账本已生成：正式 Top3 0 只，A类主线/题材 3 只，B类技术/资金 0 只，候选评分前排 3 只，低位回流观察 3 只，早盘驱动观察 3 只，隔夜涨停观察 3 只，题材轮动观察 3 只，收盘中强承接观察 3 只。 面板样本跟踪 21 条，本时段快照命中 21 条。",
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-report.json",
              "modified_at": "2026-07-10T09:37:11+08:00",
              "size": 531902,
              "sha256": "facebe4dd2825439a42e610aa6a089fa560060b6d844d8d0ebd32f8a5bf8f39d"
            },
            {
              "role": "write",
              "file": "four-layer-tracking.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\four-layer-tracking.morning.json",
              "modified_at": "2026-07-10T09:37:11+08:00",
              "size": 124988,
              "sha256": "2b33f0bdca5b785e82a9e60dc8a1c346e48a27b45c915b82df03fb190dd59bac"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "四层/旁路策略对比账本已生成：正式 Top3 0 只，A类主线/题材 3 只，B类技术/资金 0 只，候选评分前排 3 只，低位回流观察 3 只，早盘驱动观察 3 只，隔夜涨停观察 3 只，题材轮动观察 3 只，收盘中强承接观察 3 只。 面板样本跟踪 21 条，本时段快照命中 21 条。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "four-layer-tracking.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\four-layer-tracking.morning.json",
                  "modified_at": "2026-07-10T09:37:11+08:00",
                  "size": 124988,
                  "sha256": "2b33f0bdca5b785e82a9e60dc8a1c346e48a27b45c915b82df03fb190dd59bac"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\raw-watchlist.morning.json",
              "modified_at": "2026-07-10T09:36:00+08:00",
              "size": 1875166,
              "sha256": "a09c129d2fd566734e76ea85377a186b6f6be8f9f5cea519d083a166063ced69"
            },
            {
              "role": "read",
              "file": "filtered-pool.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\filtered-pool.morning.json",
              "modified_at": "2026-07-10T09:36:00+08:00",
              "size": 2373243,
              "sha256": "413ef5149410fb80aff621bb559c82b6c58ee9ce7555d384bbadc1f7b7c31907"
            },
            {
              "role": "read",
              "file": "authorized-news.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\authorized-news.json",
              "modified_at": "2026-07-10T09:00:11+08:00",
              "size": 63191,
              "sha256": "29cccd1b28731501f71788fa2483efebba59f12fc627343d72b3e667d12aeb56"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\authorized-notices.json",
              "modified_at": "2026-07-10T09:00:11+08:00",
              "size": 740,
              "sha256": "b11188a1ed2eb23ae474c6a82c9854ab818602d5ed8d7a4348d209cc17697399"
            },
            {
              "role": "read",
              "file": "candidate-notice-scan.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\candidate-notice-scan.morning.json",
              "modified_at": "2026-07-10T09:37:11+08:00",
              "size": 8137,
              "sha256": "c00f2cda76ec9866662abc95ba3c672a729fa3deb7d489b362d435e012ec720b"
            },
            {
              "role": "write",
              "file": "data-acquisition-health.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\data-acquisition-health.morning.json",
              "modified_at": "2026-07-10T09:37:12+08:00",
              "size": 9324,
              "sha256": "849f30e5b9801f9ab3f26185f7b351f48d7870a78f0b45242e9874c64f96db17"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\data-acquisition-health.morning.json",
                  "modified_at": "2026-07-10T09:37:12+08:00",
                  "size": 9324,
                  "sha256": "849f30e5b9801f9ab3f26185f7b351f48d7870a78f0b45242e9874c64f96db17"
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
          "result_cn": "四套策略对比审计完成：正式 Top3 0 只，旁路样本 21 只，早盘表现缺口 21 只。",
          "missing_or_risk_cn": [
            "这是旁路对比，只用于复盘判断哪套逻辑更有效；不改 Top3、不改 handoff、不改正式收益。",
            "已对比 7 套策略样本；暂无可比收益，等待价格回填。",
            "收益还在等待价格回填，这不是扫描失败，也不会影响早报/午报结论。"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "four-layer-tracking.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\four-layer-tracking.morning.json",
              "modified_at": "2026-07-10T09:37:11+08:00",
              "size": 124988,
              "sha256": "2b33f0bdca5b785e82a9e60dc8a1c346e48a27b45c915b82df03fb190dd59bac"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\strategy-benchmark.morning.json",
              "modified_at": "2026-07-10T09:37:12+08:00",
              "size": 9451,
              "sha256": "7d0133b1522e1ba9748d559f360712e469b525014d27285a2a075f8d84a859ab"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "四套策略对比审计完成：正式 Top3 0 只，旁路样本 21 只，早盘表现缺口 21 只。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "strategy-benchmark.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\strategy-benchmark.morning.json",
                  "modified_at": "2026-07-10T09:37:12+08:00",
                  "size": 9451,
                  "sha256": "7d0133b1522e1ba9748d559f360712e469b525014d27285a2a075f8d84a859ab"
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
          "status": "ok",
          "result_cn": "多视角审计完成：技术、题材、风险、数据质量共 4 个视角；未发现需额外留意项。",
          "missing_or_risk_cn": [
            "审计层只找问题和给建议，不自动改算法、不改 Top3、不改交易计划。"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "morning-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-report.json",
              "modified_at": "2026-07-10T09:37:11+08:00",
              "size": 531902,
              "sha256": "facebe4dd2825439a42e610aa6a089fa560060b6d844d8d0ebd32f8a5bf8f39d"
            },
            {
              "role": "read",
              "file": "candidate-score.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "candidate-score.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\candidate-score.morning.json",
              "modified_at": "2026-07-10T09:36:36+08:00",
              "size": 841,
              "sha256": "6436075f3ec3c893d5e881f9a2216a10c5dbc6acbdaf8e50e78561142de84bf8"
            },
            {
              "role": "read",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\technical-check.morning.json",
              "modified_at": "2026-07-10T09:36:36+08:00",
              "size": 1515,
              "sha256": "9bbdfec123b60a45cc7ddcf2ae78b5f3561f898453895d1c7810a4c3602528c5"
            },
            {
              "role": "read",
              "file": "data-acquisition-health.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\data-acquisition-health.morning.json",
              "modified_at": "2026-07-10T09:37:12+08:00",
              "size": 9324,
              "sha256": "849f30e5b9801f9ab3f26185f7b351f48d7870a78f0b45242e9874c64f96db17"
            },
            {
              "role": "write",
              "file": "multi-role-review.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\multi-role-review.morning.json",
              "modified_at": "2026-07-10T09:37:12+08:00",
              "size": 4160,
              "sha256": "b0c8dab1c5ff0ecc82d27ad952ee3997e689dbcacc5d16bfdf0d26dff568a420"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "多视角审计完成：技术、题材、风险、数据质量共 4 个视角；未发现需额外留意项。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "multi-role-review.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\multi-role-review.morning.json",
                  "modified_at": "2026-07-10T09:37:12+08:00",
                  "size": 4160,
                  "sha256": "b0c8dab1c5ff0ecc82d27ad952ee3997e689dbcacc5d16bfdf0d26dff568a420"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-report.md",
              "modified_at": "2026-07-10T09:37:12+08:00",
              "size": 6285,
              "sha256": "2f60d6903e11a89a37d882ff931b648c424ca686079cffedd885e41c5550cabd"
            },
            {
              "role": "read",
              "file": "multi-role-review.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\multi-role-review.morning.json",
              "modified_at": "2026-07-10T09:37:12+08:00",
              "size": 4160,
              "sha256": "b0c8dab1c5ff0ecc82d27ad952ee3997e689dbcacc5d16bfdf0d26dff568a420"
            },
            {
              "role": "read",
              "file": "strategy-benchmark.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\strategy-benchmark.morning.json",
              "modified_at": "2026-07-10T09:37:12+08:00",
              "size": 9451,
              "sha256": "7d0133b1522e1ba9748d559f360712e469b525014d27285a2a075f8d84a859ab"
            },
            {
              "role": "write",
              "file": "report-quality-audit.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\report-quality-audit.morning.json",
              "modified_at": "2026-07-10T09:37:13+08:00",
              "size": 1398,
              "sha256": "657db739264c3f175803824e7483d3fa00611fd5a4c832e5228b655ef0d0062b"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\report-quality-audit.morning.json",
                  "modified_at": "2026-07-10T09:37:13+08:00",
                  "size": 1398,
                  "sha256": "657db739264c3f175803824e7483d3fa00611fd5a4c832e5228b655ef0d0062b"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-report.json",
              "modified_at": "2026-07-10T09:37:11+08:00",
              "size": 531902,
              "sha256": "facebe4dd2825439a42e610aa6a089fa560060b6d844d8d0ebd32f8a5bf8f39d"
            },
            {
              "role": "read",
              "file": "morning-precheck.prefetch.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-precheck.prefetch.json",
              "modified_at": "2026-07-10T09:36:37+08:00",
              "size": 2967,
              "sha256": "fcebaf44f8e9af10ca6d5207bad31d5b9e789e5c07ee8f8fd9b4fc473b1ad4e4"
            },
            {
              "role": "read",
              "file": "morning-risk-precheck.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-risk-precheck.json",
              "modified_at": "2026-07-10T09:36:37+08:00",
              "size": 4029,
              "sha256": "fc2e3455e0213bc31c7ac7d45b965cad10c0f0e8cfea3d85c237f55885b793b5"
            },
            {
              "role": "write",
              "file": "morning-report.md",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-report.md",
              "modified_at": "2026-07-10T09:37:12+08:00",
              "size": 6285,
              "sha256": "2f60d6903e11a89a37d882ff931b648c424ca686079cffedd885e41c5550cabd"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-report.md",
                  "modified_at": "2026-07-10T09:37:12+08:00",
                  "size": 6285,
                  "sha256": "2f60d6903e11a89a37d882ff931b648c424ca686079cffedd885e41c5550cabd"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-report.json",
              "modified_at": "2026-07-10T09:37:11+08:00",
              "size": 531902,
              "sha256": "facebe4dd2825439a42e610aa6a089fa560060b6d844d8d0ebd32f8a5bf8f39d"
            },
            {
              "role": "read",
              "file": "morning-report.md",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-report.md",
              "modified_at": "2026-07-10T09:37:12+08:00",
              "size": 6285,
              "sha256": "2f60d6903e11a89a37d882ff931b648c424ca686079cffedd885e41c5550cabd"
            },
            {
              "role": "write",
              "file": "workflow-manifest.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\workflow-manifest.morning.json",
              "modified_at": "2026-07-10T09:37:13+08:00",
              "size": 90719,
              "sha256": "d6ba8dd15c693154c0ca4a848798cfdad7be62d0b2577394f0cbcd968bd6100f"
            },
            {
              "role": "write",
              "file": "data-lineage.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\data-lineage.morning.json",
              "modified_at": "2026-07-10T09:37:13+08:00",
              "size": 54289,
              "sha256": "9f555cf4415fb8e34450017287f1c3e12dbcecf6e2c46f4784d80e267fec624a"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\workflow-manifest.morning.json",
                  "modified_at": "2026-07-10T09:37:13+08:00",
                  "size": 90719,
                  "sha256": "d6ba8dd15c693154c0ca4a848798cfdad7be62d0b2577394f0cbcd968bd6100f"
                },
                {
                  "role": "write",
                  "file": "data-lineage.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\data-lineage.morning.json",
                  "modified_at": "2026-07-10T09:37:13+08:00",
                  "size": 54289,
                  "sha256": "9f555cf4415fb8e34450017287f1c3e12dbcecf6e2c46f4784d80e267fec624a"
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
            "计划时间：2026-07-10T11:35+08:00",
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
            "计划时间：2026-07-10T20:00+08:00",
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
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\outer-gate.json",
        "relative_path": "runs/2026-07-10/outer-gate.json",
        "exists": true,
        "size": 22542,
        "modified_at": "2026-07-10T09:36:18+08:00",
        "sha256": "b0314d85be661b240165c3236ed5fd6e0452232c8edf49a5459ac7d1b1b6f819"
      }
    },
    {
      "name": "domestic-gate.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\domestic-gate.json",
        "relative_path": "runs/2026-07-10/domestic-gate.json",
        "exists": true,
        "size": 227241,
        "modified_at": "2026-07-10T09:36:33+08:00",
        "sha256": "b2f628dab8e82416929da31661ee46c97d0c363caf3b4096c41a6aa6a3efa715"
      }
    },
    {
      "name": "emotion-trend-gate.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\emotion-trend-gate.json",
        "relative_path": "runs/2026-07-10/emotion-trend-gate.json",
        "exists": true,
        "size": 17430,
        "modified_at": "2026-07-10T09:36:35+08:00",
        "sha256": "9fcb03aab6687ca694f0ed21a831c3f7917d6b273be78a8c46ec866764d70ac7"
      }
    },
    {
      "name": "gates-protocol.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\gates-protocol.json",
        "relative_path": "runs/2026-07-10/gates-protocol.json",
        "exists": true,
        "size": 18536,
        "modified_at": "2026-07-10T09:36:35+08:00",
        "sha256": "b52d0d263399cd23ec8522fad764643be275b6cf96ce17ebb272074f46d4b0fd"
      }
    },
    {
      "name": "raw-watchlist.json",
      "status": "ok",
      "records": 283,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\raw-watchlist.json",
        "relative_path": "runs/2026-07-10/raw-watchlist.json",
        "exists": true,
        "size": 1875166,
        "modified_at": "2026-07-10T09:36:00+08:00",
        "sha256": "a09c129d2fd566734e76ea85377a186b6f6be8f9f5cea519d083a166063ced69"
      }
    },
    {
      "name": "filtered-pool.json",
      "status": "ok",
      "records": 283,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\filtered-pool.json",
        "relative_path": "runs/2026-07-10/filtered-pool.json",
        "exists": true,
        "size": 2373243,
        "modified_at": "2026-07-10T09:36:00+08:00",
        "sha256": "413ef5149410fb80aff621bb559c82b6c58ee9ce7555d384bbadc1f7b7c31907"
      }
    },
    {
      "name": "candidate-score.json",
      "status": "ok",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\candidate-score.json",
        "relative_path": "runs/2026-07-10/candidate-score.json",
        "exists": true,
        "size": 841,
        "modified_at": "2026-07-10T09:36:36+08:00",
        "sha256": "6436075f3ec3c893d5e881f9a2216a10c5dbc6acbdaf8e50e78561142de84bf8"
      }
    },
    {
      "name": "technical-check.json",
      "status": "ok",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\technical-check.json",
        "relative_path": "runs/2026-07-10/technical-check.json",
        "exists": true,
        "size": 1515,
        "modified_at": "2026-07-10T09:36:36+08:00",
        "sha256": "9bbdfec123b60a45cc7ddcf2ae78b5f3561f898453895d1c7810a4c3602528c5"
      }
    },
    {
      "name": "four-layer-tracking.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\four-layer-tracking.close.json",
        "relative_path": "four-layer-tracking.close.json",
        "exists": false
      }
    },
    {
      "name": "four-layer-tracking.morning.json",
      "status": "ok",
      "records": 21,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\four-layer-tracking.morning.json",
        "relative_path": "runs/2026-07-10/four-layer-tracking.morning.json",
        "exists": true,
        "size": 124988,
        "modified_at": "2026-07-10T09:37:11+08:00",
        "sha256": "2b33f0bdca5b785e82a9e60dc8a1c346e48a27b45c915b82df03fb190dd59bac"
      }
    },
    {
      "name": "four-layer-tracking.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\four-layer-tracking.noon.json",
        "relative_path": "four-layer-tracking.noon.json",
        "exists": false
      }
    },
    {
      "name": "four-layer-tracking.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\four-layer-tracking.review.json",
        "relative_path": "four-layer-tracking.review.json",
        "exists": false
      }
    },
    {
      "name": "strategy-benchmark.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\strategy-benchmark.close.json",
        "relative_path": "strategy-benchmark.close.json",
        "exists": false
      }
    },
    {
      "name": "strategy-benchmark.morning.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\strategy-benchmark.morning.json",
        "relative_path": "runs/2026-07-10/strategy-benchmark.morning.json",
        "exists": true,
        "size": 9451,
        "modified_at": "2026-07-10T09:37:12+08:00",
        "sha256": "7d0133b1522e1ba9748d559f360712e469b525014d27285a2a075f8d84a859ab"
      }
    },
    {
      "name": "strategy-benchmark.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\strategy-benchmark.noon.json",
        "relative_path": "strategy-benchmark.noon.json",
        "exists": false
      }
    },
    {
      "name": "strategy-benchmark.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\strategy-benchmark.review.json",
        "relative_path": "strategy-benchmark.review.json",
        "exists": false
      }
    },
    {
      "name": "news-notice-sentiment.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\news-notice-sentiment.close.json",
        "relative_path": "news-notice-sentiment.close.json",
        "exists": false
      }
    },
    {
      "name": "news-notice-sentiment.morning.json",
      "status": "ok",
      "records": 35,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\news-notice-sentiment.morning.json",
        "relative_path": "runs/2026-07-10/news-notice-sentiment.morning.json",
        "exists": true,
        "size": 23108,
        "modified_at": "2026-07-10T09:37:11+08:00",
        "sha256": "41b7c01d85e4fb386ed3ba7a4da2893a738b36bf615af3b9e05e874ff6dd2741"
      }
    },
    {
      "name": "news-notice-sentiment.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\news-notice-sentiment.noon.json",
        "relative_path": "news-notice-sentiment.noon.json",
        "exists": false
      }
    },
    {
      "name": "news-notice-sentiment.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\news-notice-sentiment.review.json",
        "relative_path": "news-notice-sentiment.review.json",
        "exists": false
      }
    },
    {
      "name": "overnight-report-brief.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\overnight-report-brief.close.json",
        "relative_path": "overnight-report-brief.close.json",
        "exists": false
      }
    },
    {
      "name": "multi-role-review.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\multi-role-review.close.json",
        "relative_path": "multi-role-review.close.json",
        "exists": false
      }
    },
    {
      "name": "multi-role-review.morning.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\multi-role-review.morning.json",
        "relative_path": "runs/2026-07-10/multi-role-review.morning.json",
        "exists": true,
        "size": 4160,
        "modified_at": "2026-07-10T09:37:12+08:00",
        "sha256": "b0c8dab1c5ff0ecc82d27ad952ee3997e689dbcacc5d16bfdf0d26dff568a420"
      }
    },
    {
      "name": "multi-role-review.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\multi-role-review.noon.json",
        "relative_path": "multi-role-review.noon.json",
        "exists": false
      }
    },
    {
      "name": "multi-role-review.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\multi-role-review.review.json",
        "relative_path": "multi-role-review.review.json",
        "exists": false
      }
    },
    {
      "name": "report-quality-audit.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\report-quality-audit.close.json",
        "relative_path": "report-quality-audit.close.json",
        "exists": false
      }
    },
    {
      "name": "report-quality-audit.morning.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\report-quality-audit.morning.json",
        "relative_path": "runs/2026-07-10/report-quality-audit.morning.json",
        "exists": true,
        "size": 1398,
        "modified_at": "2026-07-10T09:37:13+08:00",
        "sha256": "657db739264c3f175803824e7483d3fa00611fd5a4c832e5228b655ef0d0062b"
      }
    },
    {
      "name": "report-quality-audit.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\report-quality-audit.noon.json",
        "relative_path": "report-quality-audit.noon.json",
        "exists": false
      }
    },
    {
      "name": "report-quality-audit.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\report-quality-audit.review.json",
        "relative_path": "report-quality-audit.review.json",
        "exists": false
      }
    },
    {
      "name": "second-review.longxia.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\second-review.longxia.review.json",
        "relative_path": "second-review.longxia.review.json",
        "exists": false
      }
    },
    {
      "name": "second-review.longxia.review.md",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\second-review.longxia.review.md",
        "relative_path": "second-review.longxia.review.md",
        "exists": false
      }
    },
    {
      "name": "longxia-second-review-validation.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\longxia-second-review-validation.json",
        "relative_path": "longxia-second-review-validation.json",
        "exists": false
      }
    },
    {
      "name": "longxia-second-review-validation.md",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\longxia-second-review-validation.md",
        "relative_path": "longxia-second-review-validation.md",
        "exists": false
      }
    },
    {
      "name": "sector-split.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\sector-split.json",
        "relative_path": "runs/2026-07-10/sector-split.json",
        "exists": true,
        "size": 145256,
        "modified_at": "2026-07-10T09:36:36+08:00",
        "sha256": "9075ac6ab2dcaa005bd706f0375b930f5373c628b69fdb8bd88c09f2b616ebab"
      }
    },
    {
      "name": "execution-inputs.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\execution-inputs.json",
        "relative_path": "execution-inputs.json",
        "exists": false
      }
    },
    {
      "name": "execution-decision.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\execution-decision.json",
        "relative_path": "execution-decision.json",
        "exists": false
      }
    },
    {
      "name": "morning-precheck.prefetch.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-precheck.prefetch.json",
        "relative_path": "runs/2026-07-10/morning-precheck.prefetch.json",
        "exists": true,
        "size": 2967,
        "modified_at": "2026-07-10T09:36:37+08:00",
        "sha256": "fcebaf44f8e9af10ca6d5207bad31d5b9e789e5c07ee8f8fd9b4fc473b1ad4e4"
      }
    },
    {
      "name": "morning-risk-precheck.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-risk-precheck.json",
        "relative_path": "runs/2026-07-10/morning-risk-precheck.json",
        "exists": true,
        "size": 4029,
        "modified_at": "2026-07-10T09:36:37+08:00",
        "sha256": "fc2e3455e0213bc31c7ac7d45b965cad10c0f0e8cfea3d85c237f55885b793b5"
      }
    },
    {
      "name": "data-acquisition-health.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\data-acquisition-health.close.json",
        "relative_path": "data-acquisition-health.close.json",
        "exists": false
      }
    },
    {
      "name": "data-acquisition-health.morning.json",
      "status": "ok",
      "records": 13,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\data-acquisition-health.morning.json",
        "relative_path": "runs/2026-07-10/data-acquisition-health.morning.json",
        "exists": true,
        "size": 9324,
        "modified_at": "2026-07-10T09:37:12+08:00",
        "sha256": "849f30e5b9801f9ab3f26185f7b351f48d7870a78f0b45242e9874c64f96db17"
      }
    },
    {
      "name": "data-acquisition-health.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\data-acquisition-health.noon.json",
        "relative_path": "data-acquisition-health.noon.json",
        "exists": false
      }
    },
    {
      "name": "data-acquisition-health.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\data-acquisition-health.review.json",
        "relative_path": "data-acquisition-health.review.json",
        "exists": false
      }
    },
    {
      "name": "market-data.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\market-data.json",
        "relative_path": "market-data.json",
        "exists": false
      }
    },
    {
      "name": "paper-trade-ledger.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\paper-trade-ledger.json",
        "relative_path": "paper-trade-ledger.json",
        "exists": false
      }
    },
    {
      "name": "paper-trade-summary.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\paper-trade-summary.json",
        "relative_path": "paper-trade-summary.json",
        "exists": false
      }
    },
    {
      "name": "close-confirmation.1501.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\close-confirmation.1501.json",
        "relative_path": "close-confirmation.1501.json",
        "exists": false
      }
    },
    {
      "name": "close-watchlist.1501.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\close-watchlist.1501.json",
        "relative_path": "close-watchlist.1501.json",
        "exists": false
      }
    },
    {
      "name": "close-snapshot.1501.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\close-snapshot.1501.json",
        "relative_path": "close-snapshot.1501.json",
        "exists": false
      }
    },
    {
      "name": "close-confirmation.1501-run.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\close-confirmation.1501-run.json",
        "relative_path": "close-confirmation.1501-run.json",
        "exists": false
      }
    },
    {
      "name": "pool-governance.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\pool-governance.json",
        "relative_path": "pool-governance.json",
        "exists": false
      }
    },
    {
      "name": "workflow-manifest.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\workflow-manifest.json",
        "relative_path": "runs/2026-07-10/workflow-manifest.json",
        "exists": true,
        "size": 90719,
        "modified_at": "2026-07-10T09:37:13+08:00",
        "sha256": "d6ba8dd15c693154c0ca4a848798cfdad7be62d0b2577394f0cbcd968bd6100f"
      }
    },
    {
      "name": "data-lineage.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\data-lineage.json",
        "relative_path": "runs/2026-07-10/data-lineage.json",
        "exists": true,
        "size": 54289,
        "modified_at": "2026-07-10T09:37:13+08:00",
        "sha256": "9f555cf4415fb8e34450017287f1c3e12dbcecf6e2c46f4784d80e267fec624a"
      }
    },
    {
      "name": "raw-watchlist/",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\raw-watchlist",
        "relative_path": "runs/2026-07-10/raw-watchlist",
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
        "scheduled_at": "2026-07-10T14:50+08:00",
        "recovery_policy_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
      },
      {
        "period": "morning",
        "label": "早报",
        "status": "complete",
        "reason_cn": "已按计划生成",
        "scheduled_at": "2026-07-10T09:35+08:00",
        "recovery_policy_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
      },
      {
        "period": "noon",
        "label": "午报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-10T11:35+08:00",
        "recovery_policy_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
      },
      {
        "period": "review",
        "label": "复盘报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-10T20:00+08:00",
        "recovery_policy_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
      }
    ],
    "missed_count": 0,
    "failed_count": 0,
    "incomplete_count": 0
  },
  "web_panel_status_summary": {
    "schema_version": "web-panel-status-summary/v1",
    "currentDate": "2026-07-10",
    "current_date": "2026-07-10",
    "status": "partial",
    "headline_cn": "当前日期 2026-07-10：1/4 四报已生成",
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
        "scheduled_at": "2026-07-10T14:50+08:00",
        "recovery_policy_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
      },
      {
        "period": "morning",
        "label": "早报",
        "status": "complete",
        "reason_cn": "已按计划生成",
        "scheduled_at": "2026-07-10T09:35+08:00",
        "recovery_policy_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
      },
      {
        "period": "noon",
        "label": "午报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-10T11:35+08:00",
        "recovery_policy_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
      },
      {
        "period": "review",
        "label": "复盘报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-10T20:00+08:00",
        "recovery_policy_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
      }
    ],
    "missing_reports": [],
    "user_visible_note_cn": "顶部状态条只统计当前应当已经落盘的异常项；复盘未到时间、链路说明性节点和环境偏谨慎不再算作缺失或扫描不完整。"
  },
  "top_status_summary": {
    "schema_version": "web-panel-status-summary/v1",
    "currentDate": "2026-07-10",
    "current_date": "2026-07-10",
    "status": "partial",
    "headline_cn": "当前日期 2026-07-10：1/4 四报已生成",
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
        "scheduled_at": "2026-07-10T14:50+08:00",
        "recovery_policy_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
      },
      {
        "period": "morning",
        "label": "早报",
        "status": "complete",
        "reason_cn": "已按计划生成",
        "scheduled_at": "2026-07-10T09:35+08:00",
        "recovery_policy_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
      },
      {
        "period": "noon",
        "label": "午报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-10T11:35+08:00",
        "recovery_policy_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
      },
      {
        "period": "review",
        "label": "复盘报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-10T20:00+08:00",
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
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\close-report.json",
      "relative_path": "close-report.json",
      "exists": false
    },
    {
      "name": "morning-report.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-report.json",
      "relative_path": "runs/2026-07-10/morning-report.json",
      "exists": true,
      "size": 531902,
      "modified_at": "2026-07-10T09:37:11+08:00",
      "sha256": "facebe4dd2825439a42e610aa6a089fa560060b6d844d8d0ebd32f8a5bf8f39d"
    },
    {
      "name": "noon-report.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\noon-report.json",
      "relative_path": "noon-report.json",
      "exists": false
    },
    {
      "name": "review-report.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\review-report.json",
      "relative_path": "review-report.json",
      "exists": false
    },
    {
      "name": "close-report.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\close-report.md",
      "relative_path": "close-report.md",
      "exists": false
    },
    {
      "name": "morning-report.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-report.md",
      "relative_path": "runs/2026-07-10/morning-report.md",
      "exists": true,
      "size": 6285,
      "modified_at": "2026-07-10T09:37:12+08:00",
      "sha256": "2f60d6903e11a89a37d882ff931b648c424ca686079cffedd885e41c5550cabd"
    },
    {
      "name": "noon-report.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\noon-report.md",
      "relative_path": "noon-report.md",
      "exists": false
    },
    {
      "name": "review-report.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\review-report.md",
      "relative_path": "review-report.md",
      "exists": false
    },
    {
      "name": "outer-gate.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\outer-gate.json",
      "relative_path": "runs/2026-07-10/outer-gate.json",
      "exists": true,
      "size": 22542,
      "modified_at": "2026-07-10T09:36:18+08:00",
      "sha256": "b0314d85be661b240165c3236ed5fd6e0452232c8edf49a5459ac7d1b1b6f819"
    },
    {
      "name": "domestic-gate.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\domestic-gate.json",
      "relative_path": "runs/2026-07-10/domestic-gate.json",
      "exists": true,
      "size": 227241,
      "modified_at": "2026-07-10T09:36:33+08:00",
      "sha256": "b2f628dab8e82416929da31661ee46c97d0c363caf3b4096c41a6aa6a3efa715"
    },
    {
      "name": "emotion-trend-gate.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\emotion-trend-gate.json",
      "relative_path": "runs/2026-07-10/emotion-trend-gate.json",
      "exists": true,
      "size": 17430,
      "modified_at": "2026-07-10T09:36:35+08:00",
      "sha256": "9fcb03aab6687ca694f0ed21a831c3f7917d6b273be78a8c46ec866764d70ac7"
    },
    {
      "name": "gates-protocol.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\gates-protocol.json",
      "relative_path": "runs/2026-07-10/gates-protocol.json",
      "exists": true,
      "size": 18536,
      "modified_at": "2026-07-10T09:36:35+08:00",
      "sha256": "b52d0d263399cd23ec8522fad764643be275b6cf96ce17ebb272074f46d4b0fd"
    },
    {
      "name": "raw-watchlist.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\raw-watchlist.json",
      "relative_path": "runs/2026-07-10/raw-watchlist.json",
      "exists": true,
      "size": 1875166,
      "modified_at": "2026-07-10T09:36:00+08:00",
      "sha256": "a09c129d2fd566734e76ea85377a186b6f6be8f9f5cea519d083a166063ced69"
    },
    {
      "name": "filtered-pool.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\filtered-pool.json",
      "relative_path": "runs/2026-07-10/filtered-pool.json",
      "exists": true,
      "size": 2373243,
      "modified_at": "2026-07-10T09:36:00+08:00",
      "sha256": "413ef5149410fb80aff621bb559c82b6c58ee9ce7555d384bbadc1f7b7c31907"
    },
    {
      "name": "candidate-score.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\candidate-score.json",
      "relative_path": "runs/2026-07-10/candidate-score.json",
      "exists": true,
      "size": 841,
      "modified_at": "2026-07-10T09:36:36+08:00",
      "sha256": "6436075f3ec3c893d5e881f9a2216a10c5dbc6acbdaf8e50e78561142de84bf8"
    },
    {
      "name": "technical-check.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\technical-check.json",
      "relative_path": "runs/2026-07-10/technical-check.json",
      "exists": true,
      "size": 1515,
      "modified_at": "2026-07-10T09:36:36+08:00",
      "sha256": "9bbdfec123b60a45cc7ddcf2ae78b5f3561f898453895d1c7810a4c3602528c5"
    },
    {
      "name": "four-layer-tracking.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\four-layer-tracking.close.json",
      "relative_path": "four-layer-tracking.close.json",
      "exists": false
    },
    {
      "name": "four-layer-tracking.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\four-layer-tracking.morning.json",
      "relative_path": "runs/2026-07-10/four-layer-tracking.morning.json",
      "exists": true,
      "size": 124988,
      "modified_at": "2026-07-10T09:37:11+08:00",
      "sha256": "2b33f0bdca5b785e82a9e60dc8a1c346e48a27b45c915b82df03fb190dd59bac"
    },
    {
      "name": "four-layer-tracking.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\four-layer-tracking.noon.json",
      "relative_path": "four-layer-tracking.noon.json",
      "exists": false
    },
    {
      "name": "four-layer-tracking.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\four-layer-tracking.review.json",
      "relative_path": "four-layer-tracking.review.json",
      "exists": false
    },
    {
      "name": "strategy-benchmark.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\strategy-benchmark.close.json",
      "relative_path": "strategy-benchmark.close.json",
      "exists": false
    },
    {
      "name": "strategy-benchmark.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\strategy-benchmark.morning.json",
      "relative_path": "runs/2026-07-10/strategy-benchmark.morning.json",
      "exists": true,
      "size": 9451,
      "modified_at": "2026-07-10T09:37:12+08:00",
      "sha256": "7d0133b1522e1ba9748d559f360712e469b525014d27285a2a075f8d84a859ab"
    },
    {
      "name": "strategy-benchmark.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\strategy-benchmark.noon.json",
      "relative_path": "strategy-benchmark.noon.json",
      "exists": false
    },
    {
      "name": "strategy-benchmark.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\strategy-benchmark.review.json",
      "relative_path": "strategy-benchmark.review.json",
      "exists": false
    },
    {
      "name": "news-notice-sentiment.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\news-notice-sentiment.close.json",
      "relative_path": "news-notice-sentiment.close.json",
      "exists": false
    },
    {
      "name": "news-notice-sentiment.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\news-notice-sentiment.morning.json",
      "relative_path": "runs/2026-07-10/news-notice-sentiment.morning.json",
      "exists": true,
      "size": 23108,
      "modified_at": "2026-07-10T09:37:11+08:00",
      "sha256": "41b7c01d85e4fb386ed3ba7a4da2893a738b36bf615af3b9e05e874ff6dd2741"
    },
    {
      "name": "news-notice-sentiment.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\news-notice-sentiment.noon.json",
      "relative_path": "news-notice-sentiment.noon.json",
      "exists": false
    },
    {
      "name": "news-notice-sentiment.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\news-notice-sentiment.review.json",
      "relative_path": "news-notice-sentiment.review.json",
      "exists": false
    },
    {
      "name": "overnight-report-brief.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\overnight-report-brief.close.json",
      "relative_path": "overnight-report-brief.close.json",
      "exists": false
    },
    {
      "name": "multi-role-review.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\multi-role-review.close.json",
      "relative_path": "multi-role-review.close.json",
      "exists": false
    },
    {
      "name": "multi-role-review.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\multi-role-review.morning.json",
      "relative_path": "runs/2026-07-10/multi-role-review.morning.json",
      "exists": true,
      "size": 4160,
      "modified_at": "2026-07-10T09:37:12+08:00",
      "sha256": "b0c8dab1c5ff0ecc82d27ad952ee3997e689dbcacc5d16bfdf0d26dff568a420"
    },
    {
      "name": "multi-role-review.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\multi-role-review.noon.json",
      "relative_path": "multi-role-review.noon.json",
      "exists": false
    },
    {
      "name": "multi-role-review.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\multi-role-review.review.json",
      "relative_path": "multi-role-review.review.json",
      "exists": false
    },
    {
      "name": "report-quality-audit.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\report-quality-audit.close.json",
      "relative_path": "report-quality-audit.close.json",
      "exists": false
    },
    {
      "name": "report-quality-audit.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\report-quality-audit.morning.json",
      "relative_path": "runs/2026-07-10/report-quality-audit.morning.json",
      "exists": true,
      "size": 1398,
      "modified_at": "2026-07-10T09:37:13+08:00",
      "sha256": "657db739264c3f175803824e7483d3fa00611fd5a4c832e5228b655ef0d0062b"
    },
    {
      "name": "report-quality-audit.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\report-quality-audit.noon.json",
      "relative_path": "report-quality-audit.noon.json",
      "exists": false
    },
    {
      "name": "report-quality-audit.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\report-quality-audit.review.json",
      "relative_path": "report-quality-audit.review.json",
      "exists": false
    },
    {
      "name": "second-review.longxia.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\second-review.longxia.review.json",
      "relative_path": "second-review.longxia.review.json",
      "exists": false
    },
    {
      "name": "second-review.longxia.review.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\second-review.longxia.review.md",
      "relative_path": "second-review.longxia.review.md",
      "exists": false
    },
    {
      "name": "longxia-second-review-validation.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\longxia-second-review-validation.json",
      "relative_path": "longxia-second-review-validation.json",
      "exists": false
    },
    {
      "name": "longxia-second-review-validation.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\longxia-second-review-validation.md",
      "relative_path": "longxia-second-review-validation.md",
      "exists": false
    },
    {
      "name": "sector-split.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\sector-split.json",
      "relative_path": "runs/2026-07-10/sector-split.json",
      "exists": true,
      "size": 145256,
      "modified_at": "2026-07-10T09:36:36+08:00",
      "sha256": "9075ac6ab2dcaa005bd706f0375b930f5373c628b69fdb8bd88c09f2b616ebab"
    },
    {
      "name": "execution-inputs.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\execution-inputs.json",
      "relative_path": "execution-inputs.json",
      "exists": false
    },
    {
      "name": "execution-decision.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\execution-decision.json",
      "relative_path": "execution-decision.json",
      "exists": false
    },
    {
      "name": "morning-precheck.prefetch.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-precheck.prefetch.json",
      "relative_path": "runs/2026-07-10/morning-precheck.prefetch.json",
      "exists": true,
      "size": 2967,
      "modified_at": "2026-07-10T09:36:37+08:00",
      "sha256": "fcebaf44f8e9af10ca6d5207bad31d5b9e789e5c07ee8f8fd9b4fc473b1ad4e4"
    },
    {
      "name": "morning-risk-precheck.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\morning-risk-precheck.json",
      "relative_path": "runs/2026-07-10/morning-risk-precheck.json",
      "exists": true,
      "size": 4029,
      "modified_at": "2026-07-10T09:36:37+08:00",
      "sha256": "fc2e3455e0213bc31c7ac7d45b965cad10c0f0e8cfea3d85c237f55885b793b5"
    },
    {
      "name": "data-acquisition-health.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\data-acquisition-health.close.json",
      "relative_path": "data-acquisition-health.close.json",
      "exists": false
    },
    {
      "name": "data-acquisition-health.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\data-acquisition-health.morning.json",
      "relative_path": "runs/2026-07-10/data-acquisition-health.morning.json",
      "exists": true,
      "size": 9324,
      "modified_at": "2026-07-10T09:37:12+08:00",
      "sha256": "849f30e5b9801f9ab3f26185f7b351f48d7870a78f0b45242e9874c64f96db17"
    },
    {
      "name": "data-acquisition-health.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\data-acquisition-health.noon.json",
      "relative_path": "data-acquisition-health.noon.json",
      "exists": false
    },
    {
      "name": "data-acquisition-health.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\data-acquisition-health.review.json",
      "relative_path": "data-acquisition-health.review.json",
      "exists": false
    },
    {
      "name": "market-data.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\market-data.json",
      "relative_path": "market-data.json",
      "exists": false
    },
    {
      "name": "paper-trade-ledger.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\paper-trade-ledger.json",
      "relative_path": "paper-trade-ledger.json",
      "exists": false
    },
    {
      "name": "paper-trade-summary.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\paper-trade-summary.json",
      "relative_path": "paper-trade-summary.json",
      "exists": false
    },
    {
      "name": "close-confirmation.1501.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\close-confirmation.1501.json",
      "relative_path": "close-confirmation.1501.json",
      "exists": false
    },
    {
      "name": "close-watchlist.1501.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\close-watchlist.1501.json",
      "relative_path": "close-watchlist.1501.json",
      "exists": false
    },
    {
      "name": "close-snapshot.1501.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\close-snapshot.1501.json",
      "relative_path": "close-snapshot.1501.json",
      "exists": false
    },
    {
      "name": "close-confirmation.1501-run.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\close-confirmation.1501-run.json",
      "relative_path": "close-confirmation.1501-run.json",
      "exists": false
    },
    {
      "name": "pool-governance.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\pool-governance.json",
      "relative_path": "pool-governance.json",
      "exists": false
    },
    {
      "name": "workflow-manifest.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\workflow-manifest.json",
      "relative_path": "runs/2026-07-10/workflow-manifest.json",
      "exists": true,
      "size": 90719,
      "modified_at": "2026-07-10T09:37:13+08:00",
      "sha256": "d6ba8dd15c693154c0ca4a848798cfdad7be62d0b2577394f0cbcd968bd6100f"
    },
    {
      "name": "data-lineage.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-10\\data-lineage.json",
      "relative_path": "runs/2026-07-10/data-lineage.json",
      "exists": true,
      "size": 54289,
      "modified_at": "2026-07-10T09:37:13+08:00",
      "sha256": "9f555cf4415fb8e34450017287f1c3e12dbcecf6e2c46f4784d80e267fec624a"
    }
  ],
  "summary": {
    "reports_present": 1,
    "json_invalid": 0,
    "candidates_visible": 0,
    "four_layer_visible": 21,
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
