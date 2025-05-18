import type { Meta, StoryObj } from '@storybook/react';

import { DS_Button } from '.';

const meta: Meta<typeof DS_Button> = {
    title: 'Design System/DS_Button',
    component: DS_Button,
    parameters: {
        layout: 'centered',

        docs: {
            description: {
                component: 'Este é o botão principal do Design System.',
            },
        },

    },
    argTypes: {
        state: {
            control: { type: 'radio' },
            options: ['primary', 'secondary', 'accent'],
        },
        size: {
            control: { type: 'select' },
            options: ['default', 'medium', 'large', 'ultra-large'],
        },
        leftIcon: {
            control: false,
        },
        onClick: { action: 'clicked' },
    },
};

export default meta;

type Story = StoryObj<typeof DS_Button>;

export const Padrao: Story = {
    args: {
        state: 'primary',
        size: 'default',
        children: 'Entrar'
    },
};
