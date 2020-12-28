import Head from 'next/head'
import styles from '../styles/Index.module.css'

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>slvDev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.row}>
        <div className={styles.block}>
          <p>Articles</p>
        </div>
        <div className={styles.block}>
          <p>Projects</p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.block}>
          <p>CGCloud</p>
        </div>
        <div className={styles.block}>
          <p>About Me</p>
        </div>
      </div>
    </div>
  )
}
