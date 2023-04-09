'use client';

import {staticCategories} from "@/app/libs/staticData";
import CategoryInput from "@/app/components/reusable/inputs/CategoryInput";
import {useRentModalForm} from "@/app/hooks/useRentModalControl";

const CategoryStep=()=>{
    const rentModalForm=useRentModalForm();
    const setCategory=(value:string)=>{
        rentModalForm.setCustomValue('category',value);
    }
    return(
        <div
            className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto "
        >
            {staticCategories.map((item)=>{
                return(
                    <div key={item.label} className='col-span-1'>
                        <CategoryInput
                            icon={item.icon}
                            label={item.label}
                            onClick={setCategory}
                            selected={rentModalForm.category===item.label}
                        />
                    </div>
                )
            })}
        </div>
    )
}
export default CategoryStep;