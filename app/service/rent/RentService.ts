import axios from "../Axios.service";
import {CreateListingDto} from "@/app/types/rent";

export const submitRentModalForm=async (data:CreateListingDto)=>{
    try {
        const res=await axios.post('listings',data);
        return res.data;
    }catch (e){
        return null;
    }
}