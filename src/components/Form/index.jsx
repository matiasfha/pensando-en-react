import React from "react";
import Toolbar from "./Toolbar";
import styles from "./form.module.css";
const Form = ({ user = {}, onSubmit }) => {
  const ref = React.useRef(null);

  const submit = () => {
    if (ref.current?.value && ref.current?.value != "") {
      onSubmit(ref.current.value);
      ref.current.value = "";
    }
  };
  return (
    <div className={styles["tweet-form"]}>
      <img src={user.avatar} className={styles.avatar} />
      <div className={styles.container}>
        <textarea placeholder="¿Qué está pasando?" rows="1" ref={ref} />
        <div className={styles.tools}>
          <Toolbar />
          <button onClick={submit}>Twittear</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
