import React from "react";
import styled from "@emotion/styled";
import "./../animations.css";
import PropTypes from "prop-types";

const MensajeCotizacion = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 1rem;
  border: 3px solid #26c6da;
  border-radius: 5px;
`;

const Resultado = ({ cotizacion }) => {
  return (
    <>
      <MensajeCotizacion className="fade-in__delay">
        El total es: {`$${cotizacion}`}
      </MensajeCotizacion>
    </>
  );
};

Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired,
};

export default Resultado;
