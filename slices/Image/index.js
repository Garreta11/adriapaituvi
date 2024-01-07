/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @param {ImageProps}
 */

import styles from './Image.module.scss'
import { PrismicNextImage } from '@prismicio/next'

const Image = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.image}
    >
      <PrismicNextImage className={styles.image__img} field={slice.primary.image} />
    </section>
  );
};

export default Image;
