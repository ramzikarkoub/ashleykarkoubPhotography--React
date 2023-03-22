import React from "react";
// import "./portfolioList.scss";

// export default function PortfolioList(props) {
//   function handleClick() {
//     props.setSelected(props.id);
//   }
//   return (
//     <li
//       className={props.active ? "portfolioList active" : "portfolioList"}
//       onClick={() => setSelected(props.id)}
//     >
//       {props.title}
//     </li>
//   );
// }

import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
