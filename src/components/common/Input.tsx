import React, { InputHTMLAttributes } from 'react';
import styles from './styles/Input.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`${styles.input} ${className || ''}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';