import React from "react";
import styles from "../../styles/style";

const Home = () => {
  return (
    <>
      <p className={`${styles.heading1}`}>This is Heading 1 </p>
      <p className={`${styles.heading2}`}>This is Heading 2</p>
      <p className={`${styles.subheading}`}>This is subheading </p>
      <p className={`${styles.subtext}`}>This is Subtext </p>
      <p className={`${styles.paragraph}`}>This is paragraph</p>
      <p className={`${styles.caption1}`}>This is caption1 </p>
      <p className={`${styles.caption2}`}>This is caption 2</p>
      <p className={`${styles.buttoncta1}`}>This is button cta</p>
      <p className={`${styles.buttoncta2}`}>This is button cta2</p>
    </>
  );
};

export default Home;
