import { Top } from './components/Top/Top';
import { Bottom } from './components/Bottom/Bottom';
import { Footer } from './components/Footer/Footer';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Top />
      <div className={styles.wrapperTwo}>
        <Bottom />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
