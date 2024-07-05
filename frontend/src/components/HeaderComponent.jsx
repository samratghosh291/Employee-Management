import React from 'react';

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <div className='container-fluid'>
            <a href='https://javaguides.net' className='navbar-brand mx-auto'>
              Employee Management App
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
