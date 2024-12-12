import logo from './logo.svg';
import './App.css';

import ParentComponent01 from './components/01Parent';
import Timer from './components/UseEffectExam';

function App() {


  
  return (
    <div className="App">
      <Timer />
      <ParentComponent01 />
    </div>
  )
}

export default App;
