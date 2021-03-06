import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
        
        <p className={styles.description}><code className={styles.code}>๐ Welcome to RunAsh</code></p>
        <h1 className={styles.title}>
         NextGen shopping <br /><a href="https://">experience</a>
        </h1>
        <p className={styles.description}>
         You can meet to sellers with face to face real life experience
        </p>
        <button type="Watch live ">Watch live</button>
      <input className={styles.input} placeholder="Search..." />
       <h2>Categories</h2>
      <div>
       <ul className={'main-nav'}>
       <li>
         <Link href='/product'>
            <a>All</a>
         </Link>
       </li>
       <li>
         <Link href='/product1'>
           <a>Handicraft</a>
         </Link>
       </li>
       <li>
          <Link href='/product1'>
            <a>KhadiWear</a>
          </Link>
       </li>     
       <li>
          <Link href='/product3'>
            <a>BoombooCraft</a>
          </Link>
       </li>     
       <li>
          <Link href='/product4'>
            <a>Furnishing</a>
          </Link>
       </li>     
       <li>
          <Link href='/product 5'>
            <a>Electronic</a>
          </Link>
       </li>     
       <li>
          <Link href='/product 6'>
            <a></a>
          </Link>
       </li>     
      </ul>
  </div>
      <div className={styles.grid}>
          <a href="https://productslist" className={styles.card}>
            <h2>๐๐Fruit</h2>
            <p>Organic & fresh </p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>๐ฅฆ๐Vegetable</h2>
            <p>Organic & fresh  </p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>๐ฅซ๐ถGrocery</h2>
            <p>Organic </p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>๐ด๐บFlower</h2>
            <p>Organic & fresh </p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>๐๐ฅฉNon veg</h2>
            <p>Organic & fresh</p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>๐๐ฅDairy</h2>
            <p>Organic & fresh</p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>๐๐ฅBakeri </h2>
            <p>Organic & fresh</p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>๐ฅ๐ฅDry food</h2>
            <p>Organic </p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>๐โ๐ฆบ๐Animal</h2>
            <p>Organic animal </p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>๐๐ฆBird</h2>
            <p>Organic bird</p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>๐๐ฆC food</h2>
            <p>Organic fresh</p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>๐ฅผ๐ฅปFashion</h2>
            <p>Desi fashion </p>
          </a>    
      </div>
     <br />
     <p>Real life ๐๏ธ shopping schedule now </p>
     <br />
    <div className={styles.grid}>
    <p className={styles.card}>๐ Date & Timeโฑ๏ธ</p>
    </div>
    <button type="Schedule">Schedule</button>
    <h1>The future of organic retail</h1>
     <p>One stop solution for organic products</p>
     </main> 
    </div> 
  )
}
