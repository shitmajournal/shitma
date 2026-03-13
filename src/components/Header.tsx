import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import sign from '../assets/sign.svg';
import styles from './Header.module.css';


const Header: React.FC = () => {
  const [spinning, setSpinning] = useState(false);

  const handleMouseEnter = () => {
    if (spinning) return;
    setSpinning(true);
  };

  const handleAnimationEnd = () => {
    setSpinning(false);
  };
  
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img
          src={sign}
          alt="Logo"
          className={`${styles.logoIcon} ${spinning ? styles.spinning : ''}`}
          onMouseEnter={handleMouseEnter}
          onAnimationEnd={handleAnimationEnd}
        />
        <h1>SHITMA</h1>
      </div>
      <ul className={styles.navLinks}>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : styles.inactive}>
              首页
            </NavLink>
          </li>
          <li>
            <NavLink to="/recent" className={({ isActive }) => isActive ? styles.active : styles.inactive}>
              最新
            </NavLink>
          </li>
          <li>
            <NavLink to="/submit" className={({ isActive }) => isActive ? styles.active : styles.inactive}>
              我要投稿
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : styles.inactive}>
              网站构史
            </NavLink>
          </li>
      </ul>

    </header>
  );
};

export default Header;
