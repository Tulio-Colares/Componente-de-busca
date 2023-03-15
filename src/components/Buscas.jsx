import React from 'react'
import {suggestions} from '../data/suggestions'

const Buscas = () => {
  return (
    <div>
        {suggestions.map(suggest => (
            <h3>{suggest.suggestion}</h3>
        ))}
    </div>
  )
}

export default Buscas