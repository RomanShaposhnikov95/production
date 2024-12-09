import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'ui/Text',
  component: Text,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
  },
};

export const Error: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    theme: TextTheme.ERROR,
  },
};


export const onlyTitle: Story = {
  args: {
    title: 'Title lorem ipsun',
  },
};

export const onlyText: Story = {
  args: {
    text: 'Description Description Description Description',
  },
};


export const PrimaryDark: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};



export const onlyTitleDark: Story = {
  args: {
    title: 'Title lorem ipsun',
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};


export const onlyTextDark: Story = {
  args: {
    text: 'Description Description Description Description',
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};


export const SizeL: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    size: TextSize.L
  },
};

export const SizeS: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    size: TextSize.S
  },
};



