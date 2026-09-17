# QA 與後續串接

## 已實作

- 原定 15 區塊與品牌優先 CTA；Creator 為次要入口。
- Hero 每 5 秒切換 active card；前後切換、暫停、點選、touch swipe；手動操作即停止自動切換。
- 契合分數首次進入視窗計數；reduced motion 關閉自動切換及動畫。
- FAQ 可鍵盤操作，回答保留在 HTML；閉合狀態以 CSS 隱藏。
- Creator Pool tabs、手機選單、表單 required / URL 驗證、摘要複製與複製失敗退路。
- 一頁一個 H1、繁體中文語言、metadata、canonical、Organization / WebSite、內頁 BreadcrumbList、robots / sitemap。
- 目前私密預覽採 noindex/nofollow 與 robots disallow。對外開放後才切换索引設定，並統一正式 domain。
- 資料與肖像皆為示意；沒有虛構客戶 Logo、保證成效或評價。
- 主文案為 HTML。肖像使用原提供生成圖 CSS 局部視窗，來源為 CODEX PACK；沒有新增真實人選資料。
- WebMCP 僅提供摘要準備，不代表送出，不建立外部紀錄。

## 驗證

- TypeScript noEmit 通過。
- 專案應用 ESLint 通過。
- Sites production build 通過。
- 桌機首屏視覺檢查；首頁無水平溢出。
- 手機以 390px iframe（內容 375px）檢查；首頁與需求頁無水平溢出。
- 媒合卡片前後切換、FAQ 展開、合作池 tab、品牌 CTA 導覽通過。
- 手機選單開合、合作流程導航通過。
- 品牌與 Creator 表單填寫與摘要產生通過；明示尚未傳送。
- Lighthouse 未執行；LCP / INP / CLS 目標並非已達成的實測宣稱。正式公開後再做 Lighthouse、真實流量 CWV、Search Console 與 Schema 檢查。

## 正式公開前待提供 / 串接

1. 確認正式品牌與公司法定名稱、聯絡資料、正式網域。
2. 提供 LINE OA 或真實表單接收端；完成成功 / 錯誤 / 防重複提交、同意文字、rate limit 與資料保存策略。
3. 法定公司資訊、隱私政策與服務條款未取得，未捏造文件或放死連結；正式公開前補齊 Footer。
4. 提供已授權案例後替換示意 dashboard。沒有公開真實案例前，不新增案例頁與假客戶實績。
5. 確認服務是否已具備對外承接能力；本頁描述服務流程，不包含真實 AI Matching 後端。
6. Phase 2 再新增知識專欄與完整服務內頁，避免空頁與薄內容。
7. 圖片可再輸出 WebP / AVIF，減少原 PNG 約 1.6 MB 的載入成本；目前瀏覽器共用同一份圖像快取。
8. 串接 GA4 / Search Console 與 CTA 事件，公開前確認追蹤同意要求。

## 搜尋內容注意

未依賴 FAQ rich results 或 llms.txt；沒有把原包內的當期搜尋政策文字當作已驗證的網站宣稱。政策及公開收錄需於正式網域啟用時確認。

WebMCP 驗證限制：目前預覽瀏覽器未提供 document.modelContext；已 feature-detect，無支援時不影響表單。代表輸入與錯誤輸入的工具呼叫驗證未執行。

## 品牌 Logo 更新
- 採使用者提供透明 PNG 原檔，不重繪或更動圖案。
- 桌機 Header 與 Footer：橫式 STEP1NE MATCH。
- 手機 Header：App 圖示 + HTML 精簡品牌名，避免橫式副標縮小到無法閱讀。
- favicon / shortcut / Apple touch icon：App 圖示。
- compact 直式 Logo 未放入頁面，適合日後 LINE OA 素材或獨立品牌頁。
