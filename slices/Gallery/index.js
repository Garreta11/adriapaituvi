"use client"

/**
 * @typedef {import("@prismicio/client").Content.GallerySlice} GallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GallerySlice>} GalleryProps
 * @param {GalleryProps}
 */

import styles from './Gallery.module.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const GalleryItem = ({ image }) => {
  const aspectRatio = image.image.dimensions.width > image.image.dimensions.height ? 'horizontal' : 'vertical';

  useEffect(() => {

    gsap.utils.toArray(".parallax-image").forEach((section, i) => {
      const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;

      gsap.fromTo(section, {
        y: -heightDiff
      }, {
        scrollTrigger: {
          trigger: section.parentElement,
          scrub: true
        },
        y: 0,
        ease: "none"
      });
    });
  }, [])

  return (
    <div className={styles.gallery__item}>
      <div
        className={`${styles.gallery__item__wrapper} ${aspectRatio === 'horizontal' ? styles.gallery__item__wrapper__horizontal : styles.gallery__item__wrapper__vertical
          }`}
      >
        <div className={`parallax-image ${styles.gallery__item__image}`} style={{ backgroundImage: `url(${image.image.url})` }}></div>
      </div>
    </div>
  );
};

const Gallery = ({ slice }) => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.gallery}
    >

      <div className={styles.gallery__items}>

        {slice.items.map((image, i) => {
          return (
            <GalleryItem key={i} image={image} />
          )
        })}

      </div>

    </section>
  );
};

export default Gallery;
