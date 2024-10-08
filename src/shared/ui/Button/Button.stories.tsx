import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ButtonSize, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ClearDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const ClearLight: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const OutlineLight: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  },
};

export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true
  },
};


export const SquareL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
  },
};

export const SquareXL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
  },
};
