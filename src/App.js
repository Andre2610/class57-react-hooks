import Planet from './components/Planet';
import Counter from './components/Counter';
import data from './data/data';
import Fetching from './components/Fetching';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter data={data} />
        {/* <Planet data={data} /> */}
        <Fetching />
      </header>
    </div>
  );
}

export default App;
