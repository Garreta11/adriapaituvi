import styles from './Header.module.scss'
import Link from 'next/link';
import { createClient } from '@/prismicio'


const Header = async () => {
    const client = createClient();
    const information = await client.getSingle("information");
    const menu = await client.getSingle("main_menu");

    return (
        <div className={styles.header}>
            {/* <pre>{JSON.stringify(information.data, undefined, 2)}</pre> */}
            

            <div className={styles.header__top}>
                <div className={styles.header__logo}>
                    <a href="/"><p>AP</p></a>
                </div>

                <div className={styles.header__details}>
                    <p>{information.data.job_position}</p>
                    <a href="#">{information.data.email}</a>
                </div>

                <div className={styles.header__phones}>
                    {information.data.phones.map((phone, index) => {
                        return (
                            <>
                                <p>{phone.prefix}</p>
                                <p>{phone.phone}</p>
                            </>
                        )
                    })}
                </div>

                <div className={styles.header__links}>
                    <div className={styles.header__links__menu}>
                        {menu.data.menu.map((item, index) => {
                            return (
                                <Link key={index} href={item.item.url} className={styles.header__links__menu__item}>{item.item.uid}</Link>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className={styles.header__bottom}>
                <p className={styles.header__name}>Adrià Paituví</p>

                <div className={styles.header__social}>
                    <Link href={information.data.linkedin.url} target='_blank'>Linkedin</Link>
                    <span> / </span>
                    <Link href={information.data.instagram.url} target='_blank'>Instagram</Link>
                </div>

            </div>

        </div>
    )
}

export default Header