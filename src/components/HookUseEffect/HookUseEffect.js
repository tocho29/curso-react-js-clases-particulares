import React, { useEffect } from 'react'

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

const HookUseEffect = () => {
    /*
        Es el siguiente hook mas utilizado en react, este hook se ejecuta DESPUES DE QUE EL COMPONENTE SE RENDERICE
        suele ser utilizado para realizar operaciones en 2º plano, es decir en cuando quieres hacer algo después de
        que una serie de elementos se ejecuten.

        Además de eso también se ejecuta cuando una de sus dependencias es actualizada, es decir si un elemento que estamos esuchando
        sufre algún cambio automáticamente este hook se ejecuta.

        En Algunos casos este hook puede producir demasiados accesos de memoria, por eso tiene una función de retorno que se
        utiliza para limpiar la memoria, esto se suele hacer normalmente cuando se hacen modificaciones en el DOM
    */

    useEffect(() => {
      
      return () => {}
    }, [])
    

    return (
    <>HookUseEffect</>
  )
}

export default HookUseEffect