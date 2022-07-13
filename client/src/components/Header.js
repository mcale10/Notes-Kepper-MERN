import React, { useState } from 'react';

function Header() {
  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded((preValue) => {
      return !preValue;
    });
  }

  return (
    <header>
      <h1 className='page-title'>Notes Keeper</h1>
      <button onClick={expand} className='about-button'>
        ABOUT
      </button>
      {isExpanded && (
        <div className="about-header">
        <br></br>
          <p>
            Google Keep alike single page application.
          </p>
          <br></br>
          <p>
            I'm Marko Caleta, a Front End Developer from Split, Croatia.
          </p>
          <br />
          <p>You can contact me:</p>
          <br />
          <i className='far fa-envelope'></i>{' '}
          <a
            href='mailto: marko.caleta@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            style={{ marginRight: '16px' }}
          >
            Email
          </a>
          <i className='icon fab fa-linkedin'>
            {' '}
            <a
              href='https://www.linkedin.com/in/marko-%C4%87aleta-633b081a3/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ marginRight: '16px' }}
            >
              Linkedin
            </a>
          </i>
          <i className='fab fa-github'></i>{' '}
          <a
            href='https://github.com/mcale10'
            target='_blank'
            rel='noopener noreferrer'
            style={{ marginRight: '16px' }}
          >
            Github
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;