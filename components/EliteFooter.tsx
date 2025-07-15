export default function EliteFooter() {
  return (
    <footer className="bg-black border-t border-electric-blue/20 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-inter font-black mb-4">
              <span className="text-white">AXO</span>
              <span className="gradient-text">ELITE</span>
            </div>
            <p className="text-gray-400 font-source mb-6 max-w-md">
              Elite biomarker analysis for professional athletes. Trusted by Olympic Training Centers and professional
              sports teams worldwide.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-electric-blue/20 transition-colors cursor-pointer">
                <span className="text-electric-blue">📘</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-electric-blue/20 transition-colors cursor-pointer">
                <span className="text-electric-blue">📷</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-electric-blue/20 transition-colors cursor-pointer">
                <span className="text-electric-blue">🐦</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-electric-blue/20 transition-colors cursor-pointer">
                <span className="text-electric-blue">💼</span>
              </div>
            </div>
          </div>

          {/* Performance */}
          <div>
            <h3 className="text-lg font-inter font-bold mb-4 text-electric-blue">PERFORMANCE</h3>
            <ul className="space-y-3 text-gray-400 font-source">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Elite Protocols
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Biomarker Analysis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sport-Specific Testing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Recovery Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Performance Tracking
                </a>
              </li>
            </ul>
          </div>

          {/* Athletes */}
          <div>
            <h3 className="text-lg font-inter font-bold mb-4 text-neon-green">ATHLETES</h3>
            <ul className="space-y-3 text-gray-400 font-source">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Elite Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Olympic Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pro Team Access
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Athlete Resources
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 font-source text-sm mb-4 md:mb-0">
              © 2025 Axo Elite Performance. All rights reserved. Train Like a Champion.
            </div>
            <div className="flex gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-electric-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-electric-blue transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-electric-blue transition-colors">
                Elite Support
              </a>
            </div>
          </div>
        </div>

        {/* Elite Disclaimer */}
        <div className="mt-8 text-xs text-gray-600 font-source leading-relaxed">
          <p className="mb-2">
            * AXO ELITE PERFORMANCE ANALYSIS IS DESIGNED FOR SERIOUS ATHLETES AND COMPETITORS. BIOMARKER TESTING
            INCLUDES ADVANCED PROTOCOLS USED BY OLYMPIC TRAINING CENTERS AND PROFESSIONAL SPORTS TEAMS.
          </p>
          <p>
            ELITE PERFORMANCE OPTIMIZATION REQUIRES DEDICATION, PROPER TRAINING, AND PROFESSIONAL GUIDANCE. RESULTS MAY
            VARY BASED ON INDIVIDUAL PHYSIOLOGY, TRAINING REGIMEN, AND ADHERENCE TO PROTOCOLS.
          </p>
        </div>
      </div>
    </footer>
  )
}
