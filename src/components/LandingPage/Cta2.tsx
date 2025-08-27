"use client";


export default function SignUpCta() {
  return (
    <section className="relative py-24 flex items-center justify-center text-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm brightness-50"
        style={{ backgroundImage: "url('/writers1.svgg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-white mb-6">
          Sign up on Scriplty today
        </h2>
        <button  className="bg-[#0f0e47] hover:bg-indigo-700 text-white">
          Get Started
        </button>
      </div>
    </section>
  );
}
