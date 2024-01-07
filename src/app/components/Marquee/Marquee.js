'use client'

import styles from './Marquee.module.scss'

const Marquee = ({ cities }) => {

    return (
        <div className={styles.marquee__wrapper}>
            <div className={styles.marquee__cities}>
                <span className={styles.marquee__cities__1}>
                    {cities.map((city, index) => {
                        return (
                            <span
                                className={`${styles.marquee__cities__city} ${city.current_city ? styles.marquee__cities__city__current : ''}`}
                                key={index}
                            >
                                {city.city}<span className={styles.marquee__cities__city__line}>/</span>
                            </span>
                        )
                    })}
                </span>
                <span className={styles.marquee__cities__2}>
                    {cities.map((city, index) => {
                        return (
                            <span
                                className={`${styles.marquee__cities__city} ${city.current_city ? styles.marquee__cities__city__current : ''}`}
                                key={index}
                            >
                                {city.city}<span className={styles.marquee__cities__city__line}>/</span>
                            </span>
                        )
                    })}
                </span>
            </div>
        </div>
    )
}

export default Marquee