import Heading from "@/app/components/reusable/Heading";
import Input from "@/app/components/reusable/inputs/Input";

interface DescriptionStepProps{
    rentModalForm:any;
}
const DescriptionStep:React.FC<DescriptionStepProps> =({rentModalForm})=>{
    return (
        <div className="flex flex-col gap-8">
            <Heading
                title="How would you describe your place?"
                subTitle="Short and sweet works best!"
            />
            <Input
                id="title"
                label="Title"
                disabled={rentModalForm.isLoading}
                register={rentModalForm.register}
                errors={rentModalForm.errors}
                required
            />
            <hr />
            <Input
                id="description"
                label="Description"
                disabled={rentModalForm.isLoading}
                register={rentModalForm.register}
                errors={rentModalForm.errors}
                required
            />
        </div>
    )
}
export default DescriptionStep;