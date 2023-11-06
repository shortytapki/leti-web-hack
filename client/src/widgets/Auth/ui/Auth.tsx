import {SubmitHandler, useForm} from "react-hook-form";
import cls from "./Auth.module.css"
import {formItemsPass} from "@widgets/Auth";
import InputLogin from "@shared/ui/InputLogin/InputLogin.tsx";
import ButtonLogin from "@shared/ui/ButtonLogin/ButtonLogin.tsx";
import {WelcomeText} from "@shared/ui";
import {useState} from "react";

type Inputs = {
    login: string
    password: string,
}
export const Authe = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        watch,
    } = useForm<Inputs>()

    const [regOrAuth, setRegOrAuth] = useState<boolean>(true)
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    const formItemsPassword = [
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

    return (
        <>
            <form className={cls.GeneralClass} onSubmit={handleSubmit(onSubmit)}>
                <WelcomeText/>
                {regOrAuth ?
                    <div>
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
                                Войти
                            </button>
                        </div>
                        <div onClick={() => setRegOrAuth(!regOrAuth)} className={cls.regBtn}>
                            <ButtonLogin path="">
                                Зарегистрироваться
                            </ButtonLogin>
                        </div>
                    </div>
                    :
                    <div>
                        <img className={cls.imgStyle} onClick={() => setRegOrAuth(true)} src="https://www.svgrepo.com/show/286877/arrow-back.svg" alt=""/>
                        {
                            formItemsPassword.map(item => (
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
                }
            </form>
        </>
    )
};