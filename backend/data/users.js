import bycrypt from "bcryptjs"

const users = [
    {
        name:"admin",
        password:bycrypt.hashSync("admin123",10),
        email:"admin123@gmail.com",
        isAdmin:true
    },
    {
        name:"jhon doe",
        password:bycrypt.hashSync("jhon123",10),
        email:"jhon@gmail.com",
        isAdmin:false
    },
    {
        name:"Ram",
        password:bycrypt.hashSync("Ram123",10),
        email:"ram@gmail.com",
        isAdmin:false
    },
]

export default users;