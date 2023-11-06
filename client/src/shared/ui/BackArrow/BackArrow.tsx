import {Link, useNavigate} from "react-router-dom";
import cls from "./BackArrow.module.css";

export const BackArrow = () => {

    const navigate = useNavigate()
    return (
        <Link onClick={() => navigate(-1)} to="">
            <img className={cls.ButtonBack} src="https://www.svgrepo.com/show/286877/arrow-back.svg" alt=""/>
        </Link>
    );
};

