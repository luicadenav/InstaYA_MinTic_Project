import logo from '../assets/img/logo.png';
import profile from '../assets/img/messages-1.jpg'

export function Header() {
return(
    <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
            <img src={logo} alt="" />
            <span className="d-none d-lg-block">InstaYA</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn" />
        </div>
        {/* End Logo */}
        <div className="search-bar">
        <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
        >
            <input
            type="text"
            name="query"
            placeholder="Rastrea tu paquete"
            title="Enter search keyword"
            />
            <button type="submit" title="Search">
            <i className="bi bi-search" />
            </button>
        </form>
        </div>
        {/* End Search Bar */}
        <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search" />
            </a>
            </li>
            {/* End Search Icon*/}
            <li className="nav-item dropdown pe-3">
            <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
            >
                <img
                src={profile}
                alt="Profile"
                className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                Luisa Cadena
                </span>
            </a>
            {/* End Profile Iamge Icon */}
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                <h6>Luisa Cadena</h6>
                </li>
                <li>
                <hr className="dropdown-divider" />
                </li>
                <li>
                <a className="dropdown-item d-flex align-items-center" href="#">
                    <i className="bi bi-box-arrow-right" />
                    <span>Cerrar sesión</span>
                </a>
                </li>
            </ul>
            {/* End Profile Dropdown Items */}
            </li>
            {/* End Profile Nav */}
        </ul>
        </nav>
        {/* End Icons Navigation */}
  </header>  
)
}

export default Header