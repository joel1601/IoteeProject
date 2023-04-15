import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
  return (
    <BarChart
      width={900}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}


// import React, { useState, useEffect } from 'react';
// import { PieChart, Pie, Cell } from 'recharts';
// import axios from 'axios';


// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF3D3D'];

// function MyPieChart() {
//   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     async function fetchData() {
// //       const client = await MongoClient.connect('mongodb://localhost:27017/mydb');
// //       const db = client.db('mydb');
// //       const collection = db.collection('mycollection');
      
//       // Aggregate the data you want to use for the pie chart
//     //   const result = await collection.aggregate([
//     //     { $group: { _id: "$category", count: { $sum: 1 } } }
//     //   ]).toArray();


//       useEffect(async() => {
//         axios
//             .get("http://localhost:8082/api/transaction/")
//             .then((res) => {
//                 setData(res.data);
//             })
//             .catch((err) => console.log(err));

//             const result = await data.aggregate([
//                 { $group: { _id: "$category", count: { $sum: 1 } } }
//               ]).toArray();

//                  // Transform the data into a format suitable for the pie chart
//       const transformedData = result.map((item, index) => ({
//         name: item._id,
//         value: item.count,
//         color: COLORS[index % COLORS.length]
//       }));
      
//       setData(transformedData);
//     //   client.close();
//     //   fetchData();
//     }, []);
//   return (
//     <PieChart width={400} height={400}>
//       <Pie
//         data={data}
//         dataKey="value"
//         nameKey="name"
//         cx="50%"
//         cy="50%"
//         innerRadius={60}
//         outerRadius={80}
//         fill="#8884d8"
//         paddingAngle={5}
//         label={(entry) => `${entry.name} (${entry.value})`}
//       >
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={entry.color} />
//         ))}
//       </Pie>
//     </PieChart>
//   );
// }

// export default MyPieChart;
