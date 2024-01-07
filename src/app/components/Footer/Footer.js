import styles from './Footer.module.scss'
import Link from 'next/link';
import { createClient } from '@/prismicio'
import Marquee from '../Marquee/Marquee';

const Footer = async () => {
    const client = createClient();
    const information = await client.getSingle("information");
    const menu = await client.getSingle("main_menu");

    return (
        <footer className={styles.footer}>
            {/* <pre>{JSON.stringify(information.data, undefined, 2)}</pre> */}

            <Marquee cities={information.data.cities} />

            <div className={styles.footer__info}>
                
                <div className={styles.footer__logo}>
                    <p>AP</p>
                </div>

                <div className={styles.footer__details}>
                    <p>{information.data.job_position}</p>
                    <a href="#">{information.data.email}</a>
                </div>

                <div className={styles.footer__phones}>
                    {information.data.phones.map((phone, index) => {
                        return(
                            <>
                                <p>{phone.prefix}</p>
                                <p>{phone.phone}</p>
                            </>
                        )
                    })}
                </div>

                <div className={styles.footer__links}>
                    <div className={styles.footer__links__menu}>
                        {menu.data.menu.map((item, index) => {
                            return(
                                <Link key={index} href={item.item.url}>{item.item.uid}</Link>
                            )
                        })}
                    </div>
                    <div className={styles.footer__links__social}>
                        <Link href={information.data.linkedin.url} target='_blank'>Linkedin</Link>
                        <Link href={information.data.instagram.url} target='_blank'>Instagram</Link>
                    </div>
                </div>

            </div>

            <div className={styles.footer__bottom}>
                <p>{information.data.copyright}</p>
                <p>Design by <Link href='https:naiaraodriozola.com' target="_blank">NAIARA ODRIOZOLA</Link> Code by <Link href="https:jordigarreta.com" target="_blank">JORDI GARRETA</Link></p>
            </div>

        </footer>
    )
}

export default Footer