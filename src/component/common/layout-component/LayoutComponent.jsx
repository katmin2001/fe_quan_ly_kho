import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import { useParams } from 'react-router-dom';
import Clock from '../common/clock/Clock';
import $ from 'jquery'; 

const ReactGridLayout = WidthProvider(RGL);

const LayoutComponent = props => {
  let { departmentName } = useParams();
  // let layout = props.layout;
  const defaultProps = {
    className: 'layout',
    items: 20,
    rowHeight: 30,
    onLayoutChange: function () {},
    cols: 12,
  };
  const [selected, setSelected] = useState();

  useEffect(() => {}, [props.layout]);

  const generateDOM = () => {
    const removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer',
    };
    return props.layout.map(({ i, w, h, type, resizeHandles }) => {
      return (
        <div
          id={'block' + i}
          key={i}
          style={{ border: selected === i ? '1px solid red' : '1px solid black' }}
          onClick={() => {
            console.log(i);
            props.setBlockId(i);
            setSelected(i);
          }}
        >
          {type === 4 && <Clock width={w} height={h} rowHeight={props.rowHeight} resizeOClock={resizeOClock} />}
          <span className="remove" style={removeStyle} onClick={() => props.removeBlock(i)}>
            x
          </span>
        </div>
      );
    });
  };

  const resizeOClock = () => {
    console.log('duong');
  };
  const generateLayout = () => {
    const p = props;
    return _.map(new Array(p.items), function (item, i) {
      const y = _.result(p, 'y') || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString(),
      };
    });
  };

  const onLayoutChange = layout => {
    props.onLayoutChange(layout);
  };

  return (
    <>
      <div>
        <ReactGridLayout
          onResizeStop={(layout, oldItem, newItem, placeholder, e, element) => {
            console.log(layout);
          }}
          layout={props.layout}
          onLayoutChange={onLayoutChange}
          useCSSTransforms={true}
          {...props}
        >
          {generateDOM()}
        </ReactGridLayout>
      </div>
    </>
  );
};

export default LayoutComponent;
