import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Product,
  fetchProducts,
  getAllProducts,
  getCartItems,
  getCurrency,
  productsActions,
} from '@entities/Product';
import { classNames, lsController } from '@shared/lib';
import { useCallback, useEffect, useMemo } from 'react';
import { Button, ButtonTheme } from '@shared/ui';
import cls from './ProductPage.module.css';

const ProductPage = () => {
  const allProducts = useSelector(getAllProducts);
  const currency = useSelector(getCurrency);
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();
  const { id } = useParams();

  let productImage, productPrice, productDescription, productTitle;

  const amountInCart = cartItems.find((item) => item.id === Number(id))?.amount;
  const pickedProduct = useMemo(
    () => allProducts.find((p) => p.id === Number(id)) as Product,
    [id, allProducts],
  );

  if (pickedProduct) {
    const { title, image, price, description } = pickedProduct;
    productImage = image;
    productPrice = price;
    productTitle = title;
    productDescription = description;
  }

  const addProduct = useCallback(() => {
    lsController.addItem(pickedProduct);
    dispatch(productsActions.addToCart(pickedProduct));
  }, [dispatch, pickedProduct]);

  useEffect(() => {
    if (!allProducts.length) {
      //@ts-expect-error mismatch types
      void dispatch(fetchProducts());
    }
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProductPage, {}, ['centered'])}>
      {pickedProduct && (
        <>
          <header>
            <h2>{productTitle}</h2>
            <div>
              <img src={productImage} className={cls.image} />
            </div>
          </header>
          <footer>
            <strong className={cls.price}>{productPrice + currency}</strong>
            <p className={cls.description}>{productDescription}</p>
            <div className={cls.controls}>
              <Button theme={ButtonTheme.PRIMARY} squared onClick={addProduct}>
                +
              </Button>
              <span>Добавить в корзину</span>
            </div>
            {amountInCart && <p>В корзине: {amountInCart}</p>}
          </footer>
        </>
      )}
    </div>
  );
};

export default ProductPage;
