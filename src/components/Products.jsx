import React, { useState, useEffect } from 'react';
import styles from '../components/Products.module.css';
import { v4 as uuidv4 } from 'uuid'; 

const Products = () => {
  const initialProduct = { 
    id: 0, 
    name: '', 
    category: '', 
    emails: '',  // new field for emails
    comments: '',  // new field for comments
    communicationPeriodicity: '',  // new field for communication periodicity
    linkedinProfile: ''  // new field for LinkedIn Profile
  };

  const initialProducts = JSON.parse(localStorage.getItem('products')) || [
    { 
      id: uuidv4(), 
      name: 'Product 1', 
      category: 'Category A', 
      emails: 'example1@email.com',  // sample email
      comments: 'This is a comment.',  // sample comment
      communicationPeriodicity: 'Weekly',  // sample periodicity
      linkedinProfile: 'https://www.linkedin.com/in/example1'  // sample LinkedIn Profile
    },
    { 
      id: uuidv4(), 
      name: 'Product 2', 
      category: 'Category B', 
      emails: 'example2@email.com',  // sample email
      comments: 'This is another comment.',  // sample comment
      communicationPeriodicity: 'Monthly',  // sample periodicity
      linkedinProfile: 'https://www.linkedin.com/in/example2'  // sample LinkedIn Profile
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({ ...initialProduct });
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (e) => {
    e.preventDefault(); 
    const newProductWithId = { ...newProduct, id: uuidv4() };
    setProducts([...products, newProductWithId]);
    setNewProduct({ ...initialProduct });
  };

  const updateProduct = (e) => {
    e.preventDefault(); 
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === editProduct.id ? newProduct : product))
    );
    setNewProduct({ ...initialProduct });
    setEditProduct(null);
  };

  const editProductHandler = (product) => {
    setEditProduct(product);
    setNewProduct(product);
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div>
      <h1 className={styles.titlep}>Companies Management</h1>

      <table className={styles.tablep}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Emails</th> {/* New column for emails */}
            <th>Comments</th> {/* New column for comments */}
            <th>Communication Periodicity</th> {/* New column for communication periodicity */}
            <th>LinkedIn Profile</th> {/* New column for LinkedIn Profile */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.emails}</td> {/* Display email */}
              <td>{product.comments}</td> {/* Display comment */}
              <td>{product.communicationPeriodicity}</td> {/* Display periodicity */}
              <td><a href={product.linkedinProfile} target="_blank" rel="noopener noreferrer">View Profile</a></td> {/* Display LinkedIn Profile */}
              <td>
                <button className={styles.deleteButtonp} onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
                <button onClick={() => editProductHandler(product)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.formContainerp}>
        <h2>Add/Edit Company</h2>
        <form>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />

          <label>Category</label>
          <input
            type="text"
            placeholder="Category"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          />

          <label>Emails</label>
          <input
            type="email"
            placeholder="Emails"
            value={newProduct.emails}
            onChange={(e) => setNewProduct({ ...newProduct, emails: e.target.value })}
          />

          <label>Comments</label>
          <input
            type="text"
            placeholder="Comments"
            value={newProduct.comments}
            onChange={(e) => setNewProduct({ ...newProduct, comments: e.target.value })}
          />

          <label>Communication Periodicity</label>
          <input
            type="text"
            placeholder="Communication Periodicity"
            value={newProduct.communicationPeriodicity}
            onChange={(e) => setNewProduct({ ...newProduct, communicationPeriodicity: e.target.value })}
          />

          <label>LinkedIn Profile</label>
          <input
            type="url"
            placeholder="LinkedIn Profile URL"
            value={newProduct.linkedinProfile}
            onChange={(e) => setNewProduct({ ...newProduct, linkedinProfile: e.target.value })}
          />

          {editProduct ? (
            <button className={styles.updateButtonp} onClick={updateProduct}>
              Update Company
            </button>
          ) : (
            <button className={styles.addButtonp} onClick={addProduct}>
              Add Company
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Products;
