import type { Meta, StoryObj } from '@storybook/react';
import { DS_Input } from '.';

const meta: Meta<typeof DS_Input> = {
    title: 'Design System/DS_Input',
    component: DS_Input,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Campo de entrada de texto com suporte a label flutuante, estados de erro e foco.',
            },
        },
    },
    argTypes: {
        hasError: {
            control: 'boolean',
            description: 'Indica se o campo está em estado de erro.',
        },
        errorMessage: {
            control: 'text',
            description: 'Mensagem de erro exibida quando `hasError` é verdadeiro.',
        },
        label: {
            control: 'text',
            description: 'Texto da label associada ao input.',
        },
        isFloating: {
            control: 'boolean',
            description: 'Define se a label deve flutuar acima do input.',
        },
        isFocused: {
            control: 'boolean',
            description: 'Define se o input deve iniciar com foco.',
        },
        onChange: { action: 'alterado' },
    },
};

export default meta;

type Story = StoryObj<typeof DS_Input>;

export const Padrao: Story = {
    args: {
        label: 'Nome completo',
        placeholder: 'Digite seu nome',
        isFloating: true,
        hasError: false,
    },
};

export const ComErro: Story = {
    args: {
        label: 'E-mail',
        placeholder: 'exemplo@email.com',
        hasError: true,
        errorMessage: 'E-mail inválido',
    },
};
