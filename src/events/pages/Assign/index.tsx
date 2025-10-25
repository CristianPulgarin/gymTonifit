import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../../../firebase";
import "./Assign.css";

const Assign = () => {
  const [users, setUsers] = useState([]);
  const [classs, setClass] = useState([]);
  const [selectedTraining, setSelectedTraining] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [availableTrainings, setAvailableTrainings] = useState([]);
  const [assignedTrainings, setAssignedTrainings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0a0f25] to-[#1a2238] py-10">
      {/* Caja principal */}
      <div className="bg-[#1f2a3e] border border-gray-400 rounded-xl p-10 w-full max-w-3xl shadow-lg">
        <h2 className="text-4xl text-center font-bold text-white mb-8">
          ASIGNAR RUTINAS
        </h2>

        <div className="space-y-8">
          {/* Selección de usuario */}
          <div>
            <label
              htmlFor="user"
              className="block text-lg font-semibold text-white mb-3 text-center"
            >
              Datos del Usuario
            </label>
            <select
              id="user"
              className="w-full bg-[#3b4658] text-white text-lg rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-400"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              <option value="">Selecciona un usuario</option>
              {/* Aquí irían los usuarios desde Firebase */}
            </select>
          </div>

          {/* Selección de entrenamiento */}
          <div>
            <label
              htmlFor="training"
              className="block text-lg font-semibold text-white mb-3 text-center"
            >
              Entrenamientos y horarios disponibles
            </label>
            <select
              id="training"
              className="w-full bg-[#3b4658] text-white text-lg rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-400"
              value={selectedTraining}
              onChange={(e) => setSelectedTraining(e.target.value)}
            >
              <option value="">Selecciona un entrenamiento</option>
              {/* Aquí irían los entrenamientos disponibles */}
            </select>
          </div>

          {/* Botón de asignación */}
          <div className="flex justify-center">
            <button className="w-full bg-[#e50914] text-white text-lg font-bold py-3 rounded-md hover:bg-red-700 transition-all duration-200">
              Asignar Entrenamiento
            </button>
          </div>
        </div>
      </div>

      {/* Caja secundaria: Clases asignadas */}
      <div className="bg-[#1f2a3e] border border-gray-400 rounded-xl p-8 w-full max-w-3xl shadow-lg mt-10">
        <h2 className="text-2xl uppercase font-bold text-white text-center mb-6">
          Clases asignadas
        </h2>
        <input
          type="text"
          placeholder="Buscar entrenamientos asignados"
          className="w-full bg-[#3b4658] text-white text-lg rounded-md p-3 outline-none placeholder-gray-300 focus:ring-2 focus:ring-blue-400 mb-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="space-y-4 text-white text-center">
          {/* Aquí aparecerán las clases asignadas */}
          <p className="text-gray-400 italic">
            No hay entrenamientos asignados aún.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assign;
