import Link from "@/components/plain-link";
import { siteConfig } from "@/lib/site-config";
import { Header } from "@/components/site-interactions";
import { Footer } from "@/app/page";
import { BrandQuestionnaire } from "@/components/brand-questionnaire";
export const metadata = {
  alternates: { canonical: "/brand-brief/apply" },
  title: "提交品牌合作需求｜STEP1NE MATCH",
  description: "一題一題回答，整理你的品牌合作需求。目前送出入口尚未開放，填完可直接加 LINE 貼給顧問。",
};
export default function Page() {
  return (
    <>
      <Header />
      <main id="main" className="subpage">
        <div className="eyebrow">BRAND BRIEF</div>
        <nav aria-label="麵包屑">
          <Link href="/">首頁</Link> / <Link href="/brand-brief">品牌合作</Link> / 提交需求
        </nav>
        <BrandQuestionnaire />
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
              { "@type": "ListItem", position: 3, name: "提交需求", item: siteConfig.url + "/brand-brief/apply" },
            ],
          }),
        }}
      />
    </>
  );
}
