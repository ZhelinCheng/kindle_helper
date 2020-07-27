import React, { useState } from 'react';
import styles from './index.less';
import { Input } from 'antd';
import { Link } from 'umi';

const { Search } = Input;

export default (): JSX.Element => {
  const [searchStatus] = useState(false);
  return (
    <div className={styles.index}>
      <div className={styles.search}>
        <Search placeholder="查找小说" enterButton="查找" size="large" />
      </div>
      <div className={styles.tools}>
        <Link to="/transform">TXT格式转换</Link>
      </div>
    </div>
  );
};
