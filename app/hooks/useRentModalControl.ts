import React, {useEffect, useMemo, useState} from "react";
import {FieldValues, useForm} from "react-hook-form";
import CategoryStep from "@/app/components/rent/CategoryStep";
import LocationStep from "@/app/components/rent/LocationStep";
import InfoStep from "@/app/components/rent/InfoStep";
import ImageStep from "@/app/components/rent/ImageStep";
import DescriptionStep from "@/app/components/rent/DescriptionStep";
import PriceStep from "@/app/components/rent/PriceStep";
import {submitRentModalForm} from "@/app/service/rent/RentService";
import {CreateListingDto} from "@/app/types/rent";
import {useRouter} from "next/navigation";
import useRentModal from "@/app/hooks/useRentModal";
import toast from "react-hot-toast";

export enum STEPS{
    CATEGORY=0,
    LOCATION=1,
    INFO=2,
    IMAGES=3,
    DESCRIPTION=4,
    PRICE=5
}
export const useRentModalForm=()=>{
    const [isLoading,setIsLoading]=useState(false);
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
        imageSrc,
        isLoading,
        setIsLoading,
        reset
    }
}
const useRentModalControl=()=>{
    const rentModal=useRentModal();
    const router=useRouter()

    const rentModalForm=useRentModalForm()
    const [step,setStep]=useState(STEPS.CATEGORY)
    const onBack=()=>setStep(val=>val-1);
    const onNext=()=>setStep(val=>val+1);
    const onClose=()=>{
        rentModal.onClose();
        rentModalForm.reset();
        setStep(STEPS.CATEGORY)
    }
    const onSubmit=rentModalForm.handleSubmit(async (data)=>{
        if(step!==STEPS.PRICE){
            return onNext();
        }
        const payload=data as CreateListingDto;
        rentModalForm.setIsLoading(true)
        const res=await submitRentModalForm(payload)
        rentModalForm.setIsLoading(false)
        if(res){
            router.refresh()
            onClose()
            toast.success('Listing Created Successfully')
        }else {
            toast.error('Faield to create Listing')
        }

    })

    const actionLabel=useMemo(()=>{
        if(step===STEPS.PRICE){
            return 'Create'
        }
        return 'Next'
    },[step])
    const secondaryActionLabel=useMemo(()=>{
        return 'Back'
    },[step]);

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
        if(step===STEPS.DESCRIPTION){
            return React.createElement(DescriptionStep,{
                key:'DESCRIPTION',
                rentModalForm
            })
        }
        if(step===STEPS.PRICE){
            return React.createElement(PriceStep,{
                key:'PRICE',
                rentModalForm
            })
        }
    },[step, rentModalForm])
    return{
        step,
        onBack,
        actionLabel,
        secondaryActionLabel,
        currentStepComponent,
        onSubmit,
        onClose
    }
}



export default useRentModalControl;