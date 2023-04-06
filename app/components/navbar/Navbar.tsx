import Container from "@/app/components/HOC/Container";
import Logo from "@/app/components/navbar/Logo";

const Navbar=()=>{
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div
                className="py-4 border-b-[1px] text-rose-500"
            >
                <Container>
                    <div
                        className="flex flex-row items-center justify-between gap-3 md:gap-0"
                    >
                        <Logo/>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar