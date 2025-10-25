import React, { useState } from "react";
import { Routes, Route } from "react-router";
import firebase, { FirebaseContext } from "./firebase";
import 'bootstrap/dist/css/bootstrap.min.css';

// Importación de componentes
import Sidebar from "./ui/Sidebar.tsx";
import Home from "./events/pages/Home/index.tsx";
import Navbar from "./events/pages/Nav/Navbar.tsx";
import Register from "./events/pages/Register/index.tsx";
import Training from "./events/pages/Training/index.tsx";
import Assign from "./events/pages/Assign/Assign.tsx";
import Admin from "./events/pages/Admin/Admin.tsx";
import Pagar from "./events/pages/Pagar/index.tsx";
import AssignDieta from "./events/pages/AssignDieta/AssignDieta.tsx";
import Dieta from "./events/pages/Dieta/index.tsx";
import VerDieta from "./events/pages/VerDieta/index.tsx";
import VerRutina from "./events/pages/VerRutina/VerRutina.tsx";
import Actualizar from "./events/pages/Actualizar/Actualizar.tsx";


import IniciarSesion from "./events/pages/IniciarSesion";
function App() {

  return (
    <>
      <div className="min-h-screen lg:grid lg:grid-cols-7">
        <div className="col-span-1 lg:col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-1 lg:col-span-5">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/iniciarSesion" element={<IniciarSesion/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/training" element={<Training />} />
            <Route path="/assign" element={<Assign />} />
            <Route path="/dieta" element={<Dieta />} />
            <Route path="/assignDieta" element={<AssignDieta />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/pagar" element={<Pagar />} />
            <Route path="/VerDieta" element={<VerDieta/>}/>
            <Route path="/VerRutina" element={<VerRutina/>}/>
            <Route path="/Actualizar" element={<Actualizar/>}/>
            
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
