import React, { useState, useEffect } from "react";
import NavPrincipal from "./NavPrincipal";
import Tarjeta from "./Tarjeta";
import Form from "./form";
import Btn from "./Btn";

import Imagen from "../image/404Full.gif";

import "../Styles/contenedorPrincipla.css";

const ContPricipal = () => {
  const [characters, setCharacters] = useState([]);
  const [input, setInput] = useState("");
  const [info, setInfo] = useState({});

  const URL = "https://rickandmortyapi.com/api/character/?name=";
  const URL_DEFAULT = "https://rickandmortyapi.com/api/character";

  const llamarApi = (url, personaje) => {
    let fullURL = url + personaje;
    fetch(fullURL)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    //? llamamos a la funcion que nos trae el personajes
    llamarApi(URL_DEFAULT, auxPersonaje);
  }, []);

  const Envio = (evento) => {
    evento.preventDefault();
    console.log(input);
    llamarApi(URL, input);
  };

  const Cambio = (evento) => {
    setInput(evento.target.value);
  };

  const Delete = (id) => {
    console.log(id);
    const BorarPersonaje = characters.filter((iterador) => iterador.id !== id);
    setCharacters(BorarPersonaje);
  };
  let auxPersonaje = "";

  const DatosAtras = () => {
    let URL_INFO = info.prev;
    llamarApi(URL_INFO, auxPersonaje);
    console.log(info);
  };
  const DatosADelante = () => {
    let URL_INFO = info.next;
    llamarApi(URL_INFO, auxPersonaje);
    console.log(info);
  };

  return (
    <>
      <NavPrincipal texNav={"Rick & Morty Web-App"} />
      <Form manejarCambio={Cambio} manejarEnvio={Envio} />
      {/* <div>
        <a href="gps/index2.html">Ir a GPS</a>
      </div> */}
      {info != null ? (
        <Btn
          OnAdelante={DatosADelante}
          OnAtras={DatosAtras}
          prev={info.prev}
          next={info.next}
        />
        
      ) : null}
      <div className="contPrincipal">
        {characters != null ? (
          characters.map((iterador, llave) => (
            <Tarjeta
              key={llave}
              id={iterador.id}
              nombre={iterador.name}
              img={iterador.image}
              datos1={iterador.status}
              datos2={iterador.species}
              datos3={iterador.location.name}
              eliminarTarjeta={Delete}
            />
          ))
        ) : (
          <div>
            <div className="cont-datNoFound">
              <img src={Imagen} alt="404" />
            </div>
          </div>
        )}
      </div>
      

      {info != null ? (
        <Btn
          OnAdelante={DatosADelante}
          OnAtras={DatosAtras}
          prev={info.prev}
          next={info.next}
        />
      ) : null}
    </>
  );
};

export default ContPricipal;
