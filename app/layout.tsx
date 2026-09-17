import {LineFloat} from "@/components/line-float";
import type { Metadata } from "next";
import "./globals.css";
import {siteConfig} from "@/lib/site-config";
export const metadata:Metadata={metadataBase:new URL(siteConfig.url),alternates:{canonical:"/"},title:"AI KOC/KOL 精準媒合平台｜品牌網紅合作與成效追蹤｜STEP1NE MATCH",description:"用 AI 精準媒合找到真正適合品牌的 KOC/KOL 網紅。從品牌需求拆解、人選篩選、創作者數據驗證、合作邀約、內容發布追蹤到成效報告，由 AI 分析結合真人顧問審核，讓每次網紅合作都有依據、看得到成效。",robots:{index:false,follow:false},icons:{icon:{url:"/brand/logo-appicon.png",type:"image/png"},shortcut:"/brand/logo-appicon.png",apple:"/brand/logo-appicon.png"},openGraph:{title:"STEP1NE MATCH｜AI KOC / KOL 精準媒合",description:"找到適合的人，讓每一次品牌合作更有依據。",locale:"zh_TW",type:"website",images:[{url:"/og-image.jpg",width:1200,height:630,alt:"STEP1NE MATCH — AI 精準媒合，找到真正能為品牌帶來成果的 KOC / KOL"}]},twitter:{card:"summary_large_image",title:"STEP1NE MATCH｜AI KOC / KOL 精準媒合",description:"找到適合的人，讓每一次品牌合作更有依據。",images:["/og-image.jpg"]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-Hant"><body>{children}<LineFloat/></body></html>}
