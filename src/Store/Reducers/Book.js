import { selectedBookEdit } from "../Actions/Book";

const initialState={
    arr:[
        {id:1,name:"my doughter",price:60,src1:'./a.png',author:"lea"},
        {id:2,name:"my leave",price:70,src1:'./Picture/b.jpg',author:"michal"},
        {id:3,name:"my rain",price:30,src1:'./Picture/c.jpg',author:"tamar"},
        {id:4,name:"my spring",price:55,src1:'./Picture/d.jpg',author:"shira"},
        {id:5,name:"my life",price:120,src1:'../../Picture/e.jpg',author:"gila"},
        {id:6,name:"my challenge",price:25,src1:'../../Picture/f.jpg',author:"ester"},
        {id:7,name:"my win",price:85,src1:'../../Picture/g.jpg',author:"noa"}
    ],
    selectedBook:null,
    selectedBookEdit:null
}

export const BookReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_BOOK":
            return{
                selectedBook:state.selectedBook,
                selectedBookEdit:state.selectedBookEdit,
                arr:[state.arr, action.payload]
            }

        case "SELECT_BOOK":
            return{
                selectedBook:action.payload,
                selectedBookEdit:state.selectedBookEdit,
                arr:state.arr
            }

        case "SELECT_BOOK_EDIT":
            return{
                selectedBookEdit:action.payload,
                selectedBook:state.selectedBook,
                arr:state.arr
            }
        
        case "DELETE_BOOK":
            return{
                selectedBook: !state.selectedBook||state.selectedBook.id==action.payload? null:state.selectedBook,
                selectedBookEdit: !state.selectedBookEdit||state.selectedBookEdit.id==action.payload? null:state.selectedBookEdit,
                arr:state.arr.filter(item=>item.id!=action.payload)
            }

        case "SAVE_CHANGES":
            return{
                selectedBook:state.selectedBook,
                selectedBookEdit:null,
                arr:state.arr.map(item=>{
                    if(item.id!=action.payload.id)
                    return item;
                return action.payload;
                })
            }

            default: return state;
    }
    

};