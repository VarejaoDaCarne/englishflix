import React, { useState, useEffect} from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory, NavLink } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import Button from '../../../components/Button'
import FormField from '../../../components/FormField'
import videsRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'
import styled, { css } from 'styled-components'
import './index.css'

const StyledLink = styled(Link)`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px 14px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    transition: opacity .3s;
    &:hover,
    &:focus {
        opacity: .5;
    }
`

function CadastroVideo() {
  const history = useHistory()
  const [categorias, setCategorias] = useState([])
  const categoryTitles = categorias.map(({ titulo }) => titulo)
  const { handleChange, values } = useForm({
    title: '',
    url: '',
    category: ''
  })
  
  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer)
      })
  }, [])

    return (
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>

        <form onSubmit={(event) => {
          event.preventDefault()
          alert('Vídeo cadastrado com sucesso!')

          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria
          })

          videsRepository.create({
            titulo: values.title,
            url: values.url,
            categoiaId: categoriaEscolhida.id,
          })
            .then(() => {
              console.log('Cadastrou com sucesso!')
              history.push('/')
            })
          }}
        >

          <FormField
            label="Título do Vídeo"
            name="title"
            value={values.title}
            onChange={handleChange}
          />

          <FormField
            label="URL"
            name="url"
            value={values.url}
            onChange={handleChange}
          />
                    
          <FormField
            label="Categoria"
            name="category"
            value={values.category}
            onChange={handleChange}
            suggestions={categoryTitles}
          />

          <div className="buttons-wrapper">
            <Button type="submit">
              Cadastrar Vídeo
            </Button>

            <StyledLink to="/cadastro/categoria">
              Cadastrar Categoria
            </StyledLink>
          </div>
        </form>
      </PageDefault>
    )
}

export default CadastroVideo