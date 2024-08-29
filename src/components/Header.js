import postIt from "../imagem/images.jpg";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  margin-right: 600px;
  margin-left: 600px;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: linear-gradient(135deg, #ff7e5f, #feb47b); /* Gradiente moderno */
  border-radius: 20px; /* Maior arredondamento dos cantos */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Sombra mais pronunciada para destaque */
  transition: transform 0.3s ease; /* Animação suave ao interagir */

  &:hover {
    transform: translateY(-5px); /* Efeito de elevação ao passar o mouse */
  }

  & h1 {
    color: #ffffff; /* Texto branco */
    margin-left: 30px; /* Espaçamento aumentado para mais clareza */
    font-family: 'Poppins', sans-serif; /* Fonte com mais destaque */
    font-size: 28px; /* Aumentando o tamanho da fonte */
    font-weight: 600; /* Peso mais forte para o título */
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3); /* Sombra para texto */
  }

  & img {
    border-radius: 15%; /* Tornar a imagem levemente arredondada */
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2); /* Sombra ao redor da imagem */
    border: 15px solid rgba(255, 255, 255, 0.8); /* Borda branca translúcida */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Suavidade nas animações */
    
    &:hover {
      transform: scale(1.1); /* Aumenta ligeiramente ao passar o mouse */
      box-shadow: 0 100px 66px rgba(0, 0, 0, 0.3); /* Sombra mais profunda no hover */
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img src={postIt} alt="icon" width="150px" />
      <h1>Geni Mercado</h1>
    </StyledHeader>
  );
}

export default Header;
