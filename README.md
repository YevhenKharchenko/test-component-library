# React Component Library

A modern UI component library built with React, TypeScript, and Storybook.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook
```

Visit `http://localhost:6006` to view components.

## 📦 Components

### Input

Smart input field with password toggle and clear functionality.

```tsx
import { Input } from './components/Input';

<Input label="Email" type="email" clearable fullWidth />;
```

**Props:** `type`, `label`, `error`, `helperText`, `clearable`, `onClear`, `fullWidth`, `disabled`

### Toast

Auto-dismissing notifications with smooth animations.

```tsx
import { Toast } from './components/Toast';

<Toast message="Success!" type="success" duration={3000} onClose={() => setShow(false)} />;
```

**Props:** `message`, `type` (success/error/warning/info), `duration`, `showCloseButton`, `onClose`

### SidebarMenu

Sliding navigation menu with nested items.

```tsx
import { SidebarMenu } from './components/SidebarMenu';

const items = [
  { id: '1', label: 'Dashboard', icon: '📊' },
  {
    id: '2',
    label: 'Products',
    icon: '📦',
    children: [{ id: '2-1', label: 'All Products' }],
  },
];

<SidebarMenu items={items} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
```

**Props:** `items`, `isOpen`, `onClose`, `width`, `showOverlay`

## 📸 Screenshots

### Input Component States

![Input - Basic](./screenshots/input-basic.png) _Text input with label_

![Input - Password](./screenshots/input-password.png) _Password with toggle visibility_

![Input - Clearable](./screenshots/input-clearable.png) _Input with clear button_

![Input - Error](./screenshots/input-error.png) _Error state with validation message_

![Input - Disabled](./screenshots/input-disabled.png) _Disabled state_

### Toast Component Types

![Toast - Success](./screenshots/toast-success.png) _Success notification_

![Toast - Error](./screenshots/toast-error.png) _Error notification_

![Toast - Warning](./screenshots/toast-warning.png) _Warning notification_

![Toast - Info](./screenshots/toast-info.png) _Info notification_

### SidebarMenu Component States

![Sidebar - Closed](./screenshots/sidebar-closed.png) _Sidebar hidden_

![Sidebar - Open](./screenshots/sidebar-open.png) _Basic menu open_

![Sidebar - Nested](./screenshots/sidebar-nested.png) _Nested menu expanded_

![Sidebar - Deep Nested](./screenshots/sidebar-deep-nested.png) _Deep nested menu expanded_

## 🛠️ Tech Stack

- React 18
- TypeScript
- Storybook 7
- CSS Modules
- Vite

## 📁 Structure

```
src/
├── components/
│   ├── Input/
│   │   ├── Input.tsx
│   │   ├── Input.module.css
│   │   └── index.ts
│   ├── Toast/
│   │   ├── Toast.tsx
│   │   ├── Toast.module.css
│   │   └── index.ts
│   └── SidebarMenu/
│       ├── SidebarMenu.tsx
│       ├── SidebarMenu.module.css
│       └── index.ts
└── stories/
    ├── Input.stories.tsx
    ├── Toast.stories.tsx
    └── SidebarMenu.stories.tsx
```

## ✨ Features

- 🎯 TypeScript support
- 📱 Responsive design
- ♿ Accessible (ARIA)
- 🎭 Smooth animations
- 📚 Storybook docs

## 📄 License

MIT
