import { User, login } from '@entities/User';
import { Button, ButtonTheme, InputStyles } from '@shared/ui';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<User>();

  const dispatch = useDispatch();

  const onSubmit = (data: User) => {
    // @ts-expect-error type mismatch
    void dispatch(login(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="centered">
      <input
        className={InputStyles.Input}
        placeholder="Имя пользователя"
        minLength={6}
        {...register('username', { required: 'Обязательное поле' })}
      />
      {errors.username &&
        'Обязательное поле, имя пользователя должно не должно содержать пробелов.'}
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
      {errors.password &&
        'Обязательное поле, пароль не должен содержать пробелов.'}
      <Button type="submit" theme={ButtonTheme.PRIMARY} className="pd-button">
        Войти
      </Button>
    </form>
  );
};
