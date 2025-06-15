import { Button, Stack, type StackProps } from "@mui/material";
import type { FC, ReactNode } from "react";
import Typography from "../../atoms/Typography";

export interface NavBarAction {
    name: string;
    action: (e: Event) => void;
    style?: React.CSSProperties;
}

export interface NavBarProps extends StackProps {
    icon: ReactNode;
    title: string;
    actions: NavBarAction[]
}

const NavBar : FC<NavBarProps> = ( {icon, title, actions, ...props}: NavBarProps) => {
    
    return (
        <>
            <Stack {...props} alignItems={"center"} alignContent={"center"} justifyContent={"space-between"} direction={"row"}>
            
                <Stack ml={'5px'} alignItems={"center"} direction={"row"}>
                    {icon}
                    <Typography variant="h6" paddingLeft={1}>{title}</Typography>
                </Stack>
             
                <Stack direction={"row"}>
                    {actions.map( action => {
                        return <Button style={action.style} ><Typography paddingLeft={1} paddingRight={1} variant={"button"}>{action.name}</Typography></Button>
                    })}
                </Stack>

                {props.children}
             
            </Stack>
        </>
    );
}

export default NavBar;