import React, { useState, useEffect, useRef } from 'react';
import { focalLogo, pageData } from './PageData/PageData';
import { CalendarCheck, Facebook, GithubIcon, Lightbulb, Linkedin, Mail, MapPin, PersonStandingIcon, Phone, Send, Sparkles, TelescopeIcon, TwitterIcon,  } from 'lucide-react';
import Card from './Components/Card/Card';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import AccomplishmentsPage from './Pages/AccomplishmentPage/AccomplishmentPage';
// We are using inline SVG icons from the lucide library because external imports are not supported in this single-file environment.
const icons = {
  TelescopeIcon: TelescopeIcon,
  CuriosityIcon: Lightbulb,
  CollaborationIcon: PersonStandingIcon,
  InnovationIcon: Sparkles,
  LocationIcon: MapPin,
  PhoneIcon:Phone,
  MailIcon: Mail,
  FacebookIcon: Facebook,
  TelegramIcon: Send,
  LinkedinIcon: Linkedin,
  TwitterIcon: TwitterIcon,
  GithubIcon: GithubIcon,
  ChevronUp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
  ),
  ChevronDown: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
  ),
  CalendarCheck: CalendarCheck
};


// New dedicated TeamCard component
const TeamCard = ({ name, image, position, bio, social }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-[#1E293B] p-6 rounded-2xl shadow-lg transform transition-all duration-700 ease-out-back hover:-translate-y-2 hover:shadow-2xl ${isVisible ? 'animate-in-from-bottom' : 'opacity-0 translate-y-20'}`}
    >
      <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-[#38BDF8] shadow-md" />
      <div className="text-center">
        <h3 className="text-xl font-bold text-[#F8FAFC]">{name}</h3>
        <p className="text-sm font-semibold text-[#38BDF8] mb-2">{position}</p>
        <p className="text-[#CBD5E1] text-sm mb-4">{bio}</p>
        <div className="flex justify-center space-x-4">
          <a href={social.linkedin} className="text-[#CBD5E1] hover:text-[#38BDF8] transition-colors"><icons.LinkedinIcon /></a>
          <a href={social.twitter} className="text-[#CBD5E1] hover:text-[#38BDF8] transition-colors"><icons.TwitterIcon /></a>
          <a href={social.github} className="text-[#CBD5E1] hover:text-[#38BDF8] transition-colors"><icons.GithubIcon /></a>
        </div>
      </div>
    </div>
  );
};

// Back to top button component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-[#38BDF8] text-[#0F172A] shadow-lg transition-all duration-300 z-50 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      aria-label="Back to top"
    >
      <icons.ChevronUp />
    </button>
  );
};

const TeamPage = () => (
  <div className="py-20 px-4 md:px-8 lg:px-16 bg-[#0F172A] text-[#CBD5E1]">
    <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] text-center mb-12">Meet the Team</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {pageData.Team.members.map((member, index) => (
        <TeamCard key={index} {...member} />
      ))}
    </div>
  </div>
);

const JoinUsPage = () => (
  <div className="py-20 px-4 md:px-8 lg:px-16 bg-[#0F172A] text-[#CBD5E1] min-h-screen flex items-center justify-center">
    <div className="bg-[#1E293B] p-8 md:p-16 rounded-2xl shadow-lg text-center max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">{pageData.JoinUs.title}</h1>
      <p className="text-lg md:text-xl text-[#CBD5E1] mb-8">{pageData.JoinUs.subtitle}</p>
      <a
        href="https://t.me/focalclub2024" 
        className="px-8 py-4 text-lg font-semibold rounded-full bg-[#38BDF8] text-[#0F172A] transition-transform transform hover:scale-105 hover:bg-[#60A5FA] focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-opacity-50 inline-flex items-center space-x-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <icons.TelegramIcon className="w-6 h-6" />
        <span>{pageData.JoinUs.cta}</span>
      </a>
    </div>
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all fields.');
      return;
    }
    console.log('Form Submitted:', formData);
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-20 px-4 md:px-8 lg:px-16 bg-[#0F172A] text-[#CBD5E1]">
      <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] text-center mb-12">Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="bg-[#1E293B] p-8 rounded-2xl shadow-lg tilt-card">
          <h2 className="text-3xl font-semibold text-[#F8FAFC] mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 rounded-xl bg-[#0F172A] border border-[#38BDF8] text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 rounded-xl bg-[#0F172A] border border-[#38BDF8] text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full p-3 rounded-xl bg-[#0F172A] border border-[#38BDF8] text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-3 text-lg font-semibold rounded-full bg-[#38BDF8] text-[#0F172A] transition-transform transform hover:scale-105 hover:bg-[#60A5FA] focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-opacity-50">Submit</button>
            {status && <p className="mt-4 text-center text-[#38BDF8]">{status}</p>}
          </form>
        </div>
        <div className="bg-[#1E293B] p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold text-[#F8FAFC] mb-4">Our Information</h2>
          <div className="space-y-4">
            <p className="flex items-center text-lg"><icons.MailIcon className="w-6 h-6 mr-3 text-[#38BDF8]" /><a href={`mailto:${pageData.Contact.info.email}`} className="hover:underline">{pageData.Contact.info.email}</a></p>
            <p className="flex items-center text-lg"><icons.PhoneIcon className="w-6 h-6 mr-3 text-[#38BDF8]" />{pageData.Contact.info.phone}</p>
            <p className="flex items-center text-lg"><icons.LocationIcon className="w-6 h-6 mr-3 text-[#38BDF8]" />{pageData.Contact.info.location}</p>
          </div>
          <div className="flex space-x-6 mt-8">
            <a href="#" className="text-[#CBD5E1] hover:text-[#38BDF8] transition-colors"><icons.FacebookIcon /></a>
            <a href="#" className="text-[#CBD5E1] hover:text-[#38BDF8] transition-colors"><icons.TelegramIcon /></a>
            <a href="#" className="text-[#CBD5E1] hover:text-[#38BDF8] transition-colors"><icons.LinkedinIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
};


