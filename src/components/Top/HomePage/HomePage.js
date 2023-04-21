import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.main}>
      <section className={styles.intro}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Discover Amazing places in Japan</h1>
          <p className={styles.subTitle}>
            Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
            Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child,
            open the door,
          </p>
          <form className={styles.search}>
            <fieldset>
              <p className={styles.info}>
                <input type='text' name='user-like-to-do' className={styles.field} placeholder='What would you like to do?' />
                <input type='text' name='user-like-to-go' className={styles.field} placeholder='Where would you like to go?' />
                <button type='submit' className={styles.submit}>search</button>
              </p>
            </fieldset>
          </form>
        </div>
      </section>
    </div>
  )
}

export { HomePage }