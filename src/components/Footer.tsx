import {
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white px-6 md:px-10 lg:px-20 py-12">

        <div className="md:col-span-2">
          <div className="mb-3">
            <img src="/logo2.png" className="w-30 rounded-full"/>
          </div>
          <p className="mt-2">
            Smart Healthcare Logistics, Made Easy.
          </p>
        </div>

      <div className="w-full mx-auto grid grid-cols grid-cols-1 gap-10 mt-12 md:grid-cols-3 xl:grid-cols-4 justify-between">

        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>
          <ul className="space-y-3 ">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/" className="hover:underline">How It Works</a></li>
            <li><a href="/" className="hover:underline">Who We Serve</a></li>
            <li><a href="/" className="hover:underline">Why Choose MediSwift</a></li>
            <li><a href="/faqs" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-3 ">
            <li><a href="/track-request" className="hover:underline">Track Requests</a></li>
            <li><a href="/aboutus" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Join Us</h4>
          <ul className="space-y-3 t">
            <li><a href="/partner" className="hover:underline">Become a Volunteer</a></li>
            <li><a href="/register-logistics" className="hover:underline">Become a Logistic Partner</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Stay Connected</h4>
          <div className="flex items-center gap-7 mb-7">
            <FaLinkedinIn className="text-xl hover:text-red-500 transition" />
            <FaFacebookF className="text-xl hover:text-red-500 transition" />
            <FaXTwitter className="text-xl hover:text-red-500 transition" />
            <FaInstagram className="text-xl hover:text-red-500 transition" />
          </div>
          <h4 className="font-medium  mb-6">Contact Info</h4>
          <p className="mb-1">Email: support@mediswift.africa</p>
          <p className="">Phone: +254 701752710</p>
        </div>


        <div >
          <h4 className="font-semibold text-white mb-2">Legal</h4>
          <ul className="space-y-3">
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms-of-use" className="hover:underline">Terms of Use</a></li>
            <li><a href="/cookie-policy" className="hover:underline">Cookie Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Connect</h4>
          <ul className="space-y-3">
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/login-business" className="hover:underline">Partner Login</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Redirect</h4>
          <ul className="space-y-3">
            <li><a href="https://app.h360ng.com/auth/register-patient" className="hover:underline" target="_blank" rel="noopener noreferrer">For Patients (Health360)</a></li>
            <li><a href="https://app.h360ng.com/auth/register-professional" className="hover:underline" target="_blank" rel="noopener noreferrer">For Providers (Health360)</a></li>
          </ul>
        </div>        
      </div>
      {/* </div> */}


        <p className="text-center text-sm  mt-10 mb-5 flex justify-center items-center">
            Copyright © 2025 MediSwift. All rights reserved. &nbsp; &nbsp; 
            <span className="hidden md:block"> |  &nbsp; &nbsp;Designed for Healthcare Impact
               Designed for Healthcare Impact</span> 
          </p>
    </footer>
  );
};

export default Footer;