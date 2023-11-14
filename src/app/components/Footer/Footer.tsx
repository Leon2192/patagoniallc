import Image from "next/image";
import React from "react";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="background text-white p-6">
      <div className="container mx-auto flex flex-wrap">
      <div className="w-full md:w-1/3 text-center mb-4 md:mb-0 flex flex-col justify-center items-center">
          <Image
            src="/patlogo.png"
            alt="Logo"
            width={200}
            height={200}
            className="mx-auto mb-4"
          />
        </div>

        <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
          <h1 className="text-3xl font-semibold mb-2">Mabel s place</h1>
          <br />

          <h3 className="mb-1 text-xl">
            370 Ansin Blvd #370 Hallandale Beach, FI 3300
          </h3>
          <br />
          <h1 className="text-3xl font-semibold mb-2">About us</h1>
          <p className="mb-1 text-xl">
            Happily operating since 2011 as a USDA/FDA manufacturing plant in
            South Florida
          </p>
          <br />
          <h1 className="text-3xl font-semibold mb-2">Follow us</h1>
          <div className="flex justify-center">
            <BsInstagram size={"2em"} />
          </div>
          <br />
          <h1 className="text-xl font-bold mb-2">Phone: 954 2346544 </h1>
          <br />
          <h1 className="text-xl font-bold mb-2">sales@patagonia.com </h1>
        </div>

        <div className="w-full md:w-1/3 text-center">
          <h2 className="font-semibold mb-2 text-3xl">Quick link</h2>
          <br />
          <p className="mb-1 text-xl">Home</p>
          <br />
          <p className="mb-1 text-xl">Our foods</p>
          <br />
          <p className="mb-1 text-xl mb-5">Private label</p>

          <div className="flex justify-center">
            <Image
              src="/Banderas/estadosunidos.png"
              alt="Bandera 1"
              width={500}
              height={500}
              className="w-6 h-4 mr-2"
            />
            <Image
              src="/Banderas/espania.png"
              alt="Bandera 1"
              width={500}
              height={500}
              className="w-6 h-4 mr-2"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
