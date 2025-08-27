'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Slider = dynamic(() => import('react-slick'), { ssr: false })

type Testimonial = {
  id: number
  logo1: string
  logo2: string
  quote: string
  author: string
  position: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    logo1: '/deliverect.png', 
    logo2: '/logo2.png',
    quote:
      'We are always expanding. We will continue supporting customers around the world, and G-P will continue to be a valued partner as we discover new markets to grow into.',
    author: 'Ingrid De Clercq',
    position: 'Chief People Officer at Deliverect',
  },
   {
    id: 2,
    logo1: '/deliverect.png', 
    logo2: '/logo2.png',
    quote:
      'We are always expanding. We will continue supporting customers around the world, and G-P will continue to be a valued partner as we discover new markets to grow into.',
    author: 'Ingrid De Clercq',
    position: 'Chief People Officer at Deliverect',
  },
   {
    id: 3,
    logo1: '/deliverect.png', 
    logo2: '/logo2.png',
    quote:
      'We are always expanding. We will continue supporting customers around the world, and G-P will continue to be a valued partner as we discover new markets to grow into.',
    author: 'Ingrid De Clercq',
    position: 'Chief People Officer at Deliverect',
  },
]

type ArrowProps = {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="previous"
    className="absolute left-4 md:left-8 cursor-pointer -bottom-6 md:-bottom-14 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm z-30"
  >
    <FiChevronLeft />
  </button>
)

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="next"
    className="absolute right-4 md:right-8 cursor-pointer  -bottom-6 md:-bottom-14 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm z-30"
  >
    <FiChevronRight />
  </button>
)

const TestimonialCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    adaptiveHeight: true,
  }

  return (
    <section className="bg-white/70 mx-auto  px-5  md:px-10 lg:px-30 lg:px-38 border-t border-t-gray-300 py-18 md:py-24">
      <h3 className="text-sm      sm:text-lg  uppercase tracking-wider text-gray-500 mb-8">
        Hear from our customers
      </h3>

      <div className="relative">
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={t.id} className="w-full px-3 min-h-fit py-12">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
                <div className="relative w-40 h-40 flex-shrink-0">
                  <div className="absolute left-0 top-0 w-40 h-40  rounded-2xl flex items-center justify-center z-20"
                       >
                    <div className="w-20 h-20 relative">
                    </div>
                  </div>

                  <div className="absolute left-8 top-8  w-30 h-30 flex items-center justify-center z-10"
                       style={{ background: '#505081' }}>
                    <div className="w-30 h-30 relative">
                      <Image src={t.logo2} alt="logo2" fill style={{ objectFit: 'cover' } } className='mt-12 mx-12' />
                    </div>
                  </div>
                </div>

                
                <div className="md:w-2/3  mt-6 lg:mt-0">
                  <p className="text-lg  md:text-xl lg:text-2xl font-medium text-gray-800 mb-4 leading-snug">
                    “{t.quote}”
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">{t.author}</span> — {t.position}
                  </p>
                </div>
              </div>
                
            </div>
            
          ))}
        </Slider>
     
      </div>
    </section>
  )
}

export default TestimonialCarousel
