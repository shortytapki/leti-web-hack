import { LoginForm, RegisterForm } from '@features';
import { Button, ButtonTheme } from '@shared/ui';
import { useState } from 'react';
import cls from './AuthPage.module.css';
import { classNames } from '@shared/lib';
import { useSelector } from 'react-redux';
import { getError } from '@entities/User';

const AuthPage = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const error = useSelector(getError);
  return (
    <div>
      {isRegistered ? (
        <>
          <LoginForm />
          <p className={cls.cta}>Нет аккаунта? Зарегистрируйтесь!</p>
          <Button
            theme={ButtonTheme.PRIMARY}
            className={classNames(cls.registerBtn, {}, ['pd-button'])}
            onClick={() => setIsRegistered(false)}
          >
            Зарегистрироваться
          </Button>
        </>
      ) : (
        <>
          <RegisterForm />
          <p className={cls.cta}>Есть аккаунт?</p>
          <Button
            theme={ButtonTheme.PRIMARY}
            className={classNames(cls.registerBtn, {}, ['pd-button'])}
            onClick={() => setIsRegistered(true)}
          >
            Войти
          </Button>
        </>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default AuthPage;
