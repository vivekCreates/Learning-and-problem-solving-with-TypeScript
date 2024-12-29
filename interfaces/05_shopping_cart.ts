interface ProductShape{
    productId?:number;
    productName:string;
    productPrice:number;
}

const shoppingCart = (product:ProductShape):ProductShape => {
    let id:number = 0;
    if (!product.productId) {
         id = Math.random()
    }

    return {...product,productId:id}
}

const cartOne = shoppingCart({productName:"Earbud",productPrice:700})
const cartTwo = shoppingCart({productName:"TV",productPrice:17000})

console.log(cartTwo)