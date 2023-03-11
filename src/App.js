import Counter from './Components/Counter';
import HOC from './Components/HOC.jsx';
import './App.css';
import Display from './Components/PureComponent';

function App() {
  return (
    <>
      <div className="App">
        <HOC data={Counter}/>
      </div>
      <div className="App">
      <Display/>
      </div>
    </>
  );
}

export default App;
