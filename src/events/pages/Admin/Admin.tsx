import React, { useState } from "react";
import Modal from "react-modal";

const Admin = () => {
  const [blockReason, setBlockReason] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1f2e] to-[#0e121a]">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-10 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Bloqueo de Usuarios
        </h1>

        <input
          type="text"
          placeholder="Buscar usuario..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 px-4 py-3 rounded-xl mb-6 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all"
        />

        <div className="grid gap-6">
          <div className="bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="text-xl font-semibold text-white">Cristian</p>
              <p className="text-sm text-gray-300">Estado: Activo</p>
            </div>

            <div className="mt-4 sm:mt-0 flex justify-center sm:justify-end w-full sm:w-auto">
              <button
                onClick={() => setModalIsOpen(true)}
                className="w-full sm:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                Bloquear
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="bg-[#1c1f2b] border border-white/20 rounded-2xl p-6 max-w-lg mx-auto shadow-2xl text-white"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Escribe el motivo del bloqueo
        </h2>

        <textarea
          className="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Motivo del bloqueo..."
          value={blockReason}
          onChange={(e) => setBlockReason(e.target.value)}
        />

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setModalIsOpen(false)}
            className="px-4 py-2 rounded-lg bg-gray-500 hover:bg-gray-600 text-white"
          >
            Cancelar
          </button>
          <button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 font-bold text-white">
            Confirmar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Admin;
