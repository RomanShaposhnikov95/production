import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';


const meta = {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const Notification = {
  id: '1',
  title: 'title',
  description: 'description',
}


export const Normal: Story = {
  args: { item: Notification },
};