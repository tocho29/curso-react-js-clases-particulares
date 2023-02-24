import React from 'react'
import PropTypes from 'prop-types';

const Nieto = ({ parametro1, parametro2, parametro3, parametro4, parametro5 }) => {
  return (
    <h1>{parametro5}</h1>
  )
}

Nieto.propTypes = {
  parametro1:   PropTypes.string.isRequired,
  parametro2:   PropTypes.bool.isRequired,
  parametro3:   PropTypes.object.isRequired,
  parametro4:   PropTypes.number.isRequired,
  parametro5:   PropTypes.string.isRequired,
}

export default Nieto