import React from "react"; // Importacion de react
import ReactDOM from "react-dom/client"; // Importacion de react-router-dom
import App from "./routes"; // Importacion de todas las rutas desde el componente App
import "./index.css"; // Importacion de estilos generales

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
