import React from 'react'
import ReactDOM from 'react-dom'
 
import { BoaTarde, BoaNoite } from './components/Multiplos'

ReactDOM.render(
  <div>
    <BoaTarde nome='Jessica' />
    <BoaNoite nome='Mateus' />
  </div>
  , document.getElementById('root'))