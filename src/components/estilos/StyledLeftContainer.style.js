import styled from "styled-components";

export const StyledLeftContainer = styled.div`
margin-top: 10px;
margin-right: 40px;
margin-left: 50px;
background-color: #F5F5F5; /* Cinza muito claro */
width: 60%;
float: left;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra mais suave e ampla */
padding: 10px;
border-radius: 12px; /* Cantos arredondados mais pronunciados */
display: grid;
gap: 20px; /* Espaço entre itens no grid */

/* Estilização dos itens da lista */
& ul {
  list-style-type: none;
  font-size: 18px;
  color: #333333; /* Cinza escuro */
}

& h2 {
  padding-left: 20px;
  color: #333333; /* Cinza escuro */
}

& li {
  padding-left: 20px;
  font-weight: 500; /* Peso de fonte médio */
  font-size: 20px;
  color: #555555; /* Cinza médio */
}

/* Estilização dos botões */
& .btnRemover {
  padding: 15px 35px;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 30px; /* Bordas mais arredondadas */
  cursor: pointer;
  border: none;
  background-color: #FF8A65; /* Laranja claro */
  color: #FFFFFF; /* Branco */
  box-shadow: rgba(0, 0, 0, 0.2) 0 4px 10px; /* Sombra suave e ampla */
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 14px;
  transition: all 0.3s ease;
}

/* Estilização do botão ao passar o mouse */
& .btnRemover:hover {
  letter-spacing: 1.5px;
  background-color: #FF7043; /* Laranja mais escuro */
  color: #FFFFFF; /* Branco */
  box-shadow: rgba(0, 0, 0, 0.3) 0 6px 15px; /* Sombra mais pronunciada */
}

/* Estilização do botão ao ser clicado */
& .btnRemover:active {
  letter-spacing: 1.5px;
  background-color: #FF7043; /* Laranja mais escuro */
  color: #FFFFFF; /* Branco */
  box-shadow: rgba(0, 0, 0, 0.3) 0 4px 10px; /* Sombra reduzida */
  transform: translateY(2px); /* Efeito de pressionar */
  transition: all 0.1s ease;
}

`;
