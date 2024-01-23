import { useDispatch, useSelector } from "react-redux";
import './one.css';
import { deleteBook, selectBook, selectedBookEdit } from "./Store/Actions/Book";

const OneBook = ({one}) => {
    let dis=useDispatch();
    
    return (<>
        <h1>{one.name}</h1>
       
        <div className="d" ><img src={one.src1} className="img" /></div>
        

<div>
        <input type="button" value={"edit"} onClick={()=>{dis(selectedBookEdit(one))}}/>
        <input type="button" value={"delete"} onClick={()=>{dis(deleteBook(one.id))}}/>
        <input type="button" value={"details"} onClick={()=>{dis(selectBook(one))}}/>
        </div>
     </> );
}
 
export default OneBook;