import styled from "styled-components";

export const StyledRightContainer = styled.div`
right: 50px;
padding: 20px;
margin-top: 17px;
margin-right: 60px;
margin-right: 60px;
background-color: #FFFFFF; /* Branco puro */
border-radius: 12px; /* Arredondamento mais pronunciado */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra mais suave e ampla */

display: grid;
align-items: center;
gap: 20px; /* Espaçamento entre itens */

& h2 {
  font-size: 28px;
  text-align: center;
  color: #3F51B5; /* Azul médio */
}

& div {
  padding: 15px;
}

& .botao {
  padding: 15px 35px;
  margin-left: 20px;
  border-radius: 30px; /* Bordas mais arredondadas */
  cursor: pointer;
  border: none;
  background-color: #6200EA; /* Roxo intenso */
  color: #FFFFFF; /* Branco */
  box-shadow: rgba(0, 0, 0, 0.3) 0 4px 8px; /* Sombra mais pronunciada */
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 14px;
  transition: all 0.3s ease;
}

/* Estilização do botão ao passar o mouse */
& .botao:hover {
  letter-spacing: 1.5px;
  background-color: #3700B3; /* Roxo mais escuro */
  color: #FFFFFF; /* Branco */
  box-shadow: rgba(0, 0, 0, 0.4) 0 6px 12px; /* Sombra mais pronunciada */
}

/* Estilização do botão ao ser clicado */
& .botao:active {
  letter-spacing: 1.5px;
  background-color: #3700B3; /* Roxo mais escuro */
  color: #FFFFFF; /* Branco */
  box-shadow: rgba(0, 0, 0, 0.4) 0 4px 8px; /* Sombra reduzida */
  transform: translateY(2px); /* Efeito de pressionar */
  transition: all 0.1s ease;
}


`;
