import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-navy text-white py-32 lg:py-48 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="University Campus"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay - Adjusted for visibility while keeping text readable */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-brand-navy/80 to-blue-900/70"></div>
        </div>

        {/* Decorative Elements (Blobs) */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          
          {/* Badge */}
          <div className="inline-block mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold tracking-widest text-xs uppercase shadow-sm">
              Welcome to Vada Consultancy
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Education: The <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-300">Hallmark</span> of Success
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Educational Advisers All Over India. Expert guidance for Medical, Engineering, and Management streams. We bridge the gap between ambitious students and premium institutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Link to="/contact" className="group bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1">
              Enquire Now
              <i className="fas fa-arrow-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
            </Link>
            <Link to="/courses" className="group bg-transparent hover:bg-white text-white hover:text-brand-navy border-2 border-white/30 hover:border-white text-lg font-bold py-4 px-10 rounded-full transition-all transform hover:-translate-y-1">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-navy mb-4">Your Future, Our Guidance</h2>
          <div className="w-20 h-1 bg-brand-orange mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg">
            Located in the heart of Begusarai, Vada Consultancy has been bridging the gap between ambitious students and premium educational institutions all over India. Whether you are aiming for NEET, IIT-JEE, or professional degrees, we provide expert counseling to secure your seat.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-brand-navy mb-4">Our Top Courses</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
            <p className="mt-4 text-gray-600">Comprehensive admission support for over 20+ specialized streams</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Medical */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-brand-orange group">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                <i className="fas fa-user-md text-2xl text-brand-orange group-hover:text-white"></i>
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-navy mb-4">Medical & Healthcare</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-xs text-brand-orange"></i> NEET (UG/PG)</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-xs text-brand-orange"></i> B.Sc Nursing</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-xs text-brand-orange"></i> B.Pharma / B.D.S</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-xs text-brand-orange"></i> ANM / GNM</li>
              </ul>
            </div>

            {/* Engineering */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-brand-navy group">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-navy transition-colors">
                <i className="fas fa-cogs text-2xl text-brand-navy group-hover:text-white"></i>
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-navy mb-4">Engineering & IT</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-xs text-brand-navy"></i> B.Tech / M.Tech</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-xs text-brand-navy"></i> Diploma / Polytechnic</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-xs text-brand-navy"></i> BCA / MCA</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-xs text-brand-navy"></i> PGDCA</li>
              </ul>
            </div>

            {/* Management & Others */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-brand-orange group">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                <i className="fas fa-briefcase text-2xl text-brand-orange group-hover:text-white"></i>
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-navy mb-4">Management & Law</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-xs text-brand-orange"></i> BBA / MBA</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-xs text-brand-orange"></i> Hotel Management</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-xs text-brand-orange"></i> LLB (Law)</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-xs text-brand-orange"></i> Mass Comm / B.Ed</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses" className="inline-flex items-center text-brand-navy font-bold hover:text-brand-orange transition-colors">
              View All Courses <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-brand-navy mb-6">Why Vada Consultancy?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We are more than just admission consultants; we are career architects. Our deep-rooted presence in Begusarai combined with a pan-India network ensures you get the best opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-orange-50 flex-shrink-0 flex items-center justify-center text-brand-orange">
                    <i className="fas fa-globe text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-lg">Wide Network</h4>
                    <p className="text-sm text-gray-500">Connections with top colleges for every stream across India.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-blue-50 flex-shrink-0 flex items-center justify-center text-brand-navy">
                    <i className="fas fa-user-tie text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-lg">Expert Guidance</h4>
                    <p className="text-sm text-gray-500">Educational advisers active all over India providing personalized counseling.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-orange-50 flex-shrink-0 flex items-center justify-center text-brand-orange">
                    <i className="fas fa-map-marked-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-lg">Local Trust</h4>
                    <p className="text-sm text-gray-500">Based in Begusarai (Behind GD College), easily accessible to you.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://picsum.photos/id/4/600/400" 
                alt="Consultation" 
                className="rounded-lg shadow-2xl w-full object-cover h-80 lg:h-96"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-orange text-white p-6 rounded-lg shadow-xl hidden lg:block">
                <p className="font-heading font-bold text-3xl mb-1">1000+</p>
                <p className="text-sm opacity-90">Successful Admissions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-navy py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl text-white font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Contact us today for a free counseling session and take the first step towards your dream career.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="tel:+917209741043" className="bg-white text-brand-navy hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-colors">
               <i className="fas fa-phone-alt mr-2"></i> Call +91 7209741043
             </a>
             <Link to="/contact" className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors">
               Contact Online
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;