# 洛洛小工坊 全站建设方案

按上传的 UI 设计方案 V1.0 实现完整站点。深色宇宙背景 + 蓝紫虹彩渐变 + 玻璃拟态 + 轻二次元 + 发光粒子效果。

## 设计系统（src/styles.css）

- 主色：蓝紫渐变 (`#6366F1 → #A855F7 → #EC4899`)
- 辅助：青蓝 `#22D3EE`、粉紫 `#F472B6`
- 背景：深黑 `#070417` + 星云径向渐变
- 卡片：`backdrop-blur` 玻璃拟态，白色 8% 边框，发光阴影
- 字体：标题 Space Grotesk，正文 Inter，中文 Noto Sans SC
- 全部颜色用 oklch 语义 token；新增 `--gradient-primary`、`--shadow-glow`、`--glass-bg`

## 路由结构（TanStack Start）

```
src/routes/
  __root.tsx          顶部导航 + Footer + 背景星云层
  index.tsx           首页 (Hero / 功能入口 / 精选作品 / 关于品牌)
  works.tsx           创意作品馆
  characters.tsx      角色档案馆（含世界观星图）
  comics.tsx          AI 漫剧馆（含剧情时间轴）
  music.tsx           AI 音乐馆（含播放器 UI）
  lab.tsx             AI 实验室
  contact.tsx         联系页
```

每个路由独立 `head()` meta（title / description / og）。导航响应式：≥md 显示完整菜单，移动端汉堡抽屉。

## 共享组件（src/components/）

- `SiteHeader` — sticky 玻璃导航 + 底部发光线
- `SiteFooter` — 品牌 / 社交 / 备案
- `NebulaBackground` — 固定层，星云径向渐变 + CSS 粒子
- `GlassCard` — 玻璃拟态卡片基础
- `GradientButton` — 主/次按钮变体（cva）
- `SectionHeading` — 统一中英双标题
- `WorkCard` / `CharacterCard` / `ComicCard` / `MusicCard`
- `CategoryPills` — 横向滚动筛选
- `WorldMap` — 角色档案馆中心-辐射星图（SVG + 发光连线）
- `Timeline` — 漫剧线性发光时间轴
- `MusicPlayer` — Hero 区播放器 UI（视觉演示，无真实音频）

## 内容与图像

文案完全按文档（中文）。占位作品图 / 角色立绘 / 漫剧封面 / 音乐封面使用 `imagegen--generate_image` 生成（蓝紫赛博、半机械银发少女、星云等主题），存 `src/assets/`。核心角色"洛洛"立绘用于首页与角色页 Hero。

## 动效

Tailwind + 少量 framer-motion：
- Hero 入场淡入上移
- 卡片 hover 放大 1.03 + 发光边
- 玻璃导航滚动渐显
- 角色头像呼吸光环（CSS keyframes）
- 不引入重型 3D / WebGL

## 不在本次范围

- 后端 / 登录 / 数据库（纯前端展示站）
- 真实音乐播放、视频播放
- 关于页（文档标注"待设计"）
- 多语言

## 技术细节

- 严格 TanStack Start 规范，路由文件名与 `createFileRoute` 路径匹配
- index.tsx 替换占位 placeholder
- `__root.tsx` 保留 `<Outlet />`，添加共享 Header/Footer/背景层
- 所有颜色经 `styles.css` 的 oklch token，禁止硬编码
