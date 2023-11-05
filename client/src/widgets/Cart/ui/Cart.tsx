import { classNames } from '@shared/lib';
import cls from './Cart.module.css';

interface CartProps {
  className?: string;
}

export const Cart = ({ className }: CartProps) => {
  return <div className={classNames(cls.Cart, {}, [className])}></div>;
};
