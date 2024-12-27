type ProductStatus = "in-stock" | "out-of-stock" | "discountinued"


function checkStatus(status:ProductStatus){
  return status
}
const result = checkStatus("in-stock")

if (result == "in-stock") {
    console.log("Product is available, You can but it.")
}else if(result=="out-of-stock"){
    console.log("Product is unavailable, You cannot but it.")
}else{
    console.log("Product is no longer to be sold.")
}
