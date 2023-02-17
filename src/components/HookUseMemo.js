import React, { useMemo } from 'react'
import { useState } from 'react'

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

export const HookUseMemo = () => {
  /*
    El useMemo es un hook muy sencillo que nos permite almacenar información en memoria (ram) y que esa información
    se mantenta estática aunque el componente se renderice.

    Normalmente se utiliza para almacenar cálculos complejos que requieren mucho trabajo de procesador y memoria, así que se calcula una sola vez, se almacena en memoria y se suele dejar.

    Hay que llevar cuidado con este hook y pensar si realmente es necesario o no devido a que si abusamos de nuestra memoria podemos quedarnos sin espacio y con ello que react u otras aplicaciones no funcionen

    IMPORTANTE: useMemo SIEMPRE tiene que devolver un valor calculado, nada de funciones, solo un valor
  */

  const [contador, setContador] = useState(0)

  // let super_numero = 0

  // for (let index = 0; index < 1000000000; index++) {
  //   super_numero++
  // }

  const super_numero = useMemo(() => {
    let numero = 0

    for (let index = 0; index < 1000000000; index++) {
      numero++
    }

    return numero
  }, []) // como useEffect tiene un array de dependencias que si actualiza se ejecuta el memo

  const incrementarContador = () => {
    setContador(contador + 1)
  }

  return ( 
   <>
    <button onClick={incrementarContador}>Incrementar</button>
    <h3>SuperNumero: {super_numero}</h3>
    <h4>{contador}</h4>
   </>
  )
}

export default HookUseMemo