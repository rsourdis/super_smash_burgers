export interface Products {
    combos: Item[]
    burgers: Item[]
    sides: Item[]
    sweetSides: Item[]
    drinks: Item[]
}

export interface Item {
    name: string
    description: string
    price: number
    img: string
}

