import './App.css';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import AddUser from './components/AddUser'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {

  let data={
    earningsMonthly:"4,00,000",
    earningsAnnual:"48,00,000",
    task:80,
    pendingRequests:18
  }

let [users,setUsers] = useState([
{
  name:"Arasu",
  email:"arasuaudi@gmail.com",
  batch:"B39WDT",
  mobile:"9003613416"
},
{
  name:"Siva",
  email:"siva@gmail.com",
  batch:"B37WDT",
  mobile:"9876543210"
},
{

  name:"Ravi",
  email:"ravi@gmail.com",
  batch:"B36WDT",
  mobile:"5444789624"
}
])

  return <>
  <div id='wrapper'>
    <BrowserRouter>
    <Sidebar/>
     
     <Routes>
      <Route path='/dashboard' element={<Dashboard data={{data,users}}/>}/>
      <Route path='/add-user' element={<AddUser data={{users,setUsers}}/>}/>
     </Routes>
   </BrowserRouter>
  </div> 
  </>
}

export default App;
