import { DatePicker, Form, Input } from 'antd';

const FormInput = ({
    label,
    name,
    placeholder,
    required,
    isEmail,
    initialValue,
    rules = [],
    textArea,
    type,
    readOnly,
    onChange
}) => {
    let initRules = [
        {
            required: required,
            message: `Please provide ${typeof label === 'string' ? label.toLowerCase() : 'a value'}`
        },
    ];

    if (isEmail) {
        initRules.push({ type: 'email', message: 'Please enter a valid email address' });
    }

    // Use Ant Design components for input and textarea
    let input = <Input type={type} onChange={onChange} placeholder={placeholder} readOnly={readOnly} />;
    if (textArea) {
        input = <Input.TextArea rows={4} onChange={onChange} placeholder={placeholder} readOnly={readOnly} />;
    }
    if (type === 'date') {
        input = <DatePicker style={{ width: '100%' }} />;
    }

    return (
        <Form.Item
            name={name}
            label={label}
            rules={[...initRules, ...rules]}
            className="mb-4 form-item-custom dark:text-white"
            initialValue={initialValue || ''}
        >
            {input}
        </Form.Item>
    );
};

export default FormInput;



export const HiddenInput = ({ name, initialValue }) => {
    return (
        <Form.Item
            name={name}
            initialValue={initialValue || ''}
            hidden
        >
            <input className="form-input" />
        </Form.Item>
    )
}