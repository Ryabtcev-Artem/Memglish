import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <section className={`${styles.preview} main-wrapper`}>
      <div className={`${styles.points}`}>
        <span className={`${styles.point}`}></span>
        <span className={`${styles.point}`}></span>
        <span className={`${styles.point}`}></span>
      </div>
      <h2 className={`${styles.title}`}>Лучшие материалы для учителей</h2>
      <p>
        Добро пожаловать на <strong>Memglish</strong> — ресурс для преподавателей английского языка. Здесь вы найдёте готовые материалы для уроков, полезные презентации, авторские методики, отзывы коллег и советы по организации занятий. Проект создан, чтобы сэкономить ваше время, вдохновить и помочь сделать уроки ещё интереснее и эффективнее. Всё просто: заходите, выбираете нужное — и используете прямо в классе.
      </p>
    </section>
  );
}
