import React from "react";
import RefreshIcon from '@mui/icons-material/Refresh';
//import Fab from '@mui/material/Fab';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
        <footer>
          <p>Copyright ⓒ {year}</p>
        </footer>
        <button className="refreshButton"><RefreshIcon /></button>
    </div>
  );
}

export default Footer;
