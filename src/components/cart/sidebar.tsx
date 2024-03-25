"use client"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores/cart-store";
import CartItem from "@/components/cart/item";
import { useState } from "react";
import CheckoutDialog from "@/components/checkout/dialog";
import CouponForm from "./coupon-form";




export default function CartSidebar() {

  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [couponCode, setCouponCode] = useState(''); // State to store coupon code
  const [discount, setDiscount] = useState(0); // State to store discount amount
  const { cart } = useCartStore(state => state)

  let subtotal = 0;
  for (let item of cart) {
    subtotal += item.quantity * item.product.price;
  }

  const handleCouponSubmit = (newCouponCode: string) => {
    setCouponCode(newCouponCode)
    setDiscount(calculateDiscount(subtotal, newCouponCode))
  }

  const calculateDiscount = (subtotal: number, couponCode: string) => {
    // Replace this with your actual discount calculation logic
    // based on your coupon validation and discount rules
    return Math.min(subtotal * 0.1, 50); // Example: 10% discount, max $50
  };

  const appliedSubtotal = discount > 0 ? subtotal - discount : subtotal;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <RocketIcon className="mr-3" />
          <p>Carrinho</p>
          {cart.length > 0 &&
            <div className="absolute size-3 bg-red-600 rounded-full -right-1 -top-1"></div>
          }
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-5 my-3">
          {cart.map(item => (
            <CartItem key={item.product.id} item={item} />
          ))}

        </div>
        <Separator className="my-4" />
        <div className="flex justify-between items-center text-xs">
          <div>Subtotal: </div>
          <div>R$ {subtotal.toFixed(2)}</div>
        </div>

        {/* <Separator className="m-4" />
          <div className="text-center">
            <CouponForm onSubmit={}/>
          </div> */}
          <Separator className="m-4" />
        <div className="text-center">
          <Button
            onClick={() => setCheckoutOpen(true)}
            disabled={cart.length === 0}

          >Finalizar Compra</Button>
        </div>

        <CheckoutDialog
          open={checkoutOpen}
          onOpenChange={setCheckoutOpen}
        />
      </SheetContent>
    </Sheet>
  );
}





