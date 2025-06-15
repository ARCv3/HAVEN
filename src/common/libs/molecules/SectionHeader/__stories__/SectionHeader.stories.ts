
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader } from '../index.js';

const sectionHeaderMeta = {
    title: "SectionHeader",
    component: SectionHeader,
} satisfies Meta<typeof SectionHeader>

export default sectionHeaderMeta;

type Story = StoryObj<typeof sectionHeaderMeta>;

export const Default: Story = {
 
    args: {
        title: "Server Information",
        subtitle: "Discover",
        subHeaderPlacement: "above"
    }
}

