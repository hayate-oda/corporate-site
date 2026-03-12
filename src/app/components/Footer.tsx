import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[#001E36] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-[#FFCD35] mb-4">
              STUDIO SEALINK
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              あなたの心を踊らせ、「やりたい」が「やる」に変わる瞬間を。
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>思想が形になり、誰かのワクワクを生み出す世界を創る。</p>
              <p className="text-[#FFCD35]">多様な価値が繋がる世界へ</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#FFCD35] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#FFCD35] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/philosophy" className="text-gray-300 hover:text-[#FFCD35] transition-colors">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#FFCD35] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#FFCD35] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#FFCD35] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#FFCD35] font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/zero-to-one" className="text-gray-300 hover:text-[#FFCD35] transition-colors">
                  0→1 Development
                </Link>
              </li>
              <li>
                <Link to="/services/fractional-coo" className="text-gray-300 hover:text-[#FFCD35] transition-colors">
                  Fractional COO
                </Link>
              </li>
              <li>
                <Link to="/services/global-expansion" className="text-gray-300 hover:text-[#FFCD35] transition-colors">
                  Global Expansion
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2026 STUDIO SEALINK. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-[#FFCD35] transition-colors">
                プライバシーポリシー
              </Link>
              <Link to="/specified-commercial-transaction" className="text-gray-400 hover:text-[#FFCD35] transition-colors">
                特定商取引法に基づく表記
              </Link>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-4 text-center">
            責任ある自由と思想と面白さの体現
          </p>
        </div>
      </div>
    </footer>
  );
}