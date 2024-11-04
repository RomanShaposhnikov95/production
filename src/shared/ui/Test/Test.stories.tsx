import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Test } from './Test';


const meta = {
  title: 'ui/Test',
  component: Test,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {},
};