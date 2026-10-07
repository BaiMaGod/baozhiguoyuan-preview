"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __pow = Math.pow;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // src/generated/designConfig.generated.json
  var designConfig_generated_default = {
    version: "1.2.0",
    engine: "3.4.0",
    clock: {
      hz: 60,
      catchupMaxTicksPerRender: 8,
      positionQuantum: 244140625e-12
    },
    world: {
      width: 36,
      height: 20,
      juiceCell: 0.75,
      gardenCell: 1.2,
      barrierHalfExtent: 2.05,
      barrierThickness: 0.25,
      playerStart: [
        0,
        0
      ],
      pixelsPerMeter: 64,
      designWidth: 1280,
      designHeight: 720
    },
    player: {
      hp: 100,
      attack: 20,
      interval: 0.8,
      critRate: 5,
      critFactor: 1.5,
      speed: 4.5,
      radius: 0.3,
      targetRange: 6,
      expPickup: 2.5,
      iframe: 0.35,
      contactCooldownPerEnemy: 1,
      projectileSpeed: 12,
      projectileLife: 2,
      splashRadius: 0.8,
      splashCoefficient: 0.35,
      ripeThreshold: 100,
      ripePerAttack: 5,
      ripeCoefficient: 2.5,
      ripeJuice: 2,
      ripeSplashRadius: 1,
      ripeSplashCoefficient: 0.6,
      projectileRadius: 0.12,
      baseKnockback: 0.2
    },
    juice: {
      groundDuration: 12,
      groundDurationCap: 90,
      enemyExpires: false,
      maxStack: 5,
      coreMaxStack: 7,
      deathRadius: 0.9,
      deathStackFormula: "1+floor(deathJuiceStack/2)",
      ripeGroundRadius: 1,
      ripeGroundStack: 2,
      bodyExplodesOnlySelf: true,
      groundTopK: 3,
      ultimateCrit: false,
      explosionNewJuiceRecursive: false,
      explosionCoefficients: [
        0,
        0.8,
        1.4,
        2.2,
        3.2,
        4.5,
        6,
        8
      ],
      explosionRadii: [
        0,
        0.8,
        1,
        1.2,
        1.5,
        1.8,
        2,
        2.2
      ],
      baseAttachChance: 20,
      attachChanceCap: 90,
      extraLayerChanceCap: 80,
      enemySlowPerLayer: 3,
      groundSlowPerLayer: 2,
      chunkSideCells: 8
    },
    ultimate: {
      chargeSeconds: 180,
      minChargeSeconds: 150,
      startsFull: false,
      resetOnCast: true,
      emptyCastConsumes: false
    },
    fruit: {
      total: 9,
      lossCountForDefeat: 9,
      victoryReturnsCarried: true,
      ownershipStates: [
        "IN_GARDEN",
        "CARRIED",
        "LOST"
      ],
      reservationExclusive: true,
      defeatUsesPermanentLoss: true,
      killBeforeEatCommit: true,
      stealSpeedFactor: 1.4,
      timedProtectionRefractorySeconds: 6,
      barrierRebuildHpFraction: 0.25,
      barrierRebuildWaitSeconds: 1
    },
    offers: {
      slots: [
        "combat",
        "defense",
        "free"
      ],
      maxPerSchool: 2,
      schoolProbabilityCap: 0.65,
      categoryFallback: "free",
      insufficientCards: "show_1_or_2",
      emptyFallback: "supply_restore_20_percent_hp_then_shield",
      maxSkillChoices: 3,
      maxCores: 4,
      coreSchoolPoints: 5,
      coreDifferentSkills: 2,
      coreAppearanceChances: [
        30,
        60,
        100
      ],
      corePityIsPerUpgrade: true,
      refreshAdvancesProgress: false,
      mvpWeights: [
        1,
        1.3,
        1.6,
        2
      ],
      fullWeights: [
        1,
        1.2,
        1.4,
        1.7,
        2,
        2.4,
        2.8
      ],
      luckCap: 5,
      luckQualityDeltas: [
        -3,
        -1,
        4
      ],
      luckPurpleReduction: 3,
      ownedSkillWeight: 1.5,
      synergyWeight: 1.2,
      mvpBreadthThresholds: [
        6,
        7,
        8
      ],
      mvpBreadthWeights: [
        1,
        0.8,
        0.6,
        0.35
      ],
      fullBreadthThresholds: [
        6,
        7,
        8,
        9
      ],
      fullBreadthWeights: [
        1,
        0.8,
        0.6,
        0.35,
        0.2
      ],
      supplyHealFraction: 0.2,
      supplyShieldSeconds: 30,
      synergyPairs: [
        [
          "fire",
          "haste"
        ],
        [
          "juicy",
          "death_juice"
        ],
        [
          "death_juice",
          "linger"
        ],
        [
          "juicy",
          "cling"
        ],
        [
          "ripe_charge",
          "ripe_power"
        ],
        [
          "ripe_charge",
          "ripe_splash"
        ],
        [
          "wall",
          "tough"
        ],
        [
          "seeds",
          "germinate"
        ],
        [
          "linger",
          "tomato_dot"
        ]
      ]
    },
    boss: {
      speed: 0.85,
      radius: 0.9,
      contact: 25,
      barrierDps: 40,
      eatSeconds: 4,
      healPerFruit: 0,
      ultimateDamageFactor: 0.7,
      dashEvery: 12,
      dashSpeed: 2,
      dashDuration: 0.7,
      dashWarn: 1.2,
      summonEvery: 10,
      summonCount: 4,
      summonExp: 1,
      phaseThresholds: [
        0.7,
        0.35
      ],
      lowHpSpeedFactor: 1.25,
      summonType: "small",
      summonAliveCap: 16
    },
    glutton: {
      name: "暴食者",
      hp: 700,
      speed: 1,
      radius: 0.65,
      contact: 18,
      barrierDps: 22,
      eatSeconds: 2
    },
    monsters: {
      small: {
        name: "小馋虫",
        hp: 18,
        speed: 1.6,
        radius: 0.28,
        contact: 5,
        barrierDps: 4,
        eatSeconds: 2.5,
        exp: 1
      },
      normal: {
        name: "馋嘴虫",
        hp: 50,
        speed: 1.35,
        radius: 0.35,
        contact: 8,
        barrierDps: 8,
        eatSeconds: 2.5,
        exp: 2
      },
      armor: {
        name: "铁皮甲虫",
        hp: 160,
        speed: 1,
        radius: 0.45,
        contact: 12,
        barrierDps: 12,
        eatSeconds: 3,
        exp: 6
      },
      thief: {
        name: "偷果鼠",
        hp: 70,
        speed: 1.8,
        radius: 0.3,
        contact: 6,
        barrierDps: 4,
        eatSeconds: null,
        stealSeconds: 1.5,
        exp: 4
      },
      absorber: {
        name: "吸汁怪",
        hp: 90,
        speed: 1.2,
        radius: 0.4,
        contact: 10,
        barrierDps: 8,
        eatSeconds: 2.5,
        exp: 6
      }
    },
    waves8: [
      {
        start: 0,
        end: 60,
        rate: 16,
        weights: {
          small: 0.65,
          normal: 0.35
        },
        entrances: [
          "top",
          "bottom"
        ],
        pulseEvery: 20
      },
      {
        start: 60,
        end: 120,
        rate: 24,
        weights: {
          small: 0.45,
          normal: 0.35,
          armor: 0.2
        },
        entrances: [
          "left",
          "right"
        ],
        pulseEvery: 20
      },
      {
        start: 120,
        end: 180,
        rate: 30,
        weights: {
          small: 0.35,
          normal: 0.3,
          armor: 0.2,
          thief: 0.15
        },
        entrances: [
          "top",
          "bottom",
          "left"
        ],
        pulseEvery: 20
      },
      {
        start: 180,
        end: 240,
        rate: 36,
        weights: {
          small: 0.3,
          normal: 0.3,
          armor: 0.15,
          thief: 0.15,
          absorber: 0.1
        },
        entrances: [
          "bottom",
          "left",
          "right"
        ],
        pulseEvery: 20
      },
      {
        start: 240,
        end: 360,
        rate: 48,
        weights: {
          small: 0.25,
          normal: 0.25,
          armor: 0.2,
          thief: 0.15,
          absorber: 0.15
        },
        entrances: [
          "top",
          "bottom",
          "left",
          "right"
        ],
        pulseEvery: 20
      },
      {
        start: 360,
        end: 435,
        rate: 60,
        weights: {
          small: 0.2,
          normal: 0.2,
          armor: 0.25,
          thief: 0.2,
          absorber: 0.15
        },
        entrances: [
          "top",
          "bottom",
          "left",
          "right"
        ],
        pulseEvery: 15
      },
      {
        start: 435,
        end: 480,
        rate: 24,
        weights: {
          small: 0.5,
          normal: 0.3,
          armor: 0.1,
          thief: 0.1
        },
        entrances: [
          "top",
          "bottom",
          "left",
          "right"
        ],
        pulseEvery: 20
      }
    ],
    mode: {
      targetSeconds: 480,
      bossAt: 435,
      bossHp: 2200,
      eliteAt: [
        240,
        390
      ],
      eliteExp: [
        50,
        50
      ]
    },
    expNeeds: [
      8,
      12,
      16,
      20,
      24,
      30,
      36,
      42,
      48,
      54,
      62,
      70,
      78,
      86,
      94,
      102,
      110,
      118,
      126,
      134,
      142,
      150,
      150,
      150,
      150,
      150,
      150,
      150,
      150,
      150,
      150,
      150,
      150,
      150,
      150,
      150,
      150,
      150,
      150,
      150,
      150,
      150
    ],
    mvpSkillIds: [
      "fire",
      "haste",
      "juicy",
      "death_juice",
      "linger",
      "wall",
      "repair",
      "tough",
      "hp",
      "heal",
      "cling",
      "ripe_charge",
      "ripe_power",
      "ripe_splash"
    ],
    mvpSkills: [
      {
        id: "fire",
        name: "火力强化",
        category: "combat",
        school: "重击",
        maxUpgradeCount: 3,
        prerequisites: [],
        exclusions: [],
        parameters: {
          攻击加成: {
            unit: "%",
            base: 0,
            first: [
              20,
              30,
              45,
              60
            ],
            repeat: [
              20,
              30,
              45,
              60
            ],
            combine: "add"
          }
        },
        note: "",
        effectHandler: "fire"
      },
      {
        id: "haste",
        name: "攻速强化",
        category: "combat",
        school: "极速",
        maxUpgradeCount: 3,
        prerequisites: [],
        exclusions: [],
        parameters: {
          攻速加成: {
            unit: "%",
            base: 0,
            first: [
              15,
              23,
              35,
              50
            ],
            repeat: [
              15,
              23,
              35,
              50
            ],
            combine: "add"
          }
        },
        note: "",
        effectHandler: "haste"
      },
      {
        id: "juicy",
        name: "多汁",
        category: "combat",
        school: "爆汁",
        maxUpgradeCount: 3,
        prerequisites: [],
        exclusions: [],
        parameters: {
          挂汁率增量: {
            unit: "百分点",
            base: 0,
            first: [
              8,
              12,
              18,
              28
            ],
            repeat: [
              8,
              12,
              18,
              28
            ],
            combine: "add"
          }
        },
        note: "普通挂汁率=min(90%,20%+增量)；超过90%的百分点转为成功挂汁后额外+1层概率，与加量爆汁加算，最多80%。",
        effectHandler: "juicy"
      },
      {
        id: "death_juice",
        name: "死亡喷汁",
        category: "combat",
        school: "爆汁",
        maxUpgradeCount: 3,
        prerequisites: [],
        exclusions: [],
        parameters: {
          额外死亡汁层概率: {
            unit: "百分点",
            base: 0,
            first: [
              30,
              45,
              65,
              85
            ],
            repeat: [
              30,
              45,
              65,
              85
            ],
            combine: "add",
            cap: 100
          },
          死亡汁半径增加: {
            unit: "m",
            base: 0,
            first: [
              0.1,
              0.15,
              0.2,
              0.3
            ],
            repeat: [
              0.1,
              0.15,
              0.2,
              0.3
            ],
            combine: "add"
          }
        },
        note: "按死亡前最终挂汁快照生成基础1+floor(层数/2)层；本技能最多额外+1层，每次死亡只投一次概率。",
        effectHandler: "death_juice"
      },
      {
        id: "linger",
        name: "厚汁不散",
        category: "combat",
        school: "爆汁",
        maxUpgradeCount: 3,
        prerequisites: [],
        exclusions: [],
        parameters: {
          地面汁持续增加: {
            unit: "秒",
            base: 0,
            first: [
              8,
              12,
              18,
              28
            ],
            repeat: [
              8,
              12,
              18,
              28
            ],
            combine: "add",
            cap: 78
          }
        },
        note: "地面汁最终12+增量，硬上限90秒；怪物挂汁不受此技能影响。",
        effectHandler: "linger"
      },
      {
        id: "hp",
        name: "厚实果皮",
        category: "defense",
        school: "自身生存",
        maxUpgradeCount: 3,
        prerequisites: [],
        exclusions: [],
        parameters: {
          最大生命增加: {
            unit: "HP",
            base: 0,
            first: [
              20,
              30,
              45,
              65
            ],
            repeat: [
              20,
              30,
              45,
              65
            ],
            combine: "add"
          }
        },
        note: "同时增加等量当前HP，至新上限。",
        effectHandler: "hp"
      },
      {
        id: "heal",
        name: "果汁疗愈",
        category: "defense",
        school: "自身生存",
        maxUpgradeCount: 3,
        prerequisites: [],
        exclusions: [],
        parameters: {
          恢复汁滴掉率: {
            unit: "%",
            base: 0,
            first: [
              4,
              5,
              7,
              9
            ],
            repeat: [
              2,
              2,
              3,
              4
            ],
            combine: "set_then_add",
            cap: 20
          },
          单滴治疗: {
            unit: "%最大HP",
            base: 0,
            first: [
              5,
              6,
              7,
              9
            ],
            repeat: [
              1,
              1,
              2,
              3
            ],
            combine: "set_then_add",
            cap: 18
          }
        },
        note: "每次死亡独立投一次；汁滴存在30秒，拾取半径1m；不属于可引爆汁格。",
        effectHandler: "heal"
      },
      {
        id: "wall",
        name: "木质栅栏",
        category: "defense",
        school: "果园工事",
        maxUpgradeCount: 3,
        prerequisites: [],
        exclusions: [],
        parameters: {
          每面基础HP增加: {
            unit: "HP",
            base: 0,
            first: [
              150,
              230,
              350,
              500
            ],
            repeat: [
              150,
              230,
              350,
              500
            ],
            combine: "add"
          }
        },
        note: "每次增加等量当前HP；破墙强化时进入重建流程，不在占位敌人身上瞬间封墙。",
        effectHandler: "wall"
      },
      {
        id: "repair",
        name: "自动维修",
        category: "defense",
        school: "果园工事",
        maxUpgradeCount: 3,
        prerequisites: [
          "wall"
        ],
        exclusions: [],
        parameters: {
          脱战等待: {
            unit: "秒",
            base: 5,
            first: [
              5,
              4,
              3,
              2
            ],
            repeat: [
              5,
              4,
              3,
              2
            ],
            combine: "min"
          },
          每秒修复: {
            unit: "%最大HP",
            base: 0,
            first: [
              4,
              6,
              8,
              12
            ],
            repeat: [
              4,
              6,
              8,
              12
            ],
            combine: "add",
            cap: 18
          }
        },
        note: "每面独立脱战；重建阈值25%HP；仅外墙，完整规则见果园工事章节。",
        effectHandler: "repair"
      },
      {
        id: "tough",
        name: "难以下咽",
        category: "defense",
        school: "灵果守护",
        maxUpgradeCount: 3,
        prerequisites: [],
        exclusions: [],
        parameters: {
          进食时间增加: {
            unit: "秒",
            base: 0,
            first: [
              0.8,
              1.3,
              2,
              3
            ],
            repeat: [
              0.8,
              1.3,
              2,
              3
            ],
            combine: "add"
          }
        },
        note: "普通最多8秒、精英6秒、Boss5秒；作用吞食，不作用偷果鼠1.5秒偷取。",
        effectHandler: "tough"
      },
      {
        id: "cling",
        name: "超级黏汁",
        category: "combat",
        school: "番茄黏汁",
        maxUpgradeCount: 3,
        prerequisites: [],
        exclusions: [],
        parameters: {
          怪物每层减速增加: {
            unit: "百分点",
            base: 0,
            first: [
              0.6,
              1,
              1.5,
              2.2
            ],
            repeat: [
              0.6,
              1,
              1.5,
              2.2
            ],
            combine: "add"
          }
        },
        note: "只提高身上番茄汁每层基础3%的部分；地面每层2%不随此技能提高。",
        effectHandler: "cling"
      },
      {
        id: "ripe_charge",
        name: "催熟",
        category: "combat",
        school: "番茄熟成",
        maxUpgradeCount: 3,
        prerequisites: [],
        exclusions: [],
        parameters: {
          每轮成熟增加: {
            unit: "点",
            base: 0,
            first: [
              1,
              2,
              3,
              5
            ],
            repeat: [
              1,
              2,
              3,
              5
            ],
            combine: "add"
          }
        },
        note: "",
        effectHandler: "ripe_charge"
      },
      {
        id: "ripe_power",
        name: "熟果重击",
        category: "combat",
        school: "番茄熟成",
        maxUpgradeCount: 3,
        prerequisites: [],
        exclusions: [],
        parameters: {
          熟果主弹系数增加: {
            unit: "系数百分点",
            base: 0,
            first: [
              60,
              90,
              140,
              200
            ],
            repeat: [
              60,
              90,
              140,
              200
            ],
            combine: "add"
          }
        },
        note: "以250%为基准加算，例如三次绿=430%。",
        effectHandler: "ripe_power"
      },
      {
        id: "ripe_splash",
        name: "熟果炸浆",
        category: "combat",
        school: "番茄熟成",
        maxUpgradeCount: 3,
        prerequisites: [],
        exclusions: [],
        parameters: {
          熟果溅射半径增加: {
            unit: "m",
            base: 0,
            first: [
              0.2,
              0.35,
              0.5,
              0.7
            ],
            repeat: [
              0.2,
              0.35,
              0.5,
              0.7
            ],
            combine: "add",
            cap: 2
          },
          熟果溅射系数增加: {
            unit: "系数百分点",
            base: 0,
            first: [
              30,
              50,
              80,
              120
            ],
            repeat: [
              30,
              50,
              80,
              120
            ],
            combine: "add",
            cap: 240
          }
        },
        note: "基础熟果溅射1m/60%攻击，最大3m/300%；溅射不重复伤主目标，有效命中目标强制+1层，致命命中先写汁再取死亡快照。",
        effectHandler: "ripe_splash"
      }
    ],
    phase1SkillValues: {
      fire: {
        green: 20,
        blue: 30,
        purple: 45,
        orange: 60
      },
      haste: {
        green: 15,
        blue: 23,
        purple: 35,
        orange: 50
      },
      hp: {
        green: 20,
        blue: 30,
        purple: 45,
        orange: 65
      }
    },
    limits: {
      maxPlayerShieldPercent: 50,
      mvpEnemyViews: 120,
      mvpProjectileViews: 600,
      maxSummonViews: 40,
      spawnNeverWaitsForView: true
    },
    controls: {
      ordinarySlowCap: 70,
      eliteSlowCap: 50,
      bossSlowCap: 35,
      ordinaryEatCap: 8,
      eliteEatCap: 6,
      bossEatMin: 2.5,
      bossEatMax: 5,
      windowSeconds: 8,
      resistanceFactors: [
        1,
        0.65,
        0.4,
        0.2
      ],
      bossKnockbackScale: 0.25,
      bossKnockbackBudget: 1,
      bossHardCcBudget: 1.2,
      bossCcImmunitySeconds: 3,
      eliteKnockbackBudget: 2,
      eliteHardCcBudget: 2.5,
      eliteCcImmunitySeconds: 2,
      bossSingleStunCap: 0.8,
      interruptMinimumHardCc: 0.15,
      interruptMinimumKnockback: 0.25,
      interruptCooldown: 0.2,
      progressRollbackFractions: [
        0.5,
        0.3,
        0.15
      ],
      ordinaryThirdInterruptImmunitySeconds: 3
    }
  };

  // src/generated/designConfig.ts
  var DESIGN_VERSION = designConfig_generated_default.version;
  var ENGINE_VERSION = designConfig_generated_default.engine;
  var CLOCK = designConfig_generated_default.clock;
  var WORLD = __spreadProps(__spreadValues({}, designConfig_generated_default.world), { playerStart: designConfig_generated_default.world.playerStart });
  var PLAYER = designConfig_generated_default.player;
  var JUICE = designConfig_generated_default.juice;
  var ULTIMATE = designConfig_generated_default.ultimate;
  var FRUIT = designConfig_generated_default.fruit;
  var OFFERS = designConfig_generated_default.offers;
  var LIMITS = designConfig_generated_default.limits;
  var CONTROLS = designConfig_generated_default.controls;
  var BOSS = designConfig_generated_default.boss;
  var GLUTTON = designConfig_generated_default.glutton;
  var MONSTERS = designConfig_generated_default.monsters;
  var SPECIAL_ENEMIES = {
    glutton: GLUTTON,
    boss: __spreadProps(__spreadValues({}, BOSS), { hp: designConfig_generated_default.mode.bossHp, name: "Boss" })
  };
  function enemyConfig(kind) {
    if (kind === "glutton") return SPECIAL_ENEMIES.glutton;
    if (kind === "boss") return SPECIAL_ENEMIES.boss;
    return MONSTERS[kind];
  }
  var WAVES_8 = designConfig_generated_default.waves8;
  var MVP_MODE = designConfig_generated_default.mode;
  var EXP_NEEDS = designConfig_generated_default.expNeeds;
  var MVP_SKILL_IDS = designConfig_generated_default.mvpSkillIds;
  var MVP_SKILLS = designConfig_generated_default.mvpSkills;
  var PHASE1_SKILL_VALUES = designConfig_generated_default.phase1SkillValues;

  // src/runtime/InputMapper.ts
  function normalize(x, y) {
    const length = Math.hypot(x, y);
    if (length <= 1e-9) return { x: 0, y: 0 };
    if (length <= 1) return { x, y };
    return { x: x / length, y: y / length };
  }
  function keyboardMove(state) {
    const x = (state.right ? 1 : 0) - (state.left ? 1 : 0);
    const y = (state.down ? 1 : 0) - (state.up ? 1 : 0);
    return normalize(x, y);
  }
  function joystickMove(deltaX, deltaY, radius) {
    if (!Number.isFinite(deltaX) || !Number.isFinite(deltaY) || !Number.isFinite(radius) || radius <= 0) {
      return { x: 0, y: 0 };
    }
    return normalize(deltaX / radius, deltaY / radius);
  }

  // src/core/FixedStepLoop.ts
  var FixedStepLoop = class {
    constructor(source) {
      this.source = source;
      this.scaledAccumulator = 0;
    }
    advanceMicroseconds(deltaUs) {
      if (deltaUs < 0 || !Number.isFinite(deltaUs)) throw new Error("deltaUs must be finite and >= 0");
      if (this.source.phase !== "PLAYING") {
        this.scaledAccumulator = 0;
        return 0;
      }
      this.scaledAccumulator += Math.round(deltaUs) * CLOCK.hz;
      const ticksDue = Math.floor(this.scaledAccumulator / 1e6);
      if (ticksDue >= 30) {
        this.source.enterTechnicalPause(`logic debt reached ${ticksDue} ticks`);
        this.scaledAccumulator = 0;
        return 0;
      }
      const toRun = Math.min(ticksDue, CLOCK.catchupMaxTicksPerRender);
      for (let i = 0; i < toRun; i++) {
        this.source.stepOneTick();
        this.scaledAccumulator -= 1e6;
        if (this.source.phase !== "PLAYING") {
          this.scaledAccumulator = 0;
          break;
        }
      }
      return toRun;
    }
    reset() {
      this.scaledAccumulator = 0;
    }
  };

  // src/core/entity.ts
  var entityKey = (id) => `${id.slot}:${id.generation}`;
  var EntityAllocator = class {
    constructor() {
      this.generations = [];
      this.freeSlots = [];
      this.live = /* @__PURE__ */ new Set();
    }
    allocate() {
      const slot = this.freeSlots.length > 0 ? this.freeSlots.pop() : this.generations.length;
      if (this.generations[slot] === void 0) this.generations[slot] = 0;
      const id = { slot, generation: this.generations[slot] };
      this.live.add(entityKey(id));
      return id;
    }
    release(id) {
      var _a;
      const key = entityKey(id);
      if (!this.live.delete(key)) return;
      this.generations[id.slot] = ((_a = this.generations[id.slot]) != null ? _a : id.generation) + 1;
      this.freeSlots.push(id.slot);
    }
    isLive(id) {
      return this.live.has(entityKey(id));
    }
  };

  // src/core/fixed.ts
  var POSITION_SCALE = 4096;
  var HP_SCALE = 1e4;
  var toPos = (meters) => Math.round(meters * POSITION_SCALE);
  var fromPos = (value) => value / POSITION_SCALE;
  var toHp = (hp) => Math.round(hp * HP_SCALE);
  var fromHp = (value) => value / HP_SCALE;
  function intSqrt(value) {
    if (value <= 0) return 0;
    let lo = 1;
    let hi = Math.min(value, 1 << 26);
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      const sq = mid * mid;
      if (sq === value) return mid;
      if (sq < value) lo = mid + 1;
      else hi = mid - 1;
    }
    return hi;
  }
  function distanceSq(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
  }
  function stepToward(dx, dy, maxStep) {
    const distSq = dx * dx + dy * dy;
    if (distSq === 0 || maxStep <= 0) return [0, 0];
    const dist = intSqrt(distSq);
    if (dist <= maxStep) return [dx, dy];
    return [Math.trunc(dx * maxStep / dist), Math.trunc(dy * maxStep / dist)];
  }

  // src/core/prng.ts
  var XorShift32 = class {
    constructor(seed) {
      this.state = seed >>> 0 || 1831565813;
    }
    nextU32() {
      let x = this.state >>> 0;
      x ^= x << 13;
      x ^= x >>> 17;
      x ^= x << 5;
      this.state = x >>> 0;
      return this.state;
    }
    nextInt(maxExclusive) {
      if (!Number.isInteger(maxExclusive) || maxExclusive <= 0) throw new Error("maxExclusive must be a positive integer");
      return this.nextU32() % maxExclusive;
    }
    nextFloat() {
      return this.nextU32() / 4294967296;
    }
    snapshot() {
      return this.state >>> 0;
    }
  };
  function mix(seed, salt) {
    let x = (seed ^ salt) >>> 0;
    x = Math.imul(x ^ x >>> 16, 2146121005);
    x = Math.imul(x ^ x >>> 15, 2221713035);
    return (x ^ x >>> 16) >>> 0;
  }
  function createRandomStreams(seed) {
    const base = seed >>> 0 || 1831565813;
    return {
      wave: new XorShift32(mix(base, 1463899717)),
      offer: new XorShift32(mix(base, 1330005586)),
      quality: new XorShift32(mix(base, 1364544596)),
      combat: new XorShift32(mix(base, 1129270594)),
      drop: new XorShift32(mix(base, 1146244944))
    };
  }

  // src/systems/BarrierSystem.ts
  var SIDES = ["top", "bottom", "left", "right"];
  var BarrierSystem = class {
    constructor() {
      this.walls = new Map(
        SIDES.map((side) => [side, {
          state: "NOT_OWNED",
          hpQ: 0,
          maxHpQ: 0,
          lastDamageTick: -1,
          rebuildRequestedTick: null,
          activateAtTick: null
        }])
      );
    }
    grantWall(hpDelta, tick) {
      const deltaQ = toHp(hpDelta);
      if (deltaQ <= 0) return;
      for (const side of SIDES) {
        const wall = this.walls.get(side);
        if (wall.state === "NOT_OWNED") {
          wall.state = "ACTIVE";
          wall.hpQ = deltaQ;
          wall.maxHpQ = deltaQ;
          wall.lastDamageTick = tick;
        } else {
          wall.maxHpQ += deltaQ;
          wall.hpQ += deltaQ;
          if (wall.state === "BROKEN") {
            wall.state = "REBUILDING";
            wall.rebuildRequestedTick = tick;
            wall.activateAtTick = null;
          }
        }
        wall.hpQ = Math.min(wall.hpQ, wall.maxHpQ);
      }
    }
    damage(side, damageHp, tick) {
      const wall = this.walls.get(side);
      if (wall.state !== "ACTIVE" || damageHp <= 0) return 0;
      const before = wall.hpQ;
      wall.hpQ = Math.max(0, wall.hpQ - toHp(damageHp));
      wall.lastDamageTick = tick;
      if (wall.hpQ === 0) {
        wall.state = "BROKEN";
        wall.rebuildRequestedTick = null;
        wall.activateAtTick = null;
      }
      return fromHp(before - wall.hpQ);
    }
    repairTick(tick, waitSeconds, repairPctPerSecond) {
      const waitTicks = Math.round(waitSeconds * CLOCK.hz);
      for (const side of SIDES) {
        const wall = this.walls.get(side);
        if (wall.state === "NOT_OWNED" || wall.maxHpQ <= 0 || repairPctPerSecond <= 0) continue;
        if (wall.state === "ACTIVE" && wall.hpQ >= wall.maxHpQ) continue;
        if (tick - wall.lastDamageTick < waitTicks) continue;
        const repairQ = Math.max(1, Math.round(wall.maxHpQ * repairPctPerSecond / 100 / CLOCK.hz));
        wall.hpQ = Math.min(wall.maxHpQ, wall.hpQ + repairQ);
        if (wall.state === "BROKEN" && wall.hpQ >= Math.ceil(wall.maxHpQ * FRUIT.barrierRebuildHpFraction)) {
          wall.state = "REBUILDING";
          wall.rebuildRequestedTick = tick;
          wall.activateAtTick = null;
        }
      }
    }
    updateRebuild(side, tick, occupied) {
      var _a;
      const wall = this.walls.get(side);
      if (wall.state !== "REBUILDING") return "none";
      if (wall.activateAtTick !== null) {
        if (tick >= wall.activateAtTick) {
          wall.state = "ACTIVE";
          wall.activateAtTick = null;
          wall.rebuildRequestedTick = null;
          wall.lastDamageTick = tick;
          return "activated";
        }
        return "scheduled";
      }
      if (!occupied) {
        wall.activateAtTick = tick + 1;
        return "scheduled";
      }
      const requested = (_a = wall.rebuildRequestedTick) != null ? _a : tick;
      if (tick - requested >= Math.round(FRUIT.barrierRebuildWaitSeconds * CLOCK.hz)) return "separate";
      return "wait";
    }
    confirmSeparated(side, tick) {
      const wall = this.walls.get(side);
      if (wall.state !== "REBUILDING") return;
      wall.activateAtTick = tick + 1;
    }
    collisionActive(side) {
      return this.walls.get(side).state === "ACTIVE";
    }
    snapshot() {
      return SIDES.map((side) => {
        const wall = this.walls.get(side);
        return {
          side,
          state: wall.state,
          hp: fromHp(wall.hpQ),
          maxHp: fromHp(wall.maxHpQ),
          collisionActive: wall.state === "ACTIVE",
          rebuildRequestedTick: wall.rebuildRequestedTick
        };
      });
    }
  };

  // src/systems/GardenSystem.ts
  var GardenSystem = class {
    constructor() {
      const side = Math.round(Math.sqrt(FRUIT.total));
      if (side * side !== FRUIT.total) throw new Error("MVP fruit total must form a square grid");
      const center = (side - 1) / 2;
      this.fruits = Array.from({ length: FRUIT.total }, (_, fruitId) => {
        const row = Math.floor(fruitId / side);
        const col = fruitId % side;
        return {
          fruitId,
          qx: toPos((col - center) * WORLD.gardenCell),
          qy: toPos((row - center) * WORLD.gardenCell),
          ownership: "IN_GARDEN",
          reservedBy: null,
          carriedBy: null
        };
      });
      this.assertInvariant();
    }
    reserveNearest(enemy, qx, qy) {
      const key = entityKey(enemy);
      const existing = this.fruits.find((f) => f.reservedBy && entityKey(f.reservedBy) === key);
      if (existing) return existing.fruitId;
      let best = null;
      let bestDistance = Number.POSITIVE_INFINITY;
      for (const fruit of this.fruits) {
        if (fruit.ownership !== "IN_GARDEN" || fruit.reservedBy !== null) continue;
        const d = distanceSq(qx, qy, fruit.qx, fruit.qy);
        if (!best || d < bestDistance || d === bestDistance && fruit.fruitId < best.fruitId) {
          best = fruit;
          bestDistance = d;
        }
      }
      if (!best) return null;
      best.reservedBy = enemy;
      this.assertInvariant();
      return best.fruitId;
    }
    releaseReservation(enemy) {
      const key = entityKey(enemy);
      for (const fruit of this.fruits) {
        if (fruit.reservedBy && entityKey(fruit.reservedBy) === key) fruit.reservedBy = null;
      }
      this.assertInvariant();
    }
    commitEat(enemy, fruitId) {
      const fruit = this.requireFruit(fruitId);
      if (fruit.ownership !== "IN_GARDEN" || !fruit.reservedBy || entityKey(fruit.reservedBy) !== entityKey(enemy)) return false;
      fruit.ownership = "LOST";
      fruit.reservedBy = null;
      fruit.carriedBy = null;
      this.assertInvariant();
      return true;
    }
    commitSteal(enemy, fruitId) {
      const fruit = this.requireFruit(fruitId);
      if (fruit.ownership !== "IN_GARDEN" || !fruit.reservedBy || entityKey(fruit.reservedBy) !== entityKey(enemy)) return false;
      fruit.ownership = "CARRIED";
      fruit.reservedBy = null;
      fruit.carriedBy = enemy;
      this.assertInvariant();
      return true;
    }
    returnCarriedBy(enemy) {
      const key = entityKey(enemy);
      const returned = [];
      for (const fruit of this.fruits) {
        if (fruit.ownership === "CARRIED" && fruit.carriedBy && entityKey(fruit.carriedBy) === key) {
          fruit.ownership = "IN_GARDEN";
          fruit.carriedBy = null;
          fruit.reservedBy = null;
          returned.push(fruit.fruitId);
        }
      }
      this.assertInvariant();
      return returned;
    }
    escapeCarriedBy(enemy) {
      const key = entityKey(enemy);
      const lost = [];
      for (const fruit of this.fruits) {
        if (fruit.ownership === "CARRIED" && fruit.carriedBy && entityKey(fruit.carriedBy) === key) {
          fruit.ownership = "LOST";
          fruit.carriedBy = null;
          fruit.reservedBy = null;
          lost.push(fruit.fruitId);
        }
      }
      this.assertInvariant();
      return lost;
    }
    victoryReturnAllCarried() {
      const returned = [];
      for (const fruit of this.fruits) {
        if (fruit.ownership === "CARRIED") {
          fruit.ownership = "IN_GARDEN";
          fruit.carriedBy = null;
          fruit.reservedBy = null;
          returned.push(fruit.fruitId);
        }
      }
      this.assertInvariant();
      return returned;
    }
    fruitPosition(fruitId) {
      const fruit = this.requireFruit(fruitId);
      return [fruit.qx, fruit.qy];
    }
    counts() {
      let inGarden = 0;
      let carried = 0;
      let lost = 0;
      for (const fruit of this.fruits) {
        if (fruit.ownership === "IN_GARDEN") inGarden++;
        else if (fruit.ownership === "CARRIED") carried++;
        else lost++;
      }
      return { inGarden, carried, lost };
    }
    isDefeat() {
      return this.counts().lost >= FRUIT.lossCountForDefeat;
    }
    snapshot() {
      return this.fruits.map((fruit) => ({
        fruitId: fruit.fruitId,
        ownership: fruit.ownership,
        qx: fruit.qx,
        qy: fruit.qy,
        reservedBy: fruit.reservedBy ? entityKey(fruit.reservedBy) : null,
        carriedBy: fruit.carriedBy ? entityKey(fruit.carriedBy) : null
      }));
    }
    requireFruit(fruitId) {
      const fruit = this.fruits[fruitId];
      if (!fruit) throw new Error(`unknown fruitId ${fruitId}`);
      return fruit;
    }
    assertInvariant() {
      const counts = this.counts();
      if (counts.inGarden + counts.carried + counts.lost !== FRUIT.total) throw new Error("fruit conservation violated");
      const reservations = /* @__PURE__ */ new Set();
      for (const fruit of this.fruits) {
        if (fruit.ownership !== "IN_GARDEN" && fruit.reservedBy !== null) throw new Error("non-garden fruit cannot be reserved");
        if (fruit.ownership === "CARRIED" && fruit.carriedBy === null) throw new Error("carried fruit requires carrier");
        if (fruit.ownership !== "CARRIED" && fruit.carriedBy !== null) throw new Error("only carried fruit may have carrier");
        if (fruit.reservedBy) {
          const key = entityKey(fruit.reservedBy);
          if (reservations.has(key)) throw new Error("enemy cannot reserve multiple fruits");
          reservations.add(key);
        }
      }
    }
  };

  // src/systems/JuiceGrid.ts
  var JuiceGrid = class {
    constructor() {
      this.width = Math.ceil(WORLD.width / WORLD.juiceCell);
      this.height = Math.ceil(WORLD.height / WORLD.juiceCell);
      this.cellQ = toPos(WORLD.juiceCell);
      this.originXQ = toPos(-WORLD.width / 2);
      this.originYQ = toPos(-WORLD.height / 2);
      this.versionCounter = 0;
      this.states = Array.from({ length: this.width * this.height }, () => ({ stack: 0, expireTick: 0, version: 0 }));
    }
    get capacity() {
      return this.states.length;
    }
    expireAtTick(tick) {
      for (const state of this.states) {
        if (state.stack > 0 && state.expireTick <= tick) {
          state.stack = 0;
          state.expireTick = 0;
          state.version = ++this.versionCounter;
        }
      }
    }
    addCircle(qx, qy, radiusQ, layers, durationTicks, nowTick) {
      if (layers <= 0 || durationTicks <= 0) return [];
      const ids = /* @__PURE__ */ new Set();
      const landing = this.cellIdAt(qx, qy);
      if (landing !== null) ids.add(landing);
      const minCol = Math.max(0, Math.floor((qx - radiusQ - this.originXQ) / this.cellQ));
      const maxCol = Math.min(this.width - 1, Math.floor((qx + radiusQ - this.originXQ) / this.cellQ));
      const minRow = Math.max(0, Math.floor((qy - radiusQ - this.originYQ) / this.cellQ));
      const maxRow = Math.min(this.height - 1, Math.floor((qy + radiusQ - this.originYQ) / this.cellQ));
      const radiusSq = radiusQ * radiusQ;
      for (let row = minRow; row <= maxRow; row++) {
        for (let col = minCol; col <= maxCol; col++) {
          const cellId = row * this.width + col;
          const [cx, cy] = this.cellCenterQ(cellId);
          if (distanceSq(qx, qy, cx, cy) <= radiusSq) ids.add(cellId);
        }
      }
      const expireTick = nowTick + durationTicks;
      const touched = [...ids].sort((a, b) => a - b);
      for (const cellId of touched) {
        const state = this.states[cellId];
        state.stack = Math.min(JUICE.maxStack, state.stack + layers);
        state.expireTick = expireTick;
        state.version = ++this.versionCounter;
      }
      return touched;
    }
    cellIdAt(qx, qy) {
      if (qx < this.originXQ || qy < this.originYQ) return null;
      const col = Math.floor((qx - this.originXQ) / this.cellQ);
      const row = Math.floor((qy - this.originYQ) / this.cellQ);
      if (col < 0 || col >= this.width || row < 0 || row >= this.height) return null;
      const [cx, cy] = this.cellCenterQ(row * this.width + col);
      const halfW = toPos(WORLD.width / 2);
      const halfH = toPos(WORLD.height / 2);
      if (cx < -halfW || cx > halfW || cy < -halfH || cy > halfH) return null;
      return row * this.width + col;
    }
    getStackAt(qx, qy) {
      const id = this.cellIdAt(qx, qy);
      return id === null ? 0 : this.states[id].stack;
    }
    getCell(cellId) {
      const state = this.states[cellId];
      if (!state || state.stack <= 0) return null;
      const [qx, qy] = this.cellCenterQ(cellId);
      return { cellId, column: cellId % this.width, row: Math.floor(cellId / this.width), qx, qy, stack: state.stack, expireTick: state.expireTick, version: state.version };
    }
    activeCells() {
      const result = [];
      for (let cellId = 0; cellId < this.states.length; cellId++) {
        const cell = this.getCell(cellId);
        if (cell) result.push(cell);
      }
      return result;
    }
    clearCells(cellIds) {
      for (const cellId of cellIds) {
        const state = this.states[cellId];
        if (!state || state.stack <= 0) continue;
        state.stack = 0;
        state.expireTick = 0;
        state.version = ++this.versionCounter;
      }
    }
    consumeLayers(cellId, layers = 1) {
      const state = this.states[cellId];
      if (!state || state.stack <= 0 || layers <= 0) return 0;
      const consumed = Math.min(state.stack, Math.trunc(layers));
      state.stack -= consumed;
      if (state.stack === 0) state.expireTick = 0;
      state.version = ++this.versionCounter;
      return consumed;
    }
    hasActive() {
      return this.states.some((state) => state.stack > 0);
    }
    durationTicks(extraTicks = 0) {
      const base = Math.round(JUICE.groundDuration * CLOCK.hz);
      const cap = Math.round(JUICE.groundDurationCap * CLOCK.hz);
      return Math.min(cap, base + Math.max(0, extraTicks));
    }
    cellCenterQ(cellId) {
      const col = cellId % this.width;
      const row = Math.floor(cellId / this.width);
      return [
        this.originXQ + col * this.cellQ + Math.floor(this.cellQ / 2),
        this.originYQ + row * this.cellQ + Math.floor(this.cellQ / 2)
      ];
    }
  };

  // src/systems/OfferSystem.ts
  var QUALITY_RANK = {
    green: 0,
    blue: 1,
    purple: 2,
    orange: 3
  };
  function qualityFor(seconds, choiceCount, rng) {
    const orangePct = Math.min(25, 1 + Math.floor(choiceCount / 2));
    if (rng.nextInt(1e4) < orangePct * 100) return "orange";
    const dist = seconds < 180 ? [66, 27, 7] : seconds < 360 ? [56, 31, 13] : seconds < 600 ? [47, 35, 18] : [38, 37, 25];
    const roll = rng.nextInt(100);
    if (roll < dist[0]) return "green";
    if (roll < dist[0] + dist[1]) return "blue";
    return "purple";
  }
  function breadthWeight(ownedDistinct) {
    const thresholds = OFFERS.mvpBreadthThresholds;
    const weights = OFFERS.mvpBreadthWeights;
    if (ownedDistinct >= thresholds[2]) return weights[3];
    if (ownedDistinct >= thresholds[1]) return weights[2];
    if (ownedDistinct >= thresholds[0]) return weights[1];
    return weights[0];
  }
  function isSynergy(a, b, skills) {
    if (!a) return false;
    if (skills.getConfig(a).school === skills.getConfig(b).school) return true;
    return OFFERS.synergyPairs.some((pair) => pair.includes(a) && pair.includes(b));
  }
  function weightedPick(candidates, choiceCount, skills, rng) {
    var _a;
    if (candidates.length === 1) return candidates[0];
    const ownedDistinct = skills.selectedSkillCount();
    const last = skills.lastSelected();
    const raw = candidates.map((skill) => {
      const schoolPoints = skills.schoolPoints(skill.school);
      const schoolMultiplier = choiceCount < 2 ? 1 : OFFERS.mvpWeights[Math.min(OFFERS.mvpWeights.length - 1, schoolPoints)];
      const ownedMultiplier = skills.has(skill.id) ? OFFERS.ownedSkillWeight : breadthWeight(ownedDistinct);
      const synergyMultiplier = isSynergy(last, skill.id, skills) ? OFFERS.synergyWeight : 1;
      return { skill, weight: schoolMultiplier * ownedMultiplier * synergyMultiplier };
    });
    const schools = /* @__PURE__ */ new Map();
    for (const item of raw) schools.set(item.skill.school, ((_a = schools.get(item.skill.school)) != null ? _a : 0) + item.weight);
    if (schools.size > 1) {
      const total2 = [...schools.values()].reduce((a, b) => a + b, 0);
      for (const [school, schoolWeight] of schools) {
        if (schoolWeight / total2 <= OFFERS.schoolProbabilityCap) continue;
        const other = total2 - schoolWeight;
        if (other <= 0) continue;
        const capped = OFFERS.schoolProbabilityCap / (1 - OFFERS.schoolProbabilityCap) * other;
        const scale = capped / schoolWeight;
        for (const item of raw) if (item.skill.school === school) item.weight *= scale;
        break;
      }
    }
    const total = raw.reduce((sum, item) => sum + item.weight, 0);
    let roll = rng.nextFloat() * total;
    for (const item of raw) {
      roll -= item.weight;
      if (roll <= 0) return item.skill;
    }
    return raw[raw.length - 1].skill;
  }
  var OfferSystem = class {
    createOffer(seconds, choiceCount, offerRng, qualityRng, skills) {
      var _a, _b;
      const cards = [];
      const usedIds = /* @__PURE__ */ new Set();
      const usedSchools = /* @__PURE__ */ new Map();
      const slots = ["combat", "defense", "free"];
      for (const slot of slots) {
        let pool = MVP_SKILLS.filter((skill) => skills.canSelect(skill.id) && !usedIds.has(skill.id) && (slot === "free" || skill.category === slot));
        if (pool.length === 0) pool = MVP_SKILLS.filter((skill) => skills.canSelect(skill.id) && !usedIds.has(skill.id));
        if (pool.length === 0) continue;
        const restricted = pool.filter((skill) => {
          var _a2;
          return ((_a2 = usedSchools.get(skill.school)) != null ? _a2 : 0) < OFFERS.maxPerSchool;
        });
        if (restricted.length > 0) pool = restricted;
        let chosen = null;
        let attempts = 0;
        while (pool.length > 0 && attempts < 3 && !chosen) {
          attempts++;
          const skill = weightedPick(pool, choiceCount, skills, offerRng);
          const quality = qualityFor(seconds, choiceCount, qualityRng);
          const preview = skills.preview(skill.id, quality);
          if (preview.zeroBenefit) {
            pool = pool.filter((candidate) => candidate.id !== skill.id);
            continue;
          }
          const primary = (_a = Object.values(preview.delta).find((value) => Math.abs(value) > 1e-9)) != null ? _a : 0;
          chosen = {
            skillId: skill.id,
            quality,
            value: primary,
            increments: preview.delta,
            finalValues: preview.after
          };
        }
        if (!chosen) continue;
        cards.push(chosen);
        usedIds.add(chosen.skillId);
        const school = skills.getConfig(chosen.skillId).school;
        usedSchools.set(school, ((_b = usedSchools.get(school)) != null ? _b : 0) + 1);
      }
      return cards;
    }
    applyGuarantee(cards, guarantee, skills) {
      let result = cards.map((card) => __spreadValues({}, card));
      if (result.length === 0) return result;
      if (guarantee === "blue_one") {
        const index = this.worstQualityIndex(result);
        result[index] = this.raiseCard(result[index], "blue", skills);
        return result;
      }
      result = result.map((card) => this.raiseCard(card, "blue", skills));
      const purpleIndex = this.worstQualityIndex(result);
      result[purpleIndex] = this.raiseCard(result[purpleIndex], "purple", skills);
      return result;
    }
    worstQualityIndex(cards) {
      let bestIndex = 0;
      for (let i = 1; i < cards.length; i++) {
        if (QUALITY_RANK[cards[i].quality] < QUALITY_RANK[cards[bestIndex].quality]) bestIndex = i;
      }
      return bestIndex;
    }
    raiseCard(card, minimum, skills) {
      var _a;
      if (QUALITY_RANK[card.quality] >= QUALITY_RANK[minimum]) return card;
      const preview = skills.preview(card.skillId, minimum);
      const primary = (_a = Object.values(preview.delta).find((value) => Math.abs(value) > 1e-9)) != null ? _a : 0;
      return {
        skillId: card.skillId,
        quality: minimum,
        value: primary,
        increments: preview.delta,
        finalValues: preview.after
      };
    }
  };

  // src/systems/SkillSystem.ts
  var QUALITY_INDEX = {
    green: 0,
    blue: 1,
    purple: 2,
    orange: 3
  };
  var SkillSystem = class {
    constructor() {
      this.historyBySkill = /* @__PURE__ */ new Map();
      this.lastSkill = null;
    }
    getConfig(skillId) {
      const config = MVP_SKILLS.find((skill) => skill.id === skillId);
      if (!config) throw new Error(`unknown MVP skill: ${skillId}`);
      return config;
    }
    count(skillId) {
      var _a, _b;
      return (_b = (_a = this.historyBySkill.get(skillId)) == null ? void 0 : _a.length) != null ? _b : 0;
    }
    has(skillId) {
      return this.count(skillId) > 0;
    }
    history(skillId) {
      var _a;
      return (_a = this.historyBySkill.get(skillId)) != null ? _a : [];
    }
    selectedSkillCount() {
      let count = 0;
      for (const history of this.historyBySkill.values()) if (history.length > 0) count++;
      return count;
    }
    schoolPoints(school) {
      let points = 0;
      for (const skill of MVP_SKILLS) {
        if (skill.school === school) points += this.count(skill.id);
      }
      return points;
    }
    lastSelected() {
      return this.lastSkill;
    }
    canSelect(skillId) {
      const skill = this.getConfig(skillId);
      if (this.count(skillId) >= skill.maxUpgradeCount) return false;
      if (skill.prerequisites.some((required) => !this.has(required))) return false;
      if (skill.exclusions.some((excluded) => this.has(excluded))) return false;
      return true;
    }
    aggregate(skillId, history = this.history(skillId)) {
      const skill = this.getConfig(skillId);
      const result = {};
      for (const [name, parameter] of Object.entries(skill.parameters)) {
        result[name] = this.reduceParameter(parameter, history);
      }
      return result;
    }
    preview(skillId, quality) {
      var _a, _b;
      if (!this.canSelect(skillId)) throw new Error(`skill cannot be selected: ${skillId}`);
      const beforeHistory = this.history(skillId);
      const before = this.aggregate(skillId, beforeHistory);
      const after = this.aggregate(skillId, [...beforeHistory, quality]);
      const delta = {};
      let zeroBenefit = true;
      for (const key of Object.keys(after)) {
        const change = ((_a = after[key]) != null ? _a : 0) - ((_b = before[key]) != null ? _b : 0);
        delta[key] = change;
        if (Math.abs(change) > 1e-9) zeroBenefit = false;
      }
      return { skillId, quality, before, after, delta, zeroBenefit };
    }
    choose(skillId, quality) {
      var _a;
      const preview = this.preview(skillId, quality);
      if (preview.zeroBenefit) throw new Error(`zero-benefit skill choice rejected: ${skillId}`);
      const history = (_a = this.historyBySkill.get(skillId)) != null ? _a : [];
      history.push(quality);
      this.historyBySkill.set(skillId, history);
      this.lastSkill = skillId;
      return preview;
    }
    selectableIds() {
      return MVP_SKILLS.filter((skill) => this.canSelect(skill.id)).map((skill) => skill.id);
    }
    snapshot() {
      const result = {};
      for (const skill of MVP_SKILLS) result[skill.id] = [...this.history(skill.id)];
      return result;
    }
    reduceParameter(parameter, history) {
      let value = parameter.base;
      for (let i = 0; i < history.length; i++) {
        const qualityIndex = QUALITY_INDEX[history[i]];
        const amount = (i === 0 ? parameter.first : parameter.repeat)[qualityIndex];
        switch (parameter.combine) {
          case "add":
            value += amount;
            break;
          case "max":
            value = Math.max(value, amount);
            break;
          case "min":
            value = Math.min(value, amount);
            break;
          case "set_then_add":
            value = i === 0 ? amount : value + amount;
            break;
          case "max_then_add":
            value = i === 0 ? Math.max(value, amount) : value + amount;
            break;
        }
        if (parameter.floor !== void 0) value = Math.max(parameter.floor, value);
        if (parameter.cap !== void 0) value = Math.min(parameter.cap, value);
      }
      return value;
    }
  };

  // src/systems/ControlSystem.ts
  var windowTicks = Math.round(CONTROLS.windowSeconds * CLOCK.hz);
  function tierForKind(kind) {
    if (kind === "boss") return "boss";
    if (kind === "glutton") return "elite";
    return "ordinary";
  }
  var ControlSystem = class {
    constructor() {
      this.states = /* @__PURE__ */ new Map();
    }
    tier(kind) {
      return tierForKind(kind);
    }
    applyKnockback(id, kind, desiredQ, tick) {
      const state = this.state(id);
      this.prune(state, tick);
      const tier = tierForKind(kind);
      if (this.isImmuneState(state, tick)) return { actualQ: 0, immune: true, budgetExhausted: false };
      let requestedQ = Math.max(0, Math.trunc(desiredQ));
      if (tier === "boss") requestedQ = Math.round(requestedQ * CONTROLS.bossKnockbackScale);
      if (requestedQ <= 0) return { actualQ: 0, immune: false, budgetExhausted: false };
      if (tier === "ordinary") {
        return { actualQ: requestedQ, immune: false, budgetExhausted: false };
      }
      const budgetQ = toPos(tier === "boss" ? CONTROLS.bossKnockbackBudget : CONTROLS.eliteKnockbackBudget);
      const usedQ = state.knockbacks.reduce((sum, event) => sum + event.amount, 0);
      const actualQ = Math.max(0, Math.min(requestedQ, budgetQ - usedQ));
      if (actualQ > 0) state.knockbacks.push({ tick, amount: actualQ });
      const exhausted = usedQ + actualQ >= budgetQ;
      if (exhausted) {
        const seconds = tier === "boss" ? CONTROLS.bossCcImmunitySeconds : CONTROLS.eliteCcImmunitySeconds;
        state.immunityUntilTick = Math.max(state.immunityUntilTick, tick + Math.round(seconds * CLOCK.hz));
      }
      return { actualQ, immune: false, budgetExhausted: exhausted };
    }
    applyHardCc(id, kind, desiredTicks, tick) {
      const state = this.state(id);
      this.prune(state, tick);
      const tier = tierForKind(kind);
      if (this.isImmuneState(state, tick)) return { actualTicks: 0, immune: true, budgetExhausted: false };
      let requested = Math.max(0, Math.trunc(desiredTicks));
      if (tier === "boss") requested = Math.min(requested, Math.round(CONTROLS.bossSingleStunCap * CLOCK.hz));
      if (requested <= 0) return { actualTicks: 0, immune: false, budgetExhausted: false };
      if (tier === "ordinary") {
        return { actualTicks: requested, immune: false, budgetExhausted: false };
      }
      const budget = Math.round((tier === "boss" ? CONTROLS.bossHardCcBudget : CONTROLS.eliteHardCcBudget) * CLOCK.hz);
      const used = state.hardCcs.reduce((sum, event) => sum + event.amount, 0);
      const actualTicks = Math.max(0, Math.min(requested, budget - used));
      if (actualTicks > 0) state.hardCcs.push({ tick, amount: actualTicks });
      const exhausted = used + actualTicks >= budget;
      if (exhausted) {
        const seconds = tier === "boss" ? CONTROLS.bossCcImmunitySeconds : CONTROLS.eliteCcImmunitySeconds;
        state.immunityUntilTick = Math.max(state.immunityUntilTick, tick + Math.round(seconds * CLOCK.hz));
      }
      return { actualTicks, immune: false, budgetExhausted: exhausted };
    }
    registerEatingInterrupt(id, kind, tick, actualKnockbackQ, actualHardCcTicks) {
      const state = this.state(id);
      this.prune(state, tick);
      const hasCurrentAppliedControl = state.knockbacks.some((event) => event.tick === tick && event.amount > 0) || state.hardCcs.some((event) => event.tick === tick && event.amount > 0);
      if (!hasCurrentAppliedControl && this.isImmuneState(state, tick) || tick < state.rollbackCooldownUntilTick) {
        return { accepted: false, rollbackFraction: 0, resistanceFactor: 0, enteredOrdinaryTenacity: false };
      }
      const knockbackQualified = actualKnockbackQ >= toPos(CONTROLS.interruptMinimumKnockback);
      const hardCcQualified = actualHardCcTicks >= Math.round(CONTROLS.interruptMinimumHardCc * CLOCK.hz);
      if (!knockbackQualified && !hardCcQualified) {
        return { accepted: false, rollbackFraction: 0, resistanceFactor: 0, enteredOrdinaryTenacity: false };
      }
      const priorCount = state.interrupts.length;
      const resistanceFactor = CONTROLS.resistanceFactors[Math.min(priorCount, CONTROLS.resistanceFactors.length - 1)];
      const tier = tierForKind(kind);
      const baseRollback = tier === "boss" ? 0.15 : tier === "elite" ? 0.3 : 0.5;
      const rollbackFraction = baseRollback * resistanceFactor;
      state.interrupts.push(tick);
      state.rollbackCooldownUntilTick = tick + Math.round(CONTROLS.interruptCooldown * CLOCK.hz);
      let enteredOrdinaryTenacity = false;
      if (tier === "ordinary" && state.interrupts.length >= 3) {
        state.ordinaryTenacityUntilTick = Math.max(
          state.ordinaryTenacityUntilTick,
          tick + Math.round(CONTROLS.ordinaryThirdInterruptImmunitySeconds * CLOCK.hz)
        );
        enteredOrdinaryTenacity = true;
      }
      return { accepted: true, rollbackFraction, resistanceFactor, enteredOrdinaryTenacity };
    }
    isImmune(id, tick) {
      const state = this.states.get(entityKey(id));
      if (!state) return false;
      this.prune(state, tick);
      return this.isImmuneState(state, tick);
    }
    release(id) {
      this.states.delete(entityKey(id));
    }
    state(id) {
      const key = entityKey(id);
      let state = this.states.get(key);
      if (!state) {
        state = {
          knockbacks: [],
          hardCcs: [],
          interrupts: [],
          immunityUntilTick: 0,
          rollbackCooldownUntilTick: 0,
          ordinaryTenacityUntilTick: 0
        };
        this.states.set(key, state);
      }
      return state;
    }
    isImmuneState(state, tick) {
      return tick < state.immunityUntilTick || tick < state.ordinaryTenacityUntilTick;
    }
    prune(state, tick) {
      const minimumTick = tick - windowTicks;
      while (state.knockbacks.length > 0 && state.knockbacks[0].tick < minimumTick) state.knockbacks.shift();
      while (state.hardCcs.length > 0 && state.hardCcs[0].tick < minimumTick) state.hardCcs.shift();
      while (state.interrupts.length > 0 && state.interrupts[0] < minimumTick) state.interrupts.shift();
    }
  };

  // src/systems/WaveSystem.ts
  function allocateTypes(segment, count) {
    const entries = Object.entries(segment.weights);
    const floors = entries.map(([kind, weight]) => ({ kind, exact: count * weight, count: Math.floor(count * weight) }));
    let remaining = count - floors.reduce((sum, x) => sum + x.count, 0);
    floors.sort((a, b) => {
      const ra = a.exact - a.count;
      const rb = b.exact - b.count;
      return rb - ra || a.kind.localeCompare(b.kind);
    });
    for (let i = 0; i < remaining; i++) floors[i % floors.length].count++;
    floors.sort((a, b) => a.kind.localeCompare(b.kind));
    const result = [];
    for (const item of floors) for (let i = 0; i < item.count; i++) result.push(item.kind);
    return result;
  }
  function shuffle(items, rng) {
    for (let i = items.length - 1; i > 0; i--) {
      const j = rng.nextInt(i + 1);
      [items[i], items[j]] = [items[j], items[i]];
    }
  }
  function ticks(seconds) {
    return Math.round(seconds * CLOCK.hz);
  }
  function buildMvpWaveSchedule(seed) {
    const rng = new XorShift32(seed || 1463899717);
    const events = [];
    let sequence = 0;
    for (const segment of WAVES_8) {
      const duration = segment.end - segment.start;
      const total = Math.floor(segment.rate * duration / 60);
      const uniformCount = Math.floor(total * 0.7);
      const pulseCount = total - uniformCount;
      const types = allocateTypes(segment, total);
      shuffle(types, rng);
      const times = [];
      if (uniformCount > 0) {
        const start = segment.start === 0 ? 2 : segment.start;
        const latest = segment.end - 0.5;
        if (uniformCount === 1) times.push(start);
        else {
          for (let i = 0; i < uniformCount; i++) {
            times.push(start + (latest - start) * i / (uniformCount - 1));
          }
        }
      }
      const k = Math.max(1, Math.ceil(duration / segment.pulseEvery));
      const basePulse = Math.floor(pulseCount / k);
      const extra = pulseCount % k;
      for (let j = 1; j <= k; j++) {
        const pulseTime = segment.start + Math.min(j * segment.pulseEvery, duration - 0.5);
        const amount = basePulse + (j <= extra ? 1 : 0);
        for (let n = 0; n < amount; n++) times.push(pulseTime);
      }
      times.sort((a, b) => a - b);
      if (times.length !== total || types.length !== total) throw new Error("wave allocation mismatch");
      for (let i = 0; i < total; i++) {
        const entrance = segment.entrances[i % segment.entrances.length];
        events.push({ kind: "monster", tick: ticks(times[i]), sequence: sequence++, monster: types[i], entrance });
      }
    }
    MVP_MODE.eliteAt.forEach((at, eliteIndex) => {
      events.push({ kind: "elite", tick: ticks(at), sequence: sequence++, eliteIndex });
    });
    events.push({ kind: "boss", tick: ticks(MVP_MODE.bossAt), sequence: sequence++ });
    events.sort((a, b) => a.tick - b.tick || a.sequence - b.sequence);
    return events;
  }
  function buildMvpPostBossCycle(seed, cycleIndex) {
    const template = WAVES_8[WAVES_8.length - 1];
    const cycleLength = 45;
    const start = 480 + cycleIndex * cycleLength;
    const end = start + cycleLength;
    const segment = __spreadProps(__spreadValues({}, template), {
      start,
      end
    });
    const rng = new XorShift32(seed || 1347375956 ^ cycleIndex);
    const duration = end - start;
    const total = Math.floor(segment.rate * duration / 60);
    const uniformCount = Math.floor(total * 0.7);
    const pulseCount = total - uniformCount;
    const types = allocateTypes(segment, total);
    shuffle(types, rng);
    const times = [];
    if (uniformCount > 0) {
      const latest = end - 0.5;
      if (uniformCount === 1) times.push(start);
      else {
        for (let i = 0; i < uniformCount; i++) {
          times.push(start + (latest - start) * i / (uniformCount - 1));
        }
      }
    }
    const k = Math.max(1, Math.ceil(duration / segment.pulseEvery));
    const basePulse = Math.floor(pulseCount / k);
    const extra = pulseCount % k;
    for (let j = 1; j <= k; j++) {
      const pulseTime = start + Math.min(j * segment.pulseEvery, duration - 0.5);
      const amount = basePulse + (j <= extra ? 1 : 0);
      for (let n = 0; n < amount; n++) times.push(pulseTime);
    }
    times.sort((a, b) => a - b);
    return times.map((time, i) => ({
      kind: "monster",
      tick: ticks(time),
      sequence: i,
      monster: types[i],
      entrance: segment.entrances[i % segment.entrances.length]
    }));
  }

  // src/MvpSimulation.ts
  var MvpSimulation = class {
    constructor(seed, options = {}) {
      this.seed = seed;
      this.phase = "PLAYING";
      this.tick = 0;
      this.events = [];
      this.juiceGrid = new JuiceGrid();
      this.garden = new GardenSystem();
      this.barriers = new BarrierSystem();
      this.skills = new SkillSystem();
      this.controls = new ControlSystem();
      this.currentOffer = null;
      this.currentOfferId = null;
      this.currentOfferGuarantee = null;
      this.technicalPauseReason = null;
      this.resultReason = null;
      this.resultCommitted = false;
      this.bossSpawned = false;
      this.bossDead = false;
      this.enemyIds = new EntityAllocator();
      this.projectileIds = new EntityAllocator();
      this.orbIds = new EntityAllocator();
      this.healOrbIds = new EntityAllocator();
      this.enemies = /* @__PURE__ */ new Map();
      this.projectiles = /* @__PURE__ */ new Map();
      this.orbs = /* @__PURE__ */ new Map();
      this.healOrbs = /* @__PURE__ */ new Map();
      this.offerSystem = new OfferSystem();
      this.waveCursor = 0;
      this.postBossCycleIndex = 0;
      this.ultimateRequested = false;
      this.offerSequence = 0;
      this.bossId = null;
      this.bossNextSummonTick = null;
      this.bossNextDashTick = null;
      this.bossDashWarnedForTick = null;
      this.bossDashUntilTick = null;
      this.lastPlayerHitTick = null;
      this.lastPlayerHitSourceId = null;
      this.lastPlayerHitSourceQx = 0;
      this.lastPlayerHitSourceQy = 0;
      this.lastEliteRewardTick = null;
      this.lastEliteRewardGuarantee = null;
      this.lastChoiceFeedback = null;
      this.pendingQualityGuarantee = null;
      var _a;
      this.enableWaves = (_a = options.enableWaves) != null ? _a : false;
      this.streams = createRandomStreams(seed);
      this.waveSchedule = [...buildMvpWaveSchedule(this.streams.wave.nextU32())];
      this.player = {
        qx: toPos(WORLD.playerStart[0]),
        qy: toPos(WORLD.playerStart[1]),
        hpQ: toHp(PLAYER.hp),
        maxHpQ: toHp(PLAYER.hp),
        attackBonusPct: 0,
        attackSpeedBonusPct: 0,
        attachChanceBonusPct: 0,
        deathJuiceExtraChancePct: 0,
        deathJuiceRadiusBonusQ: 0,
        groundDurationBonusTicks: 0,
        bodySlowBonusPerLayerPct: 0,
        eatDurationBonusTicks: 0,
        repairWaitSeconds: 5,
        repairPctPerSecond: 0,
        healDropChancePct: 0,
        healPercentMaxHp: 0,
        ripeBonusPerAttack: 0,
        ripePowerBonusPct: 0,
        ripeSplashRadiusBonusQ: 0,
        ripeSplashCoefficientBonusPct: 0,
        ripeCharge: 0,
        ripeReady: false,
        nextAttackTick: 0,
        ultimateChargeTicks: ULTIMATE.startsFull ? this.ultimateMaxTicks() : 0,
        invulnerableUntilTick: 0,
        supplyShieldQ: 0,
        supplyShieldExpireTick: 0,
        xp: 0,
        level: 0,
        pendingChoices: 0,
        choiceCount: 0,
        moveX: 0,
        moveY: 0
      };
    }
    setMoveInput(x, y) {
      this.player.moveX = Math.max(-1e3, Math.min(1e3, Math.round(x * 1e3)));
      this.player.moveY = Math.max(-1e3, Math.min(1e3, Math.round(y * 1e3)));
    }
    queueUltimate() {
      this.ultimateRequested = true;
    }
    spawnEnemy(kind, xMeters, yMeters) {
      const xpValue = kind === "boss" ? 0 : kind === "glutton" ? 50 : MONSTERS[kind].exp;
      const source = kind === "boss" ? "boss" : kind === "glutton" ? "elite" : "wave";
      return this.spawnEnemyState(kind, xMeters, yMeters, xpValue, source);
    }
    spawnEnemyState(kind, xMeters, yMeters, xpValue, source, eliteIndex = null) {
      const cfg = enemyConfig(kind);
      const id = this.enemyIds.allocate();
      const enemy = {
        id,
        kind,
        qx: toPos(xMeters),
        qy: toPos(yMeters),
        prevQx: toPos(xMeters),
        prevQy: toPos(yMeters),
        hpQ: toHp(cfg.hp),
        maxHpQ: toHp(cfg.hp),
        xpValue,
        source,
        eliteIndex,
        absorbedJuiceLayers: 0,
        nextAbsorbTick: 0,
        juiceStacks: 0,
        fruitTargetId: null,
        actionProgressTicks: 0,
        carryingFruitId: null,
        nextContactTick: 0,
        hardCcUntilTick: 0,
        alive: true
      };
      this.enemies.set(entityKey(id), enemy);
      if (kind === "boss") {
        this.bossId = id;
        this.bossSpawned = true;
        this.bossNextDashTick = this.tick + Math.round(BOSS.dashEvery * CLOCK.hz);
        this.bossDashWarnedForTick = null;
        this.bossDashUntilTick = null;
      }
      this.log("SPAWN", `${entityKey(id)}:${kind}:${source}`);
      return id;
    }
    addEnemyJuice(id, layers) {
      const enemy = this.enemies.get(entityKey(id));
      if (!enemy || !enemy.alive) return 0;
      const before = enemy.juiceStacks;
      enemy.juiceStacks = Math.min(JUICE.maxStack, enemy.juiceStacks + Math.max(0, Math.trunc(layers)));
      if (enemy.juiceStacks !== before) this.log("JUICE", `body:${entityKey(id)}:${before}->${enemy.juiceStacks}`);
      return enemy.juiceStacks;
    }
    addGroundJuice(xMeters, yMeters, layers, radiusMeters, durationSeconds) {
      const durationTicks = durationSeconds === void 0 ? this.juiceGrid.durationTicks(this.player.groundDurationBonusTicks) : Math.min(Math.round(JUICE.groundDurationCap * CLOCK.hz), Math.max(1, Math.round(durationSeconds * CLOCK.hz)));
      const ids = this.juiceGrid.addCircle(toPos(xMeters), toPos(yMeters), toPos(radiusMeters), layers, durationTicks, this.tick);
      if (ids.length > 0) this.log("JUICE", `ground:${ids.join(",")}:layers=${layers}`);
      return ids;
    }
    stepOneTick() {
      if (this.phase !== "PLAYING") return;
      this.tick++;
      this.juiceGrid.expireAtTick(this.tick);
      this.expireSupplyShield();
      this.expireHealingDrops();
      this.chargeUltimate();
      this.barriers.repairTick(this.tick, this.player.repairWaitSeconds, this.player.repairPctPerSecond);
      this.updatePlayerMovement();
      if (this.enableWaves) this.consumeWaveEvents();
      this.updateBossPhase();
      this.updateEnemyMovement();
      this.updateBarrierRebuilds();
      if (this.ultimateRequested) this.resolveUltimateRequest();
      this.tryFire();
      this.resolveProjectiles();
      this.resolveContactDamage();
      this.resolveGardenActions();
      this.collectExperience();
      this.collectHealingDrops();
      this.adjudicateTerminal();
      this.enterChoosingIfNeeded();
    }
    enterTechnicalPause(reason) {
      this.technicalPauseReason = reason;
      this.phase = "TECHNICAL_PAUSE";
    }
    pause() {
      if (this.phase !== "PLAYING") return false;
      this.phase = "PAUSED";
      return true;
    }
    enterBackground() {
      if (this.phase !== "PLAYING") return false;
      this.phase = "BACKGROUND";
      return true;
    }
    resume() {
      if (this.phase !== "PAUSED" && this.phase !== "BACKGROUND") return false;
      this.phase = "PLAYING";
      return true;
    }
    selectOffer(index, expectedOfferId = this.currentOfferId) {
      if (this.phase !== "CHOOSING" || !this.currentOffer || this.currentOfferId === null) throw new Error("not choosing");
      if (expectedOfferId !== this.currentOfferId) {
        throw new Error(`stale offer: expected ${expectedOfferId}, current ${this.currentOfferId}`);
      }
      const chosen = this.currentOffer[index];
      if (!chosen) throw new Error("invalid offer index");
      const preview = this.skills.choose(chosen.skillId, chosen.quality);
      this.applySkillPreview(preview);
      this.lastChoiceFeedback = {
        tick: this.tick,
        skillId: chosen.skillId,
        quality: chosen.quality,
        count: this.skills.count(chosen.skillId),
        increments: __spreadValues({}, preview.delta),
        finalValues: __spreadValues({}, preview.after)
      };
      this.player.choiceCount++;
      this.player.pendingChoices--;
      this.log("CHOICE", `${this.currentOfferId}:${chosen.skillId}:${chosen.quality}:${chosen.value}`);
      if (this.player.pendingChoices > 0) {
        this.currentOffer = this.makeOffer();
        this.currentOfferId = this.currentOffer.length > 0 ? ++this.offerSequence : null;
        if (this.currentOffer.length === 0) {
          this.currentOffer = null;
          this.currentOfferGuarantee = null;
          this.phase = "PLAYING";
          this.enterChoosingIfNeeded();
        }
      } else {
        this.currentOffer = null;
        this.currentOfferId = null;
        this.currentOfferGuarantee = null;
        this.phase = "PLAYING";
      }
    }
    snapshot() {
      const enemies = [...this.enemies.values()].filter((e) => e.alive).sort((a, b) => entityKey(a.id).localeCompare(entityKey(b.id))).map((e) => {
        const requiredActionTicks = e.fruitTargetId === null ? 0 : this.requiredFruitActionTicks(e);
        return {
          id: entityKey(e.id),
          kind: e.kind,
          x: fromPos(e.qx),
          y: fromPos(e.qy),
          hp: fromHp(e.hpQ),
          maxHp: fromHp(e.maxHpQ),
          juiceStacks: e.juiceStacks,
          absorbedJuiceLayers: e.absorbedJuiceLayers,
          fruitTargetId: e.fruitTargetId,
          actionProgressTicks: e.actionProgressTicks,
          actionProgressFraction: requiredActionTicks <= 0 ? 0 : Math.max(0, Math.min(1, e.actionProgressTicks / requiredActionTicks)),
          hardCcUntilTick: e.hardCcUntilTick,
          source: e.source,
          eliteIndex: e.eliteIndex,
          carryingFruitId: e.carryingFruitId,
          escapeX: e.carryingFruitId === null ? null : fromPos(this.escapeTarget(e.qx, e.qy)[0]),
          escapeY: e.carryingFruitId === null ? null : fromPos(this.escapeTarget(e.qx, e.qy)[1])
        };
      });
      const projectiles = [...this.projectiles.values()].sort((a, b) => entityKey(a.id).localeCompare(entityKey(b.id))).map((p) => ({ id: entityKey(p.id), target: entityKey(p.target), x: fromPos(p.qx), y: fromPos(p.qy), expireTick: p.expireTick, attack: fromHp(p.attackQ), ripe: p.ripe }));
      const orbs = [...this.orbs.values()].sort((a, b) => entityKey(a.id).localeCompare(entityKey(b.id))).map((o) => ({ id: entityKey(o.id), x: fromPos(o.qx), y: fromPos(o.qy), amount: o.amount }));
      const healOrbs = [...this.healOrbs.values()].sort((a, b) => entityKey(a.id).localeCompare(entityKey(b.id))).map((o) => ({ id: entityKey(o.id), x: fromPos(o.qx), y: fromPos(o.qy), expireTick: o.expireTick, healPercentMaxHp: o.healPercentMaxHp }));
      const groundJuice = this.juiceGrid.activeCells().map((cell) => ({ cellId: cell.cellId, column: cell.column, row: cell.row, x: fromPos(cell.qx), y: fromPos(cell.qy), stack: cell.stack, expireTick: cell.expireTick, version: cell.version }));
      const fruitCells = this.garden.snapshot().map((fruit) => ({ fruitId: fruit.fruitId, ownership: fruit.ownership, x: fromPos(fruit.qx), y: fromPos(fruit.qy), reservedBy: fruit.reservedBy, carriedBy: fruit.carriedBy }));
      const barriers = this.barriers.snapshot();
      return {
        tick: this.tick,
        phase: this.phase,
        resultCommitted: this.resultCommitted,
        resultReason: this.resultReason,
        player: {
          x: fromPos(this.player.qx),
          y: fromPos(this.player.qy),
          hp: fromHp(this.player.hpQ),
          maxHp: fromHp(this.player.maxHpQ),
          xp: this.player.xp,
          level: this.player.level,
          pendingChoices: this.player.pendingChoices,
          choiceCount: this.player.choiceCount,
          attackBonusPct: this.player.attackBonusPct,
          attackSpeedBonusPct: this.player.attackSpeedBonusPct,
          ripeCharge: this.player.ripeCharge,
          ripeReady: this.player.ripeReady,
          ultimateChargeTicks: this.player.ultimateChargeTicks,
          ultimateReady: this.isUltimateReady(),
          supplyShield: fromHp(this.player.supplyShieldQ),
          supplyShieldExpireTick: this.player.supplyShieldExpireTick
        },
        enemies,
        projectiles,
        orbs,
        healOrbs,
        groundJuice,
        playerHit: this.lastPlayerHitTick === null || this.lastPlayerHitSourceId === null ? null : {
          tick: this.lastPlayerHitTick,
          sourceId: this.lastPlayerHitSourceId,
          sourceX: fromPos(this.lastPlayerHitSourceQx),
          sourceY: fromPos(this.lastPlayerHitSourceQy)
        },
        eliteReward: this.lastEliteRewardTick === null || this.lastEliteRewardGuarantee === null ? null : {
          tick: this.lastEliteRewardTick,
          guarantee: this.lastEliteRewardGuarantee
        },
        lastChoice: this.lastChoiceFeedback,
        boss: {
          phase: (() => {
            if (!this.bossId || this.bossDead) return null;
            const boss = this.enemies.get(entityKey(this.bossId));
            if (!boss || !boss.alive) return null;
            const ratio = boss.hpQ / boss.maxHpQ;
            if (ratio <= BOSS.phaseThresholds[1]) return "FRENZY";
            if (ratio <= BOSS.phaseThresholds[0]) return "SUMMON";
            return "DASH";
          })(),
          dashWarning: this.bossDashWarnedForTick !== null && this.bossNextDashTick !== null && this.tick < this.bossNextDashTick,
          dashing: this.bossDashUntilTick !== null && this.tick < this.bossDashUntilTick,
          summonWarning: this.bossNextSummonTick !== null && this.bossId !== null && !this.bossDead && this.bossNextSummonTick > this.tick && this.bossNextSummonTick - this.tick <= CLOCK.hz
        },
        fruit: this.garden.counts(),
        fruitCells,
        barriers,
        offerId: this.currentOfferId,
        offer: this.currentOffer,
        offerGuarantee: this.currentOfferGuarantee,
        skills: this.skills.snapshot(),
        rng: {
          wave: this.streams.wave.snapshot(),
          offer: this.streams.offer.snapshot(),
          quality: this.streams.quality.snapshot(),
          combat: this.streams.combat.snapshot(),
          drop: this.streams.drop.snapshot()
        }
      };
    }
    chargeUltimate() {
      this.player.ultimateChargeTicks = Math.min(this.ultimateMaxTicks(), this.player.ultimateChargeTicks + 1);
    }
    ultimateMaxTicks() {
      return Math.round(ULTIMATE.chargeSeconds * CLOCK.hz);
    }
    isUltimateReady() {
      return this.player.ultimateChargeTicks >= this.ultimateMaxTicks();
    }
    resolveUltimateRequest() {
      var _a, _b;
      this.ultimateRequested = false;
      if (!this.isUltimateReady()) return;
      const groundSnapshot = this.juiceGrid.activeCells();
      const bodyHasJuice = [...this.enemies.values()].some((enemy) => enemy.alive && enemy.juiceStacks > 0);
      if (groundSnapshot.length === 0 && !bodyHasJuice) {
        this.log("ULTIMATE", "blocked:no_juice");
        return;
      }
      const attackQ = Math.round(toHp(PLAYER.attack) * (100 + this.player.attackBonusPct) / 100);
      const targets = [...this.enemies.values()].filter((enemy) => enemy.alive).sort((a, b) => entityKey(a.id).localeCompare(entityKey(b.id)));
      const pendingDamage = /* @__PURE__ */ new Map();
      const bodySnapshot = /* @__PURE__ */ new Map();
      for (const enemy of targets) {
        bodySnapshot.set(entityKey(enemy.id), enemy.juiceStacks);
        let totalQ = 0;
        if (enemy.juiceStacks > 0) totalQ += this.ultimateCandidateDamageQ(enemy, enemy.juiceStacks, attackQ);
        const candidates = [];
        for (const cell of groundSnapshot) {
          const radiusQ = toPos((_a = JUICE.explosionRadii[cell.stack]) != null ? _a : 0);
          const enemyRadiusQ = toPos(this.enemyRadiusMeters(enemy));
          const reachQ = radiusQ + enemyRadiusQ;
          if (distanceSq(enemy.qx, enemy.qy, cell.qx, cell.qy) > reachQ * reachQ) continue;
          candidates.push({ cellId: cell.cellId, damageQ: this.ultimateCandidateDamageQ(enemy, cell.stack, attackQ) });
        }
        candidates.sort((a, b) => b.damageQ - a.damageQ || a.cellId - b.cellId);
        for (let i = 0; i < Math.min(JUICE.groundTopK, candidates.length); i++) totalQ += candidates[i].damageQ;
        if (totalQ > 0) pendingDamage.set(entityKey(enemy.id), totalQ);
      }
      const deferredDeaths = [];
      for (const enemy of targets) {
        const damageQ = (_b = pendingDamage.get(entityKey(enemy.id))) != null ? _b : 0;
        if (damageQ <= 0 || !enemy.alive) continue;
        enemy.hpQ -= damageQ;
        if (enemy.hpQ <= 0) {
          const death = this.commitDeath(enemy, false);
          if (death) deferredDeaths.push(death);
        }
      }
      this.juiceGrid.clearCells(groundSnapshot.map((cell) => cell.cellId));
      for (const enemy of this.enemies.values()) {
        if (bodySnapshot.has(entityKey(enemy.id))) enemy.juiceStacks = 0;
      }
      for (const death of deferredDeaths) this.spawnDeathJuice(death);
      if (ULTIMATE.resetOnCast) this.player.ultimateChargeTicks = 0;
      this.log("ULTIMATE", `cast:cells=${groundSnapshot.length}:targets=${pendingDamage.size}:deaths=${deferredDeaths.length}`);
    }
    ultimateCandidateDamageQ(enemy, stacks, attackQ) {
      var _a;
      const coefficient = (_a = JUICE.explosionCoefficients[stacks]) != null ? _a : 0;
      let damageQ = Math.round(attackQ * coefficient);
      if (enemy.kind === "armor" && damageQ < toHp(18)) damageQ = Math.round(damageQ * 0.7);
      if (enemy.kind === "boss") damageQ = Math.round(damageQ * BOSS.ultimateDamageFactor);
      return damageQ;
    }
    updatePlayerMovement() {
      if (this.player.moveX === 0 && this.player.moveY === 0) return;
      const dx = this.player.moveX;
      const dy = this.player.moveY;
      const len = intSqrt(dx * dx + dy * dy) || 1;
      const stepQ = Math.round(PLAYER.speed * 4096 / CLOCK.hz);
      this.player.qx += Math.trunc(dx * stepQ / len);
      this.player.qy += Math.trunc(dy * stepQ / len);
      const halfW = toPos(WORLD.width / 2 - PLAYER.radius);
      const halfH = toPos(WORLD.height / 2 - PLAYER.radius);
      this.player.qx = Math.max(-halfW, Math.min(halfW, this.player.qx));
      this.player.qy = Math.max(-halfH, Math.min(halfH, this.player.qy));
    }
    consumeWaveEvents() {
      var _a;
      while (this.tick >= Math.round((480 + this.postBossCycleIndex * 45) * CLOCK.hz)) {
        this.waveSchedule.push(...buildMvpPostBossCycle(this.streams.wave.nextU32(), this.postBossCycleIndex));
        this.postBossCycleIndex++;
      }
      while (this.waveCursor < this.waveSchedule.length) {
        const event = this.waveSchedule[this.waveCursor];
        if (event.tick > this.tick) break;
        this.waveCursor++;
        if (event.kind === "monster") {
          const cfg = MONSTERS[event.monster];
          const [x, y] = this.spawnPoint(event.entrance, cfg.radius);
          this.spawnEnemyState(event.monster, x, y, cfg.exp, "wave");
        } else if (event.kind === "elite") {
          const entrance = ["top", "bottom", "left", "right"][event.eliteIndex % 4];
          const cfg = enemyConfig("glutton");
          const [x, y] = this.spawnPoint(entrance, cfg.radius);
          this.spawnEnemyState("glutton", x, y, (_a = MVP_MODE.eliteExp[event.eliteIndex]) != null ? _a : 50, "elite", event.eliteIndex);
          this.log("ELITE", `spawn:${event.eliteIndex}`);
        } else if (event.kind === "boss" && !this.bossSpawned) {
          const entrance = ["top", "bottom", "left", "right"][this.streams.wave.nextInt(4)];
          const cfg = enemyConfig("boss");
          const [x, y] = this.spawnPoint(entrance, cfg.radius);
          this.spawnEnemyState("boss", x, y, 0, "boss");
          this.log("BOSS", `spawn:${entrance}`);
        }
      }
    }
    spawnPoint(entrance, radius) {
      const jitter = (this.streams.wave.nextInt(4001) - 2e3) / 1e3;
      const halfW = WORLD.width / 2;
      const halfH = WORLD.height / 2;
      const inset = Math.max(0.25, radius);
      switch (entrance) {
        case "top":
          return [jitter, -halfH + inset];
        case "bottom":
          return [jitter, halfH - inset];
        case "left":
          return [-halfW + inset, jitter];
        case "right":
          return [halfW - inset, jitter];
      }
    }
    updateBossPhase() {
      if (!this.bossId || this.bossDead) return;
      const boss = this.enemies.get(entityKey(this.bossId));
      if (!boss || !boss.alive) return;
      const ratio = boss.hpQ / boss.maxHpQ;
      const bossEating = boss.fruitTargetId !== null && boss.actionProgressTicks > 0;
      if (ratio > BOSS.phaseThresholds[0]) {
        if (bossEating) {
          this.bossNextDashTick = this.tick + Math.round(BOSS.dashEvery * CLOCK.hz);
          this.bossDashWarnedForTick = null;
          this.bossDashUntilTick = null;
          return;
        }
        this.bossNextSummonTick = null;
        if (this.bossNextDashTick === null) this.bossNextDashTick = this.tick + Math.round(BOSS.dashEvery * CLOCK.hz);
        const warnTick = this.bossNextDashTick - Math.round(BOSS.dashWarn * CLOCK.hz);
        if (this.tick >= warnTick && this.tick < this.bossNextDashTick && this.bossDashWarnedForTick !== this.bossNextDashTick) {
          this.bossDashWarnedForTick = this.bossNextDashTick;
          this.log("BOSS", `dash_warn:${this.bossNextDashTick}`);
        }
        if (this.tick >= this.bossNextDashTick) {
          this.bossDashUntilTick = this.tick + Math.round(BOSS.dashDuration * CLOCK.hz);
          this.log("BOSS", `dash_start:${this.bossDashUntilTick}`);
          this.bossNextDashTick += Math.round(BOSS.dashEvery * CLOCK.hz);
          this.bossDashWarnedForTick = null;
        }
        return;
      }
      this.bossNextDashTick = null;
      this.bossDashWarnedForTick = null;
      this.bossDashUntilTick = null;
      if (this.bossNextSummonTick === null) {
        this.bossNextSummonTick = this.tick + Math.round(BOSS.summonEvery * CLOCK.hz);
        return;
      }
      if (this.tick < this.bossNextSummonTick) return;
      const aliveSummons = [...this.enemies.values()].filter((enemy) => enemy.alive && enemy.source === "boss_summon").length;
      const room = Math.max(0, BOSS.summonAliveCap - aliveSummons);
      const amount = Math.min(BOSS.summonCount, room);
      const offsets = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      for (let i = 0; i < amount; i++) {
        const offset = offsets[i % offsets.length];
        this.spawnEnemyState("small", fromPos(boss.qx) + offset[0] * 0.8, fromPos(boss.qy) + offset[1] * 0.8, BOSS.summonExp, "boss_summon");
      }
      this.bossNextSummonTick += Math.round(BOSS.summonEvery * CLOCK.hz);
      this.log("BOSS", `summon:${amount}`);
    }
    updateEnemyMovement() {
      for (const enemy of this.enemies.values()) {
        if (!enemy.alive) continue;
        enemy.prevQx = enemy.qx;
        enemy.prevQy = enemy.qy;
        if (this.tick < enemy.hardCcUntilTick) continue;
        const cfg = enemyConfig(enemy.kind);
        const bodySlow = enemy.juiceStacks * (JUICE.enemySlowPerLayer + this.player.bodySlowBonusPerLayerPct);
        const groundSlow = this.juiceGrid.getStackAt(enemy.qx, enemy.qy) * JUICE.groundSlowPerLayer;
        const slowCap = enemy.kind === "boss" ? 35 : enemy.kind === "glutton" ? 50 : 70;
        const slowPct = Math.min(slowCap, bodySlow + groundSlow);
        const carryingFactor = enemy.carryingFruitId === null ? 1 : FRUIT.stealSpeedFactor;
        const bossLowHpFactor = enemy.kind === "boss" && enemy.hpQ / enemy.maxHpQ <= BOSS.phaseThresholds[1] ? BOSS.lowHpSpeedFactor : 1;
        const bossDashSpeed = enemy.kind === "boss" && this.bossDashUntilTick !== null && this.tick < this.bossDashUntilTick ? BOSS.dashSpeed : null;
        const effectiveSpeed = bossDashSpeed != null ? bossDashSpeed : cfg.speed * bossLowHpFactor;
        const maxStep = Math.max(1, Math.round(effectiveSpeed * carryingFactor * (1 - slowPct / 100) * 4096 / CLOCK.hz));
        let targetX;
        let targetY;
        let absorberCell = null;
        if (enemy.carryingFruitId !== null) {
          [targetX, targetY] = this.escapeTarget(enemy.qx, enemy.qy);
        } else {
          if (enemy.kind === "absorber" && enemy.absorbedJuiceLayers < 10) {
            absorberCell = this.findAbsorberJuiceCell(enemy);
          }
          if (absorberCell) {
            if (enemy.fruitTargetId !== null) {
              this.garden.releaseReservation(enemy.id);
              enemy.fruitTargetId = null;
              enemy.actionProgressTicks = 0;
            }
            targetX = absorberCell.qx;
            targetY = absorberCell.qy;
          } else {
            if (enemy.fruitTargetId === null) {
              enemy.fruitTargetId = this.garden.reserveNearest(enemy.id, enemy.qx, enemy.qy);
              enemy.actionProgressTicks = 0;
            }
            if (enemy.fruitTargetId === null) continue;
            [targetX, targetY] = this.garden.fruitPosition(enemy.fruitTargetId);
          }
        }
        if (enemy.carryingFruitId === null) {
          const barrier = this.findBlockingBarrier(enemy, targetX, targetY);
          if (barrier) {
            const [sx2, sy2] = stepToward(barrier.qx - enemy.qx, barrier.qy - enemy.qy, maxStep);
            enemy.qx += sx2;
            enemy.qy += sy2;
            if (enemy.qx === barrier.qx && enemy.qy === barrier.qy) {
              const dealt = this.barriers.damage(barrier.side, cfg.barrierDps / CLOCK.hz, this.tick);
              if (dealt > 0) this.log("BARRIER", `hit:${barrier.side}:${entityKey(enemy.id)}:${dealt}`);
            }
            continue;
          }
        }
        const [sx, sy] = stepToward(targetX - enemy.qx, targetY - enemy.qy, maxStep);
        enemy.qx += sx;
        enemy.qy += sy;
        if (absorberCell && enemy.qx === targetX && enemy.qy === targetY) {
          this.tryAbsorbGroundJuice(enemy, absorberCell.cellId);
        }
      }
    }
    findAbsorberJuiceCell(enemy) {
      var _a, _b;
      const radiusQ = toPos(3);
      const radiusSq = radiusQ * radiusQ;
      const candidates = this.juiceGrid.activeCells().map((cell) => ({ cell, distance: distanceSq(enemy.qx, enemy.qy, cell.qx, cell.qy) })).filter((item) => item.distance <= radiusSq).sort((a, b) => b.cell.stack - a.cell.stack || a.distance - b.distance || a.cell.cellId - b.cell.cellId);
      return (_b = (_a = candidates[0]) == null ? void 0 : _a.cell) != null ? _b : null;
    }
    tryAbsorbGroundJuice(enemy, cellId) {
      if (enemy.kind !== "absorber" || enemy.absorbedJuiceLayers >= 10 || this.tick < enemy.nextAbsorbTick) return;
      const consumed = this.juiceGrid.consumeLayers(cellId, 1);
      if (consumed <= 0) return;
      enemy.absorbedJuiceLayers = Math.min(10, enemy.absorbedJuiceLayers + consumed);
      enemy.nextAbsorbTick = this.tick + CLOCK.hz;
      const base = MONSTERS.absorber;
      const nextMaxQ = toHp(base.hp * (1 + 0.08 * enemy.absorbedJuiceLayers));
      const deltaMaxQ = Math.max(0, nextMaxQ - enemy.maxHpQ);
      enemy.maxHpQ = nextMaxQ;
      enemy.hpQ += deltaMaxQ;
      this.log("JUICE", `absorbed:${entityKey(enemy.id)}:cell=${cellId}:count=${enemy.absorbedJuiceLayers}`);
    }
    enemyRadiusMeters(enemy) {
      const base = enemyConfig(enemy.kind).radius;
      return enemy.kind === "absorber" ? base * (1 + 0.03 * enemy.absorbedJuiceLayers) : base;
    }
    enemyContactDamage(enemy) {
      const base = enemyConfig(enemy.kind).contact;
      return enemy.kind === "absorber" ? base * (1 + 0.05 * enemy.absorbedJuiceLayers) : base;
    }
    findBlockingBarrier(enemy, targetX, targetY) {
      var _a;
      const half = toPos(WORLD.barrierHalfExtent);
      const halfThickness = Math.floor(toPos(WORLD.barrierThickness) / 2);
      const radius = toPos(this.enemyRadiusMeters(enemy));
      const outer = half + halfThickness + radius;
      const span = half + halfThickness + radius;
      const dx = targetX - enemy.qx;
      const dy = targetY - enemy.qy;
      const candidates = [];
      const addHorizontal = (side, plane) => {
        if (dy === 0) return;
        const t = (plane - enemy.qy) / dy;
        if (t < 0 || t > 1) return;
        const x = Math.round(enemy.qx + dx * t);
        if (Math.abs(x) > span || !this.barriers.collisionActive(side)) return;
        candidates.push({ side, t, qx: x, qy: plane });
      };
      const addVertical = (side, plane) => {
        if (dx === 0) return;
        const t = (plane - enemy.qx) / dx;
        if (t < 0 || t > 1) return;
        const y = Math.round(enemy.qy + dy * t);
        if (Math.abs(y) > span || !this.barriers.collisionActive(side)) return;
        candidates.push({ side, t, qx: plane, qy: y });
      };
      if (enemy.qy <= -outer && targetY > -outer) addHorizontal("top", -outer);
      if (enemy.qy >= outer && targetY < outer) addHorizontal("bottom", outer);
      if (enemy.qx <= -outer && targetX > -outer) addVertical("left", -outer);
      if (enemy.qx >= outer && targetX < outer) addVertical("right", outer);
      candidates.sort((a, b) => a.t - b.t || a.side.localeCompare(b.side));
      return (_a = candidates[0]) != null ? _a : null;
    }
    updateBarrierRebuilds() {
      const snapshots = this.barriers.snapshot();
      for (const wall of snapshots) {
        if (wall.state !== "REBUILDING") continue;
        const occupants = [...this.enemies.values()].filter((enemy) => enemy.alive && this.enemyOccupiesWallBand(enemy, wall.side)).sort((a, b) => entityKey(a.id).localeCompare(entityKey(b.id)));
        const action = this.barriers.updateRebuild(wall.side, this.tick, occupants.length > 0);
        if (action !== "separate") continue;
        for (const enemy of occupants) this.separateEnemyOutsideWall(enemy, wall.side);
        this.barriers.confirmSeparated(wall.side, this.tick);
        this.log("BARRIER", `separate:${wall.side}:${occupants.map((enemy) => entityKey(enemy.id)).join(",")}`);
      }
    }
    enemyOccupiesWallBand(enemy, side) {
      const half = toPos(WORLD.barrierHalfExtent);
      const halfThickness = Math.floor(toPos(WORLD.barrierThickness) / 2);
      const radius = toPos(this.enemyRadiusMeters(enemy));
      const span = half + halfThickness + radius;
      if (side === "top" || side === "bottom") {
        const plane2 = side === "top" ? -half : half;
        return Math.abs(enemy.qy - plane2) <= halfThickness + radius && Math.abs(enemy.qx) <= span;
      }
      const plane = side === "left" ? -half : half;
      return Math.abs(enemy.qx - plane) <= halfThickness + radius && Math.abs(enemy.qy) <= span;
    }
    separateEnemyOutsideWall(enemy, side) {
      const half = toPos(WORLD.barrierHalfExtent);
      const halfThickness = Math.floor(toPos(WORLD.barrierThickness) / 2);
      const radius = toPos(this.enemyRadiusMeters(enemy));
      const outside = half + halfThickness + radius + 1;
      if (side === "top") enemy.qy = -outside;
      else if (side === "bottom") enemy.qy = outside;
      else if (side === "left") enemy.qx = -outside;
      else enemy.qx = outside;
    }
    resolveGardenActions() {
      const enemies = [...this.enemies.values()].filter((enemy) => enemy.alive).sort((a, b) => entityKey(a.id).localeCompare(entityKey(b.id)));
      for (const enemy of enemies) {
        if (!enemy.alive) continue;
        if (enemy.carryingFruitId !== null) {
          if (this.hasEscapedWorld(enemy.qx, enemy.qy)) {
            const lost = this.garden.escapeCarriedBy(enemy.id);
            this.log("FRUIT", `escape:${entityKey(enemy.id)}:${lost.join(",")}`);
            this.removeEscapedEnemy(enemy);
          }
          continue;
        }
        if (enemy.fruitTargetId === null) continue;
        if (this.tick < enemy.hardCcUntilTick) continue;
        const [fruitX, fruitY] = this.garden.fruitPosition(enemy.fruitTargetId);
        if (enemy.qx !== fruitX || enemy.qy !== fruitY) continue;
        enemy.actionProgressTicks++;
        const requiredTicks = this.requiredFruitActionTicks(enemy);
        if (enemy.actionProgressTicks < requiredTicks) continue;
        const fruitId = enemy.fruitTargetId;
        if (enemy.kind === "thief") {
          if (this.garden.commitSteal(enemy.id, fruitId)) {
            enemy.carryingFruitId = fruitId;
            this.log("FRUIT", `carried:${entityKey(enemy.id)}:${fruitId}`);
          }
        } else if (this.garden.commitEat(enemy.id, fruitId)) {
          this.log("FRUIT", `lost:eaten:${entityKey(enemy.id)}:${fruitId}`);
        }
        enemy.fruitTargetId = null;
        enemy.actionProgressTicks = 0;
      }
    }
    resolveContactDamage() {
      const enemies = [...this.enemies.values()].filter((enemy) => enemy.alive).sort((a, b) => entityKey(a.id).localeCompare(entityKey(b.id)));
      for (const enemy of enemies) {
        if (this.tick < enemy.nextContactTick || this.tick < this.player.invulnerableUntilTick) continue;
        const reachQ = toPos(PLAYER.radius + this.enemyRadiusMeters(enemy));
        if (distanceSq(this.player.qx, this.player.qy, enemy.qx, enemy.qy) > reachQ * reachQ) continue;
        let damageQ = toHp(this.enemyContactDamage(enemy));
        if (this.player.supplyShieldQ > 0) {
          const absorbedQ = Math.min(this.player.supplyShieldQ, damageQ);
          this.player.supplyShieldQ -= absorbedQ;
          damageQ -= absorbedQ;
        }
        this.player.hpQ = Math.max(0, this.player.hpQ - damageQ);
        this.lastPlayerHitTick = this.tick;
        this.lastPlayerHitSourceId = entityKey(enemy.id);
        this.lastPlayerHitSourceQx = enemy.qx;
        this.lastPlayerHitSourceQy = enemy.qy;
        enemy.nextContactTick = this.tick + Math.round(PLAYER.contactCooldownPerEnemy * CLOCK.hz);
        this.player.invulnerableUntilTick = this.tick + Math.round(PLAYER.iframe * CLOCK.hz);
        this.log("PLAYER_HIT", `${entityKey(enemy.id)}:${this.enemyContactDamage(enemy)}`);
      }
    }
    adjudicateTerminal() {
      if (this.phase !== "PLAYING" || this.resultCommitted) return;
      if (this.player.hpQ <= 0) {
        this.commitResult("PLAYER_DEAD", "PLAYER_DEAD");
        return;
      }
      if (this.garden.isDefeat()) {
        this.commitResult("ALL_FRUIT_LOST", "ALL_FRUIT_LOST");
        return;
      }
      if (this.bossDead) {
        const returned = this.garden.victoryReturnAllCarried();
        this.commitResult("VICTORY", `VICTORY:return=${returned.join(",")}`);
      }
    }
    commitResult(reason, detail) {
      if (this.resultCommitted) return;
      this.resultCommitted = true;
      this.resultReason = reason;
      this.phase = "FINISHED";
      this.log("RESULT", detail);
    }
    escapeTarget(qx, qy) {
      const halfW = toPos(WORLD.width / 2);
      const halfH = toPos(WORLD.height / 2);
      const dx = halfW - Math.abs(qx);
      const dy = halfH - Math.abs(qy);
      const margin = toPos(1);
      if (dy <= dx) return [qx, qy <= 0 ? -halfH - margin : halfH + margin];
      return [qx <= 0 ? -halfW - margin : halfW + margin, qy];
    }
    hasEscapedWorld(qx, qy) {
      const halfW = toPos(WORLD.width / 2);
      const halfH = toPos(WORLD.height / 2);
      return qx < -halfW || qx > halfW || qy < -halfH || qy > halfH;
    }
    removeEscapedEnemy(enemy) {
      if (!enemy.alive) return;
      enemy.alive = false;
      this.garden.releaseReservation(enemy.id);
      this.enemies.delete(entityKey(enemy.id));
      this.controls.release(enemy.id);
      this.enemyIds.release(enemy.id);
    }
    tryFire() {
      if (this.tick < this.player.nextAttackTick) return;
      const target = this.findTarget();
      if (!target) return;
      const ripe = this.player.ripeReady;
      if (ripe) {
        this.player.ripeReady = false;
        this.player.ripeCharge = 0;
      } else {
        this.player.ripeCharge += PLAYER.ripePerAttack + this.player.ripeBonusPerAttack;
        if (this.player.ripeCharge >= PLAYER.ripeThreshold) {
          this.player.ripeCharge = PLAYER.ripeThreshold;
          this.player.ripeReady = true;
        }
      }
      const attackQ = Math.round(toHp(PLAYER.attack) * (100 + this.player.attackBonusPct) / 100);
      const projectileStepQ = Math.max(1, Math.round(toPos(PLAYER.projectileSpeed) / CLOCK.hz));
      let [stepXQ, stepYQ] = stepToward(target.qx - this.player.qx, target.qy - this.player.qy, projectileStepQ);
      if (stepXQ === 0 && stepYQ === 0) stepXQ = projectileStepQ;
      const id = this.projectileIds.allocate();
      const p = {
        id,
        target: target.id,
        qx: this.player.qx,
        qy: this.player.qy,
        stepXQ,
        stepYQ,
        expireTick: this.tick + Math.round(PLAYER.projectileLife * CLOCK.hz),
        attackQ,
        damageCoefficientPermille: ripe ? Math.round(PLAYER.ripeCoefficient * 1e3 + this.player.ripePowerBonusPct * 10) : 1e3,
        splashCoefficientPermille: ripe ? Math.round(PLAYER.ripeSplashCoefficient * 1e3 + this.player.ripeSplashCoefficientBonusPct * 10) : Math.round(PLAYER.splashCoefficient * 1e3),
        splashRadiusQ: toPos(ripe ? PLAYER.ripeSplashRadius : PLAYER.splashRadius) + (ripe ? this.player.ripeSplashRadiusBonusQ : 0),
        critRatePer10000: Math.round(PLAYER.critRate * 100),
        critFactorPermille: Math.round(PLAYER.critFactor * 1e3),
        ripe
      };
      this.projectiles.set(entityKey(id), p);
      this.log("FIRE", `${entityKey(id)}->${entityKey(target.id)}${ripe ? ":ripe" : ""}`);
      const roundsPerSecond = 1 / PLAYER.interval * (1 + this.player.attackSpeedBonusPct / 100);
      const capped = Math.min(12, Math.max(0.1, roundsPerSecond));
      this.player.nextAttackTick = this.tick + Math.max(1, Math.round(CLOCK.hz / capped));
    }
    findTarget() {
      var _a;
      const maxDistSq = __pow(toPos(PLAYER.targetRange), 2);
      const candidates = [...this.enemies.values()].filter(
        (enemy) => enemy.alive && distanceSq(this.player.qx, this.player.qy, enemy.qx, enemy.qy) <= maxDistSq
      );
      candidates.sort((a, b) => {
        const pa = this.targetPriority(a);
        const pb = this.targetPriority(b);
        if (pa !== pb) return pa - pb;
        if (pa === 3) {
          const ga = a.qx * a.qx + a.qy * a.qy;
          const gb = b.qx * b.qx + b.qy * b.qy;
          if (ga !== gb) return ga - gb;
        }
        const da = distanceSq(this.player.qx, this.player.qy, a.qx, a.qy);
        const db = distanceSq(this.player.qx, this.player.qy, b.qx, b.qy);
        return da - db || entityKey(a.id).localeCompare(entityKey(b.id));
      });
      return (_a = candidates[0]) != null ? _a : null;
    }
    targetPriority(enemy) {
      if (enemy.fruitTargetId !== null && enemy.carryingFruitId === null) {
        const required = this.requiredFruitActionTicks(enemy);
        if (required > 0 && enemy.actionProgressTicks / required >= 0.8) return 0;
      }
      if (enemy.kind === "thief" && enemy.carryingFruitId !== null) return 1;
      if (this.bossSpawned && !this.bossDead && enemy.kind === "boss") return 2;
      return 3;
    }
    requiredFruitActionTicks(enemy) {
      var _a, _b;
      if (enemy.kind === "thief") return Math.round(((_a = MONSTERS.thief.stealSeconds) != null ? _a : 1.5) * CLOCK.hz);
      const base = (_b = enemyConfig(enemy.kind).eatSeconds) != null ? _b : 2.5;
      const seconds = base + this.player.eatDurationBonusTicks / CLOCK.hz;
      if (enemy.kind === "boss") return Math.round(Math.max(2.5, Math.min(5, seconds)) * CLOCK.hz);
      if (enemy.kind === "glutton") return Math.round(Math.min(6, seconds) * CLOCK.hz);
      return Math.round(Math.min(8, seconds) * CLOCK.hz);
    }
    resolveProjectiles() {
      const ordered = [...this.projectiles.values()].sort((a, b) => a.id.slot - b.id.slot || a.id.generation - b.id.generation);
      for (const p of ordered) {
        if (!this.projectiles.has(entityKey(p.id))) continue;
        const startX = p.qx;
        const startY = p.qy;
        const endX = startX + p.stepXQ;
        const endY = startY + p.stepYQ;
        const hit = this.findProjectileHit(p, startX, startY, endX, endY);
        if (hit) {
          this.projectiles.delete(entityKey(p.id));
          this.projectileIds.release(p.id);
          const { enemy: target, impactX, impactY } = hit;
          this.hitEnemy(target, p.attackQ, p.damageCoefficientPermille, p.critRatePer10000, p.critFactorPermille, p.ripe ? PLAYER.ripeJuice : null);
          if (target.alive) this.applyBasicKnockback(target, p.stepXQ, p.stepYQ);
          this.log("HIT", `${entityKey(p.id)}->${entityKey(target.id)}`);
          const splashTargets = [...this.enemies.values()].filter((e) => e.alive && entityKey(e.id) !== entityKey(target.id) && distanceSq(impactX, impactY, e.qx, e.qy) <= p.splashRadiusQ * p.splashRadiusQ).sort((a, b) => a.id.slot - b.id.slot || a.id.generation - b.id.generation);
          for (const enemy of splashTargets) {
            this.hitEnemy(enemy, p.attackQ, p.splashCoefficientPermille, p.critRatePer10000, p.critFactorPermille, p.ripe ? 1 : null);
            if (enemy.alive) this.applyBasicKnockback(enemy, enemy.qx - impactX, enemy.qy - impactY);
          }
          if (p.ripe) {
            this.juiceGrid.addCircle(
              impactX,
              impactY,
              toPos(JUICE.ripeGroundRadius),
              JUICE.ripeGroundStack,
              this.juiceGrid.durationTicks(this.player.groundDurationBonusTicks),
              this.tick
            );
          }
          continue;
        }
        p.qx = endX;
        p.qy = endY;
        if (this.tick >= p.expireTick) {
          this.projectiles.delete(entityKey(p.id));
          this.projectileIds.release(p.id);
        }
      }
    }
    findProjectileHit(p, startX, startY, endX, endY) {
      const projectileDx = endX - startX;
      const projectileDy = endY - startY;
      let best = null;
      for (const enemy of this.enemies.values()) {
        if (!enemy.alive) continue;
        const enemyDx = enemy.qx - enemy.prevQx;
        const enemyDy = enemy.qy - enemy.prevQy;
        const relX = startX - enemy.prevQx;
        const relY = startY - enemy.prevQy;
        const relDx = projectileDx - enemyDx;
        const relDy = projectileDy - enemyDy;
        const radiusQ = toPos(PLAYER.projectileRadius + this.enemyRadiusMeters(enemy));
        const a = relDx * relDx + relDy * relDy;
        const c0 = relX * relX + relY * relY - radiusQ * radiusQ;
        let numerator;
        let denominator;
        if (c0 <= 0) {
          numerator = 0;
          denominator = 1;
        } else {
          if (a <= 0) continue;
          const b = relX * relDx + relY * relDy;
          const discriminant = b * b - a * c0;
          if (discriminant < 0) continue;
          const rootNumerator = -b - intSqrt(Math.floor(discriminant));
          if (rootNumerator < 0 || rootNumerator > a) continue;
          numerator = rootNumerator;
          denominator = a;
        }
        if (!best) {
          best = { enemy, numerator, denominator };
          continue;
        }
        const left = numerator * best.denominator;
        const right = best.numerator * denominator;
        if (left < right || left === right && (enemy.id.slot < best.enemy.id.slot || enemy.id.slot === best.enemy.id.slot && enemy.id.generation < best.enemy.id.generation)) {
          best = { enemy, numerator, denominator };
        }
      }
      if (!best) return null;
      const impactX = startX + Math.round(projectileDx * best.numerator / best.denominator);
      const impactY = startY + Math.round(projectileDy * best.numerator / best.denominator);
      return { enemy: best.enemy, impactX, impactY };
    }
    applyBasicKnockback(enemy, dx, dy) {
      this.applyEnemyKnockback(enemy.id, PLAYER.baseKnockback, dx, dy);
    }
    applyEnemyKnockback(id, distanceMeters, directionXQ, directionYQ) {
      const enemy = this.enemies.get(entityKey(id));
      if (!enemy || !enemy.alive || distanceMeters <= 0 || directionXQ === 0 && directionYQ === 0) return 0;
      const result = this.controls.applyKnockback(enemy.id, enemy.kind, toPos(distanceMeters), this.tick);
      if (result.actualQ <= 0) return 0;
      const directionLengthQ = intSqrt(directionXQ * directionXQ + directionYQ * directionYQ);
      if (directionLengthQ <= 0) return 0;
      const kx = Math.trunc(directionXQ * result.actualQ / directionLengthQ);
      const ky = Math.trunc(directionYQ * result.actualQ / directionLengthQ);
      enemy.qx += kx;
      enemy.qy += ky;
      this.applyEatingInterrupt(enemy, result.actualQ, 0);
      this.log("CONTROL", `knockback:${entityKey(enemy.id)}:${fromPos(result.actualQ)}`);
      return result.actualQ;
    }
    applyEnemyHardCc(id, durationSeconds) {
      const enemy = this.enemies.get(entityKey(id));
      if (!enemy || !enemy.alive || durationSeconds <= 0) return 0;
      const desiredTicks = Math.round(durationSeconds * CLOCK.hz);
      const result = this.controls.applyHardCc(enemy.id, enemy.kind, desiredTicks, this.tick);
      if (result.actualTicks <= 0) return 0;
      enemy.hardCcUntilTick = Math.max(enemy.hardCcUntilTick, this.tick + result.actualTicks);
      this.applyEatingInterrupt(enemy, 0, result.actualTicks);
      this.log("CONTROL", `hard_cc:${entityKey(enemy.id)}:${result.actualTicks}`);
      return result.actualTicks;
    }
    applyEatingInterrupt(enemy, actualKnockbackQ, actualHardCcTicks) {
      if (enemy.fruitTargetId === null || enemy.actionProgressTicks <= 0) return;
      const interrupt = this.controls.registerEatingInterrupt(
        enemy.id,
        enemy.kind,
        this.tick,
        actualKnockbackQ,
        actualHardCcTicks
      );
      if (!interrupt.accepted) return;
      const rollback = Math.floor(enemy.actionProgressTicks * interrupt.rollbackFraction);
      enemy.actionProgressTicks = Math.max(0, enemy.actionProgressTicks - rollback);
      this.log("CONTROL", `rollback:${entityKey(enemy.id)}:${rollback}:factor=${interrupt.resistanceFactor}`);
    }
    hitEnemy(enemy, attackQ, coefficientPermille, critRatePer10000, critFactorPermille, forcedJuiceLayers) {
      let damageQ = Math.round(attackQ * coefficientPermille / 1e3);
      if (this.streams.combat.nextInt(1e4) < critRatePer10000) damageQ = Math.round(damageQ * critFactorPermille / 1e3);
      if (enemy.kind === "armor" && damageQ < toHp(18)) damageQ = Math.round(damageQ * 0.7);
      enemy.hpQ -= damageQ;
      if (forcedJuiceLayers !== null) this.addEnemyJuice(enemy.id, forcedJuiceLayers);
      else this.tryAttachNormalJuice(enemy);
      if (enemy.hpQ <= 0) this.commitDeath(enemy, true);
    }
    tryAttachNormalJuice(enemy) {
      const rawChance = JUICE.baseAttachChance + this.player.attachChanceBonusPct;
      const attachChance = Math.min(JUICE.attachChanceCap, rawChance);
      if (this.streams.combat.nextInt(1e4) >= Math.round(attachChance * 100)) return;
      let layers = 1;
      const overflow = Math.min(JUICE.extraLayerChanceCap, Math.max(0, rawChance - JUICE.attachChanceCap));
      if (overflow > 0 && this.streams.combat.nextInt(1e4) < Math.round(overflow * 100)) layers++;
      this.addEnemyJuice(enemy.id, layers);
    }
    commitDeath(enemy, spawnJuiceNow) {
      if (!enemy.alive) return null;
      const death = { kind: enemy.kind, qx: enemy.qx, qy: enemy.qy, juiceStacks: enemy.juiceStacks };
      enemy.alive = false;
      enemy.hpQ = 0;
      const returned = this.garden.returnCarriedBy(enemy.id);
      this.garden.releaseReservation(enemy.id);
      if (returned.length > 0) this.log("FRUIT", `returned:${entityKey(enemy.id)}:${returned.join(",")}`);
      this.enemies.delete(entityKey(enemy.id));
      this.controls.release(enemy.id);
      this.enemyIds.release(enemy.id);
      if (enemy.xpValue > 0) {
        const orbId = this.orbIds.allocate();
        this.orbs.set(entityKey(orbId), { id: orbId, qx: enemy.qx, qy: enemy.qy, amount: enemy.xpValue });
      }
      if (enemy.kind === "boss") {
        this.bossDead = true;
        this.log("BOSS", "dead");
      } else if (enemy.kind === "glutton" && enemy.eliteIndex !== null) {
        const incoming = enemy.eliteIndex >= 1 ? "blue_all_purple_one" : "blue_one";
        if (incoming === "blue_all_purple_one" || this.pendingQualityGuarantee === null) {
          this.pendingQualityGuarantee = incoming;
        }
        this.lastEliteRewardTick = this.tick;
        this.lastEliteRewardGuarantee = incoming;
        this.log("ELITE", `reward:${incoming}`);
      }
      this.log("DEATH", `${entityKey(enemy.id)}:${enemy.kind}:juice=${death.juiceStacks}`);
      if (spawnJuiceNow && enemy.kind !== "boss") this.spawnDeathJuice(death);
      if (enemy.kind !== "boss") this.tryCreateHealingDrop(enemy.qx, enemy.qy);
      return death;
    }
    spawnDeathJuice(death) {
      if (death.kind === "boss") return;
      let layers = 1 + Math.floor(death.juiceStacks / 2);
      if (this.player.deathJuiceExtraChancePct > 0 && this.streams.drop.nextInt(1e4) < Math.round(this.player.deathJuiceExtraChancePct * 100)) layers++;
      this.juiceGrid.addCircle(
        death.qx,
        death.qy,
        toPos(JUICE.deathRadius) + this.player.deathJuiceRadiusBonusQ,
        layers,
        this.juiceGrid.durationTicks(this.player.groundDurationBonusTicks),
        this.tick
      );
    }
    expireHealingDrops() {
      for (const drop of [...this.healOrbs.values()]) {
        if (drop.expireTick > this.tick) continue;
        this.healOrbs.delete(entityKey(drop.id));
        this.healOrbIds.release(drop.id);
      }
    }
    tryCreateHealingDrop(qx, qy) {
      if (this.player.healDropChancePct <= 0 || this.player.healPercentMaxHp <= 0) return;
      if (this.streams.drop.nextInt(1e4) >= Math.round(this.player.healDropChancePct * 100)) return;
      const id = this.healOrbIds.allocate();
      const drop = {
        id,
        qx,
        qy,
        expireTick: this.tick + Math.round(30 * CLOCK.hz),
        healPercentMaxHp: this.player.healPercentMaxHp
      };
      this.healOrbs.set(entityKey(id), drop);
      this.log("HEAL_DROP", `${entityKey(id)}:${drop.healPercentMaxHp}`);
    }
    collectHealingDrops() {
      const pickupSq = __pow(toPos(1), 2);
      const collected = [...this.healOrbs.values()].filter((drop) => distanceSq(this.player.qx, this.player.qy, drop.qx, drop.qy) <= pickupSq).sort((a, b) => entityKey(a.id).localeCompare(entityKey(b.id)));
      for (const drop of collected) {
        this.healOrbs.delete(entityKey(drop.id));
        this.healOrbIds.release(drop.id);
        const healQ = Math.round(this.player.maxHpQ * drop.healPercentMaxHp / 100);
        const before = this.player.hpQ;
        this.player.hpQ = Math.min(this.player.maxHpQ, this.player.hpQ + healQ);
        this.log("HEAL", `${fromHp(this.player.hpQ - before)}`);
      }
    }
    collectExperience() {
      const pickupSq = __pow(toPos(PLAYER.expPickup), 2);
      const collected = [...this.orbs.values()].filter((o) => distanceSq(this.player.qx, this.player.qy, o.qx, o.qy) <= pickupSq).sort((a, b) => entityKey(a.id).localeCompare(entityKey(b.id)));
      for (const orb of collected) {
        this.orbs.delete(entityKey(orb.id));
        this.orbIds.release(orb.id);
        this.player.xp += orb.amount;
        this.log("XP_PICKUP", `${orb.amount}`);
      }
      while (this.player.level < EXP_NEEDS.length) {
        const need = EXP_NEEDS[this.player.level];
        if (this.player.xp < need) break;
        this.player.xp -= need;
        this.player.level++;
        this.player.pendingChoices++;
        this.log("LEVEL_UP", `${this.player.level}`);
      }
    }
    enterChoosingIfNeeded() {
      if (this.player.pendingChoices <= 0 || this.phase !== "PLAYING") return;
      while (this.player.pendingChoices > 0) {
        const offer = this.makeOffer();
        if (offer.length > 0) {
          this.phase = "CHOOSING";
          this.currentOffer = offer;
          this.currentOfferId = ++this.offerSequence;
          return;
        }
        this.consumeSupplyFallback();
        this.player.pendingChoices--;
        this.player.choiceCount++;
      }
      this.currentOffer = null;
      this.currentOfferId = null;
      this.currentOfferGuarantee = null;
    }
    expireSupplyShield() {
      if (this.player.supplyShieldQ <= 0) return;
      if (this.player.supplyShieldExpireTick > this.tick) return;
      this.player.supplyShieldQ = 0;
      this.player.supplyShieldExpireTick = 0;
    }
    consumeSupplyFallback() {
      const packageQ = Math.round(this.player.maxHpQ * OFFERS.supplyHealFraction);
      const missingHpQ = Math.max(0, this.player.maxHpQ - this.player.hpQ);
      const healedQ = Math.min(missingHpQ, packageQ);
      this.player.hpQ += healedQ;
      const overflowQ = packageQ - healedQ;
      const shieldCapQ = Math.round(this.player.maxHpQ * LIMITS.maxPlayerShieldPercent / 100);
      const beforeShieldQ = this.player.supplyShieldQ;
      if (overflowQ > 0 && shieldCapQ > beforeShieldQ) {
        this.player.supplyShieldQ = Math.min(shieldCapQ, beforeShieldQ + overflowQ);
        this.player.supplyShieldExpireTick = this.tick + Math.round(OFFERS.supplyShieldSeconds * CLOCK.hz);
      }
      const shieldGainQ = this.player.supplyShieldQ - beforeShieldQ;
      this.log("SUPPLY", `heal=${fromHp(healedQ)}:shield=${fromHp(shieldGainQ)}`);
    }
    makeOffer() {
      this.currentOfferGuarantee = null;
      const cards = this.offerSystem.createOffer(this.tick / CLOCK.hz, this.player.choiceCount, this.streams.offer, this.streams.quality, this.skills);
      if (!this.pendingQualityGuarantee || cards.length === 0) return cards;
      const guarantee = this.pendingQualityGuarantee;
      const guaranteed = this.offerSystem.applyGuarantee(cards, guarantee, this.skills);
      this.pendingQualityGuarantee = null;
      this.currentOfferGuarantee = guarantee;
      return guaranteed;
    }
    applySkillPreview(preview) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
      const after = preview.after;
      const delta = preview.delta;
      switch (preview.skillId) {
        case "fire":
          this.player.attackBonusPct = (_a = after["攻击加成"]) != null ? _a : 0;
          break;
        case "haste":
          this.player.attackSpeedBonusPct = (_b = after["攻速加成"]) != null ? _b : 0;
          break;
        case "juicy":
          this.player.attachChanceBonusPct = (_c = after["挂汁率增量"]) != null ? _c : 0;
          break;
        case "death_juice":
          this.player.deathJuiceExtraChancePct = (_d = after["额外死亡汁层概率"]) != null ? _d : 0;
          this.player.deathJuiceRadiusBonusQ = toPos((_e = after["死亡汁半径增加"]) != null ? _e : 0);
          break;
        case "linger":
          this.player.groundDurationBonusTicks = Math.round(((_f = after["地面汁持续增加"]) != null ? _f : 0) * CLOCK.hz);
          break;
        case "wall":
          this.barriers.grantWall((_g = delta["每面基础HP增加"]) != null ? _g : 0, this.tick);
          break;
        case "repair":
          this.player.repairWaitSeconds = (_h = after["脱战等待"]) != null ? _h : 5;
          this.player.repairPctPerSecond = (_i = after["每秒修复"]) != null ? _i : 0;
          break;
        case "tough":
          this.player.eatDurationBonusTicks = Math.round(((_j = after["进食时间增加"]) != null ? _j : 0) * CLOCK.hz);
          break;
        case "hp": {
          const hpDeltaQ = toHp((_k = delta["最大生命增加"]) != null ? _k : 0);
          this.player.maxHpQ += hpDeltaQ;
          this.player.hpQ = Math.min(this.player.maxHpQ, this.player.hpQ + hpDeltaQ);
          break;
        }
        case "heal":
          this.player.healDropChancePct = (_l = after["恢复汁滴掉率"]) != null ? _l : 0;
          this.player.healPercentMaxHp = (_m = after["单滴治疗"]) != null ? _m : 0;
          break;
        case "cling":
          this.player.bodySlowBonusPerLayerPct = (_n = after["怪物每层减速增加"]) != null ? _n : 0;
          break;
        case "ripe_charge":
          this.player.ripeBonusPerAttack = (_o = after["每轮成熟增加"]) != null ? _o : 0;
          break;
        case "ripe_power":
          this.player.ripePowerBonusPct = (_p = after["熟果主弹系数增加"]) != null ? _p : 0;
          break;
        case "ripe_splash":
          this.player.ripeSplashRadiusBonusQ = toPos((_q = after["熟果溅射半径增加"]) != null ? _q : 0);
          this.player.ripeSplashCoefficientBonusPct = (_r = after["熟果溅射系数增加"]) != null ? _r : 0;
          break;
      }
    }
    log(type, detail) {
      this.events.push({ tick: this.tick, type, detail });
    }
  };

  // src/runtime/GameRuntimeController.ts
  var GameRuntimeController = class {
    constructor(seed, options = {}) {
      this.seed = seed;
      this.options = options;
      this.commands = [];
      this.choices = [];
      this.lifecycle = [];
      this.lifecycleSequence = 0;
      this.simulation = new MvpSimulation(seed, options);
      this.loop = new FixedStepLoop(this.simulation);
    }
    advanceFrame(deltaMilliseconds) {
      if (!Number.isFinite(deltaMilliseconds) || deltaMilliseconds < 0) {
        throw new Error("deltaMilliseconds must be finite and >= 0");
      }
      return this.loop.advanceMicroseconds(Math.round(deltaMilliseconds * 1e3));
    }
    setMove(x, y) {
      if (this.simulation.phase !== "PLAYING") return;
      this.simulation.setMoveInput(x, y);
      this.commands.push({ tick: this.simulation.tick + 1, moveX: x, moveY: y });
    }
    pressUltimate() {
      if (this.simulation.phase !== "PLAYING") return;
      this.simulation.queueUltimate();
      this.commands.push({ tick: this.simulation.tick + 1, ultimate: true });
    }
    choose(index, offerId = this.simulation.currentOfferId) {
      if (offerId === null || !this.simulation.currentOffer) throw new Error("not choosing");
      const card = this.simulation.currentOffer[index];
      if (!card) throw new Error("invalid offer index");
      this.simulation.selectOffer(index, offerId);
      this.choices.push({ offerId, index, skillId: card.skillId, quality: card.quality });
    }
    pause() {
      if (!this.simulation.pause()) return false;
      this.loop.reset();
      this.recordLifecycle("PAUSED");
      return true;
    }
    enterBackground() {
      if (!this.simulation.enterBackground()) return false;
      this.loop.reset();
      this.recordLifecycle("BACKGROUND");
      return true;
    }
    resume() {
      if (!this.simulation.resume()) return false;
      this.loop.reset();
      this.recordLifecycle("PLAYING");
      return true;
    }
    snapshot() {
      return this.simulation.snapshot();
    }
    stepTicks(count) {
      if (!Number.isInteger(count) || count < 0) throw new Error("count must be a non-negative integer");
      for (let i = 0; i < count; i++) {
        if (this.simulation.phase !== "PLAYING") break;
        this.simulation.stepOneTick();
      }
    }
    exportReplay() {
      return {
        version: 1,
        seed: this.seed,
        options: this.options,
        endTick: this.simulation.tick,
        commands: [...this.commands],
        choices: [...this.choices],
        lifecycle: [...this.lifecycle]
      };
    }
    recordLifecycle(phase) {
      this.lifecycle.push({
        tick: this.simulation.tick,
        sequence: this.lifecycleSequence++,
        phase
      });
    }
  };

  // src/runtime/PresentationAdapter.ts
  function idParts(id) {
    const [slotText, generationText] = id.split(":");
    return [Number(slotText), Number(generationText)];
  }
  function compareEntityId(a, b) {
    const [as, ag] = idParts(a);
    const [bs, bg] = idParts(b);
    return as - bs || ag - bg;
  }
  function distanceSq2(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
  }
  var PresentationAdapter = class {
    constructor() {
      const rawWidth = WORLD.width * WORLD.pixelsPerMeter;
      const rawHeight = WORLD.height * WORLD.pixelsPerMeter;
      const fitScale = Math.min(WORLD.designWidth / rawWidth, WORLD.designHeight / rawHeight);
      const pixelsPerMeter = WORLD.pixelsPerMeter * fitScale;
      const worldWidthPixels = WORLD.width * pixelsPerMeter;
      const worldHeightPixels = WORLD.height * pixelsPerMeter;
      this.camera = {
        designWidth: WORLD.designWidth,
        designHeight: WORLD.designHeight,
        pixelsPerMeter,
        rawPixelsPerMeter: WORLD.pixelsPerMeter,
        fitScale,
        worldLeft: (WORLD.designWidth - worldWidthPixels) / 2,
        worldTop: (WORLD.designHeight - worldHeightPixels) / 2,
        worldWidthPixels,
        worldHeightPixels
      };
    }
    build(snapshot) {
      var _a, _b, _c, _d, _e, _f, _g;
      const enemyCandidates = [...snapshot.enemies].sort((a, b) => {
        const priorityA = this.enemyPriority(a);
        const priorityB = this.enemyPriority(b);
        if (priorityA !== priorityB) return priorityA - priorityB;
        const da = distanceSq2(snapshot.player.x, snapshot.player.y, a.x, a.y);
        const db = distanceSq2(snapshot.player.x, snapshot.player.y, b.x, b.y);
        return da - db || compareEntityId(a.id, b.id);
      });
      const visibleEnemies = enemyCandidates.slice(0, LIMITS.mvpEnemyViews);
      const projectileCandidates = [...snapshot.projectiles].sort((a, b) => {
        if (a.ripe !== b.ripe) return a.ripe ? -1 : 1;
        const da = distanceSq2(snapshot.player.x, snapshot.player.y, a.x, a.y);
        const db = distanceSq2(snapshot.player.x, snapshot.player.y, b.x, b.y);
        return da - db || compareEntityId(a.id, b.id);
      });
      const visibleProjectiles = projectileCandidates.slice(0, LIMITS.mvpProjectileViews);
      const enemyById = new Map(snapshot.enemies.map((enemy) => [enemy.id, enemy]));
      const bossAlive = snapshot.enemies.some((enemy) => enemy.kind === "boss");
      const ultimateMaxTicks = Math.round(ULTIMATE.chargeSeconds * CLOCK.hz);
      const ownedSkills = MVP_SKILLS.map((skill) => {
        const history = snapshot.skills[skill.id];
        const latestQuality = history[history.length - 1];
        return latestQuality ? { skillId: skill.id, count: history.length, latestQuality } : null;
      }).filter((entry) => entry !== null);
      const xpNeed = snapshot.player.level < EXP_NEEDS.length ? EXP_NEEDS[snapshot.player.level] : null;
      const xpFraction = xpNeed === null || xpNeed <= 0 ? 1 : Math.max(0, Math.min(1, snapshot.player.xp / xpNeed));
      const ultimateHasJuice = snapshot.groundJuice.length > 0 || snapshot.enemies.some((enemy) => enemy.juiceStacks > 0);
      const ripeFraction = PLAYER.ripeThreshold <= 0 ? 1 : Math.max(0, Math.min(1, snapshot.player.ripeCharge / PLAYER.ripeThreshold));
      const chunkMap = /* @__PURE__ */ new Map();
      const chunkColumns = Math.ceil(Math.ceil(WORLD.width / WORLD.juiceCell) / 8);
      for (const cell of snapshot.groundJuice) {
        const chunkColumn = Math.floor(cell.column / 8);
        const chunkRow = Math.floor(cell.row / 8);
        const chunkId = chunkRow * chunkColumns + chunkColumn;
        const p = this.worldToScreen(cell.x, cell.y);
        const list = (_a = chunkMap.get(chunkId)) != null ? _a : [];
        list.push({
          cellId: cell.cellId,
          x: p.x,
          y: p.y,
          stack: cell.stack,
          expireTick: cell.expireTick,
          version: cell.version
        });
        chunkMap.set(chunkId, list);
      }
      const juiceChunks = [...chunkMap.entries()].sort((a, b) => a[0] - b[0]).map(([chunkId, cells]) => ({
        chunkId,
        chunkColumn: chunkId % chunkColumns,
        chunkRow: Math.floor(chunkId / chunkColumns),
        cells: cells.sort((a, b) => a.cellId - b.cellId)
      }));
      return {
        tick: snapshot.tick,
        camera: this.camera,
        player: this.worldToScreen(snapshot.player.x, snapshot.player.y),
        enemies: visibleEnemies.map((enemy) => {
          var _a2, _b2;
          const p = this.worldToScreen(enemy.x, enemy.y);
          return {
            id: enemy.id,
            kind: enemy.kind,
            source: enemy.source,
            eliteIndex: enemy.eliteIndex,
            x: p.x,
            y: p.y,
            hp: enemy.hp,
            maxHp: enemy.maxHp,
            hpFraction: enemy.maxHp <= 0 ? 0 : Math.max(0, Math.min(1, enemy.hp / enemy.maxHp)),
            juiceStacks: enemy.juiceStacks,
            carryingFruitId: enemy.carryingFruitId,
            escapeTargetX: enemy.escapeX === null ? null : this.worldToScreen(enemy.escapeX, (_a2 = enemy.escapeY) != null ? _a2 : enemy.y).x,
            escapeTargetY: enemy.escapeY === null ? null : this.worldToScreen((_b2 = enemy.escapeX) != null ? _b2 : enemy.x, enemy.escapeY).y,
            actionProgressFraction: enemy.actionProgressFraction,
            hardControlled: snapshot.tick < enemy.hardCcUntilTick
          };
        }),
        activeEnemyIds: snapshot.enemies.map((enemy) => enemy.id).sort(compareEntityId),
        projectiles: visibleProjectiles.map((projectile) => {
          var _a2, _b2;
          const p = this.worldToScreen(projectile.x, projectile.y);
          const target = enemyById.get(projectile.target);
          const targetPoint = target ? this.worldToScreen(target.x, target.y) : null;
          return {
            id: projectile.id,
            x: p.x,
            y: p.y,
            targetX: (_a2 = targetPoint == null ? void 0 : targetPoint.x) != null ? _a2 : null,
            targetY: (_b2 = targetPoint == null ? void 0 : targetPoint.y) != null ? _b2 : null,
            ripe: projectile.ripe
          };
        }),
        activeProjectileIds: snapshot.projectiles.map((projectile) => projectile.id).sort(compareEntityId),
        expOrbs: snapshot.orbs.map((orb) => {
          const p = this.worldToScreen(orb.x, orb.y);
          return { id: orb.id, x: p.x, y: p.y, amount: orb.amount };
        }),
        healOrbs: snapshot.healOrbs.map((orb) => {
          const p = this.worldToScreen(orb.x, orb.y);
          return {
            id: orb.id,
            x: p.x,
            y: p.y,
            healPercentMaxHp: orb.healPercentMaxHp,
            expireTick: orb.expireTick
          };
        }),
        hiddenEnemyCount: Math.max(0, snapshot.enemies.length - visibleEnemies.length),
        hiddenProjectileCount: Math.max(0, snapshot.projectiles.length - visibleProjectiles.length),
        fruits: snapshot.fruitCells.map((fruit) => {
          const p = this.worldToScreen(fruit.x, fruit.y);
          return {
            fruitId: fruit.fruitId,
            ownership: fruit.ownership,
            x: p.x,
            y: p.y,
            reservedBy: fruit.reservedBy,
            carriedBy: fruit.carriedBy
          };
        }),
        barriers: snapshot.barriers.map((barrier) => ({
          side: barrier.side,
          state: barrier.state,
          hpFraction: barrier.maxHp <= 0 ? 0 : Math.max(0, Math.min(1, barrier.hp / barrier.maxHp)),
          collisionActive: barrier.collisionActive
        })),
        juiceChunks,
        hud: {
          timeSeconds: snapshot.tick / CLOCK.hz,
          playerHp: snapshot.player.hp,
          playerMaxHp: snapshot.player.maxHp,
          playerHpFraction: snapshot.player.maxHp <= 0 ? 0 : Math.max(0, Math.min(1, snapshot.player.hp / snapshot.player.maxHp)),
          shield: snapshot.player.supplyShield,
          xp: snapshot.player.xp,
          xpNeed,
          xpFraction,
          level: snapshot.player.level,
          pendingChoices: snapshot.player.pendingChoices,
          fruitInGarden: snapshot.fruit.inGarden,
          fruitCarried: snapshot.fruit.carried,
          fruitLost: snapshot.fruit.lost,
          ultimateFraction: ultimateMaxTicks <= 0 ? 1 : Math.max(0, Math.min(1, snapshot.player.ultimateChargeTicks / ultimateMaxTicks)),
          ultimateReady: snapshot.player.ultimateReady,
          ultimateHasJuice,
          ripeCharge: snapshot.player.ripeCharge,
          ripeFraction,
          ripeReady: snapshot.player.ripeReady,
          bossAlive,
          bossPhase: snapshot.boss.phase,
          bossDashWarning: snapshot.boss.dashWarning,
          bossDashing: snapshot.boss.dashing,
          bossSummonWarning: snapshot.boss.summonWarning,
          bossCountdownSeconds: bossAlive ? null : Math.max(0, MVP_MODE.bossAt - snapshot.tick / CLOCK.hz),
          playerHitTick: (_c = (_b = snapshot.playerHit) == null ? void 0 : _b.tick) != null ? _c : null,
          playerHitSourceX: snapshot.playerHit ? this.worldToScreen(snapshot.playerHit.sourceX, snapshot.playerHit.sourceY).x : null,
          playerHitSourceY: snapshot.playerHit ? this.worldToScreen(snapshot.playerHit.sourceX, snapshot.playerHit.sourceY).y : null,
          eliteRewardTick: (_e = (_d = snapshot.eliteReward) == null ? void 0 : _d.tick) != null ? _e : null,
          eliteRewardGuarantee: (_g = (_f = snapshot.eliteReward) == null ? void 0 : _f.guarantee) != null ? _g : null,
          offerGuarantee: snapshot.offerGuarantee,
          ownedSkills,
          lastChoice: snapshot.lastChoice,
          offerId: snapshot.offerId,
          offer: snapshot.offer,
          phase: snapshot.phase,
          resultCommitted: snapshot.resultCommitted,
          resultReason: snapshot.resultReason
        }
      };
    }
    worldToScreen(xMeters, yMeters) {
      return {
        x: this.camera.worldLeft + (xMeters + WORLD.width / 2) * this.camera.pixelsPerMeter,
        y: this.camera.worldTop + (yMeters + WORLD.height / 2) * this.camera.pixelsPerMeter
      };
    }
    enemyPriority(enemy) {
      if (enemy.kind === "boss") return 0;
      if (enemy.kind === "glutton") return 1;
      if (enemy.carryingFruitId !== null) return 2;
      if (enemy.source === "boss_summon") return 3;
      return 4;
    }
  };

  // src/runtime/ViewReconciler.ts
  function enemySignature(item) {
    var _a, _b, _c, _d;
    return [
      item.kind,
      item.source,
      (_a = item.eliteIndex) != null ? _a : -1,
      item.x,
      item.y,
      item.hpFraction,
      item.juiceStacks,
      (_b = item.carryingFruitId) != null ? _b : -1,
      (_c = item.escapeTargetX) != null ? _c : "x",
      (_d = item.escapeTargetY) != null ? _d : "y",
      item.actionProgressFraction,
      item.hardControlled ? 1 : 0
    ].join("|");
  }
  function projectileSignature(item) {
    var _a, _b;
    return [
      item.x,
      item.y,
      (_a = item.targetX) != null ? _a : "x",
      (_b = item.targetY) != null ? _b : "y",
      item.ripe ? 1 : 0
    ].join("|");
  }
  function expOrbSignature(item) {
    return [item.x, item.y, item.amount].join("|");
  }
  function healOrbSignature(item) {
    return [item.x, item.y, item.healPercentMaxHp, item.expireTick].join("|");
  }
  function juiceChunkSignature(chunk) {
    return chunk.cells.map((cell) => `${cell.cellId}:${cell.version}:${cell.stack}:${cell.expireTick}`).join(",");
  }
  var ViewReconciler = class {
    constructor() {
      this.enemySignatures = /* @__PURE__ */ new Map();
      this.projectileSignatures = /* @__PURE__ */ new Map();
      this.activeEnemyIds = /* @__PURE__ */ new Set();
      this.activeProjectileIds = /* @__PURE__ */ new Set();
      this.expOrbSignatures = /* @__PURE__ */ new Map();
      this.healOrbSignatures = /* @__PURE__ */ new Map();
      this.juiceChunkSignatures = /* @__PURE__ */ new Map();
    }
    reconcile(frame) {
      const enemies = this.reconcileCappedStringCollection(
        frame.enemies,
        frame.activeEnemyIds,
        this.enemySignatures,
        this.activeEnemyIds,
        enemySignature
      );
      const projectiles = this.reconcileCappedStringCollection(
        frame.projectiles,
        frame.activeProjectileIds,
        this.projectileSignatures,
        this.activeProjectileIds,
        projectileSignature
      );
      const expOrbs = this.reconcileStringCollection(frame.expOrbs, this.expOrbSignatures, expOrbSignature);
      const healOrbs = this.reconcileStringCollection(frame.healOrbs, this.healOrbSignatures, healOrbSignature);
      const nextJuice = /* @__PURE__ */ new Map();
      const juiceUpsert = [];
      for (const chunk of frame.juiceChunks) {
        const signature = juiceChunkSignature(chunk);
        nextJuice.set(chunk.chunkId, signature);
        if (this.juiceChunkSignatures.get(chunk.chunkId) !== signature) juiceUpsert.push(chunk);
      }
      const juiceRemove = [...this.juiceChunkSignatures.keys()].filter((chunkId) => !nextJuice.has(chunkId)).sort((a, b) => a - b);
      this.juiceChunkSignatures = nextJuice;
      return {
        enemies,
        projectiles,
        expOrbs,
        healOrbs,
        juiceChunks: {
          upsert: juiceUpsert.sort((a, b) => a.chunkId - b.chunkId),
          remove: juiceRemove
        }
      };
    }
    reset() {
      this.enemySignatures.clear();
      this.projectileSignatures.clear();
      this.activeEnemyIds.clear();
      this.activeProjectileIds.clear();
      this.expOrbSignatures.clear();
      this.healOrbSignatures.clear();
      this.juiceChunkSignatures.clear();
    }
    reconcileStringCollection(items, previous, signatureOf) {
      const next = /* @__PURE__ */ new Map();
      const upsert = [];
      for (const item of items) {
        const signature = signatureOf(item);
        next.set(item.id, signature);
        if (previous.get(item.id) !== signature) upsert.push(item);
      }
      const remove = [...previous.keys()].filter((id) => !next.has(id)).sort(compareEntityId2);
      previous.clear();
      for (const [id, signature] of next) previous.set(id, signature);
      return {
        upsert: upsert.sort((a, b) => compareEntityId2(a.id, b.id)),
        remove,
        cull: []
      };
    }
    reconcileCappedStringCollection(items, activeIds, previousVisible, previousActive, signatureOf) {
      const nextVisible = /* @__PURE__ */ new Map();
      const upsert = [];
      for (const item of items) {
        const signature = signatureOf(item);
        nextVisible.set(item.id, signature);
        if (previousVisible.get(item.id) !== signature) upsert.push(item);
      }
      const active = new Set(activeIds);
      const remove = [...previousActive].filter((id) => !active.has(id)).sort(compareEntityId2);
      const cull = [...previousVisible.keys()].filter((id) => !nextVisible.has(id) && active.has(id)).sort(compareEntityId2);
      previousVisible.clear();
      for (const [id, signature] of nextVisible) previousVisible.set(id, signature);
      previousActive.clear();
      for (const id of active) previousActive.add(id);
      return {
        upsert: upsert.sort((a, b) => compareEntityId2(a.id, b.id)),
        remove,
        cull
      };
    }
  };
  function compareEntityId2(a, b) {
    var _a, _b, _c, _d;
    const ap = a.split(":");
    const bp = b.split(":");
    const as = Number((_a = ap[0]) != null ? _a : 0);
    const ag = Number((_b = ap[1]) != null ? _b : 0);
    const bs = Number((_c = bp[0]) != null ? _c : 0);
    const bg = Number((_d = bp[1]) != null ? _d : 0);
    return as - bs || ag - bg;
  }

  // src/runtime/ScenePort.ts
  var RuntimePresenter = class {
    constructor(scene) {
      this.scene = scene;
      this.adapter = new PresentationAdapter();
      this.reconciler = new ViewReconciler();
    }
    render(snapshot) {
      const frame = this.adapter.build(snapshot);
      const diff = this.reconciler.reconcile(frame);
      this.scene.setPlayer(frame.player);
      for (const id of diff.enemies.remove) this.scene.removeEnemy(id);
      for (const id of diff.enemies.cull) this.scene.cullEnemy(id);
      for (const enemy of diff.enemies.upsert) this.scene.upsertEnemy(enemy);
      for (const id of diff.projectiles.remove) this.scene.removeProjectile(id);
      for (const id of diff.projectiles.cull) this.scene.cullProjectile(id);
      for (const projectile of diff.projectiles.upsert) this.scene.upsertProjectile(projectile);
      for (const id of diff.expOrbs.remove) this.scene.removeExpOrb(id);
      for (const orb of diff.expOrbs.upsert) this.scene.upsertExpOrb(orb);
      for (const id of diff.healOrbs.remove) this.scene.removeHealOrb(id);
      for (const orb of diff.healOrbs.upsert) this.scene.upsertHealOrb(orb);
      for (const chunkId of diff.juiceChunks.remove) this.scene.removeJuiceChunk(chunkId);
      for (const chunk of diff.juiceChunks.upsert) this.scene.upsertJuiceChunk(chunk);
      this.scene.setFruits(frame.fruits);
      this.scene.setBarriers(frame.barriers);
      this.scene.setHud(frame.hud);
      return frame;
    }
    reset() {
      this.reconciler.reset();
    }
  };

  // src/presentation/CommercialScenePort.ts
  var QUALITY_COLORS = {
    green: "#71dd77",
    blue: "#5eb6ff",
    purple: "#c178ff",
    orange: "#ffad42"
  };
  var QUALITY_NAMES = {
    green: "普通",
    blue: "优良",
    purple: "稀有",
    orange: "传说"
  };
  var SKILL_NAMES = {
    fire: "火力强化",
    haste: "攻速强化",
    juicy: "多汁",
    death_juice: "死亡喷汁",
    linger: "厚汁不散",
    wall: "木质栅栏",
    repair: "自动维修",
    tough: "难以下咽",
    hp: "厚实果皮",
    heal: "果汁疗愈",
    cling: "超级黏汁",
    ripe_charge: "催熟",
    ripe_power: "熟果重击",
    ripe_splash: "熟果炸浆"
  };
  var SKILL_ICONS = {
    fire: "炮",
    haste: "速",
    juicy: "汁",
    death_juice: "爆",
    linger: "黏",
    wall: "墙",
    repair: "修",
    tough: "韧",
    hp: "甲",
    heal: "愈",
    cling: "缠",
    ripe_charge: "熟",
    ripe_power: "重",
    ripe_splash: "浆"
  };
  var VALUE_UNITS = {
    "攻击加成": "%",
    "攻速加成": "%",
    "挂汁率增量": "%",
    "额外死亡汁层概率": "%",
    "死亡汁半径增加": "米",
    "地面汁持续增加": "秒",
    "最大生命增加": "HP",
    "恢复汁滴掉率": "%",
    "单滴治疗": "%",
    "每面基础HP增加": "HP",
    "脱战等待": "秒",
    "每秒修复": "%",
    "进食时间增加": "秒",
    "怪物每层减速增加": "%",
    "每轮成熟增加": "点",
    "熟果主弹系数增加": "%",
    "熟果溅射半径增加": "米",
    "熟果溅射系数增加": "%"
  };
  function formatSkillValue(value) {
    return Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
  }
  function hashString(value) {
    let hash = 2166136261;
    for (let i = 0; i < value.length; i++) {
      hash ^= value.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }
  function radiusFor(kind) {
    if (kind === "boss") return 29;
    if (kind === "glutton") return 20;
    if (kind === "armor") return 15;
    if (kind === "absorber") return 14;
    if (kind === "thief") return 13;
    if (kind === "normal") return 14;
    return 11;
  }
  function enemyBody(kind) {
    switch (kind) {
      case "small":
        return "#ffc55d";
      case "normal":
        return "#ff7a58";
      case "armor":
        return "#7e91a8";
      case "thief":
        return "#a45bdd";
      case "absorber":
        return "#35b993";
      case "glutton":
        return "#cf493c";
      case "boss":
        return "#8b2524";
      default:
        return "#ff7a58";
    }
  }
  var CommercialScenePort = class {
    constructor(owner, chooseOffer, pressUltimate, restartRun) {
      this.chooseOffer = chooseOffer;
      this.pressUltimate = pressUltimate;
      this.restartRun = restartRun;
      this.worldLayer = new Laya.Sprite();
      this.juiceLayer = new Laya.Sprite();
      this.threatLayer = new Laya.Sprite();
      this.entityLayer = new Laya.Sprite();
      this.fxLayer = new Laya.Sprite();
      this.uiLayer = new Laya.Sprite();
      this.choiceLayer = new Laya.Sprite();
      this.resultLayer = new Laya.Sprite();
      this.player = new Laya.Sprite();
      this.playerWeapon = new Laya.Sprite();
      this.enemyNodes = /* @__PURE__ */ new Map();
      this.seenEnemyIds = /* @__PURE__ */ new Set();
      this.enemyHp = /* @__PURE__ */ new Map();
      this.enemyLastPosition = /* @__PURE__ */ new Map();
      this.enemyMoving = /* @__PURE__ */ new Map();
      this.enemyActionProgress = /* @__PURE__ */ new Map();
      this.enemyKinds = /* @__PURE__ */ new Map();
      this.projectileNodes = /* @__PURE__ */ new Map();
      this.seenProjectileIds = /* @__PURE__ */ new Set();
      this.projectileRipe = /* @__PURE__ */ new Map();
      this.projectileLastPosition = /* @__PURE__ */ new Map();
      this.expOrbNodes = /* @__PURE__ */ new Map();
      this.healOrbNodes = /* @__PURE__ */ new Map();
      this.juiceChunkNodes = /* @__PURE__ */ new Map();
      this.juiceSamples = /* @__PURE__ */ new Map();
      this.fruitNodes = /* @__PURE__ */ new Map();
      this.fruitThreatNodes = /* @__PURE__ */ new Map();
      this.fruitOwnership = /* @__PURE__ */ new Map();
      this.barrierNodes = /* @__PURE__ */ new Map();
      this.barrierHpFraction = /* @__PURE__ */ new Map();
      this.barrierState = /* @__PURE__ */ new Map();
      this.ambientDecorNodes = [];
      this.hudChrome = new Laya.Sprite();
      this.healthText = new Laya.Text();
      this.fruitText = new Laya.Text();
      this.levelText = new Laya.Text();
      this.timerText = new Laya.Text();
      this.subtitle = new Laya.Text();
      this.buildText = new Laya.Text();
      this.ripePanel = new Laya.Sprite();
      this.ripeLabel = new Laya.Text();
      this.ripeChargeBar = new Laya.Sprite();
      this.ripeAura = new Laya.Sprite();
      this.ultimateButton = new Laya.Sprite();
      this.ultimateLabel = new Laya.Text();
      this.ultimateCharge = new Laya.Sprite();
      this.bossBar = new Laya.Sprite();
      this.bossBarLabel = new Laya.Text();
      this.joystickBase = new Laya.Sprite();
      this.joystickKnob = new Laya.Sprite();
      this.currentOfferId = null;
      this.currentResultReason = null;
      this.lastBossAlive = false;
      this.lastUltimateReady = false;
      this.lastUltimateHasJuice = false;
      this.lastRipeReady = false;
      this.lastChoiceTickSeen = null;
      this.lastPlayerHp = null;
      this.lastLevel = 1;
      this.activeDamageTexts = 0;
      this.shakeFrames = 0;
      this.shakeStrength = 0;
      this.shakePhase = 0;
      this.bossPrep30Shown = false;
      this.bossPrep15Shown = false;
      this.bossPrep5Shown = false;
      this.bossPhase = 0;
      this.currentBossId = null;
      this.lastBossDashWarning = false;
      this.lastBossDashing = false;
      this.lastBossSummonWarning = false;
      this.lastPlayerHitTickSeen = null;
      this.lastEliteRewardTickSeen = null;
      this.fruitLossAlarmTier = 0;
      this.bossCountdownActive = false;
      this.bossCountdownSeconds = Number.POSITIVE_INFINITY;
      this.lastPlayerPosition = null;
      this.playerMoveMagnitude = 0;
      this.playerFacingX = 1;
      this.playerAttackFrames = 0;
      this.playerAttackTotalFrames = 1;
      this.playerAttackDirectionX = 1;
      this.playerAttackDirectionY = 0;
      this.playerWeaponAngleDeg = 0;
      this.playerWeaponCharged = false;
      this.lastMoveDustFrame = -999;
      this.ambientFrame = 0;
      this.root = owner;
      this.worldLayer.name = "WorldLayer";
      this.juiceLayer.name = "JuiceLayer";
      this.threatLayer.name = "FruitThreatLayer";
      this.entityLayer.name = "EntityLayer";
      this.fxLayer.name = "FxLayer";
      this.uiLayer.name = "UiLayer";
      this.choiceLayer.name = "ChoiceLayer";
      this.resultLayer.name = "ResultLayer";
      this.player.name = "Player";
      this.playerWeapon.name = "PlayerWeapon";
      this.hudChrome.name = "HudChrome";
      this.healthText.name = "HealthText";
      this.fruitText.name = "FruitText";
      this.levelText.name = "LevelText";
      this.timerText.name = "TimerText";
      this.buildText.name = "BuildText";
      this.ripePanel.name = "RipePanel";
      this.ripeLabel.name = "RipeLabel";
      this.ripeAura.name = "RipeAura";
      this.bossBar.name = "BossBar";
      this.ultimateButton.name = "UltimateButton";
      this.ultimateLabel.name = "UltimateLabel";
      this.joystickBase.name = "JoystickBase";
      this.root.addChild(this.worldLayer);
      this.root.addChild(this.juiceLayer);
      this.root.addChild(this.threatLayer);
      this.root.addChild(this.entityLayer);
      this.root.addChild(this.fxLayer);
      this.root.addChild(this.uiLayer);
      this.drawWorldBackdrop();
      this.createPlayer();
      this.createPlayerWeapon();
      this.createHud();
      this.createBossBar();
      this.createUltimateButton();
      this.createRipeStatus();
      this.createJoystick();
      this.uiLayer.addChild(this.choiceLayer);
      this.uiLayer.addChild(this.resultLayer);
      this.resultLayer.visible = false;
      this.startAmbientAnimation();
    }
    triggerUltimate() {
      if (this.lastUltimateReady && this.lastUltimateHasJuice) this.spawnUltimateBurst();
      else if (this.lastUltimateReady) this.spawnNoJuicePing();
      else this.spawnCooldownPing();
      this.pressUltimate();
    }
    dispose() {
      Laya.timer.clearAll(this);
      this.joystickBase.offAll();
    }
    setPlayer(position) {
      if (this.lastPlayerPosition) {
        const dx = position.x - this.lastPlayerPosition.x;
        const dy = position.y - this.lastPlayerPosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        this.playerMoveMagnitude = Math.min(1, distance / 6);
        if (Math.abs(dx) > 0.05) this.playerFacingX = dx < 0 ? -1 : 1;
      }
      this.lastPlayerPosition = { x: position.x, y: position.y };
      this.player.pos(position.x, position.y);
      this.playerWeapon.pos(position.x, position.y);
      this.ripeAura.pos(position.x, position.y);
    }
    upsertEnemy(view) {
      let node = this.enemyNodes.get(view.id);
      const created = !node;
      const firstAppearance = !this.seenEnemyIds.has(view.id);
      this.seenEnemyIds.add(view.id);
      if (!node) {
        node = new Laya.Sprite();
        this.enemyNodes.set(view.id, node);
        this.entityLayer.addChild(node);
      }
      const previousHp = this.enemyHp.get(view.id);
      if (previousHp !== void 0 && view.hp < previousHp - 1e-3) {
        const damage = previousHp - view.hp;
        const damageFraction = view.maxHp > 0 ? damage / view.maxHp : 0;
        const heavy = damageFraction >= 0.08;
        this.spawnJuiceBurst(view.x, view.y, Math.min(1.8, 0.72 + damageFraction * 4.5), "#ff553e");
        this.spawnDamageNumber(view.id, view.x, view.y - radiusFor(view.kind) - 8, damage, heavy);
        this.pulseEnemy(node, heavy);
        if (heavy) this.queueShake(view.kind === "boss" ? 5 : 3, 5);
      }
      const previousPosition = this.enemyLastPosition.get(view.id);
      if (previousPosition) {
        const dx = view.x - previousPosition.x;
        const dy = view.y - previousPosition.y;
        this.enemyMoving.set(view.id, dx * dx + dy * dy > 0.02);
      } else {
        this.enemyMoving.set(view.id, false);
      }
      this.enemyLastPosition.set(view.id, { x: view.x, y: view.y });
      this.enemyActionProgress.set(view.id, view.actionProgressFraction);
      this.enemyHp.set(view.id, view.hp);
      this.enemyKinds.set(view.id, view.kind);
      node.pos(view.x, view.y);
      this.drawEnemy(node, view);
      if (created && firstAppearance) {
        this.spawnEnemyEntrance(view);
        if (view.source === "elite") this.spawnEliteWarning(view);
      }
      if (view.kind === "boss") this.updateBossBar(view);
    }
    removeEnemy(id) {
      var _a;
      this.seenEnemyIds.delete(id);
      const node = this.enemyNodes.get(id);
      const kind = (_a = this.enemyKinds.get(id)) != null ? _a : "normal";
      if (node) {
        const x = node.x;
        const y = node.y;
        const intensity = kind === "boss" ? 2.6 : kind === "glutton" ? 1.7 : 1.2;
        this.spawnDeathBurst(x, y, intensity, kind);
        if (kind === "boss") {
          this.currentBossId = null;
          this.bossPhase = 0;
          this.bossBar.visible = false;
          this.showCenterCallout("暴食王击破！", "#ffe37b", "#6f4315", 42);
          this.queueShake(9, 16);
        }
        node.removeSelf();
        node.destroy(true);
      }
      this.enemyNodes.delete(id);
      this.enemyHp.delete(id);
      this.enemyKinds.delete(id);
      this.enemyLastPosition.delete(id);
      this.enemyMoving.delete(id);
      this.enemyActionProgress.delete(id);
    }
    cullEnemy(id) {
      const node = this.enemyNodes.get(id);
      if (node) {
        node.removeSelf();
        node.destroy(true);
      }
      this.enemyNodes.delete(id);
      this.enemyHp.delete(id);
      this.enemyKinds.delete(id);
      this.enemyLastPosition.delete(id);
      this.enemyMoving.delete(id);
      this.enemyActionProgress.delete(id);
    }
    upsertProjectile(view) {
      let node = this.projectileNodes.get(view.id);
      const created = !node;
      const firstAppearance = !this.seenProjectileIds.has(view.id);
      this.seenProjectileIds.add(view.id);
      if (!node) {
        node = new Laya.Sprite();
        this.projectileNodes.set(view.id, node);
        this.entityLayer.addChild(node);
      }
      const previous = this.projectileLastPosition.get(view.id);
      let dx = previous ? view.x - previous.x : view.x - this.player.x;
      let dy = previous ? view.y - previous.y : view.y - this.player.y;
      let len = Math.sqrt(dx * dx + dy * dy);
      if (len < 1e-3) {
        dx = 1;
        dy = 0;
        len = 1;
      }
      const ux = dx / len;
      const uy = dy / len;
      this.projectileRipe.set(view.id, view.ripe);
      this.projectileLastPosition.set(view.id, { x: view.x, y: view.y });
      node.pos(view.x, view.y);
      node.graphics.clear();
      const radius = view.ripe ? 8 : 5;
      if (view.ripe) {
        node.graphics.drawLine(-ux * 42, -uy * 42, -ux * 12, -uy * 12, "#ff8b38", 7);
        node.graphics.drawLine(-ux * 58, -uy * 58, -ux * 18, -uy * 18, "#ffd95d", 3);
        node.graphics.drawCircle(-ux * 26, -uy * 26, 5, "#ff6a3e");
        node.graphics.drawCircle(-ux * 42, -uy * 42, 3, "#ffd260");
        node.graphics.drawCircle(0, 0, radius + 5, "#ffbc38");
        node.graphics.drawCircle(0, 0, radius + 3, "#ff6037");
        node.graphics.drawCircle(0, 0, radius, "#e62d27", "#6d1815", 2);
        node.graphics.drawCircle(-2.5, -2.5, 2.4, "#ffe0ad");
        node.graphics.drawLine(-5, -7, 0, -12, "#6eb54a", 2.5);
        node.graphics.drawLine(5, -7, 0, -12, "#6eb54a", 2.5);
      } else {
        node.graphics.drawLine(-ux * 25, -uy * 25, -ux * 8, -uy * 8, "#ff866d", 4);
        node.graphics.drawCircle(-ux * 18, -uy * 18, 2.5, "#ffad78");
        node.graphics.drawCircle(0, 0, radius + 2, "#ff9a4e");
        node.graphics.drawCircle(0, 0, radius, "#ed4a38", "#721f18", 1.5);
        node.graphics.drawCircle(-1.5, -1.5, 1.4, "#ffe1b8");
      }
      if (created && firstAppearance) this.playPlayerAttack(view);
    }
    removeProjectile(id) {
      this.seenProjectileIds.delete(id);
      const node = this.projectileNodes.get(id);
      if (node) {
        if (this.projectileRipe.get(id)) {
          this.spawnRipeImpact(node.x, node.y);
        }
        node.removeSelf();
        node.destroy(true);
      }
      this.projectileNodes.delete(id);
      this.projectileRipe.delete(id);
      this.projectileLastPosition.delete(id);
    }
    cullProjectile(id) {
      const node = this.projectileNodes.get(id);
      if (node) {
        node.removeSelf();
        node.destroy(true);
      }
      this.projectileNodes.delete(id);
      this.projectileRipe.delete(id);
      this.projectileLastPosition.delete(id);
    }
    upsertExpOrb(view) {
      let node = this.expOrbNodes.get(view.id);
      const created = !node;
      if (!node) {
        node = new Laya.Sprite();
        node.name = "ExpOrb-" + view.id;
        this.expOrbNodes.set(view.id, node);
        this.entityLayer.addChild(node);
      }
      node.pos(view.x, view.y);
      node.graphics.clear();
      const r = view.amount >= 10 ? 8 : view.amount >= 5 ? 7 : 6;
      node.graphics.drawCircle(2, 4, r + 2, "#11251d");
      node.graphics.drawCircle(0, 0, r + 2, "#1d6e69", "#85f5d0", 2);
      node.graphics.drawCircle(0, 0, r, "#42c8a0");
      node.graphics.drawCircle(-2, -2, Math.max(2, r * 0.34), "#d7fff1");
      node.graphics.drawLine(-r * 0.6, r * 0.35, r * 0.6, -r * 0.35, "#7de2c0", 1.5);
      if (created) this.spawnPickupPop(node, "#70eac2", false);
    }
    removeExpOrb(id) {
      const node = this.expOrbNodes.get(id);
      if (!node) return;
      this.spawnPickupCollect(node.x, node.y, "#72f0c5", "EXP");
      node.removeSelf();
      node.destroy(true);
      this.expOrbNodes.delete(id);
    }
    upsertHealOrb(view) {
      let node = this.healOrbNodes.get(view.id);
      const created = !node;
      if (!node) {
        node = new Laya.Sprite();
        node.name = "HealOrb-" + view.id;
        this.healOrbNodes.set(view.id, node);
        this.entityLayer.addChild(node);
      }
      node.pos(view.x, view.y);
      node.graphics.clear();
      node.graphics.drawCircle(2, 4, 11, "#12251a");
      node.graphics.drawCircle(0, 0, 10, "#2d9b4d", "#b9ff9d", 2);
      node.graphics.drawCircle(-3, -3, 3, "#e6ffd7");
      node.graphics.drawRect(-2, -7, 4, 14, "#e6ffd7");
      node.graphics.drawRect(-7, -2, 14, 4, "#e6ffd7");
      node.alpha = 0.94;
      if (created) this.spawnPickupPop(node, "#a7ff8e", true);
    }
    removeHealOrb(id) {
      const node = this.healOrbNodes.get(id);
      if (!node) return;
      const fade = new Laya.Sprite();
      fade.pos(node.x, node.y);
      fade.graphics.drawCircle(0, 0, 12, "#1f4d2a", "#a8ff8b", 3);
      this.fxLayer.addChild(fade);
      this.animateFx(fade, 12, 1.8, 0.68);
      node.removeSelf();
      node.destroy(true);
      this.healOrbNodes.delete(id);
    }
    upsertJuiceChunk(chunk) {
      let node = this.juiceChunkNodes.get(chunk.chunkId);
      if (!node) {
        node = new Laya.Sprite();
        this.juiceChunkNodes.set(chunk.chunkId, node);
        this.juiceLayer.addChild(node);
      }
      node.graphics.clear();
      const sample = [];
      let index = 0;
      for (const cell of chunk.cells) {
        const size = 11 + cell.stack * 2.4;
        const edge = cell.stack >= 4 ? "#761b18" : "#9d2b23";
        const body = cell.stack >= 4 ? "#d82d27" : cell.stack >= 2 ? "#ea4a37" : "#f2674d";
        const wobble = (cell.cellId * 17 + cell.version * 13) % 7 - 3;
        node.graphics.drawCircle(cell.x + 3, cell.y + 4, size + 3, edge);
        node.graphics.drawCircle(cell.x - 2, cell.y + 1, size, body);
        node.graphics.drawCircle(cell.x + size * 0.48, cell.y + wobble, Math.max(3, size * 0.42), body);
        node.graphics.drawCircle(cell.x - size * 0.42, cell.y - wobble * 0.5, Math.max(2.5, size * 0.34), body);
        node.graphics.drawCircle(cell.x - size * 0.3, cell.y - size * 0.34, Math.max(2, size * 0.18), "#ff9f7f");
        node.graphics.drawLine(cell.x - size * 0.2, cell.y - size * 0.48, cell.x + size * 0.16, cell.y - size * 0.33, "#ffb19a", 2);
        if (cell.stack >= 3) {
          node.graphics.drawCircle(cell.x + size * 0.28, cell.y + size * 0.18, 1.7, "#6e2218");
          node.graphics.drawCircle(cell.x - size * 0.12, cell.y + size * 0.28, 1.4, "#6e2218");
        }
        if (index % 4 === 0 && sample.length < 4) sample.push({ x: cell.x, y: cell.y });
        index++;
      }
      node.alpha = 0.56;
      this.juiceSamples.set(chunk.chunkId, sample);
    }
    removeJuiceChunk(chunkId) {
      const node = this.juiceChunkNodes.get(chunkId);
      if (!node) return;
      node.removeSelf();
      node.destroy(true);
      this.juiceChunkNodes.delete(chunkId);
      this.juiceSamples.delete(chunkId);
    }
    setFruits(fruits) {
      const threatened = /* @__PURE__ */ new Set();
      for (const fruit of fruits) {
        let node = this.fruitNodes.get(fruit.fruitId);
        if (!node) {
          node = new Laya.Sprite();
          this.fruitNodes.set(fruit.fruitId, node);
          this.worldLayer.addChild(node);
        }
        node.pos(fruit.x, fruit.y);
        node.graphics.clear();
        node.graphics.drawCircle(2, 4, 17, "#1d2b19");
        node.graphics.drawCircle(0, 0, 16, "#6b3b20", "#382012", 2);
        if (fruit.ownership === "IN_GARDEN") {
          node.graphics.drawCircle(0, 0, 12.5, "#e94a35", "#ffd76a", 2);
          node.graphics.drawCircle(-4, -4, 3.4, "#ff9b7f");
          node.graphics.drawLine(-7, -12, 0, -16, "#69bd4e", 3);
          node.graphics.drawLine(7, -12, 0, -16, "#69bd4e", 3);
          node.graphics.drawLine(0, -11, 0, -17, "#3d8e39", 3);
          node.alpha = 1;
        } else if (fruit.ownership === "CARRIED") {
          node.graphics.drawCircle(0, 0, 10, "#8a5f43");
          node.graphics.drawCircle(0, 0, 6, "#403127");
          node.graphics.drawLine(-9, -9, 9, 9, "#d0a06d", 2);
          node.alpha = 0.82;
        } else {
          node.graphics.drawCircle(0, 0, 10, "#362922");
          node.graphics.drawLine(-8, -8, 8, 8, "#c04d3c", 3);
          node.graphics.drawLine(8, -8, -8, 8, "#c04d3c", 3);
          node.alpha = 0.72;
        }
        const previousOwnership = this.fruitOwnership.get(fruit.fruitId);
        if (previousOwnership !== void 0 && previousOwnership !== fruit.ownership) {
          this.handleFruitTransition(fruit, previousOwnership);
        }
        this.fruitOwnership.set(fruit.fruitId, fruit.ownership);
        if (fruit.ownership === "IN_GARDEN" && fruit.reservedBy) {
          threatened.add(fruit.fruitId);
          this.upsertFruitThreat(fruit);
        }
      }
      for (const [fruitId, node] of this.fruitThreatNodes) {
        if (threatened.has(fruitId)) continue;
        node.removeSelf();
        node.destroy(true);
        this.fruitThreatNodes.delete(fruitId);
      }
    }
    setBarriers(barriers) {
      const scale = Math.min(WORLD.designWidth / WORLD.width, WORLD.designHeight / WORLD.height);
      const cx = WORLD.designWidth / 2;
      const cy = WORLD.designHeight / 2;
      const half = WORLD.barrierHalfExtent * scale;
      const thickness = Math.max(9, WORLD.barrierThickness * scale + 5);
      const length = half * 2;
      for (const barrier of barriers) {
        const previousHp = this.barrierHpFraction.get(barrier.side);
        const previousState = this.barrierState.get(barrier.side);
        if (previousHp !== void 0 && barrier.hpFraction < previousHp - 1e-4) {
          this.spawnBarrierHit(
            barrier.side,
            Math.max(0, previousHp - barrier.hpFraction),
            barrier.state === "BROKEN" && previousState !== "BROKEN"
          );
        }
        if (previousState !== void 0 && previousState !== barrier.state) {
          if (barrier.state === "REBUILDING") {
            this.spawnBarrierStateFx(barrier.side, "REBUILDING");
          } else if (barrier.state === "ACTIVE" && previousState === "REBUILDING") {
            this.spawnBarrierStateFx(barrier.side, "ACTIVE");
          }
        }
        this.barrierHpFraction.set(barrier.side, barrier.hpFraction);
        this.barrierState.set(barrier.side, barrier.state);
        let node = this.barrierNodes.get(barrier.side);
        if (!node) {
          node = new Laya.Sprite();
          this.barrierNodes.set(barrier.side, node);
          this.worldLayer.addChild(node);
        }
        node.graphics.clear();
        if (barrier.state === "NOT_OWNED") {
          node.visible = false;
          continue;
        }
        node.visible = true;
        const fill = barrier.state === "ACTIVE" ? "#9a6337" : barrier.state === "REBUILDING" ? "#bd8d50" : "#5d4030";
        const dark = "#4a2b1a";
        const highlight = "#d89c5a";
        if (barrier.side === "top" || barrier.side === "bottom") {
          node.pos(cx - half, cy + (barrier.side === "top" ? -half : half) - thickness / 2);
          node.graphics.drawRect(0, 2, length, thickness, dark);
          node.graphics.drawRect(0, 0, length, thickness - 3, fill, dark, 2);
          node.graphics.drawLine(2, 3, length - 2, 3, highlight, 2);
          for (let x = 14; x < length; x += 28) {
            node.graphics.drawLine(x, 1, x, thickness - 4, dark, 1.5);
            node.graphics.drawCircle(x, thickness / 2, 1.5, "#322117");
          }
          node.graphics.drawRect(0, thickness + 2, length, 5, "#33231a");
          node.graphics.drawRect(0, thickness + 2, length * barrier.hpFraction, 5, "#75d66e");
        } else {
          node.pos(cx + (barrier.side === "left" ? -half : half) - thickness / 2, cy - half);
          node.graphics.drawRect(2, 0, thickness, length, dark);
          node.graphics.drawRect(0, 0, thickness - 3, length, fill, dark, 2);
          node.graphics.drawLine(3, 2, 3, length - 2, highlight, 2);
          for (let y = 14; y < length; y += 28) {
            node.graphics.drawLine(1, y, thickness - 4, y, dark, 1.5);
            node.graphics.drawCircle(thickness / 2, y, 1.5, "#322117");
          }
          node.graphics.drawRect(thickness + 2, 0, 5, length, "#33231a");
          node.graphics.drawRect(thickness + 2, length * (1 - barrier.hpFraction), 5, length * barrier.hpFraction, "#75d66e");
        }
        node.alpha = barrier.collisionActive ? 1 : 0.68;
      }
    }
    setHud(hud) {
      var _a;
      const minutes = Math.floor(hud.timeSeconds / 60);
      const seconds = Math.floor(hud.timeSeconds % 60).toString().padStart(2, "0");
      const hpFraction = hud.playerMaxHp > 0 ? Math.max(0, Math.min(1, hud.playerHp / hud.playerMaxHp)) : 0;
      this.hudChrome.graphics.clear();
      this.drawHudPanel(this.hudChrome, 18, 16, 400, 62);
      this.drawHudPanel(this.hudChrome, 434, 16, 286, 62);
      this.drawHudPanel(this.hudChrome, 736, 16, 222, 62);
      this.drawHudPanel(this.hudChrome, 974, 16, 180, 62);
      this.hudChrome.graphics.drawRect(38, 56, 300, 10, "#2a1f1b", "#6e4a38", 1);
      this.hudChrome.graphics.drawRect(38, 56, 300 * hpFraction, 10, hpFraction > 0.3 ? "#61d46b" : "#ff6251");
      if (hud.shield > 0) this.hudChrome.graphics.drawRect(38, 68, Math.min(300, 300 * hud.shield / hud.playerMaxHp), 4, "#61d8ff");
      const xpBarX = 756;
      const xpBarY = 58;
      const xpBarW = 182;
      this.hudChrome.graphics.drawRect(xpBarX, xpBarY, xpBarW, 8, "#1c251d", "#586b4e", 1);
      this.hudChrome.graphics.drawRect(xpBarX, xpBarY, xpBarW * hud.xpFraction, 8, hud.xpFraction >= 0.8 ? "#ffe06a" : "#65d497");
      this.healthText.text = "生命  " + Math.ceil(hud.playerHp) + "/" + Math.ceil(hud.playerMaxHp) + (hud.shield > 0 ? "  护盾+" + Math.ceil(hud.shield) : "");
      this.fruitText.text = "灵果  " + hud.fruitInGarden + "  | 携 " + hud.fruitCarried + " | 失 " + hud.fruitLost;
      this.levelText.text = hud.xpNeed === null ? "Lv." + hud.level + "   已满级" : "Lv." + hud.level + "   XP " + hud.xp + "/" + hud.xpNeed;
      const buildEntries = hud.ownedSkills.slice(0, 3).map((skill) => {
        var _a2;
        return ((_a2 = SKILL_NAMES[skill.skillId]) != null ? _a2 : skill.skillId) + "×" + skill.count;
      });
      const hiddenBuildCount = Math.max(0, hud.ownedSkills.length - buildEntries.length);
      this.buildText.text = buildEntries.length === 0 ? "Build：尚未获得强化" : "Build：" + buildEntries.join(" · ") + (hiddenBuildCount > 0 ? "  +" + hiddenBuildCount : "");
      this.timerText.text = minutes + ":" + seconds;
      this.bossCountdownSeconds = (_a = hud.bossCountdownSeconds) != null ? _a : Number.POSITIVE_INFINITY;
      this.bossCountdownActive = !hud.bossAlive && this.bossCountdownSeconds <= 30 && this.bossCountdownSeconds > 0;
      this.timerText.color = this.bossCountdownActive ? this.bossCountdownSeconds <= 5 ? "#ff765c" : "#ffd36b" : "#ffe3a5";
      this.subtitle.text = hud.bossDashing ? "暴食王冲撞中！立即避让" : hud.bossDashWarning ? "危险！暴食王即将冲撞" : hud.bossSummonWarning ? "危险！暴食王正在召唤援军" : hud.bossPhase === "FRENZY" ? "暴食王濒死暴走 · 移速提升" : hud.bossPhase === "SUMMON" ? "暴食王进入召唤阶段 · 优先清理援军" : hud.bossAlive ? "暴食王冲撞阶段 · 注意蓄力预警" : this.bossCountdownActive ? "暴食王 " + Math.ceil(this.bossCountdownSeconds) + " 秒后入侵 · 清场并守住灵果" : hud.timeSeconds >= 390 ? "精英压力上升 · 准备迎接最终波次" : "守住九枚灵果 · 击杀怪物收集经验";
      if (hud.bossCountdownSeconds !== null && hud.bossCountdownSeconds <= 30 && hud.bossCountdownSeconds > 15 && !this.bossPrep30Shown && !hud.bossAlive) {
        this.bossPrep30Shown = true;
        this.showCenterCallout("最终30秒！暴食王即将入侵", "#ffd36b", "#6b3a1a", 32);
      }
      if (hud.bossCountdownSeconds !== null && hud.bossCountdownSeconds <= 15 && hud.bossCountdownSeconds > 5 && !this.bossPrep15Shown && !hud.bossAlive) {
        this.bossPrep15Shown = true;
        this.showCenterCallout("暴食王将在15秒内入侵", "#ffbf5c", "#6b251a", 34);
      }
      if (hud.bossCountdownSeconds !== null && hud.bossCountdownSeconds <= 5 && hud.bossCountdownSeconds > 0 && !this.bossPrep5Shown && !hud.bossAlive) {
        this.bossPrep5Shown = true;
        this.showCenterCallout("5秒！守住果园！", "#ff7b5c", "#6b1818", 38);
        this.queueShake(3, 7);
      }
      if (hud.bossAlive && !this.lastBossAlive) this.showBossWarning();
      this.lastBossAlive = hud.bossAlive;
      if (hud.bossDashWarning && !this.lastBossDashWarning) this.spawnBossDashWarning();
      if (hud.bossDashing && !this.lastBossDashing) this.spawnBossDashStart();
      if (hud.bossSummonWarning && !this.lastBossSummonWarning) this.spawnBossSummonWarning();
      this.lastBossDashWarning = hud.bossDashWarning;
      this.lastBossDashing = hud.bossDashing;
      this.lastBossSummonWarning = hud.bossSummonWarning;
      if (!hud.bossAlive) {
        this.lastBossDashWarning = false;
        this.lastBossDashing = false;
        this.lastBossSummonWarning = false;
      }
      if (hud.playerHitTick !== null && hud.playerHitTick !== this.lastPlayerHitTickSeen && hud.playerHitSourceX !== null && hud.playerHitSourceY !== null) {
        this.lastPlayerHitTickSeen = hud.playerHitTick;
        this.spawnDirectionalHitIndicator(hud.playerHitSourceX, hud.playerHitSourceY);
      }
      if (hud.eliteRewardTick !== null && hud.eliteRewardTick !== this.lastEliteRewardTickSeen && hud.eliteRewardGuarantee !== null) {
        this.lastEliteRewardTickSeen = hud.eliteRewardTick;
        this.spawnEliteRewardFeedback(hud.eliteRewardGuarantee);
      }
      const fruitAlarmTier = hud.fruitLost >= 8 ? 3 : hud.fruitLost >= 6 ? 2 : hud.fruitLost >= 3 ? 1 : 0;
      if (fruitAlarmTier > this.fruitLossAlarmTier) {
        this.fruitLossAlarmTier = fruitAlarmTier;
        if (fruitAlarmTier === 1) {
          this.showCenterCallout("警戒！仅剩6枚灵果可保住", "#ffd16b", "#6a421d", 30);
        } else if (fruitAlarmTier === 2) {
          this.showCenterCallout("危险！仅剩3枚灵果", "#ff9a60", "#6e2c1c", 35);
          this.queueShake(4, 7);
        } else {
          this.showCenterCallout("最后1枚灵果！绝不能再丢！", "#ff6654", "#661715", 40);
          this.queueShake(7, 12);
        }
      }
      if (this.lastPlayerHp !== null && hud.playerHp < this.lastPlayerHp - 1e-3) {
        const damage = this.lastPlayerHp - hud.playerHp;
        this.spawnFloatingText(this.player.x, this.player.y - 38, "-" + Math.max(1, Math.round(damage)), "#ff8b72", 27, 22);
        this.spawnDamageVignette();
        this.queueShake(damage >= hud.playerMaxHp * 0.15 ? 6 : 3, damage >= hud.playerMaxHp * 0.15 ? 8 : 5);
        this.pulsePlayer("#ff735c");
      } else if (this.lastPlayerHp !== null && hud.playerHp > this.lastPlayerHp + 1e-3) {
        const healed = hud.playerHp - this.lastPlayerHp;
        this.spawnFloatingText(this.player.x, this.player.y - 38, "+" + Math.max(1, Math.round(healed)), "#8ff18a", 24, 20);
        this.pulsePlayer("#9ff58f");
      }
      this.lastPlayerHp = hud.playerHp;
      if (hud.level > this.lastLevel) {
        this.showCenterCallout("升级！ Lv." + hud.level, "#ffe27a", "#5a4315", 42);
        this.spawnLevelBurst();
      }
      this.lastLevel = hud.level;
      const becameUsable = hud.ultimateReady && hud.ultimateHasJuice && (!this.lastUltimateReady || !this.lastUltimateHasJuice);
      if (becameUsable) {
        this.pulseUltimateReady();
      } else if (hud.ultimateReady && !this.lastUltimateReady && !hud.ultimateHasJuice) {
        this.showCenterCallout("爆爆汁充能完成 · 等待场上出现果汁", "#ffd27a", "#6a421d", 28);
      }
      this.lastUltimateReady = hud.ultimateReady;
      this.lastUltimateHasJuice = hud.ultimateHasJuice;
      this.drawUltimateButton(hud.ultimateReady, hud.ultimateFraction, hud.ultimateHasJuice);
      this.ultimateLabel.text = hud.ultimateReady ? hud.ultimateHasJuice ? "爆爆汁\n可释放" : "爆爆汁\n等果汁" : "爆爆汁\n" + Math.floor(hud.ultimateFraction * 100) + "%";
      this.drawRipeStatus(hud.ripeReady, hud.ripeFraction);
      if (hud.ripeReady !== this.playerWeaponCharged) {
        this.playerWeaponCharged = hud.ripeReady;
        this.drawPlayerWeapon(hud.ripeReady);
      }
      this.ripeAura.visible = hud.ripeReady;
      if (hud.ripeReady && !this.lastRipeReady) this.spawnRipeReadyFx();
      this.lastRipeReady = hud.ripeReady;
      if (hud.lastChoice && hud.lastChoice.tick !== this.lastChoiceTickSeen) {
        this.lastChoiceTickSeen = hud.lastChoice.tick;
        this.spawnChoiceAppliedFeedback(hud.lastChoice);
      }
      if (hud.resultCommitted && hud.resultReason !== this.currentResultReason) {
        this.currentResultReason = hud.resultReason;
        this.showResult(hud);
      }
      if (hud.offerId !== this.currentOfferId) {
        this.currentOfferId = hud.offerId;
        this.rebuildChoices(hud);
      }
      this.updateScreenShake();
    }
    setJoystickVector(move) {
      this.joystickKnob.pos(88 + move.x * 48, 88 + move.y * 48);
      this.joystickKnob.rotation = move.x * 8;
    }
    drawWorldBackdrop() {
      const g = this.worldLayer.graphics;
      g.drawRect(0, 0, WORLD.designWidth, WORLD.designHeight, "#153a25");
      const tile = 80;
      for (let y = 0; y < WORLD.designHeight; y += tile) {
        for (let x = 0; x < WORLD.designWidth; x += tile) {
          const even = (x / tile + y / tile) % 2 === 0;
          g.drawRect(x, y, tile, tile, even ? "#1d472b" : "#204c2e");
        }
      }
      for (let x = 40; x < WORLD.designWidth; x += 120) {
        const y = 110 + x * 7 % 370;
        g.drawCircle(x, y, 4, "#2f6238");
        g.drawLine(x, y - 2, x - 4, y - 8, "#6fa24f", 2);
        g.drawLine(x, y - 2, x + 5, y - 7, "#5c9347", 2);
      }
      const scale = Math.min(WORLD.designWidth / WORLD.width, WORLD.designHeight / WORLD.height);
      const orchard = WORLD.gardenCell * 3 * scale;
      const left = WORLD.designWidth / 2 - orchard / 2;
      const top = WORLD.designHeight / 2 - orchard / 2;
      const cell = orchard / 3;
      g.drawRect(left - 24, top - 24, orchard + 48, orchard + 48, "#17311c", "#77a858", 3);
      g.drawRect(left - 14, top - 14, orchard + 28, orchard + 28, "#466f37", "#9bc66c", 3);
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          const x = left + col * cell + 5;
          const y = top + row * cell + 5;
          const w = cell - 10;
          const h = cell - 10;
          g.drawRect(x + 3, y + 4, w, h, "#2a2118");
          g.drawRect(x, y, w, h, "#734929", "#ac7b43", 2);
          g.drawRect(x + 6, y + 6, w - 12, h - 12, "#5c3823");
          g.drawLine(x + 8, y + h * 0.45, x + w - 8, y + h * 0.45, "#8b5730", 1);
          g.drawLine(x + 8, y + h * 0.67, x + w - 8, y + h * 0.67, "#8b5730", 1);
        }
      }
      const signX = left + orchard + 17;
      const signY = top + orchard * 0.55;
      g.drawRect(signX, signY, 52, 28, "#a66b38", "#4b2d19", 2);
      g.drawLine(signX + 12, signY + 28, signX + 8, signY + 58, "#5e3a22", 5);
      g.drawLine(signX + 40, signY + 28, signX + 44, signY + 58, "#5e3a22", 5);
      const edgePatches = [
        [74, 132, 18],
        [118, 615, 22],
        [1190, 132, 20],
        [1160, 610, 24],
        [238, 92, 14],
        [1032, 92, 16],
        [236, 656, 17],
        [1030, 650, 15]
      ];
      for (const [x, y, r] of edgePatches) {
        g.drawCircle(x, y, r + 6, "#163922");
        g.drawCircle(x, y, r, "#285837");
        g.drawCircle(x - r * 0.35, y - r * 0.2, r * 0.55, "#347044");
        g.drawLine(x - r * 0.6, y + r * 0.55, x - r * 0.2, y - r * 0.45, "#79a85c", 2);
        g.drawLine(x + r * 0.45, y + r * 0.55, x + r * 0.15, y - r * 0.5, "#6d9a54", 2);
      }
      for (let i = 0; i < 18; i++) {
        const x = 55 + i * 157 % 1170;
        const y = i % 2 === 0 ? 104 + i * 31 % 92 : 548 + i * 47 % 112;
        g.drawCircle(x, y, 2.2, i % 3 === 0 ? "#ffd86b" : i % 3 === 1 ? "#f18d83" : "#8edb76");
        g.drawCircle(x - 2, y + 3, 1.6, "#3d7b45");
        g.drawCircle(x + 2, y + 3, 1.6, "#3d7b45");
      }
      for (let i = 0; i < 10; i++) {
        const firefly = new Laya.Sprite();
        firefly.pos(
          i < 5 ? 48 + i * 82 : WORLD.designWidth - 48 - (i - 5) * 82,
          180 + i % 5 * 82
        );
        firefly.graphics.drawCircle(0, 0, 5, "#526a35");
        firefly.graphics.drawCircle(0, 0, 2.5, "#d9f27a");
        firefly.alpha = 0.45;
        this.worldLayer.addChild(firefly);
        this.ambientDecorNodes.push(firefly);
      }
    }
    createPlayer() {
      const g = this.player.graphics;
      g.drawCircle(2, 8, 18, "#13261a");
      g.drawCircle(0, 0, 17, "#9e201f", "#4d1715", 2);
      g.drawCircle(-2, -1, 15, "#e64132");
      g.drawCircle(-6, -7, 5, "#ff8b72");
      g.drawLine(-10, -14, -1, -21, "#4fa243", 4);
      g.drawLine(9, -14, 0, -21, "#5bb24c", 4);
      g.drawLine(0, -13, 0, -22, "#377c34", 4);
      g.drawLine(-5, -15, -11, -20, "#6bbb4d", 3);
      g.drawLine(5, -15, 11, -20, "#6bbb4d", 3);
      g.drawCircle(-6, -3, 3.3, "#fff7db");
      g.drawCircle(6, -3, 3.3, "#fff7db");
      g.drawCircle(-5.2, -2.5, 1.5, "#2d2622");
      g.drawCircle(5.2, -2.5, 1.5, "#2d2622");
      g.drawLine(-4, 7, 0, 9, "#5e1918", 2);
      g.drawLine(0, 9, 5, 6, "#5e1918", 2);
      g.drawLine(-15, 3, -22, 8, "#d52f2b", 4);
      g.drawLine(15, 3, 22, 8, "#d52f2b", 4);
      g.drawCircle(-23, 9, 3, "#ffd0aa");
      g.drawCircle(23, 9, 3, "#ffd0aa");
      this.ripeAura.visible = false;
      this.ripeAura.graphics.drawCircle(0, 0, 27, null, "#ffd85f", 3);
      this.ripeAura.graphics.drawCircle(0, 0, 33, null, "#ff8c48", 2);
      this.ripeAura.alpha = 0.7;
      this.entityLayer.addChild(this.ripeAura);
      this.entityLayer.addChild(this.player);
    }
    createPlayerWeapon() {
      this.drawPlayerWeapon(false);
      this.playerWeapon.rotation = 0;
      this.playerWeaponAngleDeg = 0;
      this.entityLayer.addChild(this.playerWeapon);
    }
    drawPlayerWeapon(charged) {
      const g = this.playerWeapon.graphics;
      g.clear();
      g.drawCircle(0, 0, 9, "#3f2b22", "#8a6a4c", 2);
      g.drawCircle(0, 0, 5.5, charged ? "#ffd866" : "#c89055", "#3b271e", 1.5);
      g.drawRect(5, -6, 25, 12, charged ? "#b6422d" : "#7b4932", "#3c251d", 2);
      g.drawRect(27, -8, 10, 16, charged ? "#e76037" : "#9b5d3b", "#3c251d", 2);
      g.drawRect(35, -6, 7, 12, charged ? "#ffb347" : "#c77c48", "#4a2a1e", 1.5);
      g.drawLine(9, -3, 28, -3, charged ? "#ffd770" : "#d9a16d", 2);
      g.drawCircle(18, 0, charged ? 4.5 : 3, charged ? "#ffdd61" : "#b97949");
      if (charged) {
        g.drawCircle(38, 0, 11, null, "#ffd85d", 2.5);
        g.drawLine(31, -11, 38, -17, "#ff9d47", 2);
        g.drawLine(31, 11, 38, 17, "#ff9d47", 2);
        g.drawLine(41, -10, 48, -13, "#ffe477", 2);
        g.drawLine(41, 10, 48, 13, "#ffe477", 2);
      }
    }
    drawEnemy(node, view) {
      var _a;
      const g = node.graphics;
      g.clear();
      const r = radiusFor(view.kind);
      const body = enemyBody(view.kind);
      const dark = view.kind === "boss" ? "#421111" : "#38211c";
      if (view.source === "elite") {
        const eliteRank = ((_a = view.eliteIndex) != null ? _a : 0) + 1;
        g.drawCircle(0, 0, r + 9, null, eliteRank >= 2 ? "#ffcb55" : "#f0a94d", eliteRank >= 2 ? 4 : 3);
        g.drawCircle(0, 0, r + 14, null, eliteRank >= 2 ? "#fff0a1" : "#b87435", 2);
        const crownY = -r - 15;
        g.drawLine(-10, crownY + 6, -7, crownY - 3, "#ffd66b", 3);
        g.drawLine(-7, crownY - 3, 0, crownY + 2, "#ffe8a1", 3);
        g.drawLine(0, crownY + 2, 7, crownY - 3, "#ffe8a1", 3);
        g.drawLine(7, crownY - 3, 10, crownY + 6, "#ffd66b", 3);
        g.drawLine(-10, crownY + 6, 10, crownY + 6, "#c47c32", 3);
        if (eliteRank >= 2) g.drawCircle(0, crownY - 6, 3.5, "#fff1a6", "#d48d32", 1);
      }
      if (view.kind === "boss" && view.hpFraction <= BOSS.phaseThresholds[0]) {
        const frenzy = view.hpFraction <= BOSS.phaseThresholds[1];
        g.drawCircle(0, 0, r + (frenzy ? 12 : 9), null, frenzy ? "#ff6b45" : "#c66bff", frenzy ? 4 : 3);
        g.drawCircle(0, 0, r + (frenzy ? 18 : 14), null, frenzy ? "#ffbb55" : "#7545b6", 2);
        if (frenzy) {
          g.drawLine(-r - 9, -r * 0.45, -r - 17, -r * 0.72, "#ff8a4d", 3);
          g.drawLine(r + 8, r * 0.2, r + 18, r * 0.35, "#ffcb61", 3);
          g.drawLine(-r * 0.25, -r - 8, -r * 0.1, -r - 19, "#ff7a48", 3);
        }
      }
      g.drawCircle(2, r * 0.7, r * 0.92, "#13241a");
      g.drawCircle(0, 0, r, dark);
      g.drawCircle(-1, -1, r - 2, body);
      if (view.kind === "small") {
        g.drawLine(-6, -8, -10, -14, "#7a4f1c", 3);
        g.drawLine(6, -8, 10, -14, "#7a4f1c", 3);
      } else if (view.kind === "armor") {
        g.drawRect(-r - 2, -8, 7, 16, "#b8c4cf", "#485868", 1);
        g.drawRect(r - 5, -8, 7, 16, "#b8c4cf", "#485868", 1);
        g.drawRect(-8, -r - 2, 16, 7, "#aebbc8", "#485868", 1);
        g.drawLine(-10, 8, 10, 8, "#d8e0e7", 2);
      } else if (view.kind === "thief") {
        g.drawLine(-8, -9, -13, -18, "#6b2f99", 4);
        g.drawLine(8, -9, 13, -18, "#6b2f99", 4);
        g.drawRect(-10, -6, 20, 7, "#44304d");
        g.drawLine(r - 2, 8, r + 10, 14, "#7b3cad", 3);
        g.drawLine(r + 10, 14, r + 13, 9, "#7b3cad", 3);
      } else if (view.kind === "absorber") {
        g.drawCircle(0, 1, r - 5, "#20896f");
        g.drawCircle(-5, -6, 4, "#7ce6c0");
        g.drawCircle(7, 6, 3, "#1d6e5c");
      } else if (view.kind === "glutton") {
        g.drawCircle(0, 7, r * 0.66, "#8f2f29");
        g.drawLine(-9, 5, 9, 5, "#511918", 3);
        g.drawRect(-8, 6, 5, 5, "#fff3dc", "#8e6b54", 1);
        g.drawRect(3, 6, 5, 5, "#fff3dc", "#8e6b54", 1);
      } else if (view.kind === "boss") {
        g.drawLine(-15, -20, -24, -32, "#e2c17d", 6);
        g.drawLine(15, -20, 24, -32, "#e2c17d", 6);
        g.drawLine(-23, -32, -16, -29, "#f5dd9d", 3);
        g.drawLine(23, -32, 16, -29, "#f5dd9d", 3);
        g.drawCircle(0, 8, 15, "#681817");
        g.drawLine(-12, 8, 12, 8, "#3a0b0c", 4);
        g.drawRect(-10, 9, 6, 7, "#fff3dc", "#8e6b54", 1);
        g.drawRect(4, 9, 6, 7, "#fff3dc", "#8e6b54", 1);
      } else {
        g.drawLine(-8, -10, -11, -17, "#9b3e2e", 3);
        g.drawLine(8, -10, 11, -17, "#9b3e2e", 3);
      }
      const eyeY = view.kind === "boss" ? -7 : -4;
      const eyeDx = view.kind === "boss" ? 9 : 5;
      const eyeColor = view.kind === "boss" && view.hpFraction <= BOSS.phaseThresholds[1] ? "#ffd36a" : "#fff2d7";
      g.drawCircle(-eyeDx, eyeY, view.kind === "boss" ? 4 : 3, eyeColor);
      g.drawCircle(eyeDx, eyeY, view.kind === "boss" ? 4 : 3, eyeColor);
      g.drawCircle(-eyeDx + 0.8, eyeY + 0.5, 1.5, "#251b18");
      g.drawCircle(eyeDx - 0.8, eyeY + 0.5, 1.5, "#251b18");
      if (view.juiceStacks > 0) {
        const droplets = Math.min(5, view.juiceStacks);
        g.drawCircle(0, 2, r + 4 + view.juiceStacks * 0.7, "#5b1715", "#ff6048", 1.5);
        for (let i = 0; i < droplets; i++) {
          const angle = Math.PI * 2 * i / droplets + 0.4;
          const dx = Math.cos(angle) * (r + 5);
          const dy = Math.sin(angle) * (r + 5);
          g.drawCircle(dx, dy, 3 + i % 2, "#f34d36", "#80231b", 1);
        }
        const dripLength = 7 + view.juiceStacks * 2;
        g.drawLine(-r * 0.42, r * 0.48, -r * 0.38, r * 0.48 + dripLength, "#c72b27", 4);
        g.drawCircle(-r * 0.38, r * 0.48 + dripLength, 3, "#ef4c38", "#7d1c19", 1);
        if (view.juiceStacks >= 3) {
          g.drawLine(r * 0.34, r * 0.55, r * 0.38, r * 0.55 + dripLength * 0.72, "#e43a2f", 3);
        }
      }
      if (view.hardControlled) {
        g.drawCircle(0, 0, r + 7, "#1c4052", "#7be2ff", 2);
        g.drawLine(-r - 10, -r - 2, -r - 4, -r - 8, "#b9f2ff", 2);
        g.drawLine(r + 10, -r + 1, r + 4, -r - 7, "#b9f2ff", 2);
      }
      if (view.carryingFruitId !== null) {
        g.drawCircle(0, -r - 13, 8, "#60341d", "#2f1c12", 1);
        g.drawCircle(0, -r - 14, 6, "#ef4c35", "#ffd76a", 1.5);
        g.drawLine(-3, -r - 20, 0, -r - 24, "#65b64a", 2);
        g.drawLine(3, -r - 20, 0, -r - 24, "#65b64a", 2);
        if (view.escapeTargetX !== null && view.escapeTargetY !== null) {
          const dx = view.escapeTargetX - view.x;
          const dy = view.escapeTargetY - view.y;
          const len = Math.sqrt(dx * dx + dy * dy);
          if (len > 1e-3) {
            const ux = dx / len;
            const uy = dy / len;
            const start = r + 21;
            const end = r + 35;
            const tipX = ux * end;
            const tipY = uy * end;
            const px = -uy;
            const py = ux;
            g.drawLine(ux * start, uy * start, tipX, tipY, "#ffad58", 3);
            g.drawLine(tipX, tipY, tipX - ux * 8 + px * 5, tipY - uy * 8 + py * 5, "#ffd276", 3);
            g.drawLine(tipX, tipY, tipX - ux * 8 - px * 5, tipY - uy * 8 - py * 5, "#ffd276", 3);
          }
        }
      }
      const showHp = view.hpFraction < 0.999 || view.kind === "boss" || view.kind === "glutton";
      if (showHp) {
        const width = r * 2.5;
        const y = r + 8;
        g.drawRect(-width / 2 - 1, y - 1, width + 2, 7, "#211512", "#5b382c", 1);
        g.drawRect(-width / 2, y, width * Math.max(0, view.hpFraction), 5, view.kind === "boss" ? "#ff5148" : "#70dc70");
      }
      if (view.actionProgressFraction > 0) {
        const width = r * 2.7;
        const y = r + (showHp ? 19 : 9);
        const actionColor = view.kind === "thief" ? "#c779ff" : "#ffb257";
        g.drawRect(-width / 2 - 2, y - 2, width + 4, 9, "#1b1514", "#5a352d", 1);
        g.drawRect(-width / 2, y, width * Math.max(0, Math.min(1, view.actionProgressFraction)), 5, actionColor);
        const markerX = -width / 2 + width * Math.max(0, Math.min(1, view.actionProgressFraction));
        g.drawLine(markerX, y - 3, markerX, y + 8, "#fff0b4", 1.5);
        if (view.actionProgressFraction >= 0.8) {
          g.drawCircle(width / 2 + 7, y + 2, 3.5, "#ff674f", "#ffd37b", 1);
        }
      }
      const priorityTarget = view.kind === "boss" || view.source === "elite" || view.carryingFruitId !== null || view.actionProgressFraction >= 0.8;
      if (priorityTarget) {
        const bracket = r + 12;
        const len = view.kind === "boss" ? 10 : 8;
        const color = view.carryingFruitId !== null || view.actionProgressFraction >= 0.8 ? "#ff6552" : view.source === "elite" ? "#ffd66b" : "#ff9c59";
        g.drawLine(-bracket, -bracket, -bracket + len, -bracket, color, 2.5);
        g.drawLine(-bracket, -bracket, -bracket, -bracket + len, color, 2.5);
        g.drawLine(bracket, -bracket, bracket - len, -bracket, color, 2.5);
        g.drawLine(bracket, -bracket, bracket, -bracket + len, color, 2.5);
        g.drawLine(-bracket, bracket, -bracket + len, bracket, color, 2.5);
        g.drawLine(-bracket, bracket, -bracket, bracket - len, color, 2.5);
        g.drawLine(bracket, bracket, bracket - len, bracket, color, 2.5);
        g.drawLine(bracket, bracket, bracket, bracket - len, color, 2.5);
        if (view.carryingFruitId !== null || view.actionProgressFraction >= 0.8) {
          g.drawCircle(0, -bracket - 8, 7, "#6c1c18", color, 2);
          g.drawLine(0, -bracket - 12, 0, -bracket - 7, "#fff0c0", 2);
          g.drawCircle(0, -bracket - 4, 1.4, "#fff0c0");
        }
      }
    }
    createHud() {
      this.uiLayer.addChild(this.hudChrome);
      this.configureHudText(this.healthText, 30, 24, 368, 30, 21, "left");
      this.configureHudText(this.fruitText, 450, 29, 254, 30, 22, "center");
      this.configureHudText(this.levelText, 750, 29, 194, 30, 21, "center");
      this.configureHudText(this.timerText, 988, 23, 152, 38, 30, "center");
      this.timerText.bold = true;
      this.timerText.color = "#ffe3a5";
      const subtitlePlate = new Laya.Sprite();
      subtitlePlate.graphics.drawRect(330, 87, 620, 38, "#183326", "#557a50", 2);
      subtitlePlate.alpha = 0.93;
      this.uiLayer.addChild(subtitlePlate);
      this.subtitle.fontSize = Laya.Browser.onMobile ? 22 : 18;
      this.subtitle.bold = true;
      this.subtitle.color = "#fff1bd";
      this.subtitle.stroke = 2;
      this.subtitle.strokeColor = "#13291e";
      this.subtitle.align = "center";
      this.subtitle.valign = "middle";
      this.subtitle.pos(342, 90);
      this.subtitle.size(596, 32);
      this.uiLayer.addChild(this.subtitle);
      const buildPlate = new Laya.Sprite();
      buildPlate.graphics.drawRect(18, 91, 292, 34, "#10261a", "#46684b", 2);
      buildPlate.alpha = 0.9;
      this.uiLayer.addChild(buildPlate);
      this.buildText.fontSize = Laya.Browser.onMobile ? 16 : 14;
      this.buildText.bold = true;
      this.buildText.color = "#cfe8bd";
      this.buildText.stroke = 1;
      this.buildText.strokeColor = "#102318";
      this.buildText.align = "center";
      this.buildText.valign = "middle";
      this.buildText.pos(24, 94);
      this.buildText.size(280, 28);
      this.uiLayer.addChild(this.buildText);
    }
    configureHudText(text, x, y, w, h, size, align) {
      text.fontSize = Laya.Browser.onMobile ? size + 2 : size;
      text.bold = true;
      text.color = "#fff8df";
      text.stroke = 2;
      text.strokeColor = "#2d201a";
      text.align = align;
      text.valign = "middle";
      text.pos(x, y);
      text.size(w, h);
      this.uiLayer.addChild(text);
    }
    drawHudPanel(target, x, y, w, h) {
      target.graphics.drawRect(x + 3, y + 4, w, h, "#0d2017");
      target.graphics.drawRect(x, y, w, h, "#243f2d", "#8fb56e", 2);
      target.graphics.drawLine(x + 8, y + 5, x + w - 8, y + 5, "#416644", 2);
    }
    createBossBar() {
      this.bossBar.pos(WORLD.designWidth / 2 - 310, 130);
      this.bossBar.size(620, 50);
      this.bossBar.visible = false;
      this.uiLayer.addChild(this.bossBar);
      this.bossBarLabel.fontSize = Laya.Browser.onMobile ? 22 : 20;
      this.bossBarLabel.bold = true;
      this.bossBarLabel.color = "#ffe6a6";
      this.bossBarLabel.stroke = 2;
      this.bossBarLabel.strokeColor = "#4b1411";
      this.bossBarLabel.align = "center";
      this.bossBarLabel.valign = "middle";
      this.bossBarLabel.pos(0, 0);
      this.bossBarLabel.size(620, 24);
      this.bossBar.addChild(this.bossBarLabel);
    }
    updateBossBar(view) {
      this.currentBossId = view.id;
      this.bossBar.visible = true;
      const fraction = Math.max(0, Math.min(1, view.hpFraction));
      const summonPhase = fraction <= BOSS.phaseThresholds[0];
      const frenzyPhase = fraction <= BOSS.phaseThresholds[1];
      const g = this.bossBar.graphics;
      g.clear();
      g.drawRect(8, 28, 604, 18, "#1b0d0c", "#7b3b2e", 2);
      const fill = frenzyPhase ? "#ff543d" : summonPhase ? "#a957d5" : "#d94635";
      const highlight = frenzyPhase ? "#ffd06b" : summonPhase ? "#e2a3ff" : "#ff8b65";
      g.drawRect(11, 31, 598 * fraction, 12, fill);
      g.drawLine(18, 33, 18 + 578 * fraction, 33, highlight, 2);
      g.drawRect(4, 24, 612, 26, null, frenzyPhase ? "#ffb35c" : summonPhase ? "#ba78e4" : "#d6a35b", 2);
      const phaseName = frenzyPhase ? "暴走" : summonPhase ? "召唤" : "冲撞";
      this.bossBarLabel.text = "暴食王 · " + phaseName + "阶段   " + Math.ceil(view.hp) + " / " + Math.ceil(view.maxHp);
      const nextPhase = frenzyPhase ? 2 : summonPhase ? 1 : 0;
      if (nextPhase > this.bossPhase) {
        this.bossPhase = nextPhase;
        if (nextPhase === 1) {
          this.showCenterCallout("暴食王进入召唤阶段！", "#d89aff", "#55206c", 34);
          this.queueShake(5, 8);
        } else {
          this.showCenterCallout("暴食王濒死暴走！", "#ff765c", "#6b1818", 38);
          this.queueShake(7, 12);
        }
      }
    }
    createUltimateButton() {
      this.ultimateButton.pos(WORLD.designWidth - 168, WORLD.designHeight - 168);
      this.ultimateButton.size(138, 138);
      this.ultimateButton.mouseThrough = false;
      this.ultimateButton.on(Laya.Event.CLICK, this, this.triggerUltimate);
      this.uiLayer.addChild(this.ultimateButton);
      this.ultimateLabel.fontSize = Laya.Browser.onMobile ? 21 : 19;
      this.ultimateLabel.bold = true;
      this.ultimateLabel.color = "#fff9e8";
      this.ultimateLabel.stroke = 2;
      this.ultimateLabel.strokeColor = "#6a1715";
      this.ultimateLabel.align = "center";
      this.ultimateLabel.valign = "middle";
      this.ultimateLabel.pos(18, 28);
      this.ultimateLabel.size(102, 68);
      this.ultimateButton.addChild(this.ultimateLabel);
      this.ultimateCharge.pos(20, 108);
      this.ultimateButton.addChild(this.ultimateCharge);
    }
    drawUltimateButton(ready, fraction, hasJuice) {
      const g = this.ultimateButton.graphics;
      g.clear();
      g.drawCircle(69, 72, 63, "#13251a", "#86b65e", 3);
      const usable = ready && hasJuice;
      g.drawCircle(69, 69, 58, usable ? "#ff4d37" : ready ? "#7b5a36" : "#6e3a32", usable ? "#ffd564" : ready ? "#d7b06a" : "#a88e66", 4);
      g.drawCircle(69, 69, 48, usable ? "#c52825" : ready ? "#5e4a31" : "#4f3330");
      g.drawCircle(54, 51, 12, usable ? "#ff8e67" : ready ? "#a9824f" : "#78544b");
      g.drawCircle(83, 47, 5, usable ? "#ffd26a" : ready ? "#c9a15d" : "#7f684c");
      if (usable) {
        g.drawCircle(18, 36, 4, "#ffb950");
        g.drawCircle(118, 50, 3, "#ffdc71");
        g.drawCircle(112, 103, 4, "#ff7d4a");
      }
      this.ultimateCharge.graphics.clear();
      this.ultimateCharge.graphics.drawRect(0, 0, 98, 8, "#341f1b", "#8f624f", 1);
      this.ultimateCharge.graphics.drawRect(1, 1, 96 * Math.max(0, Math.min(1, fraction)), 6, usable ? "#ffd55c" : ready ? "#d6ab5b" : "#ff7658");
    }
    createRipeStatus() {
      this.ripePanel.pos(WORLD.designWidth - 334, WORLD.designHeight - 118);
      this.ripePanel.size(150, 58);
      this.ripePanel.graphics.drawRect(0, 0, 150, 58, "#11261a", "#66895a", 2);
      this.ripePanel.graphics.drawLine(10, 7, 140, 7, "#87a86c", 1.5);
      this.uiLayer.addChild(this.ripePanel);
      this.ripeLabel.fontSize = Laya.Browser.onMobile ? 19 : 17;
      this.ripeLabel.bold = true;
      this.ripeLabel.color = "#ffe4a0";
      this.ripeLabel.stroke = 1;
      this.ripeLabel.strokeColor = "#3f2a16";
      this.ripeLabel.align = "center";
      this.ripeLabel.valign = "middle";
      this.ripeLabel.pos(8, 9);
      this.ripeLabel.size(134, 28);
      this.ripePanel.addChild(this.ripeLabel);
      this.ripeChargeBar.pos(14, 41);
      this.ripePanel.addChild(this.ripeChargeBar);
    }
    drawRipeStatus(ready, fraction) {
      const clamped = Math.max(0, Math.min(1, fraction));
      this.ripeLabel.text = ready ? "熟果 READY · 下一发强化" : "熟果蓄力 " + Math.floor(clamped * 100) + "%";
      this.ripeLabel.color = ready ? "#fff07d" : "#ffd99b";
      this.ripeChargeBar.graphics.clear();
      this.ripeChargeBar.graphics.drawRect(0, 0, 122, 8, "#2b2018", "#6b543a", 1);
      this.ripeChargeBar.graphics.drawRect(1, 1, 120 * clamped, 6, ready ? "#ffb33d" : "#ef704b");
    }
    createJoystick() {
      this.joystickBase.pos(24, WORLD.designHeight - 205);
      this.joystickBase.size(176, 176);
      this.joystickBase.mouseThrough = false;
      const g = this.joystickBase.graphics;
      g.drawCircle(88, 88, 75, "#10281d", "#6fa66a", 3);
      g.drawCircle(88, 88, 59, "#294a34", "#8cc883", 2);
      g.drawLine(88, 19, 88, 34, "#bfdcad", 3);
      g.drawLine(88, 142, 88, 157, "#bfdcad", 3);
      g.drawLine(19, 88, 34, 88, "#bfdcad", 3);
      g.drawLine(142, 88, 157, 88, "#bfdcad", 3);
      this.joystickBase.alpha = 0.76;
      this.uiLayer.addChild(this.joystickBase);
      const kg = this.joystickKnob.graphics;
      kg.drawCircle(0, 3, 32, "#173024");
      kg.drawCircle(0, 0, 29, "#e8f0d2", "#5f8658", 3);
      kg.drawCircle(-7, -8, 7, "#ffffff");
      this.joystickKnob.pos(88, 88);
      this.joystickBase.addChild(this.joystickKnob);
    }
    spawnJuiceBurst(x, y, intensity, color) {
      const fx = new Laya.Sprite();
      fx.pos(x, y);
      const g = fx.graphics;
      const r = 8 * intensity;
      g.drawCircle(0, 0, r, color, "#8c241d", 1.5);
      g.drawCircle(-r * 0.35, -r * 0.35, r * 0.28, "#ffb096");
      for (let i = 0; i < 7; i++) {
        const a = i * Math.PI * 2 / 7;
        const d = r * 1.25;
        g.drawCircle(Math.cos(a) * d, Math.sin(a) * d, 2 + i % 3, i % 2 === 0 ? "#ff6a4b" : "#d52f2a");
      }
      this.fxLayer.addChild(fx);
      this.animateFx(fx, 13, 1.8 + intensity * 0.35, 0.88);
    }
    spawnEnemyEntrance(view) {
      const ring = new Laya.Sprite();
      ring.pos(view.x, view.y);
      const g = ring.graphics;
      const r = radiusFor(view.kind);
      const summon = view.source === "boss_summon";
      const elite = view.source === "elite";
      const color = summon ? "#cf6cff" : elite ? "#ffce69" : view.kind === "boss" ? "#ff6648" : "#a8d66c";
      g.drawCircle(0, 0, r + 10, "#142319", color, summon || view.kind === "boss" ? 4 : 2);
      for (let i = 0; i < (summon ? 8 : 5); i++) {
        const a = i * Math.PI * 2 / (summon ? 8 : 5);
        const outer = r + 22 + i % 2 * 5;
        g.drawLine(Math.cos(a) * (r + 4), Math.sin(a) * (r + 4), Math.cos(a) * outer, Math.sin(a) * outer, color, summon ? 3 : 2);
      }
      if (summon) g.drawCircle(0, 0, r + 4, "#3a174b", "#ef9dff", 2);
      ring.alpha = summon ? 0.9 : 0.66;
      this.fxLayer.addChild(ring);
      this.animateFx(ring, summon ? 18 : 12, summon ? 1.8 : 1.45, ring.alpha);
      if (summon) this.spawnFloatingText(view.x, view.y - r - 16, "召唤", "#efa1ff", 18, 18);
    }
    spawnPickupPop(node, color, healing) {
      const ring = new Laya.Sprite();
      ring.pos(node.x, node.y);
      ring.graphics.drawCircle(0, 0, healing ? 16 : 12, "#163024", color, healing ? 3 : 2);
      ring.alpha = 0.76;
      this.fxLayer.addChild(ring);
      this.animateFx(ring, 13, 1.8, 0.76);
      node.scaleX = 0.45;
      node.scaleY = 0.45;
      let frame = 0;
      const step = () => {
        frame++;
        const t = Math.min(1, frame / 10);
        const bounce = 1 + Math.sin(t * Math.PI) * 0.22;
        node.scaleX = 0.45 + 0.55 * t * bounce;
        node.scaleY = 0.45 + 0.55 * t * bounce;
        if (frame >= 10) {
          node.scaleX = 1;
          node.scaleY = 1;
          Laya.timer.clear(node, step);
        }
      };
      Laya.timer.frameLoop(1, node, step);
    }
    spawnPickupCollect(x, y, color, label) {
      const streak = new Laya.Sprite();
      streak.pos(x, y);
      const dx = this.player.x - x;
      const dy = this.player.y - y;
      const len = Math.max(1, Math.sqrt(dx * dx + dy * dy));
      const ux = dx / len;
      const uy = dy / len;
      streak.graphics.drawLine(0, 0, ux * Math.min(48, len), uy * Math.min(48, len), color, 4);
      streak.graphics.drawCircle(0, 0, 7, color, "#f1fff6", 2);
      this.fxLayer.addChild(streak);
      let frame = 0;
      const frames = 12;
      const sx = x;
      const sy = y;
      const step = () => {
        frame++;
        const t = frame / frames;
        const eased = 1 - (1 - t) * (1 - t);
        streak.pos(sx + (this.player.x - sx) * eased, sy + (this.player.y - sy) * eased);
        streak.alpha = 1 - t * 0.7;
        streak.scaleX = 1 - t * 0.4;
        streak.scaleY = 1 - t * 0.4;
        if (frame >= frames) {
          Laya.timer.clear(streak, step);
          streak.removeSelf();
          streak.destroy(true);
          this.spawnFloatingText(this.player.x, this.player.y - 30, label, color, 17, 14);
        }
      };
      Laya.timer.frameLoop(1, streak, step);
    }
    playPlayerAttack(view) {
      var _a, _b;
      let dx = ((_a = view.targetX) != null ? _a : view.x + 1) - this.player.x;
      let dy = ((_b = view.targetY) != null ? _b : view.y) - this.player.y;
      let len = Math.sqrt(dx * dx + dy * dy);
      if (len < 1e-3) {
        dx = this.playerFacingX;
        dy = 0;
        len = 1;
      }
      this.playerAttackDirectionX = dx / len;
      this.playerAttackDirectionY = dy / len;
      if (Math.abs(this.playerAttackDirectionX) > 0.05) this.playerFacingX = this.playerAttackDirectionX < 0 ? -1 : 1;
      this.playerWeaponAngleDeg = Math.atan2(this.playerAttackDirectionY, this.playerAttackDirectionX) * 180 / Math.PI;
      this.playerWeapon.rotation = this.playerWeaponAngleDeg;
      this.playerAttackTotalFrames = view.ripe ? 12 : 8;
      this.playerAttackFrames = this.playerAttackTotalFrames;
      this.spawnMuzzleFlash(view.ripe, this.playerAttackDirectionX, this.playerAttackDirectionY);
    }
    spawnMuzzleFlash(ripe, ux, uy) {
      const flash = new Laya.Sprite();
      const offset = ripe ? 42 : 36;
      flash.pos(this.player.x + ux * offset, this.player.y + uy * offset);
      const g = flash.graphics;
      const radius = ripe ? 18 : 11;
      g.drawCircle(0, 0, radius, ripe ? "#ffb33d" : "#ff7b57", ripe ? "#ffe27b" : "#ffc0a0", ripe ? 4 : 2);
      g.drawLine(-ux * 4, -uy * 4, ux * radius * 1.9, uy * radius * 1.9, ripe ? "#fff0a0" : "#ffd0b6", ripe ? 5 : 3);
      for (let i = -1; i <= 1; i++) {
        const spread = i * 0.34;
        const sx = ux * Math.cos(spread) - uy * Math.sin(spread);
        const sy = ux * Math.sin(spread) + uy * Math.cos(spread);
        g.drawLine(sx * 4, sy * 4, sx * radius * 1.45, sy * radius * 1.45, ripe ? "#ffd760" : "#ff9072", ripe ? 3 : 2);
      }
      this.fxLayer.addChild(flash);
      this.animateFx(flash, ripe ? 9 : 6, ripe ? 1.55 : 1.32, ripe ? 0.85 : 0.65);
    }
    spawnRipeImpact(x, y) {
      this.spawnJuiceBurst(x, y, 1.55, "#ff5638");
      const shock = new Laya.Sprite();
      shock.pos(x, y);
      const g = shock.graphics;
      g.drawCircle(0, 0, 25, "#7c1d18", "#ffd25c", 5);
      g.drawCircle(0, 0, 14, "#ff5d3d", "#fff1a5", 3);
      for (let i = 0; i < 10; i++) {
        const a = i * Math.PI * 2 / 10;
        g.drawCircle(Math.cos(a) * 34, Math.sin(a) * 28, 4 + i % 2, i % 2 === 0 ? "#ff6947" : "#ffbd55");
      }
      this.fxLayer.addChild(shock);
      this.animateFx(shock, 15, 2.35, 0.88);
      this.queueShake(4, 6);
    }
    spawnEliteRewardFeedback(guarantee) {
      const strong = guarantee === "blue_all_purple_one";
      const color = strong ? "#d78cff" : "#6ebeff";
      const panel = new Laya.Sprite();
      panel.name = "EliteRewardFeedback";
      panel.pos(WORLD.designWidth / 2, 176);
      const g = panel.graphics;
      g.drawRect(-245, -27, 490, 54, "#101d19", color, 3);
      g.drawLine(-225, -17, 225, -17, strong ? "#f0b7ff" : "#a6dcff", 2);
      g.drawCircle(-210, 0, 13, strong ? "#b35ce0" : "#3f91d2", "#fff1b0", 2);
      g.drawCircle(210, 0, 13, strong ? "#b35ce0" : "#3f91d2", "#fff1b0", 2);
      panel.alpha = 0.96;
      this.fxLayer.addChild(panel);
      const label = new Laya.Text();
      label.text = strong ? "精英奖励：下次三选一全蓝，并至少出现1张紫卡" : "精英奖励：下次三选一至少出现1张蓝卡";
      label.fontSize = Laya.Browser.onMobile ? 23 : 20;
      label.bold = true;
      label.color = strong ? "#f1c0ff" : "#bce4ff";
      label.stroke = 2;
      label.strokeColor = "#1b1a24";
      label.align = "center";
      label.valign = "middle";
      label.pos(-190, -22);
      label.size(380, 44);
      panel.addChild(label);
      let frame = 0;
      const frames = 96;
      const step = () => {
        frame++;
        const t = frame / frames;
        panel.y = 176 - Math.sin(Math.min(1, t * 2) * Math.PI) * 8;
        panel.alpha = t < 0.75 ? 0.96 : 0.96 * (1 - (t - 0.75) / 0.25);
        if (frame >= frames) {
          Laya.timer.clear(panel, step);
          panel.removeSelf();
          panel.destroy(true);
        }
      };
      Laya.timer.frameLoop(1, panel, step);
      this.queueShake(strong ? 4 : 2, strong ? 6 : 4);
    }
    spawnEliteWarning(view) {
      var _a;
      const rank = ((_a = view.eliteIndex) != null ? _a : 0) + 1;
      const fx = new Laya.Sprite();
      fx.name = "EliteWarning-" + view.id;
      fx.pos(view.x, view.y);
      const g = fx.graphics;
      const color = rank >= 2 ? "#ffe06d" : "#f0b05c";
      g.drawCircle(0, 0, 30, "#4b2d18", color, 4);
      for (let i = 0; i < 10; i++) {
        const a = i * Math.PI * 2 / 10;
        const outer = 42 + i % 2 * 7;
        g.drawLine(Math.cos(a) * 18, Math.sin(a) * 18, Math.cos(a) * outer, Math.sin(a) * outer, color, 3);
      }
      this.fxLayer.addChild(fx);
      this.animateFx(fx, 20, 2.4, 0.86);
      this.showCenterCallout(
        rank >= 2 ? "强化精英暴食怪入侵！" : "精英暴食怪入侵！",
        rank >= 2 ? "#ffe681" : "#ffc26d",
        "#6a3d1b",
        rank >= 2 ? 34 : 31
      );
      this.queueShake(rank >= 2 ? 5 : 3, rank >= 2 ? 8 : 5);
    }
    spawnDirectionalHitIndicator(sourceX, sourceY) {
      let dx = sourceX - this.player.x;
      let dy = sourceY - this.player.y;
      let len = Math.sqrt(dx * dx + dy * dy);
      if (len < 1e-3) {
        dx = 0;
        dy = -1;
        len = 1;
      }
      const ux = dx / len;
      const uy = dy / len;
      const px = -uy;
      const py = ux;
      const indicator = new Laya.Sprite();
      indicator.name = "PlayerHitDirection";
      indicator.pos(this.player.x, this.player.y);
      const g = indicator.graphics;
      const inner = 31;
      const outer = 50;
      const tipX = ux * inner;
      const tipY = uy * inner;
      const baseX = ux * outer;
      const baseY = uy * outer;
      g.drawLine(baseX + px * 13, baseY + py * 13, tipX, tipY, "#ff6554", 5);
      g.drawLine(baseX - px * 13, baseY - py * 13, tipX, tipY, "#ff6554", 5);
      g.drawLine(baseX + px * 13, baseY + py * 13, baseX - px * 13, baseY - py * 13, "#ffad77", 3);
      g.drawCircle(tipX, tipY, 5, "#ff493e", "#ffd19b", 2);
      indicator.alpha = 0.92;
      this.fxLayer.addChild(indicator);
      let frame = 0;
      const frames = 18;
      const step = () => {
        frame++;
        const t = frame / frames;
        const pulse = 1 + Math.sin(t * Math.PI) * 0.18;
        indicator.scaleX = pulse;
        indicator.scaleY = pulse;
        indicator.alpha = 0.92 * (1 - t);
        if (frame >= frames) {
          Laya.timer.clear(indicator, step);
          indicator.removeSelf();
          indicator.destroy(true);
        }
      };
      Laya.timer.frameLoop(1, indicator, step);
    }
    spawnBossDashWarning() {
      const boss = this.getBossPosition();
      if (!boss) return;
      const telegraph = new Laya.Sprite();
      telegraph.pos(boss.x, boss.y);
      const g = telegraph.graphics;
      g.drawCircle(0, 0, 62, "#451512", "#ff8a50", 4);
      g.drawCircle(0, 0, 44, "#32100f", "#ffd05c", 2);
      g.drawCircle(0, 0, 30, "#521713", "#ff6947", 2);
      for (let i = 0; i < 12; i++) {
        const a = i * Math.PI * 2 / 12;
        g.drawLine(Math.cos(a) * 38, Math.sin(a) * 38, Math.cos(a) * 72, Math.sin(a) * 72, "#ff8652", 3);
      }
      telegraph.alpha = 0.72;
      this.fxLayer.addChild(telegraph);
      let frame = 0;
      const frames = 46;
      const step = () => {
        frame++;
        const t = frame / frames;
        const pulse = 0.92 + 0.12 * Math.sin(frame * 0.8);
        telegraph.scaleX = pulse;
        telegraph.scaleY = pulse;
        telegraph.alpha = Math.max(0, 0.78 * (1 - Math.max(0, t - 0.72) / 0.28));
        telegraph.rotation += 3.2;
        if (frame >= frames) {
          Laya.timer.clear(telegraph, step);
          telegraph.removeSelf();
          telegraph.destroy(true);
        }
      };
      Laya.timer.frameLoop(1, telegraph, step);
      this.showCenterCallout("暴食王蓄力冲撞！", "#ffaf62", "#6e2618", 32);
    }
    spawnBossDashStart() {
      const boss = this.getBossPosition();
      if (!boss) return;
      const shock = new Laya.Sprite();
      shock.pos(boss.x, boss.y);
      const g = shock.graphics;
      g.drawCircle(0, 0, 30, "#5f1713", "#ffe06d", 6);
      g.drawCircle(0, 0, 18, "#ff5b3b", "#fff2a1", 3);
      for (let i = 0; i < 14; i++) {
        const a = i * Math.PI * 2 / 14;
        const length = 44 + i % 3 * 10;
        g.drawLine(Math.cos(a) * 18, Math.sin(a) * 18, Math.cos(a) * length, Math.sin(a) * length, i % 2 === 0 ? "#ff7448" : "#ffd65d", 4);
      }
      this.fxLayer.addChild(shock);
      this.animateFx(shock, 18, 3, 0.92);
      this.queueShake(9, 14);
    }
    spawnBossSummonWarning() {
      const boss = this.getBossPosition();
      if (!boss) return;
      const portal = new Laya.Sprite();
      portal.name = "BossSummonTelegraph";
      portal.pos(boss.x, boss.y);
      const g = portal.graphics;
      g.drawCircle(0, 0, 58, "#271235", "#d47cff", 4);
      g.drawCircle(0, 0, 42, null, "#8f55d6", 3);
      g.drawCircle(0, 0, 26, null, "#f0b6ff", 2);
      for (let i = 0; i < 8; i++) {
        const a = i * Math.PI * 2 / 8;
        g.drawCircle(Math.cos(a) * 49, Math.sin(a) * 49, 5, i % 2 === 0 ? "#e8a0ff" : "#8d5bca");
        g.drawLine(
          Math.cos(a) * 32,
          Math.sin(a) * 32,
          Math.cos(a + 0.38) * 50,
          Math.sin(a + 0.38) * 50,
          "#c778ef",
          2
        );
      }
      const scale = Math.min(WORLD.designWidth / WORLD.width, WORLD.designHeight / WORLD.height);
      const offset = scale * 0.8;
      const landingOffsets = [
        [offset, 0],
        [-offset, 0],
        [0, offset],
        [0, -offset]
      ];
      for (let i = 0; i < landingOffsets.length; i++) {
        const [x, y] = landingOffsets[i];
        g.drawCircle(x, y, 14, "#321642", "#ec9dff", 3);
        g.drawCircle(x, y, 8, null, "#b96ee0", 2);
        g.drawLine(x - 6, y, x + 6, y, "#f2c3ff", 1.5);
        g.drawLine(x, y - 6, x, y + 6, "#f2c3ff", 1.5);
      }
      portal.alpha = 0.82;
      this.fxLayer.addChild(portal);
      let frame = 0;
      const frames = 54;
      const step = () => {
        frame++;
        const t = frame / frames;
        const currentBoss = this.getBossPosition();
        if (currentBoss) portal.pos(currentBoss.x, currentBoss.y);
        portal.rotation += 4.5;
        const pulse = 0.92 + Math.sin(frame * 0.55) * 0.1;
        portal.scaleX = pulse;
        portal.scaleY = pulse;
        portal.alpha = Math.max(0, 0.82 * (1 - Math.max(0, t - 0.72) / 0.28));
        if (frame >= frames) {
          Laya.timer.clear(portal, step);
          portal.removeSelf();
          portal.destroy(true);
        }
      };
      Laya.timer.frameLoop(1, portal, step);
      this.showCenterCallout("暴食王正在召唤援军！", "#e5a6ff", "#54216a", 31);
      this.queueShake(3, 6);
    }
    getBossPosition() {
      if (!this.currentBossId) return null;
      const node = this.enemyNodes.get(this.currentBossId);
      if (!node) return null;
      return { x: node.x, y: node.y };
    }
    startAmbientAnimation() {
      Laya.timer.frameLoop(1, this, () => {
        var _a, _b, _c;
        this.ambientFrame++;
        if (this.bossCountdownActive) {
          const pulse = 1 + (Math.sin(this.ambientFrame * (this.bossCountdownSeconds <= 5 ? 0.34 : 0.18)) + 1) * (this.bossCountdownSeconds <= 5 ? 0.055 : 0.028);
          this.timerText.scaleX = pulse;
          this.timerText.scaleY = pulse;
        } else {
          this.timerText.scaleX = 1;
          this.timerText.scaleY = 1;
        }
        if (this.ripeAura.visible) {
          const ripePulse = 0.94 + (Math.sin(this.ambientFrame * 0.18) + 1) * 0.08;
          this.ripeAura.scaleX = ripePulse;
          this.ripeAura.scaleY = ripePulse;
          this.ripeAura.alpha = 0.48 + (Math.sin(this.ambientFrame * 0.15) + 1) * 0.2;
        } else {
          this.ripeAura.scaleX = 1;
          this.ripeAura.scaleY = 1;
        }
        const facing = this.playerFacingX < 0 ? -1 : 1;
        if (this.playerAttackFrames > 0) {
          const total = Math.max(1, this.playerAttackTotalFrames);
          const progress = 1 - Math.min(1, this.playerAttackFrames / total);
          const kick = Math.sin(Math.PI * progress);
          this.player.scaleX = facing * (1 + kick * 0.08);
          this.player.scaleY = 1 - kick * 0.07;
          this.player.rotation = this.playerAttackDirectionY * 3.2 * kick;
          this.player.pivotX = this.playerAttackDirectionX * 1.8 * kick;
          this.player.pivotY = this.playerAttackDirectionY * 1.8 * kick;
          this.playerWeapon.rotation = this.playerWeaponAngleDeg;
          this.playerWeapon.pivotX = kick * (this.playerWeaponCharged ? 9 : 6);
          this.playerWeapon.scaleX = 1 + kick * (this.playerWeaponCharged ? 0.08 : 0.04);
          this.playerWeapon.scaleY = 1 - kick * 0.035;
          this.playerAttackFrames--;
        } else if (this.playerMoveMagnitude > 0.04) {
          this.playerWeapon.rotation = this.playerWeaponAngleDeg;
          this.playerWeapon.pivotX = 0;
          this.playerWeapon.scaleX = 1;
          this.playerWeapon.scaleY = 1;
          const step = Math.sin(this.ambientFrame * 0.46);
          const squash = Math.abs(step) * 0.035 * this.playerMoveMagnitude;
          this.player.scaleX = facing * (1 + squash);
          this.player.scaleY = 1 - squash;
          this.player.rotation = step * 2.2 * this.playerMoveMagnitude;
          this.player.pivotX = 0;
          this.player.pivotY = Math.max(0, step) * 2.2 * this.playerMoveMagnitude;
          if (this.playerMoveMagnitude > 0.42 && this.ambientFrame - this.lastMoveDustFrame >= 10) {
            this.lastMoveDustFrame = this.ambientFrame;
            this.spawnMoveDust();
          }
          this.playerMoveMagnitude *= 0.9;
        } else {
          this.playerWeapon.rotation = this.playerWeaponAngleDeg;
          this.playerWeapon.pivotX = 0;
          this.playerWeapon.scaleX = 1;
          this.playerWeapon.scaleY = 1;
          this.player.scaleX = facing;
          this.player.scaleY = 1;
          this.player.rotation = 0;
          this.player.pivotX = 0;
          this.player.pivotY = 0;
          this.playerMoveMagnitude = 0;
        }
        for (const [id, node] of this.enemyNodes) {
          const phase = this.ambientFrame * 0.28 + hashString(id) % 23 * 0.41;
          const moving = (_a = this.enemyMoving.get(id)) != null ? _a : false;
          const action = (_b = this.enemyActionProgress.get(id)) != null ? _b : 0;
          const kind = (_c = this.enemyKinds.get(id)) != null ? _c : "normal";
          if (moving) {
            const strength = kind === "boss" ? 1.2 : kind === "glutton" ? 1.8 : 2.8;
            node.rotation = Math.sin(phase) * strength;
            node.pivotY = (Math.sin(phase * 1.5) + 1) * (kind === "boss" ? 0.8 : 1.35);
          } else if (action > 0) {
            const chew = Math.sin(phase * 2.2);
            node.rotation = chew * (kind === "boss" ? 1.5 : 2.3);
            node.pivotY = Math.abs(chew) * 1.8;
          } else {
            node.rotation = 0;
            node.pivotY = 0;
          }
        }
        for (const [fruitId, node] of this.fruitThreatNodes) {
          const phase = this.ambientFrame * 0.16 + fruitId * 0.71;
          node.alpha = 0.58 + (Math.sin(phase) + 1) * 0.18;
          const scale = 0.96 + Math.sin(phase * 0.8) * 0.05;
          node.scaleX = scale;
          node.scaleY = scale;
        }
        for (const [chunkId, node] of this.juiceChunkNodes) {
          const phase = this.ambientFrame * 0.08 + chunkId * 0.73;
          node.alpha = 0.52 + Math.sin(phase) * 0.055;
        }
        for (const [id, node] of this.expOrbNodes) {
          const phase = this.ambientFrame * 0.12 + hashString(id) % 19 * 0.31;
          node.rotation = Math.sin(phase * 0.7) * 10;
          node.alpha = 0.86 + Math.sin(phase) * 0.12;
        }
        for (const [id, node] of this.healOrbNodes) {
          const phase = this.ambientFrame * 0.1 + hashString(id) % 13 * 0.27;
          node.alpha = 0.88 + Math.sin(phase) * 0.1;
        }
        for (let i = 0; i < this.ambientDecorNodes.length; i++) {
          const node = this.ambientDecorNodes[i];
          const phase = this.ambientFrame * 0.035 + i * 0.82;
          node.alpha = 0.28 + (Math.sin(phase) + 1) * 0.24;
          node.scaleX = 0.86 + Math.sin(phase * 0.7) * 0.16;
          node.scaleY = node.scaleX;
        }
      });
    }
    spawnDeathBurst(x, y, intensity, kind) {
      const baseColor = kind === "absorber" ? "#43caa0" : kind === "thief" ? "#b768e4" : "#ef4435";
      this.spawnJuiceBurst(x, y, intensity, baseColor);
      const ring = new Laya.Sprite();
      ring.pos(x, y);
      const rg = ring.graphics;
      const radius = 18 * intensity;
      rg.drawCircle(0, 0, radius, "#41201b", kind === "absorber" ? "#8ff0c9" : "#ffca6b", 3);
      if (kind === "armor") {
        for (let i = 0; i < 6; i++) {
          const a = i * Math.PI * 2 / 6;
          rg.drawLine(Math.cos(a) * 10, Math.sin(a) * 10, Math.cos(a) * 31, Math.sin(a) * 31, "#c8d4df", 4);
        }
      } else if (kind === "thief") {
        for (let i = 0; i < 7; i++) {
          const a = i * Math.PI * 2 / 7 + 0.25;
          rg.drawCircle(Math.cos(a) * 26, Math.sin(a) * 22, 5, "#a85ad8");
        }
      } else if (kind === "absorber") {
        rg.drawCircle(0, 0, radius * 0.62, "#1f7d67", "#9bf4d0", 3);
        rg.drawCircle(0, 0, radius * 0.34, "#47c79f", "#d4fff0", 2);
      } else if (kind === "glutton") {
        rg.drawCircle(0, 0, radius * 0.7, "#982f29", "#ff856a", 4);
        rg.drawLine(-radius * 0.45, 0, radius * 0.45, 0, "#4b1211", 6);
      } else if (kind === "boss") {
        rg.drawCircle(0, 0, radius * 0.72, "#741918", "#ffe070", 6);
        rg.drawCircle(0, 0, radius * 0.42, "#ff523b", "#fff1a0", 4);
        rg.drawLine(-radius, 0, radius, 0, "#ffb44f", 4);
        rg.drawLine(0, -radius, 0, radius, "#ffb44f", 4);
      }
      ring.alpha = 0.82;
      this.fxLayer.addChild(ring);
      this.animateFx(ring, kind === "boss" ? 28 : 17, kind === "boss" ? 3 : 2.15, 0.82);
      if (kind === "glutton") this.queueShake(4, 5);
      if (kind === "boss") this.queueShake(10, 18);
    }
    animateFx(node, frames, endScale, startAlpha) {
      let frame = 0;
      node.alpha = startAlpha;
      const step = () => {
        frame++;
        const t = Math.min(1, frame / frames);
        const scale = 1 + (endScale - 1) * t;
        node.scaleX = scale;
        node.scaleY = scale;
        node.alpha = startAlpha * (1 - t);
        node.rotation += 2.5;
        if (frame >= frames) {
          Laya.timer.clear(node, step);
          node.removeSelf();
          node.destroy(true);
        }
      };
      Laya.timer.frameLoop(1, node, step);
    }
    spawnUltimateBurst() {
      const flash = new Laya.Sprite();
      flash.graphics.drawRect(0, 0, WORLD.designWidth, WORLD.designHeight, "#ff4b36");
      flash.alpha = 0.32;
      this.fxLayer.addChild(flash);
      let frame = 0;
      const fade = () => {
        frame++;
        flash.alpha = Math.max(0, 0.32 * (1 - frame / 10));
        if (frame >= 10) {
          Laya.timer.clear(flash, fade);
          flash.removeSelf();
          flash.destroy(true);
        }
      };
      Laya.timer.frameLoop(1, flash, fade);
      this.queueShake(8, 12);
      const center = new Laya.Sprite();
      center.pos(WORLD.designWidth / 2, WORLD.designHeight / 2);
      center.graphics.drawCircle(0, 0, 76, "#8b1918", "#ffd361", 7);
      center.graphics.drawCircle(0, 0, 45, "#ff5138", "#fff0a5", 4);
      this.fxLayer.addChild(center);
      this.animateFx(center, 24, 5.6, 0.88);
      let count = 0;
      for (const samples of this.juiceSamples.values()) {
        for (const point of samples) {
          this.spawnJuiceBurst(point.x, point.y, 1.1 + count % 3 * 0.15, "#ff4a34");
          count++;
          if (count >= 24) return;
        }
      }
    }
    spawnNoJuicePing() {
      const ping = new Laya.Sprite();
      ping.name = "UltimateNoJuicePing";
      ping.pos(WORLD.designWidth - 99, WORLD.designHeight - 99);
      ping.graphics.drawCircle(0, 0, 52, "#43331f", "#e0b765", 4);
      ping.graphics.drawLine(-17, -17, 17, 17, "#ffe0a1", 4);
      ping.graphics.drawLine(17, -17, -17, 17, "#ffe0a1", 4);
      this.uiLayer.addChild(ping);
      this.animateFx(ping, 14, 1.28, 0.72);
      this.showCenterCallout("爆爆汁需要场上存在果汁", "#ffd27a", "#6a421d", 28);
    }
    spawnRipeReadyFx() {
      const ring = new Laya.Sprite();
      ring.name = "RipeReadyFx";
      ring.pos(this.player.x, this.player.y);
      ring.graphics.drawCircle(0, 0, 25, "#7a341d", "#ffd95b", 4);
      ring.graphics.drawCircle(0, 0, 38, null, "#ff944d", 3);
      this.fxLayer.addChild(ring);
      this.animateFx(ring, 20, 2.3, 0.86);
      this.spawnFloatingText(this.player.x, this.player.y - 46, "熟果 READY", "#ffe36f", 23, 26);
    }
    spawnChoiceAppliedFeedback(choice) {
      var _a, _b, _c, _d;
      const entries = Object.entries(choice.increments).filter(([, value]) => Math.abs(value) > 1e-9);
      const [parameter, delta] = (_a = entries[0]) != null ? _a : ["强化", 0];
      const unit = (_b = VALUE_UNITS[parameter]) != null ? _b : "";
      const total = choice.finalValues[parameter];
      const sign = delta > 0 ? "+" : "";
      const qualityColor = (_c = QUALITY_COLORS[choice.quality]) != null ? _c : "#fff0b0";
      const message = ((_d = SKILL_NAMES[choice.skillId]) != null ? _d : choice.skillId) + " ×" + choice.count + "  " + parameter + " " + sign + formatSkillValue(delta) + unit + (total === void 0 ? "" : "  · 总计 " + formatSkillValue(total) + unit);
      const box = new Laya.Sprite();
      box.name = "ChoiceAppliedFeedback";
      box.pos(WORLD.designWidth / 2 - 300, 188);
      box.graphics.drawRect(0, 0, 600, 58, "#14251b", qualityColor, 3);
      box.graphics.drawLine(18, 8, 582, 8, qualityColor, 2);
      this.uiLayer.addChild(box);
      const label = new Laya.Text();
      label.text = "强化生效： " + message;
      label.fontSize = Laya.Browser.onMobile ? 21 : 19;
      label.bold = true;
      label.color = qualityColor;
      label.stroke = 2;
      label.strokeColor = "#251c15";
      label.align = "center";
      label.valign = "middle";
      label.size(600, 58);
      box.addChild(label);
      let frame = 0;
      const frames = 78;
      const step = () => {
        frame++;
        const t = frame / frames;
        if (frame <= 8) {
          const scale = 0.9 + 0.1 * (frame / 8);
          box.scaleX = scale;
          box.scaleY = scale;
        }
        if (t > 0.72) box.alpha = Math.max(0, 1 - (t - 0.72) / 0.28);
        if (frame >= frames) {
          Laya.timer.clear(box, step);
          box.removeSelf();
          box.destroy(true);
        }
      };
      Laya.timer.frameLoop(1, box, step);
      this.pulsePlayer(qualityColor);
    }
    spawnCooldownPing() {
      const ping = new Laya.Sprite();
      ping.pos(WORLD.designWidth - 99, WORLD.designHeight - 99);
      ping.graphics.drawCircle(0, 0, 52, "#3c3029", "#c99c6c", 3);
      this.uiLayer.addChild(ping);
      this.animateFx(ping, 10, 1.18, 0.55);
    }
    showBossWarning() {
      const banner = new Laya.Sprite();
      banner.pos(WORLD.designWidth / 2 - 270, 152);
      banner.graphics.drawRect(0, 4, 540, 86, "#1b0d0c");
      banner.graphics.drawRect(0, 0, 540, 82, "#5b1918", "#f0b85f", 4);
      banner.graphics.drawLine(18, 10, 522, 10, "#9d372c", 2);
      const title = new Laya.Text();
      title.text = "暴食王入侵";
      title.fontSize = 40;
      title.bold = true;
      title.color = "#ffe0a1";
      title.stroke = 3;
      title.strokeColor = "#52100f";
      title.align = "center";
      title.valign = "middle";
      title.size(540, 82);
      banner.addChild(title);
      this.uiLayer.addChild(banner);
      Laya.timer.once(1800, banner, () => {
        banner.removeSelf();
        banner.destroy(true);
      });
    }
    spawnDamageNumber(id, x, y, damage, heavy) {
      if (this.activeDamageTexts >= 28) return;
      const hash = hashString(id + ":" + Math.round(damage));
      const offsetX = (hash % 17 - 8) * 1.2;
      this.spawnFloatingText(
        x + offsetX,
        y,
        String(Math.max(1, Math.round(damage))),
        heavy ? "#ffd25f" : "#fff1d5",
        heavy ? 30 : 22,
        heavy ? 26 : 20,
        true
      );
    }
    spawnFloatingText(x, y, value, color, fontSize, frames, countAsDamage = false) {
      const text = new Laya.Text();
      text.text = value;
      text.fontSize = fontSize;
      text.bold = true;
      text.color = color;
      text.stroke = 3;
      text.strokeColor = "#4b1714";
      text.align = "center";
      text.pos(x - 70, y - 18);
      text.size(140, 42);
      this.fxLayer.addChild(text);
      if (countAsDamage) this.activeDamageTexts++;
      let frame = 0;
      const startY = text.y;
      const step = () => {
        frame++;
        const t = Math.min(1, frame / frames);
        text.y = startY - 34 * t;
        text.alpha = t < 0.55 ? 1 : Math.max(0, 1 - (t - 0.55) / 0.45);
        const scale = 1 + (countAsDamage ? 0.18 : 0.08) * Math.sin(Math.PI * Math.min(1, t * 1.5));
        text.scaleX = scale;
        text.scaleY = scale;
        if (frame >= frames) {
          Laya.timer.clear(text, step);
          text.removeSelf();
          text.destroy(true);
          if (countAsDamage) this.activeDamageTexts = Math.max(0, this.activeDamageTexts - 1);
        }
      };
      Laya.timer.frameLoop(1, text, step);
    }
    pulseEnemy(node, heavy) {
      let frame = 0;
      const frames = heavy ? 8 : 5;
      const baseScale = heavy ? 1.16 : 1.08;
      const step = () => {
        frame++;
        const t = frame / frames;
        const scale = 1 + (baseScale - 1) * Math.sin(Math.PI * t);
        node.scaleX = scale;
        node.scaleY = scale;
        if (frame >= frames) {
          Laya.timer.clear(node, step);
          node.scaleX = 1;
          node.scaleY = 1;
        }
      };
      Laya.timer.clear(node, step);
      Laya.timer.frameLoop(1, node, step);
    }
    pulsePlayer(color) {
      const ring = new Laya.Sprite();
      ring.pos(this.player.x, this.player.y);
      ring.graphics.drawCircle(0, 0, 24, "#391b18", color, 4);
      this.fxLayer.addChild(ring);
      this.animateFx(ring, 10, 1.7, 0.72);
    }
    spawnDamageVignette() {
      const overlay = new Laya.Sprite();
      const g = overlay.graphics;
      g.drawRect(0, 0, WORLD.designWidth, 16, "#b92f2b");
      g.drawRect(0, WORLD.designHeight - 16, WORLD.designWidth, 16, "#b92f2b");
      g.drawRect(0, 0, 16, WORLD.designHeight, "#b92f2b");
      g.drawRect(WORLD.designWidth - 16, 0, 16, WORLD.designHeight, "#b92f2b");
      overlay.alpha = 0.62;
      this.uiLayer.addChild(overlay);
      let frame = 0;
      const step = () => {
        frame++;
        overlay.alpha = Math.max(0, 0.62 * (1 - frame / 10));
        if (frame >= 10) {
          Laya.timer.clear(overlay, step);
          overlay.removeSelf();
          overlay.destroy(true);
        }
      };
      Laya.timer.frameLoop(1, overlay, step);
    }
    handleFruitTransition(fruit, previous) {
      if (previous === "IN_GARDEN" && fruit.ownership === "CARRIED") {
        this.spawnFloatingText(fruit.x, fruit.y - 30, "灵果被偷！", "#ffb06f", 23, 28);
        this.showCenterCallout("有怪物偷走了灵果！", "#ffad65", "#6c2d19", 30);
        if (fruit.carriedBy) {
          const carrier = this.enemyNodes.get(fruit.carriedBy);
          if (carrier) this.spawnFruitTransfer(fruit.x, fruit.y, carrier.x, carrier.y, false);
        }
        this.queueShake(3, 6);
        return;
      }
      if (fruit.ownership === "LOST") {
        this.spawnFloatingText(fruit.x, fruit.y - 30, "丢失", "#ff725f", 25, 30);
        this.showCenterCallout("灵果丢失！", "#ff725f", "#6b1818", 38);
        this.queueShake(6, 10);
        return;
      }
      if (previous === "CARRIED" && fruit.ownership === "IN_GARDEN") {
        this.spawnFloatingText(fruit.x, fruit.y - 30, "灵果归位", "#9bed85", 22, 24);
        this.spawnFruitReturnBurst(fruit.x, fruit.y);
      }
    }
    spawnFruitTransfer(fromX, fromY, toX, toY, returning) {
      const fruit = new Laya.Sprite();
      fruit.pos(fromX, fromY);
      fruit.graphics.drawCircle(0, 0, 9, "#6d3b20", "#2e1b12", 1.5);
      fruit.graphics.drawCircle(0, -1, 7, returning ? "#6dda64" : "#f2533a", "#ffd96b", 1.5);
      fruit.graphics.drawLine(-3, -7, 0, -11, "#68ba4d", 2);
      fruit.graphics.drawLine(3, -7, 0, -11, "#68ba4d", 2);
      this.fxLayer.addChild(fruit);
      let frame = 0;
      const frames = 18;
      const step = () => {
        frame++;
        const t = frame / frames;
        const eased = 1 - (1 - t) * (1 - t);
        const arc = Math.sin(t * Math.PI) * 34;
        fruit.pos(fromX + (toX - fromX) * eased, fromY + (toY - fromY) * eased - arc);
        fruit.rotation += 16;
        fruit.scaleX = 1 + Math.sin(t * Math.PI) * 0.22;
        fruit.scaleY = fruit.scaleX;
        if (frame >= frames) {
          Laya.timer.clear(fruit, step);
          fruit.removeSelf();
          fruit.destroy(true);
          const ring = new Laya.Sprite();
          ring.pos(toX, toY);
          ring.graphics.drawCircle(0, 0, 14, "#54231b", returning ? "#8fee7b" : "#ffad61", 3);
          this.fxLayer.addChild(ring);
          this.animateFx(ring, 10, 1.7, 0.72);
        }
      };
      Laya.timer.frameLoop(1, fruit, step);
    }
    spawnFruitReturnBurst(x, y) {
      const ring = new Laya.Sprite();
      ring.pos(x, y);
      const g = ring.graphics;
      g.drawCircle(0, 0, 18, "#1d4327", "#a5ef86", 4);
      for (let i = 0; i < 8; i++) {
        const a = i * Math.PI * 2 / 8;
        g.drawCircle(Math.cos(a) * 22, Math.sin(a) * 18, 3, "#c9ff9d");
      }
      this.fxLayer.addChild(ring);
      this.animateFx(ring, 18, 2.15, 0.82);
    }
    upsertFruitThreat(fruit) {
      var _a;
      let node = this.fruitThreatNodes.get(fruit.fruitId);
      if (!node) {
        node = new Laya.Sprite();
        node.name = "FruitThreat-" + fruit.fruitId;
        this.fruitThreatNodes.set(fruit.fruitId, node);
        this.threatLayer.addChild(node);
      }
      node.pos(fruit.x, fruit.y);
      node.graphics.clear();
      const action = fruit.reservedBy ? (_a = this.enemyActionProgress.get(fruit.reservedBy)) != null ? _a : 0 : 0;
      const danger = action >= 0.8;
      node.graphics.drawCircle(0, 0, 25, null, danger ? "#ff604d" : "#ff9d5c", danger ? 3.5 : 2.5);
      node.graphics.drawCircle(0, 0, 20, null, danger ? "#ffd36b" : "#ffd06b", 1.5);
      const litTicks = Math.floor(Math.max(0, Math.min(1, action)) * 8);
      for (let i = 0; i < 8; i++) {
        const a = -Math.PI / 2 + i * Math.PI * 2 / 8;
        const x = Math.cos(a) * 31;
        const y = Math.sin(a) * 31;
        node.graphics.drawCircle(
          x,
          y,
          i < litTicks ? 3.6 : 2.3,
          i < litTicks ? danger ? "#ff5a45" : "#ffbb62" : "#644935",
          i < litTicks ? "#ffe18b" : "#8a6648",
          1
        );
      }
      if (danger) {
        node.graphics.drawLine(-12, -34, -5, -41, "#ff7158", 3);
        node.graphics.drawLine(12, -34, 5, -41, "#ff7158", 3);
      }
      const carrier = fruit.reservedBy ? this.enemyNodes.get(fruit.reservedBy) : null;
      if (carrier) {
        const dx = carrier.x - fruit.x;
        const dy = carrier.y - fruit.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        if (length > 1) {
          const ux = dx / length;
          const uy = dy / length;
          const segment = 10;
          const gap = 7;
          for (let d = 27; d < Math.max(27, length - 18); d += segment + gap) {
            const start = d;
            const end = Math.min(length - 18, d + segment);
            node.graphics.drawLine(
              ux * start,
              uy * start,
              ux * end,
              uy * end,
              "#ff9d63",
              2
            );
          }
        }
      }
    }
    barrierCenter(side) {
      const scale = Math.min(WORLD.designWidth / WORLD.width, WORLD.designHeight / WORLD.height);
      const cx = WORLD.designWidth / 2;
      const cy = WORLD.designHeight / 2;
      const half = WORLD.barrierHalfExtent * scale;
      if (side === "top") return { x: cx, y: cy - half };
      if (side === "bottom") return { x: cx, y: cy + half };
      if (side === "left") return { x: cx - half, y: cy };
      return { x: cx + half, y: cy };
    }
    spawnBarrierHit(side, damageFraction, broken) {
      const center = this.barrierCenter(side);
      const fx = new Laya.Sprite();
      fx.name = "BarrierImpact-" + side;
      fx.pos(center.x, center.y);
      const g = fx.graphics;
      const horizontal = side === "top" || side === "bottom";
      const intensity = broken ? 1.8 : Math.min(1.4, 0.7 + damageFraction * 4);
      g.drawCircle(0, 0, 12 * intensity, "#5c351e", broken ? "#ffd06a" : "#d89b58", broken ? 4 : 2);
      for (let i = 0; i < (broken ? 12 : 7); i++) {
        const a = i * Math.PI * 2 / (broken ? 12 : 7) + (horizontal ? 0 : 0.2);
        const d1 = 8 + i % 3 * 3;
        const d2 = 24 + i % 4 * 6;
        const x1 = Math.cos(a) * d1;
        const y1 = Math.sin(a) * d1;
        const x2 = Math.cos(a) * d2;
        const y2 = Math.sin(a) * d2;
        g.drawLine(x1, y1, x2, y2, i % 2 === 0 ? "#c98342" : "#f0b867", broken ? 4 : 2.5);
        g.drawRect(x2 - 2, y2 - 1.5, 5, 3, i % 2 === 0 ? "#8a532f" : "#c17a42");
      }
      this.fxLayer.addChild(fx);
      this.animateFx(fx, broken ? 24 : 14, broken ? 2.4 : 1.6, broken ? 0.92 : 0.72);
      this.queueShake(broken ? 7 : 2.5, broken ? 12 : 4);
      if (broken) this.showCenterCallout("栅栏被撞破！", "#ffbc68", "#6a361c", 30);
    }
    spawnBarrierStateFx(side, state) {
      const center = this.barrierCenter(side);
      const fx = new Laya.Sprite();
      fx.name = "BarrierState-" + side + "-" + state;
      fx.pos(center.x, center.y);
      const g = fx.graphics;
      const rebuilding = state === "REBUILDING";
      const color = rebuilding ? "#f0b45e" : "#8eee78";
      const edge = rebuilding ? "#765029" : "#356f3b";
      g.drawCircle(0, 0, rebuilding ? 18 : 22, "#24301f", color, 3);
      for (let i = 0; i < 8; i++) {
        const a = i * Math.PI * 2 / 8;
        const inner = rebuilding ? 12 : 14;
        const outer = rebuilding ? 27 : 34;
        g.drawLine(
          Math.cos(a) * inner,
          Math.sin(a) * inner,
          Math.cos(a) * outer,
          Math.sin(a) * outer,
          i % 2 === 0 ? color : edge,
          rebuilding ? 2.5 : 3
        );
      }
      if (rebuilding) {
        g.drawRect(-9, -3, 18, 6, "#b9793d", "#59381f", 1);
        g.drawLine(-5, -9, 6, 7, "#e5c08a", 3);
      } else {
        g.drawLine(-9, 0, -2, 8, "#dcffd2", 4);
        g.drawLine(-2, 8, 11, -9, "#dcffd2", 4);
      }
      this.fxLayer.addChild(fx);
      this.animateFx(fx, rebuilding ? 20 : 18, rebuilding ? 1.8 : 2.2, 0.82);
      this.spawnFloatingText(
        center.x,
        center.y - 26,
        rebuilding ? "重建中" : "栅栏恢复",
        color,
        rebuilding ? 17 : 19,
        20
      );
    }
    spawnMoveDust() {
      const dust = new Laya.Sprite();
      dust.pos(this.player.x - this.playerFacingX * 8, this.player.y + 16);
      const g = dust.graphics;
      g.drawCircle(-5, 2, 5, "#6f7954");
      g.drawCircle(2, 0, 4, "#8a8d62");
      g.drawCircle(7, 3, 3, "#596d49");
      dust.alpha = 0.42;
      this.fxLayer.addChild(dust);
      this.animateFx(dust, 14, 1.6, 0.42);
    }
    showCenterCallout(message, color, border, fontSize) {
      const box = new Laya.Sprite();
      const width = 520;
      const height = 68;
      box.pos(WORLD.designWidth / 2 - width / 2, 142);
      box.graphics.drawRect(6, 7, width, height, "#08120d");
      box.graphics.drawRect(0, 0, width, height, "#203528", border, 3);
      box.graphics.drawLine(16, 8, width - 16, 8, color, 2);
      const text = new Laya.Text();
      text.text = message;
      text.fontSize = fontSize;
      text.bold = true;
      text.color = color;
      text.stroke = 2;
      text.strokeColor = "#351b17";
      text.align = "center";
      text.valign = "middle";
      text.size(width, height);
      box.addChild(text);
      this.uiLayer.addChild(box);
      let frame = 0;
      const frames = 64;
      const step = () => {
        frame++;
        const t = frame / frames;
        if (frame <= 8) {
          const scale = 0.86 + 0.14 * (frame / 8);
          box.scaleX = scale;
          box.scaleY = scale;
          box.alpha = frame / 8;
        } else if (t > 0.72) {
          box.alpha = Math.max(0, 1 - (t - 0.72) / 0.28);
        }
        if (frame >= frames) {
          Laya.timer.clear(box, step);
          box.removeSelf();
          box.destroy(true);
        }
      };
      Laya.timer.frameLoop(1, box, step);
    }
    spawnLevelBurst() {
      const x = this.player.x;
      const y = this.player.y;
      for (let i = 0; i < 3; i++) {
        const ring = new Laya.Sprite();
        ring.pos(x, y);
        ring.graphics.drawCircle(0, 0, 20 + i * 8, "#315130", i % 2 === 0 ? "#ffe36f" : "#8be47c", 3);
        ring.alpha = 0.7 - i * 0.12;
        this.fxLayer.addChild(ring);
        this.animateFx(ring, 18 + i * 4, 2.1 + i * 0.3, ring.alpha);
      }
    }
    pulseUltimateReady() {
      const ring = new Laya.Sprite();
      ring.pos(WORLD.designWidth - 99, WORLD.designHeight - 99);
      ring.graphics.drawCircle(0, 0, 62, "#5d251c", "#ffe16a", 5);
      this.uiLayer.addChild(ring);
      this.animateFx(ring, 24, 1.75, 0.9);
      this.showCenterCallout("爆爆汁已就绪！", "#ffe171", "#7d3d1d", 30);
    }
    queueShake(strength, frames) {
      this.shakeStrength = Math.max(this.shakeStrength, strength);
      this.shakeFrames = Math.max(this.shakeFrames, frames);
    }
    updateScreenShake() {
      if (this.shakeFrames <= 0) {
        this.worldLayer.pos(0, 0);
        this.juiceLayer.pos(0, 0);
        this.entityLayer.pos(0, 0);
        this.fxLayer.pos(0, 0);
        this.shakeStrength = 0;
        return;
      }
      const patternX = [1, -1, 1, -1, 0, 1, -1, 0];
      const patternY = [-1, 1, 0, -1, 1, 0, 1, -1];
      const index = this.shakePhase % patternX.length;
      const dx = patternX[index] * this.shakeStrength;
      const dy = patternY[index] * this.shakeStrength;
      this.worldLayer.pos(dx, dy);
      this.juiceLayer.pos(dx, dy);
      this.entityLayer.pos(dx, dy);
      this.fxLayer.pos(dx, dy);
      this.shakePhase++;
      this.shakeFrames--;
    }
    showResult(hud) {
      this.resultLayer.removeChildren(0, 2147483647, true);
      this.resultLayer.graphics.clear();
      this.resultLayer.visible = true;
      this.resultLayer.alpha = 0.98;
      this.resultLayer.graphics.drawRect(0, 0, WORLD.designWidth, WORLD.designHeight, "#07150f");
      const won = hud.resultReason === "VICTORY";
      const panelX = 250;
      const panelY = 132;
      const panelW = 780;
      const panelH = 470;
      this.resultLayer.graphics.drawRect(panelX + 10, panelY + 12, panelW, panelH, "#06110c");
      this.resultLayer.graphics.drawRect(panelX, panelY, panelW, panelH, won ? "#244c31" : "#452322", won ? "#d7b861" : "#d77b65", 5);
      this.resultLayer.graphics.drawRect(panelX + 16, panelY + 16, panelW - 32, panelH - 32, "#173326", "#668b58", 2);
      const medal = new Laya.Sprite();
      medal.pos(WORLD.designWidth / 2, panelY + 72);
      medal.graphics.drawCircle(0, 0, 50, won ? "#e0ad42" : "#8e4c44", "#fff0a4", 4);
      medal.graphics.drawCircle(0, 0, 37, won ? "#f7d36f" : "#b26155");
      medal.graphics.drawCircle(-10, -10, 9, won ? "#fff1a9" : "#d99183");
      medal.graphics.drawLine(-17, 48, -35, 82, "#c94735", 10);
      medal.graphics.drawLine(17, 48, 35, 82, "#d9a33f", 10);
      this.resultLayer.addChild(medal);
      const title = new Laya.Text();
      title.name = "ResultTitle";
      title.text = won ? "果园守护成功！" : "果园守护失败";
      title.fontSize = 50;
      title.bold = true;
      title.color = won ? "#ffe28b" : "#ff9d87";
      title.stroke = 3;
      title.strokeColor = won ? "#5f481f" : "#5e1a17";
      title.align = "center";
      title.pos(panelX + 80, panelY + 132);
      title.size(panelW - 160, 70);
      this.resultLayer.addChild(title);
      const explanation = new Laya.Text();
      explanation.text = won ? "剩余灵果 " + hud.fruitInGarden + " 枚 · 全部转化为局外成长资源" : hud.resultReason === "PLAYER_DEAD" ? "番茄战士倒下了，本局无法带回灵果" : "九枚灵果已全部丢失，果园沦陷";
      explanation.fontSize = 24;
      explanation.color = "#edf4d7";
      explanation.align = "center";
      explanation.pos(panelX + 70, panelY + 210);
      explanation.size(panelW - 140, 46);
      this.resultLayer.addChild(explanation);
      const rewardY = panelY + 276;
      for (let i = 0; i < 9; i++) {
        const x = panelX + 132 + i * 64;
        this.resultLayer.graphics.drawCircle(x, rewardY, 20, "#4a3425", "#8f6a44", 2);
        if (i < hud.fruitInGarden) {
          this.resultLayer.graphics.drawCircle(x, rewardY - 1, 14, "#e94a35", "#ffd86b", 2);
          this.resultLayer.graphics.drawCircle(x - 5, rewardY - 6, 3, "#ff9c80");
          this.resultLayer.graphics.drawLine(x - 5, rewardY - 14, x, rewardY - 20, "#61aa47", 3);
          this.resultLayer.graphics.drawLine(x + 5, rewardY - 14, x, rewardY - 20, "#61aa47", 3);
        }
      }
      const button = new Laya.Sprite();
      button.name = "RestartButton";
      button.pos(panelX + 210, panelY + 350);
      button.size(360, 86);
      button.graphics.drawRect(4, 7, 360, 82, "#0b1a11");
      button.graphics.drawRect(0, 0, 360, 82, won ? "#4d8b4e" : "#8e493f", "#ffe08a", 4);
      button.graphics.drawLine(14, 9, 346, 9, won ? "#8dcc73" : "#c97b68", 3);
      button.mouseThrough = false;
      button.on(Laya.Event.CLICK, this, this.restartRun);
      this.resultLayer.addChild(button);
      const label = new Laya.Text();
      label.text = "再来一局";
      label.fontSize = 31;
      label.bold = true;
      label.color = "#fffaf0";
      label.stroke = 2;
      label.strokeColor = "#264228";
      label.align = "center";
      label.valign = "middle";
      label.size(360, 82);
      button.addChild(label);
    }
    rebuildChoices(hud) {
      this.choiceLayer.removeChildren(0, 2147483647, true);
      this.choiceLayer.graphics.clear();
      if (hud.offerId === null || !hud.offer || hud.phase !== "CHOOSING") {
        this.choiceLayer.visible = false;
        return;
      }
      this.choiceLayer.visible = true;
      this.choiceLayer.graphics.drawRect(0, 0, WORLD.designWidth, WORLD.designHeight, "#07120d");
      this.choiceLayer.graphics.drawRect(0, 0, WORLD.designWidth, 92, "#0f2419");
      this.choiceLayer.alpha = 0.98;
      const title = new Laya.Text();
      title.text = "升级！选择一项强化";
      title.fontSize = 36;
      title.bold = true;
      title.color = "#fff2be";
      title.stroke = 3;
      title.strokeColor = "#35291a";
      title.align = "center";
      title.pos(300, 84);
      title.size(680, 56);
      this.choiceLayer.addChild(title);
      const hint = new Laya.Text();
      hint.text = "不同品质会改变强化幅度 · 高品质卡牌具有更强成长上限";
      hint.fontSize = 18;
      hint.color = "#aac59b";
      hint.align = "center";
      hint.pos(290, 132);
      hint.size(700, 30);
      this.choiceLayer.addChild(hint);
      if (hud.offerGuarantee !== null) {
        const guarantee = new Laya.Sprite();
        guarantee.name = "OfferGuaranteeBanner";
        guarantee.pos(350, 166);
        guarantee.size(580, 38);
        const guaranteeColor = hud.offerGuarantee === "blue_all_purple_one" ? "#c47cff" : "#68baff";
        guarantee.graphics.drawRect(0, 0, 580, 38, "#142126", guaranteeColor, 3);
        guarantee.graphics.drawLine(14, 7, 566, 7, "#d9f0ff", 1.5);
        this.choiceLayer.addChild(guarantee);
        const guaranteeText = new Laya.Text();
        guaranteeText.text = hud.offerGuarantee === "blue_all_purple_one" ? "精英保底已生效：本次全蓝，并至少出现1张紫卡" : "精英保底已生效：本次至少出现1张蓝卡";
        guaranteeText.fontSize = Laya.Browser.onMobile ? 20 : 18;
        guaranteeText.bold = true;
        guaranteeText.color = hud.offerGuarantee === "blue_all_purple_one" ? "#edc6ff" : "#cce9ff";
        guaranteeText.align = "center";
        guaranteeText.valign = "middle";
        guaranteeText.size(580, 38);
        guarantee.addChild(guaranteeText);
      }
      hud.offer.forEach((card, index) => {
        var _a, _b, _c, _d;
        const x = 170 + index * 315;
        const y = hud.offerGuarantee === null ? 190 : 214;
        const w = 278;
        const h = 326;
        const color = (_a = QUALITY_COLORS[card.quality]) != null ? _a : "#ffffff";
        const panel = new Laya.Sprite();
        panel.name = "OfferCard-" + card.skillId;
        panel.pos(x, y);
        panel.size(w, h);
        panel.mouseThrough = false;
        panel.graphics.drawRect(8, 10, w, h, "#040b07");
        panel.graphics.drawRect(0, 0, w, h, "#1d3124", color, 5);
        panel.graphics.drawRect(8, 8, w - 16, h - 16, "#243c2b", "#466349", 2);
        panel.graphics.drawRect(8, 8, w - 16, 10, color);
        panel.graphics.drawRect(18, h - 48, w - 36, 34, "#13251a", color, 2);
        panel.on(Laya.Event.CLICK, this, () => this.chooseOffer(index, hud.offerId));
        panel.on(Laya.Event.MOUSE_OVER, this, () => {
          panel.scaleX = 1.035;
          panel.scaleY = 1.035;
        });
        panel.on(Laya.Event.MOUSE_OUT, this, () => {
          panel.scaleX = 1;
          panel.scaleY = 1;
        });
        panel.on(Laya.Event.MOUSE_DOWN, this, () => {
          panel.scaleX = 0.985;
          panel.scaleY = 0.985;
        });
        panel.on(Laya.Event.MOUSE_UP, this, () => {
          panel.scaleX = 1.035;
          panel.scaleY = 1.035;
        });
        this.choiceLayer.addChild(panel);
        const owned = hud.ownedSkills.find((skill) => skill.skillId === card.skillId);
        const statusBadge = new Laya.Text();
        statusBadge.name = "OfferStatus-" + card.skillId;
        statusBadge.text = owned ? "已选×" + owned.count : "新技能";
        statusBadge.fontSize = 15;
        statusBadge.bold = true;
        statusBadge.color = owned ? "#f0deb0" : "#b9f1c3";
        statusBadge.align = "center";
        statusBadge.valign = "middle";
        statusBadge.pos(18, 24);
        statusBadge.size(72, 25);
        panel.addChild(statusBadge);
        const nextBadge = new Laya.Text();
        nextBadge.name = "OfferAction-" + card.skillId;
        nextBadge.text = owned ? "继续强化" : "解锁";
        nextBadge.fontSize = 14;
        nextBadge.bold = true;
        nextBadge.color = color;
        nextBadge.align = "center";
        nextBadge.valign = "middle";
        nextBadge.pos(w - 92, 24);
        nextBadge.size(72, 25);
        panel.addChild(nextBadge);
        const emblem = new Laya.Sprite();
        emblem.pos(w / 2, 66);
        emblem.graphics.drawCircle(0, 4, 43, "#0f1f16");
        emblem.graphics.drawCircle(0, 0, 38, "#344d35", color, 4);
        emblem.graphics.drawCircle(-9, -10, 10, "#4e6b4b");
        panel.addChild(emblem);
        const icon = new Laya.Text();
        icon.text = (_b = SKILL_ICONS[card.skillId]) != null ? _b : "技";
        icon.fontSize = 33;
        icon.bold = true;
        icon.color = "#fff5d1";
        icon.stroke = 2;
        icon.strokeColor = "#203020";
        icon.align = "center";
        icon.valign = "middle";
        icon.pos(-31, -31);
        icon.size(62, 62);
        emblem.addChild(icon);
        const skillTitle = new Laya.Text();
        skillTitle.text = (_c = SKILL_NAMES[card.skillId]) != null ? _c : card.skillId;
        skillTitle.fontSize = 27;
        skillTitle.bold = true;
        skillTitle.color = "#fff8e2";
        skillTitle.align = "center";
        skillTitle.pos(15, 116);
        skillTitle.size(w - 30, 42);
        panel.addChild(skillTitle);
        const qualityTitle = new Laya.Text();
        qualityTitle.text = (_d = QUALITY_NAMES[card.quality]) != null ? _d : card.quality;
        qualityTitle.fontSize = 19;
        qualityTitle.bold = true;
        qualityTitle.color = color;
        qualityTitle.align = "center";
        qualityTitle.pos(40, 152);
        qualityTitle.size(w - 80, 28);
        panel.addChild(qualityTitle);
        const lines = Object.entries(card.increments).map(([parameter, delta]) => {
          var _a2;
          const unit = (_a2 = VALUE_UNITS[parameter]) != null ? _a2 : "";
          const finalValue = card.finalValues[parameter];
          const added = delta > 0 ? "+" : "";
          return parameter + "  " + added + formatSkillValue(delta) + unit + "\n总计 " + formatSkillValue(finalValue != null ? finalValue : delta) + unit;
        });
        const description = new Laya.Text();
        description.text = lines.join("\n\n") || "恢复体力并继续挑战";
        description.fontSize = lines.length > 1 ? 16 : 18;
        description.color = "#dce9d0";
        description.wordWrap = true;
        description.align = "center";
        description.valign = "middle";
        description.pos(22, 184);
        description.size(w - 44, 82);
        panel.addChild(description);
        const choose = new Laya.Text();
        choose.text = "点击选择";
        choose.fontSize = 18;
        choose.bold = true;
        choose.color = color;
        choose.align = "center";
        choose.valign = "middle";
        choose.pos(20, h - 47);
        choose.size(w - 40, 32);
        panel.addChild(choose);
      });
    }
  };

  // src/Main.ts
  var { regClass } = Laya;
  var Main = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.runtime = null;
      this.presenter = null;
      this.scenePort = null;
      this.keys = /* @__PURE__ */ new Set();
      this.joystickActive = false;
      this.joystickMove = { x: 0, y: 0 };
      this.lastMove = { x: 0, y: 0 };
      this.domKeyDown = (event) => {
        var _a;
        const key = event.key.toLowerCase();
        this.keys.add(key);
        if (key === " " || key === "space" || event.code === "Space") {
          event.preventDefault();
          (_a = this.scenePort) == null ? void 0 : _a.triggerUltimate();
        }
      };
      this.domKeyUp = (event) => {
        this.keys.delete(event.key.toLowerCase());
      };
    }
    onStart() {
      Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
      Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
      Laya.stage.bgColor = "#17351f";
      this.runtime = new GameRuntimeController(Date.now() >>> 0, { enableWaves: true });
      this.scenePort = new CommercialScenePort(
        this.owner,
        (index, offerId) => {
          var _a;
          return (_a = this.runtime) == null ? void 0 : _a.choose(index, offerId);
        },
        () => {
          var _a;
          return (_a = this.runtime) == null ? void 0 : _a.pressUltimate();
        },
        () => this.restartRun()
      );
      this.presenter = new RuntimePresenter(this.scenePort);
      this.presenter.render(this.runtime.snapshot());
      Laya.stage.on(Laya.Event.KEY_DOWN, this, this.handleKeyDown);
      Laya.stage.on(Laya.Event.KEY_UP, this, this.handleKeyUp);
      Laya.Browser.window.addEventListener("keydown", this.domKeyDown);
      Laya.Browser.window.addEventListener("keyup", this.domKeyUp);
      Laya.stage.on(Laya.Event.BLUR, this, this.handleBlur);
      Laya.stage.on(Laya.Event.FOCUS, this, this.handleFocus);
      Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.handlePointerMove);
      Laya.stage.on(Laya.Event.MOUSE_UP, this, this.handlePointerUp);
      this.scenePort.joystickBase.on(Laya.Event.MOUSE_DOWN, this, this.handlePointerDown);
    }
    restartRun() {
      var _a;
      const root = this.owner;
      (_a = this.scenePort) == null ? void 0 : _a.dispose();
      root.removeChildren(0, 2147483647, true);
      this.keys.clear();
      this.joystickActive = false;
      this.joystickMove = { x: 0, y: 0 };
      this.lastMove = { x: 0, y: 0 };
      this.runtime = new GameRuntimeController(Date.now() >>> 0, { enableWaves: true });
      this.scenePort = new CommercialScenePort(
        this.owner,
        (index, offerId) => {
          var _a2;
          return (_a2 = this.runtime) == null ? void 0 : _a2.choose(index, offerId);
        },
        () => {
          var _a2;
          return (_a2 = this.runtime) == null ? void 0 : _a2.pressUltimate();
        },
        () => this.restartRun()
      );
      this.scenePort.joystickBase.on(Laya.Event.MOUSE_DOWN, this, this.handlePointerDown);
      this.presenter = new RuntimePresenter(this.scenePort);
      this.presenter.render(this.runtime.snapshot());
    }
    onUpdate() {
      if (!this.runtime || !this.presenter || !this.scenePort) return;
      const keyboard = keyboardMove({
        left: this.keys.has("a") || this.keys.has("arrowleft"),
        right: this.keys.has("d") || this.keys.has("arrowright"),
        up: this.keys.has("w") || this.keys.has("arrowup"),
        down: this.keys.has("s") || this.keys.has("arrowdown")
      });
      const combined = joystickMove(keyboard.x + this.joystickMove.x, keyboard.y + this.joystickMove.y, 1);
      if (this.runtime.simulation.phase === "PLAYING") {
        if (Math.abs(combined.x - this.lastMove.x) > 1e-4 || Math.abs(combined.y - this.lastMove.y) > 1e-4) {
          this.runtime.setMove(combined.x, combined.y);
          this.lastMove = combined;
        }
        this.runtime.advanceFrame(Laya.timer.delta);
      }
      this.scenePort.setJoystickVector(this.joystickMove);
      this.presenter.render(this.runtime.snapshot());
    }
    onDestroy() {
      var _a;
      (_a = this.scenePort) == null ? void 0 : _a.dispose();
      Laya.stage.off(Laya.Event.KEY_DOWN, this, this.handleKeyDown);
      Laya.stage.off(Laya.Event.KEY_UP, this, this.handleKeyUp);
      Laya.Browser.window.removeEventListener("keydown", this.domKeyDown);
      Laya.Browser.window.removeEventListener("keyup", this.domKeyUp);
      Laya.stage.off(Laya.Event.BLUR, this, this.handleBlur);
      Laya.stage.off(Laya.Event.FOCUS, this, this.handleFocus);
      Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.handlePointerMove);
      Laya.stage.off(Laya.Event.MOUSE_UP, this, this.handlePointerUp);
    }
    handleKeyDown(event) {
      var _a, _b;
      const key = ((_a = event.key) != null ? _a : "").toLowerCase();
      if (!key) return;
      this.keys.add(key);
      if (key === " " || key === "space") (_b = this.scenePort) == null ? void 0 : _b.triggerUltimate();
    }
    handleKeyUp(event) {
      var _a;
      const key = ((_a = event.key) != null ? _a : "").toLowerCase();
      if (key) this.keys.delete(key);
    }
    handleBlur() {
      var _a, _b;
      this.keys.clear();
      this.joystickActive = false;
      this.joystickMove = { x: 0, y: 0 };
      this.lastMove = { x: 0, y: 0 };
      (_a = this.runtime) == null ? void 0 : _a.setMove(0, 0);
      (_b = this.runtime) == null ? void 0 : _b.enterBackground();
    }
    handleFocus() {
      var _a;
      if (((_a = this.runtime) == null ? void 0 : _a.simulation.phase) === "BACKGROUND") this.runtime.resume();
    }
    handlePointerDown(event) {
      this.joystickActive = true;
      this.updateJoystick(event.stageX, event.stageY);
    }
    handlePointerMove(event) {
      if (!this.joystickActive) return;
      this.updateJoystick(event.stageX, event.stageY);
    }
    handlePointerUp() {
      this.joystickActive = false;
      this.joystickMove = { x: 0, y: 0 };
    }
    updateJoystick(stageX, stageY) {
      const centerX = 24 + 88;
      const centerY = WORLD.designHeight - 205 + 88;
      this.joystickMove = joystickMove(stageX - centerX, stageY - centerY, 70);
    }
  };
  Main = __decorateClass([
    regClass("e60XQm7tTY2BwFAdxb8D1g")
  ], Main);
  function main() {
    return __async(this, null, function* () {
      const scene = new Laya.Scene();
      scene.name = "BaoZhiGuoYuanMvp";
      scene.size(WORLD.designWidth, WORLD.designHeight);
      Laya.stage.addChild(scene);
      scene.addComponent(Main);
    });
  }

  // INDEX:bundle.js
  window.$_main_ = main;
})();
