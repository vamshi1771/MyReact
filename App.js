import React from 'react';
import Home from './Pages/HomePage';
import PostCustomer from './Pages/PostCustomers';
import GetCustomers from './Pages/GetCustomers';
import PostOrders from './Pages/PostOrders';
import GetOrders from './Pages/GetOrders';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Vamshi from './components/Navigator';

function App(){
return(
	<div>
		<div className ="navbar navbar-expand-lg navbar-light" style={{'background-color': "#f4f6f8"}}>
	<Vamshi></Vamshi>
	</div>
 <Routes>
	 <Route path='/' element={<Home/>}></Route>
	 <Route path='/PostCustomer' element={<PostCustomer/>}></Route>
	 <Route path='/GetCustomers' element={<GetCustomers/>}></Route>
	 <Route path='/PostOrders' element={<PostOrders/>}></Route>
	 <Route path='/GetOrders' element={<GetOrders/>}></Route>


</Routes>
</div>
);
}
export default App


// 'min-width': '936px';
// 'min-height': '475px';
// width: fit-content;
// height: fit-content;