import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';
import avatar from '@/shared/assets/tests/storybook.jpg';


const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'ulbi tv',
      first: 'asd',
      city: 'asf',
      currency: Currency.USD,
      avatar,
    },
  },
};

export const withError: Story = {
  args: {
    error: 'true'
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};




