'use client'
import styles from './ProjectSelection.module.scss'
import { useThemeContext } from '@/app/components/Theme/Theme';
import { useEffect, useState } from "react";
import { createClient } from "../../../prismicio";
import Link from "next/link";
import { usePathname } from 'next/navigation'


const ProjectSelection = () => {

    const { mouse, setMouse} = useThemeContext();

    const [works, setWorks] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const pathname = usePathname()

    useEffect(() => {
        async function fetchData() {
            const client = createClient();
            const fetchedWorks = await client.getAllByType("work", {
                orderings: [
                    { field: "my.work.publishDate", direction: "desc" },
                    { field: "document.first_publication_date", direction: "desc" },
                ],
            });
            setWorks(fetchedWorks);
        }

        fetchData();
    }, []);

    const handleMouseMove = (event) => {
        setMouse({
            x: event.clientX - 300/2,
            y: event.clientY - 500/2
        })
    };

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <section className={styles.projectselection}>
            <p
                className={styles.projectselection__headline}
            >
                Project selection
            </p>

            {/* <pre>{JSON.stringify(works, undefined, 2)}</pre> */}

            {works.map((work, i) => {
                const path = "/" + work.type + "/" + work.uid

                return (
                    <Link
                        key={i}
                        href={path}
                        className={styles.projectselection__project}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                    >
                        <h2 className={styles.projectselection__title}>{work.data.title}</h2>

                        {work.data.slices[0]?.slice_type === 'hero_project' && (
                            <video
                                className={`${styles.projectselection__video} ${i === hoveredIndex ? styles.projectselection__video__show : ''}`}
                                muted
                                autoPlay0={false}
                                loop
                                style={{
                                    left: mouse.x + 'px',
                                    top: mouse.y + 'px',
                                }}
                            >
                                <source src={work.data.slices[0].primary.hero.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}

                    </Link>
                )
            })}
        </section>
    )
}

export default ProjectSelection