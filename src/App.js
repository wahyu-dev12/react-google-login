import './App.css';
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="home-page">
      <Navigation />
      <h1>List Data Car</h1>
      <listCars/>
    </div>
  );
}

export default App;
