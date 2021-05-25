import React, { useState } from "react";
import './style.css';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
      <div>
          <nav>
            <div className="logo">Bescherelle</div>
            <ul className="nav-links" style={{transform: open ? "translateX(0px)" : "" }}>
              <li>
                <a><i className="far fa-envelope-open fa-lg"></i>&nbsp;Newsletter</a>
                </li>
              <li>
                <a><i className="fas fa-search fa-lg"></i>&nbsp;Rechercher</a>
                </li>
            </ul>
            <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
          </nav>
      </div>
  );
}

export default Navbar;
