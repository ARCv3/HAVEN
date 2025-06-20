import { Card, CardActions, CardContent, Grid, Stack } from "@mui/material";
import type { FC, ReactNode } from "react";
import Typography from "../../atoms/Typography/index.js";

export interface PopupCardProps {
    icon: ReactNode,
    title: string;
    subtitle: string;
    bottomValue?: ReactNode
}

const PopupCard : FC<PopupCardProps> = ( {title, subtitle, icon, bottomValue = undefined} : PopupCardProps) => {

    return (
        <>
            <Card className="max-w-sm p-5">
                <CardContent>
                    <Stack alignItems={"center"} p="1" direction={"row"}>
                        {icon}
                        <Typography className="pl-3 font-black" variant="h2">{title}</Typography>
                    </Stack>
                    <Typography variant={"subtitle1"}>{subtitle}</Typography>
                </CardContent>
                {bottomValue && <CardActions>
                    {bottomValue}
                </CardActions>}
            </Card>
        </>
    )

}

export default PopupCard;