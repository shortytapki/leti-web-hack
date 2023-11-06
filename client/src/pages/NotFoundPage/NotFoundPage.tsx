import { AppLink } from '@shared/ui';
import cls from './NotFoundPage.module.css';
import { RoutePaths } from '@shared/config/RouteConfig';

const NotFoundPage = () => {
  return (
    <div className={cls.NotFoundPage}>
      <div>
        <h2>404</h2>
        <p>Запрашиваемая страница не найдена.</p>
        <AppLink to={RoutePaths.main}>На главную</AppLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
