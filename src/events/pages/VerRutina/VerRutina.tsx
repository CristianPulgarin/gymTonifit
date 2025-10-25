import React, { useState } from "react";
import "./Assign2.css";

const VerRutina = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-6">
      <div className="bg-[#1e293b]/80 backdrop-blur-md border border-gray-500 w-full max-w-3xl rounded-2xl shadow-2xl p-10 text-white">
        {/* Título principal */}
        <h1 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-md">
          RUTINAS
        </h1>

        {/* Formulario de asignación */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-center text-gray-200 mb-6">
            Asignar nueva rutina
          </h2>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <select
              className="w-full md:w-1/2 bg-[#334155] text-gray-200 placeholder-gray-400 border border-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="">Seleccionar usuario</option>
              <option value="1">Cristian David</option>
              <option value="2">Laura Gómez</option>
            </select>

            <select
              className="w-full md:w-1/2 bg-[#334155] text-gray-200 placeholder-gray-400 border border-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="">Seleccionar entrenamiento</option>
              <option value="pecho">Pecho</option>
              <option value="espalda">Espalda</option>
            </select>
          </div>

          <div className="text-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-3 rounded-md shadow-lg transition-all">
              Asignar rutina
            </button>
          </div>
        </section>

        {/* Sección de clases asignadas */}
        <section>
          <h2 className="text-2xl font-bold text-center text-gray-200 mb-6">
            Clases asignadas
          </h2>

          <input
            type="text"
            placeholder="Buscar entrenamientos asignados..."
            className="w-full bg-[#334155] text-gray-200 placeholder-gray-400 border border-gray-500 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-red-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="space-y-6">
            <div className="bg-[#334155] border border-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                Nombre del Entrenamiento: Pecho
              </h3>
              <p className="text-gray-300">
                <strong>Cliente:</strong> Cristian David
              </p>
              <p className="text-gray-300">
                <strong>Categoría:</strong> Pecho
              </p>
              <p className="text-gray-300">
                <strong>Hora de inicio:</strong> 8:00 AM
              </p>
              <p className="text-gray-300">
                <strong>Día:</strong> 20
              </p>
              <p className="text-gray-300">
                <strong>Guía:</strong>{" "}
                <a
                  href="#"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver guía
                </a>
              </p>

              <div className="text-right mt-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold shadow-md transition-all">
                  Cancelar clase del cliente
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VerRutina;
