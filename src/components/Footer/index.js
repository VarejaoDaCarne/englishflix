import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/grioos">
        <img src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" alt="Logo Github" />
      </a>
      <p>
        Desenvolvido por
        {' '}
        <a href="https://www.linkedin.com/in/grioos">
          Gabriel Rios          
        </a>
        {' '}
        durante a
        {' '} 
        <a href="https://www.alura.com.br/">
         Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer