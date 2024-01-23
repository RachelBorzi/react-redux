import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./Store/Actions/Book";


const AddNew = () => {

    let dis=useDispatch();
    let [data,setData]=useState({id:0, name:"",price:0,src1:'',author:""});
    const change=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    };
    const save=(e)=>{
        e.preventDefault();
        dis(addBook(data));

    }
    return ( <form onSubmit={save}>
        <label>id:</label>
        <input type="text" name="id" placeholder="id" onChange={change}/>
        <label>name:</label>
        <input type="text" name="name" placeholder="name" onChange={change}/>
        <label>price:</label>
        <input type="text" name="price" placeholder="price" onChange={change}/>
        <label>src1:</label>
        <input type="text" name="src1" placeholder="src" onChange={change}/>
        <label>author:</label>
        <input type="text" name="author" placeholder="author" onChange={change}/>
        <input type="submit"/>
    </form> );
}
 
export default AddNew;