// Obtiene la diferencia de años
export const obtenerDiffYear = (year) => {
  return new Date().getFullYear() - year;
};

// Calcula el total a pegar segun la marca
export const calcularMarca = (marca) => {
  let incremento;

  /* prettier-ignore */
  switch (marca) {
    case "Europeo":
      incremento = 1.30;
      break;
    case "Americano":
      incremento = 1.15;
      break;
    default:
      incremento = 1.05;
  }

  return incremento;
};

// Calcula el tipo de seguro
export const obtenerPlan = (plan) => {
  return plan === "basico" ? 1.2 : 1.5;
};

export const primeraMayuscula = (texto) => {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
};
