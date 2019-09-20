import React, { Component } from 'react';
import '../css/Nosotros.css';

class Nosotros extends Component {
  state = {  }
  render() { 
    return (
      <div className="contenedor-nosotros">
        <div className="imagen">
          <img src="/img/camisa_1.png" alt="Imagen nosotros"/>
        </div>
        <div className="contenido">
          <h2>Sobre Nosotros</h2>
          <p>Es una notación funcional que define un rango de tamaño, mayor o igual que min, y menor o igual que max. Si max es menor a min, entonces max es ignorado y la función es tratada como min. Como un máximo, un valor  ajusta el factor de flexibilad de la vía. Es inválido utilizarlo como un mínimo.</p>
        </div>
      </div>
    );
  }
}
 
export default Nosotros;