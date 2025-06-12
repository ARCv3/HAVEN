import { ApolloError, makeVar, useReactiveVar } from "@apollo/client";
import { type PartnerConfig } from "../../../types/PartnerConfig";
import deepEqual from 'deep-equal'

const reactivePartnerConfig = makeVar<PartnerConfig>({} as PartnerConfig);
const reactiveParnterConfigLoading = makeVar(true);
const reactivePartnerConfigError = makeVar<ApolloError>({} as ApolloError);

const setPartnerConfig = (newState: PartnerConfig) => setReactiveState(reactivePartnerConfig, newState);

export const UNSAFE_setPartnerConfig = setPartnerConfig;

const setReactiveState = <T>(reactiveVar: (value?: T) => T, newState: T) => {
    const current = reactiveVar();
    if (!deepEqual(current, newState)) reactiveVar(newState);
};

const usePartnerConfig = () => {

    const partnerConfig = useReactiveVar(reactivePartnerConfig);
    const loading = useReactiveVar(reactiveParnterConfigLoading);
    const error = useReactiveVar(reactivePartnerConfigError);

    return {
        actions: {
            setPartnerConfig,
            setPartnerConfigLoading: (loading: boolean) => setReactiveState(reactiveParnterConfigLoading, loading),
            setPartnerConfigError: (error: ApolloError) => setReactiveState(reactivePartnerConfigError, error),
        },
        states: {
            partnerConfig,
            loading,
            error,
        },
    };
};

export default usePartnerConfig;