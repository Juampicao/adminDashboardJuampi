import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import Chart from "./Chat";

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  // Cambia el Navbar Segun el window.with de forma automatica (`resize`, handleResize) es como (`click`, hacEesto)
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener(`resize`, handleResize);

    handleResize();

    return () => window.removeEventListener(`resize`, handleResize);
  }, []);

  // Abre automaticamente el Navbar if screenSize <= 900, por mas que este cerrado.
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }

    return () => {};
  }, [screenSize]);

  const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />

      {/* Cart */}
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
        {/* Cart */}

        {/* Chat */}
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color="blue"
          icon={<BsChatLeft />}
        />
        {/* Chat */}

        {/* Notification */}
        <NavButton
          title="Notification"
          dotColor="#03C9D7"
          customFunc={() => handleClick("notification")}
          color="blue"
          icon={<RiNotification3Line />}
        />
        {/* Notification */}

        {/* IMAGEN PROFILE */}
        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer  p-1 hover:bg-light-gray rounded-lg">
            {/*  customFunc={() => handleClick('chat')} */}
            <img className="rounded-full w-8 h-8" src={avatar} />
            <p>
              <span className="text-gray-400 text-14"> Hi, </span> {``}
              <span className="text-gray-400 font-bold ml-1 text-14">
                {" "}
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {/* IMAGEN PROFILE */}

        {/* Funcion aparece if Clicked = true  */}
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
        {/* Funcion aparece if Clicked = true  */}
      </div>
    </div>
  );
};

export default Navbar;
