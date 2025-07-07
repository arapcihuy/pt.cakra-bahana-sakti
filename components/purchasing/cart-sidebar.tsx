"use client"

import { createContext, useContext, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Plus, Minus, Trash2, X } from "lucide-react"
import { useTranslation } from "react-i18next"
import { CheckoutModal } from "./checkout-modal"
import { CartSidebarOpenContext } from "@/components/CartSidebarOpenContext";

type CartItem = {
  id: number;
  name: string;
  model: string;
  price: number;
  image?: string;
  qty: number;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
};
export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQty: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const addToCart = (product: CartItem) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const updateQty = (id: number, qty: number) => {
    setCart((prev) => prev.map((item) =>
      item.id === id ? { ...item, qty } : item
    ));
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty }}>
      {children}
    </CartContext.Provider>
  );
}

export function CartSidebar() {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);
  const { t } = useTranslation();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const { open: isOpen, setOpen: setIsOpen } = useContext(CartSidebarOpenContext);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(id)
    } else {
      updateQty(id, newQuantity)
    }
  }

  const removeItem = (id: number) => {
    removeFromCart(id)
  }

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <>
      {/* Floating Cart Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button size="lg" className="rounded-full shadow-lg relative">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white min-w-[20px] h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-lg">
            <SheetHeader>
              <SheetTitle>
                Shopping Cart ({totalItems} items)
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col h-full">
              {cart.length === 0 ? (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Your cart is empty</p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="flex-1 overflow-y-auto py-4 space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm line-clamp-2">{item.name}</h4>
                          <p className="text-xs text-gray-500 mb-2">{item.model}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                size="icon"
                                variant="outline"
                                className="h-6 w-6 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.qty - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="text-sm font-medium w-8 text-center">{item.qty}</span>
                              <Button
                                size="icon"
                                variant="outline"
                                className="h-6 w-6 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.qty + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-6 w-6 text-red-500 hover:text-red-700"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="text-sm font-bold text-gray-900 mt-2">
                            Rp{(item.price * item.qty).toLocaleString("id-ID")}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cart Summary */}
                  <div className="border-t border-gray-200 pt-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-xl font-bold text-blue-600">Rp{totalPrice.toLocaleString("id-ID")}</span>
                    </div>

                    <div className="space-y-2">
                      <Button 
                        className="w-full" 
                        size="lg"
                        onClick={() => {
                          setIsOpen(false)
                          setIsCheckoutOpen(true)
                        }}
                      >
                        Proceed to Checkout
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent" onClick={() => setIsOpen(false)}>
                        Continue Shopping
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
    </>
  )
}
