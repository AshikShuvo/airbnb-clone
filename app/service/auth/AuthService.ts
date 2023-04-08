import axios from '@/app/service/Axios.service'
import {UserCreateDto} from "@/app/types/user/auth.types";
export async function registerUser(userCreateDto:UserCreateDto,callBack:()=>void|undefined){
    try {
        const res=await axios.post('register',userCreateDto);
        return res.data;
    }catch (er){
        console.log(er);
        return null;
    }finally {
        if(callBack){
            callBack()
        }
    }
}