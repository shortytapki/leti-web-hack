import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Product, getAllProducts } from '@entities/Product';
import { classNames } from '@shared/lib';
import cls from './ProductPage.module.css';
import { useMemo } from 'react';

const ProductPage = () => {
  const allProducts = useSelector(getAllProducts);
  const { id } = useParams();

  const pickedProduct = useMemo(
    () => allProducts.find((p) => p.id === Number(id)) as Product,
    [id, allProducts],
  );
  const { name, image, price, description } = pickedProduct;
  return (
    <div className={classNames(cls.ProductPage, {}, [])}>
      <div className={cls.contents}>
        <div>
          <h1>{name}</h1>
          <img src={image} height={700} />
        </div>
        <p className={cls.description}>{description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
