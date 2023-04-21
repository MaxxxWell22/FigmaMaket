import pic1 from '../../../img/svg/benefits1.svg';
import pic2 from '../../../img/svg/benefits2.svg';
import pic3 from '../../../img/svg/benefits3.svg';
import styles from './Benefits.module.scss';

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefitsWrap}>
        <h2 className={styles.benefitsTitle}>Benefits of Odigo</h2>
        <div className={styles.benefitsCards}>

          <div className={styles.benefitsCard}>
            <div className={styles.cardPic}>
              <img style={{ width: '50px' }} src={pic1} />
            </div>
            <h3 className={styles.cardTitle}>
              Welcome to Odigo!
            </h3>
            <p className={styles.benefitsDesc}>
              Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
            </p>
            <a className={styles.more}>
              LEARN MORE
            </a>
          </div>

          <div className={styles.benefitsCard}>
            <div className={styles.cardPic}>
              <img style={{ width: '50px' }} src={pic2} />
            </div>
            <h3 className={styles.cardTitle}>
              Your Personal Japan Guide
            </h3>
            <p className={styles.benefitsDesc}>
              Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
            </p>
            <a className={styles.more}>
              LEARN MORE
            </a>
          </div>

          <div className={styles.benefitsCard}>
            <div className={styles.cardPic}>
              <img style={{ width: '50px' }} src={pic3} />
            </div>
            <h3 className={styles.cardTitle}>
              Promoting Local Businesses
            </h3>
            <p className={styles.benefitsDesc}>
              Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
            </p>
            <a className={styles.more}>
              LEARN MORE
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export { Benefits }