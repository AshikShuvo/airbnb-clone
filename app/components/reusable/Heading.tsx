'use client';

interface HeadingProps{
    title:string;
    subTitle?:string;
    centered?:boolean;
}
const Heading:React.FC<HeadingProps> =({title,subTitle,centered})=>{
    return (
        <div className={centered?'text-center':'text-start'}>
            <div className='text-2xl font-bold'>
                {title}
            </div>
            <div className='font-light text-neutral-500 mt-2'>
                {subTitle}
            </div>
        </div>
    )
}
export default Heading
