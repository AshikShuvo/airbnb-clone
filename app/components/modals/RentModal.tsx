'use client'
import Modal from "@/app/components/modals/Modal";
import useRentModal from "@/app/hooks/useRentModal";
import useRentModalControl, {STEPS} from "@/app/hooks/useRentModalControl";
import RentStepEmit from "@/app/components/HOC/RentStepEmit";

const RentModal=()=>{
    const rentModalControl=useRentModalControl();
    const rentModal=useRentModal();
    return (
        <Modal
            isOpen={rentModal.isOpen}
            title='Airbnb Your Home'
            onClose={rentModal.onClose}
            onSubmit={rentModalControl.onNext}
            actionLabel={rentModalControl.actionLabel}
            secondaryActionLabel={rentModalControl.secondaryActionLabel}
            secondaryAction={rentModalControl.step===STEPS.CATEGORY?undefined:rentModalControl.onBack}
            body={rentModalControl.currentStepComponent}

        />
    )
}
export default RentModal;