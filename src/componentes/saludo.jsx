function Bienvenida({ nombre, apellido }) {
    return (
        <div className="mt-5 ml-5 relative">
            <p className="text-2xl letra text-center m-2">Celebra con nosotros</p>
            <h1 className="h-20 font-bold text-6xl relleno-letras text-center text-shadow-lg bg-[url('/babyshower/assets/ele.png')] bg-[size:200px_auto] bg-[position:0%_15%]">Baby Shower</h1>
            <div className="text-2xl text-center font-bold mb-2 text-amber-500">
                ¡Bienvenido(a), {nombre} {apellido}!
            </div>
        </div>
    )
}

export default Bienvenida;