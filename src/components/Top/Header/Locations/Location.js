import location1 from '../../../../img/location1.jpg';
import location2 from '../../../../img/location2.jpg';
import styles from './Location.module.scss';

const Locations = () => {
  return (
    <div className={styles.locations}>
      <div className={styles.locationsWrap}>
        <div className={styles.locationsPic}>
          <img src={location2} width='400px' className={styles.pic}></img>
        </div>
        <div className={styles.locationInfo}>
          <h3 className={styles.locationTitle}>
            Prefecture in Focus: <span style={{ color: '#DF2E38' }}>Tottori</span>
          </h3>
          <p className={styles.locationDec}>
            Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
            Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child,
            open the door,
          </p>
        </div>
      </div>
      <div className={styles.locationsWrap}>
        <div className={styles.locationInfo}>
          <h3 className={styles.locationTitle}>
            Featured Neighborhood: <span style={{ color: '#DF2E38' }}>Kyoto’s Arashiyama</span>
          </h3>
          <p className={styles.locationDec}>
            Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
            Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child,
            open the door,
          </p>
        </div>
        <div className={styles.locationsPicTwo}>
          <img src={location1} width='400px' className={styles.picTwo}></img>
        </div>
      </div>
    </div>
  )
}

export { Locations }