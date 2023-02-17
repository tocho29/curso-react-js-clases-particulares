import React from 'react'

const alumnos = [
    {
        id: 1,
        nombre: 'Antonio',
        edad: 35,
        ubicacion: 'Murcia'
    },

    {
        id: 2,
        nombre: 'Marta',
        edad: 38,
        ubicacion: 'Murcia'
    }
]

const RecorrerArrayObjetosJSX = () => {
  return (
    <></>
  )
}

export default RecorrerArrayObjetosJSX

//   return (
//     <>
//         {
//             alumnos.map((alumno) =>
//                 <>
//                     <h1 key={alumno.id}>{alumno.nombre}</h1>
//                     <h2>{alumno.edad}</h2>
//                     <h3>{alumno.ubicacion}</h3>
//                     <hr></hr>
//                 </>
//             )
//         }
//     </>
//   )