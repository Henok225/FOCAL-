import React, { useState, useEffect, useRef } from 'react';
import { CalendarCheck, Facebook, GithubIcon, Lightbulb, Linkedin, Mail, MapPin, PersonStandingIcon, Phone, Send, Sparkles, TelescopeIcon, TwitterIcon,  } from 'lucide-react';


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

const Card = ({ title, description, icon, image, className }) => {
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
    
    const IconComponent = icon ? icons[icon] : null;
  
    return (
      <div
        ref={cardRef}
        className={`bg-[#1E293B] p-8 rounded-2xl shadow-lg tilt-card transform transition-all duration-700 ease-out-back ${className || ''} ${isVisible ? 'animate-in-from-bottom' : 'opacity-0 translate-y-20'}`}
      >
        {IconComponent && <IconComponent className="w-12 h-12 text-[#38BDF8] mb-4 transition-transform duration-300 hover:rotate-[360deg]" />}
        {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl mb-4" />}
        <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">{title}</h3>
        <p className="text-[#CBD5E1] mt-2">{description}</p>
      </div>
    );
  };

    export default Card;