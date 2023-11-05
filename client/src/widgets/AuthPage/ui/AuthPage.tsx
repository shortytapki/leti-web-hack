import {SubmitHandler, useForm} from "react-hook-form";
import cls from "./AuthPage.module.css"
import {Input} from "@shared/ui";
import {formItemsPass} from "@widgets/AuthPage";
import ButtonLogin from "@shared/ui/ButtonLogin/ButtonLogin.tsx";

type Inputs = {
    login: string
    password: string,
}
const AuthPages = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <form className={cls.GeneralClass} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1 className={cls.textMerch}>
                    M E R C H K I L L A
                </h1>
                <h2 className={cls.subText}>
                    welcome
                </h2>
                {
                    formItemsPass.map(item => (
                        <div key={item.id}>
                            <Input
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
                <div className={cls.authBtn}>
                    <ButtonLogin path="/">
                        Забыли пароль?
                    </ButtonLogin>
                </div>
                <div className={cls.paddingStyle}>
                    <button className={cls.btnStyle}>
                        Отправить
                    </button>
                </div>
                <div className={cls.regBtn}>
                    <ButtonLogin path="/">
                        Зарегистрироваться
                    </ButtonLogin>
                </div>
            </div>
        </form>
    )
};

export default AuthPages;