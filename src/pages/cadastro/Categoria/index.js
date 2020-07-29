import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import { Link } from 'react-router-dom'

function CadastroCategoria() {
  const initialsValues = {
    name: '',
    description: '',
    color: ''
  }

  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(initialsValues)

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value
    })
  }

  function handleChange(event) {
      setValue(
        event.target.getAttribute('name'),
        event.target.value
      )
  }
  
  return (
      <>
        <PageDefault>
            <h1>Cadastro de Categoria: {values.name}</h1>

            <form onSubmit={(event) => {
              event.preventDefault()
              setCategorias([
                ...categorias,
                values
              ])

              setValues(initialsValues)
            }}>

              <FormField
                label="Nome da Categoria"
                type="text"
                name="name"
                placeholder="Nova Categoria"
                value={values.name}
                onChange={handleChange}
              />

              <FormField
                label="Descrição"
                type="textarea"
                name="description"
                placeholder="Coloque à Descrição"
                value={values.description}
                onChange={handleChange}
              />

              <FormField
                label="Cor"
                type="color"
                name="color"
                value={values.color}
                onChange={handleChange}
              />

              <button>
                Cadastrar
              </button>
            </form>
            
            <ul>
              {categorias.map((categoria, indice) => {
                return (
                  <li key={`${categoria}${indice}`}>
                    {categoria.name}
                  </li>
                )
              })}
            </ul>

            <Link to="">
              Ir para home
            </Link>
        </PageDefault>
      </>
    )
}

export default CadastroCategoria