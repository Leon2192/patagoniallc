import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useMedia } from "react-use";

const Info = () => {
  const [width1, setWidth1] = React.useState(100);
  const [width2, setWidth2] = React.useState(100);
  const [width3, setWidth3] = React.useState(100);

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const isDesktop = useMedia("(min-width: 1024px)", true); // true es el defaultState

  return (
    <div
      className="flex flex-col md:flex-row w-full info-container"
      id="OurFoods"
    >
      <div className="w-full md:w-1/4 flex flex-col justify-center items-center md:mr-2">
        <div className="mb-6 text-center md:p-10">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 md:mb-5"
            style={{
              color: "#ffb703",
            }}
          >
            Our food
          </h2>
          <p className="text-base md:text-lg font-bold hidden md:block">
            Mabel’s Foods has developed a singular line of products that will
            enhance your menu – from center-of-the-plate to sides, small plates,
            appetizers, and bar menu offerings.
          </p>
        </div>
        <a className="btn-discover px-2 py-1 mr-3" href="#">
          <span className="flex items-center m-2">Discover more!</span>
        </a>
      </div>

      {/* Imagen 1 */}
      <motion.div
        className="w-full md:w-1/4 flex flex-col justify-center items-center md:mr-2 relative"
        whileHover={isDesktop ? { width: `${width1 + 2}%` } : {}}
        onHoverStart={() => setWidth1(20)}
        onHoverEnd={() => setWidth1(10)}
      >
        <Image
          src="/Banners/services3.png"
          alt="Placeholder"
          width={1000}
          height={1000}
          className="w-full h-auto mb-6"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold text-white mb-3">Snacks</p>
          <a
            className="btn-services text-xs sm:text-base px-4 py-2 inline-block lg-hidden"
            href="#"
          >
            View
          </a>
        </div>
      </motion.div>

      {/* Imagen 2 */}
      <motion.div
        className="w-full md:w-1/4 flex flex-col justify-center items-center md:mr-2 relative"
        whileHover={isDesktop ? { width: `${width2 + 2}%` } : {}}
        onHoverStart={() => setWidth2(20)}
        onHoverEnd={() => setWidth2(10)}
      >
        <Image
          src="/Banners/services2.png"
          alt="Placeholder"
          width={1000}
          height={1000}
          className="w-full h-auto mb-6"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold text-white mb-3">Prepared meals</p>
          <a
            className="btn-services text-xs sm:text-base px-4 py-2 inline-block lg-hidden"
            href="#"
          >
            View
          </a>
        </div>
      </motion.div>

      {/* Imagen 3 */}
      <motion.div
        className="w-full md:w-1/4 flex flex-col justify-center items-center md:mr-2 relative"
        whileHover={isDesktop ? { width: `${width3 + 2}%` } : {}}
        onHoverStart={() => setWidth3(20)}
        onHoverEnd={() => setWidth3(10)}
      >
        <Image
          src="/Banners/services1.png"
          alt="Placeholder"
          width={1000}
          height={1000}
          className="w-full h-auto mb-6"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold text-white mb-3">Coming soon</p>
          <a
            className="btn-services text-xs sm:text-base px-4 py-2 inline-block lg-hidden"
            href="#"
          >
            View
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
