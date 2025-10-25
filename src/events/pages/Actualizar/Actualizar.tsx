import React, { useState } from "react";
import { FirebaseContext } from "../../../firebase";
import "./Register2.css";

function Actualizar() {
  const [userName, setUserName] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b1221] via-[#101828] to-[#0b1221] px-6 py-10">
      <div className="w-full max-w-3xl bg-[#1b2537]/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-500 p-10">
        <h1 className="text-4xl font-extrabold text-center text-white mb-10">
          Modificar datos del usuario
        </h1>

        <div className="mb-12">
          <label
            htmlFor="userName"
            className="block mb-3 text-lg font-semibold text-white"
          >
            Usuario a buscar
          </label>
          <div className="flex gap-4">
            <input
              type="text"
              id="userName"
              className="flex-1 bg-[#2b364d] text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all rounded-lg px-4 py-3 outline-none"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Ingresa el usuario..."
            />
            <button
              type="button"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
            >
              Buscar
            </button>
          </div>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-lg font-semibold text-white"
            >
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-[#2b364d] text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg px-4 py-3 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="cc"
              className="block mb-2 text-lg font-semibold text-white"
            >
              Cédula
            </label>
            <input
              type="number"
              id="cc"
              className="w-full bg-[#2b364d] text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg px-4 py-3 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="edad"
              className="block mb-2 text-lg font-semibold text-white"
            >
              Edad
            </label>
            <input
              type="number"
              id="edad"
              className="w-full bg-[#2b364d] text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg px-4 py-3 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="estatura"
              className="block mb-2 text-lg font-semibold text-white"
            >
              Estatura
            </label>
            <input
              type="number"
              id="estatura"
              className="w-full bg-[#2b364d] text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg px-4 py-3 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-semibold text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-[#2b364d] text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg px-4 py-3 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-lg font-semibold text-white"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full bg-[#2b364d] text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg px-4 py-3 outline-none"
              placeholder="Dejar vacío para no cambiar"
            />
          </div>
        </form>

        <div className="flex justify-center pt-10">
          <button
            type="submit"
            className="w-full md:w-1/2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-lg transition transform hover:scale-[1.02]"
          >
            Actualizar datos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Actualizar;
