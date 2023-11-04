import { ThemeSwitcher } from '../../ThemeSwitcher/ui/ThemeSwitcher';
import { NavbarItemsList } from '../model/items';
import { AppLink } from '@shared/ui/AppLink/AppLink';
import cls from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={cls.Navbar}>
      <h1 className={cls.logo}>M e r c h k i l l a</h1>
      <div className={cls.controls}>
        <ul className={cls.links}>
          {NavbarItemsList.map((item) => (
            <li>
              <AppLink to={item.path} key={item.path}>
                {item.text}
              </AppLink>
            </li>
          ))}
        </ul>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
