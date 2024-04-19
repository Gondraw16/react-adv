import { Suspense } from 'react';

import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import logo from '../logo.svg';

// import { LazyPage, LazyPage2, LazyPage3 } from '../01-lazyload/pages';


export const Navigations = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        {/* TODO: crear navLinks */}
                        {
                            routes.map(({ to, name }) => (
                                <li key={ to } >
                                    <NavLink to={ to } 
                                    className={ ({ isActive }) => isActive ? 'nav-active' : ''}
                                    >{ name }
                                    </NavLink>
                                </li>                        
                            ))
                        }
                    </ul>                
                </nav>


                <Routes>
                    {
                        routes.map(({ to, path, Component }) => (
                            <Route key={ to } path={ path } element={ <Component /> }/>
                        ))
                    }

                        <Route 
                            path="/*" element={ <Navigate to={ routes[0].to } replace/> }
                        />
                </Routes>

            </div>
        </BrowserRouter>
    </Suspense>
  )
}
