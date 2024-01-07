/**
 * @typedef {import("@prismicio/client").Content.HeroProjectSlice} HeroProjectSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroProjectSlice>} HeroProjectProps
 * @param {HeroProjectProps}
 */

'use client'

import styles from "./HeroProject.module.scss"
import { useThemeContext } from '@/app/components/Theme/Theme';
import { motion } from "framer-motion";
import { useEffect } from "react";

const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

const HeroProject = ({ slice }) => {

  const { mouse, setMouse} = useThemeContext();

  const variants = {
    initial: {
      width: "350px",
      height: "600px",
      left: mouse.x,
      top: mouse.y
    },
    final: {
      width: "100%",
      height: "100%",
      left: 0,
      top: 0
    }
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.hero}
    >
      <div
        className={styles.hero__wrapper}
      >
        <motion.video
          variants={variants}
          initial="initial"
          animate="final"
          transition={transition}
          className={styles.hero__media}
          muted
          autoPlay
          loop

          style={{
            left: mouse.x + 'px',
            top: mouse.y + 'px',
        }}

        >
          <source src={slice.primary.hero.url} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>
    </section>
  );
};

export default HeroProject;
