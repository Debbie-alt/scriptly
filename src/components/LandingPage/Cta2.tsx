"use client";


export default function SignUpCta() {
  return (
    <section className="relative py-24 flex items-center justify-center text-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: "url('/writers3.svg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold t mb-6">
          Sign up on Scriptly today
        </h2>
        <button  className="bg-[#0f0e47] hover:bg-indigo-700 text-white">
          Get Started
        </button>
      </div>
    </section>
  );
}
