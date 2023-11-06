import { Button, Form, Input, Select } from 'antd';
import AdminDepartmentService from 'api/admin/departmentService';
import { MaxString, MinString, Required } from 'common/validate';
import { HTTP_CODE, STATUS_ENUM, STATUS_OPTION } from 'constant/constants';
import i18n from 'i18n/i18n';
import { useEffect } from 'react';

const DepartmentCreate = props => {
  const [form] = Form.useForm();
  const isCreateMode = props.isCreateMode === null ? true : props.isCreateMode;
  const formData = props.formData || null;
  const refreshData = props.onRefresh;

  useEffect(() => {
    form.setFieldsValue({
      name: formData ? formData.name : '',
      status: formData ? formData.status : STATUS_ENUM.ACTIVE,
    });

    return () => {};
  }, [formData, isCreateMode]);

  const saveDepartment = values => {
    const request = {
      name: values.name,
      status: values.status,
    };
    AdminDepartmentService.create(request).then(res => {
      if (res.code === HTTP_CODE.SUCCESS) {
        refreshData();
        resetForm();
      }
    });
  };

  const editDepartment = values => {
    if (formData.id) {
      const request = {
        id: formData.id,
        name: values.name,
        status: values.status,
      };
      AdminDepartmentService.edit(request).then(res => {
        if (res.code === HTTP_CODE.SUCCESS) {
          refreshData();
          resetForm();
        }
      });
    }
  };

  const resetForm = () => {
    form.setFieldsValue({
      name: '',
      status: STATUS_ENUM.ACTIVE,
    });
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  const onFinish = values => {
    if (isCreateMode) {
      saveDepartment(values);
    } else {
      editDepartment(values);
    }
  };

  const onFinishFailed = () => {
    console.log('search');
  };

  return (
    <Form
      form={form}
      className="w100"
      name="Role create or edit form"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Department Name"
        name="name"
        max={10}
        required
        rules={[{ validator: Required }, { validator: (_, v) => MinString(_, v, 8) }, { validator: (_, v) => MaxString(_, v, 50) }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Status" name="status" required rules={[{ validator: Required }]}>
        <Select
          mode="single"
          allowClear
          style={{ width: '100%' }}
          placeholder="Please select"
          onChange={handleChange}
          options={STATUS_OPTION}
        />
      </Form.Item>

      <Form.Item className="text-right">
        <Button type="primary" htmlType="submit">
          {isCreateMode ? i18n.t('button.create') : i18n.t('button.edit')}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DepartmentCreate;
