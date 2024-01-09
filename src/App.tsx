import Post from "./components/Post";
import EstiloGlobal, { Container } from "./styles";

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Post imageUrl="https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg">
          Olha só que legal minha miniatura do Batmóvel.
        </Post>
      </Container>
    </>
  );
}

export default App;
