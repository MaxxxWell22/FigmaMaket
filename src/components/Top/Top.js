import { Header } from './Header/Header';
import { RoutesContent } from '../RoutesContent/RoutesContent'
import styles from './Top.module.scss';

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles.topChild}>
        <Header />
        <RoutesContent />
      </div>
    </div>
  )
}

export { Top }