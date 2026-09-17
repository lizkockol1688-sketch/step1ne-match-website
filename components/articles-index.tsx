"use client";
import {useState,useSyncExternalStore} from "react";
import {ArrowRight,Clock} from "lucide-react";
import Link from "@/components/plain-link";
import {siteConfig} from "@/lib/site-config";

export type ArticleCard={slug:string;title:string;category:string;answer:string;minutes:number;updated:string};
type Audience="brand"|"creator"|"all";

const paths={
  brand:[["先搞懂名詞","koc-kol-difference"],["怎麼評估創作者","koc-kol-evaluation-metrics"],["找誰幫忙","influencer-matching-platform-vs-agency"],["要花多少","influencer-marketing-cost"],["怎麼合作","influencer-collaboration-process"],["有沒有效","influencer-marketing-roi"]],
  creator:[["先搞懂名詞","koc-kol-difference"],["找案子","how-to-get-sponsorships"],["開價","sponsorship-rate-card"],["接案前","brand-collaboration-offer-check"],["報稅","influencer-income-tax"]],
  creatorExtra:["group-buying-host"],
} as const;
const tabs:[Audience,string][]=[["brand","我是品牌"],["creator","我是創作者"],["all","全部文章"]];
const featured="koc-kol-difference";
const noop=()=>()=>{};
function readUrlAudience():Audience|null{const q=new URLSearchParams(location.search).get("for");return q==="brand"||q==="creator"||q==="all"?q:null}

export function ArticlesIndex({cards}:{cards:ArticleCard[]}){
  const fromUrl=useSyncExternalStore(noop,readUrlAudience,()=>null);
  const[picked,setPicked]=useState<Audience|null>(null);
  const who:Audience=picked??fromUrl??"brand";
  function choose(k:Audience){setPicked(k);const u=new URL(location.href);u.searchParams.set("for",k);history.replaceState(null,"",u)}
  const bySlug=new Map(cards.map(c=>[c.slug,c]));
  const get=(s:string)=>bySlug.get(s)!;
  return <>
    <div className="audience-switch light" role="group" aria-label="選擇你的身分">{tabs.map(([k,l])=><button key={k} type="button" aria-pressed={who===k} onClick={()=>choose(k)}>{l}</button>)}</div>
    <div key={who} className="articles-view">
      {who==="all"?<AllView cards={cards} get={get}/>:<PathView who={who} get={get}/>}
    </div>
    <div className="articles-cta">
      {who!=="creator"&&<div><b>想直接找到適合的創作者？</b><p>告訴我們品牌需求，由 AI 媒合與顧問審核，整理推薦人選與推薦原因。</p><Link className="btn" href={siteConfig.brandBriefUrl}>開始品牌媒合<ArrowRight size={17}/></Link></div>}
      {who!=="brand"&&<div><b>想接到適合你的品牌合作？</b><p>申請加入嚴選創作者網絡，經顧問審核後接收品牌邀請。</p><Link className="btn light-outline" href={siteConfig.creatorJoinUrl}>申請加入創作者網絡<ArrowRight size={17}/></Link></div>}
    </div>
  </>;
}

function Meta({c}:{c:ArticleCard}){return <span className="path-meta"><span><Clock size={14}/>約 {c.minutes} 分鐘</span><time dateTime={c.updated}>{c.updated}</time></span>}

function PathView({who,get}:{who:"brand"|"creator";get:(s:string)=>ArticleCard}){
  const steps=paths[who];
  return <>
    <p className="path-intro">{who==="brand"?"第一次找創作者合作，照這個順序讀，從搞懂名詞一路到看懂成效。":"想開始接品牌合作，照這個順序讀，從認識自己的定位一路到報稅。"}</p>
    <ol className="path">{steps.map(([label,slug],i)=>{const c=get(slug);return <li key={slug}><Link className="path-card" href={`/articles/${slug}`}><span className="path-num">{i+1}</span><span className="path-body"><span className="path-label">{label}</span><strong>{c.title}</strong><span className="path-answer">{c.answer}</span><Meta c={c}/></span><ArrowRight className="path-arrow" size={20}/></Link></li>})}</ol>
    {who==="creator"&&<div className="path-extra"><span className="path-label">延伸閱讀</span>{paths.creatorExtra.map(s=>{const c=get(s);return <Link key={s} className="path-card extra" href={`/articles/${s}`}><span className="path-body"><strong>{c.title}</strong><span className="path-answer">{c.answer}</span><Meta c={c}/></span><ArrowRight className="path-arrow" size={20}/></Link>})}</div>}
  </>;
}

function AllView({cards,get}:{cards:ArticleCard[];get:(s:string)=>ArticleCard}){
  const f=get(featured);
  const group=(cat:string)=>cards.filter(c=>c.category===cat&&c.slug!==featured);
  return <>
    <Link className="feature-card" href={`/articles/${f.slug}`}><span className="feature-tag">兩邊都適合先讀</span><strong>{f.title}</strong><span className="path-answer">{f.answer}</span><Meta c={f}/></Link>
    <div className="all-columns">{[["品牌指南","寫給找創作者合作的品牌"],["創作者指南","寫給想接品牌合作的創作者"]].map(([cat,sub])=><section key={cat}><h2>{cat}</h2><p>{sub}</p><ul>{group(cat).map(c=><li key={c.slug}><Link href={`/articles/${c.slug}`}><strong>{c.title}</strong><Meta c={c}/></Link></li>)}</ul></section>)}</div>
  </>;
}
