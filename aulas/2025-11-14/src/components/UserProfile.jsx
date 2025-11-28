import { useState, useEffect } from 'react'

const UserProfile = () => {
  const [profile, setProfile] = useState({
    firstName: 'Ysmael',
    lastName: 'Silva',
    email: 'joao.silva@email.com',
    bio: 'Desenvolvedor React apaixonado por tecnologia',
    skills: ['JavaScript', 'React', 'Node.js'],
    preferences: {
      theme: 'dark',
      language: 'pt-br',
      notifications: true,
      publicProfile: false
    },
    socialMedia: {
      github: 'joaosilva',
      linkedin: 'joao-silva',
      twitter: ''
    }
  })

  const [newSkill, setNewSkill] = useState('')
  const [fullName, setFullName] = useState('')

  // Computed values that update automatically
  useEffect(() => {
    setFullName(`${profile.firstName} ${profile.lastName}`.trim())
  }, [profile.firstName, profile.lastName])

  const updateProfile = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }))
    sessionStorage.setItem('userProfile', JSON.stringify(profile))
  }

  const updateNestedField = (section, field, value) => {
    setProfile(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const addSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }))
      setNewSkill('')
    }
  }

  const removeSkill = (skillToRemove) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }))
  }

  const exportProfile = () => {
    const dataStr = JSON.stringify(profile, null, 2)
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr)
    
    const exportFileDefaultName = `${profile.firstName}_${profile.lastName}_profile.json`
    
    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', exportFileDefaultName)
    linkElement.click()
  }

  return (
    <div className="user-profile">
      <div className="profile-sections">
        {/* Basic Info Section */}
        <section className="profile-section">
          <h3>Informações Básicas</h3>
          <div className="form-grid">
            <div className="input-group">
              <label>Primeiro Nome:</label>
              <input
                type="text"
                value={profile.firstName}
                onChange={(e) => updateProfile('firstName', e.target.value)}
              />
            </div>
            
            <div className="input-group">
              <label>Sobrenome:</label>
              <input
                type="text"
                value={profile.lastName}
                onChange={(e) => updateProfile('lastName', e.target.value)}
              />
            </div>
            
            <div className="input-group full-width">
              <label>Email:</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => updateProfile('email', e.target.value)}
              />
            </div>
            
            <div className="input-group full-width">
              <label>Bio:</label>
              <textarea
                value={profile.bio}
                onChange={(e) => updateProfile('bio', e.target.value)}
                rows="3"
                placeholder="Conte um pouco sobre você..."
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="profile-section">
          <h3>Habilidades</h3>
          <div className="skills-manager">
            <div className="add-skill">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Adicionar nova habilidade..."
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
              />
              <button onClick={addSkill}>Adicionar</button>
            </div>
            
            <div className="skills-list">
              {profile.skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                  <button 
                    className="remove-skill"
                    onClick={() => removeSkill(skill)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Preferences Section */}
        <section className="profile-section">
          <h3>Preferências</h3>
          <div className="preferences">
            <div className="input-group">
              <label>Tema:</label>
              <select
                value={profile.preferences.theme}
                onChange={(e) => updateNestedField('preferences', 'theme', e.target.value)}
              >
                <option value="light">Claro</option>
                <option value="dark">Escuro</option>
                <option value="auto">Automático</option>
              </select>
            </div>
            
            <div className="input-group">
              <label>Idioma:</label>
              <select
                value={profile.preferences.language}
                onChange={(e) => updateNestedField('preferences', 'language', e.target.value)}
              >
                <option value="pt-br">Português (BR)</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
            
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={profile.preferences.notifications}
                  onChange={(e) => updateNestedField('preferences', 'notifications', e.target.checked)}
                />
                Receber notificações
              </label>
              
              <label>
                <input
                  type="checkbox"
                  checked={profile.preferences.publicProfile}
                  onChange={(e) => updateNestedField('preferences', 'publicProfile', e.target.checked)}
                />
                Perfil público
              </label>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="profile-section">
          <h3>Redes Sociais</h3>
          <div className="form-grid">
            <div className="input-group">
              <label>GitHub:</label>
              <input
                type="text"
                value={profile.socialMedia.github}
                onChange={(e) => updateNestedField('socialMedia', 'github', e.target.value)}
                placeholder="seu-usuario"
              />
            </div>
            
            <div className="input-group">
              <label>LinkedIn:</label>
              <input
                type="text"
                value={profile.socialMedia.linkedin}
                onChange={(e) => updateNestedField('socialMedia', 'linkedin', e.target.value)}
                placeholder="seu-perfil"
              />
            </div>
            
            <div className="input-group">
              <label>Twitter:</label>
              <input
                type="text"
                value={profile.socialMedia.twitter}
                onChange={(e) => updateNestedField('socialMedia', 'twitter', e.target.value)}
                placeholder="@seuusuario"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Profile Preview */}
      <div className="profile-preview">
        <h3>Preview do Perfil</h3>
        <div className="preview-card">
          <h4>{fullName || 'Nome Completo'}</h4>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Bio:</strong> {profile.bio}</p>
          
          <div className="preview-skills">
            <strong>Habilidades:</strong>
            {profile.skills.length > 0 ? (
              <div className="skills-preview">
                {profile.skills.map((skill, index) => (
                  <span key={index} className="skill-preview">{skill}</span>
                ))}
              </div>
            ) : (
              <span> Nenhuma habilidade adicionada</span>
            )}
          </div>
          
          <div className="preview-preferences">
            <strong>Preferências:</strong>
            <ul>
              <li>Tema: {profile.preferences.theme}</li>
              <li>Idioma: {profile.preferences.language}</li>
              <li>Notificações: {profile.preferences.notifications ? 'Ativadas' : 'Desativadas'}</li>
              <li>Perfil: {profile.preferences.publicProfile ? 'Público' : 'Privado'}</li>
            </ul>
          </div>
          
          <div className="preview-social">
            <strong>Redes Sociais:</strong>
            <ul>
              {profile.socialMedia.github && <li>GitHub: @{profile.socialMedia.github}</li>}
              {profile.socialMedia.linkedin && <li>LinkedIn: {profile.socialMedia.linkedin}</li>}
              {profile.socialMedia.twitter && <li>Twitter: @{profile.socialMedia.twitter}</li>}
            </ul>
          </div>
        </div>
        
        <button className="export-btn" onClick={exportProfile}>
          Exportar Perfil (JSON)
        </button>
      </div>
    </div>
  )
}

export default UserProfile