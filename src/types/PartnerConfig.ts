import type { PartnerResponse } from "./Partner";

export interface HavenDomainConfigResponse {
    customDomainEnabled: boolean;
    domain: string;
    subdomain: string;
}

export interface HavenConfigResponse {
    domain: HavenDomainConfigResponse;
}

export interface PartnerConfigResponse {
    Haven: HavenConfigResponse;
    partner: PartnerResponse;
}

export interface PartnerConfig {
    domain: string;
    subdomain: string;
    customDomainEnabled: boolean;
    isPremium: boolean;
    isActive: boolean;
    id: number;
    name: string;
}