'use client';

const Hero = () => {
  return (
    <section id="home" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Introduction */}
          <div className="space-y-8">
            {/* Availability Tag */}
            <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span>Available for Work</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Hi, I'm a Dietitian and Nurse Consultant
            </h1>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
              I have 11 years of experience working on useful and mindful products together with startups and known brands.
            </p>
            
            {/* CTA Button */}
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
              Contact Me
            </button>
          </div>
          
          {/* Right Side - Profile and Brands */}
          <div className="space-y-6">
            {/* Top Row - Two Square Pictures - Same width as bottom row */}
            <div className="flex items-start space-x-2 md:space-x-6">
              {/* First Square Picture */}
              <div className="flex-1 aspect-square bg-gray-200 rounded-3xl flex items-center justify-center">
                <span className="text-gray-500 text-sm">Profile Photo</span>
              </div>
              
              {/* Second Square Picture */}
              <div className="flex-1 aspect-square bg-gray-200 rounded-3xl flex items-center justify-center">
                <span className="text-gray-500 text-sm">Work Image</span>
              </div>
            </div>
            
            {/* Bottom Row - Picture + 6 Images */}
            <div className="flex items-center justify-center md:flex-row flex-col gap-6">
              {/* Picture - 2:1 aspect ratio, taking 2/3 width */}
              <div className="flex-2 w-full">
                <div className="w-full h-32 bg-gray-200 rounded-3xl flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Brands/Work Image</span>
                </div>
              </div>
              
              {/* 6 Images - taking 1/3 width, arranged 3 per row */}
              <div className="flex-1 grid grid-cols-3 gap-3">
                {[
                  { name: 'Figma', color: 'bg-orange-500' },
                  { name: 'LinkedIn', color: 'bg-blue-600' },
                  { name: 'Dribbble', color: 'bg-pink-500' },
                  { name: 'Pinterest', color: 'bg-red-600' },
                  { name: 'Behance', color: 'bg-blue-700' },
                  { name: 'X', color: 'bg-black' }
                ].map((platform, index) => (
                  <div key={index} className={`w-12 h-12 ${platform.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    <span className="text-xs">{platform.name.charAt(0)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
