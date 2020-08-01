import React, { useState, useEffect } from 'react'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm'
import categoriasRepository from '../../../repositories/categorias';
import { 
    StyledForm,
    StyledLink,
    FormWrapper,
    StyledLi, 
    StyledLiItem ,
    ButtonWrapper,
    Dot
  } from '../styles.js'

function CadastroCategoria() {
  const initialsValues = {
    titulo: '',
    link_extra: {
      text: '',
      url: ''
    }
  }

  const { handleChange, values, clearForm } = useForm(initialsValues)

  const [categorias, setCategorias] = useState([])

  function onSubmitHandler(event) {
    event.preventDefault()
    setCategorias([{
      ...categorias, 
      titulo: values.titulo,
      text: values.text,
      url: values.url
    }])

    categoriasRepository.insert(values)
      .then((resposta) => {
        console.log(resposta)
        clearForm(initialsValues)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasComVideos) => {
      setCategorias(categoriasComVideos);
    })
      .catch((error) => {
        alert(error)
      })
  }, [])

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.titulo}</h1> 

      <FormWrapper>
      <StyledForm as="form" onSubmit={onSubmitHandler}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="text"
          value={values.text}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="url"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <ButtonWrapper>
          <Button as="button" style={{ backgroundColor: 'Black' }} type="submit">
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

      <StyledLi>
        <>
          <h3 style={{ margin: '0', position: 'absolute', top: '75px'}}>Categorias Registradas:</h3>

          {categorias.map((categoria, indice) => {
            return (
                <StyledLiItem key={`${categoria}${indice}`}>
                  <Dot />
                  <span>{categoria.titulo}</span>
                </StyledLiItem>
            )
          })}
        </>
      </StyledLi>
      </FormWrapper>
    </PageDefault>
    )
}

export default CadastroCategoria