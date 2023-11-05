import cls from './MainPage.module.css';
import { CardPhoto } from '@features/CardPhoto';

const MainPageWidget = () => {
  return (
    <div className={cls.container}>
      <div className={cls.generalBlock}>
        <CardPhoto />
      </div>
    </div>
  );
};

export default MainPageWidget;
