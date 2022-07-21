import Link from 'next/link'

function Navbar() {
  return (
      <nav className='header'>
        <h1 className='logo'>
          <a href='/home'>RunAsh</a>
        </h1>
      <ul className={'main-nav'}>
       <li>
         <Link href='/about'>
            <a>Startup</a>
         </Link>
       </li>
       <li>
         <Link href='/seller'>
           <a>Seller</a>
         </Link>
       </li>
       <li>
          <Link href='/buyer'>
            <a>Buyer</a>
          </Link>
       </li>     
       <li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
       </li>     
       <li>
          <Link href='/docs'>
            <a>Docs</a>
          </Link>
       </li>     
       <li>
          <Link href='/no-js-form'>
            <a>Login</a>
          </Link>
       </li>     
     </ul>
   </nav>
 )
}

export default Navbar
