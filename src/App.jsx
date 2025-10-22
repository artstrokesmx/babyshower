
import Bienvenida from './componentes/saludo';
import Fecha from './componentes/Fecha/Fecha';
import Lugar from './componentes/Lugar/Lugar';
import Mesa from './componentes/Mesa/Mesa';
import Confirmacion from './componentes/Confirmacion/Confirmacion';
import Verificacion from './componentes/Verificacion/Verificacion';


import React, { useState, useEffect } from 'react';

function App() {
  const [invitado, setInvitado] = useState(null);
  const [offsetY, setOffsetY] = useState(0);

   useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const verificado = localStorage.getItem('invitadoVerificado');
    if (verificado) {
      setInvitado(JSON.parse(verificado));
    }
  }, []);

  const handleVerificado = (invitadoObj) => {
    setInvitado(invitadoObj);
  };

  if (!invitado) {
    return <Verificacion onVerificado={handleVerificado} />;
  }

  return (
    <div className="fondo overflow-hidden min-h-screen min-h-dvh">
      <div className="inset-0 pointer-events-none">
        <img className="w-20 translate-x-1 z-30 fixed bottom-0" src="/babyshower/assets/cuna.png" alt="Marco inferior izquierdo" />
        <img className="w-20 translate-x-85 z-10 bottom-0 fixed" src="/babyshower/assets/elev.png" alt="Marco inferior derecha" />
        <img className="w-10 z-20 fixed" src="/babyshower/assets/globo.png" alt="Marco inferior izquierdo" style={{transform: `translate(${330}px, ${660 - offsetY * 0.275}px)`}} />
        <img className="w-22 z-20 fixed" src="/babyshower/assets/ciguena.png" alt="Marco inferior izquierdo" style = {{transform: `translate(${-21 + offsetY * 0.16}px,${1}px)`}} />
        <img className="w-5 z-10 fixed" src="/babyshower/assets/bolsac.png" alt="bolsa con bebé" style={{transform: `translate(${35}px, ${25 - offsetY * -0.278}px)`}} />
      </div>
      <div className="">
        <Bienvenida nombre={invitado.nombre} apellido={invitado.apellido} />
        
        <Fecha />
        <img className="mx-auto mt-3 w-25" src="/babyshower/assets/linea.png" alt="viñeta elefantes" />
        <Lugar />
        <img className="mx-auto mt-3 w-25" src="/babyshower/assets/linea.png" alt="viñeta elefantes" />
        <Mesa />
        <img className="mx-auto mt-3 w-25" src="/babyshower/assets/linea.png" alt="viñeta elefantes" />
        <Confirmacion />
      </div>
    </div>
  );
}

export default App;