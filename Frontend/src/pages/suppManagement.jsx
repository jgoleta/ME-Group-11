import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom';


const initialSuppliers = [
  { id: '1', name: 'Supplier A', contact: 'John Doe', phone: '123-456-7890' },
  { id: '2', name: 'Supplier B', contact: 'Jane Smith', phone: '987-654-3210' },
];


function SupplierList({ suppliers, onDelete }) {
  return (
    <div style={styles.container}>
      <h2>Supplier Management</h2>
      <Link to="/add" style={styles.addButton}>➕ Add Supplier</Link>
      <ul style={{ padding: 0 }}>
        {suppliers.map((sup) => (
          <li key={sup.id} style={styles.card}>
            <h3>{sup.name}</h3>
            <p><strong>Contact:</strong> {sup.contact}</p>
            <p><strong>Phone:</strong> {sup.phone}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link to={`/edit/${sup.id}`} style={styles.editButton}>✏️ Edit</Link>
              <button
                style={styles.deleteButton}
                onClick={() => {
                  if (window.confirm(`Delete supplier "${sup.name}"?`)) {
                    onDelete(sup.id);
                  }
                }}
              >
                🗑️ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


function AddSupplier({ onAdd }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', contact: '', phone: '' });

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.contact || !form.phone) {
      alert('Please fill all fields');
      return;
    }
    onAdd({ ...form, id: Date.now().toString() });
    navigate('/');
  }

  return (
    <div style={styles.container}>
      <h2>Add Supplier</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          style={styles.input}
        />
        <input
          placeholder="Contact Person"
          value={form.contact}
          onChange={e => setForm({ ...form, contact: e.target.value })}
          style={styles.input}
        />
        <input
          placeholder="Phone"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          style={styles.input}
        />
        <button type="submit" style={styles.submitButton}>Add Supplier</button>
      </form>
    </div>
  );
}


function EditSupplier({ suppliers, onEdit }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const supplier = suppliers.find(s => s.id === id);

  const [form, setForm] = useState(supplier || { name: '', contact: '', phone: '' });

  if (!supplier) return <p>Supplier not found</p>;

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.contact || !form.phone) {
      alert('Please fill all fields');
      return;
    }
    onEdit(id, form);
    navigate('/');
  }

  return (
    <div style={styles.container}>
      <h2>Edit Supplier</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          style={styles.input}
        />
        <input
          placeholder="Contact Person"
          value={form.contact}
          onChange={e => setForm({ ...form, contact: e.target.value })}
          style={styles.input}
        />
        <input
          placeholder="Phone"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          style={styles.input}
        />
        <button type="submit" style={styles.submitButton}>Save Changes</button>
      </form>
    </div>
  );
}


export default function SupplierManagementApp() {
  const [suppliers, setSuppliers] = useState(initialSuppliers);

  function addSupplier(supplier) {
    setSuppliers(prev => [...prev, supplier]);
  }

  function editSupplier(id, updatedSupplier) {
    setSuppliers(prev =>
      prev.map(s => (s.id === id ? { ...s, ...updatedSupplier } : s))
    );
  }

  function deleteSupplier(id) {
    setSuppliers(prev => prev.filter(s => s.id !== id));
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<SupplierList suppliers={suppliers} onDelete={deleteSupplier} />}
        />
        <Route path="/add" element={<AddSupplier onAdd={addSupplier} />} />
        <Route
          path="/edit/:id"
          element={<EditSupplier suppliers={suppliers} onEdit={editSupplier} />}
        />
      </Routes>
    </Router>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: '20px auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    background: '#f0f0f0',
    padding: 15,
    borderRadius: 6,
    marginBottom: 10,
  },
  addButton: {
    display: 'inline-block',
    marginBottom: 15,
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: 'white',
    borderRadius: 6,
    textDecoration: 'none',
  },
  editButton: {
    backgroundColor: '#007bff',
    border: 'none',
    padding: '7px 15px',
    borderRadius: 5,
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    border: 'none',
    padding: '7px 15px',
    borderRadius: 5,
    color: 'white',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  input: {
    padding: 8,
    fontSize: 16,
    borderRadius: 4,
    border: '1px solid #ccc',
  },
  submitButton: {
    marginTop: 10,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
};
