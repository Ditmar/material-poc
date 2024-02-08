'use client'
import React from 'react'; 
import data from './../../__Moock__/data.json'; 

const ExtractNameAndLastName = () => {
  // Supongamos que data es un array de objetos con propiedades "nombre" y "apellido"
  const [person] = data; // Tomamos el primer objeto del array

  return (
    <div>
      <p>Nombre: {person.nombre}</p>
      <p>Apellido: {person.apellido}</p>
    </div>
  );
};

export default ExtractNameAndLastName;
