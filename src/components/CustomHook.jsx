import { useState } from "react";


export function CustomHook(){
    const [products, setProduct]= useState(0)

    const handleAddProducts=()=>{
        setProduct(products + 1)
        console.log(products)
    }

    return{
        products,
        handleAddProducts
    }

}