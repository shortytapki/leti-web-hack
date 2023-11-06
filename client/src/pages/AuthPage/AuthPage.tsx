import { LoginForm, RegisterForm } from '@features';
import { Button, ButtonTheme } from '@shared/ui';
import { useState } from 'react';
import cls from './AuthPage.module.css';
import { classNames } from '@shared/lib';

const AuthPage = () => {
  const [isRegistered, setIsRegistered] = useState(true);
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
    </div>
  );
};

export default AuthPage;
