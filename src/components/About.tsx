'use client';

const About = () => {
  return (
    <section id="about" className="py-8 lg:py-16 px-4 bg-teal-600 m-4 lg:m-12 rounded-4xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 leading-tight">
            My mission is to empower individuals and families to achieve optimal health and wellness through evidence-based nutrition guidance and compassionate nursing care, creating lasting positive changes that transform lives and build healthier communities.
          </h2>
          <p className="text-lg lg:text-xl text-teal-100 leading-relaxed">
            With over a decade of experience in both clinical nutrition and nursing practice, I bridge the gap between medical science and practical lifestyle changes, ensuring every client receives personalized care that addresses their unique health journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
