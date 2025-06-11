import type { PartnerResponse } from "./Partner";

export interface HavenDomainConfigResponse {
    customDomainEnabled: boolean;
    domain: string;
    subdomain: string;
}

export interface HavenThemeResponse {
    primaryColor: string;
}

export interface HavenHeroTextResponse {
    heroPrefix: string;
    heroTitle: string;
    heroDescription: string;
    heroJoinButtonText: string;
}

export interface HavenNavBarTextResponse {
    navbarTitle: string;
    navbarHome: string;
    navbarInfo: string;
    navbarNews: string;
    navbarHighlights: string;
    navbarJoinButton: string;
}

export interface HavenInfoTextResponse {
    infoHeader: string;
    infoSubheader: string;
    infoSubheaderPlacement: string;
}

export interface HavenNewsTextResponse {
    newsHeader: string;
    newsSubheader: string;
    newsSubheaderPlacement: string;
}

export interface HavenHighlightsTextResponse {
    highlightsHeader: string;
    highlightsSubheader: string;
    highlightsPlacement: string;
}

export interface HavenTextResponse {
    navbar: HavenNavBarTextResponse;
    hero: HavenHeroTextResponse;
    info: HavenInfoTextResponse;
    highlights: HavenHighlightsTextResponse;
    news: HavenNewsTextResponse;
}

export interface HavenInfoContentResponse {
    icon: string;
    title: string;
    description: string;
}

export interface HavenNewsContentResponse {
    image: string;
    date: string;
    title: string;
    description: string;
    content: string;
}

export interface HavenHighlightsContentResponse {
    image: string;
    title: string;
    description: string;
    tags: string[];
}

export interface HavenContentResponse {
    enableInfo: boolean;
    enableDefaultInfo: boolean;
    customInfo: HavenInfoContentResponse[];
    enableNews: boolean;
    enableDefaultNews: boolean;
    customNews: HavenNewsContentResponse[];
    enableHighlights: boolean;
    enableDefaultHighlights: boolean;
    customHighlights: HavenHighlightsContentResponse[];
}

export interface HavenConfigResponse {
    domain: HavenDomainConfigResponse;
    version: string;
    theme: HavenThemeResponse;
    text: HavenTextResponse;
    content: HavenContentResponse;
}

export interface PartnerConfigResponse {
    Haven: HavenConfigResponse;
    partner: PartnerResponse;
}