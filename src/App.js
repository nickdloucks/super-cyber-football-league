import './App.css';
import TeamCreator from './components/TeamCreator';
import { default as Standings } from './confStandings'

function App() {
  return (
    <div className="App">
      <header className="App-header">SCFL App</header>
      <TeamCreator />
      {/*<Standings />*/}
    </div>
  );
}

export default App;
