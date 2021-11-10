import logo from './logo.svg';
import './App.css';
import ReactState from './components/ReactState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Hooks</h1>
        <h3>By Johee Chung</h3>
      </header>
      <div id="content">
        <div className="text-center">
          <a
            className="App-link"
            href="https://reactjs.org/docs/hooks-intro.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official React Hooks Docs
          </a>
        </div>
        <div className="text-center">
          <a
            className="App-link"
            href="https://beta.reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Beta React Docs
          </a>
        </div>
        <ReactState />
      </div>
    </div>
  );
}

export default App;
