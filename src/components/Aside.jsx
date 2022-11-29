export function Aside(){
    return(
        <>
        {/* ======= Sidebar ======= */}
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <a className="nav-link " href="index.html">
                        <i className="bi bi-grid" />
                        <span>Tablero</span>
                        </a>
                    </li>
                    {/* End Dashboard Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="mis-envios.html">
                        <i className="fa-solid fa-box-open" />
                        <span>Mis Envios</span>
                        </a>
                    </li>
                    {/* End Profile Page Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="recoger-paquete.html">
                        <i className="fa-solid fa-truck-fast" />
                        <span>Recoger paquete</span>
                        </a>
                    </li>
                    {/* End F.A.Q Page Nav */}
                </ul>
            </aside>
        {/* End Sidebar*/}
</>
        
    )

};



