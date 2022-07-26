import React from 'react'
// import '../css/style.css'
// import '../css/bootstrap.min.css'
// import '../css/owl.carousel.min.css'

const Navbar = () => {
  return (
    <>
        {/* <h1>Navbar</h1> */}
        {/* <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>



      <header className="site-navbar site-navbar-target" role="banner">

        <div className="container">
          <div className="row align-items-center position-relative"> */}

            {/* <div className="col-3"> */}
              {/* <div className="site-logo">
                <a href="index.html" className="font-weight-bold">PDF MASTER</a>
              </div> */}
               {/* <div className="sign">
      <span className="fast-flicker">PDF</span>MAS<span className="flicker">TE</span>R
    </div>
            </div>

            <div className="col-9  text-right">
              

              <span className="d-inline-block d-lg-none"><a href="#" className="text-primary site-menu-toggle js-menu-toggle py-5"><span className="icon-menu h3 text-white"></span></a></span>


              <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto ">
                  <li className="active"><a href="#" className="nav-link">Home</a></li>
                  <li><a href="#" className="nav-link">Portfolio</a></li>
                  <li><a href="#" className="nav-link">About</a></li>
                  <li><a href="#" className="nav-link">Services</a></li>
                  <li><a href="#" className="nav-link">Blog</a></li>
                  <li><a href="#" className="nav-link">Contact</a></li>
                </ul>
              </nav>
            </div>

            
          </div>
        </div>

      </header>

    <div className="hero"></div>
   */}

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">PDF MASTER</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
  
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
   
    </>
  )
}

export default Navbar