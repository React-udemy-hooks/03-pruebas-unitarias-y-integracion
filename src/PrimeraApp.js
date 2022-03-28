import React from "react";
import PropTypes from 'prop-types'

const PrimeraApp = ({ saludo, subtitulo }) => {
  

    return (
    <>
      <h1>{ saludo }</h1>
      {/* <pre>{JSON.stringify(saludoObject, null, 3 ) }</pre> */}
      <p>subtitulo</p>
    </>
  )
}
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
  subtitulo: 'soy un subtítulo'
}

export default PrimeraApp