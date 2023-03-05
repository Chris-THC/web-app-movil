import React from "react";
import "../Styles/tarjetas.css";

function Tarjeta({ id, nombre, img, datos1, datos2, datos3, eliminarTarjeta }) {
  return (
    <>
      <div className="cont-tarjeta">
        <div className="cont-img">
          <img src={img} alt="Img" />
        </div>
        <div className="cont-ifo">
          <hr />
          <h4>{nombre}</h4>
          <p>{datos1}</p>
          <p>{datos2}</p>
          <p>{datos3}</p>
        </div>

        <div className="cont-btn">
          <button
            onClick={() => {
              eliminarTarjeta(id);
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
}

export default Tarjeta;
