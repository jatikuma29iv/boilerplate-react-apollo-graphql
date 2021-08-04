import { Link } from 'react-router-dom'

const Navigation = () => (
  <ul className='content'>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/employee'>Employee</Link></li>
    <li><Link to='/contact'>Contanct</Link></li>
    <li><Link to='/about'>About</Link></li>
  </ul>
)

const Layout = ({ children }) => (
  <main>
    <Navigation />
    <div className='content'>
      { children }
    </div>
  </main>
)

export default Layout
