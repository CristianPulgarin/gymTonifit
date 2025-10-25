import React, { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import "./Training.css";
import { FirebaseContext } from "../../../firebase";

function Trainig() {
  const [trainings, setTrainings] = useState([]);
  const daysOfWeek = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b1221] via-[#101828] to-[#0b1221] px-6 py-12">
      <div className="w-full max-w-3xl bg-[#1b2537]/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-600 p-10">
        <h1 className="text-4xl font-extrabold text-center text-white mb-10 tracking-wide">
          Crear Rutina
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="md:col-span-2">
            <label
              htmlFor="name"
              className="block mb-2 text-lg font-semibold text-white"
            >
              Nombre de la rutina
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-[#2b364d] text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all rounded-lg px-4 py-3 outline-none"
              placeholder="Ejemplo: Full Body"
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-lg font-semibold text-white"
            >
              Descripción de la rutina
            </label>
            <textarea
              id="description"
              name="description"
              required
              className="w-full bg-[#2b364d] text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg px-4 py-3 outline-none"
              placeholder="Describe brevemente los ejercicios o el objetivo..."
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-lg font-semibold text-white"
            >
              Tipo de ejercicio
            </label>
            <select
              id="category"
              name="category"
              required
              className="w-full bg-[#2b364d] text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg px-4 py-3 outline-none"
            >
              <option value="">Selecciona una categoría</option>
              <option value="Cardio">Cardio</option>
              <option value="Pierna">Pierna</option>
              <option value="Brazos">Brazos</option>
              <option value="Abdomen">Abdomen</option>
              <option value="Pecho">Pecho</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="guia"
              className="block mb-2 text-lg font-semibold text-white"
            >
              Link guía
            </label>
            <select
              id="guia"
              name="guia"
              required
              className="w-full bg-[#2b364d] text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg px-4 py-3 outline-none"
            >
              <option value="">Selecciona la guía</option>
              <option value="https://www.youtube.com/watch?v=IQzGRo3F0Ys&ab_channel=GymTopz">
                Brazo
              </option>
              <option value="https://www.youtube.com/watch?v=QOVXlsAfOT0&ab_channel=BUFFAcademyAPP">
                Cardio
              </option>
              <option value="https://www.youtube.com/watch?v=x7zLcAWueAc&ab_channel=BUFFAcademyAPP">
                Pecho
              </option>
              <option value="https://www.youtube.com/watch?v=Z2X5w4_eiH8&ab_channel=GymTopz">
                Pierna
              </option>
              <option value="https://www.youtube.com/watch?v=L1kn_0zO6VU&ab_channel=CarlosBelcast">
                Abdomen
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="day"
              className="block mb-2 text-lg font-semibold text-white"
            >
              Día de la rutina
            </label>
            <select
              id="day"
              name="day"
              required
              className="w-full bg-[#2b364d] text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg px-4 py-3 outline-none"
            >
              <option value="">Elige un día</option>
              {daysOfWeek.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="startHour"
              className="block mb-2 text-lg font-semibold text-white"
            >
              Hora de inicio
            </label>
            <select
              id="startHour"
              name="startHour"
              required
              className="w-full bg-[#2b364d] text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg px-4 py-3 outline-none"
            >
              <option value="">Selecciona una hora</option>
              <option value="8:00 AM">8:00 AM</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
            </select>
          </div>
        </form>

        <div className="flex justify-center pt-10">
          <button
            type="submit"
            className="w-full md:w-1/2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-lg transition transform hover:scale-[1.02]"
          >
            Crear rutina
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trainig;
