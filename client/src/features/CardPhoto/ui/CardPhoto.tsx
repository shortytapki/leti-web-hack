import cls from "@widgets/MainPage/ui/MainPage.module.css";
import {blockPhoto} from "@features/CardPhoto/types/type.ts";
import {Hoodie} from "@shared/assets/icons";
const CardPhoto = () => {

    return (
        <>
            {blockPhoto.map((index) => (
                <div key={index.id} className={cls.blockPhoto}>
                    <div className={cls.content}>
                        <img className={cls.imgStyle} src={Hoodie} alt=""/>
                    </div>
                    <div className={cls.footer}>
                        <div className={cls.changeColor}>
                            {index.name}
                            <p>{index.price} rub</p>
                        </div>
                        <div className={cls.buttonBuy}>
                            <input name="color" type="radio"/>
                            <input name="color" type="radio"/>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardPhoto;