"use client"; 

import { Button } from "@/components/ui/button";
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RestaurantHeaderPageProps {
    restaurant: Pick<Restaurant, "name" | "coverImageUrl"> ;
}

const RestaurantHeader = ({restaurant} : RestaurantHeaderPageProps) => {
    const router = useRouter();
    const handleBackClick = () => router.back();

    return <div>
    <div className="relative h-[250px]  w-full">
        <Button variant="secondary" size="icon" className="absolute left-4 top-4 z-50 rounded-full" onClick={handleBackClick}>
            <ChevronLeftIcon/>
        </Button>
        
        <Image src={restaurant?.coverImageUrl} alt={RestaurantHeader.name} fill className="object-cover"/>

        <Button variant="secondary" size="icon" className="absolute right-4 top-4 z-50 rounded-full" onClick={() => router.push("/fsw-donalds/orders")}>
            <ScrollTextIcon/>
        </Button>
    </div>
</div>;
}
 
export default RestaurantHeader;