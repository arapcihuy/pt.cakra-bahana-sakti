import { createContext } from "react";

export const CartSidebarOpenContext = createContext<{ open: boolean, setOpen?: (open: boolean) => void }>({ open: false }); 