import './App.css';
import Home from './components/home';

function App() {
  const getCustomers=()=>{
    console.log("hi there");
  }
  return (
    <div className="App">
   <h1>Bank System</h1>
   <Home getCustomers={getCustomers}/>
    </div>
  );
}

export default App;
