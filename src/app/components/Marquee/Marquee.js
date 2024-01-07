'use client'

import styles from './Marquee.module.scss'
import { useEffect, useRef } from 'react';


const Marquee = ({ cities }) => {

    const marqueeRef = useRef()

    useEffect(() => {
        const marquee = marqueeRef.current;
        let animation;

        const resetAnimation = () => {
            marquee.style.transform = 'translateX(100%)';
            marquee.style.transition = 'none';
            void marquee.offsetWidth; // Trigger reflow
            marquee.style.transition = 'transform 10s linear infinite';
        };

        const handleAnimationIteration = () => {
            resetAnimation();
        };

        marquee.addEventListener('animationiteration', handleAnimationIteration);

        resetAnimation(); // Initial reset

        return () => {
            marquee.removeEventListener('animationiteration', handleAnimationIteration);
            cancelAnimationFrame(animation);
        };
    }, []);


    return (
        <div ref={marqueeRef} className={styles.marquee__cities}>
            {cities.map((city, index) => {
                return (
                    <p
                        className={`${styles.marquee__cities__city} ${city.current_city ? styles.marquee__cities__city__current : ''}`}
                        key={index}
                    >
                        {city.city}
                    </p>
                )
            })}
        </div>
    )
}

export default Marquee