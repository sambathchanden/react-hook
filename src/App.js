import logo from './logo.svg';
import './App.css';
import { useEffect, useState  } from 'react';
import { fetchProducts } from './services/productAction';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, [])

  return (
   products.map(product => <h1>{product.title}</h1>
  ));
}

export default App;
