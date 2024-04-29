import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import logo from '../logo.svg';
import { ShoppingPage } from '../02-componet-patterns/pages/ShoppingPage';


export const Navigations = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={ logo } alt="React Logo" />
                <ul>
                    <li>
                        <NavLink to="/shopping" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Shopping</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                    </li>
                </ul>                
            </nav>


            <Routes>
                <Route path="shopping" element={ <ShoppingPage/> }/>
                <Route path="users" element={ <h1>Users Page</h1> }/>
                <Route path="home" element={ <h1>Home Page</h1> }/>
                <Route path="/*" element={ <Navigate to="/shopping" replace/> }/>
            </Routes>

        </div>
    </BrowserRouter>
  )
}