// Main App component
const App = () => {
  const [currentPage, setCurrentPage] = useState(window.location.hash.slice(1) || 'Home');
  const [pageTransition, setPageTransition] = useState('page-enter');

  useEffect(() => {
    const handleHashChange = () => {
      const newPage = window.location.hash.slice(1) || 'Home';
      setPageTransition('page-exit');
      setTimeout(() => {
        setCurrentPage(newPage);
        setPageTransition('page-enter');
      }, 500); // Wait for exit animation
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page) => {
    window.location.hash = page;
  };

  const PageComponent = () => {
    switch(currentPage) {
      case 'Home': return <HomePage />;
      case 'About': return <AboutPage />;
      case 'Accomplishments': return <AccomplishmentsPage />;
      case 'Team': return <TeamPage />;
      case 'JoinUs': return <JoinUsPage />;
      case 'Contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
          body { font-family: 'Inter', sans-serif; background-color: #0F172A; }
          html { scroll-behavior: smooth; }
        `}
      </style>
      <div className="min-h-screen bg-[#0F172A] text-[#CBD5E1] transition-all duration-300">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-[#0F172A] bg-opacity-90 backdrop-blur-md shadow-lg rounded-b-2xl mb-8 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-[#F8FAFC] flex items-center gap-5px "> <img width="50" src={focalLogo} alt="" /> <span className='size-6 m-5'> FOCAL</span></span>
              </div>
              <div className="hidden md:flex space-x-8">
                {Object.keys(pageData).map(item => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`text-lg font-medium transition-colors hover:text-[#38BDF8] focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-offset-2 focus:ring-offset-[#0F172A] ${currentPage === item ? 'text-[#38BDF8]' : 'text-[#CBD5E1]'}`}
                  >
                    {item}
                  </a>
                ))}
              </div>
              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => {
                    const mobileMenu = document.getElementById('mobile-menu');
                    mobileMenu.classList.toggle('hidden');
                  }}
                  className="inline-flex items-center justify-center p-2 rounded-md text-[#CBD5E1] hover:text-[#F8FAFC] hover:bg-[#1E293B] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#38BDF8]"
                >
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden hidden absolute w-full bg-[#0F172A] bg-opacity-90 backdrop-blur-md rounded-b-2xl shadow-lg" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {Object.keys(pageData).map(item => (
                <a key={item} href={`#${item}`} onClick={() => document.getElementById('mobile-menu').classList.add('hidden')} className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-[#1E293B] hover:text-[#38BDF8] ${currentPage === item ? 'text-[#38BDF8]' : 'text-[#CBD5E1]'}`}>{item}</a>
              ))}
            </div>
          </div>
        </nav>
        <main className={`transition-all duration-500 ${pageTransition === 'page-exit' ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'}`}>
          <PageComponent />
        </main>
        {/* Footer */}
        <footer className="bg-[#1E293B] text-[#CBD5E1] py-8 rounded-t-2xl mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 FOCAL Physics Club</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-[#CBD5E1] hover:text-[#38BDF8] transition-colors"><icons.FacebookIcon /></a>
              <a href="#" className="text-[#CBD5E1] hover:text-[#38BDF8] transition-colors"><icons.TelegramIcon /></a>
              <a href="#" className="text-[#CBD5E1] hover:text-[#38BDF8] transition-colors"><icons.LinkedinIcon /></a>
            </div>
          </div>
        </footer>
        <BackToTopButton />
      </div>
    </>
  );
};

export default App;
