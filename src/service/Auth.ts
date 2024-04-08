import { axiosservice } from "../Components/config/axiosconf";
import { IUserLogin, IUserRegister } from "../Interface/user";

export const UserRegister = async (datauser : IUserRegister) => {
    try {
        const {data} = await axiosservice.post('/register', datauser)
        return data
    } catch (error) {
        console.log(error);
        
    }
}

export const UserLogin = async (datauser : IUserLogin) => {
    try {
        const {data} = await axiosservice.post('/login', datauser)
        return data
    } catch (error) {
        console.log(error);
        
    }
}

