interface UserInterfce{
    id:number;
    name:string;
    email:string;
    password:string;
}

interface UserAge extends UserInterfce{
    age?:number
}

const personOne:UserAge = {
    id:2,
    name:"vivek",
    email:"vk@gmail.com",
    password:"vk123",
}
const personTwo:UserAge = {
    id:2,
    name:"vivek",
    email:"vk@gmail.com",
    password:"vk123",
    age:20 //optional
}

console.log("personOne",personOne)
console.log("personTwo",personTwo)
