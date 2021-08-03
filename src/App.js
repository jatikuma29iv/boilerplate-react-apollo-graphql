import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Employee from './pages/employee'
import Contanct from './pages/contact'
import About from './pages/about'
import Layout from './components/layout'

import './App.sass'

function App() {
  return (
    <Layout>
      <Router>
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
  );
}

export default App
