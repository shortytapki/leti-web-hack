import {SubmitHandler, useForm} from "react-hook-form";
import cls from "./Auth.module.css"
import {formItemsPass} from "@widgets/Auth";
import InputLogin from "@shared/ui/InputLogin/InputLogin.tsx";
import ButtonLogin from "@shared/ui/ButtonLogin/ButtonLogin.tsx";
import {BackArrow, WelcomeText} from "@shared/ui";

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
    } = useForm<Inputs>()

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
                        Войти
                    </button>
                </div>
                <div className={cls.regBtn}>
                    <ButtonLogin path="/registration">
                        Зарегистрироваться
                    </ButtonLogin>
                </div>
            </div>
        </form>
    )
};