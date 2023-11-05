import { memo, type InputHTMLAttributes, type ChangeEvent } from 'react';
import { classNames } from '@shared/lib';
import cls from './Input.module.css';

type CustomHTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'placeholder'
>;

interface InputProps extends CustomHTMLInputProps {
  className?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...otherProps
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      className={classNames(cls.Input, {}, [className])}
      type={type}
      value={value}
      onChange={onChangeHandler}
      autoFocus={autoFocus}
      placeholder={placeholder}
      {...otherProps}
    />
  );
});
