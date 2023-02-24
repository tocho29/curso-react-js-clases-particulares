/*
  Las props (properties) son parámetros que se pasan desde un componente padre a un hijo por que pueden ser necesarias
  para el funcionamiento de dicho componente.

  Por defecto React solo puede enviar props de arriba a abajo es decir padre => hijo => nieto => bisnieto => etc...

  Pero como en ocasiones se puede producir esa necesidad de tener que enviar parámetros en sentido contrario react tiene implementadas 2 soluciones

  1.- redux (librería externa) se lleva usando desde el uso de las clases, actualmente se utiliza redux + toolkit
  2.- useContext hook de react que funciona de manera similar a redux pero que no es tan potente, es una alternativa a dicha librería y en este caso de manera nativa

  Los parámetros que pasamos pueden ser de cualquier tipo, incluidos funciones o componentes aunque si pasas un componente como parámetro a otro componente es que algo no estás haciendo de la manera correcta. Los parámetros podemos desestructurarlos al comienzo del componente o dentro del componente, además es recomendable usar una librería llamada prop-types que nos permite saber el tipo de parámetro que estamos enviando y si es opcional u obligatorio.

*/

import React      from 'react'
import Hijo       from './Hijo'
import PropTypes  from 'prop-types';

const Props = ({ parametro1, parametro2, parametro3, parametro4 }) => {

  return (
    <Hijo
      parametro1={parametro1}
      parametro2={parametro2}
      parametro3={parametro3}
      parametro4={parametro4}
    />
  )
}

Props.propTypes = {
  parametro1: PropTypes.string.isRequired,
  parametro2: PropTypes.bool.isRequired,
  parametro3: PropTypes.object.isRequired,
  parametro4: PropTypes.number.isRequired
}

export default Props