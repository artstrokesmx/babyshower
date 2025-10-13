
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
    <div className="fondo overflow-hidden mx-auto w-full max-w-[425px] md:max-w-[425px] lg:max-w-[425px] lg:mx-auto h-auto">
      <div className="fixed inset-0 pointer-events-none">
  {/* <img className="w-3/3 max-w-[425px] translate-x-35 translate-y-[-80px] scale-x-[-1] fixed" src="/babyshower/assets/marcoizqt.png" alt="Marco superior izquierdo" /> */}
  <img className="w-20 translate-x-1 translate-y-158 z-1 fixed" src="/babyshower/assets/cuna.png" alt="Marco inferior izquierdo" />
  <img className="w-20 translate-x-85 translate-y-165 fixed" src="/babyshower/assets/elev.png" alt="Marco inferior derecha" />
  <img className="w-20 fixed" src="/babyshower/assets/globo.png" alt="Marco inferior izquierdo" style={{transform: `translate(${307}px, ${660 - offsetY * 0.275}px)`}} />
  <img className="w-20 fixed" src="/babyshower/assets/ciguena.png" alt="Marco inferior izquierdo" style = {{transform: `translate(${-10 + offsetY * 0.16}px,${-40}px)`}} />
  <img className="w-25 fixed" src="/babyshower/assets/bolsac.png" alt="bolsa con bebé" style={{transform: `translate(${-45}px, ${-45 - offsetY * -0.28}px)`}} />
      </div>
      <div className="">
        <Bienvenida nombre={invitado.nombre} apellido={invitado.apellido} />
        
        <Fecha />
        <img className="mx-auto mt-3 w-15" src="/babyshower/assets/linea.png" alt="viñeta elefantes" />
        <Lugar />
        <img className="mx-auto mt-3 w-15" src="/babyshower/assets/linea.png" alt="viñeta elefantes" />
        <Mesa />
        <img className="mx-auto mt-3 w-15" src="/babyshower/assets/linea.png" alt="viñeta elefantes" />
        <Confirmacion />
      </div>
    </div>
  );
}

export default App;