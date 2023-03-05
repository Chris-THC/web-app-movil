import React from "react";
import "../Styles/form.css";
function Form({ manejarCambio, manejarEnvio }) {
  return (
    <>
      <div className="cont-form">
        <form onSubmit={manejarEnvio}>
          <input
            type="text"
            placeholder="Buscar Personaje"
            autoComplete="of"
            onChange={manejarCambio}
          />

          <button>Buscar</button>
        </form>
      </div>
    </>
  );
}

export default Form;
