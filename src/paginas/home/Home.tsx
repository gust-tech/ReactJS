import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
        <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand text-white" href="index.html">Home
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado"
          aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#noticias">Notícias<span className="sr-only"></span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="#imagens">Imagens<span className="sr-only"></span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="#skins">Skins<span className="sr-only"></span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="#contato">Contato<span className="sr-only"></span></a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ZnZqB5Z75zI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      </body>
      
  );
}

export default Home;