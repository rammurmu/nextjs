import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Seller.module.css'
import Link from 'next/link'

export default function Seller() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seller</title>
        <meta name="description" content="A live retail streaming platform " />
        <link rel="icon" href="/favicon.icon" />  
      </Head>
        <main className={styles.main}>
        <p className={styles.description}><code className={styles.code}>👏 Welcome to RunAsh</code></p>
        <h1 className={styles.title}>
          Make your own made<br /><a href="https://">business</a>
        </h1>   
        <p className={styles.description}>
          Give your store a real experience on a complete real digitization 
        </p>
        <button type="Go live">Go live</button>
        <p>Unique real experiences </p>
        <div className={styles.grid}>
          <a href="https://" className={styles.card}>
            <h2>Ubiquity</h2>
            <p>Reduce your selling costs and sustain more efficient</p>
          </a>
          
          <a href="https://" className={styles.card}>
            <h2>Global reach</h2>
            <p>Reaches your customers,around the earth</p>
          </a>
          
          <a href="https://" className={styles.card}>
            <h2>Universal standards</h2>
            <p>High quality live streaming technology across the globe</p>
          </a>
          
          <a href="https://" className={styles.card}>
            <h2>Richness</h2>
            <p> Real video selling are possible and cusuming real experience</p>
          </a>
          
          <a href="https://" className={styles.card}>
            <h2>Interactivity</h2>
            <p>Engaged face to face interaction with customers</p>
          </a>
          
          <a href="https://" className={styles.card}>
            <h2>Information density</h2>
            <p>Reduces costs and raises high quality business</p>
          </a>
        
          <a href="https://" className={styles.card}>
            <h2>Personalization</h2>
            <p>Technology allows personalized own made business experience</p>
          </a>
          
          <a href="https://" className={styles.card}>
            <h2>Customisation</h2>
            <p>Technology delivered real experience on business characteristics</p>
          </a>
         </div>
         <br />
         <p>Shaping the future of retail</p>
         <br />
      
      <p><b>Benefits</b> Lear more &rarr;</p>
      
       <div className={styles.grid}> 
       <p className={styles.card}>🔐 Secured data</p>
       <p className={styles.card}>🛡️ Trusted sale </p>
       <p className={styles.card}>✅ First payment</p>
       </div>
     <br />
      <div className={styles.title}>How it works ?</div>
      <p>Learn more &rarr;</p>

      <p className={styles.description}>Get support <b>24 x 7 x 365 </b>days &rarr;</p>
      
      </main>
      </div>
  )
}
