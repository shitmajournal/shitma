import React from 'react';
import { NavLink } from 'react-router-dom';
import sign from '../assets/sign.svg';
import styles from './Header.module.css';


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={sign} alt="Logo" className={styles.logoIcon}/>
        <h1>SHITMA</h1>
      </div>
      <ul className={styles.navLinks}>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>
              首页
            </NavLink>
          </li>
          <li>
            <NavLink to="/recent" className={({ isActive }) => isActive ? styles.active : ''}>
              最新
            </NavLink>
          </li>
          <li>
            <NavLink to="/submit" className={({ isActive }) => isActive ? styles.active : ''}>
              我要投稿
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>
              网站构史
            </NavLink>
          </li>
        </ul>
    </header>
  );
};

export default Header;
