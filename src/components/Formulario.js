import React, { useState } from "react";
import styled from "@emotion/styled";
import { obtenerDiffYear, calcularMarca, obtenerPlan } from "./../helper";

/*---------------- styled components --------------------*/

const Form = styled.form`
  text-align: center;
`;

const Campo = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const LabelInput = styled.label`
  margin-right: 2%;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 2% 0 4%;
`;

const Boton = styled.button`
  margin: 2rem auto 0 auto;
  background-color: #00838f;
  font-size: 16px;
  width: 50%;
  padding: 1rem;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  transition: all 0.2s;

  &:hover {
    background-color: #005e66;
    cursor: pointer;
    transform: translateY(-3px);
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

/*---------------- component --------------------*/

const Formulario = ({ setSummary }) => {
  const [datos, guardarDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState(false);

  // Obtenemos los valores del state para aplicarlos en sus debidos inputs
  const { marca, year, plan } = datos;

  // Obtenemos los datos de cada input para aplicarlos en el state llamando a su funcion correspondientt
  const inputsData = (event) => {
    guardarDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }

    setError(false); // Para quitar el mensaje de error en caso de previamente este ahi.

    // Una base de 2000
    let resultado = 2000;

    // obtener la diferencia de años
    const diferencia = obtenerDiffYear(year);
    const descuento = 3;

    // por cada año hay que restar el 3%
    resultado -= (diferencia * descuento * resultado) / 100;

    // Americano 15%
    // Asiatico 5%
    // Europeo 30%
    resultado = calcularMarca(marca) * resultado;

    // Basico aumenta 20%
    // Completo 50%
    const incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    // Total
    setSummary({
      cotizacion: resultado,
      datos,
    });
  };

  return (
    /* prettier-ignore */
    <Form
      onSubmit={handleSubmit}
    >

      { error ? <Error> Todos los campos son obligatorios </Error> : null }

      <Campo>
        <Label>Marca</Label>
        { /* prettier-ignore */}
        <Select
          name="marca"
          value={marca}
          onChange={inputsData}
        >
          <option values="">-- Seleccione --</option>
          <option values="">Americano</option>
          <option values="">Europeo</option>
          <option values="">Asiatico</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        { /* prettier-ignore */}
        <Select
           name="year"
           value={year}
          onChange={inputsData}
        >
          <option value="">-- Seleccione --</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan</Label>
        { /* prettier-ignore */}
        <InputRadio
          id="basico"
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={inputsData}
        />
        <LabelInput htmlFor="basico">Basico</LabelInput>
        { /* prettier-ignore */}
        <InputRadio
          id="completo"
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={inputsData}
        />
        <LabelInput htmlFor="completo">Completo</LabelInput>
      </Campo>
      <Boton type="submit">Cotizar</Boton>
    </Form>
  );
};

export default Formulario;
