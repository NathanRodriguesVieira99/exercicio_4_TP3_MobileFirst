import React from 'react'

function TextoEstilizado() {
  return (
    <div>
      <p style={{ backgroundColor: 'lightgreen', color: 'red', padding: '5px', fontWeight: '300', fontFamily: 'Roboto, sans-serif' }}>
        Este é um texto estilizado usando inline styles em React.
      </p>
    </div>
  )
}

export default TextoEstilizado