import Categories from "@features/Categories/ui/Categories.tsx";
import SearchInput from "@features/SearchInput/ui/SearchInput.tsx";
import cls from "./CategoriesAndSearch.module.css"
import {useEffect, useState} from "react";

const CategoriesAndSearch = () => {

    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleUpButton = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <div className={scroll > 1 && cls.fixed}>
                <div className={cls.generalStyleForSearchAndCategories}>
                    <SearchInput/>
                    <Categories/>
                </div>
                {scroll > 200 && <button className={cls.btnUp} style={{cursor:"pointer"}} onClick={handleUpButton}>
                    <img style={{width:"32px", height:"32px"}} src="https://www.svgrepo.com/show/533629/arrow-square-up.svg" alt=""/>
                </button>}
            </div>
        </>
    );
};

export default CategoriesAndSearch;