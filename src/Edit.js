import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveChanges } from "./Store/Actions/Book";

const Edit = () => {
    let selectedBookEdit=useSelector(s=>s.selectedBookEdit);
    let dis=useDispatch();
    let [date,setData]=useState({...selectedBookEdit});

    const change=(e)=>{
        setData({...date,[e.target.name]:e.target.value});
    };

    const save=(e)=>{
        e.preventDefault();
        dis(saveChanges(date));
    };

    return (  <form onSubmit={save}>
        <label>name:</label>
        <input type="text" name="name" value={date.name} onChange={change}/>
        <label>price:</label>
        <input type="text" name="price" value={date.price} onChange={change}/>
        <label>author:</label>
        <input type="text" name="author" value={date.author} onChange={change}/>
        <input type="submit"/>
    </form>);
}
 
export default Edit;