import type { Meta, StoryObj } from '@storybook/react-vite'
import{ StatsCard } from '../index.js'
import { People } from '@mui/icons-material';

export default {
    title: "StatsCard",
    component: StatsCard,
} satisfies Meta<typeof StatsCard>

type Story = StoryObj<typeof StatsCard>;

export const Default: Story = {
    args: {
        stat: "4000",
        subtitle: "Members",
        icon: <People />    
    }
}