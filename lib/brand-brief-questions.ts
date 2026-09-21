// Card-by-card brand intake questionnaire — one topic per screen, typeform-style.
// Field list researched 2026-09-21 against international influencer-brief best practice
// (Meltwater/Aspire brief templates) + Taiwan KOL-platform intake norms, then mapped onto what
// the backend already has fields for (campaign_match_profiles, platform_strategy) — not invented
// from scratch. Copy revised 2026-09-21 for tone (respectful 您, not casual 你) and to remove a
// real client's brand name from the placeholder example.
export type FieldType = "text" | "email" | "tel" | "textarea" | "select" | "chips" | "single" | "productList";

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
    title: "請問您的品牌基本資料",
    fields: [
      { name: "brandName", label: "品牌 / 公司名稱", type: "text", required: true, placeholder: "例如：STEP1NE 保養品牌" },
      { name: "contactName", label: "聯絡人姓名", type: "text", required: true, placeholder: "方便我們稱呼您的方式" },
    ],
  },
  {
    id: "contact",
    kicker: "STEP 2",
    title: "方便聯繫您的方式",
    fields: [
      { name: "email", label: "Email", type: "email", required: true, placeholder: "name@brand.com" },
      { name: "phone", label: "電話（選填）", type: "tel", required: false, placeholder: "09xx-xxx-xxx" },
    ],
  },
  {
    id: "brand",
    kicker: "STEP 3",
    title: "請簡單介紹您的品牌",
    fields: [
      {
        name: "industry",
        label: "產業類別",
        type: "select",
        required: true,
        options: ["美妝保養", "時尚服飾", "食品飲料", "3C科技", "居家生活", "親子育兒", "健康保健", "旅遊住宿", "金融保險", "其他"],
      },
      { name: "brandIntro", label: "品牌一句話介紹", type: "textarea", required: true, placeholder: "用 2-3 句話說明您的品牌是誰、做什麼" },
    ],
  },
  {
    id: "links",
    kicker: "STEP 4",
    title: "是否已有相關資料",
    hint: "以下皆為選填，若您已有資料，提供給我們能讓顧問更快進入狀況",
    fields: [
      { name: "website", label: "官網或社群連結", type: "text", required: false, placeholder: "https://..." },
      { name: "existingBrief", label: "若已有品牌簡報或需求文件，歡迎直接貼上摘要", type: "textarea", required: false },
    ],
  },
  {
    id: "product",
    kicker: "STEP 5",
    title: "這次希望推廣的產品或服務",
    hint: "可以新增多個產品，第一個為必填，其餘選填",
    fields: [{ name: "products", label: "產品清單", type: "productList", required: true }],
  },
  {
    id: "objective",
    kicker: "STEP 6",
    title: "這次合作的目標",
    hint: "可複選——不同目標，適合的人選與衡量方式也不同，讓顧問一併考量",
    fields: [
      {
        name: "objective",
        label: "商業目標",
        type: "chips",
        required: true,
        options: ["導流轉換（點擊/購買）", "聲量擴散（觸及/曝光）", "產品試用與真實回饋", "累積 UGC 素材", "導購（實際銷售）", "其他"],
      },
    ],
  },
  {
    id: "kpi",
    kicker: "STEP 7",
    title: "是否有具體的成效目標",
    hint: "以下皆為選填。若有明確數字，顧問能更精準規劃所需人選數量與平台配置",
    fields: [
      { name: "kpiReach", label: "觸及目標（人次）", type: "text", required: false, placeholder: "例如：100,000" },
      { name: "kpiConversion", label: "轉換目標（筆數）", type: "text", required: false, placeholder: "例如：200" },
      { name: "kpiOther", label: "其他具體目標", type: "textarea", required: false, placeholder: "例如：UGC 素材 20 篇" },
    ],
  },
  {
    id: "audience",
    kicker: "STEP 8",
    title: "請描述您的目標受眾",
    fields: [
      {
        name: "audienceAge",
        label: "年齡層",
        type: "chips",
        required: false,
        options: ["18-24 歲", "25-34 歲", "35-44 歲", "45-54 歲", "55 歲以上", "不限"],
      },
      {
        name: "audienceGender",
        label: "性別",
        type: "select",
        required: false,
        options: ["不限", "女性為主", "男性為主"],
      },
      {
        name: "audienceRegion",
        label: "地區",
        type: "chips",
        required: false,
        options: ["全台不限", "北部", "中部", "南部", "東部", "海外"],
      },
      { name: "audienceProfile", label: "興趣輪廓或痛點", type: "textarea", required: false, placeholder: "這群受眾平常關心什麼、有什麼樣的困擾" },
    ],
  },
  {
    id: "platforms",
    kicker: "STEP 9",
    title: "希望合作的平台",
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
    title: "希望呈現的內容形式",
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
    title: "對合作人選的期待",
    fields: [
      { name: "creatorTier", label: "KOC 或 KOL", type: "single", required: true, options: ["KOC（真實體驗、互動率）", "KOL（觸及、聲量）", "都需要，混合搭配"] },
      { name: "followerRange", label: "粉絲數區間（選填）", type: "text", required: false, placeholder: "例如：1萬-10萬" },
      { name: "exclusions", label: "排除名單或限制（選填）", type: "textarea", required: false, placeholder: "例如：正在為競品代言者恕不邀約" },
    ],
  },
  {
    id: "guidelines",
    kicker: "STEP 12",
    title: "合作上的規範與要求",
    fields: [
      { name: "toneGuideline", label: "語氣調性或品牌露出要求（選填）", type: "textarea", required: false },
      {
        name: "usageRights",
        label: "素材使用權限",
        type: "select",
        required: false,
        options: ["僅供創作者自己帳號使用", "品牌可重製於自己的社群", "品牌可用於付費廣告投放", "尚未決定，希望進一步討論"],
      },
    ],
  },
  {
    id: "budget",
    kicker: "STEP 13",
    title: "預算與合作時程",
    fields: [
      {
        name: "budgetRange",
        label: "預算區間",
        type: "select",
        required: false,
        options: ["10 萬以下", "10-30 萬", "30-50 萬", "50-100 萬", "100 萬以上", "尚未確定，希望先進一步討論"],
      },
      { name: "timeline", label: "活動起訖時間或上線時間窗口", type: "text", required: false, placeholder: "例如：11月中前上線" },
    ],
  },
];
