import React, { useState, forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: 'text' | 'password' | 'email' | 'number' | 'tel';
  label?: string;
  error?: string;
  helperText?: string;
  clearable?: boolean;
  onClear?: () => void;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      label,
      error,
      helperText,
      clearable = false,
      onClear,
      fullWidth = false,
      className = '',
      value,
      onChange,
      disabled,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [internalValue, setInternalValue] = useState('');

    const currentValue = value !== undefined ? value : internalValue;
    const isPassword = type === 'password';
    const actualType = isPassword && showPassword ? 'text' : type;
    const showClearButton = clearable && currentValue && !disabled;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (value === undefined) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleClear = () => {
      const syntheticEvent = {
        target: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>;

      if (value === undefined) {
        setInternalValue('');
      }
      onChange?.(syntheticEvent);
      onClear?.();
    };

    const wrapperClasses = [styles.inputWrapper, fullWidth && styles.fullWidth, className]
      .filter(Boolean)
      .join(' ');

    const inputClasses = [
      styles.input,
      error && styles.error,
      disabled && styles.disabled,
      (isPassword || showClearButton) && styles.withIcon,
      isPassword && showClearButton && styles.withBothIcons,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClasses}>
        {label && <label className={`${styles.label} ${error ? styles.error : ''}`}>{label}</label>}

        <div className={styles.inputContainer}>
          <input
            ref={ref}
            type={actualType}
            value={currentValue}
            onChange={handleChange}
            disabled={disabled}
            className={inputClasses}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={disabled}
              className={`${styles.iconButton} ${styles.passwordToggle} ${
                showClearButton ? styles.passwordToggleWithClear : ''
              }`}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          )}

          {showClearButton && (
            <button
              type="button"
              onClick={handleClear}
              className={`${styles.iconButton} ${styles.clearButton}`}
              aria-label="Clear input"
            >
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </button>
          )}
        </div>

        {(error || helperText) && (
          <div className={`${styles.helperText} ${error ? styles.error : ''}`}>
            {error || helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
