import type { Metadata } from "next";
import "./globals.css";
import {siteConfig} from "@/lib/site-config";
export const metadata:Metadata={metadataBase:new URL(siteConfig.url),alternates:{canonical:"/"},title:"AI KOC/KOL 精準媒合平台｜品牌網紅合作與成效追蹤｜STEP1NE MATCH",description:"用 AI 精準媒合找到更適合品牌的 KOC/KOL。從品牌需求、人選篩選、Creator 數據驗證、合作執行到成效追蹤，由 AI 與真人顧問共同協助。",robots:{index:false,follow:false},icons:{icon:{url:"/brand/logo-appicon.png",type:"image/png"},shortcut:"/brand/logo-appicon.png",apple:"/brand/logo-appicon.png"},openGraph:{title:"STEP1NE MATCH｜AI KOC / KOL 精準媒合",description:"找到適合的人，讓每一次品牌合作更有依據。",locale:"zh_TW",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-Hant"><body>{children}</body></html>}
