import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-brand-navy text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">About Vada Consultancy</h1>
          <p className="text-xl text-gray-300">Empowering the Students of Bihar to Dream Big</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mt-[-3rem]">
        <div className="bg-white rounded-xl shadow-xl p-8 lg:p-12">
          {/* Mission & History */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-brand-orange font-bold tracking-wider text-sm uppercase mb-2 block">Our Mission</span>
              <h2 className="font-heading text-3xl font-bold text-brand-navy mb-6">Education: The Hallmark of Success</h2>
              <div className="prose text-gray-600 leading-relaxed space-y-4">
                <p>
                  Vada Consultancy is a premier educational advisory firm based in Begusarai, Bihar. We bridge the gap between ambitious students and India's top-tier institutions. Situated behind GD College, we understand the aspirations of local students and provide them with national-level opportunities.
                </p>
                <p>
                  We believe that every student deserves the right guidance to choose a career path that suits their potential. Our mission is to make premium education accessible by simplifying the admission process for Engineering, Medical, Management, and Law streams.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-orange transform translate-x-4 translate-y-4 rounded-lg"></div>
              <img 
                src="https://picsum.photos/id/180/800/600" 
                alt="Our Office" 
                className="relative rounded-lg shadow-lg w-full object-cover h-80" 
              />
            </div>
          </div>

          {/* Features */}
          <div className="border-t border-gray-100 pt-16">
            <h2 className="font-heading text-2xl font-bold text-brand-navy text-center mb-12">Why Choose Vada Consultancy?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-brand-navy text-2xl">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 className="font-bold text-lg mb-2">Local Trust</h3>
                <p className="text-gray-600 text-sm">We are right here in your city (Pipra Chowk). You can walk in and talk to us face-to-face.</p>
              </div>

              <div className="text-center p-6 bg-orange-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-brand-orange text-2xl">
                  <i className="fas fa-network-wired"></i>
                </div>
                <h3 className="font-bold text-lg mb-2">Pan-India Network</h3>
                <p className="text-gray-600 text-sm">We have strong tie-ups with colleges across India, giving you choices beyond Bihar.</p>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-brand-navy text-2xl">
                  <i className="fas fa-search-dollar"></i>
                </div>
                <h3 className="font-bold text-lg mb-2">Transparent Counseling</h3>
                <p className="text-gray-600 text-sm">No hidden fees, no false promises. Just honest, data-driven career advice.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="bg-brand-navy text-white font-bold py-3 px-8 rounded hover:bg-blue-900 transition-colors">
              Visit Our Office
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;