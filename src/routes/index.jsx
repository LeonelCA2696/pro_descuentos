import { useRoutes, BrowserRouter } from "react-router-dom"; // Importacion de react-router-dom

import HomePage from "../pages/HomePage"; // Importacion del componente HomePage
import "./App.css"; // Importacion de los estilos (TailwindCss)

// # Configuracion de rutas
const AppRoutes = () => {
  let route = useRoutes([{ path: "/", element: <HomePage /> }]);
  return route;
};

// # App
const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
