import { Stack, styled, type StackProps } from "@mui/material";
import type { FC } from "react";
import { StatsCard } from "../../../../common/libs/molecules/StatsCard";
import { People } from "@mui/icons-material";

const StyledStatsCard = styled(StatsCard)({
    backgroundColor: 'rgba(66, 70, 77, 0.6)',
    minWidth: '150px',
    padding: '15px',
    margin: '5px'
})

export interface AmsterdamGuildStatsProps extends StackProps {
    guild: string;
}

const AmsterdamGuildStats : FC<AmsterdamGuildStatsProps> = ( { ...props } ) => {

    return (
        <Stack {...props} flexWrap={"wrap"} direction={"row"} justifyContent={"center"}>
            
            <StyledStatsCard 
                icon={<People />}
                stat="4000"
                subtitle="Members"
            />

            <StyledStatsCard 
                icon={<People />}
                stat="4000"
                subtitle="Members"
            />

            <StyledStatsCard 
                icon={<People />}
                stat="4000"
                subtitle="Members"
            />

            <StyledStatsCard 
                icon={<People />}
                stat="4000"
                subtitle="Members"
            />
        
        </Stack>
    )
}

export default AmsterdamGuildStats;