import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias'
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function Home() {
  const [initalValues, setInitalValues] = useState([])

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasWithRepository) => {
        setInitalValues(categoriasWithRepository)
      })
      .catch((err) =>{
        console.error(err)
      })
  }, [])

  return (
    <div style={{ background: "#141414" }}>
    <Menu />

      {initalValues.length === 0 && (<div>Loading...</div>)}

      {initalValues.map((categoria, index) => {
        if(index === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={initalValues[0].videos[0].titulo}
                url={initalValues[0].videos[0].url}
                videoDescription='Desta vez quero explorar como eu aprendi inglês e aproveitar pra explicar porque é tão importante inglês na nossa área e também porque NÃO é tão complicado como muita gente pensa. Trabalhoso, sim. Caro ou complicado, não. Uma tangente neste assunto será tocar no que muita gente pensa sobre "padrões" e o erro nesse pensamento. Fiquem ligados!'
              />
              <Carousel
                ignoreFirstVideo
                category={initalValues[0]}
              />  
            </div>
          )
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        )
      })}

      <Footer />
      </div>
  )
}

export default Home;