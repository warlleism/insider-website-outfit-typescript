import React, { useEffect, useState } from 'react';
import { json } from 'stream/consumers';


interface Product {
    id: 1;
    img: string;
    name: string;
    price: number;
}

const DetailProduct = () => {

    const [product, setProduct] = useState<Product>()

    useEffect(() => {

        const local = localStorage.getItem('item')
        if (local) {
            setProduct(JSON.parse(local))
        }

    }, [])

    return (
        <>
            {product?.name}
        </>
    )
}

export default DetailProduct;
