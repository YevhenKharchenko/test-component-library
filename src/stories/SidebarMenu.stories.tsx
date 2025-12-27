import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import SidebarMenu from '../components/SidebarMenu';
import type { MenuItem } from '../components/SidebarMenu';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

const basicItems: MenuItem[] = [
  { id: '1', label: 'Home', icon: '🏠' },
  { id: '2', label: 'About', icon: 'ℹ️' },
  { id: '3', label: 'Contact', icon: '📧' },
];

const nestedItems: MenuItem[] = [
  { id: '1', label: 'Dashboard', icon: '📊' },
  {
    id: '2',
    label: 'Products',
    icon: '📦',
    children: [
      { id: '2-1', label: 'All Products' },
      { id: '2-2', label: 'Categories' },
      { id: '2-3', label: 'Inventory' },
    ],
  },
  {
    id: '3',
    label: 'Orders',
    icon: '🛒',
    children: [
      { id: '3-1', label: 'All Orders' },
      { id: '3-2', label: 'Pending' },
      { id: '3-3', label: 'Completed' },
    ],
  },
  { id: '4', label: 'Customers', icon: '👥' },
  {
    id: '5',
    label: 'Settings',
    icon: '⚙️',
    children: [
      { id: '5-1', label: 'Profile' },
      { id: '5-2', label: 'Notifications' },
      { id: '5-3', label: 'Security' },
    ],
  },
];

const deepNestedItems: MenuItem[] = [
  {
    id: '1',
    label: 'Level 1',
    icon: '📁',
    children: [
      {
        id: '1-1',
        label: 'Level 2',
        children: [
          {
            id: '1-1-1',
            label: 'Level 3',
            children: [{ id: '1-1-1-1', label: 'Deep Item' }],
          },
        ],
      },
    ],
  },
];

const Wrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        Open Sidebar
      </button>

      <SidebarMenu {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export const Basic: Story = {
  render: args => <Wrapper {...args} />,
  args: {
    items: basicItems,
    width: 320,
  },
};

export const WithNesting: Story = {
  render: args => <Wrapper {...args} />,
  args: {
    items: nestedItems,
    width: 320,
  },
};

export const DeepNesting: Story = {
  render: args => <Wrapper {...args} />,
  args: {
    items: deepNestedItems,
    width: 320,
  },
};

export const Narrow: Story = {
  render: args => <Wrapper {...args} />,
  args: {
    items: nestedItems,
    width: 250,
  },
};

export const Wide: Story = {
  render: args => <Wrapper {...args} />,
  args: {
    items: nestedItems,
    width: 400,
  },
};
