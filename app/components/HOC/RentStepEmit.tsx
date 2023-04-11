'use client';
import CategoryStep from "@/app/components/rent/CategoryStep";
import useRentModalControl, {STEPS} from "@/app/hooks/useRentModalControl";
import LocationStep from "@/app/components/rent/LocationStep";
import {useEffect, useState} from "react";

const RentStepEmit=()=>{
    const rentModalController=useRentModalControl();
    const [currentComponent,setCurrentComponent]=useState(CategoryStep)
    useEffect(()=>{
        if(rentModalController.step===STEPS.CATEGORY ){
            setCurrentComponent(CategoryStep);
        }else if(rentModalController.step===STEPS.LOCATION ){
            setCurrentComponent(LocationStep);
        }
    },[rentModalController.step])

    return(
        <>
            {currentComponent}
        </>

    )
}

export default RentStepEmit;