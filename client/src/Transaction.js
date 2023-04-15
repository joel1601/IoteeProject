// import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Transaction() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:8082/api/transaction/")
//       .then((res) => {
//         console.log("Getting data from:", res.data);
//         setData(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const arr = data.map((data, index) => {
//     return (
//       <tr>
//         <td>{data.Slno}</td>
//         <td>{data.Dateoftxn}</td>
//         <td>{data.Subject}</td>
//         <td>{data.Description}</td>
//         <td>{data.DebitCredit}</td>
//         <td>{data.Closingbalance}</td>
//         <td>{data.CategoryINS}</td>
//         <td>{data.Classification}</td>
//       </tr>
//     );
//   });
//   return (
//     <div className="App">
//       <h1>Transaction details</h1>
//       <table>
//         <tr>
//           <th>Slno</th>
//           <th>Dateoftxn</th>
//           <th>Subject</th>
//           <th>Description</th>
//           <th>DebitCredit</th>
//           <th>Closingbalance</th>
//           <th>CategoryINS</th>
//           <th>Classification</th>
//         </tr>
//         {arr}
//       </table>
//     </div>
//   );
// }
