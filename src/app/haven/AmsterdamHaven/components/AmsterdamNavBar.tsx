import { ArrowForward, ChatBubble } from "@mui/icons-material";
import { NavBar } from "../../../../common/libs/molecules/NavBar";
import usePartnerConfig from "../../../../common/states/partnerConfig/usePartnerConfig"
import { useMemo, type FC } from "react";
import type { NavBarAction } from "../../../../common/libs/molecules/NavBar/NavBar";
import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)({
    backgroundColor: '#5865F2',
    color: "white",
    margin: "5px",
});

const StyledNavBar = styled(NavBar)({
    backgroundColor: 'rgba(32, 34, 37)',
    color: 'white',
    width: '100vw',
    position: "fixed"
});

const buttonStyle : React.CSSProperties = {
    color: 'white'
};

const AmsterdamNavBar : FC = () => {

    const { partnerConfig } = usePartnerConfig().states;

    const havenConfgText = partnerConfig.Haven.text.navbar;

    const getNavActions : NavBarAction[] = useMemo(() => {
        return [
            {
                name: havenConfgText.navbarHome,
                action: () => {

                },
                style: buttonStyle
            },
            {
                name: havenConfgText.navbarInfo,
                action: () => {

                },
                style: buttonStyle
            },
            {
                name: havenConfgText.navbarNews,
                action: () => {

                },
                style: buttonStyle
            },
            {
                name: havenConfgText.navbarHighlights,
                action: () => {

                },
                style: buttonStyle
            }
        ]
    }, [havenConfgText]);

    return(
        <StyledNavBar
            icon={<ChatBubble/>}
            title={partnerConfig.Haven.text.navbar.navbarTitle}
            actions={getNavActions}
        >
            <StyledButton>Join Server <ArrowForward/></StyledButton>
        </StyledNavBar>
    )

}

export default AmsterdamNavBar;