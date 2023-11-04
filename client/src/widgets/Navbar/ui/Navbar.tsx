import { ThemeSwitcher } from '../../ThemeSwitcher/ui/ThemeSwitcher';
import { NavbarItemsList } from '../model/items';
import { AppLink } from '@shared/ui';
import { BeatIcon } from '@shared/assets/icons';
import cls from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={cls.Navbar}>
      <h1 className={cls.logo}>
        <span>F i f t y H e r t z</span> <BeatIcon />
      </h1>
      <div className={cls.controls}>
        <ul className={cls.links}>
          {NavbarItemsList.map((item) => (
            <li key={item.path}>
              <AppLink to={item.path}>{item.text}</AppLink>
            </li>
          ))}
        </ul>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
