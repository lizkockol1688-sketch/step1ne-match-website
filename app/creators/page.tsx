import Link from "@/components/plain-link";
import {siteConfig} from "@/lib/site-config";
import {Header,BriefForm} from "@/components/site-interactions";
import {Footer} from "@/app/page";
export const metadata={alternates:{canonical:"/creators"},title:'加入 KOC / KOL 合作人才池｜STEP1NE',description:'整理你的社群帳號、擅長內容與合作意願，為下一次品牌合作做好準備。'};
export default function Page(){return <><Header/><main id="main" className="subpage"><div className="eyebrow">FOR CREATORS</div><nav aria-label="麵包屑"><Link href="/">首頁</Link> / 創作者加入</nav><h1>加入 KOC / KOL 合作人才池</h1><p className="lead">整理你的社群帳號、擅長內容與合作意願，為下一次品牌合作做好準備。</p><BriefForm creator={true}/></main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"首頁",item:siteConfig.url},{"@type":"ListItem",position:2,name:"創作者加入",item:siteConfig.url+"/creators"}]})}}/></>}