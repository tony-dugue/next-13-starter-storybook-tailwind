import type { Meta, StoryObj } from '@storybook/react';
import Footer, { IFooter } from './Footer';
import { mockFooterProps } from './Footer.mocks';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Footer> = {
  title: 'common/Footer',
  component: Footer,
  //tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Base: Story = {
  args: {
    ...mockFooterProps.base,
  } as IFooter,
};
