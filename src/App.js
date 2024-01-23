import logo from './logo.svg';
import './App.css';
import MyLibrary from './Lbrary';
import { useSelector } from 'react-redux';
import Details from './Details';
import Edit from './Edit';
import { useState } from 'react';


function App() {
  let selectBook=useSelector(s=>s.selectedBook);
  let selectedBookEdit=useSelector(s=>s.selectedBookEdit);
  
  return (<>
  <MyLibrary/>
  {selectBook&&<Details/>}
  {selectedBookEdit&&<Edit/>}

  </>
    
  );
}

export default App;
