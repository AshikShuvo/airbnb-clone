'use client';
import Heading from "@/app/components/reusable/Heading";
import CountrySelect from "@/app/components/reusable/inputs/CountrySelect";
import {useMemo} from "react";
import dynamic from "next/dynamic";
interface LocationStepProps{
    rentModalForm:any;
}
const LocationStep:React.FC<LocationStepProps> =({rentModalForm})=>{
    const Map=useMemo(()=>{
            return dynamic(() => import('@/app/components/reusable/Map'), {
                ssr: false
            })
    },[rentModalForm.location])
    return(
        <div className="flex flex-col gap-8">
            <Heading
                title="Where is your place located?"
                subTitle="Help guests find you!"
            />
            <CountrySelect
                value={rentModalForm.location}
                onChange={(value)=>rentModalForm.setCustomValue('location',value)}
            />
            <Map
                center={rentModalForm.location?.latlng}
            />
        </div>
    )
}
export default LocationStep;
