import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchProducts,
  getAllProducts,
  getCurrency,
  getError,
  getIsLoading,
} from '@entities/Product';
import { Card } from '@shared/ui';
import { classNames } from '@shared/lib';
import { AppRoutes } from '@shared/config/RouteConfig';
import cls from './MainPage.module.css';

export const MainPage = () => {
  const allProducts = useSelector(getAllProducts);
  const currency = useSelector(getCurrency);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-expect-error call with no thunk arg
    void dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <h2 className={cls.heading}>
        FiftyHertz - магазин фирменной продукции СПбГЭТУ ЛЭТИ.
      </h2>
      <p className={cls.slogan}>
        Обозначь наличие заряда в своём образе студента вместе с фирменной
        одеждой и аксессуарами.
      </p>
      <p className={classNames(cls.slogan, {}, ['bold'])}>Новинки:</p>
      {isLoading
        ? 'Загрузка...'
        : error || (
            <div className={cls.new}>
              {allProducts.slice(0, 5).map(({ title, id, image, price }) => (
                <Card
                  key={id}
                  title={title}
                  image={image}
                  subtitle={price + currency}
                  linkTo={`${AppRoutes.PRODUCT}/${id}`}
                />
              ))}
            </div>
          )}
    </>
  );
};
