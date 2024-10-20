import "./Imagens.css";

function Imagem(props) {
  return (
      <img
        src={props.url}
        width={"100px"}
        style={{ borderRadius: "50%", border: "3px solid #000" }}
      />
  );
}

function Imagens() {
  const urls = [
    "https://yt3.googleusercontent.com/LEI4pyLBybLFNag3c57eJ2mtPesFOVhtLeaawJzsVLoU6Cnp58CSVohjhlAQqLw8nRhPiK6qGg=s900-c-k-c0x00ffffff-no-rj",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdcOOzrBHvl9xUxTpuCfXUD5WuzLxeC_Ylw&s",
  ];

  return (
    <div className="fotos">
          {urls.map((urls) => (
            <Imagem url={urls} />
          ))}
    </div>
  );
}

export default Imagens;
