import styles from './DownloadItem.module.css';

const DownloadItem = props => {

    return (
        <div className={styles["card"]}>
          <div
            className={styles["image-container"]}
            style={{ backgroundImage: `url(${props.coverUrl})` }}
          ></div>
          <div className={styles["text-container"]}>
            <span className={styles["title"]}>{props.title}</span>
            <span className={styles["price"]}>{props.author}</span>
          </div>
          <div className={styles["actions"]}>
            <button className={styles["download-button"]}>
                <a href={props.downloadUrl} download>Download</a>
            </button>
          </div>
        </div>
      );
}

export default DownloadItem;