import React from 'react';
import styles from './Placeholder.module.css';



const Placeholder: React.FC = () => {
    return <div className={styles.page}>
        <div className={styles.flow}>
            <h1 className={styles.title}>PLACEHOLDER</h1>
            <p className={styles.paragraph}>
            暂无内容。只需等待……
          </p>
            
        </div>
      </div>
}


export default Placeholder;