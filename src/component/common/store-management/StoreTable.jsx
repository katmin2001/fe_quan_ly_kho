import { Space, Table, Tag } from "antd";

const data = [
    {
        key: '1',
        username: 'John Brown',
        tags: ['Active'],
    },
    {
        key: '2',
        username: 'Jim Green',
        tags: ['Active'],
    },
    {
        key: '3',
        username: 'Joe Black',
        tags: ['Inactive'],
    },
    {
        key: '4',
        username: 'Joe Black',
        tags: ['Inactive'],
    },
    {
        key: '5',
        username: 'Joe Black',
        tags: ['Inactive'],
    },
    {
        key: '6',
        username: 'Joe Black',
        tags: ['Inactive'],
    },
    {
        key: '7',
        username: 'Joe Black',
        tags: ['Inactive'],
    },
    {
        key: '8',
        username: 'Joe Black',
        tags: ['Inactive'],
    },
    {
        key: '9',
        username: 'Joe Black',
        tags: ['Inactive'],
    },
    {
        key: '10',
        username: 'Joe Black',
        tags: ['Inactive'],
    },
    {
        key: '11',
        username: 'Joe Black',
        tags: ['Inactive'],
    },
    {
        key: '12',
        username: 'Joe Black',
        tags: ['Inactive'],
    },
];

const StoreTable = (props) => {
    const {
        setIsEditMode
    } = props
    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
            render: (text) => <a href="/#">{text}</a>,
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag === "Active" ? 'green' : 'red';
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button onClick={setIsEditMode}>Detail {record.name}</button>
                    <button>Delete</button>
                </Space>
            ),
        },
    ];
    return (
        <Table columns={columns} dataSource={data} scroll={{ y: 555 }} />
    );
}

export default StoreTable;