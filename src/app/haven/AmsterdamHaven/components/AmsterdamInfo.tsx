import { Stack, styled, type StackProps } from "@mui/material";
import type { FC } from "react";
import type { HavenInfoTextResponse } from "../../../../types/PartnerConfig";
import SectionHeader from "../../../../common/libs/molecules/SectionHeader/SectionHeader";

const StyledStack = styled(Stack)({
    backgroundColor: "#2f3136",
    color: "white"
})

export interface AmsterdamInfoProps extends StackProps {
    config: HavenInfoTextResponse;
}

const AmsterdamInfo : FC<AmsterdamInfoProps> = ({ config, ...props }) => {
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
                    }} />

            </StyledStack>
        </>
    );
}

export default AmsterdamInfo;