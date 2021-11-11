import logo from './logo.svg';
import './App.css';
import ReactState from './components/ReactState';
import NonReactState from './components/NonReactState';
import UseRef from './components/UseRef';
import UseMemo from './components/UseMemo';
import UseCallback from './components/UseCallback';

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
        <br /><br />
        <em>
          *NOTE: The displayed code is not an accurate representation of this app's code, and may have been modified for readability<br/><br />
          **NOTE: Double logging only happens in development mode and should help to find accidental side effects in the render phase.
        </em>
        <ReactState />
        <NonReactState />
        <UseRef />
        <UseMemo />
        <UseCallback />
      </div>
    </div>
  );
}

export default App;
