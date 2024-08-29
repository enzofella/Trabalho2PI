import { StyledLeftContainer } from "./estilos/StyledLeftContainer.style";
import { StyledRightContainer } from "./estilos/StyledRightContainer.style";
import { useState } from "react";

// Componentes para listas de mercados
const MercadosList = ({ title, mercados, onMove, onRemove }) => (
  <div>
    <h2>{title}</h2>
    <ul>
      {mercados.map((mercado) => (
        <li key={mercado.id}>
          {mercado.nome}
          {onMove && (
            <button onClick={() => onMove(mercado.id)}>
              {title === "Compras Pendente" ? "Em Estoque" : "Vendido"}
            </button>
          )}
          <button onClick={() => onRemove(mercado.id)}>Descartar</button>
        </li>
      ))}
    </ul>
  </div>
);

function Mercado() {
  const [comprasMercado, setComprasMercado] = useState([]);
  const [emEstoque, setEmEstoque] = useState([]);
  const [vendido, setVendido] = useState([]);
  const [mercado, setMercado] = useState("");
  const [status, setStatus] = useState("Mercado");

  const addMercado = (e) => {
    e.preventDefault();
    if (!mercado) return;

    const novoMercado = { nome: mercado, id: Date.now(), status };
    const statusMap = {
      Mercado: setComprasMercado,
      Compras: setEmEstoque,
      Vendido: setVendido,
    };
    statusMap[status]((prev) => [...prev, novoMercado]);

    setMercado("");
    setStatus("Mercado");
  };

  const removerMercado = (id, status) => {
    const statusMap = {
      Mercado: setComprasMercado,
      Compras: setEmEstoque,
      Vendido: setVendido,
    };
    statusMap[status]((prev) => prev.filter((mercado) => mercado.id !== id));
  };

  const moveMercado = (id, statusAtual, novoStatus) => {
    const statusMap = {
      Mercado: setComprasMercado,
      Compras: setEmEstoque,
      Vendido: setVendido,
    };
    const mercadoParaMover = {
      Mercado: comprasMercado,
      Compras: emEstoque,
      Vendido: vendido,
    }[statusAtual].find((mercado) => mercado.id === id);

    if (mercadoParaMover) {
      mercadoParaMover.status = novoStatus;
      statusMap[statusAtual]((prev) => prev.filter((mercado) => mercado.id !== id));
      statusMap[novoStatus]((prev) => [...prev, mercadoParaMover]);
    }
  };

  return (
    <>
      <StyledLeftContainer>
        <MercadosList
          title="Compras Pendente"
          mercados={comprasMercado}
          onMove={(id) => moveMercado(id, "Mercado", "Compras")}
          onRemove={(id) => removerMercado(id, "Mercado")}
        />
        <MercadosList
          title="Em Estoque"
          mercados={emEstoque}
          onMove={(id) => moveMercado(id, "Compras", "Vendido")}
          onRemove={(id) => removerMercado(id, "Compras")}
        />
        <MercadosList
          title="Vendido"
          mercados={vendido}
          onRemove={(id) => removerMercado(id, "Vendido")}
        />
      </StyledLeftContainer>

      <StyledRightContainer>
        <h2>Adicionar Mercado</h2>
        <form onSubmit={addMercado}>
          <div>
            <label htmlFor="mercado">Mercado:</label>
            <input
              type="text"
              id="mercado"
              value={mercado}
              onChange={(e) => setMercado(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="Mercado">Mercado</option>
              <option value="Compras">Compras</option>
            </select>
          </div>
          <button type="submit">Adicionar!</button>
        </form>
      </StyledRightContainer>

      
    </>
  );
}

export default Mercado;
