export default function EliteFooter() {
  return (
    <footer className="bg-gradient-to-b from-cream to-charcoal/5 border-t border-charcoal/10 text-charcoal py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-inter font-light mb-6">
              <span className="text-charcoal">AXO</span>
              <span className="gradient-text font-medium">ELITE</span>
            </div>
            <p className="text-charcoal/60 font-source mb-8 max-w-md leading-relaxed">
              Sophisticated biomarker analysis for elite athletes. Trusted by Olympic Training Centers and professional
              performance institutes worldwide.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/60 rounded-xl flex items-center justify-center hover:bg-soft-blue/20 transition-colors cursor-pointer border border-charcoal/10">
                <span className="text-soft-blue">📘</span>
              </div>
              <div className="w-12 h-12 bg-white/60 rounded-xl flex items-center justify-center hover:bg-soft-blue/20 transition-colors cursor-pointer border border-charcoal/10">
                <span className="text-soft-blue">📷</span>
              </div>
              <div className="w-12 h-12 bg-white/60 rounded-xl flex items-center justify-center hover:bg-soft-blue/20 transition-colors cursor-pointer border border-charcoal/10">
                <span className="text-soft-blue">🐦</span>
              </div>
              <div className="w-12 h-12 bg-white/60 rounded-xl flex items-center justify-center hover:bg-soft-blue/20 transition-colors cursor-pointer border border-charcoal/10">
                <span className="text-soft-blue">💼</span>
              </div>
            </div>
          </div>

          {/* Performance */}
          <div>
            <h3 className="text-lg font-inter font-medium mb-6 text-soft-blue">PERFORMANCE</h3>
            <ul className="space-y-4 text-charcoal/60 font-source">
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  Elite Protocols
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  Biomarker Analysis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  Sport-Specific Testing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  Recovery Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  Performance Tracking
                </a>
              </li>
            </ul>
          </div>

          {/* Athletes */}
          <div>
            <h3 className="text-lg font-inter font-medium mb-6 text-sage-green">ATHLETES</h3>
            <ul className="space-y-4 text-charcoal/60 font-source">
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  Elite Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  Olympic Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  Professional Access
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  Athlete Resources
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-charcoal/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-charcoal/60 font-source text-sm mb-6 md:mb-0">
              © 2025 Axo Elite Performance. All rights reserved. Elevate Your Excellence.
            </div>
            <div className="flex gap-8 text-xs text-charcoal/50">
              <a href="#" className="hover:text-soft-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-soft-blue transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-soft-blue transition-colors">
                Elite Support
              </a>
            </div>
          </div>
        </div>

        {/* Elite Disclaimer */}
        <div className="mt-12 text-xs text-charcoal/40 font-source leading-relaxed space-y-3">
          <p>
            * AXO ELITE PERFORMANCE ANALYSIS IS DESIGNED FOR SERIOUS ATHLETES AND PERFORMANCE ENTHUSIASTS. BIOMARKER
            TESTING INCLUDES SOPHISTICATED PROTOCOLS USED BY OLYMPIC TRAINING CENTERS AND ELITE PERFORMANCE INSTITUTES.
          </p>
          <p>
            ELITE PERFORMANCE OPTIMIZATION REQUIRES DEDICATION, PROPER TRAINING, AND PROFESSIONAL GUIDANCE. RESULTS MAY
            VARY BASED ON INDIVIDUAL PHYSIOLOGY, TRAINING REGIMEN, AND ADHERENCE TO PERSONALIZED PROTOCOLS.
          </p>
        </div>
      </div>
    </footer>
  )
}
