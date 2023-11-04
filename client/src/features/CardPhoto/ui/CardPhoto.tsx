import {useState} from "react";
import cls from "@widgets/MainPage/ui/MainPage.module.css";
import {blockPhoto} from "@features/CardPhoto/types/type.ts";

const CardPhoto = () => {
        const [data, setBlockPhoto] = useState(blockPhoto)

    return (
        <>
        {data.map((index) => (
                <div key={index.id} className={cls.blockPhoto}>
                    <div className={cls.content}>
                        <p className={cls.price}>{index.price} rub</p>
                    </div>
                    <div className={cls.footer}>
                        <div className={cls.changeColor}>
                            <div
                                onClick={() => {
                                    const updatedBlockPhoto = data.map((item) =>
                                        item.id === index.id ? {...item, color: "white"} : item
                                    );
                                    setBlockPhoto(updatedBlockPhoto);
                                }}
                                style={{color: index.color === "white" ? "red" : "white", cursor: "pointer"}}
                            >
                                white
                            </div>
                            <div
                                onClick={() => {
                                    const updatedBlockPhoto = data.map((item) =>
                                        item.id === index.id ? {...item, color: "black"} : item
                                    );
                                    setBlockPhoto(updatedBlockPhoto);
                                }}
                                style={{color: index.color === "black" ? "red" : "white", cursor: "pointer"}}
                            >
                                black
                            </div>
                        </div>
                        <div className={cls.buttonBuy}>
                            <div
                                onClick={() => {
                                    const updatedBlockPhoto = data.map((item) =>
                                        item.id === index.id ? { ...item, isBought: !item.isBought } : item
                                    );
                                    setBlockPhoto(updatedBlockPhoto);
                                }}
                                style={{ color: index.isBought ? "green" : "red", cursor: "pointer" }}
                            >
                                {index.isBought ? "purchased" : "buy"}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardPhoto;