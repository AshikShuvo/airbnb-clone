import Heading from "@/app/components/reusable/Heading";
import Input from "@/app/components/reusable/inputs/Input";

interface PriceStepProps{
    rentModalForm:any;
}

const PriceStep:React.FC<PriceStepProps> =({rentModalForm})=>{
    return (
        <div className="flex flex-col gap-8">
            <Heading
                title="Now, set your price"
                subTitle="How much do you charge per night?"
            />
            <Input
                id="price"
                label="Price"
                formatPrice
                type="number"
                disabled={rentModalForm.isLoading}
                register={rentModalForm.register}
                errors={rentModalForm.errors}
                required
            />
        </div>
    )

}
export default PriceStep