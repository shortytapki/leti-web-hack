import { ThemeSwitcher } from '../../ThemeSwitcher/ui/ThemeSwitcher';
import { NavbarItemsList } from '../model/items';
import { AppLink, Button, ButtonTheme } from '@shared/ui';
import { BeatIcon, MenuIcon } from '@shared/assets/icons';
import cls from './Navbar.module.css';
import { useState } from 'react';
import { classNames } from '@shared/lib';

export const Navbar = () => {
  const [mobileNavIsVisible, setMobileNavIsVisible] = useState(false);
  window.addEventListener('resize', () => {});
  const openMenu = () => {
    setMobileNavIsVisible(!mobileNavIsVisible);
  };
  return (
    <nav className={cls.Navbar}>
      <h1 className={cls.logo}>
        <span>F i f t y H e r t z</span> <BeatIcon />
      </h1>
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
