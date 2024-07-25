import { NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/home">Logotipo</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/jugadores">Jugadores</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/aguateros">Aguateros</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/suplentes" >Suplentes</NavLink>
                    </li>
                </ul>
            </div>
          </div>
        </nav>
    </>
  )
}
