# 爆汁果园｜免费 LayaAir 3.4 Web 构建与 GitHub Pages 发布

此仓库是 **公开预览仓库**。正式游戏源代码、规则文档和工程资源位于
私有仓库 [BaiMaGod/baozhiguoyuan](https://github.com/BaiMaGod/baozhiguoyuan)；
**不得**将该仓库的 TypeScript 源码、文档、`.git`、`node_modules`、Token 或工作目录提交到这里。

发布工作流：[.github/workflows/build-laya-pages.yml](.github/workflows/build-laya-pages.yml)。

## 一次性配置（需要仓库所有者操作）

1. 打开 **BaiMaGod/baozhiguoyuan-preview → Settings → Secrets and variables → Actions → New repository secret**。
2. 创建 Secret 名称 `BAOZHI_SOURCE_READ_TOKEN`。
3. 值使用有效的 GitHub Fine-grained personal access token：
   - Repository owner：`BaiMaGod`。
   - Repository access：**Only select repositories** → 仅 `baozhiguoyuan`。
   - Repository permissions：**Contents → Read-only**（另保留 GitHub 强制的 Metadata: Read）。
   - 不需要写权限，也不需要将 Token 写入仓库文件。
   - 如有组织批准流程，请确保 Token 已授权访问。
4. 打开 **BaiMaGod/baozhiguoyuan-preview → Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
5. 确认公开预览库的 **Actions** 没有被禁用；`github-pages` environment 可正常部署。

> 使用 GitHub Secret 配置 Token，**不要把 Token 发到聊天、提交到 Git 或打印到日志**。现有其他项目的 Token 不一定有访问 `baozhiguoyuan` 的授权。

## 发布最新正式源码

打开预览仓库 **Actions → Build BaoZhiGuoYuan with LayaAir 3.4 and publish Pages → Run workflow → main**。

工作流会在**公开预览仓库的 Runner** 里顺序执行：

1. 使用只读 Secret checkout 私有正式源码 `main` 到临时目录 `private-game/`，禁用 Git 凭证保留。
2. 记录该次 checkout 的确切 40 位 commit SHA。
3. 使用 **Node 20**、Python 3.11 和 **官方 LayaAir 3.4.0 CLI**；执行 `cd game && npm ci`。
4. 运行 `game/tools/audit-presentation.mjs` 与 `cd game && npm run verify:release`。后者包括：
   - 规则生成配置检查、严格 TypeScript 类型检查；
   - 游戏核心测试、回放矩阵、九宫格表现状态测试；
   - **真实 LayaAir CLI 构建 Web**，打包原始图片及音效；
   - 构建产物、版本、原始素材一致性校验。
5. 校验 `game/build/web/build-manifest.json.commitSha` 与本次真实 private checkout SHA 完全一致。
6. 启动编译后本地 Web HTTP 服务，由真实 Chromium 执行 `game/tests/browser-smoke.py` 的桌面、手机横屏交互及手机竖屏入口验证，保存截图与测试报告。
7. **仅所有步骤成功**，上传 `game/build/web/` 文件作为 GitHub Pages artifact 并执行 `actions/deploy-pages@v4`。浏览器截图另存为 Actions artifact（不含私有源码）；失败时也保留诊断截图。成功部署后自动读取线上 build-manifest.json 并核对源码 SHA。

工作流采用 `workflow_dispatch` 手动触发；更新私有仓库不会自动触发公开仓库工作流。需要发布时重新点击 **Run workflow**。

## 失败保护

- 缺少 / 无权限的 Token、构建、类型检查、任意浏览器交互测试、资源下载失败时，工作流会失败，**不会进入 Pages 部署步骤**。
- 此时 GitHub Pages 保留上一次成功部署的构建；不要通过手动上传未经验证的包绕开失败门禁。
- 当前预览库还保存老的 `build-manifest.json`，首次运行新工作流成功之前不会自动更新。
- 已有的旧版 Pages 分支构建方式与新 `deploy-pages` 动作不能同时作为主发布来源：请将 Source 改为 **GitHub Actions**。

## 发布后核验

- 工作流页面应显示 **Real Laya build / browser QA / Pages** 全绿，且部署后在线 Manifest SHA 校验通过。浏览器测试通过或失败时，如产生报告均可下载
  `baozhi-laya-3-4-real-browser-qa` 实测报告。
- 试玩地址：<https://baimagod.github.io/baozhiguoyuan-preview/>。
- 在浏览器打开
  <https://baimagod.github.io/baozhiguoyuan-preview/build-manifest.json>，
  比较 `commitSha` 与 Actions 本次输出的正式源码 SHA；**相同才能证明正在试玩此版本**。
- 人工核对开始、移动、自动攻击、升级三选一、暂停/继续、胜败结算、重开，以及美术实际显示和手机触控。
- 如出现资源 404 或旧缓存，先核对构建 manifest 与浏览器 Network，再做强制刷新；不要用旧截图宣称新版本通过。

## 费用及注意事项

针对**公开仓库**使用标准 GitHub-hosted Runner 与 GitHub Pages，通常可以在免费额度政策内完成此流程；具体 Actions、artifact 存储和 Pages 使用仍受 GitHub 官方配额、服务条款与账户设置限制。切勿在公共日志、页面或 artifact 中公开任何私有 Token。
