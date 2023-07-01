import styles from './Day.module.css'

export function Day() {
  return (
    <div>
      <h1 style={{ margin: "100px" }}>Day plan</h1>

      <div className={styles.main}>
        <p className={styles.s1}> Day Pass $20/pass </p>
        {/* <span className={styles.s2}> $ </span>
        <span className={styles.s3}> 20 </span> <br />
        <span className={styles.s4}> /pass </span> <br /> */}
        <p className={styles.para}>
          ☑️ 1 Day Pass <br /> <br />
          ☑️ Free Gym Access <br /> <br />
          ☑️ 24 Hours Access <br />
        </p>
      </div>
    </div>
  );
}
