import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Cell
} from 'recharts';


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height - 10}
           ${x + 2 * width / 3},${y + height - 10}
           ${x + width},${y + height}
          L${x + width / 2},${y}
          Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const generateColors = (length) => {
  const colors = [];
  for (let i = 0; i < length; i++) {
    const hue = (i * 360) / length; 
    colors.push(`hsl(${hue}, 70%, 60%)`);
  }
  return colors;
};

const FeeChart = ({ Readlist }) => {
  const dynamicColors = generateColors(Readlist.length);

  return (
    <div className='border-1 border-gray-400 p-7 rounded-md overflow-x-auto'>
      <ComposedChart width={1000} height={500} data={Readlist}>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="fee" shape={<TriangleBar />}>
          {Readlist.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={dynamicColors[index]} />
          ))}
        </Bar>
        <Line type="monotone" dataKey="fee" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default FeeChart;
