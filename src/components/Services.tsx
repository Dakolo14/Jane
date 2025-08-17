'use client';

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Nutrition Counseling",
      description: "We provide personalized nutrition guidance and meal planning that addresses your unique health goals, dietary restrictions, and lifestyle preferences, ensuring sustainable and effective results.",
      icon: "🥗",
      iconBg: "bg-purple-400"
    },
    {
      id: "02", 
      title: "Health Assessment",
      description: "Our comprehensive health evaluations include detailed nutritional analysis, lifestyle assessments, and personalized recommendations to optimize your overall wellness and address specific health concerns.",
      icon: "📊",
      iconBg: "bg-purple-400"
    },
    {
      id: "03",
      title: "Meal Planning", 
      description: "We design customized meal plans that balance nutrition, taste, and convenience, helping you develop healthy eating habits that fit seamlessly into your daily routine and support your health objectives.",
      icon: "📋",
      iconBg: "bg-purple-400"
    },
    {
      id: "04",
      title: "Wellness Coaching",
      description: "We offer ongoing support and motivation to help you implement sustainable lifestyle changes, overcome challenges, and maintain long-term health improvements through regular guidance and accountability.",
      icon: "💪",
      iconBg: "bg-purple-400"
    }
  ];

  return (
    <section id="services" className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Heading */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              How Can I Assist You?
            </h2>
          </div>
          
          {/* Right Side - Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-4xl p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${service.iconBg} rounded-full flex items-center justify-center text-white text-2xl`}>
                    {service.icon}
                  </div>
                  <span className="text-2xl font-bold text-gray-300">{service.id}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
