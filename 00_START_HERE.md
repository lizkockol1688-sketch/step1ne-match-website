# STEP1NE MATCH 官網程式碼 v2

本包是已套用 Logo 的網站完整原始碼，可交給 Claude Code / Codex 繼續開發。

## 已放好的 Logo
- public/brand/logo-horizontal.png：桌機 Header、Footer。
- public/brand/logo-appicon.png：手機 Header、favicon、Apple touch icon。
- 手機 Header 搭配 HTML 精簡品牌名，避免縮小橫式副標。

## 啟動
1. 解壓縮，使用 Node.js 22.13 以上版本。
2. 以 package.json 的 packageManager 欄位指定之 pnpm 版本安裝依賴：pnpm install。
3. pnpm dev：開啟終端機顯示的本機網址。
4. pnpm build：正式建置。

本專案使用 Sites Vinext starter，並非原生 Next.js 專案；請延續 package.json、pnpm-lock.yaml 與既有設定。不要直接以 next dev 取代原指令。
不包含 node_modules、Git 歷史、密鑰與本機暫存，下載後需安裝依賴。

## 給 Claude Code 的工作說明
先讀 README.md 與 docs/QA_AND_HANDOFF.md。保留現有視覺、RWD、Logo 與首頁文案。
目前表單只整理可複製摘要，沒有送出、資料庫或 AI 媒合後端。
正式接收端與 LINE OA 未提供，不要猜 URL、不顯示假送出成功。
先依實際後端契約提出串接修改，再接收件 API、驗證與錯誤處理。
.openai/hosting.json 對應現有私密網站；建立另一個網站時不要誤用原 project_id。

## 尚未完成的營運項目
LINE OA、真實收件 API、AI matching、正式公司法定資訊、隱私政策／服務條款、授權案例與公開索引設定。
完整驗收紀錄及限制請見 docs/QA_AND_HANDOFF.md；此版本未宣稱通過 Lighthouse。
