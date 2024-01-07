/**
 * @typedef {import("@prismicio/client").Content.HeroMediaSlice} HeroMediaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroMediaSlice>} HeroMediaProps
 * @param {HeroMediaProps}
 */

'use client'

import { useRef, useState, useEffect } from "react";
import styles from "./HeroMedia.module.scss"
import { motion } from "framer-motion";

const transition = { duration: 3, ease: [0.43, 0.13, 0.23, 0.96] };

const HeroMedia = ({ slice }) => {

  const videoRef = useRef();
  const [fullscreen, setFullscreen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.add('--no-scroll');
    document.body.classList.add('--no-scroll');
  }, [])

  const handleWheel = (event) => {
    setFullscreen(true)
    setTimeout(() => {
      document.documentElement.classList.remove('--no-scroll');
      document.body.classList.remove('--no-scroll');
    }, 1000)
  }

  return (
    <section
      className={styles.hero}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      onWheel={handleWheel}
    >
      <motion.div
        
        className={styles.hero__wrapper}
        initial={{scale:0}}
        animate={{scale:1}}
        transition={transition}
      >
        <video
          className={`${styles.hero__media} ${fullscreen ? styles.hero__media__fullscreen : ''}`}
          ref={videoRef}
          muted
          autoPlay
          loop
        >
          <source src={slice.primary.hero.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
};

export default HeroMedia;
