import cls from "./Categories.module.css"
import {listCategories} from "@widgets/Categories/types/type.ts";
const Categories = () => {

    return (
        <div className={cls.generalCategories}>
            <ul>
                {listCategories.map((index) =>(
                    <span key={index.id}>
                        <li className={cls.li}>
                            {index.name}
                        </li>
                    </span>
                ))}
            </ul>
        </div>
    );
};

export default Categories;