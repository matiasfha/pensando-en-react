import React from "react";
import Toolbar from "./Toolbar";
import styles from "./tweet.module.css";

const Tweet = ({ tweet }) => {
  const { avatar, author, tag, date, content } = tweet;
  return (
    <div className={styles["tweet-card"]}>
      <img src={avatar} className={styles.avatar} />
      <div className={styles.container}>
        <h5 className={styles.author}>
          {author}
          <span>
            @{tag} {date}
          </span>
        </h5>
        <p>{content}</p>
        <Toolbar />
      </div>
    </div>
  );
};

export default Tweet;
