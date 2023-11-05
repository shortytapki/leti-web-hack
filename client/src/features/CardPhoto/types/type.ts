interface BlockPhoto {
    id: number,
    price: number,
    color: string,
    isBought: boolean,
    name: string,
    sex:string,
}

export const blockPhoto:BlockPhoto[] = [
    { id: 1, price: 100, color: "white", isBought: false, name:"Hoodie", sex: "male" },
    { id: 2, price: 200, color: "white", isBought: false, name:"ABC", sex: "uni" },
    { id: 3, price: 300, color: "white", isBought: false, name:"T-shirt", sex: "male" },
    { id: 4, price: 300, color: "white", isBought: false, name:"Hoodie", sex: "kids" },
    { id: 5, price: 300, color: "white", isBought: false, name:"Shirt", sex: "male" },
    { id: 6, price: 300, color: "white", isBought: false, name:"Coat", sex: "woman" },
    { id: 7, price: 300, color: "white", isBought: false, name:"Dress", sex: "uni" },
];