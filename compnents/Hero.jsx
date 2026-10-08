import React from 'react'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Soft background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
          Design freely.
          <br />
          <span className="text-indigo-500">Create beautifully.</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Lumina is a free, powerful UI/UX design tool for designers and teams.
          No limits. No watermarks.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cta"
            className="px-8 py-3.5 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-200"
          >
            Start Designing Free
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 rounded-full bg-white text-gray-700 font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero