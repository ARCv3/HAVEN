import { type RouteObject } from "react-router";

import { IndexRoute } from "./routes/index";
import { PartnerHomeRoute } from "./routes/PartnerHome";

const routes : RouteObject[] = [
    IndexRoute,
    PartnerHomeRoute,
]

export default routes;