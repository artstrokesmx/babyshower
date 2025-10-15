function Bienvenida({ nombre, apellido }) {
    return (
        <div className="mt-15">
            <div className="bg-white border-amber-600 border-2 rounded-2xl w-90 mx-auto p-3 mb-3 mt-5">
                <h1 className="h-20 font-bold text-6xl text-center text-shadow-lg ">Baby Shower</h1>
                    <img className="w-30 mx-auto" src="/babyshower/assets/eleent.png" alt="" />
                    <p className="letragirly general">Preparando la llegada de:</p>
                    <p className="text-6xl text-amber-500 text-center  text-shadow-sm text-shadow-black mt-3">Miranda Sofía</p>
                <div>
                    <p className="text-2xl">
                        <span className="text-4xl">"</span> Supe que los milagros existen, cuando el amor que nos tenemos empezó a palpitar y tomar forma. <br /> El amor cambio a dos esposos en una familia, al miedo en motivación y a la incertidumbre en esperanza. <br /> Hoy sólo agradecemos a Dios por este regalo tan hermoso que nos ha dado y le pedimos que nos ayude a ser los mejores padres del mundo para ti, mi amor."
                    </p>
                </div>
            </div>
            <img className="mx-auto mt-4 mb-5 w-25" src="/babyshower/assets/linea.png" alt="viñeta elefantes" />
            
            <div className="text-5xl text-center text-rose-200 text-shadow-2xs text-shadow-black font-bold">
                ¡Hola, <br /> {nombre} {apellido}!
            </div>
        </div>
    )
}

export default Bienvenida;