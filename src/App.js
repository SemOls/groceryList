// import logo from './logo.svg';
import './App.css';
import image from "./ocr.jpg";
import foto from "./man.jpg";
import { GroceryList } from './GrosseryList';

function App() {
  return (
    <div className='app' >
        <div className="container">
     <img src={image} width={200} alt="shopping" />
     </div>
     <div className="container">
     <h1> Grocery List </h1>
     </div>
     <GroceryList />
     <div className="container">
     <img src={foto} width={200} alt="shopping" />
     </div>
    </div>
  );
}

export default App;
