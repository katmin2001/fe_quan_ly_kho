import { Button, Col, Form, Input, Row, Select } from "antd";
import { ROLE_OPTION } from "constant/constants";
import i18n from "i18n/i18n";

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const SearchUserBlock = () => {
    const onSearch = () => {
        console.log("search")
    }
    return (
        <Form
            className="w100"
            name="Login form"
            onFinish={onSearch}
            autoComplete="off"
        >
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label={i18n.t("userManagement.username")}
                        name="username"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label={i18n.t("userManagement.roles")}
                        name="roles"
                    >
                        <Select
                            mode="multiple"
                            allowClear
                            style={{ width: '100%' }}
                            onChange={handleChange}
                            options={ROLE_OPTION}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Form.Item className="w100 text-center">
                    <Button className="mr-8" type="primary" htmlType="submit">
                        {i18n.t("button.clear")}
                    </Button>
                    <Button type="primary" htmlType="submit">
                        {i18n.t("button.search")}
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
}

export default SearchUserBlock;