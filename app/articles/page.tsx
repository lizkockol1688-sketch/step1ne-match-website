import Link from "@/components/plain-link";
import {siteConfig} from "@/lib/site-config";
import {articles,type Article} from "@/lib/articles";
import {Header} from "@/components/site-interactions";
import {ArticlesIndex} from "@/components/articles-index";
import {Footer} from "@/app/page";
export const metadata={alternates:{canonical:"/articles"},title:"KOC／KOL 行銷專欄｜STEP1NE MATCH",description:"品牌與創作者合作的實務知識：創作者評估指標、合作流程與成效追蹤，內容皆附公開資料來源。"};
// ~450 Chinese characters per minute of reading
function minutes(a:Article){const text=[...a.summary,...a.sections.flatMap(s=>[s.heading,...s.blocks.flatMap(b=>b.type==="p"?[b.text]:b.type==="list"?b.items:[...b.head,...b.rows.flat()])]),...a.faq.flat()].join("");return Math.max(1,Math.round((text.match(/[\u4e00-\u9fff]/g)||[]).length/450))}
export default function Page(){const cards=articles.map(a=>({slug:a.slug,title:a.title,category:a.category,answer:a.summary[0],minutes:minutes(a),updated:a.updated}));return <><Header/><main id="main" className="articles-index"><div className="wrap"><nav className="crumbs" aria-label="麵包屑"><Link href="/">首頁</Link><span>/</span>行銷專欄</nav><div className="eyebrow">INSIGHTS</div><h1>KOC／KOL 行銷專欄</h1><p className="lead">品牌與創作者合作的實務知識。每篇文章都附上資料來源，讓判斷有依據。</p><ArticlesIndex cards={cards}/></div></main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"CollectionPage",name:"KOC／KOL 行銷專欄",url:siteConfig.url+"/articles",inLanguage:"zh-Hant",hasPart:articles.map(a=>({"@type":"Article",headline:a.title,url:`${siteConfig.url}/articles/${a.slug}`}))},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"首頁",item:siteConfig.url},{"@type":"ListItem",position:2,name:"行銷專欄",item:siteConfig.url+"/articles"}]}]})}}/></>}
