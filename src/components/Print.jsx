import React, { forwardRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Print = forwardRef((cards, ref) => {
  const generatePDF = async () => {
    const node = document.querySelector(".first-card-blog");
    const w = document.querySelector(".first-card-blog")?.offsetWidth;
    const h = document.querySelector(".first-card-blog")?.offsetHeight;
    const canvas = await html2canvas(node, { scale: 5 });
    const pdf = new jsPDF("l", "px", [w, h - 5], false);
    const imgData = canvas.toDataURL("image/jpeg");
    pdf.addImage(imgData, "JPEG", 0, 0, w, h);
    pdf.save("vcard.pdf");
  };

  const handlePrintBack = async () => {
    const node = document.querySelector(".second-card-blog");
    const w = document.querySelector(".second-card-blog")?.offsetWidth;
    const h = document.querySelector(".second-card-blog")?.offsetHeight;
    const canvas = await html2canvas(node, { scale: 5 });
    const pdf = new jsPDF("l", "px", [w, h - 5], false);
    const imgData = canvas.toDataURL("image/jpeg");
    pdf.addImage(imgData, "JPEG", 0, 0, w, h);
    pdf.save("vcard.pdf");
  };


  

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <button
          onClick={() => {
            generatePDF();
          }}
          style={{
            color: "#fff",
            background: "#457b9d",
            padding: "10px",
            border: "none",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "900",
          }}
        >
          Print Front
        </button>
        <button
          onClick={() => handlePrintBack()}
          style={{
            color: "#fff",
            background: "#457b9d",
            padding: "10px",
            border: "none",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "900",
          }}
        >
          Print Back
        </button>
      </div>
    </>
  );
});

export default Print;
