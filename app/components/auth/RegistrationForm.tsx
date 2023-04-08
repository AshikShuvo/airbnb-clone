'use client';
import Heading from "@/app/components/reusable/Heading";
import Input from "@/app/components/reusable/inputs/Input";
import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";
interface RegistrationFormProps{
    register:UseFormRegister<FieldValues>;
    errors:FieldErrors;
    isLoading?:boolean;
}

const RegistrationForm : React.FC<RegistrationFormProps> =({isLoading,register,errors})=>{

    return (
        <div className="flex flex-col gap-4">
            <Heading
                title='Welcom to Airbnb'
                subTitle="Create an account"
                centered
            />
            <Input id='email' label="Email" register={register} errors={errors} required disabled={isLoading}/>
            <Input id='name' label="Name" register={register} errors={errors} required disabled={isLoading}/>
            <Input id='password' label="Password" type='password' register={register} errors={errors} required disabled={isLoading}/>
        </div>
    )
}

export default RegistrationForm