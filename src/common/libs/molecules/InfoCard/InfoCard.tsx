import { Stack, type StackProps } from "@mui/material";
import type { FC, ReactNode } from "react";
import Typography from "../../atoms/Typography";

export interface InfoCardProps extends StackProps {
    icon: ReactNode;
    title: string;
    description: string;
}

const InfoCard : FC<InfoCardProps> = ( { icon, title, description, ...props } ) => {
    return (
        <Stack {...props}  borderRadius={1}>
            {icon}
            <Typography fontWeight={"1300"} variant="h6">{title}</Typography>
            <Typography className="font-extralight" variant="caption">{description}</Typography>
        </Stack>
    )
}

export default InfoCard;