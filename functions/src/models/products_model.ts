//========== MODELO NOVELA ==========//

export interface Products {
    name_product?: string,
    price_product?: string
}

export function Products(data: any, id?: string) {
    const { name_product, price_product } = data;

    let object: Products = {
        name_product: name_product,
        price_product: price_product
    };
    return object;
}
