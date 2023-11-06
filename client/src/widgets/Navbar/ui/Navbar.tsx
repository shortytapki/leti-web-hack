import { AppLink, Button, ButtonTheme, Logo } from '@shared/ui';
import { MenuIcon } from '@shared/assets/icons';
import { useState } from 'react';
import { classNames, lsController } from '@shared/lib';
import { NavbarItemsList } from '../model/items';
import { ThemeSwitcher } from '../../ThemeSwitcher/ui/ThemeSwitcher';
import cls from './Navbar.module.css';
import { useDispatch } from 'react-redux';
import { userActions } from '@entities/User';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '@shared/config/RouteConfig';

export const Navbar = () => {
  const [mobileNavIsVisible, setMobileNavIsVisible] = useState(false);
  const user = lsController.getUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openMenu = () => {
    setMobileNavIsVisible(!mobileNavIsVisible);
  };

  const handleAuthClick = () => {
    if (user) {
      dispatch(userActions.logout());
      lsController.clearUser();
      navigate(RoutePaths.main);
      return;
    }
    navigate(RoutePaths.auth);
  };
  return (
    <nav className={cls.Navbar}>
      <div>
        <Logo />
        {user && <p className={cls.user}>{user}</p>}
      </div>
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
        <Button
          className={classNames(cls.authBtn, {}, ['pd-button'])}
          theme={ButtonTheme.PRIMARY}
          onClick={handleAuthClick}
        >
          {user ? 'Выйти' : 'Войти'}
        </Button>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
