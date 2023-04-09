'use client'
import Button from "@/app/components/reusable/Button";
import {AiFillGithub, FcGoogle} from "react-icons/all";
import {signIn} from "next-auth/react";
import {ConsumerList} from "@/app/types/theme";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

interface SocialAuthContainerProps{
    consumer:ConsumerList;
}

const SocialAuthContainer:React.FC<SocialAuthContainerProps> =({consumer})=>{
    const registerModal=useRegisterModal();
    const loginModal=useLoginModal();
    const handleToggle=()=>{
        if(consumer===ConsumerList.signup){
            if(registerModal.isOpen){
                registerModal.onClose();
            }
            loginModal.onOpen();
        }else if(consumer===ConsumerList.login){
            if(loginModal.isOpen){
                loginModal.onClose();
            }
            registerModal.onOpen()
        }
    }
    return(
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => signIn('google')}
            />
            <Button
                outline
                label="Continue with Github"
                icon={AiFillGithub}
                onClick={() => signIn('github')}
            />
            <div className="text-neutral-500 text-center mt-4 font-light">
                {consumer===ConsumerList.signup?(<p>Already have an account?
                    <span onClick={handleToggle}
                          className="text-neutral-800 cursor-pointer hover:underline">
                        Log in
                    </span>
                </p>):(
                    <p>New to Airbnb?
                        <span onClick={handleToggle}
                              className="text-neutral-800 cursor-pointer hover:underline">
                        SignUp Your New Account
                    </span>
                    </p>
                )}
            </div>

        </div>
    )
}

export default SocialAuthContainer;