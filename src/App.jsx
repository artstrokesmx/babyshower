import React from 'react';
// Importamos los componentes de React Router DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importamos el componente de la invitación que acabamos de crear
import InvitacionApp from './componentes/InvitacionApp/InvitacionApp.jsx';

// Importamos tu componente de estadísticas
import Estadisticas from './componentes/Estadisticas/Estadisticas.jsx';

function App() {
  return (
    // 1. Usamos Router. Es importante que uses BrowserRouter.
    // 2. Si estás desplegando en un subdirectorio (como /babyshower/), 
    //    es crucial usar la propiedad 'basename'.
    <Router basename="/babyshower"> 
      <Routes>
        {/* Ruta 1: La ruta principal (artstrokesmx.io/babyshower/)
          Cuando la URL es '/', se carga el componente InvitacionApp.
        */}
        <Route path="/" element={<InvitacionApp />} />
        
        {/* Ruta 2: La ruta secreta (artstrokesmx.io/babyshower/estadisticas)
          Cuando la URL es '/estadisticas', se carga el componente Estadisticas.
        */}
        <Route path="/estadisticas" element={<Estadisticas />} />

        {/* Puedes añadir una ruta de 404 si lo necesitas */}
        {/* <Route path="*" element={<div>404 No Encontrado</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;