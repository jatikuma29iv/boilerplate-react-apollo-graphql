import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Employee from './pages/employee'
import Contanct from './pages/contact'
import About from './pages/about'
import Layout from './components/layout'

import RenderOnAnonymous from './components/RenderOnAnonymous'
import RenderOnAuthenticated from './components/RenderOnAuthenticated'
import Welcome from './components/Welcome'

import './App.sass'

function App() {
  return (
  <div className='container'>
    <RenderOnAnonymous>
      <Welcome />
    </RenderOnAnonymous>
    <RenderOnAuthenticated>
    <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/employee">
            <Employee />
          </Route>
          <Route path="/contact">
            <Contanct />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </Layout>
    </RenderOnAuthenticated>
  </div>
  );
}

export default App
