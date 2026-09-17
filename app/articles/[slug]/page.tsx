import {notFound} from "next/navigation";
import Link from "@/components/plain-link";
import {siteConfig} from "@/lib/site-config";
import {articles,getArticle,type Block} from "@/lib/articles";
import {Header,BrandCTA,FAQAccordion} from "@/components/site-interactions";
import {Footer} from "@/app/page";

type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return articles.map(a=>({slug:a.slug}))}
export async function generateMetadata({params}:Props){const a=getArticle((await params).slug);if(!a)return {};return {alternates:{canonical:`/articles/${a.slug}`},title:`${a.title}｜STEP1NE MATCH`,description:a.description,openGraph:{title:a.title,description:a.description,type:"article",publishedTime:a.published,modifiedTime:a.updated,locale:"zh_TW"}}}

// Inline links use markdown syntax: [文字](/path) or [文字](https://...)
function inline(text:string){return text.split(/(\[[^\]]+\]\([^)\s]+\))/g).map((part,i)=>{const m=part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);if(!m)return part;const external=/^https?:/.test(m[2]);return external?<a key={i} href={m[2]} target="_blank" rel="noopener noreferrer">{m[1]}</a>:<Link key={i} href={m[2]}>{m[1]}</Link>})}
function renderBlock(b:Block,k:number){if(b.type==="p")return <p key={k}>{inline(b.text)}</p>;if(b.type==="list")return <ul key={k}>{b.items.map(i=><li key={i}>{inline(i)}</li>)}</ul>;return <div key={k} className="article-table"><table><thead><tr>{b.head.map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{b.rows.map((r,i)=><tr key={i}>{r.map((c,j)=><td key={j} data-l={b.head[j]}>{inline(c)}</td>)}</tr>)}</tbody></table></div>}

export default async function Page({params}:Props){const a=getArticle((await params).slug);if(!a)notFound();const url=`${siteConfig.url}/articles/${a.slug}`;const ld={"@context":"https://schema.org","@graph":[{"@type":"Article",headline:a.title,description:a.description,datePublished:a.published,dateModified:a.updated,inLanguage:"zh-Hant",mainEntityOfPage:url,author:{"@type":"Organization",name:a.author},publisher:{"@type":"Organization",name:siteConfig.name,logo:{"@type":"ImageObject",url:siteConfig.url+"/brand/logo-horizontal.png"}},citation:a.sources.map(s=>s.url)},{"@type":"FAQPage",mainEntity:a.faq.map(([q,ans])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:ans}}))},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"首頁",item:siteConfig.url},{"@type":"ListItem",position:2,name:"行銷專欄",item:siteConfig.url+"/articles"},{"@type":"ListItem",position:3,name:a.title,item:url}]}]};
return <><Header/><main id="main" className="article"><div className="article-wrap"><nav className="crumbs" aria-label="麵包屑"><Link href="/">首頁</Link><span>/</span><Link href="/articles">行銷專欄</Link><span>/</span>{a.category}</nav><span className="article-cat">{a.category}</span><h1>{a.title}</h1><div className="article-byline"><span>{a.author}</span><span>更新於 <time dateTime={a.updated}>{a.updated}</time></span></div>
<section className="article-summary" aria-labelledby="summary-title"><h2 id="summary-title">重點摘要</h2><ul>{a.summary.map(s=><li key={s}>{s}</li>)}</ul></section>
<nav className="article-toc" aria-label="文章目錄"><b>目錄</b><ol>{a.sections.map(s=><li key={s.id}><a href={`#${s.id}`}>{s.heading}</a></li>)}<li><a href="#faq">常見問題</a></li><li><a href="#sources">資料來源</a></li></ol></nav>
<div className="article-body">{a.sections.map(s=><section key={s.id} id={s.id}><h2>{s.heading}</h2>{s.blocks.map(renderBlock)}</section>)}
<section id="faq"><h2>常見問題</h2><FAQAccordion items={a.faq}/></section>
<section id="sources"><h2>資料來源</h2><p className="article-note">以下資料皆於 {a.updated} 查閱。</p><ol className="article-sources">{a.sources.map(s=><li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}</ol></section></div>
<aside className="article-cta"><div><b>想找到真正適合品牌的創作者？</b><p>告訴我們你的品牌需求，由 AI 媒合與顧問審核，整理推薦人選與推薦原因。</p></div><BrandCTA/></aside></div></main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/></>}
