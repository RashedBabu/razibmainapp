import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";

import { FcChargeBattery, FcHome } from "react-icons/fc";
import { MdMessage, MdTouchApp } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [
  {
    path: "/user/dashboard/display",
    name: "Razib Tcm 1",
    icon: <FcHome />,
    subRoutes: [
      {
        path: "/user/dashboard/display",
        name: "Display ",
        icon: <BsPhone />,
      },
      {
        path: "/user/dashboard/battery",
        name: "Battery",
        icon: <FcChargeBattery />,
      },
      {
        path: "/user/dashboard/touch",
        name: "Touch",
        icon: <MdTouchApp />,
      },
      {
        path: "/user/dashboard/lcd",
        name: "Lcd",
        icon: <FiMonitor />,
      },
    ],
  },

  {
    path: "/razib-telecom-2",
    name: "Razib T-2",
    icon: <FaHome />,
    subRoutes: [
      {
        path: "/user/dashboard/logic",
        name: "Logic ",
        icon: <FaUser />,
      },
      {
        path: "/user/dashboard/ribon",
        name: "Ribon",
        icon: <FaLock />,
      },
      {
        path: "/user/dashboard/speaker-dum",
        name: "Speaker-Dum",
        icon: <FaMoneyBill />,
      },
      {
        path: "/user/dashboard/ribon-switch",
        name: "Ribon-Switch",
        icon: <FaMoneyBill />,
      },
      {
        path: "/user/dashboard/back-shell",
        name: "BackShell ",
        icon: <FaUser />,
      },
      {
        path: "/user/dashboard/sim-try",
        name: "Sim-Try",
        icon: <FaLock />,
      },
      {
        path: "/user/dashboard/oca",
        name: "OCA Glass-Dum",
        icon: <FaMoneyBill />,
      },
      {
        path: "/user/dashboard/glass",
        name: "Glass",
        icon: <FaMoneyBill />,
      },
      {
        path: "/user/dashboard/body",
        name: "Full-Body",
        icon: <FaMoneyBill />,
      },
    ],
  },
];
const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Razib Telecom
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{props.children}</main>
      </div>
    </>
  );
};

export default Sidebar;
