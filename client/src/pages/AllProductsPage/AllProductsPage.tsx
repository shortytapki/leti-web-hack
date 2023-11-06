import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Product,
  fetchProducts,
  getAllProducts,
  getCurrency,
  getError,
  getPickedCategory,
} from '@entities/Product';
import { Card } from '@shared/ui';
import { CategoriesSwitcher, Searchbar } from '@widgets';
import { AppRoutes } from '@shared/config/RouteConfig';
import cls from './AllProductsPage.module.css';

const AllProductsPage = () => {
  const allProducts = useSelector(getAllProducts);
  const currency = useSelector(getCurrency);
  const pickedCategory = useSelector(getPickedCategory);
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    //@ts-expect-error calling thunk with no arg
    void dispatch(fetchProducts());
  }, [dispatch]);

  const matchSearchString = (product: Product) =>
    product.title.toLowerCase().includes(searchString.toLowerCase());

  const filteredProducts = allProducts
    .filter((product) =>
      pickedCategory ? product.id === pickedCategory : true,
    )
    .filter((product) => (searchString ? matchSearchString(product) : true));

  return (
    error || (
      <div>
        <CategoriesSwitcher />
        <Searchbar
          className={cls.productSearchBar}
          onSearch={setSearchString}
        />
        <section className={cls.products}>
          {filteredProducts.length ? (
            filteredProducts.map(({ title, id, image, price }) => (
              <Card
                key={id}
                title={title}
                image={image}
                subtitle={`${price}${currency}`}
                linkTo={`/${AppRoutes.PRODUCT}/${id}`}
              />
            ))
          ) : (
            <p>Ничего не найдено</p>
          )}
        </section>
      </div>
    )
  );
};

export default AllProductsPage;
