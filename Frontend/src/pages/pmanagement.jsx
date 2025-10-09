import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';


const initialProducts = [
  { id: '1', name: 'Laptop', price: '1200', description: 'Powerful business laptop' },
  { id: '2', name: 'Phone', price: '700', description: 'Latest model smartphone' },
  { id: '3', name: 'Headphones', price: '199', description: 'Noise cancelling headphones' },
];


const ProductList = ({ products, onDelete }) => {
  return (
    <div style={styles.container}>
      <h2>Product Management</h2>
      <Link to="/add" style={styles.button}>➕ Add Product</Link>
      <ul style={{ padding: 0 }}>
        {products.map(product => (
          <li key={product.id} style={styles.card}>
            <h3>{product.name}</h3>
            <p><strong>Price:</strong> ${product.price}</p>
            <p>{product.description}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link to={`/edit/${product.id}`} style={styles.buttonSecondary}>✏️ Edit</Link>
              <button onClick={() => onDelete(product.id)} style={styles.buttonDanger}>🗑️ Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


const AddProduct = ({ onAdd }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', price: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      id: Date.now().toString(),
    };
    onAdd(newProduct);
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          placeholder="Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={styles.input}
        />
        <input
          placeholder="Price"
          required
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          style={styles.input}
        />
        <textarea
          placeholder="Description"
          required
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add</button>
      </form>
    </div>
  );
};


const EditProduct = ({ products, onEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  const [formData, setFormData] = useState(
    product ? { ...product } : { name: '', price: '', description: '' }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(id, formData);
    navigate('/');
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div style={styles.container}>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          placeholder="Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={styles.input}
        />
        <input
          placeholder="Price"
          required
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          style={styles.input}
        />
        <textarea
          placeholder="Description"
          required
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          style={styles.input}
        />
        <button type="submit" style={styles.buttonSecondary}>Save Changes</button>
      </form>
    </div>
  );
};


const App = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleAdd = (product) => setProducts([...products, product]);

  const handleEdit = (id, updatedProduct) =>
    setProducts(products.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p)));

  const handleDelete = (id) =>
    setProducts(products.filter((p) => p.id !== id));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList products={products} onDelete={handleDelete} />} />
        <Route path="/add" element={<AddProduct onAdd={handleAdd} />} />
        <Route path="/edit/:id" element={<EditProduct products={products} onEdit={handleEdit} />} />
      </Routes>
    </Router>
  );
};


const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    background: '#f7f7f7',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '5px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
    cursor: 'pointer',
    marginTop: '10px',
    display: 'inline-block',
  },
  buttonSecondary: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  buttonDanger: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default App;
