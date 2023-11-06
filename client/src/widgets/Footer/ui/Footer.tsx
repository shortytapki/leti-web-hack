import { AppLink, Logo } from '@shared/ui';
import cls from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={cls.footer}>
      <Logo />
      <AppLink to="/devs">О разработчиках</AppLink>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
};
