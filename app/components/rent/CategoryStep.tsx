'use client';

import {staticCategories} from "@/app/libs/staticData";
import CategoryInput from "@/app/components/reusable/inputs/CategoryInput";
import Heading from "@/app/components/reusable/Heading";
import {useEffect} from "react";
interface CategoryStepProps{
    rentModalForm:any;
}
const CategoryStep:React.FC<CategoryStepProps> =({rentModalForm})=>{
    useEffect(()=>{
        console.log(rentModalForm.rCategory,'from consumer component');
    },[rentModalForm.rCategory])
    const setCategory=(value:string)=>{
        console.log(value,'from set category');
        rentModalForm.setCustomValue('category',value);
    }
    return(
        <div className="flex flex-col gap-8">
            <Heading
                title="Which of these best describes your place?"
                subTitle="Pick a category"
            />
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
        </div>
    )
}
export default CategoryStep;