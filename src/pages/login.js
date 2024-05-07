import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import RootLayout from "@/components/Layout/RootLayout";
import { Input, Form } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginPage = () => {

  // const onFinish = (values) => {
  //   console.log("Received values of form: ", values);
  // };

  return (
    <div className={styles.loginContainer}>
        <Head>
          <title>Login</title>
        </Head>
        <div className={styles.loginContent}>
          <div className={styles.loginBox}>
            <h2 className={styles.loginHeading}>Welcome Back!</h2>
            {/* <Form
              name="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.loginButton}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form> */}
            <div className={styles.loginOptions}>
              <Button
                type="default"
                icon={<GoogleOutlined />}
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "https://pc-builder-app.vercel.app",
                  })
                }
              >
                Sign in with Google
              </Button>
              <Button
                type="default"
                icon={<GithubOutlined />}
                onClick={() =>
                  signIn("github", {
                    callbackUrl: "https://pc-builder-app.vercel.app",
                  })
                }
              >
                Sign in with Github
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LoginPage;


LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};