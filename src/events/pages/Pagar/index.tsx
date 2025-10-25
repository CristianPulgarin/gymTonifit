// Importaciones de librerías, componentes y hooks
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import "./Pagar.css";

function Pagar() {
  // Hooks y variables
  const [estado, setEstado] = useState(true);

  const exito = () => {
    setEstado(!estado);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-6">
      <div className="bg-[#1e293b]/80 backdrop-blur-md border border-gray-500 w-full max-w-lg rounded-2xl shadow-2xl p-10 text-white">
        <h1 className="text-4xl text-center font-extrabold text-white mb-8 drop-shadow-md">
          PAGO
        </h1>

        <form className="space-y-6">
          {/* Campo Cuenta */}
          <div>
            <label
              htmlFor="cuenta"
              className="block mb-2 text-lg font-semibold text-gray-200"
            >
              Cuenta
            </label>
            <input
              type="number"
              id="cuenta"
              className="w-full bg-[#334155] text-gray-200 placeholder-gray-400 border border-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>

          {/* Campo Nombre */}
          <div>
            <label
              htmlFor="nombre"
              className="block mb-2 text-lg font-semibold text-gray-200"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="w-full bg-[#334155] text-gray-200 placeholder-gray-400 border border-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>

          {/* Campo Plan */}
          <div>
            <label
              htmlFor="plan"
              className="block mb-2 text-lg font-semibold text-gray-200"
            >
              Plan
            </label>
            <input
              type="text"
              id="plan"
              className="w-full bg-[#334155] text-gray-200 placeholder-gray-400 border border-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>

          {/* Botón de pago */}
          <div className="text-center">
            <button
              type="submit"
              onClick={exito}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-3 rounded-md shadow-lg transition-all"
            >
              Realizar pago
            </button>
          </div>

          {/* Estado del pago */}
          {estado ? (
            <div className="text-center text-gray-400 mt-4"></div>
          ) : (
            <div className="text-center text-green-400 font-semibold mt-4 animate-pulse">
              Pagado con éxito
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Pagar;
  