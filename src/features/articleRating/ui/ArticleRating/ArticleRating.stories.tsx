import type { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'features/≈≈',
  component: ArticleRating,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
  args: {
    articleId: '1',
  },
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [
          {
            rate: 4,
          },
        ],
      },
    ],
  },
  decorators: [StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  })]
};

export const WithoutRate: Story = {
  args: {
    articleId: '1',
  },
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [],
      },
    ],
  },
  decorators: [StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  })]
};
