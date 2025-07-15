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
              Elite biomarker analysis for professional athletes. 
              Trusted by Olympic Training Centers and professional sports teams worldwide.
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
            <h3 className="text-lg font-inter font-bold mb-4 text-electric-blue">
              PERFORMANCE
            </h3>
            <ul className="space-y-3 text-gray-400 font-source">
              <li><a href="#" className="hover:text-white transition-colors">Elite Protocols</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Biomarker Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sport-Specific Testing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recovery Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Performance Tracking</a></li>
            </ul>
          </div>

          {/* Athletes */}
          <div>
            <h3 className="text-lg font-inter font-bold mb-4 text-neon-green">
              ATHLETES
            </h3>
            <ul className="space-y-3 text-gray-400 font-source">
              <li><a href="#" className="hover:text-white transition-colors">Success Stories\
