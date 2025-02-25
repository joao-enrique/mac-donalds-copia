import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import RestaurantHeader from "./componetes/header";

interface restaurantMenuPageProps {
    params: Promise<{ slug: string }>
    searchParams : Promise<{ consumptionMethod: string }>
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
    return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
}

const RestaurantMenuPage = async ({params, searchParams}: restaurantMenuPageProps) => {
    const { slug } = await params;
    const { consumptionMethod } = await searchParams;
    if (!isConsumptionMethodValid(consumptionMethod)) {
        return notFound();
    }
    const restaurant = await db.restaurant.findFirst({where: {slug}});
    if (!restaurant) {
        return notFound();
    }
    return <div>
        <div>
            <RestaurantHeader restaurant={restaurant}/>
        </div>     
    </div>;
}
 
export default RestaurantMenuPage;