import {Link} from "react-router-dom";
import React from "react";
import cls from "./ButtonLogin.module.css"

interface buttonLogin {
    path: string,
    children: string,
}

const ButtonLogin: React.FC<buttonLogin> = ({path, children}) => {
    return (
        <Link className={cls.linkStyle} to={path}>
            {children}
        </Link>
    );
};

export default ButtonLogin;