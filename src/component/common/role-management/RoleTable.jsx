import { Space, Table } from "antd";
import i18n from 'i18n/i18n';

const data = [
    {
        key: '1',
        name: 'John Brown',
        description: 'hello',
        storages: ['Active'],
    },
    {
        key: '2',
        name: 'John Brown 1',
        description: 'hello 2',
        storages: ['Active'],
    },
    {
        key: '3',
        name: 'John Brown 2',
        description: 'hello 1',
        storages: ['Active'],
    }
];

const RoleTable = (props) => {
    const {
        changeEditMode
    } = props

    const columns = [
        {
            title: 'Role name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a href="/#">{text}</a>,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (text) => <a href="/#">{text}</a>,
        },
        {
            title: 'Storages',
            key: 'storages',
            dataIndex: 'storages',
            render: (_, { tags }) => (
                <>
                    {/* {tags.map((tag) => {
                        let color = tag === "Active" ? 'green' : 'red';
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })} */}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button onClick={() => changeEditMode(record)}>{i18n.t('button.detail')} {record.name}</button>
                    <button>{i18n.t('button.delete')}</button>
                </Space>
            ),
        },
    ];

    return (
        <Table columns={columns} dataSource={data} scroll={{ y: 555 }} />
    );
}

export default RoleTable;