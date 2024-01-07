/**
 * @typedef {import("@prismicio/client").Content.ProjectCreditsSlice} ProjectCreditsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectCreditsSlice>} ProjectCreditsProps
 * @param {ProjectCreditsProps}
 */

import styles from './ProjectCredits.module.scss'
import { PrismicRichText } from '@prismicio/react'

const ProjectCredits = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.credits}
    >
      {/* <pre>{JSON.stringify(slice, undefined, 2)}</pre> */}

      <h3 className={styles.credits__title}>{slice.primary.title}</h3>

      <p className={styles.credits__description}>{slice.primary.description}</p>
      
      <div className={styles.credits__credits}>
        <PrismicRichText field={slice.primary.credits} />
      </div>

    </section>
  );
};

export default ProjectCredits;
