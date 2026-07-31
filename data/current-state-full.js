window.THREE_PERIOD_PANEL_STATE_FULL = {
  "schema_version": "web-panel-state/v1",
  "generated_at": "2026-07-31T20:00:25+08:00",
  "currentDate": "2026-07-31",
  "current_date": "2026-07-31",
  "panel_payload_mode": "full",
  "project": {
    "name": "tdx-ag-three-period-split",
    "base_dir": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split"
  },
  "run": {
    "date": "2026-07-31",
    "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31",
    "run_id": "20260731-review-200001352761",
    "period": "review",
    "status": "failed",
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
      "date": "2026-07-31",
      "generated_at": "",
      "recommendation_mode": "",
      "candidate_count": 0,
      "candidate_universe_count": 0,
      "scan_pool_count": 0,
      "handoff_count": 0,
      "buy_top3_count": 0,
      "json_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\close-report.json",
        "relative_path": "close-report.json",
        "exists": false
      },
      "markdown_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\close-report.md",
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
        "scheduled_at": "2026-07-31T14:50+08:00",
        "due": true,
        "automation_status": "precondition_failed",
        "automation_status_label": "前置条件失败",
        "diagnosis_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
        "manifest_status": "failed",
        "manifest_json_status": "ok",
        "manifest_path": "workflow-manifest.close.json",
        "precondition_gaps_cn": [],
        "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
      }
    },
    {
      "key": "morning",
      "label": "早报",
      "json_status": "missing",
      "markdown_status": "missing",
      "report_type": "morning-report",
      "date": "2026-07-31",
      "generated_at": "",
      "recommendation_mode": "",
      "candidate_count": 0,
      "candidate_universe_count": 0,
      "scan_pool_count": 0,
      "handoff_count": 0,
      "buy_top3_count": 0,
      "json_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\morning-report.json",
        "relative_path": "morning-report.json",
        "exists": false
      },
      "markdown_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\morning-report.md",
        "relative_path": "morning-report.md",
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
        "scheduled_time": "09:35",
        "scheduled_at": "2026-07-31T09:35+08:00",
        "due": true,
        "automation_status": "precondition_failed",
        "automation_status_label": "前置条件失败",
        "diagnosis_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
        "manifest_status": "failed",
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
      "date": "2026-07-31",
      "generated_at": "",
      "recommendation_mode": "",
      "candidate_count": 0,
      "candidate_universe_count": 0,
      "scan_pool_count": 0,
      "handoff_count": 0,
      "buy_top3_count": 0,
      "json_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\noon-report.json",
        "relative_path": "noon-report.json",
        "exists": false
      },
      "markdown_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\noon-report.md",
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
        "scheduled_at": "2026-07-31T11:35+08:00",
        "due": true,
        "automation_status": "precondition_failed",
        "automation_status_label": "前置条件失败",
        "diagnosis_cn": "当天早报未成功生成，午报不能补选新票。",
        "manifest_status": "failed",
        "manifest_json_status": "ok",
        "manifest_path": "workflow-manifest.noon.json",
        "precondition_gaps_cn": [
          "当天早报未成功生成，午报不能补选新票。"
        ],
        "recovery_boundary_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
      }
    },
    {
      "key": "review",
      "label": "复盘报",
      "json_status": "missing",
      "markdown_status": "missing",
      "report_type": "review-report",
      "date": "2026-07-31",
      "generated_at": "",
      "recommendation_mode": "",
      "candidate_count": 0,
      "candidate_universe_count": 0,
      "scan_pool_count": 0,
      "handoff_count": 0,
      "buy_top3_count": 0,
      "json_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\review-report.json",
        "relative_path": "review-report.json",
        "exists": false
      },
      "markdown_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\review-report.md",
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
        "scheduled_at": "2026-07-31T20:00+08:00",
        "due": true,
        "automation_status": "precondition_failed",
        "automation_status_label": "前置条件失败",
        "diagnosis_cn": "复盘缺少成功前三报：收盘报、早报、午报",
        "manifest_status": "failed",
        "manifest_json_status": "ok",
        "manifest_path": "workflow-manifest.review.json",
        "precondition_gaps_cn": [
          "复盘缺少成功前三报：收盘报、早报、午报"
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
      "score": 8,
      "evidence_count": 16,
      "missing_count": 0,
      "limitations_count": 0,
      "top_evidence": [
        "富时中国A50: +0.83%, 2026-07-31 14:35:11, sina_hq, a50_cfd",
        "道琼斯: +1.19%, 2026-07-31 04:56:45, sina_hq, index_realtime",
        "纳斯达克综合: +2.78%, 2026-07-31 05:30:00, sina_hq, index_realtime",
        "标普500: +1.66%, 2026-07-31 04:44:45, sina_hq, index_realtime"
      ],
      "reason": "美股三大指数平均 +1.88%；纳斯达克偏强 +2.78%；A50 偏强 +0.83%；A50归因偏顺风: 离岸中国资产风险偏好改善；美股三大指数归因偏顺风: 美股风险偏好改善；VIX归因偏逆风: 波动率上行，避险升温；美元兑离岸人民币归因偏顺风: 人民币压力缓和；黄金归因偏顺风: 美元走弱/宽松预期主导黄金定价；白银归因偏顺风: 工业需求/风险偏好主导白银定价；布伦特原油归因偏顺风: 供应恢复/风险缓和压低油价"
    },
    {
      "key": "domestic",
      "label": "国内闸门",
      "status": "headwind",
      "score": 0,
      "evidence_count": 5,
      "missing_count": 0,
      "limitations_count": 0,
      "top_evidence": [
        "policy_signal: 风险集中释放叠加海外回暖，科技赛道或有望迎来修复",
        "policy_signal: 避险资金集中涌入，创业板ETF期权成交创新高",
        "industry_news_signal: 日韩股市大反攻！韩国KOSPI指数一度暴涨超15%，SK海力士暴拉28%",
        "industry_news_signal: 港股异动丨两倍做多三星电子、两倍做多海力士高开近15%"
      ],
      "reason": "国内侧负面/监管/公告风险占优"
    },
    {
      "key": "emotion_trend",
      "label": "情绪/趋势闸门",
      "status": "headwind",
      "score": 7,
      "evidence_count": 11,
      "missing_count": 0,
      "limitations_count": 0,
      "top_evidence": [
        "今天是周五，短线接力强度按偏谨慎处理",
        "指数趋势偏顺风（涨跌幅 2.95%）。",
        "盘中趋势偏顺风（15分钟涨跌幅 0.38%）。",
        "成交额信号偏顺风，质量需复核。"
      ],
      "reason": "指数趋势偏顺风（涨跌幅 2.95%）；盘中趋势偏顺风（15分钟涨跌幅 0.38%）；成交额信号偏顺风，质量需复核；涨停约 104 只，跌停约 76 只；连板结构偏逆风，最高约 5 连板。"
    }
  ],
  "candidates": [],
  "candidate_source_context": {},
  "four_layer_tracking": {
    "status": "missing",
    "period": "review",
    "records": [],
    "summary": {},
    "tracking_coverage": {}
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
      "status": "missing",
      "period": "morning",
      "records": [],
      "summary": {},
      "tracking_coverage": {}
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
    "status": "missing",
    "covered_count": 0,
    "failed_count": 0,
    "query_symbol_count": 0,
    "source_groups": [],
    "source_run_date": "2026-07-31",
    "records": [],
    "final_ranking": {
      "items": [],
      "summary": ""
    },
    "file": {
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\overnight-report-brief.close.json",
      "relative_path": "overnight-report-brief.close.json",
      "exists": false
    }
  },
  "paper_trade": {
    "status": "missing",
    "ledger_status": "missing",
    "summary_status": "missing",
    "artifact_scope": "canonical",
    "date": "2026-07-31",
    "source_close_date": "",
    "ledger_matches_selected_close": true,
    "summary": {},
    "formal_targets": [],
    "records": [],
    "formal_records": [],
    "records_count": 0,
    "files": {
      "ledger": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\paper-trade-ledger.json",
        "relative_path": "paper-trade-ledger.json",
        "exists": false
      },
      "summary": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\paper-trade-summary.json",
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
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\rule-upgrade-proposals.json",
        "relative_path": "rule-upgrade-proposals.json",
        "exists": false
      },
      "approvals": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\rule-upgrade-approvals.json",
        "relative_path": "rule-upgrade-approvals.json",
        "exists": false
      },
      "learning_validation": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\learning-validation.json",
        "relative_path": "learning-validation.json",
        "exists": false
      },
      "implementation": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\rule-upgrade-implementation.json",
        "relative_path": "rule-upgrade-implementation.json",
        "exists": false
      }
    }
  },
  "trader_review": {
    "schema_version": "trader_review_workbench.v1",
    "status": "missing",
    "date": "2026-07-31",
    "title": "交易员复盘工作台",
    "one_liner": "正式票收益样本不足，复盘只做资料不足标记。 正式票收益偏弱但证据不足以证明选股逻辑失效，先按纪律内亏损和数据/执行缺口拆分。",
    "market_tone_label": "偏弱复盘",
    "emotion_score": 48,
    "formal_sample_count": 0,
    "side_channel_sample_count": 0,
    "formal_return_text": "正式票收益样本不足，复盘只做资料不足标记。",
    "side_return_text": "旁路样本收益未完整定价，只能继续观察。",
    "return_source_close_date": "2026-07-31",
    "return_backfill_date": "2026-07-31",
    "return_context_text": "2026-07-31 当前样本",
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
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\paper-trade-summary.json",
        "relative_path": "paper-trade-summary.json",
        "exists": false
      },
      "reverse_miss": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\reverse-miss.json",
        "relative_path": "reverse-miss.json",
        "exists": false
      },
      "ultra_short_review": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\ultra-short-review.json",
        "relative_path": "ultra-short-review.json",
        "exists": false
      },
      "longxia_second_review": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\second-review.longxia.review.json",
        "relative_path": "second-review.longxia.review.json",
        "exists": false
      },
      "longxia_second_review_validation": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\longxia-second-review-validation.json",
        "relative_path": "longxia-second-review-validation.json",
        "exists": false
      },
      "rule_upgrade_proposals": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\rule-upgrade-proposals.json",
        "relative_path": "rule-upgrade-proposals.json",
        "exists": false
      },
      "review_markdown": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\review-report.md",
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
          "status": "failed",
          "result_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
          "missing_or_risk_cn": [
            "计划时间：2026-07-31T14:50+08:00",
            "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          ]
        }
      ]
    },
    "morning": {
      "label": "早报",
      "nodes": [
        {
          "id": "morning_schedule_status",
          "order": 1,
          "title_cn": "早报自动化状态",
          "plain_goal_cn": "区分自动化错过、流程失败和数据源失败，避免把没运行误判成行情没取到。",
          "data_used_cn": [
            "workflow-manifest",
            "正式报告 JSON",
            "正式报告 Markdown",
            "当前时间"
          ],
          "source_method_cn": "由 Web 导出层读取运行记录和正式报告文件状态；只做展示和审计，不补跑、不选股。",
          "read_files": [
            "workflow-manifest.morning.json",
            "morning-report.json",
            "morning-report.md"
          ],
          "write_files": [],
          "status": "failed",
          "result_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
          "missing_or_risk_cn": [
            "计划时间：2026-07-31T09:35+08:00",
            "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
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
          "status": "failed",
          "result_cn": "当天早报未成功生成，午报不能补选新票。",
          "missing_or_risk_cn": [
            "计划时间：2026-07-31T11:35+08:00",
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
          "status": "failed",
          "result_cn": "复盘缺少成功前三报：收盘报、早报、午报",
          "missing_or_risk_cn": [
            "计划时间：2026-07-31T20:00+08:00",
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
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\outer-gate.json",
        "relative_path": "runs/2026-07-31/outer-gate.json",
        "exists": true,
        "size": 22628,
        "modified_at": "2026-07-31T14:35:24+08:00",
        "sha256": "e70fa0c10bf7b1887c25b63b71ea1110a16d83d4f4530e60214e8a0b3832cecf"
      }
    },
    {
      "name": "domestic-gate.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\domestic-gate.json",
        "relative_path": "runs/2026-07-31/domestic-gate.json",
        "exists": true,
        "size": 405104,
        "modified_at": "2026-07-31T14:35:43+08:00",
        "sha256": "6ec4c8d8ce425e0a170b8fdfc052e477e59ebf9a70054be351a6a5e015a130a9"
      }
    },
    {
      "name": "emotion-trend-gate.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\emotion-trend-gate.json",
        "relative_path": "runs/2026-07-31/emotion-trend-gate.json",
        "exists": true,
        "size": 16983,
        "modified_at": "2026-07-31T14:35:46+08:00",
        "sha256": "c70258dd5c482654d745b6a610674d5474121e8c0dc58dd1242582a9fdf6174b"
      }
    },
    {
      "name": "gates-protocol.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\gates-protocol.json",
        "relative_path": "runs/2026-07-31/gates-protocol.json",
        "exists": true,
        "size": 18679,
        "modified_at": "2026-07-31T14:35:46+08:00",
        "sha256": "d496e70425c288e7c45918c7e1eb38086130dfa63a2f3a20a158b2f61356e9d4"
      }
    },
    {
      "name": "raw-watchlist.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\raw-watchlist.json",
        "relative_path": "raw-watchlist.json",
        "exists": false
      }
    },
    {
      "name": "filtered-pool.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\filtered-pool.json",
        "relative_path": "filtered-pool.json",
        "exists": false
      }
    },
    {
      "name": "candidate-score.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\candidate-score.json",
        "relative_path": "candidate-score.json",
        "exists": false
      }
    },
    {
      "name": "technical-check.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\technical-check.json",
        "relative_path": "technical-check.json",
        "exists": false
      }
    },
    {
      "name": "four-layer-tracking.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\four-layer-tracking.close.json",
        "relative_path": "four-layer-tracking.close.json",
        "exists": false
      }
    },
    {
      "name": "four-layer-tracking.morning.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\four-layer-tracking.morning.json",
        "relative_path": "four-layer-tracking.morning.json",
        "exists": false
      }
    },
    {
      "name": "four-layer-tracking.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\four-layer-tracking.noon.json",
        "relative_path": "four-layer-tracking.noon.json",
        "exists": false
      }
    },
    {
      "name": "four-layer-tracking.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\four-layer-tracking.review.json",
        "relative_path": "four-layer-tracking.review.json",
        "exists": false
      }
    },
    {
      "name": "strategy-benchmark.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\strategy-benchmark.close.json",
        "relative_path": "strategy-benchmark.close.json",
        "exists": false
      }
    },
    {
      "name": "strategy-benchmark.morning.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\strategy-benchmark.morning.json",
        "relative_path": "strategy-benchmark.morning.json",
        "exists": false
      }
    },
    {
      "name": "strategy-benchmark.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\strategy-benchmark.noon.json",
        "relative_path": "strategy-benchmark.noon.json",
        "exists": false
      }
    },
    {
      "name": "strategy-benchmark.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\strategy-benchmark.review.json",
        "relative_path": "strategy-benchmark.review.json",
        "exists": false
      }
    },
    {
      "name": "news-notice-sentiment.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\news-notice-sentiment.close.json",
        "relative_path": "news-notice-sentiment.close.json",
        "exists": false
      }
    },
    {
      "name": "news-notice-sentiment.morning.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\news-notice-sentiment.morning.json",
        "relative_path": "news-notice-sentiment.morning.json",
        "exists": false
      }
    },
    {
      "name": "news-notice-sentiment.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\news-notice-sentiment.noon.json",
        "relative_path": "news-notice-sentiment.noon.json",
        "exists": false
      }
    },
    {
      "name": "news-notice-sentiment.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\news-notice-sentiment.review.json",
        "relative_path": "news-notice-sentiment.review.json",
        "exists": false
      }
    },
    {
      "name": "overnight-report-brief.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\overnight-report-brief.close.json",
        "relative_path": "overnight-report-brief.close.json",
        "exists": false
      }
    },
    {
      "name": "multi-role-review.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\multi-role-review.close.json",
        "relative_path": "multi-role-review.close.json",
        "exists": false
      }
    },
    {
      "name": "multi-role-review.morning.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\multi-role-review.morning.json",
        "relative_path": "multi-role-review.morning.json",
        "exists": false
      }
    },
    {
      "name": "multi-role-review.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\multi-role-review.noon.json",
        "relative_path": "multi-role-review.noon.json",
        "exists": false
      }
    },
    {
      "name": "multi-role-review.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\multi-role-review.review.json",
        "relative_path": "multi-role-review.review.json",
        "exists": false
      }
    },
    {
      "name": "report-quality-audit.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\report-quality-audit.close.json",
        "relative_path": "report-quality-audit.close.json",
        "exists": false
      }
    },
    {
      "name": "report-quality-audit.morning.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\report-quality-audit.morning.json",
        "relative_path": "report-quality-audit.morning.json",
        "exists": false
      }
    },
    {
      "name": "report-quality-audit.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\report-quality-audit.noon.json",
        "relative_path": "report-quality-audit.noon.json",
        "exists": false
      }
    },
    {
      "name": "report-quality-audit.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\report-quality-audit.review.json",
        "relative_path": "report-quality-audit.review.json",
        "exists": false
      }
    },
    {
      "name": "second-review.longxia.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\second-review.longxia.review.json",
        "relative_path": "second-review.longxia.review.json",
        "exists": false
      }
    },
    {
      "name": "second-review.longxia.review.md",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\second-review.longxia.review.md",
        "relative_path": "second-review.longxia.review.md",
        "exists": false
      }
    },
    {
      "name": "longxia-second-review-validation.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\longxia-second-review-validation.json",
        "relative_path": "longxia-second-review-validation.json",
        "exists": false
      }
    },
    {
      "name": "longxia-second-review-validation.md",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\longxia-second-review-validation.md",
        "relative_path": "longxia-second-review-validation.md",
        "exists": false
      }
    },
    {
      "name": "sector-split.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\sector-split.json",
        "relative_path": "sector-split.json",
        "exists": false
      }
    },
    {
      "name": "execution-inputs.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\execution-inputs.json",
        "relative_path": "execution-inputs.json",
        "exists": false
      }
    },
    {
      "name": "execution-decision.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\execution-decision.json",
        "relative_path": "execution-decision.json",
        "exists": false
      }
    },
    {
      "name": "morning-precheck.prefetch.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\morning-precheck.prefetch.json",
        "relative_path": "morning-precheck.prefetch.json",
        "exists": false
      }
    },
    {
      "name": "morning-risk-precheck.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\morning-risk-precheck.json",
        "relative_path": "morning-risk-precheck.json",
        "exists": false
      }
    },
    {
      "name": "data-acquisition-health.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\data-acquisition-health.close.json",
        "relative_path": "data-acquisition-health.close.json",
        "exists": false
      }
    },
    {
      "name": "data-acquisition-health.morning.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\data-acquisition-health.morning.json",
        "relative_path": "data-acquisition-health.morning.json",
        "exists": false
      }
    },
    {
      "name": "data-acquisition-health.noon.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\data-acquisition-health.noon.json",
        "relative_path": "data-acquisition-health.noon.json",
        "exists": false
      }
    },
    {
      "name": "data-acquisition-health.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\data-acquisition-health.review.json",
        "relative_path": "data-acquisition-health.review.json",
        "exists": false
      }
    },
    {
      "name": "market-data.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\market-data.json",
        "relative_path": "market-data.json",
        "exists": false
      }
    },
    {
      "name": "paper-trade-ledger.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\paper-trade-ledger.json",
        "relative_path": "paper-trade-ledger.json",
        "exists": false
      }
    },
    {
      "name": "paper-trade-summary.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\paper-trade-summary.json",
        "relative_path": "paper-trade-summary.json",
        "exists": false
      }
    },
    {
      "name": "close-confirmation.1501.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\close-confirmation.1501.json",
        "relative_path": "close-confirmation.1501.json",
        "exists": false
      }
    },
    {
      "name": "close-watchlist.1501.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\close-watchlist.1501.json",
        "relative_path": "close-watchlist.1501.json",
        "exists": false
      }
    },
    {
      "name": "close-snapshot.1501.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\close-snapshot.1501.json",
        "relative_path": "close-snapshot.1501.json",
        "exists": false
      }
    },
    {
      "name": "close-confirmation.1501-run.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\close-confirmation.1501-run.json",
        "relative_path": "close-confirmation.1501-run.json",
        "exists": false
      }
    },
    {
      "name": "pool-governance.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\pool-governance.json",
        "relative_path": "pool-governance.json",
        "exists": false
      }
    },
    {
      "name": "workflow-manifest.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\workflow-manifest.json",
        "relative_path": "runs/2026-07-31/workflow-manifest.json",
        "exists": true,
        "size": 56683,
        "modified_at": "2026-07-31T20:00:24+08:00",
        "sha256": "1c3b04bbed086fdb2092ccd94d60879295d228be24a04654f839fe3bce8f1736"
      }
    },
    {
      "name": "data-lineage.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\data-lineage.json",
        "relative_path": "runs/2026-07-31/data-lineage.json",
        "exists": true,
        "size": 20588,
        "modified_at": "2026-07-31T20:00:24+08:00",
        "sha256": "37ffd7c2a49334d3d35b01bc44499ee9b5671543decd4ecbf5b8a8219a753565"
      }
    },
    {
      "name": "raw-watchlist/",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\raw-watchlist",
        "relative_path": "raw-watchlist/",
        "exists": false
      }
    }
  ],
  "automation_schedule": {
    "by_status": {
      "precondition_failed": 4
    },
    "items": [
      {
        "period": "close",
        "label": "收盘报",
        "status": "precondition_failed",
        "reason_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
        "scheduled_at": "2026-07-31T14:50+08:00",
        "recovery_policy_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
      },
      {
        "period": "morning",
        "label": "早报",
        "status": "precondition_failed",
        "reason_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
        "scheduled_at": "2026-07-31T09:35+08:00",
        "recovery_policy_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
      },
      {
        "period": "noon",
        "label": "午报",
        "status": "precondition_failed",
        "reason_cn": "当天早报未成功生成，午报不能补选新票。",
        "scheduled_at": "2026-07-31T11:35+08:00",
        "recovery_policy_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
      },
      {
        "period": "review",
        "label": "复盘报",
        "status": "precondition_failed",
        "reason_cn": "复盘缺少成功前三报：收盘报、早报、午报",
        "scheduled_at": "2026-07-31T20:00+08:00",
        "recovery_policy_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
      }
    ],
    "missed_count": 0,
    "failed_count": 4,
    "incomplete_count": 0
  },
  "web_panel_status_summary": {
    "schema_version": "web-panel-status-summary/v1",
    "currentDate": "2026-07-31",
    "current_date": "2026-07-31",
    "status": "empty",
    "headline_cn": "当前日期 2026-07-31：0/4 四报已生成，前置失败 4 项",
    "report_ready_count": 0,
    "report_total_count": 4,
    "status_detail_counts": {
      "missing_count": 55,
      "invalid_count": 4,
      "incomplete_count": 0,
      "headwind_count": 2,
      "stale_count": 0,
      "empty_count": 0
    },
    "schedule_counts": {
      "precondition_failed": 4
    },
    "schedule_items": [
      {
        "period": "close",
        "label": "收盘报",
        "status": "precondition_failed",
        "reason_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
        "scheduled_at": "2026-07-31T14:50+08:00",
        "recovery_policy_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
      },
      {
        "period": "morning",
        "label": "早报",
        "status": "precondition_failed",
        "reason_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
        "scheduled_at": "2026-07-31T09:35+08:00",
        "recovery_policy_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
      },
      {
        "period": "noon",
        "label": "午报",
        "status": "precondition_failed",
        "reason_cn": "当天早报未成功生成，午报不能补选新票。",
        "scheduled_at": "2026-07-31T11:35+08:00",
        "recovery_policy_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
      },
      {
        "period": "review",
        "label": "复盘报",
        "status": "precondition_failed",
        "reason_cn": "复盘缺少成功前三报：收盘报、早报、午报",
        "scheduled_at": "2026-07-31T20:00+08:00",
        "recovery_policy_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
      }
    ],
    "missing_reports": [
      "close",
      "morning",
      "noon",
      "review"
    ],
    "user_visible_note_cn": "顶部状态条只统计当前应当已经落盘的异常项；复盘未到时间、链路说明性节点和环境偏谨慎不再算作缺失或扫描不完整。"
  },
  "top_status_summary": {
    "schema_version": "web-panel-status-summary/v1",
    "currentDate": "2026-07-31",
    "current_date": "2026-07-31",
    "status": "empty",
    "headline_cn": "当前日期 2026-07-31：0/4 四报已生成，前置失败 4 项",
    "report_ready_count": 0,
    "report_total_count": 4,
    "status_detail_counts": {
      "missing_count": 55,
      "invalid_count": 4,
      "incomplete_count": 0,
      "headwind_count": 2,
      "stale_count": 0,
      "empty_count": 0
    },
    "schedule_counts": {
      "precondition_failed": 4
    },
    "schedule_items": [
      {
        "period": "close",
        "label": "收盘报",
        "status": "precondition_failed",
        "reason_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
        "scheduled_at": "2026-07-31T14:50+08:00",
        "recovery_policy_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
      },
      {
        "period": "morning",
        "label": "早报",
        "status": "precondition_failed",
        "reason_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
        "scheduled_at": "2026-07-31T09:35+08:00",
        "recovery_policy_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
      },
      {
        "period": "noon",
        "label": "午报",
        "status": "precondition_failed",
        "reason_cn": "当天早报未成功生成，午报不能补选新票。",
        "scheduled_at": "2026-07-31T11:35+08:00",
        "recovery_policy_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
      },
      {
        "period": "review",
        "label": "复盘报",
        "status": "precondition_failed",
        "reason_cn": "复盘缺少成功前三报：收盘报、早报、午报",
        "scheduled_at": "2026-07-31T20:00+08:00",
        "recovery_policy_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
      }
    ],
    "missing_reports": [
      "close",
      "morning",
      "noon",
      "review"
    ],
    "user_visible_note_cn": "顶部状态条只统计当前应当已经落盘的异常项；复盘未到时间、链路说明性节点和环境偏谨慎不再算作缺失或扫描不完整。"
  },
  "visibility_audit": {},
  "artifacts": [
    {
      "name": "close-report.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\close-report.json",
      "relative_path": "close-report.json",
      "exists": false
    },
    {
      "name": "morning-report.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\morning-report.json",
      "relative_path": "morning-report.json",
      "exists": false
    },
    {
      "name": "noon-report.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\noon-report.json",
      "relative_path": "noon-report.json",
      "exists": false
    },
    {
      "name": "review-report.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\review-report.json",
      "relative_path": "review-report.json",
      "exists": false
    },
    {
      "name": "close-report.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\close-report.md",
      "relative_path": "close-report.md",
      "exists": false
    },
    {
      "name": "morning-report.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\morning-report.md",
      "relative_path": "morning-report.md",
      "exists": false
    },
    {
      "name": "noon-report.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\noon-report.md",
      "relative_path": "noon-report.md",
      "exists": false
    },
    {
      "name": "review-report.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\review-report.md",
      "relative_path": "review-report.md",
      "exists": false
    },
    {
      "name": "outer-gate.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\outer-gate.json",
      "relative_path": "runs/2026-07-31/outer-gate.json",
      "exists": true,
      "size": 22628,
      "modified_at": "2026-07-31T14:35:24+08:00",
      "sha256": "e70fa0c10bf7b1887c25b63b71ea1110a16d83d4f4530e60214e8a0b3832cecf"
    },
    {
      "name": "domestic-gate.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\domestic-gate.json",
      "relative_path": "runs/2026-07-31/domestic-gate.json",
      "exists": true,
      "size": 405104,
      "modified_at": "2026-07-31T14:35:43+08:00",
      "sha256": "6ec4c8d8ce425e0a170b8fdfc052e477e59ebf9a70054be351a6a5e015a130a9"
    },
    {
      "name": "emotion-trend-gate.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\emotion-trend-gate.json",
      "relative_path": "runs/2026-07-31/emotion-trend-gate.json",
      "exists": true,
      "size": 16983,
      "modified_at": "2026-07-31T14:35:46+08:00",
      "sha256": "c70258dd5c482654d745b6a610674d5474121e8c0dc58dd1242582a9fdf6174b"
    },
    {
      "name": "gates-protocol.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\gates-protocol.json",
      "relative_path": "runs/2026-07-31/gates-protocol.json",
      "exists": true,
      "size": 18679,
      "modified_at": "2026-07-31T14:35:46+08:00",
      "sha256": "d496e70425c288e7c45918c7e1eb38086130dfa63a2f3a20a158b2f61356e9d4"
    },
    {
      "name": "raw-watchlist.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\raw-watchlist.json",
      "relative_path": "raw-watchlist.json",
      "exists": false
    },
    {
      "name": "filtered-pool.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\filtered-pool.json",
      "relative_path": "filtered-pool.json",
      "exists": false
    },
    {
      "name": "candidate-score.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\candidate-score.json",
      "relative_path": "candidate-score.json",
      "exists": false
    },
    {
      "name": "technical-check.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\technical-check.json",
      "relative_path": "technical-check.json",
      "exists": false
    },
    {
      "name": "four-layer-tracking.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\four-layer-tracking.close.json",
      "relative_path": "four-layer-tracking.close.json",
      "exists": false
    },
    {
      "name": "four-layer-tracking.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\four-layer-tracking.morning.json",
      "relative_path": "four-layer-tracking.morning.json",
      "exists": false
    },
    {
      "name": "four-layer-tracking.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\four-layer-tracking.noon.json",
      "relative_path": "four-layer-tracking.noon.json",
      "exists": false
    },
    {
      "name": "four-layer-tracking.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\four-layer-tracking.review.json",
      "relative_path": "four-layer-tracking.review.json",
      "exists": false
    },
    {
      "name": "strategy-benchmark.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\strategy-benchmark.close.json",
      "relative_path": "strategy-benchmark.close.json",
      "exists": false
    },
    {
      "name": "strategy-benchmark.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\strategy-benchmark.morning.json",
      "relative_path": "strategy-benchmark.morning.json",
      "exists": false
    },
    {
      "name": "strategy-benchmark.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\strategy-benchmark.noon.json",
      "relative_path": "strategy-benchmark.noon.json",
      "exists": false
    },
    {
      "name": "strategy-benchmark.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\strategy-benchmark.review.json",
      "relative_path": "strategy-benchmark.review.json",
      "exists": false
    },
    {
      "name": "news-notice-sentiment.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\news-notice-sentiment.close.json",
      "relative_path": "news-notice-sentiment.close.json",
      "exists": false
    },
    {
      "name": "news-notice-sentiment.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\news-notice-sentiment.morning.json",
      "relative_path": "news-notice-sentiment.morning.json",
      "exists": false
    },
    {
      "name": "news-notice-sentiment.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\news-notice-sentiment.noon.json",
      "relative_path": "news-notice-sentiment.noon.json",
      "exists": false
    },
    {
      "name": "news-notice-sentiment.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\news-notice-sentiment.review.json",
      "relative_path": "news-notice-sentiment.review.json",
      "exists": false
    },
    {
      "name": "overnight-report-brief.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\overnight-report-brief.close.json",
      "relative_path": "overnight-report-brief.close.json",
      "exists": false
    },
    {
      "name": "multi-role-review.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\multi-role-review.close.json",
      "relative_path": "multi-role-review.close.json",
      "exists": false
    },
    {
      "name": "multi-role-review.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\multi-role-review.morning.json",
      "relative_path": "multi-role-review.morning.json",
      "exists": false
    },
    {
      "name": "multi-role-review.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\multi-role-review.noon.json",
      "relative_path": "multi-role-review.noon.json",
      "exists": false
    },
    {
      "name": "multi-role-review.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\multi-role-review.review.json",
      "relative_path": "multi-role-review.review.json",
      "exists": false
    },
    {
      "name": "report-quality-audit.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\report-quality-audit.close.json",
      "relative_path": "report-quality-audit.close.json",
      "exists": false
    },
    {
      "name": "report-quality-audit.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\report-quality-audit.morning.json",
      "relative_path": "report-quality-audit.morning.json",
      "exists": false
    },
    {
      "name": "report-quality-audit.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\report-quality-audit.noon.json",
      "relative_path": "report-quality-audit.noon.json",
      "exists": false
    },
    {
      "name": "report-quality-audit.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\report-quality-audit.review.json",
      "relative_path": "report-quality-audit.review.json",
      "exists": false
    },
    {
      "name": "second-review.longxia.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\second-review.longxia.review.json",
      "relative_path": "second-review.longxia.review.json",
      "exists": false
    },
    {
      "name": "second-review.longxia.review.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\second-review.longxia.review.md",
      "relative_path": "second-review.longxia.review.md",
      "exists": false
    },
    {
      "name": "longxia-second-review-validation.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\longxia-second-review-validation.json",
      "relative_path": "longxia-second-review-validation.json",
      "exists": false
    },
    {
      "name": "longxia-second-review-validation.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\longxia-second-review-validation.md",
      "relative_path": "longxia-second-review-validation.md",
      "exists": false
    },
    {
      "name": "sector-split.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\sector-split.json",
      "relative_path": "sector-split.json",
      "exists": false
    },
    {
      "name": "execution-inputs.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\execution-inputs.json",
      "relative_path": "execution-inputs.json",
      "exists": false
    },
    {
      "name": "execution-decision.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\execution-decision.json",
      "relative_path": "execution-decision.json",
      "exists": false
    },
    {
      "name": "morning-precheck.prefetch.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\morning-precheck.prefetch.json",
      "relative_path": "morning-precheck.prefetch.json",
      "exists": false
    },
    {
      "name": "morning-risk-precheck.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\morning-risk-precheck.json",
      "relative_path": "morning-risk-precheck.json",
      "exists": false
    },
    {
      "name": "data-acquisition-health.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\data-acquisition-health.close.json",
      "relative_path": "data-acquisition-health.close.json",
      "exists": false
    },
    {
      "name": "data-acquisition-health.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\data-acquisition-health.morning.json",
      "relative_path": "data-acquisition-health.morning.json",
      "exists": false
    },
    {
      "name": "data-acquisition-health.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\data-acquisition-health.noon.json",
      "relative_path": "data-acquisition-health.noon.json",
      "exists": false
    },
    {
      "name": "data-acquisition-health.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\data-acquisition-health.review.json",
      "relative_path": "data-acquisition-health.review.json",
      "exists": false
    },
    {
      "name": "market-data.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\market-data.json",
      "relative_path": "market-data.json",
      "exists": false
    },
    {
      "name": "paper-trade-ledger.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\paper-trade-ledger.json",
      "relative_path": "paper-trade-ledger.json",
      "exists": false
    },
    {
      "name": "paper-trade-summary.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\paper-trade-summary.json",
      "relative_path": "paper-trade-summary.json",
      "exists": false
    },
    {
      "name": "close-confirmation.1501.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\close-confirmation.1501.json",
      "relative_path": "close-confirmation.1501.json",
      "exists": false
    },
    {
      "name": "close-watchlist.1501.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\close-watchlist.1501.json",
      "relative_path": "close-watchlist.1501.json",
      "exists": false
    },
    {
      "name": "close-snapshot.1501.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\close-snapshot.1501.json",
      "relative_path": "close-snapshot.1501.json",
      "exists": false
    },
    {
      "name": "close-confirmation.1501-run.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\close-confirmation.1501-run.json",
      "relative_path": "close-confirmation.1501-run.json",
      "exists": false
    },
    {
      "name": "pool-governance.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\pool-governance.json",
      "relative_path": "pool-governance.json",
      "exists": false
    },
    {
      "name": "workflow-manifest.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\workflow-manifest.json",
      "relative_path": "runs/2026-07-31/workflow-manifest.json",
      "exists": true,
      "size": 56683,
      "modified_at": "2026-07-31T20:00:24+08:00",
      "sha256": "1c3b04bbed086fdb2092ccd94d60879295d228be24a04654f839fe3bce8f1736"
    },
    {
      "name": "data-lineage.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-31\\data-lineage.json",
      "relative_path": "runs/2026-07-31/data-lineage.json",
      "exists": true,
      "size": 20588,
      "modified_at": "2026-07-31T20:00:24+08:00",
      "sha256": "37ffd7c2a49334d3d35b01bc44499ee9b5671543decd4ecbf5b8a8219a753565"
    }
  ],
  "summary": {
    "reports_present": 0,
    "json_invalid": 0,
    "candidates_visible": 0,
    "four_layer_visible": 0,
    "rule_upgrade_pending": 0,
    "trader_review_status": "missing",
    "data_sources_ok": 6,
    "warnings": 0,
    "automation_missed": 0,
    "automation_failed": 4,
    "automation_incomplete": 0,
    "lineage_nodes": 39,
    "automation_status_counts": {
      "precondition_failed": 4
    },
    "panel_payload_mode": "full"
  },
  "warnings": [],
  "deferred_full_state_keys": []
};
