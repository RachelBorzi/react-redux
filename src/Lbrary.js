import { useSelector } from "react-redux";
import OneBook from "./Book";
import B from "./Picture/b";
import { useState } from "react";
import AddNew from "./NewBook";

const MyLibrary = () => {
    let arr=useSelector(s=>s.arr);
    let [newB, setNewB]=useState(false);
    return ( <>

<h1>library</h1>
    {arr.map(item=><div key={item.id}><OneBook one={item} /></div>)}
<input type="button" value={"add book"} onClick={()=>{setNewB(!newB)}} />

{newB&&<AddNew/>}
    </> );
}
 
export default MyLibrary;