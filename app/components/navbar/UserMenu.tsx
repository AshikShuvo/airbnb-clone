'use client';
import {AiOutlineMenu} from "react-icons/all";
import Avatar from "@/app/components/reusable/Avatar";
import {useCallback, useState} from "react";
import MenuItem from "@/app/components/navbar/MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import {signOut} from "next-auth/react";
import {safeUser} from "@/app/types/user/auth.types";
import toast from "react-hot-toast";
import useRentModal from "@/app/hooks/useRentModal";
interface UserManuProps{
    user?:safeUser|null
}
const UserMenu:React.FC<UserManuProps> =({user})=>{
    const registerModal=useRegisterModal();
    const loginModalHook=useLoginModal();
    const rentModal=useRentModal();
    const [isOpen,setIsOpen]=useState(false);
    const toggleIsOpen=useCallback(()=>{
        setIsOpen(val=>!val)
    },[])
    const onRent=useCallback(()=>{
        if(!user){
            return loginModalHook.onOpen();
        }
    //     open rent modal
        rentModal.onOpen();

    },[user,loginModalHook])
    return (
        <div
            className="relative"
        >
            <div
                className="flex flex-row items-center gap-3"
            >
                <div
                    onClick={onRent}
                    className="hidden sm:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
                >
                    Airbnb Your Home
                </div>
                <div
                    onClick={toggleIsOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                    <AiOutlineMenu/>
                    <div className="hidden md:block">
                        <Avatar src={user?.image}/>
                    </div>
                </div>
            </div>
            {isOpen&&(
                <div
                    className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm"
                >
                    <div className="flex flex-col cursor-pointer">
                        {user ? (
                            <>
                                <MenuItem onClick={()=>{}} label='My Trips'/>
                                <MenuItem onClick={()=>{}} label='My Favorites'/>
                                <MenuItem onClick={()=>{}} label='My Reservation'/>
                                <MenuItem onClick={()=>{}} label='My Properties'/>
                                <MenuItem onClick={()=>{}} label='Airbnb My Home'/>
                                <hr/>
                                <MenuItem onClick={()=>signOut()} label='logout'/>
                            </>
                            ): (
                            <>
                                <MenuItem onClick={loginModalHook.onOpen} label='login'/>
                                <MenuItem onClick={registerModal.onOpen} label='Sign Up'/>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu