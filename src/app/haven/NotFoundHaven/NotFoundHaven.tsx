import { Stack} from "@mui/material";
import type { HavenProps } from "../../../common/states/haven/HavenProps";
import { NotFoundPopup } from "../../../common/libs/molecules/PopupCard/index.js";
import type { FC } from "react";


const NotFoundHaven : FC<HavenProps> = ( _ : HavenProps) => {

    return (
        <Stack>
            <Stack alignItems={"center"} justifyContent={"center"} height={"100vh"}>
                <NotFoundPopup/>
            </Stack>
        </Stack>

    )

}

export default NotFoundHaven;