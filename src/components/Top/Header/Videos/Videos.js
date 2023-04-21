import styles from './Videos.module.scss';

const Videos = () => {
  return (
    <div className={styles.video}>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nGJMwixogyk" title="YouTube video player"
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
    </div>
  )
}

export { Videos }