import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {

  },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
  args: {

  },

  decorators: [StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'ulbi tv',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD,
      },
    },
  })]
};

export const Dark: Story = {
  args: {

  },

  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'ulbi tv',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD,
      },
    },
  })]
};


