import type { Meta, StoryObj } from '@storybook/react';
import MainLayout, { IMainLayout } from './MainLayout';
import { mockMainLayoutProps } from './MainLayout.mocks';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof MainLayout> = {
  title: 'layouts/MainLayout',
  component: MainLayout,
  //tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MainLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Base: Story = {
  args: {
    ...mockMainLayoutProps.base,
  } as IMainLayout,
};
