import type { Meta, StoryObj } from '@storybook/react';
import { ArticleSortSelector } from './ArticleSortSelector';


const meta = {
  title: 'entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Normal: Story = {
//     args: {},
// };
