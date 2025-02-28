import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import RestaurantHeader from "./componetes/header";
import RestaurantCategories from "./componetes/categories";

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
    const restaurant = await db.restaurant.findUnique({where: {slug}, include:{
        menuCategories: {
            include:{products: true}
        },
    }});
    if (!restaurant) {
        return notFound();
    }
    return <div>
        <div>
            <RestaurantHeader restaurant={restaurant}/>
            <RestaurantCategories restaurant={restaurant}/>
        </div>     
    </div>;
}
 
export default RestaurantMenuPage;