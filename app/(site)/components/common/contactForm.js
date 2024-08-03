import { Form } from "antd";
import React from "react";
import FormInput from "../form/input";
import Button from "./button";
import { postContactUs } from "../../../helpers/backend";
import { useAction } from "../../../helpers/hooks";

const ContactForm = () => {
  const [form] = Form.useForm();
  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={async (values) => {
          return useAction(postContactUs, values, () => {
            form.resetFields()
          });
        }}
      >
        <div className="contact space-y-10">
          <FormInput name="name" label="Name" required />
          <FormInput name="email" label="Email" required isEmail />
          <FormInput name="message" label="Message" required textArea />
        </div>
        <div className="flex justify-center mt-20">
          <Button className="!font-bold">Send Message</Button>
        </div>
      </Form>
    </>
  );
};

export default ContactForm;
