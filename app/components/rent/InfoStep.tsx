import Heading from "@/app/components/reusable/Heading";
import Counter from "@/app/components/reusable/inputs/Counter";
interface InfoStepProps{
    rentModalForm:any;
}
const InfoStep:React.FC<InfoStepProps> =({rentModalForm})=>{
    return (
        <div className="flex flex-col gap-8">
            <Heading
                title="Share some basics about your place"
                subTitle="What amenitis do you have?"
            />
            <Counter
                onChange={(value) => rentModalForm.setCustomValue('guestCount', value)}
                value={rentModalForm.guestCount}
                title="Guests"
                subtitle="How many guests do you allow?"
            />
            <hr />
            <Counter
                onChange={(value) => rentModalForm.setCustomValue('roomCount', value)}
                value={rentModalForm.roomCount}
                title="Rooms"
                subtitle="How many rooms do you have?"
            />
            <hr />
            <Counter
                onChange={(value) => rentModalForm.setCustomValue('bathroomCount', value)}
                value={rentModalForm.bathroomCount}
                title="Bathrooms"
                subtitle="How many bathrooms do you have?"
            />
        </div>
    )
}
export default InfoStep