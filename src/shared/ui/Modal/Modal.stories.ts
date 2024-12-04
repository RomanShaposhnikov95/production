import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'ui/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum'
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};



