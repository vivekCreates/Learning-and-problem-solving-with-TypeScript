type ApiResponse<T> = 
  | { success: true; data: T } 
  | { success: false; error: string };


function apiCalling():ApiResponse<any>{
    let random = Math.floor(Math.random()*10)
    return random > 5 ?
    {success:true,data:{username:"vivek"}}
    :
    {success:false,error:"Data not fetched"}
}

const apiCallingResult = apiCalling()

if (apiCallingResult.success) {
    console.log("Data fetched successfully")
}else{
    console.log("ERROR: While data fetching")
}