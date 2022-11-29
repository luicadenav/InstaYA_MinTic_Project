import {BreadCrumb} from './BreadCrumb';   
export function Form(){
    return(
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>Recoger paquete</h1>
                <BreadCrumb/>
                </div>
                {/* End Page Title */}
                <section className="section dashboard">
                <div className="row">
                    {/* Left side columns */}
                    <div className="col-lg-8">
                    <form action="">
                        <div className="row">
                        {/* Tracking Card */}
                        <div className="col-12">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Disponibilidad </h5>
                                {/* No Labels Form */}
                                <div className="row g-3">
                                <div className="row">
                                    <label htmlFor="" className="form-label">
                                    Desde:{" "}
                                    </label>
                                    <div className="col-md-6">
                                    <input type="date" className="form-control" />
                                    </div>
                                    <div className="col-md-6">
                                    <input type="time" className="form-control" />
                                    </div>
                                </div>
                                <div className="row pt-4">
                                    <label htmlFor="" className="form-label">
                                    Hasta:{" "}
                                    </label>
                                    <div className="col-md-6">
                                    <input type="date" className="form-control" />
                                    </div>
                                    <div className="col-md-6">
                                    <input type="time" className="form-control" />
                                    </div>
                                </div>
                                </div>
                                {/* End No Labels Form */}
                            </div>
                            </div>
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Información paquete </h5>
                                {/* No Labels Form */}
                                <div className="row g-3">
                                <div className="col-md-4">
                                    <input
                                    type="Number"
                                    className="form-control"
                                    placeholder="Ancho (cm)"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <input
                                    type="Number"
                                    className="form-control"
                                    placeholder="Alto (cm)"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <input
                                    type="Number"
                                    className="form-control"
                                    placeholder="Largo (cm)"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <input
                                    type="Number"
                                    className="form-control"
                                    placeholder="Peso (kg)"
                                    />
                                </div>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="gridCheck2"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="gridCheck2"
                                    >
                                        Paquete delicado
                                    </label>
                                    </div>
                                </div>
                                </div>
                                {/* End No Labels Form */}
                            </div>
                            </div>
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Información remitente </h5>
                                {/* No Labels Form */}
                                <div className="row g-3">
                                <div className="col-md-12">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre remitente"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Numero de Identificación"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ciudad"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Dirección"
                                    />
                                </div>
                                </div>
                                {/* End No Labels Form */}
                            </div>
                            </div>
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Información Destinatario </h5>
                                {/* No Labels Form */}
                                <div className="row g-3">
                                <div className="col-md-12">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Destinatario"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Numero de Identificación"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ciudad"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Dirección"
                                    />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">
                                    Recoger
                                    </button>
                                    <button type="reset" className="btn btn-secondary">
                                    Cancelar
                                    </button>
                                </div>
                                </div>
                                {/* End No Labels Form */}
                            </div>
                            </div>
                        </div>
                        {/* End Tracking Card */}
                        </div>
                    </form>
                    </div>
                    {/* End Left side columns */}
                    {/* Right side columns */}
                    <div className="col-lg-4"></div>
                    {/* End Right side columns */}
                </div>
                </section>
            </main>
            {/* End #main */}
        </>
    )
}
export default Form