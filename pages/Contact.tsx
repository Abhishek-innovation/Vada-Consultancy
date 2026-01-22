import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    course: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert(`Thank you ${formData.name}! We will contact you shortly at ${formData.mobile}.`);
    setFormData({ name: '', mobile: '', course: '', message: '' });
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-10 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
           <h1 className="font-heading text-4xl font-bold text-brand-navy mb-4">Start Your Career Journey Today</h1>
           <p className="text-gray-600">Reach out to us for expert guidance and admission support.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Side: Contact Info */}
            <div className="bg-brand-navy text-white p-10 lg:p-16 lg:w-5/12 flex flex-col justify-between">
              <div>
                <h2 className="font-heading text-2xl font-bold mb-8">Contact Information</h2>
                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-phone-alt text-xl text-brand-orange"></i>
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Phone Numbers</p>
                      <a href="tel:+917209741043" className="block text-gray-300 hover:text-white transition-colors">+91 7209741043</a>
                      <a href="tel:+917979848422" className="block text-gray-300 hover:text-white transition-colors">+91 7979848422</a>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-envelope text-xl text-brand-orange"></i>
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Email Address</p>
                      <a href="mailto:info@vadaconsultancy.in" className="block text-gray-300 hover:text-white transition-colors">info@vadaconsultancy.in</a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-xl text-brand-orange"></i>
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Office Address</p>
                      <p className="text-gray-300 leading-relaxed">
                        Pipra Chowk, Behind GD College,<br />
                        Begusarai, Bihar 851101
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12 lg:mt-0">
                 <p className="text-sm opacity-60">
                   Mon - Sat: 9:00 AM - 7:00 PM <br/>
                   Sunday: Closed
                 </p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-10 lg:p-16 lg:w-7/12 bg-white">
              <h2 className="font-heading text-2xl font-bold text-brand-navy mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">Interested Course</label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select a course...</option>
                    <option value="medical">Medical (NEET, Nursing, etc.)</option>
                    <option value="engineering">Engineering (B.Tech, BCA, etc.)</option>
                    <option value="management">Management (MBA, BBA, etc.)</option>
                    <option value="law">Law (LLB)</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                    placeholder="Tell us about your educational background..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-md transition-all transform active:scale-95"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
           {/* In a real app, embed Google Maps iframe here */}
           <div className="w-full h-full bg-gray-200 flex items-center justify-center relative group cursor-pointer">
              <img src="https://picsum.photos/id/10/1200/400" alt="Map Location" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="z-10 bg-white p-4 rounded-full shadow-lg flex items-center gap-2">
                 <i className="fas fa-map-marked-alt text-brand-orange text-2xl"></i>
                 <span className="font-bold text-gray-700">Map: Pipra Chowk, Begusarai</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;