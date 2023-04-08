'use client';
import {useState} from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Modal from "@/app/components/modals/Modal";
import LoginForm from "@/app/components/auth/LoginForm";
import SocialAuthContainer from "@/app/components/auth/SocialAuthContainer";
import {UserLocalLoginDto} from "@/app/types/user/auth.types";
import {localLogin} from "@/app/service/auth/AuthService";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";

const LoginModal=()=>{
    const router=useRouter()
    const loginModalHook=useLoginModal();
    const [isLoading,setIsLoading]=useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState:{
            errors
        }
    }=useForm<FieldValues>({
        defaultValues:{
            email:'',
            password:''
        }
    });

    const resetAndCloseModal=()=>{
        reset();
        loginModalHook.onClose()
    }
    const onSubmit:SubmitHandler<FieldValues> = async (data)=>{
        const payload=data as UserLocalLoginDto;
        setIsLoading(true);
        const res=await localLogin(payload)
        setIsLoading(false);
        if(res?.success){
            toast.success("login successful")
            resetAndCloseModal()
            router.refresh();
        }else{
            toast.error(res?.payload??'');
        }


    }

    return (
        <div>
            <Modal
                isOpen={loginModalHook.isOpen}
                onClose={resetAndCloseModal}
                onSubmit={handleSubmit(onSubmit)}
                title="Login"
                actionLabel='continue'
                disabled={isLoading}
                body={<LoginForm errors={errors} register={register} isLoading={isLoading}/>}
                footer={<SocialAuthContainer/>}
            />
        </div>
    )
}

export default LoginModal;