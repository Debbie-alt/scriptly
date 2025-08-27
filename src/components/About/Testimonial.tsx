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
    companyLogo: "/logo2.png",
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
    <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-500 opacity-60 hover:opacity-100 transition-all" />
  ),
};

const TestimonialCarousel = () => {
  return (
<section className="relative bg-gray-50 dark:bg-[#111111] py-16 px-4 overflow-hidden">
  {/* Decorative blur in light mode */}
  <div className="block absolute -top-10 -left-10 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl"></div>
  <div className="block absolute -bottom-16 -right-16 w-80 h-80 bg-blue-800/20 rounded-full blur-3xl"></div>
      <div className="max-w-4xl mx-auto ">
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-2">
              <div
                className="
                  rounded-2xl shadow-xl mb-5 p-6 md:p-10 flex flex-col gap-6 
                  transition-all 
                  bg-white dark:bg-[#1a1a1a] 
                  border border-gray-200 dark:border-gray-700
                  backdrop-blur-lg
                "
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
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t.role}
                      </p>
                    </div>
                  </div>
                  <Image src={t.companyLogo} alt="logo" width={40} height={40} />
                </div>

                {/* Content split */}
                <div className="grid md:grid-cols-2 gap-6">
                  <h3 className="text-xl md:text-2xl font-semibold leading-snug text-[#0f0e47] dark:text-white">
                    {t.headline}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
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
