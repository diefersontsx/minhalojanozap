import Logo from "@/components/logo";
import { ThemeToggle } from "./theme-toggle";
import CartSidebar from "@/components/cart/sidebar";

export default function Header() {
  return (
    <header className="flex justify-between items-center my-5 mx-3">
      <div className="flex items-center gap-3">
        <Logo />
      </div>

      <div className="flex items-center gap-3">
        <CartSidebar />
        <ThemeToggle />
      </div>
    </header>
  );
}
