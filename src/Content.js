import React from "react";
import { FaTrashAlt} from "react-icons/fa";
const Content=({items,handleCheck,handleDelete})=>{
    
    /* const handleChange=()=>{
        const arr=["Earn","Give","Grow"]
        let idx=Math.floor(Math.random()*3)
        setText(arr[idx])
      
    }
    const handleClick=(name)=>{
        console.log(`Hii My Name is ${name}`);
    }
    const handleClick2=(e)=>{
        console.log(e.target);
    }
    const [count,setCount]=useState(99)
    const [text,setText]=useState('Earn')
    function incrementFunction(){
        setCount(count + 1)
    }
    function decrementFunction(){
        setCount(count - 1)
    } */
    
    return(
        <>
            {/*} <p >Lets {text} Money</p>
            <button onClick={handleChange}>Submit</button>
            <div>
                <button onClick={decrementFunction}>-</button>
                <span>{count}</span>
                <button onClick={incrementFunction}>+</button>
    </div> */}
            {items.length ? (
            <ul>
                {
                    items.map((item)=>(
                        <li className="item" key={item.id}>
                            <input type="checkbox" onChange={()=>handleCheck(item.id)} checked={item.checked} />
                            <label style={item.checked ? {textDecoration:"line-through"} : null} onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
                            <FaTrashAlt role="button" tabIndex="0" onClick={()=>handleDelete(item.id)} />
                        </li>
                    ))
                }
            </ul>
            )
        : (<p>Your list is empty</p>)
        }
        </>
    )
}
export default Content