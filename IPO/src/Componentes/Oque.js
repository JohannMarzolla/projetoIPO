import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import './Estilo.css';
import silvie from '../Img/silvie-imagem.png';

const Oque = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch('/api/explicacao.json') 
        .then(response => response.json())
        .then(jsonData => setData(jsonData))
        .catch(error => console.error('Erro ao buscar dados:', error));
    }, []);
  
    if (!data) {
      return <div>Carregando...</div>;
    }
  
    const { title, content } = data.home;
    return (
        <>
            <Menu />
            <img className="silvinha" src={silvie} alt="" />
            <h1 className="title">{title}</h1>
            <p className="explanation">{content}</p>
        </>
    )
};
export default Oque;