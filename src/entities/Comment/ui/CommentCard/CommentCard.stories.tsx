import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { Comment } from 'entities/Comment';


const meta = {
  title: 'shared/CommentCard',
  component: CommentCard,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// const comment: Comment = {
//   'id': '1',
//   'user': {
//     'id': '1',
//     'username': 'admin213',
//     'avatar': 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj'
//   },
//   'text': 'some comment',
// }
//
//
// export const Normal: Story = {
//   args: {
//     comment: comment
//   },
// };
