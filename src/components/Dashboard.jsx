// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from "../components/Dashboard.module.css";
import spinner from "../assets/spinner.png";

const Dashboard = () => {
  // State for total products and orders
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  // Fetch total products and orders from local storage
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    setTotalProducts(products.length);
    setTotalOrders(orders.length);
  }, []);

  return (
    <div className={style.dashboardcontainer}>
      <h1>Dashboard</h1>

      <div className={style.keymetrics}>
        <div className={style.metriccard}>
          <h2>Total Companies</h2>
          <p>{totalProducts}</p>
        </div>
        <div className={style.metriccard}>
          <h2 style={{ textAlign : 'center'}}>Communication Records</h2>
          <p>{totalOrders}</p>
        </div>
      </div>

      <div className={style.navigationlinks}>
        <Link to="/products" className={style.navlink}>
          <div className={style.navcard}>
            <h2>Company Management</h2>
            <img src={spinner} alt="Spinner" />
            <p>Manage your company</p>
          </div>
        </Link>
        <Link to="/orders" className={style.navlink}>
          <div className={style.navcard}>
            <h2>Communication Management</h2>
            <img src={spinner} alt="Spinner" />
            <p>Manage your communcation methods</p>
          </div>
        </Link>
        <Link to="/calendar-view" className={style.navlink}>
          <div className={style.navcard}>
            <h2>Calendar View</h2>
            <img src={spinner} alt="Spinner" />
            <p>View your records </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
