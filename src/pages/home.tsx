// src/pages/Home.tsx
import { motion } from "framer-motion";
import profLeo from "@/assets/prof-leo-2.jpeg";

const disponibilidades = [
  {
    title: "Segunda a Sexta",
    details: "8h - 12h",
    color: "text-luxury-green",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Sábados",
    details: "9h - 13h",
    color: "text-luxury-green",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Domingos e feriados",
    details: "Indisponível",
    color: "text-red-600",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  },
];

export function Home() {
  return (
    <main className="bg-offwhite text-gray-900 font-raleway min-h-screen pt-20">
      
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center gap-16"
      >
        <div className="flex-1 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-playfair font-extrabold leading-tight text-luxury-green mb-6 tracking-tight">
            Domine o Inglês com <br /> <span className="text-gray-900">Leonardo Campos</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed tracking-wide">
            Professor com anos de experiência dedicados a tornar o aprendizado do inglês fácil, dinâmico e eficaz. 
            Aulas adaptadas ao seu ritmo e objetivo, com foco total em conversação e prática real.
          </p>
          <button
            className="bg-luxury-green text-white text-lg font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-[#014522] focus:outline-none focus:ring-4 focus:ring-luxury-green/50 transition"
          >
            Agende Sua Aula Agora
          </button>
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 max-w-md rounded-3xl overflow-hidden shadow-2xl ring-1 ring-luxury-green/10 relative"
        >
          <img src={profLeo} alt="Professor Leonardo Campos" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      </motion.section>

      {/* Disponibilidades */}
      <section className="bg-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-6 md:px-12"
        >
          <h2 className="text-4xl font-oswald font-bold text-luxury-green border-b-4 border-luxury-green inline-block pb-3 mb-12">
            Horários Disponíveis
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {disponibilidades.map(({ title, details, icon, color }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.05 }}
                className="bg-offwhite rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100"
              >
                <div className={`${color} mb-4`}>{icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-lg font-light">{details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Formações */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl mx-auto px-6 md:px-12"
        >
          <h2 className="text-4xl font-oswald font-bold text-luxury-green border-b-4 border-luxury-green inline-block pb-3 mb-12">
            Formações Acadêmicas
          </h2>
          <div className="space-y-10 text-gray-700 text-lg font-light leading-relaxed tracking-wide">
            <article className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <h3 className="font-semibold text-xl mb-1">Licenciatura em Letras - Inglês</h3>
              <p>Universidade XYZ – Formação sólida e completa, com foco em linguística e didática para ensino de inglês.</p>
            </article>
            <article className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <h3 className="font-semibold text-xl mb-1">Certificação CELTA</h3>
              <p>Cambridge University – Certificação internacional reconhecida, especializada no ensino da língua inglesa.</p>
            </article>
            <article className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <h3 className="font-semibold text-xl mb-1">Mestrado em Linguística Aplicada</h3>
              <p>Universidade ABC – Pesquisa avançada em aquisição de língua e metodologias de ensino inovadoras.</p>
            </article>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
