import logo from '../../img/svg/footer.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <img src={logo} className={styles.logoPic}></img>
        </div>
        <nav className={styles.footerNav}>

          <ul className={styles.menu}>
            <li className={styles.item}>
              <h3 className={styles.itemTitle}>Company</h3>
            </li>
            <li className={styles.item}>
              <span className={styles.itemChild}>About</span>
            </li>
            <li className={styles.item}>
              <span className={styles.itemChild}>Team</span>
            </li>
            <li className={styles.item}>
              <span className={styles.itemChild}>Careers</span>
            </li>
            <li className={styles.item}>
              <span className={styles.itemChild}>Privacy Policy</span>
            </li>
          </ul>

          <ul className={styles.menu}>
            <li className={styles.item}>
              <h3 className={styles.itemTitle}>Locations</h3>
            </li>
            <li className={styles.item}>
              <span className={styles.itemChild}>Tokyo</span>
            </li>
            <li className={styles.item}>
              <span className={styles.itemChild}>Kyoto</span>
            </li>
            <li className={styles.item}>
              <span className={styles.itemChild}>Osaka</span>
            </li>
            <li className={styles.item}>
              <span className={styles.itemChild}>Hokkaido</span>
            </li>
          </ul>

          <ul className={styles.menu}>
            <li className={styles.item}>
              <h3 className={styles.itemTitle}>Social Media</h3>
            </li>
            <li className={styles.item}>
              <span style={{color: '#19A7CE'}} className={styles.itemChild}>Facebook</span>
            </li>
            <li className={styles.item}>
              <span style={{color: '#C0EEF2'}} className={styles.itemChild}>Twitter</span>
            </li>
            <li className={styles.item}>
              <span style={{color: '#FF8B13'}} className={styles.itemChild}>Instagram</span>
            </li>
            <li className={styles.item}>
              <span style={{color: '#E21818'}} className={styles.itemChild}>Youtube</span>
            </li>
          </ul>

        </nav>
      </div>
    </div>
  )
}

export { Footer }