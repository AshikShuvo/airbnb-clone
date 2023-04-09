'use client'
import Button from "@/app/components/reusable/Button";
import {AiFillGithub, FcGoogle} from "react-icons/all";
import {signIn} from "next-auth/react";

const SocialAuthContainer=()=>{
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
                <p>Already have an account?
                    <span onClick={()=>{}}
                        className="text-neutral-800 cursor-pointer hover:underline">
                        Log in
                    </span>
                </p>
            </div>

        </div>
    )
}

export default SocialAuthContainer;