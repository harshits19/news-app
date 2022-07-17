import React from "react";
import { Link } from "react-router-dom";
//converted class based components to function based
const Navbar = (props) => {
  return (
    <div>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="d-flex align-items-center text-white text-decoration-none mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-camera-reels" viewBox="0 0 16 16">
                <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </Link>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
              <li><Link to="/health" className="nav-link px-2 text-white">Health</Link></li>
              <li><Link to="/technology" className="nav-link px-2 text-white">Tech</Link></li>
              <li><Link to="/sports" className="nav-link px-2 text-white">Sports</Link></li>
              <li><Link to="/science" className="nav-link px-2 text-white">Science</Link></li>
              <li><Link to="/entertainment" className="nav-link px-2 text-white">Entertainment</Link></li>
              <li><Link to="/business" className="nav-link px-2 text-white">Business</Link></li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-white bg-dark"
                placeholder="Search an Article"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Navbar;