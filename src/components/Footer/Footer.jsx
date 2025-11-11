import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAccessTime, MdEmail, MdLocationOn } from "react-icons/md";
// I'm assuming you have a background image, as in your original code
import footerbg from "../../../src/assets/footer.webp"
// import footerbg from '../../assets/Images/footerbg.webp';

const Footer = () => {
  return (
    // bg-[#2d4a36]
    <footer className="bg-[#2d4a36] text-gray-200 py-12 px-6 md:px-20 relative">
     {/* Background overlay from your original code */}
     <div 
       style={{ backgroundImage: `url(${footerbg})` }} 
       className="absolute bottom-0 left-0 w-full h-full bg-repeat-x opacity-20 bg-cover bg-center"
     ></div>

      {/* Using relative z-10 to ensure content is above the background overlay */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        
        {/* Column 1: Brand and Description */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-green-400">✨</span> CleanBD
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-300">
            A community-driven platform to report and track local civic issues. 
            From garbage piles to broken streetlights, help us make our communities 
            cleaner and safer, one report at a time.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6 text-xl">
            <a href="#" className="hover:text-green-400" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-400" aria-label="Twitter"><FaXTwitter /></a>
            <a href="#" className="hover:text-green-400" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="hover:text-green-400" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" className="hover:text-green-400" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-green-400">Home</a></li>
            <li><a href="/report-issue" className="hover:text-green-400">Report an Issue</a></li>
            <li><a href="/issues" className="hover:text-green-400">View All Issues</a></li>
            <li><a href="/how-it-works" className="hover:text-green-400">How It Works</a></li>
            <li><a href="/about" className="hover:text-green-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Issue Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Issue Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/issues/garbage" className="hover:text-green-400">Garbage Collection</a></li>
            <li><a href="/issues/roads" className="hover:text-green-400">Road Repair</a></li>
            <li><a href="/issues/streetlights" className="hover:text-green-400">Streetlights</a></li>
            <li><a href="/issues/drainage" className="hover:text-green-400">Drainage</a></li>
            <li><a href="/issues/public-safety" className="hover:text-green-400">Public Safety</a></li>
            <li><a href="/issues/other" className="hover:text-green-400">Other</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="flex items-start gap-2 text-sm mb-3">
            <MdAccessTime className="text-green-400 text-lg flex-shrink-0 mt-1" /> 
            <span>Community Support Available 24/7</span>
          </p>
          <p className="flex items-start gap-2 text-sm mb-3">
            <MdLocationOn className="text-green-400 text-lg flex-shrink-0 mt-1" /> 
            <span>Based in Dhaka, Bangladesh</span>
          </p>
          <p className="flex items-start gap-2 text-sm">
            <MdEmail className="text-green-400 text-lg flex-shrink-0 mt-1" /> 
            <span>support@cleanbd.com</span>
          </p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400 relative z-10">
        © {new Date().getFullYear()} CleanBD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;