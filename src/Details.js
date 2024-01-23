import { useSelector } from "react-redux";

const Details = () => {
    let one=useSelector(s=>s.selectedBook)
    return ( <>
    <div>
    <h1>Book selected details:</h1>
     <h2>{one.price}₪</h2>
     <h2>{one.author}</h2>
     </div>
    </> );
}
 
export default Details;