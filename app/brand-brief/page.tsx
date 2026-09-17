import Link from "@/components/plain-link";
import {siteConfig} from "@/lib/site-config";
import {Header,BriefForm} from "@/components/site-interactions";
import {Footer} from "@/app/page";
export const metadata={alternates:{canonical:"/brand-brief"},title:'從你的品牌需求開始。｜STEP1NE',description:'告訴我們你的品牌、產品與推廣目標。已有 Brief？可以直接將摘要貼入補充欄位。'};
export default function Page(){return <><Header/><main id="main" className="subpage"><div className="eyebrow">BRAND BRIEF</div><nav aria-label="麵包屑"><Link href="/">首頁</Link> / 品牌需求</nav><h1>從你的品牌需求開始。</h1><p className="lead">告訴我們你的品牌、產品與推廣目標。已有 Brief？可以直接將摘要貼入補充欄位。</p><BriefForm creator={false}/></main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"首頁",item:siteConfig.url},{"@type":"ListItem",position:2,name:"品牌需求",item:siteConfig.url+"/brand-brief"}]})}}/></>}