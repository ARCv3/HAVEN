import useInitializePartnerHomePage from "../../../common/libs/utils/PartnerHomePage/useInitializePartnerHomePage";
import HavenVersionProvider from "./components/HavenVersionProvider";

function PartnerHomePage() {

    useInitializePartnerHomePage();

    return (
        <HavenVersionProvider />
    )
}

export default PartnerHomePage;