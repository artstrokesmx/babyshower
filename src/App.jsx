
import Bienvenida from './componentes/saludo';
import Fecha from './componentes/Fecha/Fecha';
import Lugar from './componentes/Lugar/Lugar';
import Mesa from './componentes/Mesa/Mesa';
import Confirmacion from './componentes/Confirmacion/Confirmacion';
import Verificacion from './componentes/Verificacion/Verificacion';


import React, { useState, useEffect } from 'react';

function App() {
  const [invitado, setInvitado] = useState(null);

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
    <div className="bg-green-900 min-h-screen overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
  <img className="w-full translate-x-50 translate-y-[-80px] fixed" src="/babyshower/assets/marcoderarr.png" alt="Marco superior derecho" />
  <img className="w-full translate-x-[-150px] fixed" src="/babyshower/assets/marcoizqbaj.png" alt="Marco inferior izquierdo" />
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