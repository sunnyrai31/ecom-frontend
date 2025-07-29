import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:4201/products');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      {products && products.length > 0 ? (
        products.map(product => (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
}

export default App;
