import { notFound } from "next/navigation";
import { getRestaurantbySlug } from "../data/get-resturant-by-slug";
import Image from "next/image";
import ConsumptionMethodOptions from "./Components/consumption-method-options";


interface RestaurantPageProps {
    params : Promise<{ slug: string }>
}

const RestaurantPage = async ({params} : RestaurantPageProps) => {
    const { slug } =  await params;
    const restaurant = await getRestaurantbySlug(slug)
    if(!restaurant){
        return notFound();
    }
    return ( 
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
        <div className="flex flex-col items-center gap-2">
            <Image src={restaurant?.avatarImageUrl} alt={restaurant?.name} width={82} height={82}/>
            <h2 className="font-semibold">{restaurant.name}</h2>
        </div>
        <div className="pt-24 text-center space-y-2">
            <h3 className="text-2xl font-semibold">
                Seja bem-vindo!
            </h3>
            <p className="opacity-55">Escolha como prefre aproveitar sua refeição. Estamos aqui para oferecer praticidade e sabor em cada detalhe!</p>
        </div>
        <div className="pt-14 grid grid-cols-2 gap-4">
            <ConsumptionMethodOptions imageUrl={"/dine_in.png"} imageAlt={"Para comer aqui"} buttonText={"Para comer aqui"} option={"DINE_IN"} slug={slug} />
            <ConsumptionMethodOptions imageUrl={"/takeaway.png"} imageAlt={"Para levar"} buttonText={"Para levar"} option={"TAKEAWAY"} slug={slug} />
        </div>
    </div>
    );
}
 
export default RestaurantPage;