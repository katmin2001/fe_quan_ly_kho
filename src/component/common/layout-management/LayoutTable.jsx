import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Space, Switch, Table } from 'antd';
import i18n from 'i18n/i18n';
import { useEffect } from 'react';

const StatusRender = ({ status }) => {
    return <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} checked={status === 1 ? true : false} />;
  };

const LayoutTable = props => {
  const { dataTable, changeEditMode } = props;

  useEffect(() => {
    console.log(dataTable);
  }, []);

  const columns = [
    {
      title: 'Layout Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="/#">{text}</a>,
    },
    {
      title: 'Rate Screen',
      dataIndex: 'rateScreen',
      key: 'rateScreen',
      render: text => <a href="/#">{text}</a>,
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_, { status }) => (<StatusRender status={status}/>),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => changeEditMode(record)}>
            {i18n.t('button.edit')}
          </Button>
          <Button>{i18n.t('button.delete')}</Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={dataTable} scroll={{ y: 555 }} />;
};

export default LayoutTable;
