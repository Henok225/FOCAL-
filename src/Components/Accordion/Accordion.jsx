import React, { useState } from 'react';
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

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border-b border-[#38BDF8]/30">
        <button
          className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lg font-semibold text-[#F8FAFC]">{title}</span>
          {isOpen ? <icons.ChevronUp className="w-6 h-6 text-[#38BDF8] transition-transform duration-300" /> : <icons.ChevronDown className="w-6 h-6 text-[#38BDF8] transition-transform duration-300" />}
        </button>
        <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="pb-4 text-[#CBD5E1] pr-6">{content}</div>
        </div>
      </div>
    );
  };
  
  export default Accordion;