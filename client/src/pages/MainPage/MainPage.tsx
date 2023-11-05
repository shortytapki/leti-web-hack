import MainPageWidget from "@widgets/MainPage/ui/MainPage.tsx";
import CategoriesAndSearch from "@widgets/CategoriesAndSearch/ui/CategoriesAndSearch.tsx";
import {GeneralPhoto} from "@shared/assets/icons";

export const MainPage = () => {
    return (
        <>
            <CategoriesAndSearch/>
            <img src={GeneralPhoto} style={{width:"205.5vh", height:"100vh"}} alt=""/>
            <MainPageWidget/>
        </>
    );
};
