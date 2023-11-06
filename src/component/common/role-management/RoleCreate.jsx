import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { MaxString, MinString, Required } from "common/validate";
import { ROLE_OPTION } from "constant/constants";
import { useEffect } from "react";
import i18n from "i18n/i18n";

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const onFinish = (values) => {
    console.log("search", values)
}

const onFinishFailed = () => {
    console.log("search")
}

const RoleCreate = (props) => {
    const [roleForm] = Form.useForm();
    const isCreateMode = props.isCreateMode || true
    const formData = props.formData || null

    useEffect(() => {
        if (formData) {
            roleForm.setFieldsValue({
                name: formData.name,
                description: formData.description,
                storages: formData.storages
            });
        }
    }, [formData])

    return (
        <Form
            form={roleForm}
            className="w100"
            name="Role create or edit form"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Role Name"
                name="name"
                max={10}
                required
                rules={[
                    { validator: Required },
                    { validator: (_, v) => MinString(_, v, 8) },
                    { validator: (_, v) => MaxString(_, v, 50) }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[
                ]}
            >
                <TextArea />
            </Form.Item>

            <Form.Item
                label="Storage List"
                name="storages"
                required
            >
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    onChange={handleChange}
                    options={ROLE_OPTION}
                />
            </Form.Item>

            <Form.Item className="text-right">
                <Button type="primary" htmlType="submit">
                    {isCreateMode ? i18n.t('button.create') : i18n.t('button.edit')}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default RoleCreate;