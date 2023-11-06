import cls from "./Reg.module.css";
import InputLogin from "@shared/ui/InputLogin/InputLogin.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {BackArrow, WelcomeText} from "@shared/ui";

type Inputs = {
    login: string
    password: string,
}
export const Reg = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {
            errors
        },
    } = useForm<Inputs>()

    const formItemsPass = [
        {
            id: 0,
            placeholder: "Введите ваш логин",
            name: "login",
            type: "text",
            label: "Логин",
            options: {
                pattern: {
                    value: /^\S*$/,
                    message: 'В имени не должно быть пробела',
                },
                required: "Обязательное поле"
            }
        },
        {
            id: 1,
            placeholder: "Введите пароль",
            label: "Пароль",
            name: "password",
            type: "password",
            options: {
                required: "Обязательное поле",
                minLength: {
                    message: 'Минимальное количество символов - 8',
                    value: 8,
                },
            }
        },
        {
            id: 2,
            placeholder: "Повторите пароль",
            label: "Подтвердите пароль",
            name: "confirmPassword",
            type: "password",
            options: {
                validate(value: string) {
                    if (value !== watch("password")) {
                        return "Пароли не совпадают"
                    }
                },
                required: "Обязательное поле",
                minLength: {
                    message: 'Минимальное количество символов - 8',
                    value: 8,
                },
            }
        },
    ]
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <form className={cls.GeneralClass} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <BackArrow/>
                <WelcomeText/>
                {
                    formItemsPass.map(item => (
                        <div key={item.id}>
                            <InputLogin
                                type={item.type}
                                errors={errors[item.name]}
                                placeholder={item.placeholder}
                                register={register}
                                name={item.name}
                                options={item.options}
                                label={item.label}
                            />
                        </div>
                    ))
                }
                <div className={cls.paddingStyle}>
                    <button className={cls.btnStyle}>
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </form>
    );
};