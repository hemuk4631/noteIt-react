import React from "react";

function Header() {
  return (
    <header className="text-white bg-success px-2 py-2">
      <div className="container">
        <h1>Temp</h1>
        <h1 className="text-center">
          <i className="fa-solid fa-note-sticky fa-xs"></i>noteIt
        </h1>
      </div>
    </header>
  );
}

export default Header;
