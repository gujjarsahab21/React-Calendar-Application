import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../components/Navbar.module.css";
import erp from "../assets/erp.jpg";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';
import { color } from 'framer-motion';

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link to="/" className={styles.logoLink}>
        <img src={erp} alt="Logo" />
      </Link>
      <p style={{ color: 'white' }}>React Calender Application</p>
      <div>
        <Menu>
          <MenuButton className={styles.MenuButton}>Open menu</MenuButton>
          <MenuList className={styles.MenuList}>
            <MenuItem as={Link} to="/">Home</MenuItem>
            <MenuItem as={Link} to="/products">Company</MenuItem>
            <MenuItem as={Link} to="/orders">Communcation Methods</MenuItem>
            <MenuItem as={Link} to="/calendar-view">Calendar View</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
