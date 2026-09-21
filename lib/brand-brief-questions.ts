// Card-by-card brand intake questionnaire — one topic per screen, typeform-style.
// Field list researched 2026-09-21 against international influencer-brief best practice
// (Meltwater/Aspire brief templates) + Taiwan KOL-platform intake norms, then mapped onto what
// the backend already has fields for (campaign_match_profiles, platform_strategy) — not invented
// from scratch. See docs/brand-questionnaire-source.md for the citations.
export type FieldType = "text" | "email" | "tel" | "textarea" | "select" | "chips" | "single";

export type QField = {
  name: string;
  label: string;
  type: FieldType;
  options?: string[];
  required?: boolean;
  placeholder?: string;
};

export type QStep = {
  id: string;
  kicker: string;
  title: string;
  hint?: string;
  fields: QField[];
};

export const brandQuestionnaire: QStep[] = [
  {
    id: "identity",
    kicker: "STEP 1",
    title: "先說說你是誰",
    fields: [
      { name: "brandName", label: "品牌 / 公司名稱", type: "text", required: true, placeholder: "例如：UXKB 保養品牌" },
      { name: "contactName", label: "聯絡人姓名", type: "text", required: true, placeholder: "你的稱呼" },
    ],
  },
  {
    id: "contact",
    kicker: "STEP 2",
    title: "怎麼聯絡到你",
    fields: [
      { name: "email", label: "Email", type: "email", required: true, placeholder: "name@brand.com" },
      { name: "phone", label: "電話（選填）", type: "tel", required: false, placeholder: "09xx-xxx-xxx" },
    ],
  },
  {
    id: "brand",
    kicker: "STEP 3",
    title: "品牌是做什麼的",
    fields: [
      {
        name: "industry",
        label: "產業類別",
        type: "select",
        required: true,
        options: ["美妝保養", "時尚服飾", "食品飲料", "3C科技", "居家生活", "親子育兒", "健康保健", "旅遊住宿", "金融保險", "其他"],
      },
      { name: "brandIntro", label: "品牌一句話介紹", type: "textarea", required: true, placeholder: "用 2-3 句話說明你們是誰、做什麼" },
    ],
  },
  {
    id: "links",
    kicker: "STEP 4",
    title: "有沒有現成資料",
    hint: "都是選填，有的話貼上來，讓顧問更快進入狀況",
    fields: [
      { name: "website", label: "官網或社群連結", type: "text", required: false, placeholder: "https://..." },
      { name: "existingBrief", label: "已有 Brief 或 Brand Deck？可以直接貼摘要", type: "textarea", required: false },
    ],
  },
  {
    id: "product",
    kicker: "STEP 5",
    title: "這次要推廣什麼",
    fields: [
      { name: "product", label: "產品 / 服務名稱", type: "text", required: true, placeholder: "例如：玫瑰 PDRN 面膜" },
      { name: "sellingPoint", label: "核心賣點", type: "textarea", required: true, placeholder: "這個產品最想讓人記住的一件事是什麼" },
    ],
  },
  {
    id: "objective",
    kicker: "STEP 6",
    title: "主要商業目標是什麼",
    hint: "選一個最主要的，不用全選——目標不同，找的人跟衡量方式都不一樣",
    fields: [
      {
        name: "objective",
        label: "主要目標",
        type: "single",
        required: true,
        options: ["導流轉換（點擊/購買）", "聲量擴散（觸及/曝光）", "產品試用與真實回饋", "累積 UGC 素材", "導購（實際銷售）", "其他"],
      },
    ],
  },
  {
    id: "kpi",
    kicker: "STEP 7",
    title: "有具體數字目標嗎",
    hint: "選填。有的話顧問可以更精準抓需要的人選數量與平台配置",
    fields: [{ name: "kpi", label: "例如：觸及 10 萬、轉換 200 筆、UGC 素材 20 篇", type: "textarea", required: false }],
  },
  {
    id: "audience",
    kicker: "STEP 8",
    title: "目標受眾長怎樣",
    fields: [
      { name: "audienceAge", label: "年齡層", type: "text", required: false, placeholder: "例如：25-34 歲" },
      {
        name: "audienceGender",
        label: "性別",
        type: "select",
        required: false,
        options: ["不限", "女性為主", "男性為主"],
      },
      { name: "audienceRegion", label: "地區", type: "text", required: false, placeholder: "例如：台灣，或特定城市" },
      { name: "audienceProfile", label: "興趣輪廓或痛點", type: "textarea", required: false, placeholder: "這群人平常關心什麼、有什麼困擾" },
    ],
  },
  {
    id: "platforms",
    kicker: "STEP 9",
    title: "希望在哪些平台合作",
    hint: "可複選",
    fields: [
      {
        name: "platforms",
        label: "平台",
        type: "chips",
        required: true,
        options: ["Instagram", "Threads", "Dcard", "TikTok", "YouTube", "小紅書", "Facebook", "部落格"],
      },
    ],
  },
  {
    id: "contentType",
    kicker: "STEP 10",
    title: "希望是什麼樣的內容",
    hint: "可複選",
    fields: [
      {
        name: "contentTypes",
        label: "內容形式",
        type: "chips",
        required: true,
        options: ["圖文貼文", "Reels/短影片", "長影片", "直播", "開箱體驗", "Story"],
      },
    ],
  },
  {
    id: "creatorPreference",
    kicker: "STEP 11",
    title: "想找什麼樣的人選",
    fields: [
      { name: "creatorTier", label: "KOC 還是 KOL", type: "single", required: true, options: ["KOC（真實體驗、互動率）", "KOL（觸及、聲量）", "都要，混合搭配"] },
      { name: "followerRange", label: "粉絲數區間（選填）", type: "text", required: false, placeholder: "例如：1萬-10萬" },
      { name: "exclusions", label: "排除名單或限制（選填）", type: "textarea", required: false, placeholder: "例如：正在幫競品代言的不要" },
    ],
  },
  {
    id: "guidelines",
    kicker: "STEP 12",
    title: "合作上有什麼規範",
    fields: [
      { name: "toneGuideline", label: "語氣調性或品牌露出要求（選填）", type: "textarea", required: false },
      {
        name: "usageRights",
        label: "素材使用權限",
        type: "select",
        required: false,
        options: ["僅供創作者自己帳號使用", "品牌可重製於自己的社群", "品牌可用於付費廣告投放", "還沒決定，之後再談"],
      },
    ],
  },
  {
    id: "budget",
    kicker: "STEP 13",
    title: "預算與檔期",
    fields: [
      {
        name: "budgetRange",
        label: "預算區間",
        type: "select",
        required: false,
        options: ["10 萬以下", "10-30 萬", "30-50 萬", "50-100 萬", "100 萬以上", "還沒確定，想先聊聊"],
      },
      { name: "timeline", label: "活動起訖時間或上線時間窗口", type: "text", required: false, placeholder: "例如：11月中前上線" },
    ],
  },
];
