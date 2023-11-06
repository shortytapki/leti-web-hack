import { SearchIcon } from '@shared/assets/icons';
import { InputStyles } from '@shared/ui';
import { classNames } from '@shared/lib';
import { InputHTMLAttributes } from 'react';
import cls from './Searchbar.module.css';

interface SearchbarProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Searchbar = ({ className, onChange, value }: SearchbarProps) => {
  return (
    <div className={classNames(cls.Searchbar, {}, [className])}>
      <SearchIcon />
      <input
        type="text"
        placeholder="Поиск по товарам"
        className={InputStyles.Input}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
