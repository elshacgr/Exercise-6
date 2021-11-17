import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler"
   type="button"
    data-toggle="collapse" 
    data-target="#navbarNav" 
    aria-controls="navbarNav" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <div className="navbar-nav">
      <Link className="nav-link" to="/">Dashboard</Link>
      <Link className="nav-link" to="/ListUser">ListUser</Link>
      </div>
  </div>
</nav>
    );
}
