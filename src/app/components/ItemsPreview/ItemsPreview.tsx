import Image from "next/image";
import styles from './ItemsPreview.module.scss'
import Link from "next/link";
type ItemsPreviewProps = {
  
}
export default function ItemsPreview(props: ItemsPreviewProps) {
  const {} = props
  
  return (
    <div
      className={`${styles.itemsPreview}`}
    >
      <ul className={`${styles.list}`}>
        <li className={`${styles.item}`}>
          <Image
            className={`${styles.image}`}
            src="/images/ItemsPreview/adventuretime.png"
            alt=""
            width="300"
            height="300"
            loading="lazy"
          />
          <h3 className={`${styles.title}`}>Adventure Time Grammar Quest</h3>
          <p className={`${styles.description}`}>Пройди квест по грамматике с любимыми персонажами</p>
          <Link className={`${styles.about}`} href={'/'}>ПОДРОБНЕЕ</Link>
        </li>
        <li className={`${styles.item}`}>
          <Image
            className={`${styles.image}`}
            src="/images/ItemsPreview/adventuretime.png"
            alt=""
            width="300"
            height="300"
            loading="lazy"
          />
          <h3 className={`${styles.title}`}>Adventure Time Grammar Quest</h3>
          <p className={`${styles.description}`}>Пройди квест по грамматике с любимыми персонажами</p>
          <Link className={`${styles.about}`} href={'/'}>ПОДРОБНЕЕ</Link>
        </li>
        <li className={`${styles.item}`}>
          <Image
            className={`${styles.image}`}
            src="/images/ItemsPreview/adventuretime.png"
            alt=""
            width="300"
            height="300"
            loading="lazy"
          />
          <h3 className={`${styles.title}`}>Adventure Time Grammar Quest</h3>
          <p className={`${styles.description}`}>Пройди квест по грамматике с любимыми персонажами</p>
          <Link className={`${styles.about}`} href={'/'}>ПОДРОБНЕЕ</Link>
        </li>
        <li className={`${styles.item}`}>
          <Image
            className={`${styles.image}`}
            src="/images/ItemsPreview/adventuretime.png"
            alt=""
            width="300"
            height="300"
            loading="lazy"
          />
          <h3 className={`${styles.title}`}>Adventure Time Grammar Quest</h3>
          <p className={`${styles.description}`}>Пройди квест по грамматике с любимыми персонажами</p>
          <Link className={`${styles.about}`} href={'/'}>ПОДРОБНЕЕ</Link>
        </li>
      </ul>
    </div>
  )
}
