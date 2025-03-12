import Image from "next/image";
import { CartContext, CartProduct } from "../contexts/cart";
import { formatNumber } from "@/app/helpers/format-number";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
    product: CartProduct;
}

const CartProductItem = ({product}: CartItemProps) => {
    const {decreaseProductQuantity, increaseProductQuantity} = useContext(CartContext)

    return ( 
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
            <div className="relative w-20 h-20 bg-gray-100 rounded-xl">
                <Image src={product.imageUrl} alt={product.name} fill/>
            </div>
            <div className="space-y-1">
                <p className="text-xs max-w-[90%] truncate text-ellipsis">{product.name}</p>
                <p className="text-sm font-semibold">{formatNumber(product.price)}</p>
                <div className="flex items-center gap-1 text-center">
                    <Button className="h-7 -w-7 rounded-xl" variant="outline" onClick={() => decreaseProductQuantity(product.id)}>
                        <ChevronLeftIcon/>
                    </Button>
                    <p className="text-sm w-7">{product.quantity}</p>
                    <Button className="h-7 -w-7 rounded-xl" variant="destructive" onClick={() => increaseProductQuantity(product.id)}>
                        <ChevronRightIcon/>
                    </Button>
                </div>
            </div>
        </div>

        <Button variant="outline" className="h-7 -w-7 rounded-lg">
            <TrashIcon/>
        </Button>
    </div>
    );
}
 
export default CartProductItem;