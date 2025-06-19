'use client';

import styles from './Header.module.scss'
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

type HeaderProps = {}
export default function Header(props: HeaderProps) {
  const {} = props
  const [isBurgerMenuActve,setIsBurgerMenuActive] = useState(false)
  return (
    <header
      className={`${styles.header} main-wrapper`}
    >
      <div className={styles.logo}>
        <Image
          src="/images/Header/pepe.png"
          alt=""
          width="60"
          height="60"
          loading="lazy"
        />
        <h1 className={styles.title}><Link href={'/'}><span className={`primary-text`}>Mem</span>glish</Link></h1>
      </div>
      <button
        className={`${styles.burgerMenu} ${isBurgerMenuActve ? styles.burgerClose : ""} mobile-above-hidden`}
        type="button"
        aria-label={'open menu'}
        onClick={()=>setIsBurgerMenuActive(!isBurgerMenuActve)}
      >
        <span className={`${styles.burgerLine}`}></span>
        <span className={`${styles.burgerLine}`}></span>
        <span className={`${styles.burgerLine}`}></span>
      </button>
      <nav className={`${styles.menu} ${isBurgerMenuActve ? styles.active : ''}`}>
        <Link className={styles.link} href={'/Presentations'}>Презентации</Link>
        <Link className={styles.link} href={'/Critics'}>Отзывы</Link>
        <Link className={styles.link} href={'/About'}>Об Авторе</Link>
      </nav>
    </header>
  )
}