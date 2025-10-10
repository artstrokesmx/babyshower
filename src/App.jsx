
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
    <div className="fondo min-h-screen overflow-hidden mx-auto w-full max-w-[425px] h-auto">
      <div className="fixed inset-0 pointer-events-none">
  <img className="w-200 translate-x-[-110px] translate-y-[-80px] fixed" src="/babyshower/assets/marcoizqt.png" alt="Marco superior izquierdo" />
  <img className="w-20 translate-x-85 translate-y-165 fixed" src="/babyshower/assets/elev.png" alt="Marco inferior izquierdo" />
  <img className="w-20 fixed" src="/babyshower/assets/globo.png" alt="Marco inferior izquierdo" style={{transform: `translate(${307}px, ${660 - offsetY * 0.35}px)`}} />
      </div>
      <div className="">
        <Bienvenida nombre={invitado.nombre} apellido={invitado.apellido} />
        <Fecha />
        <Lugar />
        <Mesa />
        <Confirmacion />
      </div>
    </div>
  );
}

export default App;