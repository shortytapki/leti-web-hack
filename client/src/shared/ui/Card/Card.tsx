import { classNames } from '@shared/lib';
import { useState } from 'react';
import cls from './Card.module.css';
import { AppLink } from '..';

interface CardProps {
  title: string;
  image: string;
  subtitle: string;
  className?: string;
  linkTo?: string;
}

export const Card = (props: CardProps) => {
  const { className, image, title, subtitle, linkTo } = props;
  const [isLoading, setIsLoading] = useState(true);
  const toggleLoad = () => setIsLoading(false);

  return (
    <div className={classNames(cls.Card, {}, [className])}>
      <header className={cls.header}>
        {isLoading && 'Загрузка...'}
        <img src={image} alt="" onLoad={() => toggleLoad()} />
      </header>
      <footer className={classNames(cls.footer)}>
        {linkTo ? (
          <AppLink to={linkTo}>
            <h4>{title}</h4>
          </AppLink>
        ) : (
          <h4>{title}</h4>
        )}
        <p className={cls.subtitle}>{subtitle}</p>
      </footer>
    </div>
  );
};
