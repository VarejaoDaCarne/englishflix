import React, { useState, useEffect} from 'react'
import PageDefault from '../../../components/PageDefault'
import { useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import Button from '../../../components/Button'
import FormField from '../../../components/FormField'
import videsRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'
import { 
  StyledForm,
  StyledLink,
  FormWrapper,
  ButtonWrapper,
} from '../styles.js'

function CadastroVideo() {
  const history = useHistory()
  const [categorias, setCategorias] = useState([])
  const categoryTitles = categorias.map(({ titulo }) => titulo)
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: ''
  })
  
  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer)
      })
  }, [])

  return (
    <React.Fragment>
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>

        <FormWrapper>
          <StyledForm as="form" onSubmit={(event) => {
            event.preventDefault()
            alert('Vídeo cadastrado com sucesso!')

            const categoriaEscolhida = categorias.find((categoria) => {
              return categoria.titulo === values.categoria
            })

            videsRepository.create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: categoriaEscolhida.id,
            })
              .then(() => {
                console.log('Cadastrou com sucesso!')
                history.push('/')
              })
            }}
          >

            <FormField
              label="Título do Vídeo"
              name="titulo"
              value={values.titulo}
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
              name="categoria"
              value={values.categoria}
              onChange={handleChange}
              suggestions={categoryTitles}
            />

              <ButtonWrapper>
                <Button as="button" style={{ backgroundColor: 'Black' }} type="submit">
                  Cadastrar Vídeo
                </Button>

                <StyledLink to="/cadastro/categoria">
                  Ir para Cadastro Categoria
                </StyledLink>
              </ButtonWrapper>
          </StyledForm>
        </FormWrapper>
      </PageDefault>
    </React.Fragment>
  )
}

export default CadastroVideo