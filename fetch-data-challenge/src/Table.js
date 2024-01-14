import React from "react";
import Row from "./Row";

const Table = ({ items }) => {
  return (
    <div class="table-container">
      <table>
        <tbody>
          {items.map((item) => (
            <Row key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
