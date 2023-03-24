import "./style.css";

const PDF_FILE_URL = "http://localhost:3000/liubov_koval_cv.pdf";

const Header = () => {
  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(new Blob([blob]));

        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobUrl;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__title">
          <h1>
            <strong>
              Hi, my name is <em>Liubov</em>
            </strong>
            <br />a full stack developer
          </h1>
        </div>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="#!" className="btn">
          <button
            onClick={() => {
              downloadFileAtURL(PDF_FILE_URL);
            }}
          >
            Download CV
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
