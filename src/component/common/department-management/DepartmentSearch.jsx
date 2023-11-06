import { Button, Col, Form, Input, Row, Select } from 'antd';
import { ROLE_OPTION, STATUS_OPTION } from 'constant/constants';
import i18n from 'i18n/i18n';

const DepartmentSearch = props => {
  const { onChangeData, onSearch } = props;
  const [form] = Form.useForm();
  const handleChange = value => {
    console.log(value);
    onChangeData(prev => ({ ...prev, status: value ? [value] : [] }));
  };

  const handleChangeName = e => {
    console.log(e.target.value);
    onChangeData(prev => ({ ...prev, name: e.target.value }));
  };

  const onClear = () => {
    console.log('duong');
    form.setFieldsValue({
      name: '',
      status: null,
    });
    onChangeData({ name: '', status: [] });
  };

  return (
    <Form form={form} className="w100" name="Search form" onFinish={() => onSearch()} autoComplete="off">
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Department Name" name="name">
            <Input onChange={handleChangeName} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Status" name="status">
            <Select
              mode="single"
              allowClear
              style={{ width: '100%' }}
              placeholder="Please select"
              onChange={handleChange}
              options={STATUS_OPTION}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Form.Item className="w100 text-center">
          <Button className="mr-8" type="primary" onClick={onClear}>
            {i18n.t('button.clear')}
          </Button>
          <Button type="primary" htmlType="submit">
            {i18n.t('button.search')}
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default DepartmentSearch;
