interface BlockPhoto {
    id: number,
    price: number,
    color: string,
    isBought: boolean
}

export const blockPhoto:BlockPhoto[] = [
    { id: 1, price: 100, color: "white", isBought: false },
    { id: 2, price: 200, color: "white", isBought: false },
    { id: 3, price: 300, color: "white", isBought: false },
    { id: 4, price: 300, color: "white", isBought: false },
];