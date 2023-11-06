import React, { useState } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import _ from 'lodash';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
const ShowsMonitor = props => {
  const className = 'layout';
  const rowHeight = 10;

  const [items, setItems] = useState(
    [0, 1, 2, 3, 4].map(function (i, key, list) {
      return {
        i: i.toString(),
        x: i * 10,
        y: 0,
        w: 10,
        h: 10,
        add: i === list.length - 1,
      };
    })
  );
  const [newCounter, setNewCounter] = useState(0);
  const [breakpoint, setBreakpoint] = useState();
  const [layout, setLayout] = useState();
  const [cols, setCols] = useState();

  const createElement = el => {
    const removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer',
    };
    const i = el.i;
    return (
      <div key={i} style={{ border: '1px solid' }} data-grid={el}>
        <span className="text">{i}</span>
        <span className="remove" style={removeStyle} onClick={onRemoveItem.bind(this, i)}>
          x
        </span>
      </div>
    );
  };

  const onAddItem = () => {
    /*eslint no-console: 0*/
    console.log('adding', 'n' + newCounter);
    setItems(
      items.concat({
        i: 'n' + newCounter,
        x: (items.length * 2) % (cols || 12),
        y: Infinity, // puts it at the bottom
        w: 10,
        h: 10,
      })
    );
    setNewCounter(newCounter + 1);
  };

  // We're using the cols coming back from this to calculate where to add new items.
  const onBreakpointChange = (breakpoint, cols) => {
    setBreakpoint(breakpoint);
    setCols(cols);
    console.log("duon1", breakpoint);
    console.log("duon2", cols);
  };

  const onLayoutChange = layout => {
    // this.props.onLayoutChange(layout);
    setLayout(layout);
  };

  const onRemoveItem = i => {
    console.log('removing', i);
    setItems(_.reject(items, { i: i }));
  };

  return (
    <div>
      <button onClick={onAddItem}>Add Item</button>
      <ResponsiveReactGridLayout
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        className={className}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 120, md: 100, sm: 60, xs: 40, xxs: 20 }}
        rowHeight={rowHeight}
        width={1200}
      >
        {_.map(items, el => createElement(el))}
      </ResponsiveReactGridLayout>
    </div>
  );
};
export default ShowsMonitor;
