import styles from './Monthly.module.css';

export function Monthly() {


    return (
        <div>
            <h1 style={{margin : "100px"}}>Monthly plan</h1>

            <div className={styles.container}>
                {/* <div className={style.card2}> */}
                    <p className={styles.s5}> Month to Month $90/month</p>  
                    {/* <span className={styles.s6}> $  </span>  
                    <span className={styles.s7}> 90 </span>   <br />
                    <span className={styles.s8}> /month </span> <br /> */}
                    <p className={styles.p}>
                    ☑️ $99 Joining Free  <br /> <br />
                    ☑️ No Contact  <br /> <br />
                    ☑️ Free Gym Access   <br /> <br />
                    ☑️ 1 Group Class Include  <br /> <br />
                    ☑️ 24 Hours Access <br />
                    </p>
            </div>
        </div>
    );
}