import RootLayout from '@/components/Layout/RootLayout';
import { Form, Input, Button, message } from 'antd';

const ContactUs = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
    message.success('Form submitted successfully!');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1 style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}>Contact Us</h1>
      <Form
        onFinish={onFinish}
        layout="vertical"
        name="contact-form"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: 'Please enter your name' }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[
            { required: true, message: 'Please enter your message' }
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactUs;

ContactUs.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
