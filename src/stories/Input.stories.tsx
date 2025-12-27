import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel'],
    },
    clearable: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const PasswordWithClear: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    clearable: true,
  },
};

export const Email: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'you@example.com',
    helperText: "We'll never share your email",
  },
};

export const WithClearButton: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    clearable: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    value: 'invalid@',
    error: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true,
    value: 'Disabled value',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width',
    placeholder: 'This takes full width',
    fullWidth: true,
    clearable: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const Number: Story = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: 'Enter your age',
    helperText: 'Must be 18 or older',
  },
};
