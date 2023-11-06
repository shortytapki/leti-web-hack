import {
  CategoryId,
  categoriesList,
  getPickedCategory,
  productsActions,
} from '@entities/Product';
import { classNames } from '@shared/lib';
import { useDispatch, useSelector } from 'react-redux';
import { CrossIcon } from '@shared/assets/icons';
import { Button, ButtonTheme } from '@shared/ui';
import { useCallback } from 'react';
import cls from './CategoriesSwitcher.module.css';

export const CategoriesSwitcher = () => {
  const pickedCategory = useSelector(getPickedCategory);
  const dispatch = useDispatch();

  const pickCategory = (id: CategoryId) => {
    dispatch(productsActions.setPickedCategory(id));
  };

  const clearPick = useCallback(
    () => dispatch(productsActions.setPickedCategory(undefined)),
    [dispatch],
  );

  return (
    <div className={cls.CategoriesSwitcher}>
      {categoriesList.map(({ id, name }) => (
        <span
          key={name}
          className={classNames(
            cls.categoryChoice,
            { [cls.picked]: pickedCategory === id },
            ['tr-main'],
          )}
          onClick={() => pickCategory(id)}
        >
          {name}
        </span>
      ))}
      {pickedCategory && (
        <Button theme={ButtonTheme.CLEAR} onClick={clearPick}>
          <CrossIcon />
        </Button>
      )}
    </div>
  );
};
