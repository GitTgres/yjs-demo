import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"></link>
      <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <div id="editor" />
    </div>
  );
}

export default App;
