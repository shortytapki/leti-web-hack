import { AppLink, Button, ButtonTheme, Logo } from '@shared/ui';
import { MenuIcon } from '@shared/assets/icons';
import { useState } from 'react';
import { classNames } from '@shared/lib';
import { NavbarItemsList } from '../model/items';
import { ThemeSwitcher } from '../../ThemeSwitcher/ui/ThemeSwitcher';
import cls from './Navbar.module.css';

export const Navbar = () => {
  const [mobileNavIsVisible, setMobileNavIsVisible] = useState(false);
  const openMenu = () => {
    setMobileNavIsVisible(!mobileNavIsVisible);
  };
  return (
    <nav className={cls.Navbar}>
      <Logo />
      <div className={cls.controls}>
        <Button
          theme={ButtonTheme.CLEAR}
          className={cls.menuBtn}
          onClick={openMenu}
        >
          <MenuIcon />
        </Button>
        <ul
          className={classNames(cls.mobileNavigation, {
            [cls.show]: mobileNavIsVisible,
          })}
        >
          {NavbarItemsList.map((item) => (
            <li key={item.path}>
              <AppLink to={item.path}>{item.text}</AppLink>
            </li>
          ))}
        </ul>
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
