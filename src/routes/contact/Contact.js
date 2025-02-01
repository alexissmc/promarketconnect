import React, { useEffect } from "react";
import { motion } from "framer-motion";
import imagen4 from "../../assets/images/servicio/Imagen4.jpg"; 
import imagen1 from "../../assets/images/servicio/Imagen9.jpg"; 
import imagen3 from "../../assets/images/servicio/Imagen3.jpg"; 

const Contact = () => {
  useEffect(() => {
    document.title = "MarketConnect";

  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.main
    className="menu-main p-4 bg-[#000000] text-white min-h-screen w-full"
    initial={{ opacity: 0, translateX: -300 }}
    animate={{ opacity: 1, translateX: 0 }}

    exit={{ opacity: 0, translateX: -300 }}
    transition={{ duration: 1 }}
    >
  <section className="banner relative w-full h-[100vh]">
  <div className="w-full h-full">
    <img
      className="w-full h-full object-cover rounded-b-[250px] opacity-60"
      src={imagen3}
      alt="Banner"
    />
  </div>
</section>

<section className="info-section py-8 px-8 md:px-16 bg-black min-h-screen flex items-center justify-center">
  <div className="flex flex-col md:flex-row gap-8 items-center justify-center h-full w-full">
    <div className="md:w-1/3 w-full flex-shrink-0 flex items-center justify-center">
      <img
        src={imagen1}
        alt="Imagen destacada"
        className="rounded-lg shadow-lg object-cover w-4/5 h-auto"
      />
    </div>

    <div className="md:w-2/3 w-full bg-black rounded-lg p-8 flex flex-col items-start text-left">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Reseña de la empresa
      </h1>
      <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
        En la actualidad, las redes sociales están inundadas de diferentes personalidades que ofrecen consejos sobre cómo importar desde China. Sin embargo, en nuestra experiencia, hemos descubierto que estos consejos no son suficientes para lograr una importación exitosa. Muchas veces, estos "expertos" proporcionan información engañosa, generando confianza en los compradores, pero a medida que realizas tus compras y cotizaciones, te das cuenta de que la realidad es muy diferente.
      </p>
      <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
        MarketConnect no es una empresa diseñada simplemente para enseñar. Somos una empresa dedicada a ayudar y colaborar estrechamente con nuestros clientes como socios. Nos enorgullece ver a nuestros clientes alcanzar sus metas y, sobre todo, generar utilidades.
      </p>
      <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
        En MarketConnect, te brindamos apoyo en todas las etapas de tu importación desde China. Te ayudamos a realizar compras inteligentes, identificando los productos que puedes adquirir de acuerdo a tu presupuesto. Además, mantenemos una comunicación constante contigo, proporcionándote información sobre la entrega de tus productos a la bodega y asegurándonos de que la calidad sea la esperada.
      </p>
    </div>
  </div>
</section>


<section className="values bg-black py-12">
  <div className="container mx-auto px-8 flex flex-col items-center">
    <h1 className="text-4xl sm:text-5xl mb-8 font-extrabold text-white text-center">
      Nuestros Valores
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="value-item p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
        <div className="icon bg-blue-600 rounded-full p-4 mx-auto mb-6 w-16 h-16 flex items-center justify-center shadow-md">
          🌟
        </div>
        <h2 className="text-lg font-bold text-white text-center mb-2">Transparencia</h2>
        <p className="text-base text-gray-400 text-center">
          Ofrecemos información clara y confiable.
        </p>
      </div>

      <div className="value-item p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
        <div className="icon bg-blue-600 rounded-full p-4 mx-auto mb-6 w-16 h-16 flex items-center justify-center shadow-md">
          🤝
        </div>
        <h2 className="text-lg font-bold text-white text-center mb-2">Compromiso</h2>
        <p className="text-base text-gray-400 text-center">
          Nos enfocamos en el éxito de nuestros clientes.
        </p>
      </div>

      <div className="value-item p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
        <div className="icon bg-blue-600 rounded-full p-4 mx-auto mb-6 w-16 h-16 flex items-center justify-center shadow-md">
          💡
        </div>
        <h2 className="text-lg font-bold text-white text-center mb-2">Innovación</h2>
        <p className="text-base text-gray-400 text-center">
          Buscamos soluciones adaptadas a tus necesidades.
        </p>
      </div>

      <div className="value-item p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
        <div className="icon bg-blue-600 rounded-full p-4 mx-auto mb-6 w-16 h-16 flex items-center justify-center shadow-md">
          🛡
        </div>
        <h2 className="text-lg font-bold text-white text-center mb-2">Ética</h2>
        <p className="text-base text-gray-400 text-center">
          Actuamos con honestidad y profesionalismo.
        </p>
      </div>

      <div className="value-item p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
        <div className="icon bg-blue-600 rounded-full p-4 mx-auto mb-6 w-16 h-16 flex items-center justify-center shadow-md">
          ❤
        </div>
        <h2 className="text-lg font-bold text-white text-center mb-2">Empatía</h2>
        <p className="text-base text-gray-400 text-center">
          Entendemos tus necesidades y objetivos.
        </p>
      </div>

      <div className="value-item p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
        <div className="icon bg-blue-600 rounded-full p-4 mx-auto mb-6 w-16 h-16 flex items-center justify-center shadow-md">
          🛠
        </div>
        <h2 className="text-lg font-bold text-white text-center mb-2">Calidad</h2>
        <p className="text-base text-gray-400 text-center">
          Garantizamos productos con estándares altos.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="providers bg-black py-12">
  <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center gap-12">
    <div className="providers-content text-white flex flex-col items-center lg:items-start lg:w-1/2">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-500 mb-6 text-center lg:text-left">
        Nuestros Proveedores
      </h1>
      <p className="text-base sm:text-lg text-gray-400 leading-relaxed tracking-wide text-center lg:text-left">
        Contamos con una amplia red de proveedores confiables en China. Nos encargamos de investigar y seleccionar a los proveedores adecuados para tus necesidades, asegurándonos de su reputación, calidad de productos y confiabilidad.
      </p>
    </div>

    <div className="providers-img lg:w-1/2 flex justify-center">
      <img
        src={imagen4}
        alt="Nuestros Proveedores"
        className="rounded-xl shadow-lg object-cover w-full sm:w-[400px] md:w-[500px] lg:w-[600px] transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      />
    </div>
  </div>
</section>


    </motion.main>
  );
};

export default Contact;