import React from "react";
import "../Styles/Btn.css";

const Btn = ({ OnAtras, OnAdelante, next, prev }) => {
  const Atras = () => {
    OnAtras();
  };
  const Adelante = () => {
    OnAdelante();
  };

  return (
    <div className="cont-btn">
      {prev ? (
        <button className="btn1" onClick={Atras}>
          Atras
        </button>
      ) : (
        <></>
      )}

      {next ? (
        <button className="btn2" onClick={Adelante}>
          Siguiente
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Btn;
