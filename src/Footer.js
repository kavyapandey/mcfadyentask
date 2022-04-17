import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="row" style={{ justifyContent: "center" }}>
        <span className="jonathan">JONATHAN SIMKHAI</span>
        <span className="blazers">BLAZERS</span>
        <span className="viscouse">VISCOUSE</span>
      </div>
      <div
        className="row"
        style={{ justifyContent: "center", marginTop: "120px" }}
      >
        <span className="note">A NOTE FROM THE EDITOR</span>
        <span className="note-text">
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky.{" "}
        </span>
      </div>
    </>
  );
};
