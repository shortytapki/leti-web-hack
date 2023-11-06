import { AppLink, Logo } from '@shared/ui';
import cls from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={cls.footer}>
      <Logo />
      <AppLink to="/devs">Разработчики</AppLink>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
};
