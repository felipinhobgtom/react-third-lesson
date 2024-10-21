import "./Imagens.css";

import React from "react";

function Imagem(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      style={{ borderRadius: "50%", border: "3px solid #000", width: '100px'}}
    />
  );
}

function ImagemAlt() {
  const fotos = [
    {
      url: "https://yt3.googleusercontent.com/LEI4pyLBybLFNag3c57eJ2mtPesFOVhtLeaawJzsVLoU6Cnp58CSVohjhlAQqLw8nRhPiK6qGg=s900-c-k-c0x00ffffff-no-rj",
      alt: "pessoas do hanabie",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdcOOzrBHvl9xUxTpuCfXUD5WuzLxeC_Ylw&s",
      alt: "album hanabie",
    },
  ];

  return (
    <div className="fotos">
      {fotos.map((fotos) => (
        <Imagem src={fotos.url} alt={fotos.alt} />
      ))}
    </div>
  );
}

export default ImagemAlt;
