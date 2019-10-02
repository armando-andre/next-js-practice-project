import Link from 'next/link'

const Nav = () => (
  <div>
    <Link href="/">
      <a>
        <h3>Home</h3>
      </a>
    </Link>
    <Link href="/cart">
      <a>
        <h3>Cart</h3>
      </a>
    </Link>
  </div>
)

export default Nav;