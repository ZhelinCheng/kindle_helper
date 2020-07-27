import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

function Index(props: any): JSX.Element {
  return <ConfigProvider locale={zhCN}>{props.children}</ConfigProvider>;
}
export default Index;
