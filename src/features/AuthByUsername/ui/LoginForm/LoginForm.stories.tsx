import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'widget/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {

  },
  decorators: [StoreDecorator({
    loginForm: { username: 'admin', password: '123', isLoading: false }
  })]
};

