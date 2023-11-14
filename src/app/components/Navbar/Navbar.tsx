import React from "react";
import { BsFillChatLeftFill } from "react-icons/bs";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="header-container font-bold text-xl nav-text">
      <header className="p-4 text-center">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/patlogo.png"
              alt="Logo"
              width={50}
              height={50}
              className={`${styles.imageLogo}`}
            />
          </div>

          <ul className="flex space-x-8">
            <li className={styles.navItem}>
              <a href="#OurStory">OUR STORY</a>
            </li>
            <li className={styles.navItem}>
              <a href="#OurFoods">OUR FOODS</a>
            </li>
            <li className={styles.navItem}>
              <a href="#PrivateLabel">PRIVATE LABEL</a>
            </li>
          </ul>
          <div className="flex items-center">
            <a className="btn-discover px-2 py-1 mr-3" href="#">
              <span className="flex items-center m-2">
                Lets talk! <BsFillChatLeftFill className="ml-2" />
              </span>
            </a>
            <Image
              src="/Banderas/estadosunidos.png"
              alt="Bandera 1"
              width={50}
              height={50}
              className="w-6 h-4 mr-2"
            />
            <Image
              src="/Banderas/espania.png"
              alt="Bandera 1"
              width={50}
              height={50}
              className="w-6 h-4 mr-2"
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
