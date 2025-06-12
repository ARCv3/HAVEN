import type { RouteObject } from "react-router";
import PartnerHomePage from "./PartnerHomePage";

const route : RouteObject = {
    path: "/haven/:pid",
    Component: PartnerHomePage,
}

export default route;