interface User{
    id:number;
    name:string;
    email:string;
}


// const userOne:User = {
//     id:1,
//     username:"vivek", // username does not exist in User interface
//     email:"vivek@gmail.com"
// }

const userOne:User = {
    id:1,
    name:"vivek",
    email:"vivek@gmail.com"
}

console.log(userOne)