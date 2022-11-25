import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Returns a JSX element containing the react app
 * @return {JSX.Element} A JSX element containing the react app
 */
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
