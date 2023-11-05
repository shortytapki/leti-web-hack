import { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames, type Mods } from '@shared/lib';
import cls from './Button.module.css';

export enum ButtonTheme {
  PRIMARY = 'primary',
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  theme?: ButtonTheme;
  squared?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    disabled,
    theme = ButtonTheme.OUTLINE,
    squared,
    ...restProps
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls.disabled]: disabled,
    [cls.squared]: squared,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [className, 'tr-main'])}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};
