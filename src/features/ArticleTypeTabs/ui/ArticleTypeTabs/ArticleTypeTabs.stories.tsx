import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';


const meta = {
  title: 'entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Normal: Story = {
//     args: {},
// };
