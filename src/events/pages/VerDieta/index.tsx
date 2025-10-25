import React, { useState, useEffect, useContext } from "react";
import "./AssignDieta2.css";
import { FirebaseContext } from "../../../firebase";

const VerDieta = () => {
  const [users, setUsers] = useState([]);
  const [classs, setClass] = useState([]);
  const [selectedDieta, setSelectedDieta] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [availableDietas, setAvailableDietas] = useState([]);
  const [assignedDietas, setAssignedDietas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchUserTerm, setSearchUserTerm] = useState("");

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-6">
      <div className="bg-[#1e293b]/80 backdrop-blur-md border border-gray-500 w-full max-w-3xl rounded-2xl shadow-2xl p-10 text-white">
        {/* Título principal */}
        <h2 className="text-4xl text-center font-extrabold text-white mb-8 drop-shadow-md">
          ASIGNAR DIETAS
        </h2>

        <div className="space-y-4 mb-10">
          {/* Aquí puedes agregar tus selects o campos de asignación si los tienes */}
        </div>

        {/* Sección de clases asignadas */}
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-200 mb-6">
            Clases asignadas
          </h2>

          {/* Campo de búsqueda */}
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Buscar en clases asignadas..."
              className="w-1/2 bg-[#334155] text-gray-200 placeholder-gray-400 border border-gray-500 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={searchUserTerm}
              onChange={(e) => {
                setSearchUserTerm(e.target.value);
                console.log("Filtro de clases:", e.target.value);
              }}
            />
          </div>

          {/* Lista de dietas asignadas */}
          <div className="space-y-6">
            <div className="bg-[#334155] border border-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                Dieta: <span className="text-gray-200">Atún</span>
              </h3>
              <p className="text-gray-300">
                <strong>Cliente:</strong> Cristian David
              </p>
              <p className="text-gray-300">
                <strong>Horario:</strong> 10:00 AM
              </p>

              <div className="text-right mt-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold shadow-md transition-all">
                  Cancelar clase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerDieta;
