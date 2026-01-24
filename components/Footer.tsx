import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-deep-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold font-heading mb-6 tracking-tight">
            LAND BORN <span className="text-sand">MOROCCO</span>
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-xs">
            Authentic Moroccan experiences tailored just for you. Let us guide you through the magic of our homeland.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-sand">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "Tours", "About", "Reviews"].map((item) => (
              <li key={item}>
                <Link href={item === "Home" ? "/" : `#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-sand">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start text-gray-300">
              <MapPin className="mr-3 text-sand flex-shrink-0" size={20} />
              <span>Marrakech, Morocco</span>
            </li>
            <li className="flex items-center text-gray-300">
              <Phone className="mr-3 text-sand flex-shrink-0" size={20} />
              <span>+212 600 000 000</span>
            </li>
            <li className="flex items-center text-gray-300">
              <Mail className="mr-3 text-sand flex-shrink-0" size={20} />
              <span>omar@landbornmorocco.com</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-sand">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-sand transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-sand transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-sand transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Land Born Morocco. All rights reserved.</p>
      </div>
    </footer>
  );
}
