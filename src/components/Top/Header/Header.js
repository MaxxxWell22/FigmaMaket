import { Link } from 'react-router-dom';
import logo from '../../../img/svg/logo.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogo}>
          <Link to='/'>
            <img src={logo} alt='Discover Amazing places in Japan' className={styles.logo} />
          </Link>
        </div>
        <div className={styles.headerList}>
          <Link className={styles.headerItem} to='/articles'>Articles</Link>
          <Link className={styles.headerItem} to='/locations'>Locations</Link>
          <Link className={styles.headerItem} to='/videos'>Videos</Link>
        </div>
      </div>
    </div>
  )
}

export { Header }