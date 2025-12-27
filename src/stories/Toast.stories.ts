import type { Meta, StoryObj } from '@storybook/react';
import Toast from '../components/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Visual style of the toast',
    },
    duration: {
      control: { type: 'number', min: 0, max: 10000, step: 500 },
      description: 'Auto-dismiss duration (0 = no auto-dismiss)',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Display manual close button',
    },
    message: {
      control: 'text',
      description: 'Toast message content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    message: 'Operation completed successfully!',
    type: 'success',
    duration: 3000,
  },
};

export const Error: Story = {
  args: {
    message: 'Something went wrong. Please try again.',
    type: 'error',
    duration: 3000,
  },
};

export const Warning: Story = {
  args: {
    message: 'This action cannot be undone.',
    type: 'warning',
    duration: 3000,
  },
};

export const Info: Story = {
  args: {
    message: 'New updates are available.',
    type: 'info',
    duration: 3000,
  },
};

export const WithCloseButton: Story = {
  args: {
    message: 'You can manually close this notification.',
    type: 'success',
    duration: 0,
    showCloseButton: true,
  },
};

export const LongDuration: Story = {
  args: {
    message: 'This toast will stay for 10 seconds.',
    type: 'info',
    duration: 10000,
  },
};

export const LongMessage: Story = {
  args: {
    message:
      'This is a much longer message that demonstrates how the toast component handles multiple lines of text. It should wrap nicely and remain readable.',
    type: 'warning',
    duration: 5000,
    showCloseButton: true,
  },
};

export const NoDismiss: Story = {
  args: {
    message: 'This toast requires manual dismissal.',
    type: 'error',
    duration: 0,
    showCloseButton: true,
  },
};
