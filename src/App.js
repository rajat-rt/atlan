import SqlEditor from './components/SqlEditor'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header className="App-header"></Header>
      <SqlEditor></SqlEditor>
    </div>
  );
}

export default App;
