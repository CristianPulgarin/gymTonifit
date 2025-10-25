//Importaciones de librerías, componentes y hooks
import React from "react";

function Dieta() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#0a0f25] to-[#1a2238]">
      <div className="bg-[#1f2a3e] border border-gray-400 rounded-xl p-10 w-full max-w-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          REGISTRAR DIETAS
        </h1>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="dieta"
              className="block mb-2 text-lg font-semibold text-white"
            >
              Nombre de la dieta
            </label>
            <input
              type="text"
              id="dieta"
              className="w-full bg-[#3b4658] text-white text-lg rounded-md p-3 outline-none placeholder-gray-300 focus:ring-2 focus:ring-blue-400"
              placeholder="Ejemplo: Hipercalórica"
              required
            />
          </div>

          <div>
            <label
              htmlFor="cantidad"
              className="block mb-2 text-lg font-semibold text-white"
            >
              Cantidad
            </label>
            <input
              type="text"
              id="cantidad"
              className="w-full bg-[#3b4658] text-white text-lg rounded-md p-3 outline-none placeholder-gray-300 focus:ring-2 focus:ring-blue-400"
              placeholder="Ejemplo: 3 porciones diarias"
              required
            />
          </div>

          <div>
            <label
              htmlFor="suplemento"
              className="block mb-2 text-lg font-semibold text-white"
            >
              Suplemento
            </label>
            <input
              type="text"
              id="suplemento"
              className="w-full bg-[#3b4658] text-white text-lg rounded-md p-3 outline-none placeholder-gray-300 focus:ring-2 focus:ring-blue-400"
              placeholder="Ejemplo: Proteína Whey"
              required
            />
          </div>

          <div>
            <label
              htmlFor="horario"
              className="block mb-2 text-lg font-semibold text-white"
            >
              Horario
            </label>
            <input
              id="horario"
              name="horario"
              placeholder="Ejemplo: 8:00 AM - 10:00 AM"
              className="w-full bg-[#3b4658] text-white text-lg rounded-md p-3 outline-none placeholder-gray-300 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-[#e50914] text-white text-lg font-bold py-3 rounded-md hover:bg-red-700 transition-all duration-200"
            >
              CREAR DIETA
            </button>
          </div>

          <div className="text-center">
            <a href="#" className="text-blue-400 text-sm hover:underline">
              ¿Necesitas ayuda?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Dieta;
