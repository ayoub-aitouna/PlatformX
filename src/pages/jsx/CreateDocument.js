import React from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";
function CreateDocument() {
  const Url = "https://jrayoub-serverside-pdfgenerator.zeet.app/";
  const createAndDownloadPdf = async () => {
    axios
      .post(`${Url}create-pdf`, "state")
      .then(() => axios.get(`${Url}fetch-pdf`, { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPdf.pdf");
      });
  };
  return (
    <div style={{ display: `grid`, placeContent: `center`, height: `100vh` }}>
      Create{" "}
      <input
        type="button"
        value="Download PDF"
        onClick={() => createAndDownloadPdf()}
      />{" "}
      <Link to="/">
        <input type="button" value="Cancel" />{" "}
      </Link>
    </div>
  );
}

export default CreateDocument;
