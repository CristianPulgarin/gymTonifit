import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#0b1120] to-[#000] text-white">
        <div className="w-full h-[350px] md:h-[500px] overflow-hidden flex">
          <img
            className="w-full object-cover animate-fade rounded-lg opacity-80"
            src="https://cdn.create.vista.com/downloads/dde5b43a-a1b0-493d-903c-3f63dc571189_1024.jpeg"
            alt="Entrenamiento"
          />
          <img
            className="w-full object-cover animate-fade rounded-lg hidden md:block opacity-80"
            src="https://img.freepik.com/vector-premium/conjunto-diseno-camiseta-citas-tipografia-fitness-gimnasio-color-negro-rojo_514407-104.jpg"
            alt="Diseño Fitness"
          />
        </div>

        <section className="py-16 backdrop-blur-md">
          <h1 className="text-center text-4xl font-bold mb-10 text-white drop-shadow-md">
            Nuestros Entrenadores
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
            {[
              {
                img: "https://img.freepik.com/foto-gratis/adulto-joven-haciendo-deporte-interior-gimnasio_23-2149205542.jpg?semt=ais_hybrid&w=740&q=80",
                nombre: "Juan Lopez",
                desc: "Experto en alimentación y hábitos saludables",
              },
              {
                img: "https://fhinstitute.com/wp-content/uploads/2023/02/10-tips-para-ser-el-mejor-entrenador-de-tu-gimnasio-scaled.jpg",
                nombre: "Carlos Suarez",
                desc: "Especialista en aumento de masa muscular",
              },
              {
                img: "https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1510/wavebreakmediamicro151012692/47306175-handsome-trainer-smiling-at-camera-at-the-gym.jpg",
                nombre: "Sebastian Ramirez",
                desc: "Enfocado en fuerza y rendimiento físico",
              },
              {
                img: "https://mercadofitness.com/wp-content/uploads/2021/09/Dos-certificaciones-norteamericanas-de-entrenadores-llegan-a-Centroamerica-1.jpg",
                nombre: "Alfredo Morelos",
                desc: "Experto en pérdida de peso y tonificación",
              },
            ].map((trainer) => (
              <div
                key={trainer.nombre}
                className="bg-white/10 border border-gray-600 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all p-4 text-center"
              >
                <img
                  src={trainer.img}
                  alt={trainer.nombre}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h2 className="font-bold text-xl">{trainer.nombre}</h2>
                <p className="text-gray-300">{trainer.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* === RUTINAS === */}
        <section className="py-16">
          <h1 className="text-center text-4xl font-bold mb-10 drop-shadow-md">
            Rutinas
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-8">
            {[
              {
                img: "https://i.blogs.es/947e13/six-pack/1366_2000.jpeg",
                txt: "Pecho",
              },
              {
                img: "https://i.blogs.es/ed141c/pexels-pikx-by-panther-2092479/1366_2000.jpeg",
                txt: "Espalda",
              },
              {
                img: "https://i.ytimg.com/vi/Xv4qExTKxbU/maxresdefault.jpg",
                txt: "Pierna",
              },
              {
                img: "https://thumbs.dreamstime.com/b/hombres-musculares-entrenando-en-gimnasios-haciendo-ejercicios-para-bicicletas-fuertes-que-construyen-el-cuerpo-muestran-b%C3%ADceps-164090981.jpg",
                txt: "Bíceps",
              },
              {
                img: "https://t2.uc.ltmcdn.com/es/posts/6/6/0/los_mejores_ejercicios_para_los_hombros_42066_orig.jpg",
                txt: "Hombro",
              },
            ].map((rutina) => (
              <div
                key={rutina.txt}
                className="bg-white/10 border border-gray-700 rounded-2xl shadow-md hover:shadow-lg overflow-hidden transform hover:scale-105 transition-all"
              >
                <img
                  src={rutina.img}
                  alt={rutina.txt}
                  className="w-full h-44 object-cover opacity-90"
                />
                <p className="text-center py-3 font-semibold text-white">
                  {rutina.txt}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* === PLANES === */}
        <section className="py-16 bg-black/40 backdrop-blur-md border-t border-gray-800">
          <h1 className="text-center text-4xl font-bold mb-10 drop-shadow-md">
            Planes
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            {[
              {
                titulo: "Básico",
                beneficios: [
                  "Entrada a las instalaciones",
                  "Acceso a todas las máquinas",
                  "Derecho a un tutor",
                ],
              },
              {
                titulo: "VIP",
                beneficios: [
                  "Todos los beneficios del básico",
                  "Acceso a la zona VIP",
                  "Entrada a un amigo gratis",
                ],
              },
              {
                titulo: "Anual VIP",
                beneficios: [
                  "Ahorra más dinero",
                  "Acceso a la zona VIP",
                  "Entrada para un amigo gratis",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.titulo}
                className="bg-white/10 border border-gray-600 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all p-6 text-center flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-4">{plan.titulo}</h2>
                  <h3 className="text-lg font-semibold text-red-500 mb-3">
                    Beneficios
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    {plan.beneficios.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 bg-[#E50914] hover:bg-[#b0070f] text-white px-6 py-2 rounded-full font-semibold transition-all">
                  <Link to="/pagar#top">Pagar</Link>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
