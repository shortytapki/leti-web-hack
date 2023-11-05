import { useSelector } from 'react-redux';
import { getAllProducts, getCurrency } from '@entities/Product';
import { Card } from '@shared/ui';
import { classNames } from '@shared/lib';
import { AppRoutes } from '@shared/config/RouteConfig';
import cls from './MainPage.module.css';

export const MainPage = () => {
  const allProducts = useSelector(getAllProducts);
  const currency = useSelector(getCurrency);

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
      <div className={cls.new}>
        {allProducts.map(({ name, id, image, price }) => (
          <Card
            key={id}
            title={name}
            image={image}
            description={price + currency}
            linkTo={`${AppRoutes.PRODUCT}/${id}`}
          />
        ))}
      </div>
    </>
  );
};
