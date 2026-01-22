import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Course {
  name: string;
  description: string;
  duration: string;
  eligibility: string;
}

interface CourseItemProps {
  course: Course;
  color: 'orange' | 'navy';
  isOpen: boolean;
  onToggle: () => void;
}

const CourseItem: React.FC<CourseItemProps> = ({ course, color, isOpen, onToggle }) => {
  const isOrange = color === 'orange';
  const themeText = isOrange ? 'text-brand-orange' : 'text-brand-navy';
  const activeHeaderBg = isOrange ? 'bg-orange-50' : 'bg-blue-50';
  const contentBorder = isOrange ? 'border-orange-100' : 'border-blue-100';

  return (
    <div className={`border-b border-gray-100 last:border-0 mb-2 last:mb-0`}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        className={`w-full flex items-center justify-between p-4 text-left transition-all duration-200 rounded-lg group
          ${isOpen ? `${activeHeaderBg} shadow-sm` : 'hover:bg-gray-50 bg-white'}
        `}
      >
        <div className="flex items-center gap-3">
           <div className={`transition-all duration-300 flex items-center justify-center w-6 h-6 rounded-full ${isOpen ? 'bg-white shadow-sm' : ''}`}>
              <i className={`fas fa-circle text-[8px] ${themeText} ${isOpen ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}></i>
           </div>
           <span className={`text-sm font-bold tracking-wide ${isOpen ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}`}>
             {course.name}
           </span>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-white shadow-sm rotate-180' : 'bg-transparent'}`}>
            <i className={`fas fa-chevron-down text-xs ${isOpen ? themeText : 'text-gray-400'}`}></i>
        </div>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-5 pb-5 pt-2 mx-2 rounded-b-lg border-x border-b ${contentBorder} ${isOpen ? 'mt-[-4px] pt-6' : ''} bg-opacity-50`}>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              {course.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Duration Box */}
                <div className="flex items-center p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
                    <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0 ${themeText} mr-3`}>
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Duration</span>
                      <span className="text-sm font-bold text-gray-800">{course.duration}</span>
                    </div>
                </div>

                {/* Eligibility Box */}
                <div className="flex items-center p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
                    <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0 ${themeText} mr-3`}>
                      <i className="fas fa-user-graduate"></i>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Eligibility</span>
                      <span className="text-sm font-bold text-gray-800">{course.eligibility}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

interface CourseCardProps {
  title: string;
  icon: string;
  color: 'orange' | 'navy';
  courses: Course[];
}

const CourseCard: React.FC<CourseCardProps> = ({ title, icon, color, courses }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openCourseIndex, setOpenCourseIndex] = useState<number | null>(null);

  const isOrange = color === 'orange';
  const borderColor = isOrange ? 'border-brand-orange' : 'border-brand-navy';
  const iconColor = isOrange ? 'text-brand-orange' : 'text-brand-navy';
  const bgColor = isOrange ? 'bg-orange-50' : 'bg-blue-50';

  const handleCourseToggle = (index: number) => {
    setOpenCourseIndex(openCourseIndex === index ? null : index);
  };

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden border-t-4 ${borderColor} hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={`p-6 ${bgColor} flex items-center justify-between`}>
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm ${iconColor} text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
            <i className={`fas ${icon}`}></i>
          </div>
          <h3 className="font-heading font-bold text-xl text-gray-800">{title}</h3>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/50 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-white shadow-sm' : ''}`}>
           <i className={`fas fa-chevron-down ${iconColor}`}></i>
        </div>
      </div>
      
      <div 
        className={`transition-all duration-500 ease-in-out bg-white ${
          isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 border-t border-gray-100">
          <div className="flex flex-col space-y-2">
            {courses.map((course, idx) => (
              <CourseItem
                key={idx}
                course={course}
                color={color}
                isOpen={openCourseIndex === idx}
                onToggle={() => handleCourseToggle(idx)}
              />
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
             <Link 
               to="/contact" 
               className={`inline-flex items-center justify-center px-6 py-2 rounded-full border-2 font-bold text-sm uppercase tracking-wide transition-all duration-300
                 ${isOrange 
                   ? 'border-orange-100 text-brand-orange hover:bg-orange-50' 
                   : 'border-blue-100 text-brand-navy hover:bg-blue-50'
                 }`}
               onClick={(e) => e.stopPropagation()}
             >
               Enquire Now <i className="fas fa-arrow-right ml-2 text-xs"></i>
             </Link>
          </div>
        </div>
      </div>
      
      {!isExpanded && (
        <div className="px-6 py-3 bg-gray-50/50 text-center border-t border-gray-100">
             <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Click to view {courses.length} courses</span>
        </div>
      )}
    </div>
  );
};

const Courses: React.FC = () => {
  const programs: CourseCardProps[] = [
    {
      title: "Medical",
      icon: "fa-stethoscope",
      color: "orange",
      courses: [
        { 
            name: "NEET (UG / PG)", 
            description: "National level entrance exam for admission to MBBS, BDS, and other medical courses.", 
            duration: "Entrance Exam",
            eligibility: "10+2 with PCB (50% marks)"
        },
        { 
            name: "B.Sc Nursing", 
            description: "Undergraduate nursing program focusing on patient care, health promotion, and recovery.", 
            duration: "4 Years",
            eligibility: "10+2 with PCB"
        },
        { 
            name: "B.Pharma", 
            description: "Bachelor of Pharmacy degree preparing students for the pharmaceutical industry, drug testing, and research.", 
            duration: "4 Years",
            eligibility: "10+2 with PCB / PCM"
        },
        { 
            name: "B.D.S (Dental)", 
            description: "Professional degree for dentistry. Covers dental surgery, oral pathology, and dental health.", 
            duration: "5 Years (4+1 Internship)",
            eligibility: "NEET Qualified"
        },
        { 
            name: "B.P.T (Physiotherapy)", 
            description: "Bachelor of Physiotherapy focusing on physical medicine, rehabilitation, and injury prevention.", 
            duration: "4.5 Years",
            eligibility: "10+2 with PCB"
        }
      ]
    },
    {
      title: "Engineering",
      icon: "fa-microchip",
      color: "navy",
      courses: [
        { 
            name: "B.Tech", 
            description: "Undergraduate engineering degree available in CS, IT, ECE, Mechanical, Civil, and more.", 
            duration: "4 Years",
            eligibility: "10+2 with PCM"
        },
        { 
            name: "Diploma / Polytechnic", 
            description: "Technical education programs offering practical skills for immediate employment in engineering fields.", 
            duration: "3 Years",
            eligibility: "10th Pass"
        },
        { 
            name: "BCA", 
            description: "Bachelor of Computer Applications. Focuses on programming languages, database management, and software development.", 
            duration: "3 Years",
            eligibility: "10+2 (Any Stream)"
        },
        {
            name: "MCA",
            description: "Master of Computer Applications. Advanced study in computer science and application development.",
            duration: "2 Years",
            eligibility: "BCA / B.Sc IT / Graduation"
        }
      ]
    },
    {
      title: "Management",
      icon: "fa-briefcase",
      color: "orange",
      courses: [
        { 
            name: "BBA", 
            description: "Bachelor of Business Administration. Covers business management, finance, marketing, and HR.", 
            duration: "3 Years",
            eligibility: "10+2 (Any Stream)"
        },
        { 
            name: "MBA", 
            description: "Master of Business Administration. Advanced management degree for leadership roles in business.", 
            duration: "2 Years",
            eligibility: "Graduation (Any Stream)"
        },
        { 
            name: "Hotel Management", 
            description: "Prepares students for careers in hospitality, hotel administration, tourism, and event management.", 
            duration: "3 - 4 Years",
            eligibility: "10+2 (Any Stream)"
        }
      ]
    },
    {
      title: "Specialized",
      icon: "fa-graduation-cap",
      color: "navy",
      courses: [
        { 
            name: "B.Ed", 
            description: "Bachelor of Education. Professional degree required to work as a teacher in schools.", 
            duration: "2 Years",
            eligibility: "Graduation (50% marks)"
        },
        { 
            name: "LLB (Law)", 
            description: "Bachelor of Legislative Law. Study of Indian law, constitution, and legal procedures.", 
            duration: "3 Years / 5 Years (Integrated)",
            eligibility: "Graduation / 10+2"
        },
        { 
            name: "B.Sc Agriculture", 
            description: "Focuses on agriculture science, modern farming techniques, soil science, and crop production.", 
            duration: "4 Years",
            eligibility: "10+2 with Science (PCB/PCM)"
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-brand-orange py-16">
         <div className="container mx-auto px-4 text-center text-white">
            <h1 className="font-heading text-4xl font-bold mb-4">Our Programs</h1>
            <p className="text-xl opacity-90">Explore our specialized career streams tailored for your success.</p>
         </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 lg:px-8 py-16 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {programs.map((program, index) => (
            <CourseCard key={index} {...program} />
          ))}
        </div>

        {/* Counselling CTA */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center border-2 border-dashed border-gray-200">
          <h2 className="font-heading text-2xl font-bold text-brand-navy mb-4">Confused about which course to choose?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert counselors are here to help you analyze your strengths and pick the right path for a successful career.
          </p>
          <Link to="/contact" className="bg-brand-navy text-white font-bold py-3 px-8 rounded-full shadow hover:bg-blue-900 transition-all inline-block">
            Get Free Counseling
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;