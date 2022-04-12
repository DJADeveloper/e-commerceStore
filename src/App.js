import './App.css';
import Hero from './components/Hero';
import PrimarySearchAppBar from './components/PrimaryAppBar';
import Products from './components/Products';

function App() {
  return (
    <div className='App'>
      <PrimarySearchAppBar />
      <div className='bodyContainer m-5'>
        <Hero />
        <div className='productsContainer mt-3'>
          <Products />
          <Products />
          <Products />
        </div>
      </div>
    </div>
  );
}

export default App;
