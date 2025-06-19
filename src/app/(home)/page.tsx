import Image from "next/image";
import styles from "./page.module.scss";
import ItemsPreview from "@/app/components/ItemsPreview/ItemsPreview";
export default function Home() {
  return (
    <section className={`${styles.preview} main-wrapper`}>
      <div className={`${styles.points}`}>
        <span className={`${styles.point}`}></span>
        <span className={`${styles.point}`}></span>
        <span className={`${styles.point}`}></span>
      </div>
      <h2 className={`${styles.title}`}>Лучшие материалы для учителей</h2>
      <h1 className={`${styles.subtitle}`}>Сделайте уроки интереснее</h1>
      <ItemsPreview />
      <button
        className={`${styles.viewCatalog}`}
        type="button"
      >
        Посмотреть весь каталог
      </button>
    </section>
  );
}
