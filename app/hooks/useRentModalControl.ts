import React, {useEffect, useMemo, useState} from "react";
import {FieldValues, useForm} from "react-hook-form";
import CategoryStep from "@/app/components/rent/CategoryStep";
import LocationStep from "@/app/components/rent/LocationStep";
import InfoStep from "@/app/components/rent/InfoStep";
import ImageStep from "@/app/components/rent/ImageStep";

export enum STEPS{
    CATEGORY=0,
    LOCATION=1,
    INFO=2,
    IMAGES=3,
    DESCRIPTION=4,
    PRICE=5
}
export const useRentModalForm=()=>{
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            location: null,
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: '',
            price: 1,
            title: '',
            description: '',
        }
    });
    const location = watch('location');
    const category = watch('category');
    const guestCount = watch('guestCount');
    const roomCount = watch('roomCount');
    const bathroomCount = watch('bathroomCount');
    const imageSrc = watch('imageSrc');
    const setCustomValue = async (id: string, value: any) => {
        console.log({id,value,category})
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        })
    }
    return {
        category,
        setCustomValue,
        register,
        handleSubmit,
        errors,
        location,
        guestCount,
        roomCount,
        bathroomCount,
        imageSrc
    }
}
const useRentModalControl=()=>{
    const rentModalForm=useRentModalForm()
    console.log("data",rentModalForm)
    const [step,setStep]=useState(STEPS.CATEGORY)
    const onBack=()=>setStep(val=>val-1);
    const onNext=()=>setStep(val=>val+1);

    const actionLabel=useMemo(()=>{
        if(step===STEPS.PRICE){
            return 'Create'
        }
        return 'Next'
    },[step])
    const secondaryActionLabel=useMemo(()=>{
        if(step===STEPS.PRICE){
            return undefined;
        }
        return 'Back'
    },[step]);
    // const currentStepComponent=useMemo(()=>{
    //
    // },[step])



    const currentStepComponent = useMemo(()=>{
        if(step===STEPS.CATEGORY){
            return React.createElement(CategoryStep,{
                key:'LOCATION',
                rentModalForm
            })
        }
        if(step===STEPS.LOCATION){
            return React.createElement(LocationStep,{
                key:'LOCATION',
                rentModalForm
            })
        }
        if(step===STEPS.INFO){
            return React.createElement(InfoStep,{
                key:'INFO',
                rentModalForm
            })
        }
        if(step===STEPS.IMAGES){
            return React.createElement(ImageStep,{
                key:'IMAGES',
                rentModalForm
            })
        }
    },[step, rentModalForm])
    return{
        step,
        onNext,
        onBack,
        actionLabel,
        secondaryActionLabel,
        currentStepComponent
    }
}



export default useRentModalControl;