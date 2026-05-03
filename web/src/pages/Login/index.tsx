import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Checkbox, Form, Input, message, Typography } from 'antd'
import styles from './index.module.css'

const { Title, Text } = Typography

interface LoginFormValues {
  username: string
  password: string
  remember: boolean
}

const LoginPage: React.FC = () => {
  const [form] = Form.useForm<LoginFormValues>()
  const [messageApi, contextHolder] = message.useMessage()

  const onFinish = (values: LoginFormValues) => {
    console.log('Login values:', values)
    messageApi.success('登录成功')
  }

  return (
    <div className={styles.container}>
      {contextHolder}
      <Card className={styles.card} variant="borderless">
        <div className={styles.header}>
          <Title level={2} className={styles.title}>
            欢迎登录
          </Title>
          <Text type="secondary">请输入您的账号和密码</Text>
        </div>

        <Form
          form={form}
          name="login"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size="large"
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="用户名"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <div className={styles.options}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住我</Checkbox>
              </Form.Item>
              <a className={styles.forgot} href="#">
                忘记密码？
              </a>
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default LoginPage
