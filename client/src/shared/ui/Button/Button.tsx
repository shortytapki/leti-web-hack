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
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    disabled,
    theme = ButtonTheme.OUTLINE,
    ...restProps
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls.disabled]: disabled,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [className])}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};
