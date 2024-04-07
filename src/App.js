import Navbar from "./Navbar";
import Filter from "./Filter";
import './App.css'
import image from './images/Mountains.png'
import logo from './images/Mountains.png'
import Trending from "./components/Trending"; 


const name = 'Fittouch';

function App() {
  return (
    // <Trending/>
  <div className= "App">
      
    <div className='Logo'>
      <img className='Skis' src={logo} alt="logo" width/>
      <text>
          {name}
      </text>
    </div>
    <Navbar/>
    <h1 className='Header'>
      <text>
          Welcome to
      </text>
      <text>
        {name}
      </text>
    </h1>
    <Filter/>
</div>
  );  
}

export default App;
