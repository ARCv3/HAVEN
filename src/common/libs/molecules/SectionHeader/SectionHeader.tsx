import { Typography } from "@mui/material";
import type { FC } from "react";

export interface SectionHeaderProps {
    subHeaderPlacement?: 'above' | 'below';
    title: string;
    subtitle: string;
    titleStyle?: React.CSSProperties;
    subtitleStyle?: React.CSSProperties;
}

const SectionHeader : FC<SectionHeaderProps> = ( { title, subtitle, subHeaderPlacement = 'above', titleStyle = {}, subtitleStyle = {} } ) => {

    return (
        <>
            {subHeaderPlacement == 'above' && <Typography style={subtitleStyle} variant={"subtitle1"}>{subtitle}</Typography>}
            <Typography style={titleStyle} variant="h4">{title}</Typography>
            {subHeaderPlacement == 'below' && <Typography style={subtitleStyle} variant={"subtitle1"}>{subtitle}</Typography>}
        </>
    )

}

export default SectionHeader;