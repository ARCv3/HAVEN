import { useQuery } from "@apollo/client";
import type { PartnerConfig } from "../../../types/PartnerConfig";
import GET_PARTNER_CONFIG from "./queries/GET_PARTNER_CONFIG";

interface QueryParameter {
    partnerConfigId: number;
}

interface QueryResponse {
    partnerConfig: PartnerConfig;
}

export interface GetPartnerConfigQueryProps {
    partnerConfigId: number;
}

const useGetPartnerConfigQuery = (props: GetPartnerConfigQueryProps) => {

    const { data, loading, error } = useQuery<QueryResponse, QueryParameter>(GET_PARTNER_CONFIG, {
        variables: {
            partnerConfigId: props.partnerConfigId,
        }
    });

    return {
        states: {
            data: data?.partnerConfig,
            loading,
            error
        },
        actions: {},
    };

};

export default useGetPartnerConfigQuery;