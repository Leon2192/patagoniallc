import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Galeria.module.css";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ImageGalleryProps {
  images: { url: string; width: number; height: number }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [imageWidth, setImageWidth] = useState(400);

  useEffect(() => {
    const updateImageWidth = () => {
      if (window.innerWidth > 1800) {
        setImageWidth(600);
      } else {
        setImageWidth(400);
      }
    };

    updateImageWidth();

    window.addEventListener("resize", updateImageWidth);
    return () => {
      window.removeEventListener("resize", updateImageWidth);
    };
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      // Al montar el componente y ser visible, iniciar las animaciones de entrada
      controls.start((i) => ({ opacity: 1, x: 0, y: 0 }));
    }
  }, [controls, inView]);

  return (
    <div className={styles.imageGallery} ref={ref}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -100, y: -100 }}
          animate={controls}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Image
            src={image.url}
            alt={`Image ${index + 1}`}
            width={imageWidth}
            height={imageWidth}
          />
        </motion.div>
      ))}
    </div>
  );
};

const Galeria = () => {
  const images = [
    { url: "/Banners/patlogo1.png", width: 350, height: 300 },
    { url: "/Banners/patlogo2.png", width: 500, height: 300 },
    { url: "/Banners/patlogo3.png", width: 250, height: 300 },
    { url: "/Banners/patlogo4.png", width: 250, height: 300 },
    { url: "/Banners/patlogo5.png", width: 350, height: 300 },
    { url: "/Banners/patlogo6.png", width: 500, height: 300 },
  ];

  return (
    <div className="container galeria-cont" id="OurStory">
      <ImageGallery images={images} />
    </div>
  );
};

export default Galeria;
