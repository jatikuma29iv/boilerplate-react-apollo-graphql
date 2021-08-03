
const Navigation = () => (
  <ul className='content'>
    <li><a href='/'>Home</a></li>
    <li><a href='/employee'>Employee</a></li>
    <li><a href='/contact'>Contanct</a></li>
    <li><a href='/about'>About</a></li>
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
