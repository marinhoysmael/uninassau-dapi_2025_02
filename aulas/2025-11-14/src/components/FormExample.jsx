import { useState } from 'react'

const FormExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    country: 'brasil',
    newsletter: false,
    comments: ''
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Dados do formulário:\n${JSON.stringify(formData, null, 2)}`)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      age: '',
      gender: '',
      country: 'brasil',
      newsletter: false,
      comments: ''
    })
  }

  return (
    <div className="form-example">
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="input-group">
            <label htmlFor="name">Nome:</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Seu nome"
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="seu@email.com"
            />
          </div>

          <div className="input-group">
            <label htmlFor="age">Idade:</label>
            <input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleInputChange}
              min="1"
              max="120"
            />
          </div>

          <div className="input-group">
            <label htmlFor="gender">Gênero:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">Selecione...</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
              <option value="prefiro_nao_informar">Prefiro não informar</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="country">País:</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            >
              <option value="brasil">Brasil</option>
              <option value="portugal">Portugal</option>
              <option value="argentina">Argentina</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <div className="input-group full-width">
            <label>
              <input
                name="newsletter"
                type="checkbox"
                checked={formData.newsletter}
                onChange={handleInputChange}
              />
              Quero receber newsletter
            </label>
          </div>

          <div className="input-group full-width">
            <label htmlFor="comments">Comentários:</label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              placeholder="Deixe seus comentários aqui..."
              rows="3"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit">Enviar</button>
          <button type="button" onClick={resetForm}>Limpar</button>
        </div>
      </form>

      <div className="form-preview">
        <h3>Preview dos Dados:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  )
}

export default FormExample