import React, { useState, useEffect } from 'react'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'

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
  
  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://englishflix.herokuapp.com/categorias'

    fetch(URL)
      .then(async (serverResponse) => {
        const response = await serverResponse.json()
        setCategorias([
          ...response
        ])
      })
  }, [])

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
                value={values.name}
                onChange={handleChange}
              />

              <FormField
                label="Descrição"
                type="textarea"
                name="description"
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

              <Button>
                Cadastrar
              </Button>
            </form>
            
            {categorias.length === 0 && (
              <div>
                Loading...
              </div>
            )}

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