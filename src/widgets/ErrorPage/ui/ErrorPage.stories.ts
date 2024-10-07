import type { Meta, StoryObj } from '@storybook/react';

import { ErrorPage } from './ErrorPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'widget/ErrorPage',
  component: ErrorPage,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
  args: {

  },
};


export const Dark: Story = {
  args: {

  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
