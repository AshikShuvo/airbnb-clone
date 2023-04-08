import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";
import Heading from "@/app/components/reusable/Heading";
import Input from "@/app/components/reusable/inputs/Input";

interface LoginFormProps{
    register:UseFormRegister<FieldValues>;
    errors:FieldErrors;
    isLoading?:boolean;
}
const LoginForm:React.FC<LoginFormProps> =({register,errors,isLoading})=>{
    return(
        <div className="flex flex-col gap-4">
            <Heading
                title='Welcome Back'
                subTitle='Signin into you account'
                centered
            />
            <Input id='email' label="Email" register={register} errors={errors} required disabled={isLoading}/>
            <Input id='password' label="Password" type='password' register={register} errors={errors} required disabled={isLoading}/>
        </div>
    )
}
export default LoginForm