import React, { useState, useEffect } from 'react';
import styles from './SidebarMenu.module.css';

export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  children?: MenuItem[];
}

export interface SidebarMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
  width?: number;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ items, isOpen, onClose, width = 320 }) => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpanded(newExpanded);
  };

  const renderItem = (item: MenuItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expanded.has(item.id);

    return (
      <div key={item.id}>
        <div
          className={styles.menuItem}
          style={{ paddingLeft: `${20 + level * 16}px` }}
          onClick={() => hasChildren && toggleExpand(item.id)}
        >
          {item.icon && <span className={styles.icon}>{item.icon}</span>}
          <span className={styles.label}>{item.label}</span>
          {hasChildren && (
            <span className={`${styles.arrow} ${isExpanded ? styles.arrowExpanded : ''}`}>▶</span>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className={styles.submenu}>
            {item.children!.map(child => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}

      <div
        className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
        style={{ width: `${width}px` }}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>Menu</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles.content}>{items.map(item => renderItem(item))}</div>

        <div className={styles.footer}>Press ESC to close</div>
      </div>
    </>
  );
};

export default SidebarMenu;
