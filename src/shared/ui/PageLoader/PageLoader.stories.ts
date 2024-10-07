import type {Meta, StoryObj} from '@storybook/react';

import {PageLoader} from './PageLoader';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'ui/PageLoader',
    component: PageLoader,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    args: {

    },
};

export const Dark: Story = {
    args: {

    },

    decorators: [ThemeDecorator(Theme.DARK)]
};


