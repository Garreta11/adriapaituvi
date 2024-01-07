/**
 * @typedef {import("@prismicio/client").Content.TeaserTextSlice} TeaserTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeaserTextSlice>} TeaserTextProps
 * @param {TeaserTextProps}
 */

import styles from './TeaserText.module.scss'
import { PrismicRichText } from '@prismicio/react'


const TeaserText = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.teaser_text}
    >
      <h3 className={styles.teaser_text__headline}>{slice.primary.headline}</h3>

      <PrismicRichText className={styles.teaser_text__text} field={slice.primary.text} />

    </section>
  );
};

export default TeaserText;
