import './App.css';
import Navbar from './Navbar';
import Home from './Home';

/**
 * Returns a JSX element containing the react app
 * @return {JSX.Element} A JSX element containing the react app
 */
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
