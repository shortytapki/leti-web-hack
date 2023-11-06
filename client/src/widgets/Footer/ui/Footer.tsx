import cls from "./Footer.module.css"
import {Link} from "react-router-dom";
export const Footer = () => {
    return (
        <div className={cls.footer}>
            <p>
                F i f t y H e r t z
            </p>
            <div className={cls.report}>
                <Link className={cls.linkStyle} to="">
                    Сообщить об ошибке
                </Link>
                <Link className={cls.linkStyle} to="">
                    Политика конфиденциальности
                </Link>
                <Link className={cls.linkStyle} to="">
                    О разработчиках
                </Link>
            </div>
            <p>
                © {new Date().getFullYear()}
            </p>
        </div>
    );
};