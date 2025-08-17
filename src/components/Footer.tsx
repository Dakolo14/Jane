'use client';

const Footer = () => {
  return (
    <footer className="bg-[#f3f3f3]">
      {/* Main Footer Content */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Section - Contact Information */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Let's connect and chat
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-xl font-medium text-gray-700">email@jane.com</span>
                <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5 text-white transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Right Section - Social Media Links */}
            <div className="bg-teal-500 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {/* Top Row */}
                <div className="space-y-4">
                  <button className="w-full bg-white/10 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors transform -rotate-2">
                    FOLLOW ME!
                  </button>
                  <a 
                    href="https://www.instagram.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-white/10 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors transform rotate-1 block text-center"
                  >
                    INSTAGRAM
                  </a>
                </div>
                
                {/* Bottom Row */}
                <div className="space-y-4">
                  <a 
                    href="https://www.tiktok.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-white/10 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors transform rotate-1 block text-center"
                  >
                    TIKTOK
                  </a>
                  <a 
                    href="https://wa.me/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-white/10 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors transform -rotate-1 block text-center"
                  >
                    WHATSAPP
                  </a>
                  <a 
                    href="https://www.linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-white/10 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors transform rotate-1 block text-center"
                  >
                    LINKEDIN
                  </a>
                </div>
                
                {/* Special Element */}
                <div className="col-span-2 flex justify-center mt-4">
                  <div className="bg-white/10 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                    <span>👀</span>
                    <span>⭐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section - Full Width White Background */}
      <div className="bg-white py-6 px-4 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="text-gray-600 text-sm">
            ©2024 | Developed by{' '}
            <a 
              href="https://www.ajosedamilare.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              Ajose
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
