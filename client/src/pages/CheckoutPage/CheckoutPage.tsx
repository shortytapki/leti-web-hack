import { getCartItems, productsActions } from '@entities/Product';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@shared/lib';
import { Button, ButtonTheme } from '@shared/ui';
import { CrossIcon } from '@shared/assets/icons';
import { useCallback } from 'react';
import cls from './CheckoutPage.module.css';

interface CheckoutPageProps {
  className?: string;
}

const CheckoutPage = ({ className }: CheckoutPageProps) => {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  const addItem = useCallback(
    (id: number) => dispatch(productsActions.addToCart(id)),
    [dispatch],
  );

  const removeItem = useCallback(
    (id: number) => dispatch(productsActions.removeItem(id)),
    [dispatch],
  );

  const clearItem = useCallback(
    (id: number) => dispatch(productsActions.clearItem(id)),
    [dispatch],
  );

  return (
    <div className={classNames(cls.checkoutContainer, {}, [className])}>
      <h3 className={cls.heading}>Корзина</h3>
      <div className={cls.Checkout}>
        {cartItems.length ? (
          <>
            <ul className={cls.items}>
              {cartItems.map(({ id, amount, name, price, image }) => (
                <li key={id}>
                  <img src={image} alt="" height={240} />
                  <div>
                    <h4>{name}</h4>
                    <p>
                      <span>
                        {price} ₽ X {amount} = {price * amount} ₽
                      </span>
                    </p>
                    <div className={cls.controls}>
                      <Button
                        theme={ButtonTheme.PRIMARY}
                        squared
                        onClick={() => addItem(id)}
                      >
                        +
                      </Button>
                      <Button
                        theme={ButtonTheme.PRIMARY}
                        squared
                        onClick={() => removeItem(id)}
                      >
                        -
                      </Button>
                      <Button
                        theme={ButtonTheme.CLEAR}
                        squared
                        onClick={() => clearItem(id)}
                      >
                        <CrossIcon />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <aside>
              <strong>
                Итого: <br />
                {cartItems.reduce(
                  (acc, item) => acc + item.price * item.amount,
                  0,
                )}{' '}
                ₽
              </strong>
            </aside>
          </>
        ) : (
          <p>В корзине пока пусто.</p>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
