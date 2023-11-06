import { Button, Space, Switch, Table } from 'antd';
import i18n from 'i18n/i18n';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import ConfirmDeleteModal from '../common/modal/ConfirmDeleteModal';
import { useState } from 'react';

const StatusRender = ({ status }) => {
  return <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} checked={status === 1 ? true : false} />;
};

const DepartmentTable = props => {
  const { data, changeEditMode, pagination, onChangePage, onDelete } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const showModal = id => {
    setDeleteId(id);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (deleteId) {
      onDelete(deleteId);
    }
    setDeleteId(null);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setDeleteId(null);
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: 'Department name',
      dataIndex: 'name',
      key: 'name',
      render: text => <div>{text}</div>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => <StatusRender status={status} />,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => changeEditMode(record.id)}>{i18n.t('button.detail')}</Button>
          <Button onClick={() => showModal(record.id)}>{i18n.t('button.delete')}</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ y: 555 }}
        pagination={{ defaultCurrent: pagination.pageNum + 1, total: pagination.total }}
        onChange={onChangePage}
      />
      <ConfirmDeleteModal
        title={'Confirm Delete'}
        content={'Are you sure delete this record!'}
        isModalOpen={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </>
  );
};

export default DepartmentTable;
