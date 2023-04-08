import axios from '@/app/service/Axios.service'
import {UserCreateDto, UserLocalLoginDto, UserLoginResponseDto} from "@/app/types/user/auth.types";
import {signIn} from "next-auth/react";
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

export async function localLogin(payload:UserLocalLoginDto):Promise<UserLoginResponseDto|undefined>{
    const res=await signIn('credentials',{
        ...payload,
        redirect:false
    }).then((callback)=>{
        if(callback?.ok){
            return {success:true};
        }
        if(callback?.error){
            return {success: false,payload:callback.error}
        }
    })
    return res;

}