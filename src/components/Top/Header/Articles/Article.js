import article1 from '../../../../img/article1.jpg';
import article2 from '../../../../img/article2.jpg';
import article3 from '../../../../img/article3.jpg';
import article4 from '../../../../img/article4.jpg';
import article5 from '../../../../img/article5.jpg';
import article6 from '../../../../img/article6.jpg';
import styles from './Articles.module.scss';

const Article = () => {
  return (
    <div className={styles.topCards}>
      
      <div className={styles.topCard}>
        <div className={styles.topCardPic}>
          <img src={article1} width='100%' className={styles.pic} />
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>
              NAGOYA
            </h3>
            <div className={styles.likes}>
              <span className={styles.likesValue}>
                221
              </span>
            </div>
            <div className={styles.comments}>
              <span className={styles.commentsValue}>
                50
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.topCard}>
        <div className={styles.topCardPic}>
          <img src={article2} width='100%' className={styles.pic} />
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>
              NIIGATA
            </h3>
            <div className={styles.likes}>
              <span className={styles.likesValue}>
                180
              </span>
            </div>
            <div className={styles.comments}>
              <span className={styles.commentsValue}>
                33
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.topCard}>
        <div className={styles.topCardPic}>
          <img src={article3} width='100%' className={styles.pic} />
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>
              OSAKA
            </h3>
            <div className={styles.likes}>
              <span className={styles.likesValue}>
                270
              </span>
            </div>
            <div className={styles.comments}>
              <span className={styles.commentsValue}>
                47
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.topCard}>
        <div className={styles.topCardPic}>
          <img src={article4} width='100%' className={styles.pic} />
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>
              SAITAMA
            </h3>
            <div className={styles.likes}>
              <span className={styles.likesValue}>
                193
              </span>
            </div>
            <div className={styles.comments}>
              <span className={styles.commentsValue}>
                52
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.topCard}>
        <div className={styles.topCardPic}>
          <img src={article5} width='100%' className={styles.pic} />
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>
              UENO
            </h3>
            <div className={styles.likes}>
              <span className={styles.likesValue}>
                163
              </span>
            </div>
            <div className={styles.comments}>
              <span className={styles.commentsValue}>
                27
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.topCard}>
        <div className={styles.topCardPic}>
          <img src={article6} width='100%' className={styles.pic} />
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>
              SHIBUYA
            </h3>
            <div className={styles.likes}>
              <span className={styles.likesValue}>
                237
              </span>
            </div>
            <div className={styles.comments}>
              <span className={styles.commentsValue}>
                32
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export { Article }