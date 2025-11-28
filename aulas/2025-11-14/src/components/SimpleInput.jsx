import { useState } from 'react'

const SimpleInput = () => {
  const [text, setText] = useState('')
  const [number, setNumber] = useState(0)
  const [isChecked, setIsChecked] = useState(false)

  const returnTypeof = (variable) =>{
    return "O tipo de variavel é: "+ typeof variable;
  }
  return (
    <div className="simple-input">
      <div className="input-group">
        <label htmlFor="text-input">Texto:</label>
        <input
          id="text-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite algo aqui..."
        />
        <p><strong>Valor atual:</strong> {text}</p>
        <h2>{returnTypeof(text)}</h2>
      </div>

      <div className="input-group">
        <label htmlFor="number-input">Número:</label>
        <input
          id="number-input"
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <p><strong>Valor atual:</strong> {number}</p>
        <p><strong>Dobro:</strong> {number * 2}</p>
        <h2>{returnTypeof(number)}</h2>
        
      </div>

      <div className="input-group">
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          Opção marcada
        </label>
        <p><strong>Status:</strong> {isChecked ? 'Marcado ✓' : 'Não marcado ✗'}</p>
        <h2>{returnTypeof(isChecked)}</h2>
        <h1>{isChecked}</h1>
      </div>
    </div>
  )
}


export default SimpleInput