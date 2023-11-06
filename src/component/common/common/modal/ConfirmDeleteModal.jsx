import { Modal } from 'antd';

const ConfirmDeleteModal = props => {
  const { onOk, onCancel } = props;
  const isModalOpen = props?.isModalOpen === null ? false : props.isModalOpen;
  const title = props?.title === null ? 'Confirm Modal Title' : props.title;
  const content = props?.content === null ? 'Confirm Modal Content' : props.content;
  return (
    <>
      <Modal title={title} open={isModalOpen} onOk={onOk} onCancel={onCancel}>
        <p>{content}</p>
      </Modal>
    </>
  );
};
export default ConfirmDeleteModal;
