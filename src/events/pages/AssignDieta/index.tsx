import React, { useState } from "react";

const AssignDieta = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedDieta, setSelectedDieta] = useState("");
  const [searchUserTerm, setSearchUserTerm] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1f2e] to-[#0e121a]">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-10 w-full max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Asignar Dietas
        </h2>

        {/* Formulario principal */}
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-white mb-2">
              Usuario
            </label>
            <input
              type="text"
              placeholder="Selecciona un usuario"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-white mb-2">
              Dieta disponible
            </label>
            <input
              type="text"
              placeholder="Selecciona una dieta"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all"
              value={selectedDieta}
              onChange={(e) => setSelectedDieta(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-3 rounded-xl transition-transform transform hover:scale-105 shadow-lg"
          >
            Asignar Dieta
          </button>
        </form>

        {/* Sección de dietas asignadas */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-white text-center mb-4">
            Dietas asignadas
          </h3>

          <input
            type="text"
            placeholder="Buscar en dietas asignadas..."
            className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 px-4 py-3 rounded-xl mb-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all"
            value={searchUserTerm}
            onChange={(e) => setSearchUserTerm(e.target.value)}
          />

          <div className="bg-white/10 border border-white/20 rounded-xl p-5 shadow-lg">
            <h4 className="text-xl font-semibold text-white mb-1">Dieta: ATUN</h4>
            <p className="text-gray-300">
              <strong>Cliente:</strong> Cristian Pulgarin
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Horario:</strong> 8:00 AM
            </p>
            <button className="bg-red-700 hover:bg-red-800 text-white font-semibold px-5 py-2 rounded-lg transition-transform transform hover:scale-105">
              Cancelar Dieta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignDieta;
