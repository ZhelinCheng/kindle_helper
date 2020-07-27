import React from 'react';
import styles from './styles.less';
import { Form, Input, Button, Checkbox } from 'antd';

export default (): JSX.Element => {
  return <div className={styles.transform}>
      <Form
      name="basic"
      initialValues={{ remember: true }}
    >
      <Form.Item
        label="文件"
        name="path"
        rules={[{ required: true, message: '选择TXT文件' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="书名"
        name="name"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="作者"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>;
};
