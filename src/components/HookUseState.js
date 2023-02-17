import React, { useState } from 'react'

/**
 HOOKS DE REACT
 --------------
 useState, useEffect, useContext, useMemo...

 los hooks son funciones nativas del propio framework que nos permiten interactual con el DOM en tiempo real. Los hooks tienen su propias reglas

 1.- empiezan por use
 2.- solo pueden ser llamados en componentes de react o en otros hooks
 3.- solo pueden ser lanzados al comienzo del componente
 4.- algunos hooks no pueden ser llamados por otros hooks
 5.- algunos hooks solo pueden ser modificados por las funciones que el propio hook te proporciona ya que son constantes
*/

const HookUseState = () => {
    /*
        es el hook mas basico de react, lo que hace es controlar el estado de nuestra aplicación
        cuando hablamos de estado nos referimos al momento exacto en el que se encuentra nuestra aplicación
        (un loader, una tabla, cualquier cosa)

        partes
        1.- nombre de la constante
        2.- función que utilizamos para modificar la variable
        3.- valor con el que iniciamos el estado

        ¿que es lo que hace?
        da la sensacion de que trabaja en tiempo real pero lo que realmente hace es un F5 del componente en el que me encuentre
        renderizaciones = F5

        el useState tienes que utilizarlo cuando quieras almacenar o tener un valor que necesites que cambie en tiempo real y necesites que el componente lo refresque

        por ejemplo: el resultado de una query
    */

    const [nombre, setNombre] = useState('Antonio')
  
    return (
        <h1>{nombre}</h1>
    )
}

export default HookUseState