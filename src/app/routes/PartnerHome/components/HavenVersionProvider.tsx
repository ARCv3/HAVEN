import { useEffect, useState } from "react";
import usePartnerConfig from "../../../../common/states/partnerConfig/usePartnerConfig";
import useGetHavenVersion from "../../../../common/states/haven/useGetHavenVerson";

function HavenVersionProvider() {

    const partnerConfig = usePartnerConfig().states;
    const [selectedVersion, setSelectedVersion] = useState<string>("");

    useEffect(() => {

        if (!partnerConfig.loading) {
            setSelectedVersion(partnerConfig.partnerConfig.Haven.version)
        }

    }, [partnerConfig.loading, partnerConfig.partnerConfig]);

    const HavenVersion = useGetHavenVersion( { versionString: selectedVersion });

    return (
        <HavenVersion partnerConfig={partnerConfig.partnerConfig} />
    )

}

export default HavenVersionProvider;