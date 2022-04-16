
import './App.css';
import {Button} from 'react-bootstrap';

import Header from './components/Header/Header';
import Fregment from './components/Fregments/Fregment';

function App() {
  return (
    <div className="App">
    <h3>react bootstrap</h3>
    <Button variant = "primary">primary</Button>
    <Fregment></Fregment>
     <Header></Header>
 
    </div>
  );
}

export default App;
