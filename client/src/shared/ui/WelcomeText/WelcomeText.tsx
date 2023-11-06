import cls from "./WelcomeText.module.css";

export const WelcomeText = () => {
    return (
        <>
            <h3 className={cls.textMerch}>
                FiftyHertz
            </h3>
            <h4 className={cls.subText}>
                Добро пожаловать
            </h4>
        </>
    );
};