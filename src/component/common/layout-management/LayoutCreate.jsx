import { Button, Col, Form, Input, Row, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { MaxString, MinString, Required } from 'common/validate';
import LayoutComponent from 'component/common/layout-component/LayoutComponent';
import { BLOCK_TYPE_OPTION, ROLE_OPTION } from 'constant/constants';
import i18n from 'i18n/i18n';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const onFinish = values => {
  console.log('search', values);
};

const onFinishFailed = () => {
  console.log('search');
};

const LayoutCreate = props => {
  const [roleForm] = Form.useForm();
  const [blockForm] = Form.useForm();
  const [blockId, setBlockId] = useState();
  const [contentBlock, setContentBlock] = useState({
    contentType: null,
  });
  const nagative = useNavigate();
  const [layout, setLayout] = useState([
    { w: 50, h: 5, x: 0, y: 0, i: '0', type: 0 },
    { w: 70, h: 5, x: 50, y: 0, i: '1', type: 0 },
    { w: 20, h: 3, x: 120, y: 0, i: '2', type: 0 },
    { w: 40, h: 7, x: 140, y: 0, i: '3', type: 0 },
  ]);
  const [newCounter, setNewCounter] = useState(0);
  const isCreateMode = props.isCreateMode || true;
  const formData = props.formData || null;

  useEffect(() => {
    if (formData) {
      roleForm.setFieldsValue({
        name: formData.name,
        description: formData.description,
        storages: formData.storages,
      });
    }
  }, [formData]);

  const removeBlock = i => {
    console.log(i);
    setLayout(layout.filter(v => v.i !== i));
  };

  const handleChange = value => {
    let temp = [];
    layout.forEach(v => {
      if (v.i === blockId) v.type = value;
      temp.push(v);
    });
    console.log('temp', temp);
    setLayout(temp);
    console.log(`selected ${value}`);
  };

  const returnLayoutManagement = () => {
    nagative('/admin/layout-management');
  };

  return (
    <>
      <Row className="h100 w100 p-8" style={{ position: 'relative' }}>
        {/* <div>
          <Clock secondRatio={clockState.secondRatio} minuteRatio={clockState.minuteRatio} hourRatio={clockState.hourRatio} />
        </div> */}
        <Col span={18}>
          <div>
            <Button
              className="mr-8"
              type="primary"
              htmlType="submit"
              onClick={() => {
                setLayout(
                  layout.concat({
                    x: (1 * 2) % 12,
                    y: Math.floor(1 / 6) * 1,
                    w: 2,
                    h: 1,
                    i: ('n' + newCounter).toString(),
                  })
                );
                setNewCounter(newCounter + 1);
              }}
            >
              {i18n.t('button.newBlock')}
            </Button>
          </div>
          <div style={{ height: '800px', width: '100%' }}>
            <LayoutComponent
              compactType={null}
              preventCollision={true}
              className="layout"
              rowHeight={20}
              layout={layout}
              onLayoutChange={function (layout) {
                console.log(layout);
                // setLayout(layout);
              }}
              onResize={layout => {
                // setLayout(layout);
              }}
              cols={360}
              autoSize={true}
              setBlockId={setBlockId}
              removeBlock={removeBlock}
            />
          </div>
        </Col>
        <Col span={6} className="h100">
          <Row className="border-component p-8 mb-8">
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
                label="Layout Name"
                name="name"
                max={10}
                required
                rules={[{ validator: Required }, { validator: (_, v) => MinString(_, v, 8) }, { validator: (_, v) => MaxString(_, v, 50) }]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Department" name="departmentId" rules={[]}>
                <TextArea />
              </Form.Item>

              <Form.Item label="Layout Status" name="status" required>
                <Select
                  mode="single"
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  onChange={handleChange}
                  options={ROLE_OPTION}
                />
              </Form.Item>

              <Form.Item className="text-right">
                <Button className="mr-8" type="primary" onClick={returnLayoutManagement}>
                  {i18n.t('button.back')}
                </Button>
                <Button type="primary" htmlType="submit">
                  {isCreateMode ? i18n.t('button.save') : i18n.t('button.edit')}
                </Button>
              </Form.Item>
            </Form>
          </Row>
          <Row className="border-component p-8">
            {blockId != null && (
              <div className="w100">
                {blockId}
                <Form
                  form={blockForm}
                  className="w100"
                  name="Role create or edit form"
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item label="Block Type" name="contentType " required>
                    <Select mode="single" allowClear placeholder="Please select" onChange={handleChange} options={BLOCK_TYPE_OPTION} />
                  </Form.Item>

                  <Form.Item className="text-right">
                    <Button className="mr-8" type="primary" htmlType="submit">
                      {i18n.t('button.back')}
                    </Button>
                    <Button type="primary">{isCreateMode ? i18n.t('button.save') : i18n.t('button.edit')}</Button>
                  </Form.Item>
                </Form>
              </div>
            )}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default LayoutCreate;
