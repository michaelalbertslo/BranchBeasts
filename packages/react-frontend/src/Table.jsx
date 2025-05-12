// import React from "react";

// function Table() {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Job</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Charlie</td>
//           <td>Janitor</td>
//         </tr>
//         <tr>
//           <td>Mac</td>
//           <td>Bouncer</td>
//         </tr>
//         <tr>
//           <td>Dee</td>
//           <td>Aspiring actress</td>
//         </tr>
//         <tr>
//           <td>Dennis</td>
//           <td>Bartender</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }

// export default Table;

import React from "react";
import "./Grid.css"; // import the CSS

function Grid() {
  const closet = [
    { box: "1" },
    { box: "2" },
    { box: "3" },
    { box: "4" },
    { box: "5" },
    { box: "6" },
    { box: "7" },
    { box: "8" },
    { box: "9" },
    { box: "10" },
    { box: "11" },
    { box: "12" },
    { box: "13" },
    { box: "14" },
    { box: "15" },
    { box: "16" },
    { box: "17" },
    { box: "18" },
    { box: "19" },
    { box: "20" }
  ];

  return (
    <div className="grid-container">
      {closet.map((clothing, index) => (
        <div className="grid-item" key={index}>
          <strong>{clothing.box}</strong>
          <p>{}</p>
          <p>{}</p>
          <p>{}</p>
          <p>{}</p>
        </div>
      ))}
    </div>
  );
}

export default Grid;
