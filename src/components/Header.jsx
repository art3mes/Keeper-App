//import React from "react";
import React, { Fragment } from 'react';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Media from 'react-media';

function Header() {
  return (
    <div>
      <Media queries={{
        small: "(max-width: 719px)"
      }}>
        {matches => (
          <Fragment>
            {matches.small ?
              <header className=' headerSmall'>
                <h1 className='h1Small'><DriveFileRenameOutlineIcon/> Keeper</h1>
              </header> 
            :
              <header>
                <h1><DriveFileRenameOutlineIcon/> Keeper</h1>
              </header>
            }
            
          </Fragment>
        )}
      </Media>
    </div>
  );
}

export default Header;