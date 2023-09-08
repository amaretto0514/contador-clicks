import React from "react";

function Boton({texto, esBotonClick, manejarClic}){
  return (
    <button className={esBotonClick ? "boton-clic" : "boton-reinicar"}
    onClick={manejarClic}>
      {texto}
    </button>
  )

}

export default Boton