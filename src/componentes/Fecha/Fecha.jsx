import { useEffect, useState, useMemo } from "react";

function Fecha() {
    const fechaEvento = useMemo(() => new Date("2025-10-16T00:00:00"), []);
    const [tiempo, setTiempo] = useState(() => {
        const ahora = new Date();
        const diferencia = fechaEvento - ahora;
        if (diferencia <= 0) {
            return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
        }
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
        const segundos = Math.floor((diferencia / 1000) % 60);
        return { dias, horas, minutos, segundos };
    });

    useEffect(() => {
        const calcularDiferencia = () => {
            const ahora = new Date();
            const diferencia = fechaEvento - ahora;
            if (diferencia <= 0) {
                return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
            }
            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
            const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
            const segundos = Math.floor((diferencia / 1000) % 60);
            return { dias, horas, minutos, segundos };
        };
        const timer = setInterval(() => {
            setTiempo(calcularDiferencia());
        }, 1000);
        return () => clearInterval(timer);
    }, [fechaEvento]);

    return (
        <div className="text-center mt-5 tangerine-regular border-2 border-amber-300 p-5 rounded-lg bg-white  w-80 mx-auto">
            <h2 className="text-4xl text-shadow-md text-amber-600">Mis papás quieren compartirte esta alegría</h2>
            <p className="text-2xl mt-5">Sábado 16 Octubre de 2025</p>
            <p>14:00 horas</p>
            <p>Faltan:</p>
            <div className="text-3xl font-bold mt-2 text-amber-600 text-shadow-lg">
                {tiempo.dias} días, {tiempo.horas} horas, {tiempo.minutos} minutos, {tiempo.segundos} segundos
            </div>
            <div className="w-full h-40">
                <img className=" relative left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-1/2 animate-bounce" src="/babyshower/assets/ele.png" alt="Elefante" />
            </div>
        </div>
    );
}

export default Fecha;