import { Stack, styled, type StackProps } from "@mui/material";
import type { FC } from "react";
import type { HavenContentResponse, HavenInfoTextResponse } from "../../../../types/PartnerConfig";
import SectionHeader from "../../../../common/libs/molecules/SectionHeader/SectionHeader";
import AmsterdamGuildStats from "./AmsterdamGuildStats";
import AmsterdamInfoCards from "./AmsterdamInfoCards";

const StyledStack = styled(Stack)({
    backgroundColor: "#2f3136",
    color: "white"
})

export interface AmsterdamInfoProps extends StackProps {
    config: HavenInfoTextResponse;
    infoContent: HavenContentResponse;
}

const AmsterdamInfo : FC<AmsterdamInfoProps> = ({ config, infoContent, ...props }) => {
    return (
        <>
            <StyledStack {...props} paddingY={10} paddingX={6} justifyContent={"center"} alignItems={"center"} >

                <SectionHeader 
                    title={config.infoHeader} 
                    subtitle={config.infoSubheader} 
                    subHeaderPlacement={config.infoSubheaderPlacement}
                    titleStyle={{
                        fontWeight: "bold"
                    }}
                    subtitleStyle={{
                        color: "#5865F2",
                        fontWeight: "bold",
                        textTransform: "uppercase"
                    }} 
                />

                <AmsterdamGuildStats paddingTop={6} guild={config.infoHeader}/>
                
                <Stack paddingTop={6} alignItems={"center"} justifyContent={"center"}>
                    <AmsterdamInfoCards 
                        infoContent={infoContent}/>
                </Stack>

            </StyledStack>
        </>
    );
}

export default AmsterdamInfo;