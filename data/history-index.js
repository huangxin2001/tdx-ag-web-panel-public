window.THREE_PERIOD_PANEL_HISTORY_INDEX = {
  "schema_version": "web-panel-history-index/v1",
  "generated_at": "2026-06-30T15:01:39+08:00",
  "project": {
    "name": "tdx-ag-three-period-split"
  },
  "source": {
    "runs_dir": "runs",
    "today": "2026-06-30",
    "filter": "strict real run dates"
  },
  "dates": [
    {
      "date": "2026-06-30",
      "status": "partial",
      "reports_present": 3,
      "reports_missing": [
        "review"
      ],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2138,
          "file": {
            "relative_path": "runs/2026-06-30/close-report.md",
            "exists": true,
            "size": 5254,
            "modified_at": "2026-06-30T14:55:01+08:00",
            "sha256": "82bb22abc53736ecaa6b06ae63ea496862b3cfa7d5855d73cd2c13936d31ba23"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-30T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2095,
          "file": {
            "relative_path": "runs/2026-06-30/morning-report.md",
            "exists": true,
            "size": 5095,
            "modified_at": "2026-06-30T09:36:42+08:00",
            "sha256": "bb6e5f9905a86cec307595f7b424c345ffa240e51e4bb34f55521cf1c03e2709"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-30T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1852,
          "file": {
            "relative_path": "runs/2026-06-30/noon-report.md",
            "exists": true,
            "size": 4649,
            "modified_at": "2026-06-30T13:22:58+08:00",
            "sha256": "c1f94375e331e0e03d85f5d42a04260d86a004805e00c1aeb03f66c8a06f0859"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-30T11:35+08:00",
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
        "review": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "review-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-30T20:00+08:00",
            "due": false,
            "automation_status": "not_due",
            "automation_status_label": "未到计划时间",
            "diagnosis_cn": "未到计划时间",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-29",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2738,
          "file": {
            "relative_path": "runs/2026-06-29/close-report.md",
            "exists": true,
            "size": 6857,
            "modified_at": "2026-06-29T14:59:26+08:00",
            "sha256": "074da6dedd6a5eaad3b7f4d88b58aa341ade7cca10e16f391cba4eb8c5cbe2cc"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-29T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2551,
          "file": {
            "relative_path": "runs/2026-06-29/morning-report.md",
            "exists": true,
            "size": 6481,
            "modified_at": "2026-06-29T09:37:08+08:00",
            "sha256": "207b4556d89d80c69c4a75c96f1cd1acf52183634a92c83a34b27f445dda4707"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-29T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1439,
          "file": {
            "relative_path": "runs/2026-06-29/noon-report.md",
            "exists": true,
            "size": 3728,
            "modified_at": "2026-06-29T11:36:28+08:00",
            "sha256": "863ad89e6a53c9a4d99e97f7259dfa67bea940de92c976d10bbaf983354bf2c7"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-29T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 5100,
          "file": {
            "relative_path": "runs/2026-06-29/review-report.md",
            "exists": true,
            "size": 13117,
            "modified_at": "2026-06-29T20:02:41+08:00",
            "sha256": "b9292bfda3db68392d353dc59915426f440a2c08b7b51ffdb7bf9b3761cb067f"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-29T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-26",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2564,
          "file": {
            "relative_path": "runs/2026-06-26/close-report.md",
            "exists": true,
            "size": 6376,
            "modified_at": "2026-06-26T14:53:14+08:00",
            "sha256": "2cc2e5df0b8b828bdb850958e989827d1d6b7744efb3cc4093a992cc9a703259"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-26T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2463,
          "file": {
            "relative_path": "runs/2026-06-26/morning-report.md",
            "exists": true,
            "size": 6094,
            "modified_at": "2026-06-26T09:37:06+08:00",
            "sha256": "8e7a4947879353db5f3d0851e3fa4663a276aa22d1e0400b125105546e937d15"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-26T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1961,
          "file": {
            "relative_path": "runs/2026-06-26/noon-report.md",
            "exists": true,
            "size": 5055,
            "modified_at": "2026-06-26T11:36:10+08:00",
            "sha256": "313743ed3c54528b6b6cf7324d8ba1f83aaf5073ee3407b70cdec861d9dc5a3f"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-26T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 5086,
          "file": {
            "relative_path": "runs/2026-06-26/review-report.md",
            "exists": true,
            "size": 12534,
            "modified_at": "2026-06-26T20:04:19+08:00",
            "sha256": "d5ec255f0156e1a8217a55cfe99deac9c3e9855d3d4b0ea9c130f9d6d4dc35ec"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-26T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-25",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2703,
          "file": {
            "relative_path": "runs/2026-06-25/close-report.md",
            "exists": true,
            "size": 6753,
            "modified_at": "2026-06-25T15:11:43+08:00",
            "sha256": "c6bacd0583ae0cbd4e9b99cf3ddeaaf043a240562cefd626f6c3d6b760329098"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-25T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2468,
          "file": {
            "relative_path": "runs/2026-06-25/morning-report.md",
            "exists": true,
            "size": 6270,
            "modified_at": "2026-06-25T09:36:51+08:00",
            "sha256": "c5944b03562e1a98501f2da9590900219b499288a3852e19e9069f098fc22ee3"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-25T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1970,
          "file": {
            "relative_path": "runs/2026-06-25/noon-report.md",
            "exists": true,
            "size": 5006,
            "modified_at": "2026-06-25T11:36:33+08:00",
            "sha256": "b108f50307c16ad2a4e353e5fb7128cff41849d1cf17ac4b14a508154a371095"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-25T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 6398,
          "file": {
            "relative_path": "runs/2026-06-25/review-report.md",
            "exists": true,
            "size": 15848,
            "modified_at": "2026-06-25T22:02:41+08:00",
            "sha256": "4d6f599ac8c50bd8a2baf014dfd0257ebf3fc3c5f8af38991946f7ba3f81d20c"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-25T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-24",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 3021,
          "file": {
            "relative_path": "runs/2026-06-24/close-report.md",
            "exists": true,
            "size": 7372,
            "modified_at": "2026-06-24T14:58:48+08:00",
            "sha256": "fca900381162d5bad4cc6d7218a684092b9d56577a49830b831755b8fd00924a"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-24T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2595,
          "file": {
            "relative_path": "runs/2026-06-24/morning-report.md",
            "exists": true,
            "size": 6414,
            "modified_at": "2026-06-24T09:36:46+08:00",
            "sha256": "489f31b1d5075acd3132c818d6bb107a840ffc0aaab2e101f0329ac66a65eca3"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-24T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1857,
          "file": {
            "relative_path": "runs/2026-06-24/noon-report.md",
            "exists": true,
            "size": 4728,
            "modified_at": "2026-06-24T11:36:22+08:00",
            "sha256": "40fc4c04828bc3f5a370170fb0b783d6e747fec6d2a529bd114d84a01a8bd20e"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-24T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 5140,
          "file": {
            "relative_path": "runs/2026-06-24/review-report.md",
            "exists": true,
            "size": 12986,
            "modified_at": "2026-06-24T20:01:23+08:00",
            "sha256": "58f5421fd08421ed417f2f87492c51a8ba8603a3a3725620489c2f518d3e5c8e"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-24T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-23",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2814,
          "file": {
            "relative_path": "runs/2026-06-23/close-report.md",
            "exists": true,
            "size": 6981,
            "modified_at": "2026-06-23T14:53:11+08:00",
            "sha256": "22d484a6fa049c294a709d323a420f017ce79ae5677924551c6f460831a20613"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-23T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2483,
          "file": {
            "relative_path": "runs/2026-06-23/morning-report.md",
            "exists": true,
            "size": 6344,
            "modified_at": "2026-06-23T09:36:45+08:00",
            "sha256": "816cbdb68c5b2178ec6db3bdf81fd44bffbdf0762030eb62cb1f8a22f0e6b7ad"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-23T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1448,
          "file": {
            "relative_path": "runs/2026-06-23/noon-report.md",
            "exists": true,
            "size": 3755,
            "modified_at": "2026-06-23T11:36:45+08:00",
            "sha256": "7431a63565660e7a6974c40b606c20c2553ac24d4c1f2ef3811c69940a91bd11"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-23T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 4663,
          "file": {
            "relative_path": "runs/2026-06-23/review-report.md",
            "exists": true,
            "size": 12133,
            "modified_at": "2026-06-23T20:01:16+08:00",
            "sha256": "8637455ad539a780e0b065b10933fde1f31424907b35ef121fcba19bbf651817"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-23T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-22",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2696,
          "file": {
            "relative_path": "runs/2026-06-22/close-report.md",
            "exists": true,
            "size": 6633,
            "modified_at": "2026-06-22T14:53:33+08:00",
            "sha256": "2b16704b8ad16f7f762578e8d7b4f061ea231b9a70f1c61ddd70fa43893cbb5b"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-22T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2778,
          "file": {
            "relative_path": "runs/2026-06-22/morning-report.md",
            "exists": true,
            "size": 6839,
            "modified_at": "2026-06-22T10:00:31+08:00",
            "sha256": "140e8c637449e54157466110f64fc5eb7690709d819596ef07cd638f52716c27"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-22T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1933,
          "file": {
            "relative_path": "runs/2026-06-22/noon-report.md",
            "exists": true,
            "size": 4895,
            "modified_at": "2026-06-22T11:36:46+08:00",
            "sha256": "2057f0c0ce36afb32776b34f41df6b9d49f413cb1ea1daf4849560537fabd87e"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-22T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 5196,
          "file": {
            "relative_path": "runs/2026-06-22/review-report.md",
            "exists": true,
            "size": 13136,
            "modified_at": "2026-06-22T20:22:39+08:00",
            "sha256": "11e8f315a3015c38474820c7679028f33075d9d1bce6cd9aea2286f62d50cfbe"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-22T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-19",
      "status": "empty",
      "reports_present": 0,
      "reports_missing": [
        "close",
        "morning",
        "noon",
        "review"
      ],
      "reports": {
        "close": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "close-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-19T14:50+08:00",
            "due": true,
            "automation_status": "device_offline_or_codex_not_running",
            "automation_status_label": "设备离线或 Codex 未运行",
            "diagnosis_cn": "计划时间已过，但运行目录没有可用产物，疑似电脑离线、Codex 未运行或自动化没有被触发。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "morning-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-19T09:35+08:00",
            "due": true,
            "automation_status": "device_offline_or_codex_not_running",
            "automation_status_label": "设备离线或 Codex 未运行",
            "diagnosis_cn": "计划时间已过，但运行目录没有可用产物，疑似电脑离线、Codex 未运行或自动化没有被触发。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.morning.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
          }
        },
        "noon": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "noon-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-19T11:35+08:00",
            "due": true,
            "automation_status": "device_offline_or_codex_not_running",
            "automation_status_label": "设备离线或 Codex 未运行",
            "diagnosis_cn": "计划时间已过，但运行目录没有可用产物，疑似电脑离线、Codex 未运行或自动化没有被触发。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.noon.json",
            "precondition_gaps_cn": [
              "当天早报未成功生成，午报不能补选新票。"
            ],
            "recovery_boundary_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
          }
        },
        "review": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "review-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-19T20:00+08:00",
            "due": true,
            "automation_status": "device_offline_or_codex_not_running",
            "automation_status_label": "设备离线或 Codex 未运行",
            "diagnosis_cn": "计划时间已过，但运行目录没有可用产物，疑似电脑离线、Codex 未运行或自动化没有被触发。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [
              "复盘缺少成功前三报：收盘报、早报、午报"
            ],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-18",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2744,
          "file": {
            "relative_path": "runs/2026-06-18/close-report.md",
            "exists": true,
            "size": 6768,
            "modified_at": "2026-06-18T14:57:34+08:00",
            "sha256": "4767eebf04936c56b6e3ea222808d634fa87d99b7998a97538731166f36d397f"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-18T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2457,
          "file": {
            "relative_path": "runs/2026-06-18/morning-report.md",
            "exists": true,
            "size": 6104,
            "modified_at": "2026-06-18T09:36:37+08:00",
            "sha256": "9aba434f9abca9b4d321ca45f6546c778222107c1ff564bb1a1cc3647ac7ada7"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-18T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1775,
          "file": {
            "relative_path": "runs/2026-06-18/noon-report.md",
            "exists": true,
            "size": 4525,
            "modified_at": "2026-06-18T11:36:07+08:00",
            "sha256": "a3c16d84fc87e30375941a7e38f29b70edde20f3d8fba7d7e4734c505f7d41cc"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-18T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 4683,
          "file": {
            "relative_path": "runs/2026-06-18/review-report.md",
            "exists": true,
            "size": 11848,
            "modified_at": "2026-06-18T20:01:31+08:00",
            "sha256": "99c6cec9ca3194e499845d0d1b6a9767dc711d860f39a49744af37130763e874"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-18T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-17",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2507,
          "file": {
            "relative_path": "runs/2026-06-17/close-report.md",
            "exists": true,
            "size": 6186,
            "modified_at": "2026-06-17T14:52:52+08:00",
            "sha256": "97d6e6084c2ad3ba716987dd5cc00cd6f8e11a4d1e52f199cbae0922580944c4"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-17T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 3013,
          "file": {
            "relative_path": "runs/2026-06-17/morning-report.md",
            "exists": true,
            "size": 7386,
            "modified_at": "2026-06-17T10:52:08+08:00",
            "sha256": "32b61d071ac43991ab9ab50ec9d8d31165ff7dad0276aa37fc0f39c885684b3e"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-17T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 2599,
          "file": {
            "relative_path": "runs/2026-06-17/noon-report.md",
            "exists": true,
            "size": 6463,
            "modified_at": "2026-06-17T11:52:27+08:00",
            "sha256": "67862f722a75dfaa40c9179146bd00ddd1d208eb6189222d3c2a0204c32a3bf4"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-17T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 5606,
          "file": {
            "relative_path": "runs/2026-06-17/review-report.md",
            "exists": true,
            "size": 14007,
            "modified_at": "2026-06-17T20:01:38+08:00",
            "sha256": "8d525a8bb077e85150798d743c163d2ec4c4816af2ead092e4c36a80393b525c"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-17T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-16",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2597,
          "file": {
            "relative_path": "runs/2026-06-16/close-report.md",
            "exists": true,
            "size": 6243,
            "modified_at": "2026-06-16T14:52:46+08:00",
            "sha256": "3a6a8067f9ae6b2e49e7f687ec5af6d70be6797fb24c86e41fdd44c2a6bfdd79"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-16T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 1941,
          "file": {
            "relative_path": "runs/2026-06-16/morning-report.md",
            "exists": true,
            "size": 4770,
            "modified_at": "2026-06-16T09:36:42+08:00",
            "sha256": "6702dd2f90139e5d51ce5efe79f583a92709f3342c513f1b23622a3ddcc3f6a1"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-16T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 2163,
          "file": {
            "relative_path": "runs/2026-06-16/noon-report.md",
            "exists": true,
            "size": 5554,
            "modified_at": "2026-06-16T11:36:54+08:00",
            "sha256": "759dc920eb6d89e537c5b0870a86c56e269216180696ebe74e4d1e9721fac13d"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-16T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 5651,
          "file": {
            "relative_path": "runs/2026-06-16/review-report.md",
            "exists": true,
            "size": 14368,
            "modified_at": "2026-06-16T20:01:24+08:00",
            "sha256": "65fc8ae838bec8d754b184be396517ba4312d9dea6018a73cd260dd20a3353e9"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-16T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-15",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2992,
          "file": {
            "relative_path": "runs/2026-06-15/close-report.md",
            "exists": true,
            "size": 7081,
            "modified_at": "2026-06-15T14:51:53+08:00",
            "sha256": "a07f7e62e71baabe15924b7f1c616300f70604f6824408ff0a4089801b4e937b"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-15T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2826,
          "file": {
            "relative_path": "runs/2026-06-15/morning-report.md",
            "exists": true,
            "size": 6848,
            "modified_at": "2026-06-15T09:36:16+08:00",
            "sha256": "9a230d962313caccc1297d74c94eb1d69545d6b0452b1468d9078961e4067aa7"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-15T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1633,
          "file": {
            "relative_path": "runs/2026-06-15/noon-report.md",
            "exists": true,
            "size": 4180,
            "modified_at": "2026-06-15T11:36:10+08:00",
            "sha256": "9703785fec1da36dde6aab405f22d541fff0969293b26dee329f41ecd05da149"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-15T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 5400,
          "file": {
            "relative_path": "runs/2026-06-15/review-report.md",
            "exists": true,
            "size": 13861,
            "modified_at": "2026-06-15T20:01:19+08:00",
            "sha256": "bbfcf928c5ef3a3f4f9cf7c161b5f26cd1937ea01c9fa53aacf344cfc0b1aad3"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-15T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-12",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2378,
          "file": {
            "relative_path": "runs/2026-06-12/close-report.md",
            "exists": true,
            "size": 5974,
            "modified_at": "2026-06-12T14:52:52+08:00",
            "sha256": "2244a4445f7a865d16af6f0886555530b64e9b2be6f5c7896eab4515ea4b720f"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-12T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2364,
          "file": {
            "relative_path": "runs/2026-06-12/morning-report.md",
            "exists": true,
            "size": 5923,
            "modified_at": "2026-06-12T09:36:27+08:00",
            "sha256": "9129769f7fea577af3edf7056d96fc4e14c03a308e0947c345f1e4ccc5e27237"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-12T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1738,
          "file": {
            "relative_path": "runs/2026-06-12/noon-report.md",
            "exists": true,
            "size": 4418,
            "modified_at": "2026-06-12T11:35:51+08:00",
            "sha256": "a16a33e104106e7dd03c26e2beb95311366da8cd625d1fef88c62be8c36184f1"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-12T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 5477,
          "file": {
            "relative_path": "runs/2026-06-12/review-report.md",
            "exists": true,
            "size": 13658,
            "modified_at": "2026-06-12T20:01:17+08:00",
            "sha256": "a370ef22784a1db7187fe44955d2771d5d7759a7a2f84b7782f3d6999e1c52af"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-12T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-11",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2975,
          "file": {
            "relative_path": "runs/2026-06-11/close-report.md",
            "exists": true,
            "size": 7261,
            "modified_at": "2026-06-11T14:51:50+08:00",
            "sha256": "3e4b08d81c895dc3ce1fee58a46e00cdcc09d64ce946af97f1419b255ba40b2d"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-11T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 3090,
          "file": {
            "relative_path": "runs/2026-06-11/morning-report.md",
            "exists": true,
            "size": 7422,
            "modified_at": "2026-06-11T10:44:10+08:00",
            "sha256": "4513697b720e4ab039a196a31c938d3a15236537aa055c2892c1e00e614c52de"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-11T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 2208,
          "file": {
            "relative_path": "runs/2026-06-11/noon-report.md",
            "exists": true,
            "size": 5469,
            "modified_at": "2026-06-11T11:36:53+08:00",
            "sha256": "1035c98baad68af9a012eb59b9d8c320d94a1559eab191e9b4b5bffd0850cb30"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-11T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 5666,
          "file": {
            "relative_path": "runs/2026-06-11/review-report.md",
            "exists": true,
            "size": 14024,
            "modified_at": "2026-06-11T20:01:40+08:00",
            "sha256": "8a78f5e21fed6373570fb3654dee8e8c9c5294ec006378ffb39d111ac57243bf"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-11T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-10",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2380,
          "file": {
            "relative_path": "runs/2026-06-10/close-report.md",
            "exists": true,
            "size": 5837,
            "modified_at": "2026-06-10T14:52:11+08:00",
            "sha256": "18ddb6c62a1756725fc12eee793278bec93298b74053f1a132bbd18b57aeebcc"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-10T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2182,
          "file": {
            "relative_path": "runs/2026-06-10/morning-report.md",
            "exists": true,
            "size": 5474,
            "modified_at": "2026-06-10T09:36:45+08:00",
            "sha256": "01524558849b6775f091e5284ba0f2988fb8e7121fe21efb8344f20a9cfee8a2"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-10T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1504,
          "file": {
            "relative_path": "runs/2026-06-10/noon-report.md",
            "exists": true,
            "size": 3885,
            "modified_at": "2026-06-10T11:35:57+08:00",
            "sha256": "e691d5c4be6cf2da3f35382b895549a3238c6e90b3280f1f184c4577af0b69ee"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-10T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 4219,
          "file": {
            "relative_path": "runs/2026-06-10/review-report.md",
            "exists": true,
            "size": 10922,
            "modified_at": "2026-06-10T20:00:55+08:00",
            "sha256": "aa478249263e607d0c7dfd9d2a7a5e3e22b6fa7fcd8942e6ae033127f7c5faf5"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-10T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-09",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2201,
          "file": {
            "relative_path": "runs/2026-06-09/close-report.md",
            "exists": true,
            "size": 5465,
            "modified_at": "2026-06-09T14:52:24+08:00",
            "sha256": "9f9cea5b5efd336da25e2deb24f5a3e2e262fdb28e12eb6b351c42b59126b454"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-09T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2268,
          "file": {
            "relative_path": "runs/2026-06-09/morning-report.md",
            "exists": true,
            "size": 5764,
            "modified_at": "2026-06-09T09:36:21+08:00",
            "sha256": "6e39c609800c8c9d3d5b36ceca28906fd4e9f52ee3ed9c63a6a12fb682aaf576"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-09T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1487,
          "file": {
            "relative_path": "runs/2026-06-09/noon-report.md",
            "exists": true,
            "size": 3878,
            "modified_at": "2026-06-09T11:36:10+08:00",
            "sha256": "24d44fd8efc598f778cde6db9f10e72bacf25d7c7317b8cd43b4c5c916a51c66"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-09T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 4454,
          "file": {
            "relative_path": "runs/2026-06-09/review-report.md",
            "exists": true,
            "size": 11479,
            "modified_at": "2026-06-09T20:00:52+08:00",
            "sha256": "3f0f42628860c16438063828b7c7ffb4735730dee0bb1ec95f23bc921c317ad1"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-09T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-08",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2330,
          "file": {
            "relative_path": "runs/2026-06-08/close-report.md",
            "exists": true,
            "size": 5834,
            "modified_at": "2026-06-08T14:53:18+08:00",
            "sha256": "04de4faed769a196cc61f11f3a902384b161d23fd456b1499d8615a1b95d6dc6"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-08T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 1802,
          "file": {
            "relative_path": "runs/2026-06-08/morning-report.md",
            "exists": true,
            "size": 4499,
            "modified_at": "2026-06-08T09:36:55+08:00",
            "sha256": "b0bf40fd57c62756cec2ec22a3eee7f81f33aef7657f3fc3ff1e1c0cae26b464"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-08T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1874,
          "file": {
            "relative_path": "runs/2026-06-08/noon-report.md",
            "exists": true,
            "size": 4850,
            "modified_at": "2026-06-08T11:37:20+08:00",
            "sha256": "a05069ba9e0d7717b2dba4835e1f347ab5667194e7743f684c4ab06b2047c886"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-08T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 5166,
          "file": {
            "relative_path": "runs/2026-06-08/review-report.md",
            "exists": true,
            "size": 13018,
            "modified_at": "2026-06-08T20:01:21+08:00",
            "sha256": "25bb5a9121c067d9811a70bc3d01aa56484415e26d44e7fa9fddd3350ee9953d"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-08T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-05",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2527,
          "file": {
            "relative_path": "runs/2026-06-05/close-report.md",
            "exists": true,
            "size": 6243,
            "modified_at": "2026-06-05T14:52:09+08:00",
            "sha256": "849a19117d3f782495927a35bb4ab4d81ea57e79a27727a8dfb7d2c5fad6724a"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-05T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2096,
          "file": {
            "relative_path": "runs/2026-06-05/morning-report.md",
            "exists": true,
            "size": 5208,
            "modified_at": "2026-06-05T09:36:24+08:00",
            "sha256": "603fbafc465d31d47e9808109711ceccd56c4b19c71bf704c854d9c9c9799009"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-05T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1767,
          "file": {
            "relative_path": "runs/2026-06-05/noon-report.md",
            "exists": true,
            "size": 4447,
            "modified_at": "2026-06-05T11:36:10+08:00",
            "sha256": "4762c7f5e289df3e24ad65ba16ef13e8778714542582a195e94b5a0c2118f8a3"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-05T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 4264,
          "file": {
            "relative_path": "runs/2026-06-05/review-report.md",
            "exists": true,
            "size": 10820,
            "modified_at": "2026-06-05T21:00:24+08:00",
            "sha256": "587739c0c78a1fb1ad576fc1e170ff9f33dfdbc0f33947bca09334f41d2576da"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-05T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-04",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2922,
          "file": {
            "relative_path": "runs/2026-06-04/close-report.md",
            "exists": true,
            "size": 7476,
            "modified_at": "2026-06-04T14:52:10+08:00",
            "sha256": "46a299f9d6ad42404f88f52f995059d2abe5e90b7d9a26cc7ff2010302b785af"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-04T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2563,
          "file": {
            "relative_path": "runs/2026-06-04/morning-report.md",
            "exists": true,
            "size": 6448,
            "modified_at": "2026-06-04T09:36:11+08:00",
            "sha256": "043b08ae5ddab3a002ecc0858bf8c8f6d8ca5e2e54548e785cefb0dd3b63f3c4"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-04T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1869,
          "file": {
            "relative_path": "runs/2026-06-04/noon-report.md",
            "exists": true,
            "size": 4774,
            "modified_at": "2026-06-04T11:35:54+08:00",
            "sha256": "c2973efabec7dc08bd99a7dec88abd53a704ed43bb610089da98fb30e47f2c7e"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-04T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 4866,
          "file": {
            "relative_path": "runs/2026-06-04/review-report.md",
            "exists": true,
            "size": 12320,
            "modified_at": "2026-06-04T20:00:57+08:00",
            "sha256": "b194d552b295f2dea5a0d1cf4f7abd0d2be603f482d49e5d13df1155e959c99f"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-04T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-03",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2622,
          "file": {
            "relative_path": "runs/2026-06-03/close-report.md",
            "exists": true,
            "size": 6478,
            "modified_at": "2026-06-03T14:51:58+08:00",
            "sha256": "36e71922c49f5f2e3674cece348dbe1f36ba67ad3e2720381174a47fcc5e0f18"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-03T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2417,
          "file": {
            "relative_path": "runs/2026-06-03/morning-report.md",
            "exists": true,
            "size": 5927,
            "modified_at": "2026-06-03T09:36:16+08:00",
            "sha256": "8edbc921569d6e1bc5d6253a055b874863e7319b2dd1187259bab442c51d2f88"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-03T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1735,
          "file": {
            "relative_path": "runs/2026-06-03/noon-report.md",
            "exists": true,
            "size": 4397,
            "modified_at": "2026-06-03T11:37:03+08:00",
            "sha256": "35ebeadc5d724fef0f563af5dab7815325addc31fad9940b0fecfa13b3ff1063"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-03T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 5508,
          "file": {
            "relative_path": "runs/2026-06-03/review-report.md",
            "exists": true,
            "size": 13687,
            "modified_at": "2026-06-03T22:09:17+08:00",
            "sha256": "ca4a9d38503211d915552fa75698588cc60a5bcb6a9ba118c666ee448cd700be"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-03T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-02",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2914,
          "file": {
            "relative_path": "runs/2026-06-02/close-report.md",
            "exists": true,
            "size": 7165,
            "modified_at": "2026-06-02T14:51:51+08:00",
            "sha256": "ffa34609b2a46c51ea281bbaf658f3ec1231b34e80cf905f3d3dade2fc21413c"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-02T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 3438,
          "file": {
            "relative_path": "runs/2026-06-02/morning-report.md",
            "exists": true,
            "size": 8488,
            "modified_at": "2026-06-02T10:14:03+08:00",
            "sha256": "00287bcc1e95729364939dfea4d9ccca2a4a7f837911a4c6fd0373390cbf5531"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-02T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 2540,
          "file": {
            "relative_path": "runs/2026-06-02/noon-report.md",
            "exists": true,
            "size": 6354,
            "modified_at": "2026-06-02T12:21:50+08:00",
            "sha256": "ab5246562f06d246397bff9cf3e89d4b02d1d0b00bf0b2df411b69949403c137"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-02T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 4387,
          "file": {
            "relative_path": "runs/2026-06-02/review-report.md",
            "exists": true,
            "size": 10858,
            "modified_at": "2026-06-02T20:00:20+08:00",
            "sha256": "27b78a3cb9ddc40c35f049fde779cfeda175322c361ea1e67816e7c5be07f431"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-02T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-06-01",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 3038,
          "file": {
            "relative_path": "runs/2026-06-01/close-report.md",
            "exists": true,
            "size": 7540,
            "modified_at": "2026-06-01T14:53:16+08:00",
            "sha256": "986c1d8f89c44f2ba62f7e501b5c4edafd17b1c23c4b9ebf1b4cfd2acb955723"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-06-01T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2746,
          "file": {
            "relative_path": "runs/2026-06-01/morning-report.md",
            "exists": true,
            "size": 7049,
            "modified_at": "2026-06-01T10:19:42+08:00",
            "sha256": "3d0ccf0600d324c941821fed55b7e3d60cae2287fd293a378130ca208c897451"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-06-01T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1460,
          "file": {
            "relative_path": "runs/2026-06-01/noon-report.md",
            "exists": true,
            "size": 3747,
            "modified_at": "2026-06-01T11:35:53+08:00",
            "sha256": "113b244724da5090dc6c59b4eb450f892ac6e39c49ed4ba2a3aeff7da0fbec64"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-06-01T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 4117,
          "file": {
            "relative_path": "runs/2026-06-01/review-report.md",
            "exists": true,
            "size": 10328,
            "modified_at": "2026-06-01T20:00:16+08:00",
            "sha256": "708c8930ef21442359fb3b323f98003bd8ec49e5460398a954809b26a808eb8a"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-06-01T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-29",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2883,
          "file": {
            "relative_path": "runs/2026-05-29/close-report.md",
            "exists": true,
            "size": 7248,
            "modified_at": "2026-05-30T16:34:12+08:00",
            "sha256": "cfa0bbad21e4ba91b3a940ca9691f5156b2f982a90966407ff58254b50344833"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-29T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2638,
          "file": {
            "relative_path": "runs/2026-05-29/morning-report.md",
            "exists": true,
            "size": 6797,
            "modified_at": "2026-05-30T16:34:12+08:00",
            "sha256": "61582b0e2dedf9baf6e63a3b7f999aca421decb5289fd2b0ae21db07e8e681b0"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-29T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1450,
          "file": {
            "relative_path": "runs/2026-05-29/noon-report.md",
            "exists": true,
            "size": 3765,
            "modified_at": "2026-05-30T16:34:12+08:00",
            "sha256": "c26456b222bddec637d21876bc054465ce8219b041736f18809231d17440b0a8"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-29T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 3697,
          "file": {
            "relative_path": "runs/2026-05-29/review-report.md",
            "exists": true,
            "size": 9472,
            "modified_at": "2026-05-30T16:34:18+08:00",
            "sha256": "55c279a6c8f1314f17c134c93e738c925473a333d797202272779304d4009ca3"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-29T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-28",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2900,
          "file": {
            "relative_path": "runs/2026-05-28/close-report.md",
            "exists": true,
            "size": 7105,
            "modified_at": "2026-05-28T14:56:52+08:00",
            "sha256": "80c7b7b94b71cdcba35e9ff327caddf9161b301c0f145bcbfef6a68878699c93"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-28T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2766,
          "file": {
            "relative_path": "runs/2026-05-28/morning-report.md",
            "exists": true,
            "size": 6722,
            "modified_at": "2026-05-28T09:39:29+08:00",
            "sha256": "a8849ae211736b8e002d1cb3c241d86b0ef695e8c5c22cfaaced9a9bcad1f29a"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-28T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1902,
          "file": {
            "relative_path": "runs/2026-05-28/noon-report.md",
            "exists": true,
            "size": 4818,
            "modified_at": "2026-05-28T11:38:04+08:00",
            "sha256": "1da8676020f57efa488e59857218fbb254c5473f6251894659a23f0f6b3c9337"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-28T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 4328,
          "file": {
            "relative_path": "runs/2026-05-28/review-report.md",
            "exists": true,
            "size": 10718,
            "modified_at": "2026-05-28T23:45:02+08:00",
            "sha256": "ca9cf57bc71d38702adcb99e59b60d5ff75615ca78ad0770dbfd0132002f5b85"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-28T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-27",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2450,
          "file": {
            "relative_path": "runs/2026-05-27/close-report.md",
            "exists": true,
            "size": 5862,
            "modified_at": "2026-05-27T15:22:45+08:00",
            "sha256": "20b647fe754422e1e5893c2a077d9edb64c1a7a3dc8c3b39257f3b8f77e88d5b"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-27T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 1419,
          "file": {
            "relative_path": "runs/2026-05-27/morning-report.md",
            "exists": true,
            "size": 3477,
            "modified_at": "2026-05-27T09:39:39+08:00",
            "sha256": "7639e2b61a7313c3e2ea30620816b5cfcecae470405574776f2abd8e6aea5020"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-27T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1890,
          "file": {
            "relative_path": "runs/2026-05-27/noon-report.md",
            "exists": true,
            "size": 4909,
            "modified_at": "2026-05-27T11:38:28+08:00",
            "sha256": "4a30c7baab51876d05ebe82a9c59bfd70260d3045340f67d9273bb39ba5997a4"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-27T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 3918,
          "file": {
            "relative_path": "runs/2026-05-27/review-report.md",
            "exists": true,
            "size": 9834,
            "modified_at": "2026-05-27T20:02:25+08:00",
            "sha256": "8b3553e2dbd2b15e3efef28fd6b30cc24bc39a9145c8a8e38f283206432ce670"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-27T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-26",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2765,
          "file": {
            "relative_path": "runs/2026-05-26/close-report.md",
            "exists": true,
            "size": 6646,
            "modified_at": "2026-05-26T16:31:38+08:00",
            "sha256": "6bb45357b181a6b47a9b955956c8ad9191e1a29a32fdbc10717bc25b377a6f6b"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-26T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2487,
          "file": {
            "relative_path": "runs/2026-05-26/morning-report.md",
            "exists": true,
            "size": 5919,
            "modified_at": "2026-05-26T11:36:36+08:00",
            "sha256": "91a0867807ca4b9f0f1aad293cc004af6cf896a6bed068ceafa3014505988ae7"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-26T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1789,
          "file": {
            "relative_path": "runs/2026-05-26/noon-report.md",
            "exists": true,
            "size": 4485,
            "modified_at": "2026-05-26T11:38:26+08:00",
            "sha256": "4a6045dac372965c5014c211c80821ae611b8e472335b90f8d9fff386d257bae"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-26T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 3753,
          "file": {
            "relative_path": "runs/2026-05-26/review-report.md",
            "exists": true,
            "size": 9367,
            "modified_at": "2026-05-27T10:55:01+08:00",
            "sha256": "e57722b3de36f10acb9048fbe4f226dbe97953972763eb8d93ebd50285f3efe3"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-26T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-25",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2673,
          "file": {
            "relative_path": "runs/2026-05-25/close-report.md",
            "exists": true,
            "size": 6619,
            "modified_at": "2026-05-26T02:45:20+08:00",
            "sha256": "a6a40b13494cf863fb43d955815f249dd2947d2fb3962c9e20421df4485447d1"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-25T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2724,
          "file": {
            "relative_path": "runs/2026-05-25/morning-report.md",
            "exists": true,
            "size": 6905,
            "modified_at": "2026-05-25T12:41:10+08:00",
            "sha256": "f8a36fc8fb8686e7e5d03a5e14551a4868836827e2297046bf0ab640312abf69"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-25T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1660,
          "file": {
            "relative_path": "runs/2026-05-25/noon-report.md",
            "exists": true,
            "size": 4343,
            "modified_at": "2026-05-25T12:41:11+08:00",
            "sha256": "1a3d2354d5d19c199253cea14cd54a5c528d84d8c5d9123927b7fa8b2dfa12dc"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-25T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 3825,
          "file": {
            "relative_path": "runs/2026-05-25/review-report.md",
            "exists": true,
            "size": 9693,
            "modified_at": "2026-05-25T22:29:32+08:00",
            "sha256": "593f98cc3da1d789559b1b77ec9c9a62b439e5a10ebbff89f7b832437822392c"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-25T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-22",
      "status": "partial",
      "reports_present": 1,
      "reports_missing": [
        "morning",
        "noon",
        "review"
      ],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2460,
          "file": {
            "relative_path": "runs/2026-05-22/close-report.md",
            "exists": true,
            "size": 6141,
            "modified_at": "2026-05-22T14:58:31+08:00",
            "sha256": "0de41dd11a73d59f0f98c26637568f9676e13cca0443b58f6fa7c3e3f8a0a880"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-22T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "morning-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-22T09:35+08:00",
            "due": true,
            "automation_status": "missed_schedule",
            "automation_status_label": "自动化错过",
            "diagnosis_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.morning.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
          }
        },
        "noon": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "noon-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-22T11:35+08:00",
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
        "review": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "review-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-22T20:00+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "复盘缺少成功前三报：早报、午报",
            "manifest_status": "failed",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [
              "复盘缺少成功前三报：早报、午报"
            ],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-21",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2822,
          "file": {
            "relative_path": "runs/2026-05-21/close-report.md",
            "exists": true,
            "size": 7117,
            "modified_at": "2026-05-21T20:33:40+08:00",
            "sha256": "9800052adbdc5a819acf67ee4361c472593524ca53668666284393a2f7824a38"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-21T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 3163,
          "file": {
            "relative_path": "runs/2026-05-21/morning-report.md",
            "exists": true,
            "size": 7899,
            "modified_at": "2026-05-21T09:38:12+08:00",
            "sha256": "4a2d28b95b6738c45df9a6a5744a0515878de51c38c644707b07370e3d99d004"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-21T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 2581,
          "file": {
            "relative_path": "runs/2026-05-21/noon-report.md",
            "exists": true,
            "size": 6495,
            "modified_at": "2026-05-21T11:51:58+08:00",
            "sha256": "f6cf463c924f6b9021999261948aaa908419913a925afb5a2b1f1689dabd8eb0"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-21T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 4072,
          "file": {
            "relative_path": "runs/2026-05-21/review-report.md",
            "exists": true,
            "size": 10128,
            "modified_at": "2026-05-21T20:04:41+08:00",
            "sha256": "9c2add633e6f8a303238f82b1393bc7fdf1498198d869efec79e29e8d72136a8"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-21T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-20",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2189,
          "file": {
            "relative_path": "runs/2026-05-20/close-report.md",
            "exists": true,
            "size": 5212,
            "modified_at": "2026-05-21T10:36:03+08:00",
            "sha256": "3234a2b33f435cc896fb61495a0f8123fad28a993ee17673f009436983f2a946"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-20T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 1959,
          "file": {
            "relative_path": "runs/2026-05-20/morning-report.md",
            "exists": true,
            "size": 4825,
            "modified_at": "2026-05-21T10:52:56+08:00",
            "sha256": "e4fc91155bd880d936c1bf22772b433d5584bfd75b8d48f1705cd49107f6c13d"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-20T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 25001,
          "file": {
            "relative_path": "runs/2026-05-20/noon-report.md",
            "exists": true,
            "size": 60832,
            "modified_at": "2026-05-21T10:53:59+08:00",
            "sha256": "23f85543d0cc5550e0a6058267145a1c53fe7091df884285e70fee6d855e831a"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-20T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 2906,
          "file": {
            "relative_path": "runs/2026-05-20/review-report.md",
            "exists": true,
            "size": 7278,
            "modified_at": "2026-05-21T10:53:59+08:00",
            "sha256": "c02574e67c0988acfa080b39a5aa1005d5de4595ad3de31315d906dd32fbc769"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-20T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-19",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2730,
          "file": {
            "relative_path": "runs/2026-05-19/close-report.md",
            "exists": true,
            "size": 6623,
            "modified_at": "2026-05-19T18:00:40+08:00",
            "sha256": "5c23df2213b3579d33bc94a34bd2398cb7f39ec12b698258e15f50aebae9abad"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-19T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2943,
          "file": {
            "relative_path": "runs/2026-05-19/morning-report.md",
            "exists": true,
            "size": 7246,
            "modified_at": "2026-05-19T19:47:56+08:00",
            "sha256": "ddec52e88764f447e15414d08a21bae55813fc498c33ce2c3bae6ffbdfe37e2f"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-19T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 2154,
          "file": {
            "relative_path": "runs/2026-05-19/noon-report.md",
            "exists": true,
            "size": 5403,
            "modified_at": "2026-05-19T20:32:45+08:00",
            "sha256": "4eee12aa74d4ecef8b5d786232a4385e286c2f566d720ec49e14d4a06f1bb16b"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-19T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 3307,
          "file": {
            "relative_path": "runs/2026-05-19/review-report.md",
            "exists": true,
            "size": 8298,
            "modified_at": "2026-05-19T20:03:10+08:00",
            "sha256": "881b3d6491c89494439f5bb806b1f9599ec6f26ecf6e15641eb40015ebf34ed6"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-19T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-18",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2624,
          "file": {
            "relative_path": "runs/2026-05-18/close-report.md",
            "exists": true,
            "size": 6367,
            "modified_at": "2026-05-18T15:01:19+08:00",
            "sha256": "0e5c384f31fb031d0b1fa66f2ebd70730c85bca3b38f4b4c4f1d4e40904d9a9f"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-18T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2757,
          "file": {
            "relative_path": "runs/2026-05-18/morning-report.md",
            "exists": true,
            "size": 6851,
            "modified_at": "2026-05-18T11:38:53+08:00",
            "sha256": "143d7c99be5a9c81391531ce2ef9bab813f0efbc1162f52fa6112078a2a251a6"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-18T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1933,
          "file": {
            "relative_path": "runs/2026-05-18/noon-report.md",
            "exists": true,
            "size": 4878,
            "modified_at": "2026-05-18T11:54:27+08:00",
            "sha256": "5b302bc3dc22256773a3c84eca0e7ead3b68bf96aa67b7f919172a9a116c571b"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-18T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 3023,
          "file": {
            "relative_path": "runs/2026-05-18/review-report.md",
            "exists": true,
            "size": 7653,
            "modified_at": "2026-05-19T16:34:58+08:00",
            "sha256": "d5a087d67deb163c31a5b411a62a52a8b6251bd3d5b8be6995402a45bded774a"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-18T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-15",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2363,
          "file": {
            "relative_path": "runs/2026-05-15/close-report.md",
            "exists": true,
            "size": 5542,
            "modified_at": "2026-05-16T00:27:39+08:00",
            "sha256": "05a4b5f203a90478fc1bb26451b89298e0cb70e9afc3094fdc97e75043e0dc0b"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-15T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2540,
          "file": {
            "relative_path": "runs/2026-05-15/morning-report.md",
            "exists": true,
            "size": 6178,
            "modified_at": "2026-05-15T14:13:45+08:00",
            "sha256": "8d5eaad773806a0f1c75725fad64d87bf81c8f1c622f3ec0bf4fcd9eecd72f55"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-15T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1428,
          "file": {
            "relative_path": "runs/2026-05-15/noon-report.md",
            "exists": true,
            "size": 3702,
            "modified_at": "2026-05-15T14:15:03+08:00",
            "sha256": "baea2e15c21d8ebec3b054df6f1518088482df59967642c93c22a0f83f345f4e"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-15T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 4130,
          "file": {
            "relative_path": "runs/2026-05-15/review-report.md",
            "exists": true,
            "size": 10465,
            "modified_at": "2026-05-16T00:28:31+08:00",
            "sha256": "05b339884e1bb37614feda03ffaedc47b3b23ef0f7d42caee48c25f705e1cbef"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-15T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-14",
      "status": "partial",
      "reports_present": 1,
      "reports_missing": [
        "morning",
        "noon",
        "review"
      ],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2639,
          "file": {
            "relative_path": "runs/2026-05-14/close-report.md",
            "exists": true,
            "size": 6225,
            "modified_at": "2026-05-15T10:30:22+08:00",
            "sha256": "0442c2beb4386e904690e55059b07bc991b945ab8bb6054aba2e2eadad8933e0"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-14T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "morning-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-14T09:35+08:00",
            "due": true,
            "automation_status": "missed_schedule",
            "automation_status_label": "自动化错过",
            "diagnosis_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.morning.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
          }
        },
        "noon": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "noon-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-14T11:35+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "当天早报未成功生成，午报不能补选新票。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.noon.json",
            "precondition_gaps_cn": [
              "当天早报未成功生成，午报不能补选新票。"
            ],
            "recovery_boundary_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
          }
        },
        "review": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "review-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-14T20:00+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "复盘缺少成功前三报：早报、午报",
            "manifest_status": "failed",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [
              "复盘缺少成功前三报：早报、午报"
            ],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-13",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 3004,
          "file": {
            "relative_path": "runs/2026-05-13/close-report.md",
            "exists": true,
            "size": 7093,
            "modified_at": "2026-05-14T22:55:18+08:00",
            "sha256": "8cc87b873e18395720915f577e9fd2b55f77032d0cd88b2b81ab48a58740ca4c"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-13T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 3170,
          "file": {
            "relative_path": "runs/2026-05-13/morning-report.md",
            "exists": true,
            "size": 7761,
            "modified_at": "2026-05-13T09:52:09+08:00",
            "sha256": "d0828b72f851dc9854eedbd37d9305401245456700017b0bed5466fbf4c03a83"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-13T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 2215,
          "file": {
            "relative_path": "runs/2026-05-13/noon-report.md",
            "exists": true,
            "size": 5446,
            "modified_at": "2026-05-14T19:38:01+08:00",
            "sha256": "28806f862f1555125ad3b4f4f1d25531a80916a775042ef58bcd842720206ff9"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-13T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 2812,
          "file": {
            "relative_path": "runs/2026-05-13/review-report.md",
            "exists": true,
            "size": 7165,
            "modified_at": "2026-05-13T16:45:42+08:00",
            "sha256": "ea56f471a84dd63faaca7e9091548c1000fadeeed1b0cb3cb9c2f3a66596bf71"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-13T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-12",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2626,
          "file": {
            "relative_path": "runs/2026-05-12/close-report.md",
            "exists": true,
            "size": 6121,
            "modified_at": "2026-05-14T22:23:39+08:00",
            "sha256": "8f68e3d123172d80d9deee003a313d177cbb502d6eec9cd9d8e73a67c51c36fe"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-12T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2567,
          "file": {
            "relative_path": "runs/2026-05-12/morning-report.md",
            "exists": true,
            "size": 6284,
            "modified_at": "2026-05-12T11:44:57+08:00",
            "sha256": "3465ab9b4921c4bd40acc698b6b13d5311eacbf5bd86a0c4d7184f3185a4072f"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-12T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1708,
          "file": {
            "relative_path": "runs/2026-05-12/noon-report.md",
            "exists": true,
            "size": 4300,
            "modified_at": "2026-05-14T19:38:01+08:00",
            "sha256": "602c9cacef0f3002c948d4c57851f46208b3d10dce8055326cb68f3abbdad8a6"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-12T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 2739,
          "file": {
            "relative_path": "runs/2026-05-12/review-report.md",
            "exists": true,
            "size": 7097,
            "modified_at": "2026-05-14T19:38:01+08:00",
            "sha256": "8f38754bc97423c9ea05f61eee8e918d10255d62ea0c5f2d6028423ed4980055"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-12T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-11",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2710,
          "file": {
            "relative_path": "runs/2026-05-11/close-report.md",
            "exists": true,
            "size": 6914,
            "modified_at": "2026-05-11T15:29:45+08:00",
            "sha256": "f9ec11926a998194334f9693c5765c8fb719ff3722fef378d1a2f70956efbaf1"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-11T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2477,
          "file": {
            "relative_path": "runs/2026-05-11/morning-report.md",
            "exists": true,
            "size": 6226,
            "modified_at": "2026-05-11T15:21:37+08:00",
            "sha256": "06c82f84bc6891a1e600617b9214fd7f1e1f50f09bc26108aaf2d4240619149c"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-11T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1812,
          "file": {
            "relative_path": "runs/2026-05-11/noon-report.md",
            "exists": true,
            "size": 4643,
            "modified_at": "2026-05-11T15:21:57+08:00",
            "sha256": "119777efbfdce4f58c82cba5821c39046c45b6d56d17ef88998b9fcd99ea3079"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-11T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 2762,
          "file": {
            "relative_path": "runs/2026-05-11/review-report.md",
            "exists": true,
            "size": 7004,
            "modified_at": "2026-05-12T01:42:06+08:00",
            "sha256": "dfad7467d1ee7f33aa666654e72474fd31fbae23d028b651a7b7204f3c0e7ea5"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-11T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-08",
      "status": "partial",
      "reports_present": 3,
      "reports_missing": [
        "review"
      ],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2606,
          "file": {
            "relative_path": "runs/2026-05-08/close-report.md",
            "exists": true,
            "size": 6549,
            "modified_at": "2026-05-09T12:10:11+08:00",
            "sha256": "473493e3e94890904633ff1365572399f5d75888fbd17403b35c42b43388ab57"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-08T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2471,
          "file": {
            "relative_path": "runs/2026-05-08/morning-report.md",
            "exists": true,
            "size": 6222,
            "modified_at": "2026-05-08T22:41:52+08:00",
            "sha256": "ddc4d1a11c06c52391f261c2fdf01758673852b217100486ec564c427ce06cee"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-08T09:35+08:00",
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
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1263,
          "file": {
            "relative_path": "runs/2026-05-08/noon-report.md",
            "exists": true,
            "size": 3280,
            "modified_at": "2026-05-08T22:42:11+08:00",
            "sha256": "6985f703467bfc9c5fc137999bb81b8af0dabbbbc453f21b435cf1273ca78f74"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-08T11:35+08:00",
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
        "review": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "review-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-08T20:00+08:00",
            "due": true,
            "automation_status": "missed_schedule",
            "automation_status_label": "自动化错过",
            "diagnosis_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-07",
      "status": "complete",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "ok",
          "char_count": 2845,
          "file": {
            "relative_path": "runs/2026-05-07/close-report.md",
            "exists": true,
            "size": 7514,
            "modified_at": "2026-05-08T22:36:53+08:00",
            "sha256": "9a62e127a0cd9942d4095f8ecfc815c567cc7cb9bf423d6ab2de6e72f90d49d4"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-07T14:50+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2760,
          "file": {
            "relative_path": "runs/2026-05-07/morning-report.md",
            "exists": true,
            "size": 6982,
            "modified_at": "2026-05-08T22:47:59+08:00",
            "sha256": "344e806ce5e0f9831bcb159f42b73c3d661de46e49648b8269bc4b1c2fa9478f"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-07T09:35+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.morning.json",
            "precondition_gaps_cn": [
              "未找到上一交易日成功收盘报，早报不能继承旧票。"
            ],
            "recovery_boundary_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
          }
        },
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1695,
          "file": {
            "relative_path": "runs/2026-05-07/noon-report.md",
            "exists": true,
            "size": 4288,
            "modified_at": "2026-05-08T00:09:30+08:00",
            "sha256": "37a60090cfe3d1d735bea9575ecbf1e3d5977fef5de1e32fcef66b8048e8da8d"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-07T11:35+08:00",
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
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 3645,
          "file": {
            "relative_path": "runs/2026-05-07/review-report.md",
            "exists": true,
            "size": 9345,
            "modified_at": "2026-05-08T19:13:15+08:00",
            "sha256": "8fbfe3177bb0fbbcd1fe0d97bc7e6c9348391ee5aba811db10054bcd1caa4357"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-07T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-05-06",
      "status": "partial",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "incomplete",
          "char_count": 56557,
          "file": {
            "relative_path": "runs/2026-05-06/close-report.md",
            "exists": true,
            "size": 140044,
            "modified_at": "2026-05-06T23:08:06+08:00",
            "sha256": "7d80e822be5d3eb18bbe2c8ee0e98d99aa9c15d72d2258371c59ddd3aa8102bd"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-05-06T14:50+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "incomplete",
          "char_count": 4880,
          "file": {
            "relative_path": "runs/2026-05-06/morning-report.md",
            "exists": true,
            "size": 11034,
            "modified_at": "2026-05-06T23:06:02+08:00",
            "sha256": "f06ef7010dc96b6a6998ee1637d3f1b860738104be17279def33d29479bf070a"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-05-06T09:35+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "未找到上一交易日成功收盘报，早报不能继承旧票。",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.morning.json",
            "precondition_gaps_cn": [
              "未找到上一交易日成功收盘报，早报不能继承旧票。"
            ],
            "recovery_boundary_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
          }
        },
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1497,
          "file": {
            "relative_path": "runs/2026-05-06/noon-report.md",
            "exists": true,
            "size": 3851,
            "modified_at": "2026-05-06T23:06:24+08:00",
            "sha256": "79b589872ba94ded771da5895a7c8c84ca402f0d5bc13c065b4615dda60d8135"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-05-06T11:35+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.noon.json",
            "precondition_gaps_cn": [
              "当天早报未成功生成，午报不能补选新票。"
            ],
            "recovery_boundary_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
          }
        },
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 5163,
          "file": {
            "relative_path": "runs/2026-05-06/review-report.md",
            "exists": true,
            "size": 12711,
            "modified_at": "2026-05-06T23:08:11+08:00",
            "sha256": "5a7925039cc30e4fd05bbed3b2d088790b698cd22b7aad7fb26a2d011563eb95"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-05-06T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [
              "复盘缺少成功前三报：收盘报、早报"
            ],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-04-30",
      "status": "partial",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "incomplete",
          "char_count": 2457,
          "file": {
            "relative_path": "runs/2026-04-30/close-report.md",
            "exists": true,
            "size": 6061,
            "modified_at": "2026-04-29T19:42:53+08:00",
            "sha256": "c24be30d30f76c15c729ec5e838bc207d509d09371978d02873eff195b5a2cdc"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-04-30T14:50+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 3372,
          "file": {
            "relative_path": "runs/2026-04-30/morning-report.md",
            "exists": true,
            "size": 7705,
            "modified_at": "2026-04-30T14:02:57+08:00",
            "sha256": "7991cb4eee62015836c9d35f0e87f5bea061232a6defb75d9f00e85c42471611"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-04-30T09:35+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "未找到上一交易日成功收盘报，早报不能继承旧票。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.morning.json",
            "precondition_gaps_cn": [
              "未找到上一交易日成功收盘报，早报不能继承旧票。"
            ],
            "recovery_boundary_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
          }
        },
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 2113,
          "file": {
            "relative_path": "runs/2026-04-30/noon-report.md",
            "exists": true,
            "size": 5130,
            "modified_at": "2026-04-30T11:42:43+08:00",
            "sha256": "b6529f5cb6cff750f92d479eeaec45d62854ab3ee4c4aa3fdd56f44fd76dd078"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-04-30T11:35+08:00",
            "due": true,
            "automation_status": "missed_schedule",
            "automation_status_label": "自动化错过",
            "diagnosis_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.noon.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
          }
        },
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 4591,
          "file": {
            "relative_path": "runs/2026-04-30/review-report.md",
            "exists": true,
            "size": 11204,
            "modified_at": "2026-04-30T20:01:39+08:00",
            "sha256": "7ae1340381d52b47c4df38e38c6495fbeeac0ad391fb2e4a4cace896a6ede506"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-04-30T20:00+08:00",
            "due": true,
            "automation_status": "complete",
            "automation_status_label": "已按计划生成",
            "diagnosis_cn": "已按计划生成",
            "manifest_status": "success",
            "manifest_json_status": "ok",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [
              "复盘缺少成功前三报：收盘报"
            ],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-04-29",
      "status": "partial",
      "reports_present": 3,
      "reports_missing": [
        "close"
      ],
      "reports": {
        "close": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "close-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-04-29T14:50+08:00",
            "due": true,
            "automation_status": "missed_schedule",
            "automation_status_label": "自动化错过",
            "diagnosis_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "incomplete",
          "char_count": 4659,
          "file": {
            "relative_path": "runs/2026-04-29/morning-report.md",
            "exists": true,
            "size": 9849,
            "modified_at": "2026-04-29T01:24:03+08:00",
            "sha256": "496144a1b108be4cec17a0e13d898b176ee527e25f700354395b2a7a9bcb9f02"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-04-29T09:35+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "未找到上一交易日成功收盘报，早报不能继承旧票。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.morning.json",
            "precondition_gaps_cn": [
              "未找到上一交易日成功收盘报，早报不能继承旧票。"
            ],
            "recovery_boundary_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
          }
        },
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 2237,
          "file": {
            "relative_path": "runs/2026-04-29/noon-report.md",
            "exists": true,
            "size": 5457,
            "modified_at": "2026-04-29T19:22:51+08:00",
            "sha256": "5f7fef2aa3d9cd1f552676febbe593806d2d3a630b0016740be04a8fb39274ab"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-04-29T11:35+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "当天早报未成功生成，午报不能补选新票。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.noon.json",
            "precondition_gaps_cn": [
              "当天早报未成功生成，午报不能补选新票。"
            ],
            "recovery_boundary_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
          }
        },
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 3744,
          "file": {
            "relative_path": "runs/2026-04-29/review-report.md",
            "exists": true,
            "size": 9173,
            "modified_at": "2026-04-29T20:01:02+08:00",
            "sha256": "a23c8bb8bc7d035c23edd2dc24a4dea4688bb72170117f1a2d7cbcd57af24a98"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-04-29T20:00+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "复盘缺少成功前三报：收盘报、早报",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [
              "复盘缺少成功前三报：收盘报、早报"
            ],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-04-28",
      "status": "partial",
      "reports_present": 3,
      "reports_missing": [
        "review"
      ],
      "reports": {
        "close": {
          "exists": true,
          "status": "incomplete",
          "char_count": 38245,
          "file": {
            "relative_path": "runs/2026-04-28/close-report.md",
            "exists": true,
            "size": 92956,
            "modified_at": "2026-04-28T23:52:59+08:00",
            "sha256": "2f9c31bd1466fa62eaecb53d4d73b530b52d85a07b9ba51d3e8522e5111a6c05"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-04-28T14:50+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "incomplete",
          "char_count": 8873,
          "file": {
            "relative_path": "runs/2026-04-28/morning-report.md",
            "exists": true,
            "size": 22269,
            "modified_at": "2026-04-28T13:00:06+08:00",
            "sha256": "0e584eb92d05fabc933d805f3ef7f79b82d3363c17defd835274ea4540410a91"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-04-28T09:35+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "未找到上一交易日成功收盘报，早报不能继承旧票。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.morning.json",
            "precondition_gaps_cn": [
              "未找到上一交易日成功收盘报，早报不能继承旧票。"
            ],
            "recovery_boundary_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
          }
        },
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 2238,
          "file": {
            "relative_path": "runs/2026-04-28/noon-report.md",
            "exists": true,
            "size": 5450,
            "modified_at": "2026-04-28T14:54:34+08:00",
            "sha256": "d845d08f9ba26b66016750ef23a0d93ec049e919c923c3f5a38a20004c9967a1"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-04-28T11:35+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "当天早报未成功生成，午报不能补选新票。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.noon.json",
            "precondition_gaps_cn": [
              "当天早报未成功生成，午报不能补选新票。"
            ],
            "recovery_boundary_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
          }
        },
        "review": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "review-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-04-28T20:00+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "复盘缺少成功前三报：收盘报、早报",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [
              "复盘缺少成功前三报：收盘报、早报"
            ],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-04-27",
      "status": "partial",
      "reports_present": 3,
      "reports_missing": [
        "review"
      ],
      "reports": {
        "close": {
          "exists": true,
          "status": "incomplete",
          "char_count": 36015,
          "file": {
            "relative_path": "runs/2026-04-27/close-report.md",
            "exists": true,
            "size": 86865,
            "modified_at": "2026-04-28T16:36:58+08:00",
            "sha256": "9d324601b7f62364b74d975315041a7ef5583e4b6774a584c6eaab3f2e4a848e"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-04-27T14:50+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "ok",
          "char_count": 2130,
          "file": {
            "relative_path": "runs/2026-04-27/morning-report.md",
            "exists": true,
            "size": 5325,
            "modified_at": "2026-04-27T11:47:43+08:00",
            "sha256": "e6c48b68c58d3589f7ed9c213c769f1344d17a99c6ffcd9ec01cb258af729162"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-04-27T09:35+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "未找到上一交易日成功收盘报，早报不能继承旧票。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.morning.json",
            "precondition_gaps_cn": [
              "未找到上一交易日成功收盘报，早报不能继承旧票。"
            ],
            "recovery_boundary_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
          }
        },
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1758,
          "file": {
            "relative_path": "runs/2026-04-27/noon-report.md",
            "exists": true,
            "size": 4349,
            "modified_at": "2026-04-27T13:01:12+08:00",
            "sha256": "4ecee608be96f74df0eb01f01ab2415c8f60cca41ce10faa8ecea96abca0ddcd"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-04-27T11:35+08:00",
            "due": true,
            "automation_status": "missed_schedule",
            "automation_status_label": "自动化错过",
            "diagnosis_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.noon.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
          }
        },
        "review": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "review-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-04-27T20:00+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "复盘缺少成功前三报：收盘报",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [
              "复盘缺少成功前三报：收盘报"
            ],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-04-26",
      "status": "partial",
      "reports_present": 1,
      "reports_missing": [
        "morning",
        "noon",
        "review"
      ],
      "reports": {
        "close": {
          "exists": true,
          "status": "incomplete",
          "char_count": 1997,
          "file": {
            "relative_path": "runs/2026-04-26/close-report.md",
            "exists": true,
            "size": 6022,
            "modified_at": "2026-04-26T13:15:21+08:00",
            "sha256": "0ffe950f9e913093973106e9baec8888d3d0efc523956f1134e5aad13d080b94"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-04-26T14:50+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "morning-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-04-26T09:35+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "未找到上一交易日成功收盘报，早报不能继承旧票。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.morning.json",
            "precondition_gaps_cn": [
              "未找到上一交易日成功收盘报，早报不能继承旧票。"
            ],
            "recovery_boundary_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
          }
        },
        "noon": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "noon-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-04-26T11:35+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "当天早报未成功生成，午报不能补选新票。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.noon.json",
            "precondition_gaps_cn": [
              "当天早报未成功生成，午报不能补选新票。"
            ],
            "recovery_boundary_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
          }
        },
        "review": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "review-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-04-26T20:00+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "复盘缺少成功前三报：收盘报、早报、午报",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [
              "复盘缺少成功前三报：收盘报、早报、午报"
            ],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-04-25",
      "status": "partial",
      "reports_present": 4,
      "reports_missing": [],
      "reports": {
        "close": {
          "exists": true,
          "status": "incomplete",
          "char_count": 2146,
          "file": {
            "relative_path": "runs/2026-04-25/close-report.md",
            "exists": true,
            "size": 6281,
            "modified_at": "2026-04-26T11:57:09+08:00",
            "sha256": "937694f647c48895cc4dd29c9e11c1a7e713eacae5c66fd9c407aa3f2ac55a2a"
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-04-25T14:50+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": true,
          "status": "incomplete",
          "char_count": 2536,
          "file": {
            "relative_path": "runs/2026-04-25/morning-report.md",
            "exists": true,
            "size": 5954,
            "modified_at": "2026-04-25T18:13:54+08:00",
            "sha256": "bc99db3a9460ccb5a33be3be7d7d49a7d21d036627a756017550bc6fe1d14ffc"
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-04-25T09:35+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "未找到上一交易日成功收盘报，早报不能继承旧票。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.morning.json",
            "precondition_gaps_cn": [
              "未找到上一交易日成功收盘报，早报不能继承旧票。"
            ],
            "recovery_boundary_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
          }
        },
        "noon": {
          "exists": true,
          "status": "ok",
          "char_count": 1273,
          "file": {
            "relative_path": "runs/2026-04-25/noon-report.md",
            "exists": true,
            "size": 3270,
            "modified_at": "2026-04-25T19:12:27+08:00",
            "sha256": "ad2b6656b5e1aa281fd16fabc4683210d0542937007bdf402bcfed944e470446"
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-04-25T11:35+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "当天早报未成功生成，午报不能补选新票。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.noon.json",
            "precondition_gaps_cn": [
              "当天早报未成功生成，午报不能补选新票。"
            ],
            "recovery_boundary_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
          }
        },
        "review": {
          "exists": true,
          "status": "ok",
          "char_count": 1312,
          "file": {
            "relative_path": "runs/2026-04-25/review-report.md",
            "exists": true,
            "size": 3370,
            "modified_at": "2026-04-26T00:49:30+08:00",
            "sha256": "d796807ba2b72e1169ff47b36ed557b5f53f53882e93c550d8749f3e43c556a1"
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-04-25T20:00+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "复盘缺少成功前三报：收盘报、早报",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [
              "复盘缺少成功前三报：收盘报、早报"
            ],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-04-24",
      "status": "empty",
      "reports_present": 0,
      "reports_missing": [
        "close",
        "morning",
        "noon",
        "review"
      ],
      "reports": {
        "close": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "close-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-04-24T14:50+08:00",
            "due": true,
            "automation_status": "missed_schedule",
            "automation_status_label": "自动化错过",
            "diagnosis_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "morning-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-04-24T09:35+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "未找到上一交易日成功收盘报，早报不能继承旧票。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.morning.json",
            "precondition_gaps_cn": [
              "未找到上一交易日成功收盘报，早报不能继承旧票。"
            ],
            "recovery_boundary_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
          }
        },
        "noon": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "noon-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-04-24T11:35+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "当天早报未成功生成，午报不能补选新票。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.noon.json",
            "precondition_gaps_cn": [
              "当天早报未成功生成，午报不能补选新票。"
            ],
            "recovery_boundary_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
          }
        },
        "review": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "review-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-04-24T20:00+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "复盘缺少成功前三报：收盘报、早报、午报",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [
              "复盘缺少成功前三报：收盘报、早报、午报"
            ],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    },
    {
      "date": "2026-04-23",
      "status": "empty",
      "reports_present": 0,
      "reports_missing": [
        "close",
        "morning",
        "noon",
        "review"
      ],
      "reports": {
        "close": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "close-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "14:50",
            "scheduled_at": "2026-04-23T14:50+08:00",
            "due": true,
            "automation_status": "missed_schedule",
            "automation_status_label": "自动化错过",
            "diagnosis_cn": "计划时间已过，但正式报告或对应运行记录未落盘。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.close.json",
            "precondition_gaps_cn": [],
            "recovery_boundary_cn": "收盘报 14:50 必须有真实尾盘锁定快照；15:01 后若没有锁定快照，不得把后导出的自选股伪装成 14:50 决策。"
          }
        },
        "morning": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "morning-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "09:35",
            "scheduled_at": "2026-04-23T09:35+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "未找到上一交易日成功收盘报，早报不能继承旧票。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.morning.json",
            "precondition_gaps_cn": [
              "未找到上一交易日成功收盘报，早报不能继承旧票。"
            ],
            "recovery_boundary_cn": "早报只允许在盘前/早盘窗口用当时新导出的行情快照补跑；进入午后或盘后后，不得伪造 09:35 早报，只能记录错过原因并让午报/复盘按缺口处理。"
          }
        },
        "noon": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "noon-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "11:35",
            "scheduled_at": "2026-04-23T11:35+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "当天早报未成功生成，午报不能补选新票。",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.noon.json",
            "precondition_gaps_cn": [
              "当天早报未成功生成，午报不能补选新票。"
            ],
            "recovery_boundary_cn": "午报只允许在午盘到收盘前按早报 handoff 对象补跑；收盘后不得伪造或补造 11:35 午报，收盘报只能全池重扫并如实记录午报缺口。"
          }
        },
        "review": {
          "exists": false,
          "status": "missing",
          "char_count": 0,
          "file": {
            "relative_path": "review-report.md",
            "exists": false
          },
          "schedule": {
            "scheduled_time": "20:00",
            "scheduled_at": "2026-04-23T20:00+08:00",
            "due": true,
            "automation_status": "precondition_failed",
            "automation_status_label": "前置条件失败",
            "diagnosis_cn": "复盘缺少成功前三报：收盘报、早报、午报",
            "manifest_status": "missing",
            "manifest_json_status": "missing",
            "manifest_path": "workflow-manifest.review.json",
            "precondition_gaps_cn": [
              "复盘缺少成功前三报：收盘报、早报、午报"
            ],
            "recovery_boundary_cn": "复盘报可以盘后补跑，但只能回放已存在且成功的收盘/早报/午报；前三报缺失或失败时不得合成原始结论。"
          }
        }
      }
    }
  ],
  "summary": {
    "dates": 48,
    "complete_dates": 34,
    "partial_dates": 11,
    "empty_dates": 3,
    "excluded_dirs": 4,
    "warnings": 0
  },
  "excluded_dir_counts": {
    "test_year": 2,
    "test_marker": 2
  },
  "warnings": []
};
