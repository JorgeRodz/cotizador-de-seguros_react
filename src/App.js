import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Summary from "./components/Summary";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
  border-radius: 10px;
  margin: 3% auto auto auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

const ResultadoUndefined = styled.div`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
  color: black;
  font-weight: 900;
`;

function App() {
  const [summary, setSummary] = useState({});
  const [load, setLoad] = useState(false);

  const { cotizacion } = summary;

  return (
    <Contenedor>
      {/* prettier-ignore */}
      <Header
        titulo=" 🔒️ Cotizador de seguros para auto 🚘️"
      />
      <ContenedorFormulario>
        {/* prettier-ignore */}
        <Formulario
          setSummary={setSummary}
          setLoad={setLoad}
        />

        {load ? <Spinner /> : null}

        {/* prettier-ignore */ }
        <Summary
          summary = {summary}
        />

        {cotizacion ? (
          <Resultado cotizacion={cotizacion} />
        ) : !load ? (
          <ResultadoUndefined>
            "Elige marca, año y tipo de seguros"
          </ResultadoUndefined>
        ) : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
