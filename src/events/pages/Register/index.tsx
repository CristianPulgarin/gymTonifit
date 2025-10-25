import React, { useState } from "react";

function Register() {
  const [showTrainerPassword, setShowTrainerPassword] = useState(false);

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShowTrainerPassword(e.target.value === "entrenador");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md border border-gray-700 shadow-xl rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-extrabold text-center mb-8">
          <span className="text-red-500">REGISTRAR</span> DATOS
        </h1>

        <form className="space-y-5">
          {[
            { id: "name", label: "Nombre completo", type: "text" },
            { id: "cc", label: "Cédula", type: "number" },
            { id: "userName", label: "Usuario", type: "text" },
            { id: "edad", label: "Edad", type: "number" },
            { id: "estatura", label: "Estatura", type: "number" },
            { id: "email", label: "Email", type: "email" },
            { id: "password", label: "Contraseña", type: "password" },
          ].map(({ id, label, type }) => (
            <div key={id}>
              <label
                htmlFor={id}
                className="block mb-1 font-semibold tracking-wide text-gray-200"
              >
                {label}
              </label>
              <input
                id={id}
                type={type}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-red-500 outline-none transition"
              />
            </div>
          ))}

          <div>
            <label
              htmlFor="rol"
              className="block mb-1 font-semibold tracking-wide text-gray-200"
            >
              Rol
            </label>
            <select
              id="rol"
              onChange={handleRoleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-red-500 outline-none transition"
            >
              <option value="usuario">Usuario</option>
              <option value="entrenador">Entrenador</option>
            </select>
          </div>

          {showTrainerPassword && (
            <div>
              <label
                htmlFor="trainerPassword"
                className="block mb-1 font-semibold tracking-wide text-gray-200"
              >
                Contraseña Entrenador
              </label>
              <input
                id="trainerPassword"
                type="password"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-red-500 outline-none transition"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-md transition transform hover:scale-[1.02]"
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
