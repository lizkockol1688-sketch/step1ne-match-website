# STEP1NE KOC / KOL 官網 v1

以提供的 CODEX PACK v1 為基準，完成首頁與兩個 CTA 入口。

## 執行

Node 22.13+；保留 pnpm-lock.yaml。安裝依賴後執行 `pnpm dev`，正式版本執行 `pnpm build`。
此專案使用 Sites 的 Vinext / React / TypeScript / Tailwind starter，採 Next App Router 相容結構，部署為 Cloudflare Worker。

## Routes

- `/`：15 個區塊，順序依原規格。
- `/brand-brief`：品牌需求摘要準備；不傳送、不持久化。
- `/creators`：創作者合作資料摘要；不傳送、不持久化。
- `/robots.txt`、`/sitemap.xml`：SEO 基礎。
- 品牌合作、AI 媒合、流程、成效、FAQ 以首頁錨點導航，未製作登入後台。

## 元件

`components/site-interactions.tsx`：Header、BrandCTA、HeroMatchingPreview、Portrait、AnimatedNumber、FAQAccordion、CreatorPool、BriefForm。
首頁文字與主要章節採 server component。互動使用 client component；FAQ、Tabs 使用既有 Radix / Shadcn primitives。

## 設定

`lib/site-config.ts` 統一品牌名、站點 URL、品牌需求入口、創作者入口、LINE URL 與待接 endpoint。
LINE URL 保持空白，未猜測。endpoint 屬介面預留，尚未有收件後端。

## 交付狀態

可瀏覽、可操作的前端預覽。不是可對外收件的完整營運系統。
請閱讀 `docs/QA_AND_HANDOFF.md`，確認正式上線前待辦。
