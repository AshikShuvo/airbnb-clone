import {useMemo, useState} from "react";
import {FieldValues, useForm} from "react-hook-form";

export enum STEPS{
    CATEGORY=0,
    LOCATION=1,
    INFO=2,
    IMAGES=3,
    DESCRIPTION=4,
    PRICE=5
}

const useRentModalControl=()=>{
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
    return{
        step,
        onNext,
        onBack,
        actionLabel,
        secondaryActionLabel
    }
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
    const category = watch('category');
    const setCustomValue = (id: string, value: any) => {
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
        errors
    }
}

export default useRentModalControl;