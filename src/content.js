// events such as handle click,onclick,ondoubleclick
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
// definning our compnents

//lists
const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Item1",
    },
    {
      id: 1,
      checked: false,
      item: "Item2",
    },
    {
      id: 1,
      checked: false,
      item: "Item3",
    },
 

]);
  const handleCheck = (id) => {
    // console.log(`key:${id}`)
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };
  return (
    <main>
      <ul>
        {items.map((item) => (
          // each list item in react needs a key
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Content;
