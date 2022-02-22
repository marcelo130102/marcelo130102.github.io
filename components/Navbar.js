import Link from 'next/link'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-sm">
      <Link href="/">
        <a className="navbar-brand">Mi portafolio</a>
      </Link>
      
      <div className="collapse navbar-collapse show" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link href="/blog">
              <a className="nav-link">Blog</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/github">
              <a className="nav-link">GitHub</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;