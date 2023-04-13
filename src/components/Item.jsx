import React,{useState} from 'react';
import '../App.css';
function Item() {
    const [count, setCount] = useState(0);
    if(count < 0) {
        setCount(count + 1);
    };
    return (
        <div>
            <div className="but">
              <button className="sellred" onClick={() => setCount(count - 1)}>Interest</button>
              <span id="soluong">{count}</span>
              <button className="buyblue" onClick={() => setCount(count + 1)}>Add</button>
            </div>
        </div>
    );
}

export default Item;