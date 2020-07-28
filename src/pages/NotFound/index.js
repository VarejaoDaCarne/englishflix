import React from 'react'
import PageDefault from '../../components/PageDefault'
import { Link } from 'react-router-dom'
import  './not-found.css'

function NotFound() {
  return (
    <PageDefault>
        <>
            <h1 class="title-not-found">Página não foi encontrada</h1>
            <h2 class="subtitle-not-found">Espere... Acho que você encontrou um easter egg.</h2>

            <iframe  src="https://mariosouto.com/flappy-bird-devsoutinho" className="iframe" scrolling="no"/>

            <Link to="/">
                <p>Retornar a Página Inicial</p>
            </Link>
            
        </>
    </PageDefault>
  )
}

export default NotFound