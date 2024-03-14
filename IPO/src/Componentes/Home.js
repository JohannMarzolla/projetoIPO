import React from "react";
import Header from "./Header";
import './HomeStyled.css';
import silvie from '../Img/silvie-imagem.png';


export default function Home() {
    return (
        <div>
            <Header />
            <img className="silvinha" src={silvie} alt="" />
            <p className="intro">Olá, eu sou $ilvie! Seja bem-vinde ao meu site! Vou te ajudar a entender o que é IPO e testar seu conhecimento também!
                <br /><br />
                Quando estiver pronto, clique na aba "O que é IPO?" para eu poder te ensinar mais sobre como funciona o processo de IPO!
                <br /><br />
                Depois de entender melhor o que é IPO e como funciona esse processo, clique na aba "Fazer Quiz" para testar seu novo conhecimento!
                <br /><br />
                Espero que eu tenha ajudado!</p>

        </div>

    )
}