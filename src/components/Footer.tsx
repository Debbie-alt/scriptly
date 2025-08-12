import {
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaStar,
  FaMoneyBillWave
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white px-6 md:px-10 lg:px-20 py-12 relative overflow-hidden">
      {/* Decorative Gradient Circles */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-black/20 rounded-full blur-2xl z-0" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-500/10 rounded-full blur-2xl z-0" />
      <div className="relative z-10">
        <div className="md:col-span-2">
          <div className="mb-3">
            <img src="/logo2.png" className="w-20 rounded-full"/>
          </div>
       
        </div>
      </div>

      <div className="w-full mx-auto grid grid-cols grid-cols-1 gap-10 mt-12 md:grid-cols-3 xl:grid-cols-4 justify-between relative z-10">
        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>
          <ul className="space-y-3 ">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/how-it-works" className="hover:underline">How It Works</a></li>
            <li><a href="/services" className="hover:underline">Our Services</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/faqs" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-3 ">
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/order-tracking" className="hover:underline">Track Your Order</a></li>
            <li><a href="/pricing" className="hover:underline">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">For Students</h4>
          <ul className="space-y-3 t">
            <li><a href="/samples" className="hover:underline">Essay Samples</a></li>
            <li><a href="/writers" className="hover:underline">Meet Our Writers</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Stay Connected</h4>
          <div className="flex items-center gap-7 mb-7">
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn className="text-[#0e76a8] text-2xl hover:scale-110 transition" /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF className="text-[#1877f3] text-2xl hover:scale-110 transition" /></a>
            <a href="#" aria-label="Twitter"><FaXTwitter className="text-white text-2xl hover:scale-110 transition" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="text-[#e1306c]  text-2xl hover:scale-110 transition" /></a>
          </div>
          <h4 className="font-medium  mb-6">Contact Info</h4>
          <p className="mb-1">Email: support@essaypro.com</p>
          <p className="">Phone: +1 (800) 123-4567</p>
        </div>

        <div >
          <h4 className="font-semibold text-white mb-2">Legal</h4>
          <ul className="space-y-3">
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms-of-use" className="hover:underline">Terms of Use</a></li>
            <li><a href="/refund-policy" className="hover:underline">Refund Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="/order" className="hover:underline">Place an Order</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
            <li><a href="/signup" className="hover:underline">Sign Up</a></li>
          </ul>
        </div>
      </div>

      <hr className="my-10 border-gray-500/30" />
      

      <p className="text-center text-sm mt-4 mb-2 flex justify-center items-center relative z-10">
        Copyright © 2025 Scriptly. All rights reserved.
        <span className="hidden md:block"> &nbsp; | &nbsp; Essay writing made easy, fast, and reliable.</span>
      </p>
    </footer>
  );
};

export default Footer;