import { Product, getCartItems, productsActions } from '@entities/Product';
import { useDispatch, useSelector } from 'react-redux';
import { classNames, lsController } from '@shared/lib';
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
    (product: Product) => {
      lsController.addItem(product);
      dispatch(productsActions.addToCart(product));
    },
    [dispatch],
  );

  const removeItem = useCallback(
    (product: Product) => {
      lsController.removeItem(product.id);
      dispatch(productsActions.removeItem(product));
    },
    [dispatch],
  );

  const clearItem = useCallback(
    (product: Product) => {
      lsController.clearItem(product.id);
      dispatch(productsActions.clearItem(product.id));
    },
    [dispatch],
  );

  return (
    <div className={classNames(cls.checkoutContainer, {}, [className])}>
      <h3 className={cls.heading}>Корзина</h3>
      <div className={cls.Checkout}>
        {cartItems.length ? (
          <>
            <ul className={cls.items}>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt="" height={240} />
                  <div className={cls.itemInfo}>
                    <h4>{item.title}</h4>
                    <p className={cls.total}>
                      {item.price} ₽ X {item.amount} ={' '}
                      {item.price * item.amount} ₽
                    </p>
                    <div className={cls.controls}>
                      <Button
                        theme={ButtonTheme.PRIMARY}
                        squared
                        onClick={() => addItem(item)}
                      >
                        +
                      </Button>
                      <Button
                        theme={ButtonTheme.PRIMARY}
                        squared
                        onClick={() => removeItem(item)}
                      >
                        -
                      </Button>
                      <Button
                        theme={ButtonTheme.CLEAR}
                        squared
                        onClick={() => clearItem(item)}
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
