import React from 'react';
import './App.css';

//every child component will be able to access the store without any additional props.
//but to access items in global store(redux store), we need useSelector hook from react-redux package.

import {useSelector} from 'react-redux';


function App() {
 return(
   <div className ="App">

   </div>
 )
}

export default App;
