import Link from "@/components/plain-link";
import { ArrowRight, Check } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Header } from "@/components/site-interactions";
import { Footer } from "@/app/page";
export const metadata = {
  alternates: { canonical: "/brand-brief" },
  title: "品牌合作｜KOC / KOL 網紅媒合｜STEP1NE MATCH",
  description: "想找適合的KOC/KOL合作？AI依受眾、內容風格與歷史合作數據精準媒合，真人顧問審核把關，從邀約到成效追蹤一站完成。",
};
export default function Page() {
  return (
    <>
      <Header />
      <main id="main" className="subpage" style={{ maxWidth: 860 }}>
        <div className="eyebrow">BRAND COLLABORATION</div>
        <nav aria-label="麵包屑">
          <Link href="/">首頁</Link> / 品牌合作
        </nav>
        <h1>找到真正適合的 KOC / KOL，不是靠感覺挑人</h1>
        <p className="lead">
          不只看粉絲數，而是綜合受眾、內容風格、平台表現與歷史合作數據。從人選媒合、合作執行到成效追蹤，STEP1NE 一站完成，你只需要說清楚需求。
        </p>
        <div className="actions">
          <Link className="btn" href="/brand-brief/apply">
            提交品牌合作需求 <ArrowRight size={17} />
          </Link>
        </div>

        <div className="duty duty-light" style={{ marginTop: 60 }}>
          <div className="duty-col brand">
            <div className="duty-label">品牌只要</div>
            <ul>
              {["提供需求", "挑選人選", "確認合作條件"].map((t) => (
                <li key={t}>
                  <span className="duty-dot" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="duty-col ours">
            <div className="duty-label">STEP1NE 負責</div>
            <ul>
              {["找人與審核", "邀約與洽談條件", "追蹤內容與發布進度", "回收成效與下一波建議"].map((t) => (
                <li key={t}>
                  <Check size={18} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 60 }}>
          <h2 style={{ fontSize: 24 }}>提交需求前，先知道這些</h2>
          <ul style={{ marginTop: 20, paddingLeft: 20, color: "#657086", fontSize: 15, lineHeight: 2 }}>
            <li>問卷大概需要 5-8 分鐘，會問品牌背景、這次的商業目標、目標受眾、平台與內容偏好、預算與檔期</li>
            <li>目前送出入口尚未開放，填完會整理成一份摘要，複製後可直接加 LINE 貼給顧問</li>
            <li>有現成的品牌簡報或需求文件？問卷裡有欄位可以直接貼上摘要，不用重寫一次</li>
          </ul>
        </div>

        <div className="actions" style={{ marginTop: 50 }}>
          <Link className="btn" href="/brand-brief/apply">
            開始填寫 <ArrowRight size={17} />
          </Link>
          <Link className="btn secondary" href="/#faq">
            先看常見問題
          </Link>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "首頁", item: siteConfig.url },
              { "@type": "ListItem", position: 2, name: "品牌合作", item: siteConfig.url + "/brand-brief" },
            ],
          }),
        }}
      />
    </>
  );
}
