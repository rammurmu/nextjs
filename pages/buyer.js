import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Buyer.module.css'
import Link from 'next/link'

export default function Buyer() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seller</title>
        <meta name="description" content="Become a seller" />
        <link rel="icon" href="/favicon.icon" />  
      </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
         NextGen shopping <br /><a href="https://">experience</a>
        </h1>
        <p className={styles.description}>
         You can meet to sellers with face to face real life experience
        </p>
      <code className={styles.code}>🍎🍋 Fruit</code>
      <code className={styles.code}>🥦🍅 Vegetable</code>
      <code className={styles.code}>🥫🍶 Grocery</code>
      <code className={styles.code}>🌴🌺 Flower</code>
      <code className={styles.code}>🍗🥩 Non veg</code>
      <code className={styles.code}>🍚🥛 Dairy food</code>
     </main> 
    </div> 
  )
}
