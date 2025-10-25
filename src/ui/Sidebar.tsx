import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToniFit from "../img/ToniFit.png";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

function Sidebar({ userRole }: any) {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* SIDEBAR */}
      <div
        className={`fixed lg:static top-0 left-0 h-full bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] border-r border-gray-800 transition-all duration-500 ease-in-out z-50
        ${sidebar ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 w-[95%] md:w-[65%] lg:w-[400px] p-6 overflow-y-auto`}
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center justify-center">
            <img
              src={ToniFit}
              alt="Logo Tonifit"
              className="w-32 h-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_15px_rgba(255,0,0,0.6)] transition-all duration-300"
            />
          </Link>
        </div>

        {/* Navegación */}
        <nav className="space-y-2">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 hover:bg-red-600 p-4 !text-gray-400 hover:text-white rounded-lg transition-colors font-semibold !no-underline"
              >
                Principal
              </Link>
            </li>
            <li>
              <Link
                to="/IniciarSesion"
                className="flex items-center gap-4 hover:bg-red-600 p-4 !text-gray-400 hover:text-white rounded-lg transition-colors font-semibold !no-underline"
              >
                Iniciar sesión
              </Link>
            </li>
            <li>
              <Link
                to="/register"
className="flex items-center gap-4 hover:bg-red-600 p-4 !text-gray-400 hover:text-white rounded-lg transition-colors font-semibold !no-underline"
>
                Registrar Usuario
              </Link>
            </li>
            <li>
              <Link
                to="/Actualizar"
className="flex items-center gap-4 hover:bg-red-600 p-4 !text-gray-400 hover:text-white rounded-lg transition-colors font-semibold !no-underline"
>
                Actualizar
              </Link>
            </li>
            <li>
              <Link
                to="/VerDieta"
className="flex items-center gap-4 hover:bg-red-600 p-4 !text-gray-400 hover:text-white rounded-lg transition-colors font-semibold !no-underline"
>
                Dietas
              </Link>
            </li>
            <li>
              <Link
                to="/VerRutina"
className="flex items-center gap-4 hover:bg-red-600 p-4 !text-gray-400 hover:text-white rounded-lg transition-colors font-semibold !no-underline"
>
                Rutinas
              </Link>
            </li>
            <li>
              <Link
                to="/pagar"
className="flex items-center gap-4 hover:bg-red-600 p-4 !text-gray-400 hover:text-white rounded-lg transition-colors font-semibold !no-underline"
>
                Pagar
              </Link>
            </li>

            {/* Opciones del entrenador */}
            <li>
              <Link
                to="/training"
className="flex items-center gap-4 hover:bg-red-600 p-4 !text-gray-400 hover:text-white rounded-lg transition-colors font-semibold !no-underline"
>
                Registrar rutinas
              </Link>
            </li>
            <li>
              <Link
                to="/Dieta"
className="flex items-center gap-4 hover:bg-red-600 p-4 !text-gray-400 hover:text-white rounded-lg transition-colors font-semibold !no-underline"
>
                Registrar dietas
              </Link>
            </li>
            <li>
              <Link
                to="/assign"
                className="flex items-center gap-4 hover:bg-red-600 p-4 !text-gray-400 hover:text-white rounded-lg transition-colors font-semibold !no-underline"
                >
                Asignar rutina
              </Link>
            </li>
            <li>
              <Link
                to="/assignDieta"
                className="flex items-center gap-4 hover:bg-red-600 p-4 !text-gray-400 hover:text-white rounded-lg transition-colors font-semibold !no-underline"              >
                Asignar dietas
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
className="flex items-center gap-4 hover:bg-red-600 p-4 !text-gray-400 hover:text-white rounded-lg transition-colors font-semibold !no-underline"
>
                Bloquear
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* BOTÓN HAMBURGUESA */}
      <button
        onClick={handleSidebar}
        className="block lg:hidden fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white rounded-full text-3xl p-3 shadow-lg z-50 transition-all duration-300"
      >
        {sidebar ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </>
  );
}

export default Sidebar;
