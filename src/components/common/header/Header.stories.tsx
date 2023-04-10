import type { Meta, StoryObj } from '@storybook/react';
import Header, { IHeader } from './Header';
import { mockHeaderProps } from './Header.mocks';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Header> = {
  title: 'common/Header',
  component: Header,
  //tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Base: Story = {
  args: {
    ...mockHeaderProps.base,
  } as IHeader,
};
