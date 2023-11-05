import {useState} from "react";
import cls from "./SearchInput.module.css"
// import {blockPhoto} from "@features/CardPhoto/types/type.ts";

const SearchInput = () => {

    const [inputState, setInputState] = useState<string>("")

    // const filteredClothes = blockPhoto.filter(name => {
    //         return name.name.toLowerCase().includes(inputState.toLowerCase())
    //     }
    // )

    return (
        <div className={cls.generalInput}>
            <span className={cls.loupeSpan}>
                <img className={cls.imgClass} src="https://www.svgrepo.com/show/287508/loupe-tools-and-utensils.svg"
                     alt=""/>
            </span>
            <input className={cls.inputStyle} value={inputState} onChange={(e) => setInputState(e.target.value)}
                   type="text"/>
            <span onClick={() => setInputState("")} className={cls.spanImg}>
                <img className={cls.imgClass} src={inputState && "https://www.svgrepo.com/show/505619/cross.svg"}
                     alt=""/>
            </span>
            {/*{*/}
            {/*    filteredClothes.map((index) => (*/}
            {/*        <div key={index.id}>*/}
            {/*            {index.name}*/}
            {/*        </div>*/}
            {/*    ))*/}
            {/*}*/}
        </div>
    );
};

export default SearchInput;