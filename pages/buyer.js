import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Buyer.module.css'
import Link from 'next/link'

export default function Buyer() {
  return (
    <div className={styles.container}>   
    <main className={styles.main}>   
        <Head>
        <div className={styles.description}><code className={styles.code}>👏 Welcome to RunAsh</code></div>
        <div className={styles.title}>Watch live <br /><a href="https://">streaming</a></div>
         <p>Watch previous live recording</p>
        <div className={styles.description}>{' '}<code className={styles.code}><a href="https://">📺Watch Now</a></code></div>

        <div className={styles.title}><a href="https://">Live on demand</a></div>
          <p>Real life shopping experience</p>
        <div className={styles.description}>{' '}<code className={styles.code}><a href="https://">🎬Start Now</a></code></div>
        <div className={styles.description}>Live<br /><a href="https://">broadcast</a></div>
          <p>Connect with retailer around the world</p>
        <div className={styles.description}>{' '}<code className={styles.code}><a href="https://">🌀Connect Now</a></code></div>
        </Head>
        
          <p className={styles.code}>All Categories</p>
          <code className={styles.code}>Short by</code>
          <div className={styles.description}><code className={styles.code}>🍎Fruit</code>{' '}<code className={styles.code}>🥦Vegetable</code><br />
          <code className={styles.code}>💐Flower</code>{' '}<code className={styles.code}>🥫Grocery</code></div>
          <div className={styles.grid}>
          <card className={styles.card}>
            <h2>🏪 Stream Store</h2>
              <p><code className={styles.code}><a href="https://">Watch Now</a></code></p>
          </card>

          
          <card className={styles.card}>
            <h2>🏪 Stream store</h2>
              <p><code className={styles.code}><a href="https://">Watch Now</a></code></p>
          </card>
          <card className={styles.card}>
            <h2>🏪 Stream store</h2>
              <p><code className={styles.code}><a href="https://">Watch Now</a></code></p>
          </card>
          <card className={styles.card}>
            <h2>🏪 Stream store</h2>
              <p><code className={styles.code}><a href="https://">Watch Now</a></code></p>
          </card>
          <card className={styles.card}>
            <h2>🏪 Stream store</h2>
              <p><code className={styles.code}><a href="https://">Watch Now</a></code></p>
          </card>
          <card className={styles.card}>
            <h2>🏪 Stream store</h2>
              <p><code className={styles.code}><a href="https://">Watch Now</a></code></p>
          </card>
          

          


        <p className={styles.paragraph}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
       
        
      </main>
      </div>
  )
}
