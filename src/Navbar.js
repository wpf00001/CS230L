function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navigation</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-controls="bs-example-navbar-collapse-1" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button className="btn btn-link nav-link" type="button">button1</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link" type="button">button2</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link" type="button">button3</button>
              </li>
            </ul>
          </div>
        </nav>
      );
  }
  
  export default Navbar;