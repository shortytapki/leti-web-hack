import { User, register as regiserNewUser } from '@entities/User';
import { Button, ButtonTheme, InputStyles } from '@shared/ui';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<User & { passwordMatch: string }>();

  const dispatch = useDispatch();

  const onSubmit = (data: User) => {
    void dispatch(
      // @ts-expect-error type mismatch
      regiserNewUser({
        username: data.username,
        password: data.password,
        email: data.email,
      }),
    );
  };

  const { password, passwordMatch } = getValues();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Почта"
        className={InputStyles.Input}
        {...register('email', { required: 'Обязательное поле' })}
      />
      <input
        className={InputStyles.Input}
        placeholder="Имя пользователя"
        minLength={6}
        {...register('username', { required: 'Обязательное поле' })}
      />
      {errors.username && (
        <p>
          Обязательное поле, имя пользователя должно не должно содержать
          пробелов.
        </p>
      )}
      <input
        className={InputStyles.Input}
        placeholder="Пароль"
        type="password"
        minLength={8}
        {...register('password', {
          required: 'Обязательное поле',
          validate: {
            noWhiteSpaces: (v) => /\S/g.test(v),
          },
        })}
      />
      {errors.password && (
        <p>Обязательное поле, пароль не должен содержать пробелов</p>
      )}
      <input
        className={InputStyles.Input}
        placeholder="Повторите пароль"
        type="password"
        minLength={8}
        {...register('passwordMatch', {
          required: 'Обязательное поле',
          validate: {
            noWhiteSpaces: (v) => /\S/g.test(v),
            equals: (v) => v === password,
          },
        })}
      />
      {errors.password && (
        <p>Обязательное поле, пароль не должен содержать пробелов.</p>
      )}
      {password !== passwordMatch && <p>Пароли не совпадают.</p>}
      <Button type="submit" theme={ButtonTheme.PRIMARY} className="pd-button">
        Зарегистрироваться
      </Button>
    </form>
  );
};
