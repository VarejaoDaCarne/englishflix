import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Desta vez quero explorar como eu aprendi inglês e aproveitar pra explicar porque é tão importante inglês na nossa área e também porque NÃO é tão complicado como muita gente pensa. Trabalhoso, sim. Caro ou complicado, não. Uma tangente neste assunto será tocar no que muita gente pensa sobre padrões e o erro nesse pensamento. Fiquem ligados!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Carousel
        category={dadosIniciais.categorias[6]}
      />      

      <Footer />
    </div>
  );
}

export default App;