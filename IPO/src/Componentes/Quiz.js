import React, { useState } from "react";
import Menu from "./Menu";
import './Estilo.css';
import silvie from '../Img/silvie-imagem.png';

export default function Quiz() {
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0);

    function handleAnswer(isCorrect) {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }
    }
    return (
        <div>
            <div>
                <Menu />
            </div>
            <img className="silvinha" src={silvie} alt="" />
            <div className="question-answer">
                <div className="score-result">
                    {showScore ? (
                        <div className="score-section">
                            Você acertou {score} de {questions.length}
                        </div>
                    ) : (
                        <>
                            <div className="question-section">
                                <div className="question-count">
                                    <span>{currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className="question-text">
                                    {questions[currentQuestion].questionText}
                                </div>
                            </div>
                            <div className="answer-section">
                                {questions[currentQuestion].answerOptions.map((answerOptions, index) => (
                                    <button className="button" onClick={() => handleAnswer(answerOptions.isCorrect)} key={index}>
                                        {answerOptions.answerText}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>

    );

}
const questions = [
    {
        questionText: 'O que é IPO?',
        answerOptions: [
            { answerText: 'Injeção Pública Oficial', isCorrect: false },
            { answerText: 'Oferta Pública Inicial', isCorrect: true },
            { answerText: ' Operação Privada Individual', isCorrect: false },
            { answerText: 'Opção Privada Irregular', isCorrect: false },
        ],
    },
    {
        questionText: 'Em que consiste o processo de IPO?',
        answerOptions: [
            { answerText: 'Venda de produtos para investidores', isCorrect: false },
            { answerText: 'Venda de ações para o público pela primeira vez', isCorrect: true },
            { answerText: 'Venda de ativos para outras empresas', isCorrect: false },
            { answerText: 'Venda de dívidas para os investidores', isCorrect: false },
        ],
    },
    {
        questionText: 'Quais são as partes interessadas envolvidas no processo de IPO?',
        answerOptions: [
            { answerText: 'Investidores e clientes', isCorrect: false },
            { answerText: 'Bancos de investimento, advogados e reguladores', isCorrect: true },
            { answerText: 'Funcionários e fornecedores', isCorrect: false },
            { answerText: 'Acionistas e parceiros comerciais', isCorrect: false },
        ],
    },
    {
        questionText: 'Qual é o objetivo do IPO?',
        answerOptions: [
            { answerText: 'Aumentar as vendas da empresa', isCorrect: false },
            { answerText: 'Reduzir o endividamento da empresa', isCorrect: false },
            { answerText: 'Arrecadar dinheiro para financiar os negócios da empresa', isCorrect: true },
            { answerText: 'Adquirir novos concorrentes', isCorrect: false },
        ],
    },
    {
        questionText: 'Como a empresa pode usar o dinheiro arrecadado com o IPO?',
        answerOptions: [
            { answerText: 'Investir em novos projetos', isCorrect: false },
            { answerText: 'Distribuir dividendos aos acionistas', isCorrect: false },
            { answerText: 'Expandir operações em novos mercados', isCorrect: false },
            { answerText: 'Todas as alternativas estão corretas', isCorrect: true },
        ],
    },
    {
        questionText: 'O que acontece quando uma empresa faz um IPO?',
        answerOptions: [
            { answerText: 'Ela abre capital e suas ações passam a ser negociadas publicamente', isCorrect: true },
            { answerText: 'Ela fecha as portas e encerra suas atividades', isCorrect: false },
            { answerText: 'Ela continua operando normalmente sem nenhuma mudança significativa', isCorrect: false },
            { answerText: ' Ela passa a ser controlada pelo governo', isCorrect: false },
        ],
    },
    {
        questionText: 'Quais são os benefícios do IPO para a empresa?',
        answerOptions: [
            { answerText: 'Visibilidade de marca e negócios', isCorrect: false },
            { answerText: 'Arrecadação de capital significativo em um curto período de tempo', isCorrect: false },
            { answerText: 'Acesso a novas fontes de financiamento', isCorrect: false },
            { answerText: 'Todas as alternativas estão corretas', isCorrect: true },
        ],
    },
    {
        questionText: 'O que pode acontecer com o valor das ações de uma empresa que fez IPO?',
        answerOptions: [
            { answerText: 'Elas podem aumentar ou diminuir, dependendo da performance da empresa', isCorrect: true },
            { answerText: 'Elas sempre aumentam depois do IPO', isCorrect: false },
            { answerText: 'Elas sempre diminuem depois do IPO', isCorrect: false },
            { answerText: 'Elas permanecem estáveis depois do IPO', isCorrect: false },
        ],
    },
    {
        questionText: 'Quais são os riscos do IPO para os investidores?',
        answerOptions: [
            { answerText: 'Possibilidade de perda financeira', isCorrect: false },
            { answerText: 'Risco regulatório', isCorrect: false },
            { answerText: 'Risco de competição', isCorrect: false },
            { answerText: 'Todas as alternativas estão corretas', isCorrect: true },
        ],
    },
    {
        questionText: 'Qual é a importância do IPO para o crescimento das empresas?',
        answerOptions: [
            { answerText: 'Oferece uma importante fonte de capital para financiar os negócios', isCorrect: false },
            { answerText: 'Aumenta a visibilidade da marca e dos negócios', isCorrect: false },
            { answerText: 'Possibilita o acesso a novas oportunidades de crescimento', isCorrect: false },
            { answerText: 'Todas as alternativas estão corretas.', isCorrect: true },
        ],
    }
]
