"use client";
import React, { useState } from "react";
import { CartSidebarOpenContext } from "@/components/CartSidebarOpenContext";

export function CartSidebarOpenProvider({ children }: { children: React.ReactNode }) {
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  return (
    <CartSidebarOpenContext.Provider value={{ open: isCartSidebarOpen, setOpen: setIsCartSidebarOpen }}>
      {children}
    </CartSidebarOpenContext.Provider>
  );
} 