function Bienvenida({ nombre, apellido }) {
    return (
        <div className="mt-5 ml-5">
            <div className="bg-white border-amber-600 border-2 rounded-2xl w-90 mx-auto p-3 mb-3 mt-5">
                <h1 className="h-20 font-bold text-6xl text-center text-shadow-lg ">Baby Shower</h1>
                    <p className="text-2xl letragirly text-rose-300 text-center mb-3">Preparando la llegada de:</p>
                    <p className="text-6xl text-amber-500 text-center  text-shadow-sm text-shadow-black">Miranda Sofía</p>
            </div>
            
            <div className="text-5xl text-rose-300 text-shadow-2xs text-center text-shadow-black font-bold mb-2 ">
                ¡Hola, <br /> {nombre} {apellido}!
            </div>
        </div>
    )
}

export default Bienvenida;