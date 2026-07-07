window.THREE_PERIOD_PANEL_STATE_FULL = {
  "schema_version": "web-panel-state/v1",
  "generated_at": "2026-07-07T11:37:17+08:00",
  "currentDate": "2026-07-07",
  "current_date": "2026-07-07",
  "panel_payload_mode": "full",
  "project": {
    "name": "tdx-ag-three-period-split",
    "base_dir": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split"
  },
  "run": {
    "date": "2026-07-07",
    "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07",
    "run_id": "20260707-noon-113500973529",
    "period": "noon",
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
      "date": "2026-07-07",
      "generated_at": "",
      "recommendation_mode": "",
      "candidate_count": 0,
      "candidate_universe_count": 0,
      "scan_pool_count": 0,
      "handoff_count": 0,
      "buy_top3_count": 0,
      "json_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\close-report.json",
        "relative_path": "close-report.json",
        "exists": false
      },
      "markdown_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\close-report.md",
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
        "scheduled_at": "2026-07-07T14:50+08:00",
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
      "date": "2026-07-07",
      "generated_at": "2026-07-07T09:37:17.703949+08:00",
      "recommendation_mode": "observe",
      "candidate_count": 2,
      "candidate_universe_count": 2,
      "scan_pool_count": 0,
      "handoff_count": 1,
      "buy_top3_count": 0,
      "json_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-report.json",
        "relative_path": "runs/2026-07-07/morning-report.json",
        "exists": true,
        "size": 569308,
        "modified_at": "2026-07-07T09:37:50+08:00",
        "sha256": "f5aa85b2d3e8e819cfb6c889716452e1e261fa49a758b67d095eab998cb47ea5"
      },
      "markdown_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-report.md",
        "relative_path": "runs/2026-07-07/morning-report.md",
        "exists": true,
        "size": 6265,
        "modified_at": "2026-07-07T09:37:50+08:00",
        "sha256": "5b3e6b63f9ed8f472cc3ad08ef135a154136fed4be56f71c4bffc68a60494f83"
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
        "full_text": "【结论】\n- 当前判断：观察，不买入。\n- 仓位建议：轻仓。\n- 原因：没有候选满足买入前三名 准入条件，只观察。\n- 盘前预取：已提前读取昨日对象、隔夜新闻公告和外围/国内背景；目标 2 只。\n- 风险快检：继续持有 2 只，观察 0 只，减仓 0 只，退出 0 只。\n- 早报口径：这些结论只复核昨日尾盘模拟持仓，不重新选股。\n- 昨日验证对象：\n  - 天味食品（昨日尾盘模拟买入对象） → 继续持有观察，盘前未见硬风险，竞价未触发退出条件\n  - 史丹利（昨日尾盘模拟买入对象） → 继续持有观察，盘前未见硬风险，竞价未触发退出条件\n\n【三闸门】\n- 外围结论：顺风，适合继续观察机会。\n- 关键数据：富时中国A50: -0.29%, 2026-07-07 09:36:31；道琼斯: +0.29%, 2026-07-07 04:48:08；纳斯达克综合: +1.12%, 2026-07-07 05:30:00；标普500: +0.72%, 2026-07-07 04:43:46；VIX恐慌指数期货: +0.02%, 2026-07-07 09:36:29；离岸人民币（香港）: -0.04%, 2026-07-07 09:36:22。\n- 正面证据：美股三大指数平均 +0.71%；纳斯达克偏强 +1.12%；美股三大指数归因偏顺风: 美股风险偏好改善。\n- 负面证据：VIX归因偏逆风: 波动率上行，避险升温；布伦特原油归因偏逆风: 地缘冲突/供应中断或通胀压力推升风险。\n- 对 A 股影响：外围不是强顺风，只能给结构性方向参考，不能单独支持尾盘主攻。\n- 国内结论：风险优先；国内侧风险偏高，环境偏谨慎；只降低环境置信度和仓位语气，候选是否进入买入名单仍看公告、技术、评分和数据质量。\n- 影响：国内侧偏谨慎，只影响环境置信度和仓位语气，不直接卡买入名单。\n- 板块响应：部分共振；主线强度：弱；证据：新型城镇.BIPV概念.节能环保.近期复牌.装修装饰 强度 1.0；周期股.机器人概念.能源金属 强度 1.0；AI 强度 1.0。\n- 正向催化：\n  1. 极光推送携手澎博财经：构建低延迟、高可靠的金融资讯分发通道；类型：政策催化；可交易性：强；证据：一、 衍生品资讯应用面临的消息下发考验 与普通资讯类APP不同，澎博财经的该行业的移动端应用移动端应用在消息推送机制上，面临着更为严苛的客观高的技术要求： 1.极高的时间敏感性要求 期货市场的行情异动和重大宏观数据(如非...\n  2. 7月7日证券之星早间消息汇总：深交所发布关于中公教育股票交易情况的通报；类型：政策催化；可交易性：中；证据：万华化学公告称，预计2026年半年度归属于上市公司股东的净利润为98亿元-104亿元，同比增长60.05%-69.85%。2026年上半年受国际政治因素与地缘冲突影响，全球化工原料价格大幅度上涨，叠加部分地区供需格局改变...\n- 风险提示：\n  1. 7月7日证券之星早间消息汇总：深交所发布关于中公教育股票交易情况的通报；类型：监管风险；严重度：强；证据：万华化学公告称，预计2026年半年度归属于上市公司股东的净利润为98亿元-104亿元，同比增长60.05%-69.85%。2026年上半年受国际政治因素与地缘冲突影响，全球化工原料价格大幅度上涨，叠加部分地区供需格局改变...\n  3. ESG双奖加身，来凯医药-B(2105)的可持续价值获肯定；类型：监管风险；严重度：中；证据：后续Vasque Bio达成符合特定条件（与LAE118的使用相关）的合格战略合作或收购交易，来凯还将有权获得最高战略交易价值50%额外付款。 三笔交易的合作方覆盖跨国药企、国内头部药企和海外专业Biotech，贯穿临床...\n- 国内信息增强：国内关注方向：新型城镇、BIPV概念、节能环保。\n- 国内信息增强：当天新增国内证据 5 条，其中 A股政策/产业 5 条，A股公告 0 条。\n- 国内信息增强：国内信息暂未直接命中自选股，作为环境和方向参考。\n- 关键事件：7月7日证券之星早间消息汇总：深交所发布关于中公教育股票交易情况的通报；时间：2026-07-07；影响：中；方向：方向待确认；关联：未直接命中自选股。\n- 关键事件：ESG双奖加身，来凯医药-B(2105)的可持续价值获肯定；时间：2026-07-07；影响：中；方向：医药；关联：未直接命中自选股。\n- 关键事件：“中泰财富30”发布高端买方投顾人才培养计划；时间：2026-07-07；影响：中；方向：方向待确认；关联：未直接命中自选股。\n- 情绪/趋势：逆风，不适合进攻。依据：指数整体中性，平均涨跌幅约 -0.10%\n\n【板块裂变】\n- 数据缺口：未生成可展示板块主线。\n- 事件整理后的关注方向：医药、AI。\n\n【候选结论】\n- 今日不输出买入前三名。以下只是观察或空仓结论，不构成买入建议。\n  - 观察1：天味食品 / 603317 / B类观察 / 技术/资金行为池 / 调味品 / 综合分 0.605 / 入场风格：不追高；竞价/开盘：部分确认；相对强弱：偏强（自选池第1/2，分位1.0）；不追原因：没有追高硬伤，但还要看量能、分时和尾盘承接 / 风险：技术面降级 / 技术面：技术面一般，降级观察 / 不能作为买入候选 / 原因：换手率异常，需降级观察；换手率 0.16% 不在纪律区间\n- 模拟持仓继续跟踪对象：\n  - 天味食品 / 603317 / B类观察 / 技术/资金行为池 / 主线映射：调味品 / 入场风格：不追高；竞价/开盘：部分确认；相对强弱：偏强（自选池第1/2，分位1.0）；不追原因：没有追高硬伤，但还要看量能、分时和尾盘承接\n\n【执行与风控】\n- 仓位建议：轻仓\n- 止盈原则：达到计划收益或冲高回落时先兑现。\n- 止损原则：跌破失效条件或技术面不合格时退出 / 放弃。\n- 失效条件：候选公告、技术面、数据质量、主线映射或尾盘承接恶化。\n\n【铁律提醒】\n- T+1纪律\n- 不打板\n- 涨幅<3%\n- 总仓位受控\n- 绝不补仓死扛\n- 看不清就不买\n",
        "excerpt": "【结论】\n- 当前判断：观察，不买入。\n- 仓位建议：轻仓。\n- 原因：没有候选满足买入前三名 准入条件，只观察。\n- 盘前预取：已提前读取昨日对象、隔夜新闻公告和外围/国内背景；目标 2 只。\n- 风险快检：继续持有 2 只，观察 0 只，减仓 0 只，退出 0 只。\n- 早报口径：这些结论只复核昨日尾盘模拟持仓，不重新选股。\n- 昨日验证对象：\n- 天味食品（昨日尾盘模拟买入对象） → 继续持有观察，盘前未见硬风险，竞价未触发退出条件\n- 史丹利（昨日尾盘模拟买入对象） → 继续持有观察，盘前未见硬风险，竞价未触发退出条件\n【三闸门】\n- 外围结论：顺风，适合继续观察机会。\n- 关键数据：富时中国A50: -0.29%, 2026-07-07 09:36:31；道琼斯: +0.29%, 2026-07-07 04:48:08；纳斯达克综合: +1.12%, 2026-07-07 05:30:00；标普500: +0.72%, 2026-07-07 04:43:46；VIX恐慌指数期货: +0.02%, 2026-07-07 09:36:29；离岸人民币（香港）: -0.04%, 2",
        "focus_text": "",
        "char_count": 2546
      },
      "schedule": {
        "scheduled_time": "09:35",
        "scheduled_at": "2026-07-07T09:35+08:00",
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
      "json_status": "ok",
      "markdown_status": "ok",
      "report_type": "noon-report",
      "date": "2026-07-07",
      "generated_at": "2026-07-07T11:36:36.051524+08:00",
      "recommendation_mode": "observe",
      "candidate_count": 1,
      "candidate_universe_count": 1,
      "scan_pool_count": 0,
      "handoff_count": 0,
      "buy_top3_count": 0,
      "json_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.json",
        "relative_path": "runs/2026-07-07/noon-report.json",
        "exists": true,
        "size": 687198,
        "modified_at": "2026-07-07T11:37:16+08:00",
        "sha256": "0a03f0c778f1daba6c0f70c42fe7617f2964d8f49bc7b82003bef85d2e4557fd"
      },
      "markdown_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.md",
        "relative_path": "runs/2026-07-07/noon-report.md",
        "exists": true,
        "size": 4828,
        "modified_at": "2026-07-07T11:37:16+08:00",
        "sha256": "4e26b55c108411a3f90101e04af340163eb33f6e35569e01aaec711c227564b3"
      },
      "markdown": {
        "exists": true,
        "status": "ok",
        "headings": [
          "上午验证结论",
          "自选股盘中强弱分层",
          "重点异动记录",
          "午后继续盯盘名单",
          "午后放弃名单",
          "终止跟踪提示",
          "午后执行与风控",
          "铁律提醒"
        ],
        "full_text": "【上午验证结论】\n- 验证对象：早报确定的候选名单（逐只处理，不新增）\n- 逐只验证结果：\n  - 天味食品 / 603317 / 昨日尾盘模拟持仓 / 技术/资金行为池 → 午后动作：减仓（分时弱于板块/大盘 / K线结构破坏或过热 / 分时弱于板块/大盘，不符合半路确认 / K线结构破位或过热 / 技术检查未确认通过，午报降级处理）\n- 上午整体判断：只验证早报传下来的对象，不新增股票。\n- 外围环境：顺风，适合继续观察机会\n- 国内环境：中性，先观察\n- 情绪/趋势：逆风，不适合进攻\n- 三闸门综合：国内中性，先观察+情绪逆风，不适合进攻，只作为午后仓位和节奏参考。\n- 午后总体建议：按早报对象自身的公告、技术面和执行边界处理，不新增陌生票。\n- 模拟持仓：天味食品 / 603317 已按昨日 14:50 尾盘执行版进入模拟持仓跟踪。\n- 午报动作边界：模拟持仓可以继续持有、减仓或退出；旁路观察对象只能观察或放弃。\n- 事件整理后的关注方向：医药、AI。\n- 国内信息增强：国内关注方向：先进封装、AI芯片、AI。\n- 国内信息增强：当天新增国内证据 5 条，其中 A股政策/产业 5 条，A股公告 0 条。\n- 国内信息增强：国内信息暂未直接命中自选股，作为环境和方向参考。\n- 国内信息说明：这里只是上午市场背景，不新增午后处理名单，也不改变模拟持仓动作。\n\n【自选股盘中强弱分层】\n- 强层（持仓表现较强、承接相对较好）：无\n- 中层（跟随板块、量价正常）：\n  - 天味食品 / 昨日尾盘模拟持仓 / 技术/资金行为池（降级观察）\n- 弱层（弱于板块、缩量、无承接）：无\n- 未异动（横盘震荡、无方向）：其余自选股暂无明确异动信号\n- 当前只有早报交下来的对象会进入完整盘中验证；其余自选股只作为盘面背景观察。\n- 早报观察对象回看：早报有 1 个观察/降级对象，午报只做盘中回看。\n- 处理结果：这些对象暂未达到下午继续盯盘条件，所以不放入午后名单。\n  - 史丹利 / 002588 / 剔除层 / 技术/资金行为池 / 技术面不合格，取消买入 / 换手率异常，需降级观察；尾盘无承接，不留隔夜 / 技术面取消、尾盘无承接或主线弱相关，不能进入早报重点验证\n- 盘中处理对象：\n  - 天味食品 / 603317 / 昨日尾盘模拟持仓 / 技术/资金行为池 / 主线映射：调味品 / 持仓边界：只看上午兑现和午后处理，不新增买点 / 午后动作：减仓 / 原因：技术检查未确认通过，午报降级处理\n\n【重点异动记录】\n- 异动1：上证指数 / 000001 / 上午 / 逆风，不适合进攻 / -1.04%，偏弱/压制风险偏好\n- 异动2：创业板指 / 399006 / 上午 / 逆风，不适合进攻 / -0.78%，偏弱/压制风险偏好\n- 异动3：深证成指 / 399001 / 上午 / 逆风，不适合进攻 / -1.02%，偏弱/压制风险偏好\n- 异动4：涨停34家 / 跌停25家 / 上午 / 冰点 / 跌停或亏钱效应偏高\n- 关键事件：7月7日证券之星早间消息汇总：深交所发布关于中公教育股票交易情况的通报；时间：2026-07-07；影响：中；方向：方向待确认；关联：未直接命中自选股。\n- 关键事件：ESG双奖加身，来凯医药-B(2105)的可持续价值获肯定；时间：2026-07-07；影响：中；方向：医药；关联：未直接命中自选股。\n- 关键事件：“中泰财富30”发布高端买方投顾人才培养计划；时间：2026-07-07；影响：中；方向：方向待确认；关联：未直接命中自选股。\n\n【午后继续盯盘名单】\n- 处理1：天味食品 / 603317 / 昨日尾盘模拟持仓 / 技术/资金行为池 / 午后动作：减仓 / 盯盘理由：技术检查未确认通过，午报降级处理\n\n【午后放弃名单】\n- 无放弃对象。\n\n【终止跟踪提示】\n- 今日该方向没有完全证伪，但已经触发减仓/降级信号。\n- 午后只跟踪风险是否继续扩大，不加仓、不新开仓。\n\n【午后执行与风控】\n- 午后策略：已有模拟持仓按持有、减仓或退出处理；不新增开仓。\n- 已有仓位：弱于板块或冲高回落先兑现\n- 新开仓：不建议\n- 执行引擎结果：\n  - 天味食品 / 603317：减仓。原因：技术检查未确认通过，午报降级处理\n- 失效条件：外围恶化、国内证据缺口扩大、情绪继续冰点、个股弱于板块、技术面不合格\n\n【铁律提醒】\n- T+1纪律\n- 不打板\n- 涨幅<3%\n- 总仓位受控\n- 绝不补仓死扛\n- 看不清就不买\n- 放弃的股票今日不再捡回\n",
        "excerpt": "【上午验证结论】\n- 验证对象：早报确定的候选名单（逐只处理，不新增）\n- 逐只验证结果：\n- 天味食品 / 603317 / 昨日尾盘模拟持仓 / 技术/资金行为池 → 午后动作：减仓（分时弱于板块/大盘 / K线结构破坏或过热 / 分时弱于板块/大盘，不符合半路确认 / K线结构破位或过热 / 技术检查未确认通过，午报降级处理）\n- 上午整体判断：只验证早报传下来的对象，不新增股票。\n- 外围环境：顺风，适合继续观察机会\n- 国内环境：中性，先观察\n- 情绪/趋势：逆风，不适合进攻\n- 三闸门综合：国内中性，先观察+情绪逆风，不适合进攻，只作为午后仓位和节奏参考。\n- 午后总体建议：按早报对象自身的公告、技术面和执行边界处理，不新增陌生票。\n- 模拟持仓：天味食品 / 603317 已按昨日 14:50 尾盘执行版进入模拟持仓跟踪。\n- 午报动作边界：模拟持仓可以继续持有、减仓或退出；旁路观察对象只能观察或放弃。\n- 事件整理后的关注方向：医药、AI。\n- 国内信息增强：国内关注方向：先进封装、AI芯片、AI。\n- 国内信息增强：当天新增国内证据 5 条，其中 A股政策/产业 5",
        "focus_text": "",
        "char_count": 1916
      },
      "schedule": {
        "scheduled_time": "11:35",
        "scheduled_at": "2026-07-07T11:35+08:00",
        "due": true,
        "automation_status": "complete",
        "automation_status_label": "已按计划生成",
        "diagnosis_cn": "已按计划生成",
        "manifest_status": "success",
        "manifest_json_status": "ok",
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
      "date": "2026-07-07",
      "generated_at": "",
      "recommendation_mode": "",
      "candidate_count": 0,
      "candidate_universe_count": 0,
      "scan_pool_count": 0,
      "handoff_count": 0,
      "buy_top3_count": 0,
      "json_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\review-report.json",
        "relative_path": "review-report.json",
        "exists": false
      },
      "markdown_file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\review-report.md",
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
        "scheduled_at": "2026-07-07T20:00+08:00",
        "due": false,
        "automation_status": "not_due",
        "automation_status_label": "未到计划时间",
        "diagnosis_cn": "未到计划时间",
        "manifest_status": "missing",
        "manifest_json_status": "missing",
        "manifest_path": "workflow-manifest.review.json",
        "precondition_gaps_cn": [
          "复盘缺少成功前三报：收盘报"
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
      "score": 4,
      "evidence_count": 16,
      "missing_count": 0,
      "limitations_count": 0,
      "top_evidence": [
        "富时中国A50: -0.20%, 2026-07-07 11:36:21, sina_hq, a50_cfd",
        "道琼斯: +0.29%, 2026-07-07 04:48:08, sina_hq, index_realtime",
        "纳斯达克综合: +1.12%, 2026-07-07 05:30:00, sina_hq, index_realtime",
        "标普500: +0.72%, 2026-07-07 04:43:46, sina_hq, index_realtime"
      ],
      "reason": "美股三大指数平均 +0.71%；纳斯达克偏强 +1.12%；美股三大指数归因偏顺风: 美股风险偏好改善；VIX归因偏逆风: 波动率上行，避险升温；美元兑离岸人民币归因偏顺风: 人民币压力缓和；黄金归因偏顺风: 美元走弱/宽松预期主导黄金定价；白银归因偏顺风: 工业需求/风险偏好主导白银定价；布伦特原油归因偏逆风: 地缘冲突/供应中断或通胀压力推升风险"
    },
    {
      "key": "domestic",
      "label": "国内闸门",
      "status": "flat",
      "score": 0,
      "evidence_count": 5,
      "missing_count": 0,
      "limitations_count": 0,
      "top_evidence": [
        "policy_signal: 极光推送携手澎博财经：构建低延迟、高可靠的金融资讯分发通道",
        "industry_news_signal: ESG双奖加身，来凯医药-B(2105)的可持续价值获肯定",
        "industry_news_signal: 极光推送携手澎博财经：构建低延迟、高可靠的金融资讯分发通道",
        "regulatory_signal: ESG双奖加身，来凯医药-B(2105)的可持续价值获肯定"
      ],
      "reason": "国内侧证据不足以强判顺风，按平局处理"
    },
    {
      "key": "emotion_trend",
      "label": "情绪/趋势闸门",
      "status": "headwind",
      "score": 0,
      "evidence_count": 10,
      "missing_count": 0,
      "limitations_count": 0,
      "top_evidence": [
        "指数趋势偏逆风（涨跌幅 -0.69%）。",
        "盘中趋势偏横盘（15分钟涨跌幅 -1.44%）。",
        "成交额信号偏顺风。",
        "涨停约 34 只，跌停约 25 只。"
      ],
      "reason": "指数趋势偏逆风（涨跌幅 -0.69%）；盘中趋势偏横盘（15分钟涨跌幅 -1.44%）；成交额信号偏顺风；涨停约 34 只，跌停约 25 只；连板结构偏逆风，最高约 5 连板。"
    }
  ],
  "candidates": [
    {
      "rank": 1,
      "symbol": "603317",
      "name": "天味食品",
      "tag": "B",
      "observation_tier": "b_watch",
      "channel": "technical_fund_flow",
      "candidate_channel": "technical_fund_flow",
      "score": 0.605,
      "source_score": 0.605,
      "normalized_score": 60.5,
      "unified_score": 60.5,
      "score_display_scale": "0_100",
      "decision": "",
      "entry_style": "no_chase",
      "handoff_allowed": "",
      "top3_allowed": "",
      "buy_allowed": false,
      "change_pct": "",
      "turnover_rate": "",
      "volume_ratio": "",
      "theme": "",
      "theme_display": "调味品",
      "business_match": "",
      "candidate_notice_status": "checked_clear",
      "technical_reasons": [],
      "validation": {
        "candidate_code": "603317",
        "candidate_name": "天味食品",
        "entry_style": "no_chase",
        "validation": {
          "auction_open_check": {
            "enabled": true,
            "status": "partial",
            "action": "pass",
            "top3_allowed": true,
            "values": {
              "open_change_pct": -0.63,
              "open_grab_pct": 0.0,
              "open_turnover_rate": 0.01,
              "open_amount": 47.29,
              "prev_open_amount": 67.77,
              "prev_amount": 21406.89,
              "two_min_amount": 297.82,
              "auction_limit_buy": null,
              "open_vs_prev_pct": 0.22,
              "open_amount_vs_prev_open_ratio": 0.6978,
              "two_min_amount_vs_prev_amount_ratio": 0.0139
            },
            "missing_fields": [
              "auction_limit_buy"
            ],
            "positive_signals": [],
            "risk_flags": [],
            "warnings": [
              "开盘验证字段不完整，不能把竞价强弱作为硬放行依据"
            ],
            "no_chase_reasons": []
          },
          "relative_strength_check": {
            "status": "strong",
            "watchlist": {
              "rank": 1,
              "size": 2,
              "percentile": 1.0,
              "metric": 1.999504
            },
            "theme": {
              "theme": "调味品",
              "rank": 1,
              "size": 1,
              "percentile": 1.0,
              "metric": 1.999504
            },
            "index_context": {
              "status": "missing",
              "index_change_pct": null,
              "change_pct": 1.4
            },
            "warnings": [
              "缺少指数涨跌或个股涨跌，无法确认相对大盘强弱"
            ]
          },
          "technical_check": {
            "decision": "downgrade",
            "missing_fields": [],
            "reasons": [
              "换手率异常，需降级观察",
              "换手率 0.16% 不在纪律区间"
            ]
          },
          "announcement_check": {
            "status": "checked_clear",
            "reason": "硬窗口公告排雷通过，旧公告或固定风险说明仅作背景"
          },
          "data_quality_check": {
            "warnings": [
              "开盘验证字段不完整，不能把竞价强弱作为硬放行依据",
              "缺少指数涨跌或个股涨跌，无法确认相对大盘强弱"
            ],
            "rank_confidence": "normal"
          },
          "discipline_check": {
            "no_chase_reasons": [
              "不打板模型通过：未追高，量能/分时/尾盘承接未触发硬伤"
            ],
            "non_limit_short_term": {
              "enabled": true,
              "action": "downgrade",
              "entry_style": "half_way_confirm",
              "top3_allowed": false,
              "handoff_allowed": true,
              "missing_fields": [],
              "reasons": [
                "换手率 0.16% 不在纪律区间"
              ],
              "rules": {
                "price_change_watch_above_pct": 3.0,
                "near_limit_risk_pct": 7.0,
                "max_fade_from_high_pct": 3.0
              }
            }
          }
        },
        "cancel_conditions": [],
        "no_chase_reasons": [
          "不打板模型通过：未追高，量能/分时/尾盘承接未触发硬伤"
        ],
        "risk_flags": [],
        "data_quality_warnings": [
          "开盘验证字段不完整，不能把竞价强弱作为硬放行依据",
          "缺少指数涨跌或个股涨跌，无法确认相对大盘强弱"
        ],
        "handoff_notes": "技术/资金行为候选，需次日验证是否继续转强；不打板短线模型禁止追买，只允许回踩/承接确认后观察"
      },
      "catalyst_status": "none",
      "catalyst_status_label": "暂无明确催化",
      "catalyst_status_detail": "no_clear_match",
      "catalyst_timeliness": "unknown",
      "catalyst_timeliness_label": "时效未确认",
      "catalyst_timeliness_detail": "催化时效优先沿用正式报告已落盘的时间口径。",
      "mainline_relation": "execution_off_mainline",
      "mainline_relation_label": "主线外执行票",
      "mainline_relation_detail": "市场大方向已是“主线不清”，但这票走的是执行层确认路线。",
      "execution_position_label": "轮动票",
      "execution_position_detail": "执行落点更偏主线旁边的轮动分支。",
      "mainline_theme_display": "调味品",
      "mainline_verdict_display": "属于轮动方向",
      "market_mainline_verdict_display": "主线不清",
      "mainline_role_label": "未映射"
    }
  ],
  "candidate_source_context": {},
  "four_layer_tracking": {
    "status": "ok",
    "period": "noon",
    "records": [
      {
        "rank": 1,
        "strategy_group": "formal_top3",
        "strategy_group_cn": "正式 Top3 逻辑",
        "symbol": "603317",
        "name": "天味食品",
        "source_period": "noon",
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
        "current_observation_tier": "b_watch",
        "current_candidate_channel": "technical_fund_flow",
        "current_buy_allowed": false,
        "current_action": "downgrade",
        "current_status_cn": "降级观察",
        "current_blocked_reason": "技术面降级；未达到正式 Top3 准入；不进入正式交接",
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
          "intraday_price": 14.19,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "调味品",
        "theme_display": "调味品",
        "industry": "食品饮料-调味品",
        "latest_snapshot": {
          "change_pct": -0.42,
          "open_change_pct": -0.63,
          "turnover_rate": 0.7,
          "volume_ratio": 0.9,
          "amount": 10553.09,
          "last_price": 14.19,
          "theme": "调味品",
          "industry": "食品饮料-调味品"
        },
        "display_reason": "公告、技术、评分和执行边界通过，进入正式 Top3 样本",
        "return_status": "待次日回填",
        "return_scope": "pending",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "调味品",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "603317",
          "name": "天味食品",
          "groups": [
            "formal_top3"
          ],
          "group_labels": [
            "正式 Top3"
          ],
          "original_text": "# 天味食品（603317）— 放弃\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 回购计划、高分红、防守消费属性，但无新增短线催化 | 概念：回购计划、私募重仓、高分红股、融资融券 |\n| 尾盘 | 尾盘回落，短线资金不积极 | 14:30 后方向 -0.49%，全天成交 2.12 亿 |\n| 板块 | 基本贴近调味品行业，无明显相对强度 | 个股 +1.35%，调味品行业 +1.14%，相对强弱 +0.21pct |\n| 类型 | 食品消费防守票，弹性不足 | 换手 1.39%，近 30 日 -7.24% |\n| 日线 | 低位修复，但无强趋势 | 当日收 12.75，涨停价 13.83 |\n| 上涨概率 | 偏低，估计 38%-43% | 防守有余，进攻不足 |\n\n**一句话判断：** 天味食品适合做消费防守观察，不适合“新开隔夜仓”这种要求短线溢价的场景。\n\n**交易计划：**\n- 技术面：强弱线 12.70，风险线 12.45，压力区 13.00-13.40。\n- 消息面：回购/高分红偏中长期支撑，无法替代短线催化。\n- 赔率：次日冲高弹性有限，资金更可能去科技/资源线。\n- 仓位：放弃新开。\n- 次日操作：若冲 13.00 无量，仍按弱修复处理；跌破 12.45 放弃。\n\n---\n\n## 最终执行建议\n\n- **优先可干：** 002353 杰瑞股份、603496 恒为科技、001268 联合精密。三者都只能轻仓，核心逻辑分别是“强辨识度高端装备 / AI算力修复 / 尾盘小票情绪”。\n- **备选等待：** 600188 兖矿能源适合防守仓，000048 京基智农只等竞价超预期，不主动追高。\n- **观察不买：** 000060 中金岭南、603308 应流股份、002588 史丹利。\n- **放弃：** 002850 科达利、002150 正泰电源、603317 天味食品。\n\n## 次日统一纪律\n\n1. 只做竞价和开盘承接确认后的隔夜/超短，不做无条件追高。\n2. 若大盘或核心板块开盘转弱，Top 3 候选全部降为观察。\n3. 若个股高开 3%-5% 但 5 分钟内不能继续放量上攻，优先兑现而不是加仓。\n4. 若跌破各自风险线，隔夜逻辑失效；不得用“中线看好”替代短线止损。\n5. 本报告为模拟/研究用途，不代表实盘成交、真实持仓或账户收益。",
          "summary_short": "结论放弃；催化概念：回购计划、私募重仓、高分红股、融资融券；尾盘14:30 后方向 -0.49%，全天成交 2.12 亿",
          "stance": "放弃",
          "catalyst": "概念：回购计划、私募重仓、高分红股、融资融券",
          "risk": "换手 1.39%，近 30 日 -7.24%",
          "action_hint": "放弃新开。",
          "status": "ok"
        }
      },
      {
        "rank": 2,
        "strategy_group": "formal_top3",
        "strategy_group_cn": "正式 Top3 逻辑",
        "symbol": "002588",
        "name": "史丹利",
        "source_period": "noon",
        "tracking_scope": "all_layer_records",
        "return_tracking_scope": "formal_return",
        "entry_reason": "公告、技术、评分和执行边界通过，进入正式 Top3 样本",
        "blocked_reason": "",
        "tracking_status": "tracked",
        "formal_return_eligible": true,
        "side_channel_return_eligible": false,
        "side_channel_return_scope": "formal_return_only",
        "display_tracking_eligible": true,
        "source_close_date": "",
        "observation_tier": "buy_top3",
        "candidate_channel": "technical_fund_flow",
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
        "score": 0.622,
        "source_score": 0.622,
        "normalized_score": 62.2,
        "unified_score": 62.2,
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
          "intraday_price": 8.28,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "复合肥",
        "theme_display": "复合肥",
        "industry": "化工-农用化工",
        "latest_snapshot": {
          "change_pct": -3.61,
          "open_change_pct": -1.51,
          "turnover_rate": 0.99,
          "volume_ratio": 1.07,
          "amount": 7112.89,
          "last_price": 8.28,
          "theme": "复合肥",
          "industry": "化工-农用化工"
        },
        "display_reason": "公告、技术、评分和执行边界通过，进入正式 Top3 样本",
        "return_status": "待次日回填",
        "return_scope": "pending",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "复合肥",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "002588",
          "name": "史丹利",
          "groups": [
            "formal_top3"
          ],
          "group_labels": [
            "正式 Top3"
          ],
          "original_text": "# 史丹利（002588）— 观察\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 化肥、磷概念、乡村振兴，偏农业防守与资源属性 | 概念：磷概念、化肥概念、乡村振兴、低市盈率、锂电池 |\n| 尾盘 | 尾盘几乎横盘，攻击性不足 | 14:30 后方向 +0.12%，全天成交 1.82 亿 |\n| 板块 | 强于农用化工行业，但绝对涨幅一般 | 个股 +2.75%，农用化工行业 +0.34%，相对强弱 +2.41pct |\n| 类型 | 低估值农业化工票，防守多于进攻 | 换手 2.47%，近 30 日 -7.64% |\n| 日线 | 仍处低位修复，尚未形成短线强趋势 | 当日收 7.85，涨停价 8.40 |\n| 上涨概率 | 中等偏低，估计 45%-50% | 防守属性可看，但隔夜弹性不足 |\n\n**一句话判断：** 史丹利不是坏票，但缺少强催化和尾盘抢筹，作为新开隔夜仓不够锋利。\n\n**交易计划：**\n- 技术面：强弱线 7.80，风险线 7.65，压力区 8.00-8.40。\n- 消息面：无新增新闻公告，主要依靠化肥/磷概念防守逻辑。\n- 赔率：下行风险相对可控，但次日冲高弹性也有限。\n- 仓位：观察，不进核心隔夜组合。\n- 次日操作：次日冲高预估约 0.5%-2.5%；若不能突破 8.00，继续当弱修复看待；跌破 7.65 放弃。\n\n---",
          "summary_short": "结论观察；催化概念：磷概念、化肥概念、乡村振兴、低市盈率、锂电池；尾盘14:30 后方向 +0.12%，全天成交 1.82 亿",
          "stance": "观察",
          "catalyst": "概念：磷概念、化肥概念、乡村振兴、低市盈率、锂电池",
          "risk": "换手 2.47%，近 30 日 -7.64%",
          "action_hint": "观察，不进核心隔夜组合。",
          "status": "ok"
        }
      },
      {
        "rank": 3,
        "strategy_group": "a_theme_watch",
        "strategy_group_cn": "A类主线/题材逻辑",
        "symbol": "000899",
        "name": "赣能股份",
        "source_period": "noon",
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
          "intraday_price": 9.87,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "火力发电",
        "theme_display": "火力发电",
        "industry": "公用事业-电力",
        "latest_snapshot": {
          "change_pct": -2.28,
          "open_change_pct": -0.59,
          "turnover_rate": 0.73,
          "volume_ratio": 1.01,
          "amount": 7008.87,
          "last_price": 9.87,
          "theme": "火力发电",
          "industry": "公用事业-电力"
        },
        "display_reason": "消息/题材驱动候选，需技术面继续确认",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "火力发电",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 4,
        "strategy_group": "a_theme_watch",
        "strategy_group_cn": "A类主线/题材逻辑",
        "symbol": "600854",
        "name": "春兰股份",
        "source_period": "noon",
        "tracking_scope": "all_layer_records",
        "return_tracking_scope": "side_channel_or_status_only",
        "entry_reason": "消息/题材驱动候选，需技术面继续确认；不打板短线模型禁止追买，只允许回踩/承接确认后观察",
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
        "score": 0.622,
        "source_score": 0.622,
        "normalized_score": 62.2,
        "unified_score": 62.2,
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
          "intraday_price": 4.2,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "空调",
        "theme_display": "空调",
        "industry": "家电-白色家电",
        "latest_snapshot": {
          "change_pct": -3.23,
          "open_change_pct": -0.69,
          "turnover_rate": 1.2,
          "volume_ratio": 0.97,
          "amount": 2646.72,
          "last_price": 4.2,
          "theme": "空调",
          "industry": "家电-白色家电"
        },
        "display_reason": "消息/题材驱动候选，需技术面继续确认；不打板短线模型禁止追买，只允许回踩/承接确认后观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "空调",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 5,
        "strategy_group": "a_theme_watch",
        "strategy_group_cn": "A类主线/题材逻辑",
        "symbol": "002818",
        "name": "富森美",
        "source_period": "noon",
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
          "intraday_price": 10.42,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "商业物业经营",
        "theme_display": "商业物业经营",
        "industry": "商贸-商业物业经营",
        "latest_snapshot": {
          "change_pct": -2.62,
          "open_change_pct": -0.09,
          "turnover_rate": 0.61,
          "volume_ratio": 1.22,
          "amount": 1922.21,
          "last_price": 10.42,
          "theme": "商业物业经营",
          "industry": "商贸-商业物业经营"
        },
        "display_reason": "消息/题材驱动候选，需技术面继续确认；不打板短线模型禁止追买，只允许回踩/承接确认后观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "商业物业经营",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 6,
        "strategy_group": "score_front_rejected",
        "strategy_group_cn": "候选评分前排逻辑",
        "symbol": "000899",
        "name": "赣能股份",
        "source_period": "noon",
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
          "intraday_price": 9.87,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "火力发电",
        "theme_display": "火力发电",
        "industry": "公用事业-电力",
        "latest_snapshot": {
          "change_pct": -2.28,
          "open_change_pct": -0.59,
          "turnover_rate": 0.73,
          "volume_ratio": 1.01,
          "amount": 7008.87,
          "last_price": 9.87,
          "theme": "火力发电",
          "industry": "公用事业-电力"
        },
        "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "火力发电",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 7,
        "strategy_group": "score_front_rejected",
        "strategy_group_cn": "候选评分前排逻辑",
        "symbol": "000537",
        "name": "绿发电力",
        "source_period": "noon",
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
          "intraday_price": 7.2,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "风力发电",
        "theme_display": "风力发电",
        "industry": "公用事业-电力",
        "latest_snapshot": {
          "change_pct": -4.64,
          "open_change_pct": -0.13,
          "turnover_rate": 0.98,
          "volume_ratio": 1.72,
          "amount": 14741.75,
          "last_price": 7.2,
          "theme": "风力发电",
          "industry": "公用事业-电力"
        },
        "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "风力发电",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 8,
        "strategy_group": "score_front_rejected",
        "strategy_group_cn": "候选评分前排逻辑",
        "symbol": "002192",
        "name": "融捷股份",
        "source_period": "noon",
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
        "score": 0.622,
        "source_score": 0.622,
        "normalized_score": 62.2,
        "unified_score": 62.2,
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
          "intraday_price": 99.0,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
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
          "change_pct": 4.87,
          "open_change_pct": 3.78,
          "turnover_rate": 9.73,
          "volume_ratio": 1.73,
          "amount": 249698.25,
          "last_price": 99.0,
          "theme": "锂",
          "industry": "有色-能源金属"
        },
        "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "锂",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 9,
        "strategy_group": "low_reflow_watch",
        "strategy_group_cn": "低位回流观察",
        "symbol": "000048",
        "name": "京基智农",
        "source_period": "noon",
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
        "score": 21.363912,
        "source_score": 21.363912,
        "normalized_score": 21.364,
        "unified_score": 21.364,
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
            "change_pct": 2.92,
            "volume_ratio": 1.37,
            "turnover_rate": 5.83,
            "amount": 65004.9,
            "open_grab_pct": 0.61,
            "attack_wave_pct": 7.53
          },
          "risk_penalties": [],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "low_reflow_watch_result": {
          "next_day_change_pct": 2.73,
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
          "intraday_price": 22.24,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
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
          "change_pct": 2.73,
          "open_change_pct": -1.29,
          "turnover_rate": 2.95,
          "volume_ratio": 1.26,
          "amount": 34568.9,
          "last_price": 22.24,
          "theme": "生猪养殖",
          "industry": "农林牧渔-养殖业"
        },
        "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "生猪养殖",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 10,
        "strategy_group": "low_reflow_watch",
        "strategy_group_cn": "低位回流观察",
        "symbol": "002192",
        "name": "融捷股份",
        "source_period": "noon",
        "tracking_scope": "side_channel_only",
        "return_tracking_scope": "side_channel_only",
        "entry_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
        "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
        "tracking_status": "verified",
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
          "eligible_for_handoff": false
        },
        "score": 20.087383,
        "source_score": 20.087383,
        "normalized_score": 20.087,
        "unified_score": 20.087,
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
            "change_pct": 2.85,
            "volume_ratio": 1.05,
            "turnover_rate": 11.32,
            "amount": 278393.06,
            "open_grab_pct": 0.0,
            "attack_wave_pct": 7.29
          },
          "risk_penalties": [],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "low_reflow_watch_result": {
          "next_day_change_pct": 4.87,
          "success": true,
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
          "intraday_price": 99.0,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
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
          "change_pct": 4.87,
          "open_change_pct": 3.78,
          "turnover_rate": 9.73,
          "volume_ratio": 1.73,
          "amount": 249698.25,
          "last_price": 99.0,
          "theme": "锂",
          "industry": "有色-能源金属"
        },
        "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "overnight_report": {}
      },
      {
        "rank": 11,
        "strategy_group": "low_reflow_watch",
        "strategy_group_cn": "低位回流观察",
        "symbol": "002290",
        "name": "禾盛新材",
        "source_period": "noon",
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
        "score": 19.670865,
        "source_score": 19.670865,
        "normalized_score": 19.671,
        "unified_score": 19.671,
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
            "change_pct": 2.84,
            "volume_ratio": 1.16,
            "turnover_rate": 4.51,
            "amount": 97226.01,
            "open_grab_pct": 1.12,
            "attack_wave_pct": 7.85
          },
          "risk_penalties": [
            "公告状态未完全确认"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "low_reflow_watch_result": {
          "next_day_change_pct": -2.21,
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
          "intraday_price": 86.31,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "家电零部件",
        "theme_display": "家电零部件",
        "industry": "家电-家电零部件",
        "latest_snapshot": {
          "change_pct": -2.21,
          "open_change_pct": -0.29,
          "turnover_rate": 1.78,
          "volume_ratio": 0.84,
          "amount": 38456.22,
          "last_price": 86.31,
          "theme": "家电零部件",
          "industry": "家电-家电零部件"
        },
        "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "家电零部件",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 12,
        "strategy_group": "open_drive_watch",
        "strategy_group_cn": "早盘驱动观察",
        "symbol": "000060",
        "name": "中金岭南",
        "source_period": "noon",
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
        "score": 11.0191,
        "source_score": 11.0191,
        "normalized_score": 11.019,
        "unified_score": 11.019,
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
            "change_pct": 1.66,
            "open_drive_pct": 0.54,
            "volume_ratio": 1.91,
            "turnover_rate": 8.87,
            "amount": 302768.91,
            "attack_wave_pct": 0.55,
            "pullback_from_high_pct": 8.3
          },
          "risk_penalties": [
            "早盘冲高后回落偏大"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "open_drive_watch_result": {
          "next_day_change_pct": -5.83,
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
          "intraday_price": 6.95,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
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
          "change_pct": -5.83,
          "open_change_pct": -2.98,
          "turnover_rate": 4.05,
          "volume_ratio": 1.48,
          "amount": 127066.33,
          "last_price": 6.95,
          "theme": "铅锌",
          "industry": "有色-工业金属"
        },
        "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "铅锌",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "000060",
          "name": "中金岭南",
          "groups": [
            "open_drive_watch"
          ],
          "group_labels": [
            "早盘驱动观察"
          ],
          "original_text": "# 中金岭南（000060）— 观察\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 2026 半年度业绩预告、有色金属资源属性；但公司澄清未涉及高端 PCB 微钻孔板相关业务，题材误读需降温 | 公告：2026 半年度业绩预告、可转债相关公告；新闻：公司称未涉及高端 PCB 微钻孔板相关业务 |\n| 尾盘 | 尾盘小幅回落，不是隔夜资金主动抢筹 | 14:30 后方向 -0.27%，全天成交 30.81 亿 |\n| 板块 | 个股强于工业金属行业，资金有相对认可 | 个股 +1.94%，工业金属行业 -0.76%，相对强弱 +2.70pct |\n| 类型 | 有色资源中盘高成交票，换手高 | 成交额 30.81 亿，换手 9.04% |\n| 日线 | 近 30 日 -4.29%，当前仍偏修复 | 当日收 11.04，涨停价 11.92 |\n| 上涨概率 | 中等，估计 48%-53% | 业绩/资源属性加分；尾盘走弱和 PCB误读降权 |\n\n**一句话判断：** 中金岭南适合观察有色资源和业绩预告兑现，不适合按 PCB/AI概念强行隔夜追。\n\n**交易计划：**\n- 技术面：强弱线 10.95，风险线 10.70，压力区 11.30-11.92。\n- 消息面：业绩预告偏正面，但“未涉及高端 PCB 微钻孔板”削弱短线概念弹性。\n- 赔率：成交充足但尾盘没有主动抢筹，隔夜性价比一般。\n- 仓位：观察，不进首选组合。\n- 次日操作：次日冲高预估约 1%-3.5%；若高开但不能站上 11.30，优先兑现；跌破 10.70 放弃。\n\n---",
          "summary_short": "结论观察；催化公告：2026 半年度业绩预告、可转债相关公告；新闻：公司称未涉及高端 PCB 微钻孔板相关业务；尾盘14:30 后方向 -0.27%，全天成交 30.81 亿",
          "stance": "观察",
          "catalyst": "公告：2026 半年度业绩预告、可转债相关公告；新闻：公司称未涉及高端 PCB 微钻孔板相关业务",
          "risk": "成交额 30.81 亿，换手 9.04%",
          "action_hint": "观察，不进首选组合。",
          "status": "ok"
        }
      },
      {
        "rank": 13,
        "strategy_group": "open_drive_watch",
        "strategy_group_cn": "早盘驱动观察",
        "symbol": "002150",
        "name": "正泰电源",
        "source_period": "noon",
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
        "score": 9.065063,
        "source_score": 9.065063,
        "normalized_score": 9.065,
        "unified_score": 9.065,
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
            "change_pct": -0.78,
            "open_drive_pct": 0.85,
            "volume_ratio": 0.99,
            "turnover_rate": 4.52,
            "amount": 44081.4,
            "attack_wave_pct": 1.6,
            "pullback_from_high_pct": 5.8
          },
          "risk_penalties": [
            "公告状态未完全确认",
            "量能偏弱",
            "早盘冲高后回落偏大"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "open_drive_watch_result": {
          "next_day_change_pct": -2.68,
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
          "intraday_price": 26.13,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "金属制品",
        "theme_display": "金属制品",
        "industry": "机械设备-通用设备",
        "latest_snapshot": {
          "change_pct": -2.68,
          "open_change_pct": -1.27,
          "turnover_rate": 1.74,
          "volume_ratio": 0.7,
          "amount": 16483.87,
          "last_price": 26.13,
          "theme": "金属制品",
          "industry": "机械设备-通用设备"
        },
        "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "金属制品",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "002150",
          "name": "正泰电源",
          "groups": [
            "open_drive_watch"
          ],
          "group_labels": [
            "早盘驱动观察"
          ],
          "original_text": "# 正泰电源（002150）— 放弃\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 储能、光伏、风电、充电桩等新能源电力设备标签，但近期趋势弱；新闻主要涉及子公司股权转让 | 新闻：子公司股权转让/优先购买权相关；概念：储能、光伏、风电、充电桩、海外业务 |\n| 尾盘 | 尾盘继续偏弱 | 14:30 后方向 -0.19%，全天成交 4.54 亿 |\n| 板块 | 略强于电网设备行业，但个股本身收跌 | 个股 -0.67%，电网设备行业 -1.28%，相对强弱 +0.61pct |\n| 类型 | 新能源电力设备修复票，当前趋势仍弱 | 换手 4.66%，近 30 日 -19.93% |\n| 日线 | 近 30 日下跌明显，尚未扭转趋势 | 当日收 18.95，涨停价 21.14 |\n| 上涨概率 | 偏低，估计 40%-45% | 弱趋势 + 尾盘弱，不符合隔夜新开标准 |\n\n**一句话判断：** 正泰电源仍处弱趋势修复，公告/新闻也不是强进攻催化，新开隔夜应回避。\n\n**交易计划：**\n- 技术面：强弱线 19.10，风险线 18.60，压力区 19.70-20.40。\n- 消息面：股权转让事项偏公司治理/资产安排，不是短线强催化。\n- 赔率：除非新能源电力设备整体大幅修复，否则缺乏隔夜弹性。\n- 仓位：放弃新开。\n- 次日操作：高开不能站上 19.70 不追；跌破 18.60 继续弱势。\n\n---",
          "summary_short": "结论放弃；催化新闻：子公司股权转让/优先购买权相关；概念：储能、光伏、风电、充电桩、海外业务；尾盘14:30 后方向 -0.19%，全天成交 4.54 亿",
          "stance": "放弃",
          "catalyst": "新闻：子公司股权转让/优先购买权相关；概念：储能、光伏、风电、充电桩、海外业务",
          "risk": "换手 4.66%，近 30 日 -19.93%",
          "action_hint": "放弃新开。",
          "status": "ok"
        }
      },
      {
        "rank": 14,
        "strategy_group": "open_drive_watch",
        "strategy_group_cn": "早盘驱动观察",
        "symbol": "002850",
        "name": "科达利",
        "source_period": "noon",
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
        "score": 8.7748,
        "source_score": 8.7748,
        "normalized_score": 8.775,
        "unified_score": 8.775,
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
            "change_pct": -0.73,
            "open_drive_pct": 1.18,
            "volume_ratio": 1.98,
            "turnover_rate": 7.55,
            "amount": 365905.66,
            "attack_wave_pct": 0.0,
            "pullback_from_high_pct": 5.86
          },
          "risk_penalties": [
            "公告状态未完全确认",
            "早盘冲高后回落偏大"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3",
          "next_day_success_threshold": 3.0
        },
        "open_drive_watch_result": {
          "next_day_change_pct": -2.87,
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
          "intraday_price": 217.49,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "锂电池",
        "theme_display": "锂电池",
        "industry": "电力设备-电池",
        "latest_snapshot": {
          "change_pct": -2.87,
          "open_change_pct": -1.0,
          "turnover_rate": 2.89,
          "volume_ratio": 1.14,
          "amount": 134459.17,
          "last_price": 217.49,
          "theme": "锂电池",
          "industry": "电力设备-电池"
        },
        "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "锂电池",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "002850",
          "name": "科达利",
          "groups": [
            "open_drive_watch"
          ],
          "group_labels": [
            "早盘驱动观察"
          ],
          "original_text": "# 科达利（002850）— 放弃\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 新能源车、储能、固态电池、百元股、昨日涨停标签，题材强但今日资金兑现 | 概念：新能源车、储能、固态电池、百元股、昨日涨停、昨日首板、近期新高 |\n| 尾盘 | 尾盘明显走弱，是硬伤 | 14:30 后方向 -1.06%，全天成交 37.80 亿 |\n| 板块 | 跌幅小于电池行业，但仍是下跌 | 个股 -0.96%，电池行业 -2.12%，相对强弱 +1.16pct |\n| 类型 | 百元高位新能源结构件票，容量大但兑现压力也大 | 换手 7.81%，近 30 日 +13.25% |\n| 日线 | 高位强趋势遇到日内回落，隔夜赔率下降 | 当日收 165.64，涨停价 184.00 |\n| 上涨概率 | 偏低，估计 42%-47% | 高位 + 尾盘下压，不适合新开隔夜 |\n\n**一句话判断：** 科达利题材和辨识度都不差，但尾盘 -1.06% 已经说明资金在兑现，新开隔夜容易买在分歧延续点。\n\n**交易计划：**\n- 技术面：强弱线 166.00，风险线 161.80，压力区 172.00-176.00。\n- 消息面：无公告风险，但也缺少足够强的新催化覆盖尾盘兑现。\n- 赔率：若次日电池链修复可能反抽，但不是隔夜首选。\n- 仓位：放弃新开；已有仓也应偏减而非加。\n- 次日操作：若高开不能收回 170，优先落袋；跌破 161.80 风险扩大。\n\n---",
          "summary_short": "结论放弃；催化概念：新能源车、储能、固态电池、百元股、昨日涨停、昨日首板、近期新高；尾盘14:30 后方向 -1.06%，全天成交 37.80 亿",
          "stance": "放弃",
          "catalyst": "概念：新能源车、储能、固态电池、百元股、昨日涨停、昨日首板、近期新高",
          "risk": "换手 7.81%，近 30 日 +13.25%",
          "action_hint": "放弃新开；已有仓也应偏减而非加。",
          "status": "ok"
        }
      },
      {
        "rank": 15,
        "strategy_group": "overnight_limit_watch",
        "strategy_group_cn": "隔夜涨停观察",
        "symbol": "002353",
        "name": "杰瑞股份",
        "source_period": "noon",
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
        "score": 48.214339,
        "source_score": 48.214339,
        "normalized_score": 48.214,
        "unified_score": 48.214,
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
            "change_pct": 6.06,
            "high_pct": 9.37,
            "pullback_from_high_pct": 3.31,
            "volume_ratio": 1.37,
            "turnover_rate": 3.29,
            "amount": 390830.75,
            "attack_wave_pct": 5.79,
            "open_grab_pct": -0.04,
            "year_limit_up_days": 8.0,
            "tail_volume_support": true
          },
          "risk_penalties": [],
          "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
          "next_day_success_threshold": 9.0
        },
        "overnight_limit_watch_result": {
          "next_day_change_pct": -1.3,
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
          "intraday_price": 168.88,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "能源及重型设备",
        "theme_display": "能源及重型设备",
        "industry": "机械设备-专用设备",
        "latest_snapshot": {
          "change_pct": -1.3,
          "open_change_pct": 1.06,
          "turnover_rate": 1.3,
          "volume_ratio": 1.08,
          "amount": 152742.45,
          "last_price": 168.88,
          "theme": "能源及重型设备",
          "industry": "机械设备-专用设备"
        },
        "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "能源及重型设备",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "002353",
          "name": "杰瑞股份",
          "groups": [
            "overnight_limit_watch"
          ],
          "group_labels": [
            "隔夜涨停观察"
          ],
          "original_text": "# 杰瑞股份（002353）— 可干（轻仓核心）\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 高端装备、天然气、可燃冰、页岩气、核电核能等题材叠加，7月3日涨停并上龙虎榜，短线辨识度较强 | 新闻：7月3日龙虎榜，买入前五合计约 6.36 亿、卖出前五约 4.5 亿，龙虎榜净买入约 2.93 亿；概念含“昨日涨停、天然气、核电核能、高端装备” |\n| 尾盘 | 尾盘横向承接，不是继续猛拉，但没有明显跳水 | 14:30 后 171.65→171.79，方向 +0.08%，尾盘成交约 3.90 亿 |\n| 板块 | 个股显著强于行业，属于当日强势独立票 | 个股 +6.40%，专用设备行业 -1.50%，相对强弱 +7.90pct |\n| 类型 | 大市值高端装备趋势票，成交额充足，流动性好 | 成交额 40.17 亿，换手 3.38%，PE TTM 74.75 |\n| 日线 | 近 30 日方向 +25.07%，7月3日涨停后继续放量上行，短线强但已有获利盘 | 当日高 176.59，收 171.79，涨停价 177.61 |\n| 上涨概率 | 中高，估计 57%-62% | 强相对收益 + 龙虎榜记忆 + 放量；但尾盘未继续抢筹，需防高位兑现 |\n\n**一句话判断：** 杰瑞股份是本组里“强度、流动性、辨识度”最均衡的隔夜候选，但今天已大涨，次日只能按冲高兑现思路做，不能当中线持仓买。\n\n**交易计划：**\n- 技术面：强弱线看 170.50，风险线看 166.80，压力区 176.60-177.60；若竞价站上 172 且开盘 5-10 分钟不破 170.50，承接合格。\n- 消息面：龙虎榜净买入和昨日涨停记忆是短线加分，高端装备/能源装备逻辑提供题材承接。\n- 赔率：次日有冲高赔率，但越接近涨停价越容易出现兑现盘。\n- 仓位：轻仓核心，单票不超过隔夜组合 25%-30%。\n- 次日操作：次日冲高预估约 2.5%-6%；高开 3%以上先看 176.60-177.60 压力，冲高缩量分批落袋；平开后快速站回 172 可持有看 175；低开跌破 166.80 则说明资金兑现，放弃隔夜逻辑。\n\n---",
          "summary_short": "结论可干（轻仓核心）；催化新闻：7月3日龙虎榜，买入前五合计约 6.36 亿、卖出前五约 4.5 亿，龙虎榜净买入约 2.93 亿；概念含“昨日涨停、天然气、核电核能；尾盘14:30 后 171.65→171.79，方向 +0.08%，尾盘",
          "stance": "可干（轻仓核心）",
          "catalyst": "新闻：7月3日龙虎榜，买入前五合计约 6.36 亿、卖出前五约 4.5 亿，龙虎榜净买入约 2.93 亿；概念含“昨日涨停、天然气、核电核能、高端装备”",
          "risk": "成交额 40.17 亿，换手 3.38%，PE TTM 74.75",
          "action_hint": "轻仓核心，单票不超过隔夜组合 25%-30%。",
          "status": "ok"
        }
      },
      {
        "rank": 16,
        "strategy_group": "overnight_limit_watch",
        "strategy_group_cn": "隔夜涨停观察",
        "symbol": "000048",
        "name": "京基智农",
        "source_period": "noon",
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
        "score": 46.907322,
        "source_score": 46.907322,
        "normalized_score": 46.907,
        "unified_score": 46.907,
        "score_display_scale": "0_100",
        "low_reflow_watch": {},
        "low_reflow_watch_result": {},
        "open_drive_watch": {},
        "open_drive_watch_result": {},
        "overnight_limit_watch": {
          "model": "overnight_limit_watch_v1",
          "rank": 2,
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
            "change_pct": 2.92,
            "high_pct": 4.61,
            "pullback_from_high_pct": 1.69,
            "volume_ratio": 1.37,
            "turnover_rate": 5.83,
            "amount": 65004.9,
            "attack_wave_pct": 7.53,
            "open_grab_pct": 0.61,
            "year_limit_up_days": 12.0,
            "tail_volume_support": true
          },
          "risk_penalties": [
            "20日涨幅过热"
          ],
          "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
          "next_day_success_threshold": 9.0
        },
        "overnight_limit_watch_result": {
          "next_day_change_pct": 2.73,
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
          "intraday_price": 22.24,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
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
          "change_pct": 2.73,
          "open_change_pct": -1.29,
          "turnover_rate": 2.95,
          "volume_ratio": 1.26,
          "amount": 34568.9,
          "last_price": 22.24,
          "theme": "生猪养殖",
          "industry": "农林牧渔-养殖业"
        },
        "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "生猪养殖",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "000048",
          "name": "京基智农",
          "groups": [
            "overnight_limit_watch"
          ],
          "group_labels": [
            "隔夜涨停观察"
          ],
          "original_text": "# 京基智农（000048）— 等\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 养殖业、猪肉/鸡肉、AI科技子公司新闻，具备故事性；但担保余额占净资产比例较高需警惕 | 新闻：设立科技子公司；公告：为下属公司提供担保进展，担保余额 22.85 亿元，占最近一期净资产 56.00% |\n| 尾盘 | 尾盘非常强，资金有明显回流 | 14:30 后尾盘方向 +2.49%，尾盘成交约 6723 万 |\n| 板块 | 弱于养殖业行业，说明更像个股资金而非板块核心 | 个股 +2.59%，养殖业行业 +4.31%，相对强弱 -1.72pct |\n| 类型 | 高波动养殖 + 科技转型故事票 | 成交额 6.72 亿，换手 6.03%，近 30 日 +62.37% |\n| 日线 | 近 30 日涨幅过大，短线拥挤 | 当日收 16.22，涨停价 17.80 |\n| 上涨概率 | 中等，估计 50%-55% | 尾盘强加分；但高位和担保公告降低隔夜赔率 |\n\n**一句话判断：** 京基智农尾盘很好，但位置太高、且财务担保公告不适合忽略，除非次日竞价继续超预期，否则不做首选隔夜。\n\n**交易计划：**\n- 技术面：强弱线 16.00，风险线 15.50，压力区 16.70-17.80；高位票必须看竞价是否继续放量。\n- 消息面：科技子公司是题材加分，担保公告是风险折价。\n- 赔率：尾盘资金强，但近 30 日涨幅过大，次日兑现压力大。\n- 仓位：等待，不主动隔夜；若强做只能极轻仓。\n- 次日操作：次日冲高预估约 1.5%-5%；高开 3%以上不快速冲 16.70 先减；平开守 16 可观察；跌破 15.50 放弃。\n\n---",
          "summary_short": "结论等；催化新闻：设立科技子公司；公告：为下属公司提供担保进展，担保余额 22.85 亿元，占最近一期净资产 56.00%；尾盘14:30 后尾盘方向 +2.49%，尾盘成交约 6723 万",
          "stance": "等",
          "catalyst": "新闻：设立科技子公司；公告：为下属公司提供担保进展，担保余额 22.85 亿元，占最近一期净资产 56.00%",
          "risk": "成交额 6.72 亿，换手 6.03%，近 30 日 +62.37%",
          "action_hint": "等待，不主动隔夜；若强做只能极轻仓。",
          "status": "ok"
        }
      },
      {
        "rank": 17,
        "strategy_group": "overnight_limit_watch",
        "strategy_group_cn": "隔夜涨停观察",
        "symbol": "603496",
        "name": "恒为科技",
        "source_period": "noon",
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
        "score": 45.124896,
        "source_score": 45.124896,
        "normalized_score": 45.125,
        "unified_score": 45.125,
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
            "change_pct": 5.32,
            "high_pct": 7.7,
            "pullback_from_high_pct": 2.38,
            "volume_ratio": 2.19,
            "turnover_rate": 7.3,
            "amount": 53996.89,
            "attack_wave_pct": 10.68,
            "open_grab_pct": 0.4,
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
          "next_day_change_pct": -5.88,
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
          "intraday_price": 22.58,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "其他IT设备",
        "theme_display": "其他IT设备",
        "industry": "计算机-IT设备",
        "latest_snapshot": {
          "change_pct": -5.88,
          "open_change_pct": -2.0,
          "turnover_rate": 3.53,
          "volume_ratio": 1.65,
          "amount": 25983.17,
          "last_price": 22.58,
          "theme": "其他IT设备",
          "industry": "计算机-IT设备"
        },
        "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "其他IT设备",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "603496",
          "name": "恒为科技",
          "groups": [
            "overnight_limit_watch"
          ],
          "group_labels": [
            "隔夜涨停观察"
          ],
          "original_text": "# 恒为科技（603496）— 可干（轻仓）\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | AI/算力/信创/数据中心/华为算力/DeepSeek 标签完整，契合当日科技线交易偏好 | 概念：5G、信息安全、国产软件、云计算、信创、东数西算、数据中心、算力租赁、华为算力、DeepSeek |\n| 尾盘 | 尾盘继续抬升，承接较好 | 14:30 后 23.80→23.98，方向 +0.76%，尾盘成交约 6088 万 |\n| 板块 | 强于 IT设备行业，有个股主动性 | 个股 +5.50%，IT设备行业 +1.45%，相对强弱 +4.05pct |\n| 类型 | 小中市值 AI/IT设备弹性票，换手较高 | 成交额 5.62 亿，换手 7.59%，PE TTM 330.01 |\n| 日线 | 近 30 日仍为 -10.89%，当前是低位修复；好处是位置不算极端拥挤，坏处是趋势仍需确认 | 当日高 24.48，收 23.98，涨停价 25.00 |\n| 上涨概率 | 中高，估计 55%-60% | AI方向 + 尾盘上推；但扣非亏损/高估值标签降低确定性 |\n\n**一句话判断：** 恒为科技更像“AI算力链的低位修复弹性票”，隔夜价值在于板块若继续进攻，次日容易有惯性冲高。\n\n**交易计划：**\n- 技术面：强弱线 23.80，风险线 23.20，压力区 24.48-25.00；若竞价站上 24.00 且 IT设备/AI硬件不弱，可看冲 24.50 以上。\n- 消息面：没有新增新闻公告，主要靠 AI、算力、信创、华为算力标签和板块扩散。\n- 赔率：离涨停价 25.00 还有空间，但 PE 高、扣非亏损标签意味着一旦板块降温会回撤快。\n- 仓位：轻仓，不宜超过组合 20%-25%。\n- 次日操作：次日冲高预估约 2%-5.5%；高开冲 24.50-25.00 不封板先兑现；平开站稳 23.80 可看 24.30；低开跌破 23.20 视为修复失败。\n\n---",
          "summary_short": "结论可干（轻仓）；催化概念：5G、信息安全、国产软件、云计算、信创、东数西算、数据中心、算力租赁、华为算力、DeepSeek；尾盘14:30 后 23.80→23.98，方向 +0.76%，尾盘成交约 6088 万",
          "stance": "可干（轻仓）",
          "catalyst": "概念：5G、信息安全、国产软件、云计算、信创、东数西算、数据中心、算力租赁、华为算力、DeepSeek",
          "risk": "成交额 5.62 亿，换手 7.59%，PE TTM 330.01",
          "action_hint": "轻仓，不宜超过组合 20%-25%。",
          "status": "ok"
        }
      },
      {
        "rank": 18,
        "strategy_group": "theme_rotation_watch",
        "strategy_group_cn": "题材轮动观察",
        "symbol": "603308",
        "name": "应流股份",
        "source_period": "noon",
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
        "score": 25.028696,
        "source_score": 25.028696,
        "normalized_score": 25.029,
        "unified_score": 25.029,
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
          "theme": "机械基础件",
          "theme_stats": {
            "theme": "机械基础件",
            "count": 7,
            "active_count": 7,
            "strong_count": 4,
            "positive_count": 4,
            "avg_change_pct": 1.164286,
            "avg_volume_ratio": 0.97,
            "total_amount": 397370.49
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
            "theme": "机械基础件",
            "change_pct": 3.14,
            "volume_ratio": 1.29,
            "turnover_rate": 3.7,
            "amount": 159563.86,
            "attack_wave_pct": 2.77,
            "open_grab_pct": 0.33,
            "pullback_from_high_pct": 4.63
          },
          "risk_penalties": [
            "冲高回落偏大"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
          "next_day_success_threshold": 3.0
        },
        "theme_rotation_watch_result": {
          "next_day_change_pct": -4.93,
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
          "intraday_price": 59.62,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
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
          "change_pct": -4.93,
          "open_change_pct": 1.26,
          "turnover_rate": 1.96,
          "volume_ratio": 1.24,
          "amount": 81782.46,
          "last_price": 59.62,
          "theme": "机械基础件",
          "industry": "机械设备-通用设备"
        },
        "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "symbol": "603308",
          "name": "应流股份",
          "groups": [
            "theme_rotation_watch"
          ],
          "group_labels": [
            "题材轮动观察"
          ],
          "original_text": "# 应流股份（603308）— 观察\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 高端装备/通用设备属性，但本次指标层不完整；公告主要为权益分派和可转债转股价格调整，偏中性 | 公告：2025 年年度权益分派实施、调整“应流转债”转股价格、可转债转股结果 |\n| 尾盘 | 尾盘走弱，冲高后回落 | 14:30 后 62.98→62.58，方向 -0.64%，尾盘成交约 1.34 亿 |\n| 板块 | 明显强于通用设备行业，但行业本身偏弱 | 个股 +2.96%，通用设备行业 -2.20%，相对强弱 +5.16pct |\n| 类型 | 高价高端装备趋势票，流动性较好 | 成交额 16.33 亿，换手 3.78%，PE TTM 88.41 |\n| 日线 | 近 30 日 -14.94%，仍处修复，不是明确主升 | 当日高 65.50，收 62.58 |\n| 上涨概率 | 中等偏低，估计 46%-51% | 相对行业强，但尾盘回落 + 数据不完整降权 |\n\n**一句话判断：** 应流股份当天相对强，但尾盘回落明显，且公告不是强催化，新开隔夜不优先。\n\n**交易计划：**\n- 技术面：强弱线 62.50，风险线 61.00，压力区 65.50-66.86。\n- 消息面：权益分派/转债价格调整偏中性，不足以支撑隔夜抢筹。\n- 赔率：若次日高端装备继续强，有修复机会；但尾盘弱说明先手资金不够坚决。\n- 仓位：观察，不建议新开隔夜核心仓。\n- 次日操作：次日冲高预估约 0.5%-3%；高开冲 64.50-65.50 无量先减；跌破 61 放弃。\n\n---",
          "summary_short": "结论观察；催化公告：2025 年年度权益分派实施、调整“应流转债”转股价格、可转债转股结果；尾盘14:30 后 62.98→62.58，方向 -0.64%，尾盘成交约 1.34 亿",
          "stance": "观察",
          "catalyst": "公告：2025 年年度权益分派实施、调整“应流转债”转股价格、可转债转股结果",
          "risk": "成交额 16.33 亿，换手 3.78%，PE TTM 88.41",
          "action_hint": "观察，不建议新开隔夜核心仓。",
          "status": "ok"
        }
      },
      {
        "rank": 19,
        "strategy_group": "theme_rotation_watch",
        "strategy_group_cn": "题材轮动观察",
        "symbol": "001268",
        "name": "联合精密",
        "source_period": "noon",
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
        "score": 23.352737,
        "source_score": 23.352737,
        "normalized_score": 23.353,
        "unified_score": 23.353,
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
          "theme": "机械基础件",
          "theme_stats": {
            "theme": "机械基础件",
            "count": 7,
            "active_count": 7,
            "strong_count": 4,
            "positive_count": 4,
            "avg_change_pct": 1.164286,
            "avg_volume_ratio": 0.97,
            "total_amount": 397370.49
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
            "theme": "机械基础件",
            "change_pct": 2.11,
            "volume_ratio": 1.41,
            "turnover_rate": 6.29,
            "amount": 17460.48,
            "attack_wave_pct": 1.31,
            "open_grab_pct": -1.17,
            "pullback_from_high_pct": 6.7
          },
          "risk_penalties": [
            "公告状态未完全确认",
            "冲高回落偏大"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
          "next_day_success_threshold": 3.0
        },
        "theme_rotation_watch_result": {
          "next_day_change_pct": -0.1,
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
          "intraday_price": 28.62,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
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
          "change_pct": -0.1,
          "open_change_pct": 2.23,
          "turnover_rate": 3.75,
          "volume_ratio": 2.15,
          "amount": 10331.08,
          "last_price": 28.62,
          "theme": "机械基础件",
          "industry": "机械设备-通用设备"
        },
        "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
            "theme_rotation_watch"
          ],
          "group_labels": [
            "题材轮动观察"
          ],
          "original_text": "# 联合精密（001268）— 可干（试错轻仓）\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 昨日涨停/昨日首板标签带来短线记忆，定增预案和小盘弹性增强波动 | 概念：定增预案、昨日涨停、昨日首板、最近情绪、小盘非融 |\n| 尾盘 | 尾盘主动性很强，是本组尾盘上推动能前列 | 14:30 后 39.86→40.43，方向 +1.43%，尾盘成交约 1709 万 |\n| 板块 | 明显强于通用设备行业 | 个股 +2.61%，通用设备行业 -2.20%，相对强弱 +4.81pct |\n| 类型 | 小市值高弹性票，成交额偏小，容易被情绪资金放大 | 成交额 1.81 亿，换手 6.53%，PE TTM 为负 |\n| 日线 | 近 30 日 -6.80%，7月3日涨停后继续修复，但仍未形成稳定主升 | 当日高 42.87，收 40.43，涨停价 43.34 |\n| 上涨概率 | 中等偏高但波动大，估计 53%-58% | 尾盘强 + 昨日涨停记忆；但成交额小、基本面质量弱 |\n\n**一句话判断：** 联合精密是短线弹性最强的试错票，优点是尾盘主动拿货，缺点是容量和稳定性不够，只能小仓位博弈。\n\n**交易计划：**\n- 技术面：强弱线 40.00，风险线 39.20，压力区 42.00-43.34；次日若竞价站上 40.50 且开盘不破 40，说明承接仍在。\n- 消息面：主要靠昨日涨停记忆和情绪资金，不是强基本面催化。\n- 赔率：弹性好，冲高空间可观；但若低开破 39.20，说明情绪退潮。\n- 仓位：试错轻仓，单票不超过组合 15%-20%。\n- 次日操作：次日冲高预估约 2%-6%；高开冲 42 附近先减，若接近 43.34 不能封板坚决落袋；平开守 40 可看 41.50；低开跌破 39.20 放弃。\n\n---",
          "summary_short": "结论可干（试错轻仓）；催化概念：定增预案、昨日涨停、昨日首板、最近情绪、小盘非融；尾盘14:30 后 39.86→40.43，方向 +1.43%，尾盘成交约 1709 万",
          "stance": "可干（试错轻仓）",
          "catalyst": "概念：定增预案、昨日涨停、昨日首板、最近情绪、小盘非融",
          "risk": "成交额 1.81 亿，换手 6.53%，PE TTM 为负",
          "action_hint": "试错轻仓，单票不超过组合 15%-20%。",
          "status": "ok"
        }
      },
      {
        "rank": 20,
        "strategy_group": "theme_rotation_watch",
        "strategy_group_cn": "题材轮动观察",
        "symbol": "600188",
        "name": "兖矿能源",
        "source_period": "noon",
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
        "score": 20.515981,
        "source_score": 20.515981,
        "normalized_score": 20.516,
        "unified_score": 20.516,
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
          "theme": "动力煤",
          "theme_stats": {
            "theme": "动力煤",
            "count": 2,
            "active_count": 2,
            "strong_count": 2,
            "positive_count": 2,
            "avg_change_pct": 4.525,
            "avg_volume_ratio": 1.55,
            "total_amount": 251967.06
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
            "theme": "动力煤",
            "change_pct": 5.45,
            "volume_ratio": 1.84,
            "turnover_rate": 1.88,
            "amount": 206052.44,
            "attack_wave_pct": 7.56,
            "open_grab_pct": 0.0,
            "pullback_from_high_pct": 1.57
          },
          "risk_penalties": [
            "公告状态未完全确认",
            "个股涨幅偏高，追高风险"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
          "next_day_success_threshold": 3.0
        },
        "theme_rotation_watch_result": {
          "next_day_change_pct": -2.66,
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
          "intraday_price": 18.3,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "动力煤",
        "theme_display": "动力煤",
        "industry": "煤炭-煤炭开采",
        "latest_snapshot": {
          "change_pct": -2.66,
          "open_change_pct": -0.69,
          "turnover_rate": 0.68,
          "volume_ratio": 1.06,
          "amount": 74559.98,
          "last_price": 18.3,
          "theme": "动力煤",
          "industry": "煤炭-煤炭开采"
        },
        "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "动力煤",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {
          "symbol": "600188",
          "name": "兖矿能源",
          "groups": [
            "theme_rotation_watch"
          ],
          "group_labels": [
            "题材轮动观察"
          ],
          "original_text": "# 兖矿能源（600188）— 等 / 防守备选\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 煤炭行业走强、回购进展、高分红/周期属性，偏防守与行业轮动 | 公告：股份回购进展；新闻涉及煤炭行业资金流入、回购、分拆物泊科技进展 |\n| 尾盘 | 尾盘基本横盘，未见继续抢筹 | 14:30 后 18.81→18.80，方向 -0.05%，尾盘成交约 3.63 亿 |\n| 板块 | 行业也强，个股略强于行业 | 个股 +5.62%，煤炭开采行业 +4.05%，相对强弱 +1.57pct |\n| 类型 | 大市值高分红周期股，流动性好，波动小于小票 | 成交额 21.28 亿，换手 1.94%，PE TTM 11.93 |\n| 日线 | 近 30 日 -9.48%，属于低位反弹，今日长阳修复 | 当日高 19.05，收 18.80，涨停价 19.58 |\n| 上涨概率 | 中等，估计 51%-56% | 行业轮动强，但短线弹性不如 AI/装备票 |\n\n**一句话判断：** 兖矿能源适合作为隔夜组合的防守备选，不适合作为最强进攻仓；若次日煤炭继续强，它有低波动冲高机会。\n\n**交易计划：**\n- 技术面：强弱线 18.70，风险线 18.30，压力区 19.05-19.58；次日若煤炭行业继续高开，站稳 18.80 才考虑。\n- 消息面：回购进展和高分红属性偏中线支撑，不是强短线爆发催化。\n- 赔率：胜在稳，输在弹性一般；更适合市场分化时防守。\n- 仓位：等待；若作为组合防守仓，轻仓 15%-20%。\n- 次日操作：次日冲高预估约 1.5%-4%；冲 19.05 上方若量能不足先减；平开守 18.70 可观察；跌破 18.30 放弃。\n\n---",
          "summary_short": "结论等 / 防守备选；催化公告：股份回购进展；新闻涉及煤炭行业资金流入、回购、分拆物泊科技进展；尾盘14:30 后 18.81→18.80，方向 -0.05%，尾盘成交约 3.63 亿",
          "stance": "等 / 防守备选",
          "catalyst": "公告：股份回购进展；新闻涉及煤炭行业资金流入、回购、分拆物泊科技进展",
          "risk": "成交额 21.28 亿，换手 1.94%，PE TTM 11.93",
          "action_hint": "等待；若作为组合防守仓，轻仓 15%-20%。",
          "status": "ok"
        }
      },
      {
        "rank": 21,
        "strategy_group": "close_strength_hold_watch",
        "strategy_group_cn": "收盘中强承接观察",
        "symbol": "601001",
        "name": "晋控煤业",
        "source_period": "noon",
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
        "score": 15.383744,
        "source_score": 15.383744,
        "normalized_score": 15.384,
        "unified_score": 15.384,
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
            "change_pct": 3.6,
            "high_pct": 4.22,
            "fade_from_high_pct": -0.59,
            "volume_ratio": 1.26,
            "turnover_rate": 1.52,
            "amount": 45914.62,
            "attack_wave_pct": 5.87,
            "open_grab_pct": 0.0,
            "change_20d_pct": -16.36,
            "year_limit_up_days": 3.0
          },
          "risk_penalties": [
            "公告状态未完全确认"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3；辅助观察次日是否延续中强承接",
          "next_day_success_threshold": 3.0
        },
        "close_strength_hold_watch_result": {
          "next_day_change_pct": -3.41,
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
          "intraday_price": 17.82,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "动力煤",
        "theme_display": "动力煤",
        "industry": "煤炭-煤炭开采",
        "latest_snapshot": {
          "change_pct": -3.41,
          "open_change_pct": 0.27,
          "turnover_rate": 0.79,
          "volume_ratio": 1.27,
          "amount": 23723.36,
          "last_price": 17.82,
          "theme": "动力煤",
          "industry": "煤炭-煤炭开采"
        },
        "display_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "动力煤",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 22,
        "strategy_group": "close_strength_hold_watch",
        "strategy_group_cn": "收盘中强承接观察",
        "symbol": "603345",
        "name": "安井食品",
        "source_period": "noon",
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
        "score": 15.077163,
        "source_score": 15.077163,
        "normalized_score": 15.077,
        "unified_score": 15.077,
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
            "change_pct": 3.18,
            "high_pct": 4.06,
            "fade_from_high_pct": -0.85,
            "volume_ratio": 1.14,
            "turnover_rate": 2.15,
            "amount": 52221.16,
            "attack_wave_pct": 4.39,
            "open_grab_pct": -0.01,
            "change_20d_pct": -1.71,
            "year_limit_up_days": 1.0
          },
          "risk_penalties": [
            "公告状态未完全确认"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3；辅助观察次日是否延续中强承接",
          "next_day_success_threshold": 3.0
        },
        "close_strength_hold_watch_result": {
          "next_day_change_pct": -1.2,
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
          "intraday_price": 83.18,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "预加工食品",
        "theme_display": "预加工食品",
        "industry": "食品饮料-食品加工",
        "latest_snapshot": {
          "change_pct": -1.2,
          "open_change_pct": -0.59,
          "turnover_rate": 0.87,
          "volume_ratio": 0.86,
          "amount": 21086.24,
          "last_price": 83.18,
          "theme": "预加工食品",
          "industry": "食品饮料-食品加工"
        },
        "display_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "预加工食品",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      },
      {
        "rank": 23,
        "strategy_group": "close_strength_hold_watch",
        "strategy_group_cn": "收盘中强承接观察",
        "symbol": "000404",
        "name": "长虹华意",
        "source_period": "noon",
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
        "score": 15.021617,
        "source_score": 15.021617,
        "normalized_score": 15.022,
        "unified_score": 15.022,
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
            "change_pct": 3.69,
            "high_pct": 3.94,
            "fade_from_high_pct": -0.24,
            "volume_ratio": 0.81,
            "turnover_rate": 4.06,
            "amount": 23205.61,
            "attack_wave_pct": 6.17,
            "open_grab_pct": 0.12,
            "change_20d_pct": 6.84,
            "year_limit_up_days": 1.0
          },
          "risk_penalties": [
            "公告状态未完全确认"
          ],
          "next_day_success_standard": "next_day_change_pct >= 3；辅助观察次日是否延续中强承接",
          "next_day_success_threshold": 3.0
        },
        "close_strength_hold_watch_result": {
          "next_day_change_pct": -2.36,
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
          "intraday_price": 8.26,
          "intraday_price_source": "current_period_watchlist_snapshot",
          "entry_price": null,
          "entry_price_source": "",
          "return_basis": "noon_snapshot",
          "same_day_return": null,
          "ledger_same_day_return": null,
          "t1_return": null,
          "day3_return": null,
          "missing_reasons": [
            "模拟买入价缺失，收益待回填",
            "模拟收益账本缺这只票，收益待回填"
          ]
        },
        "theme": "家电零部件",
        "theme_display": "家电零部件",
        "industry": "家电-家电零部件",
        "latest_snapshot": {
          "change_pct": -2.36,
          "open_change_pct": -0.35,
          "turnover_rate": 2.53,
          "volume_ratio": 1.05,
          "amount": 14551.04,
          "last_price": 8.26,
          "theme": "家电零部件",
          "industry": "家电-家电零部件"
        },
        "display_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
        "return_status": "旁路收益待回填",
        "return_scope": "side_channel",
        "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
        "freshness": "当前结构化账本",
        "source_mtime": "2026-07-07T11:37:15+08:00",
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
        "mainline_theme_display": "家电零部件",
        "mainline_verdict_display": "",
        "market_mainline_verdict_display": "",
        "mainline_role_label": "",
        "overnight_report": {}
      }
    ],
    "display_source": "four_layer_tracking",
    "raw_record_count": 23,
    "raw_strategy_counts": {
      "formal_top3": 2,
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
          "count": 2,
          "formal_return_eligible_count": 2,
          "side_channel_return_eligible_count": 0,
          "avg_intraday_return": null,
          "avg_t1_return": null,
          "status_counts": {
            "cancelled": 1,
            "price_missing": 0,
            "tracked": 1,
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
            "false_positive": 2,
            "price_missing": 0,
            "tracked": 0,
            "verified": 1
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
      "record_count": 23,
      "latest_snapshot_match_count": 23,
      "report_match_count": 1,
      "not_found_count": 0,
      "return_policy": "正式收益只统计 Top3；题材观察、技术观察、候选评分前排、低位回流观察、早盘驱动观察、隔夜涨停观察、题材轮动观察和收盘中强承接观察只跟踪面板展示样本，旁路收益也只按这些样本统计。",
      "notice_supplement_completed": true,
      "notice_supplement_required_count": 7,
      "notice_supplement_incomplete_count": 0
    },
    "file": {
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.noon.json",
      "relative_path": "runs/2026-07-07/four-layer-tracking.noon.json",
      "exists": true,
      "size": 134030,
      "modified_at": "2026-07-07T11:37:15+08:00",
      "sha256": "c2339337ddeff6265bde25c7351a4d03e9f62d24d3bcef22ce5701274e62fc0d"
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
          "symbol": "603317",
          "name": "天味食品",
          "source_period": "morning",
          "tracking_scope": "all_layer_records",
          "return_tracking_scope": "formal_return",
          "entry_reason": "公告、技术、评分和执行边界通过，进入正式 Top3 样本",
          "blocked_reason": "",
          "tracking_status": "verified",
          "formal_return_eligible": true,
          "side_channel_return_eligible": false,
          "side_channel_return_scope": "formal_return_only",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "buy_top3",
          "candidate_channel": "technical_fund_flow",
          "current_observation_tier": "b_watch",
          "current_candidate_channel": "technical_fund_flow",
          "current_buy_allowed": false,
          "current_action": "downgrade",
          "current_status_cn": "降级观察",
          "current_blocked_reason": "技术面降级；未达到正式 Top3 准入",
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
            "intraday_price": 14.45,
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
          "theme": "调味品",
          "theme_display": "调味品",
          "industry": "食品饮料-调味品",
          "latest_snapshot": {
            "change_pct": 1.4,
            "open_change_pct": -0.63,
            "turnover_rate": 0.16,
            "volume_ratio": 3.57,
            "amount": 2438.29,
            "last_price": 14.45,
            "theme": "调味品",
            "industry": "食品饮料-调味品"
          },
          "display_reason": "公告、技术、评分和执行边界通过，进入正式 Top3 样本",
          "return_status": "待次日回填",
          "return_scope": "pending",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "调味品",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "603317",
            "name": "天味食品",
            "groups": [
              "formal_top3"
            ],
            "group_labels": [
              "正式 Top3"
            ],
            "original_text": "# 天味食品（603317）— 放弃\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 回购计划、高分红、防守消费属性，但无新增短线催化 | 概念：回购计划、私募重仓、高分红股、融资融券 |\n| 尾盘 | 尾盘回落，短线资金不积极 | 14:30 后方向 -0.49%，全天成交 2.12 亿 |\n| 板块 | 基本贴近调味品行业，无明显相对强度 | 个股 +1.35%，调味品行业 +1.14%，相对强弱 +0.21pct |\n| 类型 | 食品消费防守票，弹性不足 | 换手 1.39%，近 30 日 -7.24% |\n| 日线 | 低位修复，但无强趋势 | 当日收 12.75，涨停价 13.83 |\n| 上涨概率 | 偏低，估计 38%-43% | 防守有余，进攻不足 |\n\n**一句话判断：** 天味食品适合做消费防守观察，不适合“新开隔夜仓”这种要求短线溢价的场景。\n\n**交易计划：**\n- 技术面：强弱线 12.70，风险线 12.45，压力区 13.00-13.40。\n- 消息面：回购/高分红偏中长期支撑，无法替代短线催化。\n- 赔率：次日冲高弹性有限，资金更可能去科技/资源线。\n- 仓位：放弃新开。\n- 次日操作：若冲 13.00 无量，仍按弱修复处理；跌破 12.45 放弃。\n\n---\n\n## 最终执行建议\n\n- **优先可干：** 002353 杰瑞股份、603496 恒为科技、001268 联合精密。三者都只能轻仓，核心逻辑分别是“强辨识度高端装备 / AI算力修复 / 尾盘小票情绪”。\n- **备选等待：** 600188 兖矿能源适合防守仓，000048 京基智农只等竞价超预期，不主动追高。\n- **观察不买：** 000060 中金岭南、603308 应流股份、002588 史丹利。\n- **放弃：** 002850 科达利、002150 正泰电源、603317 天味食品。\n\n## 次日统一纪律\n\n1. 只做竞价和开盘承接确认后的隔夜/超短，不做无条件追高。\n2. 若大盘或核心板块开盘转弱，Top 3 候选全部降为观察。\n3. 若个股高开 3%-5% 但 5 分钟内不能继续放量上攻，优先兑现而不是加仓。\n4. 若跌破各自风险线，隔夜逻辑失效；不得用“中线看好”替代短线止损。\n5. 本报告为模拟/研究用途，不代表实盘成交、真实持仓或账户收益。",
            "summary_short": "结论放弃；催化概念：回购计划、私募重仓、高分红股、融资融券；尾盘14:30 后方向 -0.49%，全天成交 2.12 亿",
            "stance": "放弃",
            "catalyst": "概念：回购计划、私募重仓、高分红股、融资融券",
            "risk": "换手 1.39%，近 30 日 -7.24%",
            "action_hint": "放弃新开。",
            "status": "ok"
          }
        },
        {
          "rank": 2,
          "strategy_group": "formal_top3",
          "strategy_group_cn": "正式 Top3 逻辑",
          "symbol": "002588",
          "name": "史丹利",
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
          "score": 0.622,
          "source_score": 0.622,
          "normalized_score": 62.2,
          "unified_score": 62.2,
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
            "intraday_price": 8.39,
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
          "theme": "复合肥",
          "theme_display": "复合肥",
          "industry": "化工-农用化工",
          "latest_snapshot": {
            "change_pct": -2.33,
            "open_change_pct": -1.51,
            "turnover_rate": 0.19,
            "volume_ratio": 3.47,
            "amount": 1367.1,
            "last_price": 8.39,
            "theme": "复合肥",
            "industry": "化工-农用化工"
          },
          "display_reason": "公告、技术、评分和执行边界通过，进入正式 Top3 样本",
          "return_status": "待次日回填",
          "return_scope": "pending",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "复合肥",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "002588",
            "name": "史丹利",
            "groups": [
              "formal_top3"
            ],
            "group_labels": [
              "正式 Top3"
            ],
            "original_text": "# 史丹利（002588）— 观察\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 化肥、磷概念、乡村振兴，偏农业防守与资源属性 | 概念：磷概念、化肥概念、乡村振兴、低市盈率、锂电池 |\n| 尾盘 | 尾盘几乎横盘，攻击性不足 | 14:30 后方向 +0.12%，全天成交 1.82 亿 |\n| 板块 | 强于农用化工行业，但绝对涨幅一般 | 个股 +2.75%，农用化工行业 +0.34%，相对强弱 +2.41pct |\n| 类型 | 低估值农业化工票，防守多于进攻 | 换手 2.47%，近 30 日 -7.64% |\n| 日线 | 仍处低位修复，尚未形成短线强趋势 | 当日收 7.85，涨停价 8.40 |\n| 上涨概率 | 中等偏低，估计 45%-50% | 防守属性可看，但隔夜弹性不足 |\n\n**一句话判断：** 史丹利不是坏票，但缺少强催化和尾盘抢筹，作为新开隔夜仓不够锋利。\n\n**交易计划：**\n- 技术面：强弱线 7.80，风险线 7.65，压力区 8.00-8.40。\n- 消息面：无新增新闻公告，主要依靠化肥/磷概念防守逻辑。\n- 赔率：下行风险相对可控，但次日冲高弹性也有限。\n- 仓位：观察，不进核心隔夜组合。\n- 次日操作：次日冲高预估约 0.5%-2.5%；若不能突破 8.00，继续当弱修复看待；跌破 7.65 放弃。\n\n---",
            "summary_short": "结论观察；催化概念：磷概念、化肥概念、乡村振兴、低市盈率、锂电池；尾盘14:30 后方向 +0.12%，全天成交 1.82 亿",
            "stance": "观察",
            "catalyst": "概念：磷概念、化肥概念、乡村振兴、低市盈率、锂电池",
            "risk": "换手 2.47%，近 30 日 -7.64%",
            "action_hint": "观察，不进核心隔夜组合。",
            "status": "ok"
          }
        },
        {
          "rank": 3,
          "strategy_group": "a_theme_watch",
          "strategy_group_cn": "A类主线/题材逻辑",
          "symbol": "000899",
          "name": "赣能股份",
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
            "intraday_price": 9.92,
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
          "theme": "火力发电",
          "theme_display": "火力发电",
          "industry": "公用事业-电力",
          "latest_snapshot": {
            "change_pct": -1.78,
            "open_change_pct": -0.59,
            "turnover_rate": 0.14,
            "volume_ratio": 3.39,
            "amount": 1372.12,
            "last_price": 9.92,
            "theme": "火力发电",
            "industry": "公用事业-电力"
          },
          "display_reason": "消息/题材驱动候选，需技术面继续确认",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "火力发电",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 4,
          "strategy_group": "a_theme_watch",
          "strategy_group_cn": "A类主线/题材逻辑",
          "symbol": "600854",
          "name": "春兰股份",
          "source_period": "morning",
          "tracking_scope": "all_layer_records",
          "return_tracking_scope": "side_channel_or_status_only",
          "entry_reason": "消息/题材驱动候选，需技术面继续确认；不打板短线模型禁止追买，只允许回踩/承接确认后观察",
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
          "score": 0.622,
          "source_score": 0.622,
          "normalized_score": 62.2,
          "unified_score": 62.2,
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
            "intraday_price": 4.27,
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
          "theme": "空调",
          "theme_display": "空调",
          "industry": "家电-白色家电",
          "latest_snapshot": {
            "change_pct": -1.61,
            "open_change_pct": -0.69,
            "turnover_rate": 0.28,
            "volume_ratio": 3.89,
            "amount": 627.91,
            "last_price": 4.27,
            "theme": "空调",
            "industry": "家电-白色家电"
          },
          "display_reason": "消息/题材驱动候选，需技术面继续确认；不打板短线模型禁止追买，只允许回踩/承接确认后观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "空调",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 5,
          "strategy_group": "a_theme_watch",
          "strategy_group_cn": "A类主线/题材逻辑",
          "symbol": "002818",
          "name": "富森美",
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
            "intraday_price": 10.51,
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
          "theme": "商业物业经营",
          "theme_display": "商业物业经营",
          "industry": "商贸-商业物业经营",
          "latest_snapshot": {
            "change_pct": -1.78,
            "open_change_pct": -0.09,
            "turnover_rate": 0.12,
            "volume_ratio": 4.23,
            "amount": 391.04,
            "last_price": 10.51,
            "theme": "商业物业经营",
            "industry": "商贸-商业物业经营"
          },
          "display_reason": "消息/题材驱动候选，需技术面继续确认；不打板短线模型禁止追买，只允许回踩/承接确认后观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "商业物业经营",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 6,
          "strategy_group": "score_front_rejected",
          "strategy_group_cn": "候选评分前排逻辑",
          "symbol": "000899",
          "name": "赣能股份",
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
            "intraday_price": 9.92,
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
          "theme": "火力发电",
          "theme_display": "火力发电",
          "industry": "公用事业-电力",
          "latest_snapshot": {
            "change_pct": -1.78,
            "open_change_pct": -0.59,
            "turnover_rate": 0.14,
            "volume_ratio": 3.39,
            "amount": 1372.12,
            "last_price": 9.92,
            "theme": "火力发电",
            "industry": "公用事业-电力"
          },
          "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "火力发电",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 7,
          "strategy_group": "score_front_rejected",
          "strategy_group_cn": "候选评分前排逻辑",
          "symbol": "000537",
          "name": "绿发电力",
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
            "intraday_price": 7.39,
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
          "theme": "风力发电",
          "theme_display": "风力发电",
          "industry": "公用事业-电力",
          "latest_snapshot": {
            "change_pct": -2.12,
            "open_change_pct": -0.13,
            "turnover_rate": 0.16,
            "volume_ratio": 4.76,
            "amount": 2427.07,
            "last_price": 7.39,
            "theme": "风力发电",
            "industry": "公用事业-电力"
          },
          "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "风力发电",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 8,
          "strategy_group": "score_front_rejected",
          "strategy_group_cn": "候选评分前排逻辑",
          "symbol": "002192",
          "name": "融捷股份",
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
          "score": 0.622,
          "source_score": 0.622,
          "normalized_score": 62.2,
          "unified_score": 62.2,
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
            "intraday_price": 99.84,
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
            "change_pct": 5.76,
            "open_change_pct": 3.78,
            "turnover_rate": 3.54,
            "volume_ratio": 10.8,
            "amount": 90799.59,
            "last_price": 99.84,
            "theme": "锂",
            "industry": "有色-能源金属"
          },
          "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "锂",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 9,
          "strategy_group": "low_reflow_watch",
          "strategy_group_cn": "低位回流观察",
          "symbol": "000048",
          "name": "京基智农",
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
          "score": 21.363912,
          "source_score": 21.363912,
          "normalized_score": 21.364,
          "unified_score": 21.364,
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
              "change_pct": 2.92,
              "volume_ratio": 1.37,
              "turnover_rate": 5.83,
              "amount": 65004.9,
              "open_grab_pct": 0.61,
              "attack_wave_pct": 7.53
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "low_reflow_watch_result": {
            "next_day_change_pct": -0.79,
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
            "intraday_price": 21.48,
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
            "change_pct": -0.79,
            "open_change_pct": -1.29,
            "turnover_rate": 0.39,
            "volume_ratio": 2.85,
            "amount": 4440.19,
            "last_price": 21.48,
            "theme": "生猪养殖",
            "industry": "农林牧渔-养殖业"
          },
          "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "生猪养殖",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 10,
          "strategy_group": "low_reflow_watch",
          "strategy_group_cn": "低位回流观察",
          "symbol": "002192",
          "name": "融捷股份",
          "source_period": "morning",
          "tracking_scope": "side_channel_only",
          "return_tracking_scope": "side_channel_only",
          "entry_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
          "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
          "tracking_status": "verified",
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
            "eligible_for_handoff": false
          },
          "score": 20.087383,
          "source_score": 20.087383,
          "normalized_score": 20.087,
          "unified_score": 20.087,
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
              "change_pct": 2.85,
              "volume_ratio": 1.05,
              "turnover_rate": 11.32,
              "amount": 278393.06,
              "open_grab_pct": 0.0,
              "attack_wave_pct": 7.29
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "low_reflow_watch_result": {
            "next_day_change_pct": 5.76,
            "success": true,
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
            "intraday_price": 99.84,
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
            "change_pct": 5.76,
            "open_change_pct": 3.78,
            "turnover_rate": 3.54,
            "volume_ratio": 10.8,
            "amount": 90799.59,
            "last_price": 99.84,
            "theme": "锂",
            "industry": "有色-能源金属"
          },
          "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "overnight_report": {}
        },
        {
          "rank": 11,
          "strategy_group": "low_reflow_watch",
          "strategy_group_cn": "低位回流观察",
          "symbol": "002290",
          "name": "禾盛新材",
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
          "score": 19.670865,
          "source_score": 19.670865,
          "normalized_score": 19.671,
          "unified_score": 19.671,
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
              "change_pct": 2.84,
              "volume_ratio": 1.16,
              "turnover_rate": 4.51,
              "amount": 97226.01,
              "open_grab_pct": 1.12,
              "attack_wave_pct": 7.85
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "low_reflow_watch_result": {
            "next_day_change_pct": -1.81,
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
            "intraday_price": 86.66,
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
          "theme": "家电零部件",
          "theme_display": "家电零部件",
          "industry": "家电-家电零部件",
          "latest_snapshot": {
            "change_pct": -1.81,
            "open_change_pct": -0.29,
            "turnover_rate": 0.32,
            "volume_ratio": 2.57,
            "amount": 6888.85,
            "last_price": 86.66,
            "theme": "家电零部件",
            "industry": "家电-家电零部件"
          },
          "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "家电零部件",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 12,
          "strategy_group": "open_drive_watch",
          "strategy_group_cn": "早盘驱动观察",
          "symbol": "000060",
          "name": "中金岭南",
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
          "score": 11.0191,
          "source_score": 11.0191,
          "normalized_score": 11.019,
          "unified_score": 11.019,
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
              "change_pct": 1.66,
              "open_drive_pct": 0.54,
              "volume_ratio": 1.91,
              "turnover_rate": 8.87,
              "amount": 302768.91,
              "attack_wave_pct": 0.55,
              "pullback_from_high_pct": 8.3
            },
            "risk_penalties": [
              "早盘冲高后回落偏大"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "open_drive_watch_result": {
            "next_day_change_pct": -4.07,
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
            "intraday_price": 7.08,
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
            "change_pct": -4.07,
            "open_change_pct": -2.98,
            "turnover_rate": 1.08,
            "volume_ratio": 6.78,
            "amount": 33871.48,
            "last_price": 7.08,
            "theme": "铅锌",
            "industry": "有色-工业金属"
          },
          "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "铅锌",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "000060",
            "name": "中金岭南",
            "groups": [
              "open_drive_watch"
            ],
            "group_labels": [
              "早盘驱动观察"
            ],
            "original_text": "# 中金岭南（000060）— 观察\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 2026 半年度业绩预告、有色金属资源属性；但公司澄清未涉及高端 PCB 微钻孔板相关业务，题材误读需降温 | 公告：2026 半年度业绩预告、可转债相关公告；新闻：公司称未涉及高端 PCB 微钻孔板相关业务 |\n| 尾盘 | 尾盘小幅回落，不是隔夜资金主动抢筹 | 14:30 后方向 -0.27%，全天成交 30.81 亿 |\n| 板块 | 个股强于工业金属行业，资金有相对认可 | 个股 +1.94%，工业金属行业 -0.76%，相对强弱 +2.70pct |\n| 类型 | 有色资源中盘高成交票，换手高 | 成交额 30.81 亿，换手 9.04% |\n| 日线 | 近 30 日 -4.29%，当前仍偏修复 | 当日收 11.04，涨停价 11.92 |\n| 上涨概率 | 中等，估计 48%-53% | 业绩/资源属性加分；尾盘走弱和 PCB误读降权 |\n\n**一句话判断：** 中金岭南适合观察有色资源和业绩预告兑现，不适合按 PCB/AI概念强行隔夜追。\n\n**交易计划：**\n- 技术面：强弱线 10.95，风险线 10.70，压力区 11.30-11.92。\n- 消息面：业绩预告偏正面，但“未涉及高端 PCB 微钻孔板”削弱短线概念弹性。\n- 赔率：成交充足但尾盘没有主动抢筹，隔夜性价比一般。\n- 仓位：观察，不进首选组合。\n- 次日操作：次日冲高预估约 1%-3.5%；若高开但不能站上 11.30，优先兑现；跌破 10.70 放弃。\n\n---",
            "summary_short": "结论观察；催化公告：2026 半年度业绩预告、可转债相关公告；新闻：公司称未涉及高端 PCB 微钻孔板相关业务；尾盘14:30 后方向 -0.27%，全天成交 30.81 亿",
            "stance": "观察",
            "catalyst": "公告：2026 半年度业绩预告、可转债相关公告；新闻：公司称未涉及高端 PCB 微钻孔板相关业务",
            "risk": "成交额 30.81 亿，换手 9.04%",
            "action_hint": "观察，不进首选组合。",
            "status": "ok"
          }
        },
        {
          "rank": 13,
          "strategy_group": "open_drive_watch",
          "strategy_group_cn": "早盘驱动观察",
          "symbol": "002150",
          "name": "正泰电源",
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
          "score": 9.065063,
          "source_score": 9.065063,
          "normalized_score": 9.065,
          "unified_score": 9.065,
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
              "change_pct": -0.78,
              "open_drive_pct": 0.85,
              "volume_ratio": 0.99,
              "turnover_rate": 4.52,
              "amount": 44081.4,
              "attack_wave_pct": 1.6,
              "pullback_from_high_pct": 5.8
            },
            "risk_penalties": [
              "公告状态未完全确认",
              "量能偏弱",
              "早盘冲高后回落偏大"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "open_drive_watch_result": {
            "next_day_change_pct": -1.19,
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
            "intraday_price": 26.53,
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
          "theme": "金属制品",
          "theme_display": "金属制品",
          "industry": "机械设备-通用设备",
          "latest_snapshot": {
            "change_pct": -1.19,
            "open_change_pct": -1.27,
            "turnover_rate": 0.37,
            "volume_ratio": 2.54,
            "amount": 3471.24,
            "last_price": 26.53,
            "theme": "金属制品",
            "industry": "机械设备-通用设备"
          },
          "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "金属制品",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "002150",
            "name": "正泰电源",
            "groups": [
              "open_drive_watch"
            ],
            "group_labels": [
              "早盘驱动观察"
            ],
            "original_text": "# 正泰电源（002150）— 放弃\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 储能、光伏、风电、充电桩等新能源电力设备标签，但近期趋势弱；新闻主要涉及子公司股权转让 | 新闻：子公司股权转让/优先购买权相关；概念：储能、光伏、风电、充电桩、海外业务 |\n| 尾盘 | 尾盘继续偏弱 | 14:30 后方向 -0.19%，全天成交 4.54 亿 |\n| 板块 | 略强于电网设备行业，但个股本身收跌 | 个股 -0.67%，电网设备行业 -1.28%，相对强弱 +0.61pct |\n| 类型 | 新能源电力设备修复票，当前趋势仍弱 | 换手 4.66%，近 30 日 -19.93% |\n| 日线 | 近 30 日下跌明显，尚未扭转趋势 | 当日收 18.95，涨停价 21.14 |\n| 上涨概率 | 偏低，估计 40%-45% | 弱趋势 + 尾盘弱，不符合隔夜新开标准 |\n\n**一句话判断：** 正泰电源仍处弱趋势修复，公告/新闻也不是强进攻催化，新开隔夜应回避。\n\n**交易计划：**\n- 技术面：强弱线 19.10，风险线 18.60，压力区 19.70-20.40。\n- 消息面：股权转让事项偏公司治理/资产安排，不是短线强催化。\n- 赔率：除非新能源电力设备整体大幅修复，否则缺乏隔夜弹性。\n- 仓位：放弃新开。\n- 次日操作：高开不能站上 19.70 不追；跌破 18.60 继续弱势。\n\n---",
            "summary_short": "结论放弃；催化新闻：子公司股权转让/优先购买权相关；概念：储能、光伏、风电、充电桩、海外业务；尾盘14:30 后方向 -0.19%，全天成交 4.54 亿",
            "stance": "放弃",
            "catalyst": "新闻：子公司股权转让/优先购买权相关；概念：储能、光伏、风电、充电桩、海外业务",
            "risk": "换手 4.66%，近 30 日 -19.93%",
            "action_hint": "放弃新开。",
            "status": "ok"
          }
        },
        {
          "rank": 14,
          "strategy_group": "open_drive_watch",
          "strategy_group_cn": "早盘驱动观察",
          "symbol": "002850",
          "name": "科达利",
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
          "score": 8.7748,
          "source_score": 8.7748,
          "normalized_score": 8.775,
          "unified_score": 8.775,
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
              "change_pct": -0.73,
              "open_drive_pct": 1.18,
              "volume_ratio": 1.98,
              "turnover_rate": 7.55,
              "amount": 365905.66,
              "attack_wave_pct": 0.0,
              "pullback_from_high_pct": 5.86
            },
            "risk_penalties": [
              "公告状态未完全确认",
              "早盘冲高后回落偏大"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "open_drive_watch_result": {
            "next_day_change_pct": 2.16,
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
            "intraday_price": 228.75,
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
          "theme": "锂电池",
          "theme_display": "锂电池",
          "industry": "电力设备-电池",
          "latest_snapshot": {
            "change_pct": 2.16,
            "open_change_pct": -1.0,
            "turnover_rate": 0.57,
            "volume_ratio": 3.86,
            "amount": 27026.53,
            "last_price": 228.75,
            "theme": "锂电池",
            "industry": "电力设备-电池"
          },
          "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "锂电池",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "002850",
            "name": "科达利",
            "groups": [
              "open_drive_watch"
            ],
            "group_labels": [
              "早盘驱动观察"
            ],
            "original_text": "# 科达利（002850）— 放弃\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 新能源车、储能、固态电池、百元股、昨日涨停标签，题材强但今日资金兑现 | 概念：新能源车、储能、固态电池、百元股、昨日涨停、昨日首板、近期新高 |\n| 尾盘 | 尾盘明显走弱，是硬伤 | 14:30 后方向 -1.06%，全天成交 37.80 亿 |\n| 板块 | 跌幅小于电池行业，但仍是下跌 | 个股 -0.96%，电池行业 -2.12%，相对强弱 +1.16pct |\n| 类型 | 百元高位新能源结构件票，容量大但兑现压力也大 | 换手 7.81%，近 30 日 +13.25% |\n| 日线 | 高位强趋势遇到日内回落，隔夜赔率下降 | 当日收 165.64，涨停价 184.00 |\n| 上涨概率 | 偏低，估计 42%-47% | 高位 + 尾盘下压，不适合新开隔夜 |\n\n**一句话判断：** 科达利题材和辨识度都不差，但尾盘 -1.06% 已经说明资金在兑现，新开隔夜容易买在分歧延续点。\n\n**交易计划：**\n- 技术面：强弱线 166.00，风险线 161.80，压力区 172.00-176.00。\n- 消息面：无公告风险，但也缺少足够强的新催化覆盖尾盘兑现。\n- 赔率：若次日电池链修复可能反抽，但不是隔夜首选。\n- 仓位：放弃新开；已有仓也应偏减而非加。\n- 次日操作：若高开不能收回 170，优先落袋；跌破 161.80 风险扩大。\n\n---",
            "summary_short": "结论放弃；催化概念：新能源车、储能、固态电池、百元股、昨日涨停、昨日首板、近期新高；尾盘14:30 后方向 -1.06%，全天成交 37.80 亿",
            "stance": "放弃",
            "catalyst": "概念：新能源车、储能、固态电池、百元股、昨日涨停、昨日首板、近期新高",
            "risk": "换手 7.81%，近 30 日 +13.25%",
            "action_hint": "放弃新开；已有仓也应偏减而非加。",
            "status": "ok"
          }
        },
        {
          "rank": 15,
          "strategy_group": "overnight_limit_watch",
          "strategy_group_cn": "隔夜涨停观察",
          "symbol": "002353",
          "name": "杰瑞股份",
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
          "score": 48.214339,
          "source_score": 48.214339,
          "normalized_score": 48.214,
          "unified_score": 48.214,
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
              "change_pct": 6.06,
              "high_pct": 9.37,
              "pullback_from_high_pct": 3.31,
              "volume_ratio": 1.37,
              "turnover_rate": 3.29,
              "amount": 390830.75,
              "attack_wave_pct": 5.79,
              "open_grab_pct": -0.04,
              "year_limit_up_days": 8.0,
              "tail_volume_support": true
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
            "next_day_success_threshold": 9.0
          },
          "overnight_limit_watch_result": {
            "next_day_change_pct": -2.59,
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
            "intraday_price": 166.67,
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
          "theme": "能源及重型设备",
          "theme_display": "能源及重型设备",
          "industry": "机械设备-专用设备",
          "latest_snapshot": {
            "change_pct": -2.59,
            "open_change_pct": 1.06,
            "turnover_rate": 0.32,
            "volume_ratio": 4.54,
            "amount": 37014.21,
            "last_price": 166.67,
            "theme": "能源及重型设备",
            "industry": "机械设备-专用设备"
          },
          "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "能源及重型设备",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "002353",
            "name": "杰瑞股份",
            "groups": [
              "overnight_limit_watch"
            ],
            "group_labels": [
              "隔夜涨停观察"
            ],
            "original_text": "# 杰瑞股份（002353）— 可干（轻仓核心）\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 高端装备、天然气、可燃冰、页岩气、核电核能等题材叠加，7月3日涨停并上龙虎榜，短线辨识度较强 | 新闻：7月3日龙虎榜，买入前五合计约 6.36 亿、卖出前五约 4.5 亿，龙虎榜净买入约 2.93 亿；概念含“昨日涨停、天然气、核电核能、高端装备” |\n| 尾盘 | 尾盘横向承接，不是继续猛拉，但没有明显跳水 | 14:30 后 171.65→171.79，方向 +0.08%，尾盘成交约 3.90 亿 |\n| 板块 | 个股显著强于行业，属于当日强势独立票 | 个股 +6.40%，专用设备行业 -1.50%，相对强弱 +7.90pct |\n| 类型 | 大市值高端装备趋势票，成交额充足，流动性好 | 成交额 40.17 亿，换手 3.38%，PE TTM 74.75 |\n| 日线 | 近 30 日方向 +25.07%，7月3日涨停后继续放量上行，短线强但已有获利盘 | 当日高 176.59，收 171.79，涨停价 177.61 |\n| 上涨概率 | 中高，估计 57%-62% | 强相对收益 + 龙虎榜记忆 + 放量；但尾盘未继续抢筹，需防高位兑现 |\n\n**一句话判断：** 杰瑞股份是本组里“强度、流动性、辨识度”最均衡的隔夜候选，但今天已大涨，次日只能按冲高兑现思路做，不能当中线持仓买。\n\n**交易计划：**\n- 技术面：强弱线看 170.50，风险线看 166.80，压力区 176.60-177.60；若竞价站上 172 且开盘 5-10 分钟不破 170.50，承接合格。\n- 消息面：龙虎榜净买入和昨日涨停记忆是短线加分，高端装备/能源装备逻辑提供题材承接。\n- 赔率：次日有冲高赔率，但越接近涨停价越容易出现兑现盘。\n- 仓位：轻仓核心，单票不超过隔夜组合 25%-30%。\n- 次日操作：次日冲高预估约 2.5%-6%；高开 3%以上先看 176.60-177.60 压力，冲高缩量分批落袋；平开后快速站回 172 可持有看 175；低开跌破 166.80 则说明资金兑现，放弃隔夜逻辑。\n\n---",
            "summary_short": "结论可干（轻仓核心）；催化新闻：7月3日龙虎榜，买入前五合计约 6.36 亿、卖出前五约 4.5 亿，龙虎榜净买入约 2.93 亿；概念含“昨日涨停、天然气、核电核能；尾盘14:30 后 171.65→171.79，方向 +0.08%，尾盘",
            "stance": "可干（轻仓核心）",
            "catalyst": "新闻：7月3日龙虎榜，买入前五合计约 6.36 亿、卖出前五约 4.5 亿，龙虎榜净买入约 2.93 亿；概念含“昨日涨停、天然气、核电核能、高端装备”",
            "risk": "成交额 40.17 亿，换手 3.38%，PE TTM 74.75",
            "action_hint": "轻仓核心，单票不超过隔夜组合 25%-30%。",
            "status": "ok"
          }
        },
        {
          "rank": 16,
          "strategy_group": "overnight_limit_watch",
          "strategy_group_cn": "隔夜涨停观察",
          "symbol": "000048",
          "name": "京基智农",
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
          "score": 46.907322,
          "source_score": 46.907322,
          "normalized_score": 46.907,
          "unified_score": 46.907,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {
            "model": "overnight_limit_watch_v1",
            "rank": 2,
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
              "change_pct": 2.92,
              "high_pct": 4.61,
              "pullback_from_high_pct": 1.69,
              "volume_ratio": 1.37,
              "turnover_rate": 5.83,
              "amount": 65004.9,
              "attack_wave_pct": 7.53,
              "open_grab_pct": 0.61,
              "year_limit_up_days": 12.0,
              "tail_volume_support": true
            },
            "risk_penalties": [
              "20日涨幅过热"
            ],
            "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
            "next_day_success_threshold": 9.0
          },
          "overnight_limit_watch_result": {
            "next_day_change_pct": -0.79,
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
            "intraday_price": 21.48,
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
            "change_pct": -0.79,
            "open_change_pct": -1.29,
            "turnover_rate": 0.39,
            "volume_ratio": 2.85,
            "amount": 4440.19,
            "last_price": 21.48,
            "theme": "生猪养殖",
            "industry": "农林牧渔-养殖业"
          },
          "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "生猪养殖",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "000048",
            "name": "京基智农",
            "groups": [
              "overnight_limit_watch"
            ],
            "group_labels": [
              "隔夜涨停观察"
            ],
            "original_text": "# 京基智农（000048）— 等\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 养殖业、猪肉/鸡肉、AI科技子公司新闻，具备故事性；但担保余额占净资产比例较高需警惕 | 新闻：设立科技子公司；公告：为下属公司提供担保进展，担保余额 22.85 亿元，占最近一期净资产 56.00% |\n| 尾盘 | 尾盘非常强，资金有明显回流 | 14:30 后尾盘方向 +2.49%，尾盘成交约 6723 万 |\n| 板块 | 弱于养殖业行业，说明更像个股资金而非板块核心 | 个股 +2.59%，养殖业行业 +4.31%，相对强弱 -1.72pct |\n| 类型 | 高波动养殖 + 科技转型故事票 | 成交额 6.72 亿，换手 6.03%，近 30 日 +62.37% |\n| 日线 | 近 30 日涨幅过大，短线拥挤 | 当日收 16.22，涨停价 17.80 |\n| 上涨概率 | 中等，估计 50%-55% | 尾盘强加分；但高位和担保公告降低隔夜赔率 |\n\n**一句话判断：** 京基智农尾盘很好，但位置太高、且财务担保公告不适合忽略，除非次日竞价继续超预期，否则不做首选隔夜。\n\n**交易计划：**\n- 技术面：强弱线 16.00，风险线 15.50，压力区 16.70-17.80；高位票必须看竞价是否继续放量。\n- 消息面：科技子公司是题材加分，担保公告是风险折价。\n- 赔率：尾盘资金强，但近 30 日涨幅过大，次日兑现压力大。\n- 仓位：等待，不主动隔夜；若强做只能极轻仓。\n- 次日操作：次日冲高预估约 1.5%-5%；高开 3%以上不快速冲 16.70 先减；平开守 16 可观察；跌破 15.50 放弃。\n\n---",
            "summary_short": "结论等；催化新闻：设立科技子公司；公告：为下属公司提供担保进展，担保余额 22.85 亿元，占最近一期净资产 56.00%；尾盘14:30 后尾盘方向 +2.49%，尾盘成交约 6723 万",
            "stance": "等",
            "catalyst": "新闻：设立科技子公司；公告：为下属公司提供担保进展，担保余额 22.85 亿元，占最近一期净资产 56.00%",
            "risk": "成交额 6.72 亿，换手 6.03%，近 30 日 +62.37%",
            "action_hint": "等待，不主动隔夜；若强做只能极轻仓。",
            "status": "ok"
          }
        },
        {
          "rank": 17,
          "strategy_group": "overnight_limit_watch",
          "strategy_group_cn": "隔夜涨停观察",
          "symbol": "603496",
          "name": "恒为科技",
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
          "score": 45.124896,
          "source_score": 45.124896,
          "normalized_score": 45.125,
          "unified_score": 45.125,
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
              "change_pct": 5.32,
              "high_pct": 7.7,
              "pullback_from_high_pct": 2.38,
              "volume_ratio": 2.19,
              "turnover_rate": 7.3,
              "amount": 53996.89,
              "attack_wave_pct": 10.68,
              "open_grab_pct": 0.4,
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
            "next_day_change_pct": -2.21,
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
            "intraday_price": 23.46,
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
          "theme": "其他IT设备",
          "theme_display": "其他IT设备",
          "industry": "计算机-IT设备",
          "latest_snapshot": {
            "change_pct": -2.21,
            "open_change_pct": -2.0,
            "turnover_rate": 0.85,
            "volume_ratio": 6.83,
            "amount": 6385.89,
            "last_price": 23.46,
            "theme": "其他IT设备",
            "industry": "计算机-IT设备"
          },
          "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "其他IT设备",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "603496",
            "name": "恒为科技",
            "groups": [
              "overnight_limit_watch"
            ],
            "group_labels": [
              "隔夜涨停观察"
            ],
            "original_text": "# 恒为科技（603496）— 可干（轻仓）\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | AI/算力/信创/数据中心/华为算力/DeepSeek 标签完整，契合当日科技线交易偏好 | 概念：5G、信息安全、国产软件、云计算、信创、东数西算、数据中心、算力租赁、华为算力、DeepSeek |\n| 尾盘 | 尾盘继续抬升，承接较好 | 14:30 后 23.80→23.98，方向 +0.76%，尾盘成交约 6088 万 |\n| 板块 | 强于 IT设备行业，有个股主动性 | 个股 +5.50%，IT设备行业 +1.45%，相对强弱 +4.05pct |\n| 类型 | 小中市值 AI/IT设备弹性票，换手较高 | 成交额 5.62 亿，换手 7.59%，PE TTM 330.01 |\n| 日线 | 近 30 日仍为 -10.89%，当前是低位修复；好处是位置不算极端拥挤，坏处是趋势仍需确认 | 当日高 24.48，收 23.98，涨停价 25.00 |\n| 上涨概率 | 中高，估计 55%-60% | AI方向 + 尾盘上推；但扣非亏损/高估值标签降低确定性 |\n\n**一句话判断：** 恒为科技更像“AI算力链的低位修复弹性票”，隔夜价值在于板块若继续进攻，次日容易有惯性冲高。\n\n**交易计划：**\n- 技术面：强弱线 23.80，风险线 23.20，压力区 24.48-25.00；若竞价站上 24.00 且 IT设备/AI硬件不弱，可看冲 24.50 以上。\n- 消息面：没有新增新闻公告，主要靠 AI、算力、信创、华为算力标签和板块扩散。\n- 赔率：离涨停价 25.00 还有空间，但 PE 高、扣非亏损标签意味着一旦板块降温会回撤快。\n- 仓位：轻仓，不宜超过组合 20%-25%。\n- 次日操作：次日冲高预估约 2%-5.5%；高开冲 24.50-25.00 不封板先兑现；平开站稳 23.80 可看 24.30；低开跌破 23.20 视为修复失败。\n\n---",
            "summary_short": "结论可干（轻仓）；催化概念：5G、信息安全、国产软件、云计算、信创、东数西算、数据中心、算力租赁、华为算力、DeepSeek；尾盘14:30 后 23.80→23.98，方向 +0.76%，尾盘成交约 6088 万",
            "stance": "可干（轻仓）",
            "catalyst": "概念：5G、信息安全、国产软件、云计算、信创、东数西算、数据中心、算力租赁、华为算力、DeepSeek",
            "risk": "成交额 5.62 亿，换手 7.59%，PE TTM 330.01",
            "action_hint": "轻仓，不宜超过组合 20%-25%。",
            "status": "ok"
          }
        },
        {
          "rank": 18,
          "strategy_group": "theme_rotation_watch",
          "strategy_group_cn": "题材轮动观察",
          "symbol": "603308",
          "name": "应流股份",
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
          "score": 25.028696,
          "source_score": 25.028696,
          "normalized_score": 25.029,
          "unified_score": 25.029,
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
            "theme": "机械基础件",
            "theme_stats": {
              "theme": "机械基础件",
              "count": 7,
              "active_count": 7,
              "strong_count": 4,
              "positive_count": 4,
              "avg_change_pct": 1.164286,
              "avg_volume_ratio": 0.97,
              "total_amount": 397370.49
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
              "theme": "机械基础件",
              "change_pct": 3.14,
              "volume_ratio": 1.29,
              "turnover_rate": 3.7,
              "amount": 159563.86,
              "attack_wave_pct": 2.77,
              "open_grab_pct": 0.33,
              "pullback_from_high_pct": 4.63
            },
            "risk_penalties": [
              "冲高回落偏大"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
            "next_day_success_threshold": 3.0
          },
          "theme_rotation_watch_result": {
            "next_day_change_pct": -1.79,
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
            "intraday_price": 61.59,
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
            "change_pct": -1.79,
            "open_change_pct": 1.26,
            "turnover_rate": 0.37,
            "volume_ratio": 4.03,
            "amount": 15858.48,
            "last_price": 61.59,
            "theme": "机械基础件",
            "industry": "机械设备-通用设备"
          },
          "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
            "symbol": "603308",
            "name": "应流股份",
            "groups": [
              "theme_rotation_watch"
            ],
            "group_labels": [
              "题材轮动观察"
            ],
            "original_text": "# 应流股份（603308）— 观察\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 高端装备/通用设备属性，但本次指标层不完整；公告主要为权益分派和可转债转股价格调整，偏中性 | 公告：2025 年年度权益分派实施、调整“应流转债”转股价格、可转债转股结果 |\n| 尾盘 | 尾盘走弱，冲高后回落 | 14:30 后 62.98→62.58，方向 -0.64%，尾盘成交约 1.34 亿 |\n| 板块 | 明显强于通用设备行业，但行业本身偏弱 | 个股 +2.96%，通用设备行业 -2.20%，相对强弱 +5.16pct |\n| 类型 | 高价高端装备趋势票，流动性较好 | 成交额 16.33 亿，换手 3.78%，PE TTM 88.41 |\n| 日线 | 近 30 日 -14.94%，仍处修复，不是明确主升 | 当日高 65.50，收 62.58 |\n| 上涨概率 | 中等偏低，估计 46%-51% | 相对行业强，但尾盘回落 + 数据不完整降权 |\n\n**一句话判断：** 应流股份当天相对强，但尾盘回落明显，且公告不是强催化，新开隔夜不优先。\n\n**交易计划：**\n- 技术面：强弱线 62.50，风险线 61.00，压力区 65.50-66.86。\n- 消息面：权益分派/转债价格调整偏中性，不足以支撑隔夜抢筹。\n- 赔率：若次日高端装备继续强，有修复机会；但尾盘弱说明先手资金不够坚决。\n- 仓位：观察，不建议新开隔夜核心仓。\n- 次日操作：次日冲高预估约 0.5%-3%；高开冲 64.50-65.50 无量先减；跌破 61 放弃。\n\n---",
            "summary_short": "结论观察；催化公告：2025 年年度权益分派实施、调整“应流转债”转股价格、可转债转股结果；尾盘14:30 后 62.98→62.58，方向 -0.64%，尾盘成交约 1.34 亿",
            "stance": "观察",
            "catalyst": "公告：2025 年年度权益分派实施、调整“应流转债”转股价格、可转债转股结果",
            "risk": "成交额 16.33 亿，换手 3.78%，PE TTM 88.41",
            "action_hint": "观察，不建议新开隔夜核心仓。",
            "status": "ok"
          }
        },
        {
          "rank": 19,
          "strategy_group": "theme_rotation_watch",
          "strategy_group_cn": "题材轮动观察",
          "symbol": "001268",
          "name": "联合精密",
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
          "score": 23.352737,
          "source_score": 23.352737,
          "normalized_score": 23.353,
          "unified_score": 23.353,
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
            "theme": "机械基础件",
            "theme_stats": {
              "theme": "机械基础件",
              "count": 7,
              "active_count": 7,
              "strong_count": 4,
              "positive_count": 4,
              "avg_change_pct": 1.164286,
              "avg_volume_ratio": 0.97,
              "total_amount": 397370.49
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
              "theme": "机械基础件",
              "change_pct": 2.11,
              "volume_ratio": 1.41,
              "turnover_rate": 6.29,
              "amount": 17460.48,
              "attack_wave_pct": 1.31,
              "open_grab_pct": -1.17,
              "pullback_from_high_pct": 6.7
            },
            "risk_penalties": [
              "公告状态未完全确认",
              "冲高回落偏大"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
            "next_day_success_threshold": 3.0
          },
          "theme_rotation_watch_result": {
            "next_day_change_pct": 2.55,
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
            "intraday_price": 29.38,
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
            "change_pct": 2.55,
            "open_change_pct": 2.23,
            "turnover_rate": 1.19,
            "volume_ratio": 11.68,
            "amount": 3282.14,
            "last_price": 29.38,
            "theme": "机械基础件",
            "industry": "机械设备-通用设备"
          },
          "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
              "theme_rotation_watch"
            ],
            "group_labels": [
              "题材轮动观察"
            ],
            "original_text": "# 联合精密（001268）— 可干（试错轻仓）\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 昨日涨停/昨日首板标签带来短线记忆，定增预案和小盘弹性增强波动 | 概念：定增预案、昨日涨停、昨日首板、最近情绪、小盘非融 |\n| 尾盘 | 尾盘主动性很强，是本组尾盘上推动能前列 | 14:30 后 39.86→40.43，方向 +1.43%，尾盘成交约 1709 万 |\n| 板块 | 明显强于通用设备行业 | 个股 +2.61%，通用设备行业 -2.20%，相对强弱 +4.81pct |\n| 类型 | 小市值高弹性票，成交额偏小，容易被情绪资金放大 | 成交额 1.81 亿，换手 6.53%，PE TTM 为负 |\n| 日线 | 近 30 日 -6.80%，7月3日涨停后继续修复，但仍未形成稳定主升 | 当日高 42.87，收 40.43，涨停价 43.34 |\n| 上涨概率 | 中等偏高但波动大，估计 53%-58% | 尾盘强 + 昨日涨停记忆；但成交额小、基本面质量弱 |\n\n**一句话判断：** 联合精密是短线弹性最强的试错票，优点是尾盘主动拿货，缺点是容量和稳定性不够，只能小仓位博弈。\n\n**交易计划：**\n- 技术面：强弱线 40.00，风险线 39.20，压力区 42.00-43.34；次日若竞价站上 40.50 且开盘不破 40，说明承接仍在。\n- 消息面：主要靠昨日涨停记忆和情绪资金，不是强基本面催化。\n- 赔率：弹性好，冲高空间可观；但若低开破 39.20，说明情绪退潮。\n- 仓位：试错轻仓，单票不超过组合 15%-20%。\n- 次日操作：次日冲高预估约 2%-6%；高开冲 42 附近先减，若接近 43.34 不能封板坚决落袋；平开守 40 可看 41.50；低开跌破 39.20 放弃。\n\n---",
            "summary_short": "结论可干（试错轻仓）；催化概念：定增预案、昨日涨停、昨日首板、最近情绪、小盘非融；尾盘14:30 后 39.86→40.43，方向 +1.43%，尾盘成交约 1709 万",
            "stance": "可干（试错轻仓）",
            "catalyst": "概念：定增预案、昨日涨停、昨日首板、最近情绪、小盘非融",
            "risk": "成交额 1.81 亿，换手 6.53%，PE TTM 为负",
            "action_hint": "试错轻仓，单票不超过组合 15%-20%。",
            "status": "ok"
          }
        },
        {
          "rank": 20,
          "strategy_group": "theme_rotation_watch",
          "strategy_group_cn": "题材轮动观察",
          "symbol": "600188",
          "name": "兖矿能源",
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
          "score": 20.515981,
          "source_score": 20.515981,
          "normalized_score": 20.516,
          "unified_score": 20.516,
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
            "theme": "动力煤",
            "theme_stats": {
              "theme": "动力煤",
              "count": 2,
              "active_count": 2,
              "strong_count": 2,
              "positive_count": 2,
              "avg_change_pct": 4.525,
              "avg_volume_ratio": 1.55,
              "total_amount": 251967.06
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
              "theme": "动力煤",
              "change_pct": 5.45,
              "volume_ratio": 1.84,
              "turnover_rate": 1.88,
              "amount": 206052.44,
              "attack_wave_pct": 7.56,
              "open_grab_pct": 0.0,
              "pullback_from_high_pct": 1.57
            },
            "risk_penalties": [
              "公告状态未完全确认",
              "个股涨幅偏高，追高风险"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
            "next_day_success_threshold": 3.0
          },
          "theme_rotation_watch_result": {
            "next_day_change_pct": -0.53,
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
            "intraday_price": 18.7,
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
          "theme": "动力煤",
          "theme_display": "动力煤",
          "industry": "煤炭-煤炭开采",
          "latest_snapshot": {
            "change_pct": -0.53,
            "open_change_pct": -0.69,
            "turnover_rate": 0.16,
            "volume_ratio": 4.17,
            "amount": 17354.88,
            "last_price": 18.7,
            "theme": "动力煤",
            "industry": "煤炭-煤炭开采"
          },
          "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "动力煤",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "600188",
            "name": "兖矿能源",
            "groups": [
              "theme_rotation_watch"
            ],
            "group_labels": [
              "题材轮动观察"
            ],
            "original_text": "# 兖矿能源（600188）— 等 / 防守备选\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 煤炭行业走强、回购进展、高分红/周期属性，偏防守与行业轮动 | 公告：股份回购进展；新闻涉及煤炭行业资金流入、回购、分拆物泊科技进展 |\n| 尾盘 | 尾盘基本横盘，未见继续抢筹 | 14:30 后 18.81→18.80，方向 -0.05%，尾盘成交约 3.63 亿 |\n| 板块 | 行业也强，个股略强于行业 | 个股 +5.62%，煤炭开采行业 +4.05%，相对强弱 +1.57pct |\n| 类型 | 大市值高分红周期股，流动性好，波动小于小票 | 成交额 21.28 亿，换手 1.94%，PE TTM 11.93 |\n| 日线 | 近 30 日 -9.48%，属于低位反弹，今日长阳修复 | 当日高 19.05，收 18.80，涨停价 19.58 |\n| 上涨概率 | 中等，估计 51%-56% | 行业轮动强，但短线弹性不如 AI/装备票 |\n\n**一句话判断：** 兖矿能源适合作为隔夜组合的防守备选，不适合作为最强进攻仓；若次日煤炭继续强，它有低波动冲高机会。\n\n**交易计划：**\n- 技术面：强弱线 18.70，风险线 18.30，压力区 19.05-19.58；次日若煤炭行业继续高开，站稳 18.80 才考虑。\n- 消息面：回购进展和高分红属性偏中线支撑，不是强短线爆发催化。\n- 赔率：胜在稳，输在弹性一般；更适合市场分化时防守。\n- 仓位：等待；若作为组合防守仓，轻仓 15%-20%。\n- 次日操作：次日冲高预估约 1.5%-4%；冲 19.05 上方若量能不足先减；平开守 18.70 可观察；跌破 18.30 放弃。\n\n---",
            "summary_short": "结论等 / 防守备选；催化公告：股份回购进展；新闻涉及煤炭行业资金流入、回购、分拆物泊科技进展；尾盘14:30 后 18.81→18.80，方向 -0.05%，尾盘成交约 3.63 亿",
            "stance": "等 / 防守备选",
            "catalyst": "公告：股份回购进展；新闻涉及煤炭行业资金流入、回购、分拆物泊科技进展",
            "risk": "成交额 21.28 亿，换手 1.94%，PE TTM 11.93",
            "action_hint": "等待；若作为组合防守仓，轻仓 15%-20%。",
            "status": "ok"
          }
        },
        {
          "rank": 21,
          "strategy_group": "close_strength_hold_watch",
          "strategy_group_cn": "收盘中强承接观察",
          "symbol": "601001",
          "name": "晋控煤业",
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
          "score": 15.383744,
          "source_score": 15.383744,
          "normalized_score": 15.384,
          "unified_score": 15.384,
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
              "change_pct": 3.6,
              "high_pct": 4.22,
              "fade_from_high_pct": -0.59,
              "volume_ratio": 1.26,
              "turnover_rate": 1.52,
              "amount": 45914.62,
              "attack_wave_pct": 5.87,
              "open_grab_pct": 0.0,
              "change_20d_pct": -16.36,
              "year_limit_up_days": 3.0
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察次日是否延续中强承接",
            "next_day_success_threshold": 3.0
          },
          "close_strength_hold_watch_result": {
            "next_day_change_pct": -0.38,
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
            "intraday_price": 18.38,
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
          "theme": "动力煤",
          "theme_display": "动力煤",
          "industry": "煤炭-煤炭开采",
          "latest_snapshot": {
            "change_pct": -0.38,
            "open_change_pct": 0.27,
            "turnover_rate": 0.17,
            "volume_ratio": 4.76,
            "amount": 5297.86,
            "last_price": 18.38,
            "theme": "动力煤",
            "industry": "煤炭-煤炭开采"
          },
          "display_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "动力煤",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 22,
          "strategy_group": "close_strength_hold_watch",
          "strategy_group_cn": "收盘中强承接观察",
          "symbol": "603345",
          "name": "安井食品",
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
          "score": 15.077163,
          "source_score": 15.077163,
          "normalized_score": 15.077,
          "unified_score": 15.077,
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
              "change_pct": 3.18,
              "high_pct": 4.06,
              "fade_from_high_pct": -0.85,
              "volume_ratio": 1.14,
              "turnover_rate": 2.15,
              "amount": 52221.16,
              "attack_wave_pct": 4.39,
              "open_grab_pct": -0.01,
              "change_20d_pct": -1.71,
              "year_limit_up_days": 1.0
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察次日是否延续中强承接",
            "next_day_success_threshold": 3.0
          },
          "close_strength_hold_watch_result": {
            "next_day_change_pct": -1.33,
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
            "intraday_price": 83.07,
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
          "theme": "预加工食品",
          "theme_display": "预加工食品",
          "industry": "食品饮料-食品加工",
          "latest_snapshot": {
            "change_pct": -1.33,
            "open_change_pct": -0.59,
            "turnover_rate": 0.2,
            "volume_ratio": 3.32,
            "amount": 4790.86,
            "last_price": 83.07,
            "theme": "预加工食品",
            "industry": "食品饮料-食品加工"
          },
          "display_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "预加工食品",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 23,
          "strategy_group": "close_strength_hold_watch",
          "strategy_group_cn": "收盘中强承接观察",
          "symbol": "000404",
          "name": "长虹华意",
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
          "score": 15.021617,
          "source_score": 15.021617,
          "normalized_score": 15.022,
          "unified_score": 15.022,
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
              "change_pct": 3.69,
              "high_pct": 3.94,
              "fade_from_high_pct": -0.24,
              "volume_ratio": 0.81,
              "turnover_rate": 4.06,
              "amount": 23205.61,
              "attack_wave_pct": 6.17,
              "open_grab_pct": 0.12,
              "change_20d_pct": 6.84,
              "year_limit_up_days": 1.0
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察次日是否延续中强承接",
            "next_day_success_threshold": 3.0
          },
          "close_strength_hold_watch_result": {
            "next_day_change_pct": -0.83,
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
            "intraday_price": 8.39,
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
          "theme": "家电零部件",
          "theme_display": "家电零部件",
          "industry": "家电-家电零部件",
          "latest_snapshot": {
            "change_pct": -0.83,
            "open_change_pct": -0.35,
            "turnover_rate": 0.44,
            "volume_ratio": 3.15,
            "amount": 2579.9,
            "last_price": 8.39,
            "theme": "家电零部件",
            "industry": "家电-家电零部件"
          },
          "display_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T09:37:49+08:00",
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
          "mainline_theme_display": "家电零部件",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        }
      ],
      "display_source": "four_layer_tracking",
      "raw_record_count": 23,
      "raw_strategy_counts": {
        "formal_top3": 2,
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
            "count": 2,
            "formal_return_eligible_count": 2,
            "side_channel_return_eligible_count": 0,
            "avg_intraday_return": null,
            "avg_t1_return": null,
            "status_counts": {
              "cancelled": 1,
              "price_missing": 0,
              "tracked": 0,
              "verified": 1
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
              "false_positive": 2,
              "price_missing": 0,
              "tracked": 0,
              "verified": 1
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
        "record_count": 23,
        "latest_snapshot_match_count": 23,
        "report_match_count": 2,
        "not_found_count": 0,
        "return_policy": "正式收益只统计 Top3；题材观察、技术观察、候选评分前排、低位回流观察、早盘驱动观察、隔夜涨停观察、题材轮动观察和收盘中强承接观察只跟踪面板展示样本，旁路收益也只按这些样本统计。",
        "notice_supplement_completed": true,
        "notice_supplement_required_count": 7,
        "notice_supplement_incomplete_count": 0
      },
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.morning.json",
        "relative_path": "runs/2026-07-07/four-layer-tracking.morning.json",
        "exists": true,
        "size": 134420,
        "modified_at": "2026-07-07T09:37:49+08:00",
        "sha256": "14f96bb9379ae25f1ad6ac05e49d3f622fec708a1f9b421a043008a9c4eb1b38"
      }
    },
    "noon": {
      "status": "ok",
      "period": "noon",
      "records": [
        {
          "rank": 1,
          "strategy_group": "formal_top3",
          "strategy_group_cn": "正式 Top3 逻辑",
          "symbol": "603317",
          "name": "天味食品",
          "source_period": "noon",
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
          "current_observation_tier": "b_watch",
          "current_candidate_channel": "technical_fund_flow",
          "current_buy_allowed": false,
          "current_action": "downgrade",
          "current_status_cn": "降级观察",
          "current_blocked_reason": "技术面降级；未达到正式 Top3 准入；不进入正式交接",
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
            "intraday_price": 14.19,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "调味品",
          "theme_display": "调味品",
          "industry": "食品饮料-调味品",
          "latest_snapshot": {
            "change_pct": -0.42,
            "open_change_pct": -0.63,
            "turnover_rate": 0.7,
            "volume_ratio": 0.9,
            "amount": 10553.09,
            "last_price": 14.19,
            "theme": "调味品",
            "industry": "食品饮料-调味品"
          },
          "display_reason": "公告、技术、评分和执行边界通过，进入正式 Top3 样本",
          "return_status": "待次日回填",
          "return_scope": "pending",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "调味品",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "603317",
            "name": "天味食品",
            "groups": [
              "formal_top3"
            ],
            "group_labels": [
              "正式 Top3"
            ],
            "original_text": "# 天味食品（603317）— 放弃\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 回购计划、高分红、防守消费属性，但无新增短线催化 | 概念：回购计划、私募重仓、高分红股、融资融券 |\n| 尾盘 | 尾盘回落，短线资金不积极 | 14:30 后方向 -0.49%，全天成交 2.12 亿 |\n| 板块 | 基本贴近调味品行业，无明显相对强度 | 个股 +1.35%，调味品行业 +1.14%，相对强弱 +0.21pct |\n| 类型 | 食品消费防守票，弹性不足 | 换手 1.39%，近 30 日 -7.24% |\n| 日线 | 低位修复，但无强趋势 | 当日收 12.75，涨停价 13.83 |\n| 上涨概率 | 偏低，估计 38%-43% | 防守有余，进攻不足 |\n\n**一句话判断：** 天味食品适合做消费防守观察，不适合“新开隔夜仓”这种要求短线溢价的场景。\n\n**交易计划：**\n- 技术面：强弱线 12.70，风险线 12.45，压力区 13.00-13.40。\n- 消息面：回购/高分红偏中长期支撑，无法替代短线催化。\n- 赔率：次日冲高弹性有限，资金更可能去科技/资源线。\n- 仓位：放弃新开。\n- 次日操作：若冲 13.00 无量，仍按弱修复处理；跌破 12.45 放弃。\n\n---\n\n## 最终执行建议\n\n- **优先可干：** 002353 杰瑞股份、603496 恒为科技、001268 联合精密。三者都只能轻仓，核心逻辑分别是“强辨识度高端装备 / AI算力修复 / 尾盘小票情绪”。\n- **备选等待：** 600188 兖矿能源适合防守仓，000048 京基智农只等竞价超预期，不主动追高。\n- **观察不买：** 000060 中金岭南、603308 应流股份、002588 史丹利。\n- **放弃：** 002850 科达利、002150 正泰电源、603317 天味食品。\n\n## 次日统一纪律\n\n1. 只做竞价和开盘承接确认后的隔夜/超短，不做无条件追高。\n2. 若大盘或核心板块开盘转弱，Top 3 候选全部降为观察。\n3. 若个股高开 3%-5% 但 5 分钟内不能继续放量上攻，优先兑现而不是加仓。\n4. 若跌破各自风险线，隔夜逻辑失效；不得用“中线看好”替代短线止损。\n5. 本报告为模拟/研究用途，不代表实盘成交、真实持仓或账户收益。",
            "summary_short": "结论放弃；催化概念：回购计划、私募重仓、高分红股、融资融券；尾盘14:30 后方向 -0.49%，全天成交 2.12 亿",
            "stance": "放弃",
            "catalyst": "概念：回购计划、私募重仓、高分红股、融资融券",
            "risk": "换手 1.39%，近 30 日 -7.24%",
            "action_hint": "放弃新开。",
            "status": "ok"
          }
        },
        {
          "rank": 2,
          "strategy_group": "formal_top3",
          "strategy_group_cn": "正式 Top3 逻辑",
          "symbol": "002588",
          "name": "史丹利",
          "source_period": "noon",
          "tracking_scope": "all_layer_records",
          "return_tracking_scope": "formal_return",
          "entry_reason": "公告、技术、评分和执行边界通过，进入正式 Top3 样本",
          "blocked_reason": "",
          "tracking_status": "tracked",
          "formal_return_eligible": true,
          "side_channel_return_eligible": false,
          "side_channel_return_scope": "formal_return_only",
          "display_tracking_eligible": true,
          "source_close_date": "",
          "observation_tier": "buy_top3",
          "candidate_channel": "technical_fund_flow",
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
          "score": 0.622,
          "source_score": 0.622,
          "normalized_score": 62.2,
          "unified_score": 62.2,
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
            "intraday_price": 8.28,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "复合肥",
          "theme_display": "复合肥",
          "industry": "化工-农用化工",
          "latest_snapshot": {
            "change_pct": -3.61,
            "open_change_pct": -1.51,
            "turnover_rate": 0.99,
            "volume_ratio": 1.07,
            "amount": 7112.89,
            "last_price": 8.28,
            "theme": "复合肥",
            "industry": "化工-农用化工"
          },
          "display_reason": "公告、技术、评分和执行边界通过，进入正式 Top3 样本",
          "return_status": "待次日回填",
          "return_scope": "pending",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "复合肥",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "002588",
            "name": "史丹利",
            "groups": [
              "formal_top3"
            ],
            "group_labels": [
              "正式 Top3"
            ],
            "original_text": "# 史丹利（002588）— 观察\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 化肥、磷概念、乡村振兴，偏农业防守与资源属性 | 概念：磷概念、化肥概念、乡村振兴、低市盈率、锂电池 |\n| 尾盘 | 尾盘几乎横盘，攻击性不足 | 14:30 后方向 +0.12%，全天成交 1.82 亿 |\n| 板块 | 强于农用化工行业，但绝对涨幅一般 | 个股 +2.75%，农用化工行业 +0.34%，相对强弱 +2.41pct |\n| 类型 | 低估值农业化工票，防守多于进攻 | 换手 2.47%，近 30 日 -7.64% |\n| 日线 | 仍处低位修复，尚未形成短线强趋势 | 当日收 7.85，涨停价 8.40 |\n| 上涨概率 | 中等偏低，估计 45%-50% | 防守属性可看，但隔夜弹性不足 |\n\n**一句话判断：** 史丹利不是坏票，但缺少强催化和尾盘抢筹，作为新开隔夜仓不够锋利。\n\n**交易计划：**\n- 技术面：强弱线 7.80，风险线 7.65，压力区 8.00-8.40。\n- 消息面：无新增新闻公告，主要依靠化肥/磷概念防守逻辑。\n- 赔率：下行风险相对可控，但次日冲高弹性也有限。\n- 仓位：观察，不进核心隔夜组合。\n- 次日操作：次日冲高预估约 0.5%-2.5%；若不能突破 8.00，继续当弱修复看待；跌破 7.65 放弃。\n\n---",
            "summary_short": "结论观察；催化概念：磷概念、化肥概念、乡村振兴、低市盈率、锂电池；尾盘14:30 后方向 +0.12%，全天成交 1.82 亿",
            "stance": "观察",
            "catalyst": "概念：磷概念、化肥概念、乡村振兴、低市盈率、锂电池",
            "risk": "换手 2.47%，近 30 日 -7.64%",
            "action_hint": "观察，不进核心隔夜组合。",
            "status": "ok"
          }
        },
        {
          "rank": 3,
          "strategy_group": "a_theme_watch",
          "strategy_group_cn": "A类主线/题材逻辑",
          "symbol": "000899",
          "name": "赣能股份",
          "source_period": "noon",
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
            "intraday_price": 9.87,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "火力发电",
          "theme_display": "火力发电",
          "industry": "公用事业-电力",
          "latest_snapshot": {
            "change_pct": -2.28,
            "open_change_pct": -0.59,
            "turnover_rate": 0.73,
            "volume_ratio": 1.01,
            "amount": 7008.87,
            "last_price": 9.87,
            "theme": "火力发电",
            "industry": "公用事业-电力"
          },
          "display_reason": "消息/题材驱动候选，需技术面继续确认",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "火力发电",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 4,
          "strategy_group": "a_theme_watch",
          "strategy_group_cn": "A类主线/题材逻辑",
          "symbol": "600854",
          "name": "春兰股份",
          "source_period": "noon",
          "tracking_scope": "all_layer_records",
          "return_tracking_scope": "side_channel_or_status_only",
          "entry_reason": "消息/题材驱动候选，需技术面继续确认；不打板短线模型禁止追买，只允许回踩/承接确认后观察",
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
          "score": 0.622,
          "source_score": 0.622,
          "normalized_score": 62.2,
          "unified_score": 62.2,
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
            "intraday_price": 4.2,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "空调",
          "theme_display": "空调",
          "industry": "家电-白色家电",
          "latest_snapshot": {
            "change_pct": -3.23,
            "open_change_pct": -0.69,
            "turnover_rate": 1.2,
            "volume_ratio": 0.97,
            "amount": 2646.72,
            "last_price": 4.2,
            "theme": "空调",
            "industry": "家电-白色家电"
          },
          "display_reason": "消息/题材驱动候选，需技术面继续确认；不打板短线模型禁止追买，只允许回踩/承接确认后观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "空调",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 5,
          "strategy_group": "a_theme_watch",
          "strategy_group_cn": "A类主线/题材逻辑",
          "symbol": "002818",
          "name": "富森美",
          "source_period": "noon",
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
            "intraday_price": 10.42,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "商业物业经营",
          "theme_display": "商业物业经营",
          "industry": "商贸-商业物业经营",
          "latest_snapshot": {
            "change_pct": -2.62,
            "open_change_pct": -0.09,
            "turnover_rate": 0.61,
            "volume_ratio": 1.22,
            "amount": 1922.21,
            "last_price": 10.42,
            "theme": "商业物业经营",
            "industry": "商贸-商业物业经营"
          },
          "display_reason": "消息/题材驱动候选，需技术面继续确认；不打板短线模型禁止追买，只允许回踩/承接确认后观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "商业物业经营",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 6,
          "strategy_group": "score_front_rejected",
          "strategy_group_cn": "候选评分前排逻辑",
          "symbol": "000899",
          "name": "赣能股份",
          "source_period": "noon",
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
            "intraday_price": 9.87,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "火力发电",
          "theme_display": "火力发电",
          "industry": "公用事业-电力",
          "latest_snapshot": {
            "change_pct": -2.28,
            "open_change_pct": -0.59,
            "turnover_rate": 0.73,
            "volume_ratio": 1.01,
            "amount": 7008.87,
            "last_price": 9.87,
            "theme": "火力发电",
            "industry": "公用事业-电力"
          },
          "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "火力发电",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 7,
          "strategy_group": "score_front_rejected",
          "strategy_group_cn": "候选评分前排逻辑",
          "symbol": "000537",
          "name": "绿发电力",
          "source_period": "noon",
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
            "intraday_price": 7.2,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "风力发电",
          "theme_display": "风力发电",
          "industry": "公用事业-电力",
          "latest_snapshot": {
            "change_pct": -4.64,
            "open_change_pct": -0.13,
            "turnover_rate": 0.98,
            "volume_ratio": 1.72,
            "amount": 14741.75,
            "last_price": 7.2,
            "theme": "风力发电",
            "industry": "公用事业-电力"
          },
          "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "风力发电",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 8,
          "strategy_group": "score_front_rejected",
          "strategy_group_cn": "候选评分前排逻辑",
          "symbol": "002192",
          "name": "融捷股份",
          "source_period": "noon",
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
          "score": 0.622,
          "source_score": 0.622,
          "normalized_score": 62.2,
          "unified_score": 62.2,
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
            "intraday_price": 99.0,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
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
            "change_pct": 4.87,
            "open_change_pct": 3.78,
            "turnover_rate": 9.73,
            "volume_ratio": 1.73,
            "amount": 249698.25,
            "last_price": 99.0,
            "theme": "锂",
            "industry": "有色-能源金属"
          },
          "display_reason": "候选综合评分靠前，但后续准入条件未全部通过",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "锂",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 9,
          "strategy_group": "low_reflow_watch",
          "strategy_group_cn": "低位回流观察",
          "symbol": "000048",
          "name": "京基智农",
          "source_period": "noon",
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
          "score": 21.363912,
          "source_score": 21.363912,
          "normalized_score": 21.364,
          "unified_score": 21.364,
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
              "change_pct": 2.92,
              "volume_ratio": 1.37,
              "turnover_rate": 5.83,
              "amount": 65004.9,
              "open_grab_pct": 0.61,
              "attack_wave_pct": 7.53
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "low_reflow_watch_result": {
            "next_day_change_pct": 2.73,
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
            "intraday_price": 22.24,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
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
            "change_pct": 2.73,
            "open_change_pct": -1.29,
            "turnover_rate": 2.95,
            "volume_ratio": 1.26,
            "amount": 34568.9,
            "last_price": 22.24,
            "theme": "生猪养殖",
            "industry": "农林牧渔-养殖业"
          },
          "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "生猪养殖",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 10,
          "strategy_group": "low_reflow_watch",
          "strategy_group_cn": "低位回流观察",
          "symbol": "002192",
          "name": "融捷股份",
          "source_period": "noon",
          "tracking_scope": "side_channel_only",
          "return_tracking_scope": "side_channel_only",
          "entry_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
          "blocked_reason": "只读旁路观察，不进入正式 Top3、handoff、execution 或交易计划",
          "tracking_status": "verified",
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
            "eligible_for_handoff": false
          },
          "score": 20.087383,
          "source_score": 20.087383,
          "normalized_score": 20.087,
          "unified_score": 20.087,
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
              "change_pct": 2.85,
              "volume_ratio": 1.05,
              "turnover_rate": 11.32,
              "amount": 278393.06,
              "open_grab_pct": 0.0,
              "attack_wave_pct": 7.29
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "low_reflow_watch_result": {
            "next_day_change_pct": 4.87,
            "success": true,
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
            "intraday_price": 99.0,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
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
            "change_pct": 4.87,
            "open_change_pct": 3.78,
            "turnover_rate": 9.73,
            "volume_ratio": 1.73,
            "amount": 249698.25,
            "last_price": 99.0,
            "theme": "锂",
            "industry": "有色-能源金属"
          },
          "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "overnight_report": {}
        },
        {
          "rank": 11,
          "strategy_group": "low_reflow_watch",
          "strategy_group_cn": "低位回流观察",
          "symbol": "002290",
          "name": "禾盛新材",
          "source_period": "noon",
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
          "score": 19.670865,
          "source_score": 19.670865,
          "normalized_score": 19.671,
          "unified_score": 19.671,
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
              "change_pct": 2.84,
              "volume_ratio": 1.16,
              "turnover_rate": 4.51,
              "amount": 97226.01,
              "open_grab_pct": 1.12,
              "attack_wave_pct": 7.85
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "low_reflow_watch_result": {
            "next_day_change_pct": -2.21,
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
            "intraday_price": 86.31,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "家电零部件",
          "theme_display": "家电零部件",
          "industry": "家电-家电零部件",
          "latest_snapshot": {
            "change_pct": -2.21,
            "open_change_pct": -0.29,
            "turnover_rate": 1.78,
            "volume_ratio": 0.84,
            "amount": 38456.22,
            "last_price": 86.31,
            "theme": "家电零部件",
            "industry": "家电-家电零部件"
          },
          "display_reason": "低位回流二次确认观察 v1：调整后出现温和放量、未明显追高，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "家电零部件",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 12,
          "strategy_group": "open_drive_watch",
          "strategy_group_cn": "早盘驱动观察",
          "symbol": "000060",
          "name": "中金岭南",
          "source_period": "noon",
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
          "score": 11.0191,
          "source_score": 11.0191,
          "normalized_score": 11.019,
          "unified_score": 11.019,
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
              "change_pct": 1.66,
              "open_drive_pct": 0.54,
              "volume_ratio": 1.91,
              "turnover_rate": 8.87,
              "amount": 302768.91,
              "attack_wave_pct": 0.55,
              "pullback_from_high_pct": 8.3
            },
            "risk_penalties": [
              "早盘冲高后回落偏大"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "open_drive_watch_result": {
            "next_day_change_pct": -5.83,
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
            "intraday_price": 6.95,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
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
            "change_pct": -5.83,
            "open_change_pct": -2.98,
            "turnover_rate": 4.05,
            "volume_ratio": 1.48,
            "amount": 127066.33,
            "last_price": 6.95,
            "theme": "铅锌",
            "industry": "有色-工业金属"
          },
          "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "铅锌",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "000060",
            "name": "中金岭南",
            "groups": [
              "open_drive_watch"
            ],
            "group_labels": [
              "早盘驱动观察"
            ],
            "original_text": "# 中金岭南（000060）— 观察\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 2026 半年度业绩预告、有色金属资源属性；但公司澄清未涉及高端 PCB 微钻孔板相关业务，题材误读需降温 | 公告：2026 半年度业绩预告、可转债相关公告；新闻：公司称未涉及高端 PCB 微钻孔板相关业务 |\n| 尾盘 | 尾盘小幅回落，不是隔夜资金主动抢筹 | 14:30 后方向 -0.27%，全天成交 30.81 亿 |\n| 板块 | 个股强于工业金属行业，资金有相对认可 | 个股 +1.94%，工业金属行业 -0.76%，相对强弱 +2.70pct |\n| 类型 | 有色资源中盘高成交票，换手高 | 成交额 30.81 亿，换手 9.04% |\n| 日线 | 近 30 日 -4.29%，当前仍偏修复 | 当日收 11.04，涨停价 11.92 |\n| 上涨概率 | 中等，估计 48%-53% | 业绩/资源属性加分；尾盘走弱和 PCB误读降权 |\n\n**一句话判断：** 中金岭南适合观察有色资源和业绩预告兑现，不适合按 PCB/AI概念强行隔夜追。\n\n**交易计划：**\n- 技术面：强弱线 10.95，风险线 10.70，压力区 11.30-11.92。\n- 消息面：业绩预告偏正面，但“未涉及高端 PCB 微钻孔板”削弱短线概念弹性。\n- 赔率：成交充足但尾盘没有主动抢筹，隔夜性价比一般。\n- 仓位：观察，不进首选组合。\n- 次日操作：次日冲高预估约 1%-3.5%；若高开但不能站上 11.30，优先兑现；跌破 10.70 放弃。\n\n---",
            "summary_short": "结论观察；催化公告：2026 半年度业绩预告、可转债相关公告；新闻：公司称未涉及高端 PCB 微钻孔板相关业务；尾盘14:30 后方向 -0.27%，全天成交 30.81 亿",
            "stance": "观察",
            "catalyst": "公告：2026 半年度业绩预告、可转债相关公告；新闻：公司称未涉及高端 PCB 微钻孔板相关业务",
            "risk": "成交额 30.81 亿，换手 9.04%",
            "action_hint": "观察，不进首选组合。",
            "status": "ok"
          }
        },
        {
          "rank": 13,
          "strategy_group": "open_drive_watch",
          "strategy_group_cn": "早盘驱动观察",
          "symbol": "002150",
          "name": "正泰电源",
          "source_period": "noon",
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
          "score": 9.065063,
          "source_score": 9.065063,
          "normalized_score": 9.065,
          "unified_score": 9.065,
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
              "change_pct": -0.78,
              "open_drive_pct": 0.85,
              "volume_ratio": 0.99,
              "turnover_rate": 4.52,
              "amount": 44081.4,
              "attack_wave_pct": 1.6,
              "pullback_from_high_pct": 5.8
            },
            "risk_penalties": [
              "公告状态未完全确认",
              "量能偏弱",
              "早盘冲高后回落偏大"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "open_drive_watch_result": {
            "next_day_change_pct": -2.68,
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
            "intraday_price": 26.13,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "金属制品",
          "theme_display": "金属制品",
          "industry": "机械设备-通用设备",
          "latest_snapshot": {
            "change_pct": -2.68,
            "open_change_pct": -1.27,
            "turnover_rate": 1.74,
            "volume_ratio": 0.7,
            "amount": 16483.87,
            "last_price": 26.13,
            "theme": "金属制品",
            "industry": "机械设备-通用设备"
          },
          "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "金属制品",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "002150",
            "name": "正泰电源",
            "groups": [
              "open_drive_watch"
            ],
            "group_labels": [
              "早盘驱动观察"
            ],
            "original_text": "# 正泰电源（002150）— 放弃\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 储能、光伏、风电、充电桩等新能源电力设备标签，但近期趋势弱；新闻主要涉及子公司股权转让 | 新闻：子公司股权转让/优先购买权相关；概念：储能、光伏、风电、充电桩、海外业务 |\n| 尾盘 | 尾盘继续偏弱 | 14:30 后方向 -0.19%，全天成交 4.54 亿 |\n| 板块 | 略强于电网设备行业，但个股本身收跌 | 个股 -0.67%，电网设备行业 -1.28%，相对强弱 +0.61pct |\n| 类型 | 新能源电力设备修复票，当前趋势仍弱 | 换手 4.66%，近 30 日 -19.93% |\n| 日线 | 近 30 日下跌明显，尚未扭转趋势 | 当日收 18.95，涨停价 21.14 |\n| 上涨概率 | 偏低，估计 40%-45% | 弱趋势 + 尾盘弱，不符合隔夜新开标准 |\n\n**一句话判断：** 正泰电源仍处弱趋势修复，公告/新闻也不是强进攻催化，新开隔夜应回避。\n\n**交易计划：**\n- 技术面：强弱线 19.10，风险线 18.60，压力区 19.70-20.40。\n- 消息面：股权转让事项偏公司治理/资产安排，不是短线强催化。\n- 赔率：除非新能源电力设备整体大幅修复，否则缺乏隔夜弹性。\n- 仓位：放弃新开。\n- 次日操作：高开不能站上 19.70 不追；跌破 18.60 继续弱势。\n\n---",
            "summary_short": "结论放弃；催化新闻：子公司股权转让/优先购买权相关；概念：储能、光伏、风电、充电桩、海外业务；尾盘14:30 后方向 -0.19%，全天成交 4.54 亿",
            "stance": "放弃",
            "catalyst": "新闻：子公司股权转让/优先购买权相关；概念：储能、光伏、风电、充电桩、海外业务",
            "risk": "换手 4.66%，近 30 日 -19.93%",
            "action_hint": "放弃新开。",
            "status": "ok"
          }
        },
        {
          "rank": 14,
          "strategy_group": "open_drive_watch",
          "strategy_group_cn": "早盘驱动观察",
          "symbol": "002850",
          "name": "科达利",
          "source_period": "noon",
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
          "score": 8.7748,
          "source_score": 8.7748,
          "normalized_score": 8.775,
          "unified_score": 8.775,
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
              "change_pct": -0.73,
              "open_drive_pct": 1.18,
              "volume_ratio": 1.98,
              "turnover_rate": 7.55,
              "amount": 365905.66,
              "attack_wave_pct": 0.0,
              "pullback_from_high_pct": 5.86
            },
            "risk_penalties": [
              "公告状态未完全确认",
              "早盘冲高后回落偏大"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3",
            "next_day_success_threshold": 3.0
          },
          "open_drive_watch_result": {
            "next_day_change_pct": -2.87,
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
            "intraday_price": 217.49,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "锂电池",
          "theme_display": "锂电池",
          "industry": "电力设备-电池",
          "latest_snapshot": {
            "change_pct": -2.87,
            "open_change_pct": -1.0,
            "turnover_rate": 2.89,
            "volume_ratio": 1.14,
            "amount": 134459.17,
            "last_price": 217.49,
            "theme": "锂电池",
            "industry": "电力设备-电池"
          },
          "display_reason": "早盘驱动未完全兑现观察 v1：竞价/早盘资金动作出现，但收盘涨幅未充分兑现，作为旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "锂电池",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "002850",
            "name": "科达利",
            "groups": [
              "open_drive_watch"
            ],
            "group_labels": [
              "早盘驱动观察"
            ],
            "original_text": "# 科达利（002850）— 放弃\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 新能源车、储能、固态电池、百元股、昨日涨停标签，题材强但今日资金兑现 | 概念：新能源车、储能、固态电池、百元股、昨日涨停、昨日首板、近期新高 |\n| 尾盘 | 尾盘明显走弱，是硬伤 | 14:30 后方向 -1.06%，全天成交 37.80 亿 |\n| 板块 | 跌幅小于电池行业，但仍是下跌 | 个股 -0.96%，电池行业 -2.12%，相对强弱 +1.16pct |\n| 类型 | 百元高位新能源结构件票，容量大但兑现压力也大 | 换手 7.81%，近 30 日 +13.25% |\n| 日线 | 高位强趋势遇到日内回落，隔夜赔率下降 | 当日收 165.64，涨停价 184.00 |\n| 上涨概率 | 偏低，估计 42%-47% | 高位 + 尾盘下压，不适合新开隔夜 |\n\n**一句话判断：** 科达利题材和辨识度都不差，但尾盘 -1.06% 已经说明资金在兑现，新开隔夜容易买在分歧延续点。\n\n**交易计划：**\n- 技术面：强弱线 166.00，风险线 161.80，压力区 172.00-176.00。\n- 消息面：无公告风险，但也缺少足够强的新催化覆盖尾盘兑现。\n- 赔率：若次日电池链修复可能反抽，但不是隔夜首选。\n- 仓位：放弃新开；已有仓也应偏减而非加。\n- 次日操作：若高开不能收回 170，优先落袋；跌破 161.80 风险扩大。\n\n---",
            "summary_short": "结论放弃；催化概念：新能源车、储能、固态电池、百元股、昨日涨停、昨日首板、近期新高；尾盘14:30 后方向 -1.06%，全天成交 37.80 亿",
            "stance": "放弃",
            "catalyst": "概念：新能源车、储能、固态电池、百元股、昨日涨停、昨日首板、近期新高",
            "risk": "换手 7.81%，近 30 日 +13.25%",
            "action_hint": "放弃新开；已有仓也应偏减而非加。",
            "status": "ok"
          }
        },
        {
          "rank": 15,
          "strategy_group": "overnight_limit_watch",
          "strategy_group_cn": "隔夜涨停观察",
          "symbol": "002353",
          "name": "杰瑞股份",
          "source_period": "noon",
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
          "score": 48.214339,
          "source_score": 48.214339,
          "normalized_score": 48.214,
          "unified_score": 48.214,
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
              "change_pct": 6.06,
              "high_pct": 9.37,
              "pullback_from_high_pct": 3.31,
              "volume_ratio": 1.37,
              "turnover_rate": 3.29,
              "amount": 390830.75,
              "attack_wave_pct": 5.79,
              "open_grab_pct": -0.04,
              "year_limit_up_days": 8.0,
              "tail_volume_support": true
            },
            "risk_penalties": [],
            "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
            "next_day_success_threshold": 9.0
          },
          "overnight_limit_watch_result": {
            "next_day_change_pct": -1.3,
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
            "intraday_price": 168.88,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "能源及重型设备",
          "theme_display": "能源及重型设备",
          "industry": "机械设备-专用设备",
          "latest_snapshot": {
            "change_pct": -1.3,
            "open_change_pct": 1.06,
            "turnover_rate": 1.3,
            "volume_ratio": 1.08,
            "amount": 152742.45,
            "last_price": 168.88,
            "theme": "能源及重型设备",
            "industry": "机械设备-专用设备"
          },
          "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "能源及重型设备",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "002353",
            "name": "杰瑞股份",
            "groups": [
              "overnight_limit_watch"
            ],
            "group_labels": [
              "隔夜涨停观察"
            ],
            "original_text": "# 杰瑞股份（002353）— 可干（轻仓核心）\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 高端装备、天然气、可燃冰、页岩气、核电核能等题材叠加，7月3日涨停并上龙虎榜，短线辨识度较强 | 新闻：7月3日龙虎榜，买入前五合计约 6.36 亿、卖出前五约 4.5 亿，龙虎榜净买入约 2.93 亿；概念含“昨日涨停、天然气、核电核能、高端装备” |\n| 尾盘 | 尾盘横向承接，不是继续猛拉，但没有明显跳水 | 14:30 后 171.65→171.79，方向 +0.08%，尾盘成交约 3.90 亿 |\n| 板块 | 个股显著强于行业，属于当日强势独立票 | 个股 +6.40%，专用设备行业 -1.50%，相对强弱 +7.90pct |\n| 类型 | 大市值高端装备趋势票，成交额充足，流动性好 | 成交额 40.17 亿，换手 3.38%，PE TTM 74.75 |\n| 日线 | 近 30 日方向 +25.07%，7月3日涨停后继续放量上行，短线强但已有获利盘 | 当日高 176.59，收 171.79，涨停价 177.61 |\n| 上涨概率 | 中高，估计 57%-62% | 强相对收益 + 龙虎榜记忆 + 放量；但尾盘未继续抢筹，需防高位兑现 |\n\n**一句话判断：** 杰瑞股份是本组里“强度、流动性、辨识度”最均衡的隔夜候选，但今天已大涨，次日只能按冲高兑现思路做，不能当中线持仓买。\n\n**交易计划：**\n- 技术面：强弱线看 170.50，风险线看 166.80，压力区 176.60-177.60；若竞价站上 172 且开盘 5-10 分钟不破 170.50，承接合格。\n- 消息面：龙虎榜净买入和昨日涨停记忆是短线加分，高端装备/能源装备逻辑提供题材承接。\n- 赔率：次日有冲高赔率，但越接近涨停价越容易出现兑现盘。\n- 仓位：轻仓核心，单票不超过隔夜组合 25%-30%。\n- 次日操作：次日冲高预估约 2.5%-6%；高开 3%以上先看 176.60-177.60 压力，冲高缩量分批落袋；平开后快速站回 172 可持有看 175；低开跌破 166.80 则说明资金兑现，放弃隔夜逻辑。\n\n---",
            "summary_short": "结论可干（轻仓核心）；催化新闻：7月3日龙虎榜，买入前五合计约 6.36 亿、卖出前五约 4.5 亿，龙虎榜净买入约 2.93 亿；概念含“昨日涨停、天然气、核电核能；尾盘14:30 后 171.65→171.79，方向 +0.08%，尾盘",
            "stance": "可干（轻仓核心）",
            "catalyst": "新闻：7月3日龙虎榜，买入前五合计约 6.36 亿、卖出前五约 4.5 亿，龙虎榜净买入约 2.93 亿；概念含“昨日涨停、天然气、核电核能、高端装备”",
            "risk": "成交额 40.17 亿，换手 3.38%，PE TTM 74.75",
            "action_hint": "轻仓核心，单票不超过隔夜组合 25%-30%。",
            "status": "ok"
          }
        },
        {
          "rank": 16,
          "strategy_group": "overnight_limit_watch",
          "strategy_group_cn": "隔夜涨停观察",
          "symbol": "000048",
          "name": "京基智农",
          "source_period": "noon",
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
          "score": 46.907322,
          "source_score": 46.907322,
          "normalized_score": 46.907,
          "unified_score": 46.907,
          "score_display_scale": "0_100",
          "low_reflow_watch": {},
          "low_reflow_watch_result": {},
          "open_drive_watch": {},
          "open_drive_watch_result": {},
          "overnight_limit_watch": {
            "model": "overnight_limit_watch_v1",
            "rank": 2,
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
              "change_pct": 2.92,
              "high_pct": 4.61,
              "pullback_from_high_pct": 1.69,
              "volume_ratio": 1.37,
              "turnover_rate": 5.83,
              "amount": 65004.9,
              "attack_wave_pct": 7.53,
              "open_grab_pct": 0.61,
              "year_limit_up_days": 12.0,
              "tail_volume_support": true
            },
            "risk_penalties": [
              "20日涨幅过热"
            ],
            "next_day_success_standard": "next_day_change_pct >= 9；辅助观察 next_day_change_pct >= 5",
            "next_day_success_threshold": 9.0
          },
          "overnight_limit_watch_result": {
            "next_day_change_pct": 2.73,
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
            "intraday_price": 22.24,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
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
            "change_pct": 2.73,
            "open_change_pct": -1.29,
            "turnover_rate": 2.95,
            "volume_ratio": 1.26,
            "amount": 34568.9,
            "last_price": 22.24,
            "theme": "生猪养殖",
            "industry": "农林牧渔-养殖业"
          },
          "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "生猪养殖",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "000048",
            "name": "京基智农",
            "groups": [
              "overnight_limit_watch"
            ],
            "group_labels": [
              "隔夜涨停观察"
            ],
            "original_text": "# 京基智农（000048）— 等\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 养殖业、猪肉/鸡肉、AI科技子公司新闻，具备故事性；但担保余额占净资产比例较高需警惕 | 新闻：设立科技子公司；公告：为下属公司提供担保进展，担保余额 22.85 亿元，占最近一期净资产 56.00% |\n| 尾盘 | 尾盘非常强，资金有明显回流 | 14:30 后尾盘方向 +2.49%，尾盘成交约 6723 万 |\n| 板块 | 弱于养殖业行业，说明更像个股资金而非板块核心 | 个股 +2.59%，养殖业行业 +4.31%，相对强弱 -1.72pct |\n| 类型 | 高波动养殖 + 科技转型故事票 | 成交额 6.72 亿，换手 6.03%，近 30 日 +62.37% |\n| 日线 | 近 30 日涨幅过大，短线拥挤 | 当日收 16.22，涨停价 17.80 |\n| 上涨概率 | 中等，估计 50%-55% | 尾盘强加分；但高位和担保公告降低隔夜赔率 |\n\n**一句话判断：** 京基智农尾盘很好，但位置太高、且财务担保公告不适合忽略，除非次日竞价继续超预期，否则不做首选隔夜。\n\n**交易计划：**\n- 技术面：强弱线 16.00，风险线 15.50，压力区 16.70-17.80；高位票必须看竞价是否继续放量。\n- 消息面：科技子公司是题材加分，担保公告是风险折价。\n- 赔率：尾盘资金强，但近 30 日涨幅过大，次日兑现压力大。\n- 仓位：等待，不主动隔夜；若强做只能极轻仓。\n- 次日操作：次日冲高预估约 1.5%-5%；高开 3%以上不快速冲 16.70 先减；平开守 16 可观察；跌破 15.50 放弃。\n\n---",
            "summary_short": "结论等；催化新闻：设立科技子公司；公告：为下属公司提供担保进展，担保余额 22.85 亿元，占最近一期净资产 56.00%；尾盘14:30 后尾盘方向 +2.49%，尾盘成交约 6723 万",
            "stance": "等",
            "catalyst": "新闻：设立科技子公司；公告：为下属公司提供担保进展，担保余额 22.85 亿元，占最近一期净资产 56.00%",
            "risk": "成交额 6.72 亿，换手 6.03%，近 30 日 +62.37%",
            "action_hint": "等待，不主动隔夜；若强做只能极轻仓。",
            "status": "ok"
          }
        },
        {
          "rank": 17,
          "strategy_group": "overnight_limit_watch",
          "strategy_group_cn": "隔夜涨停观察",
          "symbol": "603496",
          "name": "恒为科技",
          "source_period": "noon",
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
          "score": 45.124896,
          "source_score": 45.124896,
          "normalized_score": 45.125,
          "unified_score": 45.125,
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
              "change_pct": 5.32,
              "high_pct": 7.7,
              "pullback_from_high_pct": 2.38,
              "volume_ratio": 2.19,
              "turnover_rate": 7.3,
              "amount": 53996.89,
              "attack_wave_pct": 10.68,
              "open_grab_pct": 0.4,
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
            "next_day_change_pct": -5.88,
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
            "intraday_price": 22.58,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "其他IT设备",
          "theme_display": "其他IT设备",
          "industry": "计算机-IT设备",
          "latest_snapshot": {
            "change_pct": -5.88,
            "open_change_pct": -2.0,
            "turnover_rate": 3.53,
            "volume_ratio": 1.65,
            "amount": 25983.17,
            "last_price": 22.58,
            "theme": "其他IT设备",
            "industry": "计算机-IT设备"
          },
          "display_reason": "隔夜涨停观察 v1：当日出现攻击预演、回落可控、尾盘承接未坏且具备涨停股性，只做旁路观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "其他IT设备",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "603496",
            "name": "恒为科技",
            "groups": [
              "overnight_limit_watch"
            ],
            "group_labels": [
              "隔夜涨停观察"
            ],
            "original_text": "# 恒为科技（603496）— 可干（轻仓）\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | AI/算力/信创/数据中心/华为算力/DeepSeek 标签完整，契合当日科技线交易偏好 | 概念：5G、信息安全、国产软件、云计算、信创、东数西算、数据中心、算力租赁、华为算力、DeepSeek |\n| 尾盘 | 尾盘继续抬升，承接较好 | 14:30 后 23.80→23.98，方向 +0.76%，尾盘成交约 6088 万 |\n| 板块 | 强于 IT设备行业，有个股主动性 | 个股 +5.50%，IT设备行业 +1.45%，相对强弱 +4.05pct |\n| 类型 | 小中市值 AI/IT设备弹性票，换手较高 | 成交额 5.62 亿，换手 7.59%，PE TTM 330.01 |\n| 日线 | 近 30 日仍为 -10.89%，当前是低位修复；好处是位置不算极端拥挤，坏处是趋势仍需确认 | 当日高 24.48，收 23.98，涨停价 25.00 |\n| 上涨概率 | 中高，估计 55%-60% | AI方向 + 尾盘上推；但扣非亏损/高估值标签降低确定性 |\n\n**一句话判断：** 恒为科技更像“AI算力链的低位修复弹性票”，隔夜价值在于板块若继续进攻，次日容易有惯性冲高。\n\n**交易计划：**\n- 技术面：强弱线 23.80，风险线 23.20，压力区 24.48-25.00；若竞价站上 24.00 且 IT设备/AI硬件不弱，可看冲 24.50 以上。\n- 消息面：没有新增新闻公告，主要靠 AI、算力、信创、华为算力标签和板块扩散。\n- 赔率：离涨停价 25.00 还有空间，但 PE 高、扣非亏损标签意味着一旦板块降温会回撤快。\n- 仓位：轻仓，不宜超过组合 20%-25%。\n- 次日操作：次日冲高预估约 2%-5.5%；高开冲 24.50-25.00 不封板先兑现；平开站稳 23.80 可看 24.30；低开跌破 23.20 视为修复失败。\n\n---",
            "summary_short": "结论可干（轻仓）；催化概念：5G、信息安全、国产软件、云计算、信创、东数西算、数据中心、算力租赁、华为算力、DeepSeek；尾盘14:30 后 23.80→23.98，方向 +0.76%，尾盘成交约 6088 万",
            "stance": "可干（轻仓）",
            "catalyst": "概念：5G、信息安全、国产软件、云计算、信创、东数西算、数据中心、算力租赁、华为算力、DeepSeek",
            "risk": "成交额 5.62 亿，换手 7.59%，PE TTM 330.01",
            "action_hint": "轻仓，不宜超过组合 20%-25%。",
            "status": "ok"
          }
        },
        {
          "rank": 18,
          "strategy_group": "theme_rotation_watch",
          "strategy_group_cn": "题材轮动观察",
          "symbol": "603308",
          "name": "应流股份",
          "source_period": "noon",
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
          "score": 25.028696,
          "source_score": 25.028696,
          "normalized_score": 25.029,
          "unified_score": 25.029,
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
            "theme": "机械基础件",
            "theme_stats": {
              "theme": "机械基础件",
              "count": 7,
              "active_count": 7,
              "strong_count": 4,
              "positive_count": 4,
              "avg_change_pct": 1.164286,
              "avg_volume_ratio": 0.97,
              "total_amount": 397370.49
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
              "theme": "机械基础件",
              "change_pct": 3.14,
              "volume_ratio": 1.29,
              "turnover_rate": 3.7,
              "amount": 159563.86,
              "attack_wave_pct": 2.77,
              "open_grab_pct": 0.33,
              "pullback_from_high_pct": 4.63
            },
            "risk_penalties": [
              "冲高回落偏大"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
            "next_day_success_threshold": 3.0
          },
          "theme_rotation_watch_result": {
            "next_day_change_pct": -4.93,
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
            "intraday_price": 59.62,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
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
            "change_pct": -4.93,
            "open_change_pct": 1.26,
            "turnover_rate": 1.96,
            "volume_ratio": 1.24,
            "amount": 81782.46,
            "last_price": 59.62,
            "theme": "机械基础件",
            "industry": "机械设备-通用设备"
          },
          "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
            "symbol": "603308",
            "name": "应流股份",
            "groups": [
              "theme_rotation_watch"
            ],
            "group_labels": [
              "题材轮动观察"
            ],
            "original_text": "# 应流股份（603308）— 观察\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 高端装备/通用设备属性，但本次指标层不完整；公告主要为权益分派和可转债转股价格调整，偏中性 | 公告：2025 年年度权益分派实施、调整“应流转债”转股价格、可转债转股结果 |\n| 尾盘 | 尾盘走弱，冲高后回落 | 14:30 后 62.98→62.58，方向 -0.64%，尾盘成交约 1.34 亿 |\n| 板块 | 明显强于通用设备行业，但行业本身偏弱 | 个股 +2.96%，通用设备行业 -2.20%，相对强弱 +5.16pct |\n| 类型 | 高价高端装备趋势票，流动性较好 | 成交额 16.33 亿，换手 3.78%，PE TTM 88.41 |\n| 日线 | 近 30 日 -14.94%，仍处修复，不是明确主升 | 当日高 65.50，收 62.58 |\n| 上涨概率 | 中等偏低，估计 46%-51% | 相对行业强，但尾盘回落 + 数据不完整降权 |\n\n**一句话判断：** 应流股份当天相对强，但尾盘回落明显，且公告不是强催化，新开隔夜不优先。\n\n**交易计划：**\n- 技术面：强弱线 62.50，风险线 61.00，压力区 65.50-66.86。\n- 消息面：权益分派/转债价格调整偏中性，不足以支撑隔夜抢筹。\n- 赔率：若次日高端装备继续强，有修复机会；但尾盘弱说明先手资金不够坚决。\n- 仓位：观察，不建议新开隔夜核心仓。\n- 次日操作：次日冲高预估约 0.5%-3%；高开冲 64.50-65.50 无量先减；跌破 61 放弃。\n\n---",
            "summary_short": "结论观察；催化公告：2025 年年度权益分派实施、调整“应流转债”转股价格、可转债转股结果；尾盘14:30 后 62.98→62.58，方向 -0.64%，尾盘成交约 1.34 亿",
            "stance": "观察",
            "catalyst": "公告：2025 年年度权益分派实施、调整“应流转债”转股价格、可转债转股结果",
            "risk": "成交额 16.33 亿，换手 3.78%，PE TTM 88.41",
            "action_hint": "观察，不建议新开隔夜核心仓。",
            "status": "ok"
          }
        },
        {
          "rank": 19,
          "strategy_group": "theme_rotation_watch",
          "strategy_group_cn": "题材轮动观察",
          "symbol": "001268",
          "name": "联合精密",
          "source_period": "noon",
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
          "score": 23.352737,
          "source_score": 23.352737,
          "normalized_score": 23.353,
          "unified_score": 23.353,
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
            "theme": "机械基础件",
            "theme_stats": {
              "theme": "机械基础件",
              "count": 7,
              "active_count": 7,
              "strong_count": 4,
              "positive_count": 4,
              "avg_change_pct": 1.164286,
              "avg_volume_ratio": 0.97,
              "total_amount": 397370.49
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
              "theme": "机械基础件",
              "change_pct": 2.11,
              "volume_ratio": 1.41,
              "turnover_rate": 6.29,
              "amount": 17460.48,
              "attack_wave_pct": 1.31,
              "open_grab_pct": -1.17,
              "pullback_from_high_pct": 6.7
            },
            "risk_penalties": [
              "公告状态未完全确认",
              "冲高回落偏大"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
            "next_day_success_threshold": 3.0
          },
          "theme_rotation_watch_result": {
            "next_day_change_pct": -0.1,
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
            "intraday_price": 28.62,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
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
            "change_pct": -0.1,
            "open_change_pct": 2.23,
            "turnover_rate": 3.75,
            "volume_ratio": 2.15,
            "amount": 10331.08,
            "last_price": 28.62,
            "theme": "机械基础件",
            "industry": "机械设备-通用设备"
          },
          "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
              "theme_rotation_watch"
            ],
            "group_labels": [
              "题材轮动观察"
            ],
            "original_text": "# 联合精密（001268）— 可干（试错轻仓）\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 昨日涨停/昨日首板标签带来短线记忆，定增预案和小盘弹性增强波动 | 概念：定增预案、昨日涨停、昨日首板、最近情绪、小盘非融 |\n| 尾盘 | 尾盘主动性很强，是本组尾盘上推动能前列 | 14:30 后 39.86→40.43，方向 +1.43%，尾盘成交约 1709 万 |\n| 板块 | 明显强于通用设备行业 | 个股 +2.61%，通用设备行业 -2.20%，相对强弱 +4.81pct |\n| 类型 | 小市值高弹性票，成交额偏小，容易被情绪资金放大 | 成交额 1.81 亿，换手 6.53%，PE TTM 为负 |\n| 日线 | 近 30 日 -6.80%，7月3日涨停后继续修复，但仍未形成稳定主升 | 当日高 42.87，收 40.43，涨停价 43.34 |\n| 上涨概率 | 中等偏高但波动大，估计 53%-58% | 尾盘强 + 昨日涨停记忆；但成交额小、基本面质量弱 |\n\n**一句话判断：** 联合精密是短线弹性最强的试错票，优点是尾盘主动拿货，缺点是容量和稳定性不够，只能小仓位博弈。\n\n**交易计划：**\n- 技术面：强弱线 40.00，风险线 39.20，压力区 42.00-43.34；次日若竞价站上 40.50 且开盘不破 40，说明承接仍在。\n- 消息面：主要靠昨日涨停记忆和情绪资金，不是强基本面催化。\n- 赔率：弹性好，冲高空间可观；但若低开破 39.20，说明情绪退潮。\n- 仓位：试错轻仓，单票不超过组合 15%-20%。\n- 次日操作：次日冲高预估约 2%-6%；高开冲 42 附近先减，若接近 43.34 不能封板坚决落袋；平开守 40 可看 41.50；低开跌破 39.20 放弃。\n\n---",
            "summary_short": "结论可干（试错轻仓）；催化概念：定增预案、昨日涨停、昨日首板、最近情绪、小盘非融；尾盘14:30 后 39.86→40.43，方向 +1.43%，尾盘成交约 1709 万",
            "stance": "可干（试错轻仓）",
            "catalyst": "概念：定增预案、昨日涨停、昨日首板、最近情绪、小盘非融",
            "risk": "成交额 1.81 亿，换手 6.53%，PE TTM 为负",
            "action_hint": "试错轻仓，单票不超过组合 15%-20%。",
            "status": "ok"
          }
        },
        {
          "rank": 20,
          "strategy_group": "theme_rotation_watch",
          "strategy_group_cn": "题材轮动观察",
          "symbol": "600188",
          "name": "兖矿能源",
          "source_period": "noon",
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
          "score": 20.515981,
          "source_score": 20.515981,
          "normalized_score": 20.516,
          "unified_score": 20.516,
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
            "theme": "动力煤",
            "theme_stats": {
              "theme": "动力煤",
              "count": 2,
              "active_count": 2,
              "strong_count": 2,
              "positive_count": 2,
              "avg_change_pct": 4.525,
              "avg_volume_ratio": 1.55,
              "total_amount": 251967.06
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
              "theme": "动力煤",
              "change_pct": 5.45,
              "volume_ratio": 1.84,
              "turnover_rate": 1.88,
              "amount": 206052.44,
              "attack_wave_pct": 7.56,
              "open_grab_pct": 0.0,
              "pullback_from_high_pct": 1.57
            },
            "risk_penalties": [
              "公告状态未完全确认",
              "个股涨幅偏高，追高风险"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察主题是否继续扩散",
            "next_day_success_threshold": 3.0
          },
          "theme_rotation_watch_result": {
            "next_day_change_pct": -2.66,
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
            "intraday_price": 18.3,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "动力煤",
          "theme_display": "动力煤",
          "industry": "煤炭-煤炭开采",
          "latest_snapshot": {
            "change_pct": -2.66,
            "open_change_pct": -0.69,
            "turnover_rate": 0.68,
            "volume_ratio": 1.06,
            "amount": 74559.98,
            "last_price": 18.3,
            "theme": "动力煤",
            "industry": "煤炭-煤炭开采"
          },
          "display_reason": "题材轮动观察 v1：同题材多只个股同步转强，个股未明显过热，只做旁路观察样本",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "动力煤",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {
            "symbol": "600188",
            "name": "兖矿能源",
            "groups": [
              "theme_rotation_watch"
            ],
            "group_labels": [
              "题材轮动观察"
            ],
            "original_text": "# 兖矿能源（600188）— 等 / 防守备选\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 煤炭行业走强、回购进展、高分红/周期属性，偏防守与行业轮动 | 公告：股份回购进展；新闻涉及煤炭行业资金流入、回购、分拆物泊科技进展 |\n| 尾盘 | 尾盘基本横盘，未见继续抢筹 | 14:30 后 18.81→18.80，方向 -0.05%，尾盘成交约 3.63 亿 |\n| 板块 | 行业也强，个股略强于行业 | 个股 +5.62%，煤炭开采行业 +4.05%，相对强弱 +1.57pct |\n| 类型 | 大市值高分红周期股，流动性好，波动小于小票 | 成交额 21.28 亿，换手 1.94%，PE TTM 11.93 |\n| 日线 | 近 30 日 -9.48%，属于低位反弹，今日长阳修复 | 当日高 19.05，收 18.80，涨停价 19.58 |\n| 上涨概率 | 中等，估计 51%-56% | 行业轮动强，但短线弹性不如 AI/装备票 |\n\n**一句话判断：** 兖矿能源适合作为隔夜组合的防守备选，不适合作为最强进攻仓；若次日煤炭继续强，它有低波动冲高机会。\n\n**交易计划：**\n- 技术面：强弱线 18.70，风险线 18.30，压力区 19.05-19.58；次日若煤炭行业继续高开，站稳 18.80 才考虑。\n- 消息面：回购进展和高分红属性偏中线支撑，不是强短线爆发催化。\n- 赔率：胜在稳，输在弹性一般；更适合市场分化时防守。\n- 仓位：等待；若作为组合防守仓，轻仓 15%-20%。\n- 次日操作：次日冲高预估约 1.5%-4%；冲 19.05 上方若量能不足先减；平开守 18.70 可观察；跌破 18.30 放弃。\n\n---",
            "summary_short": "结论等 / 防守备选；催化公告：股份回购进展；新闻涉及煤炭行业资金流入、回购、分拆物泊科技进展；尾盘14:30 后 18.81→18.80，方向 -0.05%，尾盘成交约 3.63 亿",
            "stance": "等 / 防守备选",
            "catalyst": "公告：股份回购进展；新闻涉及煤炭行业资金流入、回购、分拆物泊科技进展",
            "risk": "成交额 21.28 亿，换手 1.94%，PE TTM 11.93",
            "action_hint": "等待；若作为组合防守仓，轻仓 15%-20%。",
            "status": "ok"
          }
        },
        {
          "rank": 21,
          "strategy_group": "close_strength_hold_watch",
          "strategy_group_cn": "收盘中强承接观察",
          "symbol": "601001",
          "name": "晋控煤业",
          "source_period": "noon",
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
          "score": 15.383744,
          "source_score": 15.383744,
          "normalized_score": 15.384,
          "unified_score": 15.384,
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
              "change_pct": 3.6,
              "high_pct": 4.22,
              "fade_from_high_pct": -0.59,
              "volume_ratio": 1.26,
              "turnover_rate": 1.52,
              "amount": 45914.62,
              "attack_wave_pct": 5.87,
              "open_grab_pct": 0.0,
              "change_20d_pct": -16.36,
              "year_limit_up_days": 3.0
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察次日是否延续中强承接",
            "next_day_success_threshold": 3.0
          },
          "close_strength_hold_watch_result": {
            "next_day_change_pct": -3.41,
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
            "intraday_price": 17.82,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "动力煤",
          "theme_display": "动力煤",
          "industry": "煤炭-煤炭开采",
          "latest_snapshot": {
            "change_pct": -3.41,
            "open_change_pct": 0.27,
            "turnover_rate": 0.79,
            "volume_ratio": 1.27,
            "amount": 23723.36,
            "last_price": 17.82,
            "theme": "动力煤",
            "industry": "煤炭-煤炭开采"
          },
          "display_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "动力煤",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 22,
          "strategy_group": "close_strength_hold_watch",
          "strategy_group_cn": "收盘中强承接观察",
          "symbol": "603345",
          "name": "安井食品",
          "source_period": "noon",
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
          "score": 15.077163,
          "source_score": 15.077163,
          "normalized_score": 15.077,
          "unified_score": 15.077,
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
              "change_pct": 3.18,
              "high_pct": 4.06,
              "fade_from_high_pct": -0.85,
              "volume_ratio": 1.14,
              "turnover_rate": 2.15,
              "amount": 52221.16,
              "attack_wave_pct": 4.39,
              "open_grab_pct": -0.01,
              "change_20d_pct": -1.71,
              "year_limit_up_days": 1.0
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察次日是否延续中强承接",
            "next_day_success_threshold": 3.0
          },
          "close_strength_hold_watch_result": {
            "next_day_change_pct": -1.2,
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
            "intraday_price": 83.18,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "预加工食品",
          "theme_display": "预加工食品",
          "industry": "食品饮料-食品加工",
          "latest_snapshot": {
            "change_pct": -1.2,
            "open_change_pct": -0.59,
            "turnover_rate": 0.87,
            "volume_ratio": 0.86,
            "amount": 21086.24,
            "last_price": 83.18,
            "theme": "预加工食品",
            "industry": "食品饮料-食品加工"
          },
          "display_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "预加工食品",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        },
        {
          "rank": 23,
          "strategy_group": "close_strength_hold_watch",
          "strategy_group_cn": "收盘中强承接观察",
          "symbol": "000404",
          "name": "长虹华意",
          "source_period": "noon",
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
          "score": 15.021617,
          "source_score": 15.021617,
          "normalized_score": 15.022,
          "unified_score": 15.022,
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
              "change_pct": 3.69,
              "high_pct": 3.94,
              "fade_from_high_pct": -0.24,
              "volume_ratio": 0.81,
              "turnover_rate": 4.06,
              "amount": 23205.61,
              "attack_wave_pct": 6.17,
              "open_grab_pct": 0.12,
              "change_20d_pct": 6.84,
              "year_limit_up_days": 1.0
            },
            "risk_penalties": [
              "公告状态未完全确认"
            ],
            "next_day_success_standard": "next_day_change_pct >= 3；辅助观察次日是否延续中强承接",
            "next_day_success_threshold": 3.0
          },
          "close_strength_hold_watch_result": {
            "next_day_change_pct": -2.36,
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
            "intraday_price": 8.26,
            "intraday_price_source": "current_period_watchlist_snapshot",
            "entry_price": null,
            "entry_price_source": "",
            "return_basis": "noon_snapshot",
            "same_day_return": null,
            "ledger_same_day_return": null,
            "t1_return": null,
            "day3_return": null,
            "missing_reasons": [
              "模拟买入价缺失，收益待回填",
              "模拟收益账本缺这只票，收益待回填"
            ]
          },
          "theme": "家电零部件",
          "theme_display": "家电零部件",
          "industry": "家电-家电零部件",
          "latest_snapshot": {
            "change_pct": -2.36,
            "open_change_pct": -0.35,
            "turnover_rate": 2.53,
            "volume_ratio": 1.05,
            "amount": 14551.04,
            "last_price": 8.26,
            "theme": "家电零部件",
            "industry": "家电-家电零部件"
          },
          "display_reason": "收盘中强承接观察 v1：收盘中等强度、回落可控、量价不过热，排除既有旁路后只做次日延续观察",
          "return_status": "旁路收益待回填",
          "return_scope": "side_channel",
          "missing_reason": "模拟买入价缺失，收益待回填；模拟收益账本缺这只票，收益待回填",
          "freshness": "当前结构化账本",
          "source_mtime": "2026-07-07T11:37:15+08:00",
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
          "mainline_theme_display": "家电零部件",
          "mainline_verdict_display": "",
          "market_mainline_verdict_display": "",
          "mainline_role_label": "",
          "overnight_report": {}
        }
      ],
      "display_source": "four_layer_tracking",
      "raw_record_count": 23,
      "raw_strategy_counts": {
        "formal_top3": 2,
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
            "count": 2,
            "formal_return_eligible_count": 2,
            "side_channel_return_eligible_count": 0,
            "avg_intraday_return": null,
            "avg_t1_return": null,
            "status_counts": {
              "cancelled": 1,
              "price_missing": 0,
              "tracked": 1,
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
              "false_positive": 2,
              "price_missing": 0,
              "tracked": 0,
              "verified": 1
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
        "record_count": 23,
        "latest_snapshot_match_count": 23,
        "report_match_count": 1,
        "not_found_count": 0,
        "return_policy": "正式收益只统计 Top3；题材观察、技术观察、候选评分前排、低位回流观察、早盘驱动观察、隔夜涨停观察、题材轮动观察和收盘中强承接观察只跟踪面板展示样本，旁路收益也只按这些样本统计。",
        "notice_supplement_completed": true,
        "notice_supplement_required_count": 7,
        "notice_supplement_incomplete_count": 0
      },
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.noon.json",
        "relative_path": "runs/2026-07-07/four-layer-tracking.noon.json",
        "exists": true,
        "size": 134030,
        "modified_at": "2026-07-07T11:37:15+08:00",
        "sha256": "c2339337ddeff6265bde25c7351a4d03e9f62d24d3bcef22ce5701274e62fc0d"
      }
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
    "status": "ok",
    "covered_count": 11,
    "failed_count": 0,
    "query_symbol_count": 11,
    "source_groups": [
      "formal_top3",
      "open_drive_watch",
      "overnight_limit_watch",
      "theme_rotation_watch"
    ],
    "source_run_date": "2026-07-06",
    "records": [
      {
        "symbol": "002588",
        "name": "史丹利",
        "groups": [
          "formal_top3"
        ],
        "group_labels": [
          "正式 Top3"
        ],
        "original_text": "# 史丹利（002588）— 观察\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 化肥、磷概念、乡村振兴，偏农业防守与资源属性 | 概念：磷概念、化肥概念、乡村振兴、低市盈率、锂电池 |\n| 尾盘 | 尾盘几乎横盘，攻击性不足 | 14:30 后方向 +0.12%，全天成交 1.82 亿 |\n| 板块 | 强于农用化工行业，但绝对涨幅一般 | 个股 +2.75%，农用化工行业 +0.34%，相对强弱 +2.41pct |\n| 类型 | 低估值农业化工票，防守多于进攻 | 换手 2.47%，近 30 日 -7.64% |\n| 日线 | 仍处低位修复，尚未形成短线强趋势 | 当日收 7.85，涨停价 8.40 |\n| 上涨概率 | 中等偏低，估计 45%-50% | 防守属性可看，但隔夜弹性不足 |\n\n**一句话判断：** 史丹利不是坏票，但缺少强催化和尾盘抢筹，作为新开隔夜仓不够锋利。\n\n**交易计划：**\n- 技术面：强弱线 7.80，风险线 7.65，压力区 8.00-8.40。\n- 消息面：无新增新闻公告，主要依靠化肥/磷概念防守逻辑。\n- 赔率：下行风险相对可控，但次日冲高弹性也有限。\n- 仓位：观察，不进核心隔夜组合。\n- 次日操作：次日冲高预估约 0.5%-2.5%；若不能突破 8.00，继续当弱修复看待；跌破 7.65 放弃。\n\n---",
        "summary_short": "结论观察；催化概念：磷概念、化肥概念、乡村振兴、低市盈率、锂电池；尾盘14:30 后方向 +0.12%，全天成交 1.82 亿",
        "stance": "观察",
        "catalyst": "概念：磷概念、化肥概念、乡村振兴、低市盈率、锂电池",
        "risk": "换手 2.47%，近 30 日 -7.64%",
        "action_hint": "观察，不进核心隔夜组合。",
        "status": "ok"
      },
      {
        "symbol": "603317",
        "name": "天味食品",
        "groups": [
          "formal_top3"
        ],
        "group_labels": [
          "正式 Top3"
        ],
        "original_text": "# 天味食品（603317）— 放弃\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 回购计划、高分红、防守消费属性，但无新增短线催化 | 概念：回购计划、私募重仓、高分红股、融资融券 |\n| 尾盘 | 尾盘回落，短线资金不积极 | 14:30 后方向 -0.49%，全天成交 2.12 亿 |\n| 板块 | 基本贴近调味品行业，无明显相对强度 | 个股 +1.35%，调味品行业 +1.14%，相对强弱 +0.21pct |\n| 类型 | 食品消费防守票，弹性不足 | 换手 1.39%，近 30 日 -7.24% |\n| 日线 | 低位修复，但无强趋势 | 当日收 12.75，涨停价 13.83 |\n| 上涨概率 | 偏低，估计 38%-43% | 防守有余，进攻不足 |\n\n**一句话判断：** 天味食品适合做消费防守观察，不适合“新开隔夜仓”这种要求短线溢价的场景。\n\n**交易计划：**\n- 技术面：强弱线 12.70，风险线 12.45，压力区 13.00-13.40。\n- 消息面：回购/高分红偏中长期支撑，无法替代短线催化。\n- 赔率：次日冲高弹性有限，资金更可能去科技/资源线。\n- 仓位：放弃新开。\n- 次日操作：若冲 13.00 无量，仍按弱修复处理；跌破 12.45 放弃。\n\n---\n\n## 最终执行建议\n\n- **优先可干：** 002353 杰瑞股份、603496 恒为科技、001268 联合精密。三者都只能轻仓，核心逻辑分别是“强辨识度高端装备 / AI算力修复 / 尾盘小票情绪”。\n- **备选等待：** 600188 兖矿能源适合防守仓，000048 京基智农只等竞价超预期，不主动追高。\n- **观察不买：** 000060 中金岭南、603308 应流股份、002588 史丹利。\n- **放弃：** 002850 科达利、002150 正泰电源、603317 天味食品。\n\n## 次日统一纪律\n\n1. 只做竞价和开盘承接确认后的隔夜/超短，不做无条件追高。\n2. 若大盘或核心板块开盘转弱，Top 3 候选全部降为观察。\n3. 若个股高开 3%-5% 但 5 分钟内不能继续放量上攻，优先兑现而不是加仓。\n4. 若跌破各自风险线，隔夜逻辑失效；不得用“中线看好”替代短线止损。\n5. 本报告为模拟/研究用途，不代表实盘成交、真实持仓或账户收益。",
        "summary_short": "结论放弃；催化概念：回购计划、私募重仓、高分红股、融资融券；尾盘14:30 后方向 -0.49%，全天成交 2.12 亿",
        "stance": "放弃",
        "catalyst": "概念：回购计划、私募重仓、高分红股、融资融券",
        "risk": "换手 1.39%，近 30 日 -7.24%",
        "action_hint": "放弃新开。",
        "status": "ok"
      },
      {
        "symbol": "000060",
        "name": "中金岭南",
        "groups": [
          "open_drive_watch"
        ],
        "group_labels": [
          "早盘驱动观察"
        ],
        "original_text": "# 中金岭南（000060）— 观察\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 2026 半年度业绩预告、有色金属资源属性；但公司澄清未涉及高端 PCB 微钻孔板相关业务，题材误读需降温 | 公告：2026 半年度业绩预告、可转债相关公告；新闻：公司称未涉及高端 PCB 微钻孔板相关业务 |\n| 尾盘 | 尾盘小幅回落，不是隔夜资金主动抢筹 | 14:30 后方向 -0.27%，全天成交 30.81 亿 |\n| 板块 | 个股强于工业金属行业，资金有相对认可 | 个股 +1.94%，工业金属行业 -0.76%，相对强弱 +2.70pct |\n| 类型 | 有色资源中盘高成交票，换手高 | 成交额 30.81 亿，换手 9.04% |\n| 日线 | 近 30 日 -4.29%，当前仍偏修复 | 当日收 11.04，涨停价 11.92 |\n| 上涨概率 | 中等，估计 48%-53% | 业绩/资源属性加分；尾盘走弱和 PCB误读降权 |\n\n**一句话判断：** 中金岭南适合观察有色资源和业绩预告兑现，不适合按 PCB/AI概念强行隔夜追。\n\n**交易计划：**\n- 技术面：强弱线 10.95，风险线 10.70，压力区 11.30-11.92。\n- 消息面：业绩预告偏正面，但“未涉及高端 PCB 微钻孔板”削弱短线概念弹性。\n- 赔率：成交充足但尾盘没有主动抢筹，隔夜性价比一般。\n- 仓位：观察，不进首选组合。\n- 次日操作：次日冲高预估约 1%-3.5%；若高开但不能站上 11.30，优先兑现；跌破 10.70 放弃。\n\n---",
        "summary_short": "结论观察；催化公告：2026 半年度业绩预告、可转债相关公告；新闻：公司称未涉及高端 PCB 微钻孔板相关业务；尾盘14:30 后方向 -0.27%，全天成交 30.81 亿",
        "stance": "观察",
        "catalyst": "公告：2026 半年度业绩预告、可转债相关公告；新闻：公司称未涉及高端 PCB 微钻孔板相关业务",
        "risk": "成交额 30.81 亿，换手 9.04%",
        "action_hint": "观察，不进首选组合。",
        "status": "ok"
      },
      {
        "symbol": "002150",
        "name": "正泰电源",
        "groups": [
          "open_drive_watch"
        ],
        "group_labels": [
          "早盘驱动观察"
        ],
        "original_text": "# 正泰电源（002150）— 放弃\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 储能、光伏、风电、充电桩等新能源电力设备标签，但近期趋势弱；新闻主要涉及子公司股权转让 | 新闻：子公司股权转让/优先购买权相关；概念：储能、光伏、风电、充电桩、海外业务 |\n| 尾盘 | 尾盘继续偏弱 | 14:30 后方向 -0.19%，全天成交 4.54 亿 |\n| 板块 | 略强于电网设备行业，但个股本身收跌 | 个股 -0.67%，电网设备行业 -1.28%，相对强弱 +0.61pct |\n| 类型 | 新能源电力设备修复票，当前趋势仍弱 | 换手 4.66%，近 30 日 -19.93% |\n| 日线 | 近 30 日下跌明显，尚未扭转趋势 | 当日收 18.95，涨停价 21.14 |\n| 上涨概率 | 偏低，估计 40%-45% | 弱趋势 + 尾盘弱，不符合隔夜新开标准 |\n\n**一句话判断：** 正泰电源仍处弱趋势修复，公告/新闻也不是强进攻催化，新开隔夜应回避。\n\n**交易计划：**\n- 技术面：强弱线 19.10，风险线 18.60，压力区 19.70-20.40。\n- 消息面：股权转让事项偏公司治理/资产安排，不是短线强催化。\n- 赔率：除非新能源电力设备整体大幅修复，否则缺乏隔夜弹性。\n- 仓位：放弃新开。\n- 次日操作：高开不能站上 19.70 不追；跌破 18.60 继续弱势。\n\n---",
        "summary_short": "结论放弃；催化新闻：子公司股权转让/优先购买权相关；概念：储能、光伏、风电、充电桩、海外业务；尾盘14:30 后方向 -0.19%，全天成交 4.54 亿",
        "stance": "放弃",
        "catalyst": "新闻：子公司股权转让/优先购买权相关；概念：储能、光伏、风电、充电桩、海外业务",
        "risk": "换手 4.66%，近 30 日 -19.93%",
        "action_hint": "放弃新开。",
        "status": "ok"
      },
      {
        "symbol": "002850",
        "name": "科达利",
        "groups": [
          "open_drive_watch"
        ],
        "group_labels": [
          "早盘驱动观察"
        ],
        "original_text": "# 科达利（002850）— 放弃\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 新能源车、储能、固态电池、百元股、昨日涨停标签，题材强但今日资金兑现 | 概念：新能源车、储能、固态电池、百元股、昨日涨停、昨日首板、近期新高 |\n| 尾盘 | 尾盘明显走弱，是硬伤 | 14:30 后方向 -1.06%，全天成交 37.80 亿 |\n| 板块 | 跌幅小于电池行业，但仍是下跌 | 个股 -0.96%，电池行业 -2.12%，相对强弱 +1.16pct |\n| 类型 | 百元高位新能源结构件票，容量大但兑现压力也大 | 换手 7.81%，近 30 日 +13.25% |\n| 日线 | 高位强趋势遇到日内回落，隔夜赔率下降 | 当日收 165.64，涨停价 184.00 |\n| 上涨概率 | 偏低，估计 42%-47% | 高位 + 尾盘下压，不适合新开隔夜 |\n\n**一句话判断：** 科达利题材和辨识度都不差，但尾盘 -1.06% 已经说明资金在兑现，新开隔夜容易买在分歧延续点。\n\n**交易计划：**\n- 技术面：强弱线 166.00，风险线 161.80，压力区 172.00-176.00。\n- 消息面：无公告风险，但也缺少足够强的新催化覆盖尾盘兑现。\n- 赔率：若次日电池链修复可能反抽，但不是隔夜首选。\n- 仓位：放弃新开；已有仓也应偏减而非加。\n- 次日操作：若高开不能收回 170，优先落袋；跌破 161.80 风险扩大。\n\n---",
        "summary_short": "结论放弃；催化概念：新能源车、储能、固态电池、百元股、昨日涨停、昨日首板、近期新高；尾盘14:30 后方向 -1.06%，全天成交 37.80 亿",
        "stance": "放弃",
        "catalyst": "概念：新能源车、储能、固态电池、百元股、昨日涨停、昨日首板、近期新高",
        "risk": "换手 7.81%，近 30 日 +13.25%",
        "action_hint": "放弃新开；已有仓也应偏减而非加。",
        "status": "ok"
      },
      {
        "symbol": "000048",
        "name": "京基智农",
        "groups": [
          "overnight_limit_watch"
        ],
        "group_labels": [
          "隔夜涨停观察"
        ],
        "original_text": "# 京基智农（000048）— 等\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 养殖业、猪肉/鸡肉、AI科技子公司新闻，具备故事性；但担保余额占净资产比例较高需警惕 | 新闻：设立科技子公司；公告：为下属公司提供担保进展，担保余额 22.85 亿元，占最近一期净资产 56.00% |\n| 尾盘 | 尾盘非常强，资金有明显回流 | 14:30 后尾盘方向 +2.49%，尾盘成交约 6723 万 |\n| 板块 | 弱于养殖业行业，说明更像个股资金而非板块核心 | 个股 +2.59%，养殖业行业 +4.31%，相对强弱 -1.72pct |\n| 类型 | 高波动养殖 + 科技转型故事票 | 成交额 6.72 亿，换手 6.03%，近 30 日 +62.37% |\n| 日线 | 近 30 日涨幅过大，短线拥挤 | 当日收 16.22，涨停价 17.80 |\n| 上涨概率 | 中等，估计 50%-55% | 尾盘强加分；但高位和担保公告降低隔夜赔率 |\n\n**一句话判断：** 京基智农尾盘很好，但位置太高、且财务担保公告不适合忽略，除非次日竞价继续超预期，否则不做首选隔夜。\n\n**交易计划：**\n- 技术面：强弱线 16.00，风险线 15.50，压力区 16.70-17.80；高位票必须看竞价是否继续放量。\n- 消息面：科技子公司是题材加分，担保公告是风险折价。\n- 赔率：尾盘资金强，但近 30 日涨幅过大，次日兑现压力大。\n- 仓位：等待，不主动隔夜；若强做只能极轻仓。\n- 次日操作：次日冲高预估约 1.5%-5%；高开 3%以上不快速冲 16.70 先减；平开守 16 可观察；跌破 15.50 放弃。\n\n---",
        "summary_short": "结论等；催化新闻：设立科技子公司；公告：为下属公司提供担保进展，担保余额 22.85 亿元，占最近一期净资产 56.00%；尾盘14:30 后尾盘方向 +2.49%，尾盘成交约 6723 万",
        "stance": "等",
        "catalyst": "新闻：设立科技子公司；公告：为下属公司提供担保进展，担保余额 22.85 亿元，占最近一期净资产 56.00%",
        "risk": "成交额 6.72 亿，换手 6.03%，近 30 日 +62.37%",
        "action_hint": "等待，不主动隔夜；若强做只能极轻仓。",
        "status": "ok"
      },
      {
        "symbol": "002353",
        "name": "杰瑞股份",
        "groups": [
          "overnight_limit_watch"
        ],
        "group_labels": [
          "隔夜涨停观察"
        ],
        "original_text": "# 杰瑞股份（002353）— 可干（轻仓核心）\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 高端装备、天然气、可燃冰、页岩气、核电核能等题材叠加，7月3日涨停并上龙虎榜，短线辨识度较强 | 新闻：7月3日龙虎榜，买入前五合计约 6.36 亿、卖出前五约 4.5 亿，龙虎榜净买入约 2.93 亿；概念含“昨日涨停、天然气、核电核能、高端装备” |\n| 尾盘 | 尾盘横向承接，不是继续猛拉，但没有明显跳水 | 14:30 后 171.65→171.79，方向 +0.08%，尾盘成交约 3.90 亿 |\n| 板块 | 个股显著强于行业，属于当日强势独立票 | 个股 +6.40%，专用设备行业 -1.50%，相对强弱 +7.90pct |\n| 类型 | 大市值高端装备趋势票，成交额充足，流动性好 | 成交额 40.17 亿，换手 3.38%，PE TTM 74.75 |\n| 日线 | 近 30 日方向 +25.07%，7月3日涨停后继续放量上行，短线强但已有获利盘 | 当日高 176.59，收 171.79，涨停价 177.61 |\n| 上涨概率 | 中高，估计 57%-62% | 强相对收益 + 龙虎榜记忆 + 放量；但尾盘未继续抢筹，需防高位兑现 |\n\n**一句话判断：** 杰瑞股份是本组里“强度、流动性、辨识度”最均衡的隔夜候选，但今天已大涨，次日只能按冲高兑现思路做，不能当中线持仓买。\n\n**交易计划：**\n- 技术面：强弱线看 170.50，风险线看 166.80，压力区 176.60-177.60；若竞价站上 172 且开盘 5-10 分钟不破 170.50，承接合格。\n- 消息面：龙虎榜净买入和昨日涨停记忆是短线加分，高端装备/能源装备逻辑提供题材承接。\n- 赔率：次日有冲高赔率，但越接近涨停价越容易出现兑现盘。\n- 仓位：轻仓核心，单票不超过隔夜组合 25%-30%。\n- 次日操作：次日冲高预估约 2.5%-6%；高开 3%以上先看 176.60-177.60 压力，冲高缩量分批落袋；平开后快速站回 172 可持有看 175；低开跌破 166.80 则说明资金兑现，放弃隔夜逻辑。\n\n---",
        "summary_short": "结论可干（轻仓核心）；催化新闻：7月3日龙虎榜，买入前五合计约 6.36 亿、卖出前五约 4.5 亿，龙虎榜净买入约 2.93 亿；概念含“昨日涨停、天然气、核电核能；尾盘14:30 后 171.65→171.79，方向 +0.08%，尾盘",
        "stance": "可干（轻仓核心）",
        "catalyst": "新闻：7月3日龙虎榜，买入前五合计约 6.36 亿、卖出前五约 4.5 亿，龙虎榜净买入约 2.93 亿；概念含“昨日涨停、天然气、核电核能、高端装备”",
        "risk": "成交额 40.17 亿，换手 3.38%，PE TTM 74.75",
        "action_hint": "轻仓核心，单票不超过隔夜组合 25%-30%。",
        "status": "ok"
      },
      {
        "symbol": "603496",
        "name": "恒为科技",
        "groups": [
          "overnight_limit_watch"
        ],
        "group_labels": [
          "隔夜涨停观察"
        ],
        "original_text": "# 恒为科技（603496）— 可干（轻仓）\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | AI/算力/信创/数据中心/华为算力/DeepSeek 标签完整，契合当日科技线交易偏好 | 概念：5G、信息安全、国产软件、云计算、信创、东数西算、数据中心、算力租赁、华为算力、DeepSeek |\n| 尾盘 | 尾盘继续抬升，承接较好 | 14:30 后 23.80→23.98，方向 +0.76%，尾盘成交约 6088 万 |\n| 板块 | 强于 IT设备行业，有个股主动性 | 个股 +5.50%，IT设备行业 +1.45%，相对强弱 +4.05pct |\n| 类型 | 小中市值 AI/IT设备弹性票，换手较高 | 成交额 5.62 亿，换手 7.59%，PE TTM 330.01 |\n| 日线 | 近 30 日仍为 -10.89%，当前是低位修复；好处是位置不算极端拥挤，坏处是趋势仍需确认 | 当日高 24.48，收 23.98，涨停价 25.00 |\n| 上涨概率 | 中高，估计 55%-60% | AI方向 + 尾盘上推；但扣非亏损/高估值标签降低确定性 |\n\n**一句话判断：** 恒为科技更像“AI算力链的低位修复弹性票”，隔夜价值在于板块若继续进攻，次日容易有惯性冲高。\n\n**交易计划：**\n- 技术面：强弱线 23.80，风险线 23.20，压力区 24.48-25.00；若竞价站上 24.00 且 IT设备/AI硬件不弱，可看冲 24.50 以上。\n- 消息面：没有新增新闻公告，主要靠 AI、算力、信创、华为算力标签和板块扩散。\n- 赔率：离涨停价 25.00 还有空间，但 PE 高、扣非亏损标签意味着一旦板块降温会回撤快。\n- 仓位：轻仓，不宜超过组合 20%-25%。\n- 次日操作：次日冲高预估约 2%-5.5%；高开冲 24.50-25.00 不封板先兑现；平开站稳 23.80 可看 24.30；低开跌破 23.20 视为修复失败。\n\n---",
        "summary_short": "结论可干（轻仓）；催化概念：5G、信息安全、国产软件、云计算、信创、东数西算、数据中心、算力租赁、华为算力、DeepSeek；尾盘14:30 后 23.80→23.98，方向 +0.76%，尾盘成交约 6088 万",
        "stance": "可干（轻仓）",
        "catalyst": "概念：5G、信息安全、国产软件、云计算、信创、东数西算、数据中心、算力租赁、华为算力、DeepSeek",
        "risk": "成交额 5.62 亿，换手 7.59%，PE TTM 330.01",
        "action_hint": "轻仓，不宜超过组合 20%-25%。",
        "status": "ok"
      },
      {
        "symbol": "001268",
        "name": "联合精密",
        "groups": [
          "theme_rotation_watch"
        ],
        "group_labels": [
          "题材轮动观察"
        ],
        "original_text": "# 联合精密（001268）— 可干（试错轻仓）\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 昨日涨停/昨日首板标签带来短线记忆，定增预案和小盘弹性增强波动 | 概念：定增预案、昨日涨停、昨日首板、最近情绪、小盘非融 |\n| 尾盘 | 尾盘主动性很强，是本组尾盘上推动能前列 | 14:30 后 39.86→40.43，方向 +1.43%，尾盘成交约 1709 万 |\n| 板块 | 明显强于通用设备行业 | 个股 +2.61%，通用设备行业 -2.20%，相对强弱 +4.81pct |\n| 类型 | 小市值高弹性票，成交额偏小，容易被情绪资金放大 | 成交额 1.81 亿，换手 6.53%，PE TTM 为负 |\n| 日线 | 近 30 日 -6.80%，7月3日涨停后继续修复，但仍未形成稳定主升 | 当日高 42.87，收 40.43，涨停价 43.34 |\n| 上涨概率 | 中等偏高但波动大，估计 53%-58% | 尾盘强 + 昨日涨停记忆；但成交额小、基本面质量弱 |\n\n**一句话判断：** 联合精密是短线弹性最强的试错票，优点是尾盘主动拿货，缺点是容量和稳定性不够，只能小仓位博弈。\n\n**交易计划：**\n- 技术面：强弱线 40.00，风险线 39.20，压力区 42.00-43.34；次日若竞价站上 40.50 且开盘不破 40，说明承接仍在。\n- 消息面：主要靠昨日涨停记忆和情绪资金，不是强基本面催化。\n- 赔率：弹性好，冲高空间可观；但若低开破 39.20，说明情绪退潮。\n- 仓位：试错轻仓，单票不超过组合 15%-20%。\n- 次日操作：次日冲高预估约 2%-6%；高开冲 42 附近先减，若接近 43.34 不能封板坚决落袋；平开守 40 可看 41.50；低开跌破 39.20 放弃。\n\n---",
        "summary_short": "结论可干（试错轻仓）；催化概念：定增预案、昨日涨停、昨日首板、最近情绪、小盘非融；尾盘14:30 后 39.86→40.43，方向 +1.43%，尾盘成交约 1709 万",
        "stance": "可干（试错轻仓）",
        "catalyst": "概念：定增预案、昨日涨停、昨日首板、最近情绪、小盘非融",
        "risk": "成交额 1.81 亿，换手 6.53%，PE TTM 为负",
        "action_hint": "试错轻仓，单票不超过组合 15%-20%。",
        "status": "ok"
      },
      {
        "symbol": "600188",
        "name": "兖矿能源",
        "groups": [
          "theme_rotation_watch"
        ],
        "group_labels": [
          "题材轮动观察"
        ],
        "original_text": "# 兖矿能源（600188）— 等 / 防守备选\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 煤炭行业走强、回购进展、高分红/周期属性，偏防守与行业轮动 | 公告：股份回购进展；新闻涉及煤炭行业资金流入、回购、分拆物泊科技进展 |\n| 尾盘 | 尾盘基本横盘，未见继续抢筹 | 14:30 后 18.81→18.80，方向 -0.05%，尾盘成交约 3.63 亿 |\n| 板块 | 行业也强，个股略强于行业 | 个股 +5.62%，煤炭开采行业 +4.05%，相对强弱 +1.57pct |\n| 类型 | 大市值高分红周期股，流动性好，波动小于小票 | 成交额 21.28 亿，换手 1.94%，PE TTM 11.93 |\n| 日线 | 近 30 日 -9.48%，属于低位反弹，今日长阳修复 | 当日高 19.05，收 18.80，涨停价 19.58 |\n| 上涨概率 | 中等，估计 51%-56% | 行业轮动强，但短线弹性不如 AI/装备票 |\n\n**一句话判断：** 兖矿能源适合作为隔夜组合的防守备选，不适合作为最强进攻仓；若次日煤炭继续强，它有低波动冲高机会。\n\n**交易计划：**\n- 技术面：强弱线 18.70，风险线 18.30，压力区 19.05-19.58；次日若煤炭行业继续高开，站稳 18.80 才考虑。\n- 消息面：回购进展和高分红属性偏中线支撑，不是强短线爆发催化。\n- 赔率：胜在稳，输在弹性一般；更适合市场分化时防守。\n- 仓位：等待；若作为组合防守仓，轻仓 15%-20%。\n- 次日操作：次日冲高预估约 1.5%-4%；冲 19.05 上方若量能不足先减；平开守 18.70 可观察；跌破 18.30 放弃。\n\n---",
        "summary_short": "结论等 / 防守备选；催化公告：股份回购进展；新闻涉及煤炭行业资金流入、回购、分拆物泊科技进展；尾盘14:30 后 18.81→18.80，方向 -0.05%，尾盘成交约 3.63 亿",
        "stance": "等 / 防守备选",
        "catalyst": "公告：股份回购进展；新闻涉及煤炭行业资金流入、回购、分拆物泊科技进展",
        "risk": "成交额 21.28 亿，换手 1.94%，PE TTM 11.93",
        "action_hint": "等待；若作为组合防守仓，轻仓 15%-20%。",
        "status": "ok"
      },
      {
        "symbol": "603308",
        "name": "应流股份",
        "groups": [
          "theme_rotation_watch"
        ],
        "group_labels": [
          "题材轮动观察"
        ],
        "original_text": "# 应流股份（603308）— 观察\n\n| 项 | 判断 | 数据 |\n|---|---|---|\n| 催化 | 高端装备/通用设备属性，但本次指标层不完整；公告主要为权益分派和可转债转股价格调整，偏中性 | 公告：2025 年年度权益分派实施、调整“应流转债”转股价格、可转债转股结果 |\n| 尾盘 | 尾盘走弱，冲高后回落 | 14:30 后 62.98→62.58，方向 -0.64%，尾盘成交约 1.34 亿 |\n| 板块 | 明显强于通用设备行业，但行业本身偏弱 | 个股 +2.96%，通用设备行业 -2.20%，相对强弱 +5.16pct |\n| 类型 | 高价高端装备趋势票，流动性较好 | 成交额 16.33 亿，换手 3.78%，PE TTM 88.41 |\n| 日线 | 近 30 日 -14.94%，仍处修复，不是明确主升 | 当日高 65.50，收 62.58 |\n| 上涨概率 | 中等偏低，估计 46%-51% | 相对行业强，但尾盘回落 + 数据不完整降权 |\n\n**一句话判断：** 应流股份当天相对强，但尾盘回落明显，且公告不是强催化，新开隔夜不优先。\n\n**交易计划：**\n- 技术面：强弱线 62.50，风险线 61.00，压力区 65.50-66.86。\n- 消息面：权益分派/转债价格调整偏中性，不足以支撑隔夜抢筹。\n- 赔率：若次日高端装备继续强，有修复机会；但尾盘弱说明先手资金不够坚决。\n- 仓位：观察，不建议新开隔夜核心仓。\n- 次日操作：次日冲高预估约 0.5%-3%；高开冲 64.50-65.50 无量先减；跌破 61 放弃。\n\n---",
        "summary_short": "结论观察；催化公告：2025 年年度权益分派实施、调整“应流转债”转股价格、可转债转股结果；尾盘14:30 后 62.98→62.58，方向 -0.64%，尾盘成交约 1.34 亿",
        "stance": "观察",
        "catalyst": "公告：2025 年年度权益分派实施、调整“应流转债”转股价格、可转债转股结果",
        "risk": "成交额 16.33 亿，换手 3.78%，PE TTM 88.41",
        "action_hint": "观察，不建议新开隔夜核心仓。",
        "status": "ok"
      }
    ],
    "final_ranking": {
      "items": [
        {
          "rank": 1,
          "symbol": "002353",
          "name": "杰瑞股份",
          "verdict": "结论",
          "text": "可干（轻仓核心）；当日 +6.40%，强于专用设备行业 7.90pct，成交 40.17 亿，7月3日龙虎榜净买入和昨日涨停记忆提供短线辨识度；缺点是尾盘仅 +0.08%，不是尾盘继续抢筹。"
        },
        {
          "rank": 2,
          "symbol": "603496",
          "name": "恒为科技",
          "verdict": "结论",
          "text": "可干（轻仓）；AI/算力/信创标签清晰，当日 +5.50%，强于 IT设备行业 4.05pct，14:30 后继续上推 +0.76%；缺点是 30 日仍跌 10.89%，属于修复反抽而非长期主升。"
        },
        {
          "rank": 3,
          "symbol": "001268",
          "name": "联合精密",
          "verdict": "结论",
          "text": "可干（试错轻仓）；14:30 后 +1.43%，尾盘主动性最强之一，强于通用设备行业 4.81pct，并有“昨日涨停/昨日首板”标签；缺点是成交额仅 1.81 亿、弹性大但稳定性弱。"
        },
        {
          "rank": 4,
          "symbol": "600188",
          "name": "兖矿能源",
          "verdict": "结论",
          "text": "等 / 防守备选；当日 +5.62%，煤炭行业同步强势，回购进展与高分红属性提供防守支撑；但尾盘 -0.05%，更像行业轮动和价值修复，不是强短线抢筹。"
        },
        {
          "rank": 5,
          "symbol": "000048",
          "name": "京基智农",
          "verdict": "结论",
          "text": "等；14:30 后 +2.49%，尾盘最强，但近 30 日 +62.37% 已明显高位，且弱于养殖业行业 1.72pct，担保余额公告提示财务杠杆风险。"
        },
        {
          "rank": 6,
          "symbol": "000060",
          "name": "中金岭南",
          "verdict": "结论",
          "text": "观察；有 2026 半年度业绩预告、资源/有色属性，强于工业金属行业 2.70pct；但尾盘 -0.27%，且新闻提示“未涉及高端 PCB 微钻孔板相关业务”，AI/PCB误读预期需要降温。"
        },
        {
          "rank": 7,
          "symbol": "603308",
          "name": "应流股份",
          "verdict": "结论",
          "text": "观察；强于通用设备行业 5.16pct，成交 16.33 亿，有高端装备属性；但尾盘 -0.64%，公告主要为权益分派/可转债转股价格调整，且指标层不完整，隔夜不优先。"
        },
        {
          "rank": 8,
          "symbol": "002588",
          "name": "史丹利",
          "verdict": "结论",
          "text": "观察；个股 +2.75%，强于农用化工行业 2.41pct，低估值/化肥属性有防守性；但尾盘仅 +0.12%、成交 1.82 亿，短线攻击性不足。"
        },
        {
          "rank": 9,
          "symbol": "002850",
          "name": "科达利",
          "verdict": "结论",
          "text": "放弃；虽然新能源车/储能/固态电池标签强、近 30 日 +13.25%，但当日 -0.96%、尾盘 -1.06%，高位兑现明显，不适合新开隔夜。"
        },
        {
          "rank": 10,
          "symbol": "002150",
          "name": "正泰电源",
          "verdict": "结论",
          "text": "放弃；当日 -0.67%、尾盘 -0.19%、近 30 日 -19.93%，光伏储能链仍偏弱，公告/新闻更多是股权转让和公司事项，不构成强进攻催化。"
        },
        {
          "rank": 11,
          "symbol": "603317",
          "name": "天味食品",
          "verdict": "结论",
          "text": "放弃；调味品防守属性强但短线无催化，当日 +1.35%、尾盘 -0.49%，行业相对强弱仅 +0.21pct，不符合新开隔夜仓的弹性要求。"
        }
      ],
      "summary": "建议组合：若必须新开隔夜，只考虑 2-3 只轻仓分散：002353 杰瑞股份 + 603496 恒为科技 + 001268 联合精密。单票均按试错仓处理；若次日竞价不及预期，宁可不开仓或快速降仓。"
    },
    "file": {
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-06\\overnight-report-brief.close.json",
      "relative_path": "runs/2026-07-06/overnight-report-brief.close.json",
      "exists": true,
      "size": 58131,
      "modified_at": "2026-07-06T15:01:11+08:00",
      "sha256": "dd10bc8df51bc52c27d3cd1e2b42fefb78cbe2383a8859d9a6d8ca8210d1397e"
    }
  },
  "paper_trade": {
    "status": "missing",
    "ledger_status": "missing",
    "summary_status": "missing",
    "artifact_scope": "canonical",
    "date": "2026-07-07",
    "source_close_date": "",
    "ledger_matches_selected_close": true,
    "summary": {},
    "formal_targets": [],
    "records": [],
    "formal_records": [],
    "records_count": 0,
    "files": {
      "ledger": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\paper-trade-ledger.json",
        "relative_path": "paper-trade-ledger.json",
        "exists": false
      },
      "summary": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\paper-trade-summary.json",
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
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\rule-upgrade-proposals.json",
        "relative_path": "rule-upgrade-proposals.json",
        "exists": false
      },
      "approvals": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\rule-upgrade-approvals.json",
        "relative_path": "rule-upgrade-approvals.json",
        "exists": false
      },
      "learning_validation": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\learning-validation.json",
        "relative_path": "learning-validation.json",
        "exists": false
      },
      "implementation": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\rule-upgrade-implementation.json",
        "relative_path": "rule-upgrade-implementation.json",
        "exists": false
      }
    }
  },
  "trader_review": {
    "schema_version": "trader_review_workbench.v1",
    "status": "missing",
    "date": "2026-07-07",
    "title": "交易员复盘工作台",
    "one_liner": "正式票收益样本不足，复盘只做资料不足标记。 正式票收益偏弱但证据不足以证明选股逻辑失效，先按纪律内亏损和数据/执行缺口拆分。",
    "market_tone_label": "偏弱复盘",
    "emotion_score": 48,
    "formal_sample_count": 0,
    "side_channel_sample_count": 0,
    "formal_return_text": "正式票收益样本不足，复盘只做资料不足标记。",
    "side_return_text": "旁路样本收益未完整定价，只能继续观察。",
    "return_source_close_date": "2026-07-07",
    "return_backfill_date": "2026-07-07",
    "return_context_text": "2026-07-07 当前样本",
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
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\paper-trade-summary.json",
        "relative_path": "paper-trade-summary.json",
        "exists": false
      },
      "reverse_miss": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\reverse-miss.json",
        "relative_path": "reverse-miss.json",
        "exists": false
      },
      "ultra_short_review": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\ultra-short-review.json",
        "relative_path": "ultra-short-review.json",
        "exists": false
      },
      "longxia_second_review": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\second-review.longxia.review.json",
        "relative_path": "second-review.longxia.review.json",
        "exists": false
      },
      "longxia_second_review_validation": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\longxia-second-review-validation.json",
        "relative_path": "longxia-second-review-validation.json",
        "exists": false
      },
      "rule_upgrade_proposals": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\rule-upgrade-proposals.json",
        "relative_path": "rule-upgrade-proposals.json",
        "exists": false
      },
      "review_markdown": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\review-report.md",
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
            "计划时间：2026-07-07T14:50+08:00",
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
          "result_cn": "盘前预取产物已生成：昨日尾盘模拟对象 2 只，授权新闻 33 条，授权公告 10 条。",
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-news.json",
              "modified_at": "2026-07-07T09:00:10+08:00",
              "size": 73319,
              "sha256": "83f312136953a77b571e8def4a4b396a39515e71dac1ce83941f0b1052ef53c6"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-notices.json",
              "modified_at": "2026-07-07T09:00:22+08:00",
              "size": 37353,
              "sha256": "0d134a76f9c7f23106daf4b3273a475c766e5f8ac0f18a462bb0bac276198b19"
            },
            {
              "role": "read",
              "file": "outer-gate.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\outer-gate.morning.json",
              "modified_at": "2026-07-07T09:36:32+08:00",
              "size": 22094,
              "sha256": "89c5309f3bb91b283035190a35958a08e39100fab9c1f4ad7e9e298d94758448"
            },
            {
              "role": "write",
              "file": "morning-precheck.prefetch.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-precheck.prefetch.json",
              "modified_at": "2026-07-07T09:37:17+08:00",
              "size": 3974,
              "sha256": "d113200953e97a803d68c3005f3d5562ce94cbea37ef324c46818c4073f34b53"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "盘前预取产物已生成：昨日尾盘模拟对象 2 只，授权新闻 33 条，授权公告 10 条。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "morning-precheck.prefetch.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-precheck.prefetch.json",
                  "modified_at": "2026-07-07T09:37:17+08:00",
                  "size": 3974,
                  "sha256": "d113200953e97a803d68c3005f3d5562ce94cbea37ef324c46818c4073f34b53"
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
          "result_cn": "风险快检产物已生成：继续持有 2 只，观察 0 只，减仓 0 只，退出 0 只。",
          "missing_or_risk_cn": [
            "补充行情快照缺失：market-data.json 未生成，系统已避免偷读其他时段文件"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "morning-precheck.prefetch.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-precheck.prefetch.json",
              "modified_at": "2026-07-07T09:37:17+08:00",
              "size": 3974,
              "sha256": "d113200953e97a803d68c3005f3d5562ce94cbea37ef324c46818c4073f34b53"
            },
            {
              "role": "read",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\technical-check.morning.json",
              "modified_at": "2026-07-07T09:37:16+08:00",
              "size": 22812,
              "sha256": "97cafc801e1f094521b33ad59b0785593449b68abeb2cd69fbf0adf93814912b"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-risk-precheck.json",
              "modified_at": "2026-07-07T09:37:17+08:00",
              "size": 5160,
              "sha256": "983f3733402e20092d613f33cb42424fbcb84d182d40a39551f68eb2b6dc0afc"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "风险快检产物已生成：继续持有 2 只，观察 0 只，减仓 0 只，退出 0 只。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "morning-risk-precheck.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-risk-precheck.json",
                  "modified_at": "2026-07-07T09:37:17+08:00",
                  "size": 5160,
                  "sha256": "983f3733402e20092d613f33cb42424fbcb84d182d40a39551f68eb2b6dc0afc"
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
          "source_method_cn": "通过 morning-report 流程读取真实前置收盘报：runs/2026-07-06/close-report.json。",
          "read_files": [
            "runs/2026-07-06/close-report.json",
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
              "file": "runs/2026-07-06/close-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-06\\close-report.json",
              "modified_at": "2026-07-06T14:55:00+08:00",
              "size": 13168301,
              "sha256": "2627bd70746bebe2520c49351750e7e3f7ef262fff2812d6399d8f5fe081e174"
            },
            {
              "role": "read",
              "file": "workflow-manifest.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\workflow-manifest.morning.json",
              "modified_at": "2026-07-07T09:46:45+08:00",
              "size": 98243,
              "sha256": "ff11d521ed66eaddf5a80ee27ae6a6cfe1e33cf0679ef7dab68e72c5519d529f"
            },
            {
              "role": "write",
              "file": "inherited-pool.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\inherited-pool.json",
              "modified_at": "2026-07-07T09:36:02+08:00",
              "size": 43328,
              "sha256": "b5d232f57ef67347f382c719c18f86ccfef47262e1e0a9837da295baa5dd1390"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\inherited-pool.json",
                  "modified_at": "2026-07-07T09:36:02+08:00",
                  "size": 43328,
                  "sha256": "b5d232f57ef67347f382c719c18f86ccfef47262e1e0a9837da295baa5dd1390"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\outer-skill-output.morning.txt",
              "modified_at": "2026-07-07T09:36:32+08:00",
              "size": 2311,
              "sha256": "8abd188aa3829c175d63ee8bc2d716321f8111ba85de8a413ac1f9b12a585a3e"
            },
            {
              "role": "write",
              "file": "outer-gate.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "outer-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\outer-gate.morning.json",
              "modified_at": "2026-07-07T09:36:32+08:00",
              "size": 22094,
              "sha256": "89c5309f3bb91b283035190a35958a08e39100fab9c1f4ad7e9e298d94758448"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\outer-gate.morning.json",
                  "modified_at": "2026-07-07T09:36:32+08:00",
                  "size": 22094,
                  "sha256": "89c5309f3bb91b283035190a35958a08e39100fab9c1f4ad7e9e298d94758448"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\domestic-gate.morning.json",
              "modified_at": "2026-07-07T09:37:03+08:00",
              "size": 252768,
              "sha256": "c1fb4c413ed7b43da449272f4bec61d25e9a8e97325f27bd89fd955d09a27693"
            },
            {
              "role": "write",
              "file": "domestic-gate.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "domestic-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\domestic-gate.morning.json",
              "modified_at": "2026-07-07T09:37:03+08:00",
              "size": 252768,
              "sha256": "c1fb4c413ed7b43da449272f4bec61d25e9a8e97325f27bd89fd955d09a27693"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\domestic-gate.morning.json",
                  "modified_at": "2026-07-07T09:37:03+08:00",
                  "size": 252768,
                  "sha256": "c1fb4c413ed7b43da449272f4bec61d25e9a8e97325f27bd89fd955d09a27693"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\emotion-trend-gate.morning.json",
              "modified_at": "2026-07-07T09:37:15+08:00",
              "size": 17619,
              "sha256": "08407909e567013b1f7ec03ef8d29811b1afcf5445f2a1ab8596cc4806a076c9"
            },
            {
              "role": "write",
              "file": "emotion-trend-gate.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "emotion-trend-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\emotion-trend-gate.morning.json",
              "modified_at": "2026-07-07T09:37:15+08:00",
              "size": 17619,
              "sha256": "08407909e567013b1f7ec03ef8d29811b1afcf5445f2a1ab8596cc4806a076c9"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\emotion-trend-gate.morning.json",
                  "modified_at": "2026-07-07T09:37:15+08:00",
                  "size": 17619,
                  "sha256": "08407909e567013b1f7ec03ef8d29811b1afcf5445f2a1ab8596cc4806a076c9"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-report.json",
              "modified_at": "2026-07-07T09:37:50+08:00",
              "size": 569308,
              "sha256": "f5aa85b2d3e8e819cfb6c889716452e1e261fa49a758b67d095eab998cb47ea5"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-report.json",
                  "modified_at": "2026-07-07T09:37:50+08:00",
                  "size": 569308,
                  "sha256": "f5aa85b2d3e8e819cfb6c889716452e1e261fa49a758b67d095eab998cb47ea5"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\candidate-score.morning.json",
              "modified_at": "2026-07-07T09:37:15+08:00",
              "size": 136801,
              "sha256": "d8ddcab989d0cda08a5ca8728f701526034758e9a17c62fa558c16f7f49c5e23"
            },
            {
              "role": "write",
              "file": "sector-split.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "sector-split.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\sector-split.morning.json",
              "modified_at": "2026-07-07T09:37:16+08:00",
              "size": 120327,
              "sha256": "71c3d334cd5059662a195b90235e035ca35d80aeee05ff0058e8f467b2663cdc"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\sector-split.morning.json",
                  "modified_at": "2026-07-07T09:37:16+08:00",
                  "size": 120327,
                  "sha256": "71c3d334cd5059662a195b90235e035ca35d80aeee05ff0058e8f467b2663cdc"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\candidate-score.morning.json",
              "modified_at": "2026-07-07T09:37:15+08:00",
              "size": 136801,
              "sha256": "d8ddcab989d0cda08a5ca8728f701526034758e9a17c62fa558c16f7f49c5e23"
            },
            {
              "role": "write",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\technical-check.morning.json",
              "modified_at": "2026-07-07T09:37:16+08:00",
              "size": 22812,
              "sha256": "97cafc801e1f094521b33ad59b0785593449b68abeb2cd69fbf0adf93814912b"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\technical-check.morning.json",
                  "modified_at": "2026-07-07T09:37:16+08:00",
                  "size": 22812,
                  "sha256": "97cafc801e1f094521b33ad59b0785593449b68abeb2cd69fbf0adf93814912b"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-news.json",
              "modified_at": "2026-07-07T09:00:10+08:00",
              "size": 73319,
              "sha256": "83f312136953a77b571e8def4a4b396a39515e71dac1ce83941f0b1052ef53c6"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-notices.json",
              "modified_at": "2026-07-07T09:00:22+08:00",
              "size": 37353,
              "sha256": "0d134a76f9c7f23106daf4b3273a475c766e5f8ac0f18a462bb0bac276198b19"
            },
            {
              "role": "read",
              "file": "domestic-gate.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "domestic-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\domestic-gate.morning.json",
              "modified_at": "2026-07-07T09:37:03+08:00",
              "size": 252768,
              "sha256": "c1fb4c413ed7b43da449272f4bec61d25e9a8e97325f27bd89fd955d09a27693"
            },
            {
              "role": "read",
              "file": "sector-split.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "sector-split.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\sector-split.morning.json",
              "modified_at": "2026-07-07T09:37:16+08:00",
              "size": 120327,
              "sha256": "71c3d334cd5059662a195b90235e035ca35d80aeee05ff0058e8f467b2663cdc"
            },
            {
              "role": "read",
              "file": "candidate-score.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "candidate-score.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\candidate-score.morning.json",
              "modified_at": "2026-07-07T09:37:15+08:00",
              "size": 136801,
              "sha256": "d8ddcab989d0cda08a5ca8728f701526034758e9a17c62fa558c16f7f49c5e23"
            },
            {
              "role": "read",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\technical-check.morning.json",
              "modified_at": "2026-07-07T09:37:16+08:00",
              "size": 22812,
              "sha256": "97cafc801e1f094521b33ad59b0785593449b68abeb2cd69fbf0adf93814912b"
            },
            {
              "role": "write",
              "file": "research-brief.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\research-brief.json",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 5356,
              "sha256": "6c69e0052beaf73816ae6170fcb15d21e006acef6a51ab025cc5307bc1bdbe20"
            },
            {
              "role": "write",
              "file": "research-brief.md",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\research-brief.md",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 1390,
              "sha256": "29cb746a1be26e171e6e373d3892371cf9ff08f03b2b99f2bd792815b2e4a149"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\research-brief.json",
                  "modified_at": "2026-07-07T11:36:35+08:00",
                  "size": 5356,
                  "sha256": "6c69e0052beaf73816ae6170fcb15d21e006acef6a51ab025cc5307bc1bdbe20"
                },
                {
                  "role": "write",
                  "file": "research-brief.md",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\research-brief.md",
                  "modified_at": "2026-07-07T11:36:35+08:00",
                  "size": 1390,
                  "sha256": "29cb746a1be26e171e6e373d3892371cf9ff08f03b2b99f2bd792815b2e4a149"
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
          "result_cn": "新闻/公告摘要完成：正面 9 条，风险 21 条，谨慎/中性 20 条。",
          "missing_or_risk_cn": [
            "新闻/公告摘要：正面 9 条，风险 21 条，谨慎/中性 20 条。",
            "有负面/风险关键词，正式报告只作风险提示，是否卡票仍看公告排雷硬规则。",
            "有负面/风险关键词，正式报告只作风险提示，是否卡票仍看公告排雷硬规则。"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "authorized-news.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-news.json",
              "modified_at": "2026-07-07T09:00:10+08:00",
              "size": 73319,
              "sha256": "83f312136953a77b571e8def4a4b396a39515e71dac1ce83941f0b1052ef53c6"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-notices.json",
              "modified_at": "2026-07-07T09:00:22+08:00",
              "size": 37353,
              "sha256": "0d134a76f9c7f23106daf4b3273a475c766e5f8ac0f18a462bb0bac276198b19"
            },
            {
              "role": "read",
              "file": "candidate-notice-scan.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\candidate-notice-scan.morning.json",
              "modified_at": "2026-07-07T09:37:49+08:00",
              "size": 13698,
              "sha256": "514291835335dd1c4c188034e069ea95c8d111461bc5db58c73f4b7f82b96c14"
            },
            {
              "role": "read",
              "file": "research-brief.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\research-brief.json",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 5356,
              "sha256": "6c69e0052beaf73816ae6170fcb15d21e006acef6a51ab025cc5307bc1bdbe20"
            },
            {
              "role": "read",
              "file": "domestic-intelligence.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\domestic-intelligence.morning.json",
              "modified_at": "2026-07-07T09:37:17+08:00",
              "size": 5426,
              "sha256": "a9a4e3d98e92792c908153c36923763498fdca7ae77eab86e20946bd340f28f6"
            },
            {
              "role": "write",
              "file": "news-notice-sentiment.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\news-notice-sentiment.morning.json",
              "modified_at": "2026-07-07T09:37:49+08:00",
              "size": 32791,
              "sha256": "986237752b0113ae1ac67866d79fcda4ace39b38ef1246b3e361643cf17ced1c"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "新闻/公告摘要完成：正面 9 条，风险 21 条，谨慎/中性 20 条。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "news-notice-sentiment.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\news-notice-sentiment.morning.json",
                  "modified_at": "2026-07-07T09:37:49+08:00",
                  "size": 32791,
                  "sha256": "986237752b0113ae1ac67866d79fcda4ace39b38ef1246b3e361643cf17ced1c"
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
          "result_cn": "国内信息增强已整理：当天新增证据 5 条，A股政策/产业 5 条，A股公告 0 条，直接关联自选股 0 条；催化状态 已确认催化，时效 当日新催化。",
          "missing_or_risk_cn": [
            "增强层只解释国内事件、板块和自选股关联，不新增股票，不改 Top3/A/B，不改 handoff",
            "当前展示方向：新型城镇、BIPV概念、节能环保",
            "已单独隔离：全球市场摘要 5 条，不写入正式国内催化"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "authorized-news.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-news.json",
              "modified_at": "2026-07-07T09:00:10+08:00",
              "size": 73319,
              "sha256": "83f312136953a77b571e8def4a4b396a39515e71dac1ce83941f0b1052ef53c6"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-notices.json",
              "modified_at": "2026-07-07T09:00:22+08:00",
              "size": 37353,
              "sha256": "0d134a76f9c7f23106daf4b3273a475c766e5f8ac0f18a462bb0bac276198b19"
            },
            {
              "role": "read",
              "file": "domestic-gate.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "domestic-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\domestic-gate.morning.json",
              "modified_at": "2026-07-07T09:37:03+08:00",
              "size": 252768,
              "sha256": "c1fb4c413ed7b43da449272f4bec61d25e9a8e97325f27bd89fd955d09a27693"
            },
            {
              "role": "read",
              "file": "market-mainline.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "market-mainline.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\market-mainline.morning.json",
              "modified_at": "2026-07-07T09:36:37+08:00",
              "size": 95575,
              "sha256": "be3afe6cd316efde68458f9dd23019668b1db8e95fb56cf7a7c555282aff9aea"
            },
            {
              "role": "read",
              "file": "sector-split.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "sector-split.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\sector-split.morning.json",
              "modified_at": "2026-07-07T09:37:16+08:00",
              "size": 120327,
              "sha256": "71c3d334cd5059662a195b90235e035ca35d80aeee05ff0058e8f467b2663cdc"
            },
            {
              "role": "read",
              "file": "candidate-score.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "candidate-score.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\candidate-score.morning.json",
              "modified_at": "2026-07-07T09:37:15+08:00",
              "size": 136801,
              "sha256": "d8ddcab989d0cda08a5ca8728f701526034758e9a17c62fa558c16f7f49c5e23"
            },
            {
              "role": "read",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\technical-check.morning.json",
              "modified_at": "2026-07-07T09:37:16+08:00",
              "size": 22812,
              "sha256": "97cafc801e1f094521b33ad59b0785593449b68abeb2cd69fbf0adf93814912b"
            },
            {
              "role": "write",
              "file": "domestic-intelligence.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\domestic-intelligence.morning.json",
              "modified_at": "2026-07-07T09:37:17+08:00",
              "size": 5426,
              "sha256": "a9a4e3d98e92792c908153c36923763498fdca7ae77eab86e20946bd340f28f6"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "国内信息增强已整理：当天新增证据 5 条，A股政策/产业 5 条，A股公告 0 条，直接关联自选股 0 条；催化状态 已确认催化，时效 当日新催化。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "domestic-intelligence.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\domestic-intelligence.morning.json",
                  "modified_at": "2026-07-07T09:37:17+08:00",
                  "size": 5426,
                  "sha256": "a9a4e3d98e92792c908153c36923763498fdca7ae77eab86e20946bd340f28f6"
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
          "result_cn": "金融 skill 增强清单已生成：题材/资金 0 只，公告/股本风险 0 只，交易计划 2 只，复盘重点 10 只。",
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\candidate-score.morning.json",
              "modified_at": "2026-07-07T09:37:15+08:00",
              "size": 136801,
              "sha256": "d8ddcab989d0cda08a5ca8728f701526034758e9a17c62fa558c16f7f49c5e23"
            },
            {
              "role": "read",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\technical-check.morning.json",
              "modified_at": "2026-07-07T09:37:16+08:00",
              "size": 22812,
              "sha256": "97cafc801e1f094521b33ad59b0785593449b68abeb2cd69fbf0adf93814912b"
            },
            {
              "role": "write",
              "file": "external-skill-enrichment.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\external-skill-enrichment.morning.json",
              "modified_at": "2026-07-07T09:37:50+08:00",
              "size": 7992,
              "sha256": "28d419d6efcae652a1af87a66e62c0810b146da15aa885dfa44eedb41bf94dcd"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "金融 skill 增强清单已生成：题材/资金 0 只，公告/股本风险 0 只，交易计划 2 只，复盘重点 10 只。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "external-skill-enrichment.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\external-skill-enrichment.morning.json",
                  "modified_at": "2026-07-07T09:37:50+08:00",
                  "size": 7992,
                  "sha256": "28d419d6efcae652a1af87a66e62c0810b146da15aa885dfa44eedb41bf94dcd"
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
          "result_cn": "金融 skill 深挖已生成：重点票 7 只，Top3 2 只，A类 3 只，B类 0 只，候选评分前三 3 只。",
          "missing_or_risk_cn": [
            "深挖只补主线、题材、资金、事件、股本风险、板块操盘、产业链、主营匹配、仓位节奏和复盘证据，不改 Top3、不改 handoff"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "external-skill-enrichment.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\external-skill-enrichment.morning.json",
              "modified_at": "2026-07-07T09:37:50+08:00",
              "size": 7992,
              "sha256": "28d419d6efcae652a1af87a66e62c0810b146da15aa885dfa44eedb41bf94dcd"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\external-skill-deep-dive.morning.json",
              "modified_at": "2026-07-07T09:37:50+08:00",
              "size": 36833,
              "sha256": "0b1b437081a4cd32663672df7a396e302f5ffe6777f91453ea574d70626ed833"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "金融 skill 深挖已生成：重点票 7 只，Top3 2 只，A类 3 只，B类 0 只，候选评分前三 3 只。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "external-skill-deep-dive.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\external-skill-deep-dive.morning.json",
                  "modified_at": "2026-07-07T09:37:50+08:00",
                  "size": 36833,
                  "sha256": "0b1b437081a4cd32663672df7a396e302f5ffe6777f91453ea574d70626ed833"
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
          "result_cn": "四层/旁路策略对比账本已生成：正式 Top3 2 只，A类主线/题材 3 只，B类技术/资金 0 只，候选评分前排 3 只，低位回流观察 3 只，早盘驱动观察 3 只，隔夜涨停观察 3 只，题材轮动观察 3 只，收盘中强承接观察 3 只。 面板样本跟踪 23 条，本时段快照命中 23 条。",
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-report.json",
              "modified_at": "2026-07-07T09:37:50+08:00",
              "size": 569308,
              "sha256": "f5aa85b2d3e8e819cfb6c889716452e1e261fa49a758b67d095eab998cb47ea5"
            },
            {
              "role": "write",
              "file": "four-layer-tracking.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.morning.json",
              "modified_at": "2026-07-07T09:37:49+08:00",
              "size": 134420,
              "sha256": "14f96bb9379ae25f1ad6ac05e49d3f622fec708a1f9b421a043008a9c4eb1b38"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "四层/旁路策略对比账本已生成：正式 Top3 2 只，A类主线/题材 3 只，B类技术/资金 0 只，候选评分前排 3 只，低位回流观察 3 只，早盘驱动观察 3 只，隔夜涨停观察 3 只，题材轮动观察 3 只，收盘中强承接观察 3 只。 面板样本跟踪 23 条，本时段快照命中 23 条。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "four-layer-tracking.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.morning.json",
                  "modified_at": "2026-07-07T09:37:49+08:00",
                  "size": 134420,
                  "sha256": "14f96bb9379ae25f1ad6ac05e49d3f622fec708a1f9b421a043008a9c4eb1b38"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\raw-watchlist.morning.json",
              "modified_at": "2026-07-07T09:36:02+08:00",
              "size": 1875805,
              "sha256": "131528c0ac6afd3dea362d4aa4648679cecb1c42ef79fefad3b30d94434c9e80"
            },
            {
              "role": "read",
              "file": "filtered-pool.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\filtered-pool.morning.json",
              "modified_at": "2026-07-07T09:36:02+08:00",
              "size": 2374479,
              "sha256": "d88bdd82617ef6b5b504b29090e9bb2dedb6b8774220e8c6f89562ce9c4c05c9"
            },
            {
              "role": "read",
              "file": "authorized-news.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-news.json",
              "modified_at": "2026-07-07T09:00:10+08:00",
              "size": 73319,
              "sha256": "83f312136953a77b571e8def4a4b396a39515e71dac1ce83941f0b1052ef53c6"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-notices.json",
              "modified_at": "2026-07-07T09:00:22+08:00",
              "size": 37353,
              "sha256": "0d134a76f9c7f23106daf4b3273a475c766e5f8ac0f18a462bb0bac276198b19"
            },
            {
              "role": "read",
              "file": "candidate-notice-scan.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\candidate-notice-scan.morning.json",
              "modified_at": "2026-07-07T09:37:49+08:00",
              "size": 13698,
              "sha256": "514291835335dd1c4c188034e069ea95c8d111461bc5db58c73f4b7f82b96c14"
            },
            {
              "role": "write",
              "file": "data-acquisition-health.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-acquisition-health.morning.json",
              "modified_at": "2026-07-07T09:37:51+08:00",
              "size": 9428,
              "sha256": "89e046880e77b7469362f57cbc7a8af052595da88d596fc6d31e6b40e56fed4a"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-acquisition-health.morning.json",
                  "modified_at": "2026-07-07T09:37:51+08:00",
                  "size": 9428,
                  "sha256": "89e046880e77b7469362f57cbc7a8af052595da88d596fc6d31e6b40e56fed4a"
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
          "result_cn": "四套策略对比审计完成：正式 Top3 2 只，旁路样本 21 只，早盘表现缺口 23 只。",
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.morning.json",
              "modified_at": "2026-07-07T09:37:49+08:00",
              "size": 134420,
              "sha256": "14f96bb9379ae25f1ad6ac05e49d3f622fec708a1f9b421a043008a9c4eb1b38"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\strategy-benchmark.morning.json",
              "modified_at": "2026-07-07T09:37:51+08:00",
              "size": 10344,
              "sha256": "8bb7850e902c18e861aeeeeadae6903502d7f6bc289dc0dbda5bd29bd8802fc1"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "四套策略对比审计完成：正式 Top3 2 只，旁路样本 21 只，早盘表现缺口 23 只。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "strategy-benchmark.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\strategy-benchmark.morning.json",
                  "modified_at": "2026-07-07T09:37:51+08:00",
                  "size": 10344,
                  "sha256": "8bb7850e902c18e861aeeeeadae6903502d7f6bc289dc0dbda5bd29bd8802fc1"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-report.json",
              "modified_at": "2026-07-07T09:37:50+08:00",
              "size": 569308,
              "sha256": "f5aa85b2d3e8e819cfb6c889716452e1e261fa49a758b67d095eab998cb47ea5"
            },
            {
              "role": "read",
              "file": "candidate-score.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "candidate-score.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\candidate-score.morning.json",
              "modified_at": "2026-07-07T09:37:15+08:00",
              "size": 136801,
              "sha256": "d8ddcab989d0cda08a5ca8728f701526034758e9a17c62fa558c16f7f49c5e23"
            },
            {
              "role": "read",
              "file": "technical-check.morning.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\technical-check.morning.json",
              "modified_at": "2026-07-07T09:37:16+08:00",
              "size": 22812,
              "sha256": "97cafc801e1f094521b33ad59b0785593449b68abeb2cd69fbf0adf93814912b"
            },
            {
              "role": "read",
              "file": "data-acquisition-health.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-acquisition-health.morning.json",
              "modified_at": "2026-07-07T09:37:51+08:00",
              "size": 9428,
              "sha256": "89e046880e77b7469362f57cbc7a8af052595da88d596fc6d31e6b40e56fed4a"
            },
            {
              "role": "write",
              "file": "multi-role-review.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\multi-role-review.morning.json",
              "modified_at": "2026-07-07T09:37:51+08:00",
              "size": 4217,
              "sha256": "5802b93f8b1612a78b87ca34406c3f403ef608e611365a84822e1b042e131f4b"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\multi-role-review.morning.json",
                  "modified_at": "2026-07-07T09:37:51+08:00",
                  "size": 4217,
                  "sha256": "5802b93f8b1612a78b87ca34406c3f403ef608e611365a84822e1b042e131f4b"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-report.md",
              "modified_at": "2026-07-07T09:37:50+08:00",
              "size": 6265,
              "sha256": "5b3e6b63f9ed8f472cc3ad08ef135a154136fed4be56f71c4bffc68a60494f83"
            },
            {
              "role": "read",
              "file": "multi-role-review.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\multi-role-review.morning.json",
              "modified_at": "2026-07-07T09:37:51+08:00",
              "size": 4217,
              "sha256": "5802b93f8b1612a78b87ca34406c3f403ef608e611365a84822e1b042e131f4b"
            },
            {
              "role": "read",
              "file": "strategy-benchmark.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\strategy-benchmark.morning.json",
              "modified_at": "2026-07-07T09:37:51+08:00",
              "size": 10344,
              "sha256": "8bb7850e902c18e861aeeeeadae6903502d7f6bc289dc0dbda5bd29bd8802fc1"
            },
            {
              "role": "write",
              "file": "report-quality-audit.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\report-quality-audit.morning.json",
              "modified_at": "2026-07-07T09:37:51+08:00",
              "size": 1398,
              "sha256": "3372f5c2949c722f3236851b0715fd43919c902b9ce21c055639a117179244c9"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\report-quality-audit.morning.json",
                  "modified_at": "2026-07-07T09:37:51+08:00",
                  "size": 1398,
                  "sha256": "3372f5c2949c722f3236851b0715fd43919c902b9ce21c055639a117179244c9"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-report.json",
              "modified_at": "2026-07-07T09:37:50+08:00",
              "size": 569308,
              "sha256": "f5aa85b2d3e8e819cfb6c889716452e1e261fa49a758b67d095eab998cb47ea5"
            },
            {
              "role": "read",
              "file": "morning-precheck.prefetch.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-precheck.prefetch.json",
              "modified_at": "2026-07-07T09:37:17+08:00",
              "size": 3974,
              "sha256": "d113200953e97a803d68c3005f3d5562ce94cbea37ef324c46818c4073f34b53"
            },
            {
              "role": "read",
              "file": "morning-risk-precheck.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-risk-precheck.json",
              "modified_at": "2026-07-07T09:37:17+08:00",
              "size": 5160,
              "sha256": "983f3733402e20092d613f33cb42424fbcb84d182d40a39551f68eb2b6dc0afc"
            },
            {
              "role": "write",
              "file": "morning-report.md",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-report.md",
              "modified_at": "2026-07-07T09:37:50+08:00",
              "size": 6265,
              "sha256": "5b3e6b63f9ed8f472cc3ad08ef135a154136fed4be56f71c4bffc68a60494f83"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-report.md",
                  "modified_at": "2026-07-07T09:37:50+08:00",
                  "size": 6265,
                  "sha256": "5b3e6b63f9ed8f472cc3ad08ef135a154136fed4be56f71c4bffc68a60494f83"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-report.json",
              "modified_at": "2026-07-07T09:37:50+08:00",
              "size": 569308,
              "sha256": "f5aa85b2d3e8e819cfb6c889716452e1e261fa49a758b67d095eab998cb47ea5"
            },
            {
              "role": "read",
              "file": "morning-report.md",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-report.md",
              "modified_at": "2026-07-07T09:37:50+08:00",
              "size": 6265,
              "sha256": "5b3e6b63f9ed8f472cc3ad08ef135a154136fed4be56f71c4bffc68a60494f83"
            },
            {
              "role": "write",
              "file": "workflow-manifest.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\workflow-manifest.morning.json",
              "modified_at": "2026-07-07T09:46:45+08:00",
              "size": 98243,
              "sha256": "ff11d521ed66eaddf5a80ee27ae6a6cfe1e33cf0679ef7dab68e72c5519d529f"
            },
            {
              "role": "write",
              "file": "data-lineage.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-lineage.morning.json",
              "modified_at": "2026-07-07T09:37:51+08:00",
              "size": 55304,
              "sha256": "8fa6d25e912f170e94c2fec306baefbb6a69ef5b8d6d9cfe0d40dbcee4ef4428"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\workflow-manifest.morning.json",
                  "modified_at": "2026-07-07T09:46:45+08:00",
                  "size": 98243,
                  "sha256": "ff11d521ed66eaddf5a80ee27ae6a6cfe1e33cf0679ef7dab68e72c5519d529f"
                },
                {
                  "role": "write",
                  "file": "data-lineage.morning.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-lineage.morning.json",
                  "modified_at": "2026-07-07T09:37:51+08:00",
                  "size": 55304,
                  "sha256": "8fa6d25e912f170e94c2fec306baefbb6a69ef5b8d6d9cfe0d40dbcee4ef4428"
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
          "id": "read_morning",
          "order": 1,
          "title_cn": "读取早报对象",
          "plain_goal_cn": "读取早报留下的对象。午报只验证上午兑现情况，不重新选股。",
          "data_used_cn": [
            "早报验证对象",
            "早报风险提示"
          ],
          "source_method_cn": "通过 noon 流程读取真实前置早报 handoff：runs/2026-07-07/morning-report.json。",
          "read_files": [
            "runs/2026-07-07/morning-report.json",
            "workflow-manifest.morning.json"
          ],
          "write_files": [
            "noon-inherited-pool.json"
          ],
          "status": "ok",
          "result_cn": "午报只读取早报对象，不新增股票。",
          "missing_or_risk_cn": [
            "无关键缺失"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "runs/2026-07-07/morning-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-report.json",
              "modified_at": "2026-07-07T09:37:50+08:00",
              "size": 569308,
              "sha256": "f5aa85b2d3e8e819cfb6c889716452e1e261fa49a758b67d095eab998cb47ea5"
            },
            {
              "role": "read",
              "file": "workflow-manifest.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\workflow-manifest.morning.json",
              "modified_at": "2026-07-07T09:46:45+08:00",
              "size": 98243,
              "sha256": "ff11d521ed66eaddf5a80ee27ae6a6cfe1e33cf0679ef7dab68e72c5519d529f"
            },
            {
              "role": "write",
              "file": "noon-inherited-pool.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-inherited-pool.json",
              "modified_at": "2026-07-07T11:36:03+08:00",
              "size": 22608,
              "sha256": "3f8c18d31997d4a719bda17920ece8e253f738e232050a79a2069daa17531ea1"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "午报只读取早报对象，不新增股票。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "noon-inherited-pool.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-inherited-pool.json",
                  "modified_at": "2026-07-07T11:36:03+08:00",
                  "size": 22608,
                  "sha256": "3f8c18d31997d4a719bda17920ece8e253f738e232050a79a2069daa17531ea1"
                }
              ]
            }
          ]
        },
        {
          "id": "morning_verify",
          "order": 2,
          "title_cn": "上午兑现验证",
          "plain_goal_cn": "检查早报对象上午是否真的走强、承接是否还在。",
          "data_used_cn": [
            "上午涨跌幅",
            "承接",
            "冲高回落",
            "分时强弱"
          ],
          "source_method_cn": "通过 previous_report_verify.py 和 TDX 行情验证。",
          "read_files": [
            "noon-inherited-pool.json"
          ],
          "write_files": [
            "noon-report.json"
          ],
          "status": "ok",
          "result_cn": "上午没有兑现时，午后动作必须降级。",
          "missing_or_risk_cn": [
            "无关键缺失"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "noon-inherited-pool.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-inherited-pool.json",
              "modified_at": "2026-07-07T11:36:03+08:00",
              "size": 22608,
              "sha256": "3f8c18d31997d4a719bda17920ece8e253f738e232050a79a2069daa17531ea1"
            },
            {
              "role": "write",
              "file": "noon-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.json",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 687198,
              "sha256": "0a03f0c778f1daba6c0f70c42fe7617f2964d8f49bc7b82003bef85d2e4557fd"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "上午没有兑现时，午后动作必须降级。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "noon-report.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.json",
                  "modified_at": "2026-07-07T11:37:16+08:00",
                  "size": 687198,
                  "sha256": "0a03f0c778f1daba6c0f70c42fe7617f2964d8f49bc7b82003bef85d2e4557fd"
                }
              ]
            }
          ]
        },
        {
          "id": "gates_recheck",
          "order": 3,
          "title_cn": "三闸门复核",
          "plain_goal_cn": "午前重新看外围、国内、情绪趋势，作为下午仓位和节奏参考。",
          "data_used_cn": [
            "外围",
            "国内",
            "情绪/趋势"
          ],
          "source_method_cn": "复用并刷新三闸门产物。",
          "read_files": [
            "outer-gate.noon.json",
            "domestic-gate.noon.json",
            "emotion-trend-gate.noon.json"
          ],
          "write_files": [
            "gates-protocol.noon.json"
          ],
          "status": "missing",
          "result_cn": "两个以上逆风或关键证据缺失时，午后仓位和节奏保守；动作仍按执行引擎与候选自身风险处理。",
          "missing_or_risk_cn": [
            "未落盘文件：gates-protocol.noon.json"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "outer-gate.noon.json",
              "status": "ok",
              "exists": true,
              "requested_file": "outer-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\outer-gate.noon.json",
              "modified_at": "2026-07-07T11:36:07+08:00",
              "size": 22076,
              "sha256": "3738d8705b97d44dfde2dcab82fbf92dbf2301ec47cd7d5e0a7180f93966a8d9"
            },
            {
              "role": "read",
              "file": "domestic-gate.noon.json",
              "status": "ok",
              "exists": true,
              "requested_file": "domestic-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\domestic-gate.noon.json",
              "modified_at": "2026-07-07T11:36:31+08:00",
              "size": 330610,
              "sha256": "20d77b8af45a38ce362320d847085e949e71053b7366c8b9b46996169191af7a"
            },
            {
              "role": "read",
              "file": "emotion-trend-gate.noon.json",
              "status": "ok",
              "exists": true,
              "requested_file": "emotion-trend-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\emotion-trend-gate.noon.json",
              "modified_at": "2026-07-07T11:36:33+08:00",
              "size": 17908,
              "sha256": "ef082c1349e5bb0483fb5a83fb36ea36ae63f9e77efa95f5fc75637d99c4054e"
            },
            {
              "role": "write",
              "file": "gates-protocol.noon.json",
              "status": "period_snapshot_missing",
              "exists": false,
              "requested_file": "gates-protocol.json",
              "freshness_note": "本节点要求本时段专属快照；缺失时不引用可能被后续时段覆盖的通用文件。"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "两个以上逆风或关键证据缺失时，午后仓位和节奏保守；动作仍按执行引擎与候选自身风险处理。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "read",
                  "file": "outer-gate.noon.json",
                  "status": "ok",
                  "exists": true,
                  "requested_file": "outer-gate.json",
                  "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\outer-gate.noon.json",
                  "modified_at": "2026-07-07T11:36:07+08:00",
                  "size": 22076,
                  "sha256": "3738d8705b97d44dfde2dcab82fbf92dbf2301ec47cd7d5e0a7180f93966a8d9"
                },
                {
                  "role": "read",
                  "file": "domestic-gate.noon.json",
                  "status": "ok",
                  "exists": true,
                  "requested_file": "domestic-gate.json",
                  "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\domestic-gate.noon.json",
                  "modified_at": "2026-07-07T11:36:31+08:00",
                  "size": 330610,
                  "sha256": "20d77b8af45a38ce362320d847085e949e71053b7366c8b9b46996169191af7a"
                },
                {
                  "role": "read",
                  "file": "emotion-trend-gate.noon.json",
                  "status": "ok",
                  "exists": true,
                  "requested_file": "emotion-trend-gate.json",
                  "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\emotion-trend-gate.noon.json",
                  "modified_at": "2026-07-07T11:36:33+08:00",
                  "size": 17908,
                  "sha256": "ef082c1349e5bb0483fb5a83fb36ea36ae63f9e77efa95f5fc75637d99c4054e"
                }
              ]
            }
          ]
        },
        {
          "id": "intraday_layer",
          "order": 4,
          "title_cn": "盘中强弱分层",
          "plain_goal_cn": "把早报对象分成强、中、弱层，决定下午继续看谁和放弃谁。",
          "data_used_cn": [
            "强层",
            "中层",
            "弱层",
            "放弃名单"
          ],
          "source_method_cn": "通过午报结构化报告进行盘中分层。",
          "read_files": [
            "technical-check.noon.json"
          ],
          "write_files": [
            "noon-report.json"
          ],
          "status": "ok",
          "result_cn": "强弱分层只决定继续看谁，不重新开新名单。",
          "missing_or_risk_cn": [
            "无关键缺失"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "technical-check.noon.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\technical-check.noon.json",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 11994,
              "sha256": "23e526f09ccb310ab45e39c6579cf0bddd60b82c3d19d91f9719e4c912853449"
            },
            {
              "role": "write",
              "file": "noon-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.json",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 687198,
              "sha256": "0a03f0c778f1daba6c0f70c42fe7617f2964d8f49bc7b82003bef85d2e4557fd"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "强弱分层只决定继续看谁，不重新开新名单。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "noon-report.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.json",
                  "modified_at": "2026-07-07T11:37:16+08:00",
                  "size": 687198,
                  "sha256": "0a03f0c778f1daba6c0f70c42fe7617f2964d8f49bc7b82003bef85d2e4557fd"
                }
              ]
            }
          ]
        },
        {
          "id": "execution_engine",
          "order": 5,
          "title_cn": "执行引擎",
          "plain_goal_cn": "把盘中表现翻译成持有观察、只观察、减仓、退出或放弃参与等动作。",
          "data_used_cn": [
            "模拟持仓/观察对象",
            "盘中走势",
            "风控动作"
          ],
          "source_method_cn": "通过 build_execution_input.py 和 execution_engine.py 输出动作。",
          "read_files": [
            "execution-inputs.json"
          ],
          "write_files": [
            "execution-decision.json"
          ],
          "status": "ok",
          "result_cn": "执行引擎输出动作，不负责选新票。",
          "missing_or_risk_cn": [
            "无关键缺失"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "execution-inputs.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\execution-inputs.json",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 1700,
              "sha256": "e0538e5c12509cb0ae984776ffc5a7f44f29906177f531d0aa0e2d6d89c3c7d6"
            },
            {
              "role": "write",
              "file": "execution-decision.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\execution-decision.json",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 833,
              "sha256": "c09e3c5f413634feb4beef590574f2c1400fe46b86501136b819b9c7873aff10"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "执行引擎输出动作，不负责选新票。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "execution-decision.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\execution-decision.json",
                  "modified_at": "2026-07-07T11:36:35+08:00",
                  "size": 833,
                  "sha256": "c09e3c5f413634feb4beef590574f2c1400fe46b86501136b819b9c7873aff10"
                }
              ]
            }
          ]
        },
        {
          "id": "research_brief",
          "order": 6,
          "title_cn": "关键事件整理",
          "plain_goal_cn": "把上午事件、板块方向和风险整理成午报可读背景，不改变午后名单。",
          "data_used_cn": [
            "授权新闻",
            "授权公告",
            "上午异动",
            "板块方向",
            "执行结果"
          ],
          "source_method_cn": "通过 build_research_brief.py 只读已落盘文件整理；不取数、不选股、不改名单。",
          "read_files": [
            "authorized-news.json",
            "authorized-notices.json",
            "domestic-gate.noon.json",
            "sector-split.noon.json",
            "technical-check.noon.json"
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
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-news.json",
              "modified_at": "2026-07-07T09:00:10+08:00",
              "size": 73319,
              "sha256": "83f312136953a77b571e8def4a4b396a39515e71dac1ce83941f0b1052ef53c6"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-notices.json",
              "modified_at": "2026-07-07T09:00:22+08:00",
              "size": 37353,
              "sha256": "0d134a76f9c7f23106daf4b3273a475c766e5f8ac0f18a462bb0bac276198b19"
            },
            {
              "role": "read",
              "file": "domestic-gate.noon.json",
              "status": "ok",
              "exists": true,
              "requested_file": "domestic-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\domestic-gate.noon.json",
              "modified_at": "2026-07-07T11:36:31+08:00",
              "size": 330610,
              "sha256": "20d77b8af45a38ce362320d847085e949e71053b7366c8b9b46996169191af7a"
            },
            {
              "role": "read",
              "file": "sector-split.noon.json",
              "status": "ok",
              "exists": true,
              "requested_file": "sector-split.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\sector-split.noon.json",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 195601,
              "sha256": "0c1087c260b58d633d1b0c2f8ad6115d18f5ee13acc230615d10fdea8f08ef39"
            },
            {
              "role": "read",
              "file": "technical-check.noon.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\technical-check.noon.json",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 11994,
              "sha256": "23e526f09ccb310ab45e39c6579cf0bddd60b82c3d19d91f9719e4c912853449"
            },
            {
              "role": "write",
              "file": "research-brief.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\research-brief.json",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 5356,
              "sha256": "6c69e0052beaf73816ae6170fcb15d21e006acef6a51ab025cc5307bc1bdbe20"
            },
            {
              "role": "write",
              "file": "research-brief.md",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\research-brief.md",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 1390,
              "sha256": "29cb746a1be26e171e6e373d3892371cf9ff08f03b2b99f2bd792815b2e4a149"
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
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\research-brief.json",
                  "modified_at": "2026-07-07T11:36:35+08:00",
                  "size": 5356,
                  "sha256": "6c69e0052beaf73816ae6170fcb15d21e006acef6a51ab025cc5307bc1bdbe20"
                },
                {
                  "role": "write",
                  "file": "research-brief.md",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\research-brief.md",
                  "modified_at": "2026-07-07T11:36:35+08:00",
                  "size": 1390,
                  "sha256": "29cb746a1be26e171e6e373d3892371cf9ff08f03b2b99f2bd792815b2e4a149"
                }
              ]
            }
          ]
        },
        {
          "id": "news_notice_sentiment",
          "order": 7,
          "title_cn": "新闻/公告情绪摘要",
          "plain_goal_cn": "只读已落盘新闻和公告，归纳上午资料的正面、风险和中性倾向；不改变午后名单。",
          "data_used_cn": [
            "授权新闻",
            "授权公告",
            "候选公告排雷",
            "关键事件整理"
          ],
          "source_method_cn": "通过 build_news_notice_sentiment.py 只读已落盘新闻和公告，归纳正面/风险/中性；不取数、不选股、不改午后名单。",
          "read_files": [
            "authorized-news.json",
            "authorized-notices.json",
            "candidate-notice-scan.noon.json",
            "research-brief.json",
            "domestic-intelligence.noon.json"
          ],
          "write_files": [
            "news-notice-sentiment.noon.json"
          ],
          "status": "ok",
          "result_cn": "新闻/公告摘要完成：正面 9 条，风险 21 条，谨慎/中性 20 条。",
          "missing_or_risk_cn": [
            "新闻/公告摘要：正面 9 条，风险 21 条，谨慎/中性 20 条。",
            "有负面/风险关键词，正式报告只作风险提示，是否卡票仍看公告排雷硬规则。",
            "有负面/风险关键词，正式报告只作风险提示，是否卡票仍看公告排雷硬规则。"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "authorized-news.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-news.json",
              "modified_at": "2026-07-07T09:00:10+08:00",
              "size": 73319,
              "sha256": "83f312136953a77b571e8def4a4b396a39515e71dac1ce83941f0b1052ef53c6"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-notices.json",
              "modified_at": "2026-07-07T09:00:22+08:00",
              "size": 37353,
              "sha256": "0d134a76f9c7f23106daf4b3273a475c766e5f8ac0f18a462bb0bac276198b19"
            },
            {
              "role": "read",
              "file": "candidate-notice-scan.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\candidate-notice-scan.noon.json",
              "modified_at": "2026-07-07T11:37:15+08:00",
              "size": 13799,
              "sha256": "81ae2d2926b4398fa993de87f5521fa097b626bf52728a8a170e09b321cf61c7"
            },
            {
              "role": "read",
              "file": "research-brief.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\research-brief.json",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 5356,
              "sha256": "6c69e0052beaf73816ae6170fcb15d21e006acef6a51ab025cc5307bc1bdbe20"
            },
            {
              "role": "read",
              "file": "domestic-intelligence.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\domestic-intelligence.noon.json",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 4924,
              "sha256": "562fa38922784ec4eb25164bc5b3c58ae9ada5e01e65886b8c301963b573fc48"
            },
            {
              "role": "write",
              "file": "news-notice-sentiment.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\news-notice-sentiment.noon.json",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 32776,
              "sha256": "b0216ac843d92281119a900cf1f1423f50ae21ce77612a142f49d372b1d54c1e"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "新闻/公告摘要完成：正面 9 条，风险 21 条，谨慎/中性 20 条。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "news-notice-sentiment.noon.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\news-notice-sentiment.noon.json",
                  "modified_at": "2026-07-07T11:37:16+08:00",
                  "size": 32776,
                  "sha256": "b0216ac843d92281119a900cf1f1423f50ae21ce77612a142f49d372b1d54c1e"
                }
              ]
            }
          ]
        },
        {
          "id": "domestic_intelligence",
          "order": 8,
          "title_cn": "国内信息增强",
          "plain_goal_cn": "把上午国内事件映射到早报继承对象，只解释变化，不新增午后名单。",
          "data_used_cn": [
            "上午国内新闻",
            "公告/业绩事件",
            "板块兑现变化",
            "早报继承对象"
          ],
          "source_method_cn": "通过 build_domestic_intelligence.py 只读已落盘产物映射到早报继承对象；不取数、不选股、不改午后名单。",
          "read_files": [
            "authorized-news.json",
            "authorized-notices.json",
            "domestic-gate.noon.json",
            "market-mainline.noon.json",
            "sector-split.noon.json",
            "candidate-score.noon.json",
            "technical-check.noon.json"
          ],
          "write_files": [
            "domestic-intelligence.noon.json"
          ],
          "status": "ok",
          "result_cn": "国内信息增强已整理：当天新增证据 5 条，A股政策/产业 5 条，A股公告 0 条，直接关联自选股 0 条；催化状态 已确认催化，时效 当日新催化。",
          "missing_or_risk_cn": [
            "增强层只解释国内事件、板块和自选股关联，不新增股票，不改 Top3/A/B，不改 handoff",
            "当前展示方向：先进封装、AI芯片、AI",
            "已单独隔离：全球市场摘要 5 条，不写入正式国内催化"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "authorized-news.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-news.json",
              "modified_at": "2026-07-07T09:00:10+08:00",
              "size": 73319,
              "sha256": "83f312136953a77b571e8def4a4b396a39515e71dac1ce83941f0b1052ef53c6"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-notices.json",
              "modified_at": "2026-07-07T09:00:22+08:00",
              "size": 37353,
              "sha256": "0d134a76f9c7f23106daf4b3273a475c766e5f8ac0f18a462bb0bac276198b19"
            },
            {
              "role": "read",
              "file": "domestic-gate.noon.json",
              "status": "ok",
              "exists": true,
              "requested_file": "domestic-gate.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\domestic-gate.noon.json",
              "modified_at": "2026-07-07T11:36:31+08:00",
              "size": 330610,
              "sha256": "20d77b8af45a38ce362320d847085e949e71053b7366c8b9b46996169191af7a"
            },
            {
              "role": "read",
              "file": "market-mainline.noon.json",
              "status": "ok",
              "exists": true,
              "requested_file": "market-mainline.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\market-mainline.noon.json",
              "modified_at": "2026-07-07T11:36:10+08:00",
              "size": 170750,
              "sha256": "839354dcb3ece278711254fb00dcfdd431a803cf6af58d74a00247f5eed497e2"
            },
            {
              "role": "read",
              "file": "sector-split.noon.json",
              "status": "ok",
              "exists": true,
              "requested_file": "sector-split.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\sector-split.noon.json",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 195601,
              "sha256": "0c1087c260b58d633d1b0c2f8ad6115d18f5ee13acc230615d10fdea8f08ef39"
            },
            {
              "role": "read",
              "file": "candidate-score.noon.json",
              "status": "ok",
              "exists": true,
              "requested_file": "candidate-score.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\candidate-score.noon.json",
              "modified_at": "2026-07-07T11:36:34+08:00",
              "size": 68396,
              "sha256": "c2c4163a3ab8187a5d9b5d53dffeac10fa635f8a4a3a97253e8ebc8a026a907a"
            },
            {
              "role": "read",
              "file": "technical-check.noon.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\technical-check.noon.json",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 11994,
              "sha256": "23e526f09ccb310ab45e39c6579cf0bddd60b82c3d19d91f9719e4c912853449"
            },
            {
              "role": "write",
              "file": "domestic-intelligence.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\domestic-intelligence.noon.json",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 4924,
              "sha256": "562fa38922784ec4eb25164bc5b3c58ae9ada5e01e65886b8c301963b573fc48"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "国内信息增强已整理：当天新增证据 5 条，A股政策/产业 5 条，A股公告 0 条，直接关联自选股 0 条；催化状态 已确认催化，时效 当日新催化。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "domestic-intelligence.noon.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\domestic-intelligence.noon.json",
                  "modified_at": "2026-07-07T11:36:35+08:00",
                  "size": 4924,
                  "sha256": "562fa38922784ec4eb25164bc5b3c58ae9ada5e01e65886b8c301963b573fc48"
                }
              ]
            }
          ]
        },
        {
          "id": "external_skill_enrichment",
          "order": 9,
          "title_cn": "金融 skill 证据增强",
          "plain_goal_cn": "午报步骤：金融 skill 证据增强。",
          "data_used_cn": [
            "早报对象",
            "技术检查",
            "执行边界",
            "金融 skill 适配清单"
          ],
          "source_method_cn": "通过 build_external_skill_enrichment.py 只整理证据增强对象和上限；午报不重新选股。",
          "read_files": [
            "morning-report.json",
            "candidate-score.noon.json",
            "technical-check.noon.json"
          ],
          "write_files": [
            "external-skill-enrichment.noon.json"
          ],
          "status": "ok",
          "result_cn": "金融 skill 增强清单已生成：题材/资金 0 只，公告/股本风险 0 只，交易计划 0 只，复盘重点 2 只。",
          "missing_or_risk_cn": [
            "这些增强只补证据和解释，不改 Top3、不改 A/B 观察、不改 handoff",
            "当前是适配清单/扫描上限，尚未逐个金融 skill 实时深拉：tdx-agzxsb、tdx-hot-topic、tdx-trading-info、tdx-event-driven-short-term-catalyst"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "morning-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-report.json",
              "modified_at": "2026-07-07T09:37:50+08:00",
              "size": 569308,
              "sha256": "f5aa85b2d3e8e819cfb6c889716452e1e261fa49a758b67d095eab998cb47ea5"
            },
            {
              "role": "read",
              "file": "candidate-score.noon.json",
              "status": "ok",
              "exists": true,
              "requested_file": "candidate-score.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\candidate-score.noon.json",
              "modified_at": "2026-07-07T11:36:34+08:00",
              "size": 68396,
              "sha256": "c2c4163a3ab8187a5d9b5d53dffeac10fa635f8a4a3a97253e8ebc8a026a907a"
            },
            {
              "role": "read",
              "file": "technical-check.noon.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\technical-check.noon.json",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 11994,
              "sha256": "23e526f09ccb310ab45e39c6579cf0bddd60b82c3d19d91f9719e4c912853449"
            },
            {
              "role": "write",
              "file": "external-skill-enrichment.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\external-skill-enrichment.noon.json",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 5791,
              "sha256": "4096ef77975cb11a65a691ea3f3569cdc94e6d795a349103cc092ae8b2b8ac6d"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "金融 skill 增强清单已生成：题材/资金 0 只，公告/股本风险 0 只，交易计划 0 只，复盘重点 2 只。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "external-skill-enrichment.noon.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\external-skill-enrichment.noon.json",
                  "modified_at": "2026-07-07T11:37:16+08:00",
                  "size": 5791,
                  "sha256": "4096ef77975cb11a65a691ea3f3569cdc94e6d795a349103cc092ae8b2b8ac6d"
                }
              ]
            }
          ]
        },
        {
          "id": "external_skill_deep_dive",
          "order": 10,
          "title_cn": "金融 skill 深挖",
          "plain_goal_cn": "午报步骤：金融 skill 深挖。",
          "data_used_cn": [
            "Top3",
            "A类观察",
            "B类观察",
            "候选评分前三",
            "上午表现"
          ],
          "source_method_cn": "通过 build_external_skill_deep_dive.py 复用重点票深挖结果；只补上午兑现证据和空仓半日验证，不把旁路对象写成持仓。",
          "read_files": [
            "external-skill-enrichment.noon.json",
            "four-layer-tracking.morning.json",
            "morning-report.json"
          ],
          "write_files": [
            "external-skill-deep-dive.noon.json"
          ],
          "status": "ok",
          "result_cn": "金融 skill 深挖已生成：重点票 5 只，Top3 2 只，A类 3 只，B类 0 只，候选评分前三 1 只。",
          "missing_or_risk_cn": [
            "深挖只补主线、题材、资金、事件、股本风险、板块操盘、产业链、主营匹配、仓位节奏和复盘证据，不改 Top3、不改 handoff"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "external-skill-enrichment.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\external-skill-enrichment.noon.json",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 5791,
              "sha256": "4096ef77975cb11a65a691ea3f3569cdc94e6d795a349103cc092ae8b2b8ac6d"
            },
            {
              "role": "read",
              "file": "four-layer-tracking.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.morning.json",
              "modified_at": "2026-07-07T09:37:49+08:00",
              "size": 134420,
              "sha256": "14f96bb9379ae25f1ad6ac05e49d3f622fec708a1f9b421a043008a9c4eb1b38"
            },
            {
              "role": "read",
              "file": "morning-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-report.json",
              "modified_at": "2026-07-07T09:37:50+08:00",
              "size": 569308,
              "sha256": "f5aa85b2d3e8e819cfb6c889716452e1e261fa49a758b67d095eab998cb47ea5"
            },
            {
              "role": "write",
              "file": "external-skill-deep-dive.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\external-skill-deep-dive.noon.json",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 27296,
              "sha256": "7fb5384cffbd8e57f8a9c942c1efcb02fa72e3d1cee76dcddf73dd1ffcd20d97"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "金融 skill 深挖已生成：重点票 5 只，Top3 2 只，A类 3 只，B类 0 只，候选评分前三 1 只。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "external-skill-deep-dive.noon.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\external-skill-deep-dive.noon.json",
                  "modified_at": "2026-07-07T11:37:16+08:00",
                  "size": 27296,
                  "sha256": "7fb5384cffbd8e57f8a9c942c1efcb02fa72e3d1cee76dcddf73dd1ffcd20d97"
                }
              ]
            }
          ]
        },
        {
          "id": "four_layer_tracking",
          "order": 11,
          "title_cn": "四套逻辑跟踪",
          "plain_goal_cn": "记录四套策略样本上午表现，旁路对象不进入午报执行输入。",
          "data_used_cn": [
            "早报四套逻辑样本",
            "上午表现",
            "执行边界",
            "空仓是否继续合理"
          ],
          "source_method_cn": "通过 build_four_layer_tracking.py 更新四套策略样本盘中状态；无正式对象时只给复盘判断是否漏强，不新增股票、不改午后执行输入。",
          "read_files": [
            "four-layer-tracking.morning.json",
            "noon-report.json"
          ],
          "write_files": [
            "four-layer-tracking.noon.json"
          ],
          "status": "ok",
          "result_cn": "四层/旁路策略对比账本已生成：正式 Top3 2 只，A类主线/题材 3 只，B类技术/资金 0 只，候选评分前排 3 只，低位回流观察 3 只，早盘驱动观察 3 只，隔夜涨停观察 3 只，题材轮动观察 3 只，收盘中强承接观察 3 只。 面板样本跟踪 23 条，本时段快照命中 23 条。",
          "missing_or_risk_cn": [
            "跟踪的是面板四层样本和旁路样本；正式买入只认 Top3，题材观察、技术观察、评分前排、低位回流、早盘驱动、隔夜涨停观察、题材轮动观察和收盘中强承接观察不进入 handoff、午报执行或正式收益"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "four-layer-tracking.morning.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.morning.json",
              "modified_at": "2026-07-07T09:37:49+08:00",
              "size": 134420,
              "sha256": "14f96bb9379ae25f1ad6ac05e49d3f622fec708a1f9b421a043008a9c4eb1b38"
            },
            {
              "role": "read",
              "file": "noon-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.json",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 687198,
              "sha256": "0a03f0c778f1daba6c0f70c42fe7617f2964d8f49bc7b82003bef85d2e4557fd"
            },
            {
              "role": "write",
              "file": "four-layer-tracking.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.noon.json",
              "modified_at": "2026-07-07T11:37:15+08:00",
              "size": 134030,
              "sha256": "c2339337ddeff6265bde25c7351a4d03e9f62d24d3bcef22ce5701274e62fc0d"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "四层/旁路策略对比账本已生成：正式 Top3 2 只，A类主线/题材 3 只，B类技术/资金 0 只，候选评分前排 3 只，低位回流观察 3 只，早盘驱动观察 3 只，隔夜涨停观察 3 只，题材轮动观察 3 只，收盘中强承接观察 3 只。 面板样本跟踪 23 条，本时段快照命中 23 条。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "four-layer-tracking.noon.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.noon.json",
                  "modified_at": "2026-07-07T11:37:15+08:00",
                  "size": 134030,
                  "sha256": "c2339337ddeff6265bde25c7351a4d03e9f62d24d3bcef22ce5701274e62fc0d"
                }
              ]
            }
          ]
        },
        {
          "id": "data_acquisition_health",
          "order": 12,
          "title_cn": "数据获取健康审计",
          "plain_goal_cn": "午报步骤：数据获取健康审计。",
          "data_used_cn": [
            "当天自选股快照",
            "授权新闻公告",
            "候选公告排雷",
            "三闸门",
            "执行输入"
          ],
          "source_method_cn": "通过 build_data_acquisition_health.py 只读已落盘产物做审计；不取数、不选股、不改午报对象。",
          "read_files": [
            "raw-watchlist.noon.json",
            "filtered-pool.noon.json",
            "authorized-news.json",
            "authorized-notices.json",
            "candidate-notice-scan.noon.json"
          ],
          "write_files": [
            "data-acquisition-health.noon.json"
          ],
          "status": "ok",
          "result_cn": "数据获取健康审计完成：通过 13 项，需留意 0 项，阻断 0 项。",
          "missing_or_risk_cn": [
            "关键数据获取审计通过：未发现读旧、查询失败或关键产物缺失。"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "raw-watchlist.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\raw-watchlist.noon.json",
              "modified_at": "2026-07-07T11:36:02+08:00",
              "size": 1875782,
              "sha256": "56da794ab6076340d2d2db5a74f86d73e8f910da49221401e96b88feb9e5e36c"
            },
            {
              "role": "read",
              "file": "filtered-pool.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\filtered-pool.noon.json",
              "modified_at": "2026-07-07T11:36:02+08:00",
              "size": 2374460,
              "sha256": "838d4333b435ccb01ede249a09b9411cb57ede9f702e5ef02dcb609d222fff04"
            },
            {
              "role": "read",
              "file": "authorized-news.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-news.json",
              "modified_at": "2026-07-07T09:00:10+08:00",
              "size": 73319,
              "sha256": "83f312136953a77b571e8def4a4b396a39515e71dac1ce83941f0b1052ef53c6"
            },
            {
              "role": "read",
              "file": "authorized-notices.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\authorized-notices.json",
              "modified_at": "2026-07-07T09:00:22+08:00",
              "size": 37353,
              "sha256": "0d134a76f9c7f23106daf4b3273a475c766e5f8ac0f18a462bb0bac276198b19"
            },
            {
              "role": "read",
              "file": "candidate-notice-scan.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\candidate-notice-scan.noon.json",
              "modified_at": "2026-07-07T11:37:15+08:00",
              "size": 13799,
              "sha256": "81ae2d2926b4398fa993de87f5521fa097b626bf52728a8a170e09b321cf61c7"
            },
            {
              "role": "write",
              "file": "data-acquisition-health.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-acquisition-health.noon.json",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 9308,
              "sha256": "c6cd01e61b244f385b9e4a5171a52050062f19f6f56c148f4f7dea69e837cacb"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "数据获取健康审计完成：通过 13 项，需留意 0 项，阻断 0 项。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "data-acquisition-health.noon.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-acquisition-health.noon.json",
                  "modified_at": "2026-07-07T11:37:16+08:00",
                  "size": 9308,
                  "sha256": "c6cd01e61b244f385b9e4a5171a52050062f19f6f56c148f4f7dea69e837cacb"
                }
              ]
            }
          ]
        },
        {
          "id": "strategy_benchmark",
          "order": 13,
          "title_cn": "四套策略收益对比",
          "plain_goal_cn": "午报只统计正式和旁路样本上午表现，不把旁路对象变成持仓。",
          "data_used_cn": [
            "四套逻辑样本",
            "模拟收益账本",
            "上午表现",
            "收益缺口"
          ],
          "source_method_cn": "通过 build_strategy_benchmark.py 比较正式和旁路表现；只做审计，不改午报执行。",
          "read_files": [
            "four-layer-tracking.noon.json",
            "paper-trade-ledger.noon.json"
          ],
          "write_files": [
            "strategy-benchmark.noon.json"
          ],
          "status": "ok",
          "result_cn": "四套策略对比审计完成：正式 Top3 2 只，旁路样本 21 只，午盘表现缺口 23 只。",
          "missing_or_risk_cn": [
            "这是旁路对比，只用于复盘判断哪套逻辑更有效；不改 Top3、不改 handoff、不改正式收益。",
            "已对比 8 套策略样本；暂无可比收益，等待价格回填。",
            "收益还在等待价格回填，这不是扫描失败，也不会影响早报/午报结论。"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "four-layer-tracking.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.noon.json",
              "modified_at": "2026-07-07T11:37:15+08:00",
              "size": 134030,
              "sha256": "c2339337ddeff6265bde25c7351a4d03e9f62d24d3bcef22ce5701274e62fc0d"
            },
            {
              "role": "read",
              "file": "paper-trade-ledger.noon.json",
              "status": "period_snapshot_missing",
              "exists": false,
              "requested_file": "paper-trade-ledger.json",
              "freshness_note": "本节点要求本时段专属快照；缺失时不引用可能被后续时段覆盖的通用文件。"
            },
            {
              "role": "write",
              "file": "strategy-benchmark.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\strategy-benchmark.noon.json",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 10338,
              "sha256": "c5d4de0f220224d6d6040161cf0d6f334577791ce05e3d86e656fa7ddfc0d5a6"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "四套策略对比审计完成：正式 Top3 2 只，旁路样本 21 只，午盘表现缺口 23 只。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "strategy-benchmark.noon.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\strategy-benchmark.noon.json",
                  "modified_at": "2026-07-07T11:37:16+08:00",
                  "size": 10338,
                  "sha256": "c5d4de0f220224d6d6040161cf0d6f334577791ce05e3d86e656fa7ddfc0d5a6"
                }
              ]
            }
          ]
        },
        {
          "id": "multi_role_review",
          "order": 14,
          "title_cn": "多视角审计",
          "plain_goal_cn": "从技术、题材、风险和数据质量看午报是否有弱点；只提示，不改算法。",
          "data_used_cn": [
            "午报",
            "候选评分",
            "技术检查",
            "数据健康",
            "四套策略对比"
          ],
          "source_method_cn": "通过 build_multi_role_review.py 做技术、题材、风险、数据质量复核；只给提示，不改算法。",
          "read_files": [
            "noon-report.json",
            "candidate-score.noon.json",
            "technical-check.noon.json",
            "data-acquisition-health.noon.json"
          ],
          "write_files": [
            "multi-role-review.noon.json"
          ],
          "status": "warning",
          "result_cn": "多视角审计完成：技术、题材、风险、数据质量共 4 个视角；需留意 1 项，阻断 0 项。（需留意：技术：通过 0 只，取消 0 只）",
          "missing_or_risk_cn": [
            "审计层只找问题和给建议，不自动改算法、不改 Top3、不改交易计划。",
            "技术审查：技术检查通过 0 只，取消/不合格 0 只；技术层只给证据，不直接改名单。",
            "技术审查建议：若强票多被技术取消，复盘阶段检查取消原因；确认前不调技术阈值。"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "noon-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.json",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 687198,
              "sha256": "0a03f0c778f1daba6c0f70c42fe7617f2964d8f49bc7b82003bef85d2e4557fd"
            },
            {
              "role": "read",
              "file": "candidate-score.noon.json",
              "status": "ok",
              "exists": true,
              "requested_file": "candidate-score.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\candidate-score.noon.json",
              "modified_at": "2026-07-07T11:36:34+08:00",
              "size": 68396,
              "sha256": "c2c4163a3ab8187a5d9b5d53dffeac10fa635f8a4a3a97253e8ebc8a026a907a"
            },
            {
              "role": "read",
              "file": "technical-check.noon.json",
              "status": "ok",
              "exists": true,
              "requested_file": "technical-check.json",
              "freshness_note": "已使用本时段专属快照，避免读取后续时段覆盖后的通用文件。",
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\technical-check.noon.json",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 11994,
              "sha256": "23e526f09ccb310ab45e39c6579cf0bddd60b82c3d19d91f9719e4c912853449"
            },
            {
              "role": "read",
              "file": "data-acquisition-health.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-acquisition-health.noon.json",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 9308,
              "sha256": "c6cd01e61b244f385b9e4a5171a52050062f19f6f56c148f4f7dea69e837cacb"
            },
            {
              "role": "write",
              "file": "multi-role-review.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\multi-role-review.noon.json",
              "modified_at": "2026-07-07T11:37:17+08:00",
              "size": 4168,
              "sha256": "a6ad09213f7a15a18d1e03413dde37e5f09f5e6c99afea624b4d333e0aadfad2"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "多视角审计完成：技术、题材、风险、数据质量共 4 个视角；需留意 1 项，阻断 0 项。（需留意：技术：通过 0 只，取消 0 只）",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "multi-role-review.noon.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\multi-role-review.noon.json",
                  "modified_at": "2026-07-07T11:37:17+08:00",
                  "size": 4168,
                  "sha256": "a6ad09213f7a15a18d1e03413dde37e5f09f5e6c99afea624b4d333e0aadfad2"
                }
              ]
            }
          ]
        },
        {
          "id": "report_quality_audit",
          "order": 15,
          "title_cn": "正式文本质量审计",
          "plain_goal_cn": "检查午报正文有没有乱码、工程词或展示误导；不重写报告。",
          "data_used_cn": [
            "午报 Markdown",
            "多视角审计",
            "四套策略对比"
          ],
          "source_method_cn": "通过 build_report_quality_audit.py 检查乱码和工程词；不重写报告。",
          "read_files": [
            "noon-report.md",
            "multi-role-review.noon.json",
            "strategy-benchmark.noon.json"
          ],
          "write_files": [
            "report-quality-audit.noon.json"
          ],
          "status": "ok",
          "result_cn": "正式文本质量审计完成：状态 ok，发现 0 项可读性/展示风险。",
          "missing_or_risk_cn": [
            "质量审计只提示正式文本问题，不重写报告、不改结论。"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "noon-report.md",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.md",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 4828,
              "sha256": "4e26b55c108411a3f90101e04af340163eb33f6e35569e01aaec711c227564b3"
            },
            {
              "role": "read",
              "file": "multi-role-review.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\multi-role-review.noon.json",
              "modified_at": "2026-07-07T11:37:17+08:00",
              "size": 4168,
              "sha256": "a6ad09213f7a15a18d1e03413dde37e5f09f5e6c99afea624b4d333e0aadfad2"
            },
            {
              "role": "read",
              "file": "strategy-benchmark.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\strategy-benchmark.noon.json",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 10338,
              "sha256": "c5d4de0f220224d6d6040161cf0d6f334577791ce05e3d86e656fa7ddfc0d5a6"
            },
            {
              "role": "write",
              "file": "report-quality-audit.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\report-quality-audit.noon.json",
              "modified_at": "2026-07-07T11:37:17+08:00",
              "size": 1491,
              "sha256": "16c88c75a5dd7ba3637fb95136885ef7e7e0bb87a4da67b36ab2b79dbc16ac31"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "正式文本质量审计完成：状态 ok，发现 0 项可读性/展示风险。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "report-quality-audit.noon.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\report-quality-audit.noon.json",
                  "modified_at": "2026-07-07T11:37:17+08:00",
                  "size": 1491,
                  "sha256": "16c88c75a5dd7ba3637fb95136885ef7e7e0bb87a4da67b36ab2b79dbc16ac31"
                }
              ]
            }
          ]
        },
        {
          "id": "generate_noon",
          "order": 16,
          "title_cn": "生成午报",
          "plain_goal_cn": "把上午验证和午后动作写成正式午报。",
          "data_used_cn": [
            "上午验证结论",
            "午后动作",
            "铁律提醒"
          ],
          "source_method_cn": "通过 build_report_snapshot.py 和 render_report_template.py 生成。",
          "read_files": [
            "noon-report.json"
          ],
          "write_files": [
            "noon-report.md"
          ],
          "status": "ok",
          "result_cn": "这一步已经跑完，关键产物已保存。",
          "missing_or_risk_cn": [
            "无关键缺失"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "noon-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.json",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 687198,
              "sha256": "0a03f0c778f1daba6c0f70c42fe7617f2964d8f49bc7b82003bef85d2e4557fd"
            },
            {
              "role": "write",
              "file": "noon-report.md",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.md",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 4828,
              "sha256": "4e26b55c108411a3f90101e04af340163eb33f6e35569e01aaec711c227564b3"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "生成午报",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "noon-report.md",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.md",
                  "modified_at": "2026-07-07T11:37:16+08:00",
                  "size": 4828,
                  "sha256": "4e26b55c108411a3f90101e04af340163eb33f6e35569e01aaec711c227564b3"
                }
              ]
            }
          ]
        },
        {
          "id": "validate_noon",
          "order": 17,
          "title_cn": "协议校验",
          "plain_goal_cn": "确认午报没有新增股票，动作和早报交接对象一致。",
          "data_used_cn": [
            "午报 JSON",
            "午报 Markdown",
            "结果回收边界"
          ],
          "source_method_cn": "通过 report_protocol_validate.py 校验；午报到收盘只记录 result_review_targets，不续传候选。",
          "read_files": [
            "noon-report.json",
            "noon-report.md"
          ],
          "write_files": [
            "workflow-manifest.noon.json",
            "data-lineage.noon.json"
          ],
          "status": "ok",
          "result_cn": "这一步已经跑完，关键产物已保存。",
          "missing_or_risk_cn": [
            "无关键缺失"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "noon-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.json",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 687198,
              "sha256": "0a03f0c778f1daba6c0f70c42fe7617f2964d8f49bc7b82003bef85d2e4557fd"
            },
            {
              "role": "read",
              "file": "noon-report.md",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.md",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 4828,
              "sha256": "4e26b55c108411a3f90101e04af340163eb33f6e35569e01aaec711c227564b3"
            },
            {
              "role": "write",
              "file": "workflow-manifest.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\workflow-manifest.noon.json",
              "modified_at": "2026-07-07T11:37:17+08:00",
              "size": 165684,
              "sha256": "3a4e3e1828030280d6e6f52808b3ab1780e11f2a25394587ece0abfe5237cb9a"
            },
            {
              "role": "write",
              "file": "data-lineage.noon.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-lineage.noon.json",
              "modified_at": "2026-07-07T11:37:17+08:00",
              "size": 53919,
              "sha256": "281be0056941ecfb641bb58ee758ddda5eada411fae2edb8a219a73ffe18f064"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "协议校验",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "workflow-manifest.noon.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\workflow-manifest.noon.json",
                  "modified_at": "2026-07-07T11:37:17+08:00",
                  "size": 165684,
                  "sha256": "3a4e3e1828030280d6e6f52808b3ab1780e11f2a25394587ece0abfe5237cb9a"
                },
                {
                  "role": "write",
                  "file": "data-lineage.noon.json",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-lineage.noon.json",
                  "modified_at": "2026-07-07T11:37:17+08:00",
                  "size": 53919,
                  "sha256": "281be0056941ecfb641bb58ee758ddda5eada411fae2edb8a219a73ffe18f064"
                }
              ]
            }
          ]
        },
        {
          "id": "afternoon_action",
          "order": 18,
          "title_cn": "午后动作",
          "plain_goal_cn": "给出下午继续跟踪、只观察、不参与或尾盘重点盯盘的动作。",
          "data_used_cn": [
            "继续盯盘",
            "放弃名单",
            "空仓/观察"
          ],
          "source_method_cn": "通过 noon-report.json 和 execution-decision.json 给出午后动作。",
          "read_files": [
            "noon-report.json",
            "execution-decision.json"
          ],
          "write_files": [
            "noon-report.md"
          ],
          "status": "ok",
          "result_cn": "午报已生成固定 Markdown。",
          "missing_or_risk_cn": [
            "无关键缺失"
          ],
          "data_provenance": [
            {
              "role": "read",
              "file": "noon-report.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.json",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 687198,
              "sha256": "0a03f0c778f1daba6c0f70c42fe7617f2964d8f49bc7b82003bef85d2e4557fd"
            },
            {
              "role": "read",
              "file": "execution-decision.json",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\execution-decision.json",
              "modified_at": "2026-07-07T11:36:35+08:00",
              "size": 833,
              "sha256": "c09e3c5f413634feb4beef590574f2c1400fe46b86501136b819b9c7873aff10"
            },
            {
              "role": "write",
              "file": "noon-report.md",
              "status": "ok",
              "exists": true,
              "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.md",
              "modified_at": "2026-07-07T11:37:16+08:00",
              "size": 4828,
              "sha256": "4e26b55c108411a3f90101e04af340163eb33f6e35569e01aaec711c227564b3"
            }
          ],
          "key_conclusion_provenance": [
            {
              "conclusion_cn": "午报已生成固定 Markdown。",
              "freshness_cn": "已落盘，可追溯",
              "source_files": [
                {
                  "role": "write",
                  "file": "noon-report.md",
                  "status": "ok",
                  "exists": true,
                  "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.md",
                  "modified_at": "2026-07-07T11:37:16+08:00",
                  "size": 4828,
                  "sha256": "4e26b55c108411a3f90101e04af340163eb33f6e35569e01aaec711c227564b3"
                }
              ]
            }
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
            "计划时间：2026-07-07T20:00+08:00",
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
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\outer-gate.json",
        "relative_path": "runs/2026-07-07/outer-gate.json",
        "exists": true,
        "size": 22076,
        "modified_at": "2026-07-07T11:36:07+08:00",
        "sha256": "3738d8705b97d44dfde2dcab82fbf92dbf2301ec47cd7d5e0a7180f93966a8d9"
      }
    },
    {
      "name": "domestic-gate.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\domestic-gate.json",
        "relative_path": "runs/2026-07-07/domestic-gate.json",
        "exists": true,
        "size": 330610,
        "modified_at": "2026-07-07T11:36:31+08:00",
        "sha256": "20d77b8af45a38ce362320d847085e949e71053b7366c8b9b46996169191af7a"
      }
    },
    {
      "name": "emotion-trend-gate.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\emotion-trend-gate.json",
        "relative_path": "runs/2026-07-07/emotion-trend-gate.json",
        "exists": true,
        "size": 17908,
        "modified_at": "2026-07-07T11:36:33+08:00",
        "sha256": "ef082c1349e5bb0483fb5a83fb36ea36ae63f9e77efa95f5fc75637d99c4054e"
      }
    },
    {
      "name": "gates-protocol.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\gates-protocol.json",
        "relative_path": "runs/2026-07-07/gates-protocol.json",
        "exists": true,
        "size": 18193,
        "modified_at": "2026-07-07T11:36:33+08:00",
        "sha256": "ceaec5be4441aba09d77b2451a7d718ed746b1e7854bc12b66150cad04bbe16a"
      }
    },
    {
      "name": "raw-watchlist.json",
      "status": "ok",
      "records": 283,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\raw-watchlist.json",
        "relative_path": "runs/2026-07-07/raw-watchlist.json",
        "exists": true,
        "size": 1875782,
        "modified_at": "2026-07-07T11:36:02+08:00",
        "sha256": "56da794ab6076340d2d2db5a74f86d73e8f910da49221401e96b88feb9e5e36c"
      }
    },
    {
      "name": "filtered-pool.json",
      "status": "ok",
      "records": 283,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\filtered-pool.json",
        "relative_path": "runs/2026-07-07/filtered-pool.json",
        "exists": true,
        "size": 2374460,
        "modified_at": "2026-07-07T11:36:02+08:00",
        "sha256": "838d4333b435ccb01ede249a09b9411cb57ede9f702e5ef02dcb609d222fff04"
      }
    },
    {
      "name": "candidate-score.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\candidate-score.json",
        "relative_path": "runs/2026-07-07/candidate-score.json",
        "exists": true,
        "size": 68396,
        "modified_at": "2026-07-07T11:36:34+08:00",
        "sha256": "c2c4163a3ab8187a5d9b5d53dffeac10fa635f8a4a3a97253e8ebc8a026a907a"
      }
    },
    {
      "name": "technical-check.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\technical-check.json",
        "relative_path": "runs/2026-07-07/technical-check.json",
        "exists": true,
        "size": 11994,
        "modified_at": "2026-07-07T11:36:35+08:00",
        "sha256": "23e526f09ccb310ab45e39c6579cf0bddd60b82c3d19d91f9719e4c912853449"
      }
    },
    {
      "name": "four-layer-tracking.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.close.json",
        "relative_path": "four-layer-tracking.close.json",
        "exists": false
      }
    },
    {
      "name": "four-layer-tracking.morning.json",
      "status": "ok",
      "records": 23,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.morning.json",
        "relative_path": "runs/2026-07-07/four-layer-tracking.morning.json",
        "exists": true,
        "size": 134420,
        "modified_at": "2026-07-07T09:37:49+08:00",
        "sha256": "14f96bb9379ae25f1ad6ac05e49d3f622fec708a1f9b421a043008a9c4eb1b38"
      }
    },
    {
      "name": "four-layer-tracking.noon.json",
      "status": "ok",
      "records": 23,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.noon.json",
        "relative_path": "runs/2026-07-07/four-layer-tracking.noon.json",
        "exists": true,
        "size": 134030,
        "modified_at": "2026-07-07T11:37:15+08:00",
        "sha256": "c2339337ddeff6265bde25c7351a4d03e9f62d24d3bcef22ce5701274e62fc0d"
      }
    },
    {
      "name": "four-layer-tracking.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.review.json",
        "relative_path": "four-layer-tracking.review.json",
        "exists": false
      }
    },
    {
      "name": "strategy-benchmark.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\strategy-benchmark.close.json",
        "relative_path": "strategy-benchmark.close.json",
        "exists": false
      }
    },
    {
      "name": "strategy-benchmark.morning.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\strategy-benchmark.morning.json",
        "relative_path": "runs/2026-07-07/strategy-benchmark.morning.json",
        "exists": true,
        "size": 10344,
        "modified_at": "2026-07-07T09:37:51+08:00",
        "sha256": "8bb7850e902c18e861aeeeeadae6903502d7f6bc289dc0dbda5bd29bd8802fc1"
      }
    },
    {
      "name": "strategy-benchmark.noon.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\strategy-benchmark.noon.json",
        "relative_path": "runs/2026-07-07/strategy-benchmark.noon.json",
        "exists": true,
        "size": 10338,
        "modified_at": "2026-07-07T11:37:16+08:00",
        "sha256": "c5d4de0f220224d6d6040161cf0d6f334577791ce05e3d86e656fa7ddfc0d5a6"
      }
    },
    {
      "name": "strategy-benchmark.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\strategy-benchmark.review.json",
        "relative_path": "strategy-benchmark.review.json",
        "exists": false
      }
    },
    {
      "name": "news-notice-sentiment.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\news-notice-sentiment.close.json",
        "relative_path": "news-notice-sentiment.close.json",
        "exists": false
      }
    },
    {
      "name": "news-notice-sentiment.morning.json",
      "status": "ok",
      "records": 45,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\news-notice-sentiment.morning.json",
        "relative_path": "runs/2026-07-07/news-notice-sentiment.morning.json",
        "exists": true,
        "size": 32791,
        "modified_at": "2026-07-07T09:37:49+08:00",
        "sha256": "986237752b0113ae1ac67866d79fcda4ace39b38ef1246b3e361643cf17ced1c"
      }
    },
    {
      "name": "news-notice-sentiment.noon.json",
      "status": "ok",
      "records": 45,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\news-notice-sentiment.noon.json",
        "relative_path": "runs/2026-07-07/news-notice-sentiment.noon.json",
        "exists": true,
        "size": 32776,
        "modified_at": "2026-07-07T11:37:16+08:00",
        "sha256": "b0216ac843d92281119a900cf1f1423f50ae21ce77612a142f49d372b1d54c1e"
      }
    },
    {
      "name": "news-notice-sentiment.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\news-notice-sentiment.review.json",
        "relative_path": "news-notice-sentiment.review.json",
        "exists": false
      }
    },
    {
      "name": "overnight-report-brief.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\overnight-report-brief.close.json",
        "relative_path": "overnight-report-brief.close.json",
        "exists": false
      }
    },
    {
      "name": "multi-role-review.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\multi-role-review.close.json",
        "relative_path": "multi-role-review.close.json",
        "exists": false
      }
    },
    {
      "name": "multi-role-review.morning.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\multi-role-review.morning.json",
        "relative_path": "runs/2026-07-07/multi-role-review.morning.json",
        "exists": true,
        "size": 4217,
        "modified_at": "2026-07-07T09:37:51+08:00",
        "sha256": "5802b93f8b1612a78b87ca34406c3f403ef608e611365a84822e1b042e131f4b"
      }
    },
    {
      "name": "multi-role-review.noon.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\multi-role-review.noon.json",
        "relative_path": "runs/2026-07-07/multi-role-review.noon.json",
        "exists": true,
        "size": 4168,
        "modified_at": "2026-07-07T11:37:17+08:00",
        "sha256": "a6ad09213f7a15a18d1e03413dde37e5f09f5e6c99afea624b4d333e0aadfad2"
      }
    },
    {
      "name": "multi-role-review.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\multi-role-review.review.json",
        "relative_path": "multi-role-review.review.json",
        "exists": false
      }
    },
    {
      "name": "report-quality-audit.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\report-quality-audit.close.json",
        "relative_path": "report-quality-audit.close.json",
        "exists": false
      }
    },
    {
      "name": "report-quality-audit.morning.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\report-quality-audit.morning.json",
        "relative_path": "runs/2026-07-07/report-quality-audit.morning.json",
        "exists": true,
        "size": 1398,
        "modified_at": "2026-07-07T09:37:51+08:00",
        "sha256": "3372f5c2949c722f3236851b0715fd43919c902b9ce21c055639a117179244c9"
      }
    },
    {
      "name": "report-quality-audit.noon.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\report-quality-audit.noon.json",
        "relative_path": "runs/2026-07-07/report-quality-audit.noon.json",
        "exists": true,
        "size": 1491,
        "modified_at": "2026-07-07T11:37:17+08:00",
        "sha256": "16c88c75a5dd7ba3637fb95136885ef7e7e0bb87a4da67b36ab2b79dbc16ac31"
      }
    },
    {
      "name": "report-quality-audit.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\report-quality-audit.review.json",
        "relative_path": "report-quality-audit.review.json",
        "exists": false
      }
    },
    {
      "name": "second-review.longxia.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\second-review.longxia.review.json",
        "relative_path": "second-review.longxia.review.json",
        "exists": false
      }
    },
    {
      "name": "second-review.longxia.review.md",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\second-review.longxia.review.md",
        "relative_path": "second-review.longxia.review.md",
        "exists": false
      }
    },
    {
      "name": "longxia-second-review-validation.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\longxia-second-review-validation.json",
        "relative_path": "longxia-second-review-validation.json",
        "exists": false
      }
    },
    {
      "name": "longxia-second-review-validation.md",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\longxia-second-review-validation.md",
        "relative_path": "longxia-second-review-validation.md",
        "exists": false
      }
    },
    {
      "name": "sector-split.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\sector-split.json",
        "relative_path": "runs/2026-07-07/sector-split.json",
        "exists": true,
        "size": 195601,
        "modified_at": "2026-07-07T11:36:35+08:00",
        "sha256": "0c1087c260b58d633d1b0c2f8ad6115d18f5ee13acc230615d10fdea8f08ef39"
      }
    },
    {
      "name": "execution-inputs.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\execution-inputs.json",
        "relative_path": "runs/2026-07-07/execution-inputs.json",
        "exists": true,
        "size": 1700,
        "modified_at": "2026-07-07T11:36:35+08:00",
        "sha256": "e0538e5c12509cb0ae984776ffc5a7f44f29906177f531d0aa0e2d6d89c3c7d6"
      }
    },
    {
      "name": "execution-decision.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\execution-decision.json",
        "relative_path": "runs/2026-07-07/execution-decision.json",
        "exists": true,
        "size": 833,
        "modified_at": "2026-07-07T11:36:35+08:00",
        "sha256": "c09e3c5f413634feb4beef590574f2c1400fe46b86501136b819b9c7873aff10"
      }
    },
    {
      "name": "morning-precheck.prefetch.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-precheck.prefetch.json",
        "relative_path": "runs/2026-07-07/morning-precheck.prefetch.json",
        "exists": true,
        "size": 3974,
        "modified_at": "2026-07-07T09:37:17+08:00",
        "sha256": "d113200953e97a803d68c3005f3d5562ce94cbea37ef324c46818c4073f34b53"
      }
    },
    {
      "name": "morning-risk-precheck.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-risk-precheck.json",
        "relative_path": "runs/2026-07-07/morning-risk-precheck.json",
        "exists": true,
        "size": 5160,
        "modified_at": "2026-07-07T09:37:17+08:00",
        "sha256": "983f3733402e20092d613f33cb42424fbcb84d182d40a39551f68eb2b6dc0afc"
      }
    },
    {
      "name": "data-acquisition-health.close.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-acquisition-health.close.json",
        "relative_path": "data-acquisition-health.close.json",
        "exists": false
      }
    },
    {
      "name": "data-acquisition-health.morning.json",
      "status": "ok",
      "records": 13,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-acquisition-health.morning.json",
        "relative_path": "runs/2026-07-07/data-acquisition-health.morning.json",
        "exists": true,
        "size": 9428,
        "modified_at": "2026-07-07T09:37:51+08:00",
        "sha256": "89e046880e77b7469362f57cbc7a8af052595da88d596fc6d31e6b40e56fed4a"
      }
    },
    {
      "name": "data-acquisition-health.noon.json",
      "status": "ok",
      "records": 13,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-acquisition-health.noon.json",
        "relative_path": "runs/2026-07-07/data-acquisition-health.noon.json",
        "exists": true,
        "size": 9308,
        "modified_at": "2026-07-07T11:37:16+08:00",
        "sha256": "c6cd01e61b244f385b9e4a5171a52050062f19f6f56c148f4f7dea69e837cacb"
      }
    },
    {
      "name": "data-acquisition-health.review.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-acquisition-health.review.json",
        "relative_path": "data-acquisition-health.review.json",
        "exists": false
      }
    },
    {
      "name": "market-data.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\market-data.json",
        "relative_path": "market-data.json",
        "exists": false
      }
    },
    {
      "name": "paper-trade-ledger.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\paper-trade-ledger.json",
        "relative_path": "paper-trade-ledger.json",
        "exists": false
      }
    },
    {
      "name": "paper-trade-summary.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\paper-trade-summary.json",
        "relative_path": "paper-trade-summary.json",
        "exists": false
      }
    },
    {
      "name": "close-confirmation.1501.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\close-confirmation.1501.json",
        "relative_path": "close-confirmation.1501.json",
        "exists": false
      }
    },
    {
      "name": "close-watchlist.1501.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\close-watchlist.1501.json",
        "relative_path": "close-watchlist.1501.json",
        "exists": false
      }
    },
    {
      "name": "close-snapshot.1501.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\close-snapshot.1501.json",
        "relative_path": "close-snapshot.1501.json",
        "exists": false
      }
    },
    {
      "name": "close-confirmation.1501-run.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\close-confirmation.1501-run.json",
        "relative_path": "close-confirmation.1501-run.json",
        "exists": false
      }
    },
    {
      "name": "pool-governance.json",
      "status": "missing",
      "records": 0,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\pool-governance.json",
        "relative_path": "pool-governance.json",
        "exists": false
      }
    },
    {
      "name": "workflow-manifest.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\workflow-manifest.json",
        "relative_path": "runs/2026-07-07/workflow-manifest.json",
        "exists": true,
        "size": 165684,
        "modified_at": "2026-07-07T11:37:17+08:00",
        "sha256": "3a4e3e1828030280d6e6f52808b3ab1780e11f2a25394587ece0abfe5237cb9a"
      }
    },
    {
      "name": "data-lineage.json",
      "status": "ok",
      "records": 1,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-lineage.json",
        "relative_path": "runs/2026-07-07/data-lineage.json",
        "exists": true,
        "size": 53919,
        "modified_at": "2026-07-07T11:37:17+08:00",
        "sha256": "281be0056941ecfb641bb58ee758ddda5eada411fae2edb8a219a73ffe18f064"
      }
    },
    {
      "name": "raw-watchlist/",
      "status": "ok",
      "records": 2,
      "file": {
        "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\raw-watchlist",
        "relative_path": "runs/2026-07-07/raw-watchlist",
        "exists": true
      }
    }
  ],
  "automation_schedule": {
    "by_status": {
      "not_due": 2,
      "complete": 2
    },
    "items": [
      {
        "period": "close",
        "label": "收盘报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-07T14:50+08:00",
        "recovery_policy_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
      },
      {
        "period": "morning",
        "label": "早报",
        "status": "complete",
        "reason_cn": "已按计划生成",
        "scheduled_at": "2026-07-07T09:35+08:00",
        "recovery_policy_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
      },
      {
        "period": "noon",
        "label": "午报",
        "status": "complete",
        "reason_cn": "已按计划生成",
        "scheduled_at": "2026-07-07T11:35+08:00",
        "recovery_policy_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
      },
      {
        "period": "review",
        "label": "复盘报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-07T20:00+08:00",
        "recovery_policy_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
      }
    ],
    "missed_count": 0,
    "failed_count": 0,
    "incomplete_count": 0
  },
  "web_panel_status_summary": {
    "schema_version": "web-panel-status-summary/v1",
    "currentDate": "2026-07-07",
    "current_date": "2026-07-07",
    "status": "partial",
    "headline_cn": "当前日期 2026-07-07：2/4 四报已生成",
    "report_ready_count": 2,
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
      "not_due": 2,
      "complete": 2
    },
    "schedule_items": [
      {
        "period": "close",
        "label": "收盘报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-07T14:50+08:00",
        "recovery_policy_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
      },
      {
        "period": "morning",
        "label": "早报",
        "status": "complete",
        "reason_cn": "已按计划生成",
        "scheduled_at": "2026-07-07T09:35+08:00",
        "recovery_policy_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
      },
      {
        "period": "noon",
        "label": "午报",
        "status": "complete",
        "reason_cn": "已按计划生成",
        "scheduled_at": "2026-07-07T11:35+08:00",
        "recovery_policy_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
      },
      {
        "period": "review",
        "label": "复盘报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-07T20:00+08:00",
        "recovery_policy_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
      }
    ],
    "missing_reports": [],
    "user_visible_note_cn": "顶部状态条只统计当前应当已经落盘的异常项；复盘未到时间、链路说明性节点和环境偏谨慎不再算作缺失或扫描不完整。"
  },
  "top_status_summary": {
    "schema_version": "web-panel-status-summary/v1",
    "currentDate": "2026-07-07",
    "current_date": "2026-07-07",
    "status": "partial",
    "headline_cn": "当前日期 2026-07-07：2/4 四报已生成",
    "report_ready_count": 2,
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
      "not_due": 2,
      "complete": 2
    },
    "schedule_items": [
      {
        "period": "close",
        "label": "收盘报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-07T14:50+08:00",
        "recovery_policy_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
      },
      {
        "period": "morning",
        "label": "早报",
        "status": "complete",
        "reason_cn": "已按计划生成",
        "scheduled_at": "2026-07-07T09:35+08:00",
        "recovery_policy_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
      },
      {
        "period": "noon",
        "label": "午报",
        "status": "complete",
        "reason_cn": "已按计划生成",
        "scheduled_at": "2026-07-07T11:35+08:00",
        "recovery_policy_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
      },
      {
        "period": "review",
        "label": "复盘报",
        "status": "not_due",
        "reason_cn": "未到计划时间",
        "scheduled_at": "2026-07-07T20:00+08:00",
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
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\close-report.json",
      "relative_path": "close-report.json",
      "exists": false
    },
    {
      "name": "morning-report.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-report.json",
      "relative_path": "runs/2026-07-07/morning-report.json",
      "exists": true,
      "size": 569308,
      "modified_at": "2026-07-07T09:37:50+08:00",
      "sha256": "f5aa85b2d3e8e819cfb6c889716452e1e261fa49a758b67d095eab998cb47ea5"
    },
    {
      "name": "noon-report.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.json",
      "relative_path": "runs/2026-07-07/noon-report.json",
      "exists": true,
      "size": 687198,
      "modified_at": "2026-07-07T11:37:16+08:00",
      "sha256": "0a03f0c778f1daba6c0f70c42fe7617f2964d8f49bc7b82003bef85d2e4557fd"
    },
    {
      "name": "review-report.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\review-report.json",
      "relative_path": "review-report.json",
      "exists": false
    },
    {
      "name": "close-report.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\close-report.md",
      "relative_path": "close-report.md",
      "exists": false
    },
    {
      "name": "morning-report.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-report.md",
      "relative_path": "runs/2026-07-07/morning-report.md",
      "exists": true,
      "size": 6265,
      "modified_at": "2026-07-07T09:37:50+08:00",
      "sha256": "5b3e6b63f9ed8f472cc3ad08ef135a154136fed4be56f71c4bffc68a60494f83"
    },
    {
      "name": "noon-report.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\noon-report.md",
      "relative_path": "runs/2026-07-07/noon-report.md",
      "exists": true,
      "size": 4828,
      "modified_at": "2026-07-07T11:37:16+08:00",
      "sha256": "4e26b55c108411a3f90101e04af340163eb33f6e35569e01aaec711c227564b3"
    },
    {
      "name": "review-report.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\review-report.md",
      "relative_path": "review-report.md",
      "exists": false
    },
    {
      "name": "outer-gate.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\outer-gate.json",
      "relative_path": "runs/2026-07-07/outer-gate.json",
      "exists": true,
      "size": 22076,
      "modified_at": "2026-07-07T11:36:07+08:00",
      "sha256": "3738d8705b97d44dfde2dcab82fbf92dbf2301ec47cd7d5e0a7180f93966a8d9"
    },
    {
      "name": "domestic-gate.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\domestic-gate.json",
      "relative_path": "runs/2026-07-07/domestic-gate.json",
      "exists": true,
      "size": 330610,
      "modified_at": "2026-07-07T11:36:31+08:00",
      "sha256": "20d77b8af45a38ce362320d847085e949e71053b7366c8b9b46996169191af7a"
    },
    {
      "name": "emotion-trend-gate.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\emotion-trend-gate.json",
      "relative_path": "runs/2026-07-07/emotion-trend-gate.json",
      "exists": true,
      "size": 17908,
      "modified_at": "2026-07-07T11:36:33+08:00",
      "sha256": "ef082c1349e5bb0483fb5a83fb36ea36ae63f9e77efa95f5fc75637d99c4054e"
    },
    {
      "name": "gates-protocol.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\gates-protocol.json",
      "relative_path": "runs/2026-07-07/gates-protocol.json",
      "exists": true,
      "size": 18193,
      "modified_at": "2026-07-07T11:36:33+08:00",
      "sha256": "ceaec5be4441aba09d77b2451a7d718ed746b1e7854bc12b66150cad04bbe16a"
    },
    {
      "name": "raw-watchlist.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\raw-watchlist.json",
      "relative_path": "runs/2026-07-07/raw-watchlist.json",
      "exists": true,
      "size": 1875782,
      "modified_at": "2026-07-07T11:36:02+08:00",
      "sha256": "56da794ab6076340d2d2db5a74f86d73e8f910da49221401e96b88feb9e5e36c"
    },
    {
      "name": "filtered-pool.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\filtered-pool.json",
      "relative_path": "runs/2026-07-07/filtered-pool.json",
      "exists": true,
      "size": 2374460,
      "modified_at": "2026-07-07T11:36:02+08:00",
      "sha256": "838d4333b435ccb01ede249a09b9411cb57ede9f702e5ef02dcb609d222fff04"
    },
    {
      "name": "candidate-score.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\candidate-score.json",
      "relative_path": "runs/2026-07-07/candidate-score.json",
      "exists": true,
      "size": 68396,
      "modified_at": "2026-07-07T11:36:34+08:00",
      "sha256": "c2c4163a3ab8187a5d9b5d53dffeac10fa635f8a4a3a97253e8ebc8a026a907a"
    },
    {
      "name": "technical-check.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\technical-check.json",
      "relative_path": "runs/2026-07-07/technical-check.json",
      "exists": true,
      "size": 11994,
      "modified_at": "2026-07-07T11:36:35+08:00",
      "sha256": "23e526f09ccb310ab45e39c6579cf0bddd60b82c3d19d91f9719e4c912853449"
    },
    {
      "name": "four-layer-tracking.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.close.json",
      "relative_path": "four-layer-tracking.close.json",
      "exists": false
    },
    {
      "name": "four-layer-tracking.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.morning.json",
      "relative_path": "runs/2026-07-07/four-layer-tracking.morning.json",
      "exists": true,
      "size": 134420,
      "modified_at": "2026-07-07T09:37:49+08:00",
      "sha256": "14f96bb9379ae25f1ad6ac05e49d3f622fec708a1f9b421a043008a9c4eb1b38"
    },
    {
      "name": "four-layer-tracking.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.noon.json",
      "relative_path": "runs/2026-07-07/four-layer-tracking.noon.json",
      "exists": true,
      "size": 134030,
      "modified_at": "2026-07-07T11:37:15+08:00",
      "sha256": "c2339337ddeff6265bde25c7351a4d03e9f62d24d3bcef22ce5701274e62fc0d"
    },
    {
      "name": "four-layer-tracking.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\four-layer-tracking.review.json",
      "relative_path": "four-layer-tracking.review.json",
      "exists": false
    },
    {
      "name": "strategy-benchmark.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\strategy-benchmark.close.json",
      "relative_path": "strategy-benchmark.close.json",
      "exists": false
    },
    {
      "name": "strategy-benchmark.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\strategy-benchmark.morning.json",
      "relative_path": "runs/2026-07-07/strategy-benchmark.morning.json",
      "exists": true,
      "size": 10344,
      "modified_at": "2026-07-07T09:37:51+08:00",
      "sha256": "8bb7850e902c18e861aeeeeadae6903502d7f6bc289dc0dbda5bd29bd8802fc1"
    },
    {
      "name": "strategy-benchmark.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\strategy-benchmark.noon.json",
      "relative_path": "runs/2026-07-07/strategy-benchmark.noon.json",
      "exists": true,
      "size": 10338,
      "modified_at": "2026-07-07T11:37:16+08:00",
      "sha256": "c5d4de0f220224d6d6040161cf0d6f334577791ce05e3d86e656fa7ddfc0d5a6"
    },
    {
      "name": "strategy-benchmark.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\strategy-benchmark.review.json",
      "relative_path": "strategy-benchmark.review.json",
      "exists": false
    },
    {
      "name": "news-notice-sentiment.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\news-notice-sentiment.close.json",
      "relative_path": "news-notice-sentiment.close.json",
      "exists": false
    },
    {
      "name": "news-notice-sentiment.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\news-notice-sentiment.morning.json",
      "relative_path": "runs/2026-07-07/news-notice-sentiment.morning.json",
      "exists": true,
      "size": 32791,
      "modified_at": "2026-07-07T09:37:49+08:00",
      "sha256": "986237752b0113ae1ac67866d79fcda4ace39b38ef1246b3e361643cf17ced1c"
    },
    {
      "name": "news-notice-sentiment.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\news-notice-sentiment.noon.json",
      "relative_path": "runs/2026-07-07/news-notice-sentiment.noon.json",
      "exists": true,
      "size": 32776,
      "modified_at": "2026-07-07T11:37:16+08:00",
      "sha256": "b0216ac843d92281119a900cf1f1423f50ae21ce77612a142f49d372b1d54c1e"
    },
    {
      "name": "news-notice-sentiment.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\news-notice-sentiment.review.json",
      "relative_path": "news-notice-sentiment.review.json",
      "exists": false
    },
    {
      "name": "overnight-report-brief.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\overnight-report-brief.close.json",
      "relative_path": "overnight-report-brief.close.json",
      "exists": false
    },
    {
      "name": "multi-role-review.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\multi-role-review.close.json",
      "relative_path": "multi-role-review.close.json",
      "exists": false
    },
    {
      "name": "multi-role-review.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\multi-role-review.morning.json",
      "relative_path": "runs/2026-07-07/multi-role-review.morning.json",
      "exists": true,
      "size": 4217,
      "modified_at": "2026-07-07T09:37:51+08:00",
      "sha256": "5802b93f8b1612a78b87ca34406c3f403ef608e611365a84822e1b042e131f4b"
    },
    {
      "name": "multi-role-review.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\multi-role-review.noon.json",
      "relative_path": "runs/2026-07-07/multi-role-review.noon.json",
      "exists": true,
      "size": 4168,
      "modified_at": "2026-07-07T11:37:17+08:00",
      "sha256": "a6ad09213f7a15a18d1e03413dde37e5f09f5e6c99afea624b4d333e0aadfad2"
    },
    {
      "name": "multi-role-review.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\multi-role-review.review.json",
      "relative_path": "multi-role-review.review.json",
      "exists": false
    },
    {
      "name": "report-quality-audit.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\report-quality-audit.close.json",
      "relative_path": "report-quality-audit.close.json",
      "exists": false
    },
    {
      "name": "report-quality-audit.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\report-quality-audit.morning.json",
      "relative_path": "runs/2026-07-07/report-quality-audit.morning.json",
      "exists": true,
      "size": 1398,
      "modified_at": "2026-07-07T09:37:51+08:00",
      "sha256": "3372f5c2949c722f3236851b0715fd43919c902b9ce21c055639a117179244c9"
    },
    {
      "name": "report-quality-audit.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\report-quality-audit.noon.json",
      "relative_path": "runs/2026-07-07/report-quality-audit.noon.json",
      "exists": true,
      "size": 1491,
      "modified_at": "2026-07-07T11:37:17+08:00",
      "sha256": "16c88c75a5dd7ba3637fb95136885ef7e7e0bb87a4da67b36ab2b79dbc16ac31"
    },
    {
      "name": "report-quality-audit.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\report-quality-audit.review.json",
      "relative_path": "report-quality-audit.review.json",
      "exists": false
    },
    {
      "name": "second-review.longxia.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\second-review.longxia.review.json",
      "relative_path": "second-review.longxia.review.json",
      "exists": false
    },
    {
      "name": "second-review.longxia.review.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\second-review.longxia.review.md",
      "relative_path": "second-review.longxia.review.md",
      "exists": false
    },
    {
      "name": "longxia-second-review-validation.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\longxia-second-review-validation.json",
      "relative_path": "longxia-second-review-validation.json",
      "exists": false
    },
    {
      "name": "longxia-second-review-validation.md",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\longxia-second-review-validation.md",
      "relative_path": "longxia-second-review-validation.md",
      "exists": false
    },
    {
      "name": "sector-split.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\sector-split.json",
      "relative_path": "runs/2026-07-07/sector-split.json",
      "exists": true,
      "size": 195601,
      "modified_at": "2026-07-07T11:36:35+08:00",
      "sha256": "0c1087c260b58d633d1b0c2f8ad6115d18f5ee13acc230615d10fdea8f08ef39"
    },
    {
      "name": "execution-inputs.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\execution-inputs.json",
      "relative_path": "runs/2026-07-07/execution-inputs.json",
      "exists": true,
      "size": 1700,
      "modified_at": "2026-07-07T11:36:35+08:00",
      "sha256": "e0538e5c12509cb0ae984776ffc5a7f44f29906177f531d0aa0e2d6d89c3c7d6"
    },
    {
      "name": "execution-decision.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\execution-decision.json",
      "relative_path": "runs/2026-07-07/execution-decision.json",
      "exists": true,
      "size": 833,
      "modified_at": "2026-07-07T11:36:35+08:00",
      "sha256": "c09e3c5f413634feb4beef590574f2c1400fe46b86501136b819b9c7873aff10"
    },
    {
      "name": "morning-precheck.prefetch.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-precheck.prefetch.json",
      "relative_path": "runs/2026-07-07/morning-precheck.prefetch.json",
      "exists": true,
      "size": 3974,
      "modified_at": "2026-07-07T09:37:17+08:00",
      "sha256": "d113200953e97a803d68c3005f3d5562ce94cbea37ef324c46818c4073f34b53"
    },
    {
      "name": "morning-risk-precheck.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\morning-risk-precheck.json",
      "relative_path": "runs/2026-07-07/morning-risk-precheck.json",
      "exists": true,
      "size": 5160,
      "modified_at": "2026-07-07T09:37:17+08:00",
      "sha256": "983f3733402e20092d613f33cb42424fbcb84d182d40a39551f68eb2b6dc0afc"
    },
    {
      "name": "data-acquisition-health.close.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-acquisition-health.close.json",
      "relative_path": "data-acquisition-health.close.json",
      "exists": false
    },
    {
      "name": "data-acquisition-health.morning.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-acquisition-health.morning.json",
      "relative_path": "runs/2026-07-07/data-acquisition-health.morning.json",
      "exists": true,
      "size": 9428,
      "modified_at": "2026-07-07T09:37:51+08:00",
      "sha256": "89e046880e77b7469362f57cbc7a8af052595da88d596fc6d31e6b40e56fed4a"
    },
    {
      "name": "data-acquisition-health.noon.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-acquisition-health.noon.json",
      "relative_path": "runs/2026-07-07/data-acquisition-health.noon.json",
      "exists": true,
      "size": 9308,
      "modified_at": "2026-07-07T11:37:16+08:00",
      "sha256": "c6cd01e61b244f385b9e4a5171a52050062f19f6f56c148f4f7dea69e837cacb"
    },
    {
      "name": "data-acquisition-health.review.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-acquisition-health.review.json",
      "relative_path": "data-acquisition-health.review.json",
      "exists": false
    },
    {
      "name": "market-data.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\market-data.json",
      "relative_path": "market-data.json",
      "exists": false
    },
    {
      "name": "paper-trade-ledger.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\paper-trade-ledger.json",
      "relative_path": "paper-trade-ledger.json",
      "exists": false
    },
    {
      "name": "paper-trade-summary.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\paper-trade-summary.json",
      "relative_path": "paper-trade-summary.json",
      "exists": false
    },
    {
      "name": "close-confirmation.1501.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\close-confirmation.1501.json",
      "relative_path": "close-confirmation.1501.json",
      "exists": false
    },
    {
      "name": "close-watchlist.1501.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\close-watchlist.1501.json",
      "relative_path": "close-watchlist.1501.json",
      "exists": false
    },
    {
      "name": "close-snapshot.1501.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\close-snapshot.1501.json",
      "relative_path": "close-snapshot.1501.json",
      "exists": false
    },
    {
      "name": "close-confirmation.1501-run.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\close-confirmation.1501-run.json",
      "relative_path": "close-confirmation.1501-run.json",
      "exists": false
    },
    {
      "name": "pool-governance.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\pool-governance.json",
      "relative_path": "pool-governance.json",
      "exists": false
    },
    {
      "name": "workflow-manifest.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\workflow-manifest.json",
      "relative_path": "runs/2026-07-07/workflow-manifest.json",
      "exists": true,
      "size": 165684,
      "modified_at": "2026-07-07T11:37:17+08:00",
      "sha256": "3a4e3e1828030280d6e6f52808b3ab1780e11f2a25394587ece0abfe5237cb9a"
    },
    {
      "name": "data-lineage.json",
      "path": "C:\\Users\\1\\.openclaw-tdxclaw\\.openclaw\\workspace-tdxclaw\\tdx-ag-three-period-split\\runs\\2026-07-07\\data-lineage.json",
      "relative_path": "runs/2026-07-07/data-lineage.json",
      "exists": true,
      "size": 53919,
      "modified_at": "2026-07-07T11:37:17+08:00",
      "sha256": "281be0056941ecfb641bb58ee758ddda5eada411fae2edb8a219a73ffe18f064"
    }
  ],
  "summary": {
    "reports_present": 2,
    "json_invalid": 0,
    "candidates_visible": 1,
    "four_layer_visible": 23,
    "rule_upgrade_pending": 0,
    "trader_review_status": "missing",
    "data_sources_ok": 28,
    "warnings": 0,
    "automation_missed": 0,
    "automation_failed": 0,
    "automation_incomplete": 0,
    "lineage_nodes": 38,
    "automation_status_counts": {
      "complete": 2,
      "not_due": 2
    },
    "panel_payload_mode": "full"
  },
  "warnings": [],
  "deferred_full_state_keys": []
};
