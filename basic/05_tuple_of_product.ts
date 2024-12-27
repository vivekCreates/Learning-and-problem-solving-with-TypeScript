type ProductTuple = [number,string,number]
function products():ProductTuple{
    let productId = 10
    let productName = "IPhone"
    let price = 12500000
    return [productId,productName,price]
}


const [productId,productName,price]:ProductTuple = products()

console.log("productId",productId)
console.log("productName",productName)
console.log("price",price)