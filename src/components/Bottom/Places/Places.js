import place1 from '../../../img/place1.jpg';
import place2 from '../../../img/place2.jpg';
import place3 from '../../../img/place3.jpg';
import place4 from '../../../img/place4.jpg';
import place5 from '../../../img/place5.jpg';
import styles from './Places.module.scss';

const Places = () => {
  return (
    <section className={styles.places}>

      <div className={styles.wrapper}>
        <h2 className={(styles.placesTitle, styles.sectionTitle)}>
          Get inspired for your next trip
        </h2>
      </div>

      <div className={styles.placesCards}>

        <figure className={styles.placesCardSizeLg}>
          <img className={styles.placesPhotoLg} src={place1} alt='Mount Fuji' />
          <figcaption className={styles.placesCardTitle}>
            Mount Fuji
          </figcaption>
        </figure>
        <figure className={styles.placesCardSizeLg}>
          <img className={styles.placesPhotoLg} src={place2} alt='Kyoto' />
          <figcaption className={styles.placesCardTitle}>
            Kyoto
          </figcaption>
        </figure>

        <figure className={styles.placesCardSizeSm}>
          <img className={styles.placesPhotoSm} src={place3} alt='Mount Fuji' />
          <figcaption className={styles.placesCardTitle}>
            Tokyo
          </figcaption>
        </figure>
        <figure className={styles.placesCardSizeSm}>
          <img className={styles.placesPhotoSm} src={place4} alt='Kyoto' />
          <figcaption className={styles.placesCardTitle}>
            Niigata
          </figcaption>
        </figure>
        <figure className={styles.placesCardSizeSm}>
          <img className={styles.placesPhotoSm} src={place5} alt='Kyoto' />
          <figcaption className={styles.placesCardTitle}>
            Sapporo
          </figcaption>
        </figure>

      </div>

    </section>
  )
}

export { Places }