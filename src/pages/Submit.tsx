import React from 'react';
import styles from './Submit.module.css';



const Submit: React.FC = () => {
    return <div className={styles.page}>
        <div className={styles.body}>
            <h1 className={styles.title}>ENTRANCE</h1>
            <p className={styles.paragraph}>
                
                本站暂时采用邮件投稿的形式。请按照<a href='https://github.com/shitmajournal/shitma-template'> 投稿模板 </a>的引导完成稿件，并用标题为【投稿：【标题】】（去掉方括号）、附件为稿件文档的邮件发送到<a href='mailto:shitma@proton.me'> shitma@proton.me </a>。请勿在投稿中包含危险、恶心等违反法律法规和影响审稿人观感的内容。
            </p> 
            
        </div>
      </div>
}


export default Submit;