import {MessageCircle} from "lucide-react";
import {siteConfig} from "@/lib/site-config";

// Hidden in production until a real LINE OA URL is configured, so no dead button ships.
export function LineFloat(){const url=siteConfig.lineOaUrl;if(!url&&process.env.NODE_ENV==="production")return null;const inner=<><MessageCircle size={20}/><span>LINE 洽詢合作</span></>;return url?<a className="line-float" href={url} target="_blank" rel="noopener noreferrer" aria-label="透過 LINE 洽詢 STEP1NE 合作">{inner}</a>:<span className="line-float pending" title="LINE 官方帳號連結尚未設定">{inner}</span>}
