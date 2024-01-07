/**
 * @typedef {import("@prismicio/client").Content.DescriptionSlice} DescriptionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DescriptionSlice>} DescriptionProps
 * @param {DescriptionProps}
 */

import styles from './Description.module.scss'

const Description = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.description}
    >      
      <p>{slice.primary.description[0].text}</p>

    </section>
  );
};

export default Description;
