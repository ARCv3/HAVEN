import { Button, Stack, styled, Typography, type StackProps } from "@mui/material";
import type { FC } from "react";
import type { HavenHeroTextResponse } from "../../../../types/PartnerConfig";
import { ArrowForward } from "@mui/icons-material";

const StyledButton = styled(Button)({
    backgroundColor: '#5865F2',
    color: "white",
    margin: "5px",
});

const StyledStack = styled(Stack)({
    background: "linear-gradient(rgba(54, 57, 63, 0.8), rgba(32, 34, 37, 0.9))",
    color: "white"
})

export interface AmsterdamHeroProps extends StackProps {
    config: HavenHeroTextResponse
}

const AmsterdamHero : FC<AmsterdamHeroProps> = ( { config, ...props } ) => {
    return (
        <StyledStack justifyContent={"center"} alignItems={"center"} width={"100vw"} height={"100vh"} {...props}>
            <Typography style={{fontWeight: "lighter"}} variant={"body1"}>{config.heroPrefix}</Typography>
            <Typography style={{fontWeight: "bolder"}} variant={"h3"}>{config.heroTitle}</Typography>
            <Typography className="pt-5 pb-5" variant={"body1"}>{config.heroDescription}</Typography>
            <StyledButton>Join Now <ArrowForward /></StyledButton>
        </StyledStack>    
    )
}

export default AmsterdamHero;