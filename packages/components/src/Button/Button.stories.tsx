import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    onPress: () => console.log('Primary button pressed'),
    variant: 'primary',
    size: 'medium',
    theme: 'light',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    onPress: () => console.log('Secondary button pressed'),
    variant: 'secondary',
    size: 'medium',
    theme: 'light',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline Button',
    onPress: () => console.log('Outline button pressed'),
    variant: 'outline',
    size: 'medium',
    theme: 'light',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost Button',
    onPress: () => console.log('Ghost button pressed'),
    variant: 'ghost',
    size: 'medium',
    theme: 'light',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    onPress: () => console.log('Small button pressed'),
    size: 'small',
    theme: 'light',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    onPress: () => console.log('Large button pressed'),
    size: 'large',
    theme: 'light',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    onPress: () => console.log('Disabled button pressed'),
    disabled: true,
    theme: 'light',
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading Button',
    onPress: () => console.log('Loading button pressed'),
    loading: true,
    theme: 'light',
  },
};

export const DarkTheme: Story = {
  args: {
    label: 'Dark Theme Button',
    onPress: () => console.log('Dark theme button pressed'),
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Button label="Primary" variant="primary" onPress={() => {}} />
      <Button label="Secondary" variant="secondary" onPress={() => {}} />
      <Button label="Outline" variant="outline" onPress={() => {}} />
      <Button label="Ghost" variant="ghost" onPress={() => {}} />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Button label="Small" size="small" onPress={() => {}} />
      <Button label="Medium" size="medium" onPress={() => {}} />
      <Button label="Large" size="large" onPress={() => {}} />
    </div>
  ),
}; 