import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import "./IniciarSesion.css";

function IniciarSesion({ setUserRole }: any) {
  const firestore = getFirestore();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  interface UserData {
    id?: string;
    nombre?: string;
    correo?: string;
    rol?: string;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700">
        <h1 className="text-4xl text-center font-extrabold text-white mb-8 drop-shadow-lg">
          Iniciar sesión
        </h1>

        <form className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-200 mb-2"
            >
              Correo
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-white/20 text-white placeholder-gray-300 py-2 px-4 rounded-lg outline-none focus:ring-2 focus:ring-red-500 focus:bg-white/30 transition-all"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          {/* Contraseña */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-semibold text-gray-200 mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full bg-white/20 text-white placeholder-gray-300 py-2 px-4 rounded-lg outline-none focus:ring-2 focus:ring-red-500 focus:bg-white/30 transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Error */}
          {loginError && (
            <p className="text-red-400 text-sm font-semibold text-center">
              {loginError}
            </p>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold uppercase tracking-wide shadow-lg transition-transform transform hover:scale-[1.02]"
            >
              Ingresar
            </button>
          </div>

          <div className="text-center">
            <Link
              to="/Actualizar"
              className="text-gray-300 hover:text-red-400 font-medium transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IniciarSesion;
