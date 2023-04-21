import { Article } from './Article';
import styles from './Articles.module.scss';

const Articles = () => {
  return (
    <section className={styles.top}>
      <div className={styles.wrapper}>
        <Article />
      </div>
    </section>
  )
}

export { Articles }