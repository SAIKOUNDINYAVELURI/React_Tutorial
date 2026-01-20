import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  //(item: string )=>void
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  //hook
  const [selectedindex, setSelectedIndex] = useState(-1);
  //arr[0]//variable(selected index)
  // arr[1]//updater function
  //event Handler
  return (
    <>
      <h1>{heading} </h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedindex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          > 
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
