import { useParams } from "react-router";
import usePartnerConfig from "../../../states/partnerConfig/usePartnerConfig"
import useGetPartnerConfigQuery from "../../../utils/partnerConfig/useGetPartnerConfigQuery";
import useOnceWhen from "../dom/useOnceWhen";
import { useEffect } from "react";
import type { PartnerConfig } from "../../../../types/PartnerConfig";
import type { ApolloError } from "@apollo/client";

const useInitializePartnerHomePage = () => {
    const { setPartnerConfig, setPartnerConfigError, setPartnerConfigLoading } = usePartnerConfig().actions;

    const { pid } = useParams();
    const partnerConfigQuery = useGetPartnerConfigQuery({
        partnerConfigId: parseInt(pid?? '0')
    }).states;

    useOnceWhen(async () => setPartnerConfigLoading(false), Boolean(!partnerConfigQuery.loading));

    useEffect(() => {
        const config : PartnerConfig = partnerConfigQuery.data?
        {
            domain: partnerConfigQuery.data.Haven.domain.domain,
            customDomainEnabled: partnerConfigQuery.data.Haven.domain.customDomainEnabled,
            subdomain: partnerConfigQuery.data.Haven.domain.subdomain,
            isActive: partnerConfigQuery.data.partner.isActive,
            isPremium: partnerConfigQuery.data.partner.premium,
            id: partnerConfigQuery.data.partner.id,
            name: partnerConfigQuery.data.partner.name,
        } : {} as PartnerConfig
        setPartnerConfigLoading(partnerConfigQuery.loading);
        setPartnerConfig(config)
        setPartnerConfigError(partnerConfigQuery.error as ApolloError)
    })

}

export default useInitializePartnerHomePage;