import { SearchIcon } from '@shared/assets/icons';
import { Input } from '@shared/ui';
import cls from './Searchbar.module.css';
import { classNames } from '@shared/lib';

interface SearchbarProps {
  className?: string;
  onSearch: (value: string) => void;
}

export const Searchbar = ({ className, onSearch }: SearchbarProps) => {
  return (
    <div className={classNames(cls.Searchbar, {}, [className])}>
      <SearchIcon />
      <Input placeholder="Поиск по товарам" onChange={onSearch} />
    </div>
  );
};
