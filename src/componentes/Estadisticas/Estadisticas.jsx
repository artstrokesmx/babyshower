import React, { useState, useMemo } from 'react';
import { invitados } from "../../data/invitados";
// Si usas styled-components, Tailwind, o un framework CSS, ajusta las clases.
// Aquí usaremos estilos en línea y algo de estructura básica.

// Define tu clave de acceso. ¡Cámbiala por una real!
const ACCESO_KEY = "MiClaveSecreta123"; 

function Estadisticas() {
  const [accesoConcedido, setAccesoConcedido] = useState(false);
  const [inputKey, setInputKey] = useState('');

  // Función para manejar el intento de acceso
  const handleLogin = (e) => {
    e.preventDefault();
    if (inputKey === ACCESO_KEY) {
      setAccesoConcedido(true);
    } else {
      alert("Clave incorrecta. Acceso denegado.");
    }
  };

  // --- Renderizado del formulario de acceso (si no ha accedido) ---
  if (!accesoConcedido) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>🔒 Área Restringida</h2>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Introduce la clave de acceso"
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            style={{ padding: '10px', margin: '10px 0', width: '250px' }}
          />
          <button type="submit" style={{ padding: '10px 15px', display: 'block', margin: '10px auto', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
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
          <h3 className='text-lg'>🎟️ Boletos Confirmados (Personas)</h3>
          <p className='text-4xl font-bold text-blue-600'
          >{stats.boletosConfirmados}</p>
          <p>De un total de <br/> {stats.boletosTotales}</p>
        </div>

        {/* Tarjeta de Resumen 2: Porcentaje de Confirmación */}
        <div style={{ padding: '20px', backgroundColor: '#fffbe0', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>✅ Porcentaje de Confirmación (Boletos)</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#FFC107' }}>
            {((stats.boletosConfirmados / stats.boletosTotales) * 100).toFixed(1)}%
          </p>
          <p>**{stats.boletosNoConfirmados}** boletos pendientes</p>
        </div>

        {/* Tarjeta de Resumen 3: Grupos Confirmados */}
        <div style={{ padding: '20px', backgroundColor: '#ffe0f0', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>👨‍👩‍👧‍👦 Grupos Confirmados</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#E91E63' }}>{stats.gruposConfirmados}</p>
          <p>De **{stats.gruposTotales}** grupos/invitaciones enviadas</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Tabla de Confirmados */}
        <div style={{ flex: 1 }}>
          <h2 style={{ color: '#4CAF50' }}>✅ Confirmados ({stats.gruposConfirmados})</h2>
          <TablaInvitados lista={stats.confirmados} />
        </div>

        {/* Tabla de No Confirmados */}
        <div style={{ flex: 1 }}>
          <h2 style={{ color: '#F44336' }}>❌ Pendientes ({stats.gruposNoConfirmados})</h2>
          <TablaInvitados lista={stats.noConfirmados} />
        </div>
      </div>
    </div>
  );
};

// Componente para la tabla de invitados
const TablaInvitados = ({ lista }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
    <thead>
      <tr style={{ backgroundColor: '#eee' }}>
        <th style={tableHeaderStyle}>Nombre</th>
        <th style={tableHeaderStyle}>Boletos</th>
        <th style={tableHeaderStyle}>Estatus</th>
      </tr>
    </thead>
    <tbody>
      {lista.map((invitado, index) => (
        <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
          <td style={tableCellStyle}>{invitado.nombre} {invitado.apellido}</td>
          <td style={{ ...tableCellStyle, textAlign: 'center' }}>{invitado.invitados}</td>
          <td style={tableCellStyle}>{invitado.confirmado ? 'Confirmado' : 'Pendiente'}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// Estilos de la tabla
const tableHeaderStyle = {
  padding: '12px',
  textAlign: 'left',
  borderBottom: '2px solid #ccc'
};

const tableCellStyle = {
  padding: '10px',
  borderBottom: '1px solid #eee'
};

export default Estadisticas;