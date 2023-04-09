'use client';
import Container from "@/app/components/HOC/Container";
import Logo from "@/app/components/navbar/Logo";
import Search from "@/app/components/navbar/Search";
import UserMenu from "@/app/components/navbar/UserMenu";
import {safeUser} from "@/app/types/user/auth.types";
import Categories from "@/app/components/navbar/Categories";
interface NavbarProps{
    user?:safeUser|null
}

const Navbar:React.FC<NavbarProps> =({user})=>{
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div
                className="py-4 border-b-[1px]"
            >
                <Container>
                    <div
                        className="flex flex-row items-center justify-between gap-3 md:gap-0"
                    >
                        <Logo/>
                        <Search/>
                        <UserMenu user={user}/>
                    </div>
                </Container>
            </div>
            <Categories/>
        </div>
    )
}

export default Navbar