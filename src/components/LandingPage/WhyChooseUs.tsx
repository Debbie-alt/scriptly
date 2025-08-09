const features = [
  {
    title: "Healthcare-Focused Logistics",
    description:
      "Purpose-built to support medicine delivery, sample pickup, emergency transportation, and mobile care tracking.",
  },
  {
    title: "Pan-African Volunteer & Fleet Network",
    description:
      "From ambulance drivers to motorbike couriers—we power health delivery with a growing community.",
  },
  {
    title: "Real-Time Tracking",
    description:
      "Patients and providers can track every delivery, visit, or emergency dispatch with ease.",
  },
  {
    title: "Seamless Health360 Integration",
    description:
      "Fully embedded in hospitals, pharmacies, and labs via the Health360 platform.",
  },
  {
    title: "Trusted & Secure",
    description:
      "HIPAA-compliant data handling and vetted drivers ensure safety and privacy.",
  },
  {
    title: "24/7 Support",
    description:
      "Emergencies don’t wait. Neither do we. Round-the-clock dispatch and support.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-[#F5F5F5] px-4  sm:px-12 md:px-16 py-16 ">
      <h2 className="text-3xl md:text-4xl text-cent  font-semibold mb-2 text-black">
        Why Choose <span className="text-[#505081]">Script</span>
        <span className="text-[#505081]">ly</span>?
      </h2>
      <p className=" mb-10 text-base md:text-lg text-black text-">
        Built for healthcare. Powered by people
      </p>

      <div className="grid grid-cols-2 gap-3 md:gap-6 ">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-sm p-6 text-center items-start gap-4"
          >
            <div className="min-w-[40px] mt-1">
              <img src="/label.png" alt="" className="w-10 h-10 mx-auto mb-5" />
            </div>
            <div>
              <h4 className="font-semibold text-black text-base mb-1">{feature.title}</h4>
              <p className="tracking-wide text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;