import React from 'react'

export default props => (
  // Usado para não criar a div geral
  <React.Fragment >
    <h1>Bom dia {props.nome}!</h1>
    <h2>Até breve!</h2>
  </React.Fragment  >
)