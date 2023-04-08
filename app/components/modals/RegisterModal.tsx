'use client'
import {useState} from "react";
import{FieldValues,SubmitHandler,useForm} from 'react-hook-form';
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "@/app/components/modals/Modal";
import RegistrationForm from "@/app/components/auth/RegistrationForm";
import SocialAuthContainer from "@/app/components/auth/SocialAuthContainer";
import {registerUser} from "@/app/service/auth/AuthService";
import {UserCreateDto} from "@/app/types/user/auth.types";
import toast from "react-hot-toast";

const RegisterModal=()=>{
    const registerModal=useRegisterModal();
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
            name:'',
            password:''
        }
    });
    const resetAndCloseModal=()=>{
        reset();
        registerModal.onClose()
    }
    const onSubmit:SubmitHandler<FieldValues> = async (data)=>{
        const payload=data as UserCreateDto;
        setIsLoading(true)
        const createdUser=await registerUser(payload,()=>setIsLoading(false));
        if(createdUser){
            toast.success('Successfully Registered');
            resetAndCloseModal();
        }else{
            toast.error('Failed to Register')
        }
    }
    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel='Continue'
            onClose={resetAndCloseModal}
            onSubmit={handleSubmit(onSubmit)}
            body={<RegistrationForm register={register} errors={errors} isLoading={isLoading}/>}
            footer={<SocialAuthContainer />}
        />
    )
}
export default RegisterModal