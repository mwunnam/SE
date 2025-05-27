// import { MouseEvent } from "react";
import { useState } from "react";
interface ListGroupProps {
    items: string[];
    heading: string;
}

function ListGroup({items, heading}: ListGroupProps) {
  //let items = [];
  // let selectedIndex = 0;  
  // const message = items.length === 0 ? <p>No item found</p>: null;
  const getMessage = () => {
    return items.length === 0 && <p>No item found</p>  
  }
    // const message = items.length === 0 && <p>No item found</p>
    // const ClickHandler = (event: MouseEvent) => console.log(event)
    const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
        <h1>{heading}</h1>
        {getMessage()}
        {/* {items.length === 0 ? <p>No item found</p> : null} */}
        <ul className="list-group">
            {items.map((name, index) => ( 
                <li className={selectedIndex === index ? 
                    "list-group-item active": 
                    "list-group-item"
                    } 
                    key={name}
                    //onClick={ClickHandler}
                    onClick={() => setSelectedIndex(index)}
                >
                    {name}
                </li>)
                )
            }
        </ul>
    </>
  );
}

export default ListGroup;