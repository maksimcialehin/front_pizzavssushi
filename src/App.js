import logo from './logo.svg';
import './App.css';
import PizzaList from './pizzerias/pizzerialist';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://static.vecteezy.com/system/resources/previews/009/384/620/original/fresh-pizza-and-pizza-box-clipart-design-illustration-free-png.png" className="App-logo" alt="logo" />
        <p>
          Web App for pizza and sushi lovers.
        </p>
        <h1>
          Pizza vs Sushi
        </h1>
        <PizzaList/>
      </header>
    </div>
  );
}

export default App;
