import React from "react";
import styled from "@emotion/styled";
import { primeraMayuscula } from "./../helper";
import PropTypes from "prop-types";

import "./../animations.css";

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #ffffff;
  margin-top: 2rem;
  border-radius: 5px;

  & li {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;

const Summary = ({ summary: { datos = {} } }) => {
  const isEmpty = Object.values(datos).length === 0;

  if (isEmpty) return null;

  const { marca, year, plan } = datos;

  return (
    <ContenedorResumen className="fade-in">
      <h2>Resumen de cotizacion</h2>
      <ul>
        <li>
          <b>Marca</b>: <i>{primeraMayuscula(marca)}</i>
        </li>
        <li>
          <b>Plan</b>: <i>{plan}</i>
        </li>
        <li>
          <b>Año del Auto</b>: <i>{year}</i>
        </li>
      </ul>
    </ContenedorResumen>
  );
};

Summary.propTypes = {
  summary: PropTypes.object.isRequired,
};

export default Summary;
