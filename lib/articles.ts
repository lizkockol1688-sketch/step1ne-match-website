import type {Article} from "@/lib/article-types";
import kocKolDifference from "@/lib/articles-content/koc-kol-difference";
import influencerMatchingPlatformVsAgency from "@/lib/articles-content/influencer-matching-platform-vs-agency";
import influencerMarketingCost from "@/lib/articles-content/influencer-marketing-cost";
import influencerCollaborationProcess from "@/lib/articles-content/influencer-collaboration-process";
import influencerMarketingRoi from "@/lib/articles-content/influencer-marketing-roi";
import howToGetSponsorships from "@/lib/articles-content/how-to-get-sponsorships";
import sponsorshipRateCard from "@/lib/articles-content/sponsorship-rate-card";
import brandCollaborationOfferCheck from "@/lib/articles-content/brand-collaboration-offer-check";
import influencerIncomeTax from "@/lib/articles-content/influencer-income-tax";
import groupBuyingHost from "@/lib/articles-content/group-buying-host";
import kocKolEvaluationMetrics from "@/lib/articles-content/koc-kol-evaluation-metrics";

export type {Article,Block} from "@/lib/article-types";

export const articles:Article[] = [
  kocKolDifference,
  influencerMatchingPlatformVsAgency,
  influencerMarketingCost,
  influencerCollaborationProcess,
  influencerMarketingRoi,
  howToGetSponsorships,
  sponsorshipRateCard,
  brandCollaborationOfferCheck,
  influencerIncomeTax,
  groupBuyingHost,
  kocKolEvaluationMetrics,
];

export function getArticle(slug:string){return articles.find(a=>a.slug===slug)}
