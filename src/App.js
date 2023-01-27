import './css/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import Update from './components/Update';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

/**
 * Returns a JSX element containing the react app
 * @return {JSX.Element} A JSX element containing the react app
 */
function App() {
  const [selectedExpense, setSelectedExpense] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home setSelectedExpense={setSelectedExpense} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/update">
              <Update selectedExpense={selectedExpense} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
