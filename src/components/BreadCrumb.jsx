export function BreadCrumb(){
    return(
        <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                    <a href="index.html">Tablero</a>
                </li>
                <li className="breadcrumb-item active">Recoger paquete</li>
            </ol>
        </nav>
    )
}
export default BreadCrumb