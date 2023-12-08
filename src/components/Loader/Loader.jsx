import React from 'react';
import styles from './Loader.module.css';
import { LoadingOutlined } from '@ant-design/icons';

const Loader = () => {
  return (
        <div className={styles.loader}> 
            <LoadingOutlined />
        </div>
  )
}

export default Loader;

