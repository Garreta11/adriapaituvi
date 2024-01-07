/**
 * @typedef {import("@prismicio/client").Content.DescriptionSlice} DescriptionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DescriptionSlice>} DescriptionProps
 * @param {DescriptionProps}
 */

import styles from './Description.module.scss'
import { PrismicRichText } from '@prismicio/react'

const Description = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.description}
    >      
      {/* <p>{slice.primary.description[0].text}</p> */}

      <PrismicRichText field={slice.primary.description} />


    </section>
  );
};

export default Description;
