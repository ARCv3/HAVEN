import { Grid, styled, type GridProps    } from "@mui/material";
import type { FC } from "react";
import type { HavenContentResponse } from "../../../../types/PartnerConfig";

import { InfoCard } from "../../../../common/libs/molecules/InfoCard/index.js";
import { Icon } from "../../../../common/libs/atoms/Icon/index.js";
import type { IconNames } from "../../../../common/libs/atoms/Icon/Icon.js";

const AmsterdamInfoCard = styled(InfoCard)({
    backgroundColor: 'rgba(66, 70, 77, 0.6)',
    minHeight: '300px'
});

export interface AmsterdamInfoCardsProps extends GridProps {
    infoContent: HavenContentResponse;
}

const AmsterdamInfoCards : FC<AmsterdamInfoCardsProps> = ( { infoContent, ...props }) => {
    return <Grid gridAutoRows={"600px"} container spacing={{ xs: 2, sm: 3}} 
        direction={"row"} alignItems={"center"}
        justifyContent={"center"} {...props} 
    >

        {infoContent.customInfo.map( info => {
            return <Grid maxWidth={400} size={6}> 
                <AmsterdamInfoCard spacing={1} padding={3}
                    icon={<Icon iconName={info.icon as IconNames} />}
                    title={info.title}
                    description={info.description}
                />
            </Grid>
        })}
        
    </Grid>
}

export default AmsterdamInfoCards;