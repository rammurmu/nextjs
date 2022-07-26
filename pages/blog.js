import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'

function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <h1 className='content'>
        Env User {process.env.DB_USER} Password {process.env.DB_PASSWORD}{' '} 
        Analytics {process.env.NEXT_PUBLIC_ANALYTICS_ID} 
      </h1>
      <p className={styles.description}><code className={styles.code}>👏 Welcome to RunAsh</code></p>
      <h1 className={styles.title}>
      Live Blog
      </h1>
      <p className={styles.description}>The latest guides,and  announcement,about live streaming from runash team</p>
      
       
       <p><b><pre><code className={styles.code}>Introduction</b></code></pre><br />Introduceing the next generation and future of eCommerce</p>
        <>
        <ul>
        <li>Live streaming for buyers</li>
        <li>Live streaming for sellers</li>
        <li>Watched live-on-demand</li>
        <li>Live video chat</li>
        <li>Live influencers community</li>
        <li>Live Q and A or poll </li>
       </ul>
       </>
       <Link href="/posts/first-post">
       <a><b>Read More &rarr;</b></a>
       </Link>
       <br />


       <Link href="/blog.js">
       <a><b>&larr; Back to Blog</b></a>
       </Link>
     
    </>
  )
}

export default Blog

export async function getServerSideProps() {
  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD
  console.log(
    `Connecting to database with username ${user} and password ${password}`
  )
  return {
    props: {
      title: 'Article Title',
      description: 'Article description'
    }
  }
}
