'use client';
import Heading from "@/app/components/reusable/Heading";
import CategoryStep from "@/app/components/rent/CategoryStep";

const RentStepEmit=()=>{


    return(
        <div className="flex flex-col gap-8">
            <Heading
                title="Which of these best describes your place?"
                subTitle="Pick a category"
            />
            <CategoryStep />

        </div>
    )
}

export default RentStepEmit;