import { Stack, styled } from "@mui/material";
import type { HavenProps } from "../../../common/states/haven/HavenProps";
import AmsterdamNavBar from "./components/AmsterdamNavBar";
import { NavBar } from "../../../common/libs/molecules/NavBar";
import AmsterdamHero from "./components/AmsterdamHero";
import AmsterdamInfo from "./components/AmsterdamInfo";

const BackgroundDiv = styled(Stack)({
    height: "100vh",
    width: "100vw",
    objectFit: "cover",
    position: "fixed",
    zIndex: -1,
    backgroundColor: "black",
});

function AmsterdamHaven({ partnerConfig }: HavenProps) {

    return (
        <>  
            { /* Background Image */}
            <BackgroundDiv minHeight={"100vh"} minWidth={"100vw"} height={"100%"} width={"100%"}>
                <img className="opacity-40 w-full h-full object-cover" src={partnerConfig.Haven.content.backgroundImage} />
            </BackgroundDiv>

            <AmsterdamNavBar />
            
            {/* Main Container */}
            <Stack minHeight={"100vh"} direction={"column"}>
                { /* <!-- acts as a spacer --> */ }
                <NavBar icon={<></>} title={":))"} actions={[]} />
                <AmsterdamHero config={partnerConfig.Haven.text.hero} />
                <AmsterdamInfo config={partnerConfig.Haven.text.info} />
            </Stack>
        </>
    )

}

export default AmsterdamHaven;