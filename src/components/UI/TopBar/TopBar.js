import React from 'react';

const topBar = () => {
  return (
    <div className='top-bar pt-1 pb-1 text-light'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex pt-2 pb-2'>
            <div className='d-flex align-item-center mr-3'>
              <i className='fas fa-phone-alt mr-2' />
                <a href="tel:+2348137279837"><small>+234-813-727-9837</small></a>
            </div>
            <div className='d-flex align-item-center'>
              <i className='fas fa-envelope mr-2' />
                <a href="mailto:info@weixeltech.com"><small>info@weixeltech.com</small></a>
            </div>
          </div>
          <div className='d-flex pt-2 pb-2'>
            <div className='social-media d-flex align-item-center'>
              <a href='!#' className='text-light'>
                <i className='fab fa-facebook-f mr-4' />
              </a>
              <a href='!#' className='text-light'>
                <i className='fab fa-twitter mr-4' />
              </a>
              <a href='!#' className='text-light'>
                <i className='fab fa-instagram mr-4' />
              </a>
              <a href='!#' className='text-light'>
                <i className='fab fa-github' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default topBar;
