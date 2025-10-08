import React, { useState } from 'react';
import { invitados } from '../../data/invitados';

function Verificacion({ onVerificado }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [error, setError] = useState('');

  const handleVerificar = (e) => {
    e.preventDefault();
    const invitado = invitados.find(
      (i) => i.nombre.toLowerCase() === nombre.toLowerCase() && i.apellido.toLowerCase() === apellido.toLowerCase()
    );
    if (invitado) {
      localStorage.setItem('invitadoVerificado', JSON.stringify(invitado));
      onVerificado(invitado);
    } else {
      setError('No encontramos tu nombre y apellido en la lista de invitados.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Verifica tu invitación</h2>
        <form onSubmit={handleVerificar} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-lg font-medium mb-1">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          <div>
            <label htmlFor="apellido" className="block text-lg font-medium mb-1">Apellido:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          {error && <div className="text-red-600 text-center">{error}</div>}
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Verificar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Verificacion;
