import { classNames } from '@shared/lib';
import { LinkProps, NavLink } from 'react-router-dom';
import { ReactNode, memo } from 'react';
import cls from './AppLink.module.css';

interface AppLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
}

export const AppLink = memo(({ className, children, to }: AppLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(cls.AppLink, { [cls.active]: isActive }, [
          className,
          'tr-main',
        ])
      }
    >
      {children}
    </NavLink>
  );
});
