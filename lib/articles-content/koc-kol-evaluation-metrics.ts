import type {Article} from "@/lib/article-types";

const article:Article = {
    slug:"koc-kol-evaluation-metrics",
    title:"挑選 KOC／KOL 要看哪些指標？業界常用的 9 個評估維度整理",
    description:"粉絲數不等於適合度。整理 Kolr、HypeAuditor、Modash、CreatorIQ、TikTok One、Meta 與 WFA 公開資料，把品牌挑選創作者時最常用的指標分成契合度、影響力、可信度三組。",
    category:"品牌指南",
    published:"2026-09-17",
    updated:"2026-09-17",
    author:"STEP1NE MATCH 編輯部",
    summary:[
      "業界沒有一套全體通用的評分標準，但主流平台反覆使用三個方向：契合度、影響力、可信度。",
      "契合度看受眾輪廓、內容風格與過往品牌合作；影響力看互動率、觸及與觀看、成長與發文穩定度；可信度看受眾真實性（假粉）、品牌安全與合作紀錄。",
      "世界廣告主聯盟（WFA）2025 年報告指出，品牌評估網紅不只看粉絲數，內容品質、說話語氣、平台上的行為與品牌價值契合都是關鍵條件。",
    ],
    sections:[
      {id:"why",heading:"為什麼不能只看粉絲數？",blocks:[
        {type:"p",text:"粉絲數只能說明一個帳號有多少人追蹤，無法說明這些人是不是品牌的目標客群、是不是真人、會不會對內容有反應。如果還分不清 KOL、KOC、微網紅差在哪，可以先看[這篇名詞整理](/articles/koc-kol-difference)。"},
        {type:"p",text:"WFA 在 2025 年《Effective Influencer Marketing Report》中寫明，品牌評估網紅是「based on more than just follower count」，關鍵條件包括內容品質、說話語氣、在平台上的行為，以及與品牌價值的契合。同一份報告列出的主要挑戰中，「找到適合品牌的網紅」佔 48%、「品牌安全」佔 34%、「廣告詐欺（假粉、機器人等）」佔 20%。"},
      ]},
      {id:"framework",heading:"三組九項：業界常用的評估架構",blocks:[
        {type:"p",text:"國外平台 Traackr 在官方詞彙表中，把 Reach（觸及）、Relevance（相關性）、Resonance（共鳴）稱為「3 R's of Influence」。台灣的 Kolr（原 KOL Radar）則用 K-Score 評估網紅影響力，組成是粉絲數、發文穩定度、漲粉率與互動率。綜合各平台公開文件，可以整理成下面三組："},
        {type:"table",head:["分組","評估維度","常見看法"],rows:[
          ["契合度 Relevance","受眾契合度","粉絲的性別、年齡、國家與地區分布，是否對上品牌目標客群"],
          ["","內容契合度","內容風格、主題與形式（例如 Reels、短影音、長片）是否適合品牌"],
          ["","品牌合作經驗","過去合作過哪些品牌類型、業配內容的比例與表現"],
          ["影響力 Reach & Resonance","互動率","平均互動數相對於追蹤數的比例"],
          ["","觸及與觀看","影片平均觀看數、預估觸及人數"],
          ["","成長與穩定度","漲粉率、發文頻率是否穩定"],
          ["可信度 Credibility & Safety","受眾真實性","假粉、可疑帳號比例，留言是否來自互讚群組"],
          ["","品牌安全","過往內容是否涉及冒犯、成人、政治宗教等敏感主題"],
          ["","合作履約紀錄","過往合作的回覆速度、配合度與交付品質"],
        ]},
      ]},
      {id:"relevance",heading:"契合度：這位創作者適不適合你的品牌",blocks:[
        {type:"p",text:"受眾輪廓是各平台最基本的欄位。Kolr 以近半年追蹤、按讚、留言的粉絲推算性別、年齡、國家與地區；TikTok One 的篩選條件也包含受眾的國家地區、年齡與性別比；Meta 的 Creator Discovery API 則提供追蹤者性別年齡與主要國家城市。"},
        {type:"p",text:"內容契合度看的是內容風格與形式。CreatorIQ 的創作者搜尋可依 content style 篩選；Modash 則能依內容形式比較表現，例如 Reels 與一般貼文、Shorts 與長片的差異。"},
        {type:"p",text:"品牌合作經驗在各平台的名稱不同：Meta API 有 past_partnerships 欄位、Modash 有 Brand Collaborations Timeline、Kolr 有商業合作內容分析與網紅業配偵測。"},
      ]},
      {id:"reach",heading:"影響力：內容能不能被看見、被回應",blocks:[
        {type:"p",text:"Kolr 在幫助中心公開了指標定義：互動率是指定期間的平均互動數除以追蹤數；觀看率是近 n 個月影片平均觀看數除以平台追蹤數再乘以 100%。"},
        {type:"p",text:"TikTok One 的 Performance 篩選使用影片觀看數中位數（Median video views）與互動率。成長面向則有 Kolr 的漲粉率、HypeAuditor 的 Growth Analysis。"},
        {type:"list",items:["互動率：看受眾是否真的在乎內容","觸及與觀看：看內容實際能被多少人看到","成長與穩定度：看帳號是否持續經營、粉絲成長是否自然"]},
      ]},
      {id:"credibility",heading:"可信度：數字是不是真的、合作安不安全",blocks:[
        {type:"p",text:"受眾真實性是查到的平台幾乎都有的項目。HypeAuditor 的 Audience Quality Score 綜合互動率、真人追蹤者比例、異常成長與留言真實性；Modash 在說明文件中提到，大型創作者的假粉比例約 20–30%，建議低於 25%，超過 50% 應避開。Kolr 的真粉比例功能目前只支援 Instagram。"},
        {type:"p",text:"品牌安全方面，CreatorIQ 區分 Brand Safety（避開有害內容）與 Brand Suitability（是否適合這個品牌）。WFA 2025 年與英國廣告標準局等單位發布的全球指引也要求，選擇合作對象時要考量追蹤者的年齡分布與其他內容的性質。"},
        {type:"p",text:"合作紀錄則來自實際合作後的回饋。台灣的 Influenxio 圈圈科技讓品牌在結案後，從回覆訊息速度、積極與配合度、貼文品質與成效三個面向評分。"},
      ]},
      {id:"data-source",heading:"同一個數字，可信程度不一定一樣",blocks:[
        {type:"p",text:"不同來源拿得到的資料深度不同。Meta 的 Creator Discovery API 只有在創作者同意分享資料時才搜得到；YouTube 表示分享頻道洞察的創作者，在品牌搜尋中平均多被推薦 60%。"},
        {type:"p",text:"因此比較創作者時，除了看數字，也要看數字從哪裡來：是公開資料、創作者本人提供，還是經過確認。沒有取得的資料，應該標示為尚未取得，而不是用估算值補上。"},
        {type:"p",text:"指標看完，接下來通常會卡在兩件事：這位創作者要花多少錢，以及合作從頭到尾怎麼走。可以接著看[網紅業配費用怎麼估](/articles/influencer-marketing-cost)和[第一次找網紅合作的完整流程](/articles/influencer-collaboration-process)；想直接請顧問幫你篩選，可以從[品牌需求](/brand-brief)開始。"},
      ]},
    ],
    faq:[
      ["挑選 KOC／KOL 最重要的指標是什麼？","沒有單一指標。建議至少同時看三件事：受眾是否對上品牌目標客群（契合度）、內容是否有人互動與觀看（影響力）、粉絲是否真實且內容安全（可信度）。"],
      ["互動率怎麼算？","常見算法是一段期間內的平均互動數除以追蹤數。例如 Kolr 的定義是指定 n 個月數的平均互動數除以追蹤數。不同平台計算期間與互動項目可能不同，比較時要用同一個來源。"],
      ["假粉比例多少算高？","Modash 的說明文件提到，大型創作者的假粉比例約 20–30%，建議低於 25%，超過 50% 應避開。實際判斷仍要搭配互動與留言品質一起看。"],
      ["KOC 和 KOL 的評估方式一樣嗎？","評估的方向相同，都看契合度、影響力與可信度。KOC 粉絲數較少，評估時可以把重點放在受眾契合與互動品質，而不是觸及規模。兩者的定義差異可以看[KOL、KOC 是什麼](/articles/koc-kol-difference)。"],
    ],
    sources:[
      {label:"WFA《Effective Influencer Marketing Report 2025》",url:"https://wfanet.org/knowledge/item/2025/09/04/recommendations-for-how-to-do-better-influencer-marketing"},
      {label:"Traackr 影響者行銷詞彙表（3 R's of Influence）",url:"https://www.traackr.com/resources/influencer-marketing-glossary"},
      {label:"Kolr 幫助中心：數據定義",url:"https://help.kolr.ai/article/160-kol-radar"},
      {label:"Kolr 幫助中心：K-Score",url:"https://help.kolr.ai/article/131-k-score"},
      {label:"Kolr 幫助中心：受眾分析",url:"https://help.kolr.ai/article/129--"},
      {label:"TikTok One：搜尋與篩選創作者",url:"https://ads.tiktok.com/help/article/how-to-find-creators-in-tiktok-one"},
      {label:"Meta Creator Discovery API 文件",url:"https://developers.facebook.com/docs/fb-creator-discovery/"},
      {label:"CreatorIQ Creator Search",url:"https://www.creatoriq.com/influencer-marketing-solution/creator-search"},
      {label:"CreatorIQ：什麼是品牌安全",url:"https://www.creatoriq.com/blog/what-is-brand-safety-and-how-to-maintain-it"},
      {label:"HypeAuditor：Audience Quality Score",url:"https://help.hypeauditor.com/en/articles/2221731-what-is-aqs-audience-quality-score-and-how-is-it-calculated"},
      {label:"Modash：假粉與受眾品質",url:"https://help.modash.io/en/articles/5649607-fake-followers-101-understanding-audience-quality"},
      {label:"Modash：創作者審核功能",url:"https://www.modash.io/features/influencer-vetting"},
      {label:"Influenxio 圈圈科技：結案評分指標",url:"https://blog.influenxio.com/rate-influencer-index/"},
      {label:"YouTube Creator Partnerships（2026-03）",url:"https://blog.youtube/news-and-events/youtube-creator-partnerships-newfronts-2026/"},
    ],
  };

export default article;
