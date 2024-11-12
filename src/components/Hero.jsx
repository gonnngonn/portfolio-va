import React from "react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="section-container flex items-center justify-center hero-gradient text-white"
    >
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="/profile-photo.jpeg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-6xl font-bold mb-4">
          Gonzalo Benjamín Albornoz Gamboa
        </h1>
        <p className="text-2xl">Software Developer, 21 Years</p>
      </div>
    </section>
  );
};

export default Hero;
