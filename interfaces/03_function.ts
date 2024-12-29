interface UserShape{
    id:number;
    username:string;
    email:string;
    isVerified:boolean;
}

const createdUser = (userObj:UserShape):UserShape => {
    const {id,username,email,isVerified} = userObj
    return {
        id,
        username,
        email,
        isVerified
    }
}

const newUser = createdUser({id:1,username:"vivek",email:"vk@gmail.com",isVerified:true})
console.log("new User",newUser)