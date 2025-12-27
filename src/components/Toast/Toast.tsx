import React, { useEffect, useState } from 'react';
import styles from './Toast.module.css';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  showCloseButton?: boolean;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 3000,
  showCloseButton = false,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
      default:
        return 'ℹ';
    }
  };

  return (
    <div className={`${styles.toast} ${styles[type]} ${isExiting ? styles.exit : ''}`} role="alert">
      <div className={styles.icon}>{getIcon()}</div>
      <div className={styles.message}>{message}</div>
      {showCloseButton && (
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close notification"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Toast;
