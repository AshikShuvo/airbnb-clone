import getListingById from "@/app/actions/getListingById";
import getCurrentUser from "@/app/actions/getCurrentUser";
import EmptyState from "@/app/components/reusable/EmptyState";
import ClientOnly from "@/app/components/HOC/ClientOnly";
interface IParams {
    listingId?: string;
}
const ListingPage=async ({ params }: { params: IParams })=>{
    const listing = await getListingById(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        );
    }

    return (
        <div>
            listing page
        </div>
    )
}
export default ListingPage