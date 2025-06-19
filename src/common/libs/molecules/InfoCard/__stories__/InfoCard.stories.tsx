import type { Meta, StoryObj } from '@storybook/react-vite'
import{ InfoCard } from '../index.js';
import { QuestionAnswer } from '@mui/icons-material';

export default {
    title: "InfoCard",
    component: InfoCard,
} satisfies Meta<typeof InfoCard>

type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {
    args: {
        icon: <QuestionAnswer />,
        title: "Active Community",
        description: "Join discussions on various topics with our friendly and welcoming community members."
    }
}