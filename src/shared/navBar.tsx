import React from "react";
import CheckoutComponent from "@/shared/checkout";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@/shared/button";
import AccountMenu from "./profile";
import { signout } from "@/api/auth";

const NavBarHome = () => {
  return (
    <nav className="h-16 bg-yellow-300 flex items-center justify-between px-6">
      <h1 className="font-bold text-xl text-[#111]">Zomato Clone</h1>

      <div className="flex items-center gap-3">
        <CheckoutComponent>
          <div className=" flex items-center relative justify-center border cursor-pointer border-black rounded pr-4">
            <Button extraClasses="font-semibold text-[12px]" accent="link">
              Checkout
            </Button>

            <ShoppingCartOutlinedIcon className="cursor-pointer relative" />
            <span className="absolute top-1 right-2 text-[6px] bg-black text-white p-1 rounded-full">
              23
            </span>
          </div>
        </CheckoutComponent>
        <AccountMenu
          onLogoutClick={() => {
            signout();
          }}
        />
      </div>
    </nav>
  );
};

export default NavBarHome;
