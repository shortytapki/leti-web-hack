import cls from "./Input.module.css"
import React, {useState} from "react";
interface InputProps {
    label: string,
    placeholder: string;
    errors: any;
    type: string;
    register: any;
    options?: any;
    name: string;
}

const Input: React.FC<InputProps> = ({label, placeholder, errors, type, register, options, name, ...props}) => {

    const [isHidden, setIsHidden] = useState(true)

    const handlerHidden = (e: any) => {
        e.preventDefault()
        setIsHidden(prevState => !prevState)
    }

    return (
        <div className={cls.labelBlock}>
            <div className={cls.labelText}>{label}</div>
            <div className={cls.generalStyle}>
                <input
                    placeholder={placeholder}
                    className={cls.inputText}
                    type={type === "password" ? (isHidden ? "password" : "text") : type}
                    {...register(name, {...options})}
                    {...props}
                />
                {
                    type === "password"
                    &&
                    <a className={cls.linkStyle} onClick={handlerHidden} href="">
                        <img className={cls.LinkPass}
                             src={!isHidden ? "https://www.svgrepo.com/show/391830/eye-open.svg" :
                                 "https://www.svgrepo.com/show/441930/eye-closed.svg"} alt=""/>
                    </a>
                }
            </div>
            <div style={{paddingTop: '10px', color: 'red'}}>
                {errors && <p>{errors?.message || 'Ошибка'}</p>}
            </div>
        </div>

    );
};

export default Input;