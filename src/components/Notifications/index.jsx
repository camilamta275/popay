// index.jsx
import React, { useState } from 'react';
import './style.css'; // Importa os estilos CSS

// Você pode definir o SVG do ícone diretamente ou como um componente separado
const IconeAviso = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
    </svg>
);

const Notificacao = ({ mensagemPadrao, autoFecharDelay }) => {
    const [visivel, setVisivel] = useState(true);

    const mensagemParaExibir = mensagemPadrao || "Funcionalidade em construção! Em breve disponível em sistema.";

    // Efeito para auto-fechar a notificação, se um delay for fornecido
    React.useEffect(() => {
        if (autoFecharDelay && visivel) {
            const timer = setTimeout(() => {
                setVisivel(false);
            }, autoFecharDelay);
            return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado ou visivel mudar
        }
    }, [autoFecharDelay, visivel]);

    if (!visivel) {
        return null; // Não renderiza nada se não estiver visível
    }

    return (
        <div className="notificacao">
            <div className="notificacao-icone">
                <IconeAviso />
            </div>
            <div className="notificacao-conteudo">
                <p className="notificacao-mensagem">{mensagemParaExibir}</p>
            </div>
            <button 
                type="button" 
                className="notificacao-fechar" 
                onClick={() => setVisivel(false)}
                aria-label="Fechar notificação"
            >
                &times;
            </button>
            <div className="notificacao-barra-inferior"></div>
        </div>
    );
};

export default Notificacao;
