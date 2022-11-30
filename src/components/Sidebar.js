import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {Link} from 'react-router-dom'

function Sidebar() {
  return <>
   <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
   <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
    </div>
    <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</a>
<hr class="sidebar-divider my-0"/>
<Link to='/dashboard'>
<li class="nav-item active">
    <div class="nav-link">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></div>
</li>
</Link>
<hr class="sidebar-divider"/>
<div class="sidebar-heading">
   CRUD
</div>
<Link to='/add-user'>
<li class="nav-item">
    <div class="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
      <PersonAddIcon/> &nbsp;
        <span>Add User</span>
    </div>    
   </li>
   </Link>
<hr class="sidebar-divider"/>
</ul>
</>
}
export default Sidebar