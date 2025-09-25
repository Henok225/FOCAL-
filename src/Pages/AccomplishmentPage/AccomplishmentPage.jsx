
import React, { useState } from 'react';
import { CalendarCheck, Facebook, GithubIcon, Lightbulb, Linkedin, Mail, MapPin, PersonStandingIcon, Phone, Send, Sparkles, TelescopeIcon, TwitterIcon,  } from 'lucide-react';
import { pageData } from '../../PageData/PageData';
import Card from '../../Components/Card/Card';
import Lightbox from '../../Components/LightBox/LightBox';


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

const AccomplishmentsPage = () => {
    const [lightboxImage, setLightboxImage] = useState(null);
    return (
      <div className="py-20 px-4 md:px-8 lg:px-16 bg-[#0F172A] text-[#CBD5E1]">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] text-center mb-12">Our Accomplishments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pageData.Accomplishments.items.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        <section className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] text-center mb-12">Photo Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {pageData.Accomplishments.galleryImages.map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => setLightboxImage(image)}>
                <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
        </section>
        <Lightbox imageUrl={lightboxImage} onClose={() => setLightboxImage(null)} />
      </div>
    );
  };

    export default AccomplishmentsPage;