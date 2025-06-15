import { InfoOutline } from "@mui/icons-material";
import { NavBar } from "../index.js";
import type { Meta, StoryObj } from '@storybook/react-vite';

const navBarMeta = {
    title: "Navbar",
    component: NavBar,
} satisfies Meta<typeof NavBar>

export default navBarMeta;

type Story = StoryObj<typeof navBarMeta>;

export const Default: Story = {
    args: {
        title: "Discord Server",
        icon: <InfoOutline />,
        actions: [
            {
                name: "Home",
                action: () => {}
            },
                        {
                name: "Info",
                action: () => {}
            },
                        {
                name: "News",
                action: () => {}
            },
                        {
                name: "Highlights",
                action: () => {}
            }
        ]
    }
}