import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
  args: {

  },
  decorators: [StoreDecorator({

  })]
};


export const Dark: Story = {
  args: {

  },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};


export const AuthNavbar: Story = {
  args: {

  },
  decorators: [StoreDecorator({
    user: { authData: { id: '1', username: 'exampleUsername' } },
  })]
};

