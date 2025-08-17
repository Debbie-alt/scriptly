"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  companyLogo: string;
  headline: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Matt Stith",
    role: "Voli Wellness",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    companyLogo: "/logo1.png",
    headline: "The fastest way to get a snapshot of our business",
    quote:
      "Scriptly is the fastest way to get a snapshot of our writing progress, deadlines, and revisions. It makes reporting and decision making much more efficient.",
  },
  {
    name: "Jane Doe",
    role: "EduTech",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    companyLogo: "/logo2.png",
    headline: "Reliable writing partner for students",
    quote:
      "They helped me finish my thesis on time. The process was smooth, communication was clear, and quality exceeded expectations.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  appendDots: (dots: React.ReactNode) => (
    <div>
      <ul className="flex justify-center gap-2 mt-6"> {dots} </ul>
    </div>
  ),
  customPaging: () => (
    <div className="w-3 h-3 rounded-full bg-gray-400 opacity-60 hover:opacity-100 transition-all" />
  ),
};

const TestimonialCarousel = () => {
  return (
    <section className="relative bg-[#111111] py-16 px-4 overflow-hidden">
 6 by7  bbbbbbbb      <div className="absolute -top-10 -left-10 w-80 h-80 bg-gradient-to-br from-[#0f0e47] via-purple-700 to-transparent rounded-full blur-3xl opacity-60 z-0" />
      <div className="max-w-4xl mx-auto relative z-10">
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-2">
              <div className="glassmorph-card rounded-2xl shadow-2xl p-6 md:p-10 flex flex-col gap-6 transition-all text-[#0f0e47] dark:text-purple-100"
                style={{
                  background: 'rgba(255,255,255,0.18)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 1.5px 8px 0 rgba(80, 0, 120, 0.10)',
                  border: '1.5px solid rgba(255,255,255,0.35)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderRadius: '1.5rem',
                  position: 'relative',
                }}
              >
                {/* Top bar */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover border-2 border-white/60 shadow-md"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{t.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-purple-300">{t.role}</p>
                    </div>
                  </div>
                  <Image
                    src={t.companyLogo}
                    alt="logo"
                    width={40}
                    height={40}
                  />
                </div>

                {/* Content split */}
                <div className="grid md:grid-cols-2 gap-6">
                  <h3 className="text-xl md:text-2xl font-semibold leading-snug">
                    {t.headline}
                  </h3>
                  <p className="text-gray-700 dark:text-purple-200 text-base leading-relaxed">
                    “{t.quote}”
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
