import ClientOnly from "@/app/components/HOC/ClientOnly";
import EmptyState from "@/app/components/reusable/EmptyState";
import Container from "@/app/components/HOC/Container";
import getListings, {IListingsParams} from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ListingCard from "@/app/components/listings/ListingCard";
interface HomeProps {
    searchParams: IListingsParams
};

const  Home:React.FC<HomeProps> =async ({searchParams})=> {
  const listings=await getListings(searchParams);
  const currentUser=await getCurrentUser();
  if (listings.length === 0) {
    return (
        <ClientOnly>
          <EmptyState showReset />
        </ClientOnly>
    );
  }
  return (
      <ClientOnly>
        <Container>
          <div
              className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 "
          >
            {listings.map((listing: any) => (
                <ListingCard
                    currentUser={currentUser}
                    key={listing.id}
                    data={listing}
                />
            ))}
          </div>
        </Container>
      </ClientOnly>
  )
}
export default Home