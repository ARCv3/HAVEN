import { useEffect, useState } from "react";
import usePartnerConfig from "../../../../common/states/partnerConfig/usePartnerConfig";

function HavenVesionProvider() {

    const partnerConfig = usePartnerConfig().states;
    const [selectedVersion, setSelectedVersion] = useState<string | undefined>(undefined)

    useEffect(() => {

        if (!partnerConfig.loading) {
            setSelectedVersion(partnerConfig.partnerConfig.Haven.version)
        }

    }, [partnerConfig.loading, partnerConfig.partnerConfig]);

    return (
        

    )

}

export default HavenVesionProvider;