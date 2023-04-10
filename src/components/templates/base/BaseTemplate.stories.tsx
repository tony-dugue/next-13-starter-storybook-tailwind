import type { Meta, StoryObj } from '@storybook/react';
import BaseTemplate, { IBaseTemplate } from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof BaseTemplate> = {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  //tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BaseTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Base: Story = {
  args: {
    ...mockBaseTemplateProps.base,
  } as IBaseTemplate,
};
