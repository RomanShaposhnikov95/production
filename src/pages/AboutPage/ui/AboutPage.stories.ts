import type { Meta, StoryObj } from '@storybook/react';

import AboutPage from './AboutPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
  args: {

  },
};

export const Dark: Story = {
  args: {

  },

  decorators: [ThemeDecorator(Theme.DARK)]
};


