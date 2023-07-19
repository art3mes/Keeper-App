import React from "react";
import RefreshIcon from '@mui/icons-material/Refresh';

function Footer() {
  const year = new Date().getFullYear();
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div>
        <footer>
          <p>Copyright ⓒ {year}</p>
        </footer>
        <button className="refreshButton" onClick={() => openInNewTab('https://keeper-app-backend-dyr1.onrender.com/')}><RefreshIcon /></button>
    </div>
  );
}

export default Footer;
