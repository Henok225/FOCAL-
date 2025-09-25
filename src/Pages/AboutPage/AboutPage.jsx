import Accordion from '../../Components/Accordion/Accordion';
import { pageData } from '../../PageData/PageData';
import { useState } from 'react';
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

const AboutPage = () => (
    <div className="py-20 px-4 md:px-8 lg:px-16 bg-[#0F172A] text-[#CBD5E1]">
      <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] text-center mb-12 animate-fadeIn animate-delay-200">About FOCAL</h1>
      <div className="max-w-4xl mx-auto space-y-16">
        <section className="animate-in-from-bottom">
          <h2 className="text-3xl font-semibold text-[#F8FAFC] mb-4">{pageData.About.sections[0].title}</h2>
          <p className="text-lg">{pageData.About.sections[0].text}</p>
        </section>
        <section className="bg-[#1E293B] p-8 rounded-2xl shadow-lg animate-in-from-bottom animate-delay-100">
          <h2 className="text-3xl font-semibold text-[#F8FAFC] mb-4">{pageData.About.sections[1].title}</h2>
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-bold text-[#38BDF8]">Mission:</span> {pageData.About.sections[1].mission}
            </p>
            <p className="text-lg">
              <span className="font-bold text-[#38BDF8]">Vision:</span> {pageData.About.sections[1].vision}
            </p>
          </div>
        </section>
        <section className="animate-in-from-bottom animate-delay-200">
          <h2 className="text-3xl font-semibold text-[#F8FAFC] mb-4">{pageData.About.sections[2].title}</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {pageData.About.sections[2].list.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </section>
        <section className="animate-in-from-bottom animate-delay-300">
          <h2 className="text-3xl font-semibold text-[#F8FAFC] text-center mb-6">Frequently Asked Questions</h2>
          <div className="bg-[#1E293B] p-8 rounded-2xl shadow-lg">
            {pageData.About.faq.map((item, index) => (
              <Accordion key={index} title={item.question} content={item.answer} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );

    export default AboutPage;