import React, { useState, useMemo } from 'react';
import { invitados } from "../../data/invitados";

const ACCESO_KEY = "Jessica"; 

function Estadisticas() {
  const [accesoConcedido, setAccesoConcedido] = useState(false);
  const [inputKey, setInputKey] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputKey === ACCESO_KEY) {
      setAccesoConcedido(true);
    } else {
      alert("Clave incorrecta. Acceso denegado.");
    }
  };

  if (!accesoConcedido) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2 className='mb-5'>🔒 Área Restringida</h2>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Introduce la clave de acceso"
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            className='p-3 mb-5 border-pink-100 border-2 text-center rounded-2xl stats w-100'
            //style={{ padding: '10px', margin: '10px 0', width: '250px' }}
          />
          <button type="submit" className='p-1 m-auto bg-green-600 text-white block stats rounded-lg w-40'>
            Acceder
          </button>
        </form>
      </div>
    );
  }

  // --- Si el acceso es concedido, renderiza las estadísticas ---
  return (
    <DashboardEstadisticas />
  );
}

const useEstadisticas = () => {
  return useMemo(() => {
    // 1. Invitados Confirmados y No Confirmados (personas)
    const confirmados = invitados.filter(i => i.confirmado);
    const noConfirmados = invitados.filter(i => !i.confirmado);

    // 2. Conteo de Boletos (Cantidad de Personas)
    const boletosConfirmados = confirmados.reduce((sum, i) => sum + i.invitados, 0);
    const boletosNoConfirmados = noConfirmados.reduce((sum, i) => sum + i.invitados, 0);
    const boletosTotales = boletosConfirmados + boletosNoConfirmados;

    // 3. Conteo de Grupos (Cuántas entradas/familias)
    const gruposConfirmados = confirmados.length;
    const gruposNoConfirmados = noConfirmados.length;
    const gruposTotales = invitados.length;

    return {
      boletosConfirmados,
      boletosNoConfirmados,
      boletosTotales,
      gruposConfirmados,
      gruposNoConfirmados,
      gruposTotales,
      confirmados,
      noConfirmados
    };
  }, []);
};

// Componente principal del dashboard (visible solo con acceso)
const DashboardEstadisticas = () => {
  const stats = useEstadisticas();
  
  // Puedes usar una librería de gráficos como Chart.js/react-chartjs-2 o Recharts
  // para gráficas reales. Aquí se simulará con texto.

  return (
    <div className='p-2 m-auto text-center'>
      <h1 >📊 Resumen de Invitaciones</h1>

      <div className='grid grid-cols-3 gap-5'>
        {/* Tarjeta de Resumen 1: Personas Totales */}
        <div className='p-2 bg-blue-100 rounded-lg shadow-md'>
          <h3 className='stats'>🎟️ Boletos Confirmados (Personas)</h3>
          <p className='text-4xl font-bold text-blue-600'
          >{stats.boletosConfirmados}</p>
          <p className='stats'>De un total de <br/> {stats.boletosTotales}</p>
        </div>

        {/* Tarjeta de Resumen 2: Porcentaje de Confirmación */}
        <div className='p-2 bg-yellow-100 rounded-lg shadow-md'>
          <h3 className='stats'>✅ Porcentaje de Confirmación (Boletos)</h3>
          <p className='stats text-amber-700'>
            {((stats.boletosConfirmados / stats.boletosTotales) * 100).toFixed(1)}%
          </p>
          <p className='stats'>boletos pendientes <br/>{stats.boletosNoConfirmados}</p>
        </div>

        {/* Tarjeta de Resumen 3: Grupos Confirmados */}
        <div className='p-2 bg-rose-100 rounded-lg shadow-md'>
          <h3 className='stats'>👨‍👩‍👧‍👦 Grupos Confirmados</h3>
          <p className='stats text-rose-500'>{stats.gruposConfirmados}</p>
          <p className='stats'>De <br/>{stats.gruposTotales} <br/>grupos<br/>invitaciones enviadas</p>
        </div>
      </div>

      <div className='flex gap-2'>
        {/* Tabla de Confirmados */}
        <div className='flex-1 mt-5'>
          <p className='text-green-600 letra'>✅ Confirmados ({stats.gruposConfirmados})</p>
          <TablaInvitados lista={stats.confirmados} />
        </div>

        {/* Tabla de No Confirmados */}
        <div className='flex-1 mt-5'>
          <p className='letra text-rose-400'>❌ Pendientes ({stats.gruposNoConfirmados})</p>
          <TablaInvitados lista={stats.noConfirmados} />
        </div>
      </div>
    </div>
  );
};

// Componente para la tabla de invitados
const TablaInvitados = ({ lista }) => (
  <table className='mt-5 mx-auto' >
    <thead>
      <tr className='bg-gray-200'>
        <th className='letra text-sm'>Nombre</th>
        <th className='letra text-sm'>Boletos</th>
        <th className='letra text-sm'>Estatus</th>
      </tr>
    </thead>
    <tbody>
      {lista.map((invitado, index) => (
        <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
          <td className='stats text-xs font-light'>{invitado.nombre} {invitado.apellido}</td>
          <td className='stats text-xs font-light'>{invitado.invitados}</td>
          <td className='stats text-xs font-light'>{invitado.confirmado ? 'Confirmado' : 'Pendiente'}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Estadisticas;