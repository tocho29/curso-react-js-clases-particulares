import React from 'react'
import Nieto from './Nieto'
import PropTypes from 'prop-types';

const Hijo = ({ parametro1, parametro2, parametro3, parametro4 }) => {

  const parametro5 = "quiero a mi nieto"
  
  return (
    <Nieto
      parametro1 = {parametro1}
      parametro2 = {parametro2}
      parametro3 = {parametro3}
      parametro4 = {parametro4}
      parametro5 = {parametro5}
    /> 
  )
}

Hijo.propTypes = {
  parametro1:   PropTypes.string.isRequired,
  parametro2:   PropTypes.bool.isRequired,
  parametro3:   PropTypes.object.isRequired,
  parametro4:   PropTypes.number.isRequired
}

export default Hijo