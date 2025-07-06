import Link from 'next/link';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaLinkedin, 
  FaTiktok, 
  FaBehance, 
  FaDribbble,
  FaVimeo 
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-5 ">
      <div className=" flex items-center justify-center flex-col">
        <div className=" lg:w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Logo and Social Media */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-bold text-gray-800">Render-Edge Studio</span>
            </div>
            
            <div>
              <h4 className="text-gray-600 font-medium mb-3">Find Us on Social Media</h4>
              <div className="flex flex-wrap gap-2">
                <Link href="#" className="FootIcon">
                  <FaFacebook size={15} />
                </Link>
                <Link href="#" className="FootIcon">
                  <FaInstagram size={15} />
                </Link>
                <Link href="#" className="FootIcon">
                  <FaTwitter size={15} />
                </Link>
                <Link href="#" className="FootIcon">
                  <FaYoutube size={15} />
                </Link>
                <Link href="#" className="FootIcon">
                  <FaLinkedin size={15} />
                </Link>
                <Link href="#" className="FootIcon">
                  <FaTiktok size={15} />
                </Link>
                <Link href="#" className="FootIcon">
                  <FaBehance size={15} />
                </Link>
                <Link href="#" className="FootIcon">
                  <FaDribbble size={15} />
                </Link>
                <Link href="#" className="FootIcon">
                  <FaVimeo size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">Our Location</h3>
            <div className="flex items-start space-x-2">
              <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Bogura, Bangladesh</span>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">Our Reviews</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <span className="text-green-600 text-lg">★</span>
                  <span className="text-sm font-medium text-gray-700">Trustpilot</span>
                </div>
              </div>
              <div className="flex space-x-1">
                {[1, 2, 3, 4].map((star) => (
                  <span key={star} className="text-green-500 text-lg">★</span>
                ))}
              </div>
              <div className="inline-block">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded text-sm font-medium">
                  DMCA PROTECTED
                </span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
      {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="bg-gray-800 text-center py-4 -mx-4 px-4">
            <p className="text-yellow-400 text-sm">
              © Render-Edge-Studio | All Rights Reserved | 2025
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
