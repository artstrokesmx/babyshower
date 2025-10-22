import { useEffect, useState, useMemo } from "react";

function Fecha() {
    const fechaEvento = useMemo(() => new Date("2025-11-22T10:30:00"), []);
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
        <div className="text-center mt-5 tangerine-regular border-2 border-amber-300 p-5 rounded-lg bg-white  w-90 mx-auto">
            <h2 className="text-5xl text-shadow-md text-amber-600">Mis papás quieren compartirte esta alegría el:</h2>
            <p className="text-7xl mt-5">Sábado 22 de Noviembre de 2025</p>
            <p className="text-5xl">de 10:30 a 14:30 horas</p>
            <p className="text-3xl">Faltan:</p>
            <div className="text-5xl font-bold mt-2 text-amber-600 text-shadow-lg">
                {tiempo.dias} días, {tiempo.horas} horas, <br /> {tiempo.minutos} minutos, {tiempo.segundos} segundos
            </div>
            <div className="w-full h-40">
                <img className=" relative left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-1/2 animate-bounce" src="/babyshower/assets/ele1.png" alt="Elefante" />
            </div>
            <div className="border-red-100 border-2 rounded-2xl p-1 mt-1 ml-5 mr-5 bg-red-100 hover:bg-rose-100 transition-colors duration-300">
                <a  target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=M2RxNWN2Mjcza21iNThnMzZycTl1MjNqbTggcHNpYy5hcnR1cm9taXJhbmRhQG0&amp;tmsrc=psic.arturomiranda%40gmail.com">
                    <p>Agrega a tu calendario en Google</p>
                    <img className="border-0 rounded-2xl mx-auto" src="https://calendar.google.com/calendar/images/ext/gc_button1_es.gif" alt="Google Calendar"/>
                </a>              
            </div>
            
        </div>
    );
}

export default Fecha;