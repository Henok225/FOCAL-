import React from 'react';
// import * as icons from 'react-feather';
import { CalendarCheck, Facebook, GithubIcon, Lightbulb, Linkedin, Mail, MapPin, PersonStandingIcon, Phone, Send, Sparkles, TelescopeIcon, TwitterIcon,  } from 'lucide-react';
import { pageData } from '../../PageData/PageData';
import Card from '../../Components/Card/Card';

// A simple starfield background animation
const HeroBackground = () => (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="particles"></div>
        <div className="particles-overlay"></div>
      </div>
      <style>
        {`
          @keyframes float {
            0% { transform: translate(0, 0); }
            50% { transform: translate(20px, 30px); }
            100% { transform: translate(0, 0); }
          }
          .particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: radial-gradient(#38BDF8 1px, transparent 1px);
            background-size: 20px 20px;
            opacity: 0.2;
            animation: float 20s linear infinite;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }
          @keyframes slideInFromBottom {
            0% { opacity: 0; transform: translateY(50px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-in-from-bottom {
            animation: slideInFromBottom 0.8s ease-out forwards;
          }
          .page-enter {
            opacity: 0;
            transform: translateY(20px);
          }
          .page-enter-active {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
          }
          .tilt-card {
            transform-style: preserve-3d;
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          .tilt-card:hover {
            transform: rotateY(5deg) rotateX(5deg) scale(1.05);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          }
          .transition-max-height {
            transition: max-height 0.5s ease-in-out;
          }
        `}
      </style>
    </>
  );

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
  

const HomePage = () => (
    <>
      <section id="hero" className="relative w-full min-h-screen flex items-center justify-center text-center p-8 bg-[#0F172A] text-white">
        <HeroBackground />
        <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
          <div className="animate-fadeIn animate-delay-200">
            <icons.TelescopeIcon className="mx-auto w-16 h-16 text-[#38BDF8] animate-pulse" />
          </div>
          <div className="animate-fadeIn animate-delay-400">
            <h1 className="text-4xl md:text-6xl font-bold text-[#F8FAFC]">{pageData.Home.hero.title}</h1>
          </div>
          <div className="animate-fadeIn animate-delay-600">
            <p className="text-lg md:text-xl text-[#CBD5E1] font-light">{pageData.Home.hero.subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8 animate-fadeIn animate-delay-800">
            <a href="#About" className="px-8 py-3 text-lg font-semibold rounded-full bg-[#38BDF8] text-[#0F172A] transition-transform transform hover:scale-105 hover:bg-[#60A5FA] focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-opacity-50 motion-safe:animate-pulse">Learn More</a>
            <a href="#Contact" className="px-8 py-3 text-lg font-semibold rounded-full border-2 border-[#38BDF8] text-[#F8FAFC] transition-transform transform hover:scale-105 hover:bg-[#38BDF8] hover:text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-opacity-50 motion-safe:animate-pulse">Contact Us</a>
          </div>
        </div>
      </section>
      <section id="values" className="py-20 px-4 md:px-8 lg:px-16 bg-[#1E293B]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pageData.Home.values.map((value, index) => (
            <Card key={index} {...value} />
          ))}
        </div>
      </section>
      <section id="events" className="py-20 px-4 md:px-8 lg:px-16 bg-[#0F172A] text-[#CBD5E1]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] text-center mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pageData.Home.events.map((event, index) => (
            <div key={index} className="bg-[#1E293B] p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-3">
                <icons.CalendarCheck className="w-8 h-8 text-[#38BDF8] mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-[#F8FAFC]">{event.title}</h4>
                  <p className="text-sm text-[#CBD5E1]">{event.date}</p>
                </div>
              </div>
              <p className="text-sm text-[#CBD5E1]">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  export default HomePage;