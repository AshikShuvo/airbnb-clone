'use client';

import Container from "@/app/components/HOC/Container";
import {staticCategories} from '@/app/libs/staticData'
import CategoryBox from "@/app/components/reusable/CategoryBox";
import {usePathname, useSearchParams} from "next/navigation";

const Categories=()=>{
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div
                className="pt-4 flex flex-row items-center justify-between overflow-x-auto"
            >
                {staticCategories.map((categoryItem)=>
                    <CategoryBox
                        key={categoryItem.label}
                        label={categoryItem.label}
                        description={categoryItem.description}
                        icon={categoryItem.icon}
                        selected={category===categoryItem.label}
                    />
                )
                }
            </div>
        </Container>
    )
}
export default Categories