function Bienvenida({ nombre, apellido }) {
    return (
        <div className="mt-5 ml-5 relative">
            <p className="text-4xl text-red-200 letra text-center m-8">Celebra con nosotros</p>
            <h1 className="h-20 font-bold text-6xl text-center text-shadow-lg text-red-200">Baby Shower</h1>
            <p className="text-2xl text-red-200 text-center letra">Preparando la llegada de:</p>
            <p className="text-6xl text-amber-400 text-center mb-3 mt-5 text-shadow-lg">Miranda Sofía Navarrete García</p>
            <div className="text-5xl text-center font-bold mb-2 text-red-200">
                ¡Hola, {nombre} {apellido}!
            </div>
        </div>
    )
}

export default Bienvenida;