import React from 'react';
import './Navegador.css';
import {NavLink} from 'react-router-dom';

 const Navegador = () => {
	 return ( 
			<nav className="navegacion">
				<NavLink to={'/nosotros'} activeClassName='activo'>Nosotros</NavLink>
				<NavLink to={'/productos'} activeClassName='activo'>Productos</NavLink>
				<NavLink to={'/contacto'} activeClassName='activo'>Contacto</NavLink>
			</nav>
		);
 }
	
 export default Navegador;