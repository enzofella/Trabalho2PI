import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 50px;
  margin-left: 50px;
  align-items: center; /* Alinha os itens verticalmente */
  background-color: #2C3E50; /* Azul escuro */
  padding: 100px 80px; /* Adiciona padding para um espaçamento mais uniforme */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra mais suave e pronunciada */

  & a {
    font-size: 16px;
    font-weight: 600;
    padding: 12px 20px; /* Ajusta o padding para um melhor equilíbrio */
    color: #ECF0F1; /* Branco acinzentado */
    transition: background-color 0.3s, color 0.3s; /* Transição suave para cor e fundo */
    text-decoration: none;
    border-radius: 25px; /* Bordas arredondadas para um visual mais moderno */
    margin: 0 15px; /* Ajusta o espaçamento entre os itens */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & a:hover {
    color: #2C3E50; /* Azul escuro */
    background-color: #ECF0F1; /* Branco acinzentado */
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <a href="#pendente">A encomendar</a>
      <a href="#processo">Em Estoque</a>
      <a href="#contratado">Lucros</a>
    </StyledMenu>
  );
}

export default Menu;

