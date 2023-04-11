import Heading from "@/app/components/reusable/Heading";
import ImageUpload from "@/app/components/reusable/inputs/ImageUpload";
interface ImageStepProps{
    rentModalForm:any;
}

const ImageStep:React.FC<ImageStepProps> =({rentModalForm})=>{
    return (
        <div className="flex flex-col gap-8">
            <Heading
                title="Add a photo of your place"
                subTitle="Show guests what your place looks like!"
            />
            <ImageUpload
                onChange={(value) => rentModalForm.setCustomValue('imageSrc', value)}
                value={rentModalForm.imageSrc}
            />
        </div>
    )
}
export default ImageStep;



