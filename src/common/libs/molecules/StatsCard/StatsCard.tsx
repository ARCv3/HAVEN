import { Stack, type StackProps } from "@mui/material";
import type { FC, ReactNode } from "react";
import Typography from "../../atoms/Typography";

export interface StatsCardProps extends StackProps {
    icon: ReactNode;
    stat: string;
    subtitle: string;
}

const StatsCard : FC<StatsCardProps> = ( { icon, stat, subtitle, ...props } ) => {
    return (
        <Stack {...props} justifyContent={"center"} alignItems={"center"} borderRadius={1}>
            {icon}
            <Typography fontWeight={"1300"} variant="h4">{stat}</Typography>
            <Typography className="font-extralight" variant="caption">{subtitle}</Typography>
        </Stack>
    )
}

export default StatsCard;