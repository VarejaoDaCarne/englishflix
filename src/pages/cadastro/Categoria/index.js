import React, { useState, useEffect } from 'react'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm'
import { StyledForm, StyledLink, ButtonWrapper }from '../styles.js'

function CadastroCategoria() {
  const initialsValues = {
    name: '',
    description: '',
  }

  const { handleChange, values, clearForm } = useForm(initialsValues)

  const [categorias, setCategorias] = useState([])
  
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

          <StyledForm onSubmit={(event) => {
            event.preventDefault()
            setCategorias([
              ...categorias,
              values
            ])

            clearForm()
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

            <ButtonWrapper>
              <Button>
                Cadastrar Categoria
              </Button>

              <StyledLink to="/">
                Ir para home
              </StyledLink>
            </ButtonWrapper>
          </StyledForm>
          
          {categorias.length === 0 && (
            <div>
              Loading...
            </div>
          )}

          <ul>
            {categorias.map((categoria, indice) => {
              return (
                <li key={`${categoria}${indice}`}>
                  {categoria.titulo}
                </li>
              )
            })}
          </ul>


        </PageDefault>
      </>
    )
}

export default CadastroCategoria